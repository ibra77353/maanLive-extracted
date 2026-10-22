// Decompiled from binary src/xtream.js (V8 10.2.154.4-node.8 code cache, 14673 source chars, 24160 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x100000017()
{
	r0 = func_unknown_0x100000016
	return r0
}
function func_unknown_0x100000016(a0, a1, a2, a3, a4)
{
	r3 = Scope[0]
	Scope[1][5] = func_buildGetUrl_0x100000000
	Scope[1][7] = func_0x5e02_0x100000002
	Scope[1][8] = func_fetchOnce_0x100000009
	Scope[1][9] = func_0x1b15_0x10000000b
	Scope[1][10] = func_urlVariants_0x10000000c
	Scope[1][11] = func_fetchText_0x10000000d
	Scope[1][12] = func_parseM3U_0x10000000e
	Scope[1][13] = func_apiCall_0x10000000f
	Scope[1][14] = func_fetchViaPlayerApi_0x100000011
	Scope[1][2] = func_0x1b15_0x10000000b
	ACCU = func_unknown_0x100000015(Scope[1][7], 740654)
	r5 = "http"
	Scope[1][3] = a1(r5)
	Scope[1][4] = a1("https")
	r5 = new [0, 0, 0, 0, 0, 0]
	r5[0] = "VLC/3.0.20 LibVLC/3.0.20"
	r5[1] = "IPTVSmartersPlayer"
	r5[2] = "Lavf/58.76.100"
	r5[3] = "TiviMate/4.7.0"
	r5[4] = "okhttp/4.9.3"
	r5[5] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
	Scope[1][6] = r5
	r5 = "exports"
	r6 = new {"buildGetUrl": null, "fetchChannels": null, "fetchFromM3UUrl": null, "fetchViaProxy": null, "parseM3U": null}
	r6["buildGetUrl"] = func_buildGetUrl_0x100000000
	r6["fetchChannels"] = func_fetchChannels_0x100000012
	r6["fetchFromM3UUrl"] = func_fetchFromM3UUrl_0x100000013
	r6["fetchViaProxy"] = func_fetchViaProxy_0x100000014
	r6["parseM3U"] = func_parseM3U_0x10000000e
	a2[r5] = r6
	return undefined
}
function func_unknown_0x100000015(a0, a1)
{
	r0 = func_0x1b15_0x10000000b
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(488)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(492)
			r5 = (parseInt(r6) \ 2)
			r7 = r0(479)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 3)))
			r6 = r0(444)
			r5 = (parseInt(r6) \ 4)
			r7 = r0(471)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 5)))
			r6 = r0(458)
			r4 = (r4 + ((-parseInt(r6)) \ 6))
			r6 = r0(515)
			r4 = (r4 + ((-parseInt(r6)) \ 7))
			r6 = r0(465)
			r4 = (r4 + (parseInt(r6) \ 8))
			r6 = r0(501)
			r5 = (parseInt(r6) \ 9)
			r7 = r0(464)
			r2 = (r4 + (r5 * (parseInt(r7) \ 10)))
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
function func_fetchViaProxy_0x100000014(a0)
{
	r12 = <closure>
	r13 = <this>
	r5 = ACCU
	r12 = Scope[1]
	try
	{
		r0 = a0["server"]
		r1 = a0["username"]
		r2 = a0["password"]
		r3 = a0["proxyBase"]
		r4 = a0["userAgent"]
	}
	catch
	{
		r13 = ACCU
		ACCU = null
		ACCU = Scope[3]
		r13 = Scope[1]
		r14 = r5
		return Scope[3][2]
	}
	r12 = Scope[1]
	try
	{
		if (!r0)
			|| (!r1)
			|| (!r2)
		{
			r13 = Error
			r14 = "Server URL واسم المستخدم وكلمة المرور مطلوبة"
			ACCU = Error
			ACCU = Error(r14)
		}
		ACCU = r0
		if (!r0)
		{
			ACCU = ""
		}
		r16 = ACCU
		r15 = String(r16)
		r14 = r15["trim"]
		r14 = r14()
		r15 = \\\\\/+$\
		r7 = r14["replace"](r15, "")
		r14 = \^https?:\\\\/\\\\/\
		if (!r14["test"](r7))
		{
			r13 = "http://"
			r7 = (r13 + r7)
		}
		if (r3)
		r13 = r3["trim"]
		ACCU = r13()
			&& (r13())
		{
			r14 = r3["trim"]
			r14 = r14()
			r13 = r14["replace"]
			r15 = \\\\\/+$\
			ACCU = r14["replace"](r15, "")
		}
		else
		{
			ACCU = "https://xtream2m3u.ovosimpatico.com"
		}
		r8 = ACCU
		r13 = (r8 + "/m3u?url=")
		r13 = (r13 + encodeURIComponent(r7))
		r13 = (r13 + "&username=")
		r13 = (r13 + encodeURIComponent(r1))
		r13 = (r13 + "&password=")
		r13 = (r13 + encodeURIComponent(r2))
		r9 = (r13 + "&nostreamproxy=true")
		r14 = func_fetchText_0x10000000d(r9, r4)
		r13 = r5
		r13 = await r14
		r14 = _GeneratorGetResumeMode(r5)
		if (!r14 === 0)
		{
			ACCU = r13
		}
		r10 = r13
		r14 = \#EXTM3U\
		r13 = r14["test"]
		if (!r13(r10))
		{
			r14 = "رد الوسيط ليس قائمة M3U صالحة (تحقق من البيانات أو رابط الوسيط)"
			ACCU = Error
			ACCU = Error(r14)
		}
		r11 = func_parseM3U_0x10000000e(r10)
		if (!r11["length"])
		{
			r14 = "لم يتم العثور على قنوات عبر الوسيط"
			ACCU = Error
			ACCU = Error(r14)
		}
		r13 = r5
		r14 = r11
		return r14
	}
	catch {}
	r13 = ACCU
	ACCU = null
	ACCU = Scope[4]
	r13 = Scope[1]
	r14 = r5
	return Scope[4][2]
}
function func_fetchFromM3UUrl_0x100000013(a0, a1)
{
	r4 = <closure>
	r5 = <this>
	r0 = ACCU
	r4 = Scope[1]
	try
	{
		if (!a0)
		{
			r5 = Error
			r6 = "رابط M3U مطلوب"
			ACCU = Error
			ACCU = Error(r6)
		}
		r6 = func_fetchText_0x10000000d(a0, a1)
		r5 = r0
		r5 = await r6
		r6 = _GeneratorGetResumeMode(r0)
		if (!r6 === 0)
		{
			ACCU = r5
		}
		r2 = r5
		r6 = \#EXTM3U\
		r5 = r6["test"]
		if (!r5(r2))
		{
			r6 = "الرابط لا يحتوي قائمة M3U صالحة"
			ACCU = Error
			ACCU = Error(r6)
		}
		r3 = func_parseM3U_0x10000000e(r2)
		if (!r3["length"])
		{
			r6 = "لم يتم العثور على قنوات في الرابط"
			ACCU = Error
			ACCU = Error(r6)
		}
		r5 = r0
		r6 = r3
		return r6
	}
	catch {}
	r5 = ACCU
	ACCU = null
	ACCU = Scope[5]
	r5 = Scope[1]
	r6 = r0
	return Scope[5][2]
}
function func_fetchChannels_0x100000012(a0)
{
	r9 = <closure>
	r10 = <this>
	r5 = ACCU
	r9 = Scope[1]
	try
	{
		r0 = a0["server"]
		r1 = a0["username"]
		r2 = a0["password"]
		r3 = a0["output"]
		r4 = a0["userAgent"]
	}
	catch
	{
		r10 = ACCU
		ACCU = null
		ACCU = Scope[6]
		r10 = Scope[1]
		r11 = r5
		return Scope[6][2]
	}
	r9 = Scope[1]
	try
	{
		if (!r0)
			|| (!r1)
		ACCU = r2
			|| (!r2)
		{
			r11 = "Server URL واسم المستخدم وكلمة المرور مطلوبة"
			ACCU = Error
			ACCU = Error(r11)
		}
		r10 = Scope[1]
		try
		{
			r12 = new {"server": null, "username": null, "password": null, "output": null, "userAgent": null}
			r12["server"] = r0
			r12["username"] = r1
			r12["password"] = r2
			r12["output"] = r3
			r12["userAgent"] = r4
			r12 = func_fetchViaPlayerApi_0x100000011(r12)
			r11 = r5
			r11 = await r12
			r12 = _GeneratorGetResumeMode(r5)
			if (!r12 === 0)
			{
				ACCU = r11
			}
			r12 = r11
			r11 = r5
			ACCU = r12
			return r12
		}
		catch {}
		r11 = ACCU
		ACCU = null
		ACCU = Scope[7]
		r11 = Scope[1]
		r12 = Scope[7]
		try
		{
			r15 = r0
			r16 = r1
			r17 = r2
			r18 = r3
			r14 = func_buildGetUrl_0x100000000(r15, r16, r17, r18)
			r14 = func_fetchText_0x10000000d(r14, r4)
			r13 = r5
			r13 = await r14
			r14 = _GeneratorGetResumeMode(r5)
			if (!r14 === 0)
			{
				ACCU = r13
			}
			r7 = r13
			r14 = \#EXTM3U\
			r13 = r14["test"]
			if (!r13(r7))
			{
				ACCU = Error
				ACCU = Error("\\x631\\x62f get.php \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d")
			}
			r8 = func_parseM3U_0x10000000e(r7)
			if (r8["length"])
			{
				r13 = r5
				r14 = r8
				return r14
			}
			r14 = "لا قنوات"
			ACCU = Error
			ACCU = Error(r14)
		}
		catch {}
		r13 = ACCU
		ACCU = null
		ACCU = Scope[8]
		r13 = Scope[7]
		r15 = Scope[7][2]["message"]
		ACCU = Error
		ACCU = Error(r15)
	}
	catch {}
	r10 = ACCU
	ACCU = null
	ACCU = Scope[9]
	r10 = Scope[1]
	r11 = r5
	return Scope[9][2]
}
function func_fetchViaPlayerApi_0x100000011(a0)
{
	r10 = Scope[1]
	r11 = <closure>
	r12 = <this>
	ACCU = null
	r11 = Scope[10]
	try
	{
		r0 = a0["server"]
		Scope[10][2] = a0["username"]
		Scope[10][3] = a0["password"]
		r1 = a0["output"]
		ACCU = a0["userAgent"]
		r2 = a0["userAgent"]
	}
	catch
	{
		r12 = ACCU
		ACCU = null
		ACCU = Scope[11]
		r12 = Scope[10]
		r13 = Scope[10]
		return Scope[11][2]
	}
	r11 = Scope[10]
	ACCU = null
	r12 = Scope[12]
	try
	{
		Scope[12][2] = func_0x1b15_0x10000000b
		if (!r0)
			|| (!Scope[10][2])
			|| (!Scope[10][3])
		{
			r14 = "Server URL واسم المستخدم وكلمة المرور مطلوبة"
			ACCU = Error
			ACCU = Error(r14)
		}
		r15 = String(r0)
		r14 = r15["trim"]
		r14 = r14()
		r13 = r14["replace"]
		r15 = \\\\\/+$\
		Scope[12][3] = r13(r15, "")
		r14 = \^https?:\\\\/\\\\/\
		r13 = r14["test"]
		if (!r13(Scope[12][3]))
		{
			r13 = "http://"
			Scope[12][3] = (r13 + Scope[12][3])
		}
		ACCU = r1 === "m3u8"
		if (r1 === "m3u8")
		{
			ACCU = "m3u8"
		}
		else
		{
			ACCU = "ts"
		}
		Scope[12][4] = ACCU
		r18 = r2
		r14 = func_apiCall_0x10000000f(Scope[12][3], Scope[10][2], Scope[10][3], "", r18)
		r13 = Scope[10]
		r13 = await r14
		r14 = _GeneratorGetResumeMode(Scope[10])
		if (!r14 === 0)
		{
			ACCU = r13
		}
		r5 = r13
		if (!r5)
			|| (!r5["user_info"])
		r13 = r5["user_info"]
		r14 = func_0x1b15_0x10000000b
		r13 = r13["auth"]
			|| (r13 === 0)
		{
			r14 = "بيانات الدخول مرفوضة من player_api (تحقق من الاسم/الكلمة/الاشتراك)"
			ACCU = Error
			ACCU = Error(r14)
		}
		ACCU = {}
		Scope[12][5] = {}
		r13 = Scope[12]
		try
		{
			r17 = Scope[10][3]
			r18 = "get_live_categories"
			r19 = r2
			r15 = func_apiCall_0x10000000f(Scope[12][3], Scope[10][2], Scope[10][3], r18, r19)
			r14 = Scope[10]
			r14 = await r15
			r15 = _GeneratorGetResumeMode(Scope[10])
			if (!r15 === 0)
			{
				ACCU = r14
			}
			r7 = r14
			r15 = Array
			ACCU = Array["isArray"](r7)
			if (Array["isArray"](r7))
			{
				r15 = GetIterator(r7)
				r14 = r15["next"]
				ACCU = false
				r16 = false
				r19 = Scope[12]
				try
				{
					while (true)
					{
						r16 = true
						r20 = r14()
						if (r20["done"]) break
						r16 = false
						r22 = String(r20["value"]["category_id"])
						ACCU = r20["value"]["category_name"]
						Scope[12][5][r22] = r20["value"]["category_name"]
						r20 = r20["value"]
					}
					ACCU = -1
					r18 = -1
					r17 = -1
				}
				catch
				{
					r18 = ACCU
					r17 = 0
				}
				if (!r16)
				{
					r21 = Scope[12]
					try
					{
						if (!r15["return"] == undefined)
						{
							ACCU = r15["return"]()
						}
						catch {}
					}
				}
				ACCU = null
				if (r17 === 0)
				{
					ACCU = r18
				}
			}
		}
		catch
		{
			r14 = ACCU
			ACCU = null
			ACCU = Scope[13]
			r14 = Scope[12]
		}
		r18 = r2
		r14 = func_apiCall_0x10000000f(Scope[12][3], Scope[10][2], Scope[10][3], "get_live_streams", r18)
		r13 = Scope[10]
		r13 = await r14
		r14 = _GeneratorGetResumeMode(Scope[10])
		if (!r14 === 0)
		{
			ACCU = r13
		}
		r6 = r13
		r13 = Array["isArray"]
		if (!r13(r6))
			|| (!r6["length"])
		{
			r14 = "لم يتم العثور على قنوات في الحساب"
			ACCU = Error
			ACCU = Error(r14)
		}
		r13 = r6["map"]
		r14 = r13(func_unknown_0x100000010)
		r13 = Scope[10]
		ACCU = r14
		return r14
	}
	catch {}
	r13 = ACCU
	ACCU = null
	ACCU = Scope[14]
	r13 = Scope[12]
	r14 = Scope[10]
	return Scope[14][2]
}
function func_unknown_0x100000010(a0)
{
	r0 = new {"name": null, "url": null, "logo": null, "group": null}
	ACCU = a0["name"]
	if (!a0["name"])
	{
		ACCU = ("\\x642\\x646\\x627\\x629 " + a0["stream_id"])
	}
	r0["name"] = ACCU
	r1 = (Scope[12][3] + "/live/")
	r1 = (r1 + encodeURIComponent(Scope[10][2]))
	r1 = (r1 + "/")
	r1 = (r1 + encodeURIComponent(Scope[10][3]))
	r1 = (r1 + "/")
	r1 = (r1 + a0["stream_id"])
	r1 = (r1 + ".")
	r0["url"] = (r1 + Scope[12][4])
	ACCU = a0["stream_icon"]
	if (!a0["stream_icon"])
	{
		ACCU = ""
	}
	r0["logo"] = ACCU
	r3 = a0["category_id"]
	ACCU = Scope[12][5][String(r3)]
	if (!Scope[12][5][String(r3)])
	{
		ACCU = ""
	}
	r0["group"] = ACCU
	return r0
}
function func_apiCall_0x10000000f(a0, a1, a2, a3, a4)
{
	r4 = <closure>
	r5 = <this>
	r0 = ACCU
	r4 = Scope[1]
	try
	{
		r5 = (a0 + "/player_api.php?username=")
		r5 = (r5 + encodeURIComponent(a1))
		r5 = (r5 + "&password=")
		r5 = (r5 + encodeURIComponent(a2))
		ACCU = a3
		if (a3)
		{
			ACCU = ("&action=" + a3)
		}
		else
		{
			ACCU = ""
		}
		r2 = (r5 + ACCU)
		r6 = func_fetchText_0x10000000d(r2, a4)
		r5 = r0
		r5 = await r6
		r6 = _GeneratorGetResumeMode(r0)
		if (!r6 === 0)
		{
			ACCU = r5
		}
		r3 = r5
		ACCU = r3
		r5 = Scope[1]
		try
		{
			r6 = JSON["parse"]
			r7 = r6(r3)
			r6 = r0
			ACCU = r7
			return r7
		}
		catch {}
		r6 = ACCU
		ACCU = null
		ACCU = Scope[15]
		r6 = Scope[1]
		r8 = "رد player_api غير صالح (JSON)"
		ACCU = Error
		ACCU = Error(r8)
	}
	catch {}
	r5 = ACCU
	ACCU = null
	ACCU = Scope[16]
	r5 = Scope[1]
	r6 = r0
	return Scope[16][2]
}
function func_parseM3U_0x10000000e(a0)
{
	r0 = func_0x1b15_0x10000000b
	r12 = String(a0)
	r14 = 430
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
			r7 = r17["value"]["trim"]()
			if (!r17["value"]["trim"]())
			{
				continue
			}
			r18 = r7[r0(496)]
			r20 = r0(494)
			if (r18(r20))
			{
				r21 = r7[r0(430)]
				r21 = r21(",")
				r20 = r21[r0(508)]
				r20 = r20(1)
				ACCU = r20["join"](",")
				if (!r20["join"](","))
				{
					ACCU = ""
				}
				r19 = ACCU
				r8 = r19["trim"]()
				r18 = r7[r0(521)]
				r20 = \tvg-logo=\"([^\"]*)\\
				ACCU = r18(r20)
				if (!r18(r20))
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
				r18 = r7[r0(521)]
				r20 = \group-title=\"([^\"]*)\\
				ACCU = r18(r20)
				if (!r18(r20))
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
			if (!!Boolean(r7["startsWith"]("#"))) continue
			r18 = r2[r0(437)]
			r20 = new {"name": null, "url": null, "logo": null, "group": null}
			ACCU = r3
			r19 = r2
			if (r3)
			{
				ACCU = r3[r0(451)]
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
				ACCU = r3[r0(475)]
			}
			if (!ACCU)
			{
				ACCU = ""
			}
			r20["logo"] = ACCU
			ACCU = r3
			if (r3)
			{
				ACCU = r3[r0(499)]
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
function func_fetchText_0x10000000d(a0, a1)
{
	r14 = <closure>
	r15 = <this>
	r0 = ACCU
	r14 = Scope[1]
	try
	{
		r2 = []
		if (a1)
		{
			r15 = r2["push"]
			ACCU = r15(a1)
		}
		r16 = GetIterator(Scope[1][6])
		r15 = r16["next"]
		ACCU = false
		r17 = false
		r20 = Scope[1]
		try
		{
			while (true)
			{
				r17 = true
				r21 = r15()
				if (r21["done"]) break
				r17 = false
				if (r21["value"] === a1) continue
				ACCU = r2["push"](r21["value"])
			}
			ACCU = -1
			r19 = -1
			r18 = -1
		}
		catch
		{
			r19 = ACCU
			r18 = 0
		}
		if (!r17)
		{
			r22 = Scope[1]
			try
			{
				if (!r16["return"] == undefined)
				{
					ACCU = r16["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		if (r18 === 0)
		{
			ACCU = r19
		}
		r4 = null
		r16 = GetIterator(r2)
		r15 = r16["next"]
		ACCU = false
		r17 = false
		r20 = Scope[1]
		try
		{
			while (true)
			{
				r17 = true
				r21 = r15()
				if (r21["done"]) break
				r17 = false
				ACCU = r21["value"]
				r22 = Scope[1]
				try
				{
					r24 = func_fetchOnce_0x100000009(a0, r21["value"])
					r23 = r0
					r23 = await r24
					r24 = _GeneratorGetResumeMode(r0)
					if (!r24 === 0)
					{
						ACCU = r23
					}
					ACCU = 1
					r18 = 1
					r19 = r23
					break
				}
				catch {}
				r23 = ACCU
				ACCU = null
				ACCU = Scope[17]
				r23 = Scope[1]
				if (!Scope[17][2][r1(512)]) continue
				ACCU = Scope[17][2]
				ACCU = Scope[17][2]
				r4 = Scope[17][2]
			}
			ACCU = -1
			r19 = -1
			r18 = -1
		}
		catch
		{
			r19 = ACCU
			r18 = 0
		}
		if (!r17)
		{
			r22 = Scope[1]
			try
			{
				if (!r16["return"] == undefined)
				{
					ACCU = r16["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		switch (r18)
		default:
		{
			break
		}
		case (0):
		{
			ACCU = r19
		}
		case (1):
		{
			r22 = r0
			r23 = r19
			return r23
		}
		if (r4)
		{
			r16 = \\\x641\\x627\\x631\\x63a|\\x631\\x641\\x636|\\x645\\x647\\x644\\x629|\\x627\\x644\\x648\\x635\\x648\\x644\
			r18 = 523
			r15 = r16["test"]
			r19 = 454
			r17 = r4["message"]
			if (r15(r17))
			{
				r16 = func_urlVariants_0x10000000c(a0)
				r17 = r16["slice"](1)
				r16 = GetIterator(r17)
				r15 = r16["next"]
				ACCU = false
				r17 = false
				r20 = Scope[1]
				try
				{
					while (true)
					{
						r17 = true
						r21 = r15()
						if (r21["done"]) break
						r17 = false
						ACCU = r21["value"]
						r22 = Scope[1]
						try
						{
							r25 = r2[0]
							r24 = func_fetchOnce_0x100000009(r21["value"], r25)
							r23 = r0
							r23 = await r24
							r24 = _GeneratorGetResumeMode(r0)
							if (!r24 === 0)
							{
								ACCU = r23
							}
							ACCU = 1
							r18 = 1
							r19 = r23
							break
						}
						catch {}
						r23 = ACCU
						ACCU = null
						ACCU = Scope[18]
						r23 = Scope[1]
						if (!Scope[18][2][r1(512)]) continue
						ACCU = Scope[18][2]
						ACCU = Scope[18][2]
						r4 = Scope[18][2]
					}
					ACCU = -1
					r19 = -1
					r18 = -1
				}
				catch
				{
					r19 = ACCU
					r18 = 0
				}
				if (!r17)
				{
					r22 = Scope[1]
					try
					{
						if (!r16["return"] == undefined)
						{
							ACCU = r16["return"]()
						}
						catch {}
					}
				}
				ACCU = null
				switch (r18)
				default:
				{
					break
				}
				case (0):
				{
					ACCU = r19
				}
				case (1):
				{
					r22 = r0
					r23 = r19
					return r23
				}
			}
		}
		if (r4)
		r16 = \\\x641\\x627\\x631\\x63a\
		r15 = r16["test"]
		r17 = r4["message"]
		ACCU = r15(r17)
			&& (r15(r17))
		{
			ACCU = "\\x627\\x644\\x62e\\x627\\x62f\\x645 \\x64a\\x631\\x641\\x636 \\x627\\x644\\x627\\x62a\\x635\\x627\\x644 \\x627\\x644\\x645\\x628\\x627\\x634\\x631 \\x645\\x646 \\x647\\x630\\x627 \\x627\\x644\\x62c\\x647\\x627\\x632 (\\x631\\x62f \\x641\\x627\\x631\\x63a) \\x631\\x63a\\x645 \\x646\\x62c\\x627\\x62d\\x647 \\x639\\x628\\x631 \\x645\\x648\\x627\\x642\\x639 \\x648\\x633\\x64a\\x637\\x629. \\x63a\\x627\\x644\\x628\\x627\\x64b \\x64a\\x62d\\x62c\\x628 \\x62d\\x633\\x628 IP \\x623\\x648 \\x64a\\x62a\\x637\\x644\\x628 \\x648\\x633\\x64a\\x637\\x627\\x64b. \\x627\\x644\\x62d\\x644: \\x627\\x633\\x62a\\x62e\\x62f\\x645 \\x631\\x627\\x628\\x637 M3U \\x627\\x644\\x62c\\x627\\x647\\x632 \\x627\\x644\\x630\\x64a \\x64a\\x648\\x644\\x651\\x62f\\x647 \\x627\\x644\\x645\\x648\\x642\\x639 \\x627\\x644\\x648\\x633\\x64a\\x637 (\\x627\\x646\\x638\\x631 \\x632\\x631 \\xab\\x627\\x633\\x62a\\x64a\\x631\\x627\\x62f \\x631\\x627\\x628\\x637 M3U\\xbb)."
		}
		else
		{
			ACCU = r4
			if (r4)
			{
				ACCU = r4["message"]
			}
			else
			{
				ACCU = "فشل غير معروف"
			}
		}
		r7 = ACCU
		r16 = "تعذّر جلب القنوات: "
		r16 = (r16 + r7)
		ACCU = Error
		ACCU = Error(r16)
	}
	catch {}
	r15 = ACCU
	ACCU = null
	ACCU = Scope[19]
	r15 = Scope[1]
	r16 = r0
	return Scope[19][2]
}
function func_urlVariants_0x10000000c(a0)
{
	r0 = func_0x1b15_0x10000000b
	r9 = new [0]
	r9[0] = a0
	r1 = r9
	ACCU = r9
	r8 = Scope[1]
	try
	{
		ACCU = URL
		r3 = URL(func_0x1b15_0x10000000b)
		r9 = r3["protocol"]
		if (r9 === "http:")
		{
			ACCU = URL
			r7 = URL(func_0x1b15_0x10000000b)
			r10 = "protocol"
			r7[r10] = "https:"
			r10 = "port"
			r7[r10] = ""
			r11 = r7["toString"]
			r11 = r11()
			ACCU = r1["push"](r11)
		}
		if (!r3["port"])
		r9 = r3["port"]
		ACCU = r9 === "80"
			|| (r9 === "80")
		{
			r10 = new ["8080", "8000", 0, 0, 0]
			r10[2] = "2082"
			r10[3] = "2095"
			r12 = 438
			r10[4] = "25461"
			r10 = GetIterator(r10)
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
					ACCU = URL
					r6 = URL(r0)
					r17 = r0(485)
					r6[r17] = r15["value"]
					r16 = r1[r0(437)]
					r18 = r6[r0(434)]
					r18 = r18()
					ACCU = r16(r18)
					r15 = r15["value"]
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
		}
	}
	catch
	{
		r9 = ACCU
		ACCU = null
		ACCU = Scope[20]
		r9 = Scope[1]
	}
	return r1
}
function func_0x1b15_0x10000000b(a0, a1)
{
	a0 = (a0 - 427)
	r0 = Scope[1][7]()
	r1 = r0[a0]
	if (Scope[1][9]["CfqjyG"] == undefined)
	{
		Scope[1][9]["yzRCCV"] = func_0x8ae2cf_0x10000000a
		Scope[1][9]["ocMgPO"] = {}
		Scope[1][9]["CfqjyG"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][9]["ocMgPO"][r4])
	{
		r1 = Scope[1][9]["yzRCCV"](r1)
		Scope[1][9]["ocMgPO"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][9]["ocMgPO"][r4]
	}
	return r1
}
function func_0x8ae2cf_0x10000000a(a0)
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
function func_fetchOnce_0x100000009(a0, a1, a2)
{
	r0 = Scope[1]
	Scope[21][4] = a0
	Scope[21][3] = a1
	Scope[21][2] = a2
	ACCU = Promise
	return Promise(func_unknown_0x100000008)
}
function func_unknown_0x100000008(a0, a1)
{
	r3 = Scope[21]
	Scope[22][3] = a0
	Scope[22][2] = a1
	Scope[22][4] = func_0x1b15_0x10000000b
	ACCU = undefined
	r4 = Scope[22]
	try
	{
		ACCU = URL
		ACCU = URL(Scope[21][4])
		Scope[22][5] = URL(Scope[21][4])
	}
	catch
	{
		r5 = ACCU
		ACCU = null
		ACCU = Scope[23]
		r5 = Scope[22]
		r8 = "رابط Xtream غير صحيح"
		ACCU = Error
		r7 = Error(r8)
		return Scope[22][2](r7)
	}
	r4 = Scope[22][5]["protocol"]
	ACCU = r4 === "https:"
	if (r4 === "https:")
	{
		ACCU = Scope[1][4]
	}
	else
	{
		ACCU = Scope[1][3]
	}
	r0 = ACCU
	r4 = new {"User-Agent": null, "Accept": "*/*", "Accept-Encoding": null, "Icy-MetaData": "1", "Connection": null}
	r4["User-Agent"] = Scope[21][3]
	r4["Accept-Encoding"] = "identity"
	r4["Connection"] = "keep-alive"
	r1 = r4
	r4 = new {"timeout": 45000, "headers": null}
	r4["headers"] = r1
	r2 = r4
	r4 = Scope[22][5]["protocol"]
	if (r4 === "https:")
	{
		r2["rejectUnauthorized"] = !Boolean([])
	}
	r4 = r0["get"]
	r5 = r0
	r7 = r2
	Scope[22][6] = r4(Scope[22][5], r7, func_unknown_0x100000005)
	r6 = "timeout"
	ACCU = Scope[22][6]["on"](r6, func_unknown_0x100000006)
	r6 = "error"
	ACCU = Scope[22][6]["on"](r6, func_unknown_0x100000007)
	return undefined
}
function func_unknown_0x100000007(a0)
{
	r1 = a0["message"]
	r2 = a0["code"]
	if (r2 === "ENOTFOUND")
	{
		r1 = "تعذّر إيجاد الخادم (اسم النطاق خاطئ أو لا إنترنت)"
	}
	else
	{
		r2 = a0["code"]
		if (r2 === "ECONNREFUSED")
		{
			r1 = "الخادم رفض الاتصال (رقم المنفذ غالباً خاطئ)"
		}
		else
		{
			r2 = a0["code"]
			if (r2 === "ETIMEDOUT")
			r2 = a0["code"]
				|| (r2 === "EHOSTUNREACH")
			{
				r1 = "تعذّر الوصول للخادم (محجوب أو متوقف)"
			}
			else
			{
				r2 = a0["code"]
				if (r2 === "ECONNRESET")
				{
					r1 = "قطع الخادم الاتصال"
				}
			}
		}
	}
	ACCU = Error
	r3 = Error(r1)
	ACCU = Scope[22][2](r3)
	return undefined
}
function func_unknown_0x100000006()
{
	r1 = Scope[22][6]["destroy"]
	ACCU = r1()
	r3 = "انتهت مهلة الاتصال (45ث) — الخادم بطيء أو المنفذ مغلق"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[22][2](r2)
	return undefined
}
function func_unknown_0x100000005(a0)
{
	r0 = Scope[22]
	Scope[24][2] = func_0x1b15_0x10000000b
	r2 = new [301, 302, 307, 308]
	r1 = r2["includes"]
	if (r1(a0["statusCode"]))
	{
		r1 = a0["headers"]
		if (r1["location"])
		{
			ACCU = Scope[21][2]
			if (!Scope[21][2])
			{
				ACCU = 0
			}
			r1 = ACCU
			if (r1 < 4)
			{
				r1 = a0["resume"]
				ACCU = r1()
				r5 = a0["headers"]
				ACCU = URL
				r4 = URL(r5["location"], Scope[22][5])
				r3 = r4["toString"]
				r3 = r3()
				ACCU = Scope[21][2]
				if (!Scope[21][2])
				{
					ACCU = 0
				}
				r5 = (ACCU + 1)
				r2 = func_fetchOnce_0x100000009(r3, Scope[21][3], r5)
				return Scope[22][3](r2)
			}
		}
	}
	r1 = a0["statusCode"]
	if (r1 === 401)
	r1 = a0["statusCode"]
		|| (r1 === 403)
	{
		r1 = a0["resume"]
		ACCU = r1()
		r2 = Object["assign"]
		ACCU = Error
		r4 = Error("\\x628\\x64a\\x627\\x646\\x627\\x62a \\x627\\x644\\x62f\\x62e\\x648\\x644 \\x645\\x631\\x641\\x648\\x636\\x629 (\\x627\\x633\\x645 \\x627\\x644\\x645\\x633\\x62a\\x62e\\x62f\\x645/\\x643\\x644\\x645\\x629 \\x627\\x644\\x645\\x631\\x648\\x631 \\x623\\x648 \\x627\\x644\\x627\\x634\\x62a\\x631\\x627\\x643 \\x645\\x646\\x62a\\x647\\x64d)")
		r5 = new {"fatal": null}
		r5["fatal"] = !(!Boolean([]))
		r2 = r2(r4, r5)
		return Scope[22][2](r2)
	}
	if (!a0["statusCode"] === 200)
	{
		r1 = a0["resume"]
		ACCU = r1()
		r3 = "رد غير متوقع من خادم Xtream: HTTP "
		r3 = (r3 + a0["statusCode"])
		ACCU = Error
		r2 = Error(r3)
		return Scope[22][2](r2)
	}
	Scope[24][3] = ""
	Scope[24][4] = 0
	r3 = "data"
	ACCU = a0["on"](r3, func_unknown_0x100000003)
	r3 = "end"
	ACCU = a0["on"](r3, func_unknown_0x100000004)
	return undefined
}
function func_unknown_0x100000004()
{
	r1 = Scope[24][3]["trim"]
	if (!r1())
	{
		r3 = "رد فارغ من الخادم"
		ACCU = Error
		r2 = Error(r3)
		return Scope[22][2](r2)
	}
	ACCU = Scope[22][3](Scope[24][3])
	return undefined
}
function func_unknown_0x100000003(a0)
{
	r2 = (Scope[24][4] + a0["length"])
	ACCU = Scope[24][4]
	Scope[24][4] = r2
	if (Scope[24][4] > 41943040)
	{
		r1 = Scope[22][6]["destroy"]
		ACCU = r1()
		ACCU = Error
		r2 = Error("\\x642\\x627\\x626\\x645\\x629 \\x627\\x644\\x642\\x646\\x648\\x627\\x62a \\x643\\x628\\x64a\\x631\\x629 \\x62c\\x62f\\x627\\x64b")
		return Scope[22][2](r2)
	}
	r2 = a0["toString"]
	r2 = (Scope[24][3] + r2("utf8"))
	ACCU = Scope[24][3]
	Scope[24][3] = r2
	return undefined
}
function func_0x5e02_0x100000002()
{
	r0 = Scope[1]
	Scope[25][2] = new ["DhjPBq", "DgvZDa", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcaOndxyQYKG4OcuinIN2ytyRTIN2k/zHsdyQnI32yRyOsdyO9MiinIN2ytzHDMg2yhyScdzHDI62ytzGG", "z2v0x2XPDMvFy2f0zwDVCMLLCW", "2ylyT9I5inIN2ytyRTIN2k/zHsdyP9Me2kFyQTI12kFzHa", "2lhyRYdyP9Me2yJyS9Mk2lCG2ytzITIZinMc2kFyPTMf2kKGttnvinI12kFzHnIT2kKGknIQ2k3zGTMcinMf2yyG2kFzHnIO2yRyP9Mg2kFyQIdyO9MiinIX2kFyQnI3inIN2ytzInIZ2yRyTYK", "C3bSAxq", "ruHpu1rvtLjfquni", "2kFzHnIU2kFyR9MfinIX2yhyTIdyP9Me2kFyQTI12kFzHcaO2lhzGTMfinIN2ytzHDMg2yhyScdyUTIN2ytyQnIN2ySG2k7yP9I32kyP", "Ahr0CdOVlW", "Dg9tDhjPBMC", "2lhyRYdyUTMk2leG2yxyQTMi2ylyUsdzHDMginIU2kFyR9MfifH0CMvHBtOGsfruuca", "tw96AwXSys81lJaGkfDPBMrVD3mGtLqGmtaUmdSGv2LUnJq7ihG2ncKGqxbWBgvxzwjlAxqVntm3lJm2", "ChvZAa", "mJu0nJe", "l2DLDc5WAha/DxnLCM5HBwu9", "2kRyUDIW2zhySsdyP9Me2yJyTDMi2yqG2ytzHnIU2kFyR9MficJzHDIT2kZzInIOinIJ2yGG2yxyQTMi2ylzGsK", "Btn1oa", "CgfYC2u", "mJa4mG", "ogXyBenUDG", "2kRyUDIW2zhySsdyRnMe2kGG2kFzHnMc2yBzInIN2kO6ia", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinMb2yOG2kFzHnIT2lpyP9IO", "AgvHzgvYCW", "zgf0yq", "Ahr0CdO", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinMb2yOG2kFzHnIX2kFyQnI3", "BMfTzq", "BgvUz3rO", "yxv0Aa", "BwvZC2fNzq", "Aw5JBhvKzxm", "2kJzITIN2yByP9IQinIN2ytyR9IU2yJzHcdzHDIX2yhzInI22kKG2yxzHIbWBgf5zxjFyxbPicJyQTIT2ylzGIdzHDMginIN2ytyP9IZ2yuV2kFzHnMd2ytzHDIPl9IN2ytyP9I02kRySDIN2ymP", "2yhyTnMeinI62yRySsdzHDI52lhzInMb", "mZa4nJiYnMDZq25csq", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinI52kJySsdyP9Me2yJyS9Mk2lC", "jM5VC3rYzwfTChjVEhK9Dhj1zq", "tgf2zI81oc43nI4Xmda", "BwfW", "l20ZDt91CMW9", "ntbrrfLUww4", "mtK3oti3mLDeA3DSuW", "zxjYB3i", "2kFzHnIX2kFyQnI3inMe2kCG2yRyRDIQ2yJzIIdzGTIN2kBzHDIPie0ZvsdyTDIN2ytyRDIP", "C3rYzwfTx2LJB24", "2ytyPYdzGTMg2yJyP9IQ", "mJa5nq", "mJi4odmZmefpv0jYtW", "A2vLCc1HBgL2zq", "B2TODhrWlZqUos4Z", "ChjVDg9JB2W", "Bg9NBW", "DxnLCL9PBMzV", "Ahr0Chm6", "Ahr0Ca", "mtCWnJfzCerlv00", "vgL2Au1HDguVnc43lJa", "svbuvLnTyxj0zxjZugXHEwvY", "C3rHDhvZq29Kzq", "zgvZDhjVEq", "AwrLBNrPDhK", "Cg9YDa", "y29Kzq", "C3rYzwfTx2LK", "nJiXmtaWrgrvAMDl", "rvrjtuvet1vu", "l3bSyxLLCL9HCgKUCgHWp3vZzxjUyw1Lpq", "l2XPDMuV", "mte0C0Lrt0Lr", "y2f0zwDVCNLFAwq", "i0vyveLorG", "CMvWBgfJzq", "C3rHCNrZv2L0Aa", "CMvZDw1L", "2kRyUDIW2zhySsdyPDMk2kZyP9IVinIN2ytyRTIN2k/zHsaO2kFyS9MfinIN2ytzHTI32kFzGIdyRTIN2lFyPIdyO9MiinMe2kCG2kxzHTIQ2lhzHTIQkq", "z3jVDxa", "y2f0zwDVCNLFBMfTzq", "ntu2nJuWmfDyAfLdtq", "z2v0", "vKXdlZmUmc4YmcbmAwjwtemVmY4WlJiW", "u2vYDMvYifvstcdzInIN2lpzHsdyP9Me2yxyS9IQ2k7yR9MfinMi2ypzHnMf2kKG2kFzHnMf2lhzInIXinMf2lFzHnMi2kJyQq", "jNbHC3n3B3jKpq", "2lhyP9IO2lCGttnvinMf2lFzHnMi2kG", "Bg9JyxrPB24", "C2XPy2u", "2lhyRYdzGDIN2lhyUIdzHDMginIN2ytyRTIN2k/zHq", "ru5pvezpvu5e", "zw5K", "zMf0ywW", "2lhyP9IO2lCGwhrYzwfTinI62yRySsdyTDIT2yRyRq", "yxnZAwDU", "mtu3mda1mw5AAKHpyG", "runptK5sruzvu0ve", "2lhyRYbWBgf5zxjFyxbPinI62yRySsdyTDIN2ytyRsaOsLnptIK", "AxnbCNjHEq", "zxHWB3j0CW", "DgLTzw91Da", "Bwf0y2G"]
	Scope[1][7] = func_0x5e02_0x100000001
	return Scope[1][7]()
}
function func_0x5e02_0x100000001()
{
	return Scope[25][2]
}
function func_buildGetUrl_0x100000000(a0, a1, a2, a3)
{
	ACCU = a0
	if (!a0)
	{
		ACCU = ""
	}
	r6 = ACCU
	r5 = String(r6)
	r4 = r5["trim"]
	r4 = r4()
	r5 = \\\\\/+$\
	r1 = r4["replace"](r5, "")
	r4 = \^https?:\\\\/\\\\/\
	r3 = r4["test"]
	if (!r3(r1))
	{
		r1 = ("http://" + r1)
	}
	ACCU = a3 === "m3u8"
	if (a3 === "m3u8")
	{
		ACCU = "m3u8"
	}
	else
	{
		ACCU = "ts"
	}
	r2 = ACCU
	r3 = (r1 + "/get.php?username=")
	r3 = (r3 + encodeURIComponent(a1))
	r3 = (r3 + "&password=")
	r3 = (r3 + encodeURIComponent(a2))
	r3 = (r3 + "&type=m3u_plus&output=")
	return (r3 + r2)
}
