'use strict';
/*
 * http.js — طبقة HTTP صغيرة مبنية على وحدة `http` القياسية في Node.
 * لا مكتبات خارجية: موجّه (Router)، مساعدات JSON، خدمة ملفات ساكنة، وقارئ multipart
 * بسيط يكفي لرفع الشعار/الغلاف. الهدف: مشروع يعمل بلا إنترنت وبلا node_modules.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.m3u8': 'application/vnd.apple.mpegurl',
  '.ts': 'video/mp2t',
  '.woff2': 'font/woff2'
};

// ---------------------------------------------------------------- responses

function sendJson(res, status, body) {
  const data = Buffer.from(JSON.stringify(body), 'utf8');
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length,
    'Cache-Control': 'no-store'
  });
  res.end(data);
}

/** رد ناجح موحّد: { ok: true, ...data } — نفس عقد الردود في الواجهة. */
function ok(res, data) {
  sendJson(res, 200, Object.assign({ ok: true }, data || {}));
}

/** رد فاشل موحّد: { ok: false, message } — الواجهة تقرأ message مباشرة. */
function fail(res, status, message) {
  sendJson(res, status, { ok: false, message: String(message || 'خطأ غير متوقع') });
}

// ---------------------------------------------------------------- request body

function readBody(req, maxBytes) {
  maxBytes = maxBytes || 8 * 1024 * 1024;
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => {
      size += c.length;
      if (size > maxBytes) {
        reject(new Error('حجم الطلب أكبر من الحد المسموح'));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

async function readJson(req, maxBytes) {
  const buf = await readBody(req, maxBytes);
  if (!buf.length) return {};
  try {
    return JSON.parse(buf.toString('utf8'));
  } catch (e) {
    throw new Error('صيغة JSON غير صحيحة في الطلب');
  }
}

function parseCookies(req) {
  const out = {};
  const raw = req.headers.cookie || '';
  for (const part of raw.split(';')) {
    const i = part.indexOf('=');
    if (i > 0) {
      const k = part.slice(0, i).trim();
      if (k) out[k] = decodeURIComponent(part.slice(i + 1).trim());
    }
  }
  return out;
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (fwd) return String(fwd).split(',')[0].trim();
  return (req.socket && req.socket.remoteAddress) || '';
}

// ---------------------------------------------------------------- multipart

/**
 * قارئ multipart/form-data مبسّط: يحفظ الملفات في `dir` ويعيد الحقول النصية.
 * يكفي لرفع شعار الموقع أو غلاف قناة (ملف واحد لكل طلب عملياً).
 */
async function readMultipart(req, opts) {
  const dir = opts.dir;
  const maxBytes = opts.maxBytes || 8 * 1024 * 1024;
  const ct = String(req.headers['content-type'] || '');
  const m = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m) throw new Error('الطلب ليس multipart/form-data');
  const boundary = '--' + (m[1] || m[2]).trim();

  const buf = await readBody(req, maxBytes);
  const fields = {};
  const files = [];
  const sep = Buffer.from(boundary);

  let start = buf.indexOf(sep);
  while (start !== -1) {
    start += sep.length;
    if (buf.slice(start, start + 2).toString() === '--') break; // نهاية الرسالة
    if (buf.slice(start, start + 2).toString() === '\r\n') start += 2;

    const headEnd = buf.indexOf('\r\n\r\n', start);
    if (headEnd === -1) break;
    const headerText = buf.slice(start, headEnd).toString('utf8');
    let bodyStart = headEnd + 4;
    const next = buf.indexOf(sep, bodyStart);
    if (next === -1) break;
    let bodyEnd = next;
    if (buf.slice(bodyEnd - 2, bodyEnd).toString() === '\r\n') bodyEnd -= 2;

    const nameMatch = headerText.match(/name="([^"]*)"/i);
    const fileMatch = headerText.match(/filename="([^"]*)"/i);
    const fieldName = nameMatch ? nameMatch[1] : '';
    const data = buf.slice(bodyStart, bodyEnd);

    if (fileMatch && fileMatch[1]) {
      const ext = (path.extname(fileMatch[1]) || '').toLowerCase().slice(0, 10);
      const safeExt = /^\.[a-z0-9]+$/.test(ext) ? ext : '';
      const filename = Date.now() + '_' + crypto.randomBytes(4).toString('hex') + safeExt;
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, filename), data);
      files.push({ field: fieldName, original: fileMatch[1], filename, size: data.length });
    } else if (fieldName) {
      fields[fieldName] = data.toString('utf8');
    }
    start = next;
  }
  return { fields, files };
}

// ---------------------------------------------------------------- static files

/**
 * خدمة ملفات ساكنة من مجلد. `opts.headers(req,res,filePath)` تُستخدم لإضافة
 * ترويسات خاصة (CORS للمقاطع، كاش immutable، منع كاش للـ m3u8…) كما في النظام الأصلي.
 */
function staticHandler(root, opts) {
  opts = opts || {};
  const prefix = opts.prefix || '';
  return function (req, res, next) {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();
    const absRoot = path.resolve(typeof root === 'function' ? root() : root);
    let rel;
    try {
      rel = decodeURIComponent(req.path || '/');
    } catch (e) {
      return fail(res, 400, 'مسار غير صالح');
    }
    if (prefix && rel.startsWith(prefix)) rel = rel.slice(prefix.length);
    if (!rel.startsWith('/')) rel = '/' + rel;
    if (rel.includes('\0')) return fail(res, 400, 'مسار غير صالح');
    const parts = rel.split('/').filter((p) => p && p !== '.');
    if (parts.includes('..')) return fail(res, 403, 'غير مسموح');

    let file = path.join(absRoot, ...parts);
    if (!path.resolve(file).startsWith(absRoot)) return fail(res, 403, 'غير مسموح');

    try {
      if (!fs.existsSync(file)) return next();
      if (fs.statSync(file).isDirectory()) {
        const idx = path.join(file, 'index.html');
        if (!fs.existsSync(idx)) return next();
        file = idx;
      }
    } catch (e) {
      return next();
    }

    const stat = fs.statSync(file);
    const headers = {
      'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': stat.size,
      'Last-Modified': stat.mtime.toUTCString(),
      'Accept-Ranges': 'none'
    };
    if (opts.headers) Object.assign(headers, opts.headers(req, file, rel) || {});
    res.writeHead(200, headers);
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).on('error', () => res.end()).pipe(res);
    return undefined;
  };
}

// ---------------------------------------------------------------- router

/** يحوّل «/api/channels/:id» إلى تعبير نمطي مع أسماء المعاملات. */
function compile(pattern) {
  const keys = [];
  const parts = String(pattern).split('/').filter(Boolean);
  const body = parts
    .map((p) => {
      if (p.startsWith(':')) {
        keys.push(p.slice(1));
        return '([^/]+)';
      }
      if (p === '*') {
        keys.push('rest');
        return '(.*)';
      }
      return p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    })
    .join('/');
  return { keys, re: new RegExp('^/' + body + '/?$') };
}

class Router {
  constructor() {
    // مكدّس واحد مرتّب: ترتيب التسجيل هو ترتيب التنفيذ (كما في Express).
    // لذلك تُعلن المسارات العامة قبل حارس المصادقة، فلا يحتاجها /api/public/*.
    this.stack = [];
  }

  /** وسيط عام: يُنفّذ قبل كل شيء، أو لأي مسار يبدأ بـ prefix. */
  use(prefix, handler) {
    if (typeof prefix === 'function') {
      handler = prefix;
      prefix = '/';
    }
    this.stack.push({ type: 'mw', prefix: prefix === '/' ? '' : prefix, handler });
    return this;
  }

  add(method, pattern, ...handlers) {
    const { keys, re } = compile(pattern);
    this.stack.push({ type: 'route', method: method.toUpperCase(), pattern, keys, re, handlers });
    return this;
  }

  get(p, ...h) { return this.add('GET', p, ...h); }
  post(p, ...h) { return this.add('POST', p, ...h); }
  put(p, ...h) { return this.add('PUT', p, ...h); }
  del(p, ...h) { return this.add('DELETE', p, ...h); }

  /** يمشي على المكدّس بالترتيب: وسائط مطابقة، ثم أول مسار مطابق ينهي المشي. */
  resolve(req) {
    const chain = [];
    const method = req.method === 'HEAD' ? 'GET' : req.method;
    for (const entry of this.stack) {
      if (entry.type === 'mw') {
        if (!entry.prefix || req.path === entry.prefix || req.path.startsWith(entry.prefix)) {
          chain.push(entry.handler);
        }
        continue;
      }
      if (entry.method !== method) continue;
      const match = entry.re.exec(req.path);
      if (!match) continue;
      req.params = {};
      entry.keys.forEach((k, i) => {
        req.params[k] = decodeURIComponent(match[i + 1] || '');
      });
      chain.push(...entry.handlers);
      return { matched: true, chain };
    }
    return { matched: false, chain };
  }

  /** ينفّذ السلسلة على التوالي؛ كل عنصر إما ينتهي بالرد أو يستدعي next(). */
  async run(req, res) {
    const { matched, chain } = this.resolve(req);
    if (!chain.length) return fail(res, 404, 'المسار غير موجود');
    let i = 0;
    const next = async () => {
      const fn = chain[i++];
      if (!fn) return undefined; // لا معالج أنهى الرد
      const advanced = await fn(req, res, next);
      return advanced;
    };
    await next();
    // وسائط فقط (خدمة ملفات ساكنة) ولم يُخدَم شيء: مسار غير موجود فعلاً
    if (!matched && !res.writableEnded && !res.headersSent) {
      return fail(res, 404, 'المسار غير موجود');
    }
    return undefined;
  }
}

module.exports = {
  Router,
  MIME,
  ok,
  fail,
  sendJson,
  readJson,
  readBody,
  readMultipart,
  parseCookies,
  clientIp,
  staticHandler
};
