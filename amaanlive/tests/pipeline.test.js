'use strict';
/*
 * اختبارات بناء وسائط FFmpeg: فرع DirectShow (Windows) وفرع v4l2 (Linux)،
 * إخراج HLS، والشعار المائي. لا تشغّل ffmpeg — تتحقق من الأمر المُبنى نفسه.
 */

const test = require('node:test');
const assert = require('node:assert');
const ffmpeg = require('../src/ffmpeg');
const store = require('../src/store');

// الإعدادات تُقرأ من config/config.json: نحفظ نسخة الذاكرة ونعيد قيم المستخدم كما كانت،
// ونمنع أي كتابة في ملفه (store.save معطّلة) — نفس ما يفعله اختبار المراقبة.
store.load();
store.save = () => true;
const USB_SOURCE = {
  type: 'usb',
  videoDevice: 'USB Video',
  audioDevice: 'USB Audio',
  videoSize: '1280x720',
  fps: 30,
  pixelFormat: 'mjpeg',
  captureSafeMode: false
};

test('وسائط الإدخال على Windows: dshow مع الحجم والمعدل والصيغة', () => {
  const args = ffmpeg.buildInputArgs(USB_SOURCE, 'win32');
  assert.deepStrictEqual(args, [
    '-f', 'dshow', '-rtbufsize', '256M', '-thread_queue_size', '1024',
    '-pixel_format', 'mjpeg',
    '-video_size', '1280x720',
    '-framerate', '30',
    '-i', 'video=USB Video:audio=USB Audio'
  ]);
});

test('وضع الالتقاط الآمن: لا يفرض الدقة ولا المعدل', () => {
  const args = ffmpeg.buildInputArgs(Object.assign({}, USB_SOURCE, { captureSafeMode: true }), 'win32');
  assert.ok(!args.includes('-video_size'));
  assert.ok(!args.includes('-framerate'));
  assert.ok(args.includes('-pixel_format'));
});

test('بلا جهاز صوت: الإدخال فيديو فقط', () => {
  const args = ffmpeg.buildInputArgs(Object.assign({}, USB_SOURCE, { audioDevice: '' }), 'win32');
  assert.strictEqual(args[args.length - 1], 'video=USB Video');
});

test('وسائط الإدخال على Linux: v4l2', () => {
  const args = ffmpeg.buildInputArgs(Object.assign({}, USB_SOURCE, { videoDevice: '/dev/video0' }), 'linux');
  assert.deepStrictEqual(args, [
    '-f', 'v4l2', '-thread_queue_size', '1024',
    '-input_format', 'mjpeg',
    '-video_size', '1280x720',
    '-framerate', '30',
    '-i', '/dev/video0',
    '-f', 'alsa', '-i', 'USB Audio'
  ]);
});

test('مصدر الشاشة: gdigrab على Windows و x11grab على Linux', () => {
  const screen = { type: 'screen', videoSize: '1280x720', fps: 15, audioDevice: '' };
  assert.deepStrictEqual(ffmpeg.buildInputArgs(screen, 'win32'), [
    '-f', 'gdigrab', '-framerate', '15', '-video_size', '1280x720', '-i', 'desktop'
  ]);
  assert.deepStrictEqual(ffmpeg.buildInputArgs(screen, 'linux'), [
    '-f', 'x11grab', '-framerate', '15', '-video_size', '1280x720', '-i', process.env.DISPLAY || ':0'
  ]);
});

test('إخراج HLS: تقسيم مقاطع وقائمة تشغيل في مجلد القناة', () => {
  const channel = { id: 'ch_1', quality: '360p', fps: 25 };
  const args = ffmpeg.buildOutputArgs(channel, USB_SOURCE, '/tmp/hls/ch_1', null);
  const joined = args.join(' ');
  assert.ok(joined.includes('-f hls'));
  assert.ok(joined.includes('-c:v libx264'));
  assert.ok(joined.includes('-vf scale=-2:360'));
  assert.ok(joined.includes('-hls_segment_filename /tmp/hls/ch_1/seg_%05d.ts'));
  assert.ok(joined.endsWith('/tmp/hls/ch_1/index.m3u8'));
  assert.ok(joined.includes('independent_segments'));
});

test('نسخ المصدر (copy) بلا ترميز', () => {
  const args = ffmpeg.buildOutputArgs({ id: 'ch_2', quality: 'copy' }, USB_SOURCE, '/tmp/hls/ch_2', null);
  assert.ok(args.join(' ').includes('-c:v copy'));
  assert.ok(!args.join(' ').includes('libx264'));
});

test('الشعار المائي: مرشّح overlay مع الإدخال الثاني', () => {
  const args = ffmpeg.buildOutputArgs({ id: 'ch_3', quality: '480p' }, USB_SOURCE, '/tmp/hls/ch_3', '/tmp/logo.png');
  const joined = args.join(' ');
  assert.ok(joined.includes('-filter_complex'));
  assert.ok(joined.includes('[0:v][wm]overlay=W-w-20:20:format=auto[v]'));
  assert.ok(joined.includes('-map [v]'));
  assert.ok(joined.includes('-map 0:a?'));
  assert.ok(!joined.includes('-c:v copy'), 'الشعار يفرض الترميز');
});

/** تشغيل مقطع بضبط قيمة إعداد في الذاكرة ثم إعادتها كما كانت (بلا كتابة في ملف المستخدم). */
function withSetting(key, value, run) {
  const settings = store.get().settings;
  const before = settings[key];
  settings[key] = value;
  try {
    return run();
  } finally {
    settings[key] = before;
  }
}

test('وضع الجودة معطّل (البث المباشر): zerolatency والمخزن يساوي معدل البت', () => {
  const joined = withSetting('x264QualityMode', false, () =>
    ffmpeg.buildOutputArgs({ id: 'ch_q1', quality: '480p' }, USB_SOURCE, '/tmp/hls/ch_q1', null).join(' '));
  assert.ok(joined.includes('-tune zerolatency'), 'البث المباشر يحتاج أقل تأخير');
  assert.ok(joined.includes('-b:v 1400k -maxrate 1400k -bufsize 1400k'), 'المخزن في الوضع السريع يساوي معدل البت');
});

test('وضع الجودة مفعّل: بلا zerolatency مع مخزن مضاعف', () => {
  const joined = withSetting('x264QualityMode', true, () =>
    ffmpeg.buildOutputArgs({ id: 'ch_q2', quality: '480p' }, USB_SOURCE, '/tmp/hls/ch_q2', null).join(' '));
  assert.ok(!joined.includes('zerolatency'), 'وضع الجودة يرفع التأخير مقابل الجودة');
  assert.ok(joined.includes('-b:v 1400k -maxrate 1400k -bufsize 2800k'), 'المخزن يتضاعف في وضع الجودة');
});

test('وضع الجودة لا يمسّ نسخ المصدر (copy)', () => {
  const joined = withSetting('x264QualityMode', true, () =>
    ffmpeg.buildOutputArgs({ id: 'ch_q3', quality: 'copy' }, USB_SOURCE, '/tmp/hls/ch_q3', null).join(' '));
  assert.ok(joined.includes('-c:v copy'));
  assert.ok(!joined.includes('bufsize'));
});
