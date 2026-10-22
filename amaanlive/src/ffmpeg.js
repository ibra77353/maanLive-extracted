'use strict';
/*
 * ffmpeg.js — نواة البث: إدارة عمليات FFmpeg وإنتاج HLS.
 *
 * لكل قناة: تشغيل/إيقاف/إعادة، إعادة تشغيل تلقائية عند التعطل مع تراجع زمني،
 * سجلات مصنّفة، إحصاءات (frames/bitrate من مخرجات ffmpeg + حجم المقاطع المخدومة)،
 * عدّ المشاهدين لاحتساب الخمول، ومعالجة انفصال جهاز الالتقاط.
 * كل العمليات حقيقية: لا حالة شكلية واحدة.
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const store = require('./store');
const devices = require('./devices');

/** حالة كل قناة قيد التشغيل أو المراقبة. */
const runtime = new Map();
const listeners = [];

function emit(event, payload) {
  for (const l of listeners) if (l.event === event) {
    try {
      l.handler(payload);
    } catch (e) {
      console.error('[ffmpeg] مستمع ' + event + ': ' + e.message);
    }
  }
}

function on(event, handler) {
  listeners.push({ event, handler });
}

// ---------------------------------------------------------------- helpers

function hlsRoot() {
  const settings = store.get().settings;
  const rel = settings.hlsRoot || 'srv/hls';
  return path.isAbsolute(rel) ? rel : path.join(store.ROOT, rel);
}

function channelDir(id) {
  return path.join(hlsRoot(), id);
}

function logPath(id) {
  return store.channelLogPath(id);
}

function rt(id) {
  if (!runtime.has(id)) {
    runtime.set(id, {
      state: 'stopped',
      pid: null,
      child: null,
      startedAt: null,
      runStartedAt: null,
      stoppedAt: null,
      restarts: 0,
      lastError: null,
      lastExitCode: null,
      stopping: false,
      stopReason: null,
      logDrain: null,
      viewers: new Map(), // ip → آخر ظهور
      heartbeats: new Map(), // ip → آخر نبضة
      lastViewerAt: null,
      servedBytes: 0,
      ingestFps: 0,
      ingestBitrate: '',
      outputSizeKb: 0,
      outTime: '',
      dropped: 0,
      deviceLost: false,
      timer: null
    });
  }
  return runtime.get(id);
}

function isRunning(id) {
  const s = runtime.get(id);
  return Boolean(s && s.child && !s.child.killed && s.state === 'running');
}

// ---------------------------------------------------------------- logging

/** تصنيف سطر ffmpeg حسب خطورته على عمل القناة (يُستخدم في عمود «آخر الأخطاء»). */
function classify(text) {
  const t = String(text);
  if (/could not find|no such device|device or resource busy|cannot open|unknown input format|permission denied|invalid argument|not found|failed to (open|initialize)|i\/o error|end of file/i.test(t)) {
    return 'high';
  }
  if (/timed out|timeout|connection|no route|temporarily|will reconnect|http error|404|503/i.test(t)) return 'medium';
  if (/drop|late|queue|overrun|slow/i.test(t)) return 'low';
  return null;
}

function appendLog(id, line) {
  const settings = store.get().settings;
  const maxBytes = Math.max(64, Number(settings.logMaxLines) || 800) * 200;
  const file = logPath(id);
  try {
    fs.appendFileSync(file, line + '\n', 'utf8');
    const st = fs.statSync(file);
    if (st.size > maxBytes) {
      const tail = fs.readFileSync(file, 'utf8').split('\n').slice(-(Number(settings.logMaxLines) || 800));
      fs.writeFileSync(file, tail.join('\n'), 'utf8');
    }
  } catch (e) {
    console.error('[ffmpeg] تعذّر كتابة سجل القناة: ' + e.message);
  }
}

function readLog(id, lines) {
  const file = logPath(id);
  if (!fs.existsSync(file)) return '';
  const all = fs.readFileSync(file, 'utf8').split('\n');
  return all.slice(-(Number(lines) || 400)).join('\n');
}

function clearLog(id) {
  try {
    fs.writeFileSync(logPath(id), '', 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

// ---------------------------------------------------------------- ffmpeg args

function sourceOf(channel) {
  const src = store.findSource(channel.sourceId);
  if (!src) throw new Error('القناة غير مرتبطة بمصدر');
  return src;
}

/**
 * وسائط الإدخال: DirectShow على Windows، v4l2 على غيرها، وgdigrab/x11grab لالتقاط الشاشة.
 * `platform` قابل للتمرير لاختبار فرع ويندوز من أي منصة.
 */
function buildInputArgs(source, platform) {
  const win = (platform || process.platform) === 'win32';
  const args = [];

  if (source.type === 'screen') {
    args.push('-f', win ? 'gdigrab' : 'x11grab', '-framerate', String(source.fps || 15));
    if (source.videoSize) args.push('-video_size', source.videoSize);
    args.push('-i', win ? 'desktop' : (process.env.DISPLAY || ':0'));
    if (source.audioDevice && win) {
      args.push('-f', 'dshow', '-i', 'audio="' + source.audioDevice + '"');
    }
    return args;
  }

  if (win) {
    args.push('-f', 'dshow', '-rtbufsize', '256M', '-thread_queue_size', '1024');
    if (source.pixelFormat) args.push('-pixel_format', source.pixelFormat);
    else if (source.vcodec) args.push('-vcodec', source.vcodec);
    if (!source.captureSafeMode) {
      if (source.videoSize) args.push('-video_size', source.videoSize);
      if (source.fps) args.push('-framerate', String(source.fps));
    }
    args.push('-i', 'video="' + source.videoDevice + '"' +
      (source.audioDevice ? ':audio="' + source.audioDevice + '"' : ''));
    return args;
  }

  // Linux (تطوير/اختبار)
  args.push('-f', 'v4l2', '-thread_queue_size', '1024');
  if (source.pixelFormat) args.push('-input_format', source.pixelFormat);
  else if (source.vcodec === 'mjpeg') args.push('-input_format', 'mjpeg');
  if (!source.captureSafeMode) {
    if (source.videoSize) args.push('-video_size', source.videoSize);
    if (source.fps) args.push('-framerate', String(source.fps));
  }
  args.push('-i', source.videoDevice || '/dev/video0');
  if (source.audioDevice) args.push('-f', 'alsa', '-i', source.audioDevice);
  return args;
}

/** ارتفاع الإخراج الفعلي (للترميز ولتحجيم الشعار المائي). */
function outputHeight(channel, source) {
  const q = String(channel.quality || 'copy');
  const m = /^(\d{3,4})p$/.exec(q);
  if (m) return Number(m[1]);
  const vs = /^(\d+)x(\d+)$/.exec(source && source.videoSize ? source.videoSize : '');
  if (vs) return Number(vs[2]);
  return 720;
}

/**
 * وسائط إخراج HLS: ترميز x264 أو نسخ المصدر، تقسيم المقاطع،
 * وإضافة الشعار المائي (اختياري) عبر مرشّح overlay.
 */
function buildOutputArgs(channel, source, dir, watermark) {
  const settings = store.get().settings;
  const args = [];
  const height = outputHeight(channel, source);
  const quality = String(channel.quality || 'copy');

  const gop = Math.max(1, Math.round((Number(settings.gopSeconds) || 2) * (Number(channel.fps) || Number(source.fps) || 25)));

  if (quality === 'copy' && !watermark) {
    args.push('-c:v', 'copy');
  } else {
    args.push('-c:v', 'libx264');
    args.push('-preset', settings.x264Preset || 'veryfast');
    args.push('-pix_fmt', 'yuv420p');
    args.push('-g', String(gop), '-keyint_min', String(gop), '-sc_threshold', '0');
    if (Number(settings.x264Threads)) args.push('-threads', String(Number(settings.x264Threads)));
    if (quality !== 'copy') args.push('-vf', 'scale=-2:' + height);
    const bitrate = bitrateForQuality(quality, height);
    if (bitrate) {
      args.push('-b:v', bitrate, '-maxrate', bitrate, '-bufsize', (parseInt(bitrate, 10) * 2) + 'k');
    }
  }

  if (watermark) {
    const pct = Math.max(2, Math.min(60, Number(settings.logoSizePct) || 10));
    const opacity = Math.max(5, Math.min(100, Number(settings.logoOpacityPct) || 60)) / 100;
    const logoH = Math.max(12, Math.round((height * pct) / 100));
    const pos = overlayPosition(settings.logoPosition);
    const filter =
      '[1:v]format=rgba,scale=w=-2:h=' + logoH + ',colorchannelmixer=aa=' + opacity + '[wm];' +
      '[0:v][wm]overlay=' + pos + ':format=auto[v]';
    args.push('-filter_complex', filter, '-map', '[v]', '-map', '0:a?');
  }

  args.push('-c:a', 'aac', '-b:a', settings.audioBitrate || '128k', '-ar', '44100');

  args.push('-f', 'hls');
  args.push('-hls_time', String(Number(settings.hlsTime) || 2));
  args.push('-hls_list_size', String(Number(settings.hlsListSize) || 6));
  args.push('-hls_delete_threshold', String(Number(settings.hlsDeleteThreshold) || 4));
  args.push('-hls_flags', 'delete_segments+independent_segments+program_date_time');
  args.push('-hls_segment_filename', path.join(dir, 'seg_%05d.ts'));
  args.push(path.join(dir, 'index.m3u8'));
  return args;
}

function bitrateForQuality(quality, height) {
  if (quality === 'copy' || !quality) return null;
  const table = { 240: '400k', 360: '800k', 480: '1400k', 720: '2500k', 1080: '4500k' };
  return table[height] || null;
}

function overlayPosition(position) {
  switch (position) {
    case 'top-left': return '20:20';
    case 'bottom-left': return '20:H-h-20';
    case 'bottom-right': return 'W-w-20:H-h-20';
    case 'center': return '(W-w)/2:(H-h)/2';
    default: return 'W-w-20:20';
  }
}

/** مسار ملف الشعار المائي إن كان موجوداً فعلاً على القرص. */
function resolveLogo() {
  const img = store.get().settings.logoImage;
  if (!img) return null;
  const cleaned = String(img).replace(/^\/+/, '').replace(/^srv\/uploads\//, '');
  const file = path.join(store.DIRS.uploads, cleaned);
  return fs.existsSync(file) ? file : null;
}

// ---------------------------------------------------------------- viewer stats

/*
 * عدّاد تراكمي لمرات المشاهدة منذ إقلاع البرنامج (لِـ«إجمالي المشاهدين» في اللوحة):
 * تُحتسب مشاهدة جديدة كلما بدأ المشاهد يشاهد بعد انقطاع أطول من نافذة النشاط،
 * فيزداد العدّاد مع كل مشاهدة من نفس الجهاز أيضاً. لا يُصفَّر إلا بإعادة التشغيل.
 */
let viewersTotal = 0;
const lastViewerSeen = new Map(); // «القناة|الطرفية» → آخر ظهور

function noteViewer(channelId, ip) {
  if (!ip) return;
  const key = channelId + '|' + ip;
  const now = Date.now();
  const windowMs = Math.max(5, Number(store.get().settings.viewerWindowSeconds) || 20) * 1000;
  const last = lastViewerSeen.get(key);
  if (!last || now - last > windowMs) viewersTotal += 1;
  lastViewerSeen.set(key, now);
}

/** عدد مرات المشاهدة منذ إقلاع البرنامج (تزداد مع كل مشاهدة جديدة لكل قناة). */
function totalViewersSeen() {
  return viewersTotal;
}

/** يُسجّل قراءة من مسار HLS لقناة: آخر ظهور + حجم مخدوم (لعدّ الخمول والبيانات). */
function noteHlsAccess(channelId, ip, bytes) {
  const s = rt(channelId);
  if (ip) { s.viewers.set(ip, Date.now()); noteViewer(channelId, ip); }
  if (bytes) s.servedBytes += Number(bytes) || 0;
  s.lastViewerAt = Date.now();
}

function heartbeat(channelId, ip) {
  const s = rt(channelId);
  if (ip) { s.heartbeats.set(ip, Date.now()); noteViewer(channelId, ip); }
  s.lastViewerAt = Date.now();
}

/** مشاهدون فعليون = قراء HLS حديثون أو نبضات مشغّل حديثة. */
function viewerCount(channelId) {
  const s = runtime.get(channelId);
  if (!s) return 0;
  const windowMs = Math.max(5, Number(store.get().settings.viewerWindowSeconds) || 20) * 1000;
  const now = Date.now();
  const ips = new Set();
  for (const [ip, ts] of s.viewers) if (now - ts < windowMs) ips.add(ip);
  for (const [ip, ts] of s.heartbeats) if (now - ts < windowMs) ips.add(ip);
  // تنظيف القديم
  for (const [ip, ts] of s.viewers) if (now - ts > windowMs * 5) s.viewers.delete(ip);
  for (const [ip, ts] of s.heartbeats) if (now - ts > windowMs * 5) s.heartbeats.delete(ip);
  return ips.size;
}

function lastViewerAt(channelId) {
  const s = runtime.get(channelId);
  return s ? s.lastViewerAt : null;
}

/** حجم بيانات HLS المولّدة على القرص لهذه القناة. */
function bytesOut(channelId) {
  const dir = channelDir(channelId);
  let total = 0;
  try {
    for (const f of fs.readdirSync(dir)) {
      if (/\.(ts|m3u8)$/.test(f)) total += fs.statSync(path.join(dir, f)).size;
    }
  } catch (e) {
    total = 0;
  }
  return total;
}

// ---------------------------------------------------------------- process control

/**
 * يستخرج الإحصاءات من سطر التقدّم فقط.
 * مهم: سطور إعدادات المرمّز (x264) تحمل أيضاً `bitrate=800`، وقراءتها تعني عرض رقم ثابت
 * كأنه باندويث البث. لذلك نقبل الأسطر التي تحمل `frame=` وحدها.
 */
function parseStats(line, s) {
  if (!/frame=\s*\d+/.test(line)) return;
  const fps = line.match(/fps=\s*([\d.]+)/);
  if (fps) s.ingestFps = Number(fps[1]);
  const br = line.match(/bitrate=\s*([^\s]+)/);
  if (br && br[1] !== 'N/A') s.ingestBitrate = br[1];
  const size = line.match(/size=\s*([\d.]+)(\w+)/);
  if (size) {
    const unit = size[2].toLowerCase();
    const mult = unit.startsWith('m') ? 1024 : unit.startsWith('k') ? 1 : 1;
    s.outputSizeKb = Number(size[1]) * mult;
  }
  const time = line.match(/time=([\d:.]+)/);
  if (time) s.outTime = time[1];
  const drop = line.match(/drop=\s*(\d+)/);
  if (drop) s.dropped = Number(drop[1]);
}

/**
 * تشغيل قناة. `opts.restart` داخلي لإعادة التشغيل التلقائية.
 * يرمي خطأً واضحاً إن كان المصدر مفقوداً أو جهازه مفصولاً — الواجهة تعرضه للمستخدم.
 */
async function start(channelId, opts) {
  opts = opts || {};
  const channel = store.findChannel(channelId);
  if (!channel) throw new Error('القناة غير موجودة');
  const source = sourceOf(channel);
  const s = rt(channelId);

  if (isRunning(channelId) || s.state === 'starting') return statusOf(channelId);

  if (source.type !== 'screen') {
    const dev = devices.find(source.videoDevice, 'video');
    if (dev && !dev.present) throw new Error('جهاز الالتقاط «' + source.videoDevice + '» غير موصول');
  }

  fs.mkdirSync(channelDir(channelId), { recursive: true });
  const bin = devices.ffmpegBin();
  const watermark = resolveLogo();
  const inputArgs = buildInputArgs(source);
  const outputArgs = buildOutputArgs(channel, source, channelDir(channelId), watermark);

  // ترتيب الأمر: الإدخال المباشر (صفر)، ثم الشعار المائي (واحد) إن وُجد، ثم الإخراج.
  const args = ['-hide_banner', '-nostdin', '-loglevel', 'info', ...inputArgs];
  if (watermark) args.push('-loop', '1', '-i', watermark);
  args.push(...outputArgs);

  s.state = 'starting';
  s.stopping = false;
  s.stopReason = null;
  s.deviceLost = false;
  s.lastError = null;
  appendLog(channelId, '\n=== [' + new Date().toISOString() + '] تشغيل: ' + bin + ' ' + args.join(' ') + ' ===');

  let child;
  try {
    child = spawn(bin, args, { cwd: store.ROOT, windowsHide: true });
  } catch (e) {
    s.state = 'error';
    s.lastError = 'تعذّر تشغيل ffmpeg: ' + e.message;
    appendLog(channelId, s.lastError);
    throw new Error(s.lastError);
  }

  s.child = child;
  s.pid = child.pid;
  s.startedAt = Date.now();
  s.runStartedAt = Date.now();
  if (!opts.restart) {
    s.restarts = 0;
  }

  let buffer = '';
  const onData = (chunk) => {
    buffer += chunk.toString('utf8');
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop();
    for (const line of lines) {
      if (!line.trim()) continue;
      parseStats(line, s);
      const level = classify(line);
      if (level === 'high') s.lastError = line.trim();
      if (level || /Error|error|warning|frame=/.test(line)) {
        appendLog(channelId, '[' + level + '] ' + line.trim());
      }
    }
  };

  child.stdout.on('data', onData);
  child.stderr.on('data', onData);

  child.on('spawn', () => {
    s.state = 'running';
    console.log('[ffmpeg] «' + channel.name + '» تعمل (pid ' + child.pid + ')');
    emit('channel', { id: channelId, state: 'running' });
  });

  child.on('error', (e) => {
    s.lastError = devices.firstError(e.message) || e.message;
    appendLog(channelId, '[high] ' + s.lastError);
  });

  child.on('close', (code, signal) => {
    s.child = null;
    s.pid = null;
    s.stoppedAt = Date.now();
    s.lastExitCode = code;
    const ranFor = s.runStartedAt ? Date.now() - s.runStartedAt : 0;

    if (s.stopping || s.stopReason) {
      s.state = s.stopReason === 'error' ? 'error' : 'stopped';
      console.log('[ffmpeg] «' + channel.name + '» أُوقفت (' + (s.stopReason || 'manual') + ')');
      emit('channel', { id: channelId, state: s.state });
      return;
    }

    const settings = store.get().settings;
    appendLog(channelId, '[exit] code=' + code + ' signal=' + signal);
    emit('channel', { id: channelId, state: 'exited', code });

    const deviceLost = s.deviceLost;
    const canRestart = channel.enabled && !channel.manualStopped &&
      (deviceLost || (settings.autoRestartCrashed !== false && s.restarts < (Number(settings.maxRestarts) || 20)));

    if (canRestart) {
      if (ranFor > 60000) s.restarts = 0; // عمل جيداً: نُصفّر عدّاد العقوبة
      s.restarts += 1;
      s.state = deviceLost ? 'waiting-device' : 'restarting';
      const backoff = deviceLost ? 3000 : (Number(settings.restartBackoffMs) || 5000);
      const reason = s.lastError ? ' (' + s.lastError + ')' : '';
      appendLog(channelId, '[restart] إعادة تشغيل رقم ' + s.restarts + ' بعد ' + backoff + 'ms' + reason);
      console.log('[ffmpeg] إعادة تشغيل «' + channel.name + '» بعد ' + backoff + 'ms');
      if (s.timer) clearTimeout(s.timer);
      s.timer = setTimeout(() => {
        s.timer = null;
        start(channelId, { restart: true }).catch((e) => {
          s.state = 'error';
          s.lastError = e.message;
          appendLog(channelId, '[high] فشل إعادة التشغيل: ' + e.message);
          emit('channel', { id: channelId, state: 'error' });
        });
      }, backoff);
      s.timer.unref && s.timer.unref();
    } else {
      s.state = 'error';
      if (!s.lastError) s.lastError = 'توقّف ffmpeg فجأة (رمز الخروج ' + code + ')';
      appendLog(channelId, '[high] توقّف نهائي: ' + s.lastError);
      console.error('[ffmpeg] «' + channel.name + '» توقّفت نهائياً: ' + s.lastError);
      emit('channel', { id: channelId, state: 'error' });
    }
  });

  return statusOf(channelId);
}

/** إيقاف قناة. `reason`: manual | idle | schedule | device-lost | shutdown | error */
async function stop(channelId, reason) {
  const s = rt(channelId);
  if (s.timer) {
    clearTimeout(s.timer);
    s.timer = null;
  }
  s.stopReason = reason || 'manual';

  if (!s.child) {
    s.state = 'stopped';
    s.stopping = false;
    return statusOf(channelId);
  }
  s.stopping = true;
  s.state = 'stopping';
  const child = s.child;
  const pid = child.pid;
  const done = new Promise((resolve) => child.once('close', () => resolve(true)));
  try {
    if (devices.IS_WIN) {
      // إيقاف لطيف أولاً ثم إنهاء قسري (FFmpeg يتجاهل الإشارات على Windows)
      await new Promise((resolve) => {
        const k = spawn('taskkill', ['/PID', String(pid), '/T'], { windowsHide: true });
        k.on('close', () => resolve(true));
        k.on('error', () => resolve(true));
      });
      const finished = await Promise.race([done.then(() => true), delay(2500).then(() => false)]);
      if (!finished) {
        await new Promise((resolve) => {
          const k = spawn('taskkill', ['/PID', String(pid), '/T', '/F'], { windowsHide: true });
          k.on('close', () => resolve(true));
          k.on('error', () => resolve(true));
        });
      }
    } else {
      child.kill('SIGTERM');
      const finished = await Promise.race([done.then(() => true), delay(4000).then(() => false)]);
      if (!finished) child.kill('SIGKILL');
    }
  } catch (e) {
    console.error('[ffmpeg] خطأ أثناء الإيقاف: ' + e.message);
  }
  await Promise.race([done, delay(4000)]);
  s.stopping = false;
  s.child = null;
  s.pid = null;
  s.state = 'stopped';
  appendLog(channelId, '=== [' + new Date().toISOString() + '] إيقاف (' + (reason || 'manual') + ') ===');
  return statusOf(channelId);
}

function delay(ms) {
  return new Promise((resolve) => {
    const t = setTimeout(resolve, ms);
    t.unref && t.unref();
  });
}

async function restart(channelId) {
  await stop(channelId, 'restart');
  await delay(600);
  const s = rt(channelId);
  s.restarts = 0;
  return start(channelId);
}

async function stopAll(reason) {
  for (const ch of store.get().channels) {
    if (rt(ch.id).child) {
      try {
        await stop(ch.id, reason || 'shutdown');
      } catch (e) {
        console.error('[ffmpeg] ' + e.message);
      }
    }
  }
}

/** حذف مجلد HLS لقناة (يُستخدم عند حذف القناة). */
function purgeChannel(id) {
  try {
    fs.rmSync(channelDir(id), { recursive: true, force: true });
  } catch (e) {
    console.error('[ffmpeg] تعذّر حذف مجلد البث: ' + e.message);
  }
}

/** إحصاءات تشغيل قناة للواجهة. */
function statusOf(id) {
  const s = runtime.get(id);
  const channel = store.findChannel(id);
  if (!s) {
    return {
      id,
      state: 'stopped',
      pid: null,
      viewers: 0,
      uptimeMs: 0,
      restarts: 0,
      lastError: null,
      bytesOut: 0,
      servedBytes: 0,
      fps: 0,
      bitrate: '',
      dropped: 0
    };
  }
  let state = s.state;
  if (!s.pid && state === 'running') state = 'stopped';
  if (channel && channel.manualStopped && !s.child && state !== 'restarting') state = 'stopped';
  return {
    id,
    name: channel ? channel.name : null,
    state,
    pid: s.pid,
    viewers: viewerCount(id),
    uptimeMs: s.runStartedAt && s.child ? Date.now() - s.runStartedAt : 0,
    restarts: s.restarts,
    lastError: s.lastError,
    stopReason: s.stopReason,
    bytesOut: bytesOut(id),
    servedBytes: s.servedBytes,
    fps: s.ingestFps,
    bitrate: s.ingestBitrate,
    dropped: s.dropped
  };
}

/** هل العملية المسجّلة ما زالت حيّة في النظام؟ شبكة أمان إن لم يصل حدث إغلاق العملية. */
function pidAlive(pid) {
  if (!pid) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return e.code === 'EPERM'; // موجودة لكن بلا صلاحية إرسال إشارة
  }
}

/** عمر آخر تحديث لقائمة التشغيل index.m3u8 بالملّي ثانية (null إن لم تُكتب بعد). */
function playlistAgeMs(id) {
  try {
    return Date.now() - fs.statSync(path.join(channelDir(id), 'index.m3u8')).mtimeMs;
  } catch (e) {
    return null;
  }
}

/**
 * قراءة حالة قناة للفحص الدوري — لا تغيّر أي شيء.
 * `playlistAgeMs === null` تعني أن ffmpeg لم تُنتج قائمة تشغيل بعد.
 */
function health(id) {
  const s = runtime.get(id);
  const channel = store.findChannel(id);
  if (!s || !channel) return null;
  return {
    id,
    name: channel.name,
    state: s.state,
    hasChild: Boolean(s.child),
    pid: s.pid || null,
    pidAlive: pidAlive(s.pid),
    pendingRestart: Boolean(s.timer),
    uptimeMs: s.runStartedAt && s.child ? Date.now() - s.runStartedAt : 0,
    playlistAgeMs: playlistAgeMs(id),
    restarts: s.restarts
  };
}

/**
 * إعادة تشغيل قناة بعد تعطّل أو تجمّد، مع احترام الإعداد «إعادة تشغيل القناة تلقائياً
 * عند التعطل» وحدّ المحاولات (maxRestarts). تُستدعى من المراقب الدوري (monitor.js)
 * للحالات التي لا يبلغ عنها حدث إغلاق العملية: عملية مفقودة، أو عملية متجمّدة.
 * تعيد true إن جُدولت إعادة التشغيل.
 */
async function revive(channelId, reason) {
  const s = runtime.get(channelId);
  const channel = store.findChannel(channelId);
  if (!s || !channel) return false;
  if (!channel.enabled || channel.manualStopped) return false;
  if (s.timer || s.stopping) return false; // إعادة تشغيل مجدولة بالفعل

  const settings = store.get().settings;
  const maxRestarts = Number(settings.maxRestarts) || 20;
  if (settings.autoRestartCrashed === false || s.restarts >= maxRestarts) {
    s.state = 'error';
    s.lastError = reason + (s.restarts >= maxRestarts ? ' — بلغنا حدّ محاولات الإعادة (' + maxRestarts + ')' : '');
    appendLog(channelId, '[high] ' + s.lastError);
    console.error('[monitor] «' + channel.name + '» توقّفت نهائياً: ' + s.lastError);
    emit('channel', { id: channelId, state: 'error' });
    return false;
  }

  if (s.child) await stop(channelId, 'revive'); // نتخلّص من العملية المتجمّدة أولاً

  s.restarts += 1;
  s.state = 'restarting';
  s.lastError = reason;
  const backoff = Math.max(1000, Number(settings.restartBackoffMs) || 5000);
  appendLog(channelId, '[restart] إعادة تشغيل تلقائية رقم ' + s.restarts + ' (' + reason + ') بعد ' + backoff + 'ms');
  console.log('[monitor] إعادة تشغيل «' + channel.name + '» (' + reason + ') بعد ' + backoff + 'ms');
  emit('channel', { id: channelId, state: 'restarting' });

  if (s.timer) clearTimeout(s.timer);
  s.timer = setTimeout(() => {
    s.timer = null;
    start(channelId, { restart: true }).catch((e) => {
      s.state = 'error';
      s.lastError = e.message;
      appendLog(channelId, '[high] فشل إعادة التشغيل: ' + e.message);
      emit('channel', { id: channelId, state: 'error' });
    });
  }, backoff);
  s.timer.unref && s.timer.unref();
  return true;
}

function statusAll() {
  return store.get().channels.map((c) => statusOf(c.id));
}

function runningCount() {
  return store.get().channels.filter((c) => isRunning(c.id)).length;
}

/** إجمالي البيانات الخارجة لجميع القنوات (للوحة المراقبة). */
function totalBytesOut() {
  return store.get().channels.reduce((sum, c) => sum + bytesOut(c.id), 0);
}

function totalServedBytes() {
  let sum = 0;
  for (const s of runtime.values()) sum += s.servedBytes || 0;
  return sum;
}

/**
 * طابور الإقلاع: تشغيل القنوات المفعّلة التي «تشغيل تلقائي» مع فاصل زمني،
 * احتراماً لأجهزة الالتقاط (تشغيل عدة قنوات في لحظة واحدة يفشل عادةً).
 */
async function startupQueue() {
  const settings = store.get().settings;
  const channels = store.get().channels.filter((c) => c.enabled && c.autoStart && !c.manualStopped);
  const concurrency = Math.max(1, Number(settings.startupConcurrency) || 1);
  const gap = Math.max(500, Number(settings.startupQueueDelayMs) || 4000);
  console.log('[ffmpeg] طابور الإقلاع: ' + channels.length + ' قناة');

  let index = 0;
  const worker = async () => {
    while (index < channels.length) {
      const ch = channels[index++];
      try {
        await start(ch.id);
      } catch (e) {
        console.error('[ffmpeg] تعذّر تشغيل «' + ch.name + '»: ' + e.message);
        const s = rt(ch.id);
        s.state = 'error';
        s.lastError = e.message;
        emit('channel', { id: ch.id, state: 'error' });
      }
      await delay(gap);
    }
  };
  await Promise.all(Array.from({ length: concurrency }, worker));
}

/**
 * إنهاء عمليات ffmpeg العالقة من تشغيل سابق (بعد تعطّل الخادم مثلاً).
 * يقف عند عمليات هذا المشروع فقط: تُطابق سطر الأمر الذي يحمل مجلد HLS الخاص بالمشروع،
 * فلا تُلمس أي عملية ffmpeg أخرى يملكها المستخدم.
 */
async function killStaleProcesses() {
  const marker = hlsRoot().replace(/\\/g, '/');
  const script = devices.IS_WIN
    ? '$m=\'' + marker.replace(/'/g, "''") + '\'; Get-CimInstance Win32_Process -Filter "Name=\'ffmpeg.exe\'" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -and $_.CommandLine.Replace("\\","/").Contains($m) } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }'
    : 'pkill -f ' + JSON.stringify(marker);
  const cmd = devices.IS_WIN ? 'powershell' : 'sh';
  const cmdArgs = devices.IS_WIN ? ['-NoProfile', '-Command', script] : ['-c', script];
  await new Promise((resolve) => {
    const child = spawn(cmd, cmdArgs, { windowsHide: true });
    child.on('close', () => resolve(true));
    child.on('error', () => resolve(true));
  });
}

/** علامة انفصال جهاز لقناة تعمل: تُوقفها وتنتظر عودة الجهاز. */
async function handleDeviceLost(videoDevice) {
  for (const ch of store.get().channels) {
    const src = store.findSource(ch.sourceId);
    if (!src || src.videoDevice !== videoDevice) continue;
    const s = rt(ch.id);
    if (!s.child) continue;
    s.deviceLost = true;
    s.lastError = 'انفصل جهاز الالتقاط «' + videoDevice + '»';
    appendLog(ch.id, '[high] ' + s.lastError);
    console.warn('[ffmpeg] ' + s.lastError + ' — إيقاف «' + ch.name + '»');
    await stop(ch.id, 'device-lost');
    // ننتظر عودة الجهاز ثم نعيد التشغيل تلقائياً
    s.state = 'waiting-device';
    emit('channel', { id: ch.id, state: 'waiting-device' });
  }
}

async function handleDeviceReturned(videoDevice) {
  for (const ch of store.get().channels) {
    const src = store.findSource(ch.sourceId);
    if (!src || src.videoDevice !== videoDevice) continue;
    const s = rt(ch.id);
    if (!ch.enabled || ch.manualStopped) continue;
    if (s.child) continue;
    if (s.state !== 'waiting-device' && !ch.autoStart) continue;
    s.deviceLost = false;
    console.log('[ffmpeg] عاد الجهاز «' + videoDevice + '» — تشغيل «' + ch.name + '»');
    try {
      await start(ch.id, { restart: true });
    } catch (e) {
      console.error('[ffmpeg] ' + e.message);
    }
  }
}

module.exports = {
  start,
  stop,
  restart,
  stopAll,
  purgeChannel,
  isRunning,
  statusOf,
  statusAll,
  health,
  revive,
  runningCount,
  readLog,
  clearLog,
  logPath,
  hlsRoot,
  channelDir,
  noteHlsAccess,
  heartbeat,
  viewerCount,
  totalViewersSeen,
  lastViewerAt,
  bytesOut,
  totalBytesOut,
  totalServedBytes,
  startupQueue,
  killStaleProcesses,
  handleDeviceLost,
  handleDeviceReturned,
  classify,
  buildInputArgs,
  buildOutputArgs,
  on
};
