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
