// Decompiled from binary src/devices.js (V8 10.2.154.4-node.8 code cache, 12445 source chars, 23088 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x100000020()
{
	r0 = func_unknown_0x10000001f
	return r0
}
function func_unknown_0x10000001f(a0, a1, a2, a3, a4)
{
	r4 = Scope[0]
	Scope[1][7] = func_resolveFfmpegPath_0x100000000
	Scope[1][8] = func_runFFmpeg_0x100000006
	Scope[1][10] = func_0x5891_0x10000000c
	Scope[1][11] = func_listV4l2Devices_0x10000000f
	Scope[1][12] = func_0x42fb_0x100000013
	Scope[1][13] = func_listDeviceOptions_0x100000017
	Scope[1][14] = func_parseCaps_0x100000018
	Scope[1][2] = func_0x42fb_0x100000013
	ACCU = func_unknown_0x10000001e(Scope[1][10], 898243)
	r6 = "child_process"
	r5 = a1(r6)
	Scope[1][3] = r5["spawn"]
	r6 = "path"
	r0 = a1(r6)
	Scope[1][4] = a1("fs")
	Scope[1][5] = a1("./store")
	Scope[1][6] = a1("./platform")
	Scope[1][9] = Scope[1][6]["isWindows"]
	r6 = "exports"
	r7 = new {"listDshowDevices": null, "listDeviceOptions": null, "recommendCaptureSettings": null, "diagnose": null}
	r7["listDshowDevices"] = func_listDshowDevices_0x10000000a
	r7["listDeviceOptions"] = func_listDeviceOptions_0x100000017
	r7["recommendCaptureSettings"] = func_recommendCaptureSettings_0x10000001d
	r7["diagnose"] = func_diagnose_0x100000011
	a2[r6] = r7
	return undefined
}
function func_unknown_0x10000001e(a0, a1)
{
	r0 = func_0x42fb_0x100000013
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(284)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(274)
			r4 = (r4 + ((-parseInt(r6)) \ 2))
			r6 = r0(254)
			r4 = (r4 + (parseInt(r6) \ 3))
			r6 = r0(264)
			r4 = (r4 + ((-parseInt(r6)) \ 4))
			r6 = r0(246)
			r4 = (r4 + ((-parseInt(r6)) \ 5))
			r6 = r0(291)
			r5 = (parseInt(r6) \ 6)
			r7 = r0(285)
			r4 = (r4 + (r5 * (parseInt(r7) \ 7)))
			r6 = r0(261)
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
function func_recommendCaptureSettings_0x10000001d(a0, a1)
{
	r9 = Scope[1]
	r10 = <closure>
	r11 = <this>
	ACCU = func_0x4df574_0x100000019
	Scope[3][6] = func_0x4df574_0x100000019
	r10 = Scope[3]
	try
	{
		Scope[3][2] = func_0x42fb_0x100000013
		r12 = func_listDeviceOptions_0x100000017(a0)
		r11 = Scope[3]
		r11 = await r12
		r12 = _GeneratorGetResumeMode(Scope[3])
		if (!r12 === 0)
		{
			ACCU = r11
		}
		r1 = r11
		ACCU = a1
		if (!a1)
		{
			ACCU = 30
		}
		Scope[3][3] = ACCU
		Scope[3][4] = func_0x59bbcd_0x10000001a
		Scope[3][5] = 921600
		r12 = r1["caps"]
		r11 = r12["slice"]
		r2 = r11()
		r11 = r2["filter"]
		r3 = r11(func_unknown_0x10000001b)
		if (!r3["length"])
		{
			r11 = r2["slice"]
			r3 = r11()
		}
		r11 = r3["sort"]
		ACCU = r11(func_unknown_0x10000001c)
		r4 = r3[0]
		r5 = ""
		r6 = ""
		r7 = "1280x720"
		r8 = Scope[3][3]
		if (r4)
		{
			r11 = r4["kind"]
			if (r11 === "pixel_format")
			{
				r5 = r4["format"]
			}
			else
			{
				r6 = r4["format"]
			}
			r7 = r4["size"]
			r11 = Math["min"]
			r14 = r4["maxFps"]
			ACCU = r11(Scope[3][3], r14)
			if (!r11(Scope[3][3], r14))
			{
				ACCU = r4["maxFps"]
			}
			r8 = ACCU
		}
		else
		{
			r12 = r1["codecs"]
			r13 = "mjpeg"
			if (r12["includes"](r13))
			{
				r6 = "mjpeg"
			}
			else
			{
				r12 = r1["pixelFormats"]
				r11 = r12["includes"]
				r13 = "yuyv422"
				if (r11(r13))
				{
					r5 = "yuyv422"
				}
			}
			r12 = r1["sizes"]
			r11 = r12["includes"]
			r13 = "1280x720"
			ACCU = r11(r13)
			if (r11(r13))
			{
				ACCU = "1280x720"
			}
			else
			{
				r11 = r1["sizes"]
				r12 = r1["sizes"]
				ACCU = r11[(r12["length"] - 1)]
				if (!r11[(r12["length"] - 1)])
				{
					ACCU = "1280x720"
				}
			}
			r7 = ACCU
			r12 = r1["fps"]
			r11 = r12["includes"]
			ACCU = r11(Scope[3][3])
			if (r11(Scope[3][3]))
			{
				ACCU = Scope[3][3]
			}
			else
			{
				r11 = r1["fps"]
				r12 = r1["fps"]
				ACCU = r11[(r12["length"] - 1)]
				if (!r11[(r12["length"] - 1)])
				{
					ACCU = Scope[3][3]
				}
			}
			r8 = ACCU
		}
		r11 = new {"pixelFormat": null, "vcodec": null, "videoSize": null, "fps": null, "detected": null}
		r11["pixelFormat"] = r5
		r11["vcodec"] = r6
		r11["videoSize"] = r7
		r11["fps"] = r8
		r12 = new {"pixelFormats": null, "codecs": null, "sizes": null, "fps": null, "caps": null}
		r12["pixelFormats"] = r1["pixelFormats"]
		r12["codecs"] = r1["codecs"]
		r12["sizes"] = r1["sizes"]
		r12["fps"] = r1["fps"]
		r12["caps"] = r1["caps"]
		r11["detected"] = r12
		r12 = r11
		r11 = Scope[3]
		ACCU = r12
		return r12
	}
	catch {}
	r11 = ACCU
	ACCU = null
	ACCU = Scope[4]
	r11 = Scope[3]
	r12 = Scope[3]
	return Scope[4][2]
}
function func_unknown_0x10000001c(a0, a1)
{
	r0 = func_0x4df574_0x100000019(a1)
	return (r0 - func_0x4df574_0x100000019(a0))
}
function func_unknown_0x10000001b(a0)
{
	r0 = a0["maxFps"]
	return r0 >= Scope[3][3]
}
function func_0x59bbcd_0x10000001a(a0)
{
	r7 = 251
	r4 = a0["split"]
	r4 = r4("x")
	r3 = r4["map"]
	r3 = r3(Number)
	r5 = GetIterator(r3)
	ACCU = false
	r6 = false
	r9 = Scope[3]
	try
	{
		if (!false)
		r6 = true
		r10 = r5["next"]()
		ACCU = r10["done"]
			&& (!r10["done"])
		{
			r6 = false
			ACCU = r10["value"]
		}
		else
		{
			ACCU = undefined
		}
		r1 = ACCU
		if (!r6)
		r6 = true
		r10 = r5["next"]()
		ACCU = r10["done"]
			&& (!r10["done"])
		{
			r6 = false
			ACCU = r10["value"]
		}
		else
		{
			ACCU = undefined
		}
		r2 = ACCU
		ACCU = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = ACCU
		r7 = 0
	}
	if (!r6)
	{
		r11 = Scope[3]
		try
		{
			if (!r5["return"] == undefined)
			{
				ACCU = r5["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r7 === 0)
	{
		ACCU = r8
	}
	return (r1 * r2)
}
function func_0x4df574_0x100000019(a0)
{
	r4 = a0["size"]
	r1 = func_0x59bbcd_0x10000001a(r4)
	r5 = (r1 - 921600)
	r3 = (-Math["abs"](r5))
	r2 = (r3 / 921600)
	if (r1 > 921600)
	{
		r3 = r2
		r2 = (r2 - 0.5)
	}
	if (r1 < 307200)
	{
		r3 = r2
		r2 = (r2 - 0.3)
	}
	return r2
}
function func_parseCaps_0x100000018(a0)
{
	r0 = func_0x42fb_0x100000013
	r1 = []
	r14 = 251
	r11 = a0["split"]
	r13 = \\\\\r?\\\\n\
	r13 = r11(r13)
	r12 = GetIterator(r13)
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
			r18 = r17["value"][r0(276)]
			r20 = \(pixel_format|vcodec)=(\\\\w+)\
			r5 = r18(r20)
			if (!r18(r20))
			{
				continue
			}
			r6 = r5[1]
			r7 = r5[2]
			r18 = r17["value"][r0(276)]
			r20 = \max s=(\\\\d+x\\\\d+) fps=([\\\\d.]+)\
			r8 = r18(r20)
			r18 = r17["value"][r0(276)]
			r20 = \min s=(\\\\d+x\\\\d+) fps=([\\\\d.]+)\
			r9 = r18(r20)
			if (r8)
			{
				r18 = r1[r0(267)]
				r20 = new {"kind": null, "format": null, "size": null, "maxFps": null, "minFps": null}
				r20["kind"] = r6
				r20["format"] = r7
				r20["size"] = r8[1]
				r21 = Math[r0(290)]
				r24 = r8[2]
				r23 = parseFloat(r24)
				r20["maxFps"] = r21(r23)
				ACCU = r9
				r19 = r1
				if (r9)
				{
					r21 = Math[r0(290)]
					r24 = r9[2]
					r23 = parseFloat(r24)
					ACCU = r21(r23)
				}
				else
				{
					ACCU = 1
				}
				r20["minFps"] = ACCU
				ACCU = r18(r20)
			}
			if (r9)
			{
				ACCU = !Boolean(r8)
				if (!!Boolean(r8))
				{
					r18 = r9[1]
					ACCU = !(r18 === r8[1])
				}
				if (ACCU)
				{
					r20 = new {"kind": null, "format": null, "size": null, "maxFps": null, "minFps": 1}
					r20["kind"] = r6
					r20["format"] = r7
					r20["size"] = r9[1]
					r24 = r9[2]
					r23 = parseFloat(r24)
					r20["maxFps"] = Math["round"](r23)
					ACCU = r1["push"](r20)
				}
			}
			r18 = r17["value"][r0(276)]
			r20 = \[^a-z]s=(\\\\d+x\\\\d+)\\\\s+fps=([\\\\d.]+)\
			r10 = r18(r20)
			if (!r18(r20)) continue
			if (!!Boolean(r8)) continue
			if (!!Boolean(r9)) continue
			r18 = r1[r0(267)]
			r20 = new {"kind": null, "format": null, "size": null, "maxFps": null, "minFps": 1}
			r20["kind"] = r6
			r20["format"] = r7
			r20["size"] = r10[1]
			r21 = Math[r0(290)]
			r24 = r10[2]
			r23 = parseFloat(r24)
			r20["maxFps"] = r21(r23)
			ACCU = r18(r20)
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
	return r1
}
function func_listDeviceOptions_0x100000017(a0)
{
	r23 = Scope[1]
	r24 = <closure>
	r25 = <this>
	ACCU = null
	r24 = Scope[5]
	try
	{
		Scope[5][2] = func_0x42fb_0x100000013
		if (!Scope[1][9])
		{
			r26 = \^\\\\/dev\\\\/\
			r25 = r26["test"]
			ACCU = r25(a0)
			if (r25(a0))
			{
				ACCU = a0
			}
			else
			{
				r25 = "/dev/"
				ACCU = a0
				if (!a0)
				{
					ACCU = "video0"
				}
				ACCU = (r25 + ACCU)
			}
			r16 = ACCU
			r27 = new [0, "-f", 0, 0, "all", "-i", 0]
			r27[0] = "-hide_banner"
			r27[2] = "v4l2"
			r27[3] = "-list_formats"
			r27[6] = r16
			r26 = r27
			r26 = func_runFFmpeg_0x100000006(r26, 8000)
			r25 = Scope[5]
			r25 = await r26
			r26 = _GeneratorGetResumeMode(Scope[5])
			if (!r26 === 0)
			{
				ACCU = r25
			}
			r17 = r25
			r18 = Set(Scope[5])
			r19 = \(\\\\d{3,4}x\\\\d{3,4})\
			r20 = undefined
			while (true)
			{
				r25 = r19["exec"]
				r20 = r25(r17)
				if (r25(r17) == null) break
				r27 = r20[1]
				ACCU = r18["add"](r27)
			}
			r26 = \yuyv422\
			r25 = r26["test"]
			ACCU = r25(r17)
			if (r25(r17))
			{
				ACCU = new ["yuyv422"]
			}
			else
			{
				ACCU = []
			}
			r21 = ACCU
			r26 = \mjpeg|Motion-JPEG\
			r25 = r26["test"]
			ACCU = r25(r17)
			if (r25(r17))
			{
				r26 = new [0]
				r25 = 0
				r26[0] = "mjpeg"
				ACCU = r26
			}
			else
			{
				ACCU = []
			}
			r22 = ACCU
			r25 = new {"sizes": null, "fps": [], "pixelFormats": null, "codecs": null, "caps": []}
			r27 = Array.from(r18)
			r26 = r27["sort"]
			r25["sizes"] = r26(func_unknown_0x100000014)
			r25["pixelFormats"] = r21
			r25["codecs"] = r22
			r26 = r25
			r25 = Scope[5]
			return r26
		}
		r27 = new [0, "-f", 0, 0, "true", "-i", 0]
		r27[0] = "-hide_banner"
		r27[2] = "dshow"
		r27[3] = "-list_options"
		r29 = 280
		r28 = "video="
		r27[6] = (r28 + a0)
		r26 = func_runFFmpeg_0x100000006(r27)
		r25 = Scope[5]
		r25 = await r26
		r26 = _GeneratorGetResumeMode(Scope[5])
		if (!r26 === 0)
		{
			ACCU = r25
		}
		r1 = r25
		r2 = Set(Scope[5])
		r3 = Set(Scope[5])
		r4 = Set(Scope[5])
		r5 = Set(Scope[5])
		r28 = 251
		r25 = r1["split"]
		r27 = \\\\\r?\\\\n\
		r6 = r25(r27)
		r26 = GetIterator(r6)
		r25 = r26["next"]
		ACCU = false
		r27 = false
		r30 = Scope[5]
		try
		{
			while (true)
			{
				r27 = true
				r31 = r25()
				if (r31["done"]) break
				r27 = false
				r32 = r31["value"]["match"]
				r34 = \pixel_format=(\\\\w+)\
				r14 = r32(r34)
				if (r32(r34))
				{
					r34 = r14[1]
					ACCU = r4["add"](r34)
				}
				r32 = r31["value"]["match"]
				r34 = \vcodec=(\\\\w+)\
				r15 = r32(r34)
				if (!r32(r34)) continue
				r32 = r5["add"]
				r34 = r15[1]
				ACCU = r32(r34)
			}
			ACCU = -1
			r29 = -1
			r28 = -1
		}
		catch
		{
			r29 = ACCU
			r28 = 0
		}
		if (!r27)
		{
			r32 = Scope[5]
			try
			{
				if (!r26["return"] == undefined)
				{
					ACCU = r26["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		if (r28 === 0)
		{
			ACCU = r29
		}
		r8 = \s=(\\\\d+x\\\\d+)\\\\s+fps=([\\\\d.]+)\
		r9 = undefined
		while (true)
		{
			r25 = r8["exec"]
			r9 = r25(r1)
			if (r25(r1) == null) break
			r25 = r2["add"]
			r27 = r9[1]
			ACCU = r25(r27)
			r25 = r3["add"]
			r27 = Math["round"]
			r30 = r9[2]
			r29 = parseFloat(r30)
			r27 = r27(r29)
			ACCU = r25(r27)
		}
		r10 = \max s=(\\\\d+x\\\\d+) fps=([\\\\d.]+)\
		while (true)
		{
			r9 = r10["exec"](r1)
			if (r10["exec"](r1) == null) break
			r25 = r2["add"]
			r27 = r9[1]
			ACCU = r25(r27)
			r25 = r3["add"]
			r27 = Math["round"]
			r30 = r9[2]
			r29 = parseFloat(r30)
			r27 = r27(r29)
			ACCU = r25(r27)
		}
		r26 = Array.from(r2)
		r25 = r26["sort"]
		r11 = r25(func_unknown_0x100000015)
		r25 = new {"sizes": null, "fps": null, "pixelFormats": null, "codecs": null, "caps": null}
		r25["sizes"] = r11
		r27 = Array.from(r3)
		r26 = r27["sort"]
		r25["fps"] = r26(func_unknown_0x100000016)
		r25["pixelFormats"] = Array.from(r4)
		r25["codecs"] = Array.from(r5)
		r25["caps"] = func_parseCaps_0x100000018(r1)
		r26 = r25
		r25 = Scope[5]
		ACCU = r26
		return r26
	}
	catch {}
	r25 = ACCU
	ACCU = null
	ACCU = Scope[6]
	r25 = Scope[5]
	r26 = Scope[5]
	return Scope[6][2]
}
function func_unknown_0x100000016(a0, a1)
{
	return (a0 - a1)
}
function func_unknown_0x100000015(a0, a1)
{
	r7 = 251
	r4 = a0["split"]
	r4 = r4("x")
	r3 = r4["map"]
	r3 = r3(Number)
	r5 = GetIterator(r3)
	ACCU = false
	r6 = false
	r9 = Scope[5]
	try
	{
		if (!false)
		r6 = true
		r10 = r5["next"]()
		ACCU = r10["done"]
			&& (!r10["done"])
		{
			r6 = false
			ACCU = r10["value"]
		}
		else
		{
			ACCU = undefined
		}
		r1 = ACCU
		ACCU = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = ACCU
		r7 = 0
	}
	if (!r6)
	{
		r11 = Scope[5]
		try
		{
			if (!r5["return"] == undefined)
			{
				ACCU = r5["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r7 === 0)
	{
		ACCU = r8
	}
	r7 = 251
	r4 = a1["split"]
	r4 = r4("x")
	r3 = r4["map"]
	r3 = r3(Number)
	r5 = GetIterator(r3)
	ACCU = false
	r6 = false
	r9 = Scope[5]
	try
	{
		if (!false)
		r6 = true
		r10 = r5["next"]()
		ACCU = r10["done"]
			&& (!r10["done"])
		{
			r6 = false
			ACCU = r10["value"]
		}
		else
		{
			ACCU = undefined
		}
		r2 = ACCU
		ACCU = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = ACCU
		r7 = 0
	}
	if (!r6)
	{
		r11 = Scope[5]
		try
		{
			if (!r5["return"] == undefined)
			{
				ACCU = r5["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r7 === 0)
	{
		ACCU = r8
	}
	return (r1 - r2)
}
function func_unknown_0x100000014(a0, a1)
{
	r0 = parseInt(a0)
	return (r0 - parseInt(a1))
}
function func_0x42fb_0x100000013(a0, a1)
{
	a0 = (a0 - 236)
	r0 = Scope[1][10]()
	r1 = r0[a0]
	if (Scope[1][12]["GuzzED"] == undefined)
	{
		Scope[1][12]["vbNCvO"] = func_0x5bb52f_0x100000012
		Scope[1][12]["hzqkKQ"] = {}
		Scope[1][12]["GuzzED"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][12]["hzqkKQ"][r4])
	{
		r1 = Scope[1][12]["vbNCvO"](r1)
		Scope[1][12]["hzqkKQ"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][12]["hzqkKQ"][r4]
	}
	return r1
}
function func_0x5bb52f_0x100000012(a0)
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
function func_diagnose_0x100000011()
{
	r7 = Scope[1]
	r8 = <closure>
	r9 = <this>
	ACCU = null
	r8 = Scope[7]
	try
	{
		Scope[7][2] = func_resolveFfmpegPath_0x100000000()
		r2 = func_unknown_0x100000010()
		r11 = new ["-hide_banner", 0, 0, "-f", 0, "-i", 0]
		r11[1] = "-list_devices"
		r11[2] = "true"
		r11[4] = "dshow"
		r11[6] = "dummy"
		r10 = func_runFFmpeg_0x100000006(r11)
		r9 = Scope[7]
		r9 = await r10
		r10 = _GeneratorGetResumeMode(Scope[7])
		if (!r10 === 0)
		{
			ACCU = r9
		}
		r3 = r9
		r11 = new ["-hide_banner", 0]
		r11[1] = "-devices"
		r10 = func_runFFmpeg_0x100000006(r11)
		r9 = Scope[7]
		r9 = await r10
		r10 = _GeneratorGetResumeMode(Scope[7])
		if (!r10 === 0)
		{
			ACCU = r9
		}
		r4 = r9
		r10 = \dshow\
		r9 = r10["test"]
		r5 = r9(r4)
		r10 = \\\\\((video|audio)\\\\)\
		ACCU = r10["test"](r3)
		if (!r10["test"](r3))
		{
			r10 = \Alternative name\
			r9 = r10["test"]
			ACCU = r9(r3)
		}
		r6 = ACCU
		r9 = new {"ffmpegPath": null, "ffmpegExists": null, "execPath": null, "cwd": null, "supportsDshow": null, "rawDeviceOutput": null, "rawDevicesList": null}
		r9["ffmpegPath"] = Scope[7][2]
		r9["ffmpegExists"] = r2
		r9["execPath"] = process["execPath"]
		r10 = process["cwd"]
		r9["cwd"] = r10()
		ACCU = r5
		if (!r5)
		{
			ACCU = r6
		}
		r9["supportsDshow"] = ACCU
		ACCU = r3
		if (!r3)
		{
			ACCU = ""
		}
		r11 = ACCU
		r10 = r11["slice"]
		r9["rawDeviceOutput"] = r10(0, 4000)
		ACCU = r4
		if (!r4)
		{
			ACCU = ""
		}
		r11 = ACCU
		r10 = r11["slice"]
		r9["rawDevicesList"] = r10(0, 2000)
		r10 = r9
		r9 = Scope[7]
		ACCU = r10
		return r10
	}
	catch {}
	r9 = ACCU
	ACCU = null
	ACCU = Scope[8]
	r9 = Scope[7]
	r10 = Scope[7]
	return Scope[8][2]
}
function func_unknown_0x100000010()
{
	ACCU = func_0x42fb_0x100000013
	r1 = Scope[7]
	try
	{
		r2 = Scope[1][4]["existsSync"]
		ACCU = r2(Scope[7][2])
		return r2(Scope[7][2])
	}
	catch {}
	r2 = ACCU
	ACCU = null
	ACCU = Scope[9]
	r2 = Scope[7]
	return !Boolean([])
}
function func_listV4l2Devices_0x10000000f()
{
	r8 = Scope[1]
	Scope[10][2] = func_0x42fb_0x100000013
	ACCU = []
	r0 = []
	r9 = Scope[10]
	try
	{
		r12 = Scope[1][4]["readdirSync"]
		r12 = r12("/dev")
		r14 = 241
		r11 = r12["filter"]
		r13 = func_unknown_0x10000000d
		r11 = r11(func_unknown_0x10000000d)
		r2 = r11["sort"](func_unknown_0x10000000e)
		r11 = GetIterator(r2)
		r10 = r11["next"]
		ACCU = false
		r12 = false
		r15 = Scope[10]
		try
		{
			while (true)
			{
				r12 = true
				r16 = r10()
				if (r16["done"]) break
				r12 = false
				r4 = r16["value"]
				r5 = ("/dev/" + r16["value"])
				r6 = r16["value"]
				ACCU = r16["value"]
				r16 = r16["value"]
				r17 = Scope[10]
				try
				{
					r7 = (("/sys/class/video4linux/" + r4) + "/name")
					r18 = Scope[1][4]["existsSync"]
					ACCU = r18(r7)
					if (r18(r7))
					{
						r22 = "utf8"
						r19 = Scope[1][4]["readFileSync"](r7, r22)
						r18 = r19["trim"]
						ACCU = r18()
						if (!r18())
						{
							ACCU = r4
						}
						r6 = ACCU
					}
				}
				catch
				{
					r18 = ACCU
					ACCU = null
					ACCU = Scope[11]
					r18 = Scope[10]
				}
				r19 = new {"label": null, "name": null, "value": null}
				r20 = (r6 + " (")
				r20 = (r20 + r5)
				r19["label"] = (r20 + ")")
				r19["name"] = r6
				r19["value"] = r5
				ACCU = r0["push"](r19)
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
			r17 = Scope[10]
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
		ACCU = r13 === 0
		if (r13 === 0)
		{
			ACCU = r14
		}
	}
	catch
	{
		r10 = ACCU
		ACCU = null
		ACCU = Scope[12]
		r10 = Scope[10]
	}
	r9 = new {"video": null, "audio": []}
	r9["video"] = r0
	return r9
}
function func_unknown_0x10000000e(a0, a1)
{
	r1 = a0["slice"]
	r1 = r1(5)
	r0 = parseInt(r1)
	r2 = a1["slice"](5)
	return (r0 - parseInt(r2))
}
function func_unknown_0x10000000d(a0)
{
	r1 = \^video\\\\d+$\
	r0 = r1["test"]
	return r0(a0)
}
function func_0x5891_0x10000000c()
{
	r0 = Scope[1]
	Scope[13][2] = new ["ntC4ntC4nvfZs2PQEq", "C3rKzxjY", "zNbZ", "C2XPy2u", "C29YDa", "C3bSAxq", "ywX0tMfTzq", "zxHPC3rZu3LUyW", "ndiWntC2m1nVy2jsva", "ywrK", "Bwf4rNbZ", "lwHPzgvFyMfUBMvY", "BgvUz3rO", "z2v0", "y2fWCW", "mJuWmtu0mJrdueHYzvG", "zhnOB3C", "zM9YBwf0", "nte0nJuXmMvwsuX4zW", "BwfW", "y2HPBgrFChjVy2vZCW", "ChvZAa", "CgL4zwXFzM9YBwf0", "lwXPC3rFzgv2AwnLCW", "lwXPC3rFB3b0Aw9UCW", "lwXPC3rFzM9YBwf0CW", "y3DK", "DgvZDa", "odm2mte2Bxrpwg1M", "C2L6zxm", "Bwf0y2G", "BMfTzq", "l2rLDI8", "zxHLy1bHDgG", "DMLKzw89", "BwvZC2fNzq", "CMvHzgrPCLn5BMm", "CMvZB2X2zuzMBxbLzW", "mtq4nJq4m0PMyxz3Ba", "ndiWrLvRzMrf", "Dhj1zq", "C2L6zq", "zxjYB3i", "DJrSmG", "CM91BMq", "nZe3nZjnu0ffBMe", "Exv5DJqYmG", "A2LUza", "mti4mhG3mJa", "zxHWB3j0CW", "lwrLDMLJzxm", "zxHLyW", "l25HBwu", "Cgf0Aa", "BwLU", "CgL4zwXgB3jTyxrZ", "zM9YrwfJAa", "BwPWzwC", "y29KzwnZ", "Aw5JBhvKzxm", "zMLSDgvY", "DxrMoa", "zhvTBxK", "Dg9tDhjPBMC", "DhjPBq"]
	Scope[1][10] = func_0x5891_0x10000000b
	return Scope[1][10]()
}
function func_0x5891_0x10000000b()
{
	return Scope[13][2]
}
function func_listDshowDevices_0x10000000a()
{
	r11 = Scope[1]
	r12 = <closure>
	r13 = <this>
	ACCU = null
	r12 = Scope[14]
	try
	{
		Scope[14][2] = func_0x42fb_0x100000013
		if (!Scope[1][9])
		{
			r14 = func_listV4l2Devices_0x10000000f()
			r13 = Scope[14]
			return r14
		}
		r15 = new [0, 0, "true", "-f", 0, "-i", 0]
		r15[0] = "-hide_banner"
		r15[1] = "-list_devices"
		r15[4] = "dshow"
		r17 = 243
		r15[6] = "dummy"
		r14 = func_runFFmpeg_0x100000006(r15)
		r13 = Scope[14]
		r13 = await r14
		r14 = _GeneratorGetResumeMode(Scope[14])
		if (!r14 === 0)
		{
			ACCU = r13
		}
		r1 = r13
		r16 = 251
		r13 = r1["split"]
		r15 = \\\\\r?\\\\n\
		r2 = r13(r15)
		r3 = []
		r4 = []
		r5 = null
		r14 = GetIterator(r2)
		r13 = r14["next"]
		ACCU = false
		r15 = false
		r18 = Scope[14]
		try
		{
			while (true)
			{
				r15 = true
				r19 = r13()
				if (r19["done"]) break
				r15 = false
				r20 = r19["value"]["match"]
				r22 = \\"(.+)\"\\\\s*\\\\((video|audio)\\\\)\
				r10 = r20(r22)
				if (r20(r22))
				{
					r20 = new {"name": null, "kind": null, "altName": <null}
					r20["name"] = r10[1]
					r20["kind"] = r10[2]
					r5 = r20
					r21 = r10[2]
					ACCU = r21 === "video"
					if (r21 === "video")
					{
						ACCU = r3
					}
					else
					{
						ACCU = r4
					}
					r21 = ACCU
					ACCU = r21["push"](r5)
					continue
				}
				r20 = r19["value"]["match"]
				r22 = \Alternative name\\\\s+\"(.+)\\
				r10 = r20(r22)
				if (!r20(r22)) continue
				if (!r5) continue
				r5["altName"] = r10[1]
				ACCU = null
				r5 = null
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
			r20 = Scope[14]
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
		r13 = new {"video": null, "audio": null}
		r13["video"] = func_0x5d6c46_0x100000009(r3)
		r13["audio"] = func_0x5d6c46_0x100000009(r4)
		r14 = r13
		r13 = Scope[14]
		ACCU = r14
		return r14
	}
	catch {}
	r13 = ACCU
	ACCU = null
	ACCU = Scope[15]
	r13 = Scope[14]
	r14 = Scope[14]
	return Scope[15][2]
}
function func_0x5d6c46_0x100000009(a0)
{
	r0 = Scope[14]
	Scope[16][2] = func_0x42fb_0x100000013
	Scope[16][3] = {}
	r1 = a0["forEach"]
	ACCU = r1(func_unknown_0x100000007)
	Scope[16][4] = {}
	return a0["map"](func_unknown_0x100000008)
}
function func_unknown_0x100000008(a0)
{
	r1 = a0["name"]
	if (Scope[16][3][a0["name"]] > 1)
	{
		r3 = a0["name"]
		ACCU = Scope[16][4][a0["name"]]
		if (!Scope[16][4][a0["name"]])
		{
			ACCU = 0
		}
		Scope[16][4][r3] = (ACCU + 1)
		r2 = a0["name"]
		r2 = (r2 + " #")
		r1 = (r2 + Scope[16][4][a0["name"]])
	}
	r2 = new {"label": null, "name": null, "value": null}
	r2["label"] = r1
	r2["name"] = a0["name"]
	r3 = Scope[16][3][a0["name"]]
	if (r3 > 1)
	ACCU = a0["altName"]
		&& (a0["altName"])
	{
		ACCU = a0["altName"]
	}
	else
	{
		ACCU = a0["altName"]
		if (!a0["altName"])
		{
			ACCU = a0["name"]
		}
	}
	r2["value"] = ACCU
	return r2
}
function func_unknown_0x100000007(a0)
{
	r2 = a0["name"]
	ACCU = Scope[16][3][a0["name"]]
	if (!Scope[16][3][a0["name"]])
	{
		ACCU = 0
	}
	Scope[16][3][r2] = (ACCU + 1)
	return undefined
}
function func_runFFmpeg_0x100000006(a0, a1)
{
	r0 = Scope[1]
	Scope[17][3] = a0
	Scope[17][2] = a1
	Scope[17][4] = func_resolveFfmpegPath_0x100000000()
	ACCU = Promise
	return Promise(func_unknown_0x100000005)
}
function func_unknown_0x100000005(a0)
{
	r0 = Scope[17]
	Scope[18][2] = a0
	Scope[18][3] = func_0x42fb_0x100000013
	r4 = new {"windowsHide": null}
	r4["windowsHide"] = !(!Boolean([]))
	Scope[18][4] = Scope[1][3](Scope[17][4], Scope[17][3], r4)
	Scope[18][5] = ""
	ACCU = Scope[17][2]
	if (!Scope[17][2])
	{
		ACCU = 15000
	}
	r3 = ACCU
	Scope[18][6] = setTimeout(func_unknown_0x100000001, r3)
	r2 = Scope[18][4]["stderr"]
	ACCU = r2["on"]("data", func_unknown_0x100000002)
	ACCU = Scope[18][4]["on"]("close", func_unknown_0x100000003)
	r3 = "error"
	ACCU = Scope[18][4]["on"](r3, func_unknown_0x100000004)
	return undefined
}
function func_unknown_0x100000004(a0)
{
	ACCU = clearTimeout(Scope[18][6])
	r2 = ((Scope[18][5] + "\\n[spawn error] ") + a0["message"])
	ACCU = Scope[18][2](r2)
	return undefined
}
function func_unknown_0x100000003()
{
	ACCU = clearTimeout(Scope[18][6])
	ACCU = Scope[18][2](Scope[18][5])
	return undefined
}
function func_unknown_0x100000002(a0)
{
	r1 = a0["toString"]
	r1 = (Scope[18][5] + r1())
	ACCU = Scope[18][5]
	Scope[18][5] = r1
	return r1
}
function func_unknown_0x100000001()
{
	r0 = Scope[18]
	try
	{
		ACCU = Scope[18][4]["kill"]()
	}
	catch
	{
		r1 = ACCU
		ACCU = null
		ACCU = Scope[19]
		r1 = Scope[18]
	}
	return undefined
}
function func_resolveFfmpegPath_0x100000000()
{
	r1 = Scope[1][6]["resolveFfmpeg"]
	r3 = Scope[1][5]["get"]
	r3 = r3()
	return r1(r3["settings"]["ffmpegPath"])
}
