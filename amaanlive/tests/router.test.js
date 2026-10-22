'use strict';
/* اختبارات الموجّه والجدولة: ترتيب الوسائط (المسارات العامة قبل حارس المصادقة) ونوافذ الوقت. */

const test = require('node:test');
const assert = require('node:assert');
const http = require('../src/http');
const scheduler = require('../src/scheduler');

test('الموجّه: المسار العام المُسجَّل قبل الحارس لا يمرّ بالحارس', () => {
  const r = new http.Router();
  const seen = [];
  r.get('/api/public/settings', () => seen.push('public'));
  r.use('/api', (req, res, next) => {
    seen.push('auth');
    return next();
  });
  r.get('/api/channels', () => seen.push('channels'));

  const pub = r.resolve({ path: '/api/public/settings', method: 'GET' });
  assert.strictEqual(pub.matched, true);
  assert.strictEqual(pub.chain.length, 1);

  const prot = r.resolve({ path: '/api/channels', method: 'GET' });
  assert.strictEqual(prot.chain.length, 2);
});

test('الموجّه: معاملات المسار تُفكّ ترميزها', () => {
  const r = new http.Router();
  r.del('/api/channels/:id', () => undefined);
  const { chain } = r.resolve({ path: '/api/channels/ch%201', method: 'DELETE' });
  assert.strictEqual(chain.length, 1);
});

test('الموجّه: مسار غير معروف لا يطابق شيئاً', () => {
  const r = new http.Router();
  r.get('/api/stats', () => undefined);
  assert.strictEqual(r.resolve({ path: '/api/nope', method: 'GET' }).matched, false);
  assert.strictEqual(r.resolve({ path: '/api/stats', method: 'PUT' }).matched, false);
});

test('الجدولة: قراءة الوقت واعتبار الأيام', () => {
  assert.strictEqual(scheduler.minutesOf('08:30'), 510);
  assert.strictEqual(scheduler.minutesOf('24:00'), null);
  assert.strictEqual(scheduler.minutesOf('abc'), null);

  const monday = new Date(2026, 9, 19, 12, 0); // الاثنين (1) 12:00
  assert.strictEqual(scheduler.inWindow({ enabled: true, days: [1], from: '08:00', to: '14:00' }, monday), true);
  assert.strictEqual(scheduler.inWindow({ enabled: true, days: [2], from: '08:00', to: '14:00' }, monday), false);
  assert.strictEqual(scheduler.inWindow({ enabled: true, days: [], from: '13:00', to: '14:00' }, monday), false);
  assert.strictEqual(scheduler.inWindow({ enabled: false, days: [1], from: '08:00', to: '14:00' }, monday), null);

  // نافذة تعبر منتصف الليل: 22:00 → 02:00
  const lateNight = new Date(2026, 9, 19, 23, 30);
  assert.strictEqual(scheduler.inWindow({ enabled: true, days: [1], from: '22:00', to: '02:00' }, lateNight), true);
  const afterMidnight = new Date(2026, 9, 20, 1, 0); // الثلاثاء 01:00 — امتداد نافذة الاثنين
  assert.strictEqual(scheduler.inWindow({ enabled: true, days: [1], from: '22:00', to: '02:00' }, afterMidnight), true);
});

test('الجدولة: كم دقيقة حتى الفتح القادم', () => {
  const monday = new Date(2026, 9, 19, 7, 0);
  assert.strictEqual(scheduler.nextOpenMinutes({ enabled: true, days: [1], from: '08:00', to: '12:00' }, monday), 60);
  assert.strictEqual(scheduler.nextOpenMinutes({ enabled: true, days: [1], from: '06:00', to: '12:00' }, monday), 0);
  assert.strictEqual(scheduler.nextOpenMinutes({ enabled: false }, monday), null);
});
