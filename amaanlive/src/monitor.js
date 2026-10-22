'use strict';
/*
 * monitor.js — المراقبة الدورية لعمليات FFmpeg وإعادة تشغيلها.
 *
 * يغطّي مراقب الإنهاء في ffmpeg.js العملية التي «تنتهي» (تعطّل، انفصال جهاز، خطأ تشغيل).
 * هذا المراقب يغطّي ما لا يبلغ عنه أي حدث:
 *   1) عملية اختفت بلا حدث إغلاق (العملية مسجّلة لكنها غير موجودة في النظام).
 *   2) عملية ما زالت حيّة لكنها تجمّدت فلم تُحدّث قائمة HLS — وهي الحالة التي يرى فيها
 *      المشاهد صورة متوقفة بينما اللوحة تقول «تعمل».
 *   3) قناة متوقّفة لا تنتظر إعادة تشغيل مجدولة: استُنفدت محاولاتها السريعة أو جهازها
 *      منفصل/مشغول — تُحيا دورياً بعد مدّة الانتظار في الإعدادات (`sourceFailStopMinutes`
 *      للمصدر الفاشل، و`blockedStopMinutes` للجهاز المشغول)، مثل «WATCHDOG» في النظام الأصلي.
 * في الحالتين تُعاد القناة تلقائياً باحترام حدّ المحاولات، فلا ينقطع البث بلا تدخّل.
 */

const store = require('./store');
const ffmpeg = require('./ffmpeg');

let timer = null;

/**
 * المدى الذي نعتبر بعده أن ffmpeg توقّفت عن توليد المقاطع: خمسة أضعاف مدة المقطع،
 * بحدّ أدنى ١٠ ثوانٍ (المقطع يُكتب كل hlsTime ثانية في التشغيل السليم).
 */
function stallMsFor(settings) {
  return Math.max(10000, (Number(settings.hlsTime) || 2) * 1000 * 5);
}

/**
 * مدة الانتظار قبل الإحياء الدوري للقناة المتوقفة — نفس مفتاحَي النظام الأصلي:
 *   `error` (فشل المصدر)            → sourceFailStopMinutes (افتراضياً ٣ دقائق)
 *   `waiting-device` (جهاز مشغول)   → blockedStopMinutes     (افتراضياً ٥ دقائق)
 */
function watchdogDelayFor(settings, state, overrideMs) {
  if (overrideMs) return Number(overrideMs);
  const blocked = state === 'waiting-device';
  const minutes = Math.max(1, Number(blocked ? settings.blockedStopMinutes : settings.sourceFailStopMinutes) || (blocked ? 5 : 3));
  return minutes * 60 * 1000;
}

/**
 * إحياء القنوات المتوقفة (لا تعمل ولا تنتظر إعادة تشغيل مجدولة) بعد انتهاء مدّة
 * الانتظار الخاصة بحالتها، بمحاولة واحدة لكل مدّة. يغطّي ما لا يبلغ عنه حدث إغلاق
 * العملية: قناة استُنفدت محاولاتها السريعة، أو جهاز انفصل/بقي مشغولاً.
 */
async function watchdogPass(settings, opts) {
  const now = Date.now();
  for (const ch of store.get().channels) {
    if (!ch.enabled || ch.manualStopped) continue;
    const h = ffmpeg.health(ch.id);
    if (!h || h.hasChild || h.pendingRestart || h.state === 'starting') continue;
    if (h.state !== 'error' && h.state !== 'waiting-device') continue;

    const since = Math.max(Number(h.stoppedAt) || 0, Number(h.lastWatchdogAt) || 0);
    if (!since) continue;
    const waitMs = watchdogDelayFor(settings, h.state, opts && opts.watchdogDelayMs);
    if (now - since < waitMs) continue;

    const reason = (h.state === 'waiting-device' ? 'انتهت مدة انتظار الجهاز' : 'انتهت مدة فشل المصدر') +
      ' (' + Math.round(waitMs / 60000) + ' د)';
    try {
      await ffmpeg.watchdog(ch.id, reason);
    } catch (e) {
      console.error('[monitor] تعذّر إحياء «' + ch.name + '»: ' + e.message);
    }
  }
}
/** فحص واحد لجميع قنوات المشروع. opts.stallMs لتجاوز الحدّ (يُستخدم في الفحوص). */
async function tick(opts) {
  opts = opts || {};
  const settings = store.get().settings;
  if (settings.autoRestartCrashed === false) return;

  const stallMs = Number(opts.stallMs) || stallMsFor(settings);

  for (const ch of store.get().channels) {
    if (!ch.enabled || ch.manualStopped) continue;
    const h = ffmpeg.health(ch.id);
    // ما لا يعمل الآن لا نراقبه: الإيقاف اليدوي، وحالات الانتظار والإعادة المجدولة
    if (!h || h.state !== 'running' || h.pendingRestart) continue;

    let reason = null;
    if (!h.hasChild || !h.pidAlive) {
      reason = 'فُقدت عملية ffmpeg (pid ' + (h.pid || '—') + ')';
    } else if (h.uptimeMs > stallMs) {
      if (h.playlistAgeMs === null) reason = 'تجمّد مخرجات HLS (لا توجد قائمة تشغيل)';
      else if (h.playlistAgeMs > stallMs) reason = 'تجمّد مخرجات HLS (آخر تحديث قبل ' + Math.round(h.playlistAgeMs / 1000) + ' ث)';
    }
    if (!reason) continue;

    console.warn('[monitor] «' + ch.name + '»: ' + reason);
    try {
      await ffmpeg.revive(ch.id, reason);
    } catch (e) {
      console.error('[monitor] تعذّرت إعادة تشغيل «' + ch.name + '»: ' + e.message);
    }
  }

  await watchdogPass(settings, opts);
}

function startLoop() {
  if (timer) clearInterval(timer);
  console.log('[monitor] مراقبة عمليات ffmpeg كل ٥ ثوانٍ — إعادة تشغيل تلقائية عند التعطل أو تجمّد المخرجات');
  timer = setInterval(() => {
    tick().catch((e) => console.error('[monitor] ' + e.message));
  }, 5000);
  timer.unref && timer.unref();
  return timer;
}

function stopLoop() {
  if (timer) clearInterval(timer);
  timer = null;
}

module.exports = { startLoop, stopLoop, tick, stallMsFor, watchdogDelayFor };
