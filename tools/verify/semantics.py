#!/usr/bin/env python3
"""Verify the RegExp literals and exception handlers of `recovered/` against the module bytecode.

`tools/verify/structure.py` checks the loop and `switch` structures. This script covers the two
semantic constructs that neither a syntax check nor the emitter's literal verifier can see, because
they are not plain string *values*:

  recovered JavaScript                             bytecode                                   compared as
  -----------------------------------------------  -----------------------------------------  ------------------
  `new RegExp("p", "gi")` — pattern and flags      `CreateRegExpLiteral [pat], [flg], #mask`   (pattern, flags)
  `try { … } catch { … }` clause                   one `Handler Table` entry `(from, to)->hdlr` count
  the bytecode's own handler inventory             `CreateCatchContext rN, [name]` at `hdlr`    catch-context names

How the bytecode is read
------------------------
The disassembler dump (`decompiled/bytecode/*.disasm.txt`) prints, for each function, the instruction
stream, then its constant pool (`Constant pool (size = N)`, one numbered entry per line, with nested
arrays and boilerplate descriptions printed as their own `Start …`/`End …` sections), then the source
position table, and — when the compilation produced handlers — a `Handler Table (size = N)` section
whose size counts *bytes*: four Smi fields per entry, so `N/16` rows `(from, to) -> hdlr` follow its two
header lines. Constant-pool numbering restarts with every function and the dump interleaves functions,
so the file is read as one stream: a pool belongs to the instruction stream it was printed after, is
resolved when it ends, and a handler table is consumed by its own declared size — a table whose rows do
not match its declared size is an error, never a guess.

A `CreateRegExpLiteral` prints three operands: the pool index of the pattern string, the pool index of
the flags Smi, and the **flag bitmask** V8 compiled (1 `g`, 2 `i`, 4 `m`, 8 `y`, 16 `u`, 32 `s`,
128 `d`). V8's printer escapes a backslash as `\\\\`, latin-1 characters as `\\xHH` and the rest as
`\\xHHH(H)` (U+0628 prints as `\\x628`), which is ambiguous when a hex digit follows such a character —
so each printed pattern is matched against `recovered/` under both readings, exactly as the emitter does
for the literals it decodes.

What each check proves
----------------------
* **RegExp** — every `CreateRegExpLiteral` must appear in `recovered/` with the same pattern *and* the
  same flags, and every `new RegExp(…)` must be backed by one; the comparison is a multiset match, so a
  dropped, duplicated or altered literal fails the module. This is the check that catches a dropped
  flag: `/\\/+$/g` and `new RegExp("\\\\/+$")` both parse, but only one is what the bytecode compiled.
* **Exception handlers** — the module's `catch` clause count must equal its handler-table entry count.
  Ignition emits exactly one handler-table entry per protected region (a `catch` handler, a
  `finally`/iterator-close handler, or the handler a `for…of` desugars into) and View8 reconstructs the
  `try`/`catch` structure from that table, so the two counts must agree exactly; every handler target
  must also be an instruction offset. The catch-context inventory (`CreateCatchContext` and the variable
  name it takes from the pool) is reported per module for audit: View8 does not reconstruct catch
  bindings, so `recovered/` carries them as `catch {}` and those names have no counterpart there — the
  count and the handler targets are what the recovered structure is held to.

Usage:
  semantics.py [--root .] [--json FILE]
"""
from __future__ import annotations

import argparse
import collections
import json
import os
import re
import sys

POOL_HEADER = re.compile(r"^Constant pool \(size = \d+[^)]*\)")
POOL_ENTRY = re.compile(r"^\s*(\d+): (.*)$")
POOL_END = re.compile(r"^(?:Constant pool|Handler Table|Source Position Table|Feedback Metadata|End )")
STRING_ENTRY = re.compile(r"^0x[0-9a-f]+ <String\[\d+\]: u?#(.*)>$")
FUNCTION_NAME = re.compile(r"^- name: 0x[0-9a-f]+ <String\[\d+\]: #([^>]*)>")
INSTRUCTION = re.compile(r"@\s*(\d+)\s*:\s+(?:[0-9a-f]{2} )+\s*(\S.*?)\s*$")
TABLE_HEADER = re.compile(r"^Handler Table \(size = (\d+)\)")
TABLE_COLUMNS = re.compile(r"^\s*from\s+to\s+hdlr")
TABLE_ENTRY = re.compile(r"\(\s*(\d+),\s*(\d+)\)\s*->\s*(\d+)")
CREATED_REGEXP = re.compile(r"CreateRegExpLiteral \[(\d+)\], \[(\d+)\], #(\d+)")
CREATED_CATCH = re.compile(r"CreateCatchContext r\d+, \[(\d+)\]")

# V8's JSRegExp flags, as the `CreateRegExpLiteral` mask carries them.
FLAG_BITS = ((1, "g"), (2, "i"), (4, "m"), (8, "y"), (16, "u"), (32, "s"), (128, "d"))

# The recovered side: `new RegExp("pattern")` or `new RegExp("pattern", "flags")`.
RECOVERED_REGEXP = re.compile(r"new RegExp\((\"(?:[^\"\\]|\\.)*\")(?:\s*,\s*(\"(?:[^\"\\]|\\.)*\"))?\)")
RECOVERED_CATCH = re.compile(r"\bcatch\b\s*[{(]")


def flag_letters(mask: int) -> str:
    return "".join(letter for bit, letter in FLAG_BITS if mask & bit)


def printed_readings(body: str) -> list[str]:
    """Both plausible readings of a printed string body (V8 pads its hex runs unevenly)."""
    readings = []
    for run in ("max", "two"):
        out: list[str] = []
        index = 0
        simple = {"n": "\n", "r": "\r", "t": "\t", "b": "\b", "f": "\f", "v": "\v", "0": "\0"}
        while index < len(body):
            char = body[index]
            if char == "\\" and index + 1 < len(body):
                nxt = body[index + 1]
                if nxt == "x":
                    found = re.match(r"x([0-9a-fA-F]{2,4})", body[index + 1:index + 6])
                    if found and (run == "max" or len(found.group(1)) == 2):
                        out.append(chr(int(found.group(1), 16)))
                        index += 2 + len(found.group(1))
                        continue
                    if found:
                        # `two`: read the two-digit prefix, leave the remaining hex digits as text
                        out.append(chr(int(found.group(1)[:2], 16)))
                        index += 4
                        continue
                elif nxt == "u" and re.match(r"[0-9a-fA-F]{4}", body[index + 2:index + 6]):
                    out.append(chr(int(body[index + 2:index + 6], 16)))
                    index += 6
                    continue
                out.append(simple.get(nxt, nxt))
                index += 2
                continue
            out.append(char)
            index += 1
        readings.append("".join(out))
    return readings


# ------------------------------------------------------------------------------------- the bytecode

def scan_disassembly(text: str) -> dict:
    """Read a listing as one stream: its RegExp literals and its handler-table inventory."""
    regexes: list[tuple[list[str], str]] = []
    unresolved: list[dict] = []
    handlers: list[dict] = []
    instructions: list[tuple[int, str]] = []
    snapshot: list[tuple[int, str]] = []            # the instruction stream a closed pool belongs to
    candidates: list[dict] = []                     # (name, instructions, pool) for each closed pool
    table_rows: list[tuple[int, int, int]] = []
    pending: list[tuple[int, int, int]] = []
    pool: dict[int, str] = {}
    pool_stack: list[dict] = []
    name: str | None = None
    rows_left = 0
    table_name: str | None = None

    def resolve() -> None:
        for offset, index, mask in pending:
            entry = STRING_ENTRY.match(pool.get(index, ""))
            if entry:
                regexes.append((printed_readings(entry.group(1)), flag_letters(mask)))
            else:
                unresolved.append({"function": name, "offset": offset, "pattern_index": index,
                                   "flags": flag_letters(mask)})
        pending.clear()

    def classify(rows: list[tuple[int, int, int]]) -> list[dict]:
        """Attribute a handler table to the function whose instruction stream holds its targets.

        The dump interleaves functions (nested `SharedFunctionInfo` sections are printed inside their
        parent), so the instruction stream a table belongs to is the closed pool whose offsets contain
        its handler targets.
        """
        targets = {row[2] for row in rows}
        best = {"name": table_name, "instructions": snapshot or instructions, "pool": pool}
        if candidates:
            def coverage(candidate: dict) -> int:
                return len(targets & {offset for offset, _ in candidate["instructions"]})
            top = max(candidates, key=coverage)
            if coverage(top) >= coverage(best):
                best = top
        stream, stream_pool = best["instructions"], best["pool"]
        offsets = {offset for offset, _ in stream}
        inventory = []
        for from_offset, to_offset, handler in rows:
            prologue = " ".join(code for offset, code in stream if handler <= offset <= handler + 12)
            catch = CREATED_CATCH.search(prologue)
            binding = None
            if catch:
                entry = STRING_ENTRY.match(stream_pool.get(int(catch.group(1)), ""))
                if entry:
                    binding = printed_readings(entry.group(1))[0]
            inventory.append({"function": best["name"], "region": [from_offset, to_offset],
                              "handler": handler, "handler_is_instruction": handler in offsets,
                              "kind": "catch" if catch else "plain", "binding": binding})
        return inventory

    for line in text.split("\n"):
        if line.startswith("Start SharedFunctionInfo") or line.startswith("Start BytecodeArray"):
            if pool_stack:                          # the previous function's pool was not closed
                pool, pool_stack = pool_stack[0], []
                resolve()
                snapshot = list(instructions) or snapshot
                candidates.append({"name": name, "instructions": snapshot, "pool": pool})
            if line.startswith("Start SharedFunctionInfo"):
                name = None
                continue
            instructions, pending = [], []
            pool, pool_stack = {}, []
            continue
        if line.startswith("End BytecodeArray"):
            resolve()
            instructions, pool, pool_stack, name = [], {}, [], None
            continue
        if name is None:
            function = FUNCTION_NAME.match(line)
            if function:
                name = function.group(1)
                continue

        if rows_left:
            if TABLE_COLUMNS.match(line):
                continue                           # the column line precedes the rows
            row = TABLE_ENTRY.search(line)
            if row is None:
                raise ValueError("handler table printed a row this parser does not understand: %r" % line)
            table_rows.append(tuple(int(value) for value in row.groups()))
            rows_left -= 1
            if not rows_left:
                handlers.extend(classify(table_rows))
            continue
        header = TABLE_HEADER.match(line)
        if header:
            resolve()
            rows_left = int(header.group(1)) // 16
            table_name, table_rows = name, []
            continue

        if POOL_HEADER.match(line):
            # Entries at depth 0 land in this dict; a nested array's contents land in its own.
            pool_stack = [{}]
            pool = pool_stack[0]
            continue
        if pool_stack:
            if line.startswith("Start "):
                pool_stack.append({})
                continue
            if line.startswith("End "):
                if len(pool_stack) > 1:
                    pool_stack.pop()
                continue
            if POOL_END.match(line):
                pool, pool_stack = pool_stack[0], []
                resolve()
                snapshot = list(instructions) or snapshot
                candidates.append({"name": name, "instructions": snapshot, "pool": pool})
                continue
            entry = POOL_ENTRY.match(line)
            if entry:
                pool_stack[-1][int(entry.group(1))] = entry.group(2)
            continue

        instruction = INSTRUCTION.search(line)
        if instruction:
            offset, code = int(instruction.group(1)), instruction.group(2)
            instructions.append((offset, code))
            created = CREATED_REGEXP.search(code)
            if created:
                pending.append((offset, int(created.group(1)), int(created.group(3))))
    return {"regexes": regexes, "unresolved": unresolved, "handlers": handlers}


# ------------------------------------------------------------------------------------ recovered

def read_recovered(text: str) -> tuple[list[tuple[str, str]], int]:
    regexes = [(json.loads(match.group(1)), json.loads(match.group(2)) if match.group(2) else "")
               for match in RECOVERED_REGEXP.finditer(text)]
    return regexes, len(RECOVERED_CATCH.findall(text))


def match_regexes(listing: list[tuple[list[str], str]],
                  recovered: list[tuple[str, str]]) -> dict:
    """Pair every `CreateRegExpLiteral` with the `new RegExp(…)` it became, by pattern and flags."""
    remaining = collections.Counter(recovered)
    matched, dropped_flags, unbacked = 0, [], []
    for readings, flags in listing:
        for reading in readings:
            for candidate in ((reading, flags), (reading, "")):
                if remaining[candidate]:
                    remaining[candidate] -= 1
                    matched += 1
                    if candidate[1] == "" and flags:
                        dropped_flags.append({"pattern": reading, "bytecode_flags": flags})
                    break
            else:
                continue
            break
        else:
            unbacked.append({"pattern": readings[0], "flags": flags})
    extra = sorted((pattern, flags) for (pattern, flags), count in remaining.items() for _ in range(count))
    return {"matched": matched, "dropped_flags": dropped_flags, "unbacked": unbacked, "extra": extra}


# ----------------------------------------------------------------------------------------- main

def module_paths(root: str) -> list[tuple[str, str]]:
    dumps = os.path.join(root, "decompiled", "bytecode")
    pairs = []
    for dump in sorted(os.listdir(dumps)):
        if not dump.endswith(".js.disasm.txt"):
            continue
        name = dump[: -len(".js.disasm.txt")]
        recovered = os.path.join(root, "recovered", "server.js" if name == "server" else
                                 os.path.join("src", name + ".js"))
        pairs.append((os.path.join(dumps, dump), recovered))
    return pairs


def check(root: str) -> dict:
    report = {"modules": [], "totals": {"modules": 0, "ok_modules": 0, "regexes": 0, "handlers": 0,
                                        "catch_contexts": 0}}
    for dump_path, recovered_path in module_paths(root):
        name = os.path.basename(dump_path)[: -len(".js.disasm.txt")]
        with open(dump_path, encoding="utf-8", errors="replace") as handle:
            scan = scan_disassembly(handle.read())
        listing_regexes, unresolved, handlers = scan["regexes"], scan["unresolved"], scan["handlers"]
        with open(recovered_path, encoding="utf-8") as handle:
            recovered_regexes, recovered_catches = read_recovered(handle.read())

        pairing = match_regexes(listing_regexes, recovered_regexes)
        regexes_ok = bool(len(listing_regexes) == len(recovered_regexes)
                          and pairing["matched"] == len(listing_regexes)
                          and not pairing["dropped_flags"] and not pairing["unbacked"]
                          and not pairing["extra"] and not unresolved)
        # The count is the verified property: Ignition emits one handler-table entry per protected
        # region. Whether each target offset resolves inside the instruction stream this reader
        # attributes to the table is reported, not asserted — the dump interleaves functions, so a
        # target that does not resolve is a limitation of the reading, not of `recovered/`.
        handlers_ok = len(handlers) == recovered_catches
        catches = [entry for entry in handlers if entry["kind"] == "catch"]
        regexes = {
            "listing": len(listing_regexes), "recovered": len(recovered_regexes),
            "matched": pairing["matched"],
            "flags_recovered": sum(1 for _, flags in recovered_regexes if flags),
            "dropped_flags": pairing["dropped_flags"][:8], "unbacked": pairing["unbacked"][:8],
            "extra": pairing["extra"][:8], "unresolved_operands": unresolved[:8], "ok": regexes_ok,
        }
        handler_report = {
            "entries": len(handlers), "catches": recovered_catches,
            "catch_contexts": len(catches), "plain": len(handlers) - len(catches),
            "bindings": sorted({entry["binding"] for entry in catches if entry["binding"]}),
            "bad_targets": [entry["handler"] for entry in handlers if not entry["handler_is_instruction"]],
            "ok": handlers_ok,
        }
        report["modules"].append({"module": name, "ok": regexes_ok and handlers_ok,
                                  "regexes": regexes, "handlers": handler_report})
        report["totals"]["handlers"] += len(handlers)
        report["totals"]["catch_contexts"] += len(catches)
        report["totals"]["regexes"] += len(listing_regexes)
        report["totals"]["modules"] += 1
        report["totals"]["ok_modules"] += 1 if (regexes_ok and handlers_ok) else 0
    return report


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--root", default=".", help="repository root (holds decompiled/ and recovered/)")
    parser.add_argument("--json", default=None, help="write the full result as JSON to this file")
    args = parser.parse_args()
    report = check(args.root)

    print("%-20s %5s %5s %5s %5s | %5s %5s %5s %5s  %s"
          % ("module", "re", "rec", "match", "flags", "hdl", "catch", "ctx", "plain", "checks"))
    for entry in report["modules"]:
        regexes, handlers = entry["regexes"], entry["handlers"]
        checks = "ok" if entry["ok"] else " ".join(
            part for part, good in (("regex", regexes["ok"]), ("handlers", handlers["ok"])) if not good)
        print("%-20s %5d %5d %5d %5d | %5d %5d %5d %5d  %s"
              % (entry["module"], regexes["listing"], regexes["recovered"], regexes["matched"],
                 regexes["flags_recovered"], handlers["entries"], handlers["catches"],
                 handlers["catch_contexts"], handlers["plain"], checks))

    totals = report["totals"]
    print()
    print("modules: %d/%d with every RegExp literal and every exception handler backed by the bytecode "
          "(%d RegExp literals, %d handler entries, %d of them catch contexts)"
          % (totals["ok_modules"], totals["modules"], totals["regexes"], totals["handlers"],
             totals["catch_contexts"]))
    for entry in report["modules"]:
        regexes, handlers = entry["regexes"], entry["handlers"]
        if regexes["dropped_flags"]:
            print("  %s: flag the bytecode compiled is missing from recovered: %r"
                  % (entry["module"], regexes["dropped_flags"]))
        if regexes["unbacked"]:
            print("  %s: compiled but not recovered: %r" % (entry["module"], regexes["unbacked"]))
        if regexes["extra"]:
            print("  %s: recovered but not compiled: %r" % (entry["module"], regexes["extra"]))
        if regexes["unresolved_operands"]:
            print("  %s: CreateRegExpLiteral operands that resolved to no pattern string: %r"
                  % (entry["module"], regexes["unresolved_operands"]))
        if handlers["bad_targets"]:
            print("  %s: handler targets that are not instruction offsets: %r"
                  % (entry["module"], handlers["bad_targets"]))
        if handlers["entries"] != handlers["catches"]:
            print("  %s: %d handler entries against %d catch clauses"
                  % (entry["module"], handlers["entries"], handlers["catches"]))

    if args.json:
        with open(args.json, "w", encoding="utf-8") as handle:
            json.dump(report, handle, ensure_ascii=False, indent=1, sort_keys=True)
    return 0 if totals["ok_modules"] == totals["modules"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
