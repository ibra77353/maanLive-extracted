'use strict';
/*
 * اختبارات مسار Nginx: الرجوع الآمن إلى النسخة المرفقة بجانب المشروع عندما يكون
 * المسار المحفوظ في الإعدادات غير موجود على هذا الجهاز (مثل مسار ويندوز محفوظ
 * من جهاز آخر ثم تشغيل المشروع على نظام مختلف) — بدل محاولة تشغيله والفشل.
 * لا تُشغَّل nginx هنا، ولا يُلمس ملف إعدادات المستخدم: كل التعديلات في الذاكرة.
 */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const store = require('../src/store');
const nginx = require('../src/nginx');

store.load();
store.save = () => true; // لا نكتب أي شيء في config/config.json

const WIN_PATH = 'C:\\Users\\Brince\\Desktop\\AmaanLive-new\\nginx\\nginx.exe';
const BUNDLED = path.join(store.ROOT, 'nginx');

/** ضبط `nginxPath` في الذاكرة ثم إعادته كما كان دائماً. */
function withNginxPath(value, run) {
  const settings = store.get().settings;
  const before = settings.nginxPath;
  settings.nginxPath = value;
  try {
    return run();
  } finally {
    settings.nginxPath = before;
  }
}

test('بلا مسار مخصص: نستخدم مجلد Nginx المرفق بجانب المشروع', () => {
  assert.strictEqual(withNginxPath('', () => nginx.prefixDir()), BUNDLED);
  assert.strictEqual(withNginxPath('   ', () => nginx.prefixDir()), BUNDLED);
});

test('مسار مخصص موجود فعلاً: يُستخدم هو وملفه', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'amaan-nginx-'));
  const bin = path.join(dir, process.platform === 'win32' ? 'nginx.exe' : 'nginx');
  fs.writeFileSync(bin, '', 'utf8');
  try {
    assert.strictEqual(withNginxPath(bin, () => nginx.prefixDir()), dir);
    assert.strictEqual(withNginxPath(bin, () => nginx.nginxBin()), bin);
    assert.strictEqual(withNginxPath(bin, () => nginx.available()), true);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('مسار ويندوز محفوظ من جهاز آخر: نرجع إلى المرفق ولا نحاول تشغيله', { skip: process.platform === 'win32' ? 'يُختبر على نظام غير ويندوز' : false }, () => {
  assert.strictEqual(withNginxPath(WIN_PATH, () => nginx.prefixDir()), BUNDLED, 'لم يُرجَع إلى مجلد Nginx المرفق');
  const bin = withNginxPath(WIN_PATH, () => nginx.nginxBin());
  assert.ok(!/^[A-Za-z]:[\\/]/.test(bin), 'اختير مسار ويندوز غير موجود على هذا الجهاز: ' + bin);
});
