// Recovered module: server.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (12909 source
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
//   RegExp    a recovered source string (flags are not recovered by this emitter)

// ----------------------------------------------------------------------------------------
// Context slots shared by this module's functions (V8's Scope[n][m]).
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14, s1_15, s1_16, s1_17, s1_18;
let s2_2;
let s4_2;
let s5_2;
let s8_2;
let s10_2;
let s11_2, s11_3;
let s12_2;
let s14_2;
let s15_2;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx6, ctx7, ctx8, ctx9, ctx11, ctx13, ctx14;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

async function func_unknown_0x100000015()
{
	let r1, r2, r3, r4, r5, r6, r7, accu;
	r2 = ctx1
	r3 = __closure
	r4 = this
	accu = null
	r3 = ctx2
	try
	{
		s2_2 = func_0x37a5_0x100000008
		r4 = s1_11["ensureTrial"]
		r5 = r4()
		r4 = ctx2
		r4 = await r5
		r5 = _GeneratorGetResumeMode(ctx2)
		if (!r5 === 0)
		{
			accu = r4
		}
		r5 = s1_11
		r4 = s1_11["startRevalidationLoop"]
		accu = r4()
		r4 = ctx2
		try
		{
			r6 = s1_3("./src/onlinechannels")
			r7 = !(!Boolean([]))
			r6 = r6["refreshImportedUrls"](r7)
			r5 = ctx2
			r5 = await r6
			r6 = _GeneratorGetResumeMode(ctx2)
			if (!r6 === 0)
			{
				accu = r5
			}
			r1 = r5
			accu = r1
			if (r1)
			{
				if (r1["updated"])
				{
					r5 = console["log"]
					r7 = "[أونلاين] تم تحديث روابط "
					r7 = (r7 + r1["updated"])
					r7 = (r7 + " قناة من خادم الترخيص")
					accu = r5(r7)
				}
			}
		}
		catch
		{
			r5 = accu
			accu = null
			accu = ctx3
			r5 = ctx2
		}
		r4 = s1_9["startLoop"]
		accu = r4()
		r4 = s1_10["startLoop"]
		r6 = s1_12["viewerCount"]
		accu = r4(r6)
		r4 = s1_8["startupQueue"]
		accu = r4()
		accu = setInterval(func_unknown_0x100000014, 1800000)
		r5 = undefined
		r4 = ctx2
		accu = r5
		return r5
	}
	catch {}
	r4 = accu
	accu = null
	accu = ctx4
	r4 = ctx2
	r5 = ctx2
	return s4_2
}

function func_unknown_0x100000014()
{
	let r0, r1, r2, r3, r4, r5, accu;
	r0 = ctx2
	s5_2 = func_0x37a5_0x100000008
	r4 = s1_3("./src/onlinechannels")
	r3 = r4["refreshImportedUrls"]
	r5 = !(!Boolean([]))
	r3 = r3(r5)
	r2 = r3["then"]
	r2 = r2(func_unknown_0x100000012)
	r1 = r2["catch"]
	accu = r1(func_unknown_0x100000013)
	return undefined
}

function func_unknown_0x100000013()
{
	return undefined
}

function func_unknown_0x100000012(a0)
{
	let r1, r3, accu;
	if (a0)
	{
		if (a0["updated"])
		{
			r1 = console["log"]
			r3 = "[أونلاين] مزامنة دورية: تحدّثت روابط "
			r3 = (r3 + a0["updated"])
			r3 = (r3 + " قناة")
			accu = r1(r3)
		}
	}
	return undefined
}

function func_unknown_0x100000011(a0, a1, a2, a3)
{
	let r1, r2, r3, accu;
	r1 = console["error"]
	accu = r1(a0)
	r2 = a2["status"]
	r2 = r2(500)
	r3 = {"ok": null, "message": null}
	r3["ok"] = !Boolean([])
	r3["message"] = "خطأ داخلي في الخادم"
	accu = r2["json"](r3)
	return undefined
}

function func_unknown_0x100000010(a0, a1, a2, a3)
{
	let r1, r2, accu;
	if (a0)
	{
		r1 = a0["code"]
		if ((((r1 === "EPERM") || ((a0["code"] === "ENOENT"))) || (r1 = a0["code"], (r1 === "EBUSY"))))
		{
			accu = a2["headersSent"]
			if (!a2["headersSent"])
			{
				r2 = a2["status"]
				r2 = r2(404)
				accu = r2["end"]()
			}
			else
			{
				r1 = ctx1
				try
				{
					accu = a2["end"]()
				}
				catch
				{
					r2 = accu
					accu = null
					accu = ctx6
					r2 = ctx1
				}
			}
			return undefined
		}
	}
	accu = a3(a0)
	return undefined
}

function func_unknown_0x10000000f(a0, a1, a2)
{
	let r1, r2, r3, r4, r5, accu;
	r2 = a1["setHeader"]
	accu = r2("Access-Control-Allow-Origin", "*")
	r3 = a0["path"]
	r4 = new RegExp("^\\/([^/]+)\\/")
	r1 = r3["match"](r4)
	if (r3["match"](r4))
	{
		r2 = s1_8["noteHlsAccess"]
		r4 = r1[1]
		accu = r2(r4, a0["ip"])
	}
	r3 = a0["path"]
	r2 = r3["endsWith"]
	if (r2(".m3u8"))
	{
		r2 = a1["setHeader"]
		r4 = "Content-Type"
		r5 = "application/vnd.apple.mpegurl"
		accu = r2(r4, r5)
		r2 = a1["setHeader"]
		r4 = "Cache-Control"
		accu = r2(r4, "no-cache")
		accu = r1
		if (r1)
		{
			r2 = ctx1
			try
			{
				r5 = r1[1]
				accu = s1_10["onViewerHeartbeat"](r5)
			}
			catch
			{
				r3 = accu
				accu = null
				accu = ctx7
				r3 = ctx1
			}
		}
	}
	else
	{
		r3 = a0["path"]
		if (r3["endsWith"](".ts"))
		{
			r2 = a1["setHeader"]
			r4 = "Content-Type"
			accu = r2(r4, "video/mp2t")
			r5 = "public, max-age=31536000, immutable"
			accu = a1["setHeader"]("Cache-Control", r5)
		}
	}
	accu = a2()
	return undefined
}

function func_loadAndroidEnv_0x10000000e()
{
	let r0, r2, r3, r4, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, accu;
	accu = func_0x37a5_0x100000008
	r8 = ctx1
	try
	{
		r2 = s1_3("fs")
		r10 = process["argv"]
		r12 = 264
		r9 = r10["slice"]
		r11 = r9(2)
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
				r17 = new RegExp("^--([^=]+)=(.*)$")
				accu = r17["exec"](r15["value"])
				r7 = r17["exec"](r15["value"])
				r15 = r15["value"]
				if (!accu)
				{
					continue
				}
				r16 = r7[1]
				if (r16 === r0(271))
				{
					r16 = process[r0(256)]
					r17 = r0(263)
					r16[r17] = r7[2]
					continue
				}
				r16 = r7[1]
				if (r16 === r0(250))
				{
					r16 = process[r0(256)]
					r17 = r0(278)
					r16[r17] = r7[2]
					continue
				}
				r16 = r7[1]
				if (r16 === "ffprobe")
				{
					r16 = process[r0(256)]
					r17 = r0(277)
					r16[r17] = r7[2]
					continue
				}
				r16 = r7[1]
				if (!r16 === "hw") continue
				r16 = process[r0(256)]
				r17 = r0(193)
				accu = r7[2]
				r16[r17] = r7[2]
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
		r9 = s1_6["join"]
		r12 = "android-env.json"
		r3 = r9(s1_2, r12)
		accu = r2["existsSync"](r3)
		if (r2["existsSync"](r3))
		{
			r9 = JSON["parse"]
			r11 = r2["readFileSync"]
			r14 = "utf8"
			r11 = r11(r3, r14)
			r4 = r9(r11)
			if (r4["dataDir"])
			{
				r9 = process["env"]
				if (!r9["AMAAN_DATA_DIR"])
				{
					r9 = process["env"]
					r9["AMAAN_DATA_DIR"] = r4["dataDir"]
				}
			}
			if (r4["ffmpeg"])
			{
				if (!process["env"]["FFMPEG_PATH"])
				{
					r9 = process["env"]
					r10 = "FFMPEG_PATH"
					r9[r10] = r4["ffmpeg"]
				}
			}
			if (r4["ffprobe"])
			{
				r9 = process["env"]
				if (!r9["FFPROBE_PATH"])
				{
					r9 = process["env"]
					r9["FFPROBE_PATH"] = r4["ffprobe"]
				}
			}
			if (r4["hw"])
			{
				r9 = process["env"]
				if (!r9["AMAAN_DEVICE_HW"])
				{
					r10 = "AMAAN_DEVICE_HW"
					process["env"][r10] = r4["hw"]
				}
			}
		}
	}
	catch
	{
		r9 = accu
		accu = null
		accu = ctx8
		r9 = ctx1
		r10 = console["error"]
		r12 = "[android-env] "
		accu = s8_2
		if (s8_2)
		{
			accu = s8_2["message"]
		}
		r12 = (r12 + accu)
		accu = r10(r12)
	}
	return undefined
}

function func_unknown_0x10000000d(a0)
{
	let r1, r3, accu;
	r1 = console["error"]
	r3 = "\n[رفض غير معالَج] "
	accu = a0
	if (a0)
	{
		accu = a0["stack"]
	}
	if (!accu)
	{
		accu = a0
	}
	r3 = (r3 + accu)
	accu = r1(r3)
	return undefined
}

function func_unknown_0x10000000c(a0)
{
	let r1, accu;
	r1 = console["error"]
	accu = a0
	if (a0)
	{
		accu = a0["stack"]
	}
	if (!accu)
	{
		accu = a0
	}
	accu = r1(("\\n[\\x62e\\x637\\x623 \\x642\\x627\\x62a\\x644] " + accu))
	r1 = process["exit"]
	accu = r1(1)
	return undefined
}

function func_unknown_0x10000000b(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x37a5_0x100000008
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(253)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(230)
			r4 = (r4 * (parseInt(r6) / 2))
			r6 = r0(255)
			r4 = (r4 + ((-parseInt(r6)) / 3))
			r6 = r0(259)
			r4 = (r4 + (parseInt(r6) / 4))
			r6 = r0(248)
			r4 = (r4 + (parseInt(r6) / 5))
			r6 = r0(188)
			r4 = (r4 + ((-parseInt(r6)) / 6))
			r6 = r0(170)
			r5 = (parseInt(r6) / 7)
			r7 = r0(207)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 8)))
			r6 = r0(235)
			r2 = (r4 + (parseInt(r6) / 9))
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
		accu = ctx9
		r4 = ctx1
		r7 = r1["shift"]()
		accu = r1["push"](r7)
	}
	return undefined
}

function func_shutdown_0x10000000a()
{
	let r0, r1, r3, accu;
	r0 = ctx1
	s10_2 = func_0x37a5_0x100000008
	r1 = console["log"]
	accu = r1("Stopping all channels...")
	r1 = s1_8["stopAll"]
	accu = r1()
	r1 = s1_13["release"]
	r3 = s1_7["ROOT"]
	accu = r1(r3)
	accu = setTimeout(func_unknown_0x100000009, 2000)
	return undefined
}

function func_unknown_0x100000009()
{
	let r0;
	r0 = process["exit"]
	return r0(0)
}

function func_0x37a5_0x100000008(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 166)
	r0 = s1_5()
	r1 = r0[a0]
	if (s1_18["HEbJLd"] == undefined)
	{
		s1_18["QobYNC"] = func_0x2959f1_0x100000007
		s1_18["oZOiJf"] = {}
		s1_18["HEbJLd"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_18["oZOiJf"][r4])
	{
		r1 = s1_18["QobYNC"](r1)
		s1_18["oZOiJf"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_18["oZOiJf"][r4]
	}
	return r1
}

function func_0x2959f1_0x100000007(a0)
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

function func_startListening_0x100000006(a0)
{
	let r0, r1, r4, r5, accu;
	r1 = ctx1
	s11_2 = a0
	s11_3 = func_0x37a5_0x100000008
	r5 = "0.0.0.0"
	r0 = s1_15["listen"](s1_16, r5, func_unknown_0x100000003)
	r4 = "error"
	accu = r0["on"](r4, func_unknown_0x100000005)
	return undefined
}

function func_unknown_0x100000005(a0)
{
	let r1, r2, r4, r5, accu;
	if (a0["code"] === "EADDRINUSE")
	{
		r1 = ctx11
		accu = s11_2
		if (!s11_2)
		{
			accu = 1
		}
		s12_2 = accu
		if (s12_2 <= 10)
		{
			r4 = "المنفذ "
			r4 = (r4 + s1_16)
			r4 = (r4 + " مشغول — إعادة المحاولة (")
			r4 = (r4 + s12_2)
			r4 = (r4 + "/10) \\x62e\\x644\\x627\\x644 3 \\x62b\\x648\\x627\\x646\\x64d...")
			accu = console["log"](r4)
			accu = setTimeout(func_unknown_0x100000004, 3000)
		}
		else
		{
			r2 = console["error"]
			r4 = "تعذّر فتح المنفذ "
			r4 = (r4 + s1_16)
			r4 = (r4 + " بعد 10 محاولات. أغلق العملية القديمة يدوياً أو غيّر المنفذ من الإعدادات.")
			accu = r2(r4)
			r2 = process["exit"]
			accu = r2(1)
		}
	}
	else
	{
		r4 = "[خطأ في الخادم]"
		r5 = a0["message"]
		accu = console["error"](r4, r5)
		accu = process["exit"](1)
	}
	return undefined
}

function func_unknown_0x100000004()
{
	return func_startListening_0x100000006((s12_2 + 1))
}

function func_unknown_0x100000003()
{
	let r1, r3, accu;
	r1 = console["log"]
	r3 = "=============================================="
	accu = r1(r3)
	r1 = console["log"]
	r3 = "  Amaan Live | أمان لايف (Android)"
	accu = r1(r3)
	accu = console["log"](("  Server listening on 0.0.0.0:" + s1_16))
	r1 = console["log"]
	r3 = "  Admin : http://<device-ip>:"
	r3 = (r3 + s1_16)
	r3 = (r3 + "/admin")
	accu = r1(r3)
	r1 = console["log"]
	r3 = "  Viewer: http://<device-ip>:"
	r3 = (r3 + s1_16)
	r3 = (r3 + "/")
	accu = r1(r3)
	r1 = console["log"]
	r3 = "=============================================="
	accu = r1(r3)
	return undefined
}

function func_writeBundledNginxConf_0x100000002()
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, accu;
	accu = s1_3("fs")
	r1 = s1_3("fs")
	r6 = ctx1
	try
	{
		r9 = s1_7["ROOT"]
		r10 = "nginx"
		r2 = s1_6["join"](r9, r10)
		r7 = s1_6["join"]
		r10 = process["platform"]
		accu = r10 === "win32"
		r9 = r2
		if (r10 === "win32")
		{
			accu = "nginx.exe"
		}
		else
		{
			accu = "nginx"
		}
		r10 = accu
		r3 = r7(r9, r10)
		r7 = r1["existsSync"]
		if (!r7(r3))
		{
			return !Boolean([])
		}
		r7 = s1_12["buildNginxConf"]
		r9 = s1_7["get"]
		r9 = r9()
		r9 = r9["settings"]
		r4 = r7(r9)
		r7 = r1["mkdirSync"]
		r12 = "conf"
		r9 = s1_6["join"](r2, r12)
		r10 = {"recursive": null}
		r10["recursive"] = !(!Boolean([]))
		accu = r7(r9, r10)
		r7 = r1["mkdirSync"]
		r9 = s1_6["join"]
		r12 = "logs"
		r9 = r9(r2, r12)
		r10 = {"recursive": null}
		r10["recursive"] = !(!Boolean([]))
		accu = r7(r9, r10)
		r7 = r1["mkdirSync"]
		r9 = s1_6["join"]
		r12 = "temp"
		r9 = r9(r2, r12)
		r10 = {"recursive": null}
		r10["recursive"] = !(!Boolean([]))
		accu = r7(r9, r10)
		r7 = r1["writeFileSync"]
		r9 = s1_6["join"]
		r12 = "conf"
		r11 = r2
		r9 = r9(r11, r12, "nginx.conf")
		accu = r7(r9, r4)
		r7 = s1_14["settings"]
		r7 = r7["nginxPath"]
		accu = !(r7 === r3)
		if (!(r7 === r3))
		{
			s1_14["settings"]["nginxPath"] = r3
			r7 = s1_7["save"]
			accu = r7()
		}
		r7 = ctx1
		try
		{
			r8 = s1_6["join"]
			r11 = "conf"
			r12 = "nginx.conf"
			r10 = r2
			r5 = r8(r10, r11, r12)
			r10 = "child_process"
			r9 = s1_3(r10)
			r8 = r9["spawnSync"]
			r12 = ["-p", 0, "-c", 0, "-s", 0]
			r12[1] = r2
			r12[3] = r5
			r12[5] = "reload"
			r11 = r12
			r12 = {"cwd": null, "timeout": 8000, "stdio": null}
			r12["cwd"] = r2
			r12["stdio"] = "ignore"
			r10 = r3
			accu = r8(r10, r11, r12)
		}
		catch
		{
			r8 = accu
			accu = null
			accu = ctx13
			r8 = ctx1
		}
		accu = !(!Boolean([]))
		return !(!Boolean([]))
	}
	catch {}
	r7 = accu
	accu = null
	accu = ctx14
	r7 = ctx1
	r10 = "[nginx] تعذّر كتابة الإعداد: "
	r10 = (r10 + s14_2["message"])
	accu = console["error"](r10)
	return !Boolean([])
}

function func_0x5a81_0x100000001()
{
	let r0;
	r0 = ctx1
	s15_2 = ["CMvHzezPBgvtEw5J", "mtG4mdm5mJvkzMvsu1K", "yxbWBgLJyxrPB24VDM5KlMfWCgXLlM1WzwD1CMW", "C3rVCefSBa", "CgXHDgzVCM0", "z2v0", "ruferfjjtLvtrq", "2yByS9IU2kKG2kpyRTIX2yKG2yxzHIdyO9Mf2kFzHIdzHnIN2yRzGsdyQTI52yxzHcdyQnIN2ytzGDI52yqG2lNzHnMjinMh2ldyPYdyP9Me2kZzH9IN2liGknMg2yhySYdzHDIS2ytyRYdyP9Me2kJzITIN2yByP9IQoIa", "y29UzG", "y2HPBgrFChjVy2vZCW", "rujvu1K", "uK9pva", "inIO2lNyRYaXmcdzHDIT2kFzInMe2kFyQI4G2kpyUTMe2yiG2kFzHnI52yxzHnMk2kKG2kFzHnMc2k/zITMf2kKG2yRyR9Mi2yRyP9MlinIJ2yGG2lRzITMr2leG2kFzHnMf2yBzGDIWinMf2yyG2kFzHnIL2lNyR9IN2k/yP9IQlG", "icbbzg1PBIa6igH0Dha6lY88zgv2AwnLlwLWpJO", "mJKYnZa1nvnWDKvYtq", "l3vWBg9Hzhm", "zMzTCgvN", "CgfYC2u", "C3j2", "mJjPALbJwhK", "yNvPBgroz2LUEenVBMy", "mJe0nZu3neTPEKHzDq", "zw52", "q29UDgvUDc1uExbL", "tKDjtLHFue9svd0", "ndGYotm5nNHVr2HSqq", "AwDUB3jL", "inMf2ltyUTMi2yqG4OcuinIL2lNyP9IV2kKG2kFzHnMf2k3yP9Mi2ytyQsaO", "2kFzHnMf2yBzGDIWia", "qu1bqu5Frefuqv9esvi", "C2XPy2u", "DMvUzg9Y", "Cg9YDa", "zxjYB3i", "y29Kzq", "w9IJ2yJzHTMe2kFzITMgxsdyQTMfinIQ2k3yR9Mk2kSG2lhzInIN2kJyTYa", "inMc2yByP9IP", "zgf0ys1KAxi", "2k7yT9IJinIV2kFyRTMe2yOG2yhzIIdyP9Me2k7yP9IV2yu", "w25NAw54xsdyQTI52ldzKDIXinMd2kRyP9IO2kKG2kFzHnIL2lNyR9IN2k86ia", "zgf0yurPCG", "zxHPC3rZu3LUyW", "BwTKAxjtEw5J", "rKzquK9crv9qqvri", "rKznuevhx1bbveG", "DgHLBG", "l3zLBMrVCG", "l2fKBwLU", "CMvSB2fK", "BMDPBNHqB3j0", "pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pq", "w2fUzhjVAwqTzw52xsa", "BwvZC2fNzq", "zw5KC1DPDgG", "mJG2ntq5owrxBevUBa", "icbwAwv3zxi6igH0Dha6lY88zgv2AwnLlwLWpJO", "Cgf0Aa", "C3rHCNr1Cff1zxvL", "C2v0DgLUz3m", "Bg9Hza", "cLVySDMb2lyG2lRzITIXinMf2lNyP9Me2y7yRf0G", "2kRyTnI62yRzHcdzHTIZ2k7yQTMk2yyG2yxyUDIN2ySG2yRyRnI52ytzH9Mf2kCG2kRzG9IQ2kJyP9MginMf2ytzGDIN2kOG2kFzHnIO2kSG2yBzGDIZ2yFyPYdzGDMk2lhzIsdzG9MeinIS2yFyP9IYinMf2k3yQTMi2yKG2yxyRTIQ2ytzGDIN2ySG2ytzHTMb2lmG2kFzHnMc2yByP9IPlGO", "yw5KCM9Pzc1LBNyUANnVBG", "Bg9N", "ru5pru5u", "BMDPBNG", "DgvTCa", "DxrMoa", "yxjNDG", "BM90zuHSC0fJy2vZCW", "C3rHy2S", "w9IU2lFyOYdzGDMkinIN2ytyRTIN2k/zHv0", "mJmXoty2mgH3whfvwG", "ywrTAw4", "C3rHDgLJ", "ks4k", "AM9PBG", "qu1bqu5Frevwsunfx0Hx", "CMvSzwfZzq", "zMzWCM9Izq", "2kRyUDIW2zhySsdzGDIQ2k0G2kFzHnMf2yBzGDIWia", "q2fJAguTq29UDhjVBa", "inMc2yByP9IPinMf2yyG2k7yP9IV2yuG2kFzHnIQ2lhyRTMk2lu", "C2f2zq", "C3rHDhvZ", "y2f0y2G", "BMDPBNGUy29UzG", "zw5ZDxjLvhjPywW", "DMLLD2vY", "C3rHCNrszxzHBgLKyxrPB25mB29W", "AgXZuM9VDa", "ohHmrhLmsW", "C3rHCNrmB29W", "CMvMCMvZAeLTCg9YDgvKvxjSCW", "BMDPBNGUzxHL", "w9IJ2yJzHTMe2kFzITMgxsdzHDIY2kFzHDMg2kKG2k/zInIX2yRyQtOG2kRyRDIV2zhyQ9IQinIX2yJyP9IO2lCG", "BM8GyNvUzgXLzcbUz2LUEcaOC2TPChbLzcKU", "mc4WlJaUma", "DxnL", "C3bHD25tEw5J", "ls13CML0zs1Uz2LUEc1JB25M", "ywnXDwLYzq", "l2HSCW", "A2LSBfn0ywXLuhjVy2vZC2vZ", "DxbKyxrLza", "Bg9NCW", "DxbSB2fKCW", "ChvIBgLJ", "C2v0sgvHzgvY", "u0Lhvevstq", "rvbfuK0", "DMLLD2vYq291BNq", "D3jPDgvgAwXLu3LUyW", "zxHPDa", "mtm1nJCWC3zzBhbj", "icbbBwfHBIbmAxzLihWG2kpzHDIN2yyG2ytyP9Mk2yeGkefUzhjVAwqP", "ChvIBgLJlcbTyxGTywDLptmXntm2mdaWlcbPBw11DgfIBgu", "BMDPBNHqyxrO"]
	s1_5 = func_0x5a81_0x100000000
	return s1_5()
}

function func_0x5a81_0x100000000()
{
	return s15_2
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r0, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, accu;
	r6 = ctx0
	s1_3 = require
	s1_2 = __dirname
	s1_5 = func_0x5a81_0x100000001
	s1_17 = func_startListening_0x100000006
	s1_18 = func_0x37a5_0x100000008
	s1_4 = func_0x37a5_0x100000008
	accu = func_unknown_0x10000000b(s1_5, 877890)
	s1_6 = s1_3("path")
	r0 = s1_3("express")
	accu = process["on"]("uncaughtException", func_unknown_0x10000000c)
	accu = process["on"]("unhandledRejection", func_unknown_0x10000000d)
	accu = func_loadAndroidEnv_0x10000000e()
	s1_7 = s1_3("./src/store")
	s1_8 = s1_3("./src/ffmpeg")
	s1_9 = s1_3("./src/scheduler")
	s1_10 = s1_3("./src/idle")
	s1_11 = s1_3("./src/license")
	s1_12 = s1_3("./src/routes")
	s1_13 = s1_3("./src/singleton")
	r7 = s1_7["load"]
	s1_14 = r7()
	r8 = process["argv"]
	r9 = "--write-nginx-conf"
	if (r8["includes"](r9))
	{
		r5 = func_writeBundledNginxConf_0x100000002()
		r7 = console["log"]
		accu = r5
		if (r5)
		{
			accu = "nginx.conf written."
		}
		else
		{
			accu = "no bundled nginx (skipped)."
		}
		r9 = accu
		accu = r7(r9)
		r7 = console["log"]
		r9 = "NGINX_PORT="
		accu = s1_14["settings"]["nginxPort"]
		if (!s1_14["settings"]["nginxPort"])
		{
			accu = 80
		}
		r9 = (r9 + accu)
		accu = r7(r9)
		r7 = console["log"]
		r10 = s1_14["settings"]
		accu = r10["port"]
		if (!r10["port"])
		{
			accu = 3001
		}
		accu = r7(("NODE_PORT=" + accu))
		r7 = process["exit"]
		accu = r7(0)
	}
	r7 = s1_13["acquire"]
	r9 = s1_7["ROOT"]
	if (!Boolean(r7(r9, process["pid"])))
	{
		r7 = console["error"]
		r9 = "نسخة أخرى من أمان لايف تعمل بالفعل على هذا الجهاز (نفس مجلد البيانات: "
		r9 = (r9 + s1_7["ROOT"])
		r9 = (r9 + ").\n")
		r9 = (r9 + "تشغيل نسختين معاً يجعلهما تكتبان ملفات البث نفسها فيرى كل جهاز محتوى مختلفاً لنفس القناة.\n")
		r9 = (r9 + "\\x623\\x63a\\x644\\x642 \\x627\\x644\\x646\\x633\\x62e\\x629 \\x627\\x644\\x623\\x62e\\x631\\x649 \\x623\\x648\\x644\\x627\\x64b (\\x634\\x63a\\x651\\x644 stop.bat \\x623\\x648 \\x623\\x63a\\x644\\x642 \\x646\\x627\\x641\\x630\\x629 \\x627\\x644\\x623\\x648\\x627\\x645\\x631 \\x627\\x644\\x62e\\x627\\x635\\x629 \\x628\\x647\\x627) \\x62b\\x645 \\x623\\x639\\x62f \\x627\\x644\\x645\\x62d\\x627\\x648\\x644\\x629.")
		accu = r7(r9)
		r7 = process["exit"]
		accu = r7(1)
	}
	accu = func_writeBundledNginxConf_0x100000002()
	s1_15 = r0()
	r7 = s1_15["use"]
	r9 = "/admin"
	r12 = s1_6["join"]
	r16 = "admin"
	r12 = r12(s1_2, "public", r16)
	r10 = r0["static"](r12)
	accu = r7(r9, r10)
	r9 = "/vendor"
	r10 = r0["static"]
	r12 = s1_6["join"]
	r16 = "vendor"
	r12 = r12(s1_2, "public", r16)
	r10 = r10(r12)
	accu = s1_15["use"](r9, r10)
	r7 = s1_15["use"]
	r9 = "/uploads"
	r10 = r0["static"]
	r12 = s1_6["join"]
	r15 = "srv"
	r16 = "uploads"
	r12 = r12(s1_7["ROOT"], r15, r16)
	r10 = r10(r12)
	accu = r7(r9, r10)
	r7 = s1_15["use"]
	r12 = s1_6["join"]
	r15 = "public"
	r16 = "viewer"
	r12 = r12(s1_2, r15, r16)
	r10 = r0["static"](r12)
	accu = r7("/", r10)
	r7 = s1_15["use"]
	r9 = "/hls"
	r13 = s1_8["hlsRoot"]
	r13 = r13()
	r14 = {"maxAge": 0, "etag": null, "lastModified": null}
	r14["etag"] = !(!Boolean([]))
	r14["lastModified"] = !(!Boolean([]))
	r11 = r0["static"](r13, r14)
	accu = r7(r9, func_unknown_0x10000000f, r11, func_unknown_0x100000010)
	r7 = s1_15["use"]
	accu = r7("/api", s1_12)
	accu = s1_15["use"](func_unknown_0x100000011)
	r7 = s1_8["killStaleProcesses"]
	accu = r7()
	accu = func_unknown_0x100000015()
	r7 = s1_14["settings"]
	accu = r7["port"]
	if (!r7["port"])
	{
		accu = 3001
	}
	s1_16 = accu
	accu = func_startListening_0x100000006(1)
	accu = process["on"]("SIGINT", func_shutdown_0x10000000a)
	r9 = "SIGTERM"
	accu = process["on"](r9, func_shutdown_0x10000000a)
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
