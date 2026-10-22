// Decompiled from binary src/worldcup.js (V8 10.2.154.4-node.8 code cache, 8657 source chars, 17424 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x100000015()
{
	r0 = func_unknown_0x100000014
	return r0
}
function func_unknown_0x100000014(a0, a1, a2, a3, a4)
{
	r3 = Scope[0]
	Scope[1][3] = func_0x40f6_0x100000001
	Scope[1][11] = func_0x1a86_0x100000003
	Scope[1][12] = func_fetchText_0x100000009
	Scope[1][13] = func_decodeEntities_0x10000000a
	Scope[1][14] = func_parseFeed_0x10000000b
	Scope[1][2] = func_0x1a86_0x100000003
	ACCU = func_unknown_0x100000013(Scope[1][3], 192135)
	Scope[1][4] = a1("fs")
	r5 = "path"
	Scope[1][5] = a1(r5)
	r5 = "http"
	Scope[1][6] = a1(r5)
	Scope[1][7] = a1("https")
	Scope[1][8] = a1("./store")
	r4 = Scope[1][5]["join"]
	r6 = Scope[1][8]["ROOT"]
	r7 = "cache"
	r8 = "worldcup-news.json"
	Scope[1][9] = r4(r6, r7, r8)
	r4 = Scope[1][5]["join"]
	r6 = Scope[1][8]["ROOT"]
	r7 = "cache"
	r8 = "sports-news.json"
	Scope[1][10] = r4(r6, r7, r8)
	r5 = "exports"
	r6 = new {"getNews": null, "getSportsNews": null, "todayMatches": null}
	r6["getNews"] = func_getNews_0x10000000d
	r6["getSportsNews"] = func_getSportsNews_0x100000012
	r6["todayMatches"] = func_todayMatches_0x100000010
	a2[r5] = r6
	return undefined
}
function func_unknown_0x100000013(a0, a1)
{
	r0 = func_0x1a86_0x100000003
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(123)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(175)
			r4 = (r4 * (parseInt(r6) \ 2))
			r6 = r0(120)
			r5 = (parseInt(r6) \ 3)
			r7 = r0(154)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 4)))
			r6 = r0(148)
			r4 = (r4 + ((-parseInt(r6)) \ 5))
			r6 = r0(161)
			r5 = (parseInt(r6) \ 6)
			r7 = r0(140)
			r4 = (r4 + (r5 * (parseInt(r7) \ 7)))
			r6 = r0(130)
			r5 = (parseInt(r6) \ 8)
			r7 = r0(165)
			r4 = (r4 + (r5 * (parseInt(r7) \ 9)))
			r6 = r0(125)
			r5 = ((-parseInt(r6)) \ 10)
			r7 = r0(169)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 11)))
			r6 = r0(153)
			r2 = (r4 + (parseInt(r6) \ 12))
			if (r2 === a1)
			{
				break
			}
			r6 = r1["shift"]()
			ACCU = r1["push"](r6)
			continue
		}
		catch {}
		r4 = ACCU
		ACCU = null
		ACCU = Scope[2]
		r4 = Scope[1]
		r7 = r1["shift"]()
		ACCU = r1["push"](r7)
	}
	return undefined
}
function func_getSportsNews_0x100000012(a0)
{
	r9 = Scope[1]
	r10 = <closure>
	r11 = <this>
	ACCU = null
	r10 = Scope[3]
	try
	{
		Scope[3][2] = func_0x1a86_0x100000003
		r14 = 166
		r11 = Scope[1][8]["get"]
		r11 = r11()
		r1 = r11["settings"]
		ACCU = r1["newsCacheMinutes"]
		if (!r1["newsCacheMinutes"])
		{
			ACCU = 30
		}
		ACCU = ((ACCU * 60) * 1000)
		r2 = ((ACCU * 60) * 1000)
		r11 = Scope[3]
		try
		{
			ACCU = a0
			if (!a0)
			{
				r12 = Scope[1][4]["existsSync"]
				r14 = Scope[1][10]
				if (r12(Scope[1][10]))
				{
					r14 = Scope[1][4]["readFileSync"]
					r17 = "utf8"
					r14 = r14(Scope[1][10], r17)
					r8 = JSON["parse"](r14)
					r12 = Date["now"]
					r12 = r12()
					r12 = (r12 - r8["at"])
					if (r12 < r2)
					{
						r12 = new {"cached": null, "items": null}
						r12["cached"] = !(!Boolean([]))
						r12["items"] = r8["items"]
						r13 = r12
						r12 = Scope[3]
						return r13
					}
				}
			}
		}
		catch
		{
			r12 = ACCU
			ACCU = null
			ACCU = Scope[4]
			r12 = Scope[3]
		}
		r3 = []
		ACCU = r1["sportsNewsSources"]
		if (!r1["sportsNewsSources"])
		{
			ACCU = []
		}
		r13 = ACCU
		r12 = GetIterator(r13)
		r11 = r12["next"]
		ACCU = false
		r13 = false
		r16 = Scope[3]
		try
		{
			while (true)
			{
				r13 = true
				r17 = r11()
				if (r17["done"]) break
				r13 = false
				r18 = Scope[3]
				ACCU = r17["value"]
				Scope[5][2] = r17["value"]
				r17 = r17["value"]
				r19 = Scope[5]
				try
				{
					r21 = func_fetchText_0x100000009(Scope[5][2])
					r20 = Scope[3]
					r20 = await r21
					r21 = _GeneratorGetResumeMode(Scope[3])
					if (!r21 === 0)
					{
						ACCU = r20
					}
					r7 = r20
					r20 = r3["push"]
					r23 = func_parseFeed_0x10000000b(r7)
					r22 = r23["map"]
					r22 = r22(func_unknown_0x100000011)
					r21 = r3
					ACCU = r20(...r21, r22)
					continue
				}
				catch {}
				r20 = ACCU
				ACCU = null
				ACCU = Scope[6]
				r20 = Scope[5]
			}
			ACCU = -1
			r15 = -1
			r14 = -1
		}
		catch
		{
			r15 = ACCU
			r14 = 0
		}
		if (!r13)
		{
			r19 = Scope[3]
			try
			{
				if (!r12["return"] == undefined)
				{
					ACCU = r12["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		if (r14 === 0)
		{
			ACCU = r15
		}
		ACCU = r3["length"]
		if (r3["length"])
		{
			r11 = Scope[1][4]["mkdirSync"]
			r13 = Scope[1][5]["dirname"](Scope[1][10])
			r14 = new {"recursive": null}
			r14["recursive"] = !(!Boolean([]))
			ACCU = r11(r13, r14)
			r14 = JSON["stringify"]
			r16 = new {"at": null, "items": null}
			r17 = Date["now"]
			r16["at"] = r17()
			r16["items"] = r3
			r14 = r14(r16)
			ACCU = Scope[1][4]["writeFileSync"](Scope[1][10], r14)
			r11 = new {"cached": null, "items": null}
			r11["cached"] = !Boolean([])
			r11["items"] = r3
			r12 = r11
			r11 = Scope[3]
			ACCU = r12
			return r12
		}
		r11 = Scope[3]
		try
		{
			r12 = Scope[1][4]["existsSync"]
			ACCU = r12(Scope[1][10])
			if (r12(Scope[1][10]))
			{
				r12 = JSON["parse"]
				r14 = Scope[1][4]["readFileSync"]
				r17 = "utf8"
				r14 = r14(Scope[1][10], r17)
				r5 = r12(r14)
				r12 = new {"cached": null, "stale": null, "items": null}
				r12["cached"] = !(!Boolean([]))
				r12["stale"] = !(!Boolean([]))
				r12["items"] = r5["items"]
				r13 = r12
				r12 = Scope[3]
				return r13
			}
		}
		catch
		{
			r12 = ACCU
			ACCU = null
			ACCU = Scope[7]
			r12 = Scope[3]
		}
		r11 = new {"cached": null, "items": []}
		r11["cached"] = !Boolean([])
		r12 = r11
		r11 = Scope[3]
		ACCU = r12
		return r12
	}
	catch {}
	r11 = ACCU
	ACCU = null
	ACCU = Scope[8]
	r11 = Scope[3]
	r12 = Scope[3]
	return Scope[8][2]
}
function func_unknown_0x100000011(a0)
{
	r3 = new {"source": null}
	ACCU = URL
	r4 = URL(Scope[5][2])
	r3["source"] = r4["hostname"]
	return Object["assign"](a0, r3)
}
function func_todayMatches_0x100000010()
{
	r1 = Scope[1]
	Scope[9][2] = func_0x1a86_0x100000003
	r2 = Scope[1][8]["get"]
	r0 = r2()
	r2 = Intl["DateTimeFormat"]
	r4 = new {"timeZone": null, "year": null, "month": null, "day": null}
	r4["timeZone"] = "Asia/Riyadh"
	r4["year"] = "numeric"
	r4["month"] = "2-digit"
	r4["day"] = "2-digit"
	ACCU = r2
	Scope[9][3] = r2("en-CA", r4)
	r2 = Scope[9][3]["format"]
	r4 = Date(r0)
	Scope[9][4] = r2(r4)
	r4 = r0["matches"]
	r3 = r4["filter"]
	r3 = r3(func_unknown_0x10000000e)
	r2 = r3["sort"]
	return r2(func_unknown_0x10000000f)
}
function func_unknown_0x10000000f(a0, a1)
{
	r1 = a0["kickoffUtc"]
	ACCU = Date
	r0 = Date(r1)
	ACCU = Date
	return (r0 - Date(a1["kickoffUtc"]))
}
function func_unknown_0x10000000e(a0)
{
	r0 = Scope[9]
	try
	{
		ACCU = Date
		r3 = Date(a0["kickoffUtc"])
		r1 = Scope[9][3]["format"](r3)
		return r1 === Scope[9][4]
	}
	catch {}
	r1 = ACCU
	ACCU = null
	ACCU = Scope[10]
	r1 = Scope[9]
	return !Boolean([])
}
function func_getNews_0x10000000d(a0)
{
	r9 = Scope[1]
	r10 = <closure>
	r11 = <this>
	ACCU = null
	r10 = Scope[11]
	try
	{
		Scope[11][2] = func_0x1a86_0x100000003
		r11 = Scope[1][8]["get"]()
		r1 = r11["settings"]
		ACCU = r1["newsCacheMinutes"]
		if (!r1["newsCacheMinutes"])
		{
			ACCU = 30
		}
		ACCU = ((ACCU * 60) * 1000)
		r2 = ((ACCU * 60) * 1000)
		r11 = Scope[11]
		try
		{
			ACCU = a0
			if (!a0)
			{
				r12 = Scope[1][4]["existsSync"]
				if (r12(Scope[1][9]))
				{
					r14 = Scope[1][4]["readFileSync"](Scope[1][9], "utf8")
					r8 = JSON["parse"](r14)
					r12 = Date["now"]()
					r12 = (r12 - r8["at"])
					if (r12 < r2)
					{
						r12 = new {"cached": null, "items": null}
						r12["cached"] = !(!Boolean([]))
						r12["items"] = r8["items"]
						r13 = r12
						r12 = Scope[11]
						return r13
					}
				}
			}
		}
		catch
		{
			r12 = ACCU
			ACCU = null
			ACCU = Scope[12]
			r12 = Scope[11]
		}
		r3 = []
		ACCU = r1["newsSources"]
		if (!r1["newsSources"])
		{
			ACCU = []
		}
		r13 = ACCU
		r12 = GetIterator(r13)
		r11 = r12["next"]
		ACCU = false
		r13 = false
		r16 = Scope[11]
		try
		{
			while (true)
			{
				r13 = true
				r17 = r11()
				if (r17["done"]) break
				r13 = false
				r18 = Scope[11]
				ACCU = r17["value"]
				Scope[13][2] = r17["value"]
				r17 = r17["value"]
				r19 = Scope[13]
				try
				{
					r21 = func_fetchText_0x100000009(Scope[13][2])
					r20 = Scope[11]
					r20 = await r21
					r21 = _GeneratorGetResumeMode(Scope[11])
					if (!r21 === 0)
					{
						ACCU = r20
					}
					r7 = r20
					r20 = r3["push"]
					r23 = func_parseFeed_0x10000000b(r7)
					r22 = r23["map"]
					r22 = r22(func_unknown_0x10000000c)
					r21 = r3
					ACCU = r20(...r21, r22)
					continue
				}
				catch {}
				r20 = ACCU
				ACCU = null
				ACCU = Scope[14]
				r20 = Scope[13]
			}
			ACCU = -1
			r15 = -1
			r14 = -1
		}
		catch
		{
			r15 = ACCU
			r14 = 0
		}
		if (!r13)
		{
			r19 = Scope[11]
			try
			{
				if (!r12["return"] == undefined)
				{
					ACCU = r12["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		if (r14 === 0)
		{
			ACCU = r15
		}
		ACCU = r3["length"]
		if (r3["length"])
		{
			r11 = Scope[1][4]["mkdirSync"]
			r13 = Scope[1][5]["dirname"](Scope[1][9])
			r14 = new {"recursive": null}
			r14["recursive"] = !(!Boolean([]))
			ACCU = r11(r13, r14)
			r11 = Scope[1][4]["writeFileSync"]
			r14 = JSON["stringify"]
			r16 = new {"at": null, "items": null}
			r16["at"] = Date["now"]()
			r16["items"] = r3
			r14 = r14(r16)
			ACCU = r11(Scope[1][9], r14)
			r11 = new {"cached": null, "items": null}
			r11["cached"] = !Boolean([])
			r11["items"] = r3
			r12 = r11
			r11 = Scope[11]
			ACCU = r12
			return r12
		}
		r11 = Scope[11]
		try
		{
			r12 = Scope[1][4]["existsSync"]
			ACCU = r12(Scope[1][9])
			if (r12(Scope[1][9]))
			{
				r12 = JSON["parse"]
				r14 = Scope[1][4]["readFileSync"]
				r17 = "utf8"
				r14 = r14(Scope[1][9], r17)
				r5 = r12(r14)
				r12 = new {"cached": null, "stale": null, "items": null}
				r12["cached"] = !(!Boolean([]))
				r12["stale"] = !(!Boolean([]))
				r12["items"] = r5["items"]
				r13 = r12
				r12 = Scope[11]
				return r13
			}
		}
		catch
		{
			r12 = ACCU
			ACCU = null
			ACCU = Scope[15]
			r12 = Scope[11]
		}
		r11 = new {"cached": null, "items": []}
		r11["cached"] = !Boolean([])
		r12 = r11
		r11 = Scope[11]
		ACCU = r12
		return r12
	}
	catch {}
	r11 = ACCU
	ACCU = null
	ACCU = Scope[16]
	r11 = Scope[11]
	r12 = Scope[11]
	return Scope[16][2]
}
function func_unknown_0x10000000c(a0)
{
	r0 = Object["assign"]
	r3 = new {"source": null}
	ACCU = URL
	r4 = URL(Scope[13][2])
	r3["source"] = r4["hostname"]
	return r0(a0, r3)
}
function func_parseFeed_0x10000000b(a0)
{
	r0 = func_0x1a86_0x100000003
	r1 = []
	r9 = a0["match"]
	r11 = \<item[\\\\s\\\\S]*?<\\\\/item>\
	ACCU = r9(r11)
	if (!r9(r11))
	{
		r9 = a0["match"]
		r11 = \<entry[\\\\s\\\\S]*?<\\\\/entry>\
		ACCU = r9(r11)
		if (!r9(r11))
		{
			ACCU = []
		}
	}
	r2 = ACCU
	r9 = r2["slice"]
	r12 = 15
	r11 = r9(0, 15)
	r10 = GetIterator(r11)
	r9 = r10["next"]
	ACCU = false
	r11 = false
	r14 = Scope[1]
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
			r19 = \<title[^>]*>([\\\\s\\\\S]*?)<\\\\/title>\
			ACCU = r17(r19)
			r15 = r15["value"]
			if (!r17(r19))
			{
				ACCU = []
			}
			r17 = ACCU
			r17 = r17[1]
			r6 = func_decodeEntities_0x10000000a(r17)
			r16 = r5[r0(117)]
			r18 = \<link[^>]*href=\"([^\"]+)\\
			ACCU = r16(r18)
			if (!r16(r18))
			{
				ACCU = []
			}
			r16 = ACCU
			ACCU = r16[1]
			if (!r16[1])
			{
				r17 = r5[r0(117)]
				r19 = \<link[^>]*>([\\\\s\\\\S]*?)<\\\\/link>\
				ACCU = r17(r19)
				if (!r17(r19))
				{
					ACCU = []
				}
				r17 = ACCU
				r17 = r17[1]
				ACCU = func_decodeEntities_0x10000000a(r17)
			}
			r7 = ACCU
			r17 = r5[r0(117)]
			r19 = \<pubDate>([\\\\s\\\\S]*?)<\\\\/pubDate>\
			ACCU = r17(r19)
			if (!r17(r19))
			{
				r19 = \<updated>([\\\\s\\\\S]*?)<\\\\/updated>\
				ACCU = r5["match"](r19)
				if (!r5["match"](r19))
				{
					ACCU = []
				}
			}
			r17 = ACCU
			r17 = r17[1]
			r8 = func_decodeEntities_0x10000000a(r17)
			if (!r6) continue
			r16 = r1[r0(116)]
			r18 = new {"title": null, "link": null, "date": null}
			r18["title"] = r6
			ACCU = r7
			r17 = r1
			if (!r7)
			{
				ACCU = ""
			}
			r18["link"] = ACCU
			if (r8) continue
			r18["date"] = ""
			ACCU = r16(r18)
		}
		ACCU = -1
		r13 = -1
		r12 = -1
	}
	catch
	{
		r13 = ACCU
		r12 = 0
	}
	if (!r11)
	{
		r16 = Scope[1]
		try
		{
			if (!r10["return"] == undefined)
			{
				ACCU = r10["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r12 === 0)
	{
		ACCU = r13
	}
	return r1
}
function func_decodeEntities_0x10000000a(a0)
{
	ACCU = a0
	if (!a0)
	{
		ACCU = ""
	}
	r10 = ACCU
	r9 = String(r10)
	r10 = \<!\\\\[CDATA\\\\[(.*?)\\\\]\\\\]>\
	r8 = r9["replace"](r10, "$1")
	r7 = r8["replace"]
	r9 = \&amp;\
	r7 = r7(r9, "&")
	r8 = \&lt;\
	r6 = r7["replace"](r8, "<")
	r5 = r6["replace"]
	r7 = \&gt;\
	r5 = r5(r7, ">")
	r4 = r5["replace"]
	r6 = \&quot;\
	r4 = r4(r6, "\"")
	r3 = r4["replace"]
	r5 = \&#39;\
	r3 = r3(r5, "'")
	r2 = r3["replace"]
	r4 = \<[^>]+>\
	r2 = r2(r4, "")
	r1 = r2["trim"]
	return r1()
}
function func_fetchText_0x100000009(a0, a1)
{
	r0 = Scope[1]
	Scope[17][3] = a0
	Scope[17][2] = a1
	ACCU = Promise
	return Promise(func_unknown_0x100000008)
}
function func_unknown_0x100000008(a0, a1)
{
	r1 = Scope[17]
	Scope[18][3] = a0
	Scope[18][2] = a1
	Scope[18][4] = func_0x1a86_0x100000003
	ACCU = undefined
	r2 = Scope[18]
	try
	{
		ACCU = URL
		ACCU = URL(Scope[17][3])
		Scope[18][5] = URL(Scope[17][3])
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[19]
		r3 = Scope[18]
		r6 = "bad url"
		ACCU = Error
		r5 = Error(r6)
		return Scope[18][2](r5)
	}
	ACCU = Scope[18][5]["protocol"] === "https:"
	if (Scope[18][5]["protocol"] === "https:")
	{
		ACCU = Scope[1][7]
	}
	else
	{
		ACCU = Scope[1][6]
	}
	r0 = ACCU
	r5 = new {"timeout": 15000, "headers": {"User-Agent": "AmaanLive/1.0"}}
	r3 = r0
	Scope[18][6] = r0["get"](Scope[18][5], r5, func_unknown_0x100000006)
	r4 = "timeout"
	ACCU = Scope[18][6]["on"](r4, func_unknown_0x100000007)
	r4 = "error"
	ACCU = Scope[18][6]["on"](r4, Scope[18][2])
	return undefined
}
function func_unknown_0x100000007()
{
	r1 = Scope[18][6]["destroy"]
	ACCU = r1()
	r3 = "timeout"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[18][2](r2)
	return undefined
}
function func_unknown_0x100000006(a0)
{
	r0 = Scope[18]
	Scope[20][2] = func_0x1a86_0x100000003
	r2 = new [301, 302, 307, 308]
	r1 = r2["includes"]
	r3 = a0["statusCode"]
	if (r1(r3))
	{
		r1 = a0["headers"]
		if (r1["location"])
		{
			ACCU = Scope[17][2]
			if (!Scope[17][2])
			{
				ACCU = 0
			}
			r1 = ACCU
			if (r1 < 3)
			{
				ACCU = a0["resume"]()
				r5 = a0["headers"]
				r5 = r5["location"]
				ACCU = URL
				r4 = URL(r5, Scope[18][5])
				r3 = r4["toString"]
				r3 = r3()
				ACCU = Scope[17][2]
				if (!Scope[17][2])
				{
					ACCU = 0
				}
				r4 = (ACCU + 1)
				r2 = func_fetchText_0x100000009(r3, r4)
				return Scope[18][3](r2)
			}
		}
	}
	r1 = a0["statusCode"]
	if (!r1 === 200)
	{
		ACCU = a0["resume"]()
		r3 = "HTTP "
		r3 = (r3 + a0["statusCode"])
		ACCU = Error
		r2 = Error(r3)
		return Scope[18][2](r2)
	}
	Scope[20][3] = ""
	r3 = "data"
	ACCU = a0["on"](r3, func_unknown_0x100000004)
	r3 = "end"
	ACCU = a0["on"](r3, func_unknown_0x100000005)
	return undefined
}
function func_unknown_0x100000005()
{
	return Scope[18][3](Scope[20][3])
}
function func_unknown_0x100000004(a0)
{
	ACCU = Scope[20][3]
	Scope[20][3] = (Scope[20][3] + a0)
	r1 = Scope[20][3]["length"]
	if (r1 > 5000000)
	{
		r1 = Scope[18][6]["destroy"]
		ACCU = r1()
	}
	return undefined
}
function func_0x1a86_0x100000003(a0, a1)
{
	a0 = (a0 - 115)
	r0 = Scope[1][3]()
	r1 = r0[a0]
	if (Scope[1][11]["hyRJKS"] == undefined)
	{
		Scope[1][11]["QPtEQF"] = func_0x26446b_0x100000002
		Scope[1][11]["tBvKzC"] = {}
		Scope[1][11]["hyRJKS"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][11]["tBvKzC"][r4])
	{
		r1 = Scope[1][11]["QPtEQF"](r1)
		Scope[1][11]["tBvKzC"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][11]["tBvKzC"][r4]
	}
	return r1
}
function func_0x26446b_0x100000002(a0)
{
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
		ACCU = r0["indexOf"](r7)
		r7 = r0["indexOf"](r7)
		if (~(ACCU))
		{
			ACCU = (r5 % 4)
			if ((r5 % 4))
			{
				r9 = (r6 * 64)
				ACCU = (r9 + r7)
			}
			else
			{
				ACCU = r7
			}
			r6 = ACCU
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
		ACCU = 0
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
	r0 = Scope[1]
	Scope[21][2] = new ["yMfKihvYBa", "BMv3C1nVDxjJzxm", "nta4ntaXAwzdtxfs", "mI1KAwDPDa", "zxjYB3i", "C3rHDhvZq29Kzq", "zgf0yq", "BgvUz3rO", "Bg9JyxrPB24", "BwTKAxjtEw5J", "mtG0nJu5me9iv0X6tW", "C3bVCNrZlw5LD3mUANnVBG", "D3jPDgvgAwXLu3LUyW", "A2LJA29MzLv0yW", "zgvZDhjVEq", "ntiYmJuWohPYs0XSta", "ng5vqu5yEG", "C2v0DgLUz3m", "zM9YBwf0", "y2fJAgu", "C3rYAw5NAwz5", "BNvTzxjPyW", "yxnZAwDU", "nMHlCMP6tW", "CMvWBgfJzq", "Aw5JBhvKzxm", "DhjPBq", "mZy5ndqXuxHmweLt", "z2v0", "Ahr0Ca", "AxrLBxm", "odHKrMrjtK8", "Dg9tDhjPBMC", "C2XPy2u", "AM9PBG", "sfruuca", "C3bVCNrZtMv3C1nVDxjJzxm", "mte0vKvhzgPk", "BM93", "Bwf0y2HLCW", "DxrMoa", "zMLSDgvY", "zw5K", "ChvZAa", "Bwf0y2G", "CgfYC2u", "uK9pva", "nduZndyYEvLLtKLO", "zxHPC3rZu3LUyW", "BwfW", "ndGXngXXq2vWsW", "BMv3C0nHy2HLtwLUDxrLCW", "mtm3mtqWCxj6v0PO", "DgLTzw91Da", "D29YBgrJDxaTBMv3CY5QC29U", "Cgf0Aa", "zxHWB3j0CW", "nZjtELzND08", "rgf0zvrPBwvgB3jTyxq", "Ag9ZDg5HBwu", "AgvHzgvYCW", "CMvHzezPBgvtEw5J", "C29YDa", "Ahr0Chm6", "qxnPys9sAxLHzgG"]
	Scope[1][3] = func_0x40f6_0x100000000
	return Scope[1][3]()
}
function func_0x40f6_0x100000000()
{
	return Scope[21][2]
}
