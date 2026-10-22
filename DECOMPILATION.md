# AmaanLive — binary module analysis and decompilation

**ملخّص بالعربية:** ملفات `server.js` وجميع ملفات `src/*.js` في هذا المستودع ليست جافاسكربت ولا كوداً تنفيذياً للآلة، بل **ذاكرة مؤقتة لكود V8 (V8 code cache)** — أي "بایت‌كود المحرك Ignition" مُسلسَل مع جدول الثوابت (constant pool) وشجرة `SharedFunctionInfo`. النسخة المولِّدة لها: **Node.js v18.5.0 / V8 10.2.154.4-node.8** مع إعدادات V8 الافتراضية، وتم تصنيفها بنسخ مُشوَّش (javascript-obfuscator). تم تحويلها كلها (18/18 وحدة) إلى جافاسكربت مقروء مع استعادة مصفوفة النصوص المُشفّرة، والنتائج في مجلد `decompiled/` (سجلات على مستوى السجلات). ثم يُخفّض كل سجل إلى وحدة جافاسكربت صالحة نحوياً في مجلد `recovered/` عبر `tools/decompile/emit_source.py`: الوحدات الثماني عشرة كلها مُولّدة وكلها تنجح في `node --check`، مع بقاء التحقق الدلالي على مستوى البايت‌كود مطلوباً. الأدوات وخطوات إعادة التنفيذ في `tools/decompile/`.

---

## 1. What the binary files are (identification)

`server.js` and all 17 files in `src/` are **not** JavaScript source and **not** machine code. Each is a
**serialized V8 code cache** — the exact container format produced by `v8::ScriptCompiler::CreateCodeCache()`
(the same container `bytenode` and `pkg` use). It holds Ignition bytecode, the constant pool (string
literals, arrays, shared function infos) and the scope/position metadata of the module.

Detected by inspecting the first bytes: every one of the 18 files starts with the identical 24-byte header

| offset | field | value in these files | meaning |
|---:|---|---|---|
| 0 | magic | `0xC0DE0562` | `0xC0DE0000 ^ ExternalReferenceTable::kSize` → external reference table size **1378** |
| 4 | version hash | `0xAF632352` | identifies the exact V8 build |
| 8 | source length | per file (e.g. `12909` for `server.js`) | length of the original JS source in characters |
| 12 | flag hash | `0xA8C5122F` | hash of the V8 flags in effect at compile time |
| 16 | payload length | per file | bytecode payload size (payload length + 24 == file size, all 18 files) |
| 20 | payload checksum | per file | checksum of the payload |
| 24… | payload | Ignition bytecode + serialized objects | the code itself |

Every field was confirmed experimentally, not assumed:

* **`[8]` is the source length**: compiling a 24-character source with Node's `vm.Script(…, {produceCachedData:true})`
  yields `0x18` in that slot, and a 12909-character source yields `0x326D` — the value found in `server.js`.
* **`[16]` is the payload length**: `payload + 24 == file size` for all 18 files.
* **V8 validates the source *length* only, never its content**: deserializing a cache while passing a
  *different* dummy source of equal length is accepted (`cachedDataRejected === false`), a wrong-length one is
  rejected. This is what makes the caches self-contained and loadable.
* The files are **eagerly compiled** (every nested function body is present): the caches were loaded in the
  matching runtime and their inner functions executed correctly without any JS source.

## 2. Which V8 / runtime produced them (exact)

**Node.js v18.5.0, V8 `10.2.154.4-node.8`, default V8 flags.**

Proof (compiling a probe script under each candidate runtime and comparing the three build-dependent header fields):

| source | magic `[0]` | version hash `[4]` | flag hash `[12]` |
|---|---|---|---|
| **the AmaanLive caches** | `0xC0DE0562` | `0xAF632352` | `0xA8C5122F` |
| **node 18.5.0 — V8 10.2.154.4-node.8, default flags** | `0xC0DE0562` | `0xAF632352` | `0xA8C5122F` ✅ |
| node 18.20.8 — V8 10.2.154.26-node.39, default flags | `0xC0DE0563` | `0x3569A082` | `0xE6993F55` |
| node 20.20.2 — V8 11.3.244.8 | `0xC0DE05CC` | `0x00E4C20B` | `0x50462153` |
| node 16.20.2 — V8 9.4.146.26 | `0xC0DE0419` | `0xACDD64EE` | `0xF09441C9` |
| node 18.5.0 with `--no-lazy` | `0xC0DE0562` | `0xAF632352` | `0x06F99373` |

Corroborating evidence:

* `AmaanLive.exe` (in `AmaanLive.zip`, the `node18-win-x64` `pkg` build) embeds the strings **`v18.5.0`** and
  **`10.2.154.4-node.8`** — the runtime it was packaged with.
* The 24-byte header layout (no read-only-snapshot field) is the V8 9.x/10.2 layout; Node 20+/V8 11+ use a
  32-byte header, so the bytecode cannot come from a modern V8.
* View8's own `VersionDetector` (independent hash table) reports **`10.2.154.4`** for these files.
* The flag hash is the *default-flags* value for that build (see last row above), i.e. the modules were
  **not** compiled with `--no-lazy`.

## 3. Obfuscation layer

The original sources were processed by **javascript-obfuscator** before compiling:

* a base64 **string array** (per module, 25–383 entries) with a custom alphabet
  (`abcdefghijklmnopqrstuvwxyzABC…+/=` — the standard alphabet with the case of the letters swapped),
  e.g. `zxHWB3j0CW` → `exports`;
* a **string-array accessor** `_0x…(index)` with a per-module index offset (`index - offset` → array slot);
* a **runtime rotation** of the array done by a "self-defending" initializer that shifts/rotates the array
  until an arithmetic checksum over a few `parseInt()`-able entries matches a target constant
  (e.g. `828274` in `src/singleton.js`).

All three are recovered (`tools/decompile/resolve_strings.py`): the array is read from the disassembly's
constant-pool dump, the accessor offset from the accessor body, and the rotation `k` is solved as the
**unique** shift for which every array slot read by the rotator checksum holds a `parseInt()`-able entry —
giving a unique solution for **18/18** modules.

## 4. Method used to convert

| step | tool | why |
|---|---|---|
| identity the container & version | Node 18.5.0 / 20.20.2 / 16.20.2 probes in Docker | header magic + hashes are build-specific |
| bytecode listing | View8's patched-V8 disassembler for V8 10.2 (`suleram/View8`) — Windows binary run under Wine, since only Windows builds are published | the only disassembler that supports V8 10.2 |
| bytecode → JavaScript | View8 (`python3 view8.py -f disassembled …`) | purpose-built V8-bytecode decompiler |
| obfuscated strings | `tools/decompile/resolve_strings.py` | resolves accessor calls to literal strings |
| verification | `tools/decompile/load_bytecode.js` | runs the original caches as CommonJS modules in node 18.5.0 to obtain ground truth |

## 5. Result

All **18/18** modules decompiled (23,960 lines of JavaScript; see the module table below). String-array
resolution replaced **3,110/3,110** accessor calls with their literal values.

Recovered content is the real application logic, e.g.

* `src/routes.js`: `"/api/me"`, `"/ads/:id"`, `"/channels/:id/restart"`, `"/backup/download"`, `"/backup/restore"` …
* `src/ffmpeg.js`: `-c`, `-crf`, `-bufsize`, `-filter_complex`, `-allowed_extensions`, `-avoid_negative_ts` …
* `src/singleton.js`: the Arabic log string `"[singleton] تعذّرت كتابة قفل النسخة الواحدة: "`.
* exported APIs, e.g. `src/auth.js` → `isAuthed, login, logout, requireAuth`;
  `src/scheduler.js` → `nextOpenMinutes, shouldRunNow, startLoop, tick`.

### Verification performed

1. **Runtime behaviour of the binary** (ground truth): the caches load and execute as CommonJS modules under
   Node 18.5.0 — `server.js` actually boots the app (`Amaan Live | أمان لايف … Server listening on 0.0.0.0:3001`).
2. **Exports cross-check**: recovered export names equal the keys the running bytecode exposes
   (`Object.keys(require('src/auth.js'))` etc.).
3. **String resolution cross-check**: all **44/44** `require()` module names recovered from the obfuscated
   string array across the modules are exactly the module specifiers the bytecode requested at runtime;
   for 12 modules the recovered and observed sets are identical.

### Lowering to JavaScript (`recovered/`)

`tools/decompile/emit_source.py` lowers each register listing into a candidate module under
`recovered/`, one file per original module, keeping every recovered name so a module can be read
against its listing. All **18/18** modules are emitted and every one of them passes `node --check`,
and all **44/44** `require()` names the running bytecode produced are present in them as well.

This is a syntactic reconstruction, not a proof of equivalence. Literals are verified against the code
cache's string table (see above), but RegExp flags, flattened exception handlers, V8 context lifetimes,
and the loop and switch blocks View8 prints without their own braces — restored by
`tools/decompile/normalize_listing.py` — still require bytecode-level verification. The register-level
listings in `decompiled/` remain the reference representation.

### Module table

| module | source chars | bytecode bytes | decompiled lines |
|---|---:|---:|---:|
| `server.js` | 12909 | 21760 | 895 |
| `src/auth.js` | 5251 | 8896 | 400 |
| `src/backup.js` | 7035 | 11904 | 481 |
| `src/devices.js` | 12445 | 23088 | 1373 |
| `src/ffmpeg.js` | 48691 | 82584 | 4957 |
| `src/idle.js` | 4847 | 8360 | 409 |
| `src/iptv.js` | 6282 | 11544 | 598 |
| `src/license.js` | 16265 | 27536 | 1481 |
| `src/mh.js` | 11897 | 21480 | 1026 |
| `src/onlinechannels.js` | 11998 | 23824 | 1183 |
| `src/platform.js` | 3923 | 6240 | 326 |
| `src/routes.js` | 71799 | 126856 | 6020 |
| `src/scheduler.js` | 5748 | 9768 | 684 |
| `src/singleton.js` | 3500 | 6224 | 272 |
| `src/store.js` | 5371 | 9680 | 450 |
| `src/update.js` | 11509 | 20808 | 985 |
| `src/worldcup.js` | 8657 | 17424 | 932 |
| `src/xtream.js` | 14673 | 24160 | 1488 |
| **total** | **262800** | **462136** | **23960** |

String-array statistics per module (offset, solved rotation, calls resolved):

| module | array entries | index offset | rotation k | accessor calls | resolved | unresolved |
|---|---:|---:|---:|---:|---:|---:|
| `auth.js` | 43 | 423 | 30 | 47 | 47 | 0 |
| `backup.js` | 50 | 472 | 26 | 53 | 53 | 0 |
| `devices.js` | 65 | 236 | 55 | 127 | 127 | 0 |
| `ffmpeg.js` | 300 | 397 | 13 | 670 | 670 | 0 |
| `idle.js` | 33 | 169 | 19 | 19 | 19 | 0 |
| `iptv.js` | 46 | 111 | 18 | 40 | 40 | 0 |
| `license.js` | 91 | 229 | 57 | 233 | 233 | 0 |
| `mh.js` | 77 | 460 | 63 | 118 | 118 | 0 |
| `onlinechannels.js` | 90 | 120 | 65 | 155 | 155 | 0 |
| `platform.js` | 27 | 146 | 17 | 31 | 31 | 0 |
| `routes.js` | 383 | 208 | 234 | 1003 | 1003 | 0 |
| `scheduler.js` | 32 | 298 | 19 | 33 | 33 | 0 |
| `server.js` | 118 | 166 | 50 | 177 | 177 | 0 |
| `singleton.js` | 25 | 233 | 3 | 14 | 14 | 0 |
| `store.js` | 41 | 189 | 20 | 55 | 55 | 0 |
| `update.js` | 98 | 148 | 94 | 117 | 117 | 0 |
| `worldcup.js` | 65 | 115 | 42 | 92 | 92 | 0 |
| `xtream.js` | 98 | 427 | 3 | 126 | 126 | 0 |
| **total** | | | | **3110** | **3110** | **0** |

## 6. Limitations (what the output is and is not)

* The output is a **faithful decompilation, not the original source**. V8 bytecode retains no local variable
  names, no comments, no formatting and no original identifier spelling (the sources were renamed by the
  obfuscator anyway). Registers (`r0`, `ACCU`), scope slots (`Scope[1][5]`) and V8's integer-division marker
  `\` are therefore preserved as-is; the control flow, expressions, literals and exported API are exact.
* The decompiled files are **not runnable as-is** (registers/scope slots are an intermediate representation).
  The original binaries *are* runnable — see `tools/decompile/load_bytecode.js`.
* The module table's "decompiled lines" counts are View8 output lines, not original source lines.
* `decompiled/bytecode/*.disasm.txt` are the disassembler dumps (5.7 MB). They are kept so the decompilation
  can be re-run and audited without Wine/Windows.

## 7. Reproducing the conversion

See `tools/decompile/README.md`; the pipeline is
`disassemble (Wine + View8's V8 10.2 disassembler) → view8.py → resolve_strings.py`.
