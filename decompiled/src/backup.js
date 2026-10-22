// Decompiled from binary src/backup.js (V8 10.2.154.4-node.8 code cache, 7035 source chars, 11904 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x10000000e()
{
	r0 = func_unknown_0x10000000d
	return r0
}
function func_unknown_0x10000000d(a0, a1, a2, a3, a4)
{
	r2 = Scope[0]
	Scope[1][3] = func_0x5311_0x100000001
	Scope[1][12] = func_ts_0x100000003
	Scope[1][13] = func_rmrf_0x100000004
	Scope[1][14] = func_0x2101_0x100000008
	Scope[1][15] = func_copyDir_0x100000009
	Scope[1][16] = func_zipDir_0x10000000a
	Scope[1][17] = func_unzipTo_0x10000000b
	Scope[1][2] = func_0x5311_0x100000001
	ACCU = func_unknown_0x10000000c(Scope[1][14], 913537)
	Scope[1][4] = a1("fs")
	Scope[1][5] = a1("path")
	r4 = "child_process"
	r3 = a1(r4)
	Scope[1][6] = r3["execSync"]
	Scope[1][7] = a1("./store")
	Scope[1][8] = Scope[1][7]["ROOT"]
	r7 = "config.json"
	Scope[1][9] = Scope[1][5]["join"](Scope[1][8], "config", r7)
	r6 = "srv"
	r7 = "uploads"
	Scope[1][10] = Scope[1][5]["join"](Scope[1][8], r6, r7)
	r3 = Scope[1][5]["join"]
	r6 = "cache"
	r7 = "backup-tmp"
	Scope[1][11] = r3(Scope[1][8], r6, r7)
	r4 = new {"createBackup": null, "restoreBackup": null}
	r4["createBackup"] = func_createBackup_0x100000005
	r4["restoreBackup"] = func_restoreBackup_0x100000006
	a2["exports"] = r4
	return undefined
}
function func_unknown_0x10000000c(a0, a1)
{
	r0 = func_0x5311_0x100000001
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(503)
			r4 = (parseInt(r5) \ 1)
			r6 = r0(518)
			r4 = (r4 * ((-parseInt(r6)) \ 2))
			r6 = r0(508)
			r5 = ((-parseInt(r6)) \ 3)
			r7 = r0(480)
			r4 = (r4 + (r5 * (parseInt(r7) \ 4)))
			r6 = r0(494)
			r5 = (parseInt(r6) \ 5)
			r7 = r0(475)
			r4 = (r4 + (r5 * (parseInt(r7) \ 6)))
			r6 = r0(520)
			r4 = (r4 + (parseInt(r6) \ 7))
			r6 = r0(477)
			r4 = (r4 + (parseInt(r6) \ 8))
			r6 = r0(513)
			r5 = (parseInt(r6) \ 9)
			r7 = r0(499)
			r4 = (r4 + (r5 * (parseInt(r7) \ 10)))
			r6 = r0(491)
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
function func_unzipTo_0x10000000b(a0, a1)
{
	r2 = process["platform"]
	if (r2 === "win32")
	{
		r2 = "powershell -NoProfile -Command \"Expand-Archive -LiteralPath '"
		r2 = (r2 + a0)
		r2 = (r2 + "' -DestinationPath '")
		r2 = (r2 + a1)
		r1 = (r2 + "' -Force\"")
		r4 = new {"timeout": 120000}
		ACCU = Scope[1][6](r1, r4)
	}
	else
	{
		r3 = "unzip -o -q \""
		r3 = (r3 + a0)
		r3 = (r3 + "\" -d \"")
		r3 = (r3 + a1)
		r3 = (r3 + "\"")
		r4 = new {"timeout": 120000}
		ACCU = Scope[1][6](r3, r4)
	}
	return undefined
}
function func_zipDir_0x10000000a(a0, a1)
{
	r2 = process["platform"]
	if (r2 === "win32")
	{
		r2 = "powershell -NoProfile -Command \"Compress-Archive -Path '"
		r2 = (r2 + a0)
		r2 = (r2 + "\\\\*' -DestinationPath '")
		r2 = (r2 + a1)
		r1 = (r2 + "' -Force\"")
		r4 = new {"timeout": 120000}
		ACCU = Scope[1][6](r1, r4)
	}
	else
	{
		r3 = "cd \""
		r3 = (r3 + a0)
		r3 = (r3 + "\" && zip -r -q \"")
		r3 = (r3 + a1)
		r3 = (r3 + "\" .")
		r4 = new {"timeout": 120000}
		ACCU = Scope[1][6](r3, r4)
	}
	return undefined
}
function func_copyDir_0x100000009(a0, a1)
{
	r0 = func_0x5311_0x100000001
	r6 = Scope[1][4]["mkdirSync"]
	r9 = new {"recursive": null}
	r9["recursive"] = !(!Boolean([]))
	ACCU = r6(a1, r9)
	r9 = new {"withFileTypes": null}
	r9["withFileTypes"] = !(!Boolean([]))
	r8 = Scope[1][4]["readdirSync"](a0, r9)
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
			r13 = Scope[1][5][r0(489)]
			r16 = r12["value"][r0(514)]
			r4 = r13(a0, r16)
			r16 = r12["value"][r0(514)]
			r5 = Scope[1][5]["join"](a1, r16)
			r13 = r12["value"][r0(497)]
			r12 = r12["value"]
			if (r13())
			{
				ACCU = func_copyDir_0x100000009(r4, r5)
				continue
			}
			r13 = Scope[1][4][r0(521)]
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
function func_0x2101_0x100000008()
{
	r0 = Scope[1]
	Scope[3][2] = new ["C3rYAw5NAwz5", "AxneAxjLy3rVCNK", "z2v0tw9UDgG", "mJe3mdGXmfzZwLnvvq", "z2v0rgf0zq", "CgXHDgzVCM0", "uK9pva", "nJeWENnqrgHl", "Dg9ju09tDhjPBMC", "D2LUmZi", "yw1Hyw4TyMfJA3vWlq", "Cg93zxjZAgvSBcaTtM9qCM9MAwXLic1dB21Tyw5KicjdB21WCMvZCY1bCMnOAxzLic1qyxrOicC", "mtiZmdnUt0n3yKe", "Dw56AxaGlw8GlxeGiG", "zxHPC3rZu3LUyW", "jYaTrgvZDgLUyxrPB25qyxrOicC", "CMvSB2fK", "mJDozu5zyLy", "BMfTzq", "CgfKu3rHCNq", "2yxzHnMbinIN2ytyPDI52k/yP9IV2kFyQIdyR9IN2k7zHcdyP9Me2yByS9IU2kKG2kRyP9Me2ye", "z2v0sg91CNm", "ndq2mLfIzMvvDq", "Cg93zxjZAgvSBcaTtM9qCM9MAwXLic1dB21Tyw5KicjfEhbHBMqTqxjJAgL2zsaTtgL0zxjHBfbHDgGGjW", "nti0nZi1nNPLthPvua", "y29WEuzPBgvtEw5J", "zgLYBMfTzq", "iIaTzcaI", "2kFzHnMf2ytzGsdzHnINinMk2k3yQTMi2yOG2lNzHnMjinIL2lNyR9IN2k/yP9IQinI12kFzHnIT2kKGkgnVBMzPzY5QC29UinMf2yhzGTMi2k8P", "nJi0yKveqK5U", "2yhyTnMeinIL2yByTnIN2keG2yxzHnMbinIN2ytzHTIZ2k7yQsdyP9Me2kFyRDIQ2yRyP9I32yRyQq", "mtm0mdy5nZzYswviC2y", "DxbSB2fKCW", "y2qGiG", "mtaWmfbLsxrfsq", "BwTKAxjtEw5J", "yw1Hyw4TBgL2zs1IywnRDxa", "C3j2", "DxrMoa", "y2HPBgrFChjVy2vZCW", "CM1tEw5J", "lNPPCa", "2yxzHnMbinIN2ytzHTIZ2k7yQsdyP9Me2kFyRDIQ2yRyP9I32yRyQsdyUTMk2leG2yxzInIS2yJyRW", "AM9PBG", "y29UzMLNlMPZB24", "mtyXnZuWmZHfuejxt08", "iIaMjIb6AxaGlxiGlxeGiG", "y2fJAgu", "ode0mtvQsgXzA1q", "yMfJA3vWlxrTCa"]
	Scope[1][14] = func_0x2101_0x100000007
	return Scope[1][14]()
}
function func_0x2101_0x100000007()
{
	return Scope[3][2]
}
function func_restoreBackup_0x100000006(a0)
{
	if (!Scope[1][4]["existsSync"](a0))
	{
		r4 = "ملف النسخة الاحتياطية غير موجود"
		ACCU = Error
		ACCU = Error(r4)
	}
	ACCU = func_rmrf_0x100000004(Scope[1][11])
	r3 = Scope[1][4]["mkdirSync"]
	r6 = new {"recursive": null}
	r6["recursive"] = !(!Boolean([]))
	ACCU = r3(Scope[1][11], r6)
	ACCU = func_unzipTo_0x10000000b(a0, Scope[1][11])
	r3 = Scope[1][5]["join"]
	r1 = r3(Scope[1][11], "config.json")
	r3 = Scope[1][4]["existsSync"]
	ACCU = r3(r1)
	if (!r3(r1))
	{
		ACCU = func_rmrf_0x100000004(Scope[1][11])
		r4 = "الملف لا يحتوي على إعدادات صالحة (config.json مفقود)"
		ACCU = Error
		ACCU = Error(r4)
	}
	r3 = Scope[1]
	try
	{
		r9 = "utf8"
		r6 = Scope[1][4]["readFileSync"](r1, r9)
		ACCU = JSON["parse"](r6)
	}
	catch
	{
		r4 = ACCU
		ACCU = null
		ACCU = Scope[4]
		r4 = Scope[1]
		ACCU = func_rmrf_0x100000004(Scope[1][11])
		r6 = "ملف الإعدادات داخل النسخة تالف"
		ACCU = Error
		ACCU = Error(r6)
	}
	ACCU = Scope[1][4]["existsSync"](Scope[1][9])
	if (Scope[1][4]["existsSync"](Scope[1][9]))
	{
		r3 = Scope[1]
		try
		{
			ACCU = Scope[1][4]["copyFileSync"](Scope[1][9], (Scope[1][9] + ".before-restore"))
		}
		catch
		{
			r4 = ACCU
			ACCU = null
			ACCU = Scope[5]
			r4 = Scope[1]
		}
	}
	r3 = Scope[1][4]["mkdirSync"]
	r5 = Scope[1][5]["dirname"]
	r5 = r5(Scope[1][9])
	r6 = new {"recursive": null}
	r6["recursive"] = !(!Boolean([]))
	ACCU = r3(r5, r6)
	r3 = Scope[1][4]["copyFileSync"]
	ACCU = r3(r1, Scope[1][9])
	r3 = Scope[1][5]["join"]
	r2 = r3(Scope[1][11], "uploads")
	r3 = Scope[1][4]["existsSync"]
	if (r3(r2))
	{
		ACCU = func_rmrf_0x100000004(Scope[1][10])
		r3 = Scope[1][4]["mkdirSync"]
		r5 = Scope[1][5]["dirname"]
		r5 = r5(Scope[1][10])
		r6 = new {"recursive": null}
		r6["recursive"] = !(!Boolean([]))
		ACCU = r3(r5, r6)
		ACCU = func_copyDir_0x100000009(r2, Scope[1][10])
	}
	ACCU = func_rmrf_0x100000004(Scope[1][11])
	r3 = Scope[1][7]["reload"]
	ACCU = r3()
	return !(!Boolean([]))
}
function func_createBackup_0x100000005()
{
	ACCU = func_rmrf_0x100000004(Scope[1][11])
	r7 = new {"recursive": null}
	r7["recursive"] = !(!Boolean([]))
	ACCU = Scope[1][4]["mkdirSync"](Scope[1][11], r7)
	r4 = Scope[1][4]["existsSync"]
	if (r4(Scope[1][9]))
	{
		r4 = Scope[1][4]["copyFileSync"]
		r7 = Scope[1][5]["join"](Scope[1][11], "config.json")
		ACCU = r4(Scope[1][9], r7)
	}
	r4 = Scope[1][5]["join"]
	r7 = "uploads"
	r1 = r4(Scope[1][11], r7)
	if (Scope[1][4]["existsSync"](Scope[1][10]))
	{
		ACCU = func_copyDir_0x100000009(Scope[1][10], r1)
	}
	r6 = Scope[1][5]["join"](Scope[1][11], "backup-info.json")
	r7 = JSON["stringify"]
	r9 = new {"type": null, "version": 1, "createdAt": null}
	r9["type"] = "amaan-live-backup"
	r11 = Date(func_0x5311_0x100000001)
	r10 = r11["toISOString"]
	r9["createdAt"] = r10()
	r7 = r7(r9, null, 2)
	ACCU = Scope[1][4]["writeFileSync"](r6, r7)
	r7 = "cache"
	r2 = Scope[1][5]["join"](Scope[1][8], r7)
	r4 = Scope[1][4]["mkdirSync"]
	r7 = new {"recursive": null}
	r7["recursive"] = !(!Boolean([]))
	ACCU = r4(r2, r7)
	r4 = Scope[1][5]["join"]
	r7 = "amaan-backup-"
	r7 = (r7 + func_ts_0x100000003())
	r7 = (r7 + ".zip")
	r3 = r4(r2, r7)
	ACCU = func_rmrf_0x100000004(r3)
	ACCU = func_zipDir_0x10000000a(Scope[1][11], r3)
	ACCU = func_rmrf_0x100000004(Scope[1][11])
	r4 = Scope[1][4]["existsSync"]
	if (!r4(r3))
	{
		r5 = "فشل إنشاء ملف النسخة الاحتياطية"
		ACCU = Error
		ACCU = Error(r5)
	}
	return r3
}
function func_rmrf_0x100000004(a0)
{
	ACCU = func_0x5311_0x100000001
	r1 = Scope[1]
	try
	{
		r2 = Scope[1][4]["rmSync"]
		r5 = new {"recursive": null, "force": null}
		r5["recursive"] = !(!Boolean([]))
		r5["force"] = !(!Boolean([]))
		ACCU = r2(a0, r5)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[6]
		r2 = Scope[1]
	}
	return undefined
}
function func_ts_0x100000003()
{
	r2 = Scope[1]
	Scope[7][2] = func_0x5311_0x100000001
	r0 = Date(r0)
	r3 = ("" + r0["getFullYear"]())
	r5 = r0["getMonth"]
	r5 = (r5() + 1)
	r3 = (r3 + func_0x2eda3d_0x100000002(r5))
	r5 = r0["getDate"]
	r5 = r5()
	r3 = (r3 + func_0x2eda3d_0x100000002(r5))
	r3 = (r3 + "-")
	r5 = r0["getHours"]
	r5 = r5()
	r3 = (r3 + func_0x2eda3d_0x100000002(r5))
	r5 = r0["getMinutes"]()
	return (r3 + func_0x2eda3d_0x100000002(r5))
}
function func_0x2eda3d_0x100000002(a0)
{
	r1 = String(a0)
	r0 = r1["padStart"]
	return r0(2, "0")
}
function func_0x5311_0x100000001(a0, a1)
{
	a0 = (a0 - 472)
	r0 = Scope[1][14]()
	r1 = r0[a0]
	if (Scope[1][3]["WGERie"] == undefined)
	{
		Scope[1][3]["RtSeqR"] = func_0x27bed7_0x100000000
		Scope[1][3]["ICwAIE"] = {}
		Scope[1][3]["WGERie"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][3]["ICwAIE"][r4])
	{
		r1 = Scope[1][3]["RtSeqR"](r1)
		Scope[1][3]["ICwAIE"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][3]["ICwAIE"][r4]
	}
	return r1
}
function func_0x27bed7_0x100000000(a0)
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
