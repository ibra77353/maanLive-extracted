#!/usr/bin/env python3
"""Resolve javascript-obfuscator string-array calls in View8 output.

The modules in this repository were obfuscated with javascript-obfuscator before being compiled to V8
bytecode: every string is read through an accessor call `_0x…(index)` that returns
`base64decode(array[(index - offset + k) % n])`, where `k` is a rotation applied at load time by a
"self-defending" initializer. This script

  1. reads the string array from the disassembler listing (the constant-pool dump of the array literal),
  2. finds the accessor function and its index offset in the View8 output,
  3. solves the rotation `k` as the unique shift for which every array slot read by the rotator's checksum
     holds a parseInt()-able entry (the obfuscator stores its checksum operands as "<digits><random>"),
  4. substitutes every accessor call with the decoded string literal.

Usage:
  resolve_strings.py --listing <module.js.disasm.txt> --view8 <module.dec.js> --out <module.js>
                     [--packages /path/to/node_modules]

Exit status is non-zero if no rotation could be solved (the input is written through unchanged).
"""
from __future__ import annotations

import argparse
import base64
import json
import os
import re
import sys

# javascript-obfuscator's string array is base64 with the case of A-Z/a-z swapped.
CUSTOM_ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="
STANDARD_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
TRANSLATION = str.maketrans(CUSTOM_ALPHABET, STANDARD_ALPHABET)

NODE_BUILTINS = set(
    "assert async_hooks buffer child_process cluster console constants crypto dgram diagnostics_channel "
    "dns domain events fs http http2 https inspector module net os path perf_hooks process punycode "
    "querystring readline repl stream string_decoder sys timers tls trace_events tty url util v8 vm wasi "
    "worker_threads zlib".split()
)


def decode_entry(entry: str) -> str | None:
    """base64-decode one array entry using the obfuscator's alphabet."""
    try:
        return base64.b64decode(entry.translate(TRANSLATION) + "=" * (-len(entry) % 4)).decode("utf-8")
    except Exception:
        return None


def find_string_arrays(listing: str) -> list[tuple[int, list[str]]]:
    """Every FixedArray of base64-ish strings in the listing, with its position."""
    arrays = []
    for match in re.finditer(r"\nStart FixedArray\n", listing):
        end = listing.find("\nEnd FixedArray", match.end())
        body = listing[match.end():end]
        entries = re.findall(r"^\s*\d+: 0x[0-9a-f]+ <String\[\d+\]: #(.*)>$", body, re.M)
        if len(entries) >= 15:
            decodable = [e for e in entries if decode_entry(e) is not None]
            if len(decodable) >= 9 * len(entries) // 10:
                arrays.append((match.start(), entries))
    return arrays


def find_array_function(js: str) -> tuple[str | None, str | None]:
    """The (function name, its symbol) that builds the string array, taken from the rotator's call."""
    call = re.search(r"(func_[0-9a-zA-Z]+_0x[0-9a-f]+)\((Scope\[\d+\]\[\d+\]), (\d+)\)", js)
    if not call:
        return None, None
    slot = call.group(2)
    assigned = re.search(re.escape(slot) + r" = (func_([0-9a-zA-Z]+)_0x[0-9a-f]+)", js)
    if not assigned:
        return None, None
    return assigned.group(1), assigned.group(2)


def find_accessor(js: str) -> str:
    """The accessor function: the function called with numeric literals most often."""
    counts: dict[str, int] = {}
    for match in re.finditer(r"\b(func_[0-9a-zA-Z]+_0x[0-9a-f]+)\((\d+)\)", js):
        counts[match.group(1)] = counts.get(match.group(1), 0) + 1
    if not counts:
        raise SystemExit("no accessor call found in the View8 output")
    return max(counts, key=lambda name: counts[name])


def find_accessor_offset(js: str, accessor: str) -> int:
    body = re.search(r"function " + re.escape(accessor) + r"\([^)]*\)\n\{(.*?)\n\}", js, re.S)
    match = re.search(r"a0 = \(a0 - (\d+)\)", body.group(1) if body else js)
    if not match:
        raise SystemExit("no index offset found in the accessor body")
    return int(match.group(1))


def find_rotator_slots(js: str, accessor: str) -> list[int]:
    """The array indices the self-defending rotator reads while computing its checksum."""
    for function in re.split(r"\n(?=function )", js):
        if "while (true)" in function and '"shift"' in function and '"push"' in function:
            holders = set(re.findall(r"^\s*(\w+) = " + re.escape(accessor) + r"\s*$", function, re.M))
            slots = {int(x) for holder in holders | {"ACCU"}
                      for x in re.findall(r"\b" + re.escape(holder) + r"\((\d+)\)", function)}
            slots |= {int(x) for x in re.findall(re.escape(accessor) + r"\((\d+)\)", function)}
            if slots:
                return sorted(slots)
    return []


def solve_rotation(decoded: list[str], slots: list[int], offset: int) -> list[int]:
    """Rotations for which every rotator slot holds a parseInt()-able entry."""
    size = len(decoded)
    numeric = {i for i, value in enumerate(decoded) if value and re.match(r"^\d", value)}
    slot_set = {slot - offset for slot in slots if 0 <= slot - offset < size}
    return [k for k in range(size) if {(slot + k) % size for slot in slot_set} <= numeric]


def score_rotation(js: str, accessor: str, decoded: list[str], offset: int, k: int, packages: set[str]) -> int:
    """Prefer rotations whose literal strings are recognisable module names / export keys."""
    known = NODE_BUILTINS | packages
    score = 0
    for match in re.finditer(re.escape(accessor) + r"\((\d+)\)", js):
        value = decoded[(int(match.group(1)) - offset + k) % len(decoded)]
        if value == "exports":
            score += 3
        if re.search(r"a1\(\s*$", js[max(0, match.start() - 30):match.start()]) and value in known:
            score += 5
    return score


def resolve(listing_path: str, view8_path: str, out_path: str, packages: set[str]) -> dict:
    listing = open(listing_path, encoding="utf-8", errors="replace").read()
    js = open(view8_path, encoding="utf-8", errors="replace").read()

    accessor = find_accessor(js)
    offset = find_accessor_offset(js, accessor)
    slots = find_rotator_slots(js, accessor)
    array_symbol = find_array_function(js)[1]

    arrays = find_string_arrays(listing)
    entries = None
    if array_symbol:
        position = listing.find("SharedFunctionInfo _%s>" % array_symbol)
        for start, candidate in sorted(arrays):
            if position >= 0 and start > position:
                entries = candidate
                break
    if entries is None and arrays:
        entries = max(arrays, key=lambda item: len(item[1]))[1]
    if entries is None:
        raise SystemExit("no string array found in the listing")

    decoded = [decode_entry(entry) or "" for entry in entries]
    candidates = solve_rotation(decoded, slots, offset)
    summary = {
        "accessor": accessor,
        "offset": offset,
        "array_entries": len(decoded),
        "rotator_slots": len(slots),
        "rotation_candidates": candidates,
    }
    if len(candidates) != 1:
        # Ambiguous: pick the best-scoring candidate, but say so.
        k = max(candidates, key=lambda c: score_rotation(js, accessor, decoded, offset, c, packages)) if candidates else 0
        summary["ambiguous"] = True
    else:
        k = candidates[0]
    summary["rotation"] = k

    size = len(decoded)
    calls = re.findall(re.escape(accessor) + r"\((\d+)\)", js)
    resolved = re.sub(
        re.escape(accessor) + r"\((\d+)\)",
        lambda m: json.dumps(decoded[(int(m.group(1)) - offset + k) % size], ensure_ascii=False),
        js,
    )
    left = len(re.findall(re.escape(accessor) + r"\(\d+\)", resolved))
    summary.update({"accessor_calls": len(calls), "resolved": len(calls) - left, "unresolved": left})

    with open(out_path, "w", encoding="utf-8") as handle:
        handle.write(resolved)
    return summary


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--listing", required=True, help="disassembler listing (*.disasm.txt)")
    parser.add_argument("--view8", required=True, help="View8 output to deobfuscate")
    parser.add_argument("--out", required=True, help="output file")
    parser.add_argument("--packages", default=None, help="node_modules directory, used to score rotations")
    args = parser.parse_args()

    packages = set(os.listdir(args.packages)) if args.packages and os.path.isdir(args.packages) else set()
    summary = resolve(args.listing, args.view8, args.out, packages)
    print(json.dumps(summary, ensure_ascii=False), file=sys.stderr)
    return 0 if summary.get("unresolved", 0) == 0 and not summary.get("ambiguous") else 1


if __name__ == "__main__":
    raise SystemExit(main())
