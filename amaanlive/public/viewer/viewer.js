'use strict';
/*
 * viewer.js — صفحة المشاهدين: قائمة القنوات + تشغيل HLS عبر hls.js المحلي.
 * تتحدث تلقائياً (حالة القناة كل ٥ ثوانٍ)، ترسل نبضة للمشاهد، وتعرض سبب التوقف
 * بوضوح (متوقفة/بالجدولة/خطأ/الجهاز مفصول) بدل شاشة سوداء صامتة.
 */

const $ = (s, el) => (el || document).querySelector(s);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

let SETTINGS = {};
let CHANNELS = [];
let current = null;
let hls = null;
let healthTimer = null;
let filterCat = 'الكل';

const video = $('#video');

// ---------------------------------------------------------------- تشغيل القناة

function destroyPlayer() {
  if (hls) {
    try { hls.destroy(); } catch (e) { /* تجاهل */ }
    hls = null;
  }
  try {
    video.pause();
    video.removeAttribute('src');
    video.load();
  } catch (e) { /* تجاهل */ }
  clearInterval(healthTimer);
}

function playerMsg(text, hideAfterMs) {
  const box = $('#playerMsg');
  if (!text) return box.classList.add('hidden');
  box.textContent = text;
  box.classList.remove('hidden');
  clearTimeout(box._t);
  if (hideAfterMs) box._t = setTimeout(() => box.classList.add('hidden'), hideAfterMs);
  return undefined;
}

function showStatus(icon, title, sub) {
  $('#psIcon').textContent = icon;
  $('#psTitle').textContent = title;
  $('#psSub').textContent = sub || '';
  $('#playerStatus').classList.remove('hidden');
  $('#playerLoading').classList.add('hidden');
}

function hideStatus() {
  $('#playerStatus').classList.add('hidden');
}

async function health(channelId) {
  const r = await fetch('/api/public/channel-health?id=' + encodeURIComponent(channelId)).then((x) => x.json());
  if (!r.ok) return null;
  return r;
}

/** «تشغيل القناة تلقائياً عند طلب مشاهد»: نطلب من الخادم بدء البث فوراً. */
async function requestStart(channelId) {
  return fetch('/api/public/watch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: channelId })
  }).then((x) => x.json()).catch(() => null);
}

async function play(channelId) {
  const ch = CHANNELS.find((c) => c.id === channelId);
  if (!ch) return;
  current = ch;
  destroyPlayer();
  $('#playerSection').classList.remove('hidden');
  $('#npName').textContent = ch.name;
  hideStatus();
  $('#playerLoading').classList.remove('hidden');
  playerMsg('');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const state = await health(channelId);
  if (state && !state.live) {
    // إن كان الخيار مفعّلاً نطلب تشغيل القناة تلقائياً بدل انتظار لوحة التحكم
    if (SETTINGS.autoStartOnDemand) {
      const req = await requestStart(channelId);
      if (req && req.started) {
        showStatus('⏳', 'جارٍ تشغيل القناة', 'سيبدأ البث تلقائياً خلال لحظات');
        startHealthPolling(channelId);
        return;
      }
      if (req && req.reason === 'error' && req.message) {
        showStatus('⚠️', 'تعذّر تشغيل القناة', req.message);
        startHealthPolling(channelId);
        return;
      }
    }
    const reasons = {
      scheduled: ['🕒', 'القناة مجدولة', 'ستبدأ في وقتها المحدد من لوحة التحكم'],
      'waiting-device': ['🔌', 'جهاز الالتقاط غير موصول', 'أعد توصيل الجهاز وستعود القناة تلقائياً'],
      error: ['⚠️', 'توقفت القناة بخطأ', state.lastError || 'راجع السجل في لوحة التحكم'],
      stopped: ['⏸', 'القناة متوقفة', 'يمكن تشغيلها من لوحة التحكم']
    };
    const r = reasons[state.state] || reasons.stopped;
    showStatus(r[0], r[1], r[2]);
    startHealthPolling(channelId);
    return;
  }

  const src = ch.url;
  const tune = {
    maxBufferLength: Number(SETTINGS.playerMaxBufferLength) || 20,
    backBufferLength: Number(SETTINGS.playerBackBufferLength) || 10,
    liveSyncDuration: Number(SETTINGS.playerLiveSyncDuration) || 4,
    capLevelToPlayerSize: SETTINGS.capLevelToPlayerSize !== false
  };

  if (window.Hls && window.Hls.isSupported()) {
    hls = new window.Hls({
      lowLatencyMode: false,
      maxBufferLength: tune.maxBufferLength,
      backBufferLength: tune.backBufferLength,
      liveSyncDuration: tune.liveSyncDuration,
      capLevelToPlayerSize: tune.capLevelToPlayerSize,
      manifestLoadingTimeOut: 8000,
      manifestLoadingMaxRetry: 6,
      manifestLoadingRetryDelay: 1000,
      fragLoadingMaxRetry: 10,
      fragLoadingRetryDelay: 1000
    });
    hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
      $('#playerLoading').classList.add('hidden');
      video.play().catch(() => playerMsg('اضغط على الفيديو للسماح بالتشغيل', 5000));
    });
    hls.on(window.Hls.Events.ERROR, (evt, data) => {
      if (!data.fatal) return;
      if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
        playerMsg('انقطع البث، جارٍ إعادة المحاولة...');
        hls.startLoad();
      } else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
        playerMsg('خطأ في المشغّل، جارٍ الإصلاح...');
        hls.recoverMediaError();
      } else {
        playerMsg('تعذّر تشغيل القناة');
        showStatus('⚠️', 'تعذّر تشغيل البث', 'أعد المحاولة بعد قليل');
      }
    });
    hls.loadSource(src);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = src;
    video.addEventListener('loadedmetadata', () => {
      $('#playerLoading').classList.add('hidden');
      video.play().catch(() => undefined);
    });
  } else {
    showStatus('⚠️', 'المتصفح لا يدعم HLS', 'استخدم Chrome أو Edge أو Safari');
  }

  startHealthPolling(channelId);
}

function startHealthPolling(channelId) {
  clearInterval(healthTimer);
  healthTimer = setInterval(async () => {
    if (!current || current.id !== channelId) return;
    const state = await health(channelId);
    if (!state) return;
    if (!state.live && hls) {
      // القناة توقفت (خمول/جدولة/خطأ) — أبلغ المشاهد ونظّف المشغّل
      destroyPlayer();
      const r = state.state === 'scheduled'
        ? ['🕒', 'انتهى وقت البث المجدول', 'ستعود في الموعد القادم']
        : ['⏸', 'توقف البث', state.lastError || 'سيعود تلقائياً عند توفّر المصدر'];
      showStatus(r[0], r[1], r[2]);
      startHealthPolling(channelId); // نُبقي المراقبة لعودة البث
    } else if (state.live && $('#playerStatus').classList.contains('hidden') === false) {
      play(channelId); // عاد البث: أعد التشغيل
    }
  }, 5000);
}

// ---------------------------------------------------------------- القائمة

function renderChannels() {
  const cats = ['الكل', ...new Set(CHANNELS.map((c) => c.category).filter(Boolean))];
  $('#catFilters').innerHTML = cats
    .map((c) => '<button class="cat-btn' + (c === filterCat ? ' active' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>')
    .join('');

  const list = filterCat === 'الكل' ? CHANNELS : CHANNELS.filter((c) => c.category === filterCat);
  $('#emptyMsg').classList.toggle('hidden', CHANNELS.length > 0);

  $('#channelGrid').innerHTML = list.map((c) => {
    const cover = c.cover
      ? '<img class="card-cover" src="/' + esc(c.cover.replace(/^\//, '').replace(/^srv\/uploads\//, 'uploads/')) + '" alt="">'
      : '<div class="card-cover ph">📺</div>';
    const badge = c.live
      ? '<span class="badge-live">● مباشر</span>'
      : c.status === 'scheduled'
        ? '<span class="badge-off">مجدولة' + (c.nextOpen ? ' (' + c.nextOpen + ' د)' : '') + '</span>'
        : '<span class="badge-off">' + (c.status === 'waiting-device' ? 'الجهاز مفصول' : 'متوقفة') + '</span>';
    const sched = c.status === 'scheduled' ? '<span class="card-sched">🕒 مجدولة</span>' : '';
    return '<article class="card' + (c.status === 'scheduled' ? ' scheduled' : '') + '" tabindex="0" data-id="' + esc(c.id) + '">' +
      sched + cover +
      '<div class="card-body"><h3 class="card-name">' + esc(c.name) + '</h3>' +
      '<div class="card-meta"><span>' + esc(c.device || '') + '</span>' + badge + '</div></div></article>';
  }).join('');
}

async function loadChannels() {
  const r = await fetch('/api/public/channels').then((x) => x.json());
  if (!r.ok) return;
  CHANNELS = r.channels || [];
  renderChannels();
  if (current) {
    const still = CHANNELS.find((c) => c.id === current.id);
    if (!still) closePlayer();
  }
}

function closePlayer() {
  destroyPlayer();
  current = null;
  $('#playerSection').classList.add('hidden');
}

async function loadSettings() {
  const r = await fetch('/api/public/settings').then((x) => x.json());
  if (!r.ok) return;
  SETTINGS = r.settings || {};
  document.title = (SETTINGS.siteName || 'البث المباشر') + ' — البث المباشر';
  $('#siteTitle').textContent = SETTINGS.siteName || 'البث المباشر';
  $('#footName').textContent = SETTINGS.siteName || 'بثي المحلي';
  if (SETTINGS.logo) {
    const logo = $('#siteLogo');
    logo.src = '/' + String(SETTINGS.logo).replace(/^\//, '').replace(/^srv\/uploads\//, 'uploads/');
    logo.classList.remove('hidden');
  }
  if (SETTINGS.phone) {
    const p = $('#sitePhone');
    p.textContent = SETTINGS.phone;
    p.href = 'tel:' + SETTINGS.phone;
    p.classList.remove('hidden');
  }
  // الشريط المتحرك: نص الإعدادات + إعلانات النص المفعّلة (الإعلانات المحلية)
  const ads = SETTINGS.ads || [];
  const line = [SETTINGS.ticker].concat(ads.filter((a) => a.type === 'text' && a.text).map((a) => a.text))
    .filter(Boolean).join('   •   ');
  if (line) {
    $('#tickerText').textContent = line;
    $('#tickerBar').classList.remove('hidden');
  }

  // سلايدر صور الإعلانات المحلية
  const strip = $('#adsStrip');
  const images = ads.filter((a) => a.type === 'image' && a.image);
  if (images.length) {
    strip.innerHTML = images.map((a) => '<div class="ads-item"><img src="' +
      esc('/' + String(a.image).replace(/^\//, '').replace(/^srv\/uploads\//, 'uploads/')) + '" alt="إعلان"></div>').join('');
    strip.classList.remove('hidden');
  } else {
    strip.classList.add('hidden');
  }
  if (SETTINGS.cpuSaverDefault) $('#cpuSaver').checked = true;
}

// ---------------------------------------------------------------- الأحداث

document.addEventListener('click', (e) => {
  const card = e.target.closest && e.target.closest('.card');
  if (card) return play(card.dataset.id);
  const cat = e.target.closest && e.target.closest('.cat-btn');
  if (cat) {
    filterCat = cat.dataset.cat;
    renderChannels();
  }
  return undefined;
});

$('#closePlayer').addEventListener('click', closePlayer);
$('#refreshBtn').addEventListener('click', () => { if (current) play(current.id); });
$('#muteBtn').addEventListener('click', () => {
  video.muted = !video.muted;
  $('#muteBtn').textContent = video.muted ? '🔇' : '🔊';
});
$('#fsBtn').addEventListener('click', () => {
  const shell = video.parentElement;
  if (document.fullscreenElement) document.exitFullscreen();
  else shell.requestFullscreen && shell.requestFullscreen();
});
$('#cpuSaver').addEventListener('change', (e) => {
  if (!hls) return;
  hls.config.maxBufferLength = e.target.checked ? Math.min(10, Number(SETTINGS.playerMaxBufferLength) || 20) : (Number(SETTINGS.playerMaxBufferLength) || 20);
});

$('#footYear').textContent = new Date().getFullYear();

loadSettings().then(loadChannels);
setInterval(loadChannels, 10000);
