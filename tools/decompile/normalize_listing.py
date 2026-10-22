#!/usr/bin/env python3
"""Small, literal-aware structural repairs for View8's register listing.

These repairs make the listing expressible in JavaScript; they do not prove that View8 recovered
all of the bytecode's semantics. In particular, no missing RegExp flags or context lifetimes are
inferred here. Unexpected layouts fail rather than dropping statements or inventing conditions.
"""
from __future__ import annotations

import re


_LITERAL = re.compile("\x00(\\d+)\x00")
_ASSIGNMENT = re.compile(r"^(?:r\d+|a\d+|accu|s\d+_\d+|ctx\d+)(?:\[[^\n]+\]|\.[\w$]+)* = .+$")
# A switch statement and its clauses, as View8 prints them: the header on its own line, then
# `default:` / `case ...:` labels at the same indentation, each followed by its own block.
_SWITCH_HEADER = re.compile(r"^(\s*)switch \((.*)\)\s*$")
_SWITCH_CLAUSE = re.compile(r"^(?:case .*|default):\s*$")
# The statements a switch can keep after its last clause: registers, jumps, and nothing structured.
_SIMPLE_STATEMENT = re.compile(
    r"^(?:r\d+|a\d+|accu|s\d+_\d+|ctx\d+)(?:\[[^\n]*\]|\.[\w$]+)* = .+$"
    r"|^(?:break|continue|return)\b.*$")
_LOOP_JUMPS = ("break", "continue")
# The statements whose own block follows them; a block after any of these is not a bare block.
_BLOCK_OWNER = re.compile(
    r"^(?:if \(.*\)|else|\}\s*else|try|catch(?: \(.*\))?|finally|do|while \(.*\)|for \(.*\)"
    r"|switch \(.*\)|function \S*\(.*\)|case .*:|default:|\{)\s*$")


def mask_literals(line: str) -> tuple[str, list[tuple[str, str]]]:
    """Mask strings AND View8 RegExps in lexical order (a RegExp may itself contain quotes).

    View8 prints a RegExp as a backslash-delimited source at the end of a line. Its division
    operator, in contrast, is a single backslash surrounded by spaces after an operand.
    """
    literals: list[tuple[str, str]] = []
    out: list[str] = []
    i = 0
    while i < len(line):
        char = line[i]
        if char == '"':
            end = i + 1
            while end < len(line):
                if line[end] == "\\":
                    end += 2
                elif line[end] == '"':
                    break
                else:
                    end += 1
            if end >= len(line):
                raise ValueError("unterminated string literal: %r" % line)
            kind = "string"
        elif char == "\\":
            prefix = line[:i].rstrip()
            expression_start = (not prefix or prefix.endswith(("=", "(", ",", "||", "&&"))
                                or prefix == "return")
            division = (not expression_start and line[i - 1:i] == " "
                        and line[i + 1:i + 2] == " ")
            if division:
                out.append(char)
                i += 1
                continue
            end = len(line.rstrip()) - 1
            if end <= i or line[end] != "\\":
                raise ValueError("unexpected RegExp literal layout: %r" % line)
            kind = "regex"
        else:
            out.append(char)
            i += 1
            continue
        literals.append((kind, line[i:end + 1]))
        out.append("\x00%d\x00" % (len(literals) - 1))
        i = end + 1
    return "".join(out), literals


def restore_literals(masked: str, literals: list[tuple[str, str]]) -> str:
    return _LITERAL.sub(lambda match: literals[int(match.group(1))][1], masked)


def code_only(line: str) -> str:
    return mask_literals(line)[0]


def join_conditions(lines: list[str]) -> list[str]:
    """Fold an extended if header, keeping register loads on their short-circuit branch.

    `if (a0) / r1 = a0["key"] / && (r1)` becomes `if ((a0) && (r1 = a0["key"], (r1)))`.
    Moving those loads before the if would dereference a0 even when it is null.
    """
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        header = re.fullmatch(r"(\s*)if \((.*)\)\s*", line)
        if not header:
            out.append(line)
            i += 1
            continue
        condition = "(%s)" % header.group(2)
        pending: list[str] = []
        continuations = 0
        j = i + 1
        while j < len(lines):
            part = lines[j].strip()
            logical = re.fullmatch(r"(&&|\|\|)\s*(\(.+\))", part)
            if logical:
                operand = ", ".join(pending + [logical.group(2)])
                condition = "(%s %s (%s))" % (condition, logical.group(1), operand)
                pending = []
                continuations += 1
            elif _ASSIGNMENT.fullmatch(code_only(part)):
                pending.append(part)
            else:
                break
            j += 1
        if continuations:
            if pending or j >= len(lines) or lines[j].strip() != "{":
                raise ValueError("unsupported extended condition after: %r" % line)
            out.append("%sif (%s)" % (header.group(1), condition))
            i = j
        else:
            out.append(line)
            i += 1
    return out


def repair_catches(lines: list[str]) -> list[str]:
    """Move iterator-close catches outside their try and restore an omitted block try.

    View8 sometimes emits `try { if (...) { ... } catch {} }` with the try's closing brace
    *after* the catch. Only move that brace when the block stack and the following line agree.
    Another emitted form is `accu = ctxN / { ... } / catch { ... }`, missing the word try.
    Empty catches and flattened handler statements otherwise stay as listed: their exact
    exception semantics need bytecode-level reconstruction, not a syntax-only guess.
    """
    repaired = list(lines)
    # Each stack item stores the opening line index, kind, and indentation. Literal/object braces
    # are not block delimiters: the listing emits real block delimiters on their own lines.
    stack: list[tuple[int, str, str]] = []
    last_closed: tuple[int, str, str] | None = None
    previous = ""
    i = 0
    while i < len(repaired):
        line = repaired[i]
        token = code_only(line).strip()
        indent = line[:len(line) - len(line.lstrip())]
        if token in ("catch", "catch {}"):
            if previous != "}" or last_closed is None or last_closed[1] != "try":
                if previous == "}" and last_closed and last_closed[1] == "block":
                    opening = last_closed[0]
                    before = code_only(repaired[opening - 1]).strip() if opening else ""
                    if re.fullmatch(r"accu = ctx\d+", before):
                        repaired.insert(opening, last_closed[2] + "try")
                        # Validate again after insertion; this also works inside an enclosing try.
                        return repair_catches(repaired)
                if stack and stack[-1][1] == "try":
                    # The catch is still inside its try. Its original closing brace must follow.
                    try_indent = stack[-1][2]
                    if (i + 1 >= len(repaired) or token != "catch {}"
                            or not re.fullmatch(re.escape(try_indent) + r"}\s*", repaired[i + 1])):
                        raise ValueError("unsupported catch inside try: %r" % line)
                    repaired[i:i + 2] = [try_indent + "}", try_indent + "catch {}"]
                    continue  # process the relocated closing brace, then the catch
                raise ValueError("catch without try: %r" % line)
        if token == "{":
            kind = "try" if previous == "try" else "block"
            stack.append((i, kind, indent))
            last_closed = None
        elif token == "}":
            if not stack:
                raise ValueError("unmatched closing block: %r" % line)
            last_closed = stack.pop()
        elif token:
            last_closed = None
        if token:
            previous = token
        i += 1
    if stack:
        raise ValueError("unclosed block in function body")
    return repaired


def _indent(line: str) -> int:
    return len(line) - len(line.lstrip())


def _owns_block(previous_line: str) -> bool:
    """True when the block that follows `previous_line` belongs to that statement."""
    previous = code_only(previous_line).strip().rstrip("{").strip()
    return bool(_BLOCK_OWNER.fullmatch(previous or "{"))


def _block_end(lines: list[str], start: int) -> int:
    """Index of the line closing the block opened at `start` (a lone `{`, or an empty `{}`)."""
    token = code_only(lines[start]).strip()
    if token == "{}":
        return start
    if token != "{":
        raise ValueError("expected a block opening brace: %r" % lines[start])
    depth = 0
    for index in range(start, len(lines)):
        token = code_only(lines[index]).strip()
        depth += token.count("{") - token.count("}")
        if token and depth <= 0:
            if depth < 0:
                raise ValueError("unbalanced block: %r" % lines[index])
            return index
    raise ValueError("unclosed block starting at: %r" % lines[start])


def repair_switches(lines: list[str]) -> list[str]:
    """Add the block braces View8 leaves implicit around a switch.

    View8 prints `switch (r8)` followed directly by the clauses, each carrying its own block:
    `default:` / `{ break }` / `case (0):` / `{ ... }`. The switch statement's own braces are missing,
    and the statements the bytecode keeps in the switch after the last clause — a trailing `return`,
    `break` or assignment run — follow those clause blocks. The added block therefore ends after that
    trailing run, before the enclosing block closes. Only simple statements (assignments and
    `break`/`continue`/`return`) are absorbed, so the repair never swallows a neighbouring region; a
    switch that already has its braces, and a clause without a block, are rejected or left alone.
    """
    out = list(lines)
    index = 0
    while index < len(out):
        header = _SWITCH_HEADER.fullmatch(out[index])
        if not header:
            index += 1
            continue
        head = header.group(1)
        indent = len(head)
        cursor = index + 1
        while cursor < len(out) and not out[cursor].strip():
            cursor += 1
        if cursor < len(out) and code_only(out[cursor]).strip() == "{":
            index += 1                                   # this switch already has its block
            continue
        clauses, end = 0, index
        while cursor < len(out):
            line = out[cursor]
            if not line.strip() or _indent(line) != indent:
                if not line.strip():
                    cursor += 1
                    continue
                break
            if _SWITCH_CLAUSE.fullmatch(line.strip()):
                clauses += 1
                cursor += 1
                while (cursor < len(out) and _SWITCH_CLAUSE.fullmatch(out[cursor].strip())
                       and _indent(out[cursor]) == indent):
                    clauses += 1                      # consecutive labels share one block
                    cursor += 1
                while cursor < len(out) and not out[cursor].strip():
                    cursor += 1
                if cursor >= len(out) or not code_only(out[cursor]).strip().startswith("{"):
                    raise ValueError("switch clause without a block: %r" % line)
                end = _block_end(out, cursor)
                cursor = end + 1
                continue
            if clauses and _SIMPLE_STATEMENT.fullmatch(code_only(line).strip()):
                end = cursor
                cursor += 1
                continue
            break
        if not clauses:
            raise ValueError("switch without clauses: %r" % out[index])
        out[index + 1:index + 1] = [head + "{"]           # both edits shift the lines after them
        out[end + 2:end + 2] = [head + "}"]
        index = end + 3
    return out


def wrap_loop_body_blocks(lines: list[str]) -> list[str]:
    """Restore the loop header View8 omits around a loop body it prints as a bare block.

    A V8 `for`/`while` body is a `Block` scope holding the loop's variables, and View8 can print that
    block without the loop's own `while (true)` header: the loop's condition check and its
    `break`/`continue` statements then sit inside a bare block, where JavaScript rejects them. A bare
    block — one no `if`/`else`/`try`/`catch`/loop/`switch` clause or function owns — that has a
    `break`/`continue` directly inside it is therefore the missing loop body and is wrapped in
    `while (true)`. No statement is moved, added, reordered or renamed.
    """
    out = list(lines)
    index = 1
    while index < len(out):
        if code_only(out[index]).strip() != "{" or _owns_block(out[index - 1]):
            index += 1
            continue
        indent = _indent(out[index])
        end = _block_end(out, index)
        jumps = [line for line in out[index + 1:end]
                 if _indent(line) == indent + 1 and code_only(line).strip() in _LOOP_JUMPS]
        if not jumps:
            index += 1
            continue
        out.insert(index, out[index][:indent] + "while (true)")
        index += 2
    return out


def normalize_body(lines: list[str]) -> list[str]:
    return wrap_loop_body_blocks(
        repair_switches(repair_catches(join_conditions(lines))))
