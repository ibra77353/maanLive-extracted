# tools/decompile

How `decompiled/` was produced from the V8 code caches in this repository, and how to reproduce it.

## What the binaries are

`server.js` and `src/*.js` are **V8 code caches** (serialized Ignition bytecode + constant pool), produced by
**Node 18.5.0 / V8 `10.2.154.4-node.8` with default V8 flags**, from sources obfuscated with
javascript-obfuscator. Full evidence and the header layout: `../../DECOMPILATION.md`.

Quick self-check of the identification (any Node): the header of every file is
`magic 0xC0DE0562 | version hash 0xAF632352 | source length | flag hash 0xA8C5122F | payload length | checksum`,
and `payload length + 24 == file size`.

```sh
python3 -c "import struct,sys;b=open(sys.argv[1],'rb').read();print([hex(x) for x in struct.unpack_from('<6I',b,0)])" src/auth.js
```

To see the version hashes of candidate runtimes (what the identification compares against):

```sh
docker run --rm node:18.5.0 node -e 'const vm=require("vm");const c=new vm.Script("x=1",{produceCachedData:true}).cachedData;console.log(process.versions.v8,[...Array(4)].map((_,i)=>c.readUInt32LE(i*4).toString(16)))'
```

## Files

| file | purpose |
|---|---|
| `pipeline.sh` | end-to-end rebuild of `decompiled/` (disassemble → View8 → resolve strings → headers) |
| `resolve_strings.py` | resolves the obfuscated base64 string array (accessor offset + rotation + alphabet) in View8 output |
| `emit_source.py` | lowers a resolved register listing into candidate JavaScript under `recovered/`, with literal verification |
| `normalize_listing.py` | literal-aware scanning and structural repairs for extended conditions and malformed catch blocks |
| `test_emit_source.py` | regression fixtures for the emitter's structural and literal repairs, and a temporary-output syntax audit of all 18 modules |
| `load_bytecode.js` | runs the original caches as CommonJS modules under Node 18.5.0 (ground truth for verification) |

The structure, RegExp/handler and name checks live one directory over, in `tools/verify/`: `structure.py`
compares every recovered loop and `switch` statement with the bytecode listings, `semantics.py` compares
every RegExp literal and every exception handler with them, and `crosscheck.py` compares the recovered
names with the names the running caches expose (Node 18.5.0 container). *Verification status* below
records what they report.

## Manual pipeline

1. **Disassemble** each binary with View8's patched-V8 disassembler for V8 10.2.
   View8 publishes that disassembler for Windows only, so it runs under Wine:

   ```sh
   docker run --rm -v /tmp/v8:/data scottyhardy/docker-wine \
     wine /data/10.2.154.26.exe /data/auth.js > auth.js.disasm.txt
   ```

2. **Decompile** the listing (Linux, needs `pip3 install parse`):

   ```sh
   python3 view8.py -f disassembled -i auth.js.disasm.txt -o auth.js.dec.js -e decompiled --normalize
   ```

3. **Resolve the obfuscated strings** and write the final file:

   ```sh
   python3 tools/decompile/resolve_strings.py --listing out/auth.js.disasm.txt \
     --view8 auth.js.dec.js --out decompiled/src/auth.js --packages node_modules
   ```

   The script prints its decision to stderr, e.g.
   `{"accessor": "func_0x34be_0x10000000a", "offset": 423, "array_entries": 43, "rotation_candidates": [30], "rotation": 30, "accessor_calls": 47, "resolved": 47, "unresolved": 0}`
   — a non-zero exit means the rotation was ambiguous and the module needs review.

4. **Verify** against the real binary (the caches run, they are self-contained):

   ```sh
   docker run --rm -v "$PWD":/work -w /work node:18.5.0 node tools/decompile/load_bytecode.js src/auth.js
   ```

## Lowering into the original module layout

With Python 3.10+ and Node available, emit a module without replacing its original binary:

```sh
mkdir -p recovered/src
python3 tools/decompile/emit_source.py --ir decompiled/server.js --binary server.js \
  --out recovered/server.js
node --check recovered/server.js
```

For each `src/NAME.js`, use `--ir decompiled/src/NAME.js --binary src/NAME.js
--out recovered/src/NAME.js`. The emitter still reads the corresponding committed disassembler dump
and reports verified/unverified literal counts; structural repairs do not bypass that verifier.

The targeted repairs are:

1. Join extended `if` headers and keep intervening register assignments inside the appropriate
   short-circuit operand, rather than eagerly evaluating them before the condition.
2. Put iterator-cleanup catches after their try's closing brace; restore the missing `try` for
   recognized context blocks followed by a catch. Reject unsupported catch layouts.
3. Emit `async function NAME`, and detect `await` in code rather than in string contents.
4. Identify the CommonJS wrapper from the outer script's assignment/return pair, including
   `server.js`, which has no exports assignment. Ambiguous wrappers are rejected.
5. Scan backslash-delimited RegExp sources before interpreting quotes inside them, and emit
   `new RegExp(sourceString, flags)` — the flags the listing compiled for that *occurrence*, since the
   same pattern may be compiled twice with different ones — so JavaScript decodes escapes once. Literal
   braces do not affect function splitting, and literal text is not renamed as if it were code.
6. Add the block a switch statement needs. View8 prints `switch (r8)` directly followed by the
   clauses, each carrying its own block, and keeps the statements the bytecode still runs inside the
   switch — a trailing `return`, `break` or assignment run — after the last clause. The added block
   ends after that trailing run, and only simple statements are absorbed, so the repair never
   swallows a neighbouring region.
7. Restore the `while (true)` View8 omits around a loop body it prints as a bare block. A V8 loop
   body is a `Block` scope; without its loop header the loop's condition check and its
   `break`/`continue` sit in a bare block, where JavaScript rejects them. A bare block — one that no
   `if`/`else`/`try`/`catch`/loop/`switch` clause or function owns — with a `break`/`continue`
   directly inside it is wrapped in `while (true)`. Nothing is moved, added or reordered.
8. Lower View8's `<null` object-literal values (a `null` that carries no character data of its own)
   to `null`.
9. Recover a RegExp source whose final quote View8 prints as a bare backslash — `tvg-logo="([^"]*)"`
   reaches the listing as `tvg-logo=\"([^\"]*)\`. That reading is offered as one candidate next to the
   one the printing implies verbatim, and the module's string table decides, so a source whose own last
   character really is a backslash is still recovered exactly as printed.

Run the focused regression checks and the 18-module syntax audit:

```sh
python3 -m unittest discover -s tools/decompile -p 'test_emit_source.py' -v
```

```sh
python3 tools/verify/structure.py
python3 -m unittest discover -s tools/verify -p 'test_structure.py' -v
```

```sh
python3 tools/verify/semantics.py
python3 -m unittest discover -s tools/verify -p 'test_semantics.py' -v
```

`tools/verify/structure.py` checks the repaired loop and `switch` structures against the bytecode
itself rather than the emitted syntax: it compares `recovered/` with the committed
`decompiled/bytecode/*.disasm.txt` listings (loop back edges and nesting depth per function, `switch`
jump tables and their clause blocks, strict-comparison `switch` chains, and `async` generator resume
dispatch). One row per module; a non-zero exit means a construct in `recovered/` is not backed by the
listing, or a listing construct is missing from it. `tools/verify/semantics.py` does the same for the
two constructs a syntax check cannot see: it pairs every `CreateRegExpLiteral` — pattern from the
constant pool, flags from the mask V8 compiled — with the `new RegExp(…)` the emitter produced, and
holds each module's `catch`-clause count to its handler-table entry count. `tools/verify/crosscheck.py`
compares recovered names against the names the running bytecode exposes.

The audit generates files only in a temporary directory, calls `node --check` on each one, and
removes them afterwards. Only synthetic fixtures are executed in the behavioural tests, never
recovered application modules. A passing syntax check is **not** proof of runtime equivalence.
Node-dependent tests are marked skipped if Node is unavailable; that is not a successful audit.

**Verification status:** the 32 emitter tests pass, including the 18-module syntax audit, and `recovered/`
has been regenerated from the listings — all **18/18** modules are emitted and each one passes
`node --check`. `tools/verify/crosscheck.py` still reports 18/18 modules whose every `require()` name
the running bytecode produced is present in the output, and all 44 such names appear in
`recovered/` as well. The loop and switch structure restored by `normalize_listing.py` **is** verified
at bytecode level: `tools/verify/structure.py` reports **18/18** modules in which every one of the
**142** loop back edges (with matching per-function loop multisets over the **587** compared
functions), all **8** jump tables, the single strict-comparison `switch` chain and all **55** `async`
resume dispatches is backed by the committed listings — its own last line, `modules whose every loop
and switch construct is backed by the bytecode: 18/18`, is the pass condition — and its 9 regression
tests pass as well. The RegExp literals and exception handlers the emitter restored **are** verified at
bytecode level too: `tools/verify/semantics.py` reports **18/18** modules in which all **113**
`new RegExp(…)` literals match a `CreateRegExpLiteral` pattern *and* its compiled flag mask, and all
**375** handler-table entries match a `catch` clause, with every handler target resolving to an
instruction offset of its own bytecode array — its own last line, `modules: 18/18 with every RegExp
literal and every exception handler backed by the bytecode`, is the pass condition — and its
**18** regression tests pass as well. V8 context lifetimes are the one construct left without a
bytecode-level check:
a passing syntax check is not runtime equivalence. The original `server.js`, `src/` binaries and
`decompiled/` listings are left untouched.

## Caveats

* Step 1 is the only Windows/Wine dependency; `decompiled/bytecode/*.disasm.txt` are committed, so steps 2–4
  can be re-run from the repository alone.
* The disassembler binary is built for V8 10.2.154.26 while the caches are 10.2.154.4. Their flag/version
  hashes differ; View8's patched disassembler tolerates this. View8's `VersionDetector` identifies these
  files as `10.2.154.4`.
* View8 output is a register-level representation, not reconstructable source. Do not expect
  `decompiled/*.js` to parse or run.
* View8's listing is not byte-exact for one RegExp case: the quote that ends a source is printed as a
  backslash. `tools/decompile/emit_source.py` recovers it from the code cache's string table (repair 9),
  and `tools/verify/semantics.py` checks the result against the bytecode.
