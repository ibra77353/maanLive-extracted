#!/usr/bin/env node
/**
 * Run the binary modules in this repository as ordinary CommonJS modules.
 *
 * `server.js` and `src/*.js` are V8 code caches produced by Node 18.5.0 / V8 10.2.154.4-node.8.
 * V8 accepts a cache when the runtime matches it and the *length* of the source it is given matches the
 * length recorded in the cache header (the content itself is not checked), so a dummy source of the right
 * length is enough to load these files — this is the same technique bytenode uses.
 *
 * Usage (the runtime must be Node 18.5.0, e.g. `docker run --rm -v "$PWD":/work -w /work node:18.5.0`):
 *   node tools/decompile/load_bytecode.js server.js        # boots the app on port 3001
 *   node tools/decompile/load_bytecode.js src/auth.js      # loads one module and prints its exports
 *
 * Used to obtain ground truth while verifying the decompilation (see DECOMPILATION.md §5).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const Module = require('module');

// Header fields of these particular caches: magic (V8 10.2.154.4-node.8) and version hash.
const MAGIC = 0xc0de0562;
const VERSION_HASH = 0xaf632352;

function isCodeCache(buffer) {
  return buffer.length > 24 && buffer.readUInt32LE(0) === MAGIC && buffer.readUInt32LE(4) === VERSION_HASH;
}

const loadJs = Module._extensions['.js'];
Module._extensions['.js'] = function (module, filename) {
  const buffer = fs.readFileSync(filename);
  if (!isCodeCache(buffer)) return loadJs(module, filename);

  const sourceLength = buffer.readUInt32LE(8);
  const dummySource = '"' + '\u200b'.repeat(sourceLength - 2) + '"';
  const script = new vm.Script(dummySource, { cachedData: buffer, filename });
  if (script.cachedDataRejected) {
    throw new Error(
      `${filename}: cache rejected — this bytecode needs Node 18.5.0 (V8 10.2.154.4-node.8), ` +
      `current runtime is ${process.version} (V8 ${process.versions.v8})`
    );
  }

  const wrapper = script.runInThisContext();
  wrapper.call(
    module.exports, module.exports, module.require.bind(module), module, filename, path.dirname(filename)
  );
};

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.error('usage: node tools/decompile/load_bytecode.js <file.js> [more.js ...]');
  process.exit(2);
}

for (const target of targets) {
  const resolved = path.resolve(target);
  const exported = require(resolved);
  console.log(`${target}: exports = ${JSON.stringify(Object.keys(exported || {}).sort())}`);
}
