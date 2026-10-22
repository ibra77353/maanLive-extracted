'use strict';
/*
 * lock.js — قفل النسخة الواحدة.
 * تشغيل نسختين على المجلد نفسه يجعلهما تكتبان ملفات البث ذاتها فيرى كل مشاهد محتوى
 * مختلفاً لنفس القناة، لذلك نمنعه (نفس منع النظام الأصلي)، مع إتاحة التجاوز الصريح.
 */

const fs = require('fs');
const path = require('path');
const store = require('./store');

const LOCK = path.join(store.DIRS.run, 'server.lock');

function pidAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return e.code === 'EPERM'; // العملية موجودة لكن بلا صلاحية إشارة
  }
}

/** يعيد { ok, holder } — ok=false يعني أن نسخة أخرى تعمل فعلاً. */
function acquire() {
  fs.mkdirSync(store.DIRS.run, { recursive: true });
  if (fs.existsSync(LOCK)) {
    try {
      const info = JSON.parse(fs.readFileSync(LOCK, 'utf8'));
      if (info.pid && info.pid !== process.pid && pidAlive(info.pid)) {
        return { ok: false, holder: info };
      }
    } catch (e) {
      // ملف قفل تالف: نتجاهله ونستبدله
    }
  }
  fs.writeFileSync(LOCK, JSON.stringify({ pid: process.pid, at: Date.now(), root: store.ROOT }, null, 2), 'utf8');
  return { ok: true, holder: { pid: process.pid } };
}

function release() {
  try {
    if (fs.existsSync(LOCK)) {
      const info = JSON.parse(fs.readFileSync(LOCK, 'utf8'));
      if (!info.pid || info.pid === process.pid) fs.unlinkSync(LOCK);
    }
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = { acquire, release, pidAlive, LOCK };
