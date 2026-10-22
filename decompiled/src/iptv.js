// Decompiled from binary src/iptv.js (V8 10.2.154.4-node.8 code cache, 6282 source chars, 11544 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x100000012()
{
	r0 = func_unknown_0x100000011
	return r0
}
function func_unknown_0x100000011(a0, a1, a2, a3, a4)
{
	r3 = Scope[0]
	Scope[1][2] = func_0x1d27_0x100000001
	Scope[1][6] = func_fetchText_0x100000008
	Scope[1][7] = func_parseM3U_0x100000009
	Scope[1][8] = func_0x1fd8_0x10000000b
	Scope[1][9] = func_addChannels_0x10000000d
	ACCU = func_unknown_0x100000010(Scope[1][8], 384924)
	Scope[1][3] = a1("http")
	Scope[1][4] = a1("https")
	Scope[1][5] = a1("./store")
	r5 = "exports"
	r6 = new {"parseM3U": null, "importFromUrl": null, "importFromText": null, "addChannels": null}
	r6["parseM3U"] = func_parseM3U_0x100000009
	r6["importFromUrl"] = func_importFromUrl_0x10000000e
	r6["importFromText"] = func_importFromText_0x10000000f
	r6["addChannels"] = func_addChannels_0x10000000d
	a2[r5] = r6
	return undefined
}
function func_unknown_0x100000010(a0, a1)
{
	r0 = func_0x1d27_0x100000001
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(116)
			r4 = (parseInt(r5) \ 1)
			r6 = r0(112)
			r4 = (r4 * ((-parseInt(r6)) \ 2))
			r6 = r0(134)
			r4 = (r4 + ((-parseInt(r6)) \ 3))
			r6 = r0(113)
			r5 = ((-parseInt(r6)) \ 4)
			r7 = r0(143)
			r4 = (r4 + (r5 * (parseInt(r7) \ 5)))
			r6 = r0(145)
			r4 = (r4 + (parseInt(r6) \ 6))
			r6 = r0(146)
			r5 = ((-parseInt(r6)) \ 7)
			r7 = r0(125)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 8)))
			r6 = r0(149)
			r5 = ((-parseInt(r6)) \ 9)
			r7 = r0(118)
			r4 = (r4 + (r5 * (parseInt(r7) \ 10)))
			r6 = r0(133)
			r2 = (r4 + ((-parseInt(r6)) \ 11))
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
function func_importFromText_0x10000000f(a0)
{
	r1 = func_parseM3U_0x100000009(a0)
	if (!r1["length"])
	{
		r3 = "لم يتم العثور على قنوات في الملف"
		ACCU = Error
		ACCU = Error(r3)
	}
	return func_addChannels_0x10000000d(r1)
}
function func_importFromUrl_0x10000000e(a0)
{
	r3 = <closure>
	r4 = <this>
	r0 = ACCU
	r3 = Scope[1]
	try
	{
		r5 = func_fetchText_0x100000008(a0)
		r4 = r0
		r4 = await r5
		r5 = _GeneratorGetResumeMode(r0)
		if (!r5 === 0)
		{
			ACCU = r4
		}
		r2 = r4
		r5 = \#EXTM3U\
		if (!r5["test"](r2))
		{
			r4 = func_parseM3U_0x100000009(r2)
			if (!r4["length"])
			{
				r5 = "الملف ليس بصيغة M3U صالحة"
				ACCU = Error
				ACCU = Error(r5)
			}
		}
		r5 = func_parseM3U_0x100000009(r2)
		r5 = func_addChannels_0x10000000d(r5)
		r4 = r0
		return r5
	}
	catch {}
	r4 = ACCU
	ACCU = null
	ACCU = Scope[3]
	r4 = Scope[1]
	r5 = r0
	return Scope[3][2]
}
function func_addChannels_0x10000000d(a0)
{
	r5 = Scope[1]
	Scope[4][2] = func_0x1d27_0x100000001
	r0 = Scope[1][5]["get"]()
	r1 = 0
	r2 = 0
	r7 = GetIterator(a0)
	r6 = r7["next"]
	ACCU = false
	r8 = false
	r11 = Scope[4]
	try
	{
		while (true)
		{
			r8 = true
			r12 = r6()
			if (r12["done"]) break
			r8 = false
			r13 = Scope[4]
			Scope[5][2] = r12["value"]
			r12 = r12["value"]
			if (!Scope[5][2]["url"])
				|| (!Scope[5][2]["name"])
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
			r16 = new {"id": null, "name": null, "url": null, "logo": null, "group": null}
			r17 = Scope[1][5]["newId"]
			r19 = "iptv"
			r16["id"] = r17(r19)
			r16["name"] = Scope[5][2]["name"]
			r16["url"] = Scope[5][2]["url"]
			r16["logo"] = Scope[5][2]["logo"]
			r16["group"] = Scope[5][2]["group"]
			ACCU = r14(r16)
			ACCU = (r1 + 1)
			r1 = (r1 + 1)
		}
		ACCU = -1
		r10 = -1
		r9 = -1
	}
	catch
	{
		r10 = ACCU
		r9 = 0
	}
	if (!r8)
	{
		r14 = Scope[4]
		try
		{
			if (!r7["return"] == undefined)
			{
				ACCU = r7["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r9 === 0)
	{
		ACCU = r10
	}
	r6 = Scope[1][5]["save"]
	ACCU = r6()
	r6 = new {"added": null, "skipped": null, "total": null}
	r6["added"] = r1
	r6["skipped"] = r2
	r7 = r0["iptv"]
	r6["total"] = r7["length"]
	return r6
}
function func_unknown_0x10000000c(a0)
{
	r0 = a0["url"]
	return r0 === Scope[5][2]["url"]
}
function func_0x1fd8_0x10000000b()
{
	r0 = Scope[1]
	Scope[6][2] = new ["AgvHzgvYCW", "Bg9JyxrPB24", "zxHWB3j0CW", "z2v0", "mZm1mdvsugnHuvu", "BMfTzq", "nti1nZGWrg1TBMzp", "nZDcA0j6seS", "zxjYB3i", "zgf0yq", "mZm4neDTuLvQCW", "Aw5JBhvKzxm", "Axb0DG", "BMv3swq", "Bg9NBW", "CMvZDw1L", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinMb2yOG2kFzHnMf2ytzGq", "DgLTzw91Da", "C3bSAxq", "mtbuwMDAqwC", "nZjLEvfPvxq", "AM9PBG", "z3jVDxa", "odC2mxnozMfgvW", "sfruuca", "mJm1mhjjsgrWva", "i0vyveLorG", "C3rHCNrZv2L0Aa", "DhjPBq", "Ahr0Chm6", "BgvUz3rO", "zw5K", "ntqYnZKYte9WtuzY", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kRyRDMf2yRzHa", "C2f2zq", "zgvZDhjVEq", "DxjS", "Dg9tDhjPBMC", "C29Tzq", "2lhyP9IO2lCG2lRzITIXinI12k3zITIT", "mtqYnZa5nNfgyMzkyG", "mtK5ntC4ExrItNb1", "C3rHDhvZq29Kzq", "ChvZAa", "2kFzHnMf2ytzGsdzHnMk2lmG2kJyTDMk2lRyQsbnm1uG2lxyP9Me2k3yQq", "2kFzHnMf2ytzGsdzG9IO2yRySsdyRnIV2kFzIW"]
	Scope[1][8] = func_0x1fd8_0x10000000a
	return Scope[1][8]()
}
function func_0x1fd8_0x10000000a()
{
	return Scope[6][2]
}
function func_parseM3U_0x100000009(a0)
{
	r0 = func_0x1d27_0x100000001
	r12 = String(a0)
	r14 = 111
	r11 = r12["split"]
	r13 = \\\\\r?\\\\n\
	r1 = r11(r13)
	r2 = []
	r3 = null
	r12 = GetIterator(r1)
	r11 = r12["next"]
	ACCU = false
	r13 = false
	r16 = Scope[1]
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
				ACCU = r19(",")
				if (!r19(","))
				{
					ACCU = ""
				}
				r19 = ACCU
				r18 = r19[r0(121)]
				r8 = r18()
				r20 = \tvg-logo=\"([^\"]*)\\
				ACCU = r7["match"](r20)
				if (!r7["match"](r20))
				{
					ACCU = []
				}
				r18 = ACCU
				ACCU = r18[1]
				if (!r18[1])
				{
					ACCU = ""
				}
				r9 = ACCU
				r20 = \group-title=\"([^\"]*)\\
				ACCU = r7["match"](r20)
				if (!r7["match"](r20))
				{
					ACCU = []
				}
				r18 = ACCU
				ACCU = r18[1]
				if (!r18[1])
				{
					ACCU = ""
				}
				r10 = ACCU
				r18 = new {"name": null, "logo": null, "group": null}
				r18["name"] = r8
				r18["logo"] = r9
				r18["group"] = r10
				r3 = r18
				ACCU = r18
				continue
			}
			r18 = r7[r0(120)]
			if (!!Boolean(r18("#"))) continue
			r18 = r2[r0(136)]
			r20 = new {"name": null, "url": null, "logo": null, "group": null}
			ACCU = r3
			r19 = r2
			if (r3)
			{
				ACCU = r3[r0(144)]
			}
			if (!ACCU)
			{
				ACCU = r7
			}
			r20["name"] = ACCU
			r20["url"] = r7
			ACCU = r3
			if (r3)
			{
				ACCU = r3[r0(153)]
			}
			if (!ACCU)
			{
				ACCU = ""
			}
			r20["logo"] = ACCU
			ACCU = r3
			if (r3)
			{
				ACCU = r3["group"]
			}
			if (ACCU) continue
			r20["group"] = ""
			ACCU = r18(r20)
			ACCU = null
			r3 = null
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
		r18 = Scope[1]
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
	return r2
}
function func_fetchText_0x100000008(a0, a1)
{
	r0 = Scope[1]
	Scope[7][3] = a0
	Scope[7][2] = a1
	ACCU = Promise
	return Promise(func_unknown_0x100000007)
}
function func_unknown_0x100000007(a0, a1)
{
	r1 = Scope[7]
	Scope[8][3] = a0
	Scope[8][2] = a1
	Scope[8][4] = func_0x1d27_0x100000001
	ACCU = undefined
	r2 = Scope[8]
	try
	{
		ACCU = URL
		ACCU = URL(Scope[7][3])
		Scope[8][5] = URL(Scope[7][3])
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[9]
		r3 = Scope[8]
		r6 = "رابط غير صحيح"
		ACCU = Error
		r5 = Error(r6)
		return Scope[8][2](r5)
	}
	ACCU = Scope[8][5]["protocol"] === "https:"
	if (Scope[8][5]["protocol"] === "https:")
	{
		ACCU = Scope[1][4]
	}
	else
	{
		ACCU = Scope[1][3]
	}
	r0 = ACCU
	r2 = r0["get"]
	r5 = new {"timeout": 20000}
	r3 = r0
	Scope[8][6] = r2(Scope[8][5], r5, func_unknown_0x100000004)
	r4 = "timeout"
	ACCU = Scope[8][6]["on"](r4, func_unknown_0x100000005)
	r4 = "error"
	ACCU = Scope[8][6]["on"](r4, func_unknown_0x100000006)
	return undefined
}
function func_unknown_0x100000006(a0)
{
	return Scope[8][2](a0)
}
function func_unknown_0x100000005()
{
	r1 = Scope[8][6]["destroy"]
	ACCU = r1()
	r3 = "انتهت مهلة التحميل"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[8][2](r2)
	return undefined
}
function func_unknown_0x100000004(a0)
{
	r0 = Scope[8]
	Scope[10][2] = func_0x1d27_0x100000001
	r2 = new [301, 302, 307, 308]
	r1 = r2["includes"]
	if (r1(a0["statusCode"]))
	{
		r1 = a0["headers"]
		if (r1["location"])
		{
			ACCU = Scope[7][2]
			if (!Scope[7][2])
			{
				ACCU = 0
			}
			r1 = ACCU
			if (r1 < 3)
			{
				r1 = a0["resume"]
				ACCU = r1()
				r5 = a0["headers"]["location"]
				ACCU = URL
				r4 = URL(r5, Scope[8][5])
				r3 = r4["toString"]
				r3 = r3()
				ACCU = Scope[7][2]
				if (!Scope[7][2])
				{
					ACCU = 0
				}
				r4 = (ACCU + 1)
				r2 = func_fetchText_0x100000008(r3, r4)
				return Scope[8][3](r2)
			}
		}
	}
	if (!a0["statusCode"] === 200)
	{
		r1 = a0["resume"]
		ACCU = r1()
		r3 = "HTTP "
		r3 = (r3 + a0["statusCode"])
		ACCU = Error
		r2 = Error(r3)
		return Scope[8][2](r2)
	}
	Scope[10][3] = ""
	Scope[10][4] = 0
	r3 = "data"
	ACCU = a0["on"](r3, func_unknown_0x100000002)
	r3 = "end"
	ACCU = a0["on"](r3, func_unknown_0x100000003)
	return undefined
}
function func_unknown_0x100000003()
{
	return Scope[8][3](Scope[10][3])
}
function func_unknown_0x100000002(a0)
{
	ACCU = 0
	Scope[10][4] = (0 + a0["length"])
	if (0 > 20971520)
	{
		r1 = Scope[8][6]["destroy"]
		ACCU = r1()
		r3 = "الملف كبير جداً"
		ACCU = Error
		r2 = Error(r3)
		return Scope[8][2](r2)
	}
	r2 = a0["toString"]
	r2 = (Scope[10][3] + r2("utf8"))
	ACCU = Scope[10][3]
	Scope[10][3] = r2
	return undefined
}
function func_0x1d27_0x100000001(a0, a1)
{
	a0 = (a0 - 111)
	r0 = Scope[1][8]()
	r1 = r0[a0]
	if (Scope[1][2]["dCUDhF"] == undefined)
	{
		Scope[1][2]["YBcXtl"] = func_0x3b08b0_0x100000000
		Scope[1][2]["dHVicm"] = {}
		Scope[1][2]["dCUDhF"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][2]["dHVicm"][r4])
	{
		r1 = Scope[1][2]["YBcXtl"](r1)
		Scope[1][2]["dHVicm"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][2]["dHVicm"][r4]
	}
	return r1
}
function func_0x3b08b0_0x100000000(a0)
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
