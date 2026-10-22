#!/usr/bin/env python3
"""Verify the loop and switch structure of `recovered/` against the module bytecode itself.

`tools/decompile/emit_source.py` lowers View8's register listing into JavaScript, and
`normalize_listing.py` repairs the two structures View8 prints without their own braces: the loop
header it omits around a loop body emitted as a bare block, and the block a `switch` needs. A passing
`node --check` says nothing about whether those repairs match the code that was compiled, so this
script compares the recovered modules with the disassembler listings in `decompiled/bytecode/`, which
are the bytecode (Ignition) of the original caches:

  recovered JavaScript                  bytecode                                     compared as
  ------------------------------------  -------------------------------------------  ------------------
  `while (…)` statement                 `JumpLoop` / `JumpLoop.Wide` back edge       count, per-function
  nesting inside a function             containment of the loop's `[target, edge]`   depth multiset
  `switch (rN)` + `case (0):` labels    `SwitchOnSmiNoFeedback` jump table           case values ↔ keys
  clauses sharing one block             jump-table entries sharing a target          clause blocks
  `switch (void 0)` + `case rN === …`   chain of `TestEqualStrict` on one register   test count,
                                        that ends in an unconditional `Jump`         clause blocks
  `async function`                      `SwitchOnGeneratorState` resume dispatch     count

Because the recovered modules carry no function identity that the listing could be matched on, the
per-function checks compare multisets over the module (loops per function, arities, depths): a loop
moved into another function, dropped, duplicated or re-nested breaks the multiset even though the
module-wide count can stay the same. The comparison-chain detector requires the trailing unconditional
`Jump` — the path taken when no case matches — so that a short-circuit `||` / `&&` chain of strict
comparisons, which View8 renders as an `if`, is not counted as a switch.

Usage:
  structure.py [--root .] [--json FILE]
"""
from __future__ import annotations

import argparse
import collections
import json
import os
import re
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "decompile"))
from normalize_listing import code_only  # noqa: E402  (literal-aware scanning, shared with the emitter)

# ------------------------------------------------------------------------------- disassembler listing

INSTRUCTION = re.compile(r"@\s*(\d+) :\s+((?:[0-9a-f]{2} )+)\s*(\S.*?)\s*$")
TARGET_OFFSET = re.compile(r"\([0-9a-fA-F]+ @ (\d+)\)")
PARAMETER_COUNT = re.compile(r"^Parameter count (\d+)$", re.M)
JUMP_TABLE_ENTRY = re.compile(r"(\d+): @(\d+)")
JUMP_LOOP = ("JumpLoop", "JumpLoop.Wide")
TRUE_JUMP = re.compile(r"^(?:JumpIfTrue|JumpIfTrueConstant)$")
CONDITIONAL_JUMP = re.compile(r"^JumpIf\w*$")
CONTROL_FLOW = re.compile(r"^(?:Jump|Return|Throw|ReThrow|Switch)\w*$")
UNCONDITIONAL_JUMP = re.compile(r"^Jump$|^JumpConstant$|^JumpWide$")


def parse_sections(dump: str) -> list[dict]:
    """Every BytecodeArray in a listing: its parameter count and its instructions in order."""
    sections = []
    for body in re.split(r"^Start BytecodeArray$", dump, flags=re.M)[1:]:
        count = PARAMETER_COUNT.search(body)
        instructions = []
        for line in body.split("\n"):
            match = INSTRUCTION.search(line)
            if match:
                operands = match.group(3)
                instructions.append((int(match.group(1)), operands.split()[0], operands))
        sections.append({"parameters": int(count.group(1)) if count else None,
                         "instructions": instructions})
    return sections


def section_loops(section: dict) -> list[tuple[int, int, int]]:
    """(target, back edge, nesting depth) for every loop back edge in one function.

    A loop is a back edge: `JumpLoop` jumps to the position where the loop starts, so the loop spans
    `[target, instruction]`. Nesting is the containment of those spans — an inner loop's span lies
    inside its outer loop's, and two loops that follow each other do not overlap.
    """
    edges = []
    for offset, opcode, operands in section["instructions"]:
        if opcode in JUMP_LOOP:
            target = TARGET_OFFSET.search(operands)
            edges.append((int(target.group(1)), offset))
    return [(target, offset,
             sum(1 for index, (other_target, other_offset) in enumerate(edges)
                 if index != position and other_target <= target and offset <= other_offset
                 and (other_target, other_offset) != (target, offset)))
            for position, (target, offset) in enumerate(edges)]


def section_tables(section: dict) -> list[dict]:
    """Every `SwitchOnSmiNoFeedback` jump table: the case values it dispatches and their handlers."""
    tables = []
    for _, opcode, operands in section["instructions"]:
        if opcode == "SwitchOnSmiNoFeedback":
            tables.append({"keys": [int(key) for key, _ in JUMP_TABLE_ENTRY.findall(operands)],
                           "targets": [int(target) for _, target in JUMP_TABLE_ENTRY.findall(operands)]})
    return tables


def section_chains(section: dict) -> list[dict]:
    """Every strict-equality dispatch chain in one function.

    View8 reconstructs these as a `switch` whose discriminant it cannot name, because each case value
    is loaded (from a constant or through the obfuscated string array) and compared with
    `TestEqualStrict` on one register, each test dispatching to its own handler with a true-forward
    jump. The run ends with an unconditional jump: the path taken when no case matched.
    """
    instructions = section["instructions"]
    chains = []
    position = 0
    while position < len(instructions):
        _, opcode, operands = instructions[position]
        if opcode != "TestEqualStrict":
            position += 1
            continue
        register = operands.split()[1].rstrip(",")
        tests, handlers = 1, []
        cursor = position + 1
        while cursor < len(instructions):
            _, next_opcode, next_operands = instructions[cursor]
            if next_opcode == "TestEqualStrict":
                if next_operands.split()[1].rstrip(",") != register:
                    break
                tests += 1
                cursor += 1
                continue
            if TRUE_JUMP.match(next_opcode):
                handlers.append(int(TARGET_OFFSET.search(next_operands).group(1)))
                cursor += 1
                continue
            if CONDITIONAL_JUMP.match(next_opcode):
                break
            if CONTROL_FLOW.match(next_opcode):
                break
            cursor += 1
        terminated = (cursor < len(instructions) and tests > 1
                      and UNCONDITIONAL_JUMP.match(instructions[cursor][1])
                      and len(handlers) == tests)
        if terminated:
            blocks = []
            for handler in handlers:
                if blocks and blocks[-1][0] == handler:
                    blocks[-1][1] += 1
                else:
                    blocks.append([handler, 1])
            chains.append({"register": register, "tests": tests, "handlers": handlers,
                           "blocks": [count for _, count in blocks]})
            position = cursor
        else:
            position = cursor if tests > 1 else position + 1
    return chains


def has_generator_dispatch(section: dict) -> bool:
    return any(opcode == "SwitchOnGeneratorState" for _, opcode, _ in section["instructions"])


# ---------------------------------------------------------------------------------------- recovered

FUNCTION_HEADER = re.compile(r"^(async )?function ([^\s(]+)\(([^)]*)\)$")
LOOP_HEADER = re.compile(r"^(?:while|for)\s*\(")
SWITCH_HEADER = re.compile(r"^switch\s*\((.*)\)$")
CASE_LABEL = re.compile(r"^case (.*):$")
DEFAULT_LABEL = "default:"
NUMERIC_LABEL = re.compile(r"^\((-?\d+)\)$")


def recovered_functions(text: str) -> list[dict]:
    """The module's functions, each with its parameter list and body lines (braces included)."""
    lines = text.split("\n")
    functions, index = [], 0
    while index < len(lines):
        header = FUNCTION_HEADER.fullmatch(lines[index])
        if not header:
            index += 1                     # file header, context-slot declarations, wrapper call
            continue
        opening = index + 1
        while opening < len(lines) and not lines[opening].strip():
            opening += 1
        if opening >= len(lines) or lines[opening] != "{":
            raise ValueError("function %s: expected an opening brace" % header.group(2))
        depth, cursor = 0, opening
        while cursor < len(lines):
            depth += code_only(lines[cursor]).count("{") - code_only(lines[cursor]).count("}")
            if depth <= 0:
                break
            cursor += 1
        if depth != 0:
            raise ValueError("function %s: unbalanced body" % header.group(2))
        functions.append({"name": header.group(2),
                          "async": bool(header.group(1)),
                          "parameters": [p.strip() for p in header.group(3).split(",") if p.strip()],
                          "body": lines[opening:cursor + 1]})
        index = cursor + 1
    return functions


def recovered_constructs(body: list[str]) -> tuple[list[int], list[dict]]:
    """The loop nesting depths and the switches of one function body.

    A loop's depth is the number of loops it is nested in, counted inside the function, which is how
    the bytecode's spans nest inside one BytecodeArray. A switch's clauses are the labels directly
    inside its block; consecutive labels share one block.
    """
    loops: list[int] = []
    switches: list[dict] = []
    frames: list[str] = []                                        # open blocks, outermost first
    pending = None                                                # header waiting for its brace
    for line in body:
        token = code_only(line).strip()
        if not token:
            continue
        if frames and frames[-1] == "switch" and (CASE_LABEL.fullmatch(token) or token == DEFAULT_LABEL):
            if token == DEFAULT_LABEL:
                switches[-1]["defaults"] += 1
            else:
                # the label is read from the line itself: masked text hides the literals it compares
                switches[-1]["labels"].append(CASE_LABEL.fullmatch(line.strip()).group(1).strip())
            continue
        loop_header = LOOP_HEADER.match(token)
        switch_header = SWITCH_HEADER.match(token)
        if loop_header:
            loops.append(sum(1 for kind in frames if kind == "loop"))
            kind = "loop"
        elif switch_header:
            switches.append({"discriminant": switch_header.group(1).strip(), "labels": [], "defaults": 0})
            kind = "switch"
        else:
            kind = pending or "other"
        # View8 prints a block's braces on their own lines, so only a line that is, starts with or ends
        # with a brace delimiter changes the block stack; braces inside a line (`catch {}`, an object
        # literal) are balanced and change nothing.
        if token == "}":
            if not frames:
                raise ValueError("unmatched closing brace: %r" % line)
            frames.pop()
            pending = None
        elif token.startswith("}"):
            if not frames:
                raise ValueError("unmatched closing brace: %r" % line)
            frames.pop()
            if token.endswith("{"):
                frames.append("other")
            pending = None
        elif token.endswith("{") or token == "{":
            frames.append(kind if loop_header or switch_header else pending or "other")
            pending = None
        else:
            pending = kind if loop_header or switch_header else None
    if frames:
        raise ValueError("unclosed block in function body")

    for switch in switches:
        # Consecutive `case` labels share one block; the clauses of one switch are the labels directly
        # inside its own block, in the order View8 printed them. A `default` clause is its own block
        # and is not a case handler, so it is counted separately.
        switch["blocks"] = []
        previous_label = False
        for line in body:
            token = code_only(line).strip()
            if not token:
                continue
            if CASE_LABEL.fullmatch(token):
                if previous_label:
                    switch["blocks"][-1] += 1
                else:
                    switch["blocks"].append(1)
                previous_label = True
            else:
                previous_label = False
        switch["kind"] = ("table" if switch["labels"]
                          and all(NUMERIC_LABEL.fullmatch(label) for label in switch["labels"])
                          else "chain")
    return loops, switches


# ------------------------------------------------------------------------------------- verification

def multiset(values) -> collections.Counter:
    return collections.Counter(values)


def verify_module(root: str, relative: str) -> dict:
    name = os.path.basename(relative)
    sections = parse_sections(open(os.path.join(root, "decompiled", "bytecode", name + ".disasm.txt"),
                                   encoding="utf-8", errors="replace").read())
    functions = recovered_functions(open(os.path.join(root, "recovered", relative), encoding="utf-8").read())

    bytecode_loops = [loops for loops in (section_loops(section) for section in sections)]
    bytecode_tables = [table for section in sections for table in section_tables(section)]
    bytecode_chains = [chain for section in sections for chain in section_chains(section)]
    generators = sum(1 for section in sections if has_generator_dispatch(section))

    loops, switches = [], []
    for function in functions:
        function_loops, function_switches = recovered_constructs(function["body"])
        loops.append(function_loops)
        switches.extend(function_switches)

    recovered_tables = [switch for switch in switches if switch["kind"] == "table"]
    recovered_chains = [switch for switch in switches if switch["kind"] == "chain"]

    failures = []
    checks = {}

    def compare(label, found, expected, format_value=str):
        checks[label] = {"recovered": format_value(found), "bytecode": format_value(expected)}
        if multiset(found) != multiset(expected):
            failures.append("%s: recovered %s vs bytecode %s" % (label, format_value(found),
                                                                format_value(expected)))

    compare("functions", [len(function["parameters"]) + 1 for function in functions],
            [section["parameters"] for section in sections])
    compare("loops", [len(loops_of) for loops_of in loops],
            [len(loops_of) for loops_of in bytecode_loops])
    compare("loop depth", [depth for loops_of in loops for depth in loops_of],
            [depth for loops_of in bytecode_loops for _, _, depth in loops_of])
    compare("jump tables", sorted([tuple(sorted(int(NUMERIC_LABEL.fullmatch(label).group(1))
                                                for label in switch["labels"]))
                                   for switch in recovered_tables]),
            sorted([tuple(sorted(table["keys"])) for table in bytecode_tables]))
    compare("comparison chains", sorted([len(switch["labels"]) for switch in recovered_chains]),
            sorted([chain["tests"] for chain in bytecode_chains]))
    compare("chain clause blocks", sorted([tuple(switch["blocks"]) for switch in recovered_chains]),
            sorted([tuple(chain["blocks"]) for chain in bytecode_chains]))
    compare("async functions", [sum(1 for function in functions if function["async"])], [generators])

    return {"module": relative, "functions": len(functions), "sections": len(sections),
            "loops": sum(len(loops_of) for loops_of in loops),
            "jump_tables": len(recovered_tables), "chains": len(recovered_chains),
            "generators": generators, "checks": checks, "failures": failures}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--root", default=".", help="repository root (holds decompiled/ and recovered/)")
    parser.add_argument("--json", default=None, help="write the full result as JSON to this file")
    args = parser.parse_args()

    modules = ["server.js"] + ["src/" + name for name in sorted(os.listdir(os.path.join(args.root, "src")))]
    results = [verify_module(args.root, relative) for relative in modules]

    print("%-20s %-10s %-12s %-11s %-11s %-8s %s" % (
        "module", "functions", "loops", "jump tables", "chains", "async", "checks"))
    for result in results:
        failed = {failure.split(":")[0] for failure in result["failures"]}
        labels = ("functions", "loops", "loop depth", "jump tables", "comparison chains",
                  "chain clause blocks", "async functions")
        print("%-20s %-10s %-12s %-11s %-11s %-8s %s" % (
            result["module"],
            "%d/%d" % (result["functions"], result["sections"]),
            result["loops"], result["jump_tables"], result["chains"], result["generators"],
            "ok" if not failed else "failed: " + ", ".join(label for label in labels if label in failed)))

    broken = [result for result in results if result["failures"]]
    print("\nmodules whose every loop and switch construct is backed by the bytecode: %d/%d"
          % (len(results) - len(broken), len(results)))
    for result in broken:
        for failure in result["failures"]:
            print("  %s  %s" % (result["module"], failure))
    if args.json:
        with open(args.json, "w", encoding="utf-8") as handle:
            json.dump(results, handle, ensure_ascii=False, indent=1, sort_keys=True)
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main())
