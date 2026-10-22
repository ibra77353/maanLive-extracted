'use strict';
/*
 * DirectShow regression: exercise the Windows branch and the actual spawn argument
 * boundary on any OS. A Node subprocess stands in for FFmpeg and rejects quoted
 * device names. This does not verify Windows drivers or real USB capture.
 * The isolated module uses an in-memory store; no user configuration is touched.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { spawn } = require('child_process');

const VIDEO = 'USB Video';
const AUDIO = 'Digital Audio Interface (USB Digital Audio)';
const FAKE_FFMPEG = `
const args = process.argv.slice(1);
const inputs = args.filter((arg, i) => i > 0 && args[i - 1] === '-i');
const allowed = ['video=${VIDEO}', 'audio=${AUDIO}', 'video=${VIDEO}:audio=${AUDIO}', 'desktop'];
if (!inputs.length || inputs.some((input) => !allowed.includes(input))) {
  console.error('Could not find video device with name [' + inputs.join(',') + ']');
  console.error('Error opening input files: I/O error');
  process.exit(1);
}
if (args.includes('-list_options')) {
  console.error(inputs[0].startsWith('video=')
    ? 'pixel_format=yuyv422 min s=640x480 fps=5 max s=640x480 fps=30'
    : 'min ch=1 bits=16 rate=44100 max ch=2 bits=16 rate=48000');
  process.exit(1); // FFmpeg lists options then exits nonzero, even on success.
}
console.error('frame=   25 fps=25');
`;

function windowsDevices() {
  const calls = [];
  const module = { exports: {} };
  const filename = path.resolve(__dirname, '../src/devices.js');
  vm.runInNewContext(fs.readFileSync(filename, 'utf8'), {
    module,
    process: { platform: 'win32' },
    setTimeout,
    clearTimeout,
    require(name) {
      if (name === './store') return {
        ROOT: path.dirname(filename),
        get: () => ({ settings: { ffmpegPath: 'ffmpeg.exe' } })
      };
      if (name === 'child_process') return {
        spawn(bin, args, options) {
          assert.equal(bin, 'ffmpeg.exe');
          assert.ok(!options.shell, 'DirectShow must not run through a shell');
          calls.push(Array.from(args));
          return spawn(process.execPath, ['-e', FAKE_FFMPEG, '--', ...args], options);
        }
      };
      return require(name);
    }
  }, { filename });
  return { devices: module.exports, calls };
}

const USB = { type: 'usb', videoDevice: VIDEO, audioDevice: AUDIO };

test('Windows capture passes names with spaces and parentheses as one unquoted argument', async () => {
  const { devices, calls } = windowsDevices();
  for (const source of [USB, { ...USB, audioDevice: '' }, { type: 'screen', audioDevice: AUDIO }]) {
    const result = await devices.testCapture(source, 1);
    assert.equal(result.ok, true, result.message);
    assert.equal(result.frames, 25);
    assert.equal(result.attempts.length, 1, 'Correct names must not need a fallback');
  }
  assert.equal(calls[0][calls[0].indexOf('-i') + 1], 'video=' + VIDEO + ':audio=' + AUDIO);
  assert.equal(calls[1][calls[1].indexOf('-i') + 1], 'video=' + VIDEO);
  assert.equal(calls[2][calls[2].lastIndexOf('-i') + 1], 'audio=' + AUDIO);
});

test('Windows video capabilities use the same unquoted device name', async () => {
  const { devices, calls } = windowsDevices();
  const { caps } = await devices.readCaps({ kind: 'video', name: VIDEO });
  assert.equal(calls[0][calls[0].indexOf('-i') + 1], 'video=' + VIDEO);
  assert.ok(caps.resolutions.includes('640x480'));
  assert.ok(caps.pixelFormats.includes('yuyv422'));
  assert.ok(caps.fps.includes(30));
});

test('Windows audio capabilities preserve the complete name without literal quotes', async () => {
  const { devices, calls } = windowsDevices();
  const { caps } = await devices.readCaps({ kind: 'audio', name: AUDIO });
  assert.equal(calls[0][calls[0].indexOf('-i') + 1], 'audio=' + AUDIO);
  assert.deepEqual(Array.from(caps.audio.sampleRates), [44100, 48000]);
  assert.deepEqual(Array.from(caps.audio.channels), [1, 2]);
});
