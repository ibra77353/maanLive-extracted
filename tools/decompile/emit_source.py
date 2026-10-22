#!/usr/bin/env python3
"""Lower the View8 register listing (`decompiled/`) into candidate JavaScript (`recovered/`).

`decompiled/*.js` is a register-level listing: three-address statements over `rN`/`ACCU` registers,
V8 context slots (`Scope[n][m]`) and View8's own notations for literals and operators. This script
lowers that representation into JavaScript in the application's original file layout. Syntax checks
and independent behavioural checks are still required; lowering alone does not prove equivalence:

  register-level listing                  recovered JavaScript
  -------------------------------------   -------------------------------------------------------
  `r5 = Scope[1][3]("./src/store")`       `r5 = s1_3("./src/store")`  (a file-level slot variable)
  `ACCU = r7(r9)`                         `accu = r7(r9)`
  `a1("crypto")` in the module wrapper     `require("crypto")`
  `a2[r4] = r5` with `r4 = "exports"`      `module[r4] = r5` (the wrapper's module parameter)
  `(-parseInt(r5)) \\ 1`                   `(-parseInt(r5)) / 1`  (View8 prints the `DivSmi` opcode as `\\`)
  `new {"login": null}`                   `{"login": null}`
  a backslash-delimited RegExp source    `new RegExp("...")` (a verified source string)
  `<closure>` / `<this>`                  `__closure` / `this`
  a function body containing `await`      `async function`

Registers become declared locals, context slots file-level variables shared by the module's functions,
the module wrapper becomes a real CommonJS module body, and every function keeps its recovered name
(`func_parseM3U_0x10000001b`) so the output can be read against the listing side by side.

**Literals are verified against the code cache.** View8 prints values through its own escaping
(non-ASCII characters as `\\xHHH(H)`, a RegExp source with an extra layer of backslash doubling). This
script decodes each literal under every plausible reading and keeps the one that occurs verbatim in the
module's string table (`[u32 length][characters]`), so a decoding mistake cannot pass unnoticed; the
`--json` summary counts verified and unverified literals per module.

Usage:
  emit_source.py --ir decompiled/src/auth.js --binary src/auth.js --out recovered/src/auth.js [--json FILE]
"""
from __future__ import annotations

import argparse
import json
import os
import re
import struct
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import resolve_strings  # noqa: E402  (the string-array decoder, used to verify recovered literals)
from normalize_listing import code_only, mask_literals, normalize_body, restore_literals  # noqa: E402

REGISTER = re.compile(r"\br\d+\b")
SCOPE_SLOT = re.compile(r"Scope\[(\d+)\]\[(\d+)\]")
SCOPE_PUSH = re.compile(r"Scope\[(\d+)\](?!\[)")
MODULE_EXPORT = re.compile(r"^\s*a2(\[|\.)")
COMMONJS_NAMES = ["exports", "require", "module", "__filename", "__dirname"]

HEADER = """\
// Recovered module: %s
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (%d source
// characters; Node 18.5.0 / V8 10.2.154.4-node.8) by tools/decompile/emit_source.py, after
// tools/decompile/resolve_strings.py restored the obfuscated string array. This is a syntactic
// reconstruction of View8's listing, not a proof of equivalence to the binary. Context lifetimes and
// exception semantics still need verification; see tools/decompile/README.md and DECOMPILATION.md.
//
// How to read it:
//   rN        a bytecode register (a local of the enclosing function)
//   accu      the V8 accumulator register
//   s<n>_<m>  the context slot Scope[n][m] (file-level, shared by this module's functions)
//   ctxN      a context pushed from Scope[n]
//   a0..aN    function parameters; in __module__ they are the CommonJS exports, require, module,
//             __filename and __dirname
//   RegExp    a recovered source string (flags are not recovered by this emitter)
"""


# ---------------------------------------------------------------------------------------- literals

def decode_literal(body: str, hex_run: str, halve_backslashes: bool) -> str:
    """Decode a JS-style literal body as View8 printed it.

    `hex_run` is "max" for View8's unpadded `\\xHHH(H)` escapes (it prints U+0623 as `\\x623`) and "two"
    for standard `\\xHH` escapes. `halve_backslashes` first collapses each backslash run to half its
    length, which is what a RegExp source needs: View8 escapes its backslashes one extra time.
    """
    if halve_backslashes:
        body = re.sub(r"\\+", lambda m: "\\" * ((len(m.group(0)) + 1) // 2), body)
    out: list[str] = []
    i = 0
    size = len(body)
    simple = {"n": "\n", "r": "\r", "t": "\t", "b": "\b", "f": "\f", "v": "\v", "0": "\0"}
    while i < size:
        char = body[i]
        if char != "\\" or i + 1 >= size:
            out.append(char)
            i += 1
            continue
        nxt = body[i + 1]
        if nxt == "x":
            run = re.match(r"x([0-9a-fA-F]{2,4})", body[i + 1:i + 6])
            if run and (hex_run == "max" or len(run.group(1)) == 2):
                out.append(chr(int(run.group(1), 16)))
                i += 2 + len(run.group(1))
                continue
        elif nxt == "u":
            if body[i + 2:i + 3] == "{":
                end = body.find("}", i + 2)
                if end > 0:
                    out.append(chr(int(body[i + 3:end], 16)))
                    i = end + 1
                    continue
            elif re.match(r"[0-9a-fA-F]{4}", body[i + 2:i + 6]):
                out.append(chr(int(body[i + 2:i + 6], 16)))
                i += 6
                continue
        out.append(simple.get(nxt, nxt))
        i += 2
    return "".join(out)


def value_in_binary(raw: bytes, value: str) -> str | None:
    """The encoding in which the code cache stores `value` verbatim ("one-byte"/"two-byte"), else None.

    The cache stores every string as `[u32 length][characters]` — one byte per character when the value
    is latin1, two otherwise — so the length prefix plus the exact bytes identify it.
    """
    for encoding, label in (("latin-1", "one-byte"), ("utf-16-le", "two-byte")):
        if not value:
            continue
        try:
            data = value.encode(encoding)
        except UnicodeEncodeError:
            continue
        units = len(value) if encoding == "latin-1" else len(data) // 2
        if struct.pack("<I", units) + data in raw:
            return label
    return None


def make_verifier(binary: bytes, listing: str):
    """Build the check that decides where a recovered literal can be verified.

    A literal is genuine if it occurs verbatim in the code cache's string table (`[u32 length][chars]`,
    which covers everything the obfuscator left in the source) or, for the values the obfuscator moved
    into its base64 string array, if it decodes from that array — the array `resolve_strings.py` resolved
    the call sites against.
    """
    from_array: set[str] = set()
    for _, entries, truncated in resolve_strings.find_string_arrays(listing):
        for index, length in sorted(truncated.items()):
            found = resolve_strings.recover_truncated(binary, length)
            if found is not None:
                entries[index] = found[0]
        for entry in entries:
            decoded = resolve_strings.decode_entry(entry)
            if decoded:
                from_array.add(decoded)

    # Strings V8 has internalized (property names such as "length") have no inline character data in
    # the cache, but the disassembler prints them in full in its constant-pool dump.
    internalized = {match.group(2) for match in re.finditer(r"<String\[(\d+)\]: #(.*?)>$", listing, re.M)
                    if len(match.group(2)) == int(match.group(1))}

    def check(value: str) -> str | None:
        if value == "":
            return "empty"
        if value_in_binary(binary, value):
            return "code-cache"
        if value in from_array:
            return "obfuscated-array"
        return "internalized-string" if value in internalized else None

    return check


def decode_string(raw: str, verify) -> tuple[str, str]:
    """Decode one `"..."` literal; prefer the reading that can be verified against the module."""
    body = raw[1:-1]
    candidates = [("hex-runs-max", decode_literal(body, "max", False)),
                  ("hex-runs-two", decode_literal(body, "two", False))]
    for label, value in candidates:
        if verify(value):
            return value, label
    return candidates[0][1], "unverified"


def decode_regex(body: str, verify) -> tuple[str, str]:
    """Decode a RegExp source printed as `\\source\\`."""
    candidates = [("halved-hex-runs-max", decode_literal(body, "max", True)),
                  ("halved-hex-runs-two", decode_literal(body, "two", True)),
                  ("verbatim", body)]
    for label, value in candidates:
        if verify(value):
            return value, label
    return candidates[0][1], "unverified"


def quote(value: str) -> str:
    """A JS string literal for `value` (JSON's escapes are valid JavaScript's)."""
    return json.dumps(value, ensure_ascii=False)


# ------------------------------------------------------------------------------------ line lowering

def protect(line: str, verify, stats: dict) -> str:
    """Lower code without ever interpreting RegExp quotes as string delimiters."""
    masked, literals = mask_literals(line)
    decoded: list[tuple[str, str]] = []
    for kind, raw in literals:
        if kind == "regex":
            value, how = decode_regex(raw[1:-1], verify)
            counter, readings = "regexes", "regex_readings"
            # A JSON-escaped *string* is not a RegExp-literal body. Use a constructor so quotes,
            # slashes, newlines, and backslashes survive exactly one JavaScript decoding step.
            rendered = "new RegExp(%s)" % quote(value)
        else:
            value, how = decode_string(raw, verify)
            counter, readings = "strings", "string_readings"
            rendered = quote(value)
        stats[counter] += 1
        stats[readings][how] = stats[readings].get(how, 0) + 1
        if how == "unverified":
            stats["unverified"].append(value[:80])
        decoded.append((kind, rendered))

    masked = masked.replace(" \\ ", " / ")                      # integer division
    masked = masked.replace("new {", "{").replace("new [", "[")  # literal constructors
    masked = masked.replace("switch ()", "switch (void 0)")
    masked = SCOPE_SLOT.sub(lambda m: "s%s_%s" % m.groups(), masked)
    masked = SCOPE_PUSH.sub(lambda m: "ctx%s" % m.group(1), masked)
    masked = re.sub(r"\bACCU\b", "accu", masked)
    masked = masked.replace("<closure>", "__closure").replace("<this>", "this")
    return restore_literals(masked, decoded)


# -------------------------------------------------------------------------------------- module file

def split_functions(lines: list[str]) -> list[dict]:
    """Split top-level functions, ignoring braces and quotes inside either kind of literal."""
    funcs: list[dict] = []
    current: dict | None = None
    depth = 0
    opened = False
    for line in lines:
        if current is None:
            match = re.fullmatch(r"function (func_\S+?)\(([^)]*)\)\s*", line)
            if match:
                current = {"name": match.group(1),
                           "params": [p.strip() for p in match.group(2).split(",") if p.strip()],
                           "body": []}
                depth, opened = 0, False
            elif line.strip():
                raise ValueError("unexpected content outside a function: %r" % line)
            continue
        if not opened:
            if not line.strip():
                continue
            if line != "{":
                raise ValueError("expected function opening brace: %r" % line)
            opened = True
            continue
        current["body"].append(line)
        masked = code_only(line)
        if masked.strip() == "}" and depth == 0:
            funcs.append(current)
            current = None
            continue
        depth += masked.count("{") - masked.count("}")
        if depth < 0:
            raise ValueError("unbalanced function block: %r" % line)
    if current is not None:
        raise ValueError("unclosed function: %s" % current["name"])
    return funcs


def find_module_wrapper(funcs: list[dict]) -> tuple[dict, dict | None]:
    """Prefer the wrapper returned by the code cache's outer script, including entry-only modules.

    server.js has no module.exports assignment. An exports-only heuristic cannot identify it.
    Require the five CommonJS parameters and an exact assignment/return register pair; never
    guess from the presence of a2 inside an unrelated function.
    """
    by_name = {func["name"]: func for func in funcs}
    candidates: list[tuple[dict, dict | None]] = []
    commonjs_params = ["a%d" % index for index in range(len(COMMONJS_NAMES))]
    for func in funcs:
        body = [code_only(line).strip() for line in func["body"][:-1] if line.strip()]
        if func["params"] or len(body) != 2:
            continue
        assignment = re.fullmatch(r"(r\d+) = (func_\S+)", body[0])
        if not assignment or body[1] != "return " + assignment.group(1):
            continue
        target = by_name.get(assignment.group(2))
        if target is not None and target["params"] == commonjs_params:
            candidates.append((target, func))
    if not candidates:
        candidates = [(func, None) for func in funcs if func["params"] == commonjs_params
                      and any(MODULE_EXPORT.match(code_only(line)) for line in func["body"])]
    if len(candidates) != 1:
        raise ValueError("expected one CommonJS module wrapper, found %d" % len(candidates))
    return candidates[0]


def declares_registers(body: list[str]) -> list[str]:
    code = "\n".join(code_only(line) for line in body)
    names = sorted(set(REGISTER.findall(code)), key=lambda name: int(name[1:]))
    if re.search(r"\baccu\b", code):
        names.append("accu")
    return names


def default_listing(ir_path: str) -> str:
    """The committed disassembler dump that belongs to a listing under `decompiled/`."""
    parts = ir_path.split("/")
    index = parts.index("decompiled") if "decompiled" in parts else len(parts) - 2
    name = parts[-1]
    return "/".join(parts[:index] + ["decompiled", "bytecode", name + ".disasm.txt"])


def emit(ir_path: str, binary_path: str, out_path: str, listing_path: str | None = None) -> dict:
    listing = open(ir_path, encoding="utf-8").read()
    disassembly = open(listing_path or default_listing(ir_path), encoding="utf-8", errors="replace").read()
    binary = open(binary_path, "rb").read()
    stats: dict = {"strings": 0, "regexes": 0, "string_readings": {}, "regex_readings": {},
                   "unverified": [], "functions": 0, "registers": 0, "lines": 0}

    lines = listing.split("\n")
    while lines and (lines[0].startswith("//") or not lines[0].strip()):
        lines.pop(0)

    verify = make_verifier(binary, disassembly)
    funcs = split_functions(lines)
    module_func, outer = find_module_wrapper(funcs)

    # Context slots and pushes are file-level variables: they are the module's shared V8 contexts.
    slots: set[tuple[str, str]] = set()
    contexts: set[str] = set()
    for func in funcs:
        every = "\n".join(code_only(line) for line in func["body"])
        slots |= set(SCOPE_SLOT.findall(every))
        contexts |= set(SCOPE_PUSH.findall(every))

    lowered: list[dict] = []
    for func in funcs:
        body = func["body"][:-1] if func["body"] else []          # drop the closing `}`
        body = normalize_body([protect(line, verify, stats) for line in body])
        entry = {"name": func["name"], "params": func["params"], "outer": func is outer,
                 "async": bool(re.search(r"\bawait\b", "\n".join(code_only(line) for line in body))),
                 "module": func is module_func, "body": body}
        if entry["module"]:
            if entry["async"]:
                raise ValueError("unexpected await in synchronous CommonJS module wrapper")
            # Rename code tokens only. A literal containing "a1" is data, not a require reference.
            renamed: list[str] = []
            for line in entry["body"]:
                masked, literals = mask_literals(line)
                for index, name in enumerate(COMMONJS_NAMES):
                    masked = re.sub(r"\ba%d\b" % index, name, masked)
                renamed.append(restore_literals(masked, literals))
            entry["body"] = renamed
        lowered.append(entry)

    out: list[str] = []
    out.append(HEADER % (ir_path.split("decompiled/", 1)[-1], struct.unpack_from("<I", binary, 8)[0]))
    out.append("// ----------------------------------------------------------------------------------------")
    out.append("// Context slots shared by this module's functions (V8's Scope[n][m]).")
    for number in sorted({n for n, _ in slots}, key=int):
        members = sorted((m for n, m in slots if n == number), key=int)
        out.append("let %s;" % ", ".join("s%s_%s" % (number, m) for m in members))
    if contexts:
        out.append("let %s;" % ", ".join("ctx%s" % c for c in sorted(contexts, key=int)))
    if "<closure>" in listing:
        out.append("let __closure;  // View8's <closure>: only ever pushed, never read")
    out.append("")

    for entry in lowered:
        if entry["module"]:
            continue
        if entry["outer"] is True:
            out.append("// The code cache's outer script function only returned the module wrapper below.")
            out.append("")
            continue
        registers = declares_registers(entry["body"])
        out.append("%sfunction %s(%s)" % ("async " if entry["async"] else "", entry["name"],
                                         ", ".join(entry["params"])))
        out.append("{")
        if registers:
            out.append("\tlet %s;" % ", ".join(registers))
        out.extend(entry["body"])
        out.append("}")
        out.append("")
        stats["functions"] += 1
        stats["registers"] += len(registers)

    module_body = [line for entry in lowered if entry["module"] for line in entry["body"]]
    registers = declares_registers(module_body)
    out.append("// The CommonJS module wrapper the code cache was compiled for: Node calls it with")
    out.append("// (exports, require, module, __filename, __dirname).")
    out.append("function __module__(%s)" % ", ".join(COMMONJS_NAMES))
    out.append("{")
    if registers:
        out.append("\tlet %s;" % ", ".join(registers))
    out.extend(module_body)
    out.append("}")
    out.append("")
    out.append("__module__(exports, require, module, __filename, __dirname);")
    out.append("")
    stats["functions"] += 1
    stats["registers"] += len(registers)
    stats["lines"] = len(out)

    with open(out_path, "w", encoding="utf-8") as handle:
        handle.write("\n".join(out))
    return stats


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--ir", required=True, help="the resolved register listing (decompiled/…)")
    parser.add_argument("--binary", required=True, help="the original code cache (the module itself)")
    parser.add_argument("--out", required=True, help="output JavaScript file")
    parser.add_argument("--listing", default=None,
                        help="the disassembler dump (*.disasm.txt) used to verify literals "
                             "(default: the one committed under decompiled/bytecode/)")
    parser.add_argument("--json", default=None, help="write the summary as JSON to this file")
    args = parser.parse_args()
    summary = emit(args.ir, args.binary, args.out, args.listing)
    print(json.dumps(summary, ensure_ascii=False), file=sys.stderr)
    if args.json:
        with open(args.json, "w", encoding="utf-8") as handle:
            json.dump(summary, handle, ensure_ascii=False, indent=1, sort_keys=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
