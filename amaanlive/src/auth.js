'use strict';
/*
 * auth.js — مصادقة محلية لحساب مسؤول واحد (admin).
 * الجلسة: كوكي موقّع بـ HMAC-SHA256 بمفتاح محفوظ في config.json، فلا تُفقد الجلسات
 * عند إعادة التشغيل. لا تسجيل حسابات متعددة ولا أي علاقة بتراخيص أو إنترنت.
 */

const crypto = require('crypto');
const store = require('./store');

const COOKIE = 'amaan_session';
const SESSION_HOURS = 12;

function secret() {
  return store.get().session.secret;
}

function b64url(buf) {
  return Buffer.from(buf).toString('base64url');
}

function sign(payload) {
  const body = b64url(JSON.stringify(payload));
  const mac = crypto.createHmac('sha256', secret()).update(body).digest('base64url');
  return body + '.' + mac;
}

/** يعيد الحمولة إن كان التوقيع سليماً وغير منتهٍ، وإلا null. */
function verify(token) {
  if (!token || typeof token !== 'string') return null;
  const dot = token.indexOf('.');
  if (dot < 1) return null;
  const body = token.slice(0, dot);
  const mac = token.slice(dot + 1);
  const expected = crypto.createHmac('sha256', secret()).update(body).digest('base64url');
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let payload;
  try {
    payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
  } catch (e) {
    return null;
  }
  if (payload.exp && Date.now() > payload.exp) return null;
  return payload;
}

function sessionFromRequest(req) {
  const token = require('./http').parseCookies(req)[COOKIE];
  return verify(token);
}

function isAuthed(req) {
  return Boolean(sessionFromRequest(req));
}

/** POST /api/login — يتحقق من اسم المستخدم وكلمة المرور ويضبط كوكي الجلسة. */
function login(req, res, user, pass) {
  const admin = store.get().admin;
  const userOk = String(user || '') === String(admin.user || 'admin');
  const passOk = store.checkPassword(pass);
  if (!userOk || !passOk) return false;
  const token = sign({ u: admin.user, exp: Date.now() + SESSION_HOURS * 3600 * 1000 });
  res.setHeader('Set-Cookie',
    COOKIE + '=' + encodeURIComponent(token) + '; HttpOnly; Path=/; SameSite=Lax; Max-Age=' + SESSION_HOURS * 3600);
  return true;
}

function logout(res) {
  res.setHeader('Set-Cookie', COOKIE + '=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0');
}

/** حارس المسارات المحمية: يضع req.adminUser كما في النظام الأصلي. */
function requireAuth(req, res, next) {
  const session = sessionFromRequest(req);
  if (!session) {
    require('./http').fail(res, 401, 'انتهت الجلسة، سجّل الدخول مجدداً');
    return undefined;
  }
  req.adminUser = session.u;
  return next();
}

module.exports = { COOKIE, login, logout, isAuthed, requireAuth, sign, verify };
