// Recovered module: src/iptv.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (6282 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9;
let s3_2;
let s4_2;
let s5_2;
let s6_2;
let s7_2, s7_3;
let s8_2, s8_3, s8_4, s8_5, s8_6;
let s10_2, s10_3, s10_4;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx7, ctx8, ctx9;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x100000010(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x1d27_0x100000001
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(116)
			r4 = (parseInt(r5) / 1)
			r6 = r0(112)
			r4 = (r4 * ((-parseInt(r6)) / 2))
			r6 = r0(134)
			r4 = (r4 + ((-parseInt(r6)) / 3))
			r6 = r0(113)
			r5 = ((-parseInt(r6)) / 4)
			r7 = r0(143)
			r4 = (r4 + (r5 * (parseInt(r7) / 5)))
			r6 = r0(145)
			r4 = (r4 + (parseInt(r6) / 6))
			r6 = r0(146)
			r5 = ((-parseInt(r6)) / 7)
			r7 = r0(125)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 8)))
			r6 = r0(149)
			r5 = ((-parseInt(r6)) / 9)
			r7 = r0(118)
			r4 = (r4 + (r5 * (parseInt(r7) / 10)))
			r6 = r0(133)
			r2 = (r4 + ((-parseInt(r6)) / 11))
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

function func_importFromText_0x10000000f(a0)
{
	let r1, r3, accu;
	r1 = func_parseM3U_0x100000009(a0)
	if (!r1["length"])
	{
		r3 = "لم يتم العثور على قنوات في الملف"
		accu = Error
		accu = Error(r3)
	}
	return func_addChannels_0x10000000d(r1)
}

async function func_importFromUrl_0x10000000e(a0)
{
	let r0, r2, r3, r4, r5, accu;
	r3 = __closure
	r4 = this
	r0 = accu
	r3 = ctx1
	try
	{
		r5 = func_fetchText_0x100000008(a0)
		r4 = r0
		r4 = await r5
		r5 = _GeneratorGetResumeMode(r0)
		if (!r5 === 0)
		{
			accu = r4
		}
		r2 = r4
		r5 = new RegExp("#EXTM3U", "i")
		if (!r5["test"](r2))
		{
			r4 = func_parseM3U_0x100000009(r2)
			if (!r4["length"])
			{
				r5 = "الملف ليس بصيغة M3U صالحة"
				accu = Error
				accu = Error(r5)
			}
		}
		r5 = func_parseM3U_0x100000009(r2)
		r5 = func_addChannels_0x10000000d(r5)
		r4 = r0
		return r5
	}
	catch {}
	r4 = accu
	accu = null
	accu = ctx3
	r4 = ctx1
	r5 = r0
	return s3_2
}

function func_addChannels_0x10000000d(a0)
{
	let r0, r1, r2, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r19, accu;
	r5 = ctx1
	s4_2 = func_0x1d27_0x100000001
	r0 = s1_5["get"]()
	r1 = 0
	r2 = 0
	r7 = GetIterator(a0)
	r6 = r7["next"]
	accu = false
	r8 = false
	r11 = ctx4
	try
	{
		while (true)
		{
			r8 = true
			r12 = r6()
			if (r12["done"]) break
			r8 = false
			r13 = ctx4
			s5_2 = r12["value"]
			r12 = r12["value"]
			if (((!s5_2["url"]) || ((!s5_2["name"]))))
			{
				r2 = (r2 + 1)
				continue
			}
			r15 = r0["iptv"]
			r14 = r15["some"]
			if (r14(func_unknown_0x10000000c))
			{
				r2 = (r2 + 1)
				continue
			}
			r14 = r0["iptv"]["push"]
			r16 = {"id": null, "name": null, "url": null, "logo": null, "group": null}
			r17 = s1_5["newId"]
			r19 = "iptv"
			r16["id"] = r17(r19)
			r16["name"] = s5_2["name"]
			r16["url"] = s5_2["url"]
			r16["logo"] = s5_2["logo"]
			r16["group"] = s5_2["group"]
			accu = r14(r16)
			accu = (r1 + 1)
			r1 = (r1 + 1)
		}
		accu = -1
		r10 = -1
		r9 = -1
	}
	catch
	{
		r10 = accu
		r9 = 0
	}
	if (!r8)
	{
		r14 = ctx4
		try
		{
			if (!r7["return"] == undefined)
			{
				accu = r7["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r9 === 0)
	{
		accu = r10
	}
	r6 = s1_5["save"]
	accu = r6()
	r6 = {"added": null, "skipped": null, "total": null}
	r6["added"] = r1
	r6["skipped"] = r2
	r7 = r0["iptv"]
	r6["total"] = r7["length"]
	return r6
}

function func_unknown_0x10000000c(a0)
{
	let r0;
	r0 = a0["url"]
	return r0 === s5_2["url"]
}

function func_0x1fd8_0x10000000b()
{
	let r0;
	r0 = ctx1
	s6_2 = ["AgvHzgvYCW", "Bg9JyxrPB24", "zxHWB3j0CW", "z2v0", "mZm1mdvsugnHuvu", "BMfTzq", "nti1nZGWrg1TBMzp", "nZDcA0j6seS", "zxjYB3i", "zgf0yq", "mZm4neDTuLvQCW", "Aw5JBhvKzxm", "Axb0DG", "BMv3swq", "Bg9NBW", "CMvZDw1L", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinMb2yOG2kFzHnMf2ytzGq", "DgLTzw91Da", "C3bSAxq", "mtbuwMDAqwC", "nZjLEvfPvxq", "AM9PBG", "z3jVDxa", "odC2mxnozMfgvW", "sfruuca", "mJm1mhjjsgrWva", "i0vyveLorG", "C3rHCNrZv2L0Aa", "DhjPBq", "Ahr0Chm6", "BgvUz3rO", "zw5K", "ntqYnZKYte9WtuzY", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kRyRDMf2yRzHa", "C2f2zq", "zgvZDhjVEq", "DxjS", "Dg9tDhjPBMC", "C29Tzq", "2lhyP9IO2lCG2lRzITIXinI12k3zITIT", "mtqYnZa5nNfgyMzkyG", "mtK5ntC4ExrItNb1", "C3rHDhvZq29Kzq", "ChvZAa", "2kFzHnMf2ytzGsdzHnMk2lmG2kJyTDMk2lRyQsbnm1uG2lxyP9Me2k3yQq", "2kFzHnMf2ytzGsdzG9IO2yRySsdyRnIV2kFzIW"]
	s1_8 = func_0x1fd8_0x10000000a
	return s1_8()
}

function func_0x1fd8_0x10000000a()
{
	return s6_2
}

function func_parseM3U_0x100000009(a0)
{
	let r0, r1, r2, r3, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, accu;
	r0 = func_0x1d27_0x100000001
	r12 = String(a0)
	r14 = 111
	r11 = r12["split"]
	r13 = new RegExp("\\r?\\n")
	r1 = r11(r13)
	r2 = []
	r3 = null
	r12 = GetIterator(r1)
	r11 = r12["next"]
	accu = false
	r13 = false
	r16 = ctx1
	try
	{
		while (true)
		{
			r13 = true
			r17 = r11()
			if (r17["done"]) break
			r13 = false
			r18 = r17["value"][r0(121)]
			r7 = r18()
			if (!r18())
			{
				continue
			}
			r18 = r7[r0(120)]
			r20 = r0(119)
			if (r18(r20))
			{
				r21 = r7[r0(111)]
				r21 = r21(",")
				r20 = r21["slice"](1)
				r19 = r20[r0(114)]
				accu = r19(",")
				if (!r19(","))
				{
					accu = ""
				}
				r19 = accu
				r18 = r19[r0(121)]
				r8 = r18()
				r20 = new RegExp("tvg-logo=\"([^\"]*)\\")
				accu = r7["match"](r20)
				if (!r7["match"](r20))
				{
					accu = []
				}
				r18 = accu
				accu = r18[1]
				if (!r18[1])
				{
					accu = ""
				}
				r9 = accu
				r20 = new RegExp("group-title=\"([^\"]*)\\")
				accu = r7["match"](r20)
				if (!r7["match"](r20))
				{
					accu = []
				}
				r18 = accu
				accu = r18[1]
				if (!r18[1])
				{
					accu = ""
				}
				r10 = accu
				r18 = {"name": null, "logo": null, "group": null}
				r18["name"] = r8
				r18["logo"] = r9
				r18["group"] = r10
				r3 = r18
				accu = r18
				continue
			}
			r18 = r7[r0(120)]
			if (!!Boolean(r18("#"))) continue
			r18 = r2[r0(136)]
			r20 = {"name": null, "url": null, "logo": null, "group": null}
			accu = r3
			r19 = r2
			if (r3)
			{
				accu = r3[r0(144)]
			}
			if (!accu)
			{
				accu = r7
			}
			r20["name"] = accu
			r20["url"] = r7
			accu = r3
			if (r3)
			{
				accu = r3[r0(153)]
			}
			if (!accu)
			{
				accu = ""
			}
			r20["logo"] = accu
			accu = r3
			if (r3)
			{
				accu = r3["group"]
			}
			if (accu) continue
			r20["group"] = ""
			accu = r18(r20)
			accu = null
			r3 = null
		}
		accu = -1
		r15 = -1
		r14 = -1
	}
	catch
	{
		r15 = accu
		r14 = 0
	}
	if (!r13)
	{
		r18 = ctx1
		try
		{
			if (!r12["return"] == undefined)
			{
				accu = r12["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r14 === 0)
	{
		accu = r15
	}
	return r2
}

function func_fetchText_0x100000008(a0, a1)
{
	let r0, accu;
	r0 = ctx1
	s7_3 = a0
	s7_2 = a1
	accu = Promise
	return Promise(func_unknown_0x100000007)
}

function func_unknown_0x100000007(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, accu;
	r1 = ctx7
	s8_3 = a0
	s8_2 = a1
	s8_4 = func_0x1d27_0x100000001
	accu = undefined
	r2 = ctx8
	try
	{
		accu = URL
		accu = URL(s7_3)
		s8_5 = URL(s7_3)
	}
	catch
	{
		r3 = accu
		accu = null
		accu = ctx9
		r3 = ctx8
		r6 = "رابط غير صحيح"
		accu = Error
		r5 = Error(r6)
		return s8_2(r5)
	}
	accu = s8_5["protocol"] === "https:"
	if (s8_5["protocol"] === "https:")
	{
		accu = s1_4
	}
	else
	{
		accu = s1_3
	}
	r0 = accu
	r2 = r0["get"]
	r5 = {"timeout": 20000}
	r3 = r0
	s8_6 = r2(s8_5, r5, func_unknown_0x100000004)
	r4 = "timeout"
	accu = s8_6["on"](r4, func_unknown_0x100000005)
	r4 = "error"
	accu = s8_6["on"](r4, func_unknown_0x100000006)
	return undefined
}

function func_unknown_0x100000006(a0)
{
	return s8_2(a0)
}

function func_unknown_0x100000005()
{
	let r1, r2, r3, accu;
	r1 = s8_6["destroy"]
	accu = r1()
	r3 = "انتهت مهلة التحميل"
	accu = Error
	r2 = Error(r3)
	accu = s8_2(r2)
	return undefined
}

function func_unknown_0x100000004(a0)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r0 = ctx8
	s10_2 = func_0x1d27_0x100000001
	r2 = [301, 302, 307, 308]
	r1 = r2["includes"]
	if (r1(a0["statusCode"]))
	{
		r1 = a0["headers"]
		if (r1["location"])
		{
			accu = s7_2
			if (!s7_2)
			{
				accu = 0
			}
			r1 = accu
			if (r1 < 3)
			{
				r1 = a0["resume"]
				accu = r1()
				r5 = a0["headers"]["location"]
				accu = URL
				r4 = URL(r5, s8_5)
				r3 = r4["toString"]
				r3 = r3()
				accu = s7_2
				if (!s7_2)
				{
					accu = 0
				}
				r4 = (accu + 1)
				r2 = func_fetchText_0x100000008(r3, r4)
				return s8_3(r2)
			}
		}
	}
	if (!a0["statusCode"] === 200)
	{
		r1 = a0["resume"]
		accu = r1()
		r3 = "HTTP "
		r3 = (r3 + a0["statusCode"])
		accu = Error
		r2 = Error(r3)
		return s8_2(r2)
	}
	s10_3 = ""
	s10_4 = 0
	r3 = "data"
	accu = a0["on"](r3, func_unknown_0x100000002)
	r3 = "end"
	accu = a0["on"](r3, func_unknown_0x100000003)
	return undefined
}

function func_unknown_0x100000003()
{
	return s8_3(s10_3)
}

function func_unknown_0x100000002(a0)
{
	let r1, r2, r3, accu;
	accu = 0
	s10_4 = (0 + a0["length"])
	if (0 > 20971520)
	{
		r1 = s8_6["destroy"]
		accu = r1()
		r3 = "الملف كبير جداً"
		accu = Error
		r2 = Error(r3)
		return s8_2(r2)
	}
	r2 = a0["toString"]
	r2 = (s10_3 + r2("utf8"))
	accu = s10_3
	s10_3 = r2
	return undefined
}

function func_0x1d27_0x100000001(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 111)
	r0 = s1_8()
	r1 = r0[a0]
	if (s1_2["dCUDhF"] == undefined)
	{
		s1_2["YBcXtl"] = func_0x3b08b0_0x100000000
		s1_2["dHVicm"] = {}
		s1_2["dCUDhF"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_2["dHVicm"][r4])
	{
		r1 = s1_2["YBcXtl"](r1)
		s1_2["dHVicm"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_2["dHVicm"][r4]
	}
	return r1
}

function func_0x3b08b0_0x100000000(a0)
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

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r3, r5, r6, accu;
	r3 = ctx0
	s1_2 = func_0x1d27_0x100000001
	s1_6 = func_fetchText_0x100000008
	s1_7 = func_parseM3U_0x100000009
	s1_8 = func_0x1fd8_0x10000000b
	s1_9 = func_addChannels_0x10000000d
	accu = func_unknown_0x100000010(s1_8, 384924)
	s1_3 = require("http")
	s1_4 = require("https")
	s1_5 = require("./store")
	r5 = "exports"
	r6 = {"parseM3U": null, "importFromUrl": null, "importFromText": null, "addChannels": null}
	r6["parseM3U"] = func_parseM3U_0x100000009
	r6["importFromUrl"] = func_importFromUrl_0x10000000e
	r6["importFromText"] = func_importFromText_0x10000000f
	r6["addChannels"] = func_addChannels_0x10000000d
	module[r5] = r6
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
