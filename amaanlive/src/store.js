'use strict';
/*
 * store.js — التخزين المحلي.
 * كل شيء في ملف واحد `config/config.json` (مُستنسخ من `config.default.json` عند أول
 * تشغيل)، + مجلدات التشغيل (HLS، المرفوعات، السجلات، القفل). لا قاعدة بيانات ولا إنترنت.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..'); // جذر المشروع (مجلد التطبيق)
const CONFIG_DIR = path.join(ROOT, 'config');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');
const DEFAULT_FILE = path.join(CONFIG_DIR, 'config.default.json');

const DIRS = {
  root: ROOT,
  config: CONFIG_DIR,
  logs: path.join(ROOT, 'logs'),
  run: path.join(ROOT, 'run'),
  srv: path.join(ROOT, 'srv'),
  uploads: path.join(ROOT, 'srv', 'uploads'),
  nginx: path.join(ROOT, 'nginx'),
  nginxLogs: path.join(ROOT, 'nginx', 'logs')
};

let data = null;

function ensureDirs() {
  for (const dir of [DIRS.logs, DIRS.run, DIRS.srv, DIRS.uploads, DIRS.nginxLogs]) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readDefaults() {
  return JSON.parse(fs.readFileSync(DEFAULT_FILE, 'utf8'));
}

/** دمج الإعدادات: أي مفتاح جديد في الملف الافتراضي يُضاف دون المساس بقيم المستخدم. */
function mergeDefaults(saved, defaults) {
  const out = Object.assign({}, defaults, saved || {});
  out.settings = Object.assign({}, defaults.settings, (saved && saved.settings) || {});
  out.admin = Object.assign({}, defaults.admin, (saved && saved.admin) || {});
  if (!Array.isArray(out.sources)) out.sources = [];
  if (!Array.isArray(out.channels)) out.channels = [];
  return out;
}

function newId(prefix) {
  return prefix + '_' + crypto.randomBytes(5).toString('hex');
}

/** كتابة ذرّية: ملف مؤقت ثم rename، كي لا يتلف ملف الإعدادات عند الانقطاع. */
function save() {
  ensureDirs();
  const tmp = CONFIG_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tmp, CONFIG_FILE);
  return true;
}

// ---------------------------------------------------------------- password

function hashPassword(password, salt) {
  return crypto.scryptSync(String(password), salt, 64, { N: 16384, r: 8, p: 1 }).toString('hex');
}

function setPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  data.admin.salt = salt;
  data.admin.hash = hashPassword(password, salt);
  data.admin.passwordIsDefault = false;
  save();
  return true;
}

function checkPassword(password) {
  const { salt, hash } = data.admin;
  if (!salt || !hash) return false;
  const candidate = Buffer.from(hashPassword(password, salt), 'hex');
  const known = Buffer.from(hash, 'hex');
  if (candidate.length !== known.length) return false;
  return crypto.timingSafeEqual(candidate, known);
}

// ---------------------------------------------------------------- load

function load() {
  ensureDirs();
  const defaults = readDefaults();
  if (fs.existsSync(CONFIG_FILE)) {
    let saved = {};
    try {
      saved = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    } catch (e) {
      // ملف تالف: نحفظ نسخة منه بدل فقدانه ثم نبدأ بالإعدادات الافتراضية
      const broken = CONFIG_FILE + '.broken-' + Date.now();
      fs.copyFileSync(CONFIG_FILE, broken);
      console.error('[store] ملف الإعدادات غير صالح — تم الاحتفاظ بنسخة في ' + broken);
    }
    data = mergeDefaults(saved, defaults);
  } else {
    data = mergeDefaults({}, defaults);
  }

  // مفتاح توقيع الجلسة: يُولَّد مرة واحدة ويُحفظ، فتبقى الجلسة صالحة بعد إعادة التشغيل.
  if (!data.session || !data.session.secret) {
    data.session = { secret: crypto.randomBytes(32).toString('hex') };
  }
  // كلمة مرور المسؤول الأولية (Admin22) تُجزَّأ عند أول تشغيل، ولا تُحفظ صريحة أبداً.
  if (!data.admin.hash || !data.admin.salt) {
    const initial = process.env.AMAAN_INITIAL_PASSWORD || 'Admin22';
    data.admin.user = data.admin.user || 'admin';
    setPassword(initial);
    data.admin.passwordIsDefault = true;
    save();
  }
  save();
  return data;
}

function get() {
  if (!data) load();
  return data;
}

function reload() {
  data = null;
  return load();
}

function findSource(id) {
  return get().sources.find((s) => s.id === id) || null;
}

function findChannel(id) {
  return get().channels.find((c) => c.id === id) || null;
}

function channelLogPath(id) {
  return path.join(DIRS.logs, 'channel-' + id + '.log');
}

module.exports = {
  ROOT,
  DIRS,
  CONFIG_FILE,
  load,
  reload,
  save,
  get,
  newId,
  setPassword,
  checkPassword,
  findSource,
  findChannel,
  channelLogPath
};
