// Decompiled from binary src/platform.js (V8 10.2.154.4-node.8 code cache, 3923 source chars, 6240 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x100000007()
{
	r0 = func_unknown_0x100000006
	return r0
}
function func_unknown_0x100000006(a0, a1, a2, a3, a4)
{
	r10 = Scope[0]
	Scope[1][3] = func_0x4636_0x100000001
	Scope[1][4] = func_0x100e_0x100000003
	Scope[1][2] = func_0x4636_0x100000001
	ACCU = func_unknown_0x100000005(Scope[1][4], 725897)
	Scope[1][5] = a1("fs")
	r12 = "path"
	Scope[1][6] = a1(r12)
	r0 = a1("os")
	r11 = process["env"]
	r1 = !(!Boolean(r11["AMAAN_DATA_DIR"]))
	r2 = !(!Boolean(process["pkg"]))
	r11 = process["platform"]
	r3 = r11 === "win32"
	r11 = process["platform"]
	ACCU = r11 === "linux"
	if (r11 === "linux")
	{
		ACCU = !Boolean(r1)
	}
	r4 = ACCU
	r11 = Scope[1][6]["join"]
	r5 = r11(a4, "..")
	r11 = process["env"]
	ACCU = r11["AMAAN_DATA_DIR"]
	if (r11["AMAAN_DATA_DIR"])
	{
		r11 = process["env"]
		ACCU = r11["AMAAN_DATA_DIR"]
	}
	else
	{
		ACCU = r2
		if (r2)
		{
			r11 = Scope[1][6]["dirname"]
			ACCU = r11(process["execPath"])
		}
		else
		{
			ACCU = r5
		}
	}
	r6 = ACCU
	ACCU = r3
	if (r3)
	{
		ACCU = !Boolean(r1)
	}
	r7 = ACCU
	ACCU = r1
	if (r1)
	{
		ACCU = "android"
	}
	else
	{
		ACCU = r3
		if (r3)
		{
			ACCU = "windows"
		}
		else
		{
			if (r4)
			{
				ACCU = "linux"
			}
			else
			{
				ACCU = process["platform"]
			}
		}
	}
	r8 = ACCU
	ACCU = r3
	if (r3)
	{
		ACCU = "ffmpeg.exe"
	}
	else
	{
		ACCU = "ffmpeg"
	}
	Scope[1][7] = ACCU
	r12 = "exports"
	r13 = new {"isAndroid": null, "isPkg": null, "isWindows": null, "isLinux": null, "snapshotDir": null, "dataDir": null, "servesHlsViaNginx": null, "label": null, "ffmpegBinName": null, "resolveFfmpeg": null, "os": null}
	r13["isAndroid"] = r1
	r13["isPkg"] = r2
	r13["isWindows"] = r3
	r13["isLinux"] = r4
	r13["snapshotDir"] = r5
	r13["dataDir"] = r6
	r13["servesHlsViaNginx"] = r7
	r13["label"] = r8
	r13["ffmpegBinName"] = Scope[1][7]
	r13["resolveFfmpeg"] = func_resolveFfmpeg_0x100000004
	r13["os"] = r0
	a2[r12] = r13
	return undefined
}
function func_unknown_0x100000005(a0, a1)
{
	r0 = func_0x4636_0x100000001
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(150)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(157)
			r4 = (r4 * (parseInt(r6) \ 2))
			r6 = r0(152)
			r4 = (r4 + (parseInt(r6) \ 3))
			r6 = r0(165)
			r5 = ((-parseInt(r6)) \ 4)
			r7 = r0(168)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 5)))
			r6 = r0(158)
			r4 = (r4 + ((-parseInt(r6)) \ 6))
			r6 = r0(161)
			r5 = ((-parseInt(r6)) \ 7)
			r7 = r0(151)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 8)))
			r6 = r0(160)
			r5 = ((-parseInt(r6)) \ 9)
			r7 = r0(153)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 10)))
			r6 = r0(164)
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
function func_resolveFfmpeg_0x100000004(a0)
{
	r3 = process["env"]
	if (r3["FFMPEG_PATH"])
	{
		r5 = process["env"]
		r5 = r5["FFMPEG_PATH"]
		if (Scope[1][5]["existsSync"](r5))
		{
			r3 = process["env"]
			return r3["FFMPEG_PATH"]
		}
	}
	ACCU = a0
	if (a0)
	{
		ACCU = a0 === "ffmpeg"
		if (!a0 === "ffmpeg")
		{
			r3 = Scope[1][5]["existsSync"]
			if (r3(a0))
			{
				return a0
			}
		}
	}
	r3 = Scope[1]
	try
	{
		r4 = Scope[1][6]["join"]
		r6 = Scope[1][6]["dirname"]
		r8 = process["execPath"]
		r6 = r6(r8)
		r2 = r4(r6, Scope[1][7])
		r4 = Scope[1][5]["existsSync"]
		ACCU = r4(r2)
		if (r4(r2))
		{
			return r2
		}
	}
	catch
	{
		r4 = ACCU
		ACCU = null
		ACCU = Scope[3]
		r4 = Scope[1]
	}
	r3 = Scope[1]
	try
	{
		r4 = Scope[1][6]["join"]
		r6 = process["cwd"]
		r6 = r6()
		r1 = r4(r6, Scope[1][7])
		r4 = Scope[1][5]["existsSync"]
		ACCU = r4(r1)
		if (r4(r1))
		{
			return r1
		}
	}
	catch
	{
		r4 = ACCU
		ACCU = null
		ACCU = Scope[4]
		r4 = Scope[1]
	}
	ACCU = a0
	if (!a0)
	{
		ACCU = "ffmpeg"
	}
	return ACCU
}
function func_0x100e_0x100000003()
{
	r0 = Scope[1]
	Scope[5][2] = new ["rKznuevhx1bbveG", "mJiZmJHqBwPctMS", "nZeWmtm0mK5yyMHJwG", "yw5KCM9Pza", "ntu5ntK5m2PZEhDdrG", "mtrJwKv2DwS", "zxHWB3j0CW", "D2LUzg93CW", "mtm1nJG2odD1EKniwvy", "nhngAwfOvG", "y3DK", "zxHLy1bHDgG", "nZe5mdK1nvjNyxPRAW", "zMzTCgvN", "D2LUmZi", "zw52", "qu1bqu5Frefuqv9esvi", "Cgf0Aa", "BgLUDxG", "zgLYBMfTzq", "zxHPC3rZu3LUyW", "otv6A3DVsLC", "mJqWmJeZnMrTBurvzW", "mJC2mZGXnKfPzNL2ua", "mJbkyvHiDxq", "CgXHDgzVCM0", "AM9PBG"]
	Scope[1][4] = func_0x100e_0x100000002
	return Scope[1][4]()
}
function func_0x100e_0x100000002()
{
	return Scope[5][2]
}
function func_0x4636_0x100000001(a0, a1)
{
	a0 = (a0 - 146)
	r0 = Scope[1][4]()
	r1 = r0[a0]
	if (Scope[1][3]["HQNbpt"] == undefined)
	{
		Scope[1][3]["iPHgyF"] = func_0x2767ac_0x100000000
		Scope[1][3]["urvxRp"] = {}
		Scope[1][3]["HQNbpt"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][3]["urvxRp"][r4])
	{
		r1 = Scope[1][3]["iPHgyF"](r1)
		Scope[1][3]["urvxRp"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][3]["urvxRp"][r4]
	}
	return r1
}
function func_0x2767ac_0x100000000(a0)
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
