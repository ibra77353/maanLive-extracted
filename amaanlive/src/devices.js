'use strict';
/*
 * devices.js — الاكتشاف التلقائي لأجهزة الفيديو والصوت وقدراتها الفعلية.
 *
 * Windows (الهدف الأساسي):
 *   ffmpeg -list_devices true -f dshow -i dummy        → أسماء أجهزة الفيديو والصوت
 *   ffmpeg -f dshow -list_options true -i video="..."  → الصيغ والدقات ومعدلات الإطارات
 *   ffmpeg -f dshow -list_options true -i audio="..."  → القنوات ومعدلات العينات
 *
 * Linux (للتطوير/الاختبار فقط): عُقد /dev/video* + `ffmpeg -f v4l2 -list_formats all`.
 *
 * لا قوائم ثابتة ولا أجهزة وهمية: كل ما يظهر في الواجهة مأخوذ من مخرجات ffmpeg
 * الحقيقية لهذا الجهاز. القدرات تُخزَّن مؤقتاً ثم تُعاد قراءتها عند تغيّر الأجهزة.
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const store = require('./store');

const IS_WIN = process.platform === 'win32';

const state = {
  devices: [], // [{ key, name, altName, kind, present, caps, capsAt, error }]
  scannedAt: 0,
  scanning: false,
  lastError: null,
  rawListDevices: '',
  rawDevices: ''
};

let watcherTimer = null;
const listeners = [];

// ---------------------------------------------------------------- ffmpeg bin

function ffmpegBin() {
  const settings = store.get().settings;
  const bundled = path.join(store.ROOT, IS_WIN ? 'ffmpeg.exe' : 'ffmpeg');
  const configured = (settings.ffmpegPath || '').trim();
  if (configured) {
    if (path.isAbsolute(configured) && fs.existsSync(configured)) return configured;
    if (!path.isAbsolute(configured)) return configured; // اسم في PATH
  }
  if (fs.existsSync(bundled)) return bundled;
  return IS_WIN ? 'ffmpeg.exe' : 'ffmpeg';
}

function ffmpegStatus() {
  const bin = ffmpegBin();
  const exists = path.isAbsolute(bin) ? fs.existsSync(bin) : null; // null = من PATH
  return { bin, exists, bundled: path.join(store.ROOT, IS_WIN ? 'ffmpeg.exe' : 'ffmpeg') };
}

/** تشغيل ffmpeg وجمع المخرجات (بدون قشرة، وأمان كامل للأسماء العربية والمسافات). */
function run(args, opts) {
  opts = opts || {};
  const bin = opts.bin || ffmpegBin();
  return new Promise((resolve) => {
    let stdout = '';
    let stderr = '';
    let child;
    try {
      child = spawn(bin, args, { windowsHide: true });
    } catch (e) {
      return resolve({ code: -1, stdout, stderr: e.message, spawnError: e.message });
    }
    const timer = setTimeout(() => {
      try { child.kill('SIGKILL'); } catch (e) { /* تجاهل */ }
    }, opts.timeout || 20000);

    child.stdout.on('data', (c) => { stdout += c.toString('utf8'); });
    child.stderr.on('data', (c) => { stderr += c.toString('utf8'); });
    child.on('error', (e) => {
      clearTimeout(timer);
      resolve({ code: -1, stdout, stderr, spawnError: e.message });
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      resolve({ code, stdout, stderr });
    });
  });
}

// ---------------------------------------------------------------- parsers
// الدوال التالية نقية (نص ← بيانات) لتكون قابلة للاختبار وحدها دون أجهزة حقيقية.

/** أجهزة DirectShow من مخرجات `-list_devices true`. */
function parseDshowDevices(text) {
  const out = [];
  const re = /"([^"]+)"\s*\((video|audio)\)/g;
  let m;
  while ((m = re.exec(text))) {
    out.push({ name: m[1], kind: m[2] === 'video' ? 'video' : 'audio', altName: '' });
  }
  const altRe = /Alternative name\s+"([^"]+)"/g;
  const alts = [];
  while ((m = altRe.exec(text))) alts.push(m[1]);
  // الاسم البديل يلي جهازه في المخرجات، لكن الترتيب قد يتخلله أسطر أخرى:
  // نربط الأسماء البديلة بالترتيب لأن ffmpeg يطبعها بنفس ترتيب الأجهزة.
  let i = 0;
  for (const line of text.split(/\r?\n/)) {
    const d = line.match(/"([^"]+)"\s*\((video|audio)\)/);
    if (d) continue;
    const a = line.match(/Alternative name\s+"([^"]+)"/);
    if (a && out[i]) out[i].altName = a[1];
    if (a) i++;
  }
  return out;
}

/**
 * خيارات جهاز فيديو DirectShow من `-list_options true`:
 *   pixel_format=yuyv422  min s=640x480 fps=5 max s=640x480 fps=30
 *   vcodec=mjpeg  min s=1280x720 fps=30 max s=1920x1080 fps=30
 */
function parseDshowVideoOptions(text) {
  const formats = [];
  for (const line of String(text).split(/\r?\n/)) {
    const pf = line.match(/pixel_format=([\w\d]+)/);
    const vc = line.match(/vcodec=([\w\d]+)/);
    if (!pf && !vc) continue;
    const sizes = [];
    const re = /(min|max)?\s*s=(\d+)x(\d+)(?:\s+fps=([\d.]+))?/g;
    let m;
    while ((m = re.exec(line))) {
      sizes.push({
        bound: m[1] || '',
        width: Number(m[2]),
        height: Number(m[3]),
        fps: m[4] ? Number(m[4]) : null
      });
    }
    if (!sizes.length) continue;
    formats.push({
      pixelFormat: pf ? pf[1] : '',
      vcodec: vc ? vc[1] : '',
      sizes
    });
  }
  return formats;
}

/** خيارات جهاز صوت DirectShow: `min ch=1 bits=16 rate=44100 max ch=2 bits=16 rate=48000`. */
function parseDshowAudioOptions(text) {
  const out = [];
  for (const line of String(text).split(/\r?\n/)) {
    if (!/ch=|rate=/.test(line)) continue;
    const entry = { channels: [], sampleRates: [], bits: [] };
    const pairs = line.matchAll(/(min|max)?\s*ch=(\d+)\s+bits=(\d+)\s+rate=(\d+)/g);
    for (const p of pairs) {
      entry.channels.push(Number(p[2]));
      entry.bits.push(Number(p[3]));
      entry.sampleRates.push(Number(p[4]));
    }
    const lone = line.match(/(?<!bits=)\bch=(\d+)\s+bits=(\d+)\s+rate=(\d+)/);
    if (!entry.channels.length && lone) {
      entry.channels.push(Number(lone[1]));
      entry.bits.push(Number(lone[2]));
      entry.sampleRates.push(Number(lone[3]));
    }
    if (entry.channels.length) out.push(entry);
  }
  return out;
}

/** صيغ v4l2 (Linux): `[video4linux2,v4l2 @ …] Raw : yuyv422 : YUYV 4:2:2 : 640x480 1280x720`. */
function parseV4l2Formats(text) {
  const formats = [];
  for (const line of String(text).split(/\r?\n/)) {
    const m = line.match(/:\s+([\w\d]+)\s+:\s+([^:]+):\s*(.*)$/);
    if (!m) continue;
    const sizes = [];
    const sz = /(\d+)x(\d+)/g;
    let s;
    const rest = m[3] || '';
    while ((s = sz.exec(rest))) sizes.push({ bound: '', width: Number(s[1]), height: Number(s[2]), fps: null });
    if (!sizes.length) continue;
    formats.push({ pixelFormat: m[1], vcodec: '', sizes });
  }
  return formats;
}

/** يبني نموذج القدرات الموحّد المستخدم في الواجهة (صيغ، دقات، معدلات إطارات). */
function buildCaps(videoFormats, audioOptions) {
  const resolutions = new Map();
  const pixelFormats = new Set();
  const fpsSet = new Set();
  const modes = [];

  for (const f of videoFormats) {
    if (f.pixelFormat) pixelFormats.add(f.pixelFormat);
    if (f.vcodec) pixelFormats.add(f.vcodec);
    for (const s of f.sizes) {
      resolutions.set(s.width + 'x' + s.height, true);
      if (s.fps) fpsSet.add(s.fps);
    }
    // النطاق الحقيقي: أدنى دقة إلى أعلى دقة معلنة على هذا الخط
    const mins = f.sizes.filter((s) => s.bound === 'min');
    const maxs = f.sizes.filter((s) => s.bound === 'max');
    const base = maxs.length ? maxs : f.sizes;
    for (const mx of base) {
      const lo = mins.find((m) => m.width === mx.width && m.height === mx.height) || mins[0] || mx;
      modes.push({
        pixelFormat: f.pixelFormat,
        vcodec: f.vcodec,
        width: mx.width,
        height: mx.height,
        fpsMin: lo.fps || null,
        fpsMax: mx.fps || null
      });
    }
  }

  const audio = {
    channels: [...new Set((audioOptions || []).flatMap((a) => a.channels))].sort((a, b) => a - b),
    sampleRates: [...new Set((audioOptions || []).flatMap((a) => a.sampleRates))].sort((a, b) => a - b),
    bits: [...new Set((audioOptions || []).flatMap((a) => a.bits))].sort((a, b) => a - b)
  };

  return {
    resolutions: [...resolutions.keys()],
    pixelFormats: [...pixelFormats],
    fps: [...fpsSet].sort((a, b) => a - b),
    modes,
    audio
  };
}

// ---------------------------------------------------------------- scanning

async function scanWindows() {
  const listed = await run(['-hide_banner', '-list_devices', 'true', '-f', 'dshow', '-i', 'dummy'], { timeout: 15000 });
  const raw = listed.stderr || '';
  state.rawListDevices = raw;
  if (/dshow\b.*not found|Unknown input format|dshow is not/i.test(raw)) {
    state.lastError = 'نسخة ffmpeg هذه لا تدعم DirectShow (dshow). استخدم ffmpeg.exe المرفق مع المشروع.';
    return [];
  }
  const found = parseDshowDevices(raw);
  if (!found.length) {
    state.lastError = /Error|error/.test(raw) && !/dummy/.test(raw) ? raw.split(/\r?\n/).slice(-4).join(' ') : null;
  } else {
    state.lastError = null;
  }
  return found.map((d) => ({
    key: d.kind + ':' + d.name,
    name: d.name,
    altName: d.altName,
    kind: d.kind,
    present: true
  }));
}

async function scanLinux() {
  const out = [];
  let nodes = [];
  try {
    nodes = fs.readdirSync('/dev').filter((f) => /^video\d+$/.test(f));
  } catch (e) {
    nodes = [];
  }
  for (const n of nodes) {
    out.push({ key: 'video:/dev/' + n, name: '/dev/' + n, altName: '', kind: 'video', present: true, node: '/dev/' + n });
  }
  const arecord = await run(['-hide_banner', '-f', 'alsa', '-i', 'default'], { timeout: 5000, bin: ffmpegBin() });
  if (!/No such|Error opening|Could not/.test(arecord.stderr || '')) {
    out.push({ key: 'audio:default', name: 'default', altName: '', kind: 'audio', present: true });
  }
  state.lastError = out.length ? null : 'لا توجد أجهزة التقاط على هذا النظام.';
  return out;
}

/** قراءة قدرات جهاز واحد (تُستدعى للجهاز المطلوب فقط لتقليل زمن الفحص). */
async function readCaps(device) {
  if (device.kind === 'audio') {
    const target = IS_WIN ? 'audio="' + device.name + '"' : device.name;
    const args = IS_WIN
      ? ['-hide_banner', '-f', 'dshow', '-list_options', 'true', '-i', target]
      : ['-hide_banner', '-f', 'alsa', '-list_devices', 'true', '-i', 'dummy'];
    const res = await run(args, { timeout: 12000 });
    const caps = buildCaps([], parseDshowAudioOptions(res.stderr || ''));
    return { caps, raw: (res.stderr || '').slice(-4000) };
  }

  if (IS_WIN) {
    const res = await run(
      ['-hide_banner', '-f', 'dshow', '-list_options', 'true', '-i', 'video="' + device.name + '"'],
      { timeout: 15000 }
    );
    const formats = parseDshowVideoOptions(res.stderr || '');
    return { caps: buildCaps(formats, []), raw: (res.stderr || '').slice(-4000) };
  }

  const node = device.node || '/dev/' + device.name.replace(/^\/dev\//, '');
  const res = await run(['-hide_banner', '-f', 'v4l2', '-list_formats', 'all', '-i', node], { timeout: 12000 });
  const formats = parseV4l2Formats(res.stderr || '');
  return { caps: buildCaps(formats, []), raw: (res.stderr || '').slice(-4000) };
}

/** مسح كامل: الأجهزة الحالية + قدراتها. يعلّم المفقود `present:false` بدل حذفه. */
async function scan(opts) {
  opts = opts || {};
  if (state.scanning) return state.devices;
  state.scanning = true;
  try {
    const found = IS_WIN ? await scanWindows() : await scanLinux();
    const prev = new Map(state.devices.map((d) => [d.key, d]));
    const next = [];

    for (const dev of found) {
      const old = prev.get(dev.key);
      const keep = old && old.caps && !opts.forceCaps;
      const capsRes = keep ? { caps: old.caps, raw: old.raw } : await readCaps(dev);
      next.push(Object.assign(dev, {
        caps: capsRes.caps,
        raw: capsRes.raw,
        capsAt: keep ? old.capsAt : Date.now(),
        error: null
      }));
    }
    // الأجهزة التي كانت موجودة واختفت: نحتفظ بقدراتها لعرض حالة «مفصول»
    for (const old of state.devices) {
      if (!next.find((d) => d.key === old.key)) {
        next.push(Object.assign({}, old, { present: false }));
      }
    }
    const before = state.devices.map((d) => d.key + ':' + d.present).join('|');
    state.devices = next;
    state.scannedAt = Date.now();
    const after = next.map((d) => d.key + ':' + d.present).join('|');
    if (before !== after) emit('changed', { devices: next });
    return next;
  } finally {
    state.scanning = false;
  }
}

function list() {
  return {
    devices: state.devices,
    scannedAt: state.scannedAt,
    platform: process.platform,
    ffmpeg: ffmpegStatus(),
    error: state.lastError
  };
}

function find(name, kind) {
  return state.devices.find((d) => d.name === name && (!kind || d.kind === kind)) || null;
}

// ---------------------------------------------------------------- watcher

function on(event, handler) {
  listeners.push({ event, handler });
}

function emit(event, payload) {
  for (const l of listeners) {
    if (l.event === event) {
      try {
        l.handler(payload);
      } catch (e) {
        console.error('[devices] خطأ في مستمع ' + event + ': ' + e.message);
      }
    }
  }
}

/** مراقبة التوصيل/الفصل: مسح دوري (كل `seconds`) يبلّغ عند تغيّر قائمة الأجهزة. */
function startWatcher(seconds) {
  const every = Math.max(2, Number(seconds) || 5) * 1000;
  if (watcherTimer) clearInterval(watcherTimer);
  watcherTimer = setInterval(() => {
    scan().catch((e) => { state.lastError = e.message; });
  }, every);
  watcherTimer.unref && watcherTimer.unref();
  return watcherTimer;
}

function stopWatcher() {
  if (watcherTimer) clearInterval(watcherTimer);
  watcherTimer = null;
}

// ---------------------------------------------------------------- device test

/**
 * اختبار حقيقي لجهاز: التقاط ثانيتين إلى مخرج فارغ. هذا يكشف «الجهاز موجود لكنه
 * مشغول أو لا يفتح» قبل ربطه بقناة.
 */
async function testCapture(source, seconds) {
  const args = ['-hide_banner'];
  if (source.type === 'screen') {
    args.push('-f', IS_WIN ? 'gdigrab' : 'x11grab', '-framerate', String(source.fps || 15));
    if (source.videoSize) args.push('-video_size', source.videoSize);
    args.push('-i', IS_WIN ? 'desktop' : (process.env.DISPLAY || ':0'));
  } else if (IS_WIN) {
    args.push('-f', 'dshow', '-rtbufsize', '256M', '-thread_queue_size', '1024');
    if (source.pixelFormat) args.push('-pixel_format', source.pixelFormat);
    else if (source.vcodec) args.push('-vcodec', source.vcodec);
    if (source.videoSize) args.push('-video_size', source.videoSize);
    if (source.fps) args.push('-framerate', String(source.fps));
    args.push('-i', 'video="' + source.videoDevice + '"' + (source.audioDevice ? ':audio="' + source.audioDevice + '"' : ''));
  } else {
    args.push('-f', 'v4l2', '-thread_queue_size', '1024');
    if (source.pixelFormat) args.push('-input_format', source.pixelFormat);
    if (source.videoSize) args.push('-video_size', source.videoSize);
    if (source.fps) args.push('-framerate', String(source.fps));
    args.push('-i', source.videoDevice);
    if (source.audioDevice) args.push('-f', 'alsa', '-i', source.audioDevice);
  }
  args.push('-t', String(seconds || 2), '-f', 'null', '-');

  const started = Date.now();
  const res = await run(args, { timeout: ((seconds || 2) + 12) * 1000 });
  const text = (res.stderr || '');
  const ok = res.code === 0 || /frame=\s*\d+/.test(text);
  const frames = (text.match(/frame=\s*(\d+)/g) || []).map((s) => Number(s.replace(/\D/g, ''))).pop() || 0;
  return {
    ok,
    frames,
    ms: Date.now() - started,
    message: ok
      ? 'نجح الالتزام بالجهاز (' + frames + ' إطار في ' + Math.round((Date.now() - started) / 100) / 10 + ' ث)'
      : firstError(text) || 'فشل فتح الجهاز',
    stderr: text.slice(-2000)
  };
}

/** أول سطر خطأ مفيد من مخرجات ffmpeg (بدل بثّ السجل كاملاً). */
function firstError(text) {
  const lines = String(text).split(/\r?\n/).filter((l) => /error|could not|failed|busy|no such|cannot|invalid/i.test(l));
  return lines.length ? lines[lines.length - 1].trim() : null;
}

module.exports = {
  IS_WIN,
  ffmpegBin,
  ffmpegStatus,
  run,
  scan,
  list,
  find,
  readCaps,
  startWatcher,
  stopWatcher,
  on,
  testCapture,
  firstError,
  // دوال نقية للاختبار
  parseDshowDevices,
  parseDshowVideoOptions,
  parseDshowAudioOptions,
  parseV4l2Formats,
  buildCaps
};
