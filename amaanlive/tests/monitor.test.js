'use strict';
/*
 * اختبارات المراقبة الدورية وإعادة التشغيل التلقائي لعمليات FFmpeg.
 *
 * نستبدل ffmpeg بسكربت وهمي (shell) يكتب قائمة تشغيل HLS ثم يتعطّل أو يتجمّد، ونتحقق
 * أن القناة تُعاد فعلاً: عملية جديدة، وعدّاد إعادات صحيح، وسبب واضح في سجل القناة.
 * لا يُلمس إعداد المستخدم: كل التعديلات في الذاكرة (store.save معطّلة)، والـ HLS في مجلد مؤقت.
 * السكربت الوهمي POSIX، فيُتخطّى الاختبار على Windows — أما اختبار ffmpeg الحقيقي فعبر /api/devices/test.
 */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const store = require('../src/store');
const ffmpeg = require('../src/ffmpeg');
const monitor = require('../src/monitor');

const SKIP = process.platform === 'win32';
const CHANNEL_ID = 'ch_monitor_test';
const SOURCE_ID = 'src_monitor_test';

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

function alive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * سكربت وهمي مكان ffmpeg: يكتب قائمة التشغيل (آخر وسيط في سطر الأمر) ثم:
 *   crash   = يعمل ثوانٍ ثم يتعطّل برمز خروج
 *   stall   = يكتب القائمة مرة واحدة ثم يتجمّد بلا تحديث
 *   healthy = يُحدّث القائمة باستمرار (تشغيل سليم)
 */
function fakeFfmpeg(dir, behaviour) {
  const file = path.join(dir, 'fake-ffmpeg.sh');
  const write = 'out=""; for a in "$@"; do out="$a"; done; ' +
    'printf \'#EXTM3U\\n#EXT-X-VERSION:3\\n#EXTINF:2.0,\\nseg_00000.ts\\n\' > "$out"';
  const body = behaviour === 'crash'
    ? 'sleep 0.3; exit 7'
    : behaviour === 'stall'
      ? write + '; exec sleep 300'
      : write + '; while true; do touch "$out"; sleep 0.2; done';
  fs.writeFileSync(file, '#!/bin/sh\n' + body + '\n', 'utf8');
  fs.chmodSync(file, 0o755);
  return file;
}

/** قناة اختبار بمصدر «التقاط شاشة» (لا يحتاج جهازاً حقيقياً) وإعدادات زمنية سريعة. */
function setup(behaviour) {
  store.load();
  store.save = () => true; // لا نكتب أي شيء في config/config.json
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'amaan-monitor-'));
  const data = store.get();

  data.sources.push({
    id: SOURCE_ID, name: 'شاشة اختبار', type: 'screen', videoDevice: '', audioDevice: '',
    videoSize: '320x240', fps: 5, pixelFormat: '', vcodec: '', captureSafeMode: false, notes: '', createdAt: Date.now()
  });
  data.channels.push({
    id: CHANNEL_ID, name: 'قناة اختبار المراقبة', sourceId: SOURCE_ID, category: 'عام', cover: '', sort: 0,
    enabled: true, autoStart: false, manualStopped: false, quality: 'copy', fps: null, threads: null,
    schedule: { enabled: false, days: [], from: '08:00', to: '23:59' }, createdAt: Date.now()
  });
  Object.assign(data.settings, {
    ffmpegPath: fakeFfmpeg(dir, behaviour),
    hlsRoot: path.join(dir, 'hls'),
    hlsTime: 1,
    hlsListSize: 3,
    restartBackoffMs: 1000,
    maxRestarts: 3,
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

test('حدّ التجمّد يُشتق من مدة المقطع (خمسة أضعافها بحدّ أدنى ١٠ ثوانٍ)', () => {
  assert.strictEqual(monitor.stallMsFor({ hlsTime: 2 }), 10000);
  assert.strictEqual(monitor.stallMsFor({ hlsTime: 10 }), 50000);
  assert.strictEqual(monitor.stallMsFor({}), 10000);
});

test('تعطّل ffmpeg أثناء البث: تُعاد القناة تلقائياً بعملية جديدة', { skip: SKIP }, async () => {
  const dir = setup('crash');
  try {
    const first = await ffmpeg.start(CHANNEL_ID);
    const firstPid = first.pid;
    // start() يعود بعد spawn مباشرة وحدث «spawn» هو ما ينقل الحالة إلى running
    const isRunning = await until(() => ffmpeg.statusOf(CHANNEL_ID).state === 'running', 2000);
    assert.ok(isRunning, 'لم تدخل القناة حالة التشغيل');

    const restarted = await until(() => {
      const st = ffmpeg.statusOf(CHANNEL_ID);
      return st.state === 'running' && st.pid && st.pid !== firstPid;
    }, 8000);
    assert.ok(restarted, 'لم تُعد القناة التشغيل بعد التعطّل');

    const st = ffmpeg.statusOf(CHANNEL_ID);
    assert.ok(st.restarts >= 1, 'عدّاد الإعادات لم يزد');
    assert.match(ffmpeg.readLog(CHANNEL_ID), /إعادة تشغيل/);
    assert.strictEqual(alive(firstPid), false, 'عملية ffmpeg القديمة ما زالت حيّة');
  } finally {
    await teardown(dir);
  }
});

test('تجمّد ffmpeg (قائمة HLS لا تُحدَّث): المراقب ينهي العملية ويعيد التشغيل', { skip: SKIP }, async () => {
  const dir = setup('stall');
  try {
    const first = await ffmpeg.start(CHANNEL_ID);
    const firstPid = first.pid;
    await until(() => ffmpeg.health(CHANNEL_ID).playlistAgeMs !== null, 3000);
    await wait(500);

    await monitor.tick({ stallMs: 400 });
    const revived = await until(() => {
      const h = ffmpeg.health(CHANNEL_ID);
      return h.state === 'running' && h.pid && h.pid !== firstPid;
    }, 8000);

    assert.ok(revived, 'لم يُعِد المراقب تشغيل القناة المتجمّدة');
    assert.strictEqual(alive(firstPid), false, 'لم تُنهَ عملية ffmpeg المتجمّدة');
    assert.ok(ffmpeg.statusOf(CHANNEL_ID).restarts >= 1, 'عدّاد الإعادات لم يزد');
    assert.match(ffmpeg.readLog(CHANNEL_ID), /تجمّد مخرجات HLS/);
  } finally {
    await teardown(dir);
  }
});

test('قناة سليمة تُحدّث قائمتها: المراقب لا يمسّها', { skip: SKIP }, async () => {
  const dir = setup('healthy');
  try {
    const first = await ffmpeg.start(CHANNEL_ID);
    await wait(1000);
    await monitor.tick({ stallMs: 400 });

    const h = ffmpeg.health(CHANNEL_ID);
    assert.strictEqual(h.state, 'running');
    assert.strictEqual(h.pid, first.pid, 'تغيّرت العملية بلا سبب');
    assert.strictEqual(h.restarts, 0, 'سُجّلت إعادة تشغيل بلا سبب');
  } finally {
    await teardown(dir);
  }
});

test('قناة متوقفة: المراقب لا يشغّلها من تلقاء نفسه', { skip: SKIP }, async () => {
  const dir = setup('stall');
  try {
    await monitor.tick({ stallMs: 400 });
    const st = ffmpeg.statusOf(CHANNEL_ID);
    assert.strictEqual(st.state, 'stopped');
    assert.strictEqual(st.pid, null);
  } finally {
    await teardown(dir);
  }
});

test('إعداد «إعادة التشغيل التلقائي عند التعطل» معطّل: لا إعادة تشغيل عند التجمّد', { skip: SKIP }, async () => {
  const dir = setup('stall');
  try {
    const first = await ffmpeg.start(CHANNEL_ID);
    store.get().settings.autoRestartCrashed = false;
    await wait(800);

    await monitor.tick({ stallMs: 400 });
    const h = ffmpeg.health(CHANNEL_ID);
    assert.strictEqual(h.pid, first.pid, 'أُعيد التشغيل رغم تعطيل الإعداد');
    assert.strictEqual(h.restarts, 0);
  } finally {
    await teardown(dir);
  }
});
