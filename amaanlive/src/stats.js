'use strict';
/*
 * stats.js — إحصاءات عامة للوحة المراقبة.
 * استهلاك المعالج يُحسب من فروق عدّادات نواة النظام (os.cpus)، وباندويث الخروج من
 * فروق حجم البيانات المخدومة فعلاً للمشاهدين بين عيّنتين.
 */

const os = require('os');
const ffmpeg = require('./ffmpeg');

let lastCpu = null; // [{ idle, total }]
let lastSample = null; // { at, served }

function cpuPercent() {
  const cpus = os.cpus();
  const snapshot = cpus.map((c) => {
    const t = Object.values(c.times).reduce((a, b) => a + b, 0);
    return { idle: c.times.idle, total: t };
  });
  let percent = 0;
  if (lastCpu && lastCpu.length === snapshot.length) {
    let idleDelta = 0;
    let totalDelta = 0;
    for (let i = 0; i < snapshot.length; i++) {
      idleDelta += snapshot[i].idle - lastCpu[i].idle;
      totalDelta += snapshot[i].total - lastCpu[i].total;
    }
    percent = totalDelta > 0 ? Math.round((1 - idleDelta / totalDelta) * 1000) / 10 : 0;
  }
  lastCpu = snapshot;
  return percent;
}

/**
 * معدل توليد مقاطع HLS: نمو حجم ملفات القناة بين عيّنتين.
 * هذا رقم مقيس فعلاً (لا يعتمد على ما يعلنه ffmpeg، فهو يطبع N/A لمخرج HLS).
 */
let lastGen = null;
function genBps() {
  const now = Date.now();
  const bytes = ffmpeg.totalBytesOut();
  let bps = 0;
  if (lastGen && now > lastGen.at) {
    const delta = bytes - lastGen.bytes;
    if (delta > 0) bps = Math.round((delta * 8 * 1000) / (now - lastGen.at));
  }
  lastGen = { at: now, bytes };
  return bps;
}

/** باندويث الإدخال كما يعلنه ffmpeg (يظهر فقط إن قدّمه: مخرج HLS يطبعه N/A غالباً). */
function ingestBps() {
  let bps = 0;
  for (const st of ffmpeg.statusAll()) {
    const m = /([\d.]+)\s*kbits\/s/.exec(st.bitrate || '');
    if (m && (st.state === 'running' || st.state === 'starting')) bps += Number(m[1]) * 1000;
  }
  return bps;
}

/** باندويث الخروج: معدّل تغيّر البيانات المخدومة للمشاهدين بين عيّنتين. */
function servedBps() {
  const now = Date.now();
  const served = ffmpeg.totalServedBytes();
  let bps = 0;
  if (lastSample && now > lastSample.at) {
    const delta = served - lastSample.served;
    if (delta > 0) bps = Math.round((delta * 8 * 1000) / (now - lastSample.at));
  }
  lastSample = { at: now, served };
  return bps;
}

function snapshot(uptimeSeconds, nginxStatus, devicesInfo) {
  const statuses = ffmpeg.statusAll();
  const running = statuses.filter((s) => s.state === 'running' || s.state === 'starting');
  const viewers = running.reduce((sum, s) => sum + (s.viewers || 0), 0);
  const mem = process.memoryUsage();
  return {
    cpuPercent: cpuPercent(),
    memoryMb: Math.round(mem.rss / (1024 * 1024)),
    uptimeSeconds,
    channels: {
      total: statuses.length,
      running: running.length,
      error: statuses.filter((s) => s.state === 'error').length
    },
    viewers,
    ingestBps: ingestBps(),
    genBps: genBps(),
    outBps: servedBps(),
    hlsBytes: ffmpeg.totalBytesOut(),
    servedBytes: ffmpeg.totalServedBytes(),
    devices: devicesInfo || null,
    nginx: nginxStatus || null,
    platform: process.platform,
    node: process.version
  };
}

module.exports = { snapshot, cpuPercent, ingestBps, genBps, servedBps };
