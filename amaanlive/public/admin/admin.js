'use strict';
/*
 * بثي المحلي — منطق لوحة التحكم.
 * القائمة الجانبية: المراقبة والسجلات · القنوات · مصادر البث · الجدولة · الإعلانات · الإعدادات
 * أي نفس ترتيب البرنامج الأصلي بعد حذف الأقسام التي تحتاج إنترنت أو ترخيص
 * (قنوات أونلاين، IPTV، كأس العالم 2026، الاشتراك والترخيص). كل قسم مربوط بمسارات
 * النظام الأصلي التي أُعيد بناؤها محلياً:
 *   المراقبة والسجلات → /api/stats · /api/channels/:id/log
 *   القنوات            → /api/channels
 *   مصادر البث         → /api/sources · /api/devices
 *   الجدولة            → /api/channels (حقل schedule) · /api/channels/:id
 *   الإعلانات          → /api/ads · /api/settings · /api/upload
 *   الإعدادات          → /api/settings · /api/settings/password · /api/nginx/*
 */

const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => [...(el || document).querySelectorAll(s)];
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

const DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const STATUS_LABELS = {
  running: 'تعمل ON AIR', starting: 'جارٍ التشغيل', stopping: 'جارٍ الإيقاف', restarting: 'إعادة تشغيل',
  stopped: 'متوقفة', error: 'خطأ', 'waiting-device': 'بانتظار الجهاز'
};
// مفاتيح الإعدادات التي يحرّرها قسم «الإعدادات» (الشريط والشعار في قسم «الإعلانات»)
const S_KEYS = [
  'siteName', 'siteNameLatin', 'phone',
  'useNginx', 'nginxPort', 'nginxPath', 'port', 'ffmpegPath',
  'hlsRoot', 'hlsTime', 'hlsListSize', 'hlsDeleteThreshold', 'gopSeconds',
  'x264Preset', 'x264Threads', 'audioBitrate',
  'startupQueueDelayMs', 'startupConcurrency', 'autoRestartCrashed', 'restartBackoffMs', 'maxRestarts', 'logMaxLines',
  'idleStopEnabled', 'idleStopMinutes', 'autoStartOnDemand', 'viewerWindowSeconds', 'deviceWatchSeconds', 'sourceFailStopMinutes',
  'playerMaxBufferLength', 'playerBackBufferLength', 'playerLiveSyncDuration', 'capLevelToPlayerSize', 'cpuSaverDefault',
  'logoImage', 'logoPosition', 'logoSizePct', 'logoOpacityPct'
];

const DATA = { settings: {}, sources: [], channels: [], ads: [], devices: { devices: [] }, nginx: null };
let statusTimer = null;
let logChannelId = null;
let editingChannelId = null;
let editingSourceId = null;
let editingAdId = null;

// ---------------------------------------------------------------- مساعدات

async function api(path, opts) {
  opts = opts || {};
  if (opts.body && !(opts.body instanceof FormData)) {
    opts.headers = Object.assign({ 'Content-Type': 'application/json' }, opts.headers);
    opts.body = JSON.stringify(opts.body);
  }
  const r = await fetch('/api' + path, opts);
  // في طلب تسجيل الدخول يعني 401 بيانات دخول خاطئة، لا انتهاء جلسة،
  // فنترك رسالة الخادم تُعرض كما هي على النموذج.
  if (r.status === 401 && !opts.isLogin) {
    showLogin();
    throw new Error('انتهت الجلسة، سجّل الدخول مجدداً');
  }
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.ok === false) throw new Error(j.message || 'حدث خطأ غير متوقع');
  return j;
}

function toast(msg, isErr) {
  const t = $('#toast');
  t.textContent = msg;
  t.className = 'toast' + (isErr ? ' err' : '');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.add('hidden'), 3400);
}

function fmtBytes(n) {
  n = Number(n) || 0;
  if (n < 1024) return n + ' B';
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
  if (n < 1024 * 1024 * 1024) return (n / 1048576).toFixed(1) + ' MB';
  return (n / 1073741824).toFixed(2) + ' GB';
}

function fmtBps(bps) {
  bps = Number(bps) || 0;
  if (bps < 1000) return bps + ' bps';
  if (bps < 1000000) return (bps / 1000).toFixed(1) + ' kbps';
  return (bps / 1000000).toFixed(2) + ' Mbps';
}

function fmtDur(seconds) {
  seconds = Math.max(0, Math.floor(Number(seconds) || 0));
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h) return h + 'س ' + m + 'د';
  if (m) return m + 'د ' + s + 'ث';
  return s + 'ث';
}

function chip(state) {
  const label = STATUS_LABELS[state] || state;
  return '<span class="chip ' + esc(state) + '">' + esc(label) + '</span>';
}

/**
 * شارة عدّاد مرات الإعادة التلقائية (مصدرها مراقب ffmpeg) — تُعرض بجانب حالة البث
 * لتسهيل متابعة استقرار القناة: يرجع العدّاد إلى الصفر بعد كل تشغيل أو إعادة يدوية.
 */
function restartBadge(n) {
  n = Number(n) || 0;
  const title = 'مرات الإعادة التلقائية منذ آخر تشغيل يدوي (مراقب ffmpeg)';
  return '<span class="restart-badge' + (n ? ' hot' : '') + '" title="' + title + '">↻ إعادة تلقائية: ' + n + '</span>';
}

/** نفس العدّاد لكن كرقم مختصر — يُستخدم في عمود «إعادة التشغيل» بلوحة المراقبة. */
function restartCount(n) {
  n = Number(n) || 0;
  const title = 'مرات الإعادة التلقائية منذ آخر تشغيل يدوي (مراقب ffmpeg)';
  return '<span class="restart-badge' + (n ? ' hot' : '') + '" title="' + title + '">' + n + '</span>';
}

function errClass(text) {
  if (!text) return '';
  if (/could not|no such|busy|cannot|not found|invalid|end of file|i\/o/i.test(text)) return 'err-high';
  if (/timeout|connection|no route|reconnect/i.test(text)) return 'err-medium';
  return 'err-low';
}

async function upload(input, kind) {
  const file = input.files && input.files[0];
  if (!file) return null;
  const fd = new FormData();
  fd.append('kind', kind);
  fd.append('file', file);
  const r = await fetch('/api/upload', { method: 'POST', body: fd });
  const j = await r.json();
  if (!r.ok || j.ok === false) throw new Error(j.message || 'فشل رفع الملف');
  input.value = '';
  return j.file;
}

function sysMsg(text, kind) {
  const bar = $('#sysMsgBar');
  const div = document.createElement('div');
  div.className = 'sys-msg' + (kind ? ' ' + kind : '');
  div.innerHTML = '<span>💡</span><span style="flex:1">' + esc(text) + '</span>' +
    '<button class="sys-msg-close">✕</button>';
  div.querySelector('.sys-msg-close').addEventListener('click', () => div.remove());
  bar.appendChild(div);
  bar.classList.remove('hidden');
}

// ---------------------------------------------------------------- الدخول

function showLogin() {
  $('#loginScreen').classList.remove('hidden');
  $('#app').classList.add('hidden');
  clearInterval(statusTimer);
}

function showApp() {
  $('#loginScreen').classList.add('hidden');
  $('#app').classList.remove('hidden');
}

$('#loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  $('#loginError').textContent = '';
  try {
    await api('/login', { method: 'POST', body: { user: $('#loginUser').value, pass: $('#loginPass').value }, isLogin: true });
    showApp();
    await boot();
  } catch (err) {
    $('#loginError').textContent = err.message;
  }
});

$('#logoutBtn').addEventListener('click', async () => {
  try { await api('/logout', { method: 'POST' }); } catch (e) { /* تجاهل */ }
  location.reload();
});

(async function init() {
  try {
    const me = await fetch('/api/me').then((r) => r.json());
    if (me.authed) {
      showApp();
      await boot();
      if (me.passwordIsDefault) $('#pwdWarn').classList.remove('hidden');
      return;
    }
  } catch (e) { /* تجاهل */ }
  showLogin();
})();

// ---------------------------------------------------------------- التنقل

$$('.nav-btn').forEach((b) => b.addEventListener('click', () => switchView(b.dataset.view)));

function switchView(name) {
  $$('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === name));
  $$('.view').forEach((v) => v.classList.toggle('hidden', v.id !== 'view-' + name));
  if (name === 'channels') { loadChannels(); loadSources(); }
  if (name === 'sources') { loadDevices(); loadSources(); }
  if (name === 'scheduler') loadSchedules();
  if (name === 'ads') loadAds();
  if (name === 'settings') { loadSettings(); loadNginxStatus(); }
}

async function boot() {
  await Promise.all([loadSettings(), loadSources(), loadChannels(), loadDevices(), loadNginxStatus()]);
  await refreshStats();
  clearInterval(statusTimer);
  statusTimer = setInterval(refreshStats, 5000);
}

// ---------------------------------------------------------------- المراقبة

async function refreshStats() {
  try {
    const r = await api('/stats');
    const s = r.stats;
    DATA.stats = s;
    DATA.channels = r.channels || [];
    renderDash(s);
    renderHeadStats(s);
    renderStatusTable(r.channels || []);
    const running = (r.channels || []).filter((c) => c.live).length;
    const strip = $('#onairStrip');
    strip.textContent = running ? 'ON AIR · ' + running : 'OFF AIR';
    strip.classList.toggle('live', running > 0);
    if (logChannelId) refreshLog();
  } catch (e) {
    if (!/انتهت الجلسة/.test(e.message)) console.error(e);
  }
}

function renderHeadStats(s) {
  $('#sysStats').innerHTML = [
    '<span class="stat-chip ' + (s.channels.running > 0 ? 'good' : '') + '">القنوات: <b>' +
      s.channels.running + '/' + s.channels.total + '</b></span>',
    '<span class="stat-chip">المشاهدون: <b>' + s.viewers + '</b></span>',
    '<span class="stat-chip">الذاكرة: <b>' + s.memoryMb + ' م.ب</b></span>',
    '<span class="stat-chip">مدة التشغيل: <b>' + fmtDur(s.uptimeSeconds) + '</b></span>',
    '<span class="stat-chip ' + (s.nginx && s.nginx.running ? 'good' : 'bad') + '">Nginx: <b>' +
      (s.nginx ? (s.nginx.running ? 'يعمل (' + s.nginx.port + ')' : 'متوقف') : '—') + '</b></span>',
    '<span class="stat-chip ' + (s.devices && s.devices.present ? 'good' : 'bad') + '">الأجهزة: <b>' +
      (s.devices ? s.devices.present + '/' + s.devices.total : '—') + '</b></span>'
  ].join('');
}

function renderDash(s) {
  const cards = [
    ['📺', s.channels.running + '<small>/' + s.channels.total + '</small>', 'قنوات تبث الآن', 'أخطاء: ' + s.channels.error, 'live-accent'],
    ['👁', String(s.viewers), 'المشاهدون الآن', 'نبضات وقراءات HLS', 'green-accent'],
    ['👥', String(s.totalViewers || 0), 'إجمالي المشاهدين', 'منذ بدء التشغيل', 'blue-accent'],
    ['⚙️', s.cpuPercent + '<small>٪</small>', 'استهلاك المعالج', s.platform, 'amber-accent'],
    ['🧠', s.memoryMb + '<small>MB</small>', 'ذاكرة الخادم', 'Node ' + s.node, 'blue-accent'],
    ['⏱', fmtDur(s.uptimeSeconds), 'مدة التشغيل', 'منذ إقلاع البرنامج', 'purple-accent'],
    ['⬇️', fmtBps(s.genBps), 'معدل توليد المقاطع', 'مقيس من ملفات HLS' +
      (s.ingestBps ? ' · FFmpeg: ' + fmtBps(s.ingestBps) : ''), 'blue-accent'],
    ['⬆️', fmtBps(s.outBps), 'باندويث الخروج للمشاهدين', 'من المقاطع المخدومة', 'green-accent'],
    ['💾', fmtBytes(s.hlsBytes), 'بيانات HLS المولدة', 'إجمالي الخروج: ' + fmtBytes(s.servedBytes), 'amber-accent'],
    ['🔌', (s.devices ? s.devices.present + '<small>/' + s.devices.total + '</small>' : '—'), 'أجهزة الالتقاط',
      s.devices ? (s.devices.video + ' فيديو · ' + s.devices.audio + ' صوت') : '', 'purple-accent'],
    ['🌐', s.nginx ? (s.nginx.running ? s.nginx.port : 'متوقف') : '—', 'Nginx',
      s.nginx ? (s.nginx.enabled ? s.nginx.viewersUrl : 'معطّل') : '', s.nginx && s.nginx.running ? 'green-accent' : 'live-accent']
  ];
  $('#dashGrid').innerHTML = cards.map((c) =>
    '<div class="dash-card ' + c[4] + '"><div class="dash-ico">' + c[0] + '</div>' +
    '<div class="dash-val">' + c[1] + '</div><div class="dash-lbl">' + c[2] + '</div>' +
    '<div class="dash-sub">' + esc(c[3] || '') + '</div></div>').join('');
}

function renderStatusTable(channels) {
  const tb = $('#statusTable tbody');
  if (!channels.length) {
    tb.innerHTML = '<tr><td colspan="7" class="hint" style="text-align:center;padding:24px">لا قنوات بعد — أضف قناة من قسم «القنوات».</td></tr>';
    return;
  }
  tb.innerHTML = channels.map((c) => {
    const err = c.lastError || '';
    const upTitle = c.uptimeMs ? ' title="مدة التشغيل: ' + fmtDur(c.uptimeMs / 1000) + '"' : '';
    return '<tr>' +
      '<td><b>' + esc(c.name) + '</b><div class="cell-muted">' + esc(c.device || '') + '</div></td>' +
      '<td><div class="cell-status"' + upTitle + '>' + chip(c.state) + '</div></td>' +
      '<td>' + (c.viewers || 0) + '</td>' +
      '<td>' + fmtBytes(c.bytesOut) + '</td>' +
      '<td class="cell-restarts">' + restartCount(c.restarts) + '</td>' +
      '<td><div class="err-lines ' + errClass(err) + '" title="' + esc(err) + '">' + (err ? esc(err) : '—') + '</div></td>' +
      '<td><div class="row-actions">' +
        '<button class="btn btn-sm" data-act="start" data-id="' + c.id + '">تشغيل</button>' +
        '<button class="btn btn-sm" data-act="stop" data-id="' + c.id + '">إيقاف</button>' +
        '<button class="btn btn-sm" data-act="restart" data-id="' + c.id + '">إعادة</button>' +
        '<button class="btn btn-sm" data-act="log" data-id="' + c.id + '">السجل</button>' +
      '</div></td></tr>';
  }).join('');
}

$('#statusTable').addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-act]');
  if (!btn) return;
  const id = btn.dataset.id;
  const act = btn.dataset.act;
  if (act === 'log') return openLog(id);
  btn.disabled = true;
  try {
    const r = await api('/channels/' + id + '/' + act, { method: 'POST', body: {} });
    toast(act === 'start' ? 'بدأ التشغيل' : act === 'stop' ? 'أُوقفت القناة' : 'أُعيد تشغيل القناة');
    if (r.status && r.status.state === 'starting') toast('جارٍ التشغيل…');
  } catch (err) {
    toast(err.message, true);
  } finally {
    btn.disabled = false;
    refreshStats();
  }
  return undefined;
});

// ---------------------------------------------------------------- السجل

async function openLog(id) {
  logChannelId = id;
  const ch = DATA.channels.find((c) => c.id === id);
  $('#logTitle').textContent = 'سجل القناة — ' + (ch ? ch.name : id);
  $('#logCard').classList.remove('hidden');
  await refreshLog();
  $('#logCard').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

async function refreshLog() {
  if (!logChannelId) return;
  try {
    const r = await api('/channels/' + logChannelId + '/log?lines=300');
    const body = $('#logBody');
    const atBottom = body.scrollTop + body.clientHeight >= body.scrollHeight - 40;
    body.textContent = r.log || '(لا سجل بعد)';
    if (atBottom) body.scrollTop = body.scrollHeight;
  } catch (e) { /* تجاهل */ }
}

$('#logClose').addEventListener('click', () => {
  logChannelId = null;
  $('#logCard').classList.add('hidden');
});

$('#logClear').addEventListener('click', async () => {
  if (!logChannelId) return;
  await api('/channels/' + logChannelId + '/log', { method: 'DELETE' });
  toast('تم تصفير السجل');
  refreshLog();
});

$('#logDownload').addEventListener('click', () => {
  const text = $('#logBody').textContent || '';
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'log-' + (logChannelId || 'channel') + '.txt';
  a.click();
  URL.revokeObjectURL(a.href);
});

// ---------------------------------------------------------------- القنوات

async function loadChannels() {
  const r = await api('/channels');
  DATA.channels = r.channels || [];
  renderChannelsTable();
}

function renderChannelsTable() {
  const tb = $('#channelsTable tbody');
  if (!DATA.channels.length) {
    tb.innerHTML = '<tr><td colspan="9" class="hint" style="text-align:center;padding:24px">لا قنوات بعد.</td></tr>';
    return;
  }
  tb.innerHTML = DATA.channels.map((c) => {
    const src = DATA.sources.find((s) => s.id === c.sourceId);
    // الاسم يأتي مع القناة (sourceName) فيظهر صحيحاً من أول رسم، وقائمة المصادر احتياط.
    const sourceName = c.sourceName || (src ? src.name : '') || 'غير مرتبط';
    const sched = c.schedule && c.schedule.enabled
      ? (c.schedule.days && c.schedule.days.length ? c.schedule.days.map((d) => DAYS[d]).join('، ') : 'كل الأيام') +
        '<div class="cell-muted">' + esc(c.schedule.from + ' → ' + c.schedule.to) + '</div>'
      : '—';
    return '<tr>' +
      '<td>' + (c.sort || 0) + '</td>' +
      '<td><b>' + esc(c.name) + '</b><div class="cell-muted">' + esc(c.id) + '</div></td>' +
      '<td>' + esc(c.category || '—') + '</td>' +
      '<td>' + esc(sourceName) + '</td>' +
      '<td>' + esc(c.quality || 'copy') + '</td>' +
      '<td>' + (c.autoStart ? 'نعم' : 'لا') + '</td>' +
      '<td>' + sched + '</td>' +
      '<td><div class="cell-status">' + chip(c.state) + restartBadge(c.restarts) + '</div>' +
        (c.enabled ? '' : '<div class="cell-muted">معطّلة</div>') + '</td>' +
      '<td><div class="row-actions">' +
        '<button class="btn btn-sm" data-cact="start" data-id="' + c.id + '">تشغيل</button>' +
        '<button class="btn btn-sm" data-cact="stop" data-id="' + c.id + '">إيقاف</button>' +
        '<button class="btn btn-sm" data-cact="restart" data-id="' + c.id + '">إعادة تشغيل القناة</button>' +
        '<button class="btn btn-sm" data-cact="edit" data-id="' + c.id + '">تعديل</button>' +
        '<button class="btn btn-sm btn-danger" data-cact="delete" data-id="' + c.id + '">حذف</button>' +
      '</div></td></tr>';
  }).join('');
}

$('#channelsTable').addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-cact]');
  if (!btn) return;
  const id = btn.dataset.id;
  const act = btn.dataset.cact;
  if (act === 'edit') return openChannelModal(id);
  if (act === 'delete') {
    if (!confirm('حذف القناة وملفات بثها؟')) return undefined;
    try {
      await api('/channels/' + id, { method: 'DELETE' });
      toast('حُذفت القناة');
      loadChannels();
    } catch (err) { toast(err.message, true); }
    return undefined;
  }
  try {
    await api('/channels/' + id + '/' + act, { method: 'POST', body: {} });
    toast(act === 'start' ? 'بدأ التشغيل' : act === 'stop' ? 'أُوقفت القناة' : 'أُعيد تشغيل القناة');
    loadChannels();
    refreshStats();
  } catch (err) { toast(err.message, true); }
  return undefined;
});

function openChannelModal(id) {
  editingChannelId = id || null;
  const ch = id ? DATA.channels.find((c) => c.id === id) : null;
  $('#channelModalTitle').textContent = ch ? 'تعديل قناة' : 'إضافة قناة';
  $('#channelError').textContent = '';
  $('#ch_name').value = ch ? ch.name : '';
  $('#ch_category').value = ch ? ch.category || '' : '';
  $('#ch_cover').value = ch ? ch.cover || '' : '';
  $('#ch_quality').value = ch ? ch.quality || 'copy' : 'copy';
  $('#ch_sort').value = ch ? ch.sort || 0 : DATA.channels.length;
  $('#ch_enabled').checked = ch ? ch.enabled !== false : true;
  $('#ch_autoStart').checked = ch ? Boolean(ch.autoStart) : false;
  const sched = (ch && ch.schedule) || { enabled: false, days: [], from: '08:00', to: '23:59' };
  $('#ch_schedEnabled').checked = Boolean(sched.enabled);
  $('#ch_from').value = sched.from || '08:00';
  $('#ch_to').value = sched.to || '23:59';
  $('#ch_days').innerHTML = DAYS.map((d, i) =>
    '<label><input type="checkbox" data-day="' + i + '"' + ((sched.days || []).includes(i) ? ' checked' : '') + '>' + d + '</label>').join('');

  $('#ch_sourceId').innerHTML = DATA.sources.length
    ? DATA.sources.map((s) => '<option value="' + s.id + '">' + esc(s.name) + ' (' + esc(s.videoDevice || 'الشاشة') + ')</option>').join('')
    : '<option value="">— لا مصادر، أضف مصدراً أولاً —</option>';
  if (ch) $('#ch_sourceId').value = ch.sourceId;

  $('#channelModal').classList.remove('hidden');
}

$('#addChannelBtn').addEventListener('click', () => openChannelModal(null));

$('#channelSave').addEventListener('click', async () => {
  const days = $$('#ch_days input[data-day]').filter((i) => i.checked).map((i) => Number(i.dataset.day));
  const body = {
    name: $('#ch_name').value.trim(),
    sourceId: $('#ch_sourceId').value,
    category: $('#ch_category').value.trim(),
    cover: $('#ch_cover').value.trim(),
    quality: $('#ch_quality').value,
    sort: Number($('#ch_sort').value) || 0,
    enabled: $('#ch_enabled').checked,
    autoStart: $('#ch_autoStart').checked,
    schedule: {
      enabled: $('#ch_schedEnabled').checked,
      days,
      from: $('#ch_from').value || '08:00',
      to: $('#ch_to').value || '23:59'
    }
  };
  try {
    if (editingChannelId) await api('/channels/' + editingChannelId, { method: 'PUT', body });
    else await api('/channels', { method: 'POST', body });
    toast('حُفظت القناة');
    $('#channelModal').classList.add('hidden');
    loadChannels();
    refreshStats();
  } catch (e) {
    $('#channelError').textContent = e.message;
  }
});

$('#coverFile').addEventListener('change', async (e) => {
  try {
    const f = await upload(e.target, 'cover');
    if (f) {
      $('#ch_cover').value = f.path;
      toast('رُفع الغلاف');
    }
  } catch (err) { toast(err.message, true); }
});

$$('[data-close]').forEach((b) => b.addEventListener('click', () => $('#' + b.dataset.close).classList.add('hidden')));

// ---------------------------------------------------------------- الأجهزة والمصادر

async function loadDevices(force) {
  const r = await api('/devices' + (force ? '?refresh=1&caps=1' : '?refresh=1'));
  DATA.devices = r;
  renderDevices();
}

/** هل القيمة المحفوظة معرّف جهاز خام (moniker) لا اسم مقروء؟ */
function isRawDeviceId(v) {
  return /^@device_/i.test(String(v || ''));
}

/** اسم مقروء للجهاز: القيمة إن لم تكن معرّفاً خاماً، وإلا التسمية المحفوظة أو نص مختصر. */
function deviceLabel(v, savedLabel) {
  return isRawDeviceId(v) ? (savedLabel || 'جهاز محفوظ') : v;
}

/** نص خيار جهاز محفوظ غير مكتشف الآن (بلا معرّف خام ظاهر). */
function savedDeviceText(v, savedLabel) {
  const raw = isRawDeviceId(v);
  const name = raw ? (savedLabel || 'جهاز محفوظ') : v;
  return name + (raw && !savedLabel ? ' (غير مكتشف الآن)' : ' (محفوظ — غير مكتشف الآن)');
}

/** المعرّف الخام للجهاز: الاسم البديل/المفتاح لجهاز مكتشف، وإلا القيمة المحفوظة. */
function rawDeviceId(v, kind) {
  const dev = (DATA.devices.devices || []).find((d) => d.kind === kind && d.name === v);
  return dev ? (dev.altName || dev.key) : v;
}

/** سطر معرّف الجهاز أسفل قائمتي الأجهزة في نافذة المصدر (مخفي حتى يُطلب). */
function refreshSourceDeviceIds() {
  const pair = [
    ['#src_videoIdToggle', '#src_videoId', $('#src_videoDevice').value, 'video'],
    ['#src_audioIdToggle', '#src_audioId', $('#src_audioDevice').value, 'audio']
  ];
  for (const [btnSel, boxSel, value, kind] of pair) {
    const btn = $(btnSel);
    const box = $(boxSel);
    const raw = value ? rawDeviceId(value, kind) : '';
    btn.classList.toggle('hidden', !raw);
    box.classList.add('hidden');
    box.textContent = raw;
    btn.textContent = 'إظهار المعرّف';
    btn.setAttribute('aria-expanded', 'false');
  }
}

/** المصادر المحفوظة التي تستعمل هذا الجهاز فعلاً. */
function deviceUsers(d) {
  return (DATA.sources || []).filter((s) =>
    d.kind === 'video' ? s.videoDevice === d.name : s.audioDevice === d.name);
}

function deviceRow(d) {
  const caps = d.caps || {};
  const res = (caps.resolutions || []).slice(0, 8).map((x) => '<span class="caps-tag">' + esc(x) + '</span>').join('');
  const fmts = (caps.pixelFormats || []).slice(0, 8).map((x) => '<span class="caps-tag">' + esc(x) + '</span>').join('');
  const fps = (caps.fps || []).slice(0, 8).map((x) => '<span class="caps-tag">' + x + 'fps</span>').join('');
  const audio = d.kind === 'audio'
    ? '<div class="caps-list">' +
      (caps.audio && caps.audio.sampleRates || []).map((x) => '<span class="caps-tag">' + x + 'Hz</span>').join('') +
      ((caps.audio && caps.audio.channels) || []).map((x) => '<span class="caps-tag">' + x + 'ch</span>').join('') +
      '</div>'
    : '<div class="caps-list">' + res + fmts + fps + '</div>';
  // «استخدام كمصدر»: يظهر تلقائياً أي مصدر/قناة يعتمد على هذه القطعة الآن.
  const users = deviceUsers(d);
  const chans = [];
  for (const u of users) for (const c of (u.usedByChannels || [])) if (!chans.includes(c)) chans.push(c);
  const usage = users.length
    ? '<div class="dev-use">مستخدم كمصدر في: <b>' + users.map((u) => esc(u.name)).join('، ') + '</b>' +
      (chans.length ? ' · القنوات: ' + esc(chans.join('، ')) : '') + '</div>'
    : '<div class="dev-use">غير مستخدم في أي مصدر</div>';
  const id = d.altName || d.key;
  return '<div class="dev-row' + (d.present ? '' : ' gone') + '">' +
    '<div style="flex:1;min-width:0">' +
      '<div class="dev-name">' + esc(d.name) + (d.present ? '' : ' — مفصول') + '</div>' +
      usage +
      '<button class="link-btn" data-devid aria-expanded="false">إظهار المعرّف</button>' +
      '<div class="dev-id hidden">' + esc(id) + '</div>' + audio +
    '</div>' +
    '<button class="btn btn-sm" data-newsrc="' + esc(d.name) + '" data-kind="' + d.kind + '">استخدام كمصدر</button>' +
    '</div>';
}

/** إخفاء/إظهار معرّف الجهاز الخام (سطر المعرّف يلي الزر مباشرةً في البطاقة والنافذة). */
function toggleDeviceId(btn) {
  const block = btn.nextElementSibling;
  if (!block || !block.classList.contains('dev-id')) return;
  const show = block.classList.contains('hidden');
  block.classList.toggle('hidden', !show);
  btn.textContent = show ? 'إخفاء المعرّف' : 'إظهار المعرّف';
  btn.setAttribute('aria-expanded', show ? 'true' : 'false');
}

function renderDevices() {
  const list = DATA.devices.devices || [];
  const video = list.filter((d) => d.kind === 'video');
  const audio = list.filter((d) => d.kind === 'audio');
  $('#videoDevices').innerHTML = video.length ? video.map(deviceRow).join('')
    : '<p class="hint">' + esc(DATA.devices.error || 'لا أجهزة فيديو مكتشفة حتى الآن.') + '</p>';
  $('#audioDevices').innerHTML = audio.length ? audio.map(deviceRow).join('')
    : '<p class="hint">لا أجهزة صوت مكتشفة (يمكن بث الفيديو وحده).</p>';
  const ff = DATA.devices.ffmpeg || {};
  $('#devicesMeta').innerHTML = 'آخر فحص: ' +
    (DATA.devices.scannedAt ? new Date(DATA.devices.scannedAt).toLocaleTimeString('ar') : '—') +
    ' · ffmpeg: <span dir="ltr">' + esc(ff.bin || '') + '</span>' +
    (DATA.devices.platform ? ' · المنصة: ' + esc(DATA.devices.platform) : '');
}

$('#rescanBtn').addEventListener('click', async () => {
  toast('جارٍ فحص الأجهزة…');
  try {
    await loadDevices(true);
    toast('تم فحص الأجهزة');
  } catch (e) { toast(e.message, true); }
});

$('#diagnoseBtn').addEventListener('click', async () => {
  const out = $('#diagnoseOut');
  out.classList.remove('hidden');
  out.textContent = 'جارٍ التشخيص…';
  try {
    const r = await api('/devices/diagnose');
    out.textContent = [
      'المنصة: ' + r.platform,
      'ffmpeg: ' + r.ffmpeg.bin + (r.ffmpeg.exists === false ? '  (غير موجود!)' : ''),
      'يدعم dshow: ' + (r.supportsDshow ? 'نعم' : 'لا'),
      '',
      '--- مدخلات ffmpeg ---',
      r.inputFormats,
      '',
      '--- قائمة الأجهزة الخام ---',
      r.listDevices
    ].join('\n');
  } catch (e) {
    out.textContent = e.message;
  }
});

$('#sourcesTable').addEventListener('click', async (e) => {
  const idBtn = e.target.closest('button[data-devid]');
  if (idBtn) return toggleDeviceId(idBtn);
  const btn = e.target.closest('button[data-sact]');
  if (!btn) return;
  const id = btn.dataset.id;
  if (btn.dataset.sact === 'edit') return openSourceModal(id);
  if (btn.dataset.sact === 'delete') {
    if (!confirm('حذف المصدر؟')) return undefined;
    try {
      await api('/sources/' + id, { method: 'DELETE' });
      toast('حُذف المصدر');
      loadSources();
    } catch (err) { toast(err.message, true); }
    return undefined;
  }
  return undefined;
});

$('#videoDevices').addEventListener('click', (e) => {
  const idBtn = e.target.closest('button[data-devid]');
  if (idBtn) return toggleDeviceId(idBtn);
  const btn = e.target.closest('button[data-newsrc]');
  if (!btn) return;
  openSourceModal(null);
  $('#src_type').value = 'usb';
  onSourceTypeChange();
  $('#src_videoDevice').value = btn.dataset.newsrc;
  onVideoDeviceChange();
});

async function loadSources() {
  const r = await api('/sources');
  DATA.sources = r.sources || [];
  renderSourcesTable();
  renderDevices();
}

// نفس زر الإخفاء/الإظهار لأجهزة الصوت.
$('#audioDevices').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-devid]');
  if (btn) toggleDeviceId(btn);
});

/** خلية «الجهاز» في جدول المصادر: اسم مقروء دائماً، والمعرّف الخام مخفي خلف زر الإظهار. */
function deviceCell(s) {
  const v = s.videoDevice;
  const a = s.audioDevice;
  const raw = [];
  if (v) raw.push(rawDeviceId(v, 'video'));
  if (a) raw.push(rawDeviceId(a, 'audio'));
  return (v ? esc(deviceLabel(v, s.videoDeviceLabel)) : (s.type === 'screen' ? 'desktop' : '')) +
    (a ? '<br>' + esc(deviceLabel(a, s.audioDeviceLabel)) : '') +
    (raw.length
      ? '<button class="link-btn" data-devid aria-expanded="false">إظهار المعرّف</button>' +
        '<div class="dev-id hidden">' + raw.map(esc).join('<br>') + '</div>'
      : '');
}

function renderSourcesTable() {
  const tb = $('#sourcesTable tbody');
  if (!DATA.sources.length) {
    tb.innerHTML = '<tr><td colspan="7" class="hint" style="text-align:center;padding:24px">لا مصادر بعد — استخدم الأجهزة المكتشفة أعلاه.</td></tr>';
    return;
  }
  tb.innerHTML = DATA.sources.map((s) => {
    const caps = s.liveCaps || s.caps || {};
    const modes = (caps.modes || []).length;
    const state = s.type === 'screen'
      ? '<span class="chip running">التقاط الشاشة</span>'
      : (s.devicePresent ? '<span class="chip running">موصول</span>' : '<span class="chip error">مفصول</span>');
    return '<tr>' +
      '<td><b>' + esc(s.name) + '</b></td>' +
      '<td>' + (s.type === 'usb' ? 'التقاط DirectShow' : 'التقاط الشاشة') + '</td>' +
      '<td class="cell-muted">' + deviceCell(s) + '</td>' +
      '<td>' + esc(s.videoSize || 'تلقائي') + ' · ' + (s.fps ? s.fps + 'fps' : 'تلقائي') +
        '<div class="cell-muted">' + esc(s.pixelFormat || s.vcodec || '—') + (modes ? ' · ' + modes + ' وضع' : '') + '</div></td>' +
      '<td>' + state + '</td>' +
      '<td>' + (s.usedByChannels && s.usedByChannels.length ? esc(s.usedByChannels.join('، ')) : '—') + '</td>' +
      '<td><div class="row-actions">' +
        '<button class="btn btn-sm" data-sact="edit" data-id="' + s.id + '">تعديل</button>' +
        '<button class="btn btn-sm btn-danger" data-sact="delete" data-id="' + s.id + '">حذف</button>' +
      '</div></td></tr>';
  }).join('');
}

function onSourceTypeChange() {
  const isUsb = $('#src_type').value === 'usb';
  $('#src_busWrap').classList.toggle('hidden', !isUsb);
  $('#src_screenWrap').classList.toggle('hidden', isUsb);
}

function fillSelect(sel, values, emptyLabel) {
  const el = $(sel);
  const current = el.value;
  el.innerHTML = values.length
    ? values.map((v) => '<option value="' + esc(v) + '">' + esc(v) + '</option>').join('')
    : '<option value="">' + (emptyLabel || '—') + '</option>';
  if (values.includes(current)) el.value = current;
}

function onVideoDeviceChange() {
  const name = $('#src_videoDevice').value;
  const dev = (DATA.devices.devices || []).find((d) => d.kind === 'video' && d.name === name);
  const caps = (dev && dev.caps) || {};
  fillSelect('#src_videoSize', caps.resolutions || [], 'تلقائي');
  fillSelect('#src_fps', caps.fps || [], 'تلقائي');
  fillSelect('#src_pixelFormat', caps.pixelFormats || [], 'تلقائي');

  const modes = caps.modes || [];
  $('#src_capsHint').innerHTML = caps.resolutions && caps.resolutions.length
    ? 'قدرات هذا الجهاز المقروءة فعلاً: <b>' + caps.resolutions.length + '</b> دقة · <b>' +
      (caps.pixelFormats || []).length + '</b> صيغة · <b>' + modes.length + '</b> وضع (' + 
      (caps.fps || []).length + ' معدل إطارات).'
    : 'لم تُقرأ قدرات لهذا الجهاز — سيعمل الالتقاط بالإعدادات التلقائية.';
  refreshSourceDeviceIds();
}

async function openSourceModal(id) {
  editingSourceId = id || null;
  const src = id ? DATA.sources.find((s) => s.id === id) : null;
  $('#sourceModalTitle').textContent = src ? 'تعديل مصدر' : 'إضافة مصدر';
  $('#sourceError').textContent = '';
  $('#srcTestOut').textContent = '';
  $('#src_name').value = src ? src.name : '';
  $('#src_type').value = src ? src.type : 'usb';
  onSourceTypeChange();

  const videos = (DATA.devices.devices || []).filter((d) => d.kind === 'video');
  const audios = (DATA.devices.devices || []).filter((d) => d.kind === 'audio');
  fillSelect('#src_videoDevice', videos.map((d) => d.name), 'لا أجهزة فيديو مكتشفة');
  fillSelect('#src_audioDevice', ['', ...audios.map((d) => d.name)], 'بلا صوت');
  if (src && src.videoDevice) {
    if (!videos.find((d) => d.name === src.videoDevice)) {
      $('#src_videoDevice').insertAdjacentHTML('beforeend',
        '<option value="' + esc(src.videoDevice) + '">' + esc(savedDeviceText(src.videoDevice, src.videoDeviceLabel)) + '</option>');
    }
    $('#src_videoDevice').value = src.videoDevice;
  }
  if (src && src.audioDevice) {
    if (!audios.find((d) => d.name === src.audioDevice)) {
      $('#src_audioDevice').insertAdjacentHTML('beforeend',
        '<option value="' + esc(src.audioDevice) + '">' + esc(savedDeviceText(src.audioDevice, src.audioDeviceLabel)) + '</option>');
    }
    $('#src_audioDevice').value = src.audioDevice;
  }
  $('#src_captureSafeMode').checked = src ? Boolean(src.captureSafeMode) : false;
  $('#src_screenSize').value = src && src.type === 'screen' ? src.videoSize || '' : '1280x720';
  $('#src_screenFps').value = src && src.type === 'screen' ? src.fps || 15 : 15;

  onVideoDeviceChange();
  if (src && src.videoSize) $('#src_videoSize').value = src.videoSize;
  if (src && src.fps) $('#src_fps').value = src.fps;
  if (src && src.pixelFormat) $('#src_pixelFormat').value = src.pixelFormat;

  $('#sourceModal').classList.remove('hidden');
}

$('#addSourceBtn').addEventListener('click', () => openSourceModal(null));
$('#src_type').addEventListener('change', onSourceTypeChange);
$('#src_videoDevice').addEventListener('change', onVideoDeviceChange);
$('#src_audioDevice').addEventListener('change', refreshSourceDeviceIds);
// زر إظهار/إخفاء معرّف الجهاز داخل نافذة المصدر
$('#sourceModal').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-devid]');
  if (btn) toggleDeviceId(btn);
});

function currentSourceBody() {
  const isUsb = $('#src_type').value === 'usb';
  return {
    name: $('#src_name').value.trim(),
    type: $('#src_type').value,
    videoDevice: isUsb ? $('#src_videoDevice').value : '',
    audioDevice: isUsb ? $('#src_audioDevice').value : '',
    videoSize: isUsb ? $('#src_videoSize').value : $('#src_screenSize').value.trim(),
    fps: isUsb ? ($('#src_fps').value || null) : ($('#src_screenFps').value || null),
    pixelFormat: isUsb ? $('#src_pixelFormat').value : '',
    captureSafeMode: isUsb ? $('#src_captureSafeMode').checked : false
  };
}

$('#srcTestBtn').addEventListener('click', async () => {
  const out = $('#srcTestOut');
  out.textContent = 'جارٍ اختبار الالتقاط من الجهاز…';
  try {
    const r = await api('/devices/test', { method: 'POST', body: Object.assign(currentSourceBody(), { seconds: 2 }) });
    out.textContent = (r.result.ok ? '✅ ' : '❌ ') + r.result.message;
  } catch (e) {
    out.textContent = '❌ ' + e.message;
  }
});

$('#sourceSave').addEventListener('click', async () => {
  const body = currentSourceBody();
  if (!body.name) {
    $('#sourceError').textContent = 'اكتب اسماً للمصدر';
    return;
  }
  try {
    if (editingSourceId) await api('/sources/' + editingSourceId, { method: 'PUT', body });
    else await api('/sources', { method: 'POST', body });
    toast('حُفظ المصدر');
    $('#sourceModal').classList.add('hidden');
    loadSources();
  } catch (e) {
    $('#sourceError').textContent = e.message;
  }
});

// ---------------------------------------------------------------- الإعدادات

async function loadSettings() {
  const r = await api('/settings');
  DATA.settings = r.settings || {};
  for (const k of S_KEYS) {
    const el = $('#s_' + k);
    if (!el) continue;
    if (el.type === 'checkbox') el.checked = Boolean(DATA.settings[k]);
    else el.value = DATA.settings[k] == null ? '' : DATA.settings[k];
  }
  $('#brandName').textContent = DATA.settings.siteName || 'بثي المحلي';
  const logo = $('#brandLogo');
  if (DATA.settings.logo) {
    logo.src = '/' + String(DATA.settings.logo).replace(/^\//, '').replace(/^srv\/uploads\//, 'uploads/');
    logo.classList.remove('hidden');
  } else {
    logo.classList.add('hidden');
  }
}

async function saveSettings() {
  const body = {};
  for (const k of S_KEYS) {
    const el = $('#s_' + k);
    if (!el) continue;
    body[k] = el.type === 'checkbox' ? el.checked : el.value;
  }
  try {
    const r = await api('/settings', { method: 'PUT', body });
    toast('حُفظت الإعدادات');
    await loadSettings();
    if (r.restartRequired && r.restartRequired.length) {
      sysMsg('تغيّر: ' + r.restartRequired.join('، ') + ' — أعد تشغيل البرنامج بتشغيل «stop.bat» ثم «start.bat» لتطبيق منفذ Node.', 'warn');
    }
    if (r.notes && r.notes.length) sysMsg(r.notes.join(' | '));
    loadNginxStatus();
  } catch (e) {
    toast(e.message, true);
  }
}

$('#saveSettingsBtn').addEventListener('click', saveSettings);

$('#watermarkFile').addEventListener('change', async (e) => {
  try {
    const f = await upload(e.target, 'logo');
    if (f) {
      $('#s_logoImage').value = f.path;
      toast('رُفع الشعار المائي — اضغط «حفظ الإعدادات»');
    }
  } catch (err) { toast(err.message, true); }
});

$('#changePwdBtn').addEventListener('click', async () => {
  $('#pwdError').textContent = '';
  try {
    await api('/settings/password', {
      method: 'POST',
      body: { current: $('#pwdCurrent').value, next: $('#pwdNext').value }
    });
    toast('تم تغيير كلمة المرور — سجّل الدخول من جديد');
    setTimeout(() => location.reload(), 1200);
  } catch (e) {
    $('#pwdError').textContent = e.message;
  }
});

// ---------------------------------------------------------------- الجدولة
// الجدولة مخزّنة داخل كل قناة (أيام + فترة) وتُدار من مسار /api/channels،
// تماماً كما كانت لكل قناة جدولة في البرنامج الأصلي.

function scheduleOf(ch) {
  return Object.assign({ enabled: false, days: [], from: '08:00', to: '23:59' }, ch.schedule || {});
}

function scheduleDaysLabel(s) {
  if (!s.enabled) return '—';
  return (s.days && s.days.length) ? s.days.map((d) => DAYS[d]).join('، ') : 'كل الأيام';
}

function renderSchedulesTable() {
  const tb = $('#schedulesTable tbody');
  if (!DATA.channels.length) {
    tb.innerHTML = '<tr><td colspan="6" class="hint" style="text-align:center;padding:24px">لا قنوات بعد — أضف قناة من قسم «القنوات» ثم فعّل جدولتها.</td></tr>';
    return;
  }
  tb.innerHTML = DATA.channels.map((c) => {
    const s = scheduleOf(c);
    const next = !s.enabled ? '—'
      : c.nextOpen === 0 ? 'مفتوحة الآن'
        : c.nextOpen == null ? '—' : 'بعد ' + c.nextOpen + ' دقيقة';
    return '<tr>' +
      '<td><b>' + esc(c.name) + '</b><div class="cell-muted">' + esc(c.id) + '</div></td>' +
      '<td>' + (s.enabled ? '<span class="chip running">مفعّلة</span>' : '<span class="chip">معطّلة</span>') + '</td>' +
      '<td>' + esc(scheduleDaysLabel(s)) + '</td>' +
      '<td>' + (s.enabled ? esc(s.from + ' → ' + s.to) : '—') + '</td>' +
      '<td>' + esc(next) + '</td>' +
      '<td><div class="row-actions">' +
        '<button class="btn btn-sm" data-sac="toggle" data-id="' + c.id + '">' + (s.enabled ? 'تعطيل' : 'تفعيل') + '</button>' +
        '<button class="btn btn-sm" data-sac="edit" data-id="' + c.id + '">تعديل المواعيد</button>' +
      '</div></td></tr>';
  }).join('');
}

async function loadSchedules() {
  const r = await api('/channels');
  DATA.channels = r.channels || [];
  renderSchedulesTable();
}

$('#schedulesTable').addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-sac]');
  if (!btn) return;
  const ch = DATA.channels.find((c) => c.id === btn.dataset.id);
  if (!ch) return;
  if (btn.dataset.sac === 'edit') return openChannelModal(ch.id);
  const s = scheduleOf(ch);
  try {
    await api('/channels/' + ch.id, { method: 'PUT', body: { schedule: Object.assign({}, s, { enabled: !s.enabled }) } });
    toast(s.enabled ? 'أُلغيت جدولة القناة' : 'فُعّلت جدولة القناة');
    loadSchedules();
    refreshStats();
  } catch (err) { toast(err.message, true); }
  return undefined;
});

$('#schedRefreshBtn').addEventListener('click', () => loadSchedules());

// ---------------------------------------------------------------- الإعلانات
// إعلانات محلية بلا إنترنت: إعلان نصي يُضاف إلى الشريط المتحرك، وإعلان صورة يُعرض
// كسلايدر أسفل ترويسة صفحة المشاهدين. الشريط وشعار الموقع من مسار /api/settings.

function mediaUrl(p) {
  return '/' + String(p == null ? '' : p).replace(/^\//, '').replace(/^srv\/uploads\//, 'uploads/');
}

function loadAdsBar() {
  const s = DATA.settings || {};
  $('#a_ticker').value = s.ticker || '';
  $('#a_tickerEnabled').checked = Boolean(s.tickerEnabled);
  $('#a_logo').value = s.logo || '';
  const img = $('#adLogoPreview');
  if (s.logo) {
    img.src = mediaUrl(s.logo);
    img.classList.remove('hidden');
  } else {
    img.classList.add('hidden');
  }
}

async function loadAds() {
  const r = await api('/ads');
  DATA.ads = r.ads || [];
  renderAdsTable();
  loadAdsBar();
}

async function saveAdsBar() {
  try {
    await api('/settings', {
      method: 'PUT',
      body: {
        ticker: $('#a_ticker').value,
        tickerEnabled: $('#a_tickerEnabled').checked,
        logo: $('#a_logo').value.trim()
      }
    });
    toast('حُفظ الشريط والشعار');
    await loadSettings();
    loadAdsBar();
  } catch (e) { toast(e.message, true); }
}

$('#saveAdsBarBtn').addEventListener('click', saveAdsBar);

$('#adLogoFile').addEventListener('change', async (e) => {
  try {
    const f = await upload(e.target, 'logo');
    if (f) {
      $('#a_logo').value = 'uploads/' + f.name;
      toast('رُفع الشعار — اضغط «حفظ الشريط والشعار»');
    }
  } catch (err) { toast(err.message, true); }
});

function renderAdsTable() {
  const tb = $('#adsTable tbody');
  if (!DATA.ads.length) {
    tb.innerHTML = '<tr><td colspan="4" class="hint" style="text-align:center;padding:24px">لا إعلانات بعد — أضف إعلاناً نصياً أو صورة.</td></tr>';
    return;
  }
  tb.innerHTML = DATA.ads.map((a) => {
    const content = a.type === 'image'
      ? '<img class="ad-thumb" src="' + esc(mediaUrl(a.image)) + '" alt="">'
      : esc(a.text || '');
    return '<tr>' +
      '<td>' + (a.type === 'image' ? 'صورة' : 'نص') + '</td>' +
      '<td>' + content + '</td>' +
      '<td>' + (a.enabled ? '<span class="chip running">مفعّل</span>' : '<span class="chip">معطّل</span>') + '</td>' +
      '<td><div class="row-actions">' +
        '<button class="btn btn-sm" data-aact="edit" data-id="' + a.id + '">تعديل</button>' +
        '<button class="btn btn-sm" data-aact="toggle" data-id="' + a.id + '">' + (a.enabled ? 'تعطيل' : 'تفعيل') + '</button>' +
        '<button class="btn btn-sm btn-danger" data-aact="delete" data-id="' + a.id + '">حذف</button>' +
      '</div></td></tr>';
  }).join('');
}

$('#adsTable').addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-aact]');
  if (!btn) return;
  const ad = DATA.ads.find((a) => a.id === btn.dataset.id);
  if (!ad) return;
  const act = btn.dataset.aact;
  if (act === 'edit') return openAdModal(ad.id);
  try {
    if (act === 'toggle') {
      await api('/ads/' + ad.id, { method: 'PUT', body: { enabled: !ad.enabled } });
      toast(ad.enabled ? 'أُعطّل الإعلان' : 'فُعّل الإعلان');
    } else {
      if (!confirm('حذف الإعلان؟')) return undefined;
      await api('/ads/' + ad.id, { method: 'DELETE' });
      toast('حُذف الإعلان');
    }
    loadAds();
  } catch (err) { toast(err.message, true); }
  return undefined;
});

function onAdTypeChange() {
  const isText = $('#ad_type').value === 'text';
  $('#ad_textWrap').classList.toggle('hidden', !isText);
  $('#ad_imageWrap').classList.toggle('hidden', isText);
}

function openAdModal(id) {
  editingAdId = id || null;
  const ad = id ? DATA.ads.find((a) => a.id === id) : null;
  $('#adModalTitle').textContent = ad ? 'تعديل إعلان' : 'إضافة إعلان';
  $('#adError').textContent = '';
  $('#ad_type').value = ad ? ad.type : 'text';
  $('#ad_text').value = ad ? ad.text || '' : '';
  $('#ad_image').value = ad ? ad.image || '' : '';
  $('#ad_enabled').checked = ad ? ad.enabled !== false : true;
  onAdTypeChange();
  $('#adModal').classList.remove('hidden');
}

$('#addAdBtn').addEventListener('click', () => openAdModal(null));
$('#ad_type').addEventListener('change', onAdTypeChange);

$('#adImageFile').addEventListener('change', async (e) => {
  try {
    const f = await upload(e.target, 'ad');
    if (f) {
      $('#ad_image').value = f.path;
      toast('رُفعت صورة الإعلان');
    }
  } catch (err) { toast(err.message, true); }
});

$('#adSave').addEventListener('click', async () => {
  const body = {
    type: $('#ad_type').value,
    text: $('#ad_text').value.trim(),
    image: $('#ad_image').value.trim(),
    enabled: $('#ad_enabled').checked
  };
  try {
    if (editingAdId) await api('/ads/' + editingAdId, { method: 'PUT', body });
    else await api('/ads', { method: 'POST', body });
    toast('حُفظ الإعلان');
    $('#adModal').classList.add('hidden');
    loadAds();
  } catch (e) { $('#adError').textContent = e.message; }
});

// ---------------------------------------------------------------- Nginx

async function loadNginxStatus() {
  try {
    const r = await api('/nginx/status');
    DATA.nginx = r.nginx;
    const n = r.nginx;
    $('#nginxStatus').innerHTML =
      (n.enabled ? (n.running ? '✅ يعمل على المنفذ <b>' + n.port + '</b>' : '⛔ لا يستجيب على المنفذ <b>' + n.port + '</b>') : '⚙️ معطّل من الإعدادات') +
      '<br>المتاح: <span dir="ltr">' + esc(n.bin) + '</span>' +
      '<br>ملف الإعداد: <span dir="ltr">' + esc(n.conf) + '</span>' + (n.confExists ? '' : ' (غير موجود بعد)') +
      (n.running ? '<br>المشاهدون: <span dir="ltr">' + esc(n.viewersUrl) + '</span>' : '');
  } catch (e) {
    $('#nginxStatus').textContent = e.message;
  }
}

async function nginxAction(act) {
  try {
    if (act === 'regen') {
      const r = await api('/settings/regenerate-nginx', { method: 'POST', body: {} });
      toast('كُتب nginx.conf — ' + (r.reload.message || ''));
    } else {
      const r = await api('/nginx/' + act, { method: 'POST', body: {} });
      toast(r.result.message, !r.result.ok);
    }
    loadNginxStatus();
    refreshStats();
  } catch (e) {
    toast(e.message, true);
  }
}

$('#nginxStart').addEventListener('click', () => nginxAction('start'));
$('#nginxStop').addEventListener('click', () => nginxAction('stop'));
$('#nginxReload').addEventListener('click', () => nginxAction('reload'));
$('#nginxRegen').addEventListener('click', () => nginxAction('regen'));

$('#adminFooter').textContent = 'بثي المحلي — يعمل بلا إنترنت · بلا تراخيص';
