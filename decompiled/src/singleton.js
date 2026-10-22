// Decompiled from binary src/singleton.js (V8 10.2.154.4-node.8 code cache, 3500 source chars, 6224 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x10000000a()
{
	r0 = func_unknown_0x100000009
	return r0
}
function func_unknown_0x100000009(a0, a1, a2, a3, a4)
{
	r2 = Scope[0]
	Scope[1][5] = func_lockPath_0x100000000
	Scope[1][6] = func_isPidAlive_0x100000001
	Scope[1][7] = func_0x1aea_0x100000005
	Scope[1][8] = func_0x5b20_0x100000007
	Scope[1][2] = func_0x5b20_0x100000007
	ACCU = func_unknown_0x100000008(Scope[1][7], 828274)
	Scope[1][3] = a1("fs")
	r4 = "path"
	Scope[1][4] = a1(r4)
	r4 = "exports"
	r5 = new {"acquire": null, "release": null, "isPidAlive": null, "lockPath": null}
	r5["acquire"] = func_acquire_0x100000002
	r5["release"] = func_release_0x100000003
	r5["isPidAlive"] = func_isPidAlive_0x100000001
	r5["lockPath"] = func_lockPath_0x100000000
	a2[r4] = r5
	return undefined
}
function func_unknown_0x100000008(a0, a1)
{
	r0 = func_0x5b20_0x100000007
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(248)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(241)
			r4 = (r4 * (parseInt(r6) \ 2))
			r6 = r0(242)
			r5 = ((-parseInt(r6)) \ 3)
			r7 = r0(245)
			r4 = (r4 + (r5 * (parseInt(r7) \ 4)))
			r6 = r0(239)
			r4 = (r4 + (parseInt(r6) \ 5))
			r6 = r0(253)
			r4 = (r4 + (parseInt(r6) \ 6))
			r6 = r0(247)
			r4 = (r4 + ((-parseInt(r6)) \ 7))
			r6 = r0(244)
			r5 = ((-parseInt(r6)) \ 8)
			r7 = r0(246)
			r4 = (r4 + (r5 * (parseInt(r7) \ 9)))
			r6 = r0(255)
			r5 = ((-parseInt(r6)) \ 10)
			r7 = r0(234)
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
		ACCU = Scope[2]
		r4 = Scope[1]
		r7 = r1["shift"]()
		ACCU = r1["push"](r7)
	}
	return undefined
}
function func_0x5b20_0x100000007(a0, a1)
{
	a0 = (a0 - 233)
	r0 = Scope[1][7]()
	r1 = r0[a0]
	if (Scope[1][8]["VxCjCn"] == undefined)
	{
		Scope[1][8]["hjkfbl"] = func_0x55cb16_0x100000006
		Scope[1][8]["MqyCJb"] = {}
		Scope[1][8]["VxCjCn"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][8]["MqyCJb"][r4])
	{
		r1 = Scope[1][8]["hjkfbl"](r1)
		Scope[1][8]["MqyCJb"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][8]["MqyCJb"][r4]
	}
	return r1
}
function func_0x55cb16_0x100000006(a0)
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
function func_0x1aea_0x100000005()
{
	r0 = Scope[1]
	Scope[3][2] = new ["mJK1nda2mfnUD01WAq", "CMvHzezPBgvtEw5J", "zxHWB3j0CW", "CNvU", "nZD2ruLzuhK", "Dw5SAw5Ru3LUyW", "BwvZC2fNzq", "rvbfuK0", "w3nPBMDSzxrVBL0G2kRyUDIW2zhySDIQinMd2kRyP9IO2kKG2ylzGDMeinIN2ytzHTIZ2k7yQsdyP9Me2yJyP9IT2k/yQtOG", "mtmWoti3mgvQsxztuq", "zxjYB3i", "mZjWuwrsqxu", "nJL3uvj2tvq", "Cgf0Aa", "ntG0CM9hCg9R", "otq2mdbAwfvRBLO", "ndqZmZr1ufHsqxm", "nJC1mdq3mwDTyLj3DG", "mZKYotDmrKTsA1O", "AM9PBG", "y29Kzq", "D3jPDgvgAwXLu3LUyW", "Aw5ZDgfUy2uUBg9JAW", "ntK3mtm4nKHTz0Hvzq", "A2LSBa"]
	Scope[1][7] = func_0x1aea_0x100000004
	return Scope[1][7]()
}
function func_0x1aea_0x100000004()
{
	return Scope[3][2]
}
function func_release_0x100000003(a0)
{
	ACCU = func_0x5b20_0x100000007
	r1 = Scope[1]
	try
	{
		r2 = Scope[1][3]["unlinkSync"]
		r4 = func_lockPath_0x100000000(a0)
		ACCU = r2(r4)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[4]
		r2 = Scope[1]
	}
	return undefined
}
function func_acquire_0x100000002(a0, a1)
{
	ACCU = func_lockPath_0x100000000(a0)
	r1 = func_lockPath_0x100000000(a0)
	r3 = Scope[1]
	try
	{
		r5 = Scope[1][3]["readFileSync"]
		r5 = r5(r1, "utf8")
		r2 = parseInt(r5, 10)
		ACCU = func_isPidAlive_0x100000001(r2)
		if (func_isPidAlive_0x100000001(r2))
		{
			return !Boolean([])
		}
	}
	catch
	{
		r4 = ACCU
		ACCU = null
		ACCU = Scope[5]
		r4 = Scope[1]
	}
	r3 = Scope[1]
	try
	{
		r6 = Scope[1][4]["dirname"](r1)
		r7 = new {"recursive": null}
		r7["recursive"] = !(!Boolean([]))
		ACCU = Scope[1][3]["mkdirSync"](r6, r7)
		r4 = Scope[1][3]["writeFileSync"]
		r7 = String(a1)
		ACCU = r4(r1, r7)
	}
	catch
	{
		r4 = ACCU
		ACCU = null
		ACCU = Scope[6]
		r4 = Scope[1]
		r5 = console["error"]
		r7 = "[singleton] تعذّرت كتابة قفل النسخة الواحدة: "
		r7 = (r7 + Scope[6][2]["message"])
		ACCU = r5(r7)
	}
	return !(!Boolean([]))
}
function func_isPidAlive_0x100000001(a0)
{
	if (!Number["isInteger"](a0))
	ACCU = a0 <= 0
		|| (a0 <= 0)
	{
		ACCU = !Boolean([])
		return !Boolean([])
	}
	r1 = Scope[1]
	try
	{
		r2 = process["kill"]
		ACCU = r2(a0, 0)
		ACCU = !(!Boolean([]))
		return !(!Boolean([]))
	}
	catch {}
	r2 = ACCU
	ACCU = null
	ACCU = Scope[7]
	r2 = Scope[1]
	ACCU = Scope[7][2]
	if (Scope[7][2])
	{
		r3 = Scope[7][2]["code"]
		ACCU = r3 === "EPERM"
	}
	return !(!Boolean(ACCU))
}
function func_lockPath_0x100000000(a0)
{
	r1 = Scope[1][4]["join"]
	r4 = "run"
	r5 = "instance.lock"
	r3 = a0
	return r1(r3, r4, r5)
}
