// Recovered module: src/worldcup.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (8657 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14;
let s3_2;
let s5_2;
let s8_2;
let s9_2, s9_3, s9_4;
let s11_2;
let s13_2;
let s16_2;
let s17_2, s17_3;
let s18_2, s18_3, s18_4, s18_5, s18_6;
let s20_2, s20_3;
let s21_2;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx5, ctx6, ctx7, ctx8, ctx9, ctx10, ctx11, ctx12, ctx13, ctx14, ctx15, ctx16, ctx17, ctx18, ctx19;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x100000013(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x1a86_0x100000003
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(123)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(175)
			r4 = (r4 * (parseInt(r6) / 2))
			r6 = r0(120)
			r5 = (parseInt(r6) / 3)
			r7 = r0(154)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 4)))
			r6 = r0(148)
			r4 = (r4 + ((-parseInt(r6)) / 5))
			r6 = r0(161)
			r5 = (parseInt(r6) / 6)
			r7 = r0(140)
			r4 = (r4 + (r5 * (parseInt(r7) / 7)))
			r6 = r0(130)
			r5 = (parseInt(r6) / 8)
			r7 = r0(165)
			r4 = (r4 + (r5 * (parseInt(r7) / 9)))
			r6 = r0(125)
			r5 = ((-parseInt(r6)) / 10)
			r7 = r0(169)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 11)))
			r6 = r0(153)
			r2 = (r4 + (parseInt(r6) / 12))
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

async function func_getSportsNews_0x100000012(a0)
{
	let r1, r2, r3, r5, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, accu;
	r9 = ctx1
	r10 = __closure
	r11 = this
	accu = null
	r10 = ctx3
	try
	{
		s3_2 = func_0x1a86_0x100000003
		r14 = 166
		r11 = s1_8["get"]
		r11 = r11()
		r1 = r11["settings"]
		accu = r1["newsCacheMinutes"]
		if (!r1["newsCacheMinutes"])
		{
			accu = 30
		}
		accu = ((accu * 60) * 1000)
		r2 = ((accu * 60) * 1000)
		r11 = ctx3
		try
		{
			accu = a0
			if (!a0)
			{
				r12 = s1_4["existsSync"]
				r14 = s1_10
				if (r12(s1_10))
				{
					r14 = s1_4["readFileSync"]
					r17 = "utf8"
					r14 = r14(s1_10, r17)
					r8 = JSON["parse"](r14)
					r12 = Date["now"]
					r12 = r12()
					r12 = (r12 - r8["at"])
					if (r12 < r2)
					{
						r12 = {"cached": null, "items": null}
						r12["cached"] = !(!Boolean([]))
						r12["items"] = r8["items"]
						r13 = r12
						r12 = ctx3
						return r13
					}
				}
			}
		}
		catch
		{
			r12 = accu
			accu = null
			accu = ctx4
			r12 = ctx3
		}
		r3 = []
		accu = r1["sportsNewsSources"]
		if (!r1["sportsNewsSources"])
		{
			accu = []
		}
		r13 = accu
		r12 = GetIterator(r13)
		r11 = r12["next"]
		accu = false
		r13 = false
		r16 = ctx3
		try
		{
			while (true)
			{
				r13 = true
				r17 = r11()
				if (r17["done"]) break
				r13 = false
				r18 = ctx3
				accu = r17["value"]
				s5_2 = r17["value"]
				r17 = r17["value"]
				r19 = ctx5
				try
				{
					r21 = func_fetchText_0x100000009(s5_2)
					r20 = ctx3
					r20 = await r21
					r21 = _GeneratorGetResumeMode(ctx3)
					if (!r21 === 0)
					{
						accu = r20
					}
					r7 = r20
					r20 = r3["push"]
					r23 = func_parseFeed_0x10000000b(r7)
					r22 = r23["map"]
					r22 = r22(func_unknown_0x100000011)
					r21 = r3
					accu = r20(...r21, r22)
					continue
				}
				catch {}
				r20 = accu
				accu = null
				accu = ctx6
				r20 = ctx5
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
			r19 = ctx3
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
		accu = r3["length"]
		if (r3["length"])
		{
			r11 = s1_4["mkdirSync"]
			r13 = s1_5["dirname"](s1_10)
			r14 = {"recursive": null}
			r14["recursive"] = !(!Boolean([]))
			accu = r11(r13, r14)
			r14 = JSON["stringify"]
			r16 = {"at": null, "items": null}
			r17 = Date["now"]
			r16["at"] = r17()
			r16["items"] = r3
			r14 = r14(r16)
			accu = s1_4["writeFileSync"](s1_10, r14)
			r11 = {"cached": null, "items": null}
			r11["cached"] = !Boolean([])
			r11["items"] = r3
			r12 = r11
			r11 = ctx3
			accu = r12
			return r12
		}
		r11 = ctx3
		try
		{
			r12 = s1_4["existsSync"]
			accu = r12(s1_10)
			if (r12(s1_10))
			{
				r12 = JSON["parse"]
				r14 = s1_4["readFileSync"]
				r17 = "utf8"
				r14 = r14(s1_10, r17)
				r5 = r12(r14)
				r12 = {"cached": null, "stale": null, "items": null}
				r12["cached"] = !(!Boolean([]))
				r12["stale"] = !(!Boolean([]))
				r12["items"] = r5["items"]
				r13 = r12
				r12 = ctx3
				return r13
			}
		}
		catch
		{
			r12 = accu
			accu = null
			accu = ctx7
			r12 = ctx3
		}
		r11 = {"cached": null, "items": []}
		r11["cached"] = !Boolean([])
		r12 = r11
		r11 = ctx3
		accu = r12
		return r12
	}
	catch {}
	r11 = accu
	accu = null
	accu = ctx8
	r11 = ctx3
	r12 = ctx3
	return s8_2
}

function func_unknown_0x100000011(a0)
{
	let r3, r4, accu;
	r3 = {"source": null}
	accu = URL
	r4 = URL(s5_2)
	r3["source"] = r4["hostname"]
	return Object["assign"](a0, r3)
}

function func_todayMatches_0x100000010()
{
	let r0, r1, r2, r3, r4, accu;
	r1 = ctx1
	s9_2 = func_0x1a86_0x100000003
	r2 = s1_8["get"]
	r0 = r2()
	r2 = Intl["DateTimeFormat"]
	r4 = {"timeZone": null, "year": null, "month": null, "day": null}
	r4["timeZone"] = "Asia/Riyadh"
	r4["year"] = "numeric"
	r4["month"] = "2-digit"
	r4["day"] = "2-digit"
	accu = r2
	s9_3 = r2("en-CA", r4)
	r2 = s9_3["format"]
	r4 = Date(r0)
	s9_4 = r2(r4)
	r4 = r0["matches"]
	r3 = r4["filter"]
	r3 = r3(func_unknown_0x10000000e)
	r2 = r3["sort"]
	return r2(func_unknown_0x10000000f)
}

function func_unknown_0x10000000f(a0, a1)
{
	let r0, r1, accu;
	r1 = a0["kickoffUtc"]
	accu = Date
	r0 = Date(r1)
	accu = Date
	return (r0 - Date(a1["kickoffUtc"]))
}

function func_unknown_0x10000000e(a0)
{
	let r0, r1, r3, accu;
	r0 = ctx9
	try
	{
		accu = Date
		r3 = Date(a0["kickoffUtc"])
		r1 = s9_3["format"](r3)
		return r1 === s9_4
	}
	catch {}
	r1 = accu
	accu = null
	accu = ctx10
	r1 = ctx9
	return !Boolean([])
}

async function func_getNews_0x10000000d(a0)
{
	let r1, r2, r3, r5, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, accu;
	r9 = ctx1
	r10 = __closure
	r11 = this
	accu = null
	r10 = ctx11
	try
	{
		s11_2 = func_0x1a86_0x100000003
		r11 = s1_8["get"]()
		r1 = r11["settings"]
		accu = r1["newsCacheMinutes"]
		if (!r1["newsCacheMinutes"])
		{
			accu = 30
		}
		accu = ((accu * 60) * 1000)
		r2 = ((accu * 60) * 1000)
		r11 = ctx11
		try
		{
			accu = a0
			if (!a0)
			{
				r12 = s1_4["existsSync"]
				if (r12(s1_9))
				{
					r14 = s1_4["readFileSync"](s1_9, "utf8")
					r8 = JSON["parse"](r14)
					r12 = Date["now"]()
					r12 = (r12 - r8["at"])
					if (r12 < r2)
					{
						r12 = {"cached": null, "items": null}
						r12["cached"] = !(!Boolean([]))
						r12["items"] = r8["items"]
						r13 = r12
						r12 = ctx11
						return r13
					}
				}
			}
		}
		catch
		{
			r12 = accu
			accu = null
			accu = ctx12
			r12 = ctx11
		}
		r3 = []
		accu = r1["newsSources"]
		if (!r1["newsSources"])
		{
			accu = []
		}
		r13 = accu
		r12 = GetIterator(r13)
		r11 = r12["next"]
		accu = false
		r13 = false
		r16 = ctx11
		try
		{
			while (true)
			{
				r13 = true
				r17 = r11()
				if (r17["done"]) break
				r13 = false
				r18 = ctx11
				accu = r17["value"]
				s13_2 = r17["value"]
				r17 = r17["value"]
				r19 = ctx13
				try
				{
					r21 = func_fetchText_0x100000009(s13_2)
					r20 = ctx11
					r20 = await r21
					r21 = _GeneratorGetResumeMode(ctx11)
					if (!r21 === 0)
					{
						accu = r20
					}
					r7 = r20
					r20 = r3["push"]
					r23 = func_parseFeed_0x10000000b(r7)
					r22 = r23["map"]
					r22 = r22(func_unknown_0x10000000c)
					r21 = r3
					accu = r20(...r21, r22)
					continue
				}
				catch {}
				r20 = accu
				accu = null
				accu = ctx14
				r20 = ctx13
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
			r19 = ctx11
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
		accu = r3["length"]
		if (r3["length"])
		{
			r11 = s1_4["mkdirSync"]
			r13 = s1_5["dirname"](s1_9)
			r14 = {"recursive": null}
			r14["recursive"] = !(!Boolean([]))
			accu = r11(r13, r14)
			r11 = s1_4["writeFileSync"]
			r14 = JSON["stringify"]
			r16 = {"at": null, "items": null}
			r16["at"] = Date["now"]()
			r16["items"] = r3
			r14 = r14(r16)
			accu = r11(s1_9, r14)
			r11 = {"cached": null, "items": null}
			r11["cached"] = !Boolean([])
			r11["items"] = r3
			r12 = r11
			r11 = ctx11
			accu = r12
			return r12
		}
		r11 = ctx11
		try
		{
			r12 = s1_4["existsSync"]
			accu = r12(s1_9)
			if (r12(s1_9))
			{
				r12 = JSON["parse"]
				r14 = s1_4["readFileSync"]
				r17 = "utf8"
				r14 = r14(s1_9, r17)
				r5 = r12(r14)
				r12 = {"cached": null, "stale": null, "items": null}
				r12["cached"] = !(!Boolean([]))
				r12["stale"] = !(!Boolean([]))
				r12["items"] = r5["items"]
				r13 = r12
				r12 = ctx11
				return r13
			}
		}
		catch
		{
			r12 = accu
			accu = null
			accu = ctx15
			r12 = ctx11
		}
		r11 = {"cached": null, "items": []}
		r11["cached"] = !Boolean([])
		r12 = r11
		r11 = ctx11
		accu = r12
		return r12
	}
	catch {}
	r11 = accu
	accu = null
	accu = ctx16
	r11 = ctx11
	r12 = ctx11
	return s16_2
}

function func_unknown_0x10000000c(a0)
{
	let r0, r3, r4, accu;
	r0 = Object["assign"]
	r3 = {"source": null}
	accu = URL
	r4 = URL(s13_2)
	r3["source"] = r4["hostname"]
	return r0(a0, r3)
}

function func_parseFeed_0x10000000b(a0)
{
	let r0, r1, r2, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, accu;
	r0 = func_0x1a86_0x100000003
	r1 = []
	r9 = a0["match"]
	r11 = new RegExp("<item[\\s\\S]*?<\\/item>", "gi")
	accu = r9(r11)
	if (!r9(r11))
	{
		r9 = a0["match"]
		r11 = new RegExp("<entry[\\s\\S]*?<\\/entry>", "gi")
		accu = r9(r11)
		if (!r9(r11))
		{
			accu = []
		}
	}
	r2 = accu
	r9 = r2["slice"]
	r12 = 15
	r11 = r9(0, 15)
	r10 = GetIterator(r11)
	r9 = r10["next"]
	accu = false
	r11 = false
	r14 = ctx1
	try
	{
		while (true)
		{
			r11 = true
			r15 = r9()
			if (r15["done"]) break
			r11 = false
			r5 = r15["value"]
			r17 = r15["value"][r0(117)]
			r19 = new RegExp("<title[^>]*>([\\s\\S]*?)<\\/title>", "i")
			accu = r17(r19)
			r15 = r15["value"]
			if (!r17(r19))
			{
				accu = []
			}
			r17 = accu
			r17 = r17[1]
			r6 = func_decodeEntities_0x10000000a(r17)
			r16 = r5[r0(117)]
			r18 = new RegExp("<link[^>]*href=\"([^\"]+)\\")
			accu = r16(r18)
			if (!r16(r18))
			{
				accu = []
			}
			r16 = accu
			accu = r16[1]
			if (!r16[1])
			{
				r17 = r5[r0(117)]
				r19 = new RegExp("<link[^>]*>([\\s\\S]*?)<\\/link>", "i")
				accu = r17(r19)
				if (!r17(r19))
				{
					accu = []
				}
				r17 = accu
				r17 = r17[1]
				accu = func_decodeEntities_0x10000000a(r17)
			}
			r7 = accu
			r17 = r5[r0(117)]
			r19 = new RegExp("<pubDate>([\\s\\S]*?)<\\/pubDate>", "i")
			accu = r17(r19)
			if (!r17(r19))
			{
				r19 = new RegExp("<updated>([\\s\\S]*?)<\\/updated>", "i")
				accu = r5["match"](r19)
				if (!r5["match"](r19))
				{
					accu = []
				}
			}
			r17 = accu
			r17 = r17[1]
			r8 = func_decodeEntities_0x10000000a(r17)
			if (!r6) continue
			r16 = r1[r0(116)]
			r18 = {"title": null, "link": null, "date": null}
			r18["title"] = r6
			accu = r7
			r17 = r1
			if (!r7)
			{
				accu = ""
			}
			r18["link"] = accu
			if (r8) continue
			r18["date"] = ""
			accu = r16(r18)
		}
		accu = -1
		r13 = -1
		r12 = -1
	}
	catch
	{
		r13 = accu
		r12 = 0
	}
	if (!r11)
	{
		r16 = ctx1
		try
		{
			if (!r10["return"] == undefined)
			{
				accu = r10["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r12 === 0)
	{
		accu = r13
	}
	return r1
}

function func_decodeEntities_0x10000000a(a0)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, accu;
	accu = a0
	if (!a0)
	{
		accu = ""
	}
	r10 = accu
	r9 = String(r10)
	r10 = new RegExp("<!\\[CDATA\\[(.*?)\\]\\]>", "gs")
	r8 = r9["replace"](r10, "$1")
	r7 = r8["replace"]
	r9 = new RegExp("&amp;", "g")
	r7 = r7(r9, "&")
	r8 = new RegExp("&lt;", "g")
	r6 = r7["replace"](r8, "<")
	r5 = r6["replace"]
	r7 = new RegExp("&gt;", "g")
	r5 = r5(r7, ">")
	r4 = r5["replace"]
	r6 = new RegExp("&quot;", "g")
	r4 = r4(r6, "\"")
	r3 = r4["replace"]
	r5 = new RegExp("&#39;", "g")
	r3 = r3(r5, "'")
	r2 = r3["replace"]
	r4 = new RegExp("<[^>]+>", "g")
	r2 = r2(r4, "")
	r1 = r2["trim"]
	return r1()
}

function func_fetchText_0x100000009(a0, a1)
{
	let r0, accu;
	r0 = ctx1
	s17_3 = a0
	s17_2 = a1
	accu = Promise
	return Promise(func_unknown_0x100000008)
}

function func_unknown_0x100000008(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, accu;
	r1 = ctx17
	s18_3 = a0
	s18_2 = a1
	s18_4 = func_0x1a86_0x100000003
	accu = undefined
	r2 = ctx18
	try
	{
		accu = URL
		accu = URL(s17_3)
		s18_5 = URL(s17_3)
	}
	catch
	{
		r3 = accu
		accu = null
		accu = ctx19
		r3 = ctx18
		r6 = "bad url"
		accu = Error
		r5 = Error(r6)
		return s18_2(r5)
	}
	accu = s18_5["protocol"] === "https:"
	if (s18_5["protocol"] === "https:")
	{
		accu = s1_7
	}
	else
	{
		accu = s1_6
	}
	r0 = accu
	r5 = {"timeout": 15000, "headers": {"User-Agent": "AmaanLive/1.0"}}
	r3 = r0
	s18_6 = r0["get"](s18_5, r5, func_unknown_0x100000006)
	r4 = "timeout"
	accu = s18_6["on"](r4, func_unknown_0x100000007)
	r4 = "error"
	accu = s18_6["on"](r4, s18_2)
	return undefined
}

function func_unknown_0x100000007()
{
	let r1, r2, r3, accu;
	r1 = s18_6["destroy"]
	accu = r1()
	r3 = "timeout"
	accu = Error
	r2 = Error(r3)
	accu = s18_2(r2)
	return undefined
}

function func_unknown_0x100000006(a0)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r0 = ctx18
	s20_2 = func_0x1a86_0x100000003
	r2 = [301, 302, 307, 308]
	r1 = r2["includes"]
	r3 = a0["statusCode"]
	if (r1(r3))
	{
		r1 = a0["headers"]
		if (r1["location"])
		{
			accu = s17_2
			if (!s17_2)
			{
				accu = 0
			}
			r1 = accu
			if (r1 < 3)
			{
				accu = a0["resume"]()
				r5 = a0["headers"]
				r5 = r5["location"]
				accu = URL
				r4 = URL(r5, s18_5)
				r3 = r4["toString"]
				r3 = r3()
				accu = s17_2
				if (!s17_2)
				{
					accu = 0
				}
				r4 = (accu + 1)
				r2 = func_fetchText_0x100000009(r3, r4)
				return s18_3(r2)
			}
		}
	}
	r1 = a0["statusCode"]
	if (!r1 === 200)
	{
		accu = a0["resume"]()
		r3 = "HTTP "
		r3 = (r3 + a0["statusCode"])
		accu = Error
		r2 = Error(r3)
		return s18_2(r2)
	}
	s20_3 = ""
	r3 = "data"
	accu = a0["on"](r3, func_unknown_0x100000004)
	r3 = "end"
	accu = a0["on"](r3, func_unknown_0x100000005)
	return undefined
}

function func_unknown_0x100000005()
{
	return s18_3(s20_3)
}

function func_unknown_0x100000004(a0)
{
	let r1, accu;
	accu = s20_3
	s20_3 = (s20_3 + a0)
	r1 = s20_3["length"]
	if (r1 > 5000000)
	{
		r1 = s18_6["destroy"]
		accu = r1()
	}
	return undefined
}

function func_0x1a86_0x100000003(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 115)
	r0 = s1_3()
	r1 = r0[a0]
	if (s1_11["hyRJKS"] == undefined)
	{
		s1_11["QPtEQF"] = func_0x26446b_0x100000002
		s1_11["tBvKzC"] = {}
		s1_11["hyRJKS"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_11["tBvKzC"][r4])
	{
		r1 = s1_11["QPtEQF"](r1)
		s1_11["tBvKzC"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_11["tBvKzC"][r4]
	}
	return r1
}

function func_0x26446b_0x100000002(a0)
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

function func_0x40f6_0x100000001()
{
	let r0;
	r0 = ctx1
	s21_2 = ["yMfKihvYBa", "BMv3C1nVDxjJzxm", "nta4ntaXAwzdtxfs", "mI1KAwDPDa", "zxjYB3i", "C3rHDhvZq29Kzq", "zgf0yq", "BgvUz3rO", "Bg9JyxrPB24", "BwTKAxjtEw5J", "mtG0nJu5me9iv0X6tW", "C3bVCNrZlw5LD3mUANnVBG", "D3jPDgvgAwXLu3LUyW", "A2LJA29MzLv0yW", "zgvZDhjVEq", "ntiYmJuWohPYs0XSta", "ng5vqu5yEG", "C2v0DgLUz3m", "zM9YBwf0", "y2fJAgu", "C3rYAw5NAwz5", "BNvTzxjPyW", "yxnZAwDU", "nMHlCMP6tW", "CMvWBgfJzq", "Aw5JBhvKzxm", "DhjPBq", "mZy5ndqXuxHmweLt", "z2v0", "Ahr0Ca", "AxrLBxm", "odHKrMrjtK8", "Dg9tDhjPBMC", "C2XPy2u", "AM9PBG", "sfruuca", "C3bVCNrZtMv3C1nVDxjJzxm", "mte0vKvhzgPk", "BM93", "Bwf0y2HLCW", "DxrMoa", "zMLSDgvY", "zw5K", "ChvZAa", "Bwf0y2G", "CgfYC2u", "uK9pva", "nduZndyYEvLLtKLO", "zxHPC3rZu3LUyW", "BwfW", "ndGXngXXq2vWsW", "BMv3C0nHy2HLtwLUDxrLCW", "mtm3mtqWCxj6v0PO", "DgLTzw91Da", "D29YBgrJDxaTBMv3CY5QC29U", "Cgf0Aa", "zxHWB3j0CW", "nZjtELzND08", "rgf0zvrPBwvgB3jTyxq", "Ag9ZDg5HBwu", "AgvHzgvYCW", "CMvHzezPBgvtEw5J", "C29YDa", "Ahr0Chm6", "qxnPys9sAxLHzgG"]
	s1_3 = func_0x40f6_0x100000000
	return s1_3()
}

function func_0x40f6_0x100000000()
{
	return s21_2
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r3, r4, r5, r6, r7, r8, accu;
	r3 = ctx0
	s1_3 = func_0x40f6_0x100000001
	s1_11 = func_0x1a86_0x100000003
	s1_12 = func_fetchText_0x100000009
	s1_13 = func_decodeEntities_0x10000000a
	s1_14 = func_parseFeed_0x10000000b
	s1_2 = func_0x1a86_0x100000003
	accu = func_unknown_0x100000013(s1_3, 192135)
	s1_4 = require("fs")
	r5 = "path"
	s1_5 = require(r5)
	r5 = "http"
	s1_6 = require(r5)
	s1_7 = require("https")
	s1_8 = require("./store")
	r4 = s1_5["join"]
	r6 = s1_8["ROOT"]
	r7 = "cache"
	r8 = "worldcup-news.json"
	s1_9 = r4(r6, r7, r8)
	r4 = s1_5["join"]
	r6 = s1_8["ROOT"]
	r7 = "cache"
	r8 = "sports-news.json"
	s1_10 = r4(r6, r7, r8)
	r5 = "exports"
	r6 = {"getNews": null, "getSportsNews": null, "todayMatches": null}
	r6["getNews"] = func_getNews_0x10000000d
	r6["getSportsNews"] = func_getSportsNews_0x100000012
	r6["todayMatches"] = func_todayMatches_0x100000010
	module[r5] = r6
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
