// Recovered module: src/idle.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (4847 source
// characters; Node 18.5.0 / V8 10.2.154.4-node.8) by tools/decompile/emit_source.py, after
// tools/decompile/resolve_strings.py restored the obfuscated string array. The module is a faithful
// reconstruction of the original control flow and data flow; see DECOMPILATION.md for the analysis and
// its limitations.
//
// How to read it:
//   rN        a bytecode register (a local of the enclosing function)
//   accu      the V8 accumulator register
//   s<n>_<m>  the context slot Scope[n][m] (file-level, shared by this module's functions)
//   ctxN      a context pushed from Scope[n]
//   a0..aN    function parameters; in __module__ they are the CommonJS exports, require, module,
//             __filename and __dirname
//   /.../     a RegExp literal (the code cache does not record its flags)

// ----------------------------------------------------------------------------------------
// Context slots shared by this module's functions (V8's Scope[n][m]).
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13;
let s3_2;
let s5_2;
let s7_2;
let ctx0, ctx1, ctx2, ctx4, ctx5, ctx6;

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x10000000a(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x1d8d_0x100000004
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(169)
			r4 = (parseInt(r5) / 1)
			r6 = r0(191)
			r4 = (r4 + ((-parseInt(r6)) / 2))
			r6 = r0(196)
			r5 = ((-parseInt(r6)) / 3)
			r7 = r0(176)
			r4 = (r4 + (r5 * (parseInt(r7) / 4)))
			r6 = r0(189)
			r5 = (parseInt(r6) / 5)
			r7 = r0(187)
			r4 = (r4 + (r5 * (parseInt(r7) / 6)))
			r6 = r0(198)
			r5 = (parseInt(r6) / 7)
			r7 = r0(173)
			r4 = (r4 + (r5 * (parseInt(r7) / 8)))
			r6 = r0(194)
			r4 = (r4 + ((-parseInt(r6)) / 9))
			r6 = r0(172)
			r5 = ((-parseInt(r6)) / 10)
			r7 = r0(185)
			r2 = (r4 + (r5 * ((-parseInt(r7)) / 11)))
			if (r2 === a1)
			{
				break
			}
			r6 = r1["shift"]()
			accu = r1["push"](r6)
			continue
		}
		catch {}
		r4 = accu
		accu = null
		accu = ctx2
		r4 = ctx1
		r7 = r1["shift"]()
		accu = r1["push"](r7)
	}
	return undefined
}

function func_startLoop_0x100000009(a0)
{
	let r0, r1, accu;
	r0 = ctx1
	s3_2 = a0
	if (s1_13)
	{
		accu = clearInterval(s1_13)
	}
	r1 = setInterval(func_unknown_0x100000008, 30000)
	accu = s1_13
	s1_13 = r1
	return undefined
}

function func_unknown_0x100000008()
{
	return func_tick_0x100000007(s3_2)
}

function func_tick_0x100000007(a0)
{
	let r0, r1, r2, r3, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r20, r21, r23, accu;
	r0 = func_0x1d8d_0x100000004
	r1 = s1_2["get"]()
	if (!r1["settings"])
	{
	}
	r2 = {}
	r10 = r2["idleStopEnabled"]
	if (r10 === !Boolean([]))
	{
		return undefined
	}
	r10 = Math["max"]
	r14 = r2["idleStopMinutes"]
	accu = Number(r2["idleStopMinutes"])
	if (!Number(r2["idleStopMinutes"]))
	{
		accu = 2
	}
	r13 = accu
	r3 = ((r10(1, r13) * 60) * 1000)
	r12 = r1["channels"]
	r11 = GetIterator(r12)
	r10 = r11["next"]
	accu = false
	r12 = false
	r15 = ctx1
	try
	{
		while (true)
		{
			r12 = true
			r16 = r10()
			if (r16["done"]) break
			r12 = false
			r6 = r16["value"]
			accu = func_isIdleManaged_0x100000002(r16["value"])
			r16 = r16["value"]
			if (!accu)
			{
				continue
			}
			r17 = s1_3[r0(192)]
			if (!r17(r6["id"]))
			{
				continue
			}
			r17 = s1_6[r0(171)]
			accu = r17(r6["id"])
			r17 = s1_3[r0(183)]
			accu = r17(r6["id"])
			r7 = r17(r6["id"])
			if (r17(r6["id"]))
			{
				accu = r7[r0(181)]
			}
			if (!accu)
			{
				accu = 0
			}
			r8 = accu
			r17 = Date[r0(197)]
			r17 = r17()
			r17 = (r17 - r8)
			if (r17 < r3)
			{
				continue
			}
			r9 = a0(r6["id"])
			accu = r9 > 0
			if (r9 > 0)
			{
				continue
			}
			r17 = ctx1
			try
			{
				r18 = s1_3[r0(178)]
				accu = r18(r6["id"])
				r18 = s1_5[r0(188)]
				r21 = Date["now"]()
				accu = r18(r6["id"], r21)
				r18 = s1_6[r0(171)]
				accu = r18(r6["id"])
				r18 = console[r0(175)]
				r20 = ("[idle] \\x625\\x64a\\x642\\x627\\x641 \\x627\\x644\\x642\\x646\\x627\\x629 \"" + r6[r0(180)])
				r20 = (r20 + r0(184))
				r21 = Math[r0(200)]
				r23 = (r3 / 60000)
				r20 = (r20 + r21(r23))
				r20 = (r20 + r0(199))
				accu = r18(r20)
				continue
			}
			catch {}
			r18 = accu
			accu = null
			accu = ctx4
			r18 = ctx1
		}
		accu = -1
		r14 = -1
		r13 = -1
	}
	catch
	{
		r14 = accu
		r13 = 0
	}
	if (!r12)
	{
		r17 = ctx1
		try
		{
			if (!r11["return"] == undefined)
			{
				accu = r11["return"]()
			}
			catch {}
		}
	}
	accu = null
	if (r13 === 0)
	{
		accu = r14
	}
	return undefined
}

function func_onViewerHeartbeat_0x100000006(a0)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r5 = ctx1
	s5_2 = a0
	r6 = s1_2["get"]
	r1 = r6()
	r7 = r1["channels"]
	r6 = r7["find"]
	r2 = r6(func_unknown_0x100000005)
	if (!r6(func_unknown_0x100000005))
		|| (!func_isIdleManaged_0x100000002(r2))
	{
		return undefined
	}
	r6 = s1_3["isRunning"]
	if (r6(s5_2))
	{
		r6 = s1_6["delete"]
		accu = r6(s5_2)
		return undefined
	}
	r6 = s1_5["get"]
	accu = r6(s5_2)
	if (!r6(s5_2))
	{
		accu = 0
	}
	r3 = accu
	r6 = Date["now"]
	r6 = r6()
	r6 = (r6 - r3)
	if (r6 < 5000)
	{
		return undefined
	}
	r6 = s1_6["get"]
	accu = r6(s5_2)
	if (!r6(s5_2))
	{
		accu = 0
	}
	r4 = accu
	r6 = Date["now"]
	r6 = r6()
	r6 = (r6 - r4)
	if (r6 < 12000)
	{
		return undefined
	}
	r6 = s1_6["set"]
	r9 = Date["now"]()
	accu = r6(s5_2, r9)
	r6 = ctx5
	try
	{
		r7 = s1_3["start"]
		accu = r7(s5_2)
	}
	catch
	{
		r7 = accu
		accu = null
		accu = ctx6
		r7 = ctx5
		r8 = s1_6["delete"]
		accu = r8(s5_2)
	}
	return undefined
}

function func_unknown_0x100000005(a0)
{
	return a0["id"] === s5_2
}

function func_0x1d8d_0x100000004(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 169)
	r0 = s1_9()
	r1 = r0[a0]
	if (s1_11["bNKbAu"] == undefined)
	{
		s1_11["LBPHen"] = func_0x368644_0x100000003
		s1_11["ullxGi"] = {}
		s1_11["bNKbAu"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_11["ullxGi"][r4])
	{
		r1 = s1_11["LBPHen"](r1)
		s1_11["ullxGi"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_11["ullxGi"][r4]
	}
	return r1
}

function func_0x368644_0x100000003(a0)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r11, r12, r14, accu;
	r0 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/="
	r1 = ""
	r2 = ""
	r5 = 0
	r6 = undefined
	r7 = undefined
	r8 = 0
	while (true)
	{
		r11 = Number(r8)
		r8 = (Number(r8) + 1)
		r7 = a0["charAt"](r11)
		if (!a0["charAt"](r11)) break
		accu = r0["indexOf"](r7)
		r7 = r0["indexOf"](r7)
		if (~(accu))
		{
			accu = (r5 % 4)
			if ((r5 % 4))
			{
				r9 = (r6 * 64)
				accu = (r9 + r7)
			}
			else
			{
				accu = r7
			}
			r6 = accu
			r9 = Number(r5)
			r5 = (Number(r5) + 1)
			if ((r9 % 4))
			{
				r12 = ((r6 >> ((r5 * -2) & 6)) & 255)
				r9 = r1
				r1 = (r1 + String["fromCharCode"](r12))
				continue
			}
		}
		accu = 0
	}
	r3 = 0
	r4 = r1["length"]
	while (true)
	{
		if (!r3 < r4) break
		r14 = r1["charCodeAt"](r3)
		r12 = ("00" + r14["toString"](16))
		r9 = r2
		r2 = (r2 + ("%" + r12["slice"](-2)))
		r3 = (r3 + 1)
	}
	return decodeURIComponent(r2)
}

function func_isIdleManaged_0x100000002(a0)
{
	let r1, r4;
	if (!a0)
	r1 = a0["enabled"]
		|| (r1 === !Boolean([]))
	{
		return !Boolean([])
	}
	if (a0["manualStopped"])
	{
		return !Boolean([])
	}
	if (a0["alwaysOn"])
	{
		return !Boolean([])
	}
	r1 = s1_4["shouldRunNow"]
	r4 = Date(func_0x1d8d_0x100000004)
	return null == r1(a0["id"], r4)
}

function func_0x12bb_0x100000001()
{
	let r0;
	r0 = ctx1
	s7_2 = ["C3rHDhvZt2y", "iIdIGjqG2ytyPYdzHDI02kFzH9IV2yRzHIdzHDMg2laG", "ndK1CMzyCgre", "C2HVDwXKuNvUtM93", "mtjps29QDvO", "C2v0", "mJmXoti1nvLTD1vHEG", "z2v0", "mJG5nZG5ngzyrK9AuW", "AxnsDw5UAw5N", "ywX3yxLZt24", "odG5mta5mxrWEerSsa", "AwrSzvn0B3bfBMfIBgvK", "mZe0mJjZquLZsee", "BM93", "mJq4ota2wKXJBhjA", "inIV2ylzITMc2kK", "CM91BMq", "Bwf4", "ntuXmZi5uK5UrKHP", "C2v0DgLUz3m", "zgvSzxrL", "ntiZnJGWvuT6tfj3", "mZjerfjXzgC", "y2HHBM5LBhm", "Bg9N", "mZa4yMjcsLPt", "zw5HyMXLza", "C3rVCa", "C3rHCNq", "BMfTzq", "C3rHCNrLzef0", "zMLUza"]
	s1_9 = func_0x12bb_0x100000000
	return s1_9()
}

function func_0x12bb_0x100000000()
{
	return s7_2
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r2, r4, accu;
	r2 = ctx0
	s1_9 = func_0x12bb_0x100000001
	s1_10 = func_isIdleManaged_0x100000002
	s1_11 = func_0x1d8d_0x100000004
	s1_12 = func_tick_0x100000007
	accu = func_unknown_0x10000000a(s1_9, 734479)
	s1_2 = require("./store")
	s1_3 = require("./ffmpeg")
	s1_4 = require("./scheduler")
	s1_5 = Map(func_onViewerHeartbeat_0x100000006)
	s1_6 = Map(func_onViewerHeartbeat_0x100000006)
	s1_7 = 5000
	s1_8 = 12000
	r4 = {"startLoop": null, "tick": null, "onViewerHeartbeat": null, "isIdleManaged": null}
	r4["startLoop"] = func_startLoop_0x100000009
	r4["tick"] = func_tick_0x100000007
	r4["onViewerHeartbeat"] = func_onViewerHeartbeat_0x100000006
	r4["isIdleManaged"] = func_isIdleManaged_0x100000002
	module["exports"] = r4
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
