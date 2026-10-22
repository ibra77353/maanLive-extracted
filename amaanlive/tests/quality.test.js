'use strict';
/*
 * اختبارات جدول الجودات وتطبيقه على الإخراج: مصدر واحد للجودة (src/quality.js) يحكم
 * محرّك البث (وسائط ffmpeg) وتحقّق الموجّه عند حفظ القناة/المصدر، فتجاوزات القناة
 * (fps · bitrate · threads) تُطبَّق فعلاً على المخرج بدل أن تبقى حقولاً في الواجهة
 * بلا أثر. لا تشغّل ffmpeg ولا تكتب في config/config.json.
 */

const test = require('node:test');
const assert = require('node:assert');
const ffmpeg = require('../src/ffmpeg');
const quality = require('../src/quality');
const routes = require('../src/routes');
const devices = require('../src/devices');
const store = require('../src/store');

store.load();
store.save = () => true; // لا نكتب أي شيء في ملف إعدادات المستخدم

const SOURCE_ID = 'src_quality_test';
const MONIKER = '@device_pnp_\\?\\usb#vid_534d&pid_2109&mi_00#6&2298e36a&6&0000#{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global';
const USB_SOURCE = {
  type: 'usb', videoDevice: 'USB Video', audioDevice: 'USB Audio',
  videoSize: '1280x720', fps: 30, pixelFormat: 'mjpeg', captureSafeMode: false
};

/** مصدر مؤقت في الذاكرة فقط (كي تمرّ قناةٌ تشير إليه)، ويُزال بعده. */
function withSource(run) {
  const data = store.get();
  data.sources.push({
    id: SOURCE_ID, name: 'مصدر اختبار', type: 'usb', videoDevice: 'USB Video',
    audioDevice: '', videoSize: '', fps: null, pixelFormat: '', vcodec: '', createdAt: Date.now()
  });
  try {
    return run(data);
  } finally {
    data.sources = data.sources.filter((s) => s.id !== SOURCE_ID);
  }
}

/** جهاز فيديو مكتشف الآن باسمه المعروض «USB Video» واسمه البديل هو MONIKER. */
function withDetectedDevice(run) {
  const list = devices.list().devices;
  list.push({ key: 'video:USB Video', name: 'USB Video', altName: MONIKER, kind: 'video', present: true, caps: {} });
  try {
    return run(list);
  } finally {
    for (let i = list.length - 1; i >= 0; i--) if (list[i].key === 'video:USB Video') list.splice(i, 1);
  }
}

// ---------------------------------------------------------------- الجدول

test('جدول الجودات: «نسخ المصدر» ثم جودات الترميز بمقاساتها ومعدلات بتها', () => {
  assert.deepStrictEqual(quality.keys(), ['copy', '240p', '360p', '480p', '720p', '1080p']);
  assert.strictEqual(quality.isCopy('copy'), true);
  assert.strictEqual(quality.isCopy('360p'), false);
  assert.strictEqual(quality.heightFor('copy'), null, 'النسخ لا يُقاس ولا يُصغَّر');
  assert.strictEqual(quality.heightFor('480p'), 480);
  assert.strictEqual(quality.bitrateFor('480p'), '1400k');
  assert.strictEqual(quality.get('9000p'), null, 'جودة غير معلومة لا تُقبل');
  assert.ok(quality.publicTable().every((q) => q.key && q.label), 'كل خيار يحمل مفتاحاً وتسمية للواجهة');
});

// ---------------------------------------------------------------- وسائط الإخراج

test('جودة الترميز: تصغير للارتفاع المطلوب ومعدل بت الجودة نفسه', () => {
  const joined = ffmpeg.buildOutputArgs({ id: 'ch_q_c', quality: '360p' }, USB_SOURCE, '/tmp/hls/q1', null).join(' ');
  assert.ok(joined.includes('-vf scale=-2:360'));
  assert.ok(joined.includes('-b:v 800k -maxrate 800k -bufsize 800k'));
});

test('معدل الإطارات: تجاوز القناة يُطبَّق على المخرج (-r) وإلا فمعدل الالتقاط', () => {
  const channelFps = ffmpeg.buildOutputArgs({ id: 'ch_f1', quality: '480p', fps: 15 }, USB_SOURCE, '/tmp/hls/f1', null).join(' ');
  assert.ok(channelFps.includes('-r 15'), 'تجاوز القناة يصل إلى المخرج، لا إلى GOP فقط');

  const sourceFps = ffmpeg.buildOutputArgs({ id: 'ch_f2', quality: '480p' }, USB_SOURCE, '/tmp/hls/f2', null).join(' ');
  assert.ok(sourceFps.includes('-r 30'), 'بلا تجاوز نأخذ معدل الالتقاط');
});

test('معدل البت: تجاوز القناة يعلو على افتراضي الجودة', () => {
  const joined = ffmpeg.buildOutputArgs({ id: 'ch_b1', quality: '480p', bitrate: '1000k' }, USB_SOURCE, '/tmp/hls/b1', null).join(' ');
  assert.ok(joined.includes('-b:v 1000k -maxrate 1000k -bufsize 1000k'));
  assert.ok(!joined.includes('1400k'), 'افتراضي الجودة لا يُضاف مع التجاوز');
});

test('خيوط الترميز: تجاوز القناة وإلا الإعداد العام', () => {
  const perChannel = ffmpeg.buildOutputArgs({ id: 'ch_t1', quality: '480p', threads: 4 }, USB_SOURCE, '/tmp/hls/t1', null).join(' ');
  assert.ok(perChannel.includes('-threads 4'));
});

test('نسخ المصدر لا يقبل تجاوزات الترميز (لا -r ولا -b:v)', () => {
  const h264 = Object.assign({}, USB_SOURCE, { pixelFormat: '', vcodec: 'h264' });
  const joined = ffmpeg.buildOutputArgs({ id: 'ch_c1', quality: 'copy', fps: 15, bitrate: '1000k' }, h264, '/tmp/hls/c1', null).join(' ');
  assert.ok(joined.includes('-c:v copy'));
  assert.ok(!joined.includes('-r '), 'النسخ بلا إعادة تشكيل معدل الإطارات');
  assert.ok(!joined.includes('-b:v'));
});

// ---------------------------------------------------------------- تحقّق الموجّه

test('حفظ القناة: الجودة من جدول الوحدات والتجاوزات تُطبَّع وتُتحقَّق', () => {
  withSource(() => {
    const ch = routes.sanitizeChannel({
      name: 'قناة اختبار', sourceId: SOURCE_ID, quality: '480p', fps: '25', bitrate: '1500'
    });
    assert.strictEqual(ch.quality, '480p');
    assert.strictEqual(ch.fps, 25);
    assert.strictEqual(ch.bitrate, '1500k', 'الرقم وحده يُطبَّع إلى «1500k»');
    assert.strictEqual(ch.alwaysOn, false);
    assert.strictEqual(ch.threads, null);

    const alwaysOn = routes.sanitizeChannel({ name: 'قناة', sourceId: SOURCE_ID, quality: '360p', alwaysOn: true });
    assert.strictEqual(alwaysOn.alwaysOn, true, 'حقل «تشغيل دائم» يُحفظ فلا تفقد البيانات المستوردة معناها');

    assert.throws(() => routes.sanitizeChannel({ name: 'ق', sourceId: SOURCE_ID, quality: '9000p' }), /الجودة/);
    assert.throws(() => routes.sanitizeChannel({ name: 'ق', sourceId: SOURCE_ID, quality: '360p', fps: '30fps' }), /معدل إطارات/);
    assert.throws(() => routes.sanitizeChannel({ name: 'ق', sourceId: SOURCE_ID, quality: '360p', fps: 200 }), /معدل إطارات/);
    assert.throws(() => routes.sanitizeChannel({ name: 'ق', sourceId: SOURCE_ID, quality: '360p', bitrate: 'سريع' }), /معدل البت/);
  });
});

test('حفظ المصدر: تسمية الجهاز المألوفة تُحفظ بدل ضياعها', () => {
  // تسمية يرسلها العميل (بيانات مستوردة تحمل اسماً بديلاً خاماً)
  const sent = routes.sanitizeSource({
    name: 'بطاقة', type: 'usb', videoDevice: MONIKER, videoDeviceLabel: 'USB Video'
  });
  assert.strictEqual(sent.videoDeviceLabel, 'USB Video');

  // وبلا إرسال تسمية: تُؤخذ من اسم الجهاز المكتشف الآن (حلّ الاسم البديل إلى اسمه المعروض)
  withDetectedDevice(() => {
    const auto = routes.sanitizeSource({ name: 'بطاقة', type: 'usb', videoDevice: MONIKER });
    assert.strictEqual(auto.videoDeviceLabel, 'USB Video', 'المعرّف الخام لا يُعرض للمشاهد');
  });
});
