// Decompiled from binary src/store.js (V8 10.2.154.4-node.8 code cache, 5371 source chars, 9680 bytecode bytes).
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
	r7 = Scope[0]
	Scope[1][9] = func_readDefault_0x100000000
	Scope[1][11] = func_0x3f0f_0x100000002
	Scope[1][12] = func_0x3dbb_0x100000004
	Scope[1][13] = func_load_0x100000005
	Scope[1][14] = func_save_0x100000006
	Scope[1][15] = func_get_0x100000007
	Scope[1][16] = func_setPassword_0x100000008
	Scope[1][2] = func_0x3dbb_0x100000004
	ACCU = func_unknown_0x10000000c(Scope[1][11], 479363)
	Scope[1][3] = a1("fs")
	r9 = "path"
	r0 = a1(r9)
	r9 = "crypto"
	Scope[1][4] = a1(r9)
	r1 = a1("./platform")
	r2 = r1["snapshotDir"]
	r3 = r1["dataDir"]
	r8 = r0["join"]
	Scope[1][5] = r8(r3, "config")
	r8 = r0["join"]
	r11 = "config.json"
	Scope[1][6] = r8(Scope[1][5], r11)
	r8 = r0["join"]
	r11 = "config"
	r9 = r0
	r10 = r2
	Scope[1][7] = r8(r10, r11, "config.default.json")
	r11 = "config.default.json"
	Scope[1][8] = r0["join"](Scope[1][5], r11)
	r9 = new {"ROOT": null, "load": null, "save": null, "get": null, "reload": null, "setPassword": null, "checkPassword": null, "newId": null}
	r9["ROOT"] = r3
	r9["load"] = func_load_0x100000005
	r9["save"] = func_save_0x100000006
	r9["get"] = func_get_0x100000007
	r9["reload"] = func_reload_0x10000000b
	r9["setPassword"] = func_setPassword_0x100000008
	r9["checkPassword"] = func_checkPassword_0x100000009
	r9["newId"] = func_newId_0x10000000a
	a2["exports"] = r9
	return undefined
}
function func_unknown_0x10000000c(a0, a1)
{
	r0 = func_0x3dbb_0x100000004
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(211)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(227)
			r4 = (r4 + (parseInt(r6) \ 2))
			r6 = r0(208)
			r4 = (r4 + ((-parseInt(r6)) \ 3))
			r6 = r0(220)
			r5 = ((-parseInt(r6)) \ 4)
			r7 = r0(224)
			r4 = (r4 + (r5 * (parseInt(r7) \ 5)))
			r6 = r0(191)
			r4 = (r4 + ((-parseInt(r6)) \ 6))
			r6 = r0(204)
			r4 = (r4 + (parseInt(r6) \ 7))
			r6 = r0(198)
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
function func_reload_0x10000000b()
{
	ACCU = Scope[1][10]
	return func_load_0x100000005()
}
function func_newId_0x10000000a(a0)
{
	ACCU = a0
	if (!a0)
	{
		ACCU = "id"
	}
	r1 = ACCU
	r1 = (r1 + "_")
	r3 = Scope[1][4]["randomBytes"](5)
	r4 = "hex"
	return (r1 + r3["toString"](r4))
}
function func_checkPassword_0x100000009(a0)
{
	r3 = func_get_0x100000007()
	r1 = r3["admin"]
	if (!r3["admin"]["hash"])
	{
		return !Boolean([])
	}
	r4 = Scope[1][4]["scryptSync"]
	r6 = String(a0)
	r4 = r4(r6, r3["admin"]["salt"], 32)
	r3 = r4["toString"]
	ACCU = r3("hex")
	r2 = r3("hex")
	r3 = Scope[1]
	try
	{
		r4 = Scope[1][4]["timingSafeEqual"]
		r6 = Buffer["from"]
		r6 = r6(r2, "hex")
		r7 = Buffer["from"]
		r9 = r1["hash"]
		r7 = r7(r9, "hex")
		ACCU = r4(r6, r7)
		return r4(r6, r7)
	}
	catch {}
	r4 = ACCU
	ACCU = null
	ACCU = Scope[3]
	r4 = Scope[1]
	return !Boolean([])
}
function func_setPassword_0x100000008(a0)
{
	r4 = Scope[1][4]["randomBytes"]
	r4 = r4(16)
	r3 = r4["toString"]
	r5 = "hex"
	r1 = r3(r5)
	r4 = Scope[1][4]["scryptSync"]
	r6 = String(a0)
	r7 = r1
	r4 = r4(r6, r7, 32)
	r5 = "hex"
	r2 = r4["toString"](r5)
	r3 = Scope[1][10]["admin"]
	r3["salt"] = r1
	r3 = Scope[1][10]["admin"]
	r4 = "hash"
	r3[r4] = r2
	r3 = Scope[1][10]["admin"]
	delete "defaultPassword"[r3]
	ACCU = func_save_0x100000006()
	return undefined
}
function func_get_0x100000007()
{
	if (!Scope[1][10])
	{
		ACCU = func_load_0x100000005()
	}
	return Scope[1][10]
}
function func_save_0x100000006()
{
	r1 = (Scope[1][6] + ".tmp")
	r2 = Scope[1][3]["writeFileSync"]
	r5 = JSON["stringify"]
	r5 = r5(Scope[1][10], null, 2)
	r6 = "utf8"
	r4 = r1
	ACCU = r2(r4, r5, r6)
	r2 = Scope[1][3]["renameSync"]
	ACCU = r2(r1, Scope[1][6])
	return undefined
}
function func_load_0x100000005()
{
	r8 = Scope[1][3]["existsSync"]
	if (!r8(Scope[1][5]))
	{
		r11 = new {"recursive": null}
		r11["recursive"] = !(!Boolean([]))
		ACCU = Scope[1][3]["mkdirSync"](Scope[1][5], r11)
	}
	if (!Boolean(Scope[1][3]["existsSync"](Scope[1][6])))
	{
		r8 = Scope[1][3]["writeFileSync"]
		r13 = func_readDefault_0x100000000()
		r11 = JSON["stringify"](r13, null, 2)
		ACCU = r8(Scope[1][6], r11)
	}
	r8 = JSON["parse"]
	r10 = Scope[1][3]["readFileSync"]
	r13 = "utf8"
	r10 = r10(Scope[1][6], r13)
	r8 = r8(r10)
	ACCU = Scope[1][10]
	Scope[1][10] = r8
	r1 = func_readDefault_0x100000000()
	r9 = "settings"
	r10 = Object["assign"]
	r12 = {}
	r13 = r1["settings"]
	if (!Scope[1][10]["settings"])
	{
	}
	r14 = {}
	Scope[1][10][r9] = r10(r12, r13, r14)
	r9 = new [0, 0]
	r9[0] = "admin"
	r11 = 201
	r9[1] = "license"
	r9 = GetIterator(r9)
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
			r17 = Object[r0(210)]
			r19 = {}
			r20 = r1[r14["value"]]
			ACCU = Scope[1][10][r14["value"]]
			r16 = r14["value"]
			r14 = r14["value"]
			if (ACCU) continue
			r21 = {}
			ACCU = r17(r19, r20, r21)
			Scope[1][10][r16] = r17(r19, r20, r21)
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
	r9 = new [0, 0, "iptv", 0, "matches"]
	r9[0] = "sources"
	r9[1] = "channels"
	r11 = 207
	r9[3] = "schedules"
	r9 = GetIterator(r9)
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
			r5 = r14["value"]
			r15 = Array[r0(202)]
			ACCU = r15(Scope[1][10][r14["value"]])
			r14 = r14["value"]
			if (ACCU) continue
			ACCU = []
			Scope[1][10][r5] = []
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
	r8 = Scope[1][10]["admin"]
	if (!Boolean(r8["hash"]))
	{
		r9 = Scope[1][10]["admin"]
		ACCU = r9["defaultPassword"]
		if (!r9["defaultPassword"])
		{
			ACCU = "admin123"
		}
		r9 = ACCU
		ACCU = func_setPassword_0x100000008(r9)
	}
	return Scope[1][10]
}
function func_0x3dbb_0x100000004(a0, a1)
{
	a0 = (a0 - 189)
	r0 = Scope[1][11]()
	r1 = r0[a0]
	if (Scope[1][12]["BOdbBI"] == undefined)
	{
		Scope[1][12]["YUuDTg"] = func_0x3ebbb5_0x100000003
		Scope[1][12]["wSeeCR"] = {}
		Scope[1][12]["BOdbBI"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][12]["wSeeCR"][r4])
	{
		r1 = Scope[1][12]["YUuDTg"](r1)
		Scope[1][12]["wSeeCR"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][12]["wSeeCR"][r4]
	}
	return r1
}
function func_0x3ebbb5_0x100000003(a0)
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
function func_0x3f0f_0x100000002()
{
	r0 = Scope[1]
	Scope[4][2] = new ["yxnZAwDU", "nteXntKYseP4EhjT", "C2nYExb0u3LUyW", "ywrTAw4", "Dg9tDhjPBMC", "y2HHBM5LBhm", "CMvUyw1Lu3LUyW", "lNrTCa", "y3j5ChrV", "zxHPC3rZu3LUyW", "mta3odC4ohvktKzAqW", "AM9PBG", "CMvHzezPBgvtEw5J", "C3rYAw5NAwz5", "mtvYrfrqExy", "ywrTAw4XmJm", "y29UzMLNlMrLzMf1BhqUANnVBG", "mtC0mJGXnLvdA2nNyG", "C2v0DgLUz3m", "zgvMyxvSDfbHC3n3B3jK", "y29UzMLNlMPZB24", "AgfZAa", "ndG3nteZmMjPDejjua", "DxrMoa", "C25HChnOB3reAxi", "D3jPDgvgAwXLu3LUyW", "C291CMnLCW", "Agv4", "zNjVBq", "mtiWodKZmtjPA2nIz0K", "zgf0yurPCG", "CgfYC2u", "BgLJzw5Zzq", "AxnbCNjHEq", "y29UzMLN", "mZyYmtq2ner3BLvjta", "CMfUzg9TqNL0zxm", "Cgf0Aa", "C2nOzwr1BgvZ", "odyYmdy4tM9JDNDX", "DgLTAw5Nu2fMzuvXDwfS"]
	Scope[1][11] = func_0x3f0f_0x100000001
	return Scope[1][11]()
}
function func_0x3f0f_0x100000001()
{
	return Scope[4][2]
}
function func_readDefault_0x100000000()
{
	r2 = Scope[1][3]["existsSync"]
	ACCU = r2(Scope[1][8])
	if (r2(Scope[1][8]))
	{
		ACCU = Scope[1][8]
	}
	else
	{
		ACCU = Scope[1][7]
	}
	r1 = ACCU
	r7 = "utf8"
	r4 = Scope[1][3]["readFileSync"](r1, r7)
	return JSON["parse"](r4)
}
