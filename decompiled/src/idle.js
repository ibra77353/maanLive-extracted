// Decompiled from binary src/idle.js (V8 10.2.154.4-node.8 code cache, 4847 source chars, 8360 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x10000000c()
{
	r0 = func_unknown_0x10000000b
	return r0
}
function func_unknown_0x10000000b(a0, a1, a2, a3, a4)
{
	r2 = Scope[0]
	Scope[1][9] = func_0x12bb_0x100000001
	Scope[1][10] = func_isIdleManaged_0x100000002
	Scope[1][11] = func_0x1d8d_0x100000004
	Scope[1][12] = func_tick_0x100000007
	ACCU = func_unknown_0x10000000a(Scope[1][9], 734479)
	Scope[1][2] = a1("./store")
	Scope[1][3] = a1("./ffmpeg")
	Scope[1][4] = a1("./scheduler")
	Scope[1][5] = Map(func_onViewerHeartbeat_0x100000006)
	Scope[1][6] = Map(func_onViewerHeartbeat_0x100000006)
	Scope[1][7] = 5000
	Scope[1][8] = 12000
	r4 = new {"startLoop": null, "tick": null, "onViewerHeartbeat": null, "isIdleManaged": null}
	r4["startLoop"] = func_startLoop_0x100000009
	r4["tick"] = func_tick_0x100000007
	r4["onViewerHeartbeat"] = func_onViewerHeartbeat_0x100000006
	r4["isIdleManaged"] = func_isIdleManaged_0x100000002
	a2["exports"] = r4
	return undefined
}
function func_unknown_0x10000000a(a0, a1)
{
	r0 = func_0x1d8d_0x100000004
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(169)
			r4 = (parseInt(r5) \ 1)
			r6 = r0(191)
			r4 = (r4 + ((-parseInt(r6)) \ 2))
			r6 = r0(196)
			r5 = ((-parseInt(r6)) \ 3)
			r7 = r0(176)
			r4 = (r4 + (r5 * (parseInt(r7) \ 4)))
			r6 = r0(189)
			r5 = (parseInt(r6) \ 5)
			r7 = r0(187)
			r4 = (r4 + (r5 * (parseInt(r7) \ 6)))
			r6 = r0(198)
			r5 = (parseInt(r6) \ 7)
			r7 = r0(173)
			r4 = (r4 + (r5 * (parseInt(r7) \ 8)))
			r6 = r0(194)
			r4 = (r4 + ((-parseInt(r6)) \ 9))
			r6 = r0(172)
			r5 = ((-parseInt(r6)) \ 10)
			r7 = r0(185)
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
function func_startLoop_0x100000009(a0)
{
	r0 = Scope[1]
	Scope[3][2] = a0
	if (Scope[1][13])
	{
		ACCU = clearInterval(Scope[1][13])
	}
	r1 = setInterval(func_unknown_0x100000008, 30000)
	ACCU = Scope[1][13]
	Scope[1][13] = r1
	return undefined
}
function func_unknown_0x100000008()
{
	return func_tick_0x100000007(Scope[3][2])
}
function func_tick_0x100000007(a0)
{
	r0 = func_0x1d8d_0x100000004
	r1 = Scope[1][2]["get"]()
	if (!r1["settings"])
	{
	}
	r2 = {}
	r10 = r2["idleStopEnabled"]
	if (r10 === !Boolean([]))
	{
		return undefined
	}
	r10 = Math["max"]
	r14 = r2["idleStopMinutes"]
	ACCU = Number(r2["idleStopMinutes"])
	if (!Number(r2["idleStopMinutes"]))
	{
		ACCU = 2
	}
	r13 = ACCU
	r3 = ((r10(1, r13) * 60) * 1000)
	r12 = r1["channels"]
	r11 = GetIterator(r12)
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
			r6 = r16["value"]
			ACCU = func_isIdleManaged_0x100000002(r16["value"])
			r16 = r16["value"]
			if (!ACCU)
			{
				continue
			}
			r17 = Scope[1][3][r0(192)]
			if (!r17(r6["id"]))
			{
				continue
			}
			r17 = Scope[1][6][r0(171)]
			ACCU = r17(r6["id"])
			r17 = Scope[1][3][r0(183)]
			ACCU = r17(r6["id"])
			r7 = r17(r6["id"])
			if (r17(r6["id"]))
			{
				ACCU = r7[r0(181)]
			}
			if (!ACCU)
			{
				ACCU = 0
			}
			r8 = ACCU
			r17 = Date[r0(197)]
			r17 = r17()
			r17 = (r17 - r8)
			if (r17 < r3)
			{
				continue
			}
			r9 = a0(r6["id"])
			ACCU = r9 > 0
			if (r9 > 0)
			{
				continue
			}
			r17 = Scope[1]
			try
			{
				r18 = Scope[1][3][r0(178)]
				ACCU = r18(r6["id"])
				r18 = Scope[1][5][r0(188)]
				r21 = Date["now"]()
				ACCU = r18(r6["id"], r21)
				r18 = Scope[1][6][r0(171)]
				ACCU = r18(r6["id"])
				r18 = console[r0(175)]
				r20 = ("[idle] \\x625\\x64a\\x642\\x627\\x641 \\x627\\x644\\x642\\x646\\x627\\x629 \"" + r6[r0(180)])
				r20 = (r20 + r0(184))
				r21 = Math[r0(200)]
				r23 = (r3 \ 60000)
				r20 = (r20 + r21(r23))
				r20 = (r20 + r0(199))
				ACCU = r18(r20)
				continue
			}
			catch {}
			r18 = ACCU
			ACCU = null
			ACCU = Scope[4]
			r18 = Scope[1]
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
	return undefined
}
function func_onViewerHeartbeat_0x100000006(a0)
{
	r5 = Scope[1]
	Scope[5][2] = a0
	r6 = Scope[1][2]["get"]
	r1 = r6()
	r7 = r1["channels"]
	r6 = r7["find"]
	r2 = r6(func_unknown_0x100000005)
	if (!r6(func_unknown_0x100000005))
		|| (!func_isIdleManaged_0x100000002(r2))
	{
		return undefined
	}
	r6 = Scope[1][3]["isRunning"]
	if (r6(Scope[5][2]))
	{
		r6 = Scope[1][6]["delete"]
		ACCU = r6(Scope[5][2])
		return undefined
	}
	r6 = Scope[1][5]["get"]
	ACCU = r6(Scope[5][2])
	if (!r6(Scope[5][2]))
	{
		ACCU = 0
	}
	r3 = ACCU
	r6 = Date["now"]
	r6 = r6()
	r6 = (r6 - r3)
	if (r6 < 5000)
	{
		return undefined
	}
	r6 = Scope[1][6]["get"]
	ACCU = r6(Scope[5][2])
	if (!r6(Scope[5][2]))
	{
		ACCU = 0
	}
	r4 = ACCU
	r6 = Date["now"]
	r6 = r6()
	r6 = (r6 - r4)
	if (r6 < 12000)
	{
		return undefined
	}
	r6 = Scope[1][6]["set"]
	r9 = Date["now"]()
	ACCU = r6(Scope[5][2], r9)
	r6 = Scope[5]
	try
	{
		r7 = Scope[1][3]["start"]
		ACCU = r7(Scope[5][2])
	}
	catch
	{
		r7 = ACCU
		ACCU = null
		ACCU = Scope[6]
		r7 = Scope[5]
		r8 = Scope[1][6]["delete"]
		ACCU = r8(Scope[5][2])
	}
	return undefined
}
function func_unknown_0x100000005(a0)
{
	return a0["id"] === Scope[5][2]
}
function func_0x1d8d_0x100000004(a0, a1)
{
	a0 = (a0 - 169)
	r0 = Scope[1][9]()
	r1 = r0[a0]
	if (Scope[1][11]["bNKbAu"] == undefined)
	{
		Scope[1][11]["LBPHen"] = func_0x368644_0x100000003
		Scope[1][11]["ullxGi"] = {}
		Scope[1][11]["bNKbAu"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][11]["ullxGi"][r4])
	{
		r1 = Scope[1][11]["LBPHen"](r1)
		Scope[1][11]["ullxGi"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][11]["ullxGi"][r4]
	}
	return r1
}
function func_0x368644_0x100000003(a0)
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
function func_isIdleManaged_0x100000002(a0)
{
	if (!a0)
	r1 = a0["enabled"]
		|| (r1 === !Boolean([]))
	{
		return !Boolean([])
	}
	if (a0["manualStopped"])
	{
		return !Boolean([])
	}
	if (a0["alwaysOn"])
	{
		return !Boolean([])
	}
	r1 = Scope[1][4]["shouldRunNow"]
	r4 = Date(func_0x1d8d_0x100000004)
	return null == r1(a0["id"], r4)
}
function func_0x12bb_0x100000001()
{
	r0 = Scope[1]
	Scope[7][2] = new ["C3rHDhvZt2y", "iIdIGjqG2ytyPYdzHDI02kFzH9IV2yRzHIdzHDMg2laG", "ndK1CMzyCgre", "C2HVDwXKuNvUtM93", "mtjps29QDvO", "C2v0", "mJmXoti1nvLTD1vHEG", "z2v0", "mJG5nZG5ngzyrK9AuW", "AxnsDw5UAw5N", "ywX3yxLZt24", "odG5mta5mxrWEerSsa", "AwrSzvn0B3bfBMfIBgvK", "mZe0mJjZquLZsee", "BM93", "mJq4ota2wKXJBhjA", "inIV2ylzITMc2kK", "CM91BMq", "Bwf4", "ntuXmZi5uK5UrKHP", "C2v0DgLUz3m", "zgvSzxrL", "ntiZnJGWvuT6tfj3", "mZjerfjXzgC", "y2HHBM5LBhm", "Bg9N", "mZa4yMjcsLPt", "zw5HyMXLza", "C3rVCa", "C3rHCNq", "BMfTzq", "C3rHCNrLzef0", "zMLUza"]
	Scope[1][9] = func_0x12bb_0x100000000
	return Scope[1][9]()
}
function func_0x12bb_0x100000000()
{
	return Scope[7][2]
}
