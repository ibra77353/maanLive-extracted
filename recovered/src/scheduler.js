// Recovered module: src/scheduler.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (5748 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10;
let s3_2, s3_3;
let s5_2, s5_3;
let s6_2;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx5;

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x10000000c(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0xd839_0x100000003
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(326)
			r4 = (parseInt(r5) / 1)
			r6 = r0(320)
			r4 = (r4 * ((-parseInt(r6)) / 2))
			r6 = r0(318)
			r5 = ((-parseInt(r6)) / 3)
			r7 = r0(316)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 4)))
			r6 = r0(327)
			r5 = (parseInt(r6) / 5)
			r7 = r0(308)
			r4 = (r4 + (r5 * (parseInt(r7) / 6)))
			r6 = r0(319)
			r5 = (parseInt(r6) / 7)
			r7 = r0(310)
			r4 = (r4 + (r5 * (parseInt(r7) / 8)))
			r6 = r0(324)
			r4 = (r4 + ((-parseInt(r6)) / 9))
			r6 = r0(329)
			r4 = (r4 + (parseInt(r6) / 10))
			r6 = r0(299)
			r5 = (parseInt(r6) / 11)
			r7 = r0(325)
			r2 = (r4 + (r5 * ((-parseInt(r7)) / 12)))
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

function func_nextOpenMinutes_0x10000000b(a0, a1)
{
	let r0, r1, r2, r3, r6, r7, r9, r10, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, accu;
	r15 = ctx1
	s3_2 = a0
	s3_3 = func_0xd839_0x100000003
	r16 = s1_2["get"]
	r0 = r16()
	r1 = r0["schedules"]["filter"](func_unknown_0x10000000a)
	if (!r1["length"])
	{
		return null
	}
	if (func_shouldRunNow_0x100000007(s3_2, a1))
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
		accu = false
		r18 = false
		r21 = ctx3
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
				if (((Array["isArray"](r25)) && (r23 = r9["days"], accu = r23["length"], (r23["length"]))))
				{
					accu = r9["days"]
				}
				else
				{
					accu = [0, 1, 2, 3, 4, 5, 6]
				}
				r10 = accu
				r26 = 328
				r23 = r10["includes"]
				if (!r23(r7))
				{
					continue
				}
				accu = r9["slots"]
				if (!r9["slots"])
				{
					accu = []
				}
				r25 = accu
				r24 = GetIterator(r25)
				r23 = r24["next"]
				accu = false
				r25 = false
				r28 = ctx3
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
						accu = r6 === 0
						if (r6 === 0)
						{
							accu = r2
						}
						else
						{
							accu = 0
						}
						r14 = (r30 - accu)
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
						accu = r3
					}
					accu = -1
					r27 = -1
					r26 = -1
				}
				catch
				{
					r27 = accu
					r26 = 0
				}
				if (!r25)
				{
					r30 = ctx3
					try
					{
						if (!r24["return"] == undefined)
						{
							accu = r24["return"]()
						}
					}
					catch {}
				}
				accu = null
				if (!r26 === 0) continue
				accu = 0
				r19 = 0
				r20 = r27
				break
			}
			accu = -1
			r20 = -1
			r19 = -1
		}
		catch
		{
			r20 = accu
			r19 = 0
		}
		if (!r18)
		{
			r23 = ctx3
			try
			{
				if (!r17["return"] == undefined)
				{
					accu = r17["return"]()
				}
			}
			catch {}
		}
		accu = null
		if (!r19 === 0) continue
		accu = r20
		r6 = (r6 + 1)
	}
	accu = Infinity === Infinity
	if (Infinity === Infinity)
	{
		accu = null
	}
	else
	{
		accu = Infinity
	}
	return accu
}

function func_unknown_0x10000000a(a0)
{
	let r0, accu;
	r0 = a0["channelId"]
	accu = r0 === s3_2
	if (r0 === s3_2)
	{
		r0 = a0["enabled"]
		accu = !(r0 === !Boolean([]))
	}
	return accu
}

function func_startLoop_0x100000009()
{
	let r0, accu;
	if (s1_9)
	{
		accu = clearInterval(s1_9)
	}
	r0 = setInterval(func_tick_0x100000008, 30000)
	accu = s1_9
	s1_9 = r0
	accu = setTimeout(func_tick_0x100000008, 10000)
	return undefined
}

function func_tick_0x100000008()
{
	let r0, r1, r2, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, accu;
	r0 = func_0xd839_0x100000003
	r11 = 313
	r8 = s1_2["get"]
	r1 = r8()
	r2 = Date(func_0xd839_0x100000003)
	r10 = r1["channels"]
	r9 = GetIterator(r10)
	r8 = r9["next"]
	accu = false
	r10 = false
	r13 = ctx1
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
			r15 = s1_3[r0(323)]
			accu = r15(r14["value"]["id"])
			r7 = r15(r14["value"]["id"])
			r15 = ctx1
			try
			{
				if (((r6) && (accu = r7, (!r7))))
				{
					r16 = s1_3[r0(314)]
					accu = r16(r14["value"]["id"])
				}
				else
				{
					if (!r6)
					{
						if (r7)
						{
							r16 = s1_3[r0(322)]
							accu = r16(r14["value"]["id"])
						}
					}
				}
				continue
			}
			catch {}
			r16 = accu
			accu = null
			accu = ctx4
			r16 = ctx1
		}
		accu = -1
		r12 = -1
		r11 = -1
	}
	catch
	{
		r12 = accu
		r11 = 0
	}
	if (!r10)
	{
		r15 = ctx1
		try
		{
			if (!r9["return"] == undefined)
			{
				accu = r9["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r11 === 0)
	{
		accu = r12
	}
	return undefined
}

function func_shouldRunNow_0x100000007(a0, a1)
{
	let r0, r1, r2, r3, r7, r8, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r28, r29, accu;
	r11 = ctx1
	s5_2 = a0
	s5_3 = func_0xd839_0x100000003
	r12 = s1_2["get"]
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
	accu = false
	r14 = false
	r17 = ctx5
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
			if (((r19(r21)) && (accu = r7["days"]["length"], (r7["days"]["length"]))))
			{
				accu = r7["days"]
			}
			else
			{
				accu = [0, 1, 2, 3, 4, 5, 6]
			}
			r8 = accu
			if (!r8["includes"](r2))
			{
				continue
			}
			accu = r7["slots"]
			if (!r7["slots"])
			{
				accu = []
			}
			r21 = accu
			r20 = GetIterator(r21)
			r19 = r20["next"]
			accu = false
			r21 = false
			r24 = ctx5
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
					accu = func_slotActive_0x100000005(r25["value"], r28, r29)
					r25 = r25["value"]
					if (!accu) continue
					r23 = !(!Boolean([]))
					accu = 1
					r22 = 1
					break
				}
				accu = -1
				r23 = -1
				r22 = -1
			}
			catch
			{
				r23 = accu
				r22 = 0
			}
			if (!r21)
			{
				r26 = ctx5
				try
				{
					if (!r20["return"] == undefined)
					{
						accu = r20["return"]()
					}
				}
				catch {}
			}
			accu = null
			switch (r22)
			{
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
			accu = 1
			r15 = 1
			r16 = r23
			break
			}
		}
		accu = -1
		r16 = -1
		r15 = -1
	}
	catch
	{
		r16 = accu
		r15 = 0
	}
	if (!r14)
	{
		r19 = ctx5
		try
		{
			if (!r13["return"] == undefined)
			{
				accu = r13["return"]()
			}
		}
		catch {}
	}
	accu = null
	switch (r15)
	{
	default:
	{
		break
	}
	case (0):
	{
		accu = r16
	}
	case (1):
	{
		return r16
	}
	return !Boolean([])
	}
}

function func_unknown_0x100000006(a0)
{
	let r0, accu;
	r0 = a0["channelId"]
	accu = r0 === s5_2
	if (r0 === s5_2)
	{
		r0 = a0["enabled"]
		accu = !(r0 === !Boolean([]))
	}
	return accu
}

function func_slotActive_0x100000005(a0, a1, a2)
{
	let r1, r2, r4, accu;
	r1 = func_toMinutes_0x100000004(a0["start"])
	r4 = a0["end"]
	r2 = func_toMinutes_0x100000004(r4)
	if (((undetectable === r1) || ((undetectable === r2))))
	{
		return !Boolean([])
	}
	if (r1 <= r2)
	{
		accu = a2 >= r1
		if (a2 >= r1)
		{
			accu = a2 < r2
		}
		return accu
	}
	accu = a2 >= r1
	if (!a2 >= r1)
	{
		accu = a2 < r2
	}
	return accu
}

function func_toMinutes_0x100000004(a0)
{
	let r1, r2, r3, r4, accu;
	r3 = new RegExp("^(\\d{1,2}):(\\d{2})$")
	r2 = r3["exec"]
	accu = a0
	if (!a0)
	{
		accu = ""
	}
	r4 = accu
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
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 298)
	r0 = s1_4()
	r1 = r0[a0]
	if (s1_5["mSdHjn"] == undefined)
	{
		s1_5["xhNHQC"] = func_0x5ba414_0x100000002
		s1_5["JRIDmF"] = {}
		s1_5["mSdHjn"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_5["JRIDmF"][r4])
	{
		r1 = s1_5["xhNHQC"](r1)
		s1_5["JRIDmF"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_5["JRIDmF"][r4]
	}
	return r1
}

function func_0x5ba414_0x100000002(a0)
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

function func_0x5d58_0x100000001()
{
	let r0;
	r0 = ctx1
	s6_2 = ["zxHLyW", "y2HHBM5LBeLK", "z2v0", "C3rHCNq", "zxHWB3j0CW", "mtq2odm2rwfxww5b", "C2nOzwr1BgvZ", "m2DiywLQrG", "nZbiywPWyNK", "mta4mZC3ogjRDK9YCq", "z2v0rgf5", "C3rVCa", "AxnsDw5UAw5N", "mtyZmdG5mgXnv3PxBa", "mtjsr2TPzM4", "mw1wzfLvyG", "mJqYmZyWu3jwAvPY", "Aw5JBhvKzxm", "nti2ota4mfHLsLjerq", "z2v0sg91CNm", "mJKYntqWnLjfBwPdyW", "BwfUDwfSu3rVChbLza", "zw5HyMXLza", "zgf5CW", "C2XVDhm", "AxnbCNjHEq", "BgvUz3rO", "zw5K", "y2HHBM5LBhm", "mZz1DgXctge", "z2v0twLUDxrLCW", "mZqYnZy4wMTqBvD4"]
	s1_4 = func_0x5d58_0x100000000
	return s1_4()
}

function func_0x5d58_0x100000000()
{
	return s6_2
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r3, r5, r6, accu;
	r3 = ctx0
	s1_4 = func_0x5d58_0x100000001
	s1_5 = func_0xd839_0x100000003
	s1_6 = func_toMinutes_0x100000004
	s1_7 = func_slotActive_0x100000005
	s1_8 = func_shouldRunNow_0x100000007
	s1_10 = func_tick_0x100000008
	accu = func_unknown_0x10000000c(s1_4, 293864)
	s1_2 = require("./store")
	s1_3 = require("./ffmpeg")
	r5 = "exports"
	r6 = {"startLoop": null, "tick": null, "shouldRunNow": null, "nextOpenMinutes": null}
	r6["startLoop"] = func_startLoop_0x100000009
	r6["tick"] = func_tick_0x100000008
	r6["shouldRunNow"] = func_shouldRunNow_0x100000007
	r6["nextOpenMinutes"] = func_nextOpenMinutes_0x10000000b
	module[r5] = r6
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
