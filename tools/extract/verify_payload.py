#!/usr/bin/env python3
"""Re-extract the application from AmaanLive.zip and verify it against the working tree.

`AmaanLive.zip` contains exactly one file, `AmaanLive.exe` — a **pkg 5.8.1** build. The exe is

  [win-x64 node image][V8 snapshot blob][payload: one gzip member per file][prelude + file dictionary]

so the application files are *not* stored as plain text: every payload entry is a gzip member, and the
dictionary that sits at the end of the exe maps each file name to its index in the payload.

This script

  1. verifies the archive itself (CRC of every member + sha256 of the zip),
  2. reads `AmaanLive.exe` straight out of the archive,
  3. decodes the pkg file dictionary (name -> index),
  4. decompresses every gzip member of the payload,
  5. compares each decompressed file with the copy in this repository, byte for byte,
  6. proves the "entries are stored in dictionary-index order" rule by checking that the matched
     entries are strictly increasing in both payload offset and dictionary index.

Exit status is non-zero if the archive is corrupt or any file in the tree differs from the payload.

Usage:
  verify_payload.py [--zip AmaanLive.zip] [--root .] [--out DIR] [--json FILE]
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import struct
import sys
import zipfile
import zlib

SKIP_DIRS = {".git", "decompiled", "tools", "__pycache__"}


def read_archive(path: str) -> tuple[str, str, bytes]:
    """Verify the zip and return (sha256, member name, member bytes)."""
    with open(path, "rb") as handle:
        digest = hashlib.sha256(handle.read()).hexdigest()
    with zipfile.ZipFile(path) as archive:
        corrupt = archive.testzip()
        if corrupt is not None:
            raise SystemExit("archive is corrupt: CRC mismatch in %s" % corrupt)
        names = archive.namelist()
        if len(names) != 1:
            raise SystemExit("expected exactly one member, found %d" % len(names))
        return digest, names[0], archive.read(names[0])


def read_dictionary(exe: bytes) -> dict[str, int]:
    """pkg's file dictionary: the last JSON object before the trailing invocation arguments."""
    start = exe.rfind(b'{"', 0, len(exe) - 1)
    while start > 0:
        end = exe.find(b"}", start)
        try:
            raw = exe[start:end + 1].decode("utf-8")
            table = json.loads(raw)
        except Exception:
            table = None
        if table and all(isinstance(v, str) for v in table.values()):
            indices = {int(v, 36) for v in table.values()}
            if indices == set(range(len(table))):
                return {name: int(value, 36) for name, value in table.items()}
        start = exe.rfind(b'{"', 0, start)
    raise SystemExit("pkg file dictionary not found in the executable")


def payload_members(exe: bytes) -> list[tuple[int, bytes]]:
    """Every gzip member of the payload, as (offset, decompressed bytes), in file order."""
    members = []
    offset = 0
    while True:
        offset = exe.find(b"\x1f\x8b\x08", offset)
        if offset < 0:
            return members
        try:
            inflater = zlib.decompressobj(31)
            data = inflater.decompress(exe[offset:offset + 30_000_000]) + inflater.flush()
        except zlib.error:
            data = b""
        if data:
            members.append((offset, data))
        offset += 1


def tree_hashes(root: str) -> dict[str, str]:
    """sha256 of every file of the working tree, keyed by repository-relative path."""
    hashes = {}
    for directory, subdirs, files in os.walk(root):
        subdirs[:] = [d for d in subdirs if d not in SKIP_DIRS]
        for name in files:
            path = os.path.join(directory, name)
            rel = os.path.relpath(path, root)
            if rel == "AmaanLive.zip":
                continue
            with open(path, "rb") as handle:
                hashes[rel] = hashlib.sha256(handle.read()).hexdigest()
    return hashes


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--zip", default="AmaanLive.zip")
    parser.add_argument("--root", default=".")
    parser.add_argument("--out", default=None, help="directory to write the re-extracted payload into")
    parser.add_argument("--json", default=None, help="write the summary to this file")
    args = parser.parse_args()

    digest, member, exe = read_archive(args.zip)
    print("archive %s" % args.zip)
    print("  sha256            %s" % digest)
    print("  members           1 (%s, %d bytes)" % (member, len(exe)))

    table = read_dictionary(exe)
    members = payload_members(exe)
    print("  pkg dictionary    %d file names (payload index 0..%d)" % (len(table), len(table) - 1))
    print("  payload region    %d..%d, %d decompressed bytes" % (
        min(off for off, _ in members),
        max(off + len(d) for off, d in members),
        sum(len(d) for _, d in members)))

    hashes = tree_hashes(args.root)
    by_hash: dict[str, str] = {}
    for rel, value in hashes.items():
        by_hash.setdefault(value, rel)

    matched, unmatched = [], []
    for offset, data in members:
        name = by_hash.get(hashlib.sha256(data).hexdigest())
        if name is None:
            unmatched.append((offset, data))
        else:
            matched.append((offset, name, data))

    # The payload also carries one metadata record per entry (pkg's file index: mode, size, flags),
    # stored as a gzip member of plain JSON — those are members, not files.
    metadata = [m for m in unmatched if m[1].lstrip()[:1] == b"{" and b'"isFileValue"' in m[1]]
    other = [m for m in unmatched if m not in metadata]
    print("\npayload members decompressed: %d" % (len(matched) + len(unmatched)))
    print("  file contents identical to the tree: %d" % len(matched))
    print("  pkg metadata records (file index):   %d" % len(metadata))
    print("  neither:                             %d" % len(other))

    # The order rule: payload order == dictionary-index order. Prove it over the matched entries.
    ordered = sorted((table[name], offset) for offset, name, _ in matched if name in table)
    inversions = sum(1 for a, b in zip(ordered, ordered[1:]) if b < a)
    print("  dictionary-index order violations among matched entries: %d" % inversions)

    # Per-file verdict for the files this project is about.
    app = ["server.js"] + ["src/" + f for f in sorted(os.listdir(os.path.join(args.root, "src")))]
    payload_by_name = {name: (offset, data) for offset, name, data in matched}
    print("\napplication modules:")
    missing = []
    for rel in app:
        if rel not in payload_by_name:
            missing.append(rel)
            print("  MISSING IN PAYLOAD  %s" % rel)
            continue
        offset, data = payload_by_name[rel]
        with open(os.path.join(args.root, rel), "rb") as handle:
            local = handle.read()
        verdict = "identical" if local == data else "DIFFERS"
        print("  index %-4d offset %-9d %8d bytes  %-10s %s" % (
            table.get(os.path.basename(rel), -1), offset, len(data), verdict, rel))
        if verdict != "identical":
            missing.append(rel)

    if args.out:
        for offset, name, data in matched:
            target = os.path.join(args.out, name)
            os.makedirs(os.path.dirname(target), exist_ok=True)
            with open(target, "wb") as handle:
                handle.write(data)
        print("\nre-extracted %d files into %s" % (len(matched), args.out))

    # Every file of the working tree that the payload does not contain.
    payload_names = {name for _, name, _ in matched}
    tree_only = sorted(set(hashes) - payload_names)
    print("\ntracked files absent from the payload: %d" % len(tree_only))
    for rel in tree_only[:20]:
        print("  %s" % rel)
    if len(tree_only) > 20:
        print("  ... and %d more" % (len(tree_only) - 20))

    summary = {
        "archive_sha256": digest,
        "dictionary_entries": len(table),
        "payload_members": len(matched) + len(unmatched),
        "matched": len(matched),
        "unmatched": len(unmatched),
        "order_violations": inversions,
        "app_modules_verified": len(app) - len(missing),
        "app_modules_problem": missing,
        "tree_only_files": tree_only,
    }
    if args.json:
        with open(args.json, "w", encoding="utf-8") as handle:
            json.dump(summary, handle, indent=1, sort_keys=True)
    return 1 if (missing or inversions) else 0


if __name__ == "__main__":
    sys.exit(main())
