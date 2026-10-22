#!/usr/bin/env python3
"""Regression fixtures for `tools/verify/semantics.py`.

Each fixture is a miniature disassembler dump plus the `recovered/` file it belongs to, written into a
temporary root: the checks that the real modules rely on (exact RegExp patterns with their compiled
flags, one handler-table entry per `catch` clause) are asserted on their own, so a change in the reader
or the comparison fails here before it can silently pass 18 modules.
"""
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import semantics  # noqa: E402

DUMP = """\
Start SharedFunctionInfo
 - name: 0x1 <String[3]: #run>
Start BytecodeArray
Parameter count 1
Register count 4
         0x2 @   26 : 78 04 06 21       CreateRegExpLiteral [4], [6], #33
         0x2 @   54 : 78 06 0d 01       CreateRegExpLiteral [6], [13], #1
         0x2 @  100 : 82 f1 14          CreateCatchContext r9, [20]
Constant pool (size = 24)
0x3: [FixedArray] in OldSpace
 - map: 0x4 <Map>
 - length: 24
0: 0x5 <ScopeInfo FUNCTION_SCOPE>
4: 0x6 <String[5]: #&amp;>
6: 0x7 <String[7]: #a\\\\s+b>
Start FixedArray
2: 0x8 <String[1]: #x>
End FixedArray
20: 0x9 <String[1]: #e>
Handler Table (size = 32)
   from   to       hdlr (prediction,   data)
  (  8,  76)  ->    54 (prediction=1, data=1)
  ( 90,  99)  ->   100 (prediction=1, data=2)
Source Position Table (size = 38)
End BytecodeArray
End SharedFunctionInfo
"""

RECOVERED = """\
function __module__(exports, require, module, __filename, __dirname)
{
\tlet r0, accu;
\tr0 = new RegExp("&amp;", "gs")
\ttry
\t{
\t\taccu = r0
\t}
\tcatch {}
\tr0 = new RegExp("a\\\\s+b", "g")
}
"""


def build_root(recovered: str = RECOVERED) -> tempfile.TemporaryDirectory:
    root = tempfile.TemporaryDirectory()
    (Path(root.name) / "decompiled" / "bytecode").mkdir(parents=True)
    (Path(root.name) / "recovered" / "src").mkdir(parents=True)
    (Path(root.name) / "decompiled" / "bytecode" / "x.js.disasm.txt").write_text(DUMP, encoding="utf-8")
    (Path(root.name) / "recovered" / "src" / "x.js").write_text(recovered, encoding="utf-8")
    return root


class ReadingTest(unittest.TestCase):
    def test_flag_bits_follow_v8(self):
        self.assertEqual(semantics.flag_letters(0), "")
        self.assertEqual(semantics.flag_letters(1), "g")
        self.assertEqual(semantics.flag_letters(2), "i")
        self.assertEqual(semantics.flag_letters(4), "m")
        self.assertEqual(semantics.flag_letters(8), "y")
        self.assertEqual(semantics.flag_letters(16), "u")
        self.assertEqual(semantics.flag_letters(32), "s")
        self.assertEqual(semantics.flag_letters(128), "d")
        self.assertEqual(semantics.flag_letters(1 | 32), "gs")

    def test_printed_readings_undouble_backslashes(self):
        self.assertIn("a\\s+b", semantics.printed_readings("a\\\\s+b"))

    def test_printed_readings_decode_unpadded_hex(self):
        # V8 prints U+0628 (ب) as \x628, which is also readable as \x62 followed by "8".
        readings = semantics.printed_readings("\\x628\\x64a")
        self.assertIn("\u0628\u064a", readings)     # the bytes V8 printed: U+0628 U+064A
        self.assertIn("b8da", readings)             # the same text read as two-digit escapes


class ScanTest(unittest.TestCase):
    def setUp(self):
        self.scan = semantics.scan_disassembly(DUMP)

    def test_regexes_carry_their_pattern_and_flags(self):
        pairs = {(readings[0], flags) for readings, flags in self.scan["regexes"]}
        self.assertEqual(pairs, {("&amp;", "gs"), ("a\\s+b", "g")})
        self.assertEqual(self.scan["unresolved"], [])

    def test_handler_table_is_consumed_by_its_declared_size(self):
        self.assertEqual([entry["region"] for entry in self.scan["handlers"]],
                         [[8, 76], [90, 99]])
        self.assertEqual([entry["handler"] for entry in self.scan["handlers"]], [54, 100])

    def test_catch_context_names_are_read_from_the_pool(self):
        kinds = [entry["kind"] for entry in self.scan["handlers"]]
        self.assertEqual(kinds, ["plain", "catch"])
        self.assertEqual(self.scan["handlers"][1]["binding"], "e")

    def test_nested_array_entries_do_not_displace_the_pool(self):
        # Entry 4 of the outer pool must survive the nested `Start FixedArray` section above it.
        self.assertEqual(self.scan["regexes"][0][0][0], "&amp;")


class MatchTest(unittest.TestCase):
    def setUp(self):
        self.listing = semantics.scan_disassembly(DUMP)["regexes"]

    def test_exact_match(self):
        result = semantics.match_regexes(self.listing, [("&amp;", "gs"), ("a\\s+b", "g")])
        self.assertEqual(result["matched"], 2)
        self.assertEqual(result["dropped_flags"], [])
        self.assertEqual(result["unbacked"], [])
        self.assertEqual(result["extra"], [])

    def test_dropped_flag_is_reported(self):
        result = semantics.match_regexes(self.listing, [("&amp;", ""), ("a\\s+b", "")])
        self.assertEqual(result["matched"], 2)
        self.assertEqual([entry["pattern"] for entry in result["dropped_flags"]], ["&amp;", "a\\s+b"])

    def test_unbacked_and_extra_literals_are_reported(self):
        result = semantics.match_regexes(self.listing, [("&amp;", "gs"), ("a\\s+b", "g"), ("invented", "")])
        self.assertEqual(result["extra"], [("invented", "")])
        result = semantics.match_regexes(self.listing, [("&amp;", "gs")])
        self.assertEqual([entry["pattern"] for entry in result["unbacked"]], ["a\\s+b"])


class CheckTest(unittest.TestCase):
    def test_faithful_module_passes(self):
        with build_root() as root:
            report = semantics.check(root)
        self.assertEqual(report["totals"]["ok_modules"], 1)
        self.assertEqual(report["modules"][0]["handlers"]["entries"], 2)
        self.assertEqual(report["modules"][0]["handlers"]["catches"], 2)
        self.assertEqual(report["modules"][0]["regexes"]["flags_recovered"], 2)

    def test_dropped_flag_fails_the_module(self):
        with build_root(RECOVERED.replace('"gs"', '""').replace('"g"', '""')) as root:
            report = semantics.check(root)
        self.assertEqual(report["totals"]["ok_modules"], 0)
        self.assertTrue(report["modules"][0]["regexes"]["dropped_flags"])
        self.assertTrue(report["modules"][0]["handlers"]["ok"], "the handler count is unaffected")

    def test_missing_catch_clause_fails_the_module(self):
        with build_root(RECOVERED.replace("catch {}", "accu = r0")) as root:
            report = semantics.check(root)
        self.assertEqual(report["totals"]["ok_modules"], 0)
        self.assertFalse(report["modules"][0]["handlers"]["ok"])
        self.assertEqual(report["modules"][0]["handlers"]["entries"], 2)
        self.assertEqual(report["modules"][0]["handlers"]["catches"], 0)

    def test_json_report_is_written(self):
        with build_root() as root:
            out = os.path.join(root, "report.json")
            argv, sys.argv = sys.argv, ["semantics.py", "--root", root, "--json", out]
            try:
                code = semantics.main()
            finally:
                sys.argv = argv
            payload = json.loads(Path(out).read_text(encoding="utf-8"))
        self.assertEqual(code, 0)
        self.assertEqual(payload["totals"]["ok_modules"], 1)


if __name__ == "__main__":
    unittest.main()
