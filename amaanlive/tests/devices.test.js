'use strict';
/*
 * اختبارات قارئات مخرجات FFmpeg.
 *
 * ملاحظة أمانة: نصوص المخرجات أدناه «نماذج بالصيغة التي يطبعها ffmpeg فعلاً» (DirectShow/v4l2)،
 * لأن بيئة الفحص هذه (Linux في حاوية) لا تحتوي كاميرا USB. الغرض اختبار منطق التحليل
 * والقدرات المستخرجة منه، لا اختبار جهاز حقيقي — اختبار الجهاز الحقيقي عبر /api/devices/test.
 */

const test = require('node:test');
const assert = require('node:assert');
const devices = require('../src/devices');

const LIST_DEVICES = [
  '[dshow @ 000001d8f2a0] "USB Video" (video)',
  '[dshow @ 000001d8f2a0]   Alternative name "@device_pnp_\\\\?\\usb#vid_534d&pid_2109&mi_00#6&2298e36a&6&0000#{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global"',
  '[dshow @ 000001d8f2a0] "USB Audio" (audio)',
  '[dshow @ 000001d8f2a0]   Alternative name "@device_cm_{33D9A762-90C8-11D0-BD43-00A0C911CE86}\\wave_{4F86BB32}"'
].join('\n');

const VIDEO_OPTIONS = [
  '[dshow @ 000001d8f2a0] DirectShow video device options (from video devices)',
  '[dshow @ 000001d8f2a0]  Pin "Capture" (1):',
  '[dshow @ 000001d8f2a0]   pixel_format=yuyv422  min s=640x480 fps=5 max s=640x480 fps=30',
  '[dshow @ 000001d8f2a0]   pixel_format=mjpeg  min s=1280x720 fps=30 max s=1920x1080 fps=30',
  '[dshow @ 000001d8f2a0]  Pin "Capture" (2):',
  '[dshow @ 000001d8f2a0]   vcodec=mjpeg  min s=320x240 fps=30 max s=640x480 fps=60'
].join('\n');

const AUDIO_OPTIONS = [
  '[dshow @ 000001d8f2a0] DirectShow audio device options (from audio devices)',
  '[dshow @ 000001d8f2a0]  Pin "Capture" (1):',
  '[dshow @ 000001d8f2a0]   min ch=1 bits=16 rate=44100 max ch=2 bits=16 rate=48000'
].join('\n');

const V4L2 = [
  '[video4linux2,v4l2 @ 0x55] Raw : yuyv422 : YUYV 4:2:2 : 640x480 1280x720 1920x1080',
  '[video4linux2,v4l2 @ 0x55] Compressed: mjpeg : MJPEG : 1280x720'
].join('\n');

test('قراءة أجهزة DirectShow: يسمّي الأجهزة ويصنّفها ويربط الاسم البديل', () => {
  const list = devices.parseDshowDevices(LIST_DEVICES);
  assert.strictEqual(list.length, 2);
  assert.deepStrictEqual(list.map((d) => d.kind), ['video', 'audio']);
  assert.strictEqual(list[0].name, 'USB Video');
  assert.match(list[0].altName, /device_pnp_/);
  assert.match(list[1].altName, /device_cm_/);
});

test('قراءة خيارات جهاز فيديو: الصيغ والدقات ومعدلات الإطارات', () => {
  const formats = devices.parseDshowVideoOptions(VIDEO_OPTIONS);
  assert.strictEqual(formats.length, 3);
  assert.strictEqual(formats[0].pixelFormat, 'yuyv422');
  assert.strictEqual(formats[2].vcodec, 'mjpeg');

  const caps = devices.buildCaps(formats, []);
  assert.deepStrictEqual(caps.resolutions.sort(), ['1280x720', '1920x1080', '320x240', '640x480'].sort());
  assert.ok(caps.pixelFormats.includes('yuyv422'));
  assert.ok(caps.pixelFormats.includes('mjpeg'));
  assert.ok(caps.fps.includes(30));
  assert.ok(caps.modes.length >= 3);
  const wide = caps.modes.find((m) => m.width === 1920 && m.height === 1080);
  assert.ok(wide, 'يجب أن يظهر الوضع 1920x1080');
  assert.strictEqual(wide.fpsMax, 30);
});

test('قراءة خيارات جهاز صوت: القنوات ومعدلات العينات', () => {
  const caps = devices.buildCaps([], devices.parseDshowAudioOptions(AUDIO_OPTIONS));
  assert.deepStrictEqual(caps.audio.channels, [1, 2]);
  assert.deepStrictEqual(caps.audio.sampleRates, [44100, 48000]);
  assert.deepStrictEqual(caps.audio.bits, [16]);
});

test('قراءة صيغ v4l2 (مسار Linux)', () => {
  const formats = devices.parseV4l2Formats(V4L2);
  assert.strictEqual(formats.length, 2);
  const caps = devices.buildCaps(formats, []);
  assert.ok(caps.resolutions.includes('1920x1080'));
  assert.ok(caps.pixelFormats.includes('mjpeg'));
});

test('مخرجات لا تحوي أجهزة: لا نتائج ولا تخمين', () => {
  assert.deepStrictEqual(devices.parseDshowDevices('FFmpeg version 6.1\n[dshow @ 0x1] "dummy" (none)'), []);
  assert.deepStrictEqual(devices.parseDshowVideoOptions('nothing here'), []);
});

// ---------------------------------------------------------------- بدائل الإدخال

const USB = {
  type: 'usb',
  videoDevice: 'USB Video',
  audioDevice: 'USB Audio',
  videoSize: '1280x720',
  fps: 30,
  pixelFormat: 'mjpeg',
  vcodec: '',
  captureSafeMode: false
};

test('مجموعات الإدخال: المحفوظ أولاً ثم بلا صوت ثم الإعدادات التلقائية', () => {
  const variants = devices.inputVariants(USB, 'win32');
  assert.deepStrictEqual(variants.map((v) => v.label), [
    'الإعدادات المحفوظة',
    'فيديو فقط بلا صوت',
    'الإعدادات التلقائية للجهاز',
    'الإعدادات التلقائية بلا صوت'
  ]);
  assert.ok(variants[0].args.includes('video=USB Video:audio=USB Audio'));
  assert.strictEqual(variants[1].args[variants[1].args.length - 1], 'video=USB Video');

  const auto = variants[2].args.join(' ');
  assert.ok(!auto.includes('-pixel_format') && !auto.includes('-video_size') && !auto.includes('-framerate'),
    'الإعدادات التلقائية يجب ألا تفرض شيئاً');
});

test('مصدر بلا صوت وبلا إعدادات مفروضة: احتمال واحد فلا تجربة قبل التشغيل', () => {
  const plain = Object.assign({}, USB, { audioDevice: '', videoSize: '', fps: null, pixelFormat: '' });
  assert.strictEqual(devices.inputVariants(plain, 'win32').length, 1);
});

test('وضع الالتقاط الآمن: لا إعدادات مفروضة، فيبقى احتمالا الصوت', () => {
  const safe = Object.assign({}, USB, { captureSafeMode: true });
  const variants = devices.inputVariants(safe, 'win32');
  assert.deepStrictEqual(variants.map((v) => v.label), ['الإعدادات المحفوظة', 'فيديو فقط بلا صوت']);
  assert.ok(!variants[0].args.includes('-video_size'));
});

test('مصدر الشاشة: لا بديل «بلا صوت» على غير Windows', () => {
  const screen = { type: 'screen', videoDevice: '', audioDevice: '', videoSize: '1280x720', fps: 15, pixelFormat: '', vcodec: '' };
  assert.strictEqual(devices.inputVariants(screen, 'linux').length, 1);
});

test('شرح أعطال الفتح: «I/O error» = الجهاز مشغول، والاسم الخطأ يُشرح بلفظه', () => {
  assert.match(devices.explainError('Error opening input files: I/O error'), /مشغول/);
  assert.match(devices.errorMessage('Could not find video device with name'), /لم يُعثر/);
  assert.match(devices.explainError('Unknown input format: \'dshow\''), /ffmpeg/);
  assert.strictEqual(devices.explainError('frame= 120 fps=25'), null, 'لا شرح لسطر سليم');
});

test('قدرات فارغة لا تُعدّ قراءة ناجحة (يُعاد سؤال الجهاز لاحقاً)', () => {
  assert.strictEqual(devices.hasCaps(null), false);
  assert.strictEqual(devices.hasCaps({}), false);
  assert.strictEqual(devices.hasCaps(devices.buildCaps([], [])), false);
  assert.strictEqual(devices.hasCaps({ resolutions: ['640x480'] }), true);
  assert.strictEqual(devices.hasCaps({ audio: { sampleRates: [44100] } }), true);
});

/*
 * الضبط التلقائي لأفضل إعدادات: الأقرب إلى 1280×720 (921600 بكسل) هو الأفضل — نفس معادلة
 * النسخة الأصلية — مع قيدين يمنعان الوعد بما لم يثبت فعلاً:
 *   1) المعدل المعلن ليس دليلاً: قد تظهر 60fps في قائمة DirectShow ثم لا تثبت عند الالتقاط؛
 *   2) الصيغة الخام تُنقل بكامل بكسلاتها (yuyv422 = 16 بت/بكسل) فتلتهم ناقل USB، وسقفها
 *      محسوب من عرض النطاق، ولذلك يُقدَّم المضغوط (mjpeg) عليها عند تساوي الدقة.
 * الأوضاع أدناه هي أوضاع بطاقة الالتقاط «USB Video» (534D:2109) كما تعلنها فعلاً.
 */
const CARD_OPTIONS = [
  '[dshow @ 000001d8f2a0]  Pin "Capture" (1):',
  '[dshow @ 000001d8f2a0]   vcodec=mjpeg  min s=1920x1080 fps=10 max s=1920x1080 fps=60',
  '[dshow @ 000001d8f2a0]   vcodec=mjpeg  min s=1280x720 fps=10 max s=1280x720 fps=60',
  '[dshow @ 000001d8f2a0]   vcodec=mjpeg  min s=640x480 fps=10 max s=640x480 fps=60',
  '[dshow @ 000001d8f2a0]   pixel_format=yuyv422  min s=1920x1080 fps=5 max s=1920x1080 fps=5',
  '[dshow @ 000001d8f2a0]   pixel_format=yuyv422  min s=1280x720 fps=10 max s=1280x720 fps=10',
  '[dshow @ 000001d8f2a0]   pixel_format=yuyv422  min s=640x480 fps=5 max s=640x480 fps=30'
].join('\n');

function cardCaps() {
  return devices.buildCaps(devices.parseDshowVideoOptions(CARD_OPTIONS), []);
}

test('الضبط التلقائي: بطاقة USB Video تختار mjpeg بالدقة 1280×720 ومعدل 30fps', () => {
  const rec = devices.recommendFromCaps(cardCaps(), 30);
  assert.strictEqual(rec.videoSize, '1280x720');
  assert.strictEqual(rec.vcodec, 'mjpeg');
  assert.strictEqual(rec.pixelFormat, '');
  assert.strictEqual(rec.fps, 30);
  assert.deepStrictEqual(rec.detected.sizes, ['1920x1080', '1280x720', '640x480']);
  assert.deepStrictEqual(rec.detected.pixelFormats, ['yuyv422']); // mjpeg يظهر في المرمّزات
  assert.deepStrictEqual(rec.detected.fps, [5, 10, 30, 60]);
  assert.deepStrictEqual(rec.detected.codecs, ['mjpeg']);
});

test('الضبط التلقائي: لا يُوصى بـyuyv422 لمعدل لا يحمله ناقل USB', () => {
  const rawOnly = devices.buildCaps([{
    pixelFormat: 'yuyv422',
    vcodec: '',
    sizes: [
      { bound: 'min', width: 1280, height: 720, fps: 10 },
      { bound: 'max', width: 1280, height: 720, fps: 30 }
    ]
  }], []);
  const rec = devices.recommendFromCaps(rawOnly, 30);
  assert.strictEqual(rec.pixelFormat, 'yuyv422');
  assert.strictEqual(rec.videoSize, '1280x720');
  assert.strictEqual(rec.fps, 10, '720p بلا ضغط لا يحمله الناقل بـ30fps فنبقى على المعلن');
});

test('الضبط التلقائي: عند تساوي الدقة يُقدَّم المضغوط على الخام', () => {
  const caps = devices.buildCaps([
    { pixelFormat: 'yuyv422', vcodec: '', sizes: [{ bound: 'max', width: 640, height: 480, fps: 30 }] },
    { pixelFormat: '', vcodec: 'mjpeg', sizes: [{ bound: 'max', width: 640, height: 480, fps: 30 }] }
  ], []);
  const rec = devices.recommendFromCaps(caps, 30);
  assert.strictEqual(rec.vcodec, 'mjpeg');
  assert.strictEqual(rec.pixelFormat, '');
});

test('الضبط التلقائي: لا يُوصى بـ60fps لمجرد ظهوره في الأوضاع المعلنة', () => {
  const rec = devices.recommendFromCaps(cardCaps(), 60);
  assert.strictEqual(rec.fps, 30);
  assert.strictEqual(rec.vcodec, 'mjpeg');
  assert.strictEqual(rec.videoSize, '1280x720');
});

test('الضبط التلقائي: بلا وضع يفي بالمعدل المطلوب يرجع لصيغة الجهاز ودقته المعلنة', () => {
  const caps = devices.buildCaps([{
    pixelFormat: '',
    vcodec: 'mjpeg',
    sizes: [{ bound: 'max', width: 1280, height: 720, fps: 10 }]
  }], []);
  const rec = devices.recommendFromCaps(caps, 30);
  assert.strictEqual(rec.vcodec, 'mjpeg');
  assert.strictEqual(rec.videoSize, '1280x720');
  assert.strictEqual(rec.fps, 10);
});

test('الضبط التلقائي: جهاز بلا مرمّز يختار yuyv422 ودقته المعلنة', () => {
  const caps = devices.buildCaps([{
    pixelFormat: 'yuyv422',
    vcodec: '',
    sizes: [{ bound: 'max', width: 640, height: 480, fps: 10 }]
  }], []);
  const rec = devices.recommendFromCaps(caps, 30);
  assert.strictEqual(rec.pixelFormat, 'yuyv422');
  assert.strictEqual(rec.videoSize, '640x480');
  assert.strictEqual(rec.fps, 10);
});

test('الضبط التلقائي: بلا قدرات مقروءة يعطي الإعدادات المحايدة بلا خطأ', () => {
  const rec = devices.recommendFromCaps(devices.buildCaps([], []), 30);
  assert.deepStrictEqual(
    { pixelFormat: rec.pixelFormat, vcodec: rec.vcodec, videoSize: rec.videoSize, fps: rec.fps },
    { pixelFormat: '', vcodec: '', videoSize: '1280x720', fps: 30 }
  );
});

test('تقييم الأوضاع: الدقة الأثقل من الهدف تُعاقب أكثر من الأقرب له', () => {
  assert.ok(devices.modeScore({ width: 1280, height: 720 }) >
    devices.modeScore({ width: 1920, height: 1080 }));
  assert.ok(devices.modeScore({ width: 640, height: 480 }) < 0);
  assert.ok(devices.modeScore({ width: 1280, height: 720 }) === 0); // قد تكون -0، وهي الصفر نفسه
});
