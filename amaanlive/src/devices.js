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

/** مهلة إعادة محاولة قراءة قدرات جهاز فشلت قراءته (لا نلحّ على جهاز مشغول). */
const CAPS_RETRY_MS = 30000;

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

// ---------------------------------------------------------------- التوصية التلقائية

/** كثافة البكسل المثالية لكروت USB (1280×720) والحدّ الأدنى المقبول (640×480). */
const TARGET_PIXELS = 921600;
const MIN_PIXELS = 307200;

/** الصيغ الخام (`pixel_format=`) والمرمّزات (`vcodec=`) المكتشفة في أوضاع الجهاز. */
function capsFormats(caps) {
  const modes = (caps && caps.modes) || [];
  return {
    pixelFormats: [...new Set(modes.map((m) => m.pixelFormat).filter(Boolean))],
    codecs: [...new Set(modes.map((m) => m.vcodec).filter(Boolean))]
  };
}

/**
 * تقييم وضع: الأقرب إلى 1280×720 هو الأفضل، مع عقوبة للدقات الأثقل من الهدف (-0.5)
 * وللأدنى من 640×480 (-0.3) — نفس معادلة النسخة الأصلية.
 */
function modeScore(mode) {
  const px = (mode.width || 0) * (mode.height || 0);
  let score = -Math.abs(px - TARGET_PIXELS) / TARGET_PIXELS;
  if (px > TARGET_PIXELS) score -= 0.5;
  if (px < MIN_PIXELS) score -= 0.3;
  return score;
}

/**
 * أفضل إعدادات لهذا الجهاز من قدراته المقروءة فعلاً (منطق النسخة الأصلية):
 * نرشّح الأوضاع التي يبلغ معدل إطاراتها الأقصى ≥ المطلوب، ثم نأخذ أعلاها تقييماً.
 * بلا مرشّح نرجع إلى صيغة الجهاز ودقته ومعدله الأعلى المعلن.
 */
function recommendFromCaps(caps, wantFps) {
  const fps = Number(wantFps) || 30;
  const { pixelFormats, codecs } = capsFormats(caps);
  const sizes = (caps && caps.resolutions) || [];
  const fpsList = (caps && caps.fps) || [];
  const best = ((caps && caps.modes) || [])
    .filter((m) => (m.fpsMax || 0) >= fps)
    .sort((a, b) => modeScore(b) - modeScore(a))[0];

  let pixelFormat = '';
  let vcodec = '';
  let videoSize = '1280x720';
  let outFps = fps;

  if (best) {
    pixelFormat = best.pixelFormat || '';
    vcodec = best.vcodec || '';
    videoSize = best.width + 'x' + best.height;
    outFps = Math.min(fps, best.fpsMax || fps) || fps;
  } else {
    if (codecs.includes('mjpeg')) vcodec = 'mjpeg';
    else if (pixelFormats.includes('yuyv422')) pixelFormat = 'yuyv422';
    videoSize = sizes.includes('1280x720') ? '1280x720' : (sizes[sizes.length - 1] || '1280x720');
    outFps = fpsList.includes(fps) ? fps : (fpsList[fpsList.length - 1] || fps);
  }

  return {
    pixelFormat,
    vcodec,
    videoSize,
    fps: outFps,
    detected: { sizes, fps: fpsList, pixelFormats, codecs, modes: (caps && caps.modes) || [] }
  };
}

/** توصية لجهاز بالاسم — تُقرأ قدراته من الجهاز إن لم تكن مقروءة بعد. */
async function recommendCaptureSettings(deviceName, wantFps) {
  const value = String(deviceName || '');
  const dev = find(value, 'video');
  if (!dev) throw new Error('جهاز الفيديو غير موجود: ' + (value || '—'));
  if (!hasCaps(dev.caps)) {
    const res = await readCaps(dev);
    dev.caps = res.caps;
    dev.raw = res.raw;
    dev.capsAt = Date.now();
    dev.capsTriedAt = Date.now();
  }
  return Object.assign({ device: dev.name }, recommendFromCaps(dev.caps, wantFps));
}

// ---------------------------------------------------------------- وسائط الإدخال

/**
 * وسائط إدخال ffmpeg لمصدر: DirectShow على Windows، v4l2 على غيرها، وgdigrab/x11grab
 * لالتقاط الشاشة. `platform` قابل للتمرير لاختبار فرع ويندوز من أي منصة.
 */
function buildInputArgs(source, platform) {
  const win = (platform || process.platform) === 'win32';
  const args = [];

  if (source.type === 'screen') {
    args.push('-f', win ? 'gdigrab' : 'x11grab', '-framerate', String(source.fps || 15));
    if (source.videoSize) args.push('-video_size', source.videoSize);
    args.push('-i', win ? 'desktop' : (process.env.DISPLAY || ':0'));
    if (source.audioDevice && win) {
      args.push('-f', 'dshow', '-i', 'audio=' + source.audioDevice);
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
    // spawn receives one complete argument, not a shell command: extra quotes become
    // part of the DirectShow device name and cause "Could not find video device".
    args.push('-i', 'video=' + source.videoDevice +
      (source.audioDevice ? ':audio=' + source.audioDevice : ''));
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

/** هل يفرض المصدر صيغة/دقة/معدلاً على جهاز قد لا يقبلها؟ */
function forcesSettings(source) {
  if (!source || source.type === 'screen' || source.captureSafeMode) return false;
  return Boolean(source.pixelFormat || source.vcodec || source.videoSize || source.fps);
}

/**
 * الاسم المحفوظ للجهاز قد يكون اسماً بديلاً (moniker) أو مفتاحاً من إعداد قديم،
 * ولا يفتح DirectShow الجهاز إلا باسمه المعروض — فنحوّل القيمة المحفوظة إلى الاسم
 * المكتشف حالياً. بلا مطابقة نُبقي القيمة كما هي.
 */
function resolveDeviceName(value, kind, list) {
  const v = String(value || '');
  if (!v) return v;
  const devs = list || state.devices || [];
  const match = devs.find((d) => d.kind === kind &&
    (d.name === v || d.altName === v || d.key === v));
  return match ? match.name : v;
}

/** أول جهاز فيديو مكتشف الآن غير المحفوظ (null إن كان المحفوظ مكتشفاً أو لا أجهزة). */
function otherDetectedVideo(savedName) {
  const present = (state.devices || []).filter((d) => d.kind === 'video' && d.present !== false);
  if (present.some((d) => d.name === savedName)) return null;
  return present.length ? present[0].name : null;
}

/**
 * مجموعات وسائط الإدخال الممكنة بالترتيب: الأخصّ أولاً ثم الأعمّ.
 *
 * السبب واقعي: كثير من أجهزة الالتقاط ترفض الفتح بالفيديو والصوت معاً (جهاز صوت مشغول
 * أو اسم غير مطابق) أو ترفض الصيغة/الدقة المفروضة، فيطبع ffmpeg خطأً عاماً مثل
 * «I/O error» وتفشل القناة بلا داعٍ مع أن الجهاز سليم. لذلك نجرب المحفوظ أولاً،
 * ثم الفيديو وحده، ثم الإعدادات التلقائية للجهاز.
 *
 * وأخيراً جهاز مكتشف آخر: الاسم المحفوظ قد يكون اسماً بديلاً قديماً أو اسماً تغيّر بعد
 * إعادة تركيب التعريف، فلا معنى لإعادة المحاولة به — نجرب جهازاً مكتشفاً فعلاً بدلاً منه.
 */
function inputVariants(source, platform) {
  const list = [];
  const seen = new Set();
  const add = (s, label) => {
    const args = buildInputArgs(s, platform);
    const key = args.join(' ');
    if (seen.has(key)) return;
    seen.add(key);
    list.push({ key, label, args });
  };

  // المجموعة الأولى هي المحفوظ دائماً، لكن بعد تحويل أي اسم بديل إلى الاسم المكتشف.
  const saved = Object.assign({}, source, {
    videoDevice: resolveDeviceName(source.videoDevice, 'video'),
    audioDevice: resolveDeviceName(source.audioDevice, 'audio')
  });
  const renamed = saved.videoDevice !== source.videoDevice || saved.audioDevice !== source.audioDevice;
  add(saved, renamed ? 'الجهاز المكتشف بالاسم البديل' : 'الإعدادات المحفوظة');

  if (saved.type !== 'screen' && saved.audioDevice) {
    add(Object.assign({}, saved, { audioDevice: '' }), 'فيديو فقط بلا صوت');
  }
  if (forcesSettings(saved)) {
    const auto = Object.assign({}, saved, { pixelFormat: '', vcodec: '', videoSize: '', fps: null });
    add(auto, 'الإعدادات التلقائية للجهاز');
    if (saved.audioDevice) {
      add(Object.assign({}, auto, { audioDevice: '' }), 'الإعدادات التلقائية بلا صوت');
    }
  }
  if (saved.type !== 'screen') {
    const other = otherDetectedVideo(saved.videoDevice);
    if (other) {
      add(Object.assign({}, saved, {
        videoDevice: other, audioDevice: '', pixelFormat: '', vcodec: '',
        videoSize: '', fps: null, captureSafeMode: true
      }), 'جهاز مكتشف آخر (' + other + ')');
    }
  }
  return list;
}

/**
 * تجربة التقاط فعلي: يجرّب المجموعات بالترتيب ويعيد أول مجموعة نجحت التقاطها فعلاً.
 * تُستخدم في زر «اختبار الالتقاط» وقبل تشغيل القناة.
 */
async function tryCapture(source, seconds, platform) {
  const secs = Math.max(1, Number(seconds) || 2);
  const attempts = [];
  let lastStderr = '';
  for (const variant of inputVariants(source, platform)) {
    const args = ['-hide_banner', ...variant.args, '-t', String(secs), '-f', 'null', '-'];
    const res = await run(args, { timeout: (secs + 12) * 1000 });
    const text = res.stderr || '';
    lastStderr = text;
    const frames = (text.match(/frame=\s*(\d+)/g) || []).map((s) => Number(s.replace(/\D/g, ''))).pop() || 0;
    // نجاح = خروج سليم من ffmpeg، أو وصول إطارات فعلية (لو أنهت المهلة عملية متجمّدة بعدها)
    const ok = res.code === 0 || frames > 0;
    attempts.push({ label: variant.label, ok, frames, error: ok ? null : firstError(text) });
    if (ok) return { ok: true, variant, frames, attempts, stderr: text.slice(-2000) };
  }
  return { ok: false, variant: null, frames: 0, attempts, stderr: lastStderr.slice(-2000) };
}

/** شرح عربي موجز لأشهر أعطال فتح جهاز الالتقاط (null إن لم نعرف السبب). */
function explainError(text) {
  const t = String(text || '');
  if (/i\/o error|device or resource busy|already in use|could not run graph|access is denied|cannot open/i.test(t)) {
    return 'تعذّر فتح الجهاز — إما أنه مشغول ببرنامج آخر (I/O error) وإما أن الاسم المحفوظ لم يعد مطابقاً؛ أعد اختيار الجهاز من قائمة الأجهزة المكتشفة ثم أعد المحاولة';
  }
  if (/could not find|couldn't find|no such device|not found|no such file/i.test(t)) {
    return 'لم يُعثر على الجهاز بالاسم المحدد — أعد فحص الأجهزة واختر الاسم من القائمة';
  }
  if (/unknown input format|dshow is not|v4l2 is not|capture device is not/i.test(t)) {
    return 'نسخة ffmpeg هذه لا تدعم إدخال الالتقاط (dshow/v4l2) — استخدم ffmpeg.exe المرفق مع المشروع';
  }
  return null;
}

/** رسالة جاهزة للعرض: شرح مفهوم، وإلا فأول سطر خطأ من ffmpeg. */
function errorMessage(text) {
  return explainError(text) || firstError(text) || 'فشل فتح الجهاز';
}

// ---------------------------------------------------------------- scanning

/** هل هذه القدرات نتيجة قراءة حقيقية؟ (كائن فارغ = القراءة فشلت) */
function hasCaps(caps) {
  if (!caps) return false;
  return Boolean(
    (caps.resolutions && caps.resolutions.length) ||
    (caps.pixelFormats && caps.pixelFormats.length) ||
    (caps.modes && caps.modes.length) ||
    (caps.audio && ((caps.audio.sampleRates || []).length || (caps.audio.channels || []).length))
  );
}

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
    const target = IS_WIN ? 'audio=' + device.name : device.name;
    const args = IS_WIN
      ? ['-hide_banner', '-f', 'dshow', '-list_options', 'true', '-i', target]
      : ['-hide_banner', '-f', 'alsa', '-list_devices', 'true', '-i', 'dummy'];
    const res = await run(args, { timeout: 12000 });
    const caps = buildCaps([], parseDshowAudioOptions(res.stderr || ''));
    return { caps, raw: (res.stderr || '').slice(-4000) };
  }

  if (IS_WIN) {
    const res = await run(
      ['-hide_banner', '-f', 'dshow', '-list_options', 'true', '-i', 'video=' + device.name],
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
      // قراءة فاشلة (قدرات فارغة — مثلاً لأن الجهاز كان مشغولاً وقت القراءة) ليست نهائية:
      // يُعاد سؤال الجهاز بعد مهلة، وإلا بقي «لم تُقرأ قدرات» معروضاً في الواجهة للأبد.
      const staleEmpty = old && !hasCaps(old.caps) &&
        (!old.capsTriedAt || Date.now() - old.capsTriedAt > CAPS_RETRY_MS);
      const keep = old && !opts.forceCaps && hasCaps(old.caps) && !staleEmpty;
      const capsRes = keep ? { caps: old.caps, raw: old.raw } : await readCaps(dev);
      next.push(Object.assign(dev, {
        caps: capsRes.caps,
        raw: capsRes.raw,
        capsAt: keep ? old.capsAt : Date.now(),
        capsTriedAt: keep ? old.capsTriedAt : Date.now(),
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
 * اختبار حقيقي لجهاز: التقاط فعلي إلى مخرج فارغ. هذا يكشف «الجهاز موجود لكنه مشغول
 * أو لا يفتح» قبل ربطه بقناة. يجرّب المجموعات بالترتيب (المحفوظ ← بلا صوت ← التلقائي)
 * ويبلغ عن المجموعة التي نجحت، فلا يُحكم على الجهاز بالفشل بسبب إعداد واحد يرفضه.
 */
async function testCapture(source, seconds, platform) {
  const started = Date.now();
  const tried = await tryCapture(source, seconds, platform);
  const ms = Date.now() - started;
  const used = tried.attempts[tried.attempts.length - 1] || null;

  if (tried.ok) {
    const fallback = tried.attempts.length > 1;
    return {
      ok: true,
      frames: tried.frames,
      ms,
      variant: used.label,
      message: 'نجح الالتقاط (' + tried.frames + ' إطار في ' + Math.round(ms / 100) / 10 + ' ث)' +
        (fallback ? ' — بـ' + used.label : ''),
      attempts: tried.attempts,
      stderr: tried.stderr
    };
  }

  const first = tried.attempts[0] || null;
  const reason = errorMessage(tried.stderr);
  const raw = first && first.error ? ' (ffmpeg: ' + first.error + ')' : '';
  return {
    ok: false,
    frames: 0,
    ms,
    variant: null,
    message: reason + raw,
    attempts: tried.attempts,
    stderr: tried.stderr
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
  recommendCaptureSettings,
  startWatcher,
  stopWatcher,
  on,
  testCapture,
  tryCapture,
  inputVariants,
  buildInputArgs,
  forcesSettings,
  resolveDeviceName,
  explainError,
  errorMessage,
  hasCaps,
  firstError,
  // دوال نقية للاختبار
  parseDshowDevices,
  parseDshowVideoOptions,
  parseDshowAudioOptions,
  parseV4l2Formats,
  buildCaps,
  capsFormats,
  modeScore,
  recommendFromCaps
};
