# tools/extract

How the files in this repository were obtained from `AmaanLive.zip`, and how to re-do and verify it.

## What the archive holds

`AmaanLive.zip` (15,930,364 bytes, sha256 `24af61052fb7778727bc652870b25d8c1e131b78eebaa11e66921bcbeb4b174e`)
contains **exactly one member**: `AmaanLive.exe` (39,608,013 bytes). There is no source tree inside the
zip — the application has to be taken out of the executable.

`AmaanLive.exe` is a **pkg 5.8.1** build (`node18-win-x64`), laid out as

```
[win-x64 node image][V8 snapshot blob][payload: one gzip member per file][prelude source + file dictionary]
```

* the payload is a sequence of entries, each a **gzip member** (`DOCOMPRESS = 1` in the prelude),
* the dictionary at the very end of the exe maps every file name to its **index** in that sequence,
* a snapshot blob (the code caches the app was built from) sits between the node image and the payload.

## Re-extract and verify

```sh
python3 tools/extract/verify_payload.py                 # verify against the working tree
python3 tools/extract/verify_payload.py --out /tmp/re   # also write the re-extracted payload out
```

The script checks the archive CRCs, decodes the dictionary, decompresses every payload member, compares
each one with the file of the same content in the tree, and proves the ordering rule (payload order ==
dictionary-index order). Exit status is non-zero if the archive is corrupt or any file differs.

## Result

The 18 application modules (`server.js`, `src/*.js`) and the rest of the shipped tree (`public/`,
`config/`, `package.json`, `node_modules/`) are **byte-for-byte identical** to the payload, so the copy
in this repository has not been altered by the extraction. The exact numbers are in
`../../REVERIFICATION.md`.
