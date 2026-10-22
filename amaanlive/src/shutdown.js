'use strict';
/*
 * shutdown.js — إيقاف منظّم: تُسجَّل خطوات التنظيف بالترتيب وتُنفَّذ مرة واحدة.
 * يستخدمه الخادم عند Ctrl+C/الإشارات، وعند طلب الإيقاف من لوحة التحكم.
 */

const steps = [];
let running = null;

function register(name, fn) {
  steps.push({ name, fn });
}

function shutdown(reason) {
  if (running) return running;
  running = (async () => {
    console.log('[shutdown] بدء الإيقاف (' + reason + ')');
    for (const step of steps) {
      try {
        await step.fn();
        console.log('[shutdown] ✔ ' + step.name);
      } catch (e) {
        console.error('[shutdown] ✖ ' + step.name + ': ' + e.message);
      }
    }
    console.log('[shutdown] تم الإيقاف');
  })();
  return running;
}

module.exports = { register, shutdown };
