// Decompiled from binary src/update.js (V8 10.2.154.4-node.8 code cache, 11509 source chars, 20808 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x100000018()
{
	r0 = func_unknown_0x100000017
	return r0
}
function func_unknown_0x100000017(a0, a1, a2, a3, a4)
{
	r3 = Scope[0]
	Scope[1][3] = a1
	Scope[1][2] = a4
	Scope[1][15] = func_cmpVer_0x100000000
	Scope[1][16] = func_fetchVersionInfo_0x100000007
	Scope[1][17] = func_0x370b_0x10000000a
	Scope[1][18] = func_0x15ec_0x10000000c
	Scope[1][19] = func_download_0x100000011
	Scope[1][20] = func_sha256File_0x100000012
	Scope[1][21] = func_copyDir_0x100000013
	Scope[1][4] = func_0x370b_0x10000000a
	ACCU = func_unknown_0x100000015(Scope[1][18], 550078)
	Scope[1][5] = Scope[1][3]("fs")
	r5 = "path"
	Scope[1][6] = Scope[1][3](r5)
	Scope[1][7] = Scope[1][3]("http")
	r5 = "https"
	Scope[1][8] = Scope[1][3](r5)
	r5 = "crypto"
	Scope[1][9] = Scope[1][3](r5)
	r5 = "child_process"
	r4 = Scope[1][3](r5)
	Scope[1][10] = r4["execSync"]
	r0 = Scope[1][3]("./store")
	Scope[1][11] = Scope[1][3]("./license")
	Scope[1][12] = r0["ROOT"]
	Scope[1][13] = func_unknown_0x100000016()
	r6 = new [0, 0, 0, 0, "cache", 0, 0, 0]
	r6[0] = "config"
	r6[1] = "srv"
	r6[2] = "logs"
	r6[3] = "run"
	r6[5] = "node_modules"
	r6[6] = ".git"
	r6[7] = "dist"
	ACCU = Set
	Scope[1][14] = Set(r6)
	r5 = "exports"
	r6 = new {"status": null, "apply": null, "LOCAL_VERSION": null}
	r6["status"] = func_status_0x100000008
	r6["apply"] = func_apply_0x100000014
	r6["LOCAL_VERSION"] = Scope[1][13]
	a2[r5] = r6
	return undefined
}
function func_unknown_0x100000016()
{
	r6 = new [0, 0]
	r7 = Scope[1][6]["join"]
	r10 = "package.json"
	r6[0] = r7(Scope[1][12], r10)
	r8 = Scope[1][6]
	r9 = Scope[1][2]
	r11 = "package.json"
	r6[1] = Scope[1][6]["join"](Scope[1][2], "..", r11)
	r1 = r6
	r6 = GetIterator(r1)
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
			ACCU = r11["value"]
			r12 = Scope[1]
			try
			{
				r13 = Scope[1][5][r0(224)]
				ACCU = r13(r11["value"])
				if (r13(r11["value"]))
				{
					r15 = Scope[1][5][r0(181)]
					r18 = r0(178)
					r15 = r15(r11["value"], r18)
					r13 = JSON["parse"](r15)
					ACCU = r13[r0(208)]
					if (!r13[r0(208)])
					{
						ACCU = "0.0.0"
					}
					r9 = ACCU
					r8 = 1
					break
				}
				continue
			}
			catch {}
			r13 = ACCU
			ACCU = null
			ACCU = Scope[2]
			r13 = Scope[1]
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
	return "1.0.0"
}
function func_unknown_0x100000015(a0, a1)
{
	r0 = func_0x370b_0x10000000a
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(189)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(152)
			r4 = (r4 * ((-parseInt(r6)) \ 2))
			r6 = r0(159)
			r5 = ((-parseInt(r6)) \ 3)
			r7 = r0(176)
			r4 = (r4 + (r5 * (parseInt(r7) \ 4)))
			r6 = r0(232)
			r4 = (r4 + ((-parseInt(r6)) \ 5))
			r6 = r0(167)
			r4 = (r4 + ((-parseInt(r6)) \ 6))
			r6 = r0(165)
			r5 = ((-parseInt(r6)) \ 7)
			r7 = r0(196)
			r4 = (r4 + (r5 * (parseInt(r7) \ 8)))
			r6 = r0(228)
			r4 = (r4 + ((-parseInt(r6)) \ 9))
			r6 = r0(154)
			r5 = (parseInt(r6) \ 10)
			r7 = r0(243)
			r2 = (r4 + (r5 * (parseInt(r7) \ 11)))
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
function func_apply_0x100000014()
{
	r16 = <closure>
	r17 = <this>
	r0 = ACCU
	r16 = Scope[1]
	try
	{
		r17 = Scope[1][11]["getUpdateInfo"]
		ACCU = Scope[1][11]["getUpdateInfo"]()
		if (!Scope[1][11]["getUpdateInfo"]())
		{
			r18 = func_fetchVersionInfo_0x100000007()
			r17 = r0
			r17 = await r18
			r18 = _GeneratorGetResumeMode(r0)
			if (!r18 === 0)
			{
				ACCU = r17
			}
			ACCU = r17
		}
		r2 = ACCU
		if (!ACCU)
			|| (!r2["url"])
			|| (!r2["version"])
		{
			r18 = "لا يوجد تحديث منشور"
			ACCU = Error
			ACCU = Error(r18)
		}
		r18 = r2["version"]
		r17 = func_cmpVer_0x100000000(r18, Scope[1][13])
		if (r17 <= 0)
		{
			r17 = Error
			ACCU = Error
			ACCU = Error((("\\x627\\x644\\x646\\x638\\x627\\x645 \\x645\\x62d\\x62f\\x64e\\x651\\x62b \\x628\\x627\\x644\\x641\\x639\\x644 (\\x627\\x644\\x625\\x635\\x62f\\x627\\x631 " + Scope[1][13]) + ")"))
		}
		r17 = Scope[1][6]["join"]
		r20 = "cache"
		r3 = r17(Scope[1][12], r20)
		r17 = Scope[1][5]["mkdirSync"]
		r20 = new {"recursive": null}
		r20["recursive"] = !(!Boolean([]))
		ACCU = r17(r3, r20)
		r18 = \\\\\.exe(\\\\?|$)\
		r17 = r18["test"]
		r19 = r2["url"]
		ACCU = r18["test"](r19)
		if (!r18["test"](r19))
		{
			r17 = r2["fileType"]
			ACCU = r17 === "exe"
		}
		r4 = ACCU
		if (ACCU)
		{
			if (!process["pkg"])
			{
				r18 = "تحديث EXE يعمل فقط على النسخة المحزومة (EXE)"
				ACCU = Error
				ACCU = Error(r18)
			}
			r17 = Scope[1][6]["join"]
			r20 = "AmaanLive.new.exe"
			r10 = r17(r3, r20)
			r18 = r2["url"]
			r18 = func_download_0x100000011(r18, r10)
			r17 = r0
			r17 = await r18
			r18 = _GeneratorGetResumeMode(r0)
			if (!r18 === 0)
			{
				ACCU = r17
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
					ACCU = Error
					ACCU = Error(r18)
				}
			}
			r20 = "swap-update.bat"
			r12 = Scope[1][6]["join"](r3, r20)
			r17 = "@echo off\r\n"
			r17 = (r17 + "echo تطبيق التحديث...\r\n")
			r17 = (r17 + ":wait\r\n")
			r17 = (r17 + "timeout /t 1 /nobreak >nul\\r\\n")
			r17 = (r17 + "tasklist /FI \"IMAGENAME eq ")
			r18 = Scope[1][6]["basename"]
			r17 = (r17 + r18(process["execPath"]))
			r17 = (r17 + "\" 2>nul | find /I \"")
			r18 = Scope[1][6]["basename"]
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
			r17 = Scope[1][5]["writeFileSync"]
			r21 = "latin1"
			r19 = r12
			r20 = r13
			ACCU = r17(r19, r20, r21)
			r18 = "child_process"
			r17 = Scope[1][3](r18)
			r19 = "cmd.exe"
			r21 = new ["/c", 0]
			r21[1] = r12
			r20 = r21
			r21 = new {"detached": null, "stdio": "ignore", "windowsHide": null}
			r21["detached"] = !(!Boolean([]))
			r21["windowsHide"] = !(!Boolean([]))
			r18 = r17["spawn"](r19, r20, r21)
			r17 = r18["unref"]
			ACCU = r17()
			r17 = new {"from": null, "to": null, "exe": null}
			r17["from"] = Scope[1][13]
			r17["to"] = r2["version"]
			r17["exe"] = !(!Boolean([]))
			r18 = r17
			r17 = r0
			return r18
		}
		r20 = "update.zip"
		r5 = Scope[1][6]["join"](r3, r20)
		r17 = Scope[1][6]["join"]
		r20 = "update_extract"
		r6 = r17(r3, r20)
		r18 = r2["url"]
		r18 = func_download_0x100000011(r18, r5)
		r17 = r0
		r17 = await r18
		r18 = _GeneratorGetResumeMode(r0)
		if (!r18 === 0)
		{
			ACCU = r17
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
				ACCU = Error
				ACCU = Error(r18)
			}
		}
		r17 = Scope[1][5]["rmSync"]
		r20 = new {"recursive": null, "force": null}
		r20["recursive"] = !(!Boolean([]))
		r20["force"] = !(!Boolean([]))
		ACCU = r17(r6, r20)
		r17 = Scope[1][5]["mkdirSync"]
		r20 = new {"recursive": null}
		r20["recursive"] = !(!Boolean([]))
		ACCU = r17(r6, r20)
		r17 = process["platform"]
		if (r17 === "win32")
		{
			r18 = "powershell -NoProfile -Command \"Expand-Archive -LiteralPath '"
			r18 = (r18 + r5)
			r18 = (r18 + "' -DestinationPath '")
			r18 = (r18 + r6)
			r18 = (r18 + "' -Force\"")
			r19 = new {"timeout": 180000}
			ACCU = Scope[1][10](r18, r19)
		}
		else
		{
			r18 = "unzip -o -q \""
			r18 = (r18 + r5)
			r18 = (r18 + "\" -d \"")
			r18 = (r18 + r6)
			r18 = (r18 + "\"")
			r19 = new {"timeout": 180000}
			ACCU = Scope[1][10](r18, r19)
		}
		r7 = r6
		r20 = new {"withFileTypes": null}
		r20["withFileTypes"] = !(!Boolean([]))
		r8 = Scope[1][5]["readdirSync"](r7, r20)
		r17 = r8["length"]
		if (r17 === 1)
		{
			r18 = r8[0]
			r17 = r18["isDirectory"]
			if (r17())
			{
				r17 = Scope[1][6]["join"]
				r20 = r8[0]
				r20 = r20["name"]
				r7 = r17(r6, r20)
			}
		}
		r17 = Scope[1][5]["existsSync"]
		r19 = Scope[1][6]["join"]
		r22 = "server.js"
		r19 = r19(r7, r22)
		if (!r17(r19))
		{
			r18 = "حزمة التحديث غير صالحة (server.js غير موجود داخلها)"
			ACCU = Error
			ACCU = Error(r18)
		}
		r20 = !(!Boolean([]))
		r18 = r7
		ACCU = func_copyDir_0x100000013(r18, Scope[1][12], r20)
		r20 = new {"recursive": null, "force": null}
		r20["recursive"] = !(!Boolean([]))
		r20["force"] = !(!Boolean([]))
		ACCU = Scope[1][5]["rmSync"](r6, r20)
		r17 = Scope[1][5]["rmSync"]
		r20 = new {"force": null}
		r20["force"] = !(!Boolean([]))
		ACCU = r17(r5, r20)
		r17 = new {"from": null, "to": null}
		r17["from"] = Scope[1][13]
		r17["to"] = r2["version"]
		r18 = r17
		r17 = r0
		return r18
	}
	catch {}
	r17 = ACCU
	ACCU = null
	ACCU = Scope[4]
	r17 = Scope[1]
	r18 = r0
	return Scope[4][2]
}
function func_copyDir_0x100000013(a0, a1, a2)
{
	r0 = func_0x370b_0x10000000a
	r6 = Scope[1][5]["mkdirSync"]
	r9 = new {"recursive": null}
	r9["recursive"] = !(!Boolean([]))
	ACCU = r6(a1, r9)
	r6 = Scope[1][5]["readdirSync"]
	r9 = new {"withFileTypes": null}
	r9["withFileTypes"] = !(!Boolean([]))
	r8 = r6(a0, r9)
	r7 = GetIterator(r8)
	r6 = r7["next"]
	ACCU = false
	r8 = false
	r11 = Scope[1]
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
				r13 = Scope[1][14][r0(205)]
				r15 = r12["value"][r0(233)]
				if (r13(r15))
				{
					continue
				}
			}
			r13 = Scope[1][6][r0(185)]
			r16 = r12["value"][r0(233)]
			r4 = r13(a0, r16)
			r13 = Scope[1][6][r0(185)]
			r16 = r12["value"][r0(233)]
			r5 = r13(a1, r16)
			r13 = r12["value"][r0(241)]
			if (r13())
			{
				r16 = !Boolean([])
				r14 = r4
				r15 = r5
				ACCU = func_copyDir_0x100000013(r14, r15, r16)
				continue
			}
			r13 = Scope[1][5][r0(190)]
			ACCU = r13(r4, r5)
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
		r13 = Scope[1]
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
	return undefined
}
function func_sha256File_0x100000012(a0)
{
	r3 = Scope[1][9]["createHash"]("sha256")
	r2 = r3["update"]
	r4 = Scope[1][5]["readFileSync"]
	r4 = r4(a0)
	r2 = r2(r4)
	r1 = r2["digest"]
	r3 = "hex"
	return r1(r3)
}
function func_download_0x100000011(a0, a1, a2)
{
	r0 = Scope[1]
	Scope[5][4] = a0
	Scope[5][3] = a1
	Scope[5][2] = a2
	ACCU = Promise
	return Promise(func_unknown_0x100000010)
}
function func_unknown_0x100000010(a0, a1)
{
	r1 = Scope[5]
	Scope[6][3] = a0
	Scope[6][2] = a1
	Scope[6][4] = func_0x370b_0x10000000a
	ACCU = undefined
	r2 = Scope[6]
	try
	{
		ACCU = URL
		ACCU = URL(Scope[5][4])
		Scope[6][5] = URL(Scope[5][4])
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[7]
		r3 = Scope[6]
		r6 = "رابط التحديث غير صالح"
		ACCU = Error
		r5 = Error(r6)
		return Scope[6][2](r5)
	}
	r2 = Scope[6][5]["protocol"]
	ACCU = r2 === "https:"
	if (r2 === "https:")
	{
		ACCU = Scope[1][8]
	}
	else
	{
		ACCU = Scope[1][7]
	}
	r0 = ACCU
	r2 = r0["get"]
	r5 = new {"timeout": 60000}
	r3 = r0
	Scope[6][6] = r2(Scope[6][5], r5, func_unknown_0x10000000e)
	r4 = "timeout"
	ACCU = Scope[6][6]["on"](r4, func_unknown_0x10000000f)
	r4 = "error"
	ACCU = Scope[6][6]["on"](r4, Scope[6][2])
	return undefined
}
function func_unknown_0x10000000f()
{
	r1 = Scope[6][6]["destroy"]
	ACCU = r1()
	r3 = "انتهت مهلة تنزيل التحديث"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[6][2](r2)
	return undefined
}
function func_unknown_0x10000000e(a0)
{
	r0 = Scope[6]
	Scope[8][2] = func_0x370b_0x10000000a
	r2 = new [301, 302, 307, 308]
	r1 = r2["includes"]
	if (r1(a0["statusCode"]))
	{
		if (a0["headers"]["location"])
		{
			ACCU = Scope[5][2]
			if (!Scope[5][2])
			{
				ACCU = 0
			}
			r1 = ACCU
			if (r1 < 3)
			{
				r1 = a0["resume"]
				ACCU = r1()
				r5 = a0["headers"]
				r5 = r5["location"]
				ACCU = URL
				r4 = URL(r5, Scope[6][5])
				r3 = r4["toString"]
				r3 = r3()
				ACCU = Scope[5][2]
				if (!Scope[5][2])
				{
					ACCU = 0
				}
				r5 = (ACCU + 1)
				r2 = func_download_0x100000011(r3, Scope[5][3], r5)
				return Scope[6][3](r2)
			}
		}
	}
	if (!a0["statusCode"] === 200)
	{
		r1 = a0["resume"]
		ACCU = r1()
		r3 = "فشل تنزيل التحديث: HTTP "
		r3 = (r3 + a0["statusCode"])
		ACCU = Error
		r2 = Error(r3)
		return Scope[6][2](r2)
	}
	Scope[8][3] = Scope[1][5]["createWriteStream"](Scope[5][3])
	ACCU = a0["pipe"](Scope[8][3])
	ACCU = Scope[8][3]["on"]("finish", func_unknown_0x10000000d)
	r3 = "error"
	ACCU = Scope[8][3]["on"](r3, Scope[6][2])
	return undefined
}
function func_unknown_0x10000000d()
{
	r0 = Scope[8][3]["close"]
	return r0(Scope[6][3])
}
function func_0x15ec_0x10000000c()
{
	r0 = Scope[1]
	Scope[9][2] = new ["mJyWr0j0ANvi", "Ahr0Chm", "mtyXodbru2XhAMO", "Dw56AxaGlw8GlxeGiG", "Ahr0Chm6", "C2HHmJu2", "BwfW", "m0zcwKrUsa", "Agv4", "C3j2", "AgvHzgvYCW", "C2vYDMvYlMPZ", "oNDHAxqncG", "n2zJzvDMBa", "zgvSiciLFMyWiG0k", "ntm4ntC4CLP4BLr4", "D3jPDgvgAwXLu3LUyW", "DxjS", "CNvU", "iIa+BNvSdqO", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyQTMg2llzITMeinIN2ytyQTIT2k/zITIR", "Dg9tDhjPBMC", "DgfZA2XPC3qGl0zjicjjtufhru5btuuGzxeG", "uK9pva", "mtG2mZC2CeDxEfri", "qgvJAg8GB2zMdqO", "DxrMoa", "y21KlMv4zq", "Dw5Yzwy", "CMvHzezPBgvtEw5J", "Bg9JyxrPB24", "zxjYB3i", "DgLTzw91Da", "AM9PBG", "ms4WlJa", "lMDPDa", "Cgf0Aa", "mJy3neP6zwzWEa", "y29WEuzPBgvtEw5J", "qw1Hyw5mAxzLlM5LDY5LEgu", "CMvZDw1L", "zgvZDhjVEq", "iIa+BNvSicyMigDVDg8GD2fPDa0k", "CgXHDgzVCM0", "nta2odG2ngLiwfnSzG", "2ytyPYdzITMi2kZyRYdyQTIT2k/zITIRinMf2yByTnMi2le", "y2XVC2u", "Dg9mB3DLCKnHC2u", "Cg93zxjZAgvSBcaTtM9qCM9MAwXLic1dB21Tyw5KicjfEhbHBMqTqxjJAgL2zsaTtgL0zxjHBfbHDgGGjW", "yMfZzw5HBwu", "2yhyTnMeinIN2ytyQTIT2ylzGIdzHDMginIZ2ytyP9Mf2kKG2yxzHnMbinIN2ytyQTIT2k/zITIRicHtseeTmJu2ksdIGjqG2kRzHsdyP9Me2kxzHnI62kFyOq", "iIaI", "2kRyRDIV2yRyQYbfweuG2yRyUDMf2yqG2yhzGTI3inI52ytzIsdyP9Me2yByS9IU2kKG2kFzHnMf2k3ySTMi2yxyQsaOrvHfkq", "AgfZ", "DxbKyxrL", "CMvHzgrPCLn5BMm", "DMvYC2LVBG", "BM9Kzv9TB2r1BgvZ", "y3j5ChrV", "DxbKyxrLlNPPCa", "BgvUz3rO", "C3bSAxq", "l2fWAs92zxjZAw9U", "DxbKyxrLx2v4DhjHy3q", "2k3ySTMf2kKG2kFzHnIQ2k3yR9Mk2kSG2lRzITIXinI12kFzHnIT2kKGkhnLCNzLCI5QCYdyUTMk2leG2yxzInIS2yJyRYdyR9IN2k7zHnMh2kCP", "Bgf0Aw4X", "teLdru5trv9trvjwrvi", "z2v0", "y2fJAgu", "ChjVDg9JB2W", "2yhyTnMeinIQ2yBySTMk2yqG2kFzHnIQ2k3yR9Mk2kS6ieHuvfaG", "zw5K", "zxHPC3rZu3LUyW", "CM1tEw5J", "CMvWBgfJzq", "2yhyTnMeinIN2ytyQTIT2ylzGIdzHDMginIZ2ytyP9Mf2kKG2yxzHnMbinIN2ytyQTIT2k/zITIRicJyQnI12yxyQsbtseeTmJu2inI62yRySsdzHDI32kFyQnMc2kKPiokaLcdyQTMfinIN2ytyPDMe2lRyP9IH", "ndC3mtC3m3D2vvvMBW", "jYaTrgvZDgLUyxrPB25qyxrOicC", "zgf0yq", "zMLSzvr5Cgu", "mZu0ntKZmgjMr3bywq", "BMfTzq", "BwfUzgf0B3j5", "zgLZDa", "2lhyP9IO2lCG2kFzHnIQ2k3yR9Mk2kSG2lRzITIXinI12kFzHnIT", "y2HPBgrFChjVy2vZCW", "zgLNzxn0", "C3DHCc11CgrHDguUyMf0", "Aw5JBhvKzxm", "AxneAxjLy3rVCNK", "zxHWB3j0CW", "mtuWmZDQy2D6rha", "zwnOBYdyQTI32kJzITMcinIN2ytyQTIT2k/zITIRlI4UdqO", "Bg9NCW", "BwTKAxjtEw5J", "y29UzMLN", "CgfJA2fNzs5QC29U", "C3rHDhvZq29Kzq"]
	Scope[1][18] = func_0x15ec_0x10000000b
	return Scope[1][18]()
}
function func_0x15ec_0x10000000b()
{
	return Scope[9][2]
}
function func_0x370b_0x10000000a(a0, a1)
{
	a0 = (a0 - 148)
	r0 = Scope[1][18]()
	r1 = r0[a0]
	if (Scope[1][17]["gnVipN"] == undefined)
	{
		Scope[1][17]["NbEZWn"] = func_0x5cf205_0x100000009
		Scope[1][17]["FUoWpG"] = {}
		Scope[1][17]["gnVipN"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][17]["FUoWpG"][r4])
	{
		r1 = Scope[1][17]["NbEZWn"](r1)
		Scope[1][17]["FUoWpG"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][17]["FUoWpG"][r4]
	}
	return r1
}
function func_0x5cf205_0x100000009(a0)
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
function func_status_0x100000008(a0)
{
	r5 = <closure>
	r6 = <this>
	r0 = ACCU
	r5 = Scope[1]
	try
	{
		r6 = Scope[1][11]["getUpdateInfo"]
		r2 = Scope[1][11]["getUpdateInfo"]()
		if (!Scope[1][11]["getUpdateInfo"]())
			|| (a0)
		{
			r7 = func_fetchVersionInfo_0x100000007()
			r6 = r0
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r0)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			r4 = r6
			if (r4)
			{
				r2 = r4
				ACCU = r2
			}
		}
		ACCU = r2
		if (r2)
		{
			ACCU = r2["version"]
			if (r2["version"])
			{
				if (r2["url"])
				{
					r7 = r2["version"]
					r6 = func_cmpVer_0x100000000(r7, Scope[1][13])
					ACCU = r6 > 0
				}
			}
		}
		r3 = !(!Boolean(ACCU))
		r6 = new {"currentVersion": null, "latestVersion": null, "available": null, "mandatory": null, "changelog": null}
		r6["currentVersion"] = Scope[1][13]
		ACCU = r2
		if (r2)
		{
			ACCU = r2["version"]
		}
		else
		{
			ACCU = Scope[1][13]
		}
		r6["latestVersion"] = ACCU
		r6["available"] = r3
		ACCU = r2
		if (r2)
		{
			ACCU = r2["mandatory"]
			if (r2["mandatory"])
			{
				ACCU = r3
			}
		}
		r6["mandatory"] = !(!Boolean(ACCU))
		if (r2)
		ACCU = r3
			&& (r3)
		{
			ACCU = r2["changelog"]
		}
		else
		{
			ACCU = ""
		}
		r6["changelog"] = ACCU
		r7 = r6
		r6 = r0
		return r7
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[10]
	r6 = Scope[1]
	r7 = r0
	return Scope[10][2]
}
function func_fetchVersionInfo_0x100000007()
{
	ACCU = Promise
	return Promise(func_unknown_0x100000006)
}
function func_unknown_0x100000006(a0)
{
	r2 = Scope[1]
	Scope[11][2] = a0
	Scope[11][3] = func_0x370b_0x10000000a
	r3 = Scope[11]
	ACCU = Scope[12]
	{
		ACCU = PushContext("Block")
		r4 = Scope[11]
		r7 = Scope[1][11]["LICENSE_SERVER"]
		r6 = r7["replace"]
		r8 = \\\\\/+$\
		r6 = r6(r8, "")
		r6 = (r6 + "/api/version")
		ACCU = URL
		r0 = URL(r6)
		ACCU = r0["protocol"] === "https:"
		if (r0["protocol"] === "https:")
		{
			ACCU = Scope[1][8]
		}
		else
		{
			ACCU = Scope[1][7]
		}
		r1 = ACCU
		r5 = r1["get"]
		r8 = new {"timeout": 10000}
		r6 = r1
		r7 = r0
		Scope[12][2] = r5(r7, r8, func_unknown_0x100000003)
		r7 = "timeout"
		ACCU = Scope[12][2]["on"](r7, func_unknown_0x100000004)
		r7 = "error"
		ACCU = Scope[12][2]["on"](r7, func_unknown_0x100000005)
	}
	catch
	{
		r5 = ACCU
		ACCU = null
		ACCU = Scope[13]
		r5 = Scope[11]
		ACCU = Scope[11][2](null)
	}
	return undefined
}
function func_unknown_0x100000005()
{
	return Scope[11][2](null)
}
function func_unknown_0x100000004()
{
	r1 = Scope[12][2]["destroy"]
	ACCU = r1()
	ACCU = Scope[11][2](null)
	return undefined
}
function func_unknown_0x100000003(a0)
{
	r1 = Scope[12]
	Scope[14][2] = ""
	r4 = "data"
	ACCU = a0["on"](r4, func_unknown_0x100000001)
	r4 = "end"
	ACCU = a0["on"](r4, func_unknown_0x100000002)
	return undefined
}
function func_unknown_0x100000002()
{
	r0 = Scope[14]
	try
	{
		r2 = JSON["parse"](Scope[14][2])
		ACCU = r2["update"]
		if (!r2["update"])
		{
			ACCU = null
		}
		r2 = ACCU
		ACCU = Scope[11][2](r2)
	}
	catch
	{
		r1 = ACCU
		ACCU = null
		ACCU = Scope[15]
		r1 = Scope[14]
		ACCU = Scope[11][2](null)
	}
	return undefined
}
function func_unknown_0x100000001(a0)
{
	ACCU = Scope[14][2]
	Scope[14][2] = (Scope[14][2] + a0)
	return (Scope[14][2] + a0)
}
function func_cmpVer_0x100000000(a0, a1)
{
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
		ACCU = r1[r3]
		if (!r1[r3])
		{
			ACCU = 0
		}
		r4 = ACCU
		ACCU = r2[r3]
		if (!r2[r3])
		{
			ACCU = 0
		}
		if (r4 > ACCU)
		{
			return 1
		}
		ACCU = r1[r3]
		if (!r1[r3])
		{
			ACCU = 0
		}
		r4 = ACCU
		ACCU = r2[r3]
		if (!r2[r3])
		{
			ACCU = 0
		}
		if (!r4 < ACCU) continue
		return -1
		r3 = (r3 + 1)
	}
	return 0
}
