// Decompiled from binary src/routes.js (V8 10.2.154.4-node.8 code cache, 71799 source chars, 126856 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x1000000ae()
{
	r0 = func_unknown_0x1000000ad
	return r0
}
function func_unknown_0x1000000ad(a0, a1, a2, a3, a4)
{
	r6 = Scope[0]
	Scope[1][2] = a1
	Scope[1][4] = func_0x4405_0x100000001
	Scope[1][23] = func_buildNginxConf_0x100000002
	Scope[1][27] = func_viewerCount_0x100000003
	Scope[1][28] = func_totalCurrentViewers_0x100000004
	Scope[1][29] = func_watchedChannelsCount_0x100000005
	Scope[1][32] = func_effectiveLiveSync_0x100000006
	Scope[1][33] = func_isLoopback_0x100000007
	Scope[1][35] = func_validateSource_0x10000000a
	Scope[1][36] = func_probeUrl_0x100000012
	Scope[1][37] = func_validateChannel_0x100000016
	Scope[1][39] = func_normalizeQuality_0x100000017
	Scope[1][40] = func_autoChanId_0x100000019
	Scope[1][41] = func_channelPayload_0x10000001a
	Scope[1][43] = func_setManualStopped_0x10000001c
	Scope[1][44] = func_validateSchedule_0x10000001e
	Scope[1][48] = func_refreshNginxStatus_0x100000022
	Scope[1][49] = func_nginxStatus_0x100000023
	Scope[1][52] = func_nginxDirPath_0x100000024
	Scope[1][53] = func_readNginxBindError_0x100000025
	Scope[1][54] = func_refreshNginxBinding_0x10000002b
	Scope[1][55] = func_nginxBinding_0x10000002c
	Scope[1][56] = func_addOneXtream_0x100000031
	Scope[1][57] = func_0x3cec_0x100000033
	Scope[1][3] = func_0x4405_0x100000001
	ACCU = func_unknown_0x100000034(Scope[1][57], 477527)
	r8 = "path"
	Scope[1][5] = Scope[1][2](r8)
	Scope[1][6] = Scope[1][2]("fs")
	r7 = Scope[1][2]("child_process")
	r0 = r7["execSync"]
	Scope[1][7] = r7["execFile"]
	r1 = Scope[1][2]("express")
	r2 = Scope[1][2]("multer")
	Scope[1][8] = Scope[1][2]("./store")
	Scope[1][9] = Scope[1][2]("./auth")
	Scope[1][10] = Scope[1][2]("./devices")
	Scope[1][11] = Scope[1][2]("./ffmpeg")
	Scope[1][12] = Scope[1][2]("./iptv")
	Scope[1][13] = Scope[1][2]("./xtream")
	Scope[1][14] = Scope[1][2]("./scheduler")
	Scope[1][15] = Scope[1][2]("./idle")
	Scope[1][16] = Scope[1][2]("./license")
	Scope[1][17] = Scope[1][2]("./update")
	Scope[1][18] = Scope[1][2]("./backup")
	Scope[1][19] = Scope[1][2]("./onlinechannels")
	Scope[1][20] = Scope[1][2]("./worldcup")
	Scope[1][21] = Scope[1][2]("./mh")
	Scope[1][22] = Scope[1][2]("./platform")
	r7 = r1["Router"]
	r3 = r7()
	r7 = Scope[1][5]["join"]
	r10 = "srv"
	r11 = "uploads"
	r4 = r7(Scope[1][8]["ROOT"], r10, r11)
	r7 = Scope[1][6]["mkdirSync"]
	r10 = new {"recursive": null}
	r10["recursive"] = !(!Boolean([]))
	ACCU = r7(r4, r10)
	r8 = new {"storage": null, "limits": {"fileSize": 2147483648.0}}
	r9 = r2["diskStorage"]
	r11 = new {"destination": null, "filename": null}
	r11["destination"] = r4
	r11["filename"] = func_filename_0x100000035
	r8["storage"] = r9(r11)
	r5 = r2(r8)
	Scope[1][24] = Map(r0)
	Scope[1][25] = Set(r0)
	r7 = Date["now"]
	Scope[1][26] = r7()
	Scope[1][30] = func_ok_0x100000036
	Scope[1][31] = func_fail_0x100000037
	r7 = r3["post"]
	r9 = "/login"
	r10 = r1["json"]
	r10 = r10()
	r8 = r3
	ACCU = r7(r9, r10, func_unknown_0x100000038)
	r7 = r3["get"]
	ACCU = r7("/setup/status", func_unknown_0x100000039)
	r7 = r3["post"]
	r10 = r1["json"]
	r10 = r10()
	r8 = r3
	ACCU = r7("/setup", r10, func_unknown_0x10000003b)
	r9 = "/logout"
	ACCU = r3["post"](r9, func_unknown_0x10000003c)
	r7 = r3["get"]
	ACCU = r7("/me", func_unknown_0x10000003d)
	r7 = r3["get"]
	r9 = "/public/settings"
	ACCU = r7(r9, func_unknown_0x10000003e)
	r7 = r3["get"]
	ACCU = r7("/public/promos", func_unknown_0x100000042)
	r7 = r3["get"]
	ACCU = r7("/public/ads", func_unknown_0x100000046)
	r7 = r3["get"]
	ACCU = r7("/public/channels", func_unknown_0x10000004b)
	r7 = r3["post"]
	r9 = "/public/heartbeat"
	r10 = r1["json"]
	r10 = r10()
	r8 = r3
	ACCU = r7(r9, r10, func_unknown_0x10000004c)
	r9 = "/public/channel-health"
	ACCU = r3["get"](r9, func_unknown_0x10000004d)
	ACCU = r3["get"]("/public/worldcup/matches", func_unknown_0x10000004e)
	r9 = "/public/worldcup/news"
	ACCU = r3["get"](r9, func_unknown_0x10000004f)
	r7 = r3["get"]
	ACCU = r7("/public/sports-news", func_unknown_0x100000050)
	r7 = r3["post"]
	r9 = "/system/shutdown"
	r10 = r1["json"]()
	r8 = r3
	ACCU = r7(r9, r10, func_unknown_0x100000052)
	ACCU = r3["use"](Scope[1][9]["requireAuth"])
	r7 = r3["use"]
	r9 = r1["json"]
	r11 = new {"limit": null}
	r11["limit"] = "10mb"
	r9 = r9(r11)
	ACCU = r7(r9)
	r7 = r3["get"]
	ACCU = r7("/settings", func_unknown_0x100000053)
	r7 = r3["put"]
	r9 = "/settings"
	ACCU = r7(r9, func_unknown_0x100000054)
	r7 = r3["post"]
	r9 = "/settings/regenerate-nginx"
	ACCU = r7(r9, func_unknown_0x100000055)
	r7 = r3["post"]
	r9 = "/settings/password"
	ACCU = r7(r9, func_unknown_0x100000056)
	r7 = r3["post"]
	r9 = "/upload"
	r10 = r5["single"]
	r10 = r10("file")
	r8 = r3
	ACCU = r7(r9, r10, func_unknown_0x100000057)
	ACCU = r3["get"]("/devices", func_unknown_0x100000058)
	r9 = "/devices/diagnose"
	ACCU = r3["get"](r9, func_unknown_0x100000059)
	r7 = r3["get"]
	r9 = "/devices/options"
	ACCU = r7(r9, func_unknown_0x10000005a)
	r7 = r3["get"]
	r9 = "/devices/recommend"
	ACCU = r7(r9, func_unknown_0x10000005b)
	r8 = new [0, "http", "hls", 0, 0, 0, "screen"]
	r8[0] = "usb"
	r8[3] = "multi-m3u8"
	r8[4] = "iptv"
	r8[5] = "file"
	Scope[1][34] = r8
	r7 = r3["get"]
	ACCU = r7("/sources", func_unknown_0x10000005c)
	r7 = r3["post"]
	r9 = "/sources"
	ACCU = r7(r9, func_unknown_0x10000005d)
	r7 = r3["post"]
	ACCU = r7("/sources/test", func_unknown_0x10000005e)
	r9 = "/sources/:id"
	ACCU = r3["put"](r9, func_unknown_0x100000060)
	r7 = r3["delete"]
	ACCU = r7("/sources/:id", func_unknown_0x100000063)
	r7 = r3["get"]
	r9 = "/iptv"
	ACCU = r7(r9, func_unknown_0x100000064)
	r7 = r3["post"]
	r9 = "/iptv/import-file"
	r10 = r5["single"]
	r10 = r10("file")
	r8 = r3
	ACCU = r7(r9, r10, func_unknown_0x100000065)
	r7 = r3["post"]
	ACCU = r7("/iptv/import-url", func_unknown_0x100000066)
	r9 = "/iptv"
	ACCU = r3["post"](r9, func_unknown_0x100000068)
	r7 = r3["delete"]
	r9 = "/iptv/:id"
	ACCU = r7(r9, func_unknown_0x10000006a)
	r7 = r3["post"]
	r9 = "/iptv/delete-batch"
	ACCU = r7(r9, func_unknown_0x10000006c)
	r8 = new [0, 0, 0, 0, 0]
	r8[0] = "copy"
	r8[1] = "240p"
	r8[2] = "360p"
	r8[3] = "480p"
	r8[4] = "720p"
	Scope[1][38] = r8
	r7 = r3["get"]
	r9 = "/channels"
	ACCU = r7(r9, func_unknown_0x10000006d)
	Scope[1][42] = func_clampStr_0x10000006e
	r7 = r3["get"]
	r9 = "/ads"
	ACCU = r7(r9, func_unknown_0x10000006f)
	r7 = r3["post"]
	r9 = "/ads"
	ACCU = r7(r9, func_unknown_0x100000070)
	ACCU = r3["put"]("/ads/:id", func_unknown_0x100000072)
	r9 = "/ads/:id"
	ACCU = r3["delete"](r9, func_unknown_0x100000074)
	r7 = r3["post"]
	r9 = "/channels"
	ACCU = r7(r9, func_unknown_0x100000075)
	r7 = r3["put"]
	r9 = "/channels/:id"
	ACCU = r7(r9, func_unknown_0x100000077)
	r7 = r3["patch"]
	r9 = "/channels/:id"
	ACCU = r7(r9, func_unknown_0x100000079)
	r9 = "/channels/:id"
	ACCU = r3["delete"](r9, func_unknown_0x10000007c)
	r7 = r3["post"]
	ACCU = r7("/channels/:id/start", func_unknown_0x10000007d)
	r7 = r3["post"]
	ACCU = r7("/channels/:id/stop", func_unknown_0x10000007e)
	r7 = r3["post"]
	r9 = "/channels/:id/restart"
	ACCU = r7(r9, func_unknown_0x10000007f)
	r7 = r3["get"]
	r9 = "/schedules"
	ACCU = r7(r9, func_unknown_0x100000080)
	r7 = r3["post"]
	r9 = "/schedules"
	ACCU = r7(r9, func_unknown_0x100000081)
	r7 = r3["put"]
	ACCU = r7("/schedules/:id", func_unknown_0x100000083)
	r7 = r3["delete"]
	r9 = "/schedules/:id"
	ACCU = r7(r9, func_unknown_0x100000085)
	Scope[1][45] = Scope[1][22]["isAndroid"]
	r7 = new {"val": null, "at": 0}
	r7["val"] = !Boolean([])
	Scope[1][46] = r7
	Scope[1][47] = !Boolean([])
	r7 = new {"at": 0, "checked": null, "listening": <null, "reason": <null, "port": <null}
	r7["checked"] = !Boolean([])
	Scope[1][50] = r7
	Scope[1][51] = !Boolean([])
	r7 = r3["get"]
	r9 = "/metrics"
	ACCU = r7(r9, func_unknown_0x100000086)
	ACCU = r3["get"]("/status", func_unknown_0x100000089)
	r7 = r3["get"]
	r9 = "/logs/:id"
	ACCU = r7(r9, func_unknown_0x10000008a)
	r7 = r3["post"]
	r9 = "/logs/:id/clear"
	ACCU = r7(r9, func_unknown_0x10000008b)
	r7 = r3["get"]
	r9 = "/logs/:id/download"
	ACCU = r7(r9, func_unknown_0x10000008d)
	r7 = r3["get"]
	r9 = "/matches"
	ACCU = r7(r9, func_unknown_0x10000008e)
	r7 = r3["post"]
	r9 = "/matches"
	ACCU = r7(r9, func_unknown_0x10000008f)
	r7 = r3["delete"]
	ACCU = r7("/matches/:id", func_unknown_0x100000091)
	r7 = r3["post"]
	r9 = "/worldcup/refresh-news"
	ACCU = r7(r9, func_unknown_0x100000092)
	r7 = r3["post"]
	r9 = "/xtream/fetch"
	ACCU = r7(r9, func_unknown_0x100000093)
	r9 = "/xtream/fetch-proxy"
	ACCU = r3["post"](r9, func_unknown_0x100000094)
	r9 = "/xtream/fetch-m3u"
	ACCU = r3["post"](r9, func_unknown_0x100000095)
	ACCU = r3["post"]("/xtream/add", func_unknown_0x100000096)
	r9 = "/xtream/add-batch"
	ACCU = r3["post"](r9, func_unknown_0x100000098)
	r7 = r3["post"]
	r9 = "/mh/fetch"
	ACCU = r7(r9, func_unknown_0x100000099)
	r7 = r3["post"]
	r9 = "/mh/resolve"
	ACCU = r7(r9, func_unknown_0x10000009a)
	r9 = "/mh/resolve-one"
	ACCU = r3["post"](r9, func_unknown_0x10000009b)
	r7 = r3["post"]
	ACCU = r7("/mh/add-batch", func_unknown_0x10000009e)
	r7 = r3["get"]
	r9 = "/online-channels"
	ACCU = r7(r9, func_unknown_0x10000009f)
	r7 = r3["post"]
	ACCU = r7("/online-channels/import", func_unknown_0x1000000a2)
	r9 = "/license"
	ACCU = r3["get"](r9, func_unknown_0x1000000a3)
	r7 = r3["post"]
	r9 = "/license/activate"
	ACCU = r7(r9, func_unknown_0x1000000a4)
	r7 = r3["get"]
	r9 = "/update/status"
	ACCU = r7(r9, func_unknown_0x1000000a5)
	r7 = r3["post"]
	r9 = "/update/apply"
	ACCU = r7(r9, func_unknown_0x1000000a7)
	r7 = r3["get"]
	r9 = "/backup/download"
	ACCU = r7(r9, func_unknown_0x1000000aa)
	r9 = "/backup/restore"
	r10 = r5["single"]
	r12 = "file"
	r10 = r10(r12)
	r8 = r3
	ACCU = r3["post"](r9, r10, func_unknown_0x1000000ac)
	r8 = "exports"
	a2[r8] = r3
	r7 = a2["exports"]
	r8 = "viewerCount"
	r7[r8] = func_viewerCount_0x100000003
	r7 = a2["exports"]
	r7["buildNginxConf"] = func_buildNginxConf_0x100000002
	r7 = a2["exports"]
	r7["effectiveLiveSync"] = func_effectiveLiveSync_0x100000006
	r7 = a2["exports"]
	r7["readNginxBindError"] = func_readNginxBindError_0x100000025
	return undefined
}
function func_unknown_0x1000000ac(a0, a1)
{
	ACCU = a0["file"]
	if (!a0["file"])
	{
		r4 = "لم يُرفع ملف"
		r2 = a1
		ACCU = func_fail_0x100000037(r2, 400, r4)
		return func_fail_0x100000037(r2, 400, r4)
	}
	r1 = Scope[1]
	try
	{
		r2 = Scope[1][11]["stopAll"]
		ACCU = r2()
		r2 = Scope[1][18]["restoreBackup"]
		r4 = a0["file"]
		r4 = r4["path"]
		ACCU = r2(r4)
		r2 = Scope[1]
		try
		{
			r3 = Scope[1][6]["unlinkSync"]
			r5 = a0["file"]
			r5 = r5["path"]
			ACCU = r3(r5)
		}
		catch
		{
			r3 = ACCU
			ACCU = null
			ACCU = Scope[2]
			r3 = Scope[1]
		}
		r4 = new {"message": null}
		r4["message"] = "تم استرداد النسخة الاحتياطية — يُعاد تشغيل النظام الآن"
		ACCU = func_ok_0x100000036(a1, r4)
		ACCU = setTimeout(func_unknown_0x1000000ab, 1500)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[3]
		r2 = Scope[1]
		r3 = Scope[3]
		try
		{
			r4 = Scope[1][6]["unlinkSync"]
			r6 = a0["file"]
			r6 = r6["path"]
			ACCU = r4(r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[4]
			r4 = Scope[3]
		}
		r6 = Scope[3][2]["message"]
		r4 = a1
		ACCU = func_fail_0x100000037(r4, 400, r6)
	}
	return undefined
}
function func_unknown_0x1000000ab()
{
	return process["exit"](42)
}
function func_unknown_0x1000000aa(a0, a1)
{
	r2 = Scope[1]
	Scope[5][2] = a1
	Scope[5][3] = func_0x4405_0x100000001
	r3 = Scope[5]
	ACCU = Scope[6]
	{
		ACCU = PushContext("Block")
		r4 = Scope[5]
		r5 = Scope[1][18]["createBackup"]
		Scope[6][2] = r5()
		r0 = Scope[1][5]["basename"](Scope[6][2])
		r5 = Scope[5][2]["setHeader"]
		r8 = "application/zip"
		ACCU = r5("Content-Type", r8)
		r5 = Scope[5][2]["setHeader"]
		r7 = "Content-Disposition"
		r8 = "attachment; filename=\""
		r8 = (r8 + r0)
		r8 = (r8 + "\"")
		ACCU = r5(r7, r8)
		r5 = Scope[1][6]["createReadStream"]
		r1 = r5(Scope[6][2])
		r5 = r1["pipe"]
		ACCU = r5(Scope[5][2])
		r7 = "end"
		ACCU = r1["on"](r7, func_unknown_0x1000000a8)
		ACCU = r1["on"]("error", func_unknown_0x1000000a9)
	}
	catch
	{
		r5 = ACCU
		ACCU = null
		ACCU = Scope[7]
		r5 = Scope[5]
		r9 = Scope[7][2]["message"]
		ACCU = func_fail_0x100000037(Scope[5][2], 500, r9)
	}
	return undefined
}
function func_unknown_0x1000000a9()
{
	ACCU = func_0x4405_0x100000001
	r1 = Scope[6]
	try
	{
		r2 = Scope[5][2]["end"]
		ACCU = r2()
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[8]
		r2 = Scope[6]
	}
	return undefined
}
function func_unknown_0x1000000a8()
{
	ACCU = func_0x4405_0x100000001
	r1 = Scope[6]
	try
	{
		r2 = Scope[1][6]["unlinkSync"]
		ACCU = r2(Scope[6][2])
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[9]
		r2 = Scope[6]
	}
	return undefined
}
function func_unknown_0x1000000a7(a0, a1)
{
	r2 = Scope[1]
	r3 = <closure>
	r4 = <this>
	ACCU = null
	r3 = Scope[10]
	try
	{
		ACCU = func_0x4405_0x100000001
		Scope[10][2] = func_0x4405_0x100000001
		r4 = Scope[10]
		try
		{
			r5 = Scope[1][11]["stopAll"]
			ACCU = r5()
			r6 = Scope[1][17]["apply"]()
			r5 = Scope[10]
			r5 = await r6
			r6 = _GeneratorGetResumeMode(Scope[10])
			if (!r6 === 0)
			{
				ACCU = r5
			}
			r1 = r5
			r7 = new {"from": null, "to": null, "message": null}
			r7["from"] = r1["from"]
			r7["to"] = r1["to"]
			r7["message"] = "تم تطبيق التحديث — يُعاد تشغيل النظام الآن"
			ACCU = func_ok_0x100000036(a1, r7)
			ACCU = setTimeout(func_unknown_0x1000000a6, 1500)
		}
		catch
		{
			r5 = ACCU
			ACCU = null
			ACCU = Scope[11]
			r5 = Scope[10]
			r9 = Scope[11][2]["message"]
			r7 = a1
			ACCU = func_fail_0x100000037(r7, 400, r9)
		}
		r5 = undefined
		r4 = Scope[10]
		ACCU = r5
		return r5
	}
	catch {}
	r4 = ACCU
	ACCU = null
	ACCU = Scope[12]
	r4 = Scope[10]
	r5 = Scope[10]
	return Scope[12][2]
}
function func_unknown_0x1000000a6()
{
	r0 = process["exit"]
	return r0(42)
}
function func_unknown_0x1000000a5(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = Scope[1][17]["status"]
			r8 = a0["query"]
			r7 = r6(r8["force"] === "1")
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[13]
			r4 = Scope[1]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 500, Scope[13][2]["message"])
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[14]
	r3 = Scope[1]
	r4 = r1
	return Scope[14][2]
}
function func_unknown_0x1000000a4(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = new {"license": null}
			r7 = Scope[1][16]["activate"]
			r11 = a0["body"]
			ACCU = r11["key"]
			r5 = a1
			if (!r11["key"])
			{
				ACCU = ""
			}
			r11 = ACCU
			r10 = String(r11)
			r9 = r10["trim"]
			r9 = r9()
			r8 = r7(r9)
			r7 = r1
			r7 = await r8
			r8 = _GeneratorGetResumeMode(r1)
			if (!r8 === 0)
			{
				ACCU = r7
			}
			r6["license"] = r7
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[15]
			r4 = Scope[1]
			r8 = Scope[15][2]["message"]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 400, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[16]
	r3 = Scope[1]
	r4 = r1
	return Scope[16][2]
}
function func_unknown_0x1000000a3(a0, a1)
{
	r2 = new {"license": null, "messages": null, "contact": null}
	r3 = Scope[1][16]["status"]
	r2["license"] = r3()
	r3 = Scope[1][16]["getMessages"]
	r2["messages"] = r3()
	r3 = Scope[1][16]["getContact"]
	r2["contact"] = r3()
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x1000000a2(a0, a1)
{
	r13 = <closure>
	r14 = <this>
	r1 = ACCU
	r13 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r14 = Scope[1]
		try
		{
			r18 = 212
			r15 = Scope[1][19]["listAllowed"]
			r16 = r15()
			r15 = r1
			r15 = await r16
			r16 = _GeneratorGetResumeMode(r1)
			if (!r16 === 0)
			{
				ACCU = r15
			}
			r3 = r15
			if (a0["body"]["ids"])
			r15 = a0["body"]
			r15 = r15["ids"]
			ACCU = r15["length"]
				&& (r15["length"])
			{
				r16 = a0["body"]
				r18 = 558
				r16 = r16["ids"]
				ACCU = Set
				ACCU = Set(r16)
			}
			else
			{
				ACCU = null
			}
			r4 = ACCU
			r5 = 0
			r6 = []
			r16 = GetIterator(r3)
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
					if (r4)
					{
						if (!r4["has"](r21["value"]["id"]))
						{
							continue
						}
					}
					r23 = Scope[1][19]["importChannel"](r21["value"])
					r22 = r1
					r22 = await r23
					r23 = _GeneratorGetResumeMode(r1)
					if (!r23 === 0)
					{
						ACCU = r22
					}
					r12 = r22
					r5 = (r5 + 1)
					if (!r12) continue
					if (!r12[r0(523)]) continue
					r22 = r12[r0(523)]
					r22 = r22[r0(321)]
					if (r22 === !Boolean([])) continue
					r24 = r12[r0(523)]
					ACCU = r6["push"](r24["id"])
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
			r15 = Scope[1][8]["get"]
			r15 = r15()
			r15 = r15["settings"]
			ACCU = !(r15["idleStopEnabled"] === !Boolean([]))
			r8 = !(r15["idleStopEnabled"] === !Boolean([]))
			if (!(r15["idleStopEnabled"] === !Boolean([])))
			{
				r15 = r6["slice"]
				ACCU = r15(0, 5)
			}
			else
			{
				ACCU = r6
			}
			r9 = ACCU
			r15 = r9["forEach"]
			ACCU = r15(func_unknown_0x1000000a1)
			r17 = new {"imported": null, "started": null, "deferred": null}
			r17["imported"] = r5
			r17["started"] = r9["length"]
			r18 = r6["length"]
			r17["deferred"] = (r18 - r9["length"])
			ACCU = func_ok_0x100000036(a1, r17)
		}
		catch
		{
			r15 = ACCU
			ACCU = null
			ACCU = Scope[17]
			r15 = Scope[1]
			r19 = Scope[17][2]["message"]
			r17 = a1
			ACCU = func_fail_0x100000037(r17, 400, r19)
		}
		r15 = undefined
		r14 = r1
		return r15
	}
	catch {}
	r14 = ACCU
	ACCU = null
	ACCU = Scope[18]
	r14 = Scope[1]
	r15 = r1
	return Scope[18][2]
}
function func_unknown_0x1000000a1(a0, a1)
{
	r0 = Scope[1]
	Scope[19][2] = a0
	r3 = (a1 * 1500)
	ACCU = setTimeout(func_unknown_0x1000000a0, r3)
	return undefined
}
function func_unknown_0x1000000a0()
{
	ACCU = func_0x4405_0x100000001
	r1 = Scope[19]
	try
	{
		r2 = Scope[1][11]["start"]
		ACCU = r2(Scope[19][2])
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[20]
		r2 = Scope[19]
	}
	return undefined
}
function func_unknown_0x10000009f(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = new {"channels": null}
			r7 = Scope[1][19]["listAllowed"]
			r8 = r7()
			r7 = r1
			r5 = a1
			r7 = await r8
			r8 = _GeneratorGetResumeMode(r1)
			if (!r8 === 0)
			{
				ACCU = r7
			}
			r6["channels"] = r7
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[21]
			r4 = Scope[1]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 400, Scope[21][2]["message"])
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[22]
	r3 = Scope[1]
	r4 = r1
	return Scope[22][2]
}
function func_unknown_0x10000009e(a0, a1)
{
	r11 = Scope[1]
	r12 = <closure>
	r13 = <this>
	ACCU = null
	r12 = Scope[23]
	try
	{
		Scope[23][2] = func_0x4405_0x100000001
		ACCU = a0["body"]
		if (a0["body"])
		{
			r13 = a0["body"]
			ACCU = r13["items"]
		}
		if (!ACCU)
		{
			ACCU = []
		}
		r0 = ACCU
		ACCU = a0["body"]
		if (a0["body"])
		{
			r13 = a0["body"]
			ACCU = r13["userAgent"]
		}
		r1 = ACCU
		r16 = 228
		r13 = Array["isArray"]
		if (!r13(r0))
			|| (!r0["length"])
		{
			r16 = "\\x644\\x627 \\x62a\\x648\\x62c\\x62f \\x642\\x646\\x648\\x627\\x62a \\x645\\x62d\\x62f\\x62f\\x629"
			r14 = a1
			r14 = func_fail_0x100000037(r14, 400, "\\x644\\x627 \\x62a\\x648\\x62c\\x62f \\x642\\x646\\x648\\x627\\x62a \\x645\\x62d\\x62f\\x62f\\x629")
			r13 = Scope[23]
			return r14
		}
		r14 = Scope[1][8]
		r2 = Scope[1][8]["get"]()
		r3 = r0
		ACCU = r3["some"](func_unknown_0x10000009c)
		if (r3["some"](func_unknown_0x10000009c))
		{
			r13 = Scope[23]
			try
			{
				r14 = Scope[1][21]["resolveBatch"]
				r16 = r0
				r17 = r1
				r15 = r14(r16, r17, 6)
				r14 = Scope[23]
				r14 = await r15
				r15 = _GeneratorGetResumeMode(Scope[23])
				if (!r15 === 0)
				{
					ACCU = r14
				}
				r3 = r14
				ACCU = r3
			}
			catch
			{
				r14 = ACCU
				ACCU = null
				ACCU = Scope[24]
				r14 = Scope[23]
				r18 = ("\\x641\\x634\\x644 \\x62d\\x644 \\x627\\x644\\x631\\x648\\x627\\x628\\x637: " + Scope[24][2]["message"])
				r16 = a1
				r16 = func_fail_0x100000037(r16, 400, r18)
				r15 = Scope[23]
				return r16
			}
		}
		r4 = 0
		r5 = 0
		r6 = 0
		r14 = GetIterator(r3)
		r13 = r14["next"]
		ACCU = false
		r15 = false
		r18 = Scope[23]
		try
		{
			while (true)
			{
				r15 = true
				r19 = r13()
				if (r19["done"]) break
				r15 = false
				r10 = r19["value"]
				r20 = Scope[23]
				ACCU = r19["value"]["realUrl"]
				r19 = r19["value"]
				if (!ACCU)
				{
					ACCU = r10["url"]
				}
				Scope[25][2] = ACCU
				if (!r10)
					|| (!r10["name"])
					|| (!Scope[25][2])
				{
					r5 = (r5 + 1)
					continue
				}
				r21 = r10["resolved"]
				if (r21 === !Boolean([]))
				{
					r6 = (r6 + 1)
					continue
				}
				r22 = r2["sources"]
				r21 = r22["some"]
				ACCU = r21(func_unknown_0x10000009d)
				if (r21(func_unknown_0x10000009d))
				{
					ACCU = (r5 + 1)
					r5 = (r5 + 1)
					continue
				}
				r21 = Scope[25]
				try
				{
					r24 = new {"name": null, "url": null, "logo": null, "group": null}
					r24["name"] = r10["name"]
					r24["url"] = Scope[25][2]
					r24["logo"] = r10["logo"]
					r24["group"] = r10["group"]
					r23 = func_addOneXtream_0x100000031(r2, r24)
					r22 = Scope[23]
					r22 = await r23
					r23 = _GeneratorGetResumeMode(Scope[23])
					if (!r23 === 0)
					{
						ACCU = r22
					}
					ACCU = (r4 + 1)
					r4 = (r4 + 1)
					continue
				}
				catch {}
				r22 = ACCU
				ACCU = null
				ACCU = Scope[26]
				r22 = Scope[25]
				ACCU = (r5 + 1)
				r5 = (r5 + 1)
			}
			ACCU = -1
			r17 = -1
			r16 = -1
		}
		catch
		{
			r17 = ACCU
			r16 = 0
		}
		if (!r15)
		{
			r20 = Scope[23]
			try
			{
				if (!r14["return"] == undefined)
				{
					ACCU = r14["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		if (r16 === 0)
		{
			ACCU = r17
		}
		if (r4)
		{
			ACCU = Scope[1][8]["save"]()
		}
		r15 = new {"added": null, "skipped": null, "failed": null}
		r15["added"] = r4
		r15["skipped"] = r5
		r15["failed"] = r6
		ACCU = func_ok_0x100000036(a1, r15)
		r14 = undefined
		r13 = Scope[23]
		ACCU = r14
		return r14
	}
	catch {}
	r13 = ACCU
	ACCU = null
	ACCU = Scope[27]
	r13 = Scope[23]
	r14 = Scope[23]
	return Scope[27][2]
}
function func_unknown_0x10000009d(a0)
{
	r0 = a0["url"]
	return r0 === Scope[25][2]
}
function func_unknown_0x10000009c(a0)
{
	return !Boolean(a0["realUrl"])
}
function func_unknown_0x10000009b(a0, a1)
{
	r4 = <closure>
	r5 = <this>
	r3 = ACCU
	r4 = Scope[1]
	try
	{
		if (!a0["body"])
		{
		}
		r5 = {}
		r1 = r5["portalUrl"]
		ACCU = r5["userAgent"]
		r2 = r5["userAgent"]
		r5 = Scope[1]
		try
		{
			r8 = Scope[1][21]["resolveChannel"]
			r9 = r8(r1, r2)
			r8 = r3
			r7 = a1
			r8 = await r9
			r9 = _GeneratorGetResumeMode(r3)
			if (!r9 === 0)
			{
				ACCU = r8
			}
			ACCU = func_ok_0x100000036(r7, r8)
		}
		catch
		{
			r6 = ACCU
			ACCU = null
			ACCU = Scope[28]
			r6 = Scope[1]
			r10 = Scope[28][2]["message"]
			r8 = a1
			ACCU = func_fail_0x100000037(r8, 400, r10)
		}
		r6 = undefined
		r5 = r3
		return r6
	}
	catch {}
	r5 = ACCU
	ACCU = null
	ACCU = Scope[29]
	r5 = Scope[1]
	r6 = r3
	return Scope[29][2]
}
function func_unknown_0x10000009a(a0, a1)
{
	r5 = <closure>
	r6 = <this>
	r3 = ACCU
	r5 = Scope[1]
	try
	{
		ACCU = a0["body"]
		if (a0["body"])
		{
			r6 = a0["body"]
			ACCU = r6["items"]
		}
		if (!ACCU)
		{
			ACCU = []
		}
		r1 = ACCU
		ACCU = a0["body"]
		if (a0["body"])
		{
			ACCU = a0["body"]["userAgent"]
		}
		r2 = ACCU
		r7 = Array
		r6 = Array["isArray"]
		if (!r6(r1))
		ACCU = r1["length"]
			|| (!r1["length"])
		{
			r9 = "لا توجد قنوات لحلّها"
			r7 = a1
			r7 = func_fail_0x100000037(r7, 400, r9)
			r6 = r3
			ACCU = r7
			return r7
		}
		r6 = Scope[1]
		try
		{
			r11 = a0["body"]
			ACCU = r11["concurrency"]
			r9 = r1
			r10 = r2
			if (!r11["concurrency"])
			{
				ACCU = 6
			}
			r11 = ACCU
			r8 = Scope[1][21]["resolveBatch"](r9, r10, r11)
			r7 = r3
			r7 = await r8
			r8 = _GeneratorGetResumeMode(r3)
			if (!r8 === 0)
			{
				ACCU = r7
			}
			r4 = r7
			r9 = new {"channels": null}
			r9["channels"] = r4
			ACCU = func_ok_0x100000036(a1, r9)
		}
		catch
		{
			r7 = ACCU
			ACCU = null
			ACCU = Scope[30]
			r7 = Scope[1]
			r11 = Scope[30][2]["message"]
			r9 = a1
			ACCU = func_fail_0x100000037(r9, 400, r11)
		}
		r7 = undefined
		r6 = r3
		return r7
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[31]
	r6 = Scope[1]
	r7 = r3
	return Scope[31][2]
}
function func_unknown_0x100000099(a0, a1)
{
	r7 = <closure>
	r8 = <this>
	r5 = ACCU
	r7 = Scope[1]
	try
	{
		if (!a0["body"])
		{
		}
		r8 = {}
		r1 = r8["server"]
		r2 = r8["username"]
		r3 = r8["password"]
		ACCU = r8["userAgent"]
		r4 = r8["userAgent"]
		r8 = Scope[1]
		try
		{
			r9 = Scope[1][21]["fetchChannels"]
			r11 = new {"server": null, "username": null, "password": null, "userAgent": null}
			r11["server"] = r1
			r11["username"] = r2
			r11["password"] = r3
			r11["userAgent"] = r4
			r10 = r9(r11)
			r9 = r5
			r9 = await r10
			r10 = _GeneratorGetResumeMode(r5)
			if (!r10 === 0)
			{
				ACCU = r9
			}
			r6 = r9
			r11 = new {"channels": null, "count": null}
			r11["channels"] = r6
			r11["count"] = r6["length"]
			ACCU = func_ok_0x100000036(a1, r11)
		}
		catch
		{
			r9 = ACCU
			ACCU = null
			ACCU = Scope[32]
			r9 = Scope[1]
			r11 = a1
			ACCU = func_fail_0x100000037(r11, 400, Scope[32][2]["message"])
		}
		r9 = undefined
		r8 = r5
		return r9
	}
	catch {}
	r8 = ACCU
	ACCU = null
	ACCU = Scope[33]
	r8 = Scope[1]
	r9 = r5
	return Scope[33][2]
}
function func_unknown_0x100000098(a0, a1)
{
	r7 = Scope[1]
	r8 = <closure>
	r9 = <this>
	ACCU = null
	r8 = Scope[34]
	try
	{
		Scope[34][2] = func_0x4405_0x100000001
		ACCU = a0["body"]
		if (a0["body"])
		{
			r9 = a0["body"]
			ACCU = r9["items"]
		}
		if (!ACCU)
		{
			ACCU = []
		}
		r0 = ACCU
		r9 = Array["isArray"]
		if (!r9(r0))
			|| (!r0["length"])
		{
			r10 = a1
			r10 = func_fail_0x100000037(r10, 400, "\\x644\\x627 \\x62a\\x648\\x62c\\x62f \\x642\\x646\\x648\\x627\\x62a \\x645\\x62d\\x62f\\x62f\\x629")
			r9 = Scope[34]
			return r10
		}
		r12 = 555
		r9 = Scope[1][8]["get"]
		r1 = r9()
		r2 = 0
		r3 = 0
		r10 = GetIterator(r0)
		r9 = r10["next"]
		ACCU = false
		r11 = false
		r14 = Scope[34]
		try
		{
			while (true)
			{
				r11 = true
				r15 = r9()
				if (r15["done"]) break
				r11 = false
				r16 = Scope[34]
				Scope[35][2] = r15["value"]
				r15 = r15["value"]
				if (!Scope[35][2])
					|| (!Scope[35][2]["name"])
					|| (!Scope[35][2]["url"])
				{
					r3 = (r3 + 1)
					continue
				}
				r18 = r1["sources"]
				r17 = r18["some"]
				ACCU = r17(func_unknown_0x100000097)
				if (r17(func_unknown_0x100000097))
				{
					ACCU = (r3 + 1)
					r3 = (r3 + 1)
					continue
				}
				r17 = Scope[35]
				try
				{
					r19 = func_addOneXtream_0x100000031(r1, Scope[35][2])
					r18 = Scope[34]
					r18 = await r19
					r19 = _GeneratorGetResumeMode(Scope[34])
					if (!r19 === 0)
					{
						ACCU = r18
					}
					ACCU = (r2 + 1)
					r2 = (r2 + 1)
					continue
				}
				catch {}
				r18 = ACCU
				ACCU = null
				ACCU = Scope[36]
				r18 = Scope[35]
				ACCU = (r3 + 1)
				r3 = (r3 + 1)
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
			r17 = Scope[34]
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
		if (r2)
		{
			r9 = Scope[1][8]["save"]
			ACCU = r9()
		}
		r11 = new {"added": null, "skipped": null}
		r11["added"] = r2
		r11["skipped"] = r3
		ACCU = func_ok_0x100000036(a1, r11)
		r10 = undefined
		r9 = Scope[34]
		ACCU = r10
		return r10
	}
	catch {}
	r9 = ACCU
	ACCU = null
	ACCU = Scope[37]
	r9 = Scope[34]
	r10 = Scope[34]
	return Scope[37][2]
}
function func_unknown_0x100000097(a0)
{
	return a0["url"] === Scope[35][2]["url"]
}
function func_unknown_0x100000096(a0, a1)
{
	r8 = <closure>
	r9 = <this>
	r7 = ACCU
	r8 = Scope[1]
	try
	{
		if (!a0["body"])
		{
		}
		r9 = {}
		r1 = r9["name"]
		r2 = r9["url"]
		r3 = r9["logo"]
		r4 = r9["group"]
		if (!r9["name"])
			|| (!r9["url"])
		{
			r10 = a1
			r10 = func_fail_0x100000037(r10, 400, "\\x627\\x633\\x645 \\x627\\x644\\x642\\x646\\x627\\x629 \\x648\\x631\\x627\\x628\\x637\\x647\\x627 \\x645\\x637\\x644\\x648\\x628\\x627\\x646")
			r9 = r7
			return r10
		}
		r5 = Scope[1][8]["get"]()
		r11 = new {"name": null, "url": null, "logo": null, "group": null}
		r11["name"] = r1
		r11["url"] = r2
		r11["logo"] = r3
		r11["group"] = r4
		r10 = func_addOneXtream_0x100000031(r5, r11)
		r9 = r7
		r9 = await r10
		r10 = _GeneratorGetResumeMode(r7)
		if (!r10 === 0)
		{
			ACCU = r9
		}
		r6 = r9
		r9 = Scope[1][8]["save"]
		ACCU = r9()
		ACCU = func_ok_0x100000036(a1, r6)
		r10 = undefined
		r9 = r7
		return r10
	}
	catch {}
	r9 = ACCU
	ACCU = null
	ACCU = Scope[38]
	r9 = Scope[1]
	r10 = r7
	return Scope[38][2]
}
function func_unknown_0x100000095(a0, a1)
{
	r3 = <closure>
	r4 = <this>
	r1 = ACCU
	r3 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r4 = Scope[1]
		try
		{
			r5 = Scope[1][13]["fetchFromM3UUrl"]
			r9 = a0["body"]
			ACCU = r9["url"]
			if (!r9["url"])
			{
				ACCU = ""
			}
			r9 = ACCU
			r8 = String(r9)
			r7 = r8["trim"]
			r7 = r7()
			r8 = a0["body"]
			r8 = r8["userAgent"]
			r6 = r5(r7, r8)
			r5 = r1
			r5 = await r6
			r6 = _GeneratorGetResumeMode(r1)
			if (!r6 === 0)
			{
				ACCU = r5
			}
			r2 = r5
			r7 = new {"channels": null, "count": null}
			r7["channels"] = r2
			r7["count"] = r2["length"]
			ACCU = func_ok_0x100000036(a1, r7)
		}
		catch
		{
			r5 = ACCU
			ACCU = null
			ACCU = Scope[39]
			r5 = Scope[1]
			r7 = a1
			ACCU = func_fail_0x100000037(r7, 400, Scope[39][2]["message"])
		}
		r5 = undefined
		r4 = r1
		return r5
	}
	catch {}
	r4 = ACCU
	ACCU = null
	ACCU = Scope[40]
	r4 = Scope[1]
	r5 = r1
	return Scope[40][2]
}
function func_unknown_0x100000094(a0, a1)
{
	r3 = <closure>
	r4 = <this>
	r1 = ACCU
	r3 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r4 = Scope[1]
		try
		{
			r5 = Scope[1][13]["fetchViaProxy"]
			if (!a0["body"])
			{
			}
			r7 = {}
			r6 = r5(r7)
			r5 = r1
			r5 = await r6
			r6 = _GeneratorGetResumeMode(r1)
			if (!r6 === 0)
			{
				ACCU = r5
			}
			r2 = r5
			r7 = new {"channels": null, "count": null, "via": null}
			r7["channels"] = r2
			r7["count"] = r2["length"]
			r7["via"] = "proxy"
			ACCU = func_ok_0x100000036(a1, r7)
		}
		catch
		{
			r5 = ACCU
			ACCU = null
			ACCU = Scope[41]
			r5 = Scope[1]
			r9 = Scope[41][2]["message"]
			r7 = a1
			ACCU = func_fail_0x100000037(r7, 400, r9)
		}
		r5 = undefined
		r4 = r1
		return r5
	}
	catch {}
	r4 = ACCU
	ACCU = null
	ACCU = Scope[42]
	r4 = Scope[1]
	r5 = r1
	return Scope[42][2]
}
function func_unknown_0x100000093(a0, a1)
{
	r5 = <closure>
	r6 = <this>
	r2 = ACCU
	r5 = Scope[1]
	try
	{
		if (!a0["body"])
		{
		}
		ACCU = {}
		r1 = {}
		r6 = Scope[1]
		try
		{
			r7 = Scope[1][13]["fetchChannels"]
			r8 = r7(r1)
			r7 = r2
			r7 = await r8
			r8 = _GeneratorGetResumeMode(r2)
			if (!r8 === 0)
			{
				ACCU = r7
			}
			r4 = r7
			r9 = new {"channels": null, "count": null, "via": null}
			r9["channels"] = r4
			r9["count"] = r4["length"]
			r9["via"] = "direct"
			ACCU = func_ok_0x100000036(a1, r9)
		}
		catch
		{
			r7 = ACCU
			ACCU = null
			ACCU = Scope[43]
			r7 = Scope[1]
			ACCU = r1["noProxyFallback"]
			if (r1["noProxyFallback"])
			{
				r11 = Scope[43][2]["message"]
				r9 = a1
				r9 = func_fail_0x100000037(r9, 400, r11)
				r8 = r2
				ACCU = r9
				return r9
			}
			r8 = Scope[43]
			try
			{
				r9 = Scope[1][13]["fetchViaProxy"]
				r10 = r9(r1)
				r9 = r2
				r9 = await r10
				r10 = _GeneratorGetResumeMode(r2)
				if (!r10 === 0)
				{
					ACCU = r9
				}
				r3 = r9
				r11 = new {"channels": null, "count": null, "via": null, "note": "\\x62a\\x639\\x630\\x651\\x631 \\x627\\x644\\x627\\x62a\\x635\\x627\\x644 \\x627\\x644\\x645\\x628\\x627\\x634\\x631\\x60c \\x62a\\x645 \\x627\\x644\\x62c\\x644\\x628 \\x639\\x628\\x631 \\x648\\x633\\x64a\\x637 xtream2m3u"}
				r11["channels"] = r3
				r11["count"] = r3["length"]
				r11["via"] = "proxy"
				ACCU = func_ok_0x100000036(a1, r11)
			}
			catch
			{
				r9 = ACCU
				ACCU = null
				ACCU = Scope[44]
				r9 = Scope[43]
				r13 = "مباشر: "
				r13 = (r13 + Scope[43][2]["message"])
				r13 = (r13 + " | وسيط: ")
				r13 = (r13 + Scope[44][2]["message"])
				r11 = a1
				ACCU = func_fail_0x100000037(r11, 400, r13)
			}
		}
		r7 = undefined
		r6 = r2
		return r7
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[45]
	r6 = Scope[1]
	r7 = r2
	return Scope[45][2]
}
function func_unknown_0x100000092(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = Scope[1][20]["getNews"]
			r8 = !(!Boolean([]))
			r7 = r6(r8)
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[46]
			r4 = Scope[1]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 500, Scope[46][2]["message"])
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[47]
	r3 = Scope[1]
	r4 = r1
	return Scope[47][2]
}
function func_unknown_0x100000091(a0, a1)
{
	r1 = Scope[1]
	Scope[48][2] = a0
	Scope[48][3] = func_0x4405_0x100000001
	r2 = Scope[1][8]["get"]
	r0 = r2()
	r3 = "matches"
	r4 = r0["matches"]["filter"]
	r0[r3] = r4(func_unknown_0x100000090)
	r2 = Scope[1][8]["save"]
	ACCU = r2()
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x100000090(a0)
{
	r1 = Scope[48][2]["params"]
	return !(a0["id"] === r1["id"])
}
function func_unknown_0x10000008f(a0, a1)
{
	if (!a0["body"])
	{
	}
	r6 = {}
	r1 = r6["home"]
	r2 = r6["away"]
	r3 = r6["kickoffUtc"]
	if (!r6["home"])
		|| (!r6["away"])
		|| (!r6["kickoffUtc"])
	{
		r7 = a1
		return func_fail_0x100000037(r7, 400, "\\x627\\x644\\x641\\x631\\x64a\\x642\\x627\\x646 \\x648\\x648\\x642\\x62a \\x627\\x644\\x645\\x628\\x627\\x631\\x627\\x629 \\x645\\x637\\x644\\x648\\x628\\x629")
	}
	r4 = Scope[1][8]["get"]()
	r6 = new {"id": null, "home": null, "away": null, "homeFlag": null, "awayFlag": null, "group": null, "kickoffUtc": null, "channelId": null}
	r6["id"] = Scope[1][8]["newId"]("m")
	r6["home"] = r1
	r6["away"] = r2
	r7 = a0["body"]
	ACCU = r7["homeFlag"]
	if (!r7["homeFlag"])
	{
		ACCU = ""
	}
	r6["homeFlag"] = ACCU
	r7 = a0["body"]
	ACCU = r7["awayFlag"]
	if (!r7["awayFlag"])
	{
		ACCU = ""
	}
	r6["awayFlag"] = ACCU
	r7 = a0["body"]
	ACCU = r7["group"]
	if (!r7["group"])
	{
		ACCU = ""
	}
	r6["group"] = ACCU
	r6["kickoffUtc"] = r3
	r7 = a0["body"]
	ACCU = r7["channelId"]
	if (!r7["channelId"])
	{
		ACCU = ""
	}
	r6["channelId"] = ACCU
	r5 = r6
	r7 = r4["matches"]
	r6 = r7["push"]
	ACCU = r6(r5)
	ACCU = Scope[1][8]["save"]()
	r8 = new {"match": null}
	r8["match"] = r5
	ACCU = func_ok_0x100000036(a1, r8)
	return undefined
}
function func_unknown_0x10000008e(a0, a1)
{
	r2 = new {"matches": null}
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r2["matches"] = r3["matches"]
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x10000008d(a0, a1)
{
	r4 = Scope[1]
	Scope[49][2] = a0
	Scope[49][3] = func_0x4405_0x100000001
	r0 = Scope[1][8]["get"]()
	r6 = r0["channels"]
	r1 = r6["find"](func_unknown_0x10000008c)
	r5 = Scope[1][11]["readLog"]
	r7 = Scope[49][2]["params"]
	r2 = r5(r7["id"], 5242880)
	ACCU = r1
	if (r1)
	{
		ACCU = r1["name"]
	}
	else
	{
		r7 = Scope[49][2]["params"]
		ACCU = r7["id"]
	}
	r7 = ACCU
	r6 = r7["replace"]
	r8 = \[^\\\\w\\\\u0600-\\\\u06FF-]+\
	r6 = r6(r8, "_")
	r3 = r6["slice"](0, 50)
	r5 = a1["setHeader"]
	r7 = "Content-Type"
	r8 = "text/plain; charset=utf-8"
	ACCU = r5(r7, r8)
	r5 = a1["setHeader"]
	r7 = "Content-Disposition"
	r8 = "attachment; filename=\""
	r8 = (r8 + r3)
	r8 = (r8 + ".log\"")
	ACCU = r5(r7, r8)
	r5 = a1["end"]
	r6 = a1
	ACCU = r2
	if (!r2)
	{
		ACCU = ""
	}
	r7 = ACCU
	ACCU = r5(r7)
	return undefined
}
function func_unknown_0x10000008c(a0)
{
	r1 = Scope[49][2]["params"]
	return a0["id"] === r1["id"]
}
function func_unknown_0x10000008b(a0, a1)
{
	r2 = Scope[1][11]["clearLog"]
	r1 = r2(a0["params"]["id"])
	if (r2(a0["params"]["id"]))
	{
		r4 = new {"cleared": null}
		r4["cleared"] = !(!Boolean([]))
		ACCU = func_ok_0x100000036(a1, r4)
	}
	else
	{
		r5 = "تعذّر تصفير السجل"
		r3 = a1
		ACCU = func_fail_0x100000037(r3, 500, r5)
	}
	return undefined
}
function func_unknown_0x10000008a(a0, a1)
{
	r3 = new {"log": null}
	r4 = Scope[1][11]["readLog"]
	r3["log"] = r4(a0["params"]["id"], 98304)
	ACCU = func_ok_0x100000036(a1, r3)
	return undefined
}
function func_unknown_0x100000089(a0, a1)
{
	r1 = Scope[1]
	Scope[50][2] = func_0x4405_0x100000001
	r2 = Scope[1][8]["get"]
	Scope[50][3] = r2()
	r3 = Scope[50][3]["channels"]
	r2 = r3["map"]
	r0 = r2(func_unknown_0x100000088)
	r4 = new {"channels": null, "nginx": null, "nginxBinding": null, "license": null, "messages": null, "contact": null, "uptime": null, "memoryMB": null, "load": null}
	r4["channels"] = r0
	r4["nginx"] = func_nginxStatus_0x100000023()
	r4["nginxBinding"] = func_nginxBinding_0x10000002c()
	r5 = Scope[1][16]["status"]
	r4["license"] = r5()
	r4["messages"] = Scope[1][16]["getMessages"]()
	r5 = Scope[1][16]["getContact"]
	r4["contact"] = r5()
	r5 = process["uptime"]
	r4["uptime"] = r5()
	r5 = Math["round"]
	r7 = process["memoryUsage"]
	r7 = r7()
	r7 = (r7["rss"] \ 1048576)
	r4["memoryMB"] = r5(r7)
	r6 = Scope[1][2]("os")
	r5 = r6["loadavg"]
	r5 = r5()
	r4["load"] = r5[0]
	ACCU = func_ok_0x100000036(a1, r4)
	return undefined
}
function func_unknown_0x100000088(a0)
{
	r0 = Scope[50]
	Scope[51][2] = a0
	r3 = new {"id": null, "name": null}
	r3["id"] = Scope[51][2]["id"]
	r3["name"] = Scope[51][2]["name"]
	r4 = Scope[1][11]["statusOf"](Scope[51][2]["id"])
	r5 = new {"viewers": null, "scheduled": null}
	r5["viewers"] = func_viewerCount_0x100000003(Scope[51][2]["id"])
	r7 = Scope[50][3]["schedules"]
	r6 = r7["some"]
	r5["scheduled"] = r6(func_unknown_0x100000087)
	return Object["assign"](r3, r4, r5)
}
function func_unknown_0x100000087(a0)
{
	r0 = a0["channelId"]
	ACCU = r0 === Scope[51][2]["id"]
	if (r0 === Scope[51][2]["id"])
	{
		r0 = a0["enabled"]
		ACCU = !(r0 === !Boolean([]))
	}
	return ACCU
}
function func_unknown_0x100000086(a0, a1)
{
	r12 = Scope[1][8]["get"]
	r1 = r12()
	r2 = func_totalCurrentViewers_0x100000004()
	r3 = Scope[1][11]["ingestBandwidthBps"]()
	r4 = 0
	r15 = 428
	r12 = Scope[1][11]["bytesOutMap"]
	r14 = r12()
	r13 = GetIterator(r14)
	r12 = r13["next"]
	ACCU = false
	r14 = false
	r17 = Scope[1]
	try
	{
		while (true)
		{
			r14 = true
			r18 = r12()
			if (r18["done"]) break
			r14 = false
			r19 = r18["value"]
			r21 = GetIterator(r18["value"])
			ACCU = false
			r22 = false
			r25 = Scope[1]
			try
			{
				if (!false)
				r22 = true
				r26 = r21["next"]()
				ACCU = r26["done"]
					&& (!r26["done"])
				{
					r22 = false
					ACCU = r26["value"]
				}
				else
				{
					ACCU = undefined
				}
				r10 = ACCU
				if (!r22)
				r22 = true
				r26 = r21["next"]()
				ACCU = r26["done"]
					&& (!r26["done"])
				{
					r22 = false
					ACCU = r26["value"]
				}
				else
				{
					ACCU = undefined
				}
				r11 = ACCU
				ACCU = -1
				r24 = -1
				r23 = -1
			}
			catch
			{
				r24 = ACCU
				r23 = 0
			}
			if (!r22)
			{
				r27 = Scope[1]
				try
				{
					if (!r21["return"] == undefined)
					{
						ACCU = r21["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			if (r23 === 0)
			{
				r15 = 0
				r16 = r24
				break
			}
			r21 = Math[r0(492)]
			r24 = func_viewerCount_0x100000003(r10)
			ACCU = (r4 + (r11 * r21(1, r24)))
			r19 = r4
			r4 = (r4 + (r11 * r21(1, r24)))
		}
		ACCU = -1
		r16 = -1
		r15 = -1
	}
	catch
	{
		r16 = ACCU
		r15 = 0
	}
	if (!r14)
	{
		r19 = Scope[1]
		try
		{
			if (!r13["return"] == undefined)
			{
				ACCU = r13["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r15 === 0)
	{
		ACCU = r16
	}
	r13 = Math["max"]
	r5 = (r3 * r13(1, r2))
	r12 = process["memoryUsage"]
	r6 = r12()
	r14 = new {"uptimeSec": null, "serverStartedAt": null, "cpuLoad": null, "cpuCount": null, "memoryMB": null, "currentViewers": null, "totalViewers": null, "watchedChannels": null, "runningChannels": null, "totalChannels": null, "hlsBytesTotal": null, "egressBytesTotal": null, "ingestBandwidthBps": null, "egressBandwidthBps": null, "internetBandwidthBps": null}
	r15 = Math["floor"]
	r17 = process["uptime"]()
	r14["uptimeSec"] = r15(r17)
	r14["serverStartedAt"] = Scope[1][26]
	r16 = Scope[1][2]("os")
	r15 = r16["loadavg"]
	r15 = r15()
	r14["cpuLoad"] = r15[0]
	r16 = Scope[1][2]("os")
	r15 = r16["cpus"]
	r15 = r15()
	r14["cpuCount"] = r15["length"]
	r15 = Math["round"]
	r17 = (r6["rss"] \ 1048576)
	r14["memoryMB"] = r15(r17)
	r14["currentViewers"] = r2
	r14["totalViewers"] = Scope[1][25]["size"]
	r14["watchedChannels"] = func_watchedChannelsCount_0x100000005()
	r15 = Scope[1][11]["runningCount"]
	r14["runningChannels"] = r15()
	r15 = r1["channels"]
	r14["totalChannels"] = r15["length"]
	r15 = Scope[1][11]["totalBytesOut"]
	r14["hlsBytesTotal"] = r15()
	r14["egressBytesTotal"] = r4
	r14["ingestBandwidthBps"] = r3
	r15 = Math["round"]
	r14["egressBandwidthBps"] = r15(r5)
	r14["internetBandwidthBps"] = r3
	ACCU = func_ok_0x100000036(a1, r14)
	return undefined
}
function func_unknown_0x100000085(a0, a1)
{
	r2 = Scope[1]
	Scope[52][2] = a0
	r1 = Scope[1][8]["get"]()
	r1["schedules"] = r1["schedules"]["filter"](func_unknown_0x100000084)
	r3 = Scope[1][8]["save"]
	ACCU = r3()
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x100000084(a0)
{
	return !(a0["id"] === Scope[52][2]["params"]["id"])
}
function func_unknown_0x100000083(a0, a1)
{
	r4 = Scope[1]
	Scope[53][2] = a0
	r1 = Scope[1][8]["get"]()
	r6 = r1["schedules"]
	r5 = r6["findIndex"]
	r2 = r5(func_unknown_0x100000082)
	if (r2 < 0)
	{
		r8 = "الجدولة غير موجودة"
		r6 = a1
		return func_fail_0x100000037(r6, 404, r8)
	}
	r6 = Scope[53][2]["body"]
	r3 = func_validateSchedule_0x10000001e(r6, r1)
	if (func_validateSchedule_0x10000001e(r6, r1))
	{
		r6 = a1
		r8 = r3
		return func_fail_0x100000037(r6, 400, r8)
	}
	r5 = r1["schedules"]
	r9 = {}
	r10 = r1["schedules"]
	r10 = r10[r2]
	r11 = new {"channelId": null, "days": null, "slots": null, "enabled": null}
	r12 = Scope[53][2]["body"]
	r11["channelId"] = r12["channelId"]
	r12 = Scope[53][2]["body"]
	ACCU = r12["days"]
	r6 = r2
	if (!r12["days"])
	{
		ACCU = new [0, 1, 2, 3, 4, 5, 6]
	}
	r11["days"] = ACCU
	r12 = Scope[53][2]["body"]
	r11["slots"] = r12["slots"]
	r12 = Scope[53][2]["body"]
	r12 = r12["enabled"]
	r11["enabled"] = !(r12 === !Boolean([]))
	r5[r6] = Object["assign"](r9, r10, r11)
	ACCU = Scope[1][8]["save"]()
	ACCU = Scope[1][14]["tick"]()
	r7 = new {"schedule": null}
	r8 = r1["schedules"]
	r7["schedule"] = r8[r2]
	ACCU = func_ok_0x100000036(a1, r7)
	return undefined
}
function func_unknown_0x100000082(a0)
{
	return a0["id"] === Scope[53][2]["params"]["id"]
}
function func_unknown_0x100000081(a0, a1)
{
	r1 = Scope[1][8]["get"]()
	r5 = a0["body"]
	r2 = func_validateSchedule_0x10000001e(r5, r1)
	if (func_validateSchedule_0x10000001e(r5, r1))
	{
		r5 = a1
		r7 = r2
		return func_fail_0x100000037(r5, 400, r7)
	}
	r4 = new {"id": null, "channelId": null, "days": null, "slots": null, "enabled": null}
	r5 = Scope[1][8]["newId"]
	r4["id"] = r5("sch")
	r5 = a0["body"]
	r4["channelId"] = r5["channelId"]
	r5 = a0["body"]
	ACCU = r5["days"]
	if (!r5["days"])
	{
		ACCU = new [0, 1, 2, 3, 4, 5, 6]
	}
	r4["days"] = ACCU
	r5 = a0["body"]
	r4["slots"] = r5["slots"]
	r5 = a0["body"]
	r4["enabled"] = !(r5["enabled"] === !Boolean([]))
	r3 = r4
	r5 = r1["schedules"]
	ACCU = r5["push"](r3)
	ACCU = Scope[1][8]["save"]()
	r4 = Scope[1][14]["tick"]
	ACCU = r4()
	r6 = new {"schedule": null}
	r6["schedule"] = r3
	ACCU = func_ok_0x100000036(a1, r6)
	return undefined
}
function func_unknown_0x100000080(a0, a1)
{
	r2 = new {"schedules": null}
	r3 = Scope[1][8]["get"]()
	r2["schedules"] = r3["schedules"]
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x10000007f(a0, a1)
{
	r2 = a0["params"]
	r3 = !Boolean([])
	ACCU = func_setManualStopped_0x10000001c(r2["id"], r3)
	r1 = Scope[1]
	try
	{
		r2 = Scope[1][11]["restart"]
		r4 = a0["params"]
		ACCU = r2(r4["id"])
		ACCU = func_ok_0x100000036(a1)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[54]
		r2 = Scope[1]
		r4 = a1
		ACCU = func_fail_0x100000037(r4, 400, Scope[54][2]["message"])
	}
	return undefined
}
function func_unknown_0x10000007e(a0, a1)
{
	r2 = a0["params"]
	r3 = !(!Boolean([]))
	ACCU = func_setManualStopped_0x10000001c(r2["id"], r3)
	r1 = Scope[1][11]["stop"]
	r3 = a0["params"]
	ACCU = r1(r3["id"])
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x10000007d(a0, a1)
{
	r2 = a0["params"]
	r3 = !Boolean([])
	ACCU = func_setManualStopped_0x10000001c(r2["id"], r3)
	r1 = Scope[1]
	try
	{
		r2 = Scope[1][11]["start"]
		r4 = a0["params"]
		ACCU = r2(r4["id"])
		ACCU = func_ok_0x100000036(a1)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[55]
		r2 = Scope[1]
		r4 = a1
		ACCU = func_fail_0x100000037(r4, 400, Scope[55][2]["message"])
	}
	return undefined
}
function func_unknown_0x10000007c(a0, a1)
{
	r1 = Scope[1]
	Scope[56][2] = a0
	Scope[56][3] = func_0x4405_0x100000001
	r2 = Scope[1][8]["get"]
	r0 = r2()
	r2 = Scope[1][11]["purgeChannel"]
	r4 = Scope[56][2]["params"]
	ACCU = r2(r4["id"])
	r3 = r0["channels"]["filter"]
	r0["channels"] = r3(func_unknown_0x10000007a)
	r3 = "schedules"
	r5 = r0["schedules"]
	r0[r3] = r5["filter"](func_unknown_0x10000007b)
	ACCU = Scope[1][8]["save"]()
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x10000007b(a0)
{
	r0 = a0["channelId"]
	return !(r0 === Scope[56][2]["params"]["id"])
}
function func_unknown_0x10000007a(a0)
{
	r1 = Scope[56][2]["params"]
	return !(a0["id"] === r1["id"])
}
function func_unknown_0x100000079(a0, a1)
{
	r2 = Scope[1]
	Scope[57][2] = a0
	Scope[57][3] = func_0x4405_0x100000001
	r3 = Scope[1][8]["get"]
	r0 = r3()
	r4 = r0["channels"]
	r3 = r4["find"]
	r1 = r3(func_unknown_0x100000078)
	if (!r3(func_unknown_0x100000078))
	{
		r4 = a1
		return func_fail_0x100000037(r4, 404, "\\x627\\x644\\x642\\x646\\x627\\x629 \\x63a\\x64a\\x631 \\x645\\x648\\x62c\\x648\\x62f\\x629")
	}
	r3 = "enabled"
	if (r3 in Scope[57][2]["body"])
	{
		r4 = Scope[57][2]["body"]
		r1["enabled"] = !(!Boolean(r4["enabled"]))
	}
	r3 = "autoStart"
	if (r3 in Scope[57][2]["body"])
	{
		r4 = "autoStart"
		r5 = Scope[57][2]["body"]
		r1[r4] = !(!Boolean(r5["autoStart"]))
	}
	r3 = Scope[1][8]["save"]
	ACCU = r3()
	ACCU = r1["enabled"] === !Boolean([])
	if (r1["enabled"] === !Boolean([]))
	{
		r3 = Scope[57]
		try
		{
			ACCU = Scope[1][11]["stop"](Scope[57][2]["params"]["id"])
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[58]
			r4 = Scope[57]
		}
	}
	r5 = new {"channel": null}
	r5["channel"] = r1
	ACCU = func_ok_0x100000036(a1, r5)
	return undefined
}
function func_unknown_0x100000078(a0)
{
	r1 = Scope[57][2]["params"]
	return a0["id"] === r1["id"]
}
function func_unknown_0x100000077(a0, a1)
{
	r6 = Scope[1]
	Scope[59][2] = a0
	Scope[59][3] = func_0x4405_0x100000001
	r7 = Scope[1][8]["get"]
	r0 = r7()
	r8 = r0["channels"]
	r7 = r8["findIndex"]
	r1 = r7(func_unknown_0x100000076)
	if (r1 < 0)
	{
		r10 = "القناة غير موجودة"
		r8 = a1
		return func_fail_0x100000037(r8, 404, r10)
	}
	r8 = Scope[59][2]["body"]
	r10 = Scope[59][2]["params"]
	r9 = r0
	r2 = func_validateChannel_0x100000016(r8, r9, r10["id"])
	if (func_validateChannel_0x100000016(r8, r9, r10["id"]))
	{
		r8 = a1
		r10 = r2
		return func_fail_0x100000037(r8, 400, r10)
	}
	r7 = Scope[1][11]["isRunning"]
	r9 = Scope[59][2]["params"]
	r3 = r7(r9["id"])
	r4 = !(!Boolean(r0["channels"][r1]["manualStopped"]))
	r7 = r0["channels"]
	r7 = r7[r1]
	r5 = r7["enabled"]
	r10 = Scope[59][2]["body"]
	r11 = Scope[59][2]["params"]
	r0["channels"][r1] = func_channelPayload_0x10000001a(r10, r11["id"])
	r7 = r0["channels"]
	r7 = r7[r1]
	r8 = "manualStopped"
	r7[r8] = r4
	if (r5 === !Boolean([]))
	{
		r7 = r0["channels"]
		r7 = r7[r1]
		r8 = "enabled"
		r7[r8] = !Boolean([])
	}
	r7 = Scope[1][8]["save"]
	ACCU = r7()
	if (r3)
	{
		r7 = Scope[1][11]["restart"]
		r9 = Scope[59][2]["params"]
		ACCU = r7(r9["id"])
	}
	r9 = new {"channel": null}
	r9["channel"] = r0["channels"][r1]
	ACCU = func_ok_0x100000036(a1, r9)
	return undefined
}
function func_unknown_0x100000076(a0)
{
	r1 = Scope[59][2]["params"]
	return a0["id"] === r1["id"]
}
function func_unknown_0x100000075(a0, a1)
{
	r4 = Scope[1][8]["get"]
	r1 = r4()
	r6 = a0["body"]
	ACCU = r6["chanId"]
	if (!r6["chanId"])
	{
		ACCU = ""
	}
	r6 = ACCU
	r5 = String(r6)
	r4 = r5["trim"]
	if (!Boolean(r4()))
	{
		r4 = a0["body"]
		r5 = "chanId"
		r7 = a0["body"]
		r7 = r7["name"]
		r6 = func_autoChanId_0x100000019(r7, r1)
		r4[r5] = func_autoChanId_0x100000019(r7, r1)
		ACCU = r6
	}
	r5 = a0["body"]
	r6 = r1
	r2 = func_validateChannel_0x100000016(r5, r6, null)
	if (func_validateChannel_0x100000016(r5, r6, null))
	{
		r5 = a1
		r7 = r2
		return func_fail_0x100000037(r5, 400, r7)
	}
	r5 = a0["body"]
	r6 = Scope[1][8]["newId"]("ch")
	r3 = func_channelPayload_0x10000001a(r5, r6)
	r5 = r1["channels"]
	ACCU = r5["push"](r3)
	r4 = Scope[1][8]["save"]
	ACCU = r4()
	r6 = new {"channel": null}
	r6["channel"] = r3
	ACCU = func_ok_0x100000036(a1, r6)
	return undefined
}
function func_unknown_0x100000074(a0, a1)
{
	r2 = Scope[1]
	Scope[60][2] = a0
	Scope[60][3] = func_0x4405_0x100000001
	r0 = Scope[1][8]["get"]()
	ACCU = r0["ads"]
	if (!r0["ads"])
	{
		ACCU = []
	}
	r4 = ACCU
	r3 = r4["findIndex"]
	r1 = r3(func_unknown_0x100000073)
	if (r1 < 0)
	{
		r4 = a1
		return func_fail_0x100000037(r4, 404, "\\x627\\x644\\x625\\x639\\x644\\x627\\x646 \\x63a\\x64a\\x631 \\x645\\x648\\x62c\\x648\\x62f")
	}
	r4 = r0["ads"]
	r3 = r4["splice"]
	ACCU = r3(r1, 1)
	ACCU = Scope[1][8]["save"]()
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x100000073(a0)
{
	r1 = Scope[60][2]["params"]
	return a0["id"] === r1["id"]
}
function func_unknown_0x100000072(a0, a1)
{
	r4 = Scope[1]
	Scope[61][2] = a0
	r1 = Scope[1][8]["get"]()
	ACCU = r1["ads"]
	if (!r1["ads"])
	{
		ACCU = []
	}
	r6 = ACCU
	r5 = r6["find"]
	r2 = r5(func_unknown_0x100000071)
	if (!r5(func_unknown_0x100000071))
	{
		r8 = "الإعلان غير موجود"
		r6 = a1
		return func_fail_0x100000037(r6, 404, r8)
	}
	if (!Scope[61][2]["body"])
	{
	}
	r3 = {}
	if (r3["type"])
	{
		r6 = "type"
		r7 = r3["type"]
		ACCU = r7 === "image"
		r5 = r2
		if (r7 === "image")
		{
			ACCU = "image"
		}
		else
		{
			ACCU = "text"
		}
		r5[r6] = ACCU
	}
	if (!undetectable === r3["text"])
	{
		r6 = "text"
		r8 = r3["text"]
		r2[r6] = func_clampStr_0x10000006e(r8, 300)
	}
	if (!undetectable === r3["image"])
	{
		r6 = "image"
		r8 = r3["image"]
		r2[r6] = func_clampStr_0x10000006e(r8, 500)
	}
	if (!undetectable === r3["link"])
	{
		r6 = "link"
		r8 = r3["link"]
		r2[r6] = func_clampStr_0x10000006e(r8, 500)
	}
	if (r3["placement"])
	{
		r6 = "placement"
		ACCU = r3["placement"] === "underChannels"
		r5 = r2
		if (r3["placement"] === "underChannels")
		{
			ACCU = "underChannels"
		}
		else
		{
			ACCU = "underPhone"
		}
		r5[r6] = ACCU
	}
	if (!undetectable === r3["enabled"])
	{
		r6 = "enabled"
		r2[r6] = !(!Boolean(r3["enabled"]))
	}
	if (!undetectable === r3["sort"])
	{
		r7 = r3["sort"]
		ACCU = Number(r7)
		r5 = r2
		if (!Number(r7))
		{
			ACCU = 0
		}
		r5["sort"] = ACCU
	}
	r5 = Scope[1][8]["save"]
	ACCU = r5()
	r7 = new {"ad": null}
	r7["ad"] = r2
	ACCU = func_ok_0x100000036(a1, r7)
	return undefined
}
function func_unknown_0x100000071(a0)
{
	return a0["id"] === Scope[61][2]["params"]["id"]
}
function func_unknown_0x100000070(a0, a1)
{
	r1 = Scope[1][8]["get"]()
	if (!r1["ads"])
	{
		r1["ads"] = []
	}
	if (!a0["body"])
	{
	}
	r2 = {}
	r5 = r2["type"]
	ACCU = r5 === "image"
	if (r5 === "image")
	{
		ACCU = "image"
	}
	else
	{
		ACCU = "text"
	}
	r3 = ACCU
	if (r3 === "text")
	{
		ACCU = r2["text"]
		if (!r2["text"])
		{
			ACCU = ""
		}
		r7 = ACCU
		r6 = String(r7)
		r5 = r6["trim"]
		if (!r5())
		{
			r8 = "نص الإعلان مطلوب"
			r6 = a1
			return func_fail_0x100000037(r6, 400, r8)
		}
	}
	if (r3 === "image")
	{
		ACCU = r2["image"]
		if (!r2["image"])
		{
			ACCU = ""
		}
		r7 = ACCU
		r6 = String(r7)
		if (!r6["trim"]())
		{
			r6 = a1
			return func_fail_0x100000037(r6, 400, "\\x635\\x648\\x631\\x629 \\x627\\x644\\x625\\x639\\x644\\x627\\x646 \\x645\\x637\\x644\\x648\\x628\\x629")
		}
	}
	r5 = new {"id": null, "type": null, "enabled": null, "text": null, "image": null, "link": null, "placement": null, "sort": null}
	r6 = Scope[1][8]["newId"]
	r5["id"] = r6("ad")
	r5["type"] = r3
	r6 = r2["enabled"]
	r5["enabled"] = !(r6 === !Boolean([]))
	r7 = r2["text"]
	r5["text"] = func_clampStr_0x10000006e(r7, 300)
	r7 = r2["image"]
	r5["image"] = func_clampStr_0x10000006e(r7, 500)
	r7 = r2["link"]
	r5["link"] = func_clampStr_0x10000006e(r7, 500)
	r6 = r2["placement"]
	ACCU = r6 === "underChannels"
	if (r6 === "underChannels")
	{
		ACCU = "underChannels"
	}
	else
	{
		ACCU = "underPhone"
	}
	r5["placement"] = ACCU
	r7 = r2["sort"]
	ACCU = Number(r7)
	if (!Number(r7))
	{
		ACCU = (r1["ads"]["length"] + 1)
	}
	r5["sort"] = ACCU
	r4 = r5
	r6 = r1["ads"]
	r5 = r6["push"]
	ACCU = r5(r4)
	ACCU = Scope[1][8]["save"]()
	r7 = new {"ad": null}
	r7["ad"] = r4
	ACCU = func_ok_0x100000036(a1, r7)
	return undefined
}
function func_unknown_0x10000006f(a0, a1)
{
	r2 = new {"ads": null}
	r3 = Scope[1][8]["get"]()
	ACCU = r3["ads"]
	r1 = a1
	if (!r3["ads"])
	{
		ACCU = []
	}
	r2["ads"] = ACCU
	return func_ok_0x100000036(r1, r2)
}
function func_clampStr_0x10000006e(a0, a1)
{
	ACCU = undetectable === a0
	if (undetectable === a0)
	{
		ACCU = ""
	}
	else
	{
		ACCU = a0
	}
	r2 = ACCU
	r1 = String(r2)
	return r1["slice"](0, a1)
}
function func_unknown_0x10000006d(a0, a1)
{
	r2 = new {"channels": null}
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r2["channels"] = r3["channels"]
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x10000006c(a0, a1)
{
	r4 = Scope[1]
	ACCU = a0["body"]
	if (a0["body"])
	{
		r5 = a0["body"]
		ACCU = r5["ids"]
	}
	if (!ACCU)
	{
		ACCU = []
	}
	r1 = ACCU
	r5 = Array["isArray"]
	if (!r5(r1))
		|| (!r1["length"])
	{
		r8 = "لا توجد قنوات محددة"
		r6 = a1
		return func_fail_0x100000037(r6, 400, r8)
	}
	r5 = Scope[1][8]["get"]
	r2 = r5()
	r5 = r2["iptv"]
	r3 = r5["length"]
	ACCU = Set
	Scope[62][2] = Set(r1)
	r6 = "iptv"
	r8 = r2["iptv"]
	r7 = r8["filter"]
	r2[r6] = r7(func_unknown_0x10000006b)
	r5 = Scope[1][8]["save"]
	ACCU = r5()
	r7 = new {"deleted": null}
	r9 = r2["iptv"]
	r7["deleted"] = (r3 - r9["length"])
	ACCU = func_ok_0x100000036(a1, r7)
	return undefined
}
function func_unknown_0x10000006b(a0)
{
	return !Boolean(Scope[62][2]["has"](a0["id"]))
}
function func_unknown_0x10000006a(a0, a1)
{
	r1 = Scope[1]
	Scope[63][2] = a0
	Scope[63][3] = func_0x4405_0x100000001
	r2 = Scope[1][8]["get"]
	r0 = r2()
	r4 = r0["iptv"]
	r3 = r4["filter"]
	r0["iptv"] = r3(func_unknown_0x100000069)
	r2 = Scope[1][8]["save"]
	ACCU = r2()
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x100000069(a0)
{
	r1 = Scope[63][2]["params"]
	return !(a0["id"] === r1["id"])
}
function func_unknown_0x100000068(a0, a1)
{
	r6 = Scope[1]
	if (!a0["body"])
	{
	}
	r7 = {}
	r1 = r7["name"]
	Scope[64][2] = r7["url"]
	r2 = r7["logo"]
	r3 = r7["group"]
	if (!r7["name"])
		|| (!Scope[64][2])
	{
		r10 = "الاسم والرابط مطلوبان"
		r8 = a1
		return func_fail_0x100000037(r8, 400, r10)
	}
	r7 = Scope[1][8]["get"]
	r4 = r7()
	r8 = r4["iptv"]
	r7 = r8["some"]
	if (r7(func_unknown_0x100000067))
	{
		r8 = a1
		return func_fail_0x100000037(r8, 400, "\\x647\\x630\\x647 \\x627\\x644\\x642\\x646\\x627\\x629 \\x645\\x648\\x62c\\x648\\x62f\\x629 \\x645\\x633\\x628\\x642\\x627\\x64b")
	}
	r7 = new {"id": null, "name": null, "url": null, "logo": null, "group": null}
	r8 = Scope[1][8]["newId"]
	r10 = "iptv"
	r7["id"] = r8(r10)
	r7["name"] = r1
	r7["url"] = Scope[64][2]
	ACCU = r2
	if (!r2)
	{
		ACCU = ""
	}
	r7["logo"] = ACCU
	ACCU = r3
	if (!r3)
	{
		ACCU = ""
	}
	r7["group"] = ACCU
	r5 = r7
	r8 = r4["iptv"]
	r7 = r8["push"]
	ACCU = r7(r5)
	r7 = Scope[1][8]["save"]
	ACCU = r7()
	r9 = new {"channel": null}
	r9["channel"] = r5
	ACCU = func_ok_0x100000036(a1, r9)
	return undefined
}
function func_unknown_0x100000067(a0)
{
	return a0["url"] === Scope[64][2]
}
function func_unknown_0x100000066(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = Scope[1][12]["importFromUrl"]
			r9 = a0["body"]
			ACCU = r9["url"]
			r5 = a1
			if (!r9["url"])
			{
				ACCU = ""
			}
			r9 = ACCU
			r8 = String(r9)
			r7 = r6(r8)
			r6 = r1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[65]
			r4 = Scope[1]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 400, Scope[65][2]["message"])
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[66]
	r3 = Scope[1]
	r4 = r1
	return Scope[66][2]
}
function func_unknown_0x100000065(a0, a1)
{
	ACCU = func_0x4405_0x100000001
	r2 = Scope[1]
	try
	{
		if (!a0["file"])
		{
			r4 = a1
			return func_fail_0x100000037(r4, 400, "\\x644\\x645 \\x64a\\x62a\\x645 \\x627\\x62e\\x62a\\x64a\\x627\\x631 \\x645\\x644\\x641")
		}
		r3 = Scope[1][6]["readFileSync"]
		r5 = a0["file"]
		r5 = r5["path"]
		r6 = "utf8"
		r1 = r3(r5, r6)
		r5 = Scope[1][12]["importFromText"]
		r5 = r5(r1)
		ACCU = func_ok_0x100000036(a1, r5)
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[67]
		r3 = Scope[1]
		r5 = a1
		ACCU = func_fail_0x100000037(r5, 400, Scope[67][2]["message"])
	}
	return undefined
}
function func_unknown_0x100000064(a0, a1)
{
	r2 = new {"iptv": null}
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r2["iptv"] = r3["iptv"]
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x100000063(a0, a1)
{
	r1 = Scope[1]
	Scope[68][2] = a0
	Scope[68][3] = func_0x4405_0x100000001
	r2 = Scope[1][8]["get"]
	r0 = r2()
	r3 = r0["channels"]
	if (r3["some"](func_unknown_0x100000061))
	{
		r3 = a1
		return func_fail_0x100000037(r3, 400, "\\x644\\x627 \\x64a\\x645\\x643\\x646 \\x62d\\x630\\x641 \\x627\\x644\\x645\\x635\\x62f\\x631 \\x644\\x623\\x646\\x647 \\x645\\x631\\x62a\\x628\\x637 \\x628\\x642\\x646\\x627\\x629")
	}
	r3 = "sources"
	r5 = r0["sources"]
	r4 = r5["filter"]
	r0[r3] = r4(func_unknown_0x100000062)
	ACCU = Scope[1][8]["save"]()
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x100000062(a0)
{
	return !(a0["id"] === Scope[68][2]["params"]["id"])
}
function func_unknown_0x100000061(a0)
{
	r0 = a0["sourceId"]
	r1 = Scope[68][2]["params"]
	return r0 === r1["id"]
}
function func_unknown_0x100000060(a0, a1)
{
	r3 = Scope[1]
	Scope[69][2] = a0
	Scope[69][3] = func_0x4405_0x100000001
	r4 = Scope[1][8]["get"]
	r0 = r4()
	r4 = r0["sources"]["findIndex"]
	r1 = r4(func_unknown_0x10000005f)
	if (r1 < 0)
	{
		r7 = "المصدر غير موجود"
		r5 = a1
		return func_fail_0x100000037(r5, 404, r7)
	}
	r5 = Scope[69][2]["body"]
	r7 = Scope[69][2]["params"]
	r6 = r0
	r2 = func_validateSource_0x10000000a(r5, r6, r7["id"])
	if (func_validateSource_0x10000000a(r5, r6, r7["id"]))
	{
		r5 = a1
		r7 = r2
		return func_fail_0x100000037(r5, 400, r7)
	}
	r4 = r0["sources"]
	r8 = {}
	r10 = new {"id": null}
	r10["id"] = Scope[69][2]["params"]["id"]
	r4[r1] = Object["assign"](r8, Scope[69][2]["body"], r10)
	r4 = Scope[1][8]["save"]
	ACCU = r4()
	r6 = new {"source": null}
	r7 = r0["sources"]
	r6["source"] = r7[r1]
	ACCU = func_ok_0x100000036(a1, r6)
	return undefined
}
function func_unknown_0x10000005f(a0)
{
	r1 = Scope[69][2]["params"]
	return a0["id"] === r1["id"]
}
function func_unknown_0x10000005e(a0, a1)
{
	r4 = <closure>
	r5 = <this>
	r3 = ACCU
	r4 = Scope[1]
	try
	{
		ACCU = a0["body"]
		if (a0["body"])
		{
			r7 = a0["body"]
			ACCU = r7["url"]
		}
		if (!ACCU)
		{
			ACCU = ""
		}
		r7 = ACCU
		r6 = String(r7)
		r5 = r6["trim"]
		r1 = r5()
		ACCU = a0["body"]
		if (a0["body"])
		{
			r7 = a0["body"]
			ACCU = r7["userAgent"]
		}
		if (!ACCU)
		{
			ACCU = ""
		}
		r7 = ACCU
		r6 = String(r7)
		r5 = r6["trim"]
		ACCU = r5()
		if (!r5())
		{
			ACCU = "VLC/3.0.20 LibVLC/3.0.20"
		}
		r2 = ACCU
		r6 = \^https?:\\\\/\\\\/\
		r8 = 254
		r5 = r6["test"]
		ACCU = r5(r1)
		if (!r5(r1))
		{
			r8 = "\\x631\\x627\\x628\\x637 \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d"
			r6 = a1
			r6 = func_fail_0x100000037(r6, 400, "\\x631\\x627\\x628\\x637 \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d")
			r5 = r3
			ACCU = r6
			return r6
		}
		r5 = Scope[1]
		try
		{
			r9 = func_probeUrl_0x100000012(r1, r2)
			r8 = r3
			r7 = a1
			r8 = await r9
			r9 = _GeneratorGetResumeMode(r3)
			if (!r9 === 0)
			{
				ACCU = r8
			}
			ACCU = func_ok_0x100000036(r7, r8)
		}
		catch
		{
			r6 = ACCU
			ACCU = null
			ACCU = Scope[70]
			r6 = Scope[1]
			r9 = new {"ok": null, "status": 0, "message": null, "kind": null}
			r9["ok"] = !Boolean([])
			r9["message"] = Scope[70][2]["message"]
			r9["kind"] = "error"
			ACCU = func_ok_0x100000036(a1, r9)
		}
		r6 = undefined
		r5 = r3
		return r6
	}
	catch {}
	r5 = ACCU
	ACCU = null
	ACCU = Scope[71]
	r5 = Scope[1]
	r6 = r3
	return Scope[71][2]
}
function func_unknown_0x10000005d(a0, a1)
{
	r4 = Scope[1][8]["get"]
	r1 = r4()
	r5 = a0["body"]
	r6 = r1
	r2 = func_validateSource_0x10000000a(r5, r6, null)
	if (func_validateSource_0x10000000a(r5, r6, null))
	{
		r5 = a1
		r7 = r2
		return func_fail_0x100000037(r5, 400, r7)
	}
	r4 = Object["assign"]
	r6 = {}
	r7 = a0["body"]
	r8 = new {"id": null}
	r11 = "src"
	r8["id"] = Scope[1][8]["newId"](r11)
	r3 = r4(r6, r7, r8)
	r5 = r1["sources"]
	ACCU = r5["push"](r3)
	r4 = Scope[1][8]["save"]
	ACCU = r4()
	r6 = new {"source": null}
	r6["source"] = r3
	ACCU = func_ok_0x100000036(a1, r6)
	return undefined
}
function func_unknown_0x10000005c(a0, a1)
{
	r2 = new {"sources": null}
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r2["sources"] = r3["sources"]
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x10000005b(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = Scope[1][10]["recommendCaptureSettings"]
			r9 = a0["query"]
			ACCU = r9["device"]
			r5 = a1
			if (!r9["device"])
			{
				ACCU = ""
			}
			r9 = ACCU
			r8 = String(r9)
			r7 = r6(r8)
			r6 = r1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[72]
			r4 = Scope[1]
			r8 = Scope[72][2]["message"]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[73]
	r3 = Scope[1]
	r4 = r1
	return Scope[73][2]
}
function func_unknown_0x10000005a(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = Scope[1][10]["listDeviceOptions"]
			r9 = a0["query"]
			ACCU = r9["device"]
			r5 = a1
			if (!r9["device"])
			{
				ACCU = ""
			}
			r9 = ACCU
			r8 = String(r9)
			r7 = r6(r8)
			r6 = r1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[74]
			r4 = Scope[1]
			r8 = Scope[74][2]["message"]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[75]
	r3 = Scope[1]
	r4 = r1
	return Scope[75][2]
}
function func_unknown_0x100000059(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = Scope[1][10]["diagnose"]
			r7 = r6()
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[76]
			r4 = Scope[1]
			r8 = Scope[76][2]["message"]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[77]
	r3 = Scope[1]
	r4 = r1
	return Scope[77][2]
}
function func_unknown_0x100000058(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r6 = Scope[1][10]["listDshowDevices"]
			r7 = r6()
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[78]
			r4 = Scope[1]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 500, ("\\x62a\\x639\\x630\\x631 \\x642\\x631\\x627\\x621\\x629 \\x627\\x644\\x623\\x62c\\x647\\x632\\x629: " + Scope[78][2]["message"]))
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[79]
	r3 = Scope[1]
	r4 = r1
	return Scope[79][2]
}
function func_unknown_0x100000057(a0, a1)
{
	if (!a0["file"])
	{
		r4 = "لم يتم اختيار ملف"
		r2 = a1
		return func_fail_0x100000037(r2, 400, r4)
	}
	r3 = new {"path": null, "url": null}
	r3["path"] = ("srv/uploads/" + a0["file"]["filename"])
	r4 = "/uploads/"
	r5 = a0["file"]
	r3["url"] = (r4 + r5["filename"])
	ACCU = func_ok_0x100000036(a1, r3)
	return undefined
}
function func_unknown_0x100000056(a0, a1)
{
	if (!a0["body"])
	{
	}
	r3 = {}
	r1 = r3["current"]
	r2 = r3["next"]
	r3 = Scope[1][8]["checkPassword"]
	if (!r3(r1))
	{
		r6 = "كلمة المرور الحالية غير صحيحة"
		r4 = a1
		return func_fail_0x100000037(r4, 400, r6)
	}
	if (!r2)
	r3 = String(r2)
	r3 = r3["length"]
		|| (r3 < 6)
	{
		r6 = "كلمة المرور الجديدة قصيرة (6 أحرف على الأقل)"
		r4 = a1
		return func_fail_0x100000037(r4, 400, r6)
	}
	r3 = Scope[1][8]["setPassword"]
	ACCU = r3(r2)
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x100000055(a0, a1)
{
	r1 = Scope[1][2]("fs")
	r12 = Scope[1][2]("child_process")
	r2 = r12["execSync"]
	r12 = Scope[1][8]["get"]
	r12 = r12()
	r3 = r12["settings"]
	r4 = func_buildNginxConf_0x100000002(r3)
	r5 = []
	ACCU = []
	r6 = []
	r12 = Scope[1]
	try
	{
		r13 = Scope[1][5]["join"]
		r15 = Scope[1][8]["ROOT"]
		r11 = r13(r15, "nginx", "nginx.conf")
		r13 = r1["mkdirSync"]
		r15 = Scope[1][5]["dirname"]
		r15 = r15(r11)
		r16 = new {"recursive": null}
		r16["recursive"] = !(!Boolean([]))
		ACCU = r13(r15, r16)
		r13 = r1["writeFileSync"]
		ACCU = r13(r11, r4)
		r13 = r5["push"]
		r15 = "nginx/nginx.conf"
		ACCU = r13(r15)
	}
	catch
	{
		r13 = ACCU
		ACCU = null
		ACCU = Scope[80]
		r13 = Scope[1]
		r14 = r6["push"]
		r16 = "تعذّر كتابة النسخة المحلية: "
		r16 = (r16 + Scope[80][2]["message"])
		ACCU = r14(r16)
	}
	r7 = null
	if (r3["nginxPath"])
	{
		r13 = \nginx\\\\.exe$\
		r12 = r13["test"]
		r14 = r3["nginxPath"]
		ACCU = r12(r14)
		if (r12(r14))
		{
			r12 = Scope[1][5]["dirname"]
			r14 = r3["nginxPath"]
			ACCU = r12(r14)
		}
		else
		{
			ACCU = r3["nginxPath"]
		}
		r7 = ACCU
	}
	else
	{
		if (Scope[1][22]["isWindows"])
		{
			r12 = r1["existsSync"]
			r14 = "C:/nginx/nginx.exe"
			if (r12(r14))
			{
				r7 = "C:/nginx"
			}
		}
	}
	ACCU = r7
	if (r7)
	{
		r12 = Scope[1]
		try
		{
			r13 = Scope[1][5]["join"]
			r16 = "conf"
			r17 = "nginx.conf"
			r15 = r7
			r8 = r13(r15, r16, r17)
			r13 = r1["mkdirSync"]
			r15 = Scope[1][5]["dirname"]
			r15 = r15(r8)
			r16 = new {"recursive": null}
			r16["recursive"] = !(!Boolean([]))
			ACCU = r13(r15, r16)
			r13 = r1["existsSync"]
			if (r13(r8))
			{
				r13 = r1["existsSync"]
				r15 = (r8 + ".amaan-bak")
				if (!r13(r15))
				{
					r13 = r1["copyFileSync"]
					r16 = (r8 + ".amaan-bak")
					ACCU = r13(r8, r16)
				}
			}
			r13 = r1["writeFileSync"]
			ACCU = r13(r8, r4)
			r13 = r5["push"]
			r15 = r8["replace"]
			r17 = \\\\\\\\\\
			r15 = r15(r17, "/")
			ACCU = r13(r15)
			r13 = Scope[1]
			try
			{
				r15 = "child_process"
				r14 = Scope[1][2](r15)
				r9 = r14["spawnSync"]
				r15 = \nginx\\\\.exe$\
				r14 = r15["test"]
				ACCU = r3["nginxPath"]
				if (!r3["nginxPath"])
				{
					ACCU = ""
				}
				r16 = ACCU
				ACCU = r14(r16)
				if (r14(r16))
				{
					ACCU = r3["nginxPath"]
				}
				else
				{
					r14 = Scope[1][5]["join"]
					r17 = "nginx.exe"
					ACCU = r14(r7, r17)
				}
				r10 = ACCU
				r17 = new ["-p", 0, "-c", 0, "-s", "reload"]
				r17[1] = r7
				r17[3] = r8
				r16 = r17
				r17 = new {"cwd": null, "timeout": 8000, "stdio": null}
				r17["cwd"] = r7
				r17["stdio"] = "ignore"
				r15 = r10
				ACCU = r9(r15, r16, r17)
				r14 = r6["push"]
				r16 = "تم إعادة تحميل Nginx بنجاح على المنفذ "
				ACCU = r3["nginxPort"]
				r15 = r6
				if (!r3["nginxPort"])
				{
					ACCU = 80
				}
				r16 = (r16 + ACCU)
				ACCU = r14(r16)
			}
			catch
			{
				r14 = ACCU
				ACCU = null
				ACCU = Scope[81]
				r14 = Scope[1]
				r15 = r6["push"]
				r17 = "تم تحديث الملف لكن تعذّر إعادة تحميل Nginx تلقائياً — أعد تشغيله يدوياً."
				ACCU = r15(r17)
			}
		}
		catch
		{
			r13 = ACCU
			ACCU = null
			ACCU = Scope[82]
			r13 = Scope[1]
			r14 = r6["push"]
			r16 = (("\\x62a\\x639\\x630\\x651\\x631 \\x627\\x644\\x643\\x62a\\x627\\x628\\x629 \\x641\\x64a \\x645\\x62c\\x644\\x62f Nginx (" + r7) + "): ")
			r16 = (r16 + Scope[82][2]["message"])
			r16 = (r16 + " — انسخ nginx/nginx.conf يدوياً.")
			ACCU = r14(r16)
		}
	}
	else
	{
		r14 = r6["push"]
		ACCU = r14("\\x644\\x645 \\x64a\\x64f\\x62d\\x62f\\x64e\\x651\\x62f \\x645\\x633\\x627\\x631 Nginx \\x641\\x64a \\x627\\x644\\x625\\x639\\x62f\\x627\\x62f\\x627\\x62a \\x2014 \\x627\\x646\\x633\\x62e nginx/nginx.conf \\x64a\\x62f\\x648\\x64a\\x627\\x64b \\x625\\x644\\x649 \\x645\\x62c\\x644\\x62f Nginx\\x60c \\x623\\x648 \\x623\\x62f\\x62e\\x644 \\x645\\x633\\x627\\x631\\x647 \\x641\\x64a \\xab\\x627\\x644\\x645\\x633\\x627\\x631\\x627\\x62a\\xbb.")
	}
	r14 = new {"written": null, "notes": null, "nginxPort": null, "port": null}
	r14["written"] = r5
	r14["notes"] = r6
	ACCU = r3["nginxPort"]
	r13 = a1
	if (!r3["nginxPort"])
	{
		ACCU = 80
	}
	r14["nginxPort"] = ACCU
	ACCU = r3["port"]
	if (!r3["port"])
	{
		ACCU = 3001
	}
	r14["port"] = ACCU
	ACCU = func_ok_0x100000036(r13, r14)
	return undefined
}
function func_unknown_0x100000054(a0, a1)
{
	r10 = Scope[1][8]["get"]
	r1 = r10()
	r11 = new [0, "siteNameLatin", 0, 0, "ticker", "tickerEnabled", "port", 0, 0, 0, 0, "worldCupApiStadiums", 0, 0, 0, 0, "x264Threads", "x264QualityMode", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "capLevelToPlayerSize", "cpuSaverDefault", "logoImage", 0, 0, "logoOpacityPct", 0, "nginxPath", "streamUserAgent", "newsSources", 0, 0, 0, 0, 0]
	r11[0] = "siteName"
	r11[2] = "logo"
	r11[3] = "phone"
	r11[7] = "nginxPort"
	r11[8] = "worldCupTheme"
	r11[9] = "worldCupFullPage"
	r11[10] = "worldCupApiGames"
	r11[12] = "hlsTime"
	r11[13] = "hlsListSize"
	r11[14] = "hlsDeleteThreshold"
	r11[15] = "x264Preset"
	r11[18] = "gopSeconds"
	r11[19] = "startupQueueDelayMs"
	r11[20] = "autoRestartCrashed"
	r11[21] = "restartBackoffMs"
	r11[22] = "maxRestarts"
	r11[23] = "sourceFailStopMinutes"
	r11[24] = "blockedStopMinutes"
	r11[25] = "playerMaxBufferLength"
	r11[26] = "playerBackBufferLength"
	r11[27] = "playerLiveSyncDuration"
	r11[31] = "logoPosition"
	r11[32] = "logoSizePct"
	r11[34] = "ffmpegPath"
	r11[38] = "newsCacheMinutes"
	r11[39] = "sportsTickerEnabled"
	r11[40] = "sportsNewsSources"
	r11[41] = "idleStopEnabled"
	r13 = 217
	r11[42] = "idleStopMinutes"
	r2 = r11
	r11 = GetIterator(r2)
	r10 = r11["next"]
	ACCU = false
	r12 = false
	r15 = Scope[1]
	try
	{
		while (true)
		{
			r12 = true
			r16 = r10()
			if (r16["done"]) break
			r12 = false
			if (!r16["value"] in a0[r0(278)]) continue
			r17 = r1[r0(429)]
			ACCU = a0["body"][r16["value"]]
			r17[r16["value"]] = a0["body"][r16["value"]]
		}
		ACCU = -1
		r14 = -1
		r13 = -1
	}
	catch
	{
		r14 = ACCU
		r13 = 0
	}
	if (!r12)
	{
		r17 = Scope[1]
		try
		{
			if (!r11["return"] == undefined)
			{
				ACCU = r11["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r13 === 0)
	{
		ACCU = r14
	}
	r11 = new ["port", 0]
	r13 = 357
	r11[1] = "nginxPort"
	r11 = GetIterator(r11)
	r10 = r11["next"]
	ACCU = false
	r12 = false
	r15 = Scope[1]
	try
	{
		while (true)
		{
			r12 = true
			r16 = r10()
			if (r16["done"]) break
			r12 = false
			if (!r16["value"] in a0["body"]) continue
			r18 = a0[r0(278)]
			r18 = r18[r16["value"]]
			r7 = parseInt(r18, 10)
			r17 = Number[r0(257)]
			if (!r17(r7))
				|| (r7 < 1)
				|| (r7 > 65535)
			{
				r20 = r0(241)
				r18 = a1
				r14 = func_fail_0x100000037(r18, 400, r20)
				r13 = 1
				break
			}
			r17 = r1[r0(429)]
			ACCU = r7
			r17[r16["value"]] = r7
		}
		ACCU = -1
		r14 = -1
		r13 = -1
	}
	catch
	{
		r14 = ACCU
		r13 = 0
	}
	if (!r12)
	{
		r17 = Scope[1]
		try
		{
			if (!r11["return"] == undefined)
			{
				ACCU = r11["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	switch (r13)
	default:
	{
		break
	}
	case (0):
	{
		ACCU = r14
	}
	case (1):
	{
		return r14
	}
	r10 = r1["settings"]
	r10 = r10["port"]
	r11 = r1["settings"]
	if (r10 === r11["nginxPort"])
	{
		r11 = a1
		return func_fail_0x100000037(r11, 400, "\\x645\\x646\\x641\\x630 \\x627\\x644\\x646\\x638\\x627\\x645 \\x648\\x645\\x646\\x641\\x630 Nginx \\x64a\\x62c\\x628 \\x623\\x646 \\x64a\\x643\\x648\\x646\\x627 \\x645\\x62e\\x62a\\x644\\x641\\x64a\\x646")
	}
	r10 = Scope[1][8]["save"]
	ACCU = r10()
	r12 = new {"settings": null, "restartRequired": null}
	r12["settings"] = r1["settings"]
	r13 = "port"
	ACCU = r13 in a0["body"]
	r11 = a1
	if (!r13 in a0["body"])
	{
		ACCU = "nginxPort" in a0["body"]
	}
	r12["restartRequired"] = ACCU
	ACCU = func_ok_0x100000036(r11, r12)
	return undefined
}
function func_unknown_0x100000053(a0, a1)
{
	r2 = new {"settings": null}
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r2["settings"] = r3["settings"]
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x100000052(a0, a1)
{
	if (!func_isLoopback_0x100000007(a0))
	{
		r2 = a1
		return func_fail_0x100000037(r2, 403, "\\x645\\x62a\\x627\\x62d \\x645\\x646 \\x627\\x644\\x62c\\x647\\x627\\x632 \\x627\\x644\\x645\\x62d\\x644\\x64a \\x641\\x642\\x637")
	}
	r3 = new {"stopping": null}
	r3["stopping"] = !(!Boolean([]))
	ACCU = func_ok_0x100000036(a1, r3)
	r1 = Scope[1]
	try
	{
		r2 = Scope[1][11]["stopAll"]
		ACCU = r2()
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[83]
		r2 = Scope[1]
	}
	ACCU = setTimeout(func_unknown_0x100000051, 1500)
	return undefined
}
function func_unknown_0x100000051()
{
	return process["exit"](0)
}
function func_unknown_0x100000050(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r8 = !Boolean([])
			r7 = Scope[1][20]["getSportsNews"](r8)
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[84]
			r4 = Scope[1]
			r8 = Scope[84][2]["message"]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[85]
	r3 = Scope[1]
	r4 = r1
	return Scope[85][2]
}
function func_unknown_0x10000004f(a0, a1)
{
	r2 = <closure>
	r3 = <this>
	r1 = ACCU
	r2 = Scope[1]
	try
	{
		ACCU = func_0x4405_0x100000001
		r3 = Scope[1]
		try
		{
			r8 = !Boolean([])
			r7 = Scope[1][20]["getNews"](r8)
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			ACCU = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[86]
			r4 = Scope[1]
			r8 = Scope[86][2]["message"]
			r6 = a1
			ACCU = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[87]
	r3 = Scope[1]
	r4 = r1
	return Scope[87][2]
}
function func_unknown_0x10000004e(a0, a1)
{
	r2 = new {"matches": null}
	r2["matches"] = Scope[1][20]["todayMatches"]()
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x10000004d(a0, a1)
{
	r4 = a0["query"]
	ACCU = r4["id"]
	if (!r4["id"])
	{
		ACCU = ""
	}
	r4 = ACCU
	r1 = String(r4)
	r3 = Scope[1][11]["statusOf"]
	r2 = r3(r1)
	r5 = new {"status": null, "running": null}
	r4 = a1
	ACCU = r2
	if (r2)
	{
		ACCU = r2["status"]
	}
	if (!ACCU)
	{
		ACCU = "unknown"
	}
	r5["status"] = ACCU
	r6 = Scope[1][11]["isRunning"]
	r5["running"] = r6(r1)
	ACCU = func_ok_0x100000036(r4, r5)
	return undefined
}
function func_unknown_0x10000004c(a0, a1)
{
	if (!a0["body"])
	{
	}
	r8 = {}
	r1 = r8["channelId"]
	if (r8["channelId"])
	{
		if (r8["clientId"])
		{
			r9 = String(r8["clientId"])
			r8 = r9["slice"]
			r4 = r8(0, 64)
			r8 = Scope[1][24]["has"]
			if (!r8(r1))
			{
				r11 = Map(func_0x4405_0x100000001)
				ACCU = Scope[1][24]["set"](r1, r11)
			}
			r9 = Scope[1][24]["get"](r1)
			r12 = Date
			r11 = Date["now"]
			r11 = r11()
			ACCU = r9["set"](r4, r11)
			r9 = Scope[1][25]
			r8 = Scope[1][25]["add"]
			r10 = (r1 + ":")
			r10 = (r10 + r4)
			ACCU = r8(r10)
			if (Scope[1][25]["size"] > 100000)
			{
				r9 = Array.from(Scope[1][25])
				r8 = r9["slice"]
				r11 = 10000
				r5 = r8(0, 10000)
				r9 = GetIterator(r5)
				r8 = r9["next"]
				ACCU = false
				r10 = false
				r13 = Scope[1]
				try
				{
					while (true)
					{
						r10 = true
						r14 = r8()
						if (r14["done"]) break
						r10 = false
						r15 = Scope[1][25][r0(236)]
						ACCU = r15(r14["value"])
						r14 = r14["value"]
					}
					ACCU = -1
					r12 = -1
					r11 = -1
				}
				catch
				{
					r12 = ACCU
					r11 = 0
				}
				if (!r10)
				{
					r15 = Scope[1]
					try
					{
						if (!r9["return"] == undefined)
						{
							ACCU = r9["return"]()
						}
						catch {}
					}
				}
				ACCU = null
				if (r11 === 0)
				{
					ACCU = r12
				}
			}
			r8 = Scope[1][15]["onViewerHeartbeat"]
			ACCU = r8(r1)
		}
	}
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x10000004b(a0, a1)
{
	r1 = Scope[1]
	Scope[88][2] = func_0x4405_0x100000001
	r2 = Scope[1][8]["get"]
	Scope[88][3] = r2()
	Scope[88][4] = Date(r0)
	r5 = Array.from(Scope[88][3]["channels"])
	r4 = r5["sort"]
	r4 = r4(func_unknown_0x100000047)
	r3 = r4["filter"]
	r3 = r3(func_unknown_0x100000048)
	r2 = r3["map"]
	r0 = r2(func_unknown_0x10000004a)
	r4 = new {"channels": null}
	r4["channels"] = r0
	ACCU = func_ok_0x100000036(a1, r4)
	return undefined
}
function func_unknown_0x10000004a(a0)
{
	r5 = Scope[88]
	Scope[89][2] = a0
	Scope[89][3] = func_0x4405_0x100000001
	r6 = Scope[1][14]["nextOpenMinutes"]
	r0 = r6(Scope[89][2]["id"], Scope[88][4])
	ACCU = !(undetectable === r6(Scope[89][2]["id"], Scope[88][4]))
	if (!(undetectable === r6(Scope[89][2]["id"], Scope[88][4])))
	{
		ACCU = r0 > 0
	}
	r1 = ACCU
	r2 = "live"
	if (Scope[89][2]["manualStopped"])
	{
		r2 = "stopped"
	}
	else
	{
		if (r1)
		{
			r2 = "scheduled"
		}
	}
	r3 = Scope[88][3]["sources"]["find"](func_unknown_0x100000049)
	if (Scope[88][3]["sources"]["find"](func_unknown_0x100000049))
	r6 = r3["type"]
	ACCU = r6 === "multi-m3u8"
		&& (r6 === "multi-m3u8")
	{
		ACCU = "master.m3u8"
	}
	else
	{
		ACCU = "index.m3u8"
	}
	r4 = ACCU
	r6 = new {"id": null, "name": null, "category": null, "cover": null, "quality": null, "live": null, "status": null, "nextOpen": null, "url": null}
	r6["id"] = Scope[89][2]["id"]
	r6["name"] = Scope[89][2]["name"]
	ACCU = Scope[89][2]["category"]
	if (!Scope[89][2]["category"])
	{
		ACCU = ""
	}
	r6["category"] = ACCU
	ACCU = Scope[89][2]["cover"]
	if (!Scope[89][2]["cover"])
	{
		ACCU = ""
	}
	r6["cover"] = ACCU
	ACCU = Scope[89][2]["quality"]
	if (!Scope[89][2]["quality"])
	{
		ACCU = "copy"
	}
	r6["quality"] = ACCU
	r6["live"] = Scope[1][11]["isRunning"](Scope[89][2]["id"])
	r6["status"] = r2
	r6["nextOpen"] = r0
	r7 = "/hls/"
	r7 = (r7 + Scope[89][2]["id"])
	r7 = (r7 + "/")
	r6["url"] = (r7 + r4)
	return r6
}
function func_unknown_0x100000049(a0)
{
	return a0["id"] === Scope[89][2]["sourceId"]
}
function func_unknown_0x100000048(a0)
{
	r0 = a0["enabled"]
	return !(r0 === !Boolean([]))
}
function func_unknown_0x100000047(a0, a1)
{
	ACCU = a0["sort"]
	if (!a0["sort"])
	{
		ACCU = 0
	}
	r0 = ACCU
	ACCU = a1["sort"]
	if (!a1["sort"])
	{
		ACCU = 0
	}
	return (r0 - ACCU)
}
function func_unknown_0x100000046(a0, a1)
{
	r1 = Scope[1]
	Scope[90][2] = func_0x4405_0x100000001
	r5 = Scope[1][8]["get"]
	r5 = r5()
	ACCU = r5["ads"]
	if (!r5["ads"])
	{
		ACCU = []
	}
	r5 = ACCU
	r4 = r5["filter"]
	r4 = r4(func_unknown_0x100000043)
	r3 = r4["sort"]
	r3 = r3(func_unknown_0x100000044)
	r0 = r3["map"](func_unknown_0x100000045)
	r4 = new {"ads": null}
	r4["ads"] = r0
	ACCU = func_ok_0x100000036(a1, r4)
	return undefined
}
function func_unknown_0x100000045(a0)
{
	r0 = new {"id": null, "type": null, "text": null, "image": null, "link": null, "placement": null}
	r0["id"] = a0["id"]
	r0["type"] = a0["type"]
	r0["text"] = a0["text"]
	r0["image"] = a0["image"]
	r0["link"] = a0["link"]
	r0["placement"] = a0["placement"]
	return r0
}
function func_unknown_0x100000044(a0, a1)
{
	ACCU = a0["sort"]
	if (!a0["sort"])
	{
		ACCU = 0
	}
	r0 = ACCU
	ACCU = a1["sort"]
	if (!a1["sort"])
	{
		ACCU = 0
	}
	return (r0 - ACCU)
}
function func_unknown_0x100000043(a0)
{
	ACCU = !(a0["enabled"] === !Boolean([]))
	if (!(a0["enabled"] === !Boolean([])))
	{
		r0 = a0["type"]
		ACCU = r0 === "text"
		if (r0 === "text")
		{
			ACCU = a0["text"]
		}
		else
		{
			ACCU = a0["image"]
		}
	}
	return ACCU
}
function func_unknown_0x100000042(a0, a1)
{
	r1 = Scope[1]
	Scope[91][2] = func_0x4405_0x100000001
	r5 = Scope[1][8]["get"]
	r5 = r5()
	ACCU = r5["ads"]
	if (!r5["ads"])
	{
		ACCU = []
	}
	r5 = ACCU
	r4 = r5["filter"]
	r4 = r4(func_unknown_0x10000003f)
	r3 = r4["sort"]
	r3 = r3(func_unknown_0x100000040)
	r2 = r3["map"]
	r0 = r2(func_unknown_0x100000041)
	r4 = new {"ads": null}
	r4["ads"] = r0
	ACCU = func_ok_0x100000036(a1, r4)
	return undefined
}
function func_unknown_0x100000041(a0)
{
	r0 = new {"id": null, "type": null, "text": null, "image": null, "link": null, "placement": null}
	r0["id"] = a0["id"]
	r0["type"] = a0["type"]
	r0["text"] = a0["text"]
	r0["image"] = a0["image"]
	r0["link"] = a0["link"]
	r0["placement"] = a0["placement"]
	return r0
}
function func_unknown_0x100000040(a0, a1)
{
	ACCU = a0["sort"]
	if (!a0["sort"])
	{
		ACCU = 0
	}
	r0 = ACCU
	ACCU = a1["sort"]
	if (!a1["sort"])
	{
		ACCU = 0
	}
	return (r0 - ACCU)
}
function func_unknown_0x10000003f(a0)
{
	r0 = a0["enabled"]
	ACCU = !(r0 === !Boolean([]))
	if (!(r0 === !Boolean([])))
	{
		r0 = a0["type"]
		ACCU = r0 === "text"
		if (r0 === "text")
		{
			ACCU = a0["text"]
		}
		else
		{
			ACCU = a0["image"]
		}
	}
	return ACCU
}
function func_unknown_0x10000003e(a0, a1)
{
	r2 = Scope[1][8]["get"]
	r2 = r2()
	r1 = r2["settings"]
	r4 = new {"settings": null}
	r5 = new {"siteName": null, "siteNameLatin": null, "logo": null, "phone": null, "ticker": null, "worldCupTheme": null, "worldCupFullPage": null, "worldCupApiGames": null, "worldCupApiStadiums": null, "sportsTicker": null, "playerMaxBufferLength": null, "playerBackBufferLength": null, "playerLiveSyncDuration": null, "capLevelToPlayerSize": null, "cpuSaverDefault": null}
	r5["siteName"] = r1["siteName"]
	r5["siteNameLatin"] = r1["siteNameLatin"]
	r5["logo"] = r1["logo"]
	r5["phone"] = r1["phone"]
	ACCU = r1["tickerEnabled"]
	r3 = a1
	if (r1["tickerEnabled"])
	{
		ACCU = r1["ticker"]
	}
	else
	{
		ACCU = ""
	}
	r5["ticker"] = ACCU
	r5["worldCupTheme"] = !(!Boolean(r1["worldCupTheme"]))
	r6 = r1["worldCupFullPage"]
	r5["worldCupFullPage"] = !(r6 === !Boolean([]))
	ACCU = r1["worldCupApiGames"]
	if (!r1["worldCupApiGames"])
	{
		ACCU = ""
	}
	r5["worldCupApiGames"] = ACCU
	ACCU = r1["worldCupApiStadiums"]
	if (!r1["worldCupApiStadiums"])
	{
		ACCU = ""
	}
	r5["worldCupApiStadiums"] = ACCU
	r5["sportsTicker"] = !(!Boolean(r1["sportsTickerEnabled"]))
	r5["playerMaxBufferLength"] = r1["playerMaxBufferLength"]
	r5["playerBackBufferLength"] = r1["playerBackBufferLength"]
	r5["playerLiveSyncDuration"] = func_effectiveLiveSync_0x100000006(r1)
	r5["capLevelToPlayerSize"] = !(!Boolean(r1["capLevelToPlayerSize"]))
	r5["cpuSaverDefault"] = !(!Boolean(r1["cpuSaverDefault"]))
	r4["settings"] = r5
	ACCU = func_ok_0x100000036(r3, r4)
	return undefined
}
function func_unknown_0x10000003d(a0, a1)
{
	r2 = new {"authed": null}
	r3 = Scope[1][9]["isAuthed"]
	r2["authed"] = r3(a0)
	return func_ok_0x100000036(a1, r2)
}
function func_unknown_0x10000003c(a0, a1)
{
	ACCU = Scope[1][9]["logout"](a1)
	ACCU = func_ok_0x100000036(a1)
	return undefined
}
function func_unknown_0x10000003b(a0, a1)
{
	r7 = Scope[1][8]["get"]
	r7 = r7()
	r1 = r7["settings"]
	if (r7["settings"]["setupDone"])
	{
		r8 = a1
		return func_fail_0x100000037(r8, 400, "\\x62a\\x645 \\x627\\x644\\x625\\x639\\x62f\\x627\\x62f \\x645\\x633\\x628\\x642\\x627\\x64b")
	}
	if (!a0["body"])
	{
	}
	r7 = {}
	r2 = r7["ownerName"]
	r3 = r7["networkName"]
	r4 = r7["phone"]
	r5 = r7["city"]
	r6 = r7["password"]
	if (!r7["ownerName"])
		|| (!r7["networkName"])
		|| (!r7["phone"])
		|| (!r7["city"])
	{
		r10 = "يرجى تعبئة كل الحقول"
		r8 = a1
		return func_fail_0x100000037(r8, 400, r10)
	}
	if (!r6)
	r7 = String(r6)
	r7 = r7["length"]
		|| (r7 < 6)
	{
		r8 = a1
		return func_fail_0x100000037(r8, 400, "\\x643\\x644\\x645\\x629 \\x627\\x644\\x645\\x631\\x648\\x631 \\x64a\\x62c\\x628 \\x623\\x646 \\x62a\\x643\\x648\\x646 6 \\x623\\x62d\\x631\\x641 \\x639\\x644\\x649 \\x627\\x644\\x623\\x642\\x644")
	}
	r8 = "ownerName"
	r10 = String(r2)
	r9 = r10["slice"]
	r1[r8] = r9(0, 100)
	r8 = "networkName"
	r10 = String(r3)
	r1[r8] = r10["slice"](0, 100)
	r9 = String(r4)
	r1["phone"] = r9["slice"](0, 40)
	r9 = String(r5)
	r8 = r9["slice"]
	r1["city"] = r8(0, 80)
	r8 = "setupDone"
	r1[r8] = !(!Boolean([]))
	r7 = Scope[1][8]["setPassword"]
	r9 = String(r6)
	ACCU = r7(r9)
	r7 = Scope[1][8]["save"]
	ACCU = r7()
	r10 = new {"ownerName": null, "networkName": null, "phone": null, "city": null}
	r10["ownerName"] = r1["ownerName"]
	r10["networkName"] = r1["networkName"]
	r10["phone"] = r1["phone"]
	r10["city"] = r1["city"]
	r8 = Scope[1][16]["reportSetup"](r10)
	ACCU = r8["catch"](func_unknown_0x10000003a)
	r9 = new {"ok": null}
	r9["ok"] = !(!Boolean([]))
	ACCU = func_ok_0x100000036(a1, r9)
	return undefined
}
function func_unknown_0x10000003a()
{
	return undefined
}
function func_unknown_0x100000039(a0, a1)
{
	r2 = Scope[1][8]["get"]
	r2 = r2()
	r1 = r2["settings"]
	r4 = new {"needsSetup": null}
	r4["needsSetup"] = !Boolean(r1["setupDone"])
	ACCU = func_ok_0x100000036(a1, r4)
	return undefined
}
function func_unknown_0x100000038(a0, a1)
{
	if (!a0["body"])
	{
	}
	r3 = {}
	r1 = r3["user"]
	r2 = r3["pass"]
	r3 = Scope[1][9]["login"]
	r5 = a0
	r6 = a1
	r7 = r1
	r8 = r2
	if (r3(r5, r6, r7, r8))
	{
		return func_ok_0x100000036(a1)
	}
	r6 = "اسم المستخدم أو كلمة المرور غير صحيحة"
	r4 = a1
	return func_fail_0x100000037(r4, 401, r6)
}
function func_fail_0x100000037(a0, a1, a2)
{
	r1 = a0["status"]
	r1 = r1(a1)
	r0 = r1["json"]
	r2 = new {"ok": null, "message": null}
	r2["ok"] = !Boolean([])
	r2["message"] = a2
	return r0(r2)
}
function func_ok_0x100000036(a0, a1)
{
	r0 = a0["json"]
	r4 = new {"ok": null}
	r4["ok"] = !(!Boolean([]))
	r1 = a0
	if (!a1)
	{
	}
	r5 = {}
	r2 = Object["assign"](r4, r5)
	return r0(r2)
}
function func_filename_0x100000035(a0, a1, a2)
{
	r3 = a1["originalname"]
	r2 = r3["replace"]
	r4 = \[^\\\\w.\\\\-\\\\u0600-\\\\u06FF]+\
	r1 = r2(r4, "_")
	r4 = Date["now"]
	r4 = r4()
	r4 = (r4 + "_")
	r4 = (r4 + r1)
	ACCU = a2(null, r4)
	return undefined
}
function func_unknown_0x100000034(a0, a1)
{
	r0 = func_0x4405_0x100000001
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(297)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(260)
			r4 = (r4 * ((-parseInt(r6)) \ 2))
			r6 = r0(440)
			r4 = (r4 + ((-parseInt(r6)) \ 3))
			r6 = r0(491)
			r5 = (parseInt(r6) \ 4)
			r7 = r0(497)
			r4 = (r4 + (r5 * (parseInt(r7) \ 5)))
			r6 = r0(566)
			r5 = (parseInt(r6) \ 6)
			r7 = r0(522)
			r4 = (r4 + (r5 * (parseInt(r7) \ 7)))
			r6 = r0(459)
			r4 = (r4 + (parseInt(r6) \ 8))
			r6 = r0(352)
			r4 = (r4 + ((-parseInt(r6)) \ 9))
			r6 = r0(344)
			r5 = ((-parseInt(r6)) \ 10)
			r7 = r0(312)
			r2 = (r4 + (r5 * ((-parseInt(r7)) \ 11)))
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
		ACCU = Scope[92]
		r4 = Scope[1]
		r7 = r1["shift"]()
		ACCU = r1["push"](r7)
	}
	return undefined
}
function func_0x3cec_0x100000033()
{
	r0 = Scope[1]
	Scope[93][2] = new ["BMDPBNHqB3j0", "l3nYDI91CgXVywrZlYi7cIaGicaGicaGicaGigfJy2vZC19SB2CGB2zMoWOGicaGicaGicaGicbHzgrFAgvHzgvYienHy2HLlunVBNrYB2WGiM1HEc1Hz2u9mZyWmci7cIaGicaGicaGFqOGicaGicaGigXVy2f0Aw9Uic8GEWOGicaGicaGicaGicbWCM94Ev9WyxnZigH0Dha6lY8XmJCUmc4WlJe6", "l3H0CMvHBs9HzgqTyMf0y2G", "2kpyTTMbinMb2kRySDIPinIY2yxzHTMk2kKG2yJyP9IT2k/yQsdyUDMe2yKG2kFzHnIJ2ylzHa", "2ytyPYdyQTMi2kZyRYdzGTMg2yJyP9IQinMe2k3zHnMr2yFyPW", "BwvTB3j5vxnHz2u", "l3nLDhrPBMDZl3bHC3n3B3jK", "CNvUBMLUz0nVDw50", "CgfYyw1Z", "y2L0Eq", "2kFyRTIQ2leG2ylzHTIN2kKG2lxyRDMk2k3yQq", "BMv3swq", "AxnbBMrYB2LK", "y2XLyxjmB2C", "yxv0B1n0yxj0", "C2XPy2u", "l3DVCMXKy3vWl3jLzNjLC2GTBMv3CW", "AgXZrgvSzxrLvgHYzxnOB2XK", "y29UzG", "AxrLBxm", "2kRzHsdyP9IZ2kRySDIV2kFyRYdyP9Me2yByS9IU2kKG2kFzHnIN2k3yQTMk2kFyT9Mk2kKG4OcuinMk2y/yUDIN2k8G2kRyTnI62yRzHcdyP9Me2yByUnIN2yuG2kFzHnII2yy", "l3vWBg9Hza", "zMLSDgvY", "Aw5JBhvKzxm", "Dg90ywXcExrLC091Da", "l2rLDMLJzxmVzgLHz25VC2u", "vKXdlZmUmc4YmcbmAwjwtemVmY4WlJiW", "y2HHBKLK", "Dw5RBM93BG", "2kRyUDIW2zhySsdyQTI12yhzITIXinIN2ytyS9IS2yq", "l2nOyw5UzwXZ", "DMLKzw9ezxzPy2u", "2yxyS9IN2leG2kFzHnMf2ytzGsdzHDI32ytzInIO", "lMXVzYi", "zNbZ", "y292zxi", "l3nVDxjJzxmVoMLK", "DgLJAW", "Dw5KzxjdAgfUBMvSCW", "2kRzHsdyQTI32kJzITMcinIN2ytyQTIT2k/zITIRiokaLcdzITMp2lNyP9IVinIQ2ltyUTMk2yqG2kFzHnMg2lJyP9MfinIN2ytyOTMg", "2kpyTTMbinIX2kFyQnI32kFzIYdzInIN2k3yR9IN2ySG2lNzHnMjinIN2ytyO9Mc2yqG2yxyUsdyQTIT2k/zITIVinIN2ytyRnMi2k/yQq", "oJPMzMzMoJeYnY4WlJaUmq", "ndGWCa", "EhrF", "inMk2lhyR9MrinMe2ypzHIdzHDMginIO2lhzHTIN2yxyRcdyOTIU2leG2lRzITIXig5NAw54inIN2ytyQTIN2kJyUsdzHnIJ2yxyP9MginMe2kFzITMblG", "Bg9NB1nPEMvqy3q", "DgLJA2vY", "uK9pva", "AgXZvgLTzq", "y29WEuzPBgvtEw5J", "D29YBgrdDxbbCgLtDgfKAxvTCW", "C2v0ugfZC3DVCMq", "l2XPy2vUC2uVywn0AxzHDgu", "Dgv4Dc9WBgfPBJSGy2HHCNnLDd11DgyToa", "l21Ol3jLC29SDMu", "C2L0zu5HBwu", "l2rLDMLJzxmVB3b0Aw9UCW", "DxbSB2fKCW", "2ypzHnMf2kKG2kFzHnMf2lhzInIXinIN2ytyRDIN2ytzITIPinI62yRySsdyTDIT2yRyRDIP", "qZOVBMDPBNG", "DgHYzwfKCW", "yML0CMf0zq", "zgLHz25VC2u", "Aw1WB3j0rNjVBvvYBa", "2yRzInIS2k8G2ylzHTIN2kKG2kpyRTIX2yKG2kJzHTMb2lmG2kFzHnMf2lNySDMr2ye", "mtbTyG", "DMLLD2vYq291BNq", "2kFzHnIN2lpzHsdzInIN2ytySDIN2kJyTYdzHDI32ytzInIO2kFzHG", "kI8Q", "AgXZ", "BMv3C0nHy2HLtwLUDxrLCW", "yNL0zxnpDxrnyxa", "C2v0DgLUz3m", "C2LUz2XL", "Cgf0Aa", "C291CMnLCW", "BwLU", "AxnsDw5UAw5N", "l2jHy2T1Cc9Yzxn0B3jL", "DhLWzq", "CMvZDgfYDa", "zgf0yq", "C2nOzwr1BgvZ", "mJGXmZi1m3fTDeXUDa", "2yByTsdyP9Me2kxyUDMe2kFzHIdzHDI32ytzInIO", "l2nOyw5UzwXZlZPPzc9Yzxn0yxj0", "l2XVz2LU", "DxnL", "lMfTywfUlwjHAW", "2kFyS9MfinIN2ytzHDIZ2kRyRTIV2yuG2kpzIcdzG9Me2yxyQsdyP9Me2yxySDMi2leG2lRzITIXinI12k3zITIT2kK", "Bg9NCW", "CgDYzxa", "y29WEq", "2kFyS9MfinIN2ytzGTMg2kFyQsdzHDI32ytzInIO", "AgvHzgvYCW", "ChvZAa", "BM9qCM94EuzHBgXIywnR", "C3bSAxq", "z2v0twvZC2fNzxm", "CgXHEwvYqMfJA0j1zMzLCKXLBMD0Aa", "2yRyRnIOinIN2k7yQTMk2kFySsdyRnMh2kFySIdyP9Me2yhzITIV2yRzIa", "ANnVBG", "mJa1mZqXnNHUAMriAa", "AwrSzvn0B3bfBMfIBgvK", "zMzTCgvNugf0Aa", "2ytyPYdyQTMi2kZyRYdzGTMg2yJyP9IQinMf2k3yR9IV2kK", "yMLUzfWOxcLCCYT0B1XZkZbClJbClJbClJa6", "oWOGicaGicaGicaGicbWCM94Ev9ODhrWx3zLCNnPB24Gms4XoWOGicaGicaGicaGicbWCM94Ev9ZzxrFAgvHzgvYienVBM5Ly3rPB24GiIi7icaGicaGicmGA2vLCc1HBgL2zsdzHTIT2yGGtM9KzsdzHnIQ2ylzHnMk2yqG2ypzHnMb2kKG2kFzHnIN2kRyTDIN2ytyP9IQcIaGicaGicaGicaGihbYB3H5x3nLDf9OzwfKzxiGsg9ZDcaKAg9ZDdSkicaGicaGicaGicaGChjVEhLFC2v0x2HLywrLCIbylvjLywWTsvaGjhjLBw90zv9HzgrYoWOGicaGicaGicaGicbWCM94Ev9YzwfKx3rPBwvVDxqGmZaWoWOGicaGicaGicaGicbJBgLLBNrFBwf4x2jVzhLFC2L6zsaYmdq4BtSkicaGicaGicb9cIaGicb9cN0k", "CgLWzq", "y29Uy2f0", "Axb0DG", "CMvZDgfYDejHy2TVzMznCW", "yMLUyxj5", "C2L6zq", "l3b1yMXPyY93B3jSzgn1Cc9UzxDZ", "2ytzHsdzITMp2lhzGDI5inMf2ytzGq", "B25wAwv3zxjizwfYDgjLyxq", "zgLYzwn0", "l3b1yMXPyY9Zzxr0Aw5NCW", "z2v0q29UDgfJDa", "iokaLcdyP9Mg2lpyRIbUz2LUEc9Uz2LUEc5JB25MinMk2k/zInMk2kFzIY4", "zxHPC3rZu3LUyW", "Dw5KzxjqAg9Uzq", "l21HDgnOzxm", "Chv0", "BM93", "ktOG", "yxr0ywnOBwvUDdSGzMLSzw5HBwu9iG", "DMfYAwfUDhm", "Dw5SAw5Ru3LUyW", "AgfZ", "inMf2k3yRnMi2liG2lNzHnMjinMf2lpyQTMi2yKG2yByUnIN2yuG2yJzITMg2k/zInIYinMg2yhyS9MhicJyUTIN2ytyQnIN2ySGshLWzxiTvIdyO9MiifDttcdyO9MiinMg2lFyP9McinMf2yByP9Mb2laG2k/zITMg2kFzHDMk2ypzIIdzHDIT2kZzInIYinMe2ybxAw5oqvqPiokaLcdzHnMk2lmG2kRyUDIN2lhyTTIN2ySG2kJzITMginI52yxzHnMk2kFyQIbUz2LUEnIminMi2kxzHTMh2kFyOsdyP9Me2lNzHDMe2yRyP9IQinMe2yyG2yRyRDMe2zhzHY4G2kFzHnIT2yqG2kFzHnIJ2lpySDI5oIdyUTMk2zhySsdcQ9Mf2yBzGDIWinIN2ytyUDIX2lBcUYdzHDMginIN2ytyPDI52k/yP9IV2kFyQIdyPDMe2yKG2lhzGTMfinII2k7ySsaO2yxyQ9MeidGWmIKUinMe2ytyQTIJ2ypzITIVinI02lRzKDMeinIO2lxzHnIN2k3zITIPinIN2ytzHDIV2yRyStOGBMv0C2GGAw50zxjMywnLigLWDJqGC2HVDYbLEgnSDwrLzhbVCNrYyw5NzsbWCM90B2nVBd10y3a", "2lxzITI62kKG2kFzHnMi2ylyQIdzITIS2kGG2kpzHIdyQTMd2yJzHIbisdPntq", "C2f2zq", "mtzwtfLrufi", "Bwf4", "CgXHy2vTzw50", "l2XVz3mVoMLKl2rVD25SB2fK", "ihWG2yJyS9Mk2lC6ia", "AxnbDxrOzwq", "nZiZmdKWuLbvt3Dx", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcaOmtaG2kVzInIN2yBzJsK", "ywXSB2m", "y2f0zwDVCNK", "2kFzHnIL2lNzHnIN2yyG2lRzITIXinMf2yJyRnMi2k8", "C3rHCNq", "BwfZDgvYlM0ZDtG", "l3vWBg9HzhmV", "2kFzHnMf2lxyR9IXinI62yRySsdzHDMi2kZzInIV", "2kRyUDIW2zhySsdzG9IQ2kFyQnIPinIN2ytzHTIZ2k7yQsdyP9Me2yxyRDMe2yRyQtOG", "ywrK", "zxHWB3j0CW", "z2v0tMv3CW", "BgL2zq", "C3bVCNrZtMv3C1nVDxjJzxm", "Ag9TzuzSywC", "Bwf4uMvZDgfYDhm", "zMv0y2HdAgfUBMvSCW", "q29UDgvUDc1uExbL", "l2XVz3mVoMLKl2nSzwfY", "Bg9Hzgf2zW", "l21Ol2zLDgnO", "C2v0sgvHzgvY", "BMfTzq", "Ahr0Chm", "mtu0Bw5Oze1i", "y2HHBM5LBa", "BwfW", "CMvJB21Tzw5Kq2fWDhvYzvnLDhrPBMDZ", "l2fKCY86Awq", "l21LDhjPy3m", "Cg9YDa", "BxvSDgKTBtn1oa", "q29UDgvUDc1eAxnWB3nPDgLVBG", "zxHPDa", "yxv0B1jLC3rHCNrdCMfZAgvK", "C3rHCNrZv2L0Aa", "Edi2nfbYzxnLDa", "Bwf0y2HLCW", "l2LWDhyVAw1WB3j0lwzPBgu", "mZyWCa", "D29YBgrdDxbbCgLhyw1LCW", "l2LWDhyVoMLK", "C3rVChbLza", "l3nLDhrPBMDZl3jLz2vUzxjHDguTBMDPBNG", "yxnZAwDU", "CMvHzeXVzW", "AgXZtgLZDfnPEMu", "2yxyUDIX2zhzGsdyP9Me2ylzHTIN2kKG2yxyT9Me2yJyQa", "y2HHBM5LBeLK", "zw5K", "C3jJ", "l3nVDxjJzxm", "l3H0CMvHBs9MzxrJAa", "C291CMnLswq", "D3jPDgvgAwXLu3LUyW", "zxjYB3iUBg9N", "CMvZB2X2zujHDgnO", "z2v0", "C3rHDhvZq29Kzq", "zxjYB3i", "AwrZ", "DxjS", "Dg9mB3DLCKnHC2u", "mtaWndG", "y3b1CW", "BgLZDerLDMLJzu9WDgLVBNm", "DhjPBq", "B3DUzxjoyw1L", "mJqYnJCWD2jowLzK", "y3b1u2f2zxjezwzHDwX0", "2yRySDIS2yKG2kRyUDIO2kByQsdzG9MeinIN2ytyRDMc2yJzHa", "C2v0DxbeB25L", "q1nw", "l2fKCW", "l2rLDMLJzxmVCMvJB21Tzw5K", "zgvZDhjVEq", "C291CMnLrMfPBfn0B3bnAw51DgvZ", "zMXVB3i", "CMvTB3rLqwrKCMvZCW", "nZiWCa", "BMv0D29YA05HBwu", "C3rVCefSBa", "C3bSAwnL", "l3vWzgf0zs9ZDgf0Dxm", "CMvHzezPBgvtEw5J", "2kFzHnIX2kFyQnI3inMf2lFzHnMi2kG", "Bg9NBW", "Dgv4Da", "ywX3yxLZt24", "2yBzInI5inIN2ytzHDI12k/ySsdyUTMk2leG2lxyRDMk2k0", "l3H0CMvHBs9MzxrJAc1WCM94Eq", "Bg9NAw4", "CxvHBgL0Eq", "2yRzInIS2k8G2yxyTDIV2leG2klyRTIXinIO2yBzGDIZinIN2ytyP9IZ2yu", "l05i", "...<truncated>>", "BMDPBNG", "BgLZDefSBg93zwq", "l3nJAgvKDwXLCY86Awq", "zgLZA1n0B3jHz2u", "l29UBgLUzs1JAgfUBMvSCW", "C29Tzq", "AwrSzvn0B3bnAw51DgvZ", "z3jVDxa", "l3nLDhrPBMDZ", "CMvZDg9YzujHy2T1Ca", "zgf5CW", "BMv4De9Wzw5nAw51DgvZ", "zNjVBq", "ChjVEhK", "C3j2", "Cgf0y2G", "BgLZDerZAg93rgv2AwnLCW", "AxnbCNjHEq", "DxnI", "Dxb0Aw1L", "B3rOzxi", "BMDPBNGUzxHL", "icJySDMf2liG2yJzITMg2k/zInIYia", "y3jLyxrLuMvHzfn0CMvHBq", "Cg9ZDa", "zgvSzxrL", "oJOX", "2ypzHnMf2kKG2kFzHnMf2lhzInIXinIN2ytyRnIV2yRyR9IPinMc2lxzITIX2kKGkdyG2kpyRDIX2yeG2lNzHnMjinIN2ytyO9Mc2yqP", "AM9PBG", "y2HLy2TqyxnZD29Yza", "2lhzGTMfinIN2ytzHDMg2yhyScdzITIS2kGG2kpzHIdzITMd2yJzHIdyQnMk2yyGmsdzIca2ntuZnq", "zMLSzq", "y3jLyxrLqMfJA3vW", "CgHVBMu", "C2XVDhm", "BgLUAW", "l2LWDhyVzgvSzxrLlwjHDgnO", "CgXHEwvYtgL2zvn5BMneDxjHDgLVBG", "yMXVy2TLzfn0B3bnAw51DgvZ", "2kFzHnIU2kFyR9MfinIX2k/zKsdyQnIT2kFzHnIPia", "C3rHDhvZ", "ywn0AxzHDgu", "BgvUz3rO", "DgvZDa", "CMvHBfvYBa", "yxv0AgvK", "AxnjBNrLz2vY", "l2XVz291Da", "BMDPBNGVBMDPBNGUy29UzG", "nda0yMXzAuzr", "DgLJA2vYrw5HyMXLza", "C3rHCNr1Cff1zxvLrgvSyxLnCW", "zxHLyW", "AgXZvMLLD2vYq291BNq", "C3bVCNrZvgLJA2vYrw5HyMXLza", "BMDPBNHqyxrO", "l3nYDI9OBhmViJSkicaGicaGicaGicaGywnJzxnZx2XVzYbVzMy7icaGicaGicaGicaGicaGicaGicaGicaJidiWmcSG2yxyTnIN2yFyRYddLYdzHDMc2kFyT9I5inMd2kVzITIX2kKGpsdyS9IS2yqG2lByRTMfinIO2ytyPYdzGDIN2kByR9IPcIaGicaGicaGicaGigfKzf9OzwfKzxiGqwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LUicO7cIaGicaGicaGicaGigfKzf9OzwfKzxiGq2fJAguTq29UDhjVBcaIChvIBgLJlcbTyxGTywDLptmXntm2mdaWlcbPBw11DgfIBguIoWOGicaGicaGih0kicaGicaGicbSB2nHDgLVBIaVDxbSB2fKCY8GEWOGicaGicaGicaGicbHBgLHCYaI", "B3jPz2LUywXUyw1L", "C29JA2v0", "Bg9NB0vUywjSzwq", "l2nOyw5UzwXZlZPPza", "DgLTzw91Da", "CMvZB2X2zwq", "Bg9NB1bVC2L0Aw9U", "2yRyRnIOinIN2k7yQTMk2kFySsdzGTMg2kFyQsdzHDMginMf2ypyQTIO2kKGsvbuvG", "zMLSzw5HBwu", "l3nJAgvKDwXLCW", "yM9KEq", "l3b1yMXPyY9OzwfYDgjLyxq", "DxrMoa", "AxnxAw5KB3DZ", "Aw5KzxGUBtn1oa", "l21Ol3jLC29SDMuTB25L", "y29Uy3vYCMvUy3K", "C2L0zu5HBwvmyxrPBG", "zMLUza", "2kFzHnIS2k/zInMe2kKG2lRzITIXinMf2yJyRnMi2k/yQq", "y2fWtgv2zwXuB1bSyxLLCLnPEMu", "l3vWzgf0zs9HChbSEq", "2kFzHnMf2yBzGDIWia", "l3n5C3rLBs9ZAhv0zg93BG", "l3H0CMvHBs9MzxrJAc1Tm3u", "CgXHEwvYtwf4qNvMzMvYtgvUz3rO", "l2LWDhy", "BwvZC2fNzq", "CgfYC2u", "ntD4AMHWq24", "CMvZB2X2zunOyw5UzwW", "zMLUzeLUzgv4", "Ahr0Ca", "zgLYBMfTzq", "2kRzHsdyQTIT2k/zITIRinIN2ytzHDMe2yeG2ytzG9MginIQ2lNySnMr2leG2kxyUDIN2k/yQsdyQTIT2yxzITMeie5NAw54inIQ2ytzGTIN2kBzITIN2ySG4OcuinIJ2lNyRYdyQTI02lRzITMe2yCG2yRyR9Mi2yRyP9MllG", "2kFzHnMc2yByP9IPinI62yRySsdzHDMi2kZzInIV2kK", "C3rVCa", "whrYzwfToIa", "ChvYz2vdAgfUBMvS", "y2HPBgrFChjVy2vZCW", "CxvLCNK", "Aw1Hz2u", "yxbWBgLJyxrPB24VEMLW", "Aw1WB3j0rNjVBvrLEhq", "mJK5mtu2A1jWt2Pu", "zMv0y2HwAwfqCM94Eq", "2kRzHsdyPDI52kFyR9IPinIQ2k3zHDMk2yqGtMDPBNGG2kJzHTIS2kFyRsdyUDMe2yKG2kFzHnMf2yBzGDIWia", "2yxyQnIN2ltyStOG", "A2v5CW", "mJqWCa", "2kFyS9MfinIN2ytzHDI12k/ySsdzHDI32ytzInIO", "l2jHy2T1Cc9KB3DUBg9Hza", "uM91DgvY", "zw5HyMXLza", "2yRyRnIOinIX2kJyTYdyP9Me2ylzHTIN2kKG2kJzHDI12k/ySsdzHDMi2kZzInIV", "l2fWAs9Tzq", "D29YBgrdDxbuAgvTzq", "BwTKAxjtEw5J", "2yxyUDIX2zhzGsdyP9Me2ylzHTIN2kK6inIJ2k3ySDMbinIL2yByRnMe2yRySTMk2kKG2yJyO9IX2ylyP9MfinMb2ylyTW", "AwDUB3jL", "2yRzInIS2k8G2ylzHTIN2kKG2kpyRTIX2yKG2kJzHTMb2lmG2kFzHnIN2lpzHq", "mti3lJaUmc4X", "CMfUzg9T", "CNnZ", "CMvWBgfJzq", "DMfS", "ywrZ", "2ytzHsdzITIQ2yuG2kFyRTIQ2yRyP9IXinMf2ytzGq", "C3rHDhvZt2y", "zM9YrwfJAa", "l2XVz3mVoMLK", "BwfUDwfSu3rVChbLza", "qZOVBMDPBNGVBMDPBNGUzxHL", "CM91BMq", "BMDPBNGUy29UzG", "zMv0y2HgCM9TttnvvxjS", "mtKWENvUy1fN", "DxnLCKfNzw50", "y2HHBM5LBhm", "l3b1yMXPyY9JAgfUBMvSlwHLywX0Aa", "...<truncated>>", "C29YDa", "iYdyO9Mf2kFzHIdzHnIN2yRzGsdIGjqG2yxzJ9Mi2ytzKDIVinIQ2ytzGTIN2kBzITIN2ySG2yxzHIdzHnMi2k3yQsdyP9Me2kRyRDMd2yuGknMf2y/zH9Mk2zhyOYdzHnMamJaWkYdzHDI02kFzH9IVkqOJinIZ2kZzHnMrinIJ2k7yT9IN2keG2kJzHDIZ2kFySsdzHDI32ytzGIdyQ9IN2kJyQJOG2yBzGTIX2kpzHYdzHDMginMd2yJyRYboB2rLinMe2kRyTnIU2yRyTsdzGDI02yqG2kFzHnIX2kJyTYdyQnIN2ytzHDMg2yhySaOJicJzHDIR2yqG2k3yUnIXinMi2yRzHTIV2yJySI9iExbLCI1winMe2yByT9IN2yiG2yxzHTIN2yhyScKG2kJyR9MeinIQ2lhzGYdyP9Me2yxyS9IQ2k7yR9MfinIJ2yxyP9MfinMb2ltzHcdyTDIN2yxyQI4kzxjYB3jFBg9Nici", "z29Wu2vJB25KCW", "nZu0mta5mwfWCKPHEa", "Dg9tDhjPBMC", "l2XPy2vUC2u", "l2HSCY8", "D29YBgrdDxbgDwXSugfNzq"]
	Scope[1][57] = func_0x3cec_0x100000032
	return Scope[1][57]()
}
function func_0x3cec_0x100000032()
{
	return Scope[93][2]
}
function func_addOneXtream_0x100000031(a0, a1)
{
	r11 = <closure>
	r12 = <this>
	r5 = ACCU
	r11 = Scope[1]
	try
	{
		r0 = a0
		r1 = a1["name"]
		r2 = a1["url"]
		r3 = a1["logo"]
		r4 = a1["group"]
	}
	catch
	{
		r12 = ACCU
		ACCU = null
		ACCU = Scope[94]
		r12 = Scope[1]
		r13 = r5
		return Scope[94][2]
	}
	r11 = Scope[1]
	ACCU = null
	r12 = Scope[95]
	try
	{
		Scope[95][2] = func_0x4405_0x100000001
		r13 = "Xtream: "
		Scope[95][3] = (r13 + r1)
		while (true)
		{
			r14 = r0["sources"]
			r13 = r14["some"]
			if (!r13(func_unknown_0x10000002d)) break
			Scope[95][3] = (Scope[95][3] + " ")
		}
		r13 = new {"id": null, "name": null, "type": null, "url": null, "passthrough": null}
		r13["id"] = Scope[1][8]["newId"]("src")
		r13["name"] = Scope[95][3]
		r13["type"] = "hls"
		r13["url"] = r2
		r13["passthrough"] = !(!Boolean([]))
		r6 = r13
		r14 = r0["sources"]
		r13 = r14["push"]
		ACCU = r13(r6)
		ACCU = r3
		if (!r3)
		{
			ACCU = ""
		}
		r7 = ACCU
		if (ACCU)
		{
			r14 = \^https?:\\\\/\\\\/\
			r13 = r14["test"]
			if (r13(r7))
			{
				r14 = Scope[1][19]["downloadCover"](r7)
				r13 = r5
				r13 = await r14
				r14 = _GeneratorGetResumeMode(r5)
				if (!r14 === 0)
				{
					ACCU = r13
				}
				r10 = r13
				if (r10)
				{
					r7 = r10
					ACCU = r7
				}
			}
		}
		Scope[95][4] = r1
		while (true)
		{
			r14 = r0["channels"]
			if (!r14["some"](func_unknown_0x10000002e)) break
			Scope[95][4] = (Scope[95][4] + " ")
		}
		r13 = "xt_"
		r15 = Date["now"]
		r15 = r15()
		r14 = r15["toString"]
		r13 = (r13 + r14(36))
		r16 = Math["random"]
		r16 = r16()
		r15 = r16["toString"]
		r15 = r15(36)
		Scope[95][5] = (r13 + r15["slice"](2, 5))
		while (true)
		{
			r14 = r0["channels"]
			r13 = r14["some"]
			if (!r13(func_unknown_0x10000002f)) break
			Scope[95][5] = (Scope[95][5] + "_")
		}
		r14 = r0["channels"]
		r8 = r14["reduce"](func_unknown_0x100000030, 0)
		r13 = new {"id": null, "chanId": null, "name": null, "sourceId": null, "category": null, "sort": null, "cover": null, "logoOverlay": "", "quality": "copy", "fps": <null, "autoStart": null, "enabled": null}
		r14 = Scope[1][8]["newId"]
		r13["id"] = r14("ch")
		r13["chanId"] = Scope[95][5]
		r13["name"] = Scope[95][4]
		r13["sourceId"] = r6["id"]
		ACCU = r4
		if (!r4)
		{
			ACCU = ""
		}
		r13["category"] = ACCU
		r13["sort"] = (r8 + 1)
		r13["cover"] = r7
		r13["autoStart"] = !Boolean([])
		r13["enabled"] = !(!Boolean([]))
		r9 = r13
		r14 = r0["channels"]
		r13 = r14["push"]
		ACCU = r13(r9)
		r13 = new {"source": null, "channel": null}
		r13["source"] = r6
		r13["channel"] = r9
		r14 = r13
		r13 = r5
		ACCU = r14
		return r14
	}
	catch {}
	r13 = ACCU
	ACCU = null
	ACCU = Scope[96]
	r13 = Scope[95]
	r14 = r5
	return Scope[96][2]
}
function func_unknown_0x100000030(a0, a1)
{
	r0 = Math["max"]
	r4 = a1["sort"]
	ACCU = Number(r4)
	r2 = a0
	if (!Number(r4))
	{
		ACCU = 0
	}
	r3 = ACCU
	return r0(r2, r3)
}
function func_unknown_0x10000002f(a0)
{
	r0 = a0["chanId"]
	return r0 === Scope[95][5]
}
function func_unknown_0x10000002e(a0)
{
	r0 = a0["name"]
	return r0 === Scope[95][4]
}
function func_unknown_0x10000002d(a0)
{
	return a0["name"] === Scope[95][3]
}
function func_nginxBinding_0x10000002c()
{
	if (Scope[1][45])
		|| (!Scope[1][22]["isWindows"])
	{
		return null
	}
	r1 = Date["now"]()
	r1 = (r1 - Scope[1][50]["at"])
	if (r1 >= 30000)
	{
		ACCU = func_refreshNginxBinding_0x10000002b()
	}
	return Scope[1][50]
}
function func_refreshNginxBinding_0x10000002b()
{
	r0 = Scope[1]
	Scope[97][2] = func_0x4405_0x100000001
	if (Scope[1][51])
		|| (Scope[1][45])
		|| (!Scope[1][22]["isWindows"])
	{
		return undefined
	}
	r1 = Scope[1][8]["get"]
	r1 = r1()
	r1 = r1["settings"]
	ACCU = r1["nginxPort"]
	if (!r1["nginxPort"])
	{
		ACCU = 80
	}
	Scope[97][3] = ACCU
	r1 = Scope[1][6]["existsSync"]
	r3 = Scope[1][5]["join"]
	r5 = func_nginxDirPath_0x100000024()
	r3 = r3(r5, "nginx.exe")
	if (!r1(r3))
	{
		r1 = new {"at": null, "checked": null, "listening": <null, "reason": <null, "port": null}
		r2 = Date["now"]
		r1["at"] = r2()
		r1["checked"] = !(!Boolean([]))
		r1["port"] = Scope[97][3]
		ACCU = Scope[1][50]
		Scope[1][50] = r1
		return undefined
	}
	r1 = !(!Boolean([]))
	ACCU = Scope[1][51]
	Scope[1][51] = r1
	r3 = "http"
	r2 = Scope[1][2](r3)
	r3 = new {"host": "127.0.0.1", "port": null, "path": null, "timeout": 3000}
	r3["port"] = Scope[97][3]
	r3["path"] = "/api/me"
	Scope[97][4] = r2["get"](r3, func_unknown_0x100000028)
	r3 = "timeout"
	ACCU = Scope[97][4]["on"](r3, func_unknown_0x100000029)
	ACCU = Scope[97][4]["on"]("error", func_unknown_0x10000002a)
	return undefined
}
function func_unknown_0x10000002a()
{
	r1 = !Boolean([])
	ACCU = Scope[1][51]
	Scope[1][51] = r1
	r1 = new {"at": null, "checked": null, "listening": null, "port": null, "reason": null}
	r2 = Date["now"]
	r1["at"] = r2()
	r1["checked"] = !(!Boolean([]))
	r1["listening"] = !Boolean([])
	r1["port"] = Scope[97][3]
	r1["reason"] = func_readNginxBindError_0x100000025(Scope[97][3])
	ACCU = Scope[1][50]
	Scope[1][50] = r1
	return undefined
}
function func_unknown_0x100000029()
{
	r0 = Scope[97][4]["destroy"]
	return r0()
}
function func_unknown_0x100000028(a0)
{
	r0 = Scope[97]
	Scope[98][2] = func_0x4405_0x100000001
	Scope[98][3] = ""
	r3 = "data"
	ACCU = a0["on"](r3, func_unknown_0x100000026)
	r3 = "end"
	ACCU = a0["on"](r3, func_unknown_0x100000027)
	return undefined
}
function func_unknown_0x100000027()
{
	r2 = !Boolean([])
	ACCU = Scope[1][51]
	Scope[1][51] = r2
	ACCU = !Boolean([])
	r1 = !Boolean([])
	r2 = Scope[98]
	try
	{
		r3 = "authed"
		r4 = JSON["parse"]
		ACCU = r3 in r4(Scope[98][3])
		r1 = r3 in r4(Scope[98][3])
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[99]
		r3 = Scope[98]
	}
	r2 = new {"at": null, "checked": null, "listening": null, "port": null, "reason": null}
	r3 = Date["now"]
	r2["at"] = r3()
	r2["checked"] = !(!Boolean([]))
	r2["listening"] = r1
	r2["port"] = Scope[97][3]
	ACCU = r1
	if (r1)
	{
		ACCU = null
	}
	else
	{
		ACCU = (("\\x627\\x644\\x645\\x646\\x641\\x630 " + Scope[97][3]) + " يردّ لكن من برنامج آخر غير nginx التابع لأمان لايف.")
	}
	r2["reason"] = ACCU
	ACCU = Scope[1][50]
	Scope[1][50] = r2
	return undefined
}
function func_unknown_0x100000026(a0)
{
	if (Scope[98][3]["length"] < 4096)
	{
		ACCU = Scope[98][3]
		Scope[98][3] = (Scope[98][3] + a0)
	}
	return undefined
}
function func_readNginxBindError_0x100000025(a0)
{
	ACCU = func_0x4405_0x100000001
	r0 = func_0x4405_0x100000001
	r7 = Scope[1]
	try
	{
		r8 = Scope[1][5]["join"]
		r10 = func_nginxDirPath_0x100000024()
		r11 = "logs"
		r12 = "error.log"
		r1 = r8(r10, r11, r12)
		if (!Scope[1][6]["existsSync"](r1))
		{
			return null
		}
		r10 = Scope[1][6]["readFileSync"]
		r13 = "utf8"
		r10 = r10(r1, r13)
		r9 = r10["split"]
		r11 = \\\\\r?\\\\n\
		r9 = r9(r11)
		r8 = r9["slice"]
		r2 = r8(-100)
		r9 = "bind\\(\\)\\s+to\\s+0\\.0\\.0\\.0:"
		r9 = (r9 + a0)
		r9 = (r9 + "\\\\s+failed\\\\s+\\\\((\\\\d+):\\\\s*(.+?)\\\\)")
		ACCU = RegExp
		r3 = RegExp(r9)
		ACCU = (r2["length"] - 1)
		r4 = (r2["length"] - 1)
		while (true)
		{
			if (!r4 >= 0) break
			r8 = r3[r0(263)]
			r10 = r2[r4]
			r5 = r8(r10)
			if (!r8(r10))
			{
				continue
			}
			r6 = r5[1]
			if (r6 === "10013")
			{
				return (("\\x627\\x644\\x645\\x646\\x641\\x630 " + a0) + r0(488))
			}
			if (r6 === r0(561))
			{
				r8 = r0(290)
				r8 = (r8 + a0)
				return (r8 + " \\x645\\x633\\x62a\\x62e\\x62f\\x64e\\x645 \\x641\\x639\\x644\\x627\\x64b \\x645\\x646 \\x628\\x631\\x646\\x627\\x645\\x62c \\x622\\x62e\\x631 \\x63a\\x64a\\x631 \\x62a\\x627\\x628\\x639 \\x644\\x623\\x645\\x627\\x646 \\x644\\x627\\x64a\\x641 \\x639\\x644\\x649 \\x647\\x630\\x627 \\x627\\x644\\x62c\\x647\\x627\\x632. \\x623\\x63a\\x644\\x642 \\x630\\x644\\x643 \\x627\\x644\\x628\\x631\\x646\\x627\\x645\\x62c \\x623\\x648 \\x63a\\x64a\\x651\\x631 \\xab\\x645\\x646\\x641\\x630 \\x627\\x644\\x639\\x631\\x636\\xbb \\x645\\x646 \\x627\\x644\\x625\\x639\\x62f\\x627\\x62f\\x627\\x62a.")
			}
			r8 = (("\\x641\\x634\\x644 nginx \\x641\\x64a \\x641\\x62a\\x62d \\x627\\x644\\x645\\x646\\x641\\x630 " + a0) + r0(233))
			r8 = (r8 + r6)
			r8 = (r8 + ": ")
			r8 = (r8 + r5[2])
			return (r8 + ").")
			r4 = (r4 - 1)
		}
	}
	catch
	{
		r8 = ACCU
		ACCU = null
		ACCU = Scope[100]
		r8 = Scope[1]
	}
	return null
}
function func_nginxDirPath_0x100000024()
{
	r3 = Scope[1][8]["ROOT"]
	r4 = "nginx"
	return Scope[1][5]["join"](r3, r4)
}
function func_nginxStatus_0x100000023()
{
	if (Scope[1][45])
	{
		return !Boolean([])
	}
	r1 = Date["now"]
	r1 = r1()
	r1 = (r1 - Scope[1][46]["at"])
	if (r1 >= 30000)
	{
		ACCU = func_refreshNginxStatus_0x100000022()
	}
	return Scope[1][46]["val"]
}
function func_refreshNginxStatus_0x100000022()
{
	r0 = Scope[1]
	Scope[101][2] = func_0x4405_0x100000001
	if (Scope[1][47])
	{
		return undefined
	}
	r1 = !(!Boolean([]))
	ACCU = Scope[1][47]
	Scope[1][47] = r1
	ACCU = func_0x27ee6d_0x10000001f
	Scope[101][3] = func_0x27ee6d_0x10000001f
	r1 = Scope[101]
	try
	{
		ACCU = Scope[1][22]["isWindows"]
		if (Scope[1][22]["isWindows"])
		{
			r5 = new ["/FI", "IMAGENAME eq nginx.exe", "/FO", 0, 0]
			r5[3] = "CSV"
			r5[4] = "/NH"
			r4 = r5
			r5 = new {"timeout": 5000, "windowsHide": null}
			r5["windowsHide"] = !(!Boolean([]))
			ACCU = Scope[1][7]("tasklist", r4, r5, func_unknown_0x100000020)
		}
		else
		{
			r3 = "pgrep"
			r4 = new ["nginx"]
			r5 = new {"timeout": 5000}
			ACCU = Scope[1][7](r3, r4, r5, func_unknown_0x100000021)
		}
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[102]
		r2 = Scope[101]
		r4 = !Boolean([])
		ACCU = func_0x27ee6d_0x10000001f(r4)
	}
	return undefined
}
function func_unknown_0x100000021(a0)
{
	r1 = !Boolean(a0)
	return func_0x27ee6d_0x10000001f(r1)
}
function func_unknown_0x100000020(a0, a1)
{
	ACCU = !Boolean(a0)
	if (!Boolean(a0))
	{
		r2 = \nginx\\\\.exe\
		r1 = r2["test"]
		ACCU = a1
		if (!a1)
		{
			ACCU = ""
		}
		r4 = ACCU
		r3 = String(r4)
		ACCU = r1(r3)
	}
	r1 = ACCU
	return func_0x27ee6d_0x10000001f(r1)
}
function func_0x27ee6d_0x10000001f(a0)
{
	r1 = new {"val": null, "at": null}
	r1["val"] = a0
	r2 = Date["now"]
	r1["at"] = r2()
	ACCU = Scope[1][46]
	Scope[1][46] = r1
	r1 = !Boolean([])
	ACCU = Scope[1][47]
	Scope[1][47] = r1
	return undefined
}
function func_validateSchedule_0x10000001e(a0, a1)
{
	r4 = Scope[1]
	Scope[103][2] = a0
	Scope[103][3] = func_0x4405_0x100000001
	r8 = 346
	r6 = a1["channels"]
	if (!r6["some"](func_unknown_0x10000001d))
	{
		return "اختر قناة صحيحة"
	}
	ACCU = Scope[103][2]["slots"]
	if (!Scope[103][2]["slots"])
	{
		ACCU = []
	}
	r0 = ACCU
	if (!r0["length"])
	{
		return "أضف فترة زمنية واحدة على الأقل"
	}
	r6 = GetIterator(r0)
	r5 = r6["next"]
	ACCU = false
	r7 = false
	r10 = Scope[103]
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			r3 = r11["value"]
			r13 = \^\\\\d{1,2}:\\\\d{2}$\
			r12 = r13["test"]
			ACCU = r11["value"]["start"]
			r11 = r11["value"]
			if (!ACCU)
			{
				ACCU = ""
			}
			r14 = ACCU
			if (r12(r14))
			{
				r13 = \^\\\\d{1,2}:\\\\d{2}$\
				ACCU = r3["end"]
				if (!r3["end"])
				{
					ACCU = ""
				}
				r14 = ACCU
				if (r13["test"](r14)) continue
			}
			r9 = "صيغة الوقت يجب أن تكون HH:MM"
			ACCU = 1
			r8 = 1
			break
		}
		ACCU = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = ACCU
		r8 = 0
	}
	if (!r7)
	{
		r12 = Scope[103]
		try
		{
			if (!r6["return"] == undefined)
			{
				ACCU = r6["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	switch (r8)
	default:
	{
		break
	}
	case (0):
	{
		ACCU = r9
	}
	case (1):
	{
		return r9
	}
	return null
}
function func_unknown_0x10000001d(a0)
{
	return a0["id"] === Scope[103][2]["channelId"]
}
function func_setManualStopped_0x10000001c(a0, a1)
{
	r3 = Scope[1]
	Scope[104][2] = a0
	r4 = Scope[1][8]["get"]
	r1 = r4()
	r5 = r1["channels"]
	r4 = r5["find"]
	r2 = r4(func_unknown_0x10000001b)
	if (r4(func_unknown_0x10000001b))
	{
		r4 = r2["manualStopped"]
		if (!(r4 === a1))
		{
			r5 = "manualStopped"
			r2[r5] = a1
			r4 = Scope[1][8]["save"]
			ACCU = r4()
		}
	}
	return undefined
}
function func_unknown_0x10000001b(a0)
{
	return a0["id"] === Scope[104][2]
}
function func_channelPayload_0x10000001a(a0, a1)
{
	r1 = new {"id": null, "chanId": null, "name": null, "sourceId": null, "category": null, "sort": null, "cover": null, "logoEnabled": null, "quality": null, "fps": null, "threads": null, "bitrate": null, "autoStart": null, "enabled": null, "alwaysOn": null}
	r1["id"] = a1
	r1["chanId"] = a0["chanId"]
	r1["name"] = a0["name"]
	r1["sourceId"] = a0["sourceId"]
	ACCU = a0["category"]
	if (!a0["category"])
	{
		ACCU = ""
	}
	r1["category"] = ACCU
	ACCU = a0["sort"]
	if (!a0["sort"])
	{
		ACCU = 0
	}
	r3 = ACCU
	r1["sort"] = Number(r3)
	ACCU = a0["cover"]
	if (!a0["cover"])
	{
		ACCU = ""
	}
	r1["cover"] = ACCU
	r1["logoEnabled"] = !(!Boolean(a0["logoEnabled"]))
	r1["quality"] = func_normalizeQuality_0x100000017(a0["quality"])
	ACCU = a0["fps"]
	if (a0["fps"])
	{
		r3 = a0["fps"]
		ACCU = Number(r3)
	}
	else
	{
		ACCU = null
	}
	r1["fps"] = ACCU
	ACCU = a0["threads"]
	if (a0["threads"])
	{
		r3 = a0["threads"]
		ACCU = Number(r3)
	}
	else
	{
		ACCU = null
	}
	r1["threads"] = ACCU
	ACCU = a0["bitrate"]
	if (a0["bitrate"])
	{
		r3 = String(a0["bitrate"])
		ACCU = r3["slice"](0, 12)
	}
	else
	{
		ACCU = null
	}
	r1["bitrate"] = ACCU
	r1["autoStart"] = !(!Boolean(a0["autoStart"]))
	r1["enabled"] = !(a0["enabled"] === !Boolean([]))
	r1["alwaysOn"] = !(!Boolean(a0["alwaysOn"]))
	return r1
}
function func_autoChanId_0x100000019(a0, a1)
{
	r3 = Scope[1]
	r0 = func_0x4405_0x100000001
	ACCU = a0
	if (!a0)
	{
		ACCU = ""
	}
	r10 = ACCU
	r9 = String(r10)
	r8 = r9["trim"]()
	r7 = r8["toLowerCase"]
	r7 = r7()
	r6 = r7["replace"]
	r8 = \[^a-z0-9]+\
	r6 = r6(r8, "-")
	r7 = \^-+|-+$\
	r5 = r6["replace"](r7, "")
	r1 = r5["slice"](0, 24)
	if (!r5["slice"](0, 24))
	{
		r1 = "ch"
	}
	Scope[105][2] = r1
	r2 = 1
	while (true)
	{
		r5 = a1[r0(346)]
		r4 = r5[r0(216)]
		if (!r4(func_unknown_0x100000018)) break
		r4 = (r1 + "-")
		ACCU = (r2 + 1)
		r2 = (r2 + 1)
		Scope[105][2] = (r4 + ACCU)
	}
	return Scope[105][2]
}
function func_unknown_0x100000018(a0)
{
	return a0["chanId"] === Scope[105][2]
}
function func_normalizeQuality_0x100000017(a0)
{
	ACCU = Scope[1][38]["includes"](a0)
	if (Scope[1][38]["includes"](a0))
	{
		ACCU = a0
	}
	else
	{
		ACCU = "copy"
	}
	return ACCU
}
function func_validateChannel_0x100000016(a0, a1, a2)
{
	r0 = Scope[1]
	Scope[106][3] = a0
	Scope[106][2] = a2
	Scope[106][4] = func_0x4405_0x100000001
	ACCU = Scope[106][3]["name"]
	if (!Scope[106][3]["name"])
	{
		ACCU = ""
	}
	r3 = ACCU
	r2 = String(r3)
	Scope[106][5] = r2["trim"]()
	ACCU = Scope[106][3]["chanId"]
	if (!Scope[106][3]["chanId"])
	{
		ACCU = ""
	}
	r3 = ACCU
	r2 = String(r3)
	r1 = r2["trim"]
	Scope[106][6] = r1()
	if (!Scope[106][5])
	{
		return "اسم القناة مطلوب"
	}
	if (!Scope[106][6])
	{
		return "معرّف القناة مطلوب"
	}
	r2 = \^[a-zA-Z0-9_-]+$\
	if (!r2["test"](Scope[106][6]))
	{
		return "معرّف القناة: أحرف إنجليزية وأرقام فقط"
	}
	r2 = a1["channels"]
	r1 = r2["some"]
	if (r1(func_unknown_0x100000013))
	{
		return "يوجد قناة أخرى بنفس الاسم"
	}
	r2 = a1["channels"]
	r1 = r2["some"]
	if (r1(func_unknown_0x100000014))
	{
		return "يوجد قناة أخرى بنفس المعرّف"
	}
	r2 = a1["sources"]
	r1 = r2["some"]
	if (!r1(func_unknown_0x100000015))
	{
		return "يجب ربط القناة بمصدر موجود"
	}
	return null
}
function func_unknown_0x100000015(a0)
{
	return a0["id"] === Scope[106][3]["sourceId"]
}
function func_unknown_0x100000014(a0)
{
	r0 = a0["chanId"]
	ACCU = r0 === Scope[106][6]
	if (r0 === Scope[106][6])
	{
		ACCU = !(a0["id"] === Scope[106][2])
	}
	return ACCU
}
function func_unknown_0x100000013(a0)
{
	r0 = a0["name"]
	ACCU = r0 === Scope[106][5]
	if (r0 === Scope[106][5])
	{
		ACCU = !(a0["id"] === Scope[106][2])
	}
	return ACCU
}
function func_probeUrl_0x100000012(a0, a1)
{
	r0 = Scope[1]
	Scope[107][3] = a0
	Scope[107][2] = a1
	ACCU = Promise
	return Promise(func_unknown_0x100000011)
}
function func_unknown_0x100000011(a0, a1)
{
	r1 = Scope[107]
	Scope[108][3] = a0
	Scope[108][2] = a1
	Scope[108][4] = func_0x4405_0x100000001
	ACCU = undefined
	r0 = undefined
	r2 = Scope[108]
	try
	{
		r3 = Scope[107][3]["startsWith"]
		ACCU = r3("https")
		if (r3("https"))
		{
			r4 = "https"
			ACCU = Scope[1][2](r4)
		}
		else
		{
			r4 = "http"
			ACCU = Scope[1][2](r4)
		}
		r0 = ACCU
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[109]
		r3 = Scope[108]
		return Scope[108][2](Scope[109][2])
	}
	r2 = r0["get"]
	r5 = new {"headers": null, "timeout": 10000}
	r6 = new {"User-Agent": null, "Accept": null}
	r6["User-Agent"] = Scope[107][2]
	r6["Accept"] = "*/*"
	r5["headers"] = r6
	r3 = r0
	Scope[108][5] = r2(Scope[107][3], r5, func_unknown_0x10000000e)
	ACCU = Scope[108][5]["on"]("timeout", func_unknown_0x10000000f)
	ACCU = Scope[108][5]["on"]("error", func_unknown_0x100000010)
	return undefined
}
function func_unknown_0x100000010(a0)
{
	return Scope[108][2](a0)
}
function func_unknown_0x10000000f()
{
	ACCU = Scope[108][5]["destroy"]()
	r3 = "انتهت مهلة الاتصال (10 ثوانٍ)"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[108][2](r2)
	return undefined
}
function func_unknown_0x10000000e(a0)
{
	r0 = Scope[108]
	Scope[110][2] = a0
	Scope[110][3] = func_0x4405_0x100000001
	r2 = Scope[110][2]["headers"]
	ACCU = r2["content-type"]
	if (!r2["content-type"])
	{
		ACCU = ""
	}
	r2 = ACCU
	Scope[110][4] = String(r2)
	r1 = Buffer["alloc"]
	Scope[110][5] = r1(0)
	ACCU = Scope[110][2]["on"]("data", func_unknown_0x10000000b)
	Scope[110][6] = func_0x47df7a_0x10000000c
	ACCU = Scope[110][2]["on"]("end", func_0x47df7a_0x10000000c)
	ACCU = Scope[110][2]["on"]("close", func_0x47df7a_0x10000000c)
	r3 = "error"
	ACCU = Scope[110][2]["on"](r3, func_unknown_0x10000000d)
	return undefined
}
function func_unknown_0x10000000d()
{
	return func_0x47df7a_0x10000000c()
}
function func_0x47df7a_0x10000000c()
{
	r4 = Scope[110][5]["toString"]
	r6 = "utf8"
	r8 = Math["min"]
	r8 = r8(Scope[110][5]["length"], 2048)
	r1 = r4(r6, 0, r8)
	r2 = "other"
	r5 = \#EXTM3U\
	r4 = r5["test"]
	if (r4(r1))
	r5 = \\\\\.m3u8\
	r4 = r5["test"]
		|| (r4(Scope[107][3]))
	r5 = \mpegurl\
		|| (r5["test"](Scope[110][4]))
	{
		r2 = "m3u8"
	}
	else
	{
		r5 = \mp2t|video\\\\/mp2t\
		if (r5["test"](Scope[110][4]))
		r5 = \\\\\.ts(\\\\?|$)\
		r4 = r5["test"]
			|| (r4(Scope[107][3]))
		{
			r2 = "ts"
		}
		else
		{
			r5 = \^\\\\x47\
			r8 = "binary"
			r6 = Scope[110][5]["toString"](r8, 0, 1)
			if (r5["test"](r6))
			{
				r2 = "ts"
			}
		}
	}
	ACCU = Scope[110][2]["statusCode"] >= 200
	if (Scope[110][2]["statusCode"] >= 200)
	{
		r4 = Scope[110][2]["statusCode"]
		ACCU = r4 < 400
	}
	r3 = ACCU
	r5 = new {"ok": null, "status": null, "statusText": null, "contentType": null, "kind": null, "preview": null, "message": null}
	r5["ok"] = r3
	r5["status"] = Scope[110][2]["statusCode"]
	ACCU = Scope[110][2]["statusMessage"]
	if (!Scope[110][2]["statusMessage"])
	{
		ACCU = ""
	}
	r5["statusText"] = ACCU
	r5["contentType"] = Scope[110][4]
	r5["kind"] = r2
	r9 = \[^\\\\x09\\\\x0A\\\\x0D\\\\x20-\\\\x7E\\x600-\\x6ff]\
	r7 = r1["replace"](r9, ".")
	r5["preview"] = r7["slice"](0, 1200)
	ACCU = r3
	if (r3)
	{
		ACCU = ""
	}
	else
	{
		r6 = "الخادم ردّ بحالة "
		ACCU = (r6 + Scope[110][2]["statusCode"])
	}
	r5["message"] = ACCU
	ACCU = Scope[108][3](r5)
	return undefined
}
function func_unknown_0x10000000b(a0)
{
	r1 = Scope[110][5]["length"]
	if (r1 < 2048)
	{
		r1 = Buffer["concat"]
		r4 = new [0, 0]
		r4[0] = Scope[110][5]
		r4[1] = a0
		r1 = r1(r4)
		ACCU = Scope[110][5]
		Scope[110][5] = r1
	}
	r1 = Scope[110][5]["length"]
	if (r1 >= 2048)
	{
		r1 = Scope[110][2]["destroy"]
		ACCU = r1()
	}
	return undefined
}
function func_validateSource_0x10000000a(a0, a1, a2)
{
	r1 = Scope[1]
	Scope[111][2] = a2
	Scope[111][3] = func_0x4405_0x100000001
	ACCU = a0["name"]
	if (!a0["name"])
	{
		ACCU = ""
	}
	r4 = ACCU
	r3 = String(r4)
	r2 = r3["trim"]
	Scope[111][4] = r2()
	if (!Scope[111][4])
	{
		return "اسم المصدر مطلوب"
	}
	r3 = a1["sources"]
	r2 = r3["some"]
	if (r2(func_unknown_0x100000008))
	{
		return "يوجد مصدر آخر بنفس الاسم"
	}
	r2 = Scope[1][34]["includes"]
	r4 = a0["type"]
	if (!r2(r4))
	{
		return "نوع المصدر غير صحيح"
	}
	r2 = a0["type"]
	if (r2 === "usb")
	{
		if (!a0["videoDevice"])
		{
			return "يجب اختيار جهاز الفيديو"
		}
	}
	r3 = new ["http", "hls"]
	r4 = a0["type"]
	if (r3["includes"](r4))
	{
		if (!a0["url"])
		{
			return "الرابط مطلوب"
		}
	}
	if (a0["type"] === "iptv")
	{
		if (!a0["url"])
		{
			return "يجب اختيار قناة من مكتبة IPTV"
		}
	}
	r2 = a0["type"]
	if (r2 === "file")
	{
		if (!a0["path"])
		{
			return "مسار الملف مطلوب"
		}
	}
	if (a0["type"] === "multi-m3u8")
	{
		ACCU = a0["variants"]
		if (!a0["variants"])
		{
			ACCU = []
		}
		r0 = ACCU
		if (!r0["length"])
			|| (r0["some"](func_unknown_0x100000009))
		{
			return "أضف رابطاً واحداً على الأقل مع تحديد الجودة"
		}
	}
	return null
}
function func_unknown_0x100000009(a0)
{
	ACCU = !Boolean(a0["quality"])
	if (!!Boolean(a0["quality"]))
	{
		ACCU = !Boolean(a0["url"])
	}
	return ACCU
}
function func_unknown_0x100000008(a0)
{
	r0 = a0["name"]
	ACCU = r0 === Scope[111][4]
	if (r0 === Scope[111][4])
	{
		ACCU = !(a0["id"] === Scope[111][2])
	}
	return ACCU
}
function func_isLoopback_0x100000007(a0)
{
	ACCU = a0["socket"]
	if (a0["socket"])
	{
		ACCU = a0["socket"]["remoteAddress"]
	}
	if (!ACCU)
	{
		ACCU = ""
	}
	r1 = ACCU
	ACCU = r1 === "127.0.0.1"
	if (!r1 === "127.0.0.1")
	{
		ACCU = r1 === "::1"
		if (!r1 === "::1")
		{
			ACCU = r1 === "::ffff:127.0.0.1"
		}
	}
	return ACCU
}
function func_effectiveLiveSync_0x100000006(a0)
{
	r4 = a0["hlsTime"]
	ACCU = Number(r4)
	if (!Number(r4))
	{
		ACCU = 2
	}
	r1 = ACCU
	r4 = a0["playerLiveSyncDuration"]
	ACCU = Number(r4)
	if (!Number(r4))
	{
		ACCU = 4
	}
	r2 = ACCU
	r3 = Math["max"]
	r6 = ((r1 * 2) + 1)
	return r3(r2, r6)
}
function func_watchedChannelsCount_0x100000005()
{
	r1 = 0
	r8 = 316
	r5 = Scope[1][24]["keys"]
	r7 = r5()
	r6 = GetIterator(r7)
	r5 = r6["next"]
	ACCU = false
	r7 = false
	r10 = Scope[1]
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			r12 = func_viewerCount_0x100000003(r11["value"])
			r11 = r11["value"]
			if (!r12 > 0) continue
			ACCU = (r1 + 1)
			r1 = (r1 + 1)
		}
		ACCU = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = ACCU
		r8 = 0
	}
	if (!r7)
	{
		r12 = Scope[1]
		try
		{
			if (!r6["return"] == undefined)
			{
				ACCU = r6["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r8 === 0)
	{
		ACCU = r9
	}
	return r1
}
function func_totalCurrentViewers_0x100000004()
{
	r1 = 0
	r8 = 316
	r5 = Scope[1][24]["keys"]
	r7 = r5()
	r6 = GetIterator(r7)
	r5 = r6["next"]
	ACCU = false
	r7 = false
	r10 = Scope[1]
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			ACCU = (r1 + func_viewerCount_0x100000003(r11["value"]))
			r12 = r1
			r1 = (r1 + func_viewerCount_0x100000003(r11["value"]))
			r11 = r11["value"]
		}
		ACCU = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = ACCU
		r8 = 0
	}
	if (!r7)
	{
		r12 = Scope[1]
		try
		{
			if (!r6["return"] == undefined)
			{
				ACCU = r6["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r8 === 0)
	{
		ACCU = r9
	}
	return r1
}
function func_viewerCount_0x100000003(a0)
{
	r10 = Scope[1][24]
	r9 = Scope[1][24]["get"]
	r1 = r9(a0)
	r2 = 0
	if (r1)
	{
		r12 = 482
		r9 = Date["now"]
		r4 = (r9() - 45000)
		r10 = GetIterator(r1)
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
				r16 = r15["value"]
				r18 = GetIterator(r15["value"])
				ACCU = false
				r19 = false
				r22 = Scope[1]
				try
				{
					if (!false)
					r19 = true
					r23 = r18["next"]()
					ACCU = r23["done"]
						&& (!r23["done"])
					{
						r19 = false
						ACCU = r23["value"]
					}
					else
					{
						ACCU = undefined
					}
					r7 = ACCU
					if (!r19)
					r19 = true
					r23 = r18["next"]()
					ACCU = r23["done"]
						&& (!r23["done"])
					{
						r19 = false
						ACCU = r23["value"]
					}
					else
					{
						ACCU = undefined
					}
					r8 = ACCU
					ACCU = -1
					r21 = -1
					r20 = -1
				}
				catch
				{
					r21 = ACCU
					r20 = 0
				}
				if (!r19)
				{
					r24 = Scope[1]
					try
					{
						if (!r18["return"] == undefined)
						{
							ACCU = r18["return"]()
						}
						catch {}
					}
				}
				ACCU = null
				if (r20 === 0)
				{
					r12 = 0
					r13 = r21
					break
				}
				if (r8 >= r4)
				{
					r2 = (r2 + 1)
					continue
				}
				r16 = r1[r0(236)]
				ACCU = r16(r7)
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
	r9 = Math["max"]
	r12 = Scope[1][11]["hlsViewerCount"]
	r12 = r12(a0)
	return r9(r2, r12)
}
function func_buildNginxConf_0x100000002(a0)
{
	r4 = Scope[1][8]["ROOT"]["replace"]
	r6 = \\\\\\\\\\
	r1 = r4(r6, "/")
	ACCU = a0["nginxPort"]
	if (!a0["nginxPort"])
	{
		ACCU = 80
	}
	r2 = ACCU
	ACCU = a0["port"]
	if (!a0["port"])
	{
		ACCU = 3001
	}
	r3 = ACCU
	r4 = "# أمان لايف — مُولّد تلقائياً من لوحة التحكم (مُهيّأ لـ200+ مشاهد)\n# سجلّ أخطاء بمسار مطلق ثابت: نقرأه من كود Node لتشخيص فشل الربط بالمنفذ\n# (مثل حظر ويندوز/Hyper-V لنطاق منافذ) بدل ترك المستخدم أمام فشل صامت.\nerror_log \""
	r4 = (r4 + r1)
	r4 = (r4 + null)
	r4 = (r4 + r2)
	r4 = (r4 + " reuseport;\\n        server_name _;\\n\\n        # \\x642\\x648\\x627\\x626\\x645 m3u8 \\x62a\\x645\\x631\\x651 \\x639\\x628\\x631 Node (\\x62e\\x641\\x64a\\x641\\x629 \\x62c\\x62f\\x627\\x64b) \\x644\\x627 \\x62a\\x64f\\x62e\\x62f\\x64e\\x645 \\x645\\x646 \\x627\\x644\\x642\\x631\\x635 \\x645\\x628\\x627\\x634\\x631\\x629\\x64b: \\x647\\x630\\x627 \\x647\\x648\\n        # \\x645\\x633\\x627\\x631 heartbeat/noteHlsAccess \\x627\\x644\\x630\\x64a \\x64a\\x645\\x646\\x639 \\x625\\x64a\\x642\\x627\\x641 \\x627\\x644\\x62e\\x645\\x648\\x644 \\x644\\x642\\x646\\x627\\x629 \\x64a\\x634\\x627\\x647\\x62f\\x647\\x627 \\x623\\x62d\\x62f \\x639\\x628\\x631\\n        # \\x631\\x627\\x628\\x637 HLS \\x645\\x628\\x627\\x634\\x631 (VLC/\\x62a\\x644\\x641\\x627\\x632) \\x628\\x644\\x627 heartbeat \\x645\\x646 \\x635\\x641\\x62d\\x629 \\x627\\x644\\x645\\x634\\x627\\x647\\x62f. \\x644\\x648 \\x62e\\x62f\\x645\\x646\\x627\\x647\\x627 \\x645\\x646\\n        # nginx \\x645\\x628\\x627\\x634\\x631\\x629\\x64b (\\x643\\x645\\x627 \\x643\\x627\\x646) \\x644\\x646 \\x64a\\x635\\x644 Node \\x623\\x64a \\x637\\x644\\x628 \\x644\\x62a\\x644\\x643 \\x627\\x644\\x642\\x646\\x627\\x629 \\x641\\x62a\\x64f\\x648\\x642\\x64e\\x641 \\x643\\x623\\x646\\x647\\x627 \\x628\\x644\\x627\\n        # \\x645\\x634\\x627\\x647\\x62f\\x64a\\x646 \\x631\\x63a\\x645 \\x645\\x634\\x627\\x647\\x62f\\x62a\\x647\\x627 \\x641\\x639\\x644\\x64a\\x627\\x64b. \\x627\\x644\\x642\\x648\\x627\\x626\\x645 \\x635\\x63a\\x64a\\x631\\x629 \\x627\\x644\\x62d\\x62c\\x645 \\x641\\x62a\\x645\\x631\\x64a\\x631\\x647\\x627 \\x644\\x627 \\x64a\\x643\\x644\\x651\\x641 \\x627\\x644\\x623\\x62f\\x627\\x621.\\n        location ~ ^/hls/.+\\\\.m3u8$ {\\n            proxy_pass http://127.0.0.1:")
	r4 = (r4 + r3)
	r4 = (r4 + null)
	r4 = (r4 + r1)
	r4 = (r4 + "/srv/hls/\";\n            access_log off;                       # 200+ مشاهد × مقاطع كثيرة = سجل ضخم بلا فائدة\n            add_header Access-Control-Allow-Origin *;\n            add_header Cache-Control \"public, max-age=31536000, immutable\";\n        }\n        location /uploads/ {\n            alias \"")
	r4 = (r4 + r1)
	r4 = (r4 + "/srv/uploads/\";\n            access_log off;\n            add_header Cache-Control \"max-age=3600\";\n        }\n        location / {\n            proxy_pass http://127.0.0.1:")
	r4 = (r4 + r3)
	return (r4 + ";\n            proxy_http_version 1.1;\n            proxy_set_header Connection \"\";       # keep-alive نحو Node لتقليل كلفة الاتصالات\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_read_timeout 300;\n            client_max_body_size 2048m;\n        }\n    }\n}\n")
}
function func_0x4405_0x100000001(a0, a1)
{
	a0 = (a0 - 208)
	r0 = Scope[1][57]()
	r1 = r0[a0]
	if (Scope[1][4]["Ylzrvf"] == undefined)
	{
		Scope[1][4]["qVVZdR"] = func_0x2a40d0_0x100000000
		Scope[1][4]["PKoeGW"] = {}
		Scope[1][4]["Ylzrvf"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][4]["PKoeGW"][r4])
	{
		r1 = Scope[1][4]["qVVZdR"](r1)
		Scope[1][4]["PKoeGW"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][4]["PKoeGW"][r4]
	}
	return r1
}
function func_0x2a40d0_0x100000000(a0)
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
