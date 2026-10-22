// Recovered module: src/singleton.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (3500 source
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
//   RegExp    a recovered source string and the flags the cache compiled: `new RegExp(src, "gi")`

// ----------------------------------------------------------------------------------------
// Context slots shared by this module's functions (V8's Scope[n][m]).
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8;
let s3_2;
let s6_2;
let s7_2;
let ctx0, ctx1, ctx2, ctx4, ctx5, ctx6, ctx7;

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x100000008(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x5b20_0x100000007
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(248)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(241)
			r4 = (r4 * (parseInt(r6) / 2))
			r6 = r0(242)
			r5 = ((-parseInt(r6)) / 3)
			r7 = r0(245)
			r4 = (r4 + (r5 * (parseInt(r7) / 4)))
			r6 = r0(239)
			r4 = (r4 + (parseInt(r6) / 5))
			r6 = r0(253)
			r4 = (r4 + (parseInt(r6) / 6))
			r6 = r0(247)
			r4 = (r4 + ((-parseInt(r6)) / 7))
			r6 = r0(244)
			r5 = ((-parseInt(r6)) / 8)
			r7 = r0(246)
			r4 = (r4 + (r5 * (parseInt(r7) / 9)))
			r6 = r0(255)
			r5 = ((-parseInt(r6)) / 10)
			r7 = r0(234)
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

function func_0x5b20_0x100000007(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 233)
	r0 = s1_7()
	r1 = r0[a0]
	if (s1_8["VxCjCn"] == undefined)
	{
		s1_8["hjkfbl"] = func_0x55cb16_0x100000006
		s1_8["MqyCJb"] = {}
		s1_8["VxCjCn"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_8["MqyCJb"][r4])
	{
		r1 = s1_8["hjkfbl"](r1)
		s1_8["MqyCJb"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_8["MqyCJb"][r4]
	}
	return r1
}

function func_0x55cb16_0x100000006(a0)
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

function func_0x1aea_0x100000005()
{
	let r0;
	r0 = ctx1
	s3_2 = ["mJK1nda2mfnUD01WAq", "CMvHzezPBgvtEw5J", "zxHWB3j0CW", "CNvU", "nZD2ruLzuhK", "Dw5SAw5Ru3LUyW", "BwvZC2fNzq", "rvbfuK0", "w3nPBMDSzxrVBL0G2kRyUDIW2zhySDIQinMd2kRyP9IO2kKG2ylzGDMeinIN2ytzHTIZ2k7yQsdyP9Me2yJyP9IT2k/yQtOG", "mtmWoti3mgvQsxztuq", "zxjYB3i", "mZjWuwrsqxu", "nJL3uvj2tvq", "Cgf0Aa", "ntG0CM9hCg9R", "otq2mdbAwfvRBLO", "ndqZmZr1ufHsqxm", "nJC1mdq3mwDTyLj3DG", "mZKYotDmrKTsA1O", "AM9PBG", "y29Kzq", "D3jPDgvgAwXLu3LUyW", "Aw5ZDgfUy2uUBg9JAW", "ntK3mtm4nKHTz0Hvzq", "A2LSBa"]
	s1_7 = func_0x1aea_0x100000004
	return s1_7()
}

function func_0x1aea_0x100000004()
{
	return s3_2
}

function func_release_0x100000003(a0)
{
	let r1, r2, r4, accu;
	accu = func_0x5b20_0x100000007
	r1 = ctx1
	try
	{
		r2 = s1_3["unlinkSync"]
		r4 = func_lockPath_0x100000000(a0)
		accu = r2(r4)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx4
		r2 = ctx1
	}
	return undefined
}

function func_acquire_0x100000002(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, accu;
	accu = func_lockPath_0x100000000(a0)
	r1 = func_lockPath_0x100000000(a0)
	r3 = ctx1
	try
	{
		r5 = s1_3["readFileSync"]
		r5 = r5(r1, "utf8")
		r2 = parseInt(r5, 10)
		accu = func_isPidAlive_0x100000001(r2)
		if (func_isPidAlive_0x100000001(r2))
		{
			return !Boolean([])
		}
	}
	catch
	{
		r4 = accu
		accu = null
		accu = ctx5
		r4 = ctx1
	}
	r3 = ctx1
	try
	{
		r6 = s1_4["dirname"](r1)
		r7 = {"recursive": null}
		r7["recursive"] = !(!Boolean([]))
		accu = s1_3["mkdirSync"](r6, r7)
		r4 = s1_3["writeFileSync"]
		r7 = String(a1)
		accu = r4(r1, r7)
	}
	catch
	{
		r4 = accu
		accu = null
		accu = ctx6
		r4 = ctx1
		r5 = console["error"]
		r7 = "[singleton] تعذّرت كتابة قفل النسخة الواحدة: "
		r7 = (r7 + s6_2["message"])
		accu = r5(r7)
	}
	return !(!Boolean([]))
}

function func_isPidAlive_0x100000001(a0)
{
	let r1, r2, r3, accu;
	if (((!Number["isInteger"](a0)) || (accu = a0 <= 0, (a0 <= 0))))
	{
		accu = !Boolean([])
		return !Boolean([])
	}
	r1 = ctx1
	try
	{
		r2 = process["kill"]
		accu = r2(a0, 0)
		accu = !(!Boolean([]))
		return !(!Boolean([]))
	}
	catch {}
	r2 = accu
	accu = null
	accu = ctx7
	r2 = ctx1
	accu = s7_2
	if (s7_2)
	{
		r3 = s7_2["code"]
		accu = r3 === "EPERM"
	}
	return !(!Boolean(accu))
}

function func_lockPath_0x100000000(a0)
{
	let r1, r3, r4, r5;
	r1 = s1_4["join"]
	r4 = "run"
	r5 = "instance.lock"
	r3 = a0
	return r1(r3, r4, r5)
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r2, r4, r5, accu;
	r2 = ctx0
	s1_5 = func_lockPath_0x100000000
	s1_6 = func_isPidAlive_0x100000001
	s1_7 = func_0x1aea_0x100000005
	s1_8 = func_0x5b20_0x100000007
	s1_2 = func_0x5b20_0x100000007
	accu = func_unknown_0x100000008(s1_7, 828274)
	s1_3 = require("fs")
	r4 = "path"
	s1_4 = require(r4)
	r4 = "exports"
	r5 = {"acquire": null, "release": null, "isPidAlive": null, "lockPath": null}
	r5["acquire"] = func_acquire_0x100000002
	r5["release"] = func_release_0x100000003
	r5["isPidAlive"] = func_isPidAlive_0x100000001
	r5["lockPath"] = func_lockPath_0x100000000
	module[r4] = r5
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
