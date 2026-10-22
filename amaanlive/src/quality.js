'use strict';
/*
 * quality.js — جدول جودات إخراج القناة في مكان واحد.
 *
 * هذا الجدول هو المصدر الوحيد للحقيقة: يبني منه محرّك البث (src/ffmpeg.js) وسائط
 * الترميز، ويتحقق منه الموجّه (src/routes.js) عند حفظ القناة، ويُرسَل إلى لوحة
 * التحكم عبر `/api/settings` فتبني منه قائمة الخيارات وأسماء الجودات والملخص —
 * فلا تتفرّع نسخة ثانية في الواجهة تختلف عن التنفيذ الفعلي.
 *
 * القيم هي نفسها التي كان يطبّقها النظام الأصلي (جدول `QUALITY` في ffmpeg الأصلي):
 * 240p:400k · 360p:800k · 480p:1400k · 720p:2500k، وأُضيفت 1080p:4500k هنا.
 * و`copy` = نسخ المصدر بلا ترميز، وهو ممكن فقط إن كان المصدر يخرج H.264
 * (انظر `copySupported` في src/ffmpeg.js).
 */

const COPY = 'copy';

const QUALITY_OPTIONS = [
  { key: COPY, label: 'نسخ المصدر (بلا ترميز — الأخف والأعلى جودة)', copy: true },
  { key: '240p', label: '240p', width: 426, height: 240, bitrate: '400k' },
  { key: '360p', label: '360p', width: 640, height: 360, bitrate: '800k' },
  { key: '480p', label: '480p', width: 854, height: 480, bitrate: '1400k' },
  { key: '720p', label: '720p', width: 1280, height: 720, bitrate: '2500k' },
  { key: '1080p', label: '1080p', width: 1920, height: 1080, bitrate: '4500k' }
];

const BY_KEY = new Map(QUALITY_OPTIONS.map((q) => [q.key, q]));

/** كل مفاتيح الجودات المدعومة بالترتيب. */
function keys() {
  return QUALITY_OPTIONS.map((q) => q.key);
}

/** الجودة بمفتاحها، أو null إن كان المفتاح غير مدعوم. */
function get(key) {
  return BY_KEY.get(String(key == null ? '' : key)) || null;
}

/** هل هذا المفتاح «نسخ المصدر بلا ترميز»؟ */
function isCopy(key) {
  return String(key == null ? '' : key) === COPY;
}

/** ارتفاع الإخراج لهذه الجودة (null لجودة «نسخ المصدر»: الإخراج كما هو). */
function heightFor(key) {
  const q = get(key);
  return q && q.height ? q.height : null;
}

/** معدل البت الافتراضي لهذه الجودة (`800k`) أو null. */
function bitrateFor(key) {
  const q = get(key);
  return q && q.bitrate ? q.bitrate : null;
}

/** الجدول كما ترسله الواجهة: مفتاح + تسمية + مقاس + معدل بت. */
function publicTable() {
  return QUALITY_OPTIONS.map((q) => Object.assign({}, q));
}

module.exports = { COPY, QUALITY_OPTIONS, keys, get, isCopy, heightFor, bitrateFor, publicTable };
