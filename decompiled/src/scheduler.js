// Decompiled from binary src/scheduler.js (V8 10.2.154.4-node.8 code cache, 5748 source chars, 9768 bytecode bytes).
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
	r3 = Scope[0]
	Scope[1][4] = func_0x5d58_0x100000001
	Scope[1][5] = func_0xd839_0x100000003
	Scope[1][6] = func_toMinutes_0x100000004
	Scope[1][7] = func_slotActive_0x100000005
	Scope[1][8] = func_shouldRunNow_0x100000007
	Scope[1][10] = func_tick_0x100000008
	ACCU = func_unknown_0x10000000c(Scope[1][4], 293864)
	Scope[1][2] = a1("./store")
	Scope[1][3] = a1("./ffmpeg")
	r5 = "exports"
	r6 = new {"startLoop": null, "tick": null, "shouldRunNow": null, "nextOpenMinutes": null}
	r6["startLoop"] = func_startLoop_0x100000009
	r6["tick"] = func_tick_0x100000008
	r6["shouldRunNow"] = func_shouldRunNow_0x100000007
	r6["nextOpenMinutes"] = func_nextOpenMinutes_0x10000000b
	a2[r5] = r6
	return undefined
}
function func_unknown_0x10000000c(a0, a1)
{
	r0 = func_0xd839_0x100000003
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(326)
			r4 = (parseInt(r5) \ 1)
			r6 = r0(320)
			r4 = (r4 * ((-parseInt(r6)) \ 2))
			r6 = r0(318)
			r5 = ((-parseInt(r6)) \ 3)
			r7 = r0(316)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 4)))
			r6 = r0(327)
			r5 = (parseInt(r6) \ 5)
			r7 = r0(308)
			r4 = (r4 + (r5 * (parseInt(r7) \ 6)))
			r6 = r0(319)
			r5 = (parseInt(r6) \ 7)
			r7 = r0(310)
			r4 = (r4 + (r5 * (parseInt(r7) \ 8)))
			r6 = r0(324)
			r4 = (r4 + ((-parseInt(r6)) \ 9))
			r6 = r0(329)
			r4 = (r4 + (parseInt(r6) \ 10))
			r6 = r0(299)
			r5 = (parseInt(r6) \ 11)
			r7 = r0(325)
			r2 = (r4 + (r5 * ((-parseInt(r7)) \ 12)))
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
function func_nextOpenMinutes_0x10000000b(a0, a1)
{
	r15 = Scope[1]
	Scope[3][2] = a0
	Scope[3][3] = func_0xd839_0x100000003
	r16 = Scope[1][2]["get"]
	r0 = r16()
	r1 = r0["schedules"]["filter"](func_unknown_0x10000000a)
	if (!r1["length"])
	{
		return null
	}
	if (func_shouldRunNow_0x100000007(Scope[3][2], a1))
	{
		return 0
	}
	r16 = a1["getHours"]
	r16 = (r16() * 60)
	r20 = 309
	r17 = a1["getMinutes"]
	r2 = (r16 + r17())
	r6 = 0
	while (true)
	{
		if (!r6 < 8) break
		r19 = 321
		r16 = a1["getDay"]
		r16 = r16()
		r7 = ((r16 + r6) % 7)
		r17 = GetIterator(r1)
		r16 = r17["next"]
		ACCU = false
		r18 = false
		r21 = Scope[3]
		try
		{
			while (true)
			{
				r18 = true
				r22 = r16()
				if (r22["done"]) break
				r18 = false
				r9 = r22["value"]
				r27 = 302
				r25 = r22["value"]["days"]
				r22 = r22["value"]
				if (Array["isArray"](r25))
				r23 = r9["days"]
				ACCU = r23["length"]
					&& (r23["length"])
				{
					ACCU = r9["days"]
				}
				else
				{
					ACCU = new [0, 1, 2, 3, 4, 5, 6]
				}
				r10 = ACCU
				r26 = 328
				r23 = r10["includes"]
				if (!r23(r7))
				{
					continue
				}
				ACCU = r9["slots"]
				if (!r9["slots"])
				{
					ACCU = []
				}
				r25 = ACCU
				r24 = GetIterator(r25)
				r23 = r24["next"]
				ACCU = false
				r25 = false
				r28 = Scope[3]
				try
				{
					while (true)
					{
						r25 = true
						r29 = r23()
						if (r29["done"]) break
						r25 = false
						r31 = r29["value"]["start"]
						r13 = func_toMinutes_0x100000004(r31)
						r29 = r29["value"]
						if (undetectable === func_toMinutes_0x100000004(r31))
						{
							continue
						}
						r30 = (r6 * 1440)
						r30 = (r30 + r13)
						ACCU = r6 === 0
						if (r6 === 0)
						{
							ACCU = r2
						}
						else
						{
							ACCU = 0
						}
						r14 = (r30 - ACCU)
						if (r6 === 0)
						{
							if (r13 <= r2)
							{
								continue
							}
						}
						if (!r14 >= 0) continue
						if (!r14 < r3) continue
						r3 = r14
						ACCU = r3
					}
					ACCU = -1
					r27 = -1
					r26 = -1
				}
				catch
				{
					r27 = ACCU
					r26 = 0
				}
				if (!r25)
				{
					r30 = Scope[3]
					try
					{
						if (!r24["return"] == undefined)
						{
							ACCU = r24["return"]()
						}
						catch {}
					}
				}
				ACCU = null
				if (!r26 === 0) continue
				ACCU = 0
				r19 = 0
				r20 = r27
				break
			}
			ACCU = -1
			r20 = -1
			r19 = -1
		}
		catch
		{
			r20 = ACCU
			r19 = 0
		}
		if (!r18)
		{
			r23 = Scope[3]
			try
			{
				if (!r17["return"] == undefined)
				{
					ACCU = r17["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		if (!r19 === 0) continue
		ACCU = r20
		r6 = (r6 + 1)
	}
	ACCU = Infinity === Infinity
	if (Infinity === Infinity)
	{
		ACCU = null
	}
	else
	{
		ACCU = Infinity
	}
	return ACCU
}
function func_unknown_0x10000000a(a0)
{
	r0 = a0["channelId"]
	ACCU = r0 === Scope[3][2]
	if (r0 === Scope[3][2])
	{
		r0 = a0["enabled"]
		ACCU = !(r0 === !Boolean([]))
	}
	return ACCU
}
function func_startLoop_0x100000009()
{
	if (Scope[1][9])
	{
		ACCU = clearInterval(Scope[1][9])
	}
	r0 = setInterval(func_tick_0x100000008, 30000)
	ACCU = Scope[1][9]
	Scope[1][9] = r0
	ACCU = setTimeout(func_tick_0x100000008, 10000)
	return undefined
}
function func_tick_0x100000008()
{
	r0 = func_0xd839_0x100000003
	r11 = 313
	r8 = Scope[1][2]["get"]
	r1 = r8()
	r2 = Date(func_0xd839_0x100000003)
	r10 = r1["channels"]
	r9 = GetIterator(r10)
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
			r15 = r14["value"][r0(301)]
			if (r15 === !Boolean([]))
			{
				continue
			}
			if (r14["value"][r0(300)])
			{
				continue
			}
			r6 = func_shouldRunNow_0x100000007(r14["value"]["id"], r2)
			if (func_shouldRunNow_0x100000007(r14["value"]["id"], r2) == null)
			{
				continue
			}
			r15 = Scope[1][3][r0(323)]
			ACCU = r15(r14["value"]["id"])
			r7 = r15(r14["value"]["id"])
			r15 = Scope[1]
			try
			{
				if (r6)
				ACCU = r7
					&& (!r7)
				{
					r16 = Scope[1][3][r0(314)]
					ACCU = r16(r14["value"]["id"])
				}
				else
				{
					if (!r6)
					{
						if (r7)
						{
							r16 = Scope[1][3][r0(322)]
							ACCU = r16(r14["value"]["id"])
						}
					}
				}
				continue
			}
			catch {}
			r16 = ACCU
			ACCU = null
			ACCU = Scope[4]
			r16 = Scope[1]
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
	return undefined
}
function func_shouldRunNow_0x100000007(a0, a1)
{
	r11 = Scope[1]
	Scope[5][2] = a0
	Scope[5][3] = func_0xd839_0x100000003
	r12 = Scope[1][2]["get"]
	r0 = r12()
	r13 = r0["schedules"]
	r1 = r13["filter"](func_unknown_0x100000006)
	if (!r1["length"])
	{
		return null
	}
	r2 = a1["getDay"]()
	r12 = a1["getHours"]
	r12 = (r12() * 60)
	r15 = func_0xd839_0x100000003
	r16 = 309
	r13 = a1["getMinutes"]
	r3 = (r12 + r13())
	r13 = GetIterator(r1)
	r12 = r13["next"]
	ACCU = false
	r14 = false
	r17 = Scope[5]
	try
	{
		while (true)
		{
			r14 = true
			r18 = r12()
			if (r18["done"]) break
			r14 = false
			r7 = r18["value"]
			r19 = Array["isArray"]
			r22 = func_0xd839_0x100000003
			r23 = 302
			r21 = r18["value"]["days"]
			r18 = r18["value"]
			if (r19(r21))
			ACCU = r7["days"]["length"]
				&& (r7["days"]["length"])
			{
				ACCU = r7["days"]
			}
			else
			{
				ACCU = new [0, 1, 2, 3, 4, 5, 6]
			}
			r8 = ACCU
			if (!r8["includes"](r2))
			{
				continue
			}
			ACCU = r7["slots"]
			if (!r7["slots"])
			{
				ACCU = []
			}
			r21 = ACCU
			r20 = GetIterator(r21)
			r19 = r20["next"]
			ACCU = false
			r21 = false
			r24 = Scope[5]
			try
			{
				while (true)
				{
					r21 = true
					r25 = r19()
					if (r25["done"]) break
					r21 = false
					r28 = r2
					r29 = r3
					ACCU = func_slotActive_0x100000005(r25["value"], r28, r29)
					r25 = r25["value"]
					if (!ACCU) continue
					r23 = !(!Boolean([]))
					ACCU = 1
					r22 = 1
					break
				}
				ACCU = -1
				r23 = -1
				r22 = -1
			}
			catch
			{
				r23 = ACCU
				r22 = 0
			}
			if (!r21)
			{
				r26 = Scope[5]
				try
				{
					if (!r20["return"] == undefined)
					{
						ACCU = r20["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			switch (r22)
			default:
			{
				continue
			}
			case (0):
			{
				r15 = 0
				r16 = r23
				break
			}
			case (1):
			{}
			ACCU = 1
			r15 = 1
			r16 = r23
			break
		}
		ACCU = -1
		r16 = -1
		r15 = -1
	}
	catch
	{
		r16 = ACCU
		r15 = 0
	}
	if (!r14)
	{
		r19 = Scope[5]
		try
		{
			if (!r13["return"] == undefined)
			{
				ACCU = r13["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	switch (r15)
	default:
	{
		break
	}
	case (0):
	{
		ACCU = r16
	}
	case (1):
	{
		return r16
	}
	return !Boolean([])
}
function func_unknown_0x100000006(a0)
{
	r0 = a0["channelId"]
	ACCU = r0 === Scope[5][2]
	if (r0 === Scope[5][2])
	{
		r0 = a0["enabled"]
		ACCU = !(r0 === !Boolean([]))
	}
	return ACCU
}
function func_slotActive_0x100000005(a0, a1, a2)
{
	r1 = func_toMinutes_0x100000004(a0["start"])
	r4 = a0["end"]
	r2 = func_toMinutes_0x100000004(r4)
	if (undetectable === r1)
		|| (undetectable === r2)
	{
		return !Boolean([])
	}
	if (r1 <= r2)
	{
		ACCU = a2 >= r1
		if (a2 >= r1)
		{
			ACCU = a2 < r2
		}
		return ACCU
	}
	ACCU = a2 >= r1
	if (!a2 >= r1)
	{
		ACCU = a2 < r2
	}
	return ACCU
}
function func_toMinutes_0x100000004(a0)
{
	r3 = \^(\\\\d{1,2}):(\\\\d{2})$\
	r2 = r3["exec"]
	ACCU = a0
	if (!a0)
	{
		ACCU = ""
	}
	r4 = ACCU
	r1 = r2(r4)
	if (!r2(r4))
	{
		return null
	}
	r3 = r1[1]
	r2 = (parseInt(r3, 10) * 60)
	r4 = r1[2]
	return (r2 + parseInt(r4, 10))
}
function func_0xd839_0x100000003(a0, a1)
{
	a0 = (a0 - 298)
	r0 = Scope[1][4]()
	r1 = r0[a0]
	if (Scope[1][5]["mSdHjn"] == undefined)
	{
		Scope[1][5]["xhNHQC"] = func_0x5ba414_0x100000002
		Scope[1][5]["JRIDmF"] = {}
		Scope[1][5]["mSdHjn"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][5]["JRIDmF"][r4])
	{
		r1 = Scope[1][5]["xhNHQC"](r1)
		Scope[1][5]["JRIDmF"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][5]["JRIDmF"][r4]
	}
	return r1
}
function func_0x5ba414_0x100000002(a0)
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
function func_0x5d58_0x100000001()
{
	r0 = Scope[1]
	Scope[6][2] = new ["zxHLyW", "y2HHBM5LBeLK", "z2v0", "C3rHCNq", "zxHWB3j0CW", "mtq2odm2rwfxww5b", "C2nOzwr1BgvZ", "m2DiywLQrG", "nZbiywPWyNK", "mta4mZC3ogjRDK9YCq", "z2v0rgf5", "C3rVCa", "AxnsDw5UAw5N", "mtyZmdG5mgXnv3PxBa", "mtjsr2TPzM4", "mw1wzfLvyG", "mJqYmZyWu3jwAvPY", "Aw5JBhvKzxm", "nti2ota4mfHLsLjerq", "z2v0sg91CNm", "mJKYntqWnLjfBwPdyW", "BwfUDwfSu3rVChbLza", "zw5HyMXLza", "zgf5CW", "C2XVDhm", "AxnbCNjHEq", "BgvUz3rO", "zw5K", "y2HHBM5LBhm", "mZz1DgXctge", "z2v0twLUDxrLCW", "mZqYnZy4wMTqBvD4"]
	Scope[1][4] = func_0x5d58_0x100000000
	return Scope[1][4]()
}
function func_0x5d58_0x100000000()
{
	return Scope[6][2]
}
