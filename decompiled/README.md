# decompiled/

Readable JavaScript recovered from the V8 code caches in the repository root (`server.js`, `src/*.js`).
The binary originals are untouched — they are the source of truth these files were derived from.

| path | contents |
|---|---|
| `server.js`, `src/*.js` | decompiled, string-deobfuscated JavaScript (23,960 lines total) |
| `bytecode/*.disasm.txt` | raw V8 10.2 bytecode listings of each binary (evidence + re-decompilation input) |

* Produced with View8 (V8 10.2 disassembler) plus `tools/decompile/resolve_strings.py`.
* The representation is register-level and faithful: `r0`/`ACCU` registers and `Scope[n][m]` slots are kept,
  `\` is V8's integer division. It is **not** valid, runnable JavaScript and it is **not** the original source
  (bytecode keeps no local names, comments or formatting). See `../DECOMPILATION.md` §6.
* The original binaries do run: `node tools/decompile/load_bytecode.js server.js` on Node 18.5.0 boots the app.
