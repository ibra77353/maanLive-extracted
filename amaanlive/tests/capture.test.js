'use strict';
/*
 * اختبارات فتح جهاز الالتقاط قبل تشغيل القناة.
 *
 * نستبدل ffmpeg بسكربت وهمي يرفض أي إدخال صوتي (كما تفعل أجهزة كثيرة تُرجع «I/O error»
 * عندما يكون جهاز الصوت مشغولاً أو اسمه غير مطابق) وينجح في غيره، ثم نتحقق أن القناة
 * تُشغَّل فعلاً من الفيديو وحده وأن السبب مكتوب في سجل القناة.
 * لا يُلمس إعداد المستخدم: كل التعديلات في الذاكرة (store.save معطّلة) والـ HLS في مجلد مؤقت.
 * السكربت الوهمي POSIX، فيُتخطّى الاختبار على Windows.
 */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const store = require('../src/store');
const ffmpeg = require('../src/ffmpeg');
const devices = require('../src/devices');

const SKIP = process.platform === 'win32';
const CHANNEL_ID = 'ch_capture_test';
const SOURCE_ID = 'src_capture_test';
/** الاسم البديل (moniker) كما يُحفظ في إعدادات قديمة — DirectShow لا يفتح الجهاز به. */
const MONIKER = '@device_pnp_\\?\\usb#vid_04f2&pid_b5ab&mi_00#6&a75f7db&0&0000#{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** انتظار شرط حتى مهلة محددة (نتفادى النوم الثابت). */
async function until(condition, timeoutMs) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    if (condition()) return true;
    await wait(50);
  }
  return false;
}

const PLAYLIST = 'printf \'#EXTM3U\\n#EXT-X-VERSION:3\\n#EXTINF:2.0,\\nseg_00000.ts\\n\' > "$out"';

/**
 * سكربت وهمي مكان ffmpeg.
 *   no-audio        = يفشل إن طُلب إدخال صوتي، وينجح في غيره. مثل ffmpeg الحقيقي: يخرج سريعاً
 *                     في تجربة الالتقاط (`-t … -f null -`)، ويستمر في البث (`… .m3u8`).
 *   reject-moniker  = يفشل إن ورد الاسم البديل (@device_…) في أي وسيط (ما يفعله dshow تماماً).
 *   reject-old-name = يفشل إن ورد اسم الجهاز المحفوظ القديم، وينجح بغيره.
 *   always-fail     = يفشل دائماً برسالة ffmpeg نفسها «I/O error».
 */
const REJECT = {
  'no-audio': '*audio=*|*alsa*',
  'reject-moniker': '*@device_*',
  'reject-old-name': '*OldCam*'
};

function fakeFfmpeg(dir, behaviour) {
  const file = path.join(dir, 'fake-ffmpeg.sh');
  const head = 'out=""; for a in "$@"; do out="$a"; done; ';
  let body = 'echo "Error opening input files: I/O error" >&2; exit 1';
  if (REJECT[behaviour]) {
    body = head +
      'case "$(printf \'%s \' "$@")" in ' + REJECT[behaviour] + ') echo "Error opening input files: I/O error" >&2; exit 1;; esac; ' +
      'case "$out" in *.m3u8) ' + PLAYLIST + '; while true; do sleep 0.5; done;; esac; ' +
      'exit 0';
  }
  fs.writeFileSync(file, '#!/bin/sh\n' + body + '\n', 'utf8');
  fs.chmodSync(file, 0o755);
  return file;
}

/** قناة بمصدر التقاط «USB» له جهاز فيديو وصوت — أي احتمالان على الأقل عند الفتح.
 *  opts.moniker = المصدر يحمل اسماً بديلاً قديماً، opts.device = اسم محفوظ لم يعد موجوداً. */
function setup(behaviour, opts) {
  opts = opts || {};
  store.load();
  store.save = () => true; // لا نكتب أي شيء في config/config.json
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'amaan-capture-'));
  const data = store.get();

  data.sources.push({
    id: SOURCE_ID, name: 'بطاقة اختبار', type: 'usb',
    videoDevice: opts.moniker ? MONIKER : (opts.device || '/dev/video0'),
    audioDevice: 'USB Audio', videoSize: '', fps: null, pixelFormat: '', vcodec: '',
    captureSafeMode: false, notes: '', createdAt: Date.now()
  });
  data.channels.push({
    id: CHANNEL_ID, name: 'قناة اختبار الالتقاط', sourceId: SOURCE_ID, category: 'عام', cover: '', sort: 0,
    enabled: true, autoStart: false, manualStopped: false, quality: '480p', fps: null, threads: null,
    schedule: { enabled: false, days: [], from: '08:00', to: '23:59' }, createdAt: Date.now()
  });
  Object.assign(data.settings, {
    ffmpegPath: fakeFfmpeg(dir, behaviour),
    hlsRoot: path.join(dir, 'hls'),
    hlsTime: 1,
    hlsListSize: 3,
    restartBackoffMs: 1000,
    maxRestarts: 2,
    autoRestartCrashed: true
  });

  // جهاز فيديو مكتشف الآن: اسمه المعروض «USB Video» واسمه البديل هو MONIKER.
  if (opts.moniker || opts.device) {
    devices.list().devices.push({
      key: 'video:USB Video', name: 'USB Video', altName: MONIKER, kind: 'video', present: true, caps: {}
    });
  }

  return dir;
}

async function teardown(dir) {
  await ffmpeg.stopAll('test');
  const data = store.get();
  data.sources = data.sources.filter((s) => s.id !== SOURCE_ID);
  data.channels = data.channels.filter((c) => c.id !== CHANNEL_ID);
  const devs = devices.list().devices;
  for (let i = devs.length - 1; i >= 0; i--) if (devs[i].key === 'video:USB Video') devs.splice(i, 1);
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch (e) {
    /* تجاهل */
  }
  try {
    fs.rmSync(store.channelLogPath(CHANNEL_ID), { force: true });
  } catch (e) {
    /* تجاهل */
  }
}

test('الجهاز الذي يرفض الصوت: القناة تُشغَّل من الفيديو وحده بلا إعادات فاشلة', { skip: SKIP }, async () => {
  const dir = setup('no-audio');
  try {
    await ffmpeg.start(CHANNEL_ID);

    const running = await until(() => ffmpeg.statusOf(CHANNEL_ID).state === 'running', 5000);
    assert.ok(running, 'لم تُشغَّل القناة من الفيديو وحده');
    assert.ok(await until(() => ffmpeg.health(CHANNEL_ID).playlistAgeMs !== null, 3000),
      'لا قائمة تشغيل — الالتقاط لم يبدأ فعلاً');

    const log = ffmpeg.readLog(CHANNEL_ID);
    assert.match(log, /الالتقاط بـ«فيديو فقط بلا صوت»/, 'لم يُبيَّن سبب تغيير الإعدادات في السجل');
    assert.ok(!/alsa/.test(log), 'سطر الأمر ما زال يحتوي إدخال الصوت');
    assert.strictEqual(ffmpeg.statusOf(CHANNEL_ID).restarts, 0, 'حدثت إعادة تشغيل بلا سبب');
  } finally {
    await teardown(dir);
  }
});

test('جهاز لا يُفتح إطلاقاً: سبب مفهوم في حالة القناة بدل «I/O error» الخام', { skip: SKIP }, async () => {
  const dir = setup('always-fail');
  try {
    await ffmpeg.start(CHANNEL_ID);
    const explained = await until(() => /مشغول/.test(String(ffmpeg.statusOf(CHANNEL_ID).lastError || '')), 5000);
    assert.ok(explained, 'لم تُعرض الرسالة المفهومة: ' + ffmpeg.statusOf(CHANNEL_ID).lastError);
  } finally {
    await teardown(dir);
  }
});

test('الاسم البديل المحفوظ يُحوَّل إلى اسم الجهاز المكتشف (دالة نقية)', () => {
  const list = [
    { key: 'video:USB Video', name: 'USB Video', altName: MONIKER, kind: 'video', present: true },
    { key: 'video:قديم', name: 'قديم', altName: '@device_old', kind: 'video', present: false }
  ];
  assert.strictEqual(devices.resolveDeviceName(MONIKER, 'video', list), 'USB Video', 'لم يُحوَّل الاسم البديل');
  assert.strictEqual(devices.resolveDeviceName('USB Video', 'video', list), 'USB Video', 'تغيّر اسم صحيح');
  assert.strictEqual(devices.resolveDeviceName('مجهول', 'video', list), 'مجهول', 'تغيّرت قيمة بلا مطابقة');
  assert.strictEqual(devices.resolveDeviceName(MONIKER, 'video', []), MONIKER, 'تغيّرت قيمة بلا أجهزة');
  assert.strictEqual(devices.resolveDeviceName('', 'video', list), '', 'تغيّرت قيمة فارغة');
  // الجهاز المفصول: يُحوَّل إلى اسمه ليُبلَّغ «غير موصول» بدل «I/O error»
  assert.strictEqual(devices.resolveDeviceName('@device_old', 'video', list), 'قديم');
});

test('الاسم المحفوظ غير موجود: يُجرَّب جهاز مكتشف آخر بدل الفشل الدائم', { skip: SKIP }, async () => {
  const dir = setup('reject-old-name', { device: 'OldCam' });
  try {
    await ffmpeg.start(CHANNEL_ID);
    const running = await until(() => ffmpeg.statusOf(CHANNEL_ID).state === 'running', 5000);
    assert.ok(running, 'لم تُشغَّل القناة بجهاز مكتشف آخر');
    const log = ffmpeg.readLog(CHANNEL_ID);
    assert.match(log, /جهاز مكتشف آخر \(USB Video\)/, 'لم يُبيَّن الجهاز البديل في السجل');
    assert.ok(!/OldCam/.test(log), 'الاسم القديم وصل إلى ffmpeg');
  } finally {
    await teardown(dir);
  }
});

test('الاسم البديل في القناة: لا يصل الاسم الخام إلى ffmpeg إطلاقاً', { skip: SKIP }, async () => {
  const dir = setup('reject-moniker', { moniker: true });
  try {
    await ffmpeg.start(CHANNEL_ID);
    const running = await until(() => ffmpeg.statusOf(CHANNEL_ID).state === 'running', 5000);
    assert.ok(running, 'لم تُشغَّل القناة بعد تحويل الاسم البديل');
    assert.ok(await until(() => ffmpeg.health(CHANNEL_ID).playlistAgeMs !== null, 3000),
      'لا قائمة تشغيل — الالتقاط لم يبدأ فعلاً');

    const log = ffmpeg.readLog(CHANNEL_ID);
    assert.match(log, /الالتقاط بـ«الجهاز المكتشف بالاسم البديل»/, 'لم يُبيَّن تحويل الاسم البديل في السجل');
    assert.ok(!/@device_/.test(log), 'الاسم البديل الخام وصل إلى ffmpeg');
    assert.strictEqual(ffmpeg.statusOf(CHANNEL_ID).restarts, 0, 'حدثت إعادة تشغيل بلا سبب');
  } finally {
    await teardown(dir);
  }
});
