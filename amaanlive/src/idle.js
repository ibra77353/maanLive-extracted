'use strict';
/*
 * idle.js — إيقاف القناة عند خمول المشاهدين.
 * يُحسب المشاهد من قراءات HLS الحديثة فقط (m3u8/ts عبر Node أو مقاطع .ts عبر سجل وصول Nginx).
 * لا شيء يُوقَف إن كان الإعداد معطّلاً.
 */

const store = require('./store');
const ffmpeg = require('./ffmpeg');

let timer = null;

function tick() {
  const settings = store.get().settings;
  if (!settings.idleStopEnabled) return;
  const idleMs = Math.max(1, Number(settings.idleStopMinutes) || 2) * 60 * 1000;
  for (const ch of store.get().channels) {
    if (!ch.enabled) continue;
    // «تشغيل دائم 24/7»: القناة لا تُدار بالخمول أصلاً — نفس شرط isIdleManaged في
    // النظام الأصلي، فالقناة المستوردة بهذا الحقل لا توقفها حلقة الخمول.
    if (ch.alwaysOn) continue;
    if (!ffmpeg.isRunning(ch.id)) continue;
    const last = ffmpeg.lastViewerAt(ch.id);
    if (!last) continue; // لا مشاهدين مسجّلين بعد: لا نوقف (قد يكون البث لم يبدأ)
    if (Date.now() - last < idleMs) continue;
    if (ffmpeg.viewerCount(ch.id) > 0) continue;
    console.log('[idle] إيقاف «' + ch.name + '» — لا مشاهدين منذ ' + Math.round((Date.now() - last) / 1000) + ' ث');
    ffmpeg.stop(ch.id, 'idle').catch((e) => console.error('[idle] ' + e.message));
  }
}

function startLoop() {
  if (timer) clearInterval(timer);
  timer = setInterval(tick, 15000);
  timer.unref && timer.unref();
  return timer;
}

function stopLoop() {
  if (timer) clearInterval(timer);
  timer = null;
}

module.exports = { startLoop, stopLoop, tick };
