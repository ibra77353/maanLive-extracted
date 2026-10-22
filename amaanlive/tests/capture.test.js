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

const SKIP = process.platform === 'win32';
const CHANNEL_ID = 'ch_capture_test';
const SOURCE_ID = 'src_capture_test';

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
 *   no-audio    = يفشل إن طُلب إدخال صوتي، وينجح في غيره. مثل ffmpeg الحقيقي: يخرج سريعاً
 *                 في تجربة الالتقاط (`-t … -f null -`)، ويستمر في البث (`… .m3u8`).
 *   always-fail = يفشل دائماً برسالة ffmpeg نفسها «I/O error».
 */
function fakeFfmpeg(dir, behaviour) {
  const file = path.join(dir, 'fake-ffmpeg.sh');
  const head = 'out=""; for a in "$@"; do out="$a"; done; ';
  const body = behaviour === 'no-audio'
    ? head +
      'case "$(printf \'%s \' "$@")" in *audio=*|*alsa*) echo "Error opening input files: I/O error" >&2; exit 1;; esac; ' +
      'case "$out" in *.m3u8) ' + PLAYLIST + '; while true; do sleep 0.5; done;; esac; ' +
      'exit 0'
    : 'echo "Error opening input files: I/O error" >&2; exit 1';
  fs.writeFileSync(file, '#!/bin/sh\n' + body + '\n', 'utf8');
  fs.chmodSync(file, 0o755);
  return file;
}

/** قناة بمصدر التقاط «USB» له جهاز فيديو وصوت — أي احتمالان على الأقل عند الفتح. */
function setup(behaviour) {
  store.load();
  store.save = () => true; // لا نكتب أي شيء في config/config.json
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'amaan-capture-'));
  const data = store.get();

  data.sources.push({
    id: SOURCE_ID, name: 'بطاقة اختبار', type: 'usb', videoDevice: '/dev/video0',
    audioDevice: 'USB Audio', videoSize: '', fps: null, pixelFormat: '', vcodec: '',
    captureSafeMode: false, notes: '', createdAt: Date.now()
  });
  data.channels.push({
    id: CHANNEL_ID, name: 'قناة اختبار الالتقاط', sourceId: SOURCE_ID, category: 'عام', cover: '', sort: 0,
    enabled: true, autoStart: false, manualStopped: false, quality: 'copy', fps: null, threads: null,
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

  return dir;
}

async function teardown(dir) {
  await ffmpeg.stopAll('test');
  const data = store.get();
  data.sources = data.sources.filter((s) => s.id !== SOURCE_ID);
  data.channels = data.channels.filter((c) => c.id !== CHANNEL_ID);
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
