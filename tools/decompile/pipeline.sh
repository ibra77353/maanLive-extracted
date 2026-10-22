#!/bin/sh
# Rebuild decompiled/ from the binary modules (server.js, src/*.js) step by step.
#
# These modules are V8 code caches produced by Node 18.5.0 / V8 10.2.154.4-node.8 (see DECOMPILATION.md).
# Only the *listing* step needs Windows/Wine, because View8 publishes its patched-V8 disassembler for
# V8 10.2 as a Windows binary only. Steps 2 and 3 are pure Linux.
#
# Requirements:
#   - docker (for the Wine container and for an exact Node 18.5.0 runtime)
#   - git clone https://github.com/suleram/View8   (VIEW8=<path>)
#   - the V8 10.2 disassembler from https://github.com/suleram/View8/releases  (DISASSEMBLER=<file.exe>)
#   - python3 with the `parse` package  (pip3 install parse) — needed by View8
#
# Usage:  VIEW8=/path/to/View8 DISASSEMBLER=/path/to/10.2.154.26.exe sh tools/decompile/pipeline.sh
set -eu

REPO=$(cd "$(dirname "$0")/../.." && pwd)
VIEW8=${VIEW8:?set VIEW8 to the cloned View8 directory}
DISASSEMBLER=${DISASSEMBLER:?set DISASSEMBLER to View8's 10.2.154.26.exe}
WORK=${WORK:-/tmp/v8}
WINE_IMAGE=${WINE_IMAGE:-scottyhardy/docker-wine}

mkdir -p "$WORK/in" "$WORK/out" "$WORK/view8"
cp "$REPO"/server.js "$REPO"/src/*.js "$WORK/in/"
chmod -R a+rwX "$WORK"   # the Wine container runs as an unprivileged user

# 1. bytecode listing. The disassembler writes the listing to stdout.
docker run --rm -v "$WORK":/data -v "$DISASSEMBLER":/data/disassembler.exe:ro "$WINE_IMAGE" \
  sh -c 'for f in /data/in/*.js; do wine /data/disassembler.exe "$f" > "/data/out/$(basename "$f").disasm.txt" 2>/dev/null; done'

# 2. decompile each listing with View8 (raw register-level output).
cd "$VIEW8"
for f in "$WORK"/out/*.disasm.txt; do
  name=$(basename "$f" .disasm.txt)
  python3 view8.py -f disassembled -i "$f" -o "$WORK/view8/$name.dec.js" -e decompiled --normalize
done

# 3. resolve the obfuscated string array, then assemble decompiled/.
mkdir -p "$REPO/decompiled/src" "$REPO/decompiled/bytecode"
for f in "$WORK"/out/*.disasm.txt; do
  name=$(basename "$f" .disasm.txt)
  rel=$name; [ "$name" = server.js ] || rel=src/$name
  python3 "$REPO/tools/decompile/resolve_strings.py" \
    --listing "$f" --view8 "$WORK/view8/$name.dec.js" --out "$REPO/decompiled/$rel" \
    --binary "$REPO/$rel" --packages "$REPO/node_modules" \
    || echo "resolve_strings: $name needs review (see summary above)"
  cp "$f" "$REPO/decompiled/bytecode/$name.disasm.txt"
done

# 4. provenance header (kept identical to the committed files).
python3 - "$REPO" <<'PY'
import os, struct, sys
repo = sys.argv[1]
for rel in ["server.js"] + ["src/" + f for f in sorted(os.listdir(repo + "/src"))]:
    name = os.path.basename(rel)
    magic, ver, src_len, flag, payload, checksum = struct.unpack_from("<6I", open(repo + "/" + rel, "rb").read(), 0)
    path = repo + "/decompiled/" + rel
    body = open(path, encoding="utf-8").read()
    if body.startswith("// Decompiled from binary"):
        continue
    header = (
        "// Decompiled from binary %s (V8 %s code cache, %d source chars, %d bytecode bytes).\n"
        "// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.\n"
        "// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.\n"
        "// See DECOMPILATION.md for the method, the evidence and the limitations.\n\n"
    ) % (rel, "10.2.154.4-node.8", src_len, payload)
    open(path, "w", encoding="utf-8").write(header + body)
PY

echo "done. decompiled/ refreshed from the binary modules."
