// Recovered module: src/store.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (5371 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14, s1_15, s1_16;
let s4_2;
let ctx0, ctx1, ctx2, ctx3;

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x10000000c(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x3dbb_0x100000004
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(211)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(227)
			r4 = (r4 + (parseInt(r6) / 2))
			r6 = r0(208)
			r4 = (r4 + ((-parseInt(r6)) / 3))
			r6 = r0(220)
			r5 = ((-parseInt(r6)) / 4)
			r7 = r0(224)
			r4 = (r4 + (r5 * (parseInt(r7) / 5)))
			r6 = r0(191)
			r4 = (r4 + ((-parseInt(r6)) / 6))
			r6 = r0(204)
			r4 = (r4 + (parseInt(r6) / 7))
			r6 = r0(198)
			r2 = (r4 + (parseInt(r6) / 8))
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

function func_reload_0x10000000b()
{
	let accu;
	accu = s1_10
	return func_load_0x100000005()
}

function func_newId_0x10000000a(a0)
{
	let r1, r3, r4, accu;
	accu = a0
	if (!a0)
	{
		accu = "id"
	}
	r1 = accu
	r1 = (r1 + "_")
	r3 = s1_4["randomBytes"](5)
	r4 = "hex"
	return (r1 + r3["toString"](r4))
}

function func_checkPassword_0x100000009(a0)
{
	let r1, r2, r3, r4, r6, r7, r9, accu;
	r3 = func_get_0x100000007()
	r1 = r3["admin"]
	if (!r3["admin"]["hash"])
	{
		return !Boolean([])
	}
	r4 = s1_4["scryptSync"]
	r6 = String(a0)
	r4 = r4(r6, r3["admin"]["salt"], 32)
	r3 = r4["toString"]
	accu = r3("hex")
	r2 = r3("hex")
	r3 = ctx1
	try
	{
		r4 = s1_4["timingSafeEqual"]
		r6 = Buffer["from"]
		r6 = r6(r2, "hex")
		r7 = Buffer["from"]
		r9 = r1["hash"]
		r7 = r7(r9, "hex")
		accu = r4(r6, r7)
		return r4(r6, r7)
	}
	catch {}
	r4 = accu
	accu = null
	accu = ctx3
	r4 = ctx1
	return !Boolean([])
}

function func_setPassword_0x100000008(a0)
{
	let r1, r2, r3, r4, r5, r6, r7, accu;
	r4 = s1_4["randomBytes"]
	r4 = r4(16)
	r3 = r4["toString"]
	r5 = "hex"
	r1 = r3(r5)
	r4 = s1_4["scryptSync"]
	r6 = String(a0)
	r7 = r1
	r4 = r4(r6, r7, 32)
	r5 = "hex"
	r2 = r4["toString"](r5)
	r3 = s1_10["admin"]
	r3["salt"] = r1
	r3 = s1_10["admin"]
	r4 = "hash"
	r3[r4] = r2
	r3 = s1_10["admin"]
	delete "defaultPassword"[r3]
	accu = func_save_0x100000006()
	return undefined
}

function func_get_0x100000007()
{
	let accu;
	if (!s1_10)
	{
		accu = func_load_0x100000005()
	}
	return s1_10
}

function func_save_0x100000006()
{
	let r1, r2, r4, r5, r6, accu;
	r1 = (s1_6 + ".tmp")
	r2 = s1_3["writeFileSync"]
	r5 = JSON["stringify"]
	r5 = r5(s1_10, null, 2)
	r6 = "utf8"
	r4 = r1
	accu = r2(r4, r5, r6)
	r2 = s1_3["renameSync"]
	accu = r2(r1, s1_6)
	return undefined
}

function func_load_0x100000005()
{
	let r0, r1, r5, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r19, r20, r21, accu;
	r8 = s1_3["existsSync"]
	if (!r8(s1_5))
	{
		r11 = {"recursive": null}
		r11["recursive"] = !(!Boolean([]))
		accu = s1_3["mkdirSync"](s1_5, r11)
	}
	if (!Boolean(s1_3["existsSync"](s1_6)))
	{
		r8 = s1_3["writeFileSync"]
		r13 = func_readDefault_0x100000000()
		r11 = JSON["stringify"](r13, null, 2)
		accu = r8(s1_6, r11)
	}
	r8 = JSON["parse"]
	r10 = s1_3["readFileSync"]
	r13 = "utf8"
	r10 = r10(s1_6, r13)
	r8 = r8(r10)
	accu = s1_10
	s1_10 = r8
	r1 = func_readDefault_0x100000000()
	r9 = "settings"
	r10 = Object["assign"]
	r12 = {}
	r13 = r1["settings"]
	if (!s1_10["settings"])
	{
	}
	r14 = {}
	s1_10[r9] = r10(r12, r13, r14)
	r9 = [0, 0]
	r9[0] = "admin"
	r11 = 201
	r9[1] = "license"
	r9 = GetIterator(r9)
	r8 = r9["next"]
	accu = false
	r10 = false
	r13 = ctx1
	try
	{
		while (true)
		{
			r10 = true
			r14 = r8()
			if (r14["done"]) break
			r10 = false
			r17 = Object[r0(210)]
			r19 = {}
			r20 = r1[r14["value"]]
			accu = s1_10[r14["value"]]
			r16 = r14["value"]
			r14 = r14["value"]
			if (accu) continue
			r21 = {}
			accu = r17(r19, r20, r21)
			s1_10[r16] = r17(r19, r20, r21)
		}
		accu = -1
		r12 = -1
		r11 = -1
	}
	catch
	{
		r12 = accu
		r11 = 0
	}
	if (!r10)
	{
		r15 = ctx1
		try
		{
			if (!r9["return"] == undefined)
			{
				accu = r9["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r11 === 0)
	{
		accu = r12
	}
	r9 = [0, 0, "iptv", 0, "matches"]
	r9[0] = "sources"
	r9[1] = "channels"
	r11 = 207
	r9[3] = "schedules"
	r9 = GetIterator(r9)
	r8 = r9["next"]
	accu = false
	r10 = false
	r13 = ctx1
	try
	{
		while (true)
		{
			r10 = true
			r14 = r8()
			if (r14["done"]) break
			r10 = false
			r5 = r14["value"]
			r15 = Array[r0(202)]
			accu = r15(s1_10[r14["value"]])
			r14 = r14["value"]
			if (accu) continue
			accu = []
			s1_10[r5] = []
		}
		accu = -1
		r12 = -1
		r11 = -1
	}
	catch
	{
		r12 = accu
		r11 = 0
	}
	if (!r10)
	{
		r15 = ctx1
		try
		{
			if (!r9["return"] == undefined)
			{
				accu = r9["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r11 === 0)
	{
		accu = r12
	}
	r8 = s1_10["admin"]
	if (!Boolean(r8["hash"]))
	{
		r9 = s1_10["admin"]
		accu = r9["defaultPassword"]
		if (!r9["defaultPassword"])
		{
			accu = "admin123"
		}
		r9 = accu
		accu = func_setPassword_0x100000008(r9)
	}
	return s1_10
}

function func_0x3dbb_0x100000004(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 189)
	r0 = s1_11()
	r1 = r0[a0]
	if (s1_12["BOdbBI"] == undefined)
	{
		s1_12["YUuDTg"] = func_0x3ebbb5_0x100000003
		s1_12["wSeeCR"] = {}
		s1_12["BOdbBI"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_12["wSeeCR"][r4])
	{
		r1 = s1_12["YUuDTg"](r1)
		s1_12["wSeeCR"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_12["wSeeCR"][r4]
	}
	return r1
}

function func_0x3ebbb5_0x100000003(a0)
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

function func_0x3f0f_0x100000002()
{
	let r0;
	r0 = ctx1
	s4_2 = ["yxnZAwDU", "nteXntKYseP4EhjT", "C2nYExb0u3LUyW", "ywrTAw4", "Dg9tDhjPBMC", "y2HHBM5LBhm", "CMvUyw1Lu3LUyW", "lNrTCa", "y3j5ChrV", "zxHPC3rZu3LUyW", "mta3odC4ohvktKzAqW", "AM9PBG", "CMvHzezPBgvtEw5J", "C3rYAw5NAwz5", "mtvYrfrqExy", "ywrTAw4XmJm", "y29UzMLNlMrLzMf1BhqUANnVBG", "mtC0mJGXnLvdA2nNyG", "C2v0DgLUz3m", "zgvMyxvSDfbHC3n3B3jK", "y29UzMLNlMPZB24", "AgfZAa", "ndG3nteZmMjPDejjua", "DxrMoa", "C25HChnOB3reAxi", "D3jPDgvgAwXLu3LUyW", "C291CMnLCW", "Agv4", "zNjVBq", "mtiWodKZmtjPA2nIz0K", "zgf0yurPCG", "CgfYC2u", "BgLJzw5Zzq", "AxnbCNjHEq", "y29UzMLN", "mZyYmtq2ner3BLvjta", "CMfUzg9TqNL0zxm", "Cgf0Aa", "C2nOzwr1BgvZ", "odyYmdy4tM9JDNDX", "DgLTAw5Nu2fMzuvXDwfS"]
	s1_11 = func_0x3f0f_0x100000001
	return s1_11()
}

function func_0x3f0f_0x100000001()
{
	return s4_2
}

function func_readDefault_0x100000000()
{
	let r1, r2, r4, r7, accu;
	r2 = s1_3["existsSync"]
	accu = r2(s1_8)
	if (r2(s1_8))
	{
		accu = s1_8
	}
	else
	{
		accu = s1_7
	}
	r1 = accu
	r7 = "utf8"
	r4 = s1_3["readFileSync"](r1, r7)
	return JSON["parse"](r4)
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r0, r1, r2, r3, r7, r8, r9, r10, r11, accu;
	r7 = ctx0
	s1_9 = func_readDefault_0x100000000
	s1_11 = func_0x3f0f_0x100000002
	s1_12 = func_0x3dbb_0x100000004
	s1_13 = func_load_0x100000005
	s1_14 = func_save_0x100000006
	s1_15 = func_get_0x100000007
	s1_16 = func_setPassword_0x100000008
	s1_2 = func_0x3dbb_0x100000004
	accu = func_unknown_0x10000000c(s1_11, 479363)
	s1_3 = require("fs")
	r9 = "path"
	r0 = require(r9)
	r9 = "crypto"
	s1_4 = require(r9)
	r1 = require("./platform")
	r2 = r1["snapshotDir"]
	r3 = r1["dataDir"]
	r8 = r0["join"]
	s1_5 = r8(r3, "config")
	r8 = r0["join"]
	r11 = "config.json"
	s1_6 = r8(s1_5, r11)
	r8 = r0["join"]
	r11 = "config"
	r9 = r0
	r10 = r2
	s1_7 = r8(r10, r11, "config.default.json")
	r11 = "config.default.json"
	s1_8 = r0["join"](s1_5, r11)
	r9 = {"ROOT": null, "load": null, "save": null, "get": null, "reload": null, "setPassword": null, "checkPassword": null, "newId": null}
	r9["ROOT"] = r3
	r9["load"] = func_load_0x100000005
	r9["save"] = func_save_0x100000006
	r9["get"] = func_get_0x100000007
	r9["reload"] = func_reload_0x10000000b
	r9["setPassword"] = func_setPassword_0x100000008
	r9["checkPassword"] = func_checkPassword_0x100000009
	r9["newId"] = func_newId_0x10000000a
	module["exports"] = r9
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
