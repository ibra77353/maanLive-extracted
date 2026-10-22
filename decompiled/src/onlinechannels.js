// Decompiled from binary src/onlinechannels.js (V8 10.2.154.4-node.8 code cache, 11998 source chars, 23824 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x100000024()
{
	r0 = func_unknown_0x100000023
	return r0
}
function func_unknown_0x100000023(a0, a1, a2, a3, a4)
{
	r2 = Scope[0]
	Scope[1][3] = func_0x1663_0x100000001
	Scope[1][12] = func_downloadCover_0x100000008
	Scope[1][13] = func_0x59f3_0x10000000a
	Scope[1][14] = func_postJSON_0x100000011
	Scope[1][15] = func_listAllowed_0x100000012
	Scope[1][2] = func_0x1663_0x100000001
	ACCU = func_unknown_0x100000022(Scope[1][13], 529254)
	r4 = "http"
	Scope[1][4] = a1(r4)
	r4 = "https"
	Scope[1][5] = a1(r4)
	Scope[1][6] = a1("fs")
	Scope[1][7] = a1("path")
	r4 = "crypto"
	Scope[1][8] = a1(r4)
	Scope[1][9] = a1("./store")
	Scope[1][10] = a1("./license")
	r3 = Scope[1][7]["join"]
	r5 = Scope[1][9]["ROOT"]
	r6 = "srv"
	r8 = "covers"
	ACCU = r3(r5, r6, "uploads", r8)
	Scope[1][11] = r3(r5, r6, "uploads", r8)
	r3 = Scope[1]
	try
	{
		r4 = Scope[1][6]["mkdirSync"]
		r7 = new {"recursive": null}
		r7["recursive"] = !(!Boolean([]))
		ACCU = r4(Scope[1][11], r7)
	}
	catch
	{
		r4 = ACCU
		ACCU = null
		ACCU = Scope[2]
		r4 = Scope[1]
	}
	Scope[1][16] = 0
	r4 = new {"listAllowed": null, "importChannel": null, "downloadCover": null, "refreshImportedUrls": null}
	r4["listAllowed"] = func_listAllowed_0x100000012
	r4["importChannel"] = func_importChannel_0x100000019
	r4["downloadCover"] = func_downloadCover_0x100000008
	r4["refreshImportedUrls"] = func_refreshImportedUrls_0x100000021
	a2["exports"] = r4
	return undefined
}
function func_unknown_0x100000022(a0, a1)
{
	r0 = func_0x1663_0x100000001
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(158)
			r4 = (parseInt(r5) \ 1)
			r6 = r0(164)
			r4 = (r4 * ((-parseInt(r6)) \ 2))
			r6 = r0(155)
			r5 = (parseInt(r6) \ 3)
			r7 = r0(131)
			r4 = (r4 + (r5 * (parseInt(r7) \ 4)))
			r6 = r0(197)
			r5 = (parseInt(r6) \ 5)
			r7 = r0(134)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 6)))
			r6 = r0(183)
			r4 = (r4 + ((-parseInt(r6)) \ 7))
			r6 = r0(146)
			r5 = (parseInt(r6) \ 8)
			r7 = r0(161)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 9)))
			r6 = r0(180)
			r4 = (r4 + ((-parseInt(r6)) \ 10))
			r6 = r0(198)
			r2 = (r4 + (parseInt(r6) \ 11))
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
		ACCU = Scope[3]
		r4 = Scope[1]
		r7 = r1["shift"]()
		ACCU = r1["push"](r7)
	}
	return undefined
}
function func_refreshImportedUrls_0x100000021(a0)
{
	r1 = Scope[1]
	r2 = <closure>
	r3 = <this>
	ACCU = null
	r2 = Scope[4]
	try
	{
		Scope[4][2] = func_0x1663_0x100000001
		if (Scope[1][17])
		{
			r3 = Scope[4]
			return Scope[1][17]
		}
		if (!a0)
		{
			r3 = Date["now"]
			r3 = r3()
			r3 = (r3 - Scope[1][16])
			if (r3 < 30000)
			{
				r3 = new {"updated": 0, "skipped": null}
				r3["skipped"] = !(!Boolean([]))
				r4 = r3
				r3 = Scope[4]
				return r4
			}
		}
		r3 = func_unknown_0x100000020()
		ACCU = Scope[1][17]
		Scope[1][17] = r3
		r3 = Scope[4]
		ACCU = Scope[1][17]
		return Scope[1][17]
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[5]
	r3 = Scope[4]
	r4 = Scope[4]
	return Scope[5][2]
}
function func_unknown_0x100000020()
{
	r18 = Scope[4]
	r19 = <closure>
	r20 = <this>
	ACCU = null
	r19 = Scope[6]
	try
	{
		Scope[6][2] = func_0x1663_0x100000001
		r22 = Scope[6]
		ACCU = Scope[7]
		{
			ACCU = PushContext("Block")
			r23 = Scope[6]
			r24 = Scope[1][9]["get"]
			r3 = r24()
			r25 = r3["sources"]
			r24 = r25["filter"]
			r4 = r25["filter"](func_unknown_0x10000001a)
			ACCU = r4["length"]
			if (!r4["length"])
			{
				r21 = new {"updated": 0}
				r20 = 1
			}
			else
			{
				r25 = func_listAllowed_0x100000012()
				r24 = Scope[6]
				r24 = await r25
				r25 = _GeneratorGetResumeMode(Scope[6])
				if (!r25 === 0)
				{
					ACCU = r24
				}
				r5 = r24
				r27 = func_unknown_0x10000001b
				r25 = r5["map"](func_unknown_0x10000001b)
				ACCU = Map
				r6 = Map(r25)
				Scope[7][2] = Map(Scope[6])
				r25 = GetIterator(r5)
				r24 = r25["next"]
				ACCU = false
				r26 = false
				r29 = Scope[7]
				try
				{
					while (true)
					{
						r26 = true
						r30 = r24()
						if (r30["done"]) break
						r26 = false
						r31 = Scope[7][2]["set"]
						r33 = r30["value"]["name"]
						r34 = Scope[7][2]["get"]
						r36 = r30["value"]["name"]
						r30 = r30["value"]
						if (r34(r36)) continue
						ACCU = r31(r33, (0 + 1))
					}
					ACCU = -1
					r28 = -1
					r27 = -1
				}
				catch
				{
					r28 = ACCU
					r27 = 0
				}
				if (!r26)
				{
					r31 = Scope[7]
					try
					{
						if (!r25["return"] == undefined)
						{
							ACCU = r25["return"]()
						}
						catch {}
					}
				}
				ACCU = null
				if (r27 === 0)
				{
					r20 = 0
					r21 = r28
				}
				else
				{
					r26 = r5["filter"]
					r26 = r26(func_unknown_0x10000001c)
					r28 = 137
					r25 = r26["map"]
					r27 = func_unknown_0x10000001d
					r25 = r25(func_unknown_0x10000001d)
					ACCU = Map
					r7 = Map(r25)
					r8 = 0
					r25 = GetIterator(r4)
					r24 = r25["next"]
					ACCU = false
					r26 = false
					r29 = Scope[7]
					try
					{
						while (true)
						{
							r26 = true
							r30 = r24()
							if (r30["done"]) break
							r26 = false
							r10 = r30["value"]
							r33 = r30["value"]["onlineId"]
							r11 = r6["get"](r33)
							r30 = r30["value"]
							if (!r6["get"](r33))
							{
								ACCU = r10["name"]
								if (!r10["name"])
								{
									ACCU = ""
								}
								r34 = ACCU
								r33 = String(r34)
								r32 = r33["replace"]
								r34 = \^\\x623\\x648\\x646\\x644\\x627\\x64a\\x646:\\\\s*\
								r32 = r32(r34, "")
								r31 = r32["trim"]
								r14 = r31()
								r31 = r7["get"]
								ACCU = r31(r14)
								if (!r31(r14))
								{
									ACCU = null
								}
								r11 = ACCU
								if (ACCU)
								{
									r31 = Scope[7]
									Scope[8][2] = r10["onlineId"]
									r33 = "onlineId"
									r10[r33] = r11["id"]
									r33 = r3["channels"]
									r15 = r33["find"](func_unknown_0x10000001e)
									if (r33["find"](func_unknown_0x10000001e))
									{
										r33 = "onlineId"
										r15[r33] = r11["id"]
									}
								}
							}
							if (!r11)
							{
								continue
							}
							r33 = r11["variants"]
							ACCU = Array["isArray"](r33)
							if (Array["isArray"](r33))
							{
								ACCU = r11["variants"]["filter"](func_unknown_0x10000001f)
							}
							else
							{
								ACCU = []
							}
							r12 = ACCU
							ACCU = r11["url"]
							if (!r11["url"])
							{
								ACCU = r12[0]
								if (r12[0])
								{
									r31 = r12[0]
									ACCU = r31["url"]
								}
								if (!ACCU)
								{
									ACCU = ""
								}
							}
							r13 = ACCU
							if (!ACCU) continue
							if (!!(r13 === r10["url"])) continue
							r10["url"] = r13
							r32 = "streamType"
							ACCU = r11["streamType"]
							r31 = r10
							if (!r11["streamType"])
							{
								ACCU = "hls"
							}
							r31[r32] = ACCU
							r31 = Number(r8)
							r8 = (Number(r8) + 1)
							ACCU = r31
						}
						ACCU = -1
						r28 = -1
						r27 = -1
					}
					catch
					{
						r28 = ACCU
						r27 = 0
					}
					if (!r26)
					{
						r31 = Scope[7]
						try
						{
							if (!r25["return"] == undefined)
							{
								ACCU = r25["return"]()
							}
							catch {}
						}
					}
					ACCU = null
					if (r27 === 0)
					{
						r20 = 0
						r21 = r28
					}
					else
					{
						if (r8)
						{
							r24 = Scope[1][9]["save"]
							ACCU = r24()
						}
						r24 = new {"updated": null}
						r24["updated"] = r8
						r21 = r24
						r20 = 1
					}
				}
			}
		}
		catch
		{
			r21 = ACCU
			r20 = 0
		}
		r24 = Date["now"]
		r24 = r24()
		ACCU = Scope[1][16]
		Scope[1][16] = r24
		ACCU = Scope[1][17]
		ACCU = null
		switch (r20)
		default:
		{
			break
		}
		case (0):
		{
			ACCU = r21
		}
		case (1):
		{
			r24 = Scope[6]
			r25 = r21
			return r25
		}
		r21 = undefined
		r20 = Scope[6]
		ACCU = r21
		return r21
	}
	catch {}
	r20 = ACCU
	ACCU = null
	ACCU = Scope[9]
	r20 = Scope[6]
	r21 = Scope[6]
	return Scope[9][2]
}
function func_unknown_0x10000001f(a0)
{
	ACCU = a0
	if (a0)
	{
		ACCU = a0["url"]
	}
	return ACCU
}
function func_unknown_0x10000001e(a0)
{
	r0 = a0["onlineId"]
	return r0 === Scope[8][2]
}
function func_unknown_0x10000001d(a0)
{
	r1 = new [0, 0]
	r1[0] = a0["name"]
	r1[1] = a0
	return r1
}
function func_unknown_0x10000001c(a0)
{
	r2 = a0["name"]
	r0 = Scope[7][2]["get"](r2)
	return r0 === 1
}
function func_unknown_0x10000001b(a0)
{
	r1 = new [0, 0]
	r1[0] = a0["id"]
	r1[1] = a0
	return r1
}
function func_unknown_0x10000001a(a0)
{
	return a0["onlineId"]
}
function func_importChannel_0x100000019(a0)
{
	r11 = Scope[1]
	Scope[10][2] = a0
	r12 = <closure>
	r13 = <this>
	r0 = a0
	ACCU = null
	r12 = Scope[10]
	try
	{
		Scope[10][3] = func_0x1663_0x100000001
		r13 = Scope[1][9]["get"]
		r1 = r13()
		r13 = "أونلاين: "
		r2 = (r13 + Scope[10][2]["name"])
		r13 = Array["isArray"]
		ACCU = r13(Scope[10][2]["variants"])
		if (r13(Scope[10][2]["variants"]))
		{
			r14 = Scope[10][2]["variants"]
			r13 = r14["filter"]
			ACCU = r13(func_unknown_0x100000013)
		}
		else
		{
			ACCU = []
		}
		r3 = ACCU
		ACCU = Scope[10][2]["url"]
		if (!Scope[10][2]["url"])
		{
			ACCU = r3[0]
			if (r3[0])
			{
				r13 = r3[0]
				ACCU = r13["url"]
			}
			if (!ACCU)
			{
				ACCU = ""
			}
		}
		r4 = ACCU
		ACCU = Scope[10][2]["streamType"]
		if (!Scope[10][2]["streamType"])
		{
			ACCU = "hls"
		}
		r5 = ACCU
		ACCU = Scope[10][2]["userAgent"]
		if (!Scope[10][2]["userAgent"])
		{
			ACCU = ""
		}
		r6 = ACCU
		ACCU = Scope[10][2]["referer"]
		if (!Scope[10][2]["referer"])
		{
			ACCU = ""
		}
		r7 = ACCU
		r14 = r1["sources"]
		r13 = r14["find"]
		Scope[10][4] = r13(func_unknown_0x100000014)
		if (Scope[10][4])
		{
			r14 = "type"
			Scope[10][4][r14] = "hls"
			r14 = "url"
			Scope[10][4][r14] = r4
			Scope[10][4]["passthrough"] = !(!Boolean([]))
			r14 = "streamType"
			Scope[10][4][r14] = r5
			if (r6)
			{
				r14 = "userAgent"
				Scope[10][4][r14] = r6
			}
			else
			{
				delete "userAgent"[Scope[10][4]]
			}
			if (r7)
			{
				r14 = "referer"
				Scope[10][4][r14] = r7
			}
			else
			{
				delete "referer"[Scope[10][4]]
			}
			delete "variants"[Scope[10][4]]
			delete "urlBackup"[Scope[10][4]]
			r14 = "name"
			Scope[10][4][r14] = r2
		}
		else
		{
			r13 = new {"id": null, "name": null, "type": null, "url": null, "onlineId": null, "passthrough": null, "streamType": null}
			r14 = Scope[1][9]["newId"]
			r16 = "src"
			r13["id"] = r14(r16)
			r13["name"] = r2
			r13["type"] = "hls"
			r13["url"] = r4
			r13["onlineId"] = Scope[10][2]["id"]
			r13["passthrough"] = !(!Boolean([]))
			r13["streamType"] = r5
			Scope[10][4] = r13
			if (r6)
			{
				r14 = "userAgent"
				Scope[10][4][r14] = r6
			}
			if (r7)
			{
				Scope[10][4]["referer"] = r7
			}
			while (true)
			{
				r13 = r1["sources"]["some"]
				if (!r13(func_unknown_0x100000015)) break
				r14 = "name"
				r15 = Scope[10][4]["name"]
				Scope[10][4][r14] = (r15 + " ")
			}
			r14 = r1["sources"]
			r13 = r14["push"]
			ACCU = r13(Scope[10][4])
		}
		ACCU = Scope[10][2]["cover"]
		if (!Scope[10][2]["cover"])
		{
			ACCU = ""
		}
		r8 = ACCU
		if (ACCU)
		{
			r14 = \^https?:\\\\/\\\\/\
			r13 = r14["test"]
			if (r14["test"](r8))
			{
				r14 = func_downloadCover_0x100000008(r8)
				r13 = r0
				r13 = await r14
				r14 = _GeneratorGetResumeMode(r0)
				if (!r14 === 0)
				{
					ACCU = r13
				}
				r10 = r13
				if (r10)
				{
					r8 = r10
					ACCU = r8
				}
			}
		}
		r14 = r1["channels"]
		r13 = r14["find"]
		r9 = r13(func_unknown_0x100000016)
		if (!r13(func_unknown_0x100000016))
		{
			r13 = Scope[10]
			r14 = "oc_"
			r15 = Scope[10][2]["id"]["replace"]
			r17 = \[^a-zA-Z0-9_-]\
			Scope[11][2] = (r14 + r15(r17, ""))
			Scope[11][3] = Scope[10][2]["name"]
			while (true)
			{
				r15 = r1["channels"]
				r14 = r15["some"]
				if (!r14(func_unknown_0x100000017)) break
				Scope[11][3] = (Scope[11][3] + " ")
			}
			while (true)
			{
				if (!r1["channels"]["some"](func_unknown_0x100000018)) break
				Scope[11][2] = (Scope[11][2] + "_")
			}
			r14 = new {"id": null, "onlineId": null, "chanId": null, "name": null, "sourceId": null, "category": null, "sort": null, "cover": null, "logoOverlay": "", "quality": null, "fps": <null, "autoStart": null, "enabled": null}
			r15 = Scope[1][9]["newId"]
			r14["id"] = r15("ch")
			r14["onlineId"] = Scope[10][2]["id"]
			r14["chanId"] = Scope[11][2]
			r14["name"] = Scope[11][3]
			r14["sourceId"] = Scope[10][4]["id"]
			ACCU = Scope[10][2]["category"]
			if (!Scope[10][2]["category"])
			{
				ACCU = ""
			}
			r14["category"] = ACCU
			r15 = r1["channels"]
			r14["sort"] = r15["length"]
			r14["cover"] = r8
			r14["quality"] = "copy"
			r14["autoStart"] = !Boolean([])
			r14["enabled"] = !(!Boolean([]))
			r9 = r14
			r15 = r1["channels"]
			r14 = r15["push"]
			ACCU = r14(r9)
		}
		else
		{
			r15 = "sourceId"
			r9[r15] = Scope[10][4]["id"]
			if (r8)
			{
				r15 = "cover"
				r9[r15] = r8
			}
			if (!r9["quality"])
			{
				r15 = "quality"
				r9[r15] = "copy"
			}
		}
		ACCU = Scope[1][9]["save"]()
		r13 = new {"source": null, "channel": null}
		r13["source"] = Scope[10][4]
		r13["channel"] = r9
		r14 = r13
		r13 = r0
		ACCU = r14
		return r14
	}
	catch {}
	r13 = ACCU
	ACCU = null
	ACCU = Scope[12]
	r13 = Scope[10]
	r14 = r0
	return Scope[12][2]
}
function func_unknown_0x100000018(a0)
{
	r0 = a0["chanId"]
	return r0 === Scope[11][2]
}
function func_unknown_0x100000017(a0)
{
	r0 = a0["name"]
	return r0 === Scope[11][3]
}
function func_unknown_0x100000016(a0)
{
	return a0["onlineId"] === Scope[10][2]["id"]
}
function func_unknown_0x100000015(a0)
{
	r0 = a0["name"]
	ACCU = r0 === Scope[10][4]["name"]
	if (r0 === Scope[10][4]["name"])
	{
		ACCU = !(a0["id"] === Scope[10][4]["id"])
	}
	return ACCU
}
function func_unknown_0x100000014(a0)
{
	return a0["onlineId"] === Scope[10][2]["id"]
}
function func_unknown_0x100000013(a0)
{
	ACCU = a0
	if (a0)
	{
		ACCU = a0["url"]
	}
	return ACCU
}
function func_listAllowed_0x100000012()
{
	r4 = <closure>
	r5 = <this>
	r0 = ACCU
	r4 = Scope[1]
	try
	{
		r5 = Scope[1][9]["get"]()
		r2 = r5["license"]
		if (!r5["license"]["key"])
		{
			r5 = Error
			r6 = "يجب تفعيل الاشتراك أولاً"
			ACCU = Error
			ACCU = Error(r6)
		}
		r6 = "/api/channels"
		r7 = new {"key": null, "deviceId": null}
		r7["key"] = r2["key"]
		r8 = Scope[1][10]["deviceId"]
		r7["deviceId"] = r8()
		r6 = func_postJSON_0x100000011(r6, r7)
		r5 = r0
		r5 = await r6
		r6 = _GeneratorGetResumeMode(r0)
		if (!r6 === 0)
		{
			ACCU = r5
		}
		r3 = r5
		r5 = r5["status"]
		if (!r5 === 200)
		{
			if (r3["json"])
			r6 = r3["json"]
			ACCU = r6["message"]
				&& (r6["message"])
			{
				r6 = r3["json"]
				ACCU = r6["message"]
			}
			else
			{
				ACCU = "تعذر جلب القنوات"
			}
			r6 = ACCU
			ACCU = Error
			ACCU = Error(r6)
		}
		r5 = r3["json"]
		ACCU = r5["channels"]
		if (!r5["channels"])
		{
			ACCU = []
		}
		r6 = ACCU
		r5 = r0
		return r6
	}
	catch {}
	r5 = ACCU
	ACCU = null
	ACCU = Scope[13]
	r5 = Scope[1]
	r6 = r0
	return Scope[13][2]
}
function func_postJSON_0x100000011(a0, a1)
{
	r0 = Scope[1]
	Scope[14][3] = a0
	Scope[14][2] = a1
	ACCU = Promise
	return Promise(func_unknown_0x100000010)
}
function func_unknown_0x100000010(a0, a1)
{
	r3 = Scope[14]
	Scope[15][3] = a0
	Scope[15][2] = a1
	Scope[15][4] = func_0x1663_0x100000001
	r5 = Scope[1][10]["LICENSE_SERVER"]["replace"]
	r7 = \\\\\/+$\
	r5 = r5(r7, "")
	r5 = (r5 + Scope[14][3])
	ACCU = URL
	r0 = URL(r5)
	r4 = r0["protocol"]
	ACCU = r4 === "https:"
	if (r4 === "https:")
	{
		ACCU = Scope[1][5]
	}
	else
	{
		ACCU = Scope[1][4]
	}
	r1 = ACCU
	r4 = JSON["stringify"]
	r2 = r4(Scope[14][2])
	r4 = r1["request"]
	r7 = new {"method": "POST", "headers": null, "timeout": 12000}
	r8 = new {"Content-Type": null, "Content-Length": null}
	r8["Content-Type"] = "application/json"
	r9 = Buffer["byteLength"]
	r8["Content-Length"] = r9(r2)
	r7["headers"] = r8
	r5 = r1
	r6 = r0
	Scope[15][5] = r4(r6, r7, func_unknown_0x10000000d)
	r6 = "timeout"
	ACCU = Scope[15][5]["on"](r6, func_unknown_0x10000000e)
	r6 = "error"
	ACCU = Scope[15][5]["on"](r6, func_unknown_0x10000000f)
	ACCU = Scope[15][5]["end"](r2)
	return undefined
}
function func_unknown_0x10000000f(a0)
{
	r2 = "تعذر الاتصال بالخادم: "
	r2 = (r2 + a0["message"])
	ACCU = Error
	r1 = Error(r2)
	return Scope[15][2](r1)
}
function func_unknown_0x10000000e()
{
	ACCU = Scope[15][5]["destroy"]()
	r3 = "انتهت مهلة الاتصال بالخادم"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[15][2](r2)
	return undefined
}
function func_unknown_0x10000000d(a0)
{
	r0 = Scope[15]
	Scope[16][2] = a0
	Scope[16][3] = func_0x1663_0x100000001
	Scope[16][4] = ""
	r3 = "data"
	ACCU = Scope[16][2]["on"](r3, func_unknown_0x10000000b)
	r3 = "end"
	ACCU = Scope[16][2]["on"](r3, func_unknown_0x10000000c)
	return undefined
}
function func_unknown_0x10000000c()
{
	ACCU = func_0x1663_0x100000001
	r1 = Scope[16]
	try
	{
		r3 = new {"status": null, "json": null}
		r3["status"] = Scope[16][2]["statusCode"]
		ACCU = Scope[16][4]
		if (!Scope[16][4])
		{
			ACCU = "{}"
		}
		r6 = ACCU
		r3["json"] = JSON["parse"](r6)
		ACCU = Scope[15][3](r3)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[17]
		r2 = Scope[16]
		ACCU = Error
		r4 = Error("\\x631\\x62f \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d \\x645\\x646 \\x627\\x644\\x62e\\x627\\x62f\\x645")
		ACCU = Scope[15][2](r4)
	}
	return undefined
}
function func_unknown_0x10000000b(a0)
{
	ACCU = Scope[16][4]
	Scope[16][4] = (Scope[16][4] + a0)
	return (Scope[16][4] + a0)
}
function func_0x59f3_0x10000000a()
{
	r0 = Scope[1]
	Scope[18][2] = new ["ANnVBG", "ndbmsxDmsgS", "yNL0zuXLBMD0Aa", "uK9pva", "AgXZ", "2yRyRnIOinIQ2yhyUDMk2yqG2kFzHnIN2ltyQTIX2kFzGYdyO9Mi2ytyP9Ml", "C3rHDhvZq29Kzq", "C3rHDhvZ", "Ahr0Ca", "AM9PBG", "ouz5D2HSvG", "CMvZDw1L", "Agv4", "mw1hy1jhva", "y2f0zwDVCNK", "B2nF", "mtq0nJu3uMndDfnQ", "zMLUza", "CxvHBgL0Eq", "mZa4mdKYrhzvC2vi", "2kpzInMg2ytyP9Mk2yy6ia", "DxnLCKfNzw50", "z2v0", "C29Tzq", "DhjPBq", "BMv3swq", "B25SAw5Lswq", "C2v0", "y2HHBKLK", "y3jLyxrLsgfZAa", "Cgf0Ag5HBwu", "ChjVDg9JB2W", "zgf0yq", "D3jPDgvgAwXLu3LUyW", "C291CMnLswq", "otG1oduZmgLnDfnyDW", "DxjS", "DMfYAwfUDhm", "mZe1nduWmxjkC1P3AG", "tw96AwXSys81lJa", "Bwf0y2G", "BgvUz3rO", "y292zxjZ", "C3rYzwfTvhLWzq", "y3j5ChrV", "DgLTzw91Da", "CMvXDwvZDa", "C3j2l3vWBg9HzhmVy292zxjZlW", "C291CMnLCW", "zxH0BMfTzq", "AxnbCNjHEq", "2kRyUDIW2leG2kFzHnIN2kRyTDIN2yqG2kJyP9Me2k7yP9IV2yu6ia", "mZKWsePcrM9U", "mJe2nZyWntbzBe1HAwy", "Dg9mB3DLCKnHC2u", "Ahr0Chm", "DxbKyxrL", "BwvZC2fNzq", "C3jJ", "BMfTzq", "zw5K", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcdyQnIN2ytyRTIN2k/zHq", "ChvZAa", "DhLWzq", "Ahr0Chm6", "zxHPC3rZu3LUyW", "y292zxi", "C2f2zq", "yxbWBgLJyxrPB24VANnVBG", "CMvQzwn0vw5HDxrOB3jPEMvK", "l2fWAs9JAgfUBMvSCW", "lNbUzW", "C3j2", "CMvMzxjLCG", "zMLSDgvY", "zgvZDhjVEq", "nJq3mJy4DhrID3jz", "C3rYAw5NAwz5", "y29WEq", "mtK2odbQsfrvv1i", "BM93", "zxjYB3i", "BwfW", "zgLNzxn0", "CMvWBgfJzq", "A2v5", "BwTKAxjtEw5J", "y2HHBM5LBhm", "2kRyUDIW2leG2kZzHnIOinIN2ytzGTMg2yJyP9IQ", "zgv2AwnLswq"]
	Scope[1][13] = func_0x59f3_0x100000009
	return Scope[1][13]()
}
function func_0x59f3_0x100000009()
{
	return Scope[18][2]
}
function func_downloadCover_0x100000008(a0)
{
	r0 = Scope[1]
	Scope[19][2] = a0
	ACCU = Promise
	return Promise(func_unknown_0x100000007)
}
function func_unknown_0x100000007(a0)
{
	r5 = Scope[19]
	Scope[20][2] = a0
	Scope[20][3] = func_0x1663_0x100000001
	if (!Scope[19][2])
	r7 = \^https?:\\\\/\\\\/\
		|| (!r7["test"](Scope[19][2]))
	{
		return Scope[20][2]("")
	}
	ACCU = undefined
	r0 = undefined
	r6 = Scope[20]
	try
	{
		ACCU = URL
		ACCU = URL(Scope[19][2])
		r0 = URL(Scope[19][2])
	}
	catch
	{
		r7 = ACCU
		ACCU = null
		ACCU = Scope[21]
		r7 = Scope[20]
		return Scope[20][2]("")
	}
	r8 = Scope[1][7]["extname"]
	r10 = r0["pathname"]
	r8 = r8(r10)
	r7 = r8["match"]
	r9 = \\\\\.(png|jpg|jpeg|gif|webp)\
	ACCU = r7(r9)
	if (!r7(r9))
	{
		r8 = new [0]
		r8[0] = ".png"
		ACCU = r8
	}
	r7 = ACCU
	r7 = r7[0]
	r6 = r7["toLowerCase"]
	r1 = r6()
	r9 = Scope[1][8]["createHash"]
	r9 = r9("md5")
	r8 = r9["update"]
	r8 = r8(Scope[19][2])
	r7 = r8["digest"]
	r9 = "hex"
	r7 = r7(r9)
	r6 = r7["slice"](0, 16)
	r2 = (r6 + r1)
	Scope[20][4] = Scope[1][7]["join"](Scope[1][11], r2)
	r6 = "srv/uploads/covers/"
	Scope[20][5] = (r6 + r2)
	r6 = Scope[1][6]["existsSync"]
	if (r6(Scope[20][4]))
	{
		return Scope[20][2](Scope[20][5])
	}
	r6 = r0["protocol"]
	ACCU = r6 === "https:"
	if (r6 === "https:")
	{
		ACCU = Scope[1][5]
	}
	else
	{
		ACCU = Scope[1][4]
	}
	r3 = ACCU
	r6 = new {"timeout": 15000, "headers": null}
	r7 = new {"User-Agent": null}
	r7["User-Agent"] = "Mozilla/5.0"
	r6["headers"] = r7
	r4 = r6
	if (r0["protocol"] === "https:")
	{
		r7 = "rejectUnauthorized"
		r4[r7] = !Boolean([])
	}
	r6 = r3["get"]
	r7 = r3
	r8 = r0
	r9 = r4
	Scope[20][6] = r6(r8, r9, func_unknown_0x100000004)
	r8 = "timeout"
	ACCU = Scope[20][6]["on"](r8, func_unknown_0x100000005)
	r8 = "error"
	ACCU = Scope[20][6]["on"](r8, func_unknown_0x100000006)
	return undefined
}
function func_unknown_0x100000006()
{
	return Scope[20][2]("")
}
function func_unknown_0x100000005()
{
	r1 = Scope[20][6]["destroy"]
	ACCU = r1()
	ACCU = Scope[20][2]("")
	return undefined
}
function func_unknown_0x100000004(a0)
{
	r0 = Scope[20]
	Scope[22][2] = func_0x1663_0x100000001
	r1 = a0["statusCode"]
	if (!r1 === 200)
	{
		r1 = a0["resume"]
		ACCU = r1()
		return Scope[20][2]("")
	}
	Scope[22][3] = []
	Scope[22][4] = 0
	r3 = "data"
	ACCU = a0["on"](r3, func_unknown_0x100000002)
	ACCU = a0["on"]("end", func_unknown_0x100000003)
	return undefined
}
function func_unknown_0x100000003()
{
	ACCU = func_0x1663_0x100000001
	r1 = Scope[22]
	try
	{
		r2 = Scope[1][6]["writeFileSync"]
		r5 = Buffer["concat"](Scope[22][3])
		ACCU = r2(Scope[20][4], r5)
		ACCU = Scope[20][2](Scope[20][5])
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[23]
		r2 = Scope[22]
		ACCU = Scope[20][2]("")
	}
	return undefined
}
function func_unknown_0x100000002(a0)
{
	ACCU = 0
	Scope[22][4] = (0 + a0["length"])
	if (0 > 5242880)
	{
		r1 = Scope[20][6]["destroy"]
		ACCU = r1()
		ACCU = Scope[20][2]("")
	}
	else
	{
		r1 = Scope[22][3]["push"]
		ACCU = r1(a0)
	}
	return undefined
}
function func_0x1663_0x100000001(a0, a1)
{
	a0 = (a0 - 120)
	r0 = Scope[1][13]()
	r1 = r0[a0]
	if (Scope[1][3]["pHKGPf"] == undefined)
	{
		Scope[1][3]["jThvzn"] = func_0x288516_0x100000000
		Scope[1][3]["TwGxDh"] = {}
		Scope[1][3]["pHKGPf"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][3]["TwGxDh"][r4])
	{
		r1 = Scope[1][3]["jThvzn"](r1)
		Scope[1][3]["TwGxDh"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][3]["TwGxDh"][r4]
	}
	return r1
}
function func_0x288516_0x100000000(a0)
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
