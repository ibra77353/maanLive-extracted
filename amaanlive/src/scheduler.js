'use strict';
/*
 * scheduler.js — أوقات تشغيل القنوات.
 * كل قناة تحمل نافذة زمنية اختيارية: { enabled, days:[0..6], from:"HH:MM", to:"HH:MM" }.
 * إن كانت معطّلة فالقناة تعمل بالتشغيل اليدوي/التلقائي فقط.
 * يدعم النوافذ التي تعبر منتصف الليل (from > to).
 */

const store = require('./store');
const ffmpeg = require('./ffmpeg');

let timer = null;

function minutesOf(hhmm) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(hhmm || ''));
  if (!m) return null;
  const h = Number(m[1]);
  const mm = Number(m[2]);
  if (h > 23 || mm > 59) return null;
  return h * 60 + mm;
}

/** هل نحن داخل النافذة الآن؟ (زمن محلي) */
function inWindow(schedule, date) {
  if (!schedule || !schedule.enabled) return null;
  const from = minutesOf(schedule.from);
  const to = minutesOf(schedule.to);
  if (from === null || to === null) return null;
  const d = date || new Date();
  const now = d.getHours() * 60 + d.getMinutes();
  const day = d.getDay();
  const days = Array.isArray(schedule.days) && schedule.days.length ? schedule.days.map(Number) : [0, 1, 2, 3, 4, 5, 6];
  if (from <= to) {
    return days.includes(day) && now >= from && now < to;
  }
  // نافذة تعبر منتصف الليل: من from اليوم إلى to في اليوم التالي
  const prevDay = (day + 6) % 7;
  if (now >= from) return days.includes(day);
  if (now < to) return days.includes(prevDay);
  return false;
}

/** كم دقيقة تبقّى حتى فتح النافذة القادمة (0 إن كانت مفتوحة الآن، null إن بلا جدولة). */
function nextOpenMinutes(schedule, date) {
  if (!schedule || !schedule.enabled) return null;
  const from = minutesOf(schedule.from);
  if (from === null) return null;
  const now = inWindow(schedule, date);
  if (now === true) return 0;
  const d = date || new Date();
  const nowMin = d.getHours() * 60 + d.getMinutes();
  const days = Array.isArray(schedule.days) && schedule.days.length ? schedule.days.map(Number) : [0, 1, 2, 3, 4, 5, 6];
  for (let i = 0; i <= 7; i++) {
    const day = (d.getDay() + i) % 7;
    if (!days.includes(day)) continue;
    const delta = i === 0 ? from - nowMin : from + (i * 1440) - nowMin;
    if (delta > 0) return delta;
  }
  return null;
}

async function tick() {
  for (const ch of store.get().channels) {
    const open = inWindow(ch.schedule);
    if (open === null) continue;
    if (open && ch.enabled && !ch.manualStopped && !ffmpeg.isRunning(ch.id)) {
      if (!ch.sourceId) continue;
      console.log('[scheduler] فتح «' + ch.name + '» حسب الجدولة');
      ffmpeg.start(ch.id).catch((e) => {
        console.error('[scheduler] تعذّر تشغيل «' + ch.name + '»: ' + e.message);
      });
    } else if (!open && ffmpeg.isRunning(ch.id)) {
      console.log('[scheduler] إغلاق «' + ch.name + '» حسب الجدولة');
      ffmpeg.stop(ch.id, 'schedule').catch((e) => console.error('[scheduler] ' + e.message));
    }
  }
}

function startLoop() {
  if (timer) clearInterval(timer);
  timer = setInterval(() => { tick().catch((e) => console.error('[scheduler] ' + e.message)); }, 30000);
  timer.unref && timer.unref();
  tick().catch(() => undefined);
  return timer;
}

function stopLoop() {
  if (timer) clearInterval(timer);
  timer = null;
}

module.exports = { startLoop, stopLoop, tick, inWindow, nextOpenMinutes, minutesOf };
