// Recovered module: src/update.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (11509 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14, s1_15, s1_16, s1_17, s1_18, s1_19, s1_20, s1_21;
let s4_2;
let s5_2, s5_3, s5_4;
let s6_2, s6_3, s6_4, s6_5, s6_6;
let s8_2, s8_3;
let s9_2;
let s10_2;
let s11_2, s11_3;
let s12_2;
let s14_2;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx5, ctx6, ctx7, ctx10, ctx11, ctx12, ctx13, ctx14, ctx15;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x100000016()
{
	let r0, r1, r5, r6, r7, r8, r9, r10, r11, r12, r13, r15, r18, accu;
	r6 = [0, 0]
	r7 = s1_6["join"]
	r10 = "package.json"
	r6[0] = r7(s1_12, r10)
	r8 = s1_6
	r9 = s1_2
	r11 = "package.json"
	r6[1] = s1_6["join"](s1_2, "..", r11)
	r1 = r6
	r6 = GetIterator(r1)
	r5 = r6["next"]
	accu = false
	r7 = false
	r10 = ctx1
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			accu = r11["value"]
			r12 = ctx1
			try
			{
				r13 = s1_5[r0(224)]
				accu = r13(r11["value"])
				if (r13(r11["value"]))
				{
					r15 = s1_5[r0(181)]
					r18 = r0(178)
					r15 = r15(r11["value"], r18)
					r13 = JSON["parse"](r15)
					accu = r13[r0(208)]
					if (!r13[r0(208)])
					{
						accu = "0.0.0"
					}
					r9 = accu
					r8 = 1
					break
				}
				continue
			}
			catch {}
			r13 = accu
			accu = null
			accu = ctx2
			r13 = ctx1
		}
		accu = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = accu
		r8 = 0
	}
	if (!r7)
	{
		r12 = ctx1
		try
		{
			if (!r6["return"] == undefined)
			{
				accu = r6["return"]()
			}
		}
		catch {}
	}
	accu = null
	switch (r8)
	{
	default:
	{
		break
	}
	case (0):
	{
		accu = r9
	}
	case (1):
	{
		return r9
	}
	return "1.0.0"
	}
}

function func_unknown_0x100000015(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x370b_0x10000000a
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(189)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(152)
			r4 = (r4 * ((-parseInt(r6)) / 2))
			r6 = r0(159)
			r5 = ((-parseInt(r6)) / 3)
			r7 = r0(176)
			r4 = (r4 + (r5 * (parseInt(r7) / 4)))
			r6 = r0(232)
			r4 = (r4 + ((-parseInt(r6)) / 5))
			r6 = r0(167)
			r4 = (r4 + ((-parseInt(r6)) / 6))
			r6 = r0(165)
			r5 = ((-parseInt(r6)) / 7)
			r7 = r0(196)
			r4 = (r4 + (r5 * (parseInt(r7) / 8)))
			r6 = r0(228)
			r4 = (r4 + ((-parseInt(r6)) / 9))
			r6 = r0(154)
			r5 = (parseInt(r6) / 10)
			r7 = r0(243)
			r2 = (r4 + (r5 * (parseInt(r7) / 11)))
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
		accu = ctx3
		r4 = ctx1
		r7 = r1["shift"]()
		accu = r1["push"](r7)
	}
	return undefined
}

async function func_apply_0x100000014()
{
	let r0, r2, r3, r4, r5, r6, r7, r8, r9, r10, r12, r13, r15, r16, r17, r18, r19, r20, r21, r22, accu;
	r16 = __closure
	r17 = this
	r0 = accu
	r16 = ctx1
	try
	{
		r17 = s1_11["getUpdateInfo"]
		accu = s1_11["getUpdateInfo"]()
		if (!s1_11["getUpdateInfo"]())
		{
			r18 = func_fetchVersionInfo_0x100000007()
			r17 = r0
			r17 = await r18
			r18 = _GeneratorGetResumeMode(r0)
			if (!r18 === 0)
			{
				accu = r17
			}
			accu = r17
		}
		r2 = accu
		if ((((!accu) || ((!r2["url"]))) || ((!r2["version"]))))
		{
			r18 = "لا يوجد تحديث منشور"
			accu = Error
			accu = Error(r18)
		}
		r18 = r2["version"]
		r17 = func_cmpVer_0x100000000(r18, s1_13)
		if (r17 <= 0)
		{
			r17 = Error
			accu = Error
			accu = Error((("\\x627\\x644\\x646\\x638\\x627\\x645 \\x645\\x62d\\x62f\\x64e\\x651\\x62b \\x628\\x627\\x644\\x641\\x639\\x644 (\\x627\\x644\\x625\\x635\\x62f\\x627\\x631 " + s1_13) + ")"))
		}
		r17 = s1_6["join"]
		r20 = "cache"
		r3 = r17(s1_12, r20)
		r17 = s1_5["mkdirSync"]
		r20 = {"recursive": null}
		r20["recursive"] = !(!Boolean([]))
		accu = r17(r3, r20)
		r18 = new RegExp("\\.exe(\\?|$)", "i")
		r17 = r18["test"]
		r19 = r2["url"]
		accu = r18["test"](r19)
		if (!r18["test"](r19))
		{
			r17 = r2["fileType"]
			accu = r17 === "exe"
		}
		r4 = accu
		if (accu)
		{
			if (!process["pkg"])
			{
				r18 = "تحديث EXE يعمل فقط على النسخة المحزومة (EXE)"
				accu = Error
				accu = Error(r18)
			}
			r17 = s1_6["join"]
			r20 = "AmaanLive.new.exe"
			r10 = r17(r3, r20)
			r18 = r2["url"]
			r18 = func_download_0x100000011(r18, r10)
			r17 = r0
			r17 = await r18
			r18 = _GeneratorGetResumeMode(r0)
			if (!r18 === 0)
			{
				accu = r17
			}
			if (r2["sha256"])
			{
				r15 = func_sha256File_0x100000012(r10)
				r17 = r15["toLowerCase"]
				r17 = r17()
				r19 = r2["sha256"]
				r18 = r19["toLowerCase"]
				if (!r17 === r18())
				{
					r18 = "فشل التحقق من سلامة ملف التحديث (SHA-256) — تم الإلغاء"
					accu = Error
					accu = Error(r18)
				}
			}
			r20 = "swap-update.bat"
			r12 = s1_6["join"](r3, r20)
			r17 = "@echo off\r\n"
			r17 = (r17 + "echo تطبيق التحديث...\r\n")
			r17 = (r17 + ":wait\r\n")
			r17 = (r17 + "timeout /t 1 /nobreak >nul\\r\\n")
			r17 = (r17 + "tasklist /FI \"IMAGENAME eq ")
			r18 = s1_6["basename"]
			r17 = (r17 + r18(process["execPath"]))
			r17 = (r17 + "\" 2>nul | find /I \"")
			r18 = s1_6["basename"]
			r17 = (r17 + r18(process["execPath"]))
			r17 = (r17 + "\" >nul && goto wait\r\n")
			r17 = (r17 + "move /Y \"")
			r17 = (r17 + r10)
			r17 = (r17 + "\" \"")
			r17 = (r17 + process["execPath"])
			r17 = (r17 + "\" >nul\r\n")
			r17 = (r17 + "start \"\" \"")
			r17 = (r17 + process["execPath"])
			r17 = (r17 + "\"\\r\\n")
			r13 = (r17 + "del \"%~f0\"\r\n")
			r17 = s1_5["writeFileSync"]
			r21 = "latin1"
			r19 = r12
			r20 = r13
			accu = r17(r19, r20, r21)
			r18 = "child_process"
			r17 = s1_3(r18)
			r19 = "cmd.exe"
			r21 = ["/c", 0]
			r21[1] = r12
			r20 = r21
			r21 = {"detached": null, "stdio": "ignore", "windowsHide": null}
			r21["detached"] = !(!Boolean([]))
			r21["windowsHide"] = !(!Boolean([]))
			r18 = r17["spawn"](r19, r20, r21)
			r17 = r18["unref"]
			accu = r17()
			r17 = {"from": null, "to": null, "exe": null}
			r17["from"] = s1_13
			r17["to"] = r2["version"]
			r17["exe"] = !(!Boolean([]))
			r18 = r17
			r17 = r0
			return r18
		}
		r20 = "update.zip"
		r5 = s1_6["join"](r3, r20)
		r17 = s1_6["join"]
		r20 = "update_extract"
		r6 = r17(r3, r20)
		r18 = r2["url"]
		r18 = func_download_0x100000011(r18, r5)
		r17 = r0
		r17 = await r18
		r18 = _GeneratorGetResumeMode(r0)
		if (!r18 === 0)
		{
			accu = r17
		}
		if (r2["sha256"])
		{
			r9 = func_sha256File_0x100000012(r5)
			r17 = r9["toLowerCase"]
			r17 = r17()
			r19 = r2["sha256"]
			r18 = r19["toLowerCase"]
			if (!r17 === r18())
			{
				r18 = "فشل التحقق من سلامة ملف التحديث (بصمة SHA-256 غير مطابقة) — تم الإلغاء"
				accu = Error
				accu = Error(r18)
			}
		}
		r17 = s1_5["rmSync"]
		r20 = {"recursive": null, "force": null}
		r20["recursive"] = !(!Boolean([]))
		r20["force"] = !(!Boolean([]))
		accu = r17(r6, r20)
		r17 = s1_5["mkdirSync"]
		r20 = {"recursive": null}
		r20["recursive"] = !(!Boolean([]))
		accu = r17(r6, r20)
		r17 = process["platform"]
		if (r17 === "win32")
		{
			r18 = "powershell -NoProfile -Command \"Expand-Archive -LiteralPath '"
			r18 = (r18 + r5)
			r18 = (r18 + "' -DestinationPath '")
			r18 = (r18 + r6)
			r18 = (r18 + "' -Force\"")
			r19 = {"timeout": 180000}
			accu = s1_10(r18, r19)
		}
		else
		{
			r18 = "unzip -o -q \""
			r18 = (r18 + r5)
			r18 = (r18 + "\" -d \"")
			r18 = (r18 + r6)
			r18 = (r18 + "\"")
			r19 = {"timeout": 180000}
			accu = s1_10(r18, r19)
		}
		r7 = r6
		r20 = {"withFileTypes": null}
		r20["withFileTypes"] = !(!Boolean([]))
		r8 = s1_5["readdirSync"](r7, r20)
		r17 = r8["length"]
		if (r17 === 1)
		{
			r18 = r8[0]
			r17 = r18["isDirectory"]
			if (r17())
			{
				r17 = s1_6["join"]
				r20 = r8[0]
				r20 = r20["name"]
				r7 = r17(r6, r20)
			}
		}
		r17 = s1_5["existsSync"]
		r19 = s1_6["join"]
		r22 = "server.js"
		r19 = r19(r7, r22)
		if (!r17(r19))
		{
			r18 = "حزمة التحديث غير صالحة (server.js غير موجود داخلها)"
			accu = Error
			accu = Error(r18)
		}
		r20 = !(!Boolean([]))
		r18 = r7
		accu = func_copyDir_0x100000013(r18, s1_12, r20)
		r20 = {"recursive": null, "force": null}
		r20["recursive"] = !(!Boolean([]))
		r20["force"] = !(!Boolean([]))
		accu = s1_5["rmSync"](r6, r20)
		r17 = s1_5["rmSync"]
		r20 = {"force": null}
		r20["force"] = !(!Boolean([]))
		accu = r17(r5, r20)
		r17 = {"from": null, "to": null}
		r17["from"] = s1_13
		r17["to"] = r2["version"]
		r18 = r17
		r17 = r0
		return r18
	}
	catch {}
	r17 = accu
	accu = null
	accu = ctx4
	r17 = ctx1
	r18 = r0
	return s4_2
}

function func_copyDir_0x100000013(a0, a1, a2)
{
	let r0, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, accu;
	r0 = func_0x370b_0x10000000a
	r6 = s1_5["mkdirSync"]
	r9 = {"recursive": null}
	r9["recursive"] = !(!Boolean([]))
	accu = r6(a1, r9)
	r6 = s1_5["readdirSync"]
	r9 = {"withFileTypes": null}
	r9["withFileTypes"] = !(!Boolean([]))
	r8 = r6(a0, r9)
	r7 = GetIterator(r8)
	r6 = r7["next"]
	accu = false
	r8 = false
	r11 = ctx1
	try
	{
		while (true)
		{
			r8 = true
			r12 = r6()
			if (r12["done"]) break
			r8 = false
			if (a2)
			{
				r13 = s1_14[r0(205)]
				r15 = r12["value"][r0(233)]
				if (r13(r15))
				{
					continue
				}
			}
			r13 = s1_6[r0(185)]
			r16 = r12["value"][r0(233)]
			r4 = r13(a0, r16)
			r13 = s1_6[r0(185)]
			r16 = r12["value"][r0(233)]
			r5 = r13(a1, r16)
			r13 = r12["value"][r0(241)]
			if (r13())
			{
				r16 = !Boolean([])
				r14 = r4
				r15 = r5
				accu = func_copyDir_0x100000013(r14, r15, r16)
				continue
			}
			r13 = s1_5[r0(190)]
			accu = r13(r4, r5)
		}
		accu = -1
		r10 = -1
		r9 = -1
	}
	catch
	{
		r10 = accu
		r9 = 0
	}
	if (!r8)
	{
		r13 = ctx1
		try
		{
			if (!r7["return"] == undefined)
			{
				accu = r7["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r9 === 0)
	{
		accu = r10
	}
	return undefined
}

function func_sha256File_0x100000012(a0)
{
	let r1, r2, r3, r4;
	r3 = s1_9["createHash"]("sha256")
	r2 = r3["update"]
	r4 = s1_5["readFileSync"]
	r4 = r4(a0)
	r2 = r2(r4)
	r1 = r2["digest"]
	r3 = "hex"
	return r1(r3)
}

function func_download_0x100000011(a0, a1, a2)
{
	let r0, accu;
	r0 = ctx1
	s5_4 = a0
	s5_3 = a1
	s5_2 = a2
	accu = Promise
	return Promise(func_unknown_0x100000010)
}

function func_unknown_0x100000010(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, accu;
	r1 = ctx5
	s6_3 = a0
	s6_2 = a1
	s6_4 = func_0x370b_0x10000000a
	accu = undefined
	r2 = ctx6
	try
	{
		accu = URL
		accu = URL(s5_4)
		s6_5 = URL(s5_4)
	}
	catch
	{
		r3 = accu
		accu = null
		accu = ctx7
		r3 = ctx6
		r6 = "رابط التحديث غير صالح"
		accu = Error
		r5 = Error(r6)
		return s6_2(r5)
	}
	r2 = s6_5["protocol"]
	accu = r2 === "https:"
	if (r2 === "https:")
	{
		accu = s1_8
	}
	else
	{
		accu = s1_7
	}
	r0 = accu
	r2 = r0["get"]
	r5 = {"timeout": 60000}
	r3 = r0
	s6_6 = r2(s6_5, r5, func_unknown_0x10000000e)
	r4 = "timeout"
	accu = s6_6["on"](r4, func_unknown_0x10000000f)
	r4 = "error"
	accu = s6_6["on"](r4, s6_2)
	return undefined
}

function func_unknown_0x10000000f()
{
	let r1, r2, r3, accu;
	r1 = s6_6["destroy"]
	accu = r1()
	r3 = "انتهت مهلة تنزيل التحديث"
	accu = Error
	r2 = Error(r3)
	accu = s6_2(r2)
	return undefined
}

function func_unknown_0x10000000e(a0)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r0 = ctx6
	s8_2 = func_0x370b_0x10000000a
	r2 = [301, 302, 307, 308]
	r1 = r2["includes"]
	if (r1(a0["statusCode"]))
	{
		if (a0["headers"]["location"])
		{
			accu = s5_2
			if (!s5_2)
			{
				accu = 0
			}
			r1 = accu
			if (r1 < 3)
			{
				r1 = a0["resume"]
				accu = r1()
				r5 = a0["headers"]
				r5 = r5["location"]
				accu = URL
				r4 = URL(r5, s6_5)
				r3 = r4["toString"]
				r3 = r3()
				accu = s5_2
				if (!s5_2)
				{
					accu = 0
				}
				r5 = (accu + 1)
				r2 = func_download_0x100000011(r3, s5_3, r5)
				return s6_3(r2)
			}
		}
	}
	if (!a0["statusCode"] === 200)
	{
		r1 = a0["resume"]
		accu = r1()
		r3 = "فشل تنزيل التحديث: HTTP "
		r3 = (r3 + a0["statusCode"])
		accu = Error
		r2 = Error(r3)
		return s6_2(r2)
	}
	s8_3 = s1_5["createWriteStream"](s5_3)
	accu = a0["pipe"](s8_3)
	accu = s8_3["on"]("finish", func_unknown_0x10000000d)
	r3 = "error"
	accu = s8_3["on"](r3, s6_2)
	return undefined
}

function func_unknown_0x10000000d()
{
	let r0;
	r0 = s8_3["close"]
	return r0(s6_3)
}

function func_0x15ec_0x10000000c()
{
	let r0;
	r0 = ctx1
	s9_2 = ["mJyWr0j0ANvi", "Ahr0Chm", "mtyXodbru2XhAMO", "Dw56AxaGlw8GlxeGiG", "Ahr0Chm6", "C2HHmJu2", "BwfW", "m0zcwKrUsa", "Agv4", "C3j2", "AgvHzgvYCW", "C2vYDMvYlMPZ", "oNDHAxqncG", "n2zJzvDMBa", "zgvSiciLFMyWiG0k", "ntm4ntC4CLP4BLr4", "D3jPDgvgAwXLu3LUyW", "DxjS", "CNvU", "iIa+BNvSdqO", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyQTMg2llzITMeinIN2ytyQTIT2k/zITIR", "Dg9tDhjPBMC", "DgfZA2XPC3qGl0zjicjjtufhru5btuuGzxeG", "uK9pva", "mtG2mZC2CeDxEfri", "qgvJAg8GB2zMdqO", "DxrMoa", "y21KlMv4zq", "Dw5Yzwy", "CMvHzezPBgvtEw5J", "Bg9JyxrPB24", "zxjYB3i", "DgLTzw91Da", "AM9PBG", "ms4WlJa", "lMDPDa", "Cgf0Aa", "mJy3neP6zwzWEa", "y29WEuzPBgvtEw5J", "qw1Hyw5mAxzLlM5LDY5LEgu", "CMvZDw1L", "zgvZDhjVEq", "iIa+BNvSicyMigDVDg8GD2fPDa0k", "CgXHDgzVCM0", "nta2odG2ngLiwfnSzG", "2ytyPYdzITMi2kZyRYdyQTIT2k/zITIRinMf2yByTnMi2le", "y2XVC2u", "Dg9mB3DLCKnHC2u", "Cg93zxjZAgvSBcaTtM9qCM9MAwXLic1dB21Tyw5KicjfEhbHBMqTqxjJAgL2zsaTtgL0zxjHBfbHDgGGjW", "yMfZzw5HBwu", "2yhyTnMeinIN2ytyQTIT2ylzGIdzHDMginIZ2ytyP9Mf2kKG2yxzHnMbinIN2ytyQTIT2k/zITIRicHtseeTmJu2ksdIGjqG2kRzHsdyP9Me2kxzHnI62kFyOq", "iIaI", "2kRyRDIV2yRyQYbfweuG2yRyUDMf2yqG2yhzGTI3inI52ytzIsdyP9Me2yByS9IU2kKG2kFzHnMf2k3ySTMi2yxyQsaOrvHfkq", "AgfZ", "DxbKyxrL", "CMvHzgrPCLn5BMm", "DMvYC2LVBG", "BM9Kzv9TB2r1BgvZ", "y3j5ChrV", "DxbKyxrLlNPPCa", "BgvUz3rO", "C3bSAxq", "l2fWAs92zxjZAw9U", "DxbKyxrLx2v4DhjHy3q", "2k3ySTMf2kKG2kFzHnIQ2k3yR9Mk2kSG2lRzITIXinI12kFzHnIT2kKGkhnLCNzLCI5QCYdyUTMk2leG2yxzInIS2yJyRYdyR9IN2k7zHnMh2kCP", "Bgf0Aw4X", "teLdru5trv9trvjwrvi", "z2v0", "y2fJAgu", "ChjVDg9JB2W", "2yhyTnMeinIQ2yBySTMk2yqG2kFzHnIQ2k3yR9Mk2kS6ieHuvfaG", "zw5K", "zxHPC3rZu3LUyW", "CM1tEw5J", "CMvWBgfJzq", "2yhyTnMeinIN2ytyQTIT2ylzGIdzHDMginIZ2ytyP9Mf2kKG2yxzHnMbinIN2ytyQTIT2k/zITIRicJyQnI12yxyQsbtseeTmJu2inI62yRySsdzHDI32kFyQnMc2kKPiokaLcdyQTMfinIN2ytyPDMe2lRyP9IH", "ndC3mtC3m3D2vvvMBW", "jYaTrgvZDgLUyxrPB25qyxrOicC", "zgf0yq", "zMLSzvr5Cgu", "mZu0ntKZmgjMr3bywq", "BMfTzq", "BwfUzgf0B3j5", "zgLZDa", "2lhyP9IO2lCG2kFzHnIQ2k3yR9Mk2kSG2lRzITIXinI12kFzHnIT", "y2HPBgrFChjVy2vZCW", "zgLNzxn0", "C3DHCc11CgrHDguUyMf0", "Aw5JBhvKzxm", "AxneAxjLy3rVCNK", "zxHWB3j0CW", "mtuWmZDQy2D6rha", "zwnOBYdyQTI32kJzITMcinIN2ytyQTIT2k/zITIRlI4UdqO", "Bg9NCW", "BwTKAxjtEw5J", "y29UzMLN", "CgfJA2fNzs5QC29U", "C3rHDhvZq29Kzq"]
	s1_18 = func_0x15ec_0x10000000b
	return s1_18()
}

function func_0x15ec_0x10000000b()
{
	return s9_2
}

function func_0x370b_0x10000000a(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 148)
	r0 = s1_18()
	r1 = r0[a0]
	if (s1_17["gnVipN"] == undefined)
	{
		s1_17["NbEZWn"] = func_0x5cf205_0x100000009
		s1_17["FUoWpG"] = {}
		s1_17["gnVipN"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_17["FUoWpG"][r4])
	{
		r1 = s1_17["NbEZWn"](r1)
		s1_17["FUoWpG"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_17["FUoWpG"][r4]
	}
	return r1
}

function func_0x5cf205_0x100000009(a0)
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

async function func_status_0x100000008(a0)
{
	let r0, r2, r3, r4, r5, r6, r7, accu;
	r5 = __closure
	r6 = this
	r0 = accu
	r5 = ctx1
	try
	{
		r6 = s1_11["getUpdateInfo"]
		r2 = s1_11["getUpdateInfo"]()
		if (((!s1_11["getUpdateInfo"]()) || ((a0))))
		{
			r7 = func_fetchVersionInfo_0x100000007()
			r6 = r0
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r0)
			if (!r7 === 0)
			{
				accu = r6
			}
			r4 = r6
			if (r4)
			{
				r2 = r4
				accu = r2
			}
		}
		accu = r2
		if (r2)
		{
			accu = r2["version"]
			if (r2["version"])
			{
				if (r2["url"])
				{
					r7 = r2["version"]
					r6 = func_cmpVer_0x100000000(r7, s1_13)
					accu = r6 > 0
				}
			}
		}
		r3 = !(!Boolean(accu))
		r6 = {"currentVersion": null, "latestVersion": null, "available": null, "mandatory": null, "changelog": null}
		r6["currentVersion"] = s1_13
		accu = r2
		if (r2)
		{
			accu = r2["version"]
		}
		else
		{
			accu = s1_13
		}
		r6["latestVersion"] = accu
		r6["available"] = r3
		accu = r2
		if (r2)
		{
			accu = r2["mandatory"]
			if (r2["mandatory"])
			{
				accu = r3
			}
		}
		r6["mandatory"] = !(!Boolean(accu))
		if (((r2) && (accu = r3, (r3))))
		{
			accu = r2["changelog"]
		}
		else
		{
			accu = ""
		}
		r6["changelog"] = accu
		r7 = r6
		r6 = r0
		return r7
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx10
	r6 = ctx1
	r7 = r0
	return s10_2
}

function func_fetchVersionInfo_0x100000007()
{
	let accu;
	accu = Promise
	return Promise(func_unknown_0x100000006)
}

function func_unknown_0x100000006(a0)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r2 = ctx1
	s11_2 = a0
	s11_3 = func_0x370b_0x10000000a
	r3 = ctx11
	accu = ctx12
	try
	{
		accu = PushContext("Block")
		r4 = ctx11
		r7 = s1_11["LICENSE_SERVER"]
		r6 = r7["replace"]
		r8 = new RegExp("\\/+$")
		r6 = r6(r8, "")
		r6 = (r6 + "/api/version")
		accu = URL
		r0 = URL(r6)
		accu = r0["protocol"] === "https:"
		if (r0["protocol"] === "https:")
		{
			accu = s1_8
		}
		else
		{
			accu = s1_7
		}
		r1 = accu
		r5 = r1["get"]
		r8 = {"timeout": 10000}
		r6 = r1
		r7 = r0
		s12_2 = r5(r7, r8, func_unknown_0x100000003)
		r7 = "timeout"
		accu = s12_2["on"](r7, func_unknown_0x100000004)
		r7 = "error"
		accu = s12_2["on"](r7, func_unknown_0x100000005)
	}
	catch
	{
		r5 = accu
		accu = null
		accu = ctx13
		r5 = ctx11
		accu = s11_2(null)
	}
	return undefined
}

function func_unknown_0x100000005()
{
	return s11_2(null)
}

function func_unknown_0x100000004()
{
	let r1, accu;
	r1 = s12_2["destroy"]
	accu = r1()
	accu = s11_2(null)
	return undefined
}

function func_unknown_0x100000003(a0)
{
	let r1, r4, accu;
	r1 = ctx12
	s14_2 = ""
	r4 = "data"
	accu = a0["on"](r4, func_unknown_0x100000001)
	r4 = "end"
	accu = a0["on"](r4, func_unknown_0x100000002)
	return undefined
}

function func_unknown_0x100000002()
{
	let r0, r1, r2, accu;
	r0 = ctx14
	try
	{
		r2 = JSON["parse"](s14_2)
		accu = r2["update"]
		if (!r2["update"])
		{
			accu = null
		}
		r2 = accu
		accu = s11_2(r2)
	}
	catch
	{
		r1 = accu
		accu = null
		accu = ctx15
		r1 = ctx14
		accu = s11_2(null)
	}
	return undefined
}

function func_unknown_0x100000001(a0)
{
	let accu;
	accu = s14_2
	s14_2 = (s14_2 + a0)
	return (s14_2 + a0)
}

function func_cmpVer_0x100000000(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, accu;
	r6 = String(a0)
	r5 = r6["split"]
	r5 = r5(".")
	r1 = r5["map"](Number)
	r6 = String(a1)
	r5 = r6["split"]
	r5 = r5(".")
	r4 = r5["map"]
	r2 = r4(Number)
	r3 = 0
	while (true)
	{
		if (!r3 < 3) break
		accu = r1[r3]
		if (!r1[r3])
		{
			accu = 0
		}
		r4 = accu
		accu = r2[r3]
		if (!r2[r3])
		{
			accu = 0
		}
		if (r4 > accu)
		{
			return 1
		}
		accu = r1[r3]
		if (!r1[r3])
		{
			accu = 0
		}
		r4 = accu
		accu = r2[r3]
		if (!r2[r3])
		{
			accu = 0
		}
		if (!r4 < accu) continue
		return -1
		r3 = (r3 + 1)
	}
	return 0
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r0, r3, r4, r5, r6, accu;
	r3 = ctx0
	s1_3 = require
	s1_2 = __dirname
	s1_15 = func_cmpVer_0x100000000
	s1_16 = func_fetchVersionInfo_0x100000007
	s1_17 = func_0x370b_0x10000000a
	s1_18 = func_0x15ec_0x10000000c
	s1_19 = func_download_0x100000011
	s1_20 = func_sha256File_0x100000012
	s1_21 = func_copyDir_0x100000013
	s1_4 = func_0x370b_0x10000000a
	accu = func_unknown_0x100000015(s1_18, 550078)
	s1_5 = s1_3("fs")
	r5 = "path"
	s1_6 = s1_3(r5)
	s1_7 = s1_3("http")
	r5 = "https"
	s1_8 = s1_3(r5)
	r5 = "crypto"
	s1_9 = s1_3(r5)
	r5 = "child_process"
	r4 = s1_3(r5)
	s1_10 = r4["execSync"]
	r0 = s1_3("./store")
	s1_11 = s1_3("./license")
	s1_12 = r0["ROOT"]
	s1_13 = func_unknown_0x100000016()
	r6 = [0, 0, 0, 0, "cache", 0, 0, 0]
	r6[0] = "config"
	r6[1] = "srv"
	r6[2] = "logs"
	r6[3] = "run"
	r6[5] = "node_modules"
	r6[6] = ".git"
	r6[7] = "dist"
	accu = Set
	s1_14 = Set(r6)
	r5 = "exports"
	r6 = {"status": null, "apply": null, "LOCAL_VERSION": null}
	r6["status"] = func_status_0x100000008
	r6["apply"] = func_apply_0x100000014
	r6["LOCAL_VERSION"] = s1_13
	module[r5] = r6
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
