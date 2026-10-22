'use strict';
/*
 * routes.js — واجهة API كاملة (لوحة التحكم + صفحة المشاهدين).
 * المسارات العامة (الصفحة والمشاهدون وتسجيل الدخول) قبل حارس `requireAuth`،
 * وكل ما يلي الحارس محمي بالجلسة — نفس ترتيب النظام الأصلي.
 */

const fs = require('fs');
const path = require('path');
const http = require('./http');
const store = require('./store');
const auth = require('./auth');
const devices = require('./devices');
const ffmpeg = require('./ffmpeg');
const nginx = require('./nginx');
const stats = require('./stats');
const scheduler = require('./scheduler');

const { ok, fail, readJson, readMultipart, clientIp } = http;

const STARTED_AT = Date.now();

// ---------------------------------------------------------------- helpers

function sanitizeSource(body, existing) {
  const src = existing ? Object.assign({}, existing) : { id: store.newId('src') };
  const pick = (k, def) => (body[k] === undefined ? (existing ? existing[k] : def) : body[k]);

  src.name = String(pick('name', 'مصدر جديد')).trim().slice(0, 80) || 'مصدر جديد';
  src.type = ['usb', 'screen'].includes(pick('type', 'usb')) ? pick('type', 'usb') : 'usb';
  src.videoDevice = String(pick('videoDevice', '') || '').slice(0, 200);
  src.audioDevice = String(pick('audioDevice', '') || '').slice(0, 200);
  src.videoSize = String(pick('videoSize', '') || '').slice(0, 20);
  src.fps = pick('fps', null) === null || pick('fps', null) === '' ? null : Number(pick('fps', null));
  src.pixelFormat = String(pick('pixelFormat', '') || '').slice(0, 40);
  src.vcodec = String(pick('vcodec', '') || '').slice(0, 40);
  src.captureSafeMode = Boolean(pick('captureSafeMode', false));
  src.notes = String(pick('notes', '') || '').slice(0, 200);

  if (src.type === 'usb' && !src.videoDevice) {
    throw new Error('اختر جهاز فيديو للمصدر');
  }
  if (src.videoSize && !/^\d{2,5}x\d{2,5}$/.test(src.videoSize)) throw new Error('دقة الفيديو غير صحيحة (مثال: 1280x720)');
  if (src.fps !== null && (!Number.isFinite(src.fps) || src.fps < 1 || src.fps > 240)) throw new Error('معدل الإطارات غير صحيح');

  // نحفظ صورة القدرات المقروءة فعلاً من الجهاز وقت الإنشاء (مرجع للواجهة)
  if (src.type === 'usb' && !existing) {
    const dev = devices.find(src.videoDevice, 'video');
    if (dev && dev.caps) src.caps = dev.caps;
  }
  if (!src.createdAt) src.createdAt = Date.now();
  return src;
}

function sanitizeChannel(body, existing) {
  const ch = existing ? Object.assign({}, existing) : { id: store.newId('ch') };
  const pick = (k, def) => (body[k] === undefined ? (existing ? existing[k] : def) : body[k]);

  ch.name = String(pick('name', 'قناة جديدة')).trim().slice(0, 80) || 'قناة جديدة';
  ch.sourceId = String(pick('sourceId', '') || '');
  ch.category = String(pick('category', '') || '').slice(0, 40);
  ch.cover = String(pick('cover', '') || '').slice(0, 300);
  ch.sort = Number(pick('sort', 0)) || 0;
  ch.enabled = Boolean(pick('enabled', true));
  ch.autoStart = Boolean(pick('autoStart', false));
  ch.manualStopped = existing ? Boolean(existing.manualStopped) : false;
  ch.quality = String(pick('quality', 'copy'));
  if (!['copy', '240p', '360p', '480p', '720p', '1080p'].includes(ch.quality)) throw new Error('الجودة المطلوبة غير مدعومة');
  ch.fps = pick('fps', null) === null || pick('fps', null) === '' ? null : Number(pick('fps', null));
  ch.threads = pick('threads', null) === null || pick('threads', null) === '' ? null : Number(pick('threads', null));

  const sched = pick('schedule', null) || {};
  ch.schedule = {
    enabled: Boolean(sched.enabled),
    days: Array.isArray(sched.days) ? sched.days.map(Number).filter((d) => d >= 0 && d <= 6) : [],
    from: String(sched.from || '08:00').slice(0, 5),
    to: String(sched.to || '23:59').slice(0, 5)
  };
  if (ch.schedule.enabled) {
    if (scheduler.minutesOf(ch.schedule.from) === null || scheduler.minutesOf(ch.schedule.to) === null) {
      throw new Error('وقت الجدولة غير صحيح (صيغة HH:MM)');
    }
  }

  if (!ch.sourceId) throw new Error('اختر مصدراً للقناة');
  if (!store.findSource(ch.sourceId)) throw new Error('المصدر المحدد غير موجود');
  if (!ch.createdAt) ch.createdAt = Date.now();
  return ch;
}

/**
 * الإعلانات المحلية (بلا إنترنت): إعلان نصي يظهر في الشريط المتحرك، أو صورة تظهر
 * كسلايدر أسفل ترويسة صفحة المشاهدين — نفس نموذج الإعلانات في البرنامج الأصلي.
 */
function sanitizeAd(body, existing) {
  const ad = existing ? Object.assign({}, existing) : { id: store.newId('ad') };
  const pick = (k, def) => (body[k] === undefined ? (existing ? existing[k] : def) : body[k]);

  ad.type = pick('type', 'text') === 'image' ? 'image' : 'text';
  ad.text = String(pick('text', '') || '').trim().slice(0, 300);
  ad.image = String(pick('image', '') || '').trim().slice(0, 300);
  ad.enabled = Boolean(pick('enabled', true));
  if (ad.type === 'text' && !ad.text) throw new Error('اكتب نص الإعلان');
  if (ad.type === 'image' && !ad.image) throw new Error('اختر صورة الإعلان');
  if (!ad.createdAt) ad.createdAt = Date.now();
  return ad;
}

function publicChannel(ch) {
  const src = store.findSource(ch.sourceId);
  const st = ffmpeg.statusOf(ch.id);
  const open = scheduler.inWindow(ch.schedule);
  let status = open === true ? 'scheduled' : 'live';
  if (ch.manualStopped) status = 'stopped';
  else if (st.state === 'error') status = 'error';
  else if (st.state === 'waiting-device') status = 'waiting-device';
  return {
    id: ch.id,
    name: ch.name,
    category: ch.category || '',
    cover: ch.cover || '',
    quality: ch.quality,
    live: st.state === 'running',
    status,
    viewers: st.viewers || 0,
    device: src && src.type === 'usb' ? src.videoDevice : 'الشاشة',
    nextOpen: scheduler.nextOpenMinutes(ch.schedule),
    url: '/hls/' + ch.id + '/index.m3u8'
  };
}

// ---------------------------------------------------------------- router

function createRouter() {
  const r = new http.Router();

  // ======================= مسارات عامة =======================

  r.get('/api/ping', async (req, res) => ok(res, { pong: true, time: Date.now() }));

  r.post('/api/login', async (req, res) => {
    const body = await readJson(req);
    if (auth.login(req, res, body.user, body.pass)) return ok(res, { user: store.get().admin.user });
    return fail(res, 401, 'كلمة المرور غير صحيحة');
  });

  r.post('/api/logout', async (req, res) => {
    auth.logout(res);
    return ok(res, {});
  });

  r.get('/api/me', async (req, res) =>
    ok(res, {
      authed: auth.isAuthed(req),
      user: auth.isAuthed(req) ? store.get().admin.user : null,
      passwordIsDefault: Boolean(store.get().admin.passwordIsDefault)
    })
  );

  r.get('/api/public/settings', async (req, res) => {
    const s = store.get().settings;
    return ok(res, {
      settings: {
        siteName: s.siteName,
        siteNameLatin: s.siteNameLatin,
        logo: s.logo,
        phone: s.phone,
        ticker: s.tickerEnabled ? s.ticker : '',
        playerMaxBufferLength: s.playerMaxBufferLength,
        playerBackBufferLength: s.playerBackBufferLength,
        playerLiveSyncDuration: s.playerLiveSyncDuration,
        capLevelToPlayerSize: Boolean(s.capLevelToPlayerSize),
        cpuSaverDefault: Boolean(s.cpuSaverDefault),
        // الإعلانات المحلية المفعّلة فقط — تُعرض في الشريط المتحرك وكسلايدر للصور
        ads: store.get().ads.filter((a) => a.enabled).map((a) => ({ type: a.type, text: a.text, image: a.image }))
      }
    });
  });

  r.get('/api/public/channels', async (req, res) => {
    const list = store
      .get()
      .channels.filter((c) => c.enabled && !c.manualStopped)
      .sort((a, b) => (a.sort || 0) - (b.sort || 0))
      .map(publicChannel);
    return ok(res, { channels: list, total: store.get().channels.length });
  });

  r.get('/api/public/channel-health', async (req, res) => {
    const id = String((req.query && req.query.id) || '');
    const ch = store.findChannel(id);
    if (!ch) return fail(res, 404, 'القناة غير موجودة');
    const st = ffmpeg.statusOf(id);
    return ok(res, {
      id,
      state: st.state,
      live: st.state === 'running',
      viewers: st.viewers,
      lastError: st.lastError,
      waitingDevice: st.state === 'waiting-device'
    });
  });

  r.post('/api/public/heartbeat', async (req, res) => {
    const body = await readJson(req);
    const ch = store.findChannel(String(body.id || ''));
    if (!ch) return fail(res, 404, 'القناة غير موجودة');
    ffmpeg.heartbeat(ch.id, clientIp(req));
    return ok(res, { viewers: ffmpeg.viewerCount(ch.id) });
  });

  // ======================= الحارس =======================
  r.use('/api', auth.requireAuth);

  // ---------------- الإعدادات ----------------
  r.get('/api/settings', async (req, res) => ok(res, { settings: store.get().settings }));

  r.put('/api/settings', async (req, res) => {
    const body = await readJson(req);
    const s = store.get().settings;
    const allowed = [
      'siteName', 'siteNameLatin', 'logo', 'phone', 'ticker', 'tickerEnabled',
      'port', 'nginxPort', 'useNginx', 'ffmpegPath', 'nginxPath', 'hlsRoot',
      'hlsTime', 'hlsListSize', 'hlsDeleteThreshold', 'gopSeconds',
      'x264Preset', 'x264Threads', 'audioBitrate',
      'startupQueueDelayMs', 'startupConcurrency', 'autoRestartCrashed', 'restartBackoffMs', 'maxRestarts', 'logMaxLines',
      'idleStopEnabled', 'idleStopMinutes', 'viewerWindowSeconds', 'deviceWatchSeconds', 'sourceFailStopMinutes',
      'playerMaxBufferLength', 'playerBackBufferLength', 'playerLiveSyncDuration', 'capLevelToPlayerSize', 'cpuSaverDefault',
      'logoImage', 'logoPosition', 'logoSizePct', 'logoOpacityPct'
    ];
    // نبني نسخة مرشّحة ثم نتحقق منها قبل المساس بالإعدادات الحيّة: الطلب المرفوض
    // (مثل تساوي المنفذين) يجب ألّا يترك التطبيق في حالة داخلية متناقضة تُعطّل كل حفظ لاحق.
    const restartRequired = [];
    const candidate = Object.assign({}, s);
    for (const k of allowed) {
      if (body[k] === undefined) continue;
      let v = body[k];
      if (typeof s[k] === 'number' || k.endsWith('Ms') || /Seconds|Minutes|Pct|Time|Size|Lines|Threads|Concurrency|Restarts|Threshold/.test(k)) {
        const n = Number(v);
        if (Number.isFinite(n)) v = n;
      }
      if (typeof s[k] === 'boolean') v = Boolean(v);
      if ((k === 'port' || k === 'nginxPort') && Number(v) !== Number(s[k])) restartRequired.push(k);
      candidate[k] = v;
    }
    if (Number(candidate.port) === Number(candidate.nginxPort)) {
      return fail(res, 400, 'منفذ النظام ومنفذ Nginx يجب أن يكونا مختلفين');
    }
    Object.assign(s, candidate);
    store.save();

    // إعدادات تؤثر على الأجهزة/المؤقتات تُطبَّق فوراً
    devices.startWatcher(s.deviceWatchSeconds);
    const notes = [];
    if (restartRequired.length) {
      const res2 = await nginx.reload();
      notes.push(res2.message);
    }
    return ok(res, { settings: s, restartRequired, notes });
  });

  r.post('/api/settings/password', async (req, res) => {
    const body = await readJson(req);
    if (!store.checkPassword(body.current)) return fail(res, 400, 'كلمة المرور الحالية غير صحيحة');
    const next = String(body.next || '');
    if (next.length < 6) return fail(res, 400, 'كلمة المرور الجديدة قصيرة (6 أحرف على الأقل)');
    store.setPassword(next);
    auth.logout(res);
    return ok(res, { changed: true });
  });

  r.post('/api/settings/regenerate-nginx', async (req, res) => {
    const info = nginx.writeConf();
    const reloaded = await nginx.reload();
    return ok(res, { written: info.path, nginxPort: info.nginxPort, port: info.port, reload: reloaded });
  });

  // ---------------- Nginx ----------------
  r.get('/api/nginx/status', async (req, res) => ok(res, { nginx: await nginx.status() }));
  r.post('/api/nginx/start', async (req, res) => ok(res, { result: await nginx.start() }));
  r.post('/api/nginx/stop', async (req, res) => ok(res, { result: await nginx.stop() }));
  r.post('/api/nginx/reload', async (req, res) => ok(res, { result: await nginx.reload() }));

  // ---------------- المراقبة ----------------
  r.get('/api/stats', async (req, res) => {
    const nginxStatus = await nginx.status();
    const devs = devices.list();
    const present = devs.devices.filter((d) => d.present);
    return ok(res, {
      stats: stats.snapshot(Math.floor((Date.now() - STARTED_AT) / 1000), nginxStatus, {
        total: devs.devices.length,
        present: present.length,
        video: present.filter((d) => d.kind === 'video').length,
        audio: present.filter((d) => d.kind === 'audio').length,
        lastScan: devs.scannedAt,
        error: devs.error,
        ffmpeg: devs.ffmpeg
      }),
      statuses: ffmpeg.statusAll(),
      channels: store.get().channels.map((c) => {
        const st = ffmpeg.statusOf(c.id);
        // `state` هي حالة ffmpeg الخام التي تعرضها «الحالة» في لوحة المراقبة (chip)
        // ويوضع بجانبها عدّاد مرات الإعادة التلقائية `restarts`.
        return Object.assign(publicChannel(c), {
          state: st.state,
          lastError: st.lastError,
          restarts: st.restarts,
          uptimeMs: st.uptimeMs,
          enabled: c.enabled,
          autoStart: c.autoStart
        });
      })
    });
  });

  r.post('/api/system/shutdown', async (req, res) => {
    const ip = clientIp(req).replace('::ffff:', '');
    if (!['127.0.0.1', '::1', 'localhost'].includes(ip)) {
      return fail(res, 403, 'متاح من الجهاز المحلي فقط');
    }
    ok(res, { stopping: true });
    console.log('[system] إيقاف طلب من لوحة التحكم');
    setTimeout(() => {
      require('./shutdown').shutdown('api').finally(() => process.exit(0));
    }, 300);
    return undefined;
  });

  // ---------------- الأجهزة ----------------
  r.get('/api/devices', async (req, res) => {
    if (req.query && req.query.refresh) await devices.scan({ forceCaps: Boolean(req.query.caps) });
    return ok(res, devices.list());
  });

  r.post('/api/devices/scan', async (req, res) => {
    const body = await readJson(req);
    const list = await devices.scan({ forceCaps: Boolean(body.forceCaps) });
    return ok(res, Object.assign(devices.list(), { devices: list }));
  });

  /** تشخيص: هل ffmpeg المرفق يدعم dshow؟ وما مخرجاته الخام؟ */
  r.get('/api/devices/diagnose', async (req, res) => {
    const st = devices.ffmpegStatus();
    const formats = await devices.run(['-hide_banner', '-devices'], { timeout: 10000 });
    const listRaw = await devices.run(['-hide_banner', '-list_devices', 'true', '-f', devices.IS_WIN ? 'dshow' : 'v4l2', '-i', 'dummy'], { timeout: 10000 });
    return ok(res, {
      platform: process.platform,
      ffmpeg: st,
      supportsDshow: /dshow/.test(formats.stdout || '') || /dshow/.test(formats.stderr || ''),
      inputFormats: ((formats.stdout || '') + (formats.stderr || '')).slice(0, 4000),
      listDevices: ((listRaw.stderr || '') + (listRaw.stdout || '')).slice(0, 4000)
    });
  });

  /** اختبار التزام حقيقي من الجهاز (ثانيتان إلى مخرج فارغ). */
  r.post('/api/devices/test', async (req, res) => {
    const body = await readJson(req);
    const source = sanitizeSource(Object.assign({ name: 'اختبار' }, body));
    const result = await devices.testCapture(source, Math.min(10, Math.max(1, Number(body.seconds) || 2)));
    return ok(res, { result });
  });

  // ---------------- المصادر ----------------
  r.get('/api/sources', async (req, res) => {
    const data = store.get();
    return ok(res, {
      sources: data.sources.map((s) => {
        const dev = s.type === 'usb' ? devices.find(s.videoDevice, 'video') : null;
        const aud = s.audioDevice ? devices.find(s.audioDevice, 'audio') : null;
        return Object.assign({}, s, {
          devicePresent: s.type === 'screen' ? true : Boolean(dev && dev.present),
          audioPresent: s.audioDevice ? Boolean(aud && aud.present) : true,
          liveCaps: dev ? dev.caps : null,
          usedByChannels: data.channels.filter((c) => c.sourceId === s.id).map((c) => c.name)
        });
      })
    });
  });

  r.post('/api/sources', async (req, res) => {
    const body = await readJson(req);
    const src = sanitizeSource(body);
    store.get().sources.push(src);
    store.save();
    return ok(res, { source: src });
  });

  r.put('/api/sources/:id', async (req, res) => {
    const body = await readJson(req);
    const data = store.get();
    const idx = data.sources.findIndex((s) => s.id === req.params.id);
    if (idx === -1) return fail(res, 404, 'المصدر غير موجود');
    const src = sanitizeSource(body, data.sources[idx]);
    data.sources[idx] = src;
    store.save();
    // إن كانت قناة تعمل على هذا المصدر، أعد تشغيلها بالإعدادات الجديدة
    const running = data.channels.filter((c) => c.sourceId === src.id && ffmpeg.isRunning(c.id));
    for (const ch of running) {
      await ffmpeg.restart(ch.id);
    }
    return ok(res, { source: src, restarted: running.map((c) => c.name) });
  });

  r.del('/api/sources/:id', async (req, res) => {
    const data = store.get();
    const idx = data.sources.findIndex((s) => s.id === req.params.id);
    if (idx === -1) return fail(res, 404, 'المصدر غير موجود');
    const used = data.channels.filter((c) => c.sourceId === req.params.id);
    if (used.length) return fail(res, 400, 'المصدر مستخدم في قنوات: ' + used.map((c) => c.name).join('، '));
    data.sources.splice(idx, 1);
    store.save();
    return ok(res, { deleted: true });
  });

  // ---------------- القنوات ----------------
  r.get('/api/channels', async (req, res) => {
    const data = store.get();
    return ok(res, {
      channels: data.channels
        .slice()
        .sort((a, b) => (a.sort || 0) - (b.sort || 0))
        .map((c) => {
          const src = store.findSource(c.sourceId);
          // اسم المصدر يأتي مع القناة نفسها، فلا يعتمد العمود على وصول قائمة المصادر أولاً.
          return Object.assign({}, c, ffmpeg.statusOf(c.id), {
            sourceName: src ? src.name : '',
            nextOpen: scheduler.nextOpenMinutes(c.schedule)
          });
        })
    });
  });

  r.post('/api/channels', async (req, res) => {
    const body = await readJson(req);
    const ch = sanitizeChannel(body);
    store.get().channels.push(ch);
    store.save();
    if (ch.autoStart && ch.enabled) {
      ffmpeg.start(ch.id).catch((e) => console.error('[routes] ' + e.message));
    }
    return ok(res, { channel: ch });
  });

  r.put('/api/channels/:id', async (req, res) => {
    const body = await readJson(req);
    const data = store.get();
    const idx = data.channels.findIndex((c) => c.id === req.params.id);
    if (idx === -1) return fail(res, 404, 'القناة غير موجودة');
    const before = data.channels[idx];
    const ch = sanitizeChannel(body, before);
    data.channels[idx] = ch;
    store.save();

    const needsRestart =
      ffmpeg.isRunning(ch.id) &&
      (before.sourceId !== ch.sourceId || before.quality !== ch.quality || before.fps !== ch.fps);
    if (needsRestart) await ffmpeg.restart(ch.id);
    return ok(res, { channel: ch, restarted: needsRestart });
  });

  r.del('/api/channels/:id', async (req, res) => {
    const data = store.get();
    const idx = data.channels.findIndex((c) => c.id === req.params.id);
    if (idx === -1) return fail(res, 404, 'القناة غير موجودة');
    const ch = data.channels[idx];
    if (ffmpeg.isRunning(ch.id)) await ffmpeg.stop(ch.id, 'delete');
    ffmpeg.purgeChannel(ch.id);
    data.channels.splice(idx, 1);
    store.save();
    return ok(res, { deleted: true });
  });

  r.post('/api/channels/:id/start', async (req, res) => {
    const ch = store.findChannel(req.params.id);
    if (!ch) return fail(res, 404, 'القناة غير موجودة');
    if (!ch.enabled) return fail(res, 400, 'القناة معطّلة — فعّلها أولاً');
    ch.manualStopped = false;
    store.save();
    try {
      const status = await ffmpeg.start(ch.id);
      return ok(res, { status });
    } catch (e) {
      return fail(res, 400, e.message);
    }
  });

  r.post('/api/channels/:id/stop', async (req, res) => {
    const ch = store.findChannel(req.params.id);
    if (!ch) return fail(res, 404, 'القناة غير موجودة');
    ch.manualStopped = true;
    store.save();
    const status = await ffmpeg.stop(ch.id, 'manual');
    return ok(res, { status });
  });

  r.post('/api/channels/:id/restart', async (req, res) => {
    const ch = store.findChannel(req.params.id);
    if (!ch) return fail(res, 404, 'القناة غير موجودة');
    ch.manualStopped = false;
    store.save();
    try {
      const status = await ffmpeg.restart(ch.id);
      return ok(res, { status });
    } catch (e) {
      return fail(res, 400, e.message);
    }
  });

  r.get('/api/channels/:id/log', async (req, res) => {
    const ch = store.findChannel(req.params.id);
    if (!ch) return fail(res, 404, 'القناة غير موجودة');
    const lines = Number((req.query && req.query.lines) || 400);
    return ok(res, { name: ch.name, log: ffmpeg.readLog(ch.id, lines) });
  });

  r.del('/api/channels/:id/log', async (req, res) => {
    const ch = store.findChannel(req.params.id);
    if (!ch) return fail(res, 404, 'القناة غير موجودة');
    ffmpeg.clearLog(ch.id);
    return ok(res, { cleared: true });
  });

  // ---------------- الإعلانات المحلية ----------------
  r.get('/api/ads', async (req, res) => ok(res, { ads: store.get().ads }));

  r.post('/api/ads', async (req, res) => {
    const body = await readJson(req);
    const ad = sanitizeAd(body);
    store.get().ads.push(ad);
    store.save();
    return ok(res, { ad });
  });

  r.put('/api/ads/:id', async (req, res) => {
    const body = await readJson(req);
    const data = store.get();
    const idx = data.ads.findIndex((a) => a.id === req.params.id);
    if (idx === -1) return fail(res, 404, 'الإعلان غير موجود');
    const ad = sanitizeAd(body, data.ads[idx]);
    data.ads[idx] = ad;
    store.save();
    return ok(res, { ad });
  });

  r.del('/api/ads/:id', async (req, res) => {
    const data = store.get();
    const idx = data.ads.findIndex((a) => a.id === req.params.id);
    if (idx === -1) return fail(res, 404, 'الإعلان غير موجود');
    data.ads.splice(idx, 1);
    store.save();
    return ok(res, { deleted: true });
  });

  // ---------------- الرفع ----------------
  r.post('/api/upload', async (req, res) => {
    if (!/multipart\/form-data/i.test(req.headers['content-type'] || '')) {
      return fail(res, 400, 'أرسل الملف كـ multipart/form-data');
    }
    const { fields, files } = await readMultipart(req, { dir: store.DIRS.uploads, maxBytes: 12 * 1024 * 1024 });
    if (!files.length) return fail(res, 400, 'لم يصل أي ملف');
    const f = files[0];
    return ok(res, {
      file: { name: f.filename, original: f.original, size: f.size, url: '/uploads/' + f.filename, path: 'srv/uploads/' + f.filename },
      kind: fields.kind || 'file'
    });
  });

  return r;
}

module.exports = { createRouter, sanitizeSource, sanitizeChannel, sanitizeAd, publicChannel };
