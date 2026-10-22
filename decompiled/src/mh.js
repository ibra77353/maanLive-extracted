// Decompiled from binary src/mh.js (V8 10.2.154.4-node.8 code cache, 11897 source chars, 21480 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x10000001b()
{
	r0 = func_unknown_0x10000001a
	return r0
}
function func_unknown_0x10000001a(a0, a1, a2, a3, a4)
{
	r3 = Scope[0]
	Scope[1][3] = func_0x1255_0x100000001
	Scope[1][7] = func_resolveRedirect_0x100000009
	Scope[1][8] = func_apiGet_0x100000010
	Scope[1][9] = func_normalizeHost_0x100000011
	Scope[1][10] = func_0x2adb_0x100000018
	Scope[1][2] = func_0x1255_0x100000001
	ACCU = func_unknown_0x100000019(Scope[1][10], 136119)
	r5 = "http"
	Scope[1][4] = a1(r5)
	r5 = "https"
	Scope[1][5] = a1(r5)
	Scope[1][6] = "IPTVSmartersPro/1.0 (Linux; Android 11)"
	r5 = new {"fetchChannels": null, "resolveChannel": null, "resolveBatch": null, "resolveRedirect": null}
	r5["fetchChannels"] = func_fetchChannels_0x100000013
	r5["resolveChannel"] = func_resolveChannel_0x100000014
	r5["resolveBatch"] = func_resolveBatch_0x100000016
	r5["resolveRedirect"] = func_resolveRedirect_0x100000009
	a2["exports"] = r5
	return undefined
}
function func_unknown_0x100000019(a0, a1)
{
	r0 = func_0x1255_0x100000001
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(473)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(531)
			r4 = (r4 + (parseInt(r6) \ 2))
			r6 = r0(485)
			r5 = (parseInt(r6) \ 3)
			r7 = r0(492)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 4)))
			r6 = r0(480)
			r4 = (r4 + (parseInt(r6) \ 5))
			r6 = r0(460)
			r4 = (r4 + (parseInt(r6) \ 6))
			r6 = r0(511)
			r4 = (r4 + (parseInt(r6) \ 7))
			r6 = r0(514)
			r2 = (r4 + (parseInt(r6) \ 8))
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
function func_0x2adb_0x100000018()
{
	r0 = Scope[1]
	Scope[3][2] = new ["B3rOzxi", "zgf0yq", "BwfW", "Ahr0Chm", "y29UDgvUDc10ExbL", "A2LUza", "odaXmtqWEK5NEMfA", "zMLUywXvCMW", "y2f0zwDVCNLFAwq", "AgvHzgvYCW", "y2f0zwDVCNLFBMfTzq", "m3vLC1r3uG", "2kFzHnIX2k8G2ypyQnMk2leG2kZyR9IN2yS", "BwLU", "Aw5JBhvKzxm", "2kRyUDIW2zhySsdyPDMk2kZyP9IVinIN2ytyRTIN2k/zHsaOre5tksdIGjqG2ylyRYdzITMd2yJzHIdzHDIT2kZzInIO2kFzIYdyUDMe2yKG2ltyQnMd2kRzGW", "zw5K", "kI8Q", "mtaZotKZmMTOwwfwAq", "ywXSB2m", "CgfYC2u", "C3rHDhvZ", "DxrMoa", "Ahr0Chm6", "BwvZC2fNzq", "jMfJDgLVBJ1NzxrFBgL2zv9JyxrLz29YAwvZ", "CMvZDw1L", "z2v0", "2kJzITIN2yByP9IQinIN2ytyR9IU2yJzHcdzHDIX2yhzInI22kKG4OcuinIQ2k3zGTMcinMf2yyG2kFzHnMh2yJyS9IQl9IN2ytyP9IZ2yuV2kFzHnMd2ytzHDIPinIJ2yGG2kFzHTIQ2yFyP9IHinIN2ytyP9I02kRySDIN2ym", "y2XVC2u", "Cgf0Ag5HBwu", "yxnZAwDU", "lNrZ", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinMb2yOG2yFySnINinIN2ytyP9I02kRySDIN2ym", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHa", "zxjYB3i", "Ahr0Ca", "odqWnZC3C2PMCgHc", "ywXS", "BMfTzq", "otG1mJK2EwT1qwXW", "r0vu", "2yhyTnMeinIN2ytyP9IQ2lvIzthzHcdyQnIN2ytyP9I02kRySDIN2ym6ia", "y29Uy2f0", "AwrLBNrPDhK", "C3rHDhvZq29Kzq", "runptK5sruzvu0ve", "2kRyUDIW2zhySsdyP9Me2yJyTDMi2yqG2ytzHnIU2kFyR9Mf", "jNbHC3n3B3jKpq", "ruHpu1rvtLjfquni", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcdyQnIN2ytzGcbbueK", "C3rYzwfTx2LK", "Bwf4", "l3bSyxLLCL9HCgKUCgHWpW", "y29Kzq", "DgvZDa", "2lhyP9IO2lCG2lRzITIXinI12k3zITIToIa", "mJi3mta4wKDqzMjs", "svbuvLnTyxj0zxjZuhjVlZeUmcaOtgLUDxG7iefUzhjVAwqGmteP", "DxnLCL9PBMzV", "A2vLCc1HBgL2zq", "Bg9JyxrPB24", "DxnLCM5HBwu9", "ndaZoti2zgnkvMHn", "BgvUz3rO", "CMvWBgfJzq", "2kRyUDIW2zhySsdyRnMe2kGG2kFzHnMc2yBzInIN2kO6ia", "2lhyP9IOCcdyP9Me2ylzHTIN2kKG2yxyT9Me2yJyQa", "ru5pvezpvu5e", "C2vHCMnO", "2kFzHnMh2yJyS9IQinMi2kFyS9MfinIN2ytzHDIZ2kRyRTIV2yuG2yJzG9Me2yxyQsdyP9Me2yxySDMi2leG2yxyT9Me2yJyQnIP", "Dg9tDhjPBMC", "ChjVDg9JB2W", "zgvZDhjVEq", "AxnbCNjHEq", "CMvXDwvZDa", "mtG4mJC0re1yEejZ"]
	Scope[1][10] = func_0x2adb_0x100000017
	return Scope[1][10]()
}
function func_0x2adb_0x100000017()
{
	return Scope[3][2]
}
function func_resolveBatch_0x100000016(a0, a1, a2)
{
	r5 = Scope[1]
	Scope[4][2] = a0
	r6 = <closure>
	r7 = <this>
	r0 = a0
	ACCU = func_0x166ec8_0x100000015
	r2 = func_0x166ec8_0x100000015
	r6 = Scope[4]
	try
	{
		Scope[4][3] = func_0x1255_0x100000001
		ACCU = a1
		if (!a1)
		{
			ACCU = Scope[1][6]
		}
		Scope[4][4] = ACCU
		r7 = Math["max"]
		r10 = Math["min"]
		ACCU = a2
		if (!a2)
		{
			ACCU = 6
		}
		r12 = ACCU
		r10 = r10(r12, 12)
		r1 = r7(1, r10)
		Scope[4][5] = []
		Scope[4][6] = 0
		r3 = []
		r4 = 0
		while (true)
		{
			if (!r4 < r1) break
			r7 = r3["push"]
			r9 = r2()
			ACCU = r3["push"](r9)
			r4 = (r4 + 1)
		}
		r7 = Promise["all"]
		r8 = r7(r3)
		r7 = r0
		r7 = await r8
		r8 = _GeneratorGetResumeMode(r0)
		if (!r8 === 0)
		{
			ACCU = r7
		}
		r7 = r0
		ACCU = Scope[4][5]
		return Scope[4][5]
	}
	catch {}
	r7 = ACCU
	ACCU = null
	ACCU = Scope[5]
	r7 = Scope[4]
	r8 = r0
	return Scope[5][2]
}
function func_0x166ec8_0x100000015()
{
	r5 = <closure>
	r6 = <this>
	r0 = ACCU
	r5 = Scope[4]
	try
	{
		r1 = func_0x1255_0x100000001
		while (true)
		{
			if (!Scope[4][6] < Scope[4][2][r1(461)]) break
			r6 = Number(Scope[4][6])
			r7 = (Number(Scope[4][6]) + 1)
			ACCU = Scope[4][6]
			Scope[4][6] = r7
			r2 = r6
			ACCU = Scope[4][2][r2]
			r6 = Scope[4]
			try
			{
				r8 = func_resolveRedirect_0x100000009(Scope[4][2][r2]["portalUrl"], Scope[4][4])
				r7 = r0
				r7 = await r8
				r8 = _GeneratorGetResumeMode(r0)
				if (!r8 === 0)
				{
					ACCU = r7
				}
				r4 = r7
				r9 = Object[r1(505)]
				r11 = {}
				r13 = new {"realUrl": null, "kind": null, "resolved": null}
				r13["realUrl"] = r4[r1(481)]
				r13["kind"] = r4[r1(479)]
				r13["resolved"] = r4["ok"]
				ACCU = r9(r11, Scope[4][2][r2], r13)
				Scope[4][5][r2] = r9(r11, Scope[4][2][r2], r13)
				continue
			}
			catch {}
			r7 = ACCU
			ACCU = null
			ACCU = Scope[6]
			r7 = Scope[4]
			r10 = Object[r1(505)]
			r12 = {}
			r14 = new {"realUrl": null, "kind": null, "resolved": null, "error": null}
			r14["realUrl"] = Scope[4][2][r2]["portalUrl"]
			r14["kind"] = r1(509)
			r14["resolved"] = !Boolean([])
			r14["error"] = Scope[6][2][r1(498)]
			Scope[4][5][r2] = r10(r12, Scope[4][2][r2], r14)
		}
		r7 = undefined
		r6 = r0
		return r7
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[7]
	r6 = Scope[4]
	r7 = r0
	return Scope[7][2]
}
function func_resolveChannel_0x100000014(a0, a1)
{
	r3 = <closure>
	r4 = <this>
	r0 = ACCU
	r3 = Scope[1]
	try
	{
		if (!a0)
		{
			r4 = Error
			r5 = "رابp القناة مطلوب"
			ACCU = Error
			ACCU = Error(r5)
		}
		ACCU = a1
		r5 = a0
		if (!a1)
		{
			ACCU = Scope[1][6]
		}
		r6 = ACCU
		r5 = func_resolveRedirect_0x100000009(r5, r6)
		r4 = r0
		r4 = await r5
		r5 = _GeneratorGetResumeMode(r0)
		if (!r5 === 0)
		{
			ACCU = r4
		}
		r2 = r4
		r4 = new {"realUrl": null, "kind": null, "status": null, "ok": null, "contentType": null}
		r4["realUrl"] = r2["finalUrl"]
		r4["kind"] = r2["kind"]
		r4["status"] = r2["status"]
		r4["ok"] = r2["ok"]
		r4["contentType"] = r2["contentType"]
		r5 = r4
		r4 = r0
		return r5
	}
	catch {}
	r4 = ACCU
	ACCU = null
	ACCU = Scope[8]
	r4 = Scope[1]
	r5 = r0
	return Scope[8][2]
}
function func_fetchChannels_0x100000013(a0)
{
	r11 = Scope[1]
	r12 = <closure>
	r13 = <this>
	ACCU = null
	r12 = Scope[9]
	try
	{
		r0 = a0["server"]
		Scope[9][2] = a0["username"]
		Scope[9][3] = a0["password"]
		ACCU = a0["userAgent"]
		r1 = a0["userAgent"]
	}
	catch
	{
		r13 = ACCU
		ACCU = null
		ACCU = Scope[10]
		r13 = Scope[9]
		r14 = Scope[9]
		return Scope[10][2]
	}
	r12 = Scope[9]
	ACCU = null
	r13 = Scope[11]
	try
	{
		Scope[11][2] = func_0x1255_0x100000001
		if (!r0)
			|| (!Scope[9][2])
			|| (!Scope[9][3])
		{
			r15 = "الهوست واسم المستخدم وكلمة المرور مطلوبة"
			ACCU = Error
			ACCU = Error(r15)
		}
		Scope[11][3] = func_normalizeHost_0x100000011(r0)
		ACCU = r1
		if (!r1)
		{
			ACCU = Scope[1][6]
		}
		r4 = ACCU
		r14 = "username="
		r14 = (r14 + encodeURIComponent(Scope[9][2]))
		r14 = (r14 + "&password=")
		r5 = (r14 + encodeURIComponent(Scope[9][3]))
		ACCU = undefined
		r6 = undefined
		r14 = Scope[11]
		try
		{
			r15 = JSON["parse"]
			r18 = (Scope[11][3] + "/player_api.php?")
			r18 = (r18 + r5)
			r18 = func_apiGet_0x100000010(r18, r4)
			r17 = Scope[9]
			r17 = await r18
			r18 = _GeneratorGetResumeMode(Scope[9])
			if (!r18 === 0)
			{
				ACCU = r17
			}
			ACCU = r15(r17)
			r6 = r15(r17)
		}
		catch
		{
			r15 = ACCU
			ACCU = null
			ACCU = Scope[12]
			r15 = Scope[11]
			r17 = "فشل الاتصbe1ل بالاشتراك: "
			r17 = (r17 + Scope[12][2]["message"])
			ACCU = Error
			ACCU = Error(r17)
		}
		if (!r6)
			|| (!r6["user_info"])
		r14 = r6["user_info"]
			|| (r14["auth"] === 0)
		{
			r15 = "بيانات الدخول مرفوضة — تحقق من الهوست/الاسم/الكلمة أو انتهاء الاشتراك"
			ACCU = Error
			ACCU = Error(r15)
		}
		ACCU = {}
		Scope[11][4] = {}
		r14 = Scope[11]
		try
		{
			r18 = (Scope[11][3] + "/player_api.php?")
			r18 = (r18 + r5)
			r19 = func_0x1255_0x100000001
			r18 = (r18 + "&action=get_live_categories")
			r18 = func_apiGet_0x100000010(r18, r4)
			r17 = Scope[9]
			r17 = await r18
			r18 = _GeneratorGetResumeMode(Scope[9])
			if (!r18 === 0)
			{
				ACCU = r17
			}
			r8 = JSON["parse"](r17)
			r16 = Array
			ACCU = Array["isArray"](r8)
			if (Array["isArray"](r8))
			{
				r16 = GetIterator(r8)
				r15 = r16["next"]
				ACCU = false
				r17 = false
				r20 = Scope[11]
				try
				{
					while (true)
					{
						r17 = true
						r21 = r15()
						if (r21["done"]) break
						r17 = false
						r24 = r21["value"]["category_id"]
						r23 = String(r24)
						ACCU = r21["value"]["category_name"]
						Scope[11][4][r23] = r21["value"]["category_name"]
						r21 = r21["value"]
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
					r22 = Scope[11]
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
			}
		}
		catch
		{
			r15 = ACCU
			ACCU = null
			ACCU = Scope[13]
			r15 = Scope[11]
		}
		ACCU = undefined
		r7 = undefined
		r14 = Scope[11]
		try
		{
			r15 = JSON["parse"]
			r18 = (Scope[11][3] + "/player_api.php?")
			r18 = (r18 + r5)
			r18 = (r18 + "&action=get_live_streams")
			r18 = func_apiGet_0x100000010(r18, r4)
			r17 = Scope[9]
			r17 = await r18
			r18 = _GeneratorGetResumeMode(Scope[9])
			if (!r18 === 0)
			{
				ACCU = r17
			}
			ACCU = r15(r17)
			r7 = r15(r17)
		}
		catch
		{
			r15 = ACCU
			ACCU = null
			ACCU = Scope[14]
			r15 = Scope[11]
			r17 = "تعذّر جلب القنوات: "
			r17 = (r17 + Scope[14][2]["message"])
			ACCU = Error
			ACCU = Error(r17)
		}
		r14 = Array["isArray"]
		if (!r14(r7))
			|| (!r7["length"])
		{
			r15 = "لم يتم العثور على قنوات في هذا الاشتراك"
			ACCU = Error
			ACCU = Error(r15)
		}
		r14 = r7["map"]
		r15 = r14(func_unknown_0x100000012)
		r14 = Scope[9]
		ACCU = r15
		return r15
	}
	catch {}
	r14 = ACCU
	ACCU = null
	ACCU = Scope[15]
	r14 = Scope[11]
	r15 = Scope[9]
	return Scope[15][2]
}
function func_unknown_0x100000012(a0)
{
	r0 = new {"streamId": null, "name": null, "logo": null, "group": null, "portalUrl": null}
	r0["streamId"] = a0["stream_id"]
	ACCU = a0["name"]
	if (!a0["name"])
	{
		ACCU = ("\\x642\\x646\\x627\\x629 " + a0["stream_id"])
	}
	r0["name"] = ACCU
	ACCU = a0["stream_icon"]
	if (!a0["stream_icon"])
	{
		ACCU = ""
	}
	r0["logo"] = ACCU
	r3 = a0["category_id"]
	ACCU = Scope[11][4][String(r3)]
	if (!Scope[11][4][String(r3)])
	{
		ACCU = ""
	}
	r0["group"] = ACCU
	r1 = ((Scope[11][3] + "/live/") + encodeURIComponent(Scope[9][2]))
	r1 = (r1 + "/")
	r1 = (r1 + encodeURIComponent(Scope[9][3]))
	r1 = (r1 + "/")
	r1 = (r1 + a0["stream_id"])
	r0["portalUrl"] = (r1 + ".ts")
	return r0
}
function func_normalizeHost_0x100000011(a0)
{
	ACCU = a0
	if (!a0)
	{
		ACCU = ""
	}
	r5 = ACCU
	r4 = String(r5)
	r3 = r4["trim"]()
	r2 = r3["replace"]
	r4 = \\\\\/+$\
	r1 = r2(r4, "")
	r3 = \^https?:\\\\/\\\\/\
	r2 = r3["test"]
	if (!r2(r1))
	{
		r1 = ("http://" + r1)
	}
	return r1
}
function func_apiGet_0x100000010(a0, a1)
{
	r0 = Scope[1]
	Scope[16][3] = a0
	Scope[16][2] = a1
	ACCU = Promise
	return Promise(func_unknown_0x10000000f)
}
function func_unknown_0x10000000f(a0, a1)
{
	r2 = Scope[16]
	Scope[17][3] = a0
	Scope[17][2] = a1
	Scope[17][4] = func_0x1255_0x100000001
	ACCU = undefined
	r3 = Scope[17]
	try
	{
		ACCU = URL
		ACCU = URL(Scope[16][3])
		Scope[17][5] = URL(Scope[16][3])
	}
	catch
	{
		r4 = ACCU
		ACCU = null
		ACCU = Scope[18]
		r4 = Scope[17]
		ACCU = Error
		r6 = Error("\\x631\\x627\\x628\\x637 API \\x63a\\x64a\\x631 \\x635\\x62d\\x64a\\x62d")
		return Scope[17][2](r6)
	}
	r3 = Scope[17][5]["protocol"]
	ACCU = r3 === "https:"
	if (r3 === "https:")
	{
		ACCU = Scope[1][5]
	}
	else
	{
		ACCU = Scope[1][4]
	}
	r0 = ACCU
	r3 = new {"timeout": 30000, "headers": null}
	r4 = new {"User-Agent": null, "Accept": null, "Accept-Encoding": null}
	ACCU = Scope[16][2]
	if (!Scope[16][2])
	{
		ACCU = Scope[1][6]
	}
	r4["User-Agent"] = ACCU
	r4["Accept"] = "*/*"
	r4["Accept-Encoding"] = "identity"
	r3["headers"] = r4
	r1 = r3
	r3 = Scope[17][5]["protocol"]
	if (r3 === "https:")
	{
		r1["rejectUnauthorized"] = !Boolean([])
	}
	r3 = r0["get"]
	r4 = r0
	r6 = r1
	Scope[17][6] = r3(Scope[17][5], r6, func_unknown_0x10000000c)
	ACCU = Scope[17][6]["on"]("timeout", func_unknown_0x10000000d)
	r5 = "error"
	ACCU = Scope[17][6]["on"](r5, func_unknown_0x10000000e)
	return undefined
}
function func_unknown_0x10000000e(a0)
{
	r2 = a0["code"]
	ACCU = r2 === "ENOTFOUND"
	if (r2 === "ENOTFOUND")
	{
		ACCU = "\\x62a\\x639\\x630\\x651\\x631 \\x625\\x64a\\x62c\\x627\\x62f \\x62e\\x627\\x62f\\x645 \\x627\\x644\\x627\\x634\\x62a\\x631\\x627\\x643 (DNS)"
	}
	else
	{
		ACCU = a0["message"]
	}
	r2 = ACCU
	ACCU = Error
	r1 = Error(r2)
	return Scope[17][2](r1)
}
function func_unknown_0x10000000d()
{
	r1 = Scope[17][6]["destroy"]
	ACCU = r1()
	r3 = "انتهت مهلة الاتصال بالـ API"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[17][2](r2)
	return undefined
}
function func_unknown_0x10000000c(a0)
{
	r0 = Scope[17]
	Scope[19][2] = func_0x1255_0x100000001
	r2 = new [301, 302, 307, 308]
	if (r2["includes"](a0["statusCode"]))
	{
		r1 = a0["headers"]
		if (r1["location"])
		{
			r1 = a0["resume"]
			ACCU = r1()
			r5 = a0["headers"]["location"]
			ACCU = URL
			r4 = URL(r5, Scope[17][5])
			r3 = r4["toString"]
			r3 = r3()
			r2 = func_apiGet_0x100000010(r3, Scope[16][2])
			return Scope[17][3](r2)
		}
	}
	r1 = a0["statusCode"]
	if (r1 === 401)
	r1 = a0["statusCode"]
		|| (r1 === 403)
	{
		r1 = a0["resume"]
		ACCU = r1()
		ACCU = Error
		r2 = Error("\\x628\\x64a\\x627\\x646\\x627\\x62a \\x627\\x644\\x62f\\x62e\\x648\\x644 \\x645\\x631\\x641\\x648\\x636\\x629 (\\x62a\\x62d\\x642\\x642 \\x645\\x646 \\x627\\x644\\x627\\x633\\x645/\\x627\\x644\\x643\\x644\\x645\\x629/\\x627\\x644\\x627\\x634\\x62a\\x631\\x627\\x643)")
		return Scope[17][2](r2)
	}
	r1 = a0["statusCode"]
	if (!r1 === 200)
	{
		r1 = a0["resume"]
		ACCU = r1()
		r3 = ("\\x631\\x62f \\x63a\\x64a\\x631 \\x645\\x62a\\x648\\x642\\x639: HTTP " + a0["statusCode"])
		ACCU = Error
		r2 = Error(r3)
		return Scope[17][2](r2)
	}
	Scope[19][3] = ""
	Scope[19][4] = 0
	r3 = "data"
	ACCU = a0["on"](r3, func_unknown_0x10000000a)
	r3 = "end"
	ACCU = a0["on"](r3, func_unknown_0x10000000b)
	return undefined
}
function func_unknown_0x10000000b()
{
	return Scope[17][3](Scope[19][3])
}
function func_unknown_0x10000000a(a0)
{
	r2 = (Scope[19][4] + a0["length"])
	ACCU = Scope[19][4]
	Scope[19][4] = r2
	if (Scope[19][4] > 52428800)
	{
		ACCU = Scope[17][6]["destroy"]()
		r3 = "الرد كبير جداً"
		ACCU = Error
		r2 = Error(r3)
		return Scope[17][2](r2)
	}
	r2 = a0["toString"]
	r4 = "utf8"
	r2 = (Scope[19][3] + r2(r4))
	ACCU = Scope[19][3]
	Scope[19][3] = r2
	return undefined
}
function func_resolveRedirect_0x100000009(a0, a1, a2)
{
	r0 = Scope[1]
	Scope[20][4] = a0
	Scope[20][3] = a1
	Scope[20][2] = a2
	ACCU = Promise
	return Promise(func_unknown_0x100000008)
}
function func_unknown_0x100000008(a0, a1)
{
	r2 = Scope[20]
	Scope[21][3] = a0
	Scope[21][2] = a1
	Scope[21][4] = func_0x1255_0x100000001
	ACCU = undefined
	r3 = Scope[21]
	try
	{
		ACCU = URL
		ACCU = URL(Scope[20][4])
		Scope[21][5] = URL(Scope[20][4])
	}
	catch
	{
		r4 = ACCU
		ACCU = null
		ACCU = Scope[22]
		r4 = Scope[21]
		r7 = "رابط غير صحيح: "
		r7 = (r7 + Scope[20][4])
		ACCU = Error
		r6 = Error(r7)
		return Scope[21][2](r6)
	}
	r3 = Scope[21][5]["protocol"]
	ACCU = r3 === "https:"
	if (r3 === "https:")
	{
		ACCU = Scope[1][5]
	}
	else
	{
		ACCU = Scope[1][4]
	}
	r0 = ACCU
	r3 = new {"method": null, "timeout": 20000, "headers": null}
	r3["method"] = "GET"
	r4 = new {"User-Agent": null, "Accept": "*/*", "Accept-Encoding": null, "Connection": null}
	ACCU = Scope[20][3]
	if (!Scope[20][3])
	{
		ACCU = Scope[1][6]
	}
	r4["User-Agent"] = ACCU
	r4["Accept-Encoding"] = "identity"
	r4["Connection"] = "keep-alive"
	r3["headers"] = r4
	r1 = r3
	r3 = Scope[21][5]["protocol"]
	if (r3 === "https:")
	{
		r1["rejectUnauthorized"] = !Boolean([])
	}
	r3 = r0["request"]
	r4 = r0
	r6 = r1
	Scope[21][6] = r3(Scope[21][5], r6, func_unknown_0x100000005)
	ACCU = Scope[21][6]["on"]("timeout", func_unknown_0x100000006)
	ACCU = Scope[21][6]["on"]("error", func_unknown_0x100000007)
	ACCU = Scope[21][6]["end"]()
	return undefined
}
function func_unknown_0x100000007(a0)
{
	r1 = a0["message"]
	r2 = a0["code"]
	if (r2 === "ENOTFOUND")
	{
		r1 = "تعذّر إيجاد الخادم (DNS) — قد يكون محجوباً على شبكتك"
	}
	else
	{
		r2 = a0["code"]
		if (r2 === "ECONNREFUSED")
		{
			r1 = "\\x627\\x644\\x62e\\x627\\x62f\\x645 \\x631\\x641\\x636 \\x627\\x644\\x627\\x62a\\x635\\x627\\x644"
		}
		else
		{
			if (a0["code"] === "ETIMEDOUT")
			r2 = a0["code"]
				|| (r2 === "EHOSTUNREACH")
			{
				r1 = "تعذّر الوصول للخادم"
			}
		}
	}
	ACCU = Error
	r3 = Error(r1)
	ACCU = Scope[21][2](r3)
	return undefined
}
function func_unknown_0x100000006()
{
	ACCU = Scope[21][6]["destroy"]()
	r3 = "انتهت مهلة الاتصال"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[21][2](r2)
	return undefined
}
function func_unknown_0x100000005(a0)
{
	r1 = Scope[21]
	Scope[23][2] = a0
	Scope[23][3] = func_0x1255_0x100000001
	r3 = new [301, 302, 303, 307, 308]
	r2 = r3["includes"]
	r4 = Scope[23][2]["statusCode"]
	if (r2(r4))
	{
		if (Scope[23][2]["headers"]["location"])
		{
			ACCU = Scope[20][2]
			if (!Scope[20][2])
			{
				ACCU = 0
			}
			r2 = ACCU
			if (r2 < 6)
			{
				r2 = Scope[23][2]["resume"]
				ACCU = r2()
				r4 = Scope[23][2]["headers"]["location"]
				ACCU = URL
				r3 = URL(r4, Scope[21][5])
				r2 = r3["toString"]
				r0 = r2()
				ACCU = Scope[20][2]
				r4 = r0
				if (!Scope[20][2])
				{
					ACCU = 0
				}
				r6 = (ACCU + 1)
				r3 = func_resolveRedirect_0x100000009(r4, Scope[20][3], r6)
				return Scope[21][3](r3)
			}
		}
	}
	r3 = Scope[23][2]["headers"]
	ACCU = r3["content-type"]
	if (!r3["content-type"])
	{
		ACCU = ""
	}
	r3 = ACCU
	Scope[23][4] = String(r3)
	r2 = Buffer["alloc"]
	Scope[23][5] = r2(0)
	r4 = "data"
	ACCU = Scope[23][2]["on"](r4, func_unknown_0x100000002)
	Scope[23][6] = func_0x3d26ce_0x100000003
	ACCU = Scope[23][2]["on"]("end", func_0x3d26ce_0x100000003)
	r4 = "close"
	ACCU = Scope[23][2]["on"](r4, func_0x3d26ce_0x100000003)
	r4 = "error"
	ACCU = Scope[23][2]["on"](r4, func_unknown_0x100000004)
	return undefined
}
function func_unknown_0x100000004()
{
	return func_0x3d26ce_0x100000003()
}
function func_0x3d26ce_0x100000003()
{
	r3 = Scope[23][5]["toString"]
	r5 = "utf8"
	r7 = Math["min"]
	r9 = Scope[23][5]["length"]
	r7 = r7(r9, 1024)
	r1 = r3(r5, 0, r7)
	r2 = "other"
	r4 = \#EXTM3U\
	r3 = r4["test"]
	if (r3(r1))
	r4 = \\\\\.m3u8(\\\\?|$)\
	r3 = r4["test"]
	r5 = Scope[21][5]["pathname"]
	r5 = (r5 + Scope[21][5]["search"])
		|| (r3(r5))
	r4 = \mpegurl\
	r3 = r4["test"]
		|| (r3(Scope[23][4]))
	{
		r2 = "m3u8"
	}
	else
	{
		r4 = \mp2t\
		if (r4["test"](Scope[23][4]))
		r4 = \\\\\.ts(\\\\?|$)\
		r3 = r4["test"]
		r5 = Scope[21][5]["pathname"]
		r5 = (r5 + Scope[21][5]["search"])
			|| (r3(r5))
		{
			r2 = "ts"
		}
	}
	r4 = new {"finalUrl": null, "status": null, "contentType": null, "kind": null, "ok": null}
	r5 = Scope[21][5]["toString"]
	r4["finalUrl"] = r5()
	r4["status"] = Scope[23][2]["statusCode"]
	r4["contentType"] = Scope[23][4]
	r4["kind"] = r2
	r5 = Scope[23][2]["statusCode"]
	ACCU = r5 >= 200
	if (r5 >= 200)
	{
		r5 = Scope[23][2]["statusCode"]
		ACCU = r5 < 400
	}
	r4["ok"] = ACCU
	ACCU = Scope[21][3](r4)
	return undefined
}
function func_unknown_0x100000002(a0)
{
	if (Scope[23][5]["length"] < 1024)
	{
		r1 = Buffer["concat"]
		r4 = new [0, 0]
		r4[0] = Scope[23][5]
		r4[1] = a0
		r1 = r1(r4)
		ACCU = Scope[23][5]
		Scope[23][5] = r1
	}
	if (Scope[23][5]["length"] >= 1024)
	{
		ACCU = Scope[21][6]["destroy"]()
	}
	return undefined
}
function func_0x1255_0x100000001(a0, a1)
{
	a0 = (a0 - 460)
	r0 = Scope[1][10]()
	r1 = r0[a0]
	if (Scope[1][3]["jGXWMc"] == undefined)
	{
		Scope[1][3]["dCccGC"] = func_0x315434_0x100000000
		Scope[1][3]["cUWRiT"] = {}
		Scope[1][3]["jGXWMc"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][3]["cUWRiT"][r4])
	{
		r1 = Scope[1][3]["dCccGC"](r1)
		Scope[1][3]["cUWRiT"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][3]["cUWRiT"][r4]
	}
	return r1
}
function func_0x315434_0x100000000(a0)
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
