// Recovered module: src/devices.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (12445 source
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
let s3_2, s3_3, s3_4, s3_5, s3_6;
let s4_2;
let s5_2;
let s6_2;
let s7_2;
let s8_2;
let s10_2;
let s13_2;
let s14_2;
let s15_2;
let s16_2, s16_3, s16_4;
let s17_2, s17_3, s17_4;
let s18_2, s18_3, s18_4, s18_5, s18_6;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx5, ctx6, ctx7, ctx8, ctx9, ctx10, ctx11, ctx12, ctx14, ctx15, ctx17, ctx18, ctx19;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x10000001e(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x42fb_0x100000013
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(284)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(274)
			r4 = (r4 + ((-parseInt(r6)) / 2))
			r6 = r0(254)
			r4 = (r4 + (parseInt(r6) / 3))
			r6 = r0(264)
			r4 = (r4 + ((-parseInt(r6)) / 4))
			r6 = r0(246)
			r4 = (r4 + ((-parseInt(r6)) / 5))
			r6 = r0(291)
			r5 = (parseInt(r6) / 6)
			r7 = r0(285)
			r4 = (r4 + (r5 * (parseInt(r7) / 7)))
			r6 = r0(261)
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

async function func_recommendCaptureSettings_0x10000001d(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, accu;
	r9 = ctx1
	r10 = __closure
	r11 = this
	accu = func_0x4df574_0x100000019
	s3_6 = func_0x4df574_0x100000019
	r10 = ctx3
	try
	{
		s3_2 = func_0x42fb_0x100000013
		r12 = func_listDeviceOptions_0x100000017(a0)
		r11 = ctx3
		r11 = await r12
		r12 = _GeneratorGetResumeMode(ctx3)
		if (!r12 === 0)
		{
			accu = r11
		}
		r1 = r11
		accu = a1
		if (!a1)
		{
			accu = 30
		}
		s3_3 = accu
		s3_4 = func_0x59bbcd_0x10000001a
		s3_5 = 921600
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
		accu = r11(func_unknown_0x10000001c)
		r4 = r3[0]
		r5 = ""
		r6 = ""
		r7 = "1280x720"
		r8 = s3_3
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
			accu = r11(s3_3, r14)
			if (!r11(s3_3, r14))
			{
				accu = r4["maxFps"]
			}
			r8 = accu
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
			accu = r11(r13)
			if (r11(r13))
			{
				accu = "1280x720"
			}
			else
			{
				r11 = r1["sizes"]
				r12 = r1["sizes"]
				accu = r11[(r12["length"] - 1)]
				if (!r11[(r12["length"] - 1)])
				{
					accu = "1280x720"
				}
			}
			r7 = accu
			r12 = r1["fps"]
			r11 = r12["includes"]
			accu = r11(s3_3)
			if (r11(s3_3))
			{
				accu = s3_3
			}
			else
			{
				r11 = r1["fps"]
				r12 = r1["fps"]
				accu = r11[(r12["length"] - 1)]
				if (!r11[(r12["length"] - 1)])
				{
					accu = s3_3
				}
			}
			r8 = accu
		}
		r11 = {"pixelFormat": null, "vcodec": null, "videoSize": null, "fps": null, "detected": null}
		r11["pixelFormat"] = r5
		r11["vcodec"] = r6
		r11["videoSize"] = r7
		r11["fps"] = r8
		r12 = {"pixelFormats": null, "codecs": null, "sizes": null, "fps": null, "caps": null}
		r12["pixelFormats"] = r1["pixelFormats"]
		r12["codecs"] = r1["codecs"]
		r12["sizes"] = r1["sizes"]
		r12["fps"] = r1["fps"]
		r12["caps"] = r1["caps"]
		r11["detected"] = r12
		r12 = r11
		r11 = ctx3
		accu = r12
		return r12
	}
	catch {}
	r11 = accu
	accu = null
	accu = ctx4
	r11 = ctx3
	r12 = ctx3
	return s4_2
}

function func_unknown_0x10000001c(a0, a1)
{
	let r0;
	r0 = func_0x4df574_0x100000019(a1)
	return (r0 - func_0x4df574_0x100000019(a0))
}

function func_unknown_0x10000001b(a0)
{
	let r0;
	r0 = a0["maxFps"]
	return r0 >= s3_3
}

function func_0x59bbcd_0x10000001a(a0)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r7 = 251
	r4 = a0["split"]
	r4 = r4("x")
	r3 = r4["map"]
	r3 = r3(Number)
	r5 = GetIterator(r3)
	accu = false
	r6 = false
	r9 = ctx3
	try
	{
		if (((!false) && (r6 = true, r10 = r5["next"](), accu = r10["done"], (!r10["done"]))))
		{
			r6 = false
			accu = r10["value"]
		}
		else
		{
			accu = undefined
		}
		r1 = accu
		if (((!r6) && (r6 = true, r10 = r5["next"](), accu = r10["done"], (!r10["done"]))))
		{
			r6 = false
			accu = r10["value"]
		}
		else
		{
			accu = undefined
		}
		r2 = accu
		accu = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = accu
		r7 = 0
	}
	if (!r6)
	{
		r11 = ctx3
		try
		{
			if (!r5["return"] == undefined)
			{
				accu = r5["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r7 === 0)
	{
		accu = r8
	}
	return (r1 * r2)
}

function func_0x4df574_0x100000019(a0)
{
	let r1, r2, r3, r4, r5;
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
	let r0, r1, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r23, r24, accu;
	r0 = func_0x42fb_0x100000013
	r1 = []
	r14 = 251
	r11 = a0["split"]
	r13 = new RegExp("\\r?\\n")
	r13 = r11(r13)
	r12 = GetIterator(r13)
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
			r18 = r17["value"][r0(276)]
			r20 = new RegExp("(pixel_format|vcodec)=(\\w+)")
			r5 = r18(r20)
			if (!r18(r20))
			{
				continue
			}
			r6 = r5[1]
			r7 = r5[2]
			r18 = r17["value"][r0(276)]
			r20 = new RegExp("max s=(\\d+x\\d+) fps=([\\d.]+)", "g")
			r8 = r18(r20)
			r18 = r17["value"][r0(276)]
			r20 = new RegExp("min s=(\\d+x\\d+) fps=([\\d.]+)")
			r9 = r18(r20)
			if (r8)
			{
				r18 = r1[r0(267)]
				r20 = {"kind": null, "format": null, "size": null, "maxFps": null, "minFps": null}
				r20["kind"] = r6
				r20["format"] = r7
				r20["size"] = r8[1]
				r21 = Math[r0(290)]
				r24 = r8[2]
				r23 = parseFloat(r24)
				r20["maxFps"] = r21(r23)
				accu = r9
				r19 = r1
				if (r9)
				{
					r21 = Math[r0(290)]
					r24 = r9[2]
					r23 = parseFloat(r24)
					accu = r21(r23)
				}
				else
				{
					accu = 1
				}
				r20["minFps"] = accu
				accu = r18(r20)
			}
			if (r9)
			{
				accu = !Boolean(r8)
				if (!!Boolean(r8))
				{
					r18 = r9[1]
					accu = !(r18 === r8[1])
				}
				if (accu)
				{
					r20 = {"kind": null, "format": null, "size": null, "maxFps": null, "minFps": 1}
					r20["kind"] = r6
					r20["format"] = r7
					r20["size"] = r9[1]
					r24 = r9[2]
					r23 = parseFloat(r24)
					r20["maxFps"] = Math["round"](r23)
					accu = r1["push"](r20)
				}
			}
			r18 = r17["value"][r0(276)]
			r20 = new RegExp("[^a-z]s=(\\d+x\\d+)\\s+fps=([\\d.]+)")
			r10 = r18(r20)
			if (!r18(r20)) continue
			if (!!Boolean(r8)) continue
			if (!!Boolean(r9)) continue
			r18 = r1[r0(267)]
			r20 = {"kind": null, "format": null, "size": null, "maxFps": null, "minFps": 1}
			r20["kind"] = r6
			r20["format"] = r7
			r20["size"] = r10[1]
			r21 = Math[r0(290)]
			r24 = r10[2]
			r23 = parseFloat(r24)
			r20["maxFps"] = r21(r23)
			accu = r18(r20)
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
	return r1
}

async function func_listDeviceOptions_0x100000017(a0)
{
	let r1, r2, r3, r4, r5, r6, r8, r9, r10, r11, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r34, accu;
	r23 = ctx1
	r24 = __closure
	r25 = this
	accu = null
	r24 = ctx5
	try
	{
		s5_2 = func_0x42fb_0x100000013
		if (!s1_9)
		{
			r26 = new RegExp("^\\/dev\\/")
			r25 = r26["test"]
			accu = r25(a0)
			if (r25(a0))
			{
				accu = a0
			}
			else
			{
				r25 = "/dev/"
				accu = a0
				if (!a0)
				{
					accu = "video0"
				}
				accu = (r25 + accu)
			}
			r16 = accu
			r27 = [0, "-f", 0, 0, "all", "-i", 0]
			r27[0] = "-hide_banner"
			r27[2] = "v4l2"
			r27[3] = "-list_formats"
			r27[6] = r16
			r26 = r27
			r26 = func_runFFmpeg_0x100000006(r26, 8000)
			r25 = ctx5
			r25 = await r26
			r26 = _GeneratorGetResumeMode(ctx5)
			if (!r26 === 0)
			{
				accu = r25
			}
			r17 = r25
			r18 = Set(ctx5)
			r19 = new RegExp("(\\d{3,4}x\\d{3,4})", "g")
			r20 = undefined
			while (true)
			{
				r25 = r19["exec"]
				r20 = r25(r17)
				if (r25(r17) == null) break
				r27 = r20[1]
				accu = r18["add"](r27)
			}
			r26 = new RegExp("yuyv422", "i")
			r25 = r26["test"]
			accu = r25(r17)
			if (r25(r17))
			{
				accu = ["yuyv422"]
			}
			else
			{
				accu = []
			}
			r21 = accu
			r26 = new RegExp("mjpeg|Motion-JPEG", "i")
			r25 = r26["test"]
			accu = r25(r17)
			if (r25(r17))
			{
				r26 = [0]
				r25 = 0
				r26[0] = "mjpeg"
				accu = r26
			}
			else
			{
				accu = []
			}
			r22 = accu
			r25 = {"sizes": null, "fps": [], "pixelFormats": null, "codecs": null, "caps": []}
			r27 = Array.from(r18)
			r26 = r27["sort"]
			r25["sizes"] = r26(func_unknown_0x100000014)
			r25["pixelFormats"] = r21
			r25["codecs"] = r22
			r26 = r25
			r25 = ctx5
			return r26
		}
		r27 = [0, "-f", 0, 0, "true", "-i", 0]
		r27[0] = "-hide_banner"
		r27[2] = "dshow"
		r27[3] = "-list_options"
		r29 = 280
		r28 = "video="
		r27[6] = (r28 + a0)
		r26 = func_runFFmpeg_0x100000006(r27)
		r25 = ctx5
		r25 = await r26
		r26 = _GeneratorGetResumeMode(ctx5)
		if (!r26 === 0)
		{
			accu = r25
		}
		r1 = r25
		r2 = Set(ctx5)
		r3 = Set(ctx5)
		r4 = Set(ctx5)
		r5 = Set(ctx5)
		r28 = 251
		r25 = r1["split"]
		r27 = new RegExp("\\r?\\n")
		r6 = r25(r27)
		r26 = GetIterator(r6)
		r25 = r26["next"]
		accu = false
		r27 = false
		r30 = ctx5
		try
		{
			while (true)
			{
				r27 = true
				r31 = r25()
				if (r31["done"]) break
				r27 = false
				r32 = r31["value"]["match"]
				r34 = new RegExp("pixel_format=(\\w+)")
				r14 = r32(r34)
				if (r32(r34))
				{
					r34 = r14[1]
					accu = r4["add"](r34)
				}
				r32 = r31["value"]["match"]
				r34 = new RegExp("vcodec=(\\w+)")
				r15 = r32(r34)
				if (!r32(r34)) continue
				r32 = r5["add"]
				r34 = r15[1]
				accu = r32(r34)
			}
			accu = -1
			r29 = -1
			r28 = -1
		}
		catch
		{
			r29 = accu
			r28 = 0
		}
		if (!r27)
		{
			r32 = ctx5
			try
			{
				if (!r26["return"] == undefined)
				{
					accu = r26["return"]()
				}
			}
			catch {}
		}
		accu = null
		if (r28 === 0)
		{
			accu = r29
		}
		r8 = new RegExp("s=(\\d+x\\d+)\\s+fps=([\\d.]+)", "g")
		r9 = undefined
		while (true)
		{
			r25 = r8["exec"]
			r9 = r25(r1)
			if (r25(r1) == null) break
			r25 = r2["add"]
			r27 = r9[1]
			accu = r25(r27)
			r25 = r3["add"]
			r27 = Math["round"]
			r30 = r9[2]
			r29 = parseFloat(r30)
			r27 = r27(r29)
			accu = r25(r27)
		}
		r10 = new RegExp("max s=(\\d+x\\d+) fps=([\\d.]+)")
		while (true)
		{
			r9 = r10["exec"](r1)
			if (r10["exec"](r1) == null) break
			r25 = r2["add"]
			r27 = r9[1]
			accu = r25(r27)
			r25 = r3["add"]
			r27 = Math["round"]
			r30 = r9[2]
			r29 = parseFloat(r30)
			r27 = r27(r29)
			accu = r25(r27)
		}
		r26 = Array.from(r2)
		r25 = r26["sort"]
		r11 = r25(func_unknown_0x100000015)
		r25 = {"sizes": null, "fps": null, "pixelFormats": null, "codecs": null, "caps": null}
		r25["sizes"] = r11
		r27 = Array.from(r3)
		r26 = r27["sort"]
		r25["fps"] = r26(func_unknown_0x100000016)
		r25["pixelFormats"] = Array.from(r4)
		r25["codecs"] = Array.from(r5)
		r25["caps"] = func_parseCaps_0x100000018(r1)
		r26 = r25
		r25 = ctx5
		accu = r26
		return r26
	}
	catch {}
	r25 = accu
	accu = null
	accu = ctx6
	r25 = ctx5
	r26 = ctx5
	return s6_2
}

function func_unknown_0x100000016(a0, a1)
{
	return (a0 - a1)
}

function func_unknown_0x100000015(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r7 = 251
	r4 = a0["split"]
	r4 = r4("x")
	r3 = r4["map"]
	r3 = r3(Number)
	r5 = GetIterator(r3)
	accu = false
	r6 = false
	r9 = ctx5
	try
	{
		if (((!false) && (r6 = true, r10 = r5["next"](), accu = r10["done"], (!r10["done"]))))
		{
			r6 = false
			accu = r10["value"]
		}
		else
		{
			accu = undefined
		}
		r1 = accu
		accu = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = accu
		r7 = 0
	}
	if (!r6)
	{
		r11 = ctx5
		try
		{
			if (!r5["return"] == undefined)
			{
				accu = r5["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r7 === 0)
	{
		accu = r8
	}
	r7 = 251
	r4 = a1["split"]
	r4 = r4("x")
	r3 = r4["map"]
	r3 = r3(Number)
	r5 = GetIterator(r3)
	accu = false
	r6 = false
	r9 = ctx5
	try
	{
		if (((!false) && (r6 = true, r10 = r5["next"](), accu = r10["done"], (!r10["done"]))))
		{
			r6 = false
			accu = r10["value"]
		}
		else
		{
			accu = undefined
		}
		r2 = accu
		accu = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = accu
		r7 = 0
	}
	if (!r6)
	{
		r11 = ctx5
		try
		{
			if (!r5["return"] == undefined)
			{
				accu = r5["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r7 === 0)
	{
		accu = r8
	}
	return (r1 - r2)
}

function func_unknown_0x100000014(a0, a1)
{
	let r0;
	r0 = parseInt(a0)
	return (r0 - parseInt(a1))
}

function func_0x42fb_0x100000013(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 236)
	r0 = s1_10()
	r1 = r0[a0]
	if (s1_12["GuzzED"] == undefined)
	{
		s1_12["vbNCvO"] = func_0x5bb52f_0x100000012
		s1_12["hzqkKQ"] = {}
		s1_12["GuzzED"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_12["hzqkKQ"][r4])
	{
		r1 = s1_12["vbNCvO"](r1)
		s1_12["hzqkKQ"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_12["hzqkKQ"][r4]
	}
	return r1
}

function func_0x5bb52f_0x100000012(a0)
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

async function func_diagnose_0x100000011()
{
	let r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r7 = ctx1
	r8 = __closure
	r9 = this
	accu = null
	r8 = ctx7
	try
	{
		s7_2 = func_resolveFfmpegPath_0x100000000()
		r2 = func_unknown_0x100000010()
		r11 = ["-hide_banner", 0, 0, "-f", 0, "-i", 0]
		r11[1] = "-list_devices"
		r11[2] = "true"
		r11[4] = "dshow"
		r11[6] = "dummy"
		r10 = func_runFFmpeg_0x100000006(r11)
		r9 = ctx7
		r9 = await r10
		r10 = _GeneratorGetResumeMode(ctx7)
		if (!r10 === 0)
		{
			accu = r9
		}
		r3 = r9
		r11 = ["-hide_banner", 0]
		r11[1] = "-devices"
		r10 = func_runFFmpeg_0x100000006(r11)
		r9 = ctx7
		r9 = await r10
		r10 = _GeneratorGetResumeMode(ctx7)
		if (!r10 === 0)
		{
			accu = r9
		}
		r4 = r9
		r10 = new RegExp("dshow", "i")
		r9 = r10["test"]
		r5 = r9(r4)
		r10 = new RegExp("\\((video|audio)\\)", "i")
		accu = r10["test"](r3)
		if (!r10["test"](r3))
		{
			r10 = new RegExp("Alternative name", "i")
			r9 = r10["test"]
			accu = r9(r3)
		}
		r6 = accu
		r9 = {"ffmpegPath": null, "ffmpegExists": null, "execPath": null, "cwd": null, "supportsDshow": null, "rawDeviceOutput": null, "rawDevicesList": null}
		r9["ffmpegPath"] = s7_2
		r9["ffmpegExists"] = r2
		r9["execPath"] = process["execPath"]
		r10 = process["cwd"]
		r9["cwd"] = r10()
		accu = r5
		if (!r5)
		{
			accu = r6
		}
		r9["supportsDshow"] = accu
		accu = r3
		if (!r3)
		{
			accu = ""
		}
		r11 = accu
		r10 = r11["slice"]
		r9["rawDeviceOutput"] = r10(0, 4000)
		accu = r4
		if (!r4)
		{
			accu = ""
		}
		r11 = accu
		r10 = r11["slice"]
		r9["rawDevicesList"] = r10(0, 2000)
		r10 = r9
		r9 = ctx7
		accu = r10
		return r10
	}
	catch {}
	r9 = accu
	accu = null
	accu = ctx8
	r9 = ctx7
	r10 = ctx7
	return s8_2
}

function func_unknown_0x100000010()
{
	let r1, r2, accu;
	accu = func_0x42fb_0x100000013
	r1 = ctx7
	try
	{
		r2 = s1_4["existsSync"]
		accu = r2(s7_2)
		return r2(s7_2)
	}
	catch {}
	r2 = accu
	accu = null
	accu = ctx9
	r2 = ctx7
	return !Boolean([])
}

function func_listV4l2Devices_0x10000000f()
{
	let r0, r2, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r22, accu;
	r8 = ctx1
	s10_2 = func_0x42fb_0x100000013
	accu = []
	r0 = []
	r9 = ctx10
	try
	{
		r12 = s1_4["readdirSync"]
		r12 = r12("/dev")
		r14 = 241
		r11 = r12["filter"]
		r13 = func_unknown_0x10000000d
		r11 = r11(func_unknown_0x10000000d)
		r2 = r11["sort"](func_unknown_0x10000000e)
		r11 = GetIterator(r2)
		r10 = r11["next"]
		accu = false
		r12 = false
		r15 = ctx10
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
				accu = r16["value"]
				r16 = r16["value"]
				r17 = ctx10
				try
				{
					r7 = (("/sys/class/video4linux/" + r4) + "/name")
					r18 = s1_4["existsSync"]
					accu = r18(r7)
					if (r18(r7))
					{
						r22 = "utf8"
						r19 = s1_4["readFileSync"](r7, r22)
						r18 = r19["trim"]
						accu = r18()
						if (!r18())
						{
							accu = r4
						}
						r6 = accu
					}
				}
				catch
				{
					r18 = accu
					accu = null
					accu = ctx11
					r18 = ctx10
				}
				r19 = {"label": null, "name": null, "value": null}
				r20 = (r6 + " (")
				r20 = (r20 + r5)
				r19["label"] = (r20 + ")")
				r19["name"] = r6
				r19["value"] = r5
				accu = r0["push"](r19)
			}
			accu = -1
			r14 = -1
			r13 = -1
		}
		catch
		{
			r14 = accu
			r13 = 0
		}
		if (!r12)
		{
			r17 = ctx10
			try
			{
				if (!r11["return"] == undefined)
				{
					accu = r11["return"]()
				}
			}
			catch {}
		}
		accu = null
		accu = r13 === 0
		if (r13 === 0)
		{
			accu = r14
		}
	}
	catch
	{
		r10 = accu
		accu = null
		accu = ctx12
		r10 = ctx10
	}
	r9 = {"video": null, "audio": []}
	r9["video"] = r0
	return r9
}

function func_unknown_0x10000000e(a0, a1)
{
	let r0, r1, r2;
	r1 = a0["slice"]
	r1 = r1(5)
	r0 = parseInt(r1)
	r2 = a1["slice"](5)
	return (r0 - parseInt(r2))
}

function func_unknown_0x10000000d(a0)
{
	let r0, r1;
	r1 = new RegExp("^video\\d+$")
	r0 = r1["test"]
	return r0(a0)
}

function func_0x5891_0x10000000c()
{
	let r0;
	r0 = ctx1
	s13_2 = ["ntC4ntC4nvfZs2PQEq", "C3rKzxjY", "zNbZ", "C2XPy2u", "C29YDa", "C3bSAxq", "ywX0tMfTzq", "zxHPC3rZu3LUyW", "ndiWntC2m1nVy2jsva", "ywrK", "Bwf4rNbZ", "lwHPzgvFyMfUBMvY", "BgvUz3rO", "z2v0", "y2fWCW", "mJuWmtu0mJrdueHYzvG", "zhnOB3C", "zM9YBwf0", "nte0nJuXmMvwsuX4zW", "BwfW", "y2HPBgrFChjVy2vZCW", "ChvZAa", "CgL4zwXFzM9YBwf0", "lwXPC3rFzgv2AwnLCW", "lwXPC3rFB3b0Aw9UCW", "lwXPC3rFzM9YBwf0CW", "y3DK", "DgvZDa", "odm2mte2Bxrpwg1M", "C2L6zxm", "Bwf0y2G", "BMfTzq", "l2rLDI8", "zxHLy1bHDgG", "DMLKzw89", "BwvZC2fNzq", "CMvHzgrPCLn5BMm", "CMvZB2X2zuzMBxbLzW", "mtq4nJq4m0PMyxz3Ba", "ndiWrLvRzMrf", "Dhj1zq", "C2L6zq", "zxjYB3i", "DJrSmG", "CM91BMq", "nZe3nZjnu0ffBMe", "Exv5DJqYmG", "A2LUza", "mti4mhG3mJa", "zxHWB3j0CW", "lwrLDMLJzxm", "zxHLyW", "l25HBwu", "Cgf0Aa", "BwLU", "CgL4zwXgB3jTyxrZ", "zM9YrwfJAa", "BwPWzwC", "y29KzwnZ", "Aw5JBhvKzxm", "zMLSDgvY", "DxrMoa", "zhvTBxK", "Dg9tDhjPBMC", "DhjPBq"]
	s1_10 = func_0x5891_0x10000000b
	return s1_10()
}

function func_0x5891_0x10000000b()
{
	return s13_2
}

async function func_listDshowDevices_0x10000000a()
{
	let r1, r2, r3, r4, r5, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, accu;
	r11 = ctx1
	r12 = __closure
	r13 = this
	accu = null
	r12 = ctx14
	try
	{
		s14_2 = func_0x42fb_0x100000013
		if (!s1_9)
		{
			r14 = func_listV4l2Devices_0x10000000f()
			r13 = ctx14
			return r14
		}
		r15 = [0, 0, "true", "-f", 0, "-i", 0]
		r15[0] = "-hide_banner"
		r15[1] = "-list_devices"
		r15[4] = "dshow"
		r17 = 243
		r15[6] = "dummy"
		r14 = func_runFFmpeg_0x100000006(r15)
		r13 = ctx14
		r13 = await r14
		r14 = _GeneratorGetResumeMode(ctx14)
		if (!r14 === 0)
		{
			accu = r13
		}
		r1 = r13
		r16 = 251
		r13 = r1["split"]
		r15 = new RegExp("\\r?\\n")
		r2 = r13(r15)
		r3 = []
		r4 = []
		r5 = null
		r14 = GetIterator(r2)
		r13 = r14["next"]
		accu = false
		r15 = false
		r18 = ctx14
		try
		{
			while (true)
			{
				r15 = true
				r19 = r13()
				if (r19["done"]) break
				r15 = false
				r20 = r19["value"]["match"]
				r22 = new RegExp("\"(.+)\"\\s*\\((video|audio)\\)")
				r10 = r20(r22)
				if (r20(r22))
				{
					r20 = {"name": null, "kind": null, "altName": null}
					r20["name"] = r10[1]
					r20["kind"] = r10[2]
					r5 = r20
					r21 = r10[2]
					accu = r21 === "video"
					if (r21 === "video")
					{
						accu = r3
					}
					else
					{
						accu = r4
					}
					r21 = accu
					accu = r21["push"](r5)
					continue
				}
				r20 = r19["value"]["match"]
				r22 = new RegExp("Alternative name\\s+\"(.+)\"")
				r10 = r20(r22)
				if (!r20(r22)) continue
				if (!r5) continue
				r5["altName"] = r10[1]
				accu = null
				r5 = null
			}
			accu = -1
			r17 = -1
			r16 = -1
		}
		catch
		{
			r17 = accu
			r16 = 0
		}
		if (!r15)
		{
			r20 = ctx14
			try
			{
				if (!r14["return"] == undefined)
				{
					accu = r14["return"]()
				}
			}
			catch {}
		}
		accu = null
		if (r16 === 0)
		{
			accu = r17
		}
		r13 = {"video": null, "audio": null}
		r13["video"] = func_0x5d6c46_0x100000009(r3)
		r13["audio"] = func_0x5d6c46_0x100000009(r4)
		r14 = r13
		r13 = ctx14
		accu = r14
		return r14
	}
	catch {}
	r13 = accu
	accu = null
	accu = ctx15
	r13 = ctx14
	r14 = ctx14
	return s15_2
}

function func_0x5d6c46_0x100000009(a0)
{
	let r0, r1, accu;
	r0 = ctx14
	s16_2 = func_0x42fb_0x100000013
	s16_3 = {}
	r1 = a0["forEach"]
	accu = r1(func_unknown_0x100000007)
	s16_4 = {}
	return a0["map"](func_unknown_0x100000008)
}

function func_unknown_0x100000008(a0)
{
	let r1, r2, r3, accu;
	r1 = a0["name"]
	if (s16_3[a0["name"]] > 1)
	{
		r3 = a0["name"]
		accu = s16_4[a0["name"]]
		if (!s16_4[a0["name"]])
		{
			accu = 0
		}
		s16_4[r3] = (accu + 1)
		r2 = a0["name"]
		r2 = (r2 + " #")
		r1 = (r2 + s16_4[a0["name"]])
	}
	r2 = {"label": null, "name": null, "value": null}
	r2["label"] = r1
	r2["name"] = a0["name"]
	r3 = s16_3[a0["name"]]
	if (((r3 > 1) && (accu = a0["altName"], (a0["altName"]))))
	{
		accu = a0["altName"]
	}
	else
	{
		accu = a0["altName"]
		if (!a0["altName"])
		{
			accu = a0["name"]
		}
	}
	r2["value"] = accu
	return r2
}

function func_unknown_0x100000007(a0)
{
	let r2, accu;
	r2 = a0["name"]
	accu = s16_3[a0["name"]]
	if (!s16_3[a0["name"]])
	{
		accu = 0
	}
	s16_3[r2] = (accu + 1)
	return undefined
}

function func_runFFmpeg_0x100000006(a0, a1)
{
	let r0, accu;
	r0 = ctx1
	s17_3 = a0
	s17_2 = a1
	s17_4 = func_resolveFfmpegPath_0x100000000()
	accu = Promise
	return Promise(func_unknown_0x100000005)
}

function func_unknown_0x100000005(a0)
{
	let r0, r2, r3, r4, accu;
	r0 = ctx17
	s18_2 = a0
	s18_3 = func_0x42fb_0x100000013
	r4 = {"windowsHide": null}
	r4["windowsHide"] = !(!Boolean([]))
	s18_4 = s1_3(s17_4, s17_3, r4)
	s18_5 = ""
	accu = s17_2
	if (!s17_2)
	{
		accu = 15000
	}
	r3 = accu
	s18_6 = setTimeout(func_unknown_0x100000001, r3)
	r2 = s18_4["stderr"]
	accu = r2["on"]("data", func_unknown_0x100000002)
	accu = s18_4["on"]("close", func_unknown_0x100000003)
	r3 = "error"
	accu = s18_4["on"](r3, func_unknown_0x100000004)
	return undefined
}

function func_unknown_0x100000004(a0)
{
	let r2, accu;
	accu = clearTimeout(s18_6)
	r2 = ((s18_5 + "\\n[spawn error] ") + a0["message"])
	accu = s18_2(r2)
	return undefined
}

function func_unknown_0x100000003()
{
	let accu;
	accu = clearTimeout(s18_6)
	accu = s18_2(s18_5)
	return undefined
}

function func_unknown_0x100000002(a0)
{
	let r1, accu;
	r1 = a0["toString"]
	r1 = (s18_5 + r1())
	accu = s18_5
	s18_5 = r1
	return r1
}

function func_unknown_0x100000001()
{
	let r0, r1, accu;
	r0 = ctx18
	try
	{
		accu = s18_4["kill"]()
	}
	catch
	{
		r1 = accu
		accu = null
		accu = ctx19
		r1 = ctx18
	}
	return undefined
}

function func_resolveFfmpegPath_0x100000000()
{
	let r1, r3;
	r1 = s1_6["resolveFfmpeg"]
	r3 = s1_5["get"]
	r3 = r3()
	return r1(r3["settings"]["ffmpegPath"])
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r0, r4, r5, r6, r7, accu;
	r4 = ctx0
	s1_7 = func_resolveFfmpegPath_0x100000000
	s1_8 = func_runFFmpeg_0x100000006
	s1_10 = func_0x5891_0x10000000c
	s1_11 = func_listV4l2Devices_0x10000000f
	s1_12 = func_0x42fb_0x100000013
	s1_13 = func_listDeviceOptions_0x100000017
	s1_14 = func_parseCaps_0x100000018
	s1_2 = func_0x42fb_0x100000013
	accu = func_unknown_0x10000001e(s1_10, 898243)
	r6 = "child_process"
	r5 = require(r6)
	s1_3 = r5["spawn"]
	r6 = "path"
	r0 = require(r6)
	s1_4 = require("fs")
	s1_5 = require("./store")
	s1_6 = require("./platform")
	s1_9 = s1_6["isWindows"]
	r6 = "exports"
	r7 = {"listDshowDevices": null, "listDeviceOptions": null, "recommendCaptureSettings": null, "diagnose": null}
	r7["listDshowDevices"] = func_listDshowDevices_0x10000000a
	r7["listDeviceOptions"] = func_listDeviceOptions_0x100000017
	r7["recommendCaptureSettings"] = func_recommendCaptureSettings_0x10000001d
	r7["diagnose"] = func_diagnose_0x100000011
	module[r6] = r7
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
