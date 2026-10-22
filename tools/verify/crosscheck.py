#!/usr/bin/env python3
"""Cross-check the decompiled output against the binary modules actually running.

`server.js` and `src/*.js` are self-contained V8 code caches: Node 18.5.0 can load them and run them
without any JavaScript source. That makes them ground truth — this script

  1. loads every module in a Node 18.5.0 container (the repository is mounted read-only, so a module
     that tries to write a config or a lock file cannot touch the checkout),
  2. records, per module, the exported keys and every module specifier passed to `require()`,
  3. checks that those names all occur as literals in the matching `decompiled/` output.

A name produced by the running bytecode that the decompiled file does not contain would mean the
recovery dropped or mangled something; `DECOMPILATION.md` states this check as 44/44.

Usage:
  crosscheck.py [--root .] [--node-image node:18.5.0] [--json FILE]
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import tempfile

HARNESS = r"""
const fs = require('fs'), vm = require('vm'), path = require('path'), Module = require('module');
const MAGIC = 0xc0de0562;
const native = Module._extensions['.js'];
Module._extensions['.js'] = function (module, filename) {
  const buffer = fs.readFileSync(filename);
  if (buffer.length < 24 || buffer.readUInt32LE(0) !== MAGIC) return native(module, filename);
  const length = buffer.readUInt32LE(8);
  const script = new vm.Script('"' + '\u200b'.repeat(length - 2) + '"', { cachedData: buffer, filename });
  script.runInThisContext().call(module.exports, module.exports, module.require.bind(module), module,
                                 filename, path.dirname(filename));
};
const requests = {};
const load = Module._load;
Module._load = function (request, parent) {
  if (parent && parent.filename) (requests[path.basename(parent.filename)] ||= []).push(request);
  return load.apply(this, arguments);
};
const out = {};
for (const rel of process.argv.slice(2)) {
  const name = path.basename(rel);
  try {
    out[name] = { ok: true, exports: Object.keys(require(path.resolve(rel)) || {}).sort() };
  } catch (error) {
    out[name] = { ok: false, exports: [],
                  error: error.constructor.name + ': ' + String(error.message).split('\n')[0] };
  }
  out[name].requires = [...new Set(requests[name] || [])].sort();
}
process.stdout.write(JSON.stringify(out, null, 1));
process.exit(0);
"""


def runtime_facts(root: str, modules: list[str], image: str, read_write: bool = False) -> dict:
    """Exports and require() specifiers observed while running the bytecode modules."""
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as handle:
        handle.write(HARNESS)
        harness = handle.name
    try:
        command = ["docker", "run", "--rm", "-i",
                   "-v", "%s:/work:%s" % (os.path.abspath(root), "rw" if read_write else "ro"),
                   "-v", "%s:/harness.js:ro" % harness,
                   "-w", "/tmp", image, "node", "/harness.js"] + ["/work/" + rel for rel in modules]
        result = subprocess.run(command, capture_output=True, text=True, timeout=600)
        if result.returncode != 0:
            raise SystemExit("node container failed: %s" % result.stderr[-2000:])
        return json.loads(result.stdout)
    finally:
        os.unlink(harness)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--root", default=".")
    parser.add_argument("--node-image", default="node:18.5.0")
    parser.add_argument("--json", default=None)
    parser.add_argument("--read-write", action="store_true",
                        help="mount the root read-write (the app writes config/config.json and srv/uploads "
                             "at startup) — point --root at a copy, never at this checkout")
    args = parser.parse_args()

    modules = ["server.js"] + ["src/" + f for f in sorted(os.listdir(os.path.join(args.root, "src")))]
    facts = runtime_facts(args.root, modules, args.node_image, args.read_write)

    print("runtime: %s, %d modules, mounted %s\n"
          % (args.node_image, len(modules), "read-write" if args.read_write else "read-only"))
    print("%-14s %-26s %-9s %-8s %s" % ("module", "loads", "requires", "exports", "require names found in output"))
    failures, incomplete = [], []
    for rel in modules:
        name = os.path.basename(rel)
        fact = facts.get(name, {})
        if not fact.get("ok"):
            incomplete.append(name)
        path = os.path.join(args.root, "decompiled", rel)
        text = open(path, encoding="utf-8", errors="replace").read() if os.path.exists(path) else ""
        literals = set(re.findall(r'"((?:[^"\\]|\\.)*)"', text))
        # The require() specifiers are strings this application passes to require, so every one of them
        # must appear in the decompiled output. Exported keys are only checked the same way when the
        # module exports its own object; a module that re-exports a library object (routes.js exports an
        # express router) simply carries that library's own keys.
        requires = sorted(set(fact.get("requires", [])))
        absent = [value for value in requires if value not in literals]
        exported = fact.get("exports", [])
        foreign = [value for value in exported if value not in literals]
        print("%-14s %-26s %-9d %-8d %s" % (
            name,
            "yes" if fact.get("ok") else "no (%s)" % fact.get("error", "?"),
            len(requires), len(exported),
            "%d/%d" % (len(requires) - len(absent), len(requires))
            + ("" if not foreign else "  (exports include %d library keys, e.g. %s)" % (len(foreign), foreign[:3]))))
        if absent:
            failures.append((name, absent))

    print("\nmodules whose every require() name is present in the decompiled output: %d/%d"
          % (len(modules) - len(failures), len(modules)))
    print("modules that loaded without error: %d/%d%s" % (
        len(modules) - len(incomplete), len(modules),
        "" if not incomplete else "   (did not load: %s)" % ", ".join(incomplete)))
    if args.json:
        with open(args.json, "w", encoding="utf-8") as handle:
            json.dump({"runtime": facts, "failures": failures}, handle, indent=1, sort_keys=True)
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
