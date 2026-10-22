#!/usr/bin/env python3
"""Regression fixtures for `structure.py`'s bytecode and recovered-code readers.

The detectors are pattern matches over two representations this repository cannot regenerate on its
own (the listings come from View8's Windows disassembler), so the shapes they depend on are pinned
down on small synthetic listings: the span a `JumpLoop` defines, the jump table of
`SwitchOnSmiNoFeedback`, and — the reason this file exists — the difference between the
strict-equality chain a `switch` compiles to and the `||` / `&&` chain of an `if`, which must not be
counted as a switch.

Run with:
  python3 -m unittest discover -s tools/verify -p 'test_structure.py' -v
"""
from __future__ import annotations

import os
import sys
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import structure  # noqa: E402

ADDRESS = "00000120802DF000"


def instruction(offset: int, text: str, target: int | None = None) -> str:
    """One disassembler instruction line, in the listing's own layout."""
    line = "         %s @ %4d : 00 00 00          %s" % (ADDRESS, offset, text)
    return "%s (%s @ %d)" % (line, ADDRESS, target) if target is not None else line


def one_section(*lines: str) -> dict:
    dump = "Start BytecodeArray\nParameter count 1\n" + "\n".join(lines) + "\n"
    return structure.parse_sections(dump)[0]


class BytecodeReaderTest(unittest.TestCase):
    def test_loop_spans_and_nesting_depths(self):
        """A loop is the span from its `JumpLoop`'s target to that instruction; nesting is containment."""
        loops = structure.section_loops(one_section(
            instruction(200, "JumpLoop [116], [0]", 10),      # outer loop: [10, 200]
            instruction(120, "JumpLoop.Wide [74], [1]", 40),  # nested loop: [40, 120]
            instruction(350, "JumpLoop [50], [0]", 300),      # following loop: [300, 350]
        ))
        self.assertEqual(sorted((target, edge) for target, edge, _ in loops),
                         [(10, 200), (40, 120), (300, 350)])
        self.assertEqual(sorted(depth for _, _, depth in loops), [0, 0, 1])

    def test_jump_table_keys_and_targets(self):
        tables = structure.section_tables(one_section(
            instruction(506, "SwitchOnSmiNoFeedback [14], [2], [0] { 0: @512, 1: @519 }")))
        self.assertEqual([(table["keys"], table["targets"]) for table in tables], [([0, 1], [512, 519])])

    def test_generator_dispatch_detected(self):
        self.assertTrue(structure.has_generator_dispatch(
            one_section(instruction(0, "SwitchOnGeneratorState r5, [0], [1] { 0: @347 }"))))
        self.assertFalse(structure.has_generator_dispatch(one_section(instruction(0, "LdaZero"))))

    def test_case_dispatch_chain(self):
        """The shape a `switch` over non-Smi case values compiles to: every test dispatches to a handler
        with a true-forward jump, and the chain ends with the jump taken when no case matched."""
        chains = structure.section_chains(one_section(
            instruction(58, "TestEqualStrict r10, [13]"),
            instruction(61, "JumpIfTrue [60]", 121),
            instruction(63, "LdaSmi.Wide [471]"),
            instruction(68, "TestEqualStrict r10, [13]"),
            instruction(75, "JumpIfTrueConstant [25]", 1204),
            instruction(105, "LdaConstant [3]"),
            instruction(107, "TestEqualStrict r10, [13]"),
            instruction(110, "JumpIfTrueConstant [32]", 1204),
            instruction(112, "LdaConstant [4]"),
            instruction(114, "TestEqualStrict r10, [13]"),
            instruction(117, "JumpIfTrueConstant [50]", 2110),
            instruction(119, "JumpConstant [55]", 2330),
        ))
        self.assertEqual(len(chains), 1)
        self.assertEqual(chains[0]["tests"], 4)
        self.assertEqual(chains[0]["handlers"], [121, 1204, 1204, 2110])
        self.assertEqual(chains[0]["blocks"], [1, 2, 1])

    def test_short_circuit_chain_is_not_a_switch(self):
        """`return !(a === A || a === B || a === C)`: the last test feeds the boolean, no trailing jump."""
        self.assertEqual(structure.section_chains(one_section(
            instruction(50, "TestEqualStrict r1, [12]"),
            instruction(53, "JumpIfTrue [28]", 81),
            instruction(64, "TestEqualStrict r1, [15]"),
            instruction(67, "JumpIfTrue [14]", 81),
            instruction(78, "TestEqualStrict r1, [18]"),
            instruction(81, "ToBooleanLogicalNot"),
            instruction(82, "Return"),
        )), [])

    def test_inverted_last_test_is_not_a_switch(self):
        """`if (a === A || a === B || a === C)`: the last test is inverted towards the false path."""
        self.assertEqual(structure.section_chains(one_section(
            instruction(31, "TestEqualStrict r1, [6]"),
            instruction(34, "JumpIfTrue [48]", 82),
            instruction(50, "TestEqualStrict r1, [11]"),
            instruction(53, "JumpIfTrue [29]", 82),
            instruction(77, "TestEqualStrict r1, [18]"),
            instruction(80, "JumpIfFalse [72]", 152),
            instruction(82, "GetNamedProperty a2, [2], [19]"),
        )), [])


TABLE_SWITCH_MODULE = """// Recovered module: fixture
let s1_2;

function func_f_0x1(a0)
{
\tlet r0;
\twhile (r0)
\t{
\t\twhile (a0)
\t\t{
\t\t\tbreak
\t\t}
\t}
\tswitch (r0)
\t{
\tdefault:
\t{
\t\tbreak
\t}
\tcase (0):
\t{
\t\tr0 = 0
\t}
\tcase (1):
\t{}
\t}
}

function __module__(exports, require, module, __filename, __dirname)
{
}
"""

CHAIN_SWITCH_MODULE = """// Recovered module: fixture
function func_f_0x1(a0)
{
\tlet r0, r10;
\tswitch (void 0)
\t{
\tcase r10 === "usb":
\t{
\t\tr0 = 1
\t}
\tcase r10 === "screen":
\tcase r10 === "http":
\t{}
\tdefault:
\t{
\t\tbreak
\t}
\t}
}
"""


class RecoveredReaderTest(unittest.TestCase):
    def functions(self, module: str) -> dict:
        return {function["name"]: function for function in structure.recovered_functions(module)}

    def test_functions_are_split_with_their_parameters(self):
        functions = self.functions(TABLE_SWITCH_MODULE)
        self.assertEqual(sorted(functions), ["__module__", "func_f_0x1"])
        self.assertEqual(functions["func_f_0x1"]["parameters"], ["a0"])
        self.assertFalse(functions["func_f_0x1"]["async"])

    def test_loop_depths_and_jump_table_switch(self):
        loops, switches = structure.recovered_constructs(self.functions(TABLE_SWITCH_MODULE)["func_f_0x1"]["body"])
        self.assertEqual(loops, [0, 1])
        self.assertEqual(len(switches), 1)
        switch = switches[0]
        self.assertEqual(switch["kind"], "table")
        self.assertEqual(switch["discriminant"], "r0")
        self.assertEqual(switch["labels"], ["(0)", "(1)"])
        self.assertEqual(switch["defaults"], 1)
        self.assertEqual(switch["blocks"], [1, 1])

    def test_case_chain_switch_is_recognised(self):
        loops, switches = structure.recovered_constructs(self.functions(CHAIN_SWITCH_MODULE)["func_f_0x1"]["body"])
        self.assertEqual(loops, [])
        self.assertEqual([switch["kind"] for switch in switches], ["chain"])
        self.assertEqual(switches[0]["labels"], ['r10 === "usb"', 'r10 === "screen"', 'r10 === "http"'])
        self.assertEqual(switches[0]["defaults"], 1)
        self.assertEqual(switches[0]["blocks"], [1, 2])


if __name__ == "__main__":
    unittest.main()
