#!/usr/bin/env python3
"""Regression tests for the emitter's structural repairs and a non-executing, 18-module syntax audit.

Run with Python 3.10+ and Node on PATH:
    python3 -m unittest discover -s tools/decompile -p 'test_emit_source.py' -v

The corpus test emits into a temporary directory and invokes node --check only. It never loads
recovered application modules, starts the server, or writes to the application's data directory.
"""
from __future__ import annotations

import json
from pathlib import Path
import shutil
import struct
import subprocess
import tempfile
import unittest

import emit_source
from normalize_listing import (code_only, join_conditions, mask_literals, normalize_body,
                               repair_switches, wrap_loop_body_blocks)


ROOT = Path(__file__).resolve().parents[2]


def stats() -> dict:
    return {"strings": 0, "regexes": 0, "string_readings": {}, "regex_readings": {},
            "unverified": []}


class StructureTests(unittest.TestCase):
    def test_or_loads_stay_on_right_hand_branch(self):
        lines = ['\tif (!a0)', '\tr5 = a0["indexOf"]', '\tr5 = r5(".")',
                 '\t\t|| (r5 < 0)', '\t{', '\t\treturn null', '\t}']
        joined = join_conditions(lines)
        self.assertEqual(len(joined), 4)
        self.assertEqual(joined[0],
                         '\tif (((!a0) || (r5 = a0["indexOf"], r5 = r5("."), (r5 < 0))))')
        self.assertEqual(joined[1:], lines[-3:])

    def test_multiple_and_operands_keep_their_own_loads(self):
        joined = join_conditions(['\tif (a0)', '\tr1 = a0["ids"]', '\t\t&& (r1)',
                                  '\tr2 = r1["length"]', '\t\t&& (r2 > 0)',
                                  '\t{', '\t}'])
        self.assertEqual(joined[0],
                         '\tif ((((a0) && (r1 = a0["ids"], (r1))) && (r2 = r1["length"], (r2 > 0))))')

    def test_plain_and_inline_conditions_are_unchanged(self):
        lines = ['\tif (a0)', '\t{', '\t\tr1 = a0', '\t}', '\tif (r1) break']
        self.assertEqual(join_conditions(lines), lines)

    def test_incomplete_condition_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "unsupported extended condition"):
            join_conditions(['\tif (a0)', '\t\t|| (a1)', '\tr1 = a0', '\t{', '\t}'])

    def test_iterator_catch_moves_after_try_close(self):
        malformed = ['\ttry', '\t{', '\t\tif (a0)', '\t\t{', '\t\t\taccu = a0()',
                     '\t\t}', '\t\tcatch {}', '\t}']
        expected = ['\ttry', '\t{', '\t\tif (a0)', '\t\t{', '\t\t\taccu = a0()',
                    '\t\t}', '\t}', '\tcatch {}']
        self.assertEqual(normalize_body(malformed), expected)

    def test_valid_nested_and_empty_catches_stay_unchanged(self):
        lines = ['\tif (a0)', '\t{', '\t\ttry', '\t\t{', '\t\t\taccu = a0()',
                 '\t\t}', '\t\tcatch {}', '\t}']
        self.assertEqual(normalize_body(lines), lines)
        lines = ['\ttry', '\t{', '\t\taccu = a0()', '\t}', '\tcatch', '\t{',
                 '\t\tr1 = accu', '\t}']
        self.assertEqual(normalize_body(lines), lines)

    def test_context_block_followed_by_catch_restores_try(self):
        lines = ['\taccu = ctx6', '\t{', '\t\taccu = PushContext("Block")', '\t}',
                 '\tcatch', '\t{', '\t\tr1 = accu', '\t}']
        self.assertEqual(normalize_body(lines), [lines[0], '\ttry'] + lines[1:])

    def test_missing_context_try_inside_an_enclosing_try(self):
        inner = ['\t\taccu = ctx6', '\t\t{', '\t\t\taccu = PushContext("Block")', '\t\t}',
                 '\t\tcatch {}']
        lines = ['\ttry', '\t{'] + inner + ['\t}', '\tcatch {}']
        expected = ['\ttry', '\t{', inner[0], '\t\ttry'] + inner[1:] + ['\t}', '\tcatch {}']
        self.assertEqual(normalize_body(lines), expected)

    def test_unrecognized_orphan_catch_is_rejected(self):
        with self.assertRaises(ValueError):
            normalize_body(['\t{', '\t}', '\tcatch {}'])

    def test_switch_gets_the_block_view8_omits(self):
        lines = ['\tswitch (r8)', '\tdefault:', '\t{', '\t\tbreak', '\t}', '\tcase (0):',
                 '\t{', '\t\tACCU = r9', '\t}', '\treturn "1.0.0"']
        expected = ['\tswitch (r8)', '\t{', '\tdefault:', '\t{', '\t\tbreak', '\t}', '\tcase (0):',
                    '\t{', '\t\tACCU = r9', '\t}', '\treturn "1.0.0"', '\t}']
        self.assertEqual(repair_switches(lines), expected)

    def test_consecutive_switch_labels_share_one_block(self):
        lines = ['\t\tswitch (r10)', '\t\tcase "http":', '\t\tcase "hls":', '\t\t{',
                 '\t\t\tACCU = 2', '\t\t}']
        expected = ['\t\tswitch (r10)', '\t\t{', '\t\tcase "http":', '\t\tcase "hls":', '\t\t{',
                    '\t\t\tACCU = 2', '\t\t}', '\t\t}']
        self.assertEqual(repair_switches(lines), expected)

    def test_switch_that_already_has_its_block_is_unchanged(self):
        lines = ['\tswitch (r8)', '\t{', '\t\tcase (0):', '\t\t\tbreak', '\t}']
        self.assertEqual(repair_switches(lines), lines)

    def test_switch_clause_without_a_block_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "switch clause without a block"):
            repair_switches(['\tswitch (r8)', '\tdefault:', '\t\tACCU = 1'])

    def test_bare_block_holding_a_loop_jump_gets_its_loop_header(self):
        lines = ['\tr6 = 1', '\t{', '\t\tACCU = PushContext("Block")', '\t\tif (1 <= 5)',
                 '\t\t{', '\t\t\tbreak', '\t\t}', '\t\twhile (true)', '\t\t{', '\t\t\tACCU = 1',
                 '\t\t}', '\t\tif (!r5 == 1) continue', '\t\tbreak', '\t}']
        wrapped = wrap_loop_body_blocks(lines)
        self.assertEqual(wrapped[0], '\tr6 = 1')
        self.assertEqual(wrapped[1], '\twhile (true)')
        self.assertEqual(wrapped[2:], lines[1:])

    def test_blocks_owned_by_a_statement_are_not_wrapped(self):
        for owner in ['\ttry', '\telse', '\tcatch', '\tcatch (r1)', '\tfinally', '\tif (a0)',
                      '\twhile (r1)', '\tswitch (r2)', '\tcase (0):', '\tdefault:',
                      '\tfunction func_x(a0)', '\t} else']:
            lines = [owner, '\t{', '\t\tbreak', '\t}']
            self.assertEqual(wrap_loop_body_blocks(lines), lines, owner)

    def test_null_constant_placeholder_is_lowered(self):
        counts = stats()
        self.assertEqual(emit_source.protect('\tr20 = {"name": null, "altName": <null}',
                                             lambda value: True, counts),
                         '\tr20 = {"name": null, "altName": null}')
        self.assertEqual(emit_source.protect('\tr20 = {"port": <null, "x": 1}',
                                             lambda value: True, counts),
                         '\tr20 = {"port": null, "x": 1}')

    def test_entry_wrapper_needs_no_exports_assignment(self):
        funcs = emit_source.split_functions([
            'function func_outer()', '{', '\tr0 = func_entry', '\treturn r0', '}',
            'function func_entry(a0, a1, a2, a3, a4)', '{', '\tr1 = a1("express")',
            '\treturn undefined', '}'])
        module, outer = emit_source.find_module_wrapper(funcs)
        self.assertEqual(module['name'], 'func_entry')
        self.assertEqual(outer['name'], 'func_outer')

    def test_wrapper_return_register_must_match(self):
        funcs = emit_source.split_functions([
            'function func_outer()', '{', '\tr0 = func_entry', '\treturn r1', '}',
            'function func_entry(a0, a1, a2, a3, a4)', '{', '\treturn undefined', '}'])
        with self.assertRaises(ValueError):
            emit_source.find_module_wrapper(funcs)

    def test_unclosed_function_is_not_silently_dropped(self):
        with self.assertRaisesRegex(ValueError, "unclosed function"):
            emit_source.split_functions(['function func_bad()', '{', '\treturn undefined'])

    def test_regex_quotes_and_unmatched_braces_do_not_affect_function_split(self):
        regex = '\tr1 = \\' + '"{' + '\\'
        funcs = emit_source.split_functions(['function func_regex()', '{', regex, '}',
                                             'function func_empty()', '{', '}'])
        self.assertEqual(len(funcs), 2)
        self.assertEqual(funcs[0]['body'][0], regex)

    def test_regex_is_masked_before_its_internal_quotes(self):
        pattern = r'"(.+)"\\\\s*\\\\((video|audio)\\\\)'
        line = '\tr22 = \\' + pattern + '\\'
        masked, literals = mask_literals(line)
        self.assertEqual(literals, [('regex', '\\' + pattern + '\\')])
        self.assertEqual(masked, '\tr22 = \x000\x00')

    def test_regex_at_start_and_division_are_distinct(self):
        masked, literals = mask_literals('\\' + r'^\\\\/dev\\\\/' + '\\')
        self.assertEqual(masked, '\x000\x00')
        self.assertEqual(literals[0][0], 'regex')
        self.assertEqual(mask_literals('\tr1 = r2 \\ 2'), ('\tr1 = r2 \\ 2', []))

    def test_regex_uses_a_single_string_decoding_step(self):
        value = '"(.+)"' + r'\s*\((video|audio)\)'
        # View8 doubles once when printing the pattern and once when dumping its source.
        body = value.replace('\\', '\\\\\\\\')
        counts = stats()
        lowered = emit_source.protect('\tr22 = \\' + body + '\\',
                                      lambda candidate: candidate == value, counts)
        self.assertEqual(lowered, '\tr22 = new RegExp(' + json.dumps(value) + ')')
        self.assertEqual(counts['regexes'], 1)
        self.assertEqual(counts['strings'], 0)
        self.assertEqual(counts['unverified'], [])

    def test_string_content_is_not_rewritten_as_code(self):
        counts = stats()
        self.assertEqual(emit_source.protect('\tr1 = "ACCU Scope[1][3] await a0"',
                                            lambda value: True, counts),
                         '\tr1 = "ACCU Scope[1][3] await a0"')
        self.assertEqual(emit_source.declares_registers(['r1 = "r999 accu"']), ['r1'])
        self.assertNotIn('await', code_only('r1 = "await"'))


@unittest.skipUnless(shutil.which('node'), 'Node is required for JavaScript syntax/behaviour tests')
class JavaScriptTests(unittest.TestCase):
    def run_node(self, source: str) -> str:
        result = subprocess.run(['node', '-e', source], capture_output=True, text=True, timeout=10)
        self.assertEqual(result.returncode, 0, result.stderr)
        return result.stdout.strip()

    def test_short_circuit_skips_loads_and_preserves_order(self):
        body = join_conditions(['if (a0)', 'r1 = (trace.push("first"), a0.ids)',
                                '\t&& (r1)', 'r2 = (trace.push("second"), r1.length)',
                                '\t&& (r2 > 0)', '{', '\treturn true', '}'])
        source = 'function check(a0, trace) { let r1, r2;\n' + '\n'.join(body) + '\nreturn false; }\n'
        source += '''const trace = [];
if (check(null, trace) !== false || trace.length) throw Error("eager null load");
if (check({ids: null}, trace) !== false || trace.join() !== "first") throw Error("eager second load");
trace.length = 0;
if (!check({ids: [1]}, trace) || trace.join() !== "first,second") throw Error("load order");
console.log("ok");'''
        self.assertEqual(self.run_node(source), 'ok')

    def test_emitted_async_keyword_and_commonjs_renaming(self):
        listing = '''function func_outer()
{
\tr0 = func_entry
\treturn r0
}
function func_entry(a0, a1, a2, a3, a4)
{
\ta2["exports"] = func_task
\tr1 = "a0 a1 a2 a3 a4 await"
\treturn undefined
}
function func_task(a0)
{
\tr1 = await a0
\treturn r1
}
'''
        with tempfile.TemporaryDirectory() as directory:
            directory = Path(directory)
            ir, binary, disassembly, output = [directory / name for name in
                                               ('input.js', 'cache.bin', 'dump.txt', 'output.cjs')]
            ir.write_text(listing, encoding='utf-8')
            binary.write_bytes(struct.pack('<6I', 0xC0DE0562, 0xAF632352, 100, 0xA8C5122F, 0, 0))
            disassembly.write_text('', encoding='utf-8')
            emit_source.emit(str(ir), str(binary), str(output), str(disassembly))
            source = output.read_text(encoding='utf-8')
            self.assertIn('async function func_task(a0)', source)
            self.assertNotIn('function async ', source)
            self.assertIn('"a0 a1 a2 a3 a4 await"', source)
            self.assertIn('function __module__(exports, require, module, __filename, __dirname)', source)
            checked = subprocess.run(['node', '--check', str(output)], capture_output=True,
                                     text=True, timeout=10)
            self.assertEqual(checked.returncode, 0, checked.stderr)
            # This executes only the tiny synthetic fixture above, never recovered app code.
            self.assertEqual(self.run_node('const task = require(' + json.dumps(str(output)) + ');'
                                           'task(Promise.resolve(7)).then(value => console.log(value));'), '7')

    def test_repaired_iterator_catch_handles_a_thrown_error(self):
        body = normalize_body(['try', '{', '\tif (true)', '\t{', '\t\tthrow Error("test")',
                               '\t}', '\tcatch {}', '}'])
        self.assertEqual(self.run_node('\n'.join(body) + '\nconsole.log("ok");'), 'ok')

    def test_regex_constructor_matches_quotes_whitespace_and_parentheses(self):
        value = '"(.+)"' + r'\s*\((video|audio)\)'
        body = value.replace('\\', '\\\\\\\\')
        lowered = emit_source.protect('r1 = \\' + body + '\\', lambda item: item == value, stats())
        source = 'let r1;\n' + lowered + ';\n' + '''const match = r1.exec('"Camera" (video)');
if (!match || match[1] !== "Camera" || match[2] !== "video") throw Error("pattern changed");
console.log("ok");'''
        self.assertEqual(self.run_node(source), 'ok')

    def test_emitted_switch_loop_body_and_null_placeholder_parse(self):
        # The three shapes the 18-module audit exposed: a switch without its own block, a loop body
        # printed as a bare block holding the loop's jumps, and `<null` object-literal values.
        listing = '''function func_outer()
{
\tr0 = func_entry
\treturn r0
}
function func_entry(a0, a1, a2, a3, a4)
{
\tr1 = {"name": null, "altName": <null}
\tr2 = 1
\t{
\t\tACCU = PushContext("Block")
\t\tr3 = 1
\t\tif (1 <= 5)
\t\t{
\t\t\tbreak
\t\t}
\t\twhile (true)
\t\t{
\t\t\tACCU = r3
\t\t}
\t\tif (!r3 == 1) continue
\t\tbreak
\t}
\tswitch (r1["name"])
\tdefault:
\t{
\t\tbreak
\t}
\tcase (0):
\t{
\t\tACCU = r2
\t}
\treturn "1.0.0"
}
'''
        with tempfile.TemporaryDirectory() as directory:
            directory = Path(directory)
            ir, binary, disassembly, output = [directory / name for name in
                                               ('input.js', 'cache.bin', 'dump.txt', 'output.cjs')]
            ir.write_text(listing, encoding='utf-8')
            binary.write_bytes(struct.pack('<6I', 0xC0DE0562, 0xAF632352, 100, 0xA8C5122F, 0, 0))
            disassembly.write_text('', encoding='utf-8')
            emit_source.emit(str(ir), str(binary), str(output), str(disassembly))
            source = output.read_text(encoding='utf-8')
            checked = subprocess.run(['node', '--check', str(output)], capture_output=True,
                                     text=True, timeout=10)
            self.assertEqual(checked.returncode, 0, checked.stderr)
            self.assertNotIn('<null', source)
            self.assertIn('"altName": null', source)
            self.assertIn('\twhile (true)', source)

    def test_all_eighteen_modules_parse_without_executing_them(self):
        modules = [ROOT / 'decompiled/server.js'] + sorted((ROOT / 'decompiled/src').glob('*.js'))
        self.assertEqual(len(modules), 18, 'Expected server.js plus the 17 original src modules')
        with tempfile.TemporaryDirectory() as directory:
            for ir in modules:
                relative = ir.relative_to(ROOT / 'decompiled')
                with self.subTest(module=str(relative)):
                    output = Path(directory) / relative
                    output.parent.mkdir(parents=True, exist_ok=True)
                    emit_source.emit(str(ir), str(ROOT / relative), str(output))
                    checked = subprocess.run(['node', '--check', str(output)], capture_output=True,
                                             text=True, timeout=10)
                    self.assertEqual(checked.returncode, 0, checked.stderr)


if __name__ == '__main__':
    unittest.main()
