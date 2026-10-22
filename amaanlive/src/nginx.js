'use strict';
/*
 * nginx.js — إدارة Nginx المحلي (مرفق مع المشروع، بلا تثبيت ولا إنترنت).
 *
 * Nginx مسؤول عن خدمة مقاطع HLS الثقيلة (.ts) وتوجيه بقية الطلبات إلى Node،
 * بينما تمرّ قوائم التشغيل (.m3u8) عبر Node لعدّ المشاهدين — نفس معمارية النظام الأصلي.
 *
 * كل الإشارات تُرسل مع `-p` و`-c` صريحَين، وإنهاء العمليات العالقة يطال عمليات هذا
 * المجلد فقط (تُطابق بمسار الملف التنفيذي)، فلا يُلمس أي nginx آخر على الجهاز.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const store = require('./store');

const IS_WIN = process.platform === 'win32';

function settings() {
  return store.get().settings;
}

function confDir() {
  const custom = (settings().nginxPath || '').trim();
  const root = custom ? path.dirname(custom) : path.join(store.ROOT, 'nginx');
  return path.join(root, 'conf');
}

function prefixDir() {
  return path.dirname(confDir());
}

function confPath() {
  return path.join(confDir(), 'nginx.conf');
}

function errorLogPath() {
  return path.join(prefixDir(), 'logs', 'error.log');
}

/** سجل الوصول الذي يكتبه Nginx لقراءات مقاطع HLS — يقرأه ffmpeg.js لعدّ المشاهدين. */
function accessLogPath() {
  return path.join(prefixDir(), 'logs', 'access.log');
}

/** مسار ffmpeg التنفيذي أو اسمه في PATH — يُستخدم في تشخيص الواجهة. */
function nginxBin() {
  const custom = (settings().nginxPath || '').trim();
  if (custom) {
    if (path.isAbsolute(custom) && fs.existsSync(custom)) return custom;
    if (!path.isAbsolute(custom)) return custom;
  }
  const bundled = path.join(prefixDir(), IS_WIN ? 'nginx.exe' : 'nginx');
  if (fs.existsSync(bundled)) return bundled;
  return IS_WIN ? 'nginx.exe' : 'nginx';
}

function available() {
  const bin = nginxBin();
  if (path.isAbsolute(bin)) return fs.existsSync(bin);
  return true; // اسم في PATH: نحاول التشغيل ونرصد الخطأ
}

/** توليد nginx.conf من الإعدادات — مسارات مطلقة دائماً (النظام الأصلي يبنيها كذلك). */
function buildConf() {
  const s = settings();
  const root = store.ROOT.replace(/\\/g, '/');
  const hlsRoot = (s.hlsRoot || 'srv/hls').replace(/\\/g, '/').replace(/^\.?\//, '');
  const nodePort = Number(s.port) || 3001;
  const nginxPort = Number(s.nginxPort) || 801;

  return [
    '# بثي المحلي — ملف مُولَّد تلقائياً من لوحة التحكم. لا تعدّله يدوياً:',
    '# أي تغيير من الإعدادات يعيد كتابته. المسارات مطلقة لأن nginx يعمل بـ -p/-c صريحين.',
    'error_log "' + root + '/nginx/logs/error.log" warn;',
    'pid       "' + root + '/nginx/logs/nginx.pid";',
    'worker_processes auto;',
    'worker_rlimit_nofile 16384;',
    '# نافذة الإيقاف: تمنع بقاء عمليات nginx عالقة عند إعادة التشغيل (وضع keep-alive).',
    'worker_shutdown_timeout 10s;',
    'events {',
    '    worker_connections 8192;',
    '    multi_accept on;',
    '}',
    'http {',
    '    include       mime.types;',
    '    default_type  application/octet-stream;',
    '# سجل وصول المقاطع: يقرأه البرنامج لعدّ المشاهدين من القراءات الحقيقية (IP + المسار + الحجم).',
    '    log_format hls \'$remote_addr $status $body_bytes_sent "$request"\';',
    '    sendfile      on;',
    '    sendfile_max_chunk 512k;',
    '    tcp_nopush    on;',
    '    tcp_nodelay   on;',
    '    gzip          off;',
    '    keepalive_timeout 65;',
    '    keepalive_requests 10000;',
    '    reset_timedout_connection on;',
    '    open_file_cache max=8000 inactive=30s;',
    '    open_file_cache_valid 10s;',
    '    open_file_cache_min_uses 1;',
    '    open_file_cache_errors off;',
    '    types {',
    '        application/vnd.apple.mpegurl m3u8;',
    '        video/mp2t ts;',
    '    }',
    '    server {',
    '        listen       ' + nginxPort + ' reuseport;',
    '        server_name  _;',
    '',
    '        # قوائم التشغيل تمرّ عبر Node: هنا يُحسب المشاهد (وإلا لن يعمل إيقاف الخمول).',
    '        location ~ ^/hls/.+\\.m3u8$ {',
    '            proxy_pass http://127.0.0.1:' + nodePort + ';',
    '            proxy_http_version 1.1;',
    '            proxy_set_header Connection "";',
    '            proxy_set_header Host $host;',
    '            proxy_set_header X-Real-IP $remote_addr;',
    '        }',
    '',
    '        # مقاطع .ts تُخدَم من القرص مباشرة: أخف على المعالج وأسرع للمشاهدين،',
    '        # وتُكتب قراءاتها في سجل الوصول ليُحتسب المشاهدون من الطلبات الفعلية.',
    '        location /hls/ {',
    '            alias "' + root + '/' + hlsRoot + '/";',
    '            access_log "' + root + '/nginx/logs/access.log" hls;',
    '            add_header Access-Control-Allow-Origin *;',
    '            add_header Cache-Control "public, max-age=31536000, immutable";',
    '        }',
    '',
    '        # ملفات الموقع (الشعار، الأغلفة) — تُحدَّث، فكاش قصير.',
    '        location /uploads/ {',
    '            alias "' + root + '/srv/uploads/";',
    '            access_log off;',
    '            add_header Cache-Control "max-age=3600";',
    '        }',
    '',
    '        # كل ما تبقّى (لوحة التحكم، صفحة المشاهدين، API) إلى Node.',
    '        location / {',
    '            proxy_pass http://127.0.0.1:' + nodePort + ';',
    '            proxy_http_version 1.1;',
    '            proxy_set_header Connection "";',
    '            proxy_set_header Host $host;',
    '            proxy_set_header X-Real-IP $remote_addr;',
    '            proxy_read_timeout 300;',
    '            client_max_body_size 256m;',
    '        }',
    '    }',
    '}',
    ''
  ].join('\n');
}

/** يكتب nginx.conf ويعيد ملخصاً لما فعل. يرمي خطأً إن لم يكن مجلد nginx موجوداً. */
function writeConf() {
  const s = settings();
  const dir = confDir();
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const required = ['mime.types'];
  const missing = required.filter((f) => !fs.existsSync(path.join(dir, f)));
  const conf = buildConf();
  fs.writeFileSync(confPath(), conf, 'utf8');
  fs.mkdirSync(path.join(prefixDir(), 'logs'), { recursive: true });
  fs.mkdirSync(path.join(prefixDir(), 'temp'), { recursive: true });
  return {
    path: confPath(),
    nginxPort: Number(s.nginxPort) || 801,
    port: Number(s.port) || 3001,
    missingSupportFiles: missing
  };
}

function runNginx(args, opts) {
  opts = opts || {};
  const bin = nginxBin();
  return new Promise((resolve) => {
    let out = '';
    let err = '';
    let child;
    try {
      child = spawn(bin, args, { cwd: prefixDir(), windowsHide: true });
    } catch (e) {
      return resolve({ code: -1, stdout: out, stderr: e.message, spawnError: e.message });
    }
    const timer = setTimeout(() => {
      try { child.kill('SIGKILL'); } catch (e) { /* تجاهل */ }
    }, opts.timeout || 12000);
    child.stdout.on('data', (c) => { out += c.toString('utf8'); });
    child.stderr.on('data', (c) => { err += c.toString('utf8'); });
    child.on('error', (e) => {
      clearTimeout(timer);
      resolve({ code: -1, stdout: out, stderr: err + e.message, spawnError: e.message });
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      resolve({ code, stdout: out, stderr: err });
    });
  });
}

/** هل يستجيب Nginx فعلاً على منفذه؟ (فحص HTTP حقيقي، لا قراءة pid فقط) */
function probe(port, timeout) {
  return new Promise((resolve) => {
    const req = http.request(
      { host: '127.0.0.1', port, path: '/api/ping', method: 'GET', timeout: timeout || 2500 },
      (res) => {
        res.resume();
        resolve({ ok: true, status: res.statusCode });
      }
    );
    req.on('timeout', () => { req.destroy(); resolve({ ok: false, reason: 'timeout' }); });
    req.on('error', (e) => resolve({ ok: false, reason: e.code || e.message }));
    req.end();
  });
}

async function waitForPort(port, ms) {
  const deadline = Date.now() + ms;
  for (;;) {
    const r = await probe(port);
    if (r.ok) return true;
    if (Date.now() > deadline) return false;
    await new Promise((resolve) => {
      const t = setTimeout(resolve, 400);
      t.unref && t.unref();
    });
  }
}

/** تشغيل Nginx (يوقف نسختنا القديمة أولاً لتجنّب تعارض المنفذ). */
async function start() {
  const s = settings();
  if (s.useNginx === false) return { ok: false, skipped: true, message: 'Nginx معطّل من الإعدادات' };
  if (!available()) return { ok: false, message: 'ملف nginx غير موجود: ' + nginxBin() };
  const info = writeConf();

  await runNginx(['-p', '.', '-c', 'conf/nginx.conf', '-s', 'stop'], { timeout: 6000 });
  await killOurNginx();
  await new Promise((resolve) => {
    const t = setTimeout(resolve, 800);
    t.unref && t.unref();
  });

  const bin = nginxBin();
  try {
    const child = spawn(bin, ['-p', '.', '-c', 'conf/nginx.conf'], {
      cwd: prefixDir(),
      detached: true,
      stdio: 'ignore',
      windowsHide: true
    });
    child.unref();
  } catch (e) {
    return { ok: false, message: 'تعذّر تشغيل nginx: ' + e.message };
  }

  const up = await waitForPort(info.nginxPort, 6000);
  if (up) return { ok: true, message: 'Nginx يعمل على المنفذ ' + info.nginxPort, conf: info };

  const diag = diagnoseBind();
  return { ok: false, message: diag.message, conf: info, bind: diag };
}

/** إعادة تحميل الإعدادات دون قطع المشاهدين (reload)، أو تشغيل إن لم يكن يعمل. */
async function reload() {
  const state = await status();
  if (!state.running) return start();
  const info = writeConf();
  const res = await runNginx(['-p', '.', '-c', 'conf/nginx.conf', '-s', 'reload'], { timeout: 8000 });
  if (res.code !== 0) {
    const diag = diagnoseBind();
    return { ok: false, message: (res.stderr || res.stdout || '').trim() || diag.message, bind: diag };
  }
  return { ok: true, message: 'أُعيد تحميل إعدادات Nginx على المنفذ ' + info.nginxPort };
}

async function stop() {
  const s = settings();
  if (!available()) return { ok: false, message: 'ملف nginx غير موجود' };
  await runNginx(['-p', '.', '-c', 'conf/nginx.conf', '-s', 'stop'], { timeout: 8000 });
  await killOurNginx();
  const still = await probe(Number(s.nginxPort) || 801, 1500);
  if (still.ok) return { ok: false, message: 'لم يتوقف Nginx على المنفذ ' + s.nginxPort };
  return { ok: true, message: 'أُوقف Nginx' };
}

/**
 * إنهاء عمليات nginx العالقة التابعة لمجلد مشروعنا فقط.
 * Windows: مطابقة مسار الملف التنفيذي. Linux: مطابقة نمط سطر الأمر.
 */
function killOurNginx() {
  const prefix = prefixDir().replace(/\\/g, '/');
  return new Promise((resolve) => {
    const script = IS_WIN
      ? '$p=\'' + prefix.replace(/'/g, "''") + '\'; Get-CimInstance Win32_Process -Filter "Name=\'nginx.exe\'" -ErrorAction SilentlyContinue | Where-Object { $_.ExecutablePath -and $_.ExecutablePath.Replace("\\","/").StartsWith($p,[System.StringComparison]::OrdinalIgnoreCase) } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }'
      : 'pkill -f ' + JSON.stringify(prefix + '/nginx') + ' || true';
    const cmd = IS_WIN ? 'powershell' : 'sh';
    const args = IS_WIN ? ['-NoProfile', '-Command', script] : ['-c', script];
    const child = spawn(cmd, args, { windowsHide: true });
    child.on('close', () => resolve(true));
    child.on('error', () => resolve(true));
  });
}

/** قراءة آخر أخطاء nginx (خاصة فشل ربط المنفذ) وتحويلها رسالة مفهومة. */
function diagnoseBind() {
  const port = Number(settings().nginxPort) || 801;
  let text = '';
  try {
    const all = fs.readFileSync(errorLogPath(), 'utf8').split('\n');
    text = all.slice(-40).join('\n');
  } catch (e) {
    text = '';
  }
  const bind = text.match(/bind\(\) to [^\s]*?:(\d+) failed \(([^)]+)\)/);
  if (bind) {
    const reason = bind[2];
    let extra = '';
    if (IS_WIN && /10048|permission|forbidden/i.test(reason)) {
      extra = '\nغالباً المنفذ محجوز من نظام آخر (Hyper-V/WSL يحجز نطاقات منافذ). ' +
        'غيّر منفذ Nginx من الإعدادات إلى قيمة أعلى (مثل 8081)، أو نفّذ في موجه أوامر بالمسؤول: ' +
        'netsh interface ipv4 show excludedportrange protocol=tcp';
    }
    return {
      ok: false,
      message: 'فشل ربط Nginx بالمنفذ ' + bind[1] + ' (' + reason + ').' + extra,
      raw: text.slice(-1200)
    };
  }
  const last = text.trim().split('\n').pop() || '';
  return {
    ok: false,
    message: last ? 'Nginx لم يستجب على المنفذ ' + port + '. آخر سطر في سجل الأخطاء: ' + last : 'Nginx لم يستجب على المنفذ ' + port,
    raw: text.slice(-1200)
  };
}

/** حالة Nginx للوحة التحكم (تُختبر بالاتصال الفعلي، لا بوجود ملف pid). */
async function status() {
  const s = settings();
  const enabled = s.useNginx !== false;
  const bin = nginxBin();
  const exists = path.isAbsolute(bin) ? fs.existsSync(bin) : true;
  const port = Number(s.nginxPort) || 801;
  let running = false;
  let probeError = null;
  if (enabled && exists) {
    const r = await probe(port, 2000);
    running = r.ok;
    probeError = r.ok ? null : r.reason;
  }
  return {
    enabled,
    available: exists,
    bin,
    port,
    nodePort: Number(s.port) || 3001,
    running,
    probeError,
    conf: confPath(),
    confExists: fs.existsSync(confPath()),
    viewersUrl: 'http://localhost:' + port + '/',
    adminUrl: 'http://localhost:' + port + '/admin'
  };
}

module.exports = {
  buildConf,
  writeConf,
  confPath,
  accessLogPath,
  nginxBin,
  prefixDir,
  available,
  start,
  stop,
  reload,
  status,
  probe,
  diagnoseBind,
  killOurNginx
};
