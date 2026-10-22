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
| `load_bytecode.js` | runs the original caches as CommonJS modules under Node 18.5.0 (ground truth for verification) |

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

## Caveats

* Step 1 is the only Windows/Wine dependency; `decompiled/bytecode/*.disasm.txt` are committed, so steps 2–4
  can be re-run from the repository alone.
* The disassembler binary is built for V8 10.2.154.26 while the caches are 10.2.154.4. Their flag/version
  hashes differ; View8's patched disassembler tolerates this. View8's `VersionDetector` identifies these
  files as `10.2.154.4`.
* View8 output is a register-level representation, not reconstructable source. Do not expect
  `decompiled/*.js` to parse or run.
