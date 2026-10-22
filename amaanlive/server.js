'use strict';
/*
 * server.js — نقطة انطلاق «بثي المحلي».
 *
 * الترتيب: قفل النسخة الواحدة → تحميل الإعدادات → مراقبة الأجهزة → تركيب المسارات
 * (لوحة التحكم، الموارد، المرفوعات، صفحة المشاهدين، HLS، API) → تشغيل Nginx →
 * طابور القنوات + حلقات الخمول والجدولة ومراقبة عمليات ffmpeg → الاستماع على 0.0.0.0.
 *
 * بلا إنترنت وبلا تراخيص: Nginx و FFmpeg المرفقان مع المشروع فقط.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');

const lib = require('./src/http');
const store = require('./src/store');
const auth = require('./src/auth');
const devices = require('./src/devices');
const ffmpeg = require('./src/ffmpeg');
const nginx = require('./src/nginx');
const routes = require('./src/routes');
const idle = require('./src/idle');
const scheduler = require('./src/scheduler');
const monitor = require('./src/monitor');
const shutdown = require('./src/shutdown');
const lock = require('./src/lock');

const ARGS = process.argv.slice(2);
const FLAGS = new Set(ARGS);

// ---------------------------------------------------------------- أدوات

function lanAddress() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) return net.address;
    }
  }
  return '127.0.0.1';
}

function banner(port, nginxPort, nginxOn) {
  const ip = lanAddress();
  console.log('==============================================');
  console.log('  بثي المحلي — نظام البث المباشر (Node + FFmpeg + HLS + Nginx)');
  console.log('  منصة التشغيل : ' + process.platform + ' · Node ' + process.version);
  console.log('  ffmpeg       : ' + devices.ffmpegBin());
  console.log('  Nginx        : ' + (nginxOn ? 'يعمل على المنفذ ' + nginxPort : 'غير مفعّل (كل شيء من Node)'));
  console.log('  لوحة التحكم  : http://localhost:' + (nginxOn ? nginxPort : port) + '/admin');
  console.log('  صفحة المشاهدين: http://localhost:' + (nginxOn ? nginxPort : port) + '/');
  console.log('  على الشبكة   : http://' + ip + ':' + (nginxOn ? nginxPort : port) + '/');
  console.log('  الإيقاف      : نفّذ «stop.bat» أو Ctrl+C');
  console.log('==============================================');
}

// ---------------------------------------------------------------- وضع كتابة الإعداد فقط

if (FLAGS.has('--write-nginx-conf')) {
  store.load();
  const info = nginx.writeConf();
  console.log('NGINX_PORT=' + info.nginxPort);
  console.log('NODE_PORT=' + info.port);
  process.exit(0);
}

// ---------------------------------------------------------------- قفل النسخة الواحدة

store.load();
const gotLock = lock.acquire();
if (!gotLock.ok && !FLAGS.has('--force')) {
  console.error('[خطأ] نسخة أخرى من البرنامج تعمل بالفعل على نفس مجلد البيانات (pid ' + gotLock.holder.pid + '):');
  console.error('       ' + store.ROOT);
  console.error('       تشغيل نسختين معاً يجعل كل مشاهد يرى محتوى مختلفاً لنفس القناة.');
  console.error('       أوقف النسخة الأخرى بـ «stop.bat» ثم أعد المحاولة.');
  process.exit(1);
}

// ---------------------------------------------------------------- المراقبة والمهمات الخلفية

devices.scan().catch((e) => console.error('[devices] ' + e.message));
devices.startWatcher(store.get().settings.deviceWatchSeconds);

// رصد انفصال/عودة أجهزة الالتقاط المرتبطة بقنوات تعمل
let previousPresence = new Map();
devices.on('changed', ({ devices: list }) => {
  const now = new Map(list.filter((d) => d.kind === 'video').map((d) => [d.name, Boolean(d.present)]));
  for (const [name, present] of now) {
    const was = previousPresence.get(name);
    if (was === true && present === false) {
      ffmpeg.handleDeviceLost(name).catch((e) => console.error('[devices] ' + e.message));
    } else if (was === false && present === true) {
      ffmpeg.handleDeviceReturned(name).catch((e) => console.error('[devices] ' + e.message));
    }
  }
  previousPresence = now;
});

// ---------------------------------------------------------------- المسارات

const router = routes.createRouter();

function mountStatic(prefix, root, opts) {
  router.use(prefix, lib.staticHandler(root, Object.assign({ prefix }, opts || {})));
}

// لوحة التحكم
mountStatic('/admin', path.join(store.ROOT, 'public', 'admin'));
// مكتبة التشغيل المحلية (hls.js) — بلا CDN
mountStatic('/vendor', path.join(store.ROOT, 'public', 'vendor'));
// المرفوعات (الشعار/الأغلفة)
mountStatic('/uploads', () => store.DIRS.uploads);
// صفحة المشاهدين على الجذر
mountStatic('/', path.join(store.ROOT, 'public', 'viewer'));

/**
 * /hls — قلب التوزيع: قوائم m3u8 تمرّ من هنا لعدّ المشاهدين، والمقاطع .ts تُخدَم
 * بكاش طويل (وعبر Nginx مباشرةً من القرص عند تفعيله).
 */
router.use('/hls', lib.staticHandler(() => ffmpeg.hlsRoot(), {
  prefix: '/hls',
  headers: (req, file, rel) => {
    const m = /^\/([^/]+)\//.exec(rel || '');
    const channelId = m ? m[1] : null;
    const isPlaylist = /\.m3u8$/i.test(file);
    if (channelId) {
      let bytes = 0;
      if (!isPlaylist) {
        try {
          bytes = fs.statSync(file).size;
        } catch (e) {
          bytes = 0;
        }
      }
      ffmpeg.noteHlsAccess(channelId, lib.clientIp(req), bytes);
    }
    if (isPlaylist) {
      return {
        'Content-Type': 'application/vnd.apple.mpegurl',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      };
    }
    return {
      'Content-Type': 'video/mp2t',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Access-Control-Allow-Origin': '*'
    };
  }
}));

// ---------------------------------------------------------------- الخادم

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    req.path = url.pathname; // يبقى مُرمَّزاً، ويُفكّ مرة واحدة في الموجّه أو خدمة الملفات
    req.query = Object.fromEntries(url.searchParams.entries());
    await router.run(req, res);
  } catch (e) {
    console.error('[http] ' + (e && e.stack ? e.stack : e));
    if (!res.headersSent) lib.fail(res, 500, e && e.message ? e.message : 'خطأ داخلي في الخادم');
    else res.end();
  }
});

// ---------------------------------------------------------------- التشغيل

async function boot() {
  const settings = store.get().settings;

  // 1) تشغيل Nginx (إن كان مفعّلاً ومرفقاً)
  let nginxOn = false;
  if (settings.useNginx !== false) {
    const started = await nginx.start();
    nginxOn = Boolean(started.ok);
    console.log('[nginx] ' + started.message);
    if (started.ok && started.conf && started.conf.missingSupportFiles && started.conf.missingSupportFiles.length) {
      console.warn('[nginx] ملفات مساندة ناقصة: ' + started.conf.missingSupportFiles.join(', '));
    }
  } else {
    console.log('[nginx] معطّل من الإعدادات — يُخدَم كل شيء من Node على المنفذ ' + settings.port);
  }

  // 2) تنظيف عمليات ffmpeg العالقة من تشغيل سابق + طابور الإقلاع
  await ffmpeg.killStaleProcesses();
  ffmpeg.startupQueue().catch((e) => console.error('[ffmpeg] الطابور: ' + e.message));

  // 3) حلقات الخمول والجدولة، والمراقبة الدورية لعمليات ffmpeg (تعطّل/تجمّد)
  idle.startLoop();
  scheduler.startLoop();
  monitor.startLoop();
  ffmpeg.startAccessLogWatch();

  // 4) خطوات الإيقاف المنظّم
  shutdown.register('إيقاف القنوات', () => ffmpeg.stopAll('shutdown'));
  shutdown.register('إيقاف Nginx', async () => {
    if (nginxOn) await nginx.stop();
  });
  shutdown.register('تحرير القفل', async () => {
    lock.release();
  });
  shutdown.register('إغلاق الخادم', () => new Promise((resolve) => server.close(() => resolve(true))));

  banner(Number(settings.port) || 3001, Number(settings.nginxPort) || 801, nginxOn);
}

/** الاستماع مع إعادة محاولة عند انشغال المنفذ (٣ ثوانٍ بين المحاولات، ١٠ مرات). */
let attempts = 0;
function listen() {
  const port = Number(store.get().settings.port) || 3001;
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE' && attempts < 10) {
      attempts += 1;
      console.log('[المنفذ ' + port + ' مشغول] إعادة المحاولة (' + attempts + '/10) خلال ٣ ثوانٍ...');
      setTimeout(listen, 3000);
      return;
    }
    console.error('[خطأ في الخادم] ' + err.message);
    process.exit(1);
  });
  server.listen(port, '0.0.0.0', () => {
    boot().catch((e) => {
      console.error('[boot] ' + (e && e.stack ? e.stack : e));
    });
  });
}

process.on('SIGINT', () => {
  shutdown.shutdown('SIGINT').finally(() => process.exit(0));
});
process.on('SIGTERM', () => {
  shutdown.shutdown('SIGTERM').finally(() => process.exit(0));
});
process.on('uncaughtException', (e) => {
  console.error('[uncaught] ' + (e && e.stack ? e.stack : e));
});
process.on('unhandledRejection', (e) => {
  console.error('[unhandled] ' + (e && e.stack ? e.stack : e));
});

listen();
