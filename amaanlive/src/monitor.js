'use strict';
/*
 * monitor.js — المراقبة الدورية لعمليات FFmpeg وإعادة تشغيلها.
 *
 * يغطّي مراقب الإنهاء في ffmpeg.js العملية التي «تنتهي» (تعطّل، انفصال جهاز، خطأ تشغيل).
 * هذا المراقب يغطّي ما لا يبلغ عنه أي حدث:
 *   1) عملية اختفت بلا حدث إغلاق (العملية مسجّلة لكنها غير موجودة في النظام).
 *   2) عملية ما زالت حيّة لكنها تجمّدت فلم تُحدّث قائمة HLS — وهي الحالة التي يرى فيها
 *      المشاهد صورة متوقفة بينما اللوحة تقول «تعمل».
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

module.exports = { startLoop, stopLoop, tick, stallMsFor };
