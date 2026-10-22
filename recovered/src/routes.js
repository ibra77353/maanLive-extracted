// Recovered module: src/routes.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (71799 source
// characters; Node 18.5.0 / V8 10.2.154.4-node.8) by tools/decompile/emit_source.py, after
// tools/decompile/resolve_strings.py restored the obfuscated string array. The module is a faithful
// reconstruction of the original control flow and data flow; see DECOMPILATION.md for the analysis and
// its limitations.
//
// How to read it:
//   rN        a bytecode register (a local of the enclosing function)
//   accu      the V8 accumulator register
//   s<n>_<m>  the context slot Scope[n][m] (file-level, shared by this module's functions)
//   ctxN      a context pushed from Scope[n]
//   a0..aN    function parameters; in __module__ they are the CommonJS exports, require, module,
//             __filename and __dirname
//   /.../     a RegExp literal (the code cache does not record its flags)

// ----------------------------------------------------------------------------------------
// Context slots shared by this module's functions (V8's Scope[n][m]).
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14, s1_15, s1_16, s1_17, s1_18, s1_19, s1_20, s1_21, s1_22, s1_23, s1_24, s1_25, s1_26, s1_27, s1_28, s1_29, s1_30, s1_31, s1_32, s1_33, s1_34, s1_35, s1_36, s1_37, s1_38, s1_39, s1_40, s1_41, s1_42, s1_43, s1_44, s1_45, s1_46, s1_47, s1_48, s1_49, s1_50, s1_51, s1_52, s1_53, s1_54, s1_55, s1_56, s1_57;
let s3_2;
let s5_2, s5_3;
let s6_2;
let s7_2;
let s10_2;
let s11_2;
let s12_2;
let s13_2;
let s14_2;
let s15_2;
let s16_2;
let s17_2;
let s18_2;
let s19_2;
let s21_2;
let s22_2;
let s23_2;
let s24_2;
let s25_2;
let s27_2;
let s28_2;
let s29_2;
let s30_2;
let s31_2;
let s32_2;
let s33_2;
let s34_2;
let s35_2;
let s37_2;
let s38_2;
let s39_2;
let s40_2;
let s41_2;
let s42_2;
let s43_2;
let s44_2;
let s45_2;
let s46_2;
let s47_2;
let s48_2, s48_3;
let s49_2, s49_3;
let s50_2, s50_3;
let s51_2;
let s52_2;
let s53_2;
let s54_2;
let s55_2;
let s56_2, s56_3;
let s57_2, s57_3;
let s59_2, s59_3;
let s60_2, s60_3;
let s61_2;
let s62_2;
let s63_2, s63_3;
let s64_2;
let s65_2;
let s66_2;
let s67_2;
let s68_2, s68_3;
let s69_2, s69_3;
let s70_2;
let s71_2;
let s72_2;
let s73_2;
let s74_2;
let s75_2;
let s76_2;
let s77_2;
let s78_2;
let s79_2;
let s80_2;
let s82_2;
let s84_2;
let s85_2;
let s86_2;
let s87_2;
let s88_2, s88_3, s88_4;
let s89_2, s89_3;
let s90_2;
let s91_2;
let s93_2;
let s94_2;
let s95_2, s95_3, s95_4, s95_5;
let s96_2;
let s97_2, s97_3, s97_4;
let s98_2, s98_3;
let s101_2, s101_3;
let s103_2, s103_3;
let s104_2;
let s105_2;
let s106_2, s106_3, s106_4, s106_5, s106_6;
let s107_2, s107_3;
let s108_2, s108_3, s108_4, s108_5;
let s109_2;
let s110_2, s110_3, s110_4, s110_5, s110_6;
let s111_2, s111_3, s111_4;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx5, ctx6, ctx7, ctx8, ctx9, ctx10, ctx11, ctx12, ctx13, ctx14, ctx15, ctx16, ctx17, ctx18, ctx19, ctx20, ctx21, ctx22, ctx23, ctx24, ctx25, ctx26, ctx27, ctx28, ctx29, ctx30, ctx31, ctx32, ctx33, ctx34, ctx35, ctx36, ctx37, ctx38, ctx39, ctx40, ctx41, ctx42, ctx43, ctx44, ctx45, ctx46, ctx47, ctx50, ctx54, ctx55, ctx57, ctx58, ctx65, ctx66, ctx67, ctx70, ctx71, ctx72, ctx73, ctx74, ctx75, ctx76, ctx77, ctx78, ctx79, ctx80, ctx81, ctx82, ctx83, ctx84, ctx85, ctx86, ctx87, ctx88, ctx92, ctx94, ctx95, ctx96, ctx97, ctx98, ctx99, ctx100, ctx101, ctx102, ctx103, ctx107, ctx108, ctx109;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x1000000ac(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, accu;
	accu = a0["file"]
	if (!a0["file"])
	{
		r4 = "لم يُرفع ملف"
		r2 = a1
		accu = func_fail_0x100000037(r2, 400, r4)
		return func_fail_0x100000037(r2, 400, r4)
	}
	r1 = ctx1
	try
	{
		r2 = s1_11["stopAll"]
		accu = r2()
		r2 = s1_18["restoreBackup"]
		r4 = a0["file"]
		r4 = r4["path"]
		accu = r2(r4)
		r2 = ctx1
		try
		{
			r3 = s1_6["unlinkSync"]
			r5 = a0["file"]
			r5 = r5["path"]
			accu = r3(r5)
		}
		catch
		{
			r3 = accu
			accu = null
			accu = ctx2
			r3 = ctx1
		}
		r4 = {"message": null}
		r4["message"] = "تم استرداد النسخة الاحتياطية — يُعاد تشغيل النظام الآن"
		accu = func_ok_0x100000036(a1, r4)
		accu = setTimeout(func_unknown_0x1000000ab, 1500)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx3
		r2 = ctx1
		r3 = ctx3
		try
		{
			r4 = s1_6["unlinkSync"]
			r6 = a0["file"]
			r6 = r6["path"]
			accu = r4(r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx4
			r4 = ctx3
		}
		r6 = s3_2["message"]
		r4 = a1
		accu = func_fail_0x100000037(r4, 400, r6)
	}
	return undefined
}

function func_unknown_0x1000000ab()
{
	return process["exit"](42)
}

function func_unknown_0x1000000aa(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r7, r8, r9, accu;
	r2 = ctx1
	s5_2 = a1
	s5_3 = func_0x4405_0x100000001
	r3 = ctx5
	accu = ctx6
	{
		accu = PushContext("Block")
		r4 = ctx5
		r5 = s1_18["createBackup"]
		s6_2 = r5()
		r0 = s1_5["basename"](s6_2)
		r5 = s5_2["setHeader"]
		r8 = "application/zip"
		accu = r5("Content-Type", r8)
		r5 = s5_2["setHeader"]
		r7 = "Content-Disposition"
		r8 = "attachment; filename=\""
		r8 = (r8 + r0)
		r8 = (r8 + "\"")
		accu = r5(r7, r8)
		r5 = s1_6["createReadStream"]
		r1 = r5(s6_2)
		r5 = r1["pipe"]
		accu = r5(s5_2)
		r7 = "end"
		accu = r1["on"](r7, func_unknown_0x1000000a8)
		accu = r1["on"]("error", func_unknown_0x1000000a9)
	}
	catch
	{
		r5 = accu
		accu = null
		accu = ctx7
		r5 = ctx5
		r9 = s7_2["message"]
		accu = func_fail_0x100000037(s5_2, 500, r9)
	}
	return undefined
}

function func_unknown_0x1000000a9()
{
	let r1, r2, accu;
	accu = func_0x4405_0x100000001
	r1 = ctx6
	try
	{
		r2 = s5_2["end"]
		accu = r2()
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx8
		r2 = ctx6
	}
	return undefined
}

function func_unknown_0x1000000a8()
{
	let r1, r2, accu;
	accu = func_0x4405_0x100000001
	r1 = ctx6
	try
	{
		r2 = s1_6["unlinkSync"]
		accu = r2(s6_2)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx9
		r2 = ctx6
	}
	return undefined
}

function async func_unknown_0x1000000a7(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r9, accu;
	r2 = ctx1
	r3 = __closure
	r4 = this
	accu = null
	r3 = ctx10
	try
	{
		accu = func_0x4405_0x100000001
		s10_2 = func_0x4405_0x100000001
		r4 = ctx10
		try
		{
			r5 = s1_11["stopAll"]
			accu = r5()
			r6 = s1_17["apply"]()
			r5 = ctx10
			r5 = await r6
			r6 = _GeneratorGetResumeMode(ctx10)
			if (!r6 === 0)
			{
				accu = r5
			}
			r1 = r5
			r7 = {"from": null, "to": null, "message": null}
			r7["from"] = r1["from"]
			r7["to"] = r1["to"]
			r7["message"] = "تم تطبيق التحديث — يُعاد تشغيل النظام الآن"
			accu = func_ok_0x100000036(a1, r7)
			accu = setTimeout(func_unknown_0x1000000a6, 1500)
		}
		catch
		{
			r5 = accu
			accu = null
			accu = ctx11
			r5 = ctx10
			r9 = s11_2["message"]
			r7 = a1
			accu = func_fail_0x100000037(r7, 400, r9)
		}
		r5 = undefined
		r4 = ctx10
		accu = r5
		return r5
	}
	catch {}
	r4 = accu
	accu = null
	accu = ctx12
	r4 = ctx10
	r5 = ctx10
	return s12_2
}

function func_unknown_0x1000000a6()
{
	let r0;
	r0 = process["exit"]
	return r0(42)
}

function async func_unknown_0x1000000a5(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = s1_17["status"]
			r8 = a0["query"]
			r7 = r6(r8["force"] === "1")
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx13
			r4 = ctx1
			r6 = a1
			accu = func_fail_0x100000037(r6, 500, s13_2["message"])
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx14
	r3 = ctx1
	r4 = r1
	return s14_2
}

function async func_unknown_0x1000000a4(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = {"license": null}
			r7 = s1_16["activate"]
			r11 = a0["body"]
			accu = r11["key"]
			r5 = a1
			if (!r11["key"])
			{
				accu = ""
			}
			r11 = accu
			r10 = String(r11)
			r9 = r10["trim"]
			r9 = r9()
			r8 = r7(r9)
			r7 = r1
			r7 = await r8
			r8 = _GeneratorGetResumeMode(r1)
			if (!r8 === 0)
			{
				accu = r7
			}
			r6["license"] = r7
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx15
			r4 = ctx1
			r8 = s15_2["message"]
			r6 = a1
			accu = func_fail_0x100000037(r6, 400, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx16
	r3 = ctx1
	r4 = r1
	return s16_2
}

function func_unknown_0x1000000a3(a0, a1)
{
	let r2, r3;
	r2 = {"license": null, "messages": null, "contact": null}
	r3 = s1_16["status"]
	r2["license"] = r3()
	r3 = s1_16["getMessages"]
	r2["messages"] = r3()
	r3 = s1_16["getContact"]
	r2["contact"] = r3()
	return func_ok_0x100000036(a1, r2)
}

function async func_unknown_0x1000000a2(a0, a1)
{
	let r0, r1, r3, r4, r5, r6, r8, r9, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, accu;
	r13 = __closure
	r14 = this
	r1 = accu
	r13 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r14 = ctx1
		try
		{
			r18 = 212
			r15 = s1_19["listAllowed"]
			r16 = r15()
			r15 = r1
			r15 = await r16
			r16 = _GeneratorGetResumeMode(r1)
			if (!r16 === 0)
			{
				accu = r15
			}
			r3 = r15
			if (a0["body"]["ids"])
			r15 = a0["body"]
			r15 = r15["ids"]
			accu = r15["length"]
				&& (r15["length"])
			{
				r16 = a0["body"]
				r18 = 558
				r16 = r16["ids"]
				accu = Set
				accu = Set(r16)
			}
			else
			{
				accu = null
			}
			r4 = accu
			r5 = 0
			r6 = []
			r16 = GetIterator(r3)
			r15 = r16["next"]
			accu = false
			r17 = false
			r20 = ctx1
			try
			{
				while (true)
				{
					r17 = true
					r21 = r15()
					if (r21["done"]) break
					r17 = false
					if (r4)
					{
						if (!r4["has"](r21["value"]["id"]))
						{
							continue
						}
					}
					r23 = s1_19["importChannel"](r21["value"])
					r22 = r1
					r22 = await r23
					r23 = _GeneratorGetResumeMode(r1)
					if (!r23 === 0)
					{
						accu = r22
					}
					r12 = r22
					r5 = (r5 + 1)
					if (!r12) continue
					if (!r12[r0(523)]) continue
					r22 = r12[r0(523)]
					r22 = r22[r0(321)]
					if (r22 === !Boolean([])) continue
					r24 = r12[r0(523)]
					accu = r6["push"](r24["id"])
				}
				accu = -1
				r19 = -1
				r18 = -1
			}
			catch
			{
				r19 = accu
				r18 = 0
			}
			if (!r17)
			{
				r22 = ctx1
				try
				{
					if (!r16["return"] == undefined)
					{
						accu = r16["return"]()
					}
					catch {}
				}
			}
			accu = null
			if (r18 === 0)
			{
				accu = r19
			}
			r15 = s1_8["get"]
			r15 = r15()
			r15 = r15["settings"]
			accu = !(r15["idleStopEnabled"] === !Boolean([]))
			r8 = !(r15["idleStopEnabled"] === !Boolean([]))
			if (!(r15["idleStopEnabled"] === !Boolean([])))
			{
				r15 = r6["slice"]
				accu = r15(0, 5)
			}
			else
			{
				accu = r6
			}
			r9 = accu
			r15 = r9["forEach"]
			accu = r15(func_unknown_0x1000000a1)
			r17 = {"imported": null, "started": null, "deferred": null}
			r17["imported"] = r5
			r17["started"] = r9["length"]
			r18 = r6["length"]
			r17["deferred"] = (r18 - r9["length"])
			accu = func_ok_0x100000036(a1, r17)
		}
		catch
		{
			r15 = accu
			accu = null
			accu = ctx17
			r15 = ctx1
			r19 = s17_2["message"]
			r17 = a1
			accu = func_fail_0x100000037(r17, 400, r19)
		}
		r15 = undefined
		r14 = r1
		return r15
	}
	catch {}
	r14 = accu
	accu = null
	accu = ctx18
	r14 = ctx1
	r15 = r1
	return s18_2
}

function func_unknown_0x1000000a1(a0, a1)
{
	let r0, r3, accu;
	r0 = ctx1
	s19_2 = a0
	r3 = (a1 * 1500)
	accu = setTimeout(func_unknown_0x1000000a0, r3)
	return undefined
}

function func_unknown_0x1000000a0()
{
	let r1, r2, accu;
	accu = func_0x4405_0x100000001
	r1 = ctx19
	try
	{
		r2 = s1_11["start"]
		accu = r2(s19_2)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx20
		r2 = ctx19
	}
	return undefined
}

function async func_unknown_0x10000009f(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = {"channels": null}
			r7 = s1_19["listAllowed"]
			r8 = r7()
			r7 = r1
			r5 = a1
			r7 = await r8
			r8 = _GeneratorGetResumeMode(r1)
			if (!r8 === 0)
			{
				accu = r7
			}
			r6["channels"] = r7
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx21
			r4 = ctx1
			r6 = a1
			accu = func_fail_0x100000037(r6, 400, s21_2["message"])
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx22
	r3 = ctx1
	r4 = r1
	return s22_2
}

function async func_unknown_0x10000009e(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, accu;
	r11 = ctx1
	r12 = __closure
	r13 = this
	accu = null
	r12 = ctx23
	try
	{
		s23_2 = func_0x4405_0x100000001
		accu = a0["body"]
		if (a0["body"])
		{
			r13 = a0["body"]
			accu = r13["items"]
		}
		if (!accu)
		{
			accu = []
		}
		r0 = accu
		accu = a0["body"]
		if (a0["body"])
		{
			r13 = a0["body"]
			accu = r13["userAgent"]
		}
		r1 = accu
		r16 = 228
		r13 = Array["isArray"]
		if (!r13(r0))
			|| (!r0["length"])
		{
			r16 = "\\x644\\x627 \\x62a\\x648\\x62c\\x62f \\x642\\x646\\x648\\x627\\x62a \\x645\\x62d\\x62f\\x62f\\x629"
			r14 = a1
			r14 = func_fail_0x100000037(r14, 400, "\\x644\\x627 \\x62a\\x648\\x62c\\x62f \\x642\\x646\\x648\\x627\\x62a \\x645\\x62d\\x62f\\x62f\\x629")
			r13 = ctx23
			return r14
		}
		r14 = s1_8
		r2 = s1_8["get"]()
		r3 = r0
		accu = r3["some"](func_unknown_0x10000009c)
		if (r3["some"](func_unknown_0x10000009c))
		{
			r13 = ctx23
			try
			{
				r14 = s1_21["resolveBatch"]
				r16 = r0
				r17 = r1
				r15 = r14(r16, r17, 6)
				r14 = ctx23
				r14 = await r15
				r15 = _GeneratorGetResumeMode(ctx23)
				if (!r15 === 0)
				{
					accu = r14
				}
				r3 = r14
				accu = r3
			}
			catch
			{
				r14 = accu
				accu = null
				accu = ctx24
				r14 = ctx23
				r18 = ("\\x641\\x634\\x644 \\x62d\\x644 \\x627\\x644\\x631\\x648\\x627\\x628\\x637: " + s24_2["message"])
				r16 = a1
				r16 = func_fail_0x100000037(r16, 400, r18)
				r15 = ctx23
				return r16
			}
		}
		r4 = 0
		r5 = 0
		r6 = 0
		r14 = GetIterator(r3)
		r13 = r14["next"]
		accu = false
		r15 = false
		r18 = ctx23
		try
		{
			while (true)
			{
				r15 = true
				r19 = r13()
				if (r19["done"]) break
				r15 = false
				r10 = r19["value"]
				r20 = ctx23
				accu = r19["value"]["realUrl"]
				r19 = r19["value"]
				if (!accu)
				{
					accu = r10["url"]
				}
				s25_2 = accu
				if (!r10)
					|| (!r10["name"])
					|| (!s25_2)
				{
					r5 = (r5 + 1)
					continue
				}
				r21 = r10["resolved"]
				if (r21 === !Boolean([]))
				{
					r6 = (r6 + 1)
					continue
				}
				r22 = r2["sources"]
				r21 = r22["some"]
				accu = r21(func_unknown_0x10000009d)
				if (r21(func_unknown_0x10000009d))
				{
					accu = (r5 + 1)
					r5 = (r5 + 1)
					continue
				}
				r21 = ctx25
				try
				{
					r24 = {"name": null, "url": null, "logo": null, "group": null}
					r24["name"] = r10["name"]
					r24["url"] = s25_2
					r24["logo"] = r10["logo"]
					r24["group"] = r10["group"]
					r23 = func_addOneXtream_0x100000031(r2, r24)
					r22 = ctx23
					r22 = await r23
					r23 = _GeneratorGetResumeMode(ctx23)
					if (!r23 === 0)
					{
						accu = r22
					}
					accu = (r4 + 1)
					r4 = (r4 + 1)
					continue
				}
				catch {}
				r22 = accu
				accu = null
				accu = ctx26
				r22 = ctx25
				accu = (r5 + 1)
				r5 = (r5 + 1)
			}
			accu = -1
			r17 = -1
			r16 = -1
		}
		catch
		{
			r17 = accu
			r16 = 0
		}
		if (!r15)
		{
			r20 = ctx23
			try
			{
				if (!r14["return"] == undefined)
				{
					accu = r14["return"]()
				}
				catch {}
			}
		}
		accu = null
		if (r16 === 0)
		{
			accu = r17
		}
		if (r4)
		{
			accu = s1_8["save"]()
		}
		r15 = {"added": null, "skipped": null, "failed": null}
		r15["added"] = r4
		r15["skipped"] = r5
		r15["failed"] = r6
		accu = func_ok_0x100000036(a1, r15)
		r14 = undefined
		r13 = ctx23
		accu = r14
		return r14
	}
	catch {}
	r13 = accu
	accu = null
	accu = ctx27
	r13 = ctx23
	r14 = ctx23
	return s27_2
}

function func_unknown_0x10000009d(a0)
{
	let r0;
	r0 = a0["url"]
	return r0 === s25_2
}

function func_unknown_0x10000009c(a0)
{
	return !Boolean(a0["realUrl"])
}

function async func_unknown_0x10000009b(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, accu;
	r4 = __closure
	r5 = this
	r3 = accu
	r4 = ctx1
	try
	{
		if (!a0["body"])
		{
		}
		r5 = {}
		r1 = r5["portalUrl"]
		accu = r5["userAgent"]
		r2 = r5["userAgent"]
		r5 = ctx1
		try
		{
			r8 = s1_21["resolveChannel"]
			r9 = r8(r1, r2)
			r8 = r3
			r7 = a1
			r8 = await r9
			r9 = _GeneratorGetResumeMode(r3)
			if (!r9 === 0)
			{
				accu = r8
			}
			accu = func_ok_0x100000036(r7, r8)
		}
		catch
		{
			r6 = accu
			accu = null
			accu = ctx28
			r6 = ctx1
			r10 = s28_2["message"]
			r8 = a1
			accu = func_fail_0x100000037(r8, 400, r10)
		}
		r6 = undefined
		r5 = r3
		return r6
	}
	catch {}
	r5 = accu
	accu = null
	accu = ctx29
	r5 = ctx1
	r6 = r3
	return s29_2
}

function async func_unknown_0x10000009a(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r5 = __closure
	r6 = this
	r3 = accu
	r5 = ctx1
	try
	{
		accu = a0["body"]
		if (a0["body"])
		{
			r6 = a0["body"]
			accu = r6["items"]
		}
		if (!accu)
		{
			accu = []
		}
		r1 = accu
		accu = a0["body"]
		if (a0["body"])
		{
			accu = a0["body"]["userAgent"]
		}
		r2 = accu
		r7 = Array
		r6 = Array["isArray"]
		if (!r6(r1))
		accu = r1["length"]
			|| (!r1["length"])
		{
			r9 = "لا توجد قنوات لحلّها"
			r7 = a1
			r7 = func_fail_0x100000037(r7, 400, r9)
			r6 = r3
			accu = r7
			return r7
		}
		r6 = ctx1
		try
		{
			r11 = a0["body"]
			accu = r11["concurrency"]
			r9 = r1
			r10 = r2
			if (!r11["concurrency"])
			{
				accu = 6
			}
			r11 = accu
			r8 = s1_21["resolveBatch"](r9, r10, r11)
			r7 = r3
			r7 = await r8
			r8 = _GeneratorGetResumeMode(r3)
			if (!r8 === 0)
			{
				accu = r7
			}
			r4 = r7
			r9 = {"channels": null}
			r9["channels"] = r4
			accu = func_ok_0x100000036(a1, r9)
		}
		catch
		{
			r7 = accu
			accu = null
			accu = ctx30
			r7 = ctx1
			r11 = s30_2["message"]
			r9 = a1
			accu = func_fail_0x100000037(r9, 400, r11)
		}
		r7 = undefined
		r6 = r3
		return r7
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx31
	r6 = ctx1
	r7 = r3
	return s31_2
}

function async func_unknown_0x100000099(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r7 = __closure
	r8 = this
	r5 = accu
	r7 = ctx1
	try
	{
		if (!a0["body"])
		{
		}
		r8 = {}
		r1 = r8["server"]
		r2 = r8["username"]
		r3 = r8["password"]
		accu = r8["userAgent"]
		r4 = r8["userAgent"]
		r8 = ctx1
		try
		{
			r9 = s1_21["fetchChannels"]
			r11 = {"server": null, "username": null, "password": null, "userAgent": null}
			r11["server"] = r1
			r11["username"] = r2
			r11["password"] = r3
			r11["userAgent"] = r4
			r10 = r9(r11)
			r9 = r5
			r9 = await r10
			r10 = _GeneratorGetResumeMode(r5)
			if (!r10 === 0)
			{
				accu = r9
			}
			r6 = r9
			r11 = {"channels": null, "count": null}
			r11["channels"] = r6
			r11["count"] = r6["length"]
			accu = func_ok_0x100000036(a1, r11)
		}
		catch
		{
			r9 = accu
			accu = null
			accu = ctx32
			r9 = ctx1
			r11 = a1
			accu = func_fail_0x100000037(r11, 400, s32_2["message"])
		}
		r9 = undefined
		r8 = r5
		return r9
	}
	catch {}
	r8 = accu
	accu = null
	accu = ctx33
	r8 = ctx1
	r9 = r5
	return s33_2
}

function async func_unknown_0x100000098(a0, a1)
{
	let r0, r1, r2, r3, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, accu;
	r7 = ctx1
	r8 = __closure
	r9 = this
	accu = null
	r8 = ctx34
	try
	{
		s34_2 = func_0x4405_0x100000001
		accu = a0["body"]
		if (a0["body"])
		{
			r9 = a0["body"]
			accu = r9["items"]
		}
		if (!accu)
		{
			accu = []
		}
		r0 = accu
		r9 = Array["isArray"]
		if (!r9(r0))
			|| (!r0["length"])
		{
			r10 = a1
			r10 = func_fail_0x100000037(r10, 400, "\\x644\\x627 \\x62a\\x648\\x62c\\x62f \\x642\\x646\\x648\\x627\\x62a \\x645\\x62d\\x62f\\x62f\\x629")
			r9 = ctx34
			return r10
		}
		r12 = 555
		r9 = s1_8["get"]
		r1 = r9()
		r2 = 0
		r3 = 0
		r10 = GetIterator(r0)
		r9 = r10["next"]
		accu = false
		r11 = false
		r14 = ctx34
		try
		{
			while (true)
			{
				r11 = true
				r15 = r9()
				if (r15["done"]) break
				r11 = false
				r16 = ctx34
				s35_2 = r15["value"]
				r15 = r15["value"]
				if (!s35_2)
					|| (!s35_2["name"])
					|| (!s35_2["url"])
				{
					r3 = (r3 + 1)
					continue
				}
				r18 = r1["sources"]
				r17 = r18["some"]
				accu = r17(func_unknown_0x100000097)
				if (r17(func_unknown_0x100000097))
				{
					accu = (r3 + 1)
					r3 = (r3 + 1)
					continue
				}
				r17 = ctx35
				try
				{
					r19 = func_addOneXtream_0x100000031(r1, s35_2)
					r18 = ctx34
					r18 = await r19
					r19 = _GeneratorGetResumeMode(ctx34)
					if (!r19 === 0)
					{
						accu = r18
					}
					accu = (r2 + 1)
					r2 = (r2 + 1)
					continue
				}
				catch {}
				r18 = accu
				accu = null
				accu = ctx36
				r18 = ctx35
				accu = (r3 + 1)
				r3 = (r3 + 1)
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
			r17 = ctx34
			try
			{
				if (!r10["return"] == undefined)
				{
					accu = r10["return"]()
				}
				catch {}
			}
		}
		accu = null
		if (r12 === 0)
		{
			accu = r13
		}
		if (r2)
		{
			r9 = s1_8["save"]
			accu = r9()
		}
		r11 = {"added": null, "skipped": null}
		r11["added"] = r2
		r11["skipped"] = r3
		accu = func_ok_0x100000036(a1, r11)
		r10 = undefined
		r9 = ctx34
		accu = r10
		return r10
	}
	catch {}
	r9 = accu
	accu = null
	accu = ctx37
	r9 = ctx34
	r10 = ctx34
	return s37_2
}

function func_unknown_0x100000097(a0)
{
	return a0["url"] === s35_2["url"]
}

function async func_unknown_0x100000096(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r8 = __closure
	r9 = this
	r7 = accu
	r8 = ctx1
	try
	{
		if (!a0["body"])
		{
		}
		r9 = {}
		r1 = r9["name"]
		r2 = r9["url"]
		r3 = r9["logo"]
		r4 = r9["group"]
		if (!r9["name"])
			|| (!r9["url"])
		{
			r10 = a1
			r10 = func_fail_0x100000037(r10, 400, "\\x627\\x633\\x645 \\x627\\x644\\x642\\x646\\x627\\x629 \\x648\\x631\\x627\\x628\\x637\\x647\\x627 \\x645\\x637\\x644\\x648\\x628\\x627\\x646")
			r9 = r7
			return r10
		}
		r5 = s1_8["get"]()
		r11 = {"name": null, "url": null, "logo": null, "group": null}
		r11["name"] = r1
		r11["url"] = r2
		r11["logo"] = r3
		r11["group"] = r4
		r10 = func_addOneXtream_0x100000031(r5, r11)
		r9 = r7
		r9 = await r10
		r10 = _GeneratorGetResumeMode(r7)
		if (!r10 === 0)
		{
			accu = r9
		}
		r6 = r9
		r9 = s1_8["save"]
		accu = r9()
		accu = func_ok_0x100000036(a1, r6)
		r10 = undefined
		r9 = r7
		return r10
	}
	catch {}
	r9 = accu
	accu = null
	accu = ctx38
	r9 = ctx1
	r10 = r7
	return s38_2
}

function async func_unknown_0x100000095(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r3 = __closure
	r4 = this
	r1 = accu
	r3 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r4 = ctx1
		try
		{
			r5 = s1_13["fetchFromM3UUrl"]
			r9 = a0["body"]
			accu = r9["url"]
			if (!r9["url"])
			{
				accu = ""
			}
			r9 = accu
			r8 = String(r9)
			r7 = r8["trim"]
			r7 = r7()
			r8 = a0["body"]
			r8 = r8["userAgent"]
			r6 = r5(r7, r8)
			r5 = r1
			r5 = await r6
			r6 = _GeneratorGetResumeMode(r1)
			if (!r6 === 0)
			{
				accu = r5
			}
			r2 = r5
			r7 = {"channels": null, "count": null}
			r7["channels"] = r2
			r7["count"] = r2["length"]
			accu = func_ok_0x100000036(a1, r7)
		}
		catch
		{
			r5 = accu
			accu = null
			accu = ctx39
			r5 = ctx1
			r7 = a1
			accu = func_fail_0x100000037(r7, 400, s39_2["message"])
		}
		r5 = undefined
		r4 = r1
		return r5
	}
	catch {}
	r4 = accu
	accu = null
	accu = ctx40
	r4 = ctx1
	r5 = r1
	return s40_2
}

function async func_unknown_0x100000094(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r9, accu;
	r3 = __closure
	r4 = this
	r1 = accu
	r3 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r4 = ctx1
		try
		{
			r5 = s1_13["fetchViaProxy"]
			if (!a0["body"])
			{
			}
			r7 = {}
			r6 = r5(r7)
			r5 = r1
			r5 = await r6
			r6 = _GeneratorGetResumeMode(r1)
			if (!r6 === 0)
			{
				accu = r5
			}
			r2 = r5
			r7 = {"channels": null, "count": null, "via": null}
			r7["channels"] = r2
			r7["count"] = r2["length"]
			r7["via"] = "proxy"
			accu = func_ok_0x100000036(a1, r7)
		}
		catch
		{
			r5 = accu
			accu = null
			accu = ctx41
			r5 = ctx1
			r9 = s41_2["message"]
			r7 = a1
			accu = func_fail_0x100000037(r7, 400, r9)
		}
		r5 = undefined
		r4 = r1
		return r5
	}
	catch {}
	r4 = accu
	accu = null
	accu = ctx42
	r4 = ctx1
	r5 = r1
	return s42_2
}

function async func_unknown_0x100000093(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r13, accu;
	r5 = __closure
	r6 = this
	r2 = accu
	r5 = ctx1
	try
	{
		if (!a0["body"])
		{
		}
		accu = {}
		r1 = {}
		r6 = ctx1
		try
		{
			r7 = s1_13["fetchChannels"]
			r8 = r7(r1)
			r7 = r2
			r7 = await r8
			r8 = _GeneratorGetResumeMode(r2)
			if (!r8 === 0)
			{
				accu = r7
			}
			r4 = r7
			r9 = {"channels": null, "count": null, "via": null}
			r9["channels"] = r4
			r9["count"] = r4["length"]
			r9["via"] = "direct"
			accu = func_ok_0x100000036(a1, r9)
		}
		catch
		{
			r7 = accu
			accu = null
			accu = ctx43
			r7 = ctx1
			accu = r1["noProxyFallback"]
			if (r1["noProxyFallback"])
			{
				r11 = s43_2["message"]
				r9 = a1
				r9 = func_fail_0x100000037(r9, 400, r11)
				r8 = r2
				accu = r9
				return r9
			}
			r8 = ctx43
			try
			{
				r9 = s1_13["fetchViaProxy"]
				r10 = r9(r1)
				r9 = r2
				r9 = await r10
				r10 = _GeneratorGetResumeMode(r2)
				if (!r10 === 0)
				{
					accu = r9
				}
				r3 = r9
				r11 = {"channels": null, "count": null, "via": null, "note": "\\x62a\\x639\\x630\\x651\\x631 \\x627\\x644\\x627\\x62a\\x635\\x627\\x644 \\x627\\x644\\x645\\x628\\x627\\x634\\x631\\x60c \\x62a\\x645 \\x627\\x644\\x62c\\x644\\x628 \\x639\\x628\\x631 \\x648\\x633\\x64a\\x637 xtream2m3u"}
				r11["channels"] = r3
				r11["count"] = r3["length"]
				r11["via"] = "proxy"
				accu = func_ok_0x100000036(a1, r11)
			}
			catch
			{
				r9 = accu
				accu = null
				accu = ctx44
				r9 = ctx43
				r13 = "مباشر: "
				r13 = (r13 + s43_2["message"])
				r13 = (r13 + " | وسيط: ")
				r13 = (r13 + s44_2["message"])
				r11 = a1
				accu = func_fail_0x100000037(r11, 400, r13)
			}
		}
		r7 = undefined
		r6 = r2
		return r7
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx45
	r6 = ctx1
	r7 = r2
	return s45_2
}

function async func_unknown_0x100000092(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = s1_20["getNews"]
			r8 = !(!Boolean([]))
			r7 = r6(r8)
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx46
			r4 = ctx1
			r6 = a1
			accu = func_fail_0x100000037(r6, 500, s46_2["message"])
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx47
	r3 = ctx1
	r4 = r1
	return s47_2
}

function func_unknown_0x100000091(a0, a1)
{
	let r0, r1, r2, r3, r4, accu;
	r1 = ctx1
	s48_2 = a0
	s48_3 = func_0x4405_0x100000001
	r2 = s1_8["get"]
	r0 = r2()
	r3 = "matches"
	r4 = r0["matches"]["filter"]
	r0[r3] = r4(func_unknown_0x100000090)
	r2 = s1_8["save"]
	accu = r2()
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x100000090(a0)
{
	let r1;
	r1 = s48_2["params"]
	return !(a0["id"] === r1["id"])
}

function func_unknown_0x10000008f(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	if (!a0["body"])
	{
	}
	r6 = {}
	r1 = r6["home"]
	r2 = r6["away"]
	r3 = r6["kickoffUtc"]
	if (!r6["home"])
		|| (!r6["away"])
		|| (!r6["kickoffUtc"])
	{
		r7 = a1
		return func_fail_0x100000037(r7, 400, "\\x627\\x644\\x641\\x631\\x64a\\x642\\x627\\x646 \\x648\\x648\\x642\\x62a \\x627\\x644\\x645\\x628\\x627\\x631\\x627\\x629 \\x645\\x637\\x644\\x648\\x628\\x629")
	}
	r4 = s1_8["get"]()
	r6 = {"id": null, "home": null, "away": null, "homeFlag": null, "awayFlag": null, "group": null, "kickoffUtc": null, "channelId": null}
	r6["id"] = s1_8["newId"]("m")
	r6["home"] = r1
	r6["away"] = r2
	r7 = a0["body"]
	accu = r7["homeFlag"]
	if (!r7["homeFlag"])
	{
		accu = ""
	}
	r6["homeFlag"] = accu
	r7 = a0["body"]
	accu = r7["awayFlag"]
	if (!r7["awayFlag"])
	{
		accu = ""
	}
	r6["awayFlag"] = accu
	r7 = a0["body"]
	accu = r7["group"]
	if (!r7["group"])
	{
		accu = ""
	}
	r6["group"] = accu
	r6["kickoffUtc"] = r3
	r7 = a0["body"]
	accu = r7["channelId"]
	if (!r7["channelId"])
	{
		accu = ""
	}
	r6["channelId"] = accu
	r5 = r6
	r7 = r4["matches"]
	r6 = r7["push"]
	accu = r6(r5)
	accu = s1_8["save"]()
	r8 = {"match": null}
	r8["match"] = r5
	accu = func_ok_0x100000036(a1, r8)
	return undefined
}

function func_unknown_0x10000008e(a0, a1)
{
	let r2, r3;
	r2 = {"matches": null}
	r3 = s1_8["get"]
	r3 = r3()
	r2["matches"] = r3["matches"]
	return func_ok_0x100000036(a1, r2)
}

function func_unknown_0x10000008d(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r4 = ctx1
	s49_2 = a0
	s49_3 = func_0x4405_0x100000001
	r0 = s1_8["get"]()
	r6 = r0["channels"]
	r1 = r6["find"](func_unknown_0x10000008c)
	r5 = s1_11["readLog"]
	r7 = s49_2["params"]
	r2 = r5(r7["id"], 5242880)
	accu = r1
	if (r1)
	{
		accu = r1["name"]
	}
	else
	{
		r7 = s49_2["params"]
		accu = r7["id"]
	}
	r7 = accu
	r6 = r7["replace"]
	r8 = /[^\\w\\u0600-\\u06FF-]+/
	r6 = r6(r8, "_")
	r3 = r6["slice"](0, 50)
	r5 = a1["setHeader"]
	r7 = "Content-Type"
	r8 = "text/plain; charset=utf-8"
	accu = r5(r7, r8)
	r5 = a1["setHeader"]
	r7 = "Content-Disposition"
	r8 = "attachment; filename=\""
	r8 = (r8 + r3)
	r8 = (r8 + ".log\"")
	accu = r5(r7, r8)
	r5 = a1["end"]
	r6 = a1
	accu = r2
	if (!r2)
	{
		accu = ""
	}
	r7 = accu
	accu = r5(r7)
	return undefined
}

function func_unknown_0x10000008c(a0)
{
	let r1;
	r1 = s49_2["params"]
	return a0["id"] === r1["id"]
}

function func_unknown_0x10000008b(a0, a1)
{
	let r1, r2, r3, r4, r5, accu;
	r2 = s1_11["clearLog"]
	r1 = r2(a0["params"]["id"])
	if (r2(a0["params"]["id"]))
	{
		r4 = {"cleared": null}
		r4["cleared"] = !(!Boolean([]))
		accu = func_ok_0x100000036(a1, r4)
	}
	else
	{
		r5 = "تعذّر تصفير السجل"
		r3 = a1
		accu = func_fail_0x100000037(r3, 500, r5)
	}
	return undefined
}

function func_unknown_0x10000008a(a0, a1)
{
	let r3, r4, accu;
	r3 = {"log": null}
	r4 = s1_11["readLog"]
	r3["log"] = r4(a0["params"]["id"], 98304)
	accu = func_ok_0x100000036(a1, r3)
	return undefined
}

function func_unknown_0x100000089(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r1 = ctx1
	s50_2 = func_0x4405_0x100000001
	r2 = s1_8["get"]
	s50_3 = r2()
	r3 = s50_3["channels"]
	r2 = r3["map"]
	r0 = r2(func_unknown_0x100000088)
	r4 = {"channels": null, "nginx": null, "nginxBinding": null, "license": null, "messages": null, "contact": null, "uptime": null, "memoryMB": null, "load": null}
	r4["channels"] = r0
	r4["nginx"] = func_nginxStatus_0x100000023()
	r4["nginxBinding"] = func_nginxBinding_0x10000002c()
	r5 = s1_16["status"]
	r4["license"] = r5()
	r4["messages"] = s1_16["getMessages"]()
	r5 = s1_16["getContact"]
	r4["contact"] = r5()
	r5 = process["uptime"]
	r4["uptime"] = r5()
	r5 = Math["round"]
	r7 = process["memoryUsage"]
	r7 = r7()
	r7 = (r7["rss"] / 1048576)
	r4["memoryMB"] = r5(r7)
	r6 = s1_2("os")
	r5 = r6["loadavg"]
	r5 = r5()
	r4["load"] = r5[0]
	accu = func_ok_0x100000036(a1, r4)
	return undefined
}

function func_unknown_0x100000088(a0)
{
	let r0, r3, r4, r5, r6, r7;
	r0 = ctx50
	s51_2 = a0
	r3 = {"id": null, "name": null}
	r3["id"] = s51_2["id"]
	r3["name"] = s51_2["name"]
	r4 = s1_11["statusOf"](s51_2["id"])
	r5 = {"viewers": null, "scheduled": null}
	r5["viewers"] = func_viewerCount_0x100000003(s51_2["id"])
	r7 = s50_3["schedules"]
	r6 = r7["some"]
	r5["scheduled"] = r6(func_unknown_0x100000087)
	return Object["assign"](r3, r4, r5)
}

function func_unknown_0x100000087(a0)
{
	let r0, accu;
	r0 = a0["channelId"]
	accu = r0 === s51_2["id"]
	if (r0 === s51_2["id"])
	{
		r0 = a0["enabled"]
		accu = !(r0 === !Boolean([]))
	}
	return accu
}

function func_unknown_0x100000086(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r21, r22, r23, r24, r25, r26, r27, accu;
	r12 = s1_8["get"]
	r1 = r12()
	r2 = func_totalCurrentViewers_0x100000004()
	r3 = s1_11["ingestBandwidthBps"]()
	r4 = 0
	r15 = 428
	r12 = s1_11["bytesOutMap"]
	r14 = r12()
	r13 = GetIterator(r14)
	r12 = r13["next"]
	accu = false
	r14 = false
	r17 = ctx1
	try
	{
		while (true)
		{
			r14 = true
			r18 = r12()
			if (r18["done"]) break
			r14 = false
			r19 = r18["value"]
			r21 = GetIterator(r18["value"])
			accu = false
			r22 = false
			r25 = ctx1
			try
			{
				if (!false)
				r22 = true
				r26 = r21["next"]()
				accu = r26["done"]
					&& (!r26["done"])
				{
					r22 = false
					accu = r26["value"]
				}
				else
				{
					accu = undefined
				}
				r10 = accu
				if (!r22)
				r22 = true
				r26 = r21["next"]()
				accu = r26["done"]
					&& (!r26["done"])
				{
					r22 = false
					accu = r26["value"]
				}
				else
				{
					accu = undefined
				}
				r11 = accu
				accu = -1
				r24 = -1
				r23 = -1
			}
			catch
			{
				r24 = accu
				r23 = 0
			}
			if (!r22)
			{
				r27 = ctx1
				try
				{
					if (!r21["return"] == undefined)
					{
						accu = r21["return"]()
					}
					catch {}
				}
			}
			accu = null
			if (r23 === 0)
			{
				r15 = 0
				r16 = r24
				break
			}
			r21 = Math[r0(492)]
			r24 = func_viewerCount_0x100000003(r10)
			accu = (r4 + (r11 * r21(1, r24)))
			r19 = r4
			r4 = (r4 + (r11 * r21(1, r24)))
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
		r19 = ctx1
		try
		{
			if (!r13["return"] == undefined)
			{
				accu = r13["return"]()
			}
			catch {}
		}
	}
	accu = null
	if (r15 === 0)
	{
		accu = r16
	}
	r13 = Math["max"]
	r5 = (r3 * r13(1, r2))
	r12 = process["memoryUsage"]
	r6 = r12()
	r14 = {"uptimeSec": null, "serverStartedAt": null, "cpuLoad": null, "cpuCount": null, "memoryMB": null, "currentViewers": null, "totalViewers": null, "watchedChannels": null, "runningChannels": null, "totalChannels": null, "hlsBytesTotal": null, "egressBytesTotal": null, "ingestBandwidthBps": null, "egressBandwidthBps": null, "internetBandwidthBps": null}
	r15 = Math["floor"]
	r17 = process["uptime"]()
	r14["uptimeSec"] = r15(r17)
	r14["serverStartedAt"] = s1_26
	r16 = s1_2("os")
	r15 = r16["loadavg"]
	r15 = r15()
	r14["cpuLoad"] = r15[0]
	r16 = s1_2("os")
	r15 = r16["cpus"]
	r15 = r15()
	r14["cpuCount"] = r15["length"]
	r15 = Math["round"]
	r17 = (r6["rss"] / 1048576)
	r14["memoryMB"] = r15(r17)
	r14["currentViewers"] = r2
	r14["totalViewers"] = s1_25["size"]
	r14["watchedChannels"] = func_watchedChannelsCount_0x100000005()
	r15 = s1_11["runningCount"]
	r14["runningChannels"] = r15()
	r15 = r1["channels"]
	r14["totalChannels"] = r15["length"]
	r15 = s1_11["totalBytesOut"]
	r14["hlsBytesTotal"] = r15()
	r14["egressBytesTotal"] = r4
	r14["ingestBandwidthBps"] = r3
	r15 = Math["round"]
	r14["egressBandwidthBps"] = r15(r5)
	r14["internetBandwidthBps"] = r3
	accu = func_ok_0x100000036(a1, r14)
	return undefined
}

function func_unknown_0x100000085(a0, a1)
{
	let r1, r2, r3, accu;
	r2 = ctx1
	s52_2 = a0
	r1 = s1_8["get"]()
	r1["schedules"] = r1["schedules"]["filter"](func_unknown_0x100000084)
	r3 = s1_8["save"]
	accu = r3()
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x100000084(a0)
{
	return !(a0["id"] === s52_2["params"]["id"])
}

function func_unknown_0x100000083(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, accu;
	r4 = ctx1
	s53_2 = a0
	r1 = s1_8["get"]()
	r6 = r1["schedules"]
	r5 = r6["findIndex"]
	r2 = r5(func_unknown_0x100000082)
	if (r2 < 0)
	{
		r8 = "الجدولة غير موجودة"
		r6 = a1
		return func_fail_0x100000037(r6, 404, r8)
	}
	r6 = s53_2["body"]
	r3 = func_validateSchedule_0x10000001e(r6, r1)
	if (func_validateSchedule_0x10000001e(r6, r1))
	{
		r6 = a1
		r8 = r3
		return func_fail_0x100000037(r6, 400, r8)
	}
	r5 = r1["schedules"]
	r9 = {}
	r10 = r1["schedules"]
	r10 = r10[r2]
	r11 = {"channelId": null, "days": null, "slots": null, "enabled": null}
	r12 = s53_2["body"]
	r11["channelId"] = r12["channelId"]
	r12 = s53_2["body"]
	accu = r12["days"]
	r6 = r2
	if (!r12["days"])
	{
		accu = [0, 1, 2, 3, 4, 5, 6]
	}
	r11["days"] = accu
	r12 = s53_2["body"]
	r11["slots"] = r12["slots"]
	r12 = s53_2["body"]
	r12 = r12["enabled"]
	r11["enabled"] = !(r12 === !Boolean([]))
	r5[r6] = Object["assign"](r9, r10, r11)
	accu = s1_8["save"]()
	accu = s1_14["tick"]()
	r7 = {"schedule": null}
	r8 = r1["schedules"]
	r7["schedule"] = r8[r2]
	accu = func_ok_0x100000036(a1, r7)
	return undefined
}

function func_unknown_0x100000082(a0)
{
	return a0["id"] === s53_2["params"]["id"]
}

function func_unknown_0x100000081(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, accu;
	r1 = s1_8["get"]()
	r5 = a0["body"]
	r2 = func_validateSchedule_0x10000001e(r5, r1)
	if (func_validateSchedule_0x10000001e(r5, r1))
	{
		r5 = a1
		r7 = r2
		return func_fail_0x100000037(r5, 400, r7)
	}
	r4 = {"id": null, "channelId": null, "days": null, "slots": null, "enabled": null}
	r5 = s1_8["newId"]
	r4["id"] = r5("sch")
	r5 = a0["body"]
	r4["channelId"] = r5["channelId"]
	r5 = a0["body"]
	accu = r5["days"]
	if (!r5["days"])
	{
		accu = [0, 1, 2, 3, 4, 5, 6]
	}
	r4["days"] = accu
	r5 = a0["body"]
	r4["slots"] = r5["slots"]
	r5 = a0["body"]
	r4["enabled"] = !(r5["enabled"] === !Boolean([]))
	r3 = r4
	r5 = r1["schedules"]
	accu = r5["push"](r3)
	accu = s1_8["save"]()
	r4 = s1_14["tick"]
	accu = r4()
	r6 = {"schedule": null}
	r6["schedule"] = r3
	accu = func_ok_0x100000036(a1, r6)
	return undefined
}

function func_unknown_0x100000080(a0, a1)
{
	let r2, r3;
	r2 = {"schedules": null}
	r3 = s1_8["get"]()
	r2["schedules"] = r3["schedules"]
	return func_ok_0x100000036(a1, r2)
}

function func_unknown_0x10000007f(a0, a1)
{
	let r1, r2, r3, r4, accu;
	r2 = a0["params"]
	r3 = !Boolean([])
	accu = func_setManualStopped_0x10000001c(r2["id"], r3)
	r1 = ctx1
	try
	{
		r2 = s1_11["restart"]
		r4 = a0["params"]
		accu = r2(r4["id"])
		accu = func_ok_0x100000036(a1)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx54
		r2 = ctx1
		r4 = a1
		accu = func_fail_0x100000037(r4, 400, s54_2["message"])
	}
	return undefined
}

function func_unknown_0x10000007e(a0, a1)
{
	let r1, r2, r3, accu;
	r2 = a0["params"]
	r3 = !(!Boolean([]))
	accu = func_setManualStopped_0x10000001c(r2["id"], r3)
	r1 = s1_11["stop"]
	r3 = a0["params"]
	accu = r1(r3["id"])
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x10000007d(a0, a1)
{
	let r1, r2, r3, r4, accu;
	r2 = a0["params"]
	r3 = !Boolean([])
	accu = func_setManualStopped_0x10000001c(r2["id"], r3)
	r1 = ctx1
	try
	{
		r2 = s1_11["start"]
		r4 = a0["params"]
		accu = r2(r4["id"])
		accu = func_ok_0x100000036(a1)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx55
		r2 = ctx1
		r4 = a1
		accu = func_fail_0x100000037(r4, 400, s55_2["message"])
	}
	return undefined
}

function func_unknown_0x10000007c(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r1 = ctx1
	s56_2 = a0
	s56_3 = func_0x4405_0x100000001
	r2 = s1_8["get"]
	r0 = r2()
	r2 = s1_11["purgeChannel"]
	r4 = s56_2["params"]
	accu = r2(r4["id"])
	r3 = r0["channels"]["filter"]
	r0["channels"] = r3(func_unknown_0x10000007a)
	r3 = "schedules"
	r5 = r0["schedules"]
	r0[r3] = r5["filter"](func_unknown_0x10000007b)
	accu = s1_8["save"]()
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x10000007b(a0)
{
	let r0;
	r0 = a0["channelId"]
	return !(r0 === s56_2["params"]["id"])
}

function func_unknown_0x10000007a(a0)
{
	let r1;
	r1 = s56_2["params"]
	return !(a0["id"] === r1["id"])
}

function func_unknown_0x100000079(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r2 = ctx1
	s57_2 = a0
	s57_3 = func_0x4405_0x100000001
	r3 = s1_8["get"]
	r0 = r3()
	r4 = r0["channels"]
	r3 = r4["find"]
	r1 = r3(func_unknown_0x100000078)
	if (!r3(func_unknown_0x100000078))
	{
		r4 = a1
		return func_fail_0x100000037(r4, 404, "\\x627\\x644\\x642\\x646\\x627\\x629 \\x63a\\x64a\\x631 \\x645\\x648\\x62c\\x648\\x62f\\x629")
	}
	r3 = "enabled"
	if (r3 in s57_2["body"])
	{
		r4 = s57_2["body"]
		r1["enabled"] = !(!Boolean(r4["enabled"]))
	}
	r3 = "autoStart"
	if (r3 in s57_2["body"])
	{
		r4 = "autoStart"
		r5 = s57_2["body"]
		r1[r4] = !(!Boolean(r5["autoStart"]))
	}
	r3 = s1_8["save"]
	accu = r3()
	accu = r1["enabled"] === !Boolean([])
	if (r1["enabled"] === !Boolean([]))
	{
		r3 = ctx57
		try
		{
			accu = s1_11["stop"](s57_2["params"]["id"])
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx58
			r4 = ctx57
		}
	}
	r5 = {"channel": null}
	r5["channel"] = r1
	accu = func_ok_0x100000036(a1, r5)
	return undefined
}

function func_unknown_0x100000078(a0)
{
	let r1;
	r1 = s57_2["params"]
	return a0["id"] === r1["id"]
}

function func_unknown_0x100000077(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r6 = ctx1
	s59_2 = a0
	s59_3 = func_0x4405_0x100000001
	r7 = s1_8["get"]
	r0 = r7()
	r8 = r0["channels"]
	r7 = r8["findIndex"]
	r1 = r7(func_unknown_0x100000076)
	if (r1 < 0)
	{
		r10 = "القناة غير موجودة"
		r8 = a1
		return func_fail_0x100000037(r8, 404, r10)
	}
	r8 = s59_2["body"]
	r10 = s59_2["params"]
	r9 = r0
	r2 = func_validateChannel_0x100000016(r8, r9, r10["id"])
	if (func_validateChannel_0x100000016(r8, r9, r10["id"]))
	{
		r8 = a1
		r10 = r2
		return func_fail_0x100000037(r8, 400, r10)
	}
	r7 = s1_11["isRunning"]
	r9 = s59_2["params"]
	r3 = r7(r9["id"])
	r4 = !(!Boolean(r0["channels"][r1]["manualStopped"]))
	r7 = r0["channels"]
	r7 = r7[r1]
	r5 = r7["enabled"]
	r10 = s59_2["body"]
	r11 = s59_2["params"]
	r0["channels"][r1] = func_channelPayload_0x10000001a(r10, r11["id"])
	r7 = r0["channels"]
	r7 = r7[r1]
	r8 = "manualStopped"
	r7[r8] = r4
	if (r5 === !Boolean([]))
	{
		r7 = r0["channels"]
		r7 = r7[r1]
		r8 = "enabled"
		r7[r8] = !Boolean([])
	}
	r7 = s1_8["save"]
	accu = r7()
	if (r3)
	{
		r7 = s1_11["restart"]
		r9 = s59_2["params"]
		accu = r7(r9["id"])
	}
	r9 = {"channel": null}
	r9["channel"] = r0["channels"][r1]
	accu = func_ok_0x100000036(a1, r9)
	return undefined
}

function func_unknown_0x100000076(a0)
{
	let r1;
	r1 = s59_2["params"]
	return a0["id"] === r1["id"]
}

function func_unknown_0x100000075(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, accu;
	r4 = s1_8["get"]
	r1 = r4()
	r6 = a0["body"]
	accu = r6["chanId"]
	if (!r6["chanId"])
	{
		accu = ""
	}
	r6 = accu
	r5 = String(r6)
	r4 = r5["trim"]
	if (!Boolean(r4()))
	{
		r4 = a0["body"]
		r5 = "chanId"
		r7 = a0["body"]
		r7 = r7["name"]
		r6 = func_autoChanId_0x100000019(r7, r1)
		r4[r5] = func_autoChanId_0x100000019(r7, r1)
		accu = r6
	}
	r5 = a0["body"]
	r6 = r1
	r2 = func_validateChannel_0x100000016(r5, r6, null)
	if (func_validateChannel_0x100000016(r5, r6, null))
	{
		r5 = a1
		r7 = r2
		return func_fail_0x100000037(r5, 400, r7)
	}
	r5 = a0["body"]
	r6 = s1_8["newId"]("ch")
	r3 = func_channelPayload_0x10000001a(r5, r6)
	r5 = r1["channels"]
	accu = r5["push"](r3)
	r4 = s1_8["save"]
	accu = r4()
	r6 = {"channel": null}
	r6["channel"] = r3
	accu = func_ok_0x100000036(a1, r6)
	return undefined
}

function func_unknown_0x100000074(a0, a1)
{
	let r0, r1, r2, r3, r4, accu;
	r2 = ctx1
	s60_2 = a0
	s60_3 = func_0x4405_0x100000001
	r0 = s1_8["get"]()
	accu = r0["ads"]
	if (!r0["ads"])
	{
		accu = []
	}
	r4 = accu
	r3 = r4["findIndex"]
	r1 = r3(func_unknown_0x100000073)
	if (r1 < 0)
	{
		r4 = a1
		return func_fail_0x100000037(r4, 404, "\\x627\\x644\\x625\\x639\\x644\\x627\\x646 \\x63a\\x64a\\x631 \\x645\\x648\\x62c\\x648\\x62f")
	}
	r4 = r0["ads"]
	r3 = r4["splice"]
	accu = r3(r1, 1)
	accu = s1_8["save"]()
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x100000073(a0)
{
	let r1;
	r1 = s60_2["params"]
	return a0["id"] === r1["id"]
}

function func_unknown_0x100000072(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r4 = ctx1
	s61_2 = a0
	r1 = s1_8["get"]()
	accu = r1["ads"]
	if (!r1["ads"])
	{
		accu = []
	}
	r6 = accu
	r5 = r6["find"]
	r2 = r5(func_unknown_0x100000071)
	if (!r5(func_unknown_0x100000071))
	{
		r8 = "الإعلان غير موجود"
		r6 = a1
		return func_fail_0x100000037(r6, 404, r8)
	}
	if (!s61_2["body"])
	{
	}
	r3 = {}
	if (r3["type"])
	{
		r6 = "type"
		r7 = r3["type"]
		accu = r7 === "image"
		r5 = r2
		if (r7 === "image")
		{
			accu = "image"
		}
		else
		{
			accu = "text"
		}
		r5[r6] = accu
	}
	if (!undetectable === r3["text"])
	{
		r6 = "text"
		r8 = r3["text"]
		r2[r6] = func_clampStr_0x10000006e(r8, 300)
	}
	if (!undetectable === r3["image"])
	{
		r6 = "image"
		r8 = r3["image"]
		r2[r6] = func_clampStr_0x10000006e(r8, 500)
	}
	if (!undetectable === r3["link"])
	{
		r6 = "link"
		r8 = r3["link"]
		r2[r6] = func_clampStr_0x10000006e(r8, 500)
	}
	if (r3["placement"])
	{
		r6 = "placement"
		accu = r3["placement"] === "underChannels"
		r5 = r2
		if (r3["placement"] === "underChannels")
		{
			accu = "underChannels"
		}
		else
		{
			accu = "underPhone"
		}
		r5[r6] = accu
	}
	if (!undetectable === r3["enabled"])
	{
		r6 = "enabled"
		r2[r6] = !(!Boolean(r3["enabled"]))
	}
	if (!undetectable === r3["sort"])
	{
		r7 = r3["sort"]
		accu = Number(r7)
		r5 = r2
		if (!Number(r7))
		{
			accu = 0
		}
		r5["sort"] = accu
	}
	r5 = s1_8["save"]
	accu = r5()
	r7 = {"ad": null}
	r7["ad"] = r2
	accu = func_ok_0x100000036(a1, r7)
	return undefined
}

function func_unknown_0x100000071(a0)
{
	return a0["id"] === s61_2["params"]["id"]
}

function func_unknown_0x100000070(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r1 = s1_8["get"]()
	if (!r1["ads"])
	{
		r1["ads"] = []
	}
	if (!a0["body"])
	{
	}
	r2 = {}
	r5 = r2["type"]
	accu = r5 === "image"
	if (r5 === "image")
	{
		accu = "image"
	}
	else
	{
		accu = "text"
	}
	r3 = accu
	if (r3 === "text")
	{
		accu = r2["text"]
		if (!r2["text"])
		{
			accu = ""
		}
		r7 = accu
		r6 = String(r7)
		r5 = r6["trim"]
		if (!r5())
		{
			r8 = "نص الإعلان مطلوب"
			r6 = a1
			return func_fail_0x100000037(r6, 400, r8)
		}
	}
	if (r3 === "image")
	{
		accu = r2["image"]
		if (!r2["image"])
		{
			accu = ""
		}
		r7 = accu
		r6 = String(r7)
		if (!r6["trim"]())
		{
			r6 = a1
			return func_fail_0x100000037(r6, 400, "\\x635\\x648\\x631\\x629 \\x627\\x644\\x625\\x639\\x644\\x627\\x646 \\x645\\x637\\x644\\x648\\x628\\x629")
		}
	}
	r5 = {"id": null, "type": null, "enabled": null, "text": null, "image": null, "link": null, "placement": null, "sort": null}
	r6 = s1_8["newId"]
	r5["id"] = r6("ad")
	r5["type"] = r3
	r6 = r2["enabled"]
	r5["enabled"] = !(r6 === !Boolean([]))
	r7 = r2["text"]
	r5["text"] = func_clampStr_0x10000006e(r7, 300)
	r7 = r2["image"]
	r5["image"] = func_clampStr_0x10000006e(r7, 500)
	r7 = r2["link"]
	r5["link"] = func_clampStr_0x10000006e(r7, 500)
	r6 = r2["placement"]
	accu = r6 === "underChannels"
	if (r6 === "underChannels")
	{
		accu = "underChannels"
	}
	else
	{
		accu = "underPhone"
	}
	r5["placement"] = accu
	r7 = r2["sort"]
	accu = Number(r7)
	if (!Number(r7))
	{
		accu = (r1["ads"]["length"] + 1)
	}
	r5["sort"] = accu
	r4 = r5
	r6 = r1["ads"]
	r5 = r6["push"]
	accu = r5(r4)
	accu = s1_8["save"]()
	r7 = {"ad": null}
	r7["ad"] = r4
	accu = func_ok_0x100000036(a1, r7)
	return undefined
}

function func_unknown_0x10000006f(a0, a1)
{
	let r1, r2, r3, accu;
	r2 = {"ads": null}
	r3 = s1_8["get"]()
	accu = r3["ads"]
	r1 = a1
	if (!r3["ads"])
	{
		accu = []
	}
	r2["ads"] = accu
	return func_ok_0x100000036(r1, r2)
}

function func_clampStr_0x10000006e(a0, a1)
{
	let r1, r2, accu;
	accu = undetectable === a0
	if (undetectable === a0)
	{
		accu = ""
	}
	else
	{
		accu = a0
	}
	r2 = accu
	r1 = String(r2)
	return r1["slice"](0, a1)
}

function func_unknown_0x10000006d(a0, a1)
{
	let r2, r3;
	r2 = {"channels": null}
	r3 = s1_8["get"]
	r3 = r3()
	r2["channels"] = r3["channels"]
	return func_ok_0x100000036(a1, r2)
}

function func_unknown_0x10000006c(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r4 = ctx1
	accu = a0["body"]
	if (a0["body"])
	{
		r5 = a0["body"]
		accu = r5["ids"]
	}
	if (!accu)
	{
		accu = []
	}
	r1 = accu
	r5 = Array["isArray"]
	if (!r5(r1))
		|| (!r1["length"])
	{
		r8 = "لا توجد قنوات محددة"
		r6 = a1
		return func_fail_0x100000037(r6, 400, r8)
	}
	r5 = s1_8["get"]
	r2 = r5()
	r5 = r2["iptv"]
	r3 = r5["length"]
	accu = Set
	s62_2 = Set(r1)
	r6 = "iptv"
	r8 = r2["iptv"]
	r7 = r8["filter"]
	r2[r6] = r7(func_unknown_0x10000006b)
	r5 = s1_8["save"]
	accu = r5()
	r7 = {"deleted": null}
	r9 = r2["iptv"]
	r7["deleted"] = (r3 - r9["length"])
	accu = func_ok_0x100000036(a1, r7)
	return undefined
}

function func_unknown_0x10000006b(a0)
{
	return !Boolean(s62_2["has"](a0["id"]))
}

function func_unknown_0x10000006a(a0, a1)
{
	let r0, r1, r2, r3, r4, accu;
	r1 = ctx1
	s63_2 = a0
	s63_3 = func_0x4405_0x100000001
	r2 = s1_8["get"]
	r0 = r2()
	r4 = r0["iptv"]
	r3 = r4["filter"]
	r0["iptv"] = r3(func_unknown_0x100000069)
	r2 = s1_8["save"]
	accu = r2()
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x100000069(a0)
{
	let r1;
	r1 = s63_2["params"]
	return !(a0["id"] === r1["id"])
}

function func_unknown_0x100000068(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, accu;
	r6 = ctx1
	if (!a0["body"])
	{
	}
	r7 = {}
	r1 = r7["name"]
	s64_2 = r7["url"]
	r2 = r7["logo"]
	r3 = r7["group"]
	if (!r7["name"])
		|| (!s64_2)
	{
		r10 = "الاسم والرابط مطلوبان"
		r8 = a1
		return func_fail_0x100000037(r8, 400, r10)
	}
	r7 = s1_8["get"]
	r4 = r7()
	r8 = r4["iptv"]
	r7 = r8["some"]
	if (r7(func_unknown_0x100000067))
	{
		r8 = a1
		return func_fail_0x100000037(r8, 400, "\\x647\\x630\\x647 \\x627\\x644\\x642\\x646\\x627\\x629 \\x645\\x648\\x62c\\x648\\x62f\\x629 \\x645\\x633\\x628\\x642\\x627\\x64b")
	}
	r7 = {"id": null, "name": null, "url": null, "logo": null, "group": null}
	r8 = s1_8["newId"]
	r10 = "iptv"
	r7["id"] = r8(r10)
	r7["name"] = r1
	r7["url"] = s64_2
	accu = r2
	if (!r2)
	{
		accu = ""
	}
	r7["logo"] = accu
	accu = r3
	if (!r3)
	{
		accu = ""
	}
	r7["group"] = accu
	r5 = r7
	r8 = r4["iptv"]
	r7 = r8["push"]
	accu = r7(r5)
	r7 = s1_8["save"]
	accu = r7()
	r9 = {"channel": null}
	r9["channel"] = r5
	accu = func_ok_0x100000036(a1, r9)
	return undefined
}

function func_unknown_0x100000067(a0)
{
	return a0["url"] === s64_2
}

function async func_unknown_0x100000066(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = s1_12["importFromUrl"]
			r9 = a0["body"]
			accu = r9["url"]
			r5 = a1
			if (!r9["url"])
			{
				accu = ""
			}
			r9 = accu
			r8 = String(r9)
			r7 = r6(r8)
			r6 = r1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx65
			r4 = ctx1
			r6 = a1
			accu = func_fail_0x100000037(r6, 400, s65_2["message"])
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx66
	r3 = ctx1
	r4 = r1
	return s66_2
}

function func_unknown_0x100000065(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, accu;
	accu = func_0x4405_0x100000001
	r2 = ctx1
	try
	{
		if (!a0["file"])
		{
			r4 = a1
			return func_fail_0x100000037(r4, 400, "\\x644\\x645 \\x64a\\x62a\\x645 \\x627\\x62e\\x62a\\x64a\\x627\\x631 \\x645\\x644\\x641")
		}
		r3 = s1_6["readFileSync"]
		r5 = a0["file"]
		r5 = r5["path"]
		r6 = "utf8"
		r1 = r3(r5, r6)
		r5 = s1_12["importFromText"]
		r5 = r5(r1)
		accu = func_ok_0x100000036(a1, r5)
	}
	catch
	{
		r3 = accu
		accu = null
		accu = ctx67
		r3 = ctx1
		r5 = a1
		accu = func_fail_0x100000037(r5, 400, s67_2["message"])
	}
	return undefined
}

function func_unknown_0x100000064(a0, a1)
{
	let r2, r3;
	r2 = {"iptv": null}
	r3 = s1_8["get"]
	r3 = r3()
	r2["iptv"] = r3["iptv"]
	return func_ok_0x100000036(a1, r2)
}

function func_unknown_0x100000063(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r1 = ctx1
	s68_2 = a0
	s68_3 = func_0x4405_0x100000001
	r2 = s1_8["get"]
	r0 = r2()
	r3 = r0["channels"]
	if (r3["some"](func_unknown_0x100000061))
	{
		r3 = a1
		return func_fail_0x100000037(r3, 400, "\\x644\\x627 \\x64a\\x645\\x643\\x646 \\x62d\\x630\\x641 \\x627\\x644\\x645\\x635\\x62f\\x631 \\x644\\x623\\x646\\x647 \\x645\\x631\\x62a\\x628\\x637 \\x628\\x642\\x646\\x627\\x629")
	}
	r3 = "sources"
	r5 = r0["sources"]
	r4 = r5["filter"]
	r0[r3] = r4(func_unknown_0x100000062)
	accu = s1_8["save"]()
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x100000062(a0)
{
	return !(a0["id"] === s68_2["params"]["id"])
}

function func_unknown_0x100000061(a0)
{
	let r0, r1;
	r0 = a0["sourceId"]
	r1 = s68_2["params"]
	return r0 === r1["id"]
}

function func_unknown_0x100000060(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r10, accu;
	r3 = ctx1
	s69_2 = a0
	s69_3 = func_0x4405_0x100000001
	r4 = s1_8["get"]
	r0 = r4()
	r4 = r0["sources"]["findIndex"]
	r1 = r4(func_unknown_0x10000005f)
	if (r1 < 0)
	{
		r7 = "المصدر غير موجود"
		r5 = a1
		return func_fail_0x100000037(r5, 404, r7)
	}
	r5 = s69_2["body"]
	r7 = s69_2["params"]
	r6 = r0
	r2 = func_validateSource_0x10000000a(r5, r6, r7["id"])
	if (func_validateSource_0x10000000a(r5, r6, r7["id"]))
	{
		r5 = a1
		r7 = r2
		return func_fail_0x100000037(r5, 400, r7)
	}
	r4 = r0["sources"]
	r8 = {}
	r10 = {"id": null}
	r10["id"] = s69_2["params"]["id"]
	r4[r1] = Object["assign"](r8, s69_2["body"], r10)
	r4 = s1_8["save"]
	accu = r4()
	r6 = {"source": null}
	r7 = r0["sources"]
	r6["source"] = r7[r1]
	accu = func_ok_0x100000036(a1, r6)
	return undefined
}

function func_unknown_0x10000005f(a0)
{
	let r1;
	r1 = s69_2["params"]
	return a0["id"] === r1["id"]
}

function async func_unknown_0x10000005e(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r4 = __closure
	r5 = this
	r3 = accu
	r4 = ctx1
	try
	{
		accu = a0["body"]
		if (a0["body"])
		{
			r7 = a0["body"]
			accu = r7["url"]
		}
		if (!accu)
		{
			accu = ""
		}
		r7 = accu
		r6 = String(r7)
		r5 = r6["trim"]
		r1 = r5()
		accu = a0["body"]
		if (a0["body"])
		{
			r7 = a0["body"]
			accu = r7["userAgent"]
		}
		if (!accu)
		{
			accu = ""
		}
		r7 = accu
		r6 = String(r7)
		r5 = r6["trim"]
		accu = r5()
		if (!r5())
		{
			accu = "VLC/3.0.20 LibVLC/3.0.20"
		}
		r2 = accu
		r6 = /^https?:\\/\\//
		r8 = 254
		r5 = r6["test"]
		accu = r5(r1)
		if (!r5(r1))
		{
			r8 = "\\x631\\x627\\x628\\x637 \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d"
			r6 = a1
			r6 = func_fail_0x100000037(r6, 400, "\\x631\\x627\\x628\\x637 \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d")
			r5 = r3
			accu = r6
			return r6
		}
		r5 = ctx1
		try
		{
			r9 = func_probeUrl_0x100000012(r1, r2)
			r8 = r3
			r7 = a1
			r8 = await r9
			r9 = _GeneratorGetResumeMode(r3)
			if (!r9 === 0)
			{
				accu = r8
			}
			accu = func_ok_0x100000036(r7, r8)
		}
		catch
		{
			r6 = accu
			accu = null
			accu = ctx70
			r6 = ctx1
			r9 = {"ok": null, "status": 0, "message": null, "kind": null}
			r9["ok"] = !Boolean([])
			r9["message"] = s70_2["message"]
			r9["kind"] = "error"
			accu = func_ok_0x100000036(a1, r9)
		}
		r6 = undefined
		r5 = r3
		return r6
	}
	catch {}
	r5 = accu
	accu = null
	accu = ctx71
	r5 = ctx1
	r6 = r3
	return s71_2
}

function func_unknown_0x10000005d(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r11, accu;
	r4 = s1_8["get"]
	r1 = r4()
	r5 = a0["body"]
	r6 = r1
	r2 = func_validateSource_0x10000000a(r5, r6, null)
	if (func_validateSource_0x10000000a(r5, r6, null))
	{
		r5 = a1
		r7 = r2
		return func_fail_0x100000037(r5, 400, r7)
	}
	r4 = Object["assign"]
	r6 = {}
	r7 = a0["body"]
	r8 = {"id": null}
	r11 = "src"
	r8["id"] = s1_8["newId"](r11)
	r3 = r4(r6, r7, r8)
	r5 = r1["sources"]
	accu = r5["push"](r3)
	r4 = s1_8["save"]
	accu = r4()
	r6 = {"source": null}
	r6["source"] = r3
	accu = func_ok_0x100000036(a1, r6)
	return undefined
}

function func_unknown_0x10000005c(a0, a1)
{
	let r2, r3;
	r2 = {"sources": null}
	r3 = s1_8["get"]
	r3 = r3()
	r2["sources"] = r3["sources"]
	return func_ok_0x100000036(a1, r2)
}

function async func_unknown_0x10000005b(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = s1_10["recommendCaptureSettings"]
			r9 = a0["query"]
			accu = r9["device"]
			r5 = a1
			if (!r9["device"])
			{
				accu = ""
			}
			r9 = accu
			r8 = String(r9)
			r7 = r6(r8)
			r6 = r1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx72
			r4 = ctx1
			r8 = s72_2["message"]
			r6 = a1
			accu = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx73
	r3 = ctx1
	r4 = r1
	return s73_2
}

function async func_unknown_0x10000005a(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = s1_10["listDeviceOptions"]
			r9 = a0["query"]
			accu = r9["device"]
			r5 = a1
			if (!r9["device"])
			{
				accu = ""
			}
			r9 = accu
			r8 = String(r9)
			r7 = r6(r8)
			r6 = r1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx74
			r4 = ctx1
			r8 = s74_2["message"]
			r6 = a1
			accu = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx75
	r3 = ctx1
	r4 = r1
	return s75_2
}

function async func_unknown_0x100000059(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = s1_10["diagnose"]
			r7 = r6()
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx76
			r4 = ctx1
			r8 = s76_2["message"]
			r6 = a1
			accu = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx77
	r3 = ctx1
	r4 = r1
	return s77_2
}

function async func_unknown_0x100000058(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r6 = s1_10["listDshowDevices"]
			r7 = r6()
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx78
			r4 = ctx1
			r6 = a1
			accu = func_fail_0x100000037(r6, 500, ("\\x62a\\x639\\x630\\x631 \\x642\\x631\\x627\\x621\\x629 \\x627\\x644\\x623\\x62c\\x647\\x632\\x629: " + s78_2["message"]))
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx79
	r3 = ctx1
	r4 = r1
	return s79_2
}

function func_unknown_0x100000057(a0, a1)
{
	let r2, r3, r4, r5, accu;
	if (!a0["file"])
	{
		r4 = "لم يتم اختيار ملف"
		r2 = a1
		return func_fail_0x100000037(r2, 400, r4)
	}
	r3 = {"path": null, "url": null}
	r3["path"] = ("srv/uploads/" + a0["file"]["filename"])
	r4 = "/uploads/"
	r5 = a0["file"]
	r3["url"] = (r4 + r5["filename"])
	accu = func_ok_0x100000036(a1, r3)
	return undefined
}

function func_unknown_0x100000056(a0, a1)
{
	let r1, r2, r3, r4, r6, accu;
	if (!a0["body"])
	{
	}
	r3 = {}
	r1 = r3["current"]
	r2 = r3["next"]
	r3 = s1_8["checkPassword"]
	if (!r3(r1))
	{
		r6 = "كلمة المرور الحالية غير صحيحة"
		r4 = a1
		return func_fail_0x100000037(r4, 400, r6)
	}
	if (!r2)
	r3 = String(r2)
	r3 = r3["length"]
		|| (r3 < 6)
	{
		r6 = "كلمة المرور الجديدة قصيرة (6 أحرف على الأقل)"
		r4 = a1
		return func_fail_0x100000037(r4, 400, r6)
	}
	r3 = s1_8["setPassword"]
	accu = r3(r2)
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x100000055(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, accu;
	r1 = s1_2("fs")
	r12 = s1_2("child_process")
	r2 = r12["execSync"]
	r12 = s1_8["get"]
	r12 = r12()
	r3 = r12["settings"]
	r4 = func_buildNginxConf_0x100000002(r3)
	r5 = []
	accu = []
	r6 = []
	r12 = ctx1
	try
	{
		r13 = s1_5["join"]
		r15 = s1_8["ROOT"]
		r11 = r13(r15, "nginx", "nginx.conf")
		r13 = r1["mkdirSync"]
		r15 = s1_5["dirname"]
		r15 = r15(r11)
		r16 = {"recursive": null}
		r16["recursive"] = !(!Boolean([]))
		accu = r13(r15, r16)
		r13 = r1["writeFileSync"]
		accu = r13(r11, r4)
		r13 = r5["push"]
		r15 = "nginx/nginx.conf"
		accu = r13(r15)
	}
	catch
	{
		r13 = accu
		accu = null
		accu = ctx80
		r13 = ctx1
		r14 = r6["push"]
		r16 = "تعذّر كتابة النسخة المحلية: "
		r16 = (r16 + s80_2["message"])
		accu = r14(r16)
	}
	r7 = null
	if (r3["nginxPath"])
	{
		r13 = /nginx\\.exe$/
		r12 = r13["test"]
		r14 = r3["nginxPath"]
		accu = r12(r14)
		if (r12(r14))
		{
			r12 = s1_5["dirname"]
			r14 = r3["nginxPath"]
			accu = r12(r14)
		}
		else
		{
			accu = r3["nginxPath"]
		}
		r7 = accu
	}
	else
	{
		if (s1_22["isWindows"])
		{
			r12 = r1["existsSync"]
			r14 = "C:/nginx/nginx.exe"
			if (r12(r14))
			{
				r7 = "C:/nginx"
			}
		}
	}
	accu = r7
	if (r7)
	{
		r12 = ctx1
		try
		{
			r13 = s1_5["join"]
			r16 = "conf"
			r17 = "nginx.conf"
			r15 = r7
			r8 = r13(r15, r16, r17)
			r13 = r1["mkdirSync"]
			r15 = s1_5["dirname"]
			r15 = r15(r8)
			r16 = {"recursive": null}
			r16["recursive"] = !(!Boolean([]))
			accu = r13(r15, r16)
			r13 = r1["existsSync"]
			if (r13(r8))
			{
				r13 = r1["existsSync"]
				r15 = (r8 + ".amaan-bak")
				if (!r13(r15))
				{
					r13 = r1["copyFileSync"]
					r16 = (r8 + ".amaan-bak")
					accu = r13(r8, r16)
				}
			}
			r13 = r1["writeFileSync"]
			accu = r13(r8, r4)
			r13 = r5["push"]
			r15 = r8["replace"]
			r17 = /\\\\/
			r15 = r15(r17, "/")
			accu = r13(r15)
			r13 = ctx1
			try
			{
				r15 = "child_process"
				r14 = s1_2(r15)
				r9 = r14["spawnSync"]
				r15 = /nginx\\.exe$/
				r14 = r15["test"]
				accu = r3["nginxPath"]
				if (!r3["nginxPath"])
				{
					accu = ""
				}
				r16 = accu
				accu = r14(r16)
				if (r14(r16))
				{
					accu = r3["nginxPath"]
				}
				else
				{
					r14 = s1_5["join"]
					r17 = "nginx.exe"
					accu = r14(r7, r17)
				}
				r10 = accu
				r17 = ["-p", 0, "-c", 0, "-s", "reload"]
				r17[1] = r7
				r17[3] = r8
				r16 = r17
				r17 = {"cwd": null, "timeout": 8000, "stdio": null}
				r17["cwd"] = r7
				r17["stdio"] = "ignore"
				r15 = r10
				accu = r9(r15, r16, r17)
				r14 = r6["push"]
				r16 = "تم إعادة تحميل Nginx بنجاح على المنفذ "
				accu = r3["nginxPort"]
				r15 = r6
				if (!r3["nginxPort"])
				{
					accu = 80
				}
				r16 = (r16 + accu)
				accu = r14(r16)
			}
			catch
			{
				r14 = accu
				accu = null
				accu = ctx81
				r14 = ctx1
				r15 = r6["push"]
				r17 = "تم تحديث الملف لكن تعذّر إعادة تحميل Nginx تلقائياً — أعد تشغيله يدوياً."
				accu = r15(r17)
			}
		}
		catch
		{
			r13 = accu
			accu = null
			accu = ctx82
			r13 = ctx1
			r14 = r6["push"]
			r16 = (("\\x62a\\x639\\x630\\x651\\x631 \\x627\\x644\\x643\\x62a\\x627\\x628\\x629 \\x641\\x64a \\x645\\x62c\\x644\\x62f Nginx (" + r7) + "): ")
			r16 = (r16 + s82_2["message"])
			r16 = (r16 + " — انسخ nginx/nginx.conf يدوياً.")
			accu = r14(r16)
		}
	}
	else
	{
		r14 = r6["push"]
		accu = r14("\\x644\\x645 \\x64a\\x64f\\x62d\\x62f\\x64e\\x651\\x62f \\x645\\x633\\x627\\x631 Nginx \\x641\\x64a \\x627\\x644\\x625\\x639\\x62f\\x627\\x62f\\x627\\x62a \\x2014 \\x627\\x646\\x633\\x62e nginx/nginx.conf \\x64a\\x62f\\x648\\x64a\\x627\\x64b \\x625\\x644\\x649 \\x645\\x62c\\x644\\x62f Nginx\\x60c \\x623\\x648 \\x623\\x62f\\x62e\\x644 \\x645\\x633\\x627\\x631\\x647 \\x641\\x64a \\xab\\x627\\x644\\x645\\x633\\x627\\x631\\x627\\x62a\\xbb.")
	}
	r14 = {"written": null, "notes": null, "nginxPort": null, "port": null}
	r14["written"] = r5
	r14["notes"] = r6
	accu = r3["nginxPort"]
	r13 = a1
	if (!r3["nginxPort"])
	{
		accu = 80
	}
	r14["nginxPort"] = accu
	accu = r3["port"]
	if (!r3["port"])
	{
		accu = 3001
	}
	r14["port"] = accu
	accu = func_ok_0x100000036(r13, r14)
	return undefined
}

function func_unknown_0x100000054(a0, a1)
{
	let r0, r1, r2, r7, r10, r11, r12, r13, r14, r15, r16, r17, r18, r20, accu;
	r10 = s1_8["get"]
	r1 = r10()
	r11 = [0, "siteNameLatin", 0, 0, "ticker", "tickerEnabled", "port", 0, 0, 0, 0, "worldCupApiStadiums", 0, 0, 0, 0, "x264Threads", "x264QualityMode", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "capLevelToPlayerSize", "cpuSaverDefault", "logoImage", 0, 0, "logoOpacityPct", 0, "nginxPath", "streamUserAgent", "newsSources", 0, 0, 0, 0, 0]
	r11[0] = "siteName"
	r11[2] = "logo"
	r11[3] = "phone"
	r11[7] = "nginxPort"
	r11[8] = "worldCupTheme"
	r11[9] = "worldCupFullPage"
	r11[10] = "worldCupApiGames"
	r11[12] = "hlsTime"
	r11[13] = "hlsListSize"
	r11[14] = "hlsDeleteThreshold"
	r11[15] = "x264Preset"
	r11[18] = "gopSeconds"
	r11[19] = "startupQueueDelayMs"
	r11[20] = "autoRestartCrashed"
	r11[21] = "restartBackoffMs"
	r11[22] = "maxRestarts"
	r11[23] = "sourceFailStopMinutes"
	r11[24] = "blockedStopMinutes"
	r11[25] = "playerMaxBufferLength"
	r11[26] = "playerBackBufferLength"
	r11[27] = "playerLiveSyncDuration"
	r11[31] = "logoPosition"
	r11[32] = "logoSizePct"
	r11[34] = "ffmpegPath"
	r11[38] = "newsCacheMinutes"
	r11[39] = "sportsTickerEnabled"
	r11[40] = "sportsNewsSources"
	r11[41] = "idleStopEnabled"
	r13 = 217
	r11[42] = "idleStopMinutes"
	r2 = r11
	r11 = GetIterator(r2)
	r10 = r11["next"]
	accu = false
	r12 = false
	r15 = ctx1
	try
	{
		while (true)
		{
			r12 = true
			r16 = r10()
			if (r16["done"]) break
			r12 = false
			if (!r16["value"] in a0[r0(278)]) continue
			r17 = r1[r0(429)]
			accu = a0["body"][r16["value"]]
			r17[r16["value"]] = a0["body"][r16["value"]]
		}
		accu = -1
		r14 = -1
		r13 = -1
	}
	catch
	{
		r14 = accu
		r13 = 0
	}
	if (!r12)
	{
		r17 = ctx1
		try
		{
			if (!r11["return"] == undefined)
			{
				accu = r11["return"]()
			}
			catch {}
		}
	}
	accu = null
	if (r13 === 0)
	{
		accu = r14
	}
	r11 = ["port", 0]
	r13 = 357
	r11[1] = "nginxPort"
	r11 = GetIterator(r11)
	r10 = r11["next"]
	accu = false
	r12 = false
	r15 = ctx1
	try
	{
		while (true)
		{
			r12 = true
			r16 = r10()
			if (r16["done"]) break
			r12 = false
			if (!r16["value"] in a0["body"]) continue
			r18 = a0[r0(278)]
			r18 = r18[r16["value"]]
			r7 = parseInt(r18, 10)
			r17 = Number[r0(257)]
			if (!r17(r7))
				|| (r7 < 1)
				|| (r7 > 65535)
			{
				r20 = r0(241)
				r18 = a1
				r14 = func_fail_0x100000037(r18, 400, r20)
				r13 = 1
				break
			}
			r17 = r1[r0(429)]
			accu = r7
			r17[r16["value"]] = r7
		}
		accu = -1
		r14 = -1
		r13 = -1
	}
	catch
	{
		r14 = accu
		r13 = 0
	}
	if (!r12)
	{
		r17 = ctx1
		try
		{
			if (!r11["return"] == undefined)
			{
				accu = r11["return"]()
			}
			catch {}
		}
	}
	accu = null
	switch (r13)
	default:
	{
		break
	}
	case (0):
	{
		accu = r14
	}
	case (1):
	{
		return r14
	}
	r10 = r1["settings"]
	r10 = r10["port"]
	r11 = r1["settings"]
	if (r10 === r11["nginxPort"])
	{
		r11 = a1
		return func_fail_0x100000037(r11, 400, "\\x645\\x646\\x641\\x630 \\x627\\x644\\x646\\x638\\x627\\x645 \\x648\\x645\\x646\\x641\\x630 Nginx \\x64a\\x62c\\x628 \\x623\\x646 \\x64a\\x643\\x648\\x646\\x627 \\x645\\x62e\\x62a\\x644\\x641\\x64a\\x646")
	}
	r10 = s1_8["save"]
	accu = r10()
	r12 = {"settings": null, "restartRequired": null}
	r12["settings"] = r1["settings"]
	r13 = "port"
	accu = r13 in a0["body"]
	r11 = a1
	if (!r13 in a0["body"])
	{
		accu = "nginxPort" in a0["body"]
	}
	r12["restartRequired"] = accu
	accu = func_ok_0x100000036(r11, r12)
	return undefined
}

function func_unknown_0x100000053(a0, a1)
{
	let r2, r3;
	r2 = {"settings": null}
	r3 = s1_8["get"]
	r3 = r3()
	r2["settings"] = r3["settings"]
	return func_ok_0x100000036(a1, r2)
}

function func_unknown_0x100000052(a0, a1)
{
	let r1, r2, r3, accu;
	if (!func_isLoopback_0x100000007(a0))
	{
		r2 = a1
		return func_fail_0x100000037(r2, 403, "\\x645\\x62a\\x627\\x62d \\x645\\x646 \\x627\\x644\\x62c\\x647\\x627\\x632 \\x627\\x644\\x645\\x62d\\x644\\x64a \\x641\\x642\\x637")
	}
	r3 = {"stopping": null}
	r3["stopping"] = !(!Boolean([]))
	accu = func_ok_0x100000036(a1, r3)
	r1 = ctx1
	try
	{
		r2 = s1_11["stopAll"]
		accu = r2()
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx83
		r2 = ctx1
	}
	accu = setTimeout(func_unknown_0x100000051, 1500)
	return undefined
}

function func_unknown_0x100000051()
{
	return process["exit"](0)
}

function async func_unknown_0x100000050(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r8 = !Boolean([])
			r7 = s1_20["getSportsNews"](r8)
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx84
			r4 = ctx1
			r8 = s84_2["message"]
			r6 = a1
			accu = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx85
	r3 = ctx1
	r4 = r1
	return s85_2
}

function async func_unknown_0x10000004f(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r2 = __closure
	r3 = this
	r1 = accu
	r2 = ctx1
	try
	{
		accu = func_0x4405_0x100000001
		r3 = ctx1
		try
		{
			r8 = !Boolean([])
			r7 = s1_20["getNews"](r8)
			r6 = r1
			r5 = a1
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r1)
			if (!r7 === 0)
			{
				accu = r6
			}
			accu = func_ok_0x100000036(r5, r6)
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx86
			r4 = ctx1
			r8 = s86_2["message"]
			r6 = a1
			accu = func_fail_0x100000037(r6, 500, r8)
		}
		r4 = undefined
		r3 = r1
		return r4
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx87
	r3 = ctx1
	r4 = r1
	return s87_2
}

function func_unknown_0x10000004e(a0, a1)
{
	let r2;
	r2 = {"matches": null}
	r2["matches"] = s1_20["todayMatches"]()
	return func_ok_0x100000036(a1, r2)
}

function func_unknown_0x10000004d(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, accu;
	r4 = a0["query"]
	accu = r4["id"]
	if (!r4["id"])
	{
		accu = ""
	}
	r4 = accu
	r1 = String(r4)
	r3 = s1_11["statusOf"]
	r2 = r3(r1)
	r5 = {"status": null, "running": null}
	r4 = a1
	accu = r2
	if (r2)
	{
		accu = r2["status"]
	}
	if (!accu)
	{
		accu = "unknown"
	}
	r5["status"] = accu
	r6 = s1_11["isRunning"]
	r5["running"] = r6(r1)
	accu = func_ok_0x100000036(r4, r5)
	return undefined
}

function func_unknown_0x10000004c(a0, a1)
{
	let r0, r1, r4, r5, r8, r9, r10, r11, r12, r13, r14, r15, accu;
	if (!a0["body"])
	{
	}
	r8 = {}
	r1 = r8["channelId"]
	if (r8["channelId"])
	{
		if (r8["clientId"])
		{
			r9 = String(r8["clientId"])
			r8 = r9["slice"]
			r4 = r8(0, 64)
			r8 = s1_24["has"]
			if (!r8(r1))
			{
				r11 = Map(func_0x4405_0x100000001)
				accu = s1_24["set"](r1, r11)
			}
			r9 = s1_24["get"](r1)
			r12 = Date
			r11 = Date["now"]
			r11 = r11()
			accu = r9["set"](r4, r11)
			r9 = s1_25
			r8 = s1_25["add"]
			r10 = (r1 + ":")
			r10 = (r10 + r4)
			accu = r8(r10)
			if (s1_25["size"] > 100000)
			{
				r9 = Array.from(s1_25)
				r8 = r9["slice"]
				r11 = 10000
				r5 = r8(0, 10000)
				r9 = GetIterator(r5)
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
						r15 = s1_25[r0(236)]
						accu = r15(r14["value"])
						r14 = r14["value"]
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
						catch {}
					}
				}
				accu = null
				if (r11 === 0)
				{
					accu = r12
				}
			}
			r8 = s1_15["onViewerHeartbeat"]
			accu = r8(r1)
		}
	}
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x10000004b(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r1 = ctx1
	s88_2 = func_0x4405_0x100000001
	r2 = s1_8["get"]
	s88_3 = r2()
	s88_4 = Date(r0)
	r5 = Array.from(s88_3["channels"])
	r4 = r5["sort"]
	r4 = r4(func_unknown_0x100000047)
	r3 = r4["filter"]
	r3 = r3(func_unknown_0x100000048)
	r2 = r3["map"]
	r0 = r2(func_unknown_0x10000004a)
	r4 = {"channels": null}
	r4["channels"] = r0
	accu = func_ok_0x100000036(a1, r4)
	return undefined
}

function func_unknown_0x10000004a(a0)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r5 = ctx88
	s89_2 = a0
	s89_3 = func_0x4405_0x100000001
	r6 = s1_14["nextOpenMinutes"]
	r0 = r6(s89_2["id"], s88_4)
	accu = !(undetectable === r6(s89_2["id"], s88_4))
	if (!(undetectable === r6(s89_2["id"], s88_4)))
	{
		accu = r0 > 0
	}
	r1 = accu
	r2 = "live"
	if (s89_2["manualStopped"])
	{
		r2 = "stopped"
	}
	else
	{
		if (r1)
		{
			r2 = "scheduled"
		}
	}
	r3 = s88_3["sources"]["find"](func_unknown_0x100000049)
	if (s88_3["sources"]["find"](func_unknown_0x100000049))
	r6 = r3["type"]
	accu = r6 === "multi-m3u8"
		&& (r6 === "multi-m3u8")
	{
		accu = "master.m3u8"
	}
	else
	{
		accu = "index.m3u8"
	}
	r4 = accu
	r6 = {"id": null, "name": null, "category": null, "cover": null, "quality": null, "live": null, "status": null, "nextOpen": null, "url": null}
	r6["id"] = s89_2["id"]
	r6["name"] = s89_2["name"]
	accu = s89_2["category"]
	if (!s89_2["category"])
	{
		accu = ""
	}
	r6["category"] = accu
	accu = s89_2["cover"]
	if (!s89_2["cover"])
	{
		accu = ""
	}
	r6["cover"] = accu
	accu = s89_2["quality"]
	if (!s89_2["quality"])
	{
		accu = "copy"
	}
	r6["quality"] = accu
	r6["live"] = s1_11["isRunning"](s89_2["id"])
	r6["status"] = r2
	r6["nextOpen"] = r0
	r7 = "/hls/"
	r7 = (r7 + s89_2["id"])
	r7 = (r7 + "/")
	r6["url"] = (r7 + r4)
	return r6
}

function func_unknown_0x100000049(a0)
{
	return a0["id"] === s89_2["sourceId"]
}

function func_unknown_0x100000048(a0)
{
	let r0;
	r0 = a0["enabled"]
	return !(r0 === !Boolean([]))
}

function func_unknown_0x100000047(a0, a1)
{
	let r0, accu;
	accu = a0["sort"]
	if (!a0["sort"])
	{
		accu = 0
	}
	r0 = accu
	accu = a1["sort"]
	if (!a1["sort"])
	{
		accu = 0
	}
	return (r0 - accu)
}

function func_unknown_0x100000046(a0, a1)
{
	let r0, r1, r3, r4, r5, accu;
	r1 = ctx1
	s90_2 = func_0x4405_0x100000001
	r5 = s1_8["get"]
	r5 = r5()
	accu = r5["ads"]
	if (!r5["ads"])
	{
		accu = []
	}
	r5 = accu
	r4 = r5["filter"]
	r4 = r4(func_unknown_0x100000043)
	r3 = r4["sort"]
	r3 = r3(func_unknown_0x100000044)
	r0 = r3["map"](func_unknown_0x100000045)
	r4 = {"ads": null}
	r4["ads"] = r0
	accu = func_ok_0x100000036(a1, r4)
	return undefined
}

function func_unknown_0x100000045(a0)
{
	let r0;
	r0 = {"id": null, "type": null, "text": null, "image": null, "link": null, "placement": null}
	r0["id"] = a0["id"]
	r0["type"] = a0["type"]
	r0["text"] = a0["text"]
	r0["image"] = a0["image"]
	r0["link"] = a0["link"]
	r0["placement"] = a0["placement"]
	return r0
}

function func_unknown_0x100000044(a0, a1)
{
	let r0, accu;
	accu = a0["sort"]
	if (!a0["sort"])
	{
		accu = 0
	}
	r0 = accu
	accu = a1["sort"]
	if (!a1["sort"])
	{
		accu = 0
	}
	return (r0 - accu)
}

function func_unknown_0x100000043(a0)
{
	let r0, accu;
	accu = !(a0["enabled"] === !Boolean([]))
	if (!(a0["enabled"] === !Boolean([])))
	{
		r0 = a0["type"]
		accu = r0 === "text"
		if (r0 === "text")
		{
			accu = a0["text"]
		}
		else
		{
			accu = a0["image"]
		}
	}
	return accu
}

function func_unknown_0x100000042(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r1 = ctx1
	s91_2 = func_0x4405_0x100000001
	r5 = s1_8["get"]
	r5 = r5()
	accu = r5["ads"]
	if (!r5["ads"])
	{
		accu = []
	}
	r5 = accu
	r4 = r5["filter"]
	r4 = r4(func_unknown_0x10000003f)
	r3 = r4["sort"]
	r3 = r3(func_unknown_0x100000040)
	r2 = r3["map"]
	r0 = r2(func_unknown_0x100000041)
	r4 = {"ads": null}
	r4["ads"] = r0
	accu = func_ok_0x100000036(a1, r4)
	return undefined
}

function func_unknown_0x100000041(a0)
{
	let r0;
	r0 = {"id": null, "type": null, "text": null, "image": null, "link": null, "placement": null}
	r0["id"] = a0["id"]
	r0["type"] = a0["type"]
	r0["text"] = a0["text"]
	r0["image"] = a0["image"]
	r0["link"] = a0["link"]
	r0["placement"] = a0["placement"]
	return r0
}

function func_unknown_0x100000040(a0, a1)
{
	let r0, accu;
	accu = a0["sort"]
	if (!a0["sort"])
	{
		accu = 0
	}
	r0 = accu
	accu = a1["sort"]
	if (!a1["sort"])
	{
		accu = 0
	}
	return (r0 - accu)
}

function func_unknown_0x10000003f(a0)
{
	let r0, accu;
	r0 = a0["enabled"]
	accu = !(r0 === !Boolean([]))
	if (!(r0 === !Boolean([])))
	{
		r0 = a0["type"]
		accu = r0 === "text"
		if (r0 === "text")
		{
			accu = a0["text"]
		}
		else
		{
			accu = a0["image"]
		}
	}
	return accu
}

function func_unknown_0x10000003e(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, accu;
	r2 = s1_8["get"]
	r2 = r2()
	r1 = r2["settings"]
	r4 = {"settings": null}
	r5 = {"siteName": null, "siteNameLatin": null, "logo": null, "phone": null, "ticker": null, "worldCupTheme": null, "worldCupFullPage": null, "worldCupApiGames": null, "worldCupApiStadiums": null, "sportsTicker": null, "playerMaxBufferLength": null, "playerBackBufferLength": null, "playerLiveSyncDuration": null, "capLevelToPlayerSize": null, "cpuSaverDefault": null}
	r5["siteName"] = r1["siteName"]
	r5["siteNameLatin"] = r1["siteNameLatin"]
	r5["logo"] = r1["logo"]
	r5["phone"] = r1["phone"]
	accu = r1["tickerEnabled"]
	r3 = a1
	if (r1["tickerEnabled"])
	{
		accu = r1["ticker"]
	}
	else
	{
		accu = ""
	}
	r5["ticker"] = accu
	r5["worldCupTheme"] = !(!Boolean(r1["worldCupTheme"]))
	r6 = r1["worldCupFullPage"]
	r5["worldCupFullPage"] = !(r6 === !Boolean([]))
	accu = r1["worldCupApiGames"]
	if (!r1["worldCupApiGames"])
	{
		accu = ""
	}
	r5["worldCupApiGames"] = accu
	accu = r1["worldCupApiStadiums"]
	if (!r1["worldCupApiStadiums"])
	{
		accu = ""
	}
	r5["worldCupApiStadiums"] = accu
	r5["sportsTicker"] = !(!Boolean(r1["sportsTickerEnabled"]))
	r5["playerMaxBufferLength"] = r1["playerMaxBufferLength"]
	r5["playerBackBufferLength"] = r1["playerBackBufferLength"]
	r5["playerLiveSyncDuration"] = func_effectiveLiveSync_0x100000006(r1)
	r5["capLevelToPlayerSize"] = !(!Boolean(r1["capLevelToPlayerSize"]))
	r5["cpuSaverDefault"] = !(!Boolean(r1["cpuSaverDefault"]))
	r4["settings"] = r5
	accu = func_ok_0x100000036(r3, r4)
	return undefined
}

function func_unknown_0x10000003d(a0, a1)
{
	let r2, r3;
	r2 = {"authed": null}
	r3 = s1_9["isAuthed"]
	r2["authed"] = r3(a0)
	return func_ok_0x100000036(a1, r2)
}

function func_unknown_0x10000003c(a0, a1)
{
	let accu;
	accu = s1_9["logout"](a1)
	accu = func_ok_0x100000036(a1)
	return undefined
}

function func_unknown_0x10000003b(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, accu;
	r7 = s1_8["get"]
	r7 = r7()
	r1 = r7["settings"]
	if (r7["settings"]["setupDone"])
	{
		r8 = a1
		return func_fail_0x100000037(r8, 400, "\\x62a\\x645 \\x627\\x644\\x625\\x639\\x62f\\x627\\x62f \\x645\\x633\\x628\\x642\\x627\\x64b")
	}
	if (!a0["body"])
	{
	}
	r7 = {}
	r2 = r7["ownerName"]
	r3 = r7["networkName"]
	r4 = r7["phone"]
	r5 = r7["city"]
	r6 = r7["password"]
	if (!r7["ownerName"])
		|| (!r7["networkName"])
		|| (!r7["phone"])
		|| (!r7["city"])
	{
		r10 = "يرجى تعبئة كل الحقول"
		r8 = a1
		return func_fail_0x100000037(r8, 400, r10)
	}
	if (!r6)
	r7 = String(r6)
	r7 = r7["length"]
		|| (r7 < 6)
	{
		r8 = a1
		return func_fail_0x100000037(r8, 400, "\\x643\\x644\\x645\\x629 \\x627\\x644\\x645\\x631\\x648\\x631 \\x64a\\x62c\\x628 \\x623\\x646 \\x62a\\x643\\x648\\x646 6 \\x623\\x62d\\x631\\x641 \\x639\\x644\\x649 \\x627\\x644\\x623\\x642\\x644")
	}
	r8 = "ownerName"
	r10 = String(r2)
	r9 = r10["slice"]
	r1[r8] = r9(0, 100)
	r8 = "networkName"
	r10 = String(r3)
	r1[r8] = r10["slice"](0, 100)
	r9 = String(r4)
	r1["phone"] = r9["slice"](0, 40)
	r9 = String(r5)
	r8 = r9["slice"]
	r1["city"] = r8(0, 80)
	r8 = "setupDone"
	r1[r8] = !(!Boolean([]))
	r7 = s1_8["setPassword"]
	r9 = String(r6)
	accu = r7(r9)
	r7 = s1_8["save"]
	accu = r7()
	r10 = {"ownerName": null, "networkName": null, "phone": null, "city": null}
	r10["ownerName"] = r1["ownerName"]
	r10["networkName"] = r1["networkName"]
	r10["phone"] = r1["phone"]
	r10["city"] = r1["city"]
	r8 = s1_16["reportSetup"](r10)
	accu = r8["catch"](func_unknown_0x10000003a)
	r9 = {"ok": null}
	r9["ok"] = !(!Boolean([]))
	accu = func_ok_0x100000036(a1, r9)
	return undefined
}

function func_unknown_0x10000003a()
{
	return undefined
}

function func_unknown_0x100000039(a0, a1)
{
	let r1, r2, r4, accu;
	r2 = s1_8["get"]
	r2 = r2()
	r1 = r2["settings"]
	r4 = {"needsSetup": null}
	r4["needsSetup"] = !Boolean(r1["setupDone"])
	accu = func_ok_0x100000036(a1, r4)
	return undefined
}

function func_unknown_0x100000038(a0, a1)
{
	let r1, r2, r3, r4, r5, r6, r7, r8;
	if (!a0["body"])
	{
	}
	r3 = {}
	r1 = r3["user"]
	r2 = r3["pass"]
	r3 = s1_9["login"]
	r5 = a0
	r6 = a1
	r7 = r1
	r8 = r2
	if (r3(r5, r6, r7, r8))
	{
		return func_ok_0x100000036(a1)
	}
	r6 = "اسم المستخدم أو كلمة المرور غير صحيحة"
	r4 = a1
	return func_fail_0x100000037(r4, 401, r6)
}

function func_fail_0x100000037(a0, a1, a2)
{
	let r0, r1, r2;
	r1 = a0["status"]
	r1 = r1(a1)
	r0 = r1["json"]
	r2 = {"ok": null, "message": null}
	r2["ok"] = !Boolean([])
	r2["message"] = a2
	return r0(r2)
}

function func_ok_0x100000036(a0, a1)
{
	let r0, r1, r2, r4, r5;
	r0 = a0["json"]
	r4 = {"ok": null}
	r4["ok"] = !(!Boolean([]))
	r1 = a0
	if (!a1)
	{
	}
	r5 = {}
	r2 = Object["assign"](r4, r5)
	return r0(r2)
}

function func_filename_0x100000035(a0, a1, a2)
{
	let r1, r2, r3, r4, accu;
	r3 = a1["originalname"]
	r2 = r3["replace"]
	r4 = /[^\\w.\\-\\u0600-\\u06FF]+/
	r1 = r2(r4, "_")
	r4 = Date["now"]
	r4 = r4()
	r4 = (r4 + "_")
	r4 = (r4 + r1)
	accu = a2(null, r4)
	return undefined
}

function func_unknown_0x100000034(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x4405_0x100000001
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(297)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(260)
			r4 = (r4 * ((-parseInt(r6)) / 2))
			r6 = r0(440)
			r4 = (r4 + ((-parseInt(r6)) / 3))
			r6 = r0(491)
			r5 = (parseInt(r6) / 4)
			r7 = r0(497)
			r4 = (r4 + (r5 * (parseInt(r7) / 5)))
			r6 = r0(566)
			r5 = (parseInt(r6) / 6)
			r7 = r0(522)
			r4 = (r4 + (r5 * (parseInt(r7) / 7)))
			r6 = r0(459)
			r4 = (r4 + (parseInt(r6) / 8))
			r6 = r0(352)
			r4 = (r4 + ((-parseInt(r6)) / 9))
			r6 = r0(344)
			r5 = ((-parseInt(r6)) / 10)
			r7 = r0(312)
			r2 = (r4 + (r5 * ((-parseInt(r7)) / 11)))
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
		accu = ctx92
		r4 = ctx1
		r7 = r1["shift"]()
		accu = r1["push"](r7)
	}
	return undefined
}

function func_0x3cec_0x100000033()
{
	let r0;
	r0 = ctx1
	s93_2 = ["BMDPBNHqB3j0", "l3nYDI91CgXVywrZlYi7cIaGicaGicaGicaGigfJy2vZC19SB2CGB2zMoWOGicaGicaGicaGicbHzgrFAgvHzgvYienHy2HLlunVBNrYB2WGiM1HEc1Hz2u9mZyWmci7cIaGicaGicaGFqOGicaGicaGigXVy2f0Aw9Uic8GEWOGicaGicaGicaGicbWCM94Ev9WyxnZigH0Dha6lY8XmJCUmc4WlJe6", "l3H0CMvHBs9HzgqTyMf0y2G", "2kpyTTMbinMb2kRySDIPinIY2yxzHTMk2kKG2yJyP9IT2k/yQsdyUDMe2yKG2kFzHnIJ2ylzHa", "2ytyPYdyQTMi2kZyRYdzGTMg2yJyP9IQinMe2k3zHnMr2yFyPW", "BwvTB3j5vxnHz2u", "l3nLDhrPBMDZl3bHC3n3B3jK", "CNvUBMLUz0nVDw50", "CgfYyw1Z", "y2L0Eq", "2kFyRTIQ2leG2ylzHTIN2kKG2lxyRDMk2k3yQq", "BMv3swq", "AxnbBMrYB2LK", "y2XLyxjmB2C", "yxv0B1n0yxj0", "C2XPy2u", "l3DVCMXKy3vWl3jLzNjLC2GTBMv3CW", "AgXZrgvSzxrLvgHYzxnOB2XK", "y29UzG", "AxrLBxm", "2kRzHsdyP9IZ2kRySDIV2kFyRYdyP9Me2yByS9IU2kKG2kFzHnIN2k3yQTMk2kFyT9Mk2kKG4OcuinMk2y/yUDIN2k8G2kRyTnI62yRzHcdyP9Me2yByUnIN2yuG2kFzHnII2yy", "l3vWBg9Hza", "zMLSDgvY", "Aw5JBhvKzxm", "Dg90ywXcExrLC091Da", "l2rLDMLJzxmVzgLHz25VC2u", "vKXdlZmUmc4YmcbmAwjwtemVmY4WlJiW", "y2HHBKLK", "Dw5RBM93BG", "2kRyUDIW2zhySsdyQTI12yhzITIXinIN2ytyS9IS2yq", "l2nOyw5UzwXZ", "DMLKzw9ezxzPy2u", "2yxyS9IN2leG2kFzHnMf2ytzGsdzHDI32ytzInIO", "lMXVzYi", "zNbZ", "y292zxi", "l3nVDxjJzxmVoMLK", "DgLJAW", "Dw5KzxjdAgfUBMvSCW", "2kRzHsdyQTI32kJzITMcinIN2ytyQTIT2k/zITIRiokaLcdzITMp2lNyP9IVinIQ2ltyUTMk2yqG2kFzHnMg2lJyP9MfinIN2ytyOTMg", "2kpyTTMbinIX2kFyQnI32kFzIYdzInIN2k3yR9IN2ySG2lNzHnMjinIN2ytyO9Mc2yqG2yxyUsdyQTIT2k/zITIVinIN2ytyRnMi2k/yQq", "oJPMzMzMoJeYnY4WlJaUmq", "ndGWCa", "EhrF", "inMk2lhyR9MrinMe2ypzHIdzHDMginIO2lhzHTIN2yxyRcdyOTIU2leG2lRzITIXig5NAw54inIN2ytyQTIN2kJyUsdzHnIJ2yxyP9MginMe2kFzITMblG", "Bg9NB1nPEMvqy3q", "DgLJA2vY", "uK9pva", "AgXZvgLTzq", "y29WEuzPBgvtEw5J", "D29YBgrdDxbbCgLtDgfKAxvTCW", "C2v0ugfZC3DVCMq", "l2XPy2vUC2uVywn0AxzHDgu", "Dgv4Dc9WBgfPBJSGy2HHCNnLDd11DgyToa", "l21Ol3jLC29SDMu", "C2L0zu5HBwu", "l2rLDMLJzxmVB3b0Aw9UCW", "DxbSB2fKCW", "2ypzHnMf2kKG2kFzHnMf2lhzInIXinIN2ytyRDIN2ytzITIPinI62yRySsdyTDIT2yRyRDIP", "qZOVBMDPBNG", "DgHYzwfKCW", "yML0CMf0zq", "zgLHz25VC2u", "Aw1WB3j0rNjVBvvYBa", "2yRzInIS2k8G2ylzHTIN2kKG2kpyRTIX2yKG2kJzHTMb2lmG2kFzHnMf2lNySDMr2ye", "mtbTyG", "DMLLD2vYq291BNq", "2kFzHnIN2lpzHsdzInIN2ytySDIN2kJyTYdzHDI32ytzInIO2kFzHG", "kI8Q", "AgXZ", "BMv3C0nHy2HLtwLUDxrLCW", "yNL0zxnpDxrnyxa", "C2v0DgLUz3m", "C2LUz2XL", "Cgf0Aa", "C291CMnLCW", "BwLU", "AxnsDw5UAw5N", "l2jHy2T1Cc9Yzxn0B3jL", "DhLWzq", "CMvZDgfYDa", "zgf0yq", "C2nOzwr1BgvZ", "mJGXmZi1m3fTDeXUDa", "2yByTsdyP9Me2kxyUDMe2kFzHIdzHDI32ytzInIO", "l2nOyw5UzwXZlZPPzc9Yzxn0yxj0", "l2XVz2LU", "DxnL", "lMfTywfUlwjHAW", "2kFyS9MfinIN2ytzHDIZ2kRyRTIV2yuG2kpzIcdzG9Me2yxyQsdyP9Me2yxySDMi2leG2lRzITIXinI12k3zITIT2kK", "Bg9NCW", "CgDYzxa", "y29WEq", "2kFyS9MfinIN2ytzGTMg2kFyQsdzHDI32ytzInIO", "AgvHzgvYCW", "ChvZAa", "BM9qCM94EuzHBgXIywnR", "C3bSAxq", "z2v0twvZC2fNzxm", "CgXHEwvYqMfJA0j1zMzLCKXLBMD0Aa", "2yRyRnIOinIN2k7yQTMk2kFySsdyRnMh2kFySIdyP9Me2yhzITIV2yRzIa", "ANnVBG", "mJa1mZqXnNHUAMriAa", "AwrSzvn0B3bfBMfIBgvK", "zMzTCgvNugf0Aa", "2ytyPYdyQTMi2kZyRYdzGTMg2yJyP9IQinMf2k3yR9IV2kK", "yMLUzfWOxcLCCYT0B1XZkZbClJbClJbClJa6", "oWOGicaGicaGicaGicbWCM94Ev9ODhrWx3zLCNnPB24Gms4XoWOGicaGicaGicaGicbWCM94Ev9ZzxrFAgvHzgvYienVBM5Ly3rPB24GiIi7icaGicaGicmGA2vLCc1HBgL2zsdzHTIT2yGGtM9KzsdzHnIQ2ylzHnMk2yqG2ypzHnMb2kKG2kFzHnIN2kRyTDIN2ytyP9IQcIaGicaGicaGicaGihbYB3H5x3nLDf9OzwfKzxiGsg9ZDcaKAg9ZDdSkicaGicaGicaGicaGChjVEhLFC2v0x2HLywrLCIbylvjLywWTsvaGjhjLBw90zv9HzgrYoWOGicaGicaGicaGicbWCM94Ev9YzwfKx3rPBwvVDxqGmZaWoWOGicaGicaGicaGicbJBgLLBNrFBwf4x2jVzhLFC2L6zsaYmdq4BtSkicaGicaGicb9cIaGicb9cN0k", "CgLWzq", "y29Uy2f0", "Axb0DG", "CMvZDgfYDejHy2TVzMznCW", "yMLUyxj5", "C2L6zq", "l3b1yMXPyY93B3jSzgn1Cc9UzxDZ", "2ytzHsdzITMp2lhzGDI5inMf2ytzGq", "B25wAwv3zxjizwfYDgjLyxq", "zgLYzwn0", "l3b1yMXPyY9Zzxr0Aw5NCW", "z2v0q29UDgfJDa", "iokaLcdyP9Mg2lpyRIbUz2LUEc9Uz2LUEc5JB25MinMk2k/zInMk2kFzIY4", "zxHPC3rZu3LUyW", "Dw5KzxjqAg9Uzq", "l21HDgnOzxm", "Chv0", "BM93", "ktOG", "yxr0ywnOBwvUDdSGzMLSzw5HBwu9iG", "DMfYAwfUDhm", "Dw5SAw5Ru3LUyW", "AgfZ", "inMf2k3yRnMi2liG2lNzHnMjinMf2lpyQTMi2yKG2yByUnIN2yuG2yJzITMg2k/zInIYinMg2yhyS9MhicJyUTIN2ytyQnIN2ySGshLWzxiTvIdyO9MiifDttcdyO9MiinMg2lFyP9McinMf2yByP9Mb2laG2k/zITMg2kFzHDMk2ypzIIdzHDIT2kZzInIYinMe2ybxAw5oqvqPiokaLcdzHnMk2lmG2kRyUDIN2lhyTTIN2ySG2kJzITMginI52yxzHnMk2kFyQIbUz2LUEnIminMi2kxzHTMh2kFyOsdyP9Me2lNzHDMe2yRyP9IQinMe2yyG2yRyRDMe2zhzHY4G2kFzHnIT2yqG2kFzHnIJ2lpySDI5oIdyUTMk2zhySsdcQ9Mf2yBzGDIWinIN2ytyUDIX2lBcUYdzHDMginIN2ytyPDI52k/yP9IV2kFyQIdyPDMe2yKG2lhzGTMfinII2k7ySsaO2yxyQ9MeidGWmIKUinMe2ytyQTIJ2ypzITIVinI02lRzKDMeinIO2lxzHnIN2k3zITIPinIN2ytzHDIV2yRyStOGBMv0C2GGAw50zxjMywnLigLWDJqGC2HVDYbLEgnSDwrLzhbVCNrYyw5NzsbWCM90B2nVBd10y3a", "2lxzITI62kKG2kFzHnMi2ylyQIdzITIS2kGG2kpzHIdyQTMd2yJzHIbisdPntq", "C2f2zq", "mtzwtfLrufi", "Bwf4", "CgXHy2vTzw50", "l2XVz3mVoMLKl2rVD25SB2fK", "ihWG2yJyS9Mk2lC6ia", "AxnbDxrOzwq", "nZiZmdKWuLbvt3Dx", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcaOmtaG2kVzInIN2yBzJsK", "ywXSB2m", "y2f0zwDVCNK", "2kFzHnIL2lNzHnIN2yyG2lRzITIXinMf2yJyRnMi2k8", "C3rHCNq", "BwfZDgvYlM0ZDtG", "l3vWBg9HzhmV", "2kFzHnMf2lxyR9IXinI62yRySsdzHDMi2kZzInIV", "2kRyUDIW2zhySsdzG9IQ2kFyQnIPinIN2ytzHTIZ2k7yQsdyP9Me2yxyRDMe2yRyQtOG", "ywrK", "zxHWB3j0CW", "z2v0tMv3CW", "BgL2zq", "C3bVCNrZtMv3C1nVDxjJzxm", "Ag9TzuzSywC", "Bwf4uMvZDgfYDhm", "zMv0y2HdAgfUBMvSCW", "q29UDgvUDc1uExbL", "l2XVz3mVoMLKl2nSzwfY", "Bg9Hzgf2zW", "l21Ol2zLDgnO", "C2v0sgvHzgvY", "BMfTzq", "Ahr0Chm", "mtu0Bw5Oze1i", "y2HHBM5LBa", "BwfW", "CMvJB21Tzw5Kq2fWDhvYzvnLDhrPBMDZ", "l2fKCY86Awq", "l21LDhjPy3m", "Cg9YDa", "BxvSDgKTBtn1oa", "q29UDgvUDc1eAxnWB3nPDgLVBG", "zxHPDa", "yxv0B1jLC3rHCNrdCMfZAgvK", "C3rHCNrZv2L0Aa", "Edi2nfbYzxnLDa", "Bwf0y2HLCW", "l2LWDhyVAw1WB3j0lwzPBgu", "mZyWCa", "D29YBgrdDxbbCgLhyw1LCW", "l2LWDhyVoMLK", "C3rVChbLza", "l3nLDhrPBMDZl3jLz2vUzxjHDguTBMDPBNG", "yxnZAwDU", "CMvHzeXVzW", "AgXZtgLZDfnPEMu", "2yxyUDIX2zhzGsdyP9Me2ylzHTIN2kKG2yxyT9Me2yJyQa", "y2HHBM5LBeLK", "zw5K", "C3jJ", "l3nVDxjJzxm", "l3H0CMvHBs9MzxrJAa", "C291CMnLswq", "D3jPDgvgAwXLu3LUyW", "zxjYB3iUBg9N", "CMvZB2X2zujHDgnO", "z2v0", "C3rHDhvZq29Kzq", "zxjYB3i", "AwrZ", "DxjS", "Dg9mB3DLCKnHC2u", "mtaWndG", "y3b1CW", "BgLZDerLDMLJzu9WDgLVBNm", "DhjPBq", "B3DUzxjoyw1L", "mJqYnJCWD2jowLzK", "y3b1u2f2zxjezwzHDwX0", "2yRySDIS2yKG2kRyUDIO2kByQsdzG9MeinIN2ytyRDMc2yJzHa", "C2v0DxbeB25L", "q1nw", "l2fKCW", "l2rLDMLJzxmVCMvJB21Tzw5K", "zgvZDhjVEq", "C291CMnLrMfPBfn0B3bnAw51DgvZ", "zMXVB3i", "CMvTB3rLqwrKCMvZCW", "nZiWCa", "BMv0D29YA05HBwu", "C3rVCefSBa", "C3bSAwnL", "l3vWzgf0zs9ZDgf0Dxm", "CMvHzezPBgvtEw5J", "2kFzHnIX2kFyQnI3inMf2lFzHnMi2kG", "Bg9NBW", "Dgv4Da", "ywX3yxLZt24", "2yBzInI5inIN2ytzHDI12k/ySsdyUTMk2leG2lxyRDMk2k0", "l3H0CMvHBs9MzxrJAc1WCM94Eq", "Bg9NAw4", "CxvHBgL0Eq", "2yRzInIS2k8G2yxyTDIV2leG2klyRTIXinIO2yBzGDIZinIN2ytyP9IZ2yu", "l05i", "oWOGicaGicaGicaGicbWCM94Ev9ODhrWx3zLCNnPB24Gms4XoWOGicaGicaGicaGicbWCM94Ev9ZzxrFAgvHzgvYienVBM5Ly3rPB24GiIi7cIaGicaGicaGicaGihbYB3H5x3nLDf9OzwfKzxiGsg9ZDcaKAg9ZDdSkicaGicaGicaGicaGChjVEhLFC2v0x2HLywrLCIbylvjLywWTsvaGjhjLBw90zv9HzgrYoWOGicaGicaGih0kicaGicaGicaJinMk2k7yR9MfinMf2ylyP9I32lKGlNrZinMb2ylyTYaO2ylzInIN2kBzHsbTm3u4inMf2y/yRDMi2zhzHnIPinIL2ytzIsboB2rLinI52kJySsdyP9Me2yxzInMc2lKG2kpyUDMe2kFzHYKUcIaGicaGicaGiYdyRDIN2lpzHtOG2ytyPYdzHTI22lKGBg9JyxrPB24G2yxyQTIV2kFyRTMe2kFzIYdyQTIT2kOGywXPyxmG4Ocuig5NAw54inMe2kCG2yRzInIX2zhyQYdyP9Me2ybHBgLHCYdzHnMe2yxzInIN2ylyUqOGicaGicaGicmG2kFzHnMf2kRyR9IN2k7zHnIP2iWG2yhzITMp2k7yR9Mo2yuGlNrZinMf2yyG2kFzHnIS2ldySsdyP9Me2kFzGDIQ2lhyP9I22yOGkgH0BwWVksdyQnIV2yqG2yxyRnMe2k8GseXtiokgKIa0mdqG2ytzG9MecIaGicaGicaGiYdyP9Me2yxzGTIN2lFyUs4G2yFySnINinIO2kFzHnI22kJyTYdyS9IO2kGGiTMk2lNzHDMeinI52ytzIsdzHDMg2yhyScboB2rLinMf2kJyP9I02lhyQDMlidmWmdeG2ytzG9Mg2yCG2yRzGDI02yqG2lNyQnIXcIaGicaGicaGiYbUz2LUEciUinIN2ytzHDMc2lFyUsdyQ9IN2kJyQIdyQnIN2lpzHsdzGDIX2yRyRYdyQnI52k8G2ypyQTIN2kJyQTMh2iWG2yhyP9Me2ypyP9I0inIN2ytyT9Mi2yRzHcbPBw11DgfIBguG2yRzInI22y7yUqOGicaGicaGicmG2yxyQnIN2ltySDIP2ySG2lNzHnMjinMh2ldyPYdyP9Me2yxzInMc2lKG2k/zInMginIQ2k/yP9IU2yqUcIaGicaGicaGBg9JyxrPB24Gl2HSCY8GEWOGicaGicaGicaGicbHBgLHCYaI", "BMDPBNG", "BgLZDefSBg93zwq", "l3nJAgvKDwXLCY86Awq", "zgLZA1n0B3jHz2u", "l29UBgLUzs1JAgfUBMvSCW", "C29Tzq", "AwrSzvn0B3bnAw51DgvZ", "z3jVDxa", "l3nLDhrPBMDZ", "CMvZDg9YzujHy2T1Ca", "zgf5CW", "BMv4De9Wzw5nAw51DgvZ", "zNjVBq", "ChjVEhK", "C3j2", "Cgf0y2G", "BgLZDerZAg93rgv2AwnLCW", "AxnbCNjHEq", "DxnI", "Dxb0Aw1L", "B3rOzxi", "BMDPBNGUzxHL", "icJySDMf2liG2yJzITMg2k/zInIYia", "y3jLyxrLuMvHzfn0CMvHBq", "Cg9ZDa", "zgvSzxrL", "oJOX", "2ypzHnMf2kKG2kFzHnMf2lhzInIXinIN2ytyRnIV2yRyR9IPinMc2lxzITIX2kKGkdyG2kpyRDIX2yeG2lNzHnMjinIN2ytyO9Mc2yqP", "AM9PBG", "y2HLy2TqyxnZD29Yza", "2lhzGTMfinIN2ytzHDMg2yhyScdzITIS2kGG2kpzHIdzITMd2yJzHIdyQnMk2yyGmsdzIca2ntuZnq", "zMLSzq", "y3jLyxrLqMfJA3vW", "CgHVBMu", "C2XVDhm", "BgLUAW", "l2LWDhyVzgvSzxrLlwjHDgnO", "CgXHEwvYtgL2zvn5BMneDxjHDgLVBG", "yMXVy2TLzfn0B3bnAw51DgvZ", "2kFzHnIU2kFyR9MfinIX2k/zKsdyQnIT2kFzHnIPia", "C3rHDhvZ", "ywn0AxzHDgu", "BgvUz3rO", "DgvZDa", "CMvHBfvYBa", "yxv0AgvK", "AxnjBNrLz2vY", "l2XVz291Da", "BMDPBNGVBMDPBNGUy29UzG", "nda0yMXzAuzr", "DgLJA2vYrw5HyMXLza", "C3rHCNr1Cff1zxvLrgvSyxLnCW", "zxHLyW", "AgXZvMLLD2vYq291BNq", "C3bVCNrZvgLJA2vYrw5HyMXLza", "BMDPBNHqyxrO", "l3nYDI9OBhmViJSkicaGicaGicaGicaGywnJzxnZx2XVzYbVzMy7icaGicaGicaGicaGicaGicaGicaGicaJidiWmcSG2yxyTnIN2yFyRYddLYdzHDMc2kFyT9I5inMd2kVzITIX2kKGpsdyS9IS2yqG2lByRTMfinIO2ytyPYdzGDIN2kByR9IPcIaGicaGicaGicaGigfKzf9OzwfKzxiGqwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LUicO7cIaGicaGicaGicaGigfKzf9OzwfKzxiGq2fJAguTq29UDhjVBcaIChvIBgLJlcbTyxGTywDLptmXntm2mdaWlcbPBw11DgfIBguIoWOGicaGicaGih0kicaGicaGicbSB2nHDgLVBIaVDxbSB2fKCY8GEWOGicaGicaGicaGicbHBgLHCYaI", "B3jPz2LUywXUyw1L", "C29JA2v0", "Bg9NB0vUywjSzwq", "l2nOyw5UzwXZlZPPza", "DgLTzw91Da", "CMvZB2X2zwq", "Bg9NB1bVC2L0Aw9U", "2yRyRnIOinIN2k7yQTMk2kFySsdzGTMg2kFyQsdzHDMginMf2ypyQTIO2kKGsvbuvG", "zMLSzw5HBwu", "l3nJAgvKDwXLCW", "yM9KEq", "l3b1yMXPyY9OzwfYDgjLyxq", "DxrMoa", "AxnxAw5KB3DZ", "Aw5KzxGUBtn1oa", "l21Ol3jLC29SDMuTB25L", "y29Uy3vYCMvUy3K", "C2L0zu5HBwvmyxrPBG", "zMLUza", "2kFzHnIS2k/zInMe2kKG2lRzITIXinMf2yJyRnMi2k/yQq", "y2fWtgv2zwXuB1bSyxLLCLnPEMu", "l3vWzgf0zs9HChbSEq", "2kFzHnMf2yBzGDIWia", "l3n5C3rLBs9ZAhv0zg93BG", "l3H0CMvHBs9MzxrJAc1Tm3u", "CgXHEwvYtwf4qNvMzMvYtgvUz3rO", "l2LWDhy", "BwvZC2fNzq", "CgfYC2u", "ntD4AMHWq24", "CMvZB2X2zunOyw5UzwW", "zMLUzeLUzgv4", "Ahr0Ca", "zgLYBMfTzq", "2kRzHsdyQTIT2k/zITIRinIN2ytzHDMe2yeG2ytzG9MginIQ2lNySnMr2leG2kxyUDIN2k/yQsdyQTIT2yxzITMeie5NAw54inIQ2ytzGTIN2kBzITIN2ySG4OcuinIJ2lNyRYdyQTI02lRzITMe2yCG2yRyR9Mi2yRyP9MllG", "2kFzHnMc2yByP9IPinI62yRySsdzHDMi2kZzInIV2kK", "C3rVCa", "whrYzwfToIa", "ChvYz2vdAgfUBMvS", "y2HPBgrFChjVy2vZCW", "CxvLCNK", "Aw1Hz2u", "yxbWBgLJyxrPB24VEMLW", "Aw1WB3j0rNjVBvrLEhq", "mJK5mtu2A1jWt2Pu", "zMv0y2HwAwfqCM94Eq", "2kRzHsdyPDI52kFyR9IPinIQ2k3zHDMk2yqGtMDPBNGG2kJzHTIS2kFyRsdyUDMe2yKG2kFzHnMf2yBzGDIWia", "2yxyQnIN2ltyStOG", "A2v5CW", "mJqWCa", "2kFyS9MfinIN2ytzHDI12k/ySsdzHDI32ytzInIO", "l2jHy2T1Cc9KB3DUBg9Hza", "uM91DgvY", "zw5HyMXLza", "2yRyRnIOinIX2kJyTYdyP9Me2ylzHTIN2kKG2kJzHDI12k/ySsdzHDMi2kZzInIV", "l2fWAs9Tzq", "D29YBgrdDxbuAgvTzq", "BwTKAxjtEw5J", "2yxyUDIX2zhzGsdyP9Me2ylzHTIN2kK6inIJ2k3ySDMbinIL2yByRnMe2yRySTMk2kKG2yJyO9IX2ylyP9MfinMb2ylyTW", "AwDUB3jL", "2yRzInIS2k8G2ylzHTIN2kKG2kpyRTIX2yKG2kJzHTMb2lmG2kFzHnIN2lpzHq", "mti3lJaUmc4X", "CMfUzg9T", "CNnZ", "CMvWBgfJzq", "DMfS", "ywrZ", "2ytzHsdzITIQ2yuG2kFyRTIQ2yRyP9IXinMf2ytzGq", "C3rHDhvZt2y", "zM9YrwfJAa", "l2XVz3mVoMLK", "BwfUDwfSu3rVChbLza", "qZOVBMDPBNGVBMDPBNGUzxHL", "CM91BMq", "BMDPBNGUy29UzG", "zMv0y2HgCM9TttnvvxjS", "mtKWENvUy1fN", "DxnLCKfNzw50", "y2HHBM5LBhm", "l3b1yMXPyY9JAgfUBMvSlwHLywX0Aa", "l25NAw54l2XVz3mVzxjYB3iUBg9NiIb3yxjUoWP3B3jRzxjFChjVy2vZC2vZicbHDxrVoWP3B3jRzxjFCMXPBwL0x25VzMLSzsaXnJm4ndSkiYdyRDIN2lpzHsdzHnMi2yRzHTIV2yJySJOG2lNzHTIVihf1AxqVCMvSB2fKinMk2kJzGTMjinIN2ytyUDIN2yxzHcdyP9Me2ylyR9Mk2yuGiTMc2yRyRYdyP9Me2kFzHTIZ2k3yP9IOiIdzHDINinIV2kFzHDIQinMe2k/zITMhcImG2kFyQTI12kFzHnIN2kOGA2vLCc1HBgL2zsdyRDMk2kKGkdy12kSG2kRyQTIS2k/yRYePiokaLcdzGDIQ2kRySDIN2ypzHsdyUDMf2ytzITIN2kOGBMDPBNGUzxHLinI52kFzHnMc2kKG2yxyUsdzG9MecImG2kxyUDIN2k/yQsdyQTI02lRzITMelIdzH9IW2yCG2kFzHnMf2yFzHnIPinIQ2yhySDI2inIL2yBzH9IN2keG2kFzHnI52kFzHDMeinIN2ytzHDMg2lpyRDIOinIU2ytyP9MeideWinIR2yJyP9Mg2y0G2yxzH9Mf2kCG2ypyP9MglGP3B3jRzxjFC2H1DgrVD25FDgLTzw91DcaXmhm7cMv2zw50CYb7cIaGicb3B3jRzxjFy29UBMvJDgLVBNmGode5mJSkicaGig11BhrPx2fJy2vWDcbVBJSkFqPODhrWihSkicaGigLUy2X1zguGicaGicaGBwLTzs50ExbLCZSkicaGigrLzMf1BhrFDhLWzsaGyxbWBgLJyxrPB24VB2n0zxqTC3rYzwfToWOGicaGC2vUzgzPBguGicaGicbVBJSkicaGihnLBMrMAwXLx21HEf9JAhvUAYa1mtjRoWOGicaGDgnWx25VChvZAcaGicbVBJSkicaGihrJCf9UB2rLBgf5icaGB247cIaGicbNEMLWicaGicaGicaGig9MzJSkicaGigTLzxbHBgL2zv90Aw1LB3v0idy1oWOGicaGA2vLCgfSAxzLx3jLCxvLC3rZideWmdaWoWOGicaGCMvZzxrFDgLTzwrVDxrFy29UBMvJDgLVBIbVBJSkicaGicmG2ldyP9Md2lhyQsdzInI12yeG2kFzHnMf2ytzGDIN2kO6inIQ2y/yS9IX2zhyUsdyRTIV2yxyQsdyOTMe2kFzGsdzHDMc2kFyT9I5ic50CYdyP9Me2yxyQTI62yRzKDIX2kKG2kJyP9IZ2kRzHDIX2kFySqOGicaGB3bLBL9MAwXLx2nHy2HLig1HEd04mdaWigLUywn0AxzLptmWCZSkicaGig9Wzw5FzMLSzv9JywnOzv92ywXPzcaXmhm7cIaGicbVCgvUx2zPBgvFy2fJAgvFBwLUx3vZzxmGmtSkicaGig9Wzw5FzMLSzv9JywnOzv9LCNjVCNmGB2zMoWOGicaGDhLWzxmGEWOGicaGicaGigfWCgXPy2f0Aw9Ul3zUzc5HChbSzs5TCgvNDxjSig0ZDtG7cIaGicaGicaGDMLKzw8VBxaYDcb0CZSkicaGih0kicaGihnLCNzLCIb7cIaGicaGicaGBgLZDgvUia", "C29YDa", "iYdyO9Mf2kFzHIdzHnIN2yRzGsdIGjqG2yxzJ9Mi2ytzKDIVinIQ2ytzGTIN2kBzITIN2ySG2yxzHIdzHnMi2k3yQsdyP9Me2kRyRDMd2yuGknMf2y/zH9Mk2zhyOYdzHnMamJaWkYdzHDI02kFzH9IVkqOJinIZ2kZzHnMrinIJ2k7yT9IN2keG2kJzHDIZ2kFySsdzHDI32ytzGIdyQ9IN2kJyQJOG2yBzGTIX2kpzHYdzHDMginMd2yJyRYboB2rLinMe2kRyTnIU2yRyTsdzGDI02yqG2kFzHnIX2kJyTYdyQnIN2ytzHDMg2yhySaOJicJzHDIR2yqG2k3yUnIXinMi2yRzHTIV2yJySI9iExbLCI1winMe2yByT9IN2yiG2yxzHTIN2yhyScKG2kJyR9MeinIQ2lhzGYdyP9Me2yxyS9IQ2k7yR9MfinIJ2yxyP9MfinMb2ltzHcdyTDIN2yxyQI4kzxjYB3jFBg9Nici", "z29Wu2vJB25KCW", "nZu0mta5mwfWCKPHEa", "Dg9tDhjPBMC", "l2XPy2vUC2u", "l2HSCY8", "D29YBgrdDxbgDwXSugfNzq"]
	s1_57 = func_0x3cec_0x100000032
	return s1_57()
}

function func_0x3cec_0x100000032()
{
	return s93_2
}

function async func_addOneXtream_0x100000031(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, accu;
	r11 = __closure
	r12 = this
	r5 = accu
	r11 = ctx1
	try
	{
		r0 = a0
		r1 = a1["name"]
		r2 = a1["url"]
		r3 = a1["logo"]
		r4 = a1["group"]
	}
	catch
	{
		r12 = accu
		accu = null
		accu = ctx94
		r12 = ctx1
		r13 = r5
		return s94_2
	}
	r11 = ctx1
	accu = null
	r12 = ctx95
	try
	{
		s95_2 = func_0x4405_0x100000001
		r13 = "Xtream: "
		s95_3 = (r13 + r1)
		while (true)
		{
			r14 = r0["sources"]
			r13 = r14["some"]
			if (!r13(func_unknown_0x10000002d)) break
			s95_3 = (s95_3 + " ")
		}
		r13 = {"id": null, "name": null, "type": null, "url": null, "passthrough": null}
		r13["id"] = s1_8["newId"]("src")
		r13["name"] = s95_3
		r13["type"] = "hls"
		r13["url"] = r2
		r13["passthrough"] = !(!Boolean([]))
		r6 = r13
		r14 = r0["sources"]
		r13 = r14["push"]
		accu = r13(r6)
		accu = r3
		if (!r3)
		{
			accu = ""
		}
		r7 = accu
		if (accu)
		{
			r14 = /^https?:\\/\\//
			r13 = r14["test"]
			if (r13(r7))
			{
				r14 = s1_19["downloadCover"](r7)
				r13 = r5
				r13 = await r14
				r14 = _GeneratorGetResumeMode(r5)
				if (!r14 === 0)
				{
					accu = r13
				}
				r10 = r13
				if (r10)
				{
					r7 = r10
					accu = r7
				}
			}
		}
		s95_4 = r1
		while (true)
		{
			r14 = r0["channels"]
			if (!r14["some"](func_unknown_0x10000002e)) break
			s95_4 = (s95_4 + " ")
		}
		r13 = "xt_"
		r15 = Date["now"]
		r15 = r15()
		r14 = r15["toString"]
		r13 = (r13 + r14(36))
		r16 = Math["random"]
		r16 = r16()
		r15 = r16["toString"]
		r15 = r15(36)
		s95_5 = (r13 + r15["slice"](2, 5))
		while (true)
		{
			r14 = r0["channels"]
			r13 = r14["some"]
			if (!r13(func_unknown_0x10000002f)) break
			s95_5 = (s95_5 + "_")
		}
		r14 = r0["channels"]
		r8 = r14["reduce"](func_unknown_0x100000030, 0)
		r13 = {"id": null, "chanId": null, "name": null, "sourceId": null, "category": null, "sort": null, "cover": null, "logoOverlay": "", "quality": "copy", "fps": <null, "autoStart": null, "enabled": null}
		r14 = s1_8["newId"]
		r13["id"] = r14("ch")
		r13["chanId"] = s95_5
		r13["name"] = s95_4
		r13["sourceId"] = r6["id"]
		accu = r4
		if (!r4)
		{
			accu = ""
		}
		r13["category"] = accu
		r13["sort"] = (r8 + 1)
		r13["cover"] = r7
		r13["autoStart"] = !Boolean([])
		r13["enabled"] = !(!Boolean([]))
		r9 = r13
		r14 = r0["channels"]
		r13 = r14["push"]
		accu = r13(r9)
		r13 = {"source": null, "channel": null}
		r13["source"] = r6
		r13["channel"] = r9
		r14 = r13
		r13 = r5
		accu = r14
		return r14
	}
	catch {}
	r13 = accu
	accu = null
	accu = ctx96
	r13 = ctx95
	r14 = r5
	return s96_2
}

function func_unknown_0x100000030(a0, a1)
{
	let r0, r2, r3, r4, accu;
	r0 = Math["max"]
	r4 = a1["sort"]
	accu = Number(r4)
	r2 = a0
	if (!Number(r4))
	{
		accu = 0
	}
	r3 = accu
	return r0(r2, r3)
}

function func_unknown_0x10000002f(a0)
{
	let r0;
	r0 = a0["chanId"]
	return r0 === s95_5
}

function func_unknown_0x10000002e(a0)
{
	let r0;
	r0 = a0["name"]
	return r0 === s95_4
}

function func_unknown_0x10000002d(a0)
{
	return a0["name"] === s95_3
}

function func_nginxBinding_0x10000002c()
{
	let r1, accu;
	if (s1_45)
		|| (!s1_22["isWindows"])
	{
		return null
	}
	r1 = Date["now"]()
	r1 = (r1 - s1_50["at"])
	if (r1 >= 30000)
	{
		accu = func_refreshNginxBinding_0x10000002b()
	}
	return s1_50
}

function func_refreshNginxBinding_0x10000002b()
{
	let r0, r1, r2, r3, r5, accu;
	r0 = ctx1
	s97_2 = func_0x4405_0x100000001
	if (s1_51)
		|| (s1_45)
		|| (!s1_22["isWindows"])
	{
		return undefined
	}
	r1 = s1_8["get"]
	r1 = r1()
	r1 = r1["settings"]
	accu = r1["nginxPort"]
	if (!r1["nginxPort"])
	{
		accu = 80
	}
	s97_3 = accu
	r1 = s1_6["existsSync"]
	r3 = s1_5["join"]
	r5 = func_nginxDirPath_0x100000024()
	r3 = r3(r5, "nginx.exe")
	if (!r1(r3))
	{
		r1 = {"at": null, "checked": null, "listening": <null, "reason": <null, "port": null}
		r2 = Date["now"]
		r1["at"] = r2()
		r1["checked"] = !(!Boolean([]))
		r1["port"] = s97_3
		accu = s1_50
		s1_50 = r1
		return undefined
	}
	r1 = !(!Boolean([]))
	accu = s1_51
	s1_51 = r1
	r3 = "http"
	r2 = s1_2(r3)
	r3 = {"host": "127.0.0.1", "port": null, "path": null, "timeout": 3000}
	r3["port"] = s97_3
	r3["path"] = "/api/me"
	s97_4 = r2["get"](r3, func_unknown_0x100000028)
	r3 = "timeout"
	accu = s97_4["on"](r3, func_unknown_0x100000029)
	accu = s97_4["on"]("error", func_unknown_0x10000002a)
	return undefined
}

function func_unknown_0x10000002a()
{
	let r1, r2, accu;
	r1 = !Boolean([])
	accu = s1_51
	s1_51 = r1
	r1 = {"at": null, "checked": null, "listening": null, "port": null, "reason": null}
	r2 = Date["now"]
	r1["at"] = r2()
	r1["checked"] = !(!Boolean([]))
	r1["listening"] = !Boolean([])
	r1["port"] = s97_3
	r1["reason"] = func_readNginxBindError_0x100000025(s97_3)
	accu = s1_50
	s1_50 = r1
	return undefined
}

function func_unknown_0x100000029()
{
	let r0;
	r0 = s97_4["destroy"]
	return r0()
}

function func_unknown_0x100000028(a0)
{
	let r0, r3, accu;
	r0 = ctx97
	s98_2 = func_0x4405_0x100000001
	s98_3 = ""
	r3 = "data"
	accu = a0["on"](r3, func_unknown_0x100000026)
	r3 = "end"
	accu = a0["on"](r3, func_unknown_0x100000027)
	return undefined
}

function func_unknown_0x100000027()
{
	let r1, r2, r3, r4, accu;
	r2 = !Boolean([])
	accu = s1_51
	s1_51 = r2
	accu = !Boolean([])
	r1 = !Boolean([])
	r2 = ctx98
	try
	{
		r3 = "authed"
		r4 = JSON["parse"]
		accu = r3 in r4(s98_3)
		r1 = r3 in r4(s98_3)
	}
	catch
	{
		r3 = accu
		accu = null
		accu = ctx99
		r3 = ctx98
	}
	r2 = {"at": null, "checked": null, "listening": null, "port": null, "reason": null}
	r3 = Date["now"]
	r2["at"] = r3()
	r2["checked"] = !(!Boolean([]))
	r2["listening"] = r1
	r2["port"] = s97_3
	accu = r1
	if (r1)
	{
		accu = null
	}
	else
	{
		accu = (("\\x627\\x644\\x645\\x646\\x641\\x630 " + s97_3) + " يردّ لكن من برنامج آخر غير nginx التابع لأمان لايف.")
	}
	r2["reason"] = accu
	accu = s1_50
	s1_50 = r2
	return undefined
}

function func_unknown_0x100000026(a0)
{
	let accu;
	if (s98_3["length"] < 4096)
	{
		accu = s98_3
		s98_3 = (s98_3 + a0)
	}
	return undefined
}

function func_readNginxBindError_0x100000025(a0)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, accu;
	accu = func_0x4405_0x100000001
	r0 = func_0x4405_0x100000001
	r7 = ctx1
	try
	{
		r8 = s1_5["join"]
		r10 = func_nginxDirPath_0x100000024()
		r11 = "logs"
		r12 = "error.log"
		r1 = r8(r10, r11, r12)
		if (!s1_6["existsSync"](r1))
		{
			return null
		}
		r10 = s1_6["readFileSync"]
		r13 = "utf8"
		r10 = r10(r1, r13)
		r9 = r10["split"]
		r11 = /\\r?\\n/
		r9 = r9(r11)
		r8 = r9["slice"]
		r2 = r8(-100)
		r9 = "bind\\(\\)\\s+to\\s+0\\.0\\.0\\.0:"
		r9 = (r9 + a0)
		r9 = (r9 + "\\\\s+failed\\\\s+\\\\((\\\\d+):\\\\s*(.+?)\\\\)")
		accu = RegExp
		r3 = RegExp(r9)
		accu = (r2["length"] - 1)
		r4 = (r2["length"] - 1)
		while (true)
		{
			if (!r4 >= 0) break
			r8 = r3[r0(263)]
			r10 = r2[r4]
			r5 = r8(r10)
			if (!r8(r10))
			{
				continue
			}
			r6 = r5[1]
			if (r6 === "10013")
			{
				return (("\\x627\\x644\\x645\\x646\\x641\\x630 " + a0) + r0(488))
			}
			if (r6 === r0(561))
			{
				r8 = r0(290)
				r8 = (r8 + a0)
				return (r8 + " \\x645\\x633\\x62a\\x62e\\x62f\\x64e\\x645 \\x641\\x639\\x644\\x627\\x64b \\x645\\x646 \\x628\\x631\\x646\\x627\\x645\\x62c \\x622\\x62e\\x631 \\x63a\\x64a\\x631 \\x62a\\x627\\x628\\x639 \\x644\\x623\\x645\\x627\\x646 \\x644\\x627\\x64a\\x641 \\x639\\x644\\x649 \\x647\\x630\\x627 \\x627\\x644\\x62c\\x647\\x627\\x632. \\x623\\x63a\\x644\\x642 \\x630\\x644\\x643 \\x627\\x644\\x628\\x631\\x646\\x627\\x645\\x62c \\x623\\x648 \\x63a\\x64a\\x651\\x631 \\xab\\x645\\x646\\x641\\x630 \\x627\\x644\\x639\\x631\\x636\\xbb \\x645\\x646 \\x627\\x644\\x625\\x639\\x62f\\x627\\x62f\\x627\\x62a.")
			}
			r8 = (("\\x641\\x634\\x644 nginx \\x641\\x64a \\x641\\x62a\\x62d \\x627\\x644\\x645\\x646\\x641\\x630 " + a0) + r0(233))
			r8 = (r8 + r6)
			r8 = (r8 + ": ")
			r8 = (r8 + r5[2])
			return (r8 + ").")
			r4 = (r4 - 1)
		}
	}
	catch
	{
		r8 = accu
		accu = null
		accu = ctx100
		r8 = ctx1
	}
	return null
}

function func_nginxDirPath_0x100000024()
{
	let r3, r4;
	r3 = s1_8["ROOT"]
	r4 = "nginx"
	return s1_5["join"](r3, r4)
}

function func_nginxStatus_0x100000023()
{
	let r1, accu;
	if (s1_45)
	{
		return !Boolean([])
	}
	r1 = Date["now"]
	r1 = r1()
	r1 = (r1 - s1_46["at"])
	if (r1 >= 30000)
	{
		accu = func_refreshNginxStatus_0x100000022()
	}
	return s1_46["val"]
}

function func_refreshNginxStatus_0x100000022()
{
	let r0, r1, r2, r3, r4, r5, accu;
	r0 = ctx1
	s101_2 = func_0x4405_0x100000001
	if (s1_47)
	{
		return undefined
	}
	r1 = !(!Boolean([]))
	accu = s1_47
	s1_47 = r1
	accu = func_0x27ee6d_0x10000001f
	s101_3 = func_0x27ee6d_0x10000001f
	r1 = ctx101
	try
	{
		accu = s1_22["isWindows"]
		if (s1_22["isWindows"])
		{
			r5 = ["/FI", "IMAGENAME eq nginx.exe", "/FO", 0, 0]
			r5[3] = "CSV"
			r5[4] = "/NH"
			r4 = r5
			r5 = {"timeout": 5000, "windowsHide": null}
			r5["windowsHide"] = !(!Boolean([]))
			accu = s1_7("tasklist", r4, r5, func_unknown_0x100000020)
		}
		else
		{
			r3 = "pgrep"
			r4 = ["nginx"]
			r5 = {"timeout": 5000}
			accu = s1_7(r3, r4, r5, func_unknown_0x100000021)
		}
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx102
		r2 = ctx101
		r4 = !Boolean([])
		accu = func_0x27ee6d_0x10000001f(r4)
	}
	return undefined
}

function func_unknown_0x100000021(a0)
{
	let r1;
	r1 = !Boolean(a0)
	return func_0x27ee6d_0x10000001f(r1)
}

function func_unknown_0x100000020(a0, a1)
{
	let r1, r2, r3, r4, accu;
	accu = !Boolean(a0)
	if (!Boolean(a0))
	{
		r2 = /nginx\\.exe/
		r1 = r2["test"]
		accu = a1
		if (!a1)
		{
			accu = ""
		}
		r4 = accu
		r3 = String(r4)
		accu = r1(r3)
	}
	r1 = accu
	return func_0x27ee6d_0x10000001f(r1)
}

function func_0x27ee6d_0x10000001f(a0)
{
	let r1, r2, accu;
	r1 = {"val": null, "at": null}
	r1["val"] = a0
	r2 = Date["now"]
	r1["at"] = r2()
	accu = s1_46
	s1_46 = r1
	r1 = !Boolean([])
	accu = s1_47
	s1_47 = r1
	return undefined
}

function func_validateSchedule_0x10000001e(a0, a1)
{
	let r0, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, accu;
	r4 = ctx1
	s103_2 = a0
	s103_3 = func_0x4405_0x100000001
	r8 = 346
	r6 = a1["channels"]
	if (!r6["some"](func_unknown_0x10000001d))
	{
		return "اختر قناة صحيحة"
	}
	accu = s103_2["slots"]
	if (!s103_2["slots"])
	{
		accu = []
	}
	r0 = accu
	if (!r0["length"])
	{
		return "أضف فترة زمنية واحدة على الأقل"
	}
	r6 = GetIterator(r0)
	r5 = r6["next"]
	accu = false
	r7 = false
	r10 = ctx103
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			r3 = r11["value"]
			r13 = /^\\d{1,2}:\\d{2}$/
			r12 = r13["test"]
			accu = r11["value"]["start"]
			r11 = r11["value"]
			if (!accu)
			{
				accu = ""
			}
			r14 = accu
			if (r12(r14))
			{
				r13 = /^\\d{1,2}:\\d{2}$/
				accu = r3["end"]
				if (!r3["end"])
				{
					accu = ""
				}
				r14 = accu
				if (r13["test"](r14)) continue
			}
			r9 = "صيغة الوقت يجب أن تكون HH:MM"
			accu = 1
			r8 = 1
			break
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
		r12 = ctx103
		try
		{
			if (!r6["return"] == undefined)
			{
				accu = r6["return"]()
			}
			catch {}
		}
	}
	accu = null
	switch (r8)
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
	return null
}

function func_unknown_0x10000001d(a0)
{
	return a0["id"] === s103_2["channelId"]
}

function func_setManualStopped_0x10000001c(a0, a1)
{
	let r1, r2, r3, r4, r5, accu;
	r3 = ctx1
	s104_2 = a0
	r4 = s1_8["get"]
	r1 = r4()
	r5 = r1["channels"]
	r4 = r5["find"]
	r2 = r4(func_unknown_0x10000001b)
	if (r4(func_unknown_0x10000001b))
	{
		r4 = r2["manualStopped"]
		if (!(r4 === a1))
		{
			r5 = "manualStopped"
			r2[r5] = a1
			r4 = s1_8["save"]
			accu = r4()
		}
	}
	return undefined
}

function func_unknown_0x10000001b(a0)
{
	return a0["id"] === s104_2
}

function func_channelPayload_0x10000001a(a0, a1)
{
	let r1, r3, accu;
	r1 = {"id": null, "chanId": null, "name": null, "sourceId": null, "category": null, "sort": null, "cover": null, "logoEnabled": null, "quality": null, "fps": null, "threads": null, "bitrate": null, "autoStart": null, "enabled": null, "alwaysOn": null}
	r1["id"] = a1
	r1["chanId"] = a0["chanId"]
	r1["name"] = a0["name"]
	r1["sourceId"] = a0["sourceId"]
	accu = a0["category"]
	if (!a0["category"])
	{
		accu = ""
	}
	r1["category"] = accu
	accu = a0["sort"]
	if (!a0["sort"])
	{
		accu = 0
	}
	r3 = accu
	r1["sort"] = Number(r3)
	accu = a0["cover"]
	if (!a0["cover"])
	{
		accu = ""
	}
	r1["cover"] = accu
	r1["logoEnabled"] = !(!Boolean(a0["logoEnabled"]))
	r1["quality"] = func_normalizeQuality_0x100000017(a0["quality"])
	accu = a0["fps"]
	if (a0["fps"])
	{
		r3 = a0["fps"]
		accu = Number(r3)
	}
	else
	{
		accu = null
	}
	r1["fps"] = accu
	accu = a0["threads"]
	if (a0["threads"])
	{
		r3 = a0["threads"]
		accu = Number(r3)
	}
	else
	{
		accu = null
	}
	r1["threads"] = accu
	accu = a0["bitrate"]
	if (a0["bitrate"])
	{
		r3 = String(a0["bitrate"])
		accu = r3["slice"](0, 12)
	}
	else
	{
		accu = null
	}
	r1["bitrate"] = accu
	r1["autoStart"] = !(!Boolean(a0["autoStart"]))
	r1["enabled"] = !(a0["enabled"] === !Boolean([]))
	r1["alwaysOn"] = !(!Boolean(a0["alwaysOn"]))
	return r1
}

function func_autoChanId_0x100000019(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, accu;
	r3 = ctx1
	r0 = func_0x4405_0x100000001
	accu = a0
	if (!a0)
	{
		accu = ""
	}
	r10 = accu
	r9 = String(r10)
	r8 = r9["trim"]()
	r7 = r8["toLowerCase"]
	r7 = r7()
	r6 = r7["replace"]
	r8 = /[^a-z0-9]+/
	r6 = r6(r8, "-")
	r7 = /^-+|-+$/
	r5 = r6["replace"](r7, "")
	r1 = r5["slice"](0, 24)
	if (!r5["slice"](0, 24))
	{
		r1 = "ch"
	}
	s105_2 = r1
	r2 = 1
	while (true)
	{
		r5 = a1[r0(346)]
		r4 = r5[r0(216)]
		if (!r4(func_unknown_0x100000018)) break
		r4 = (r1 + "-")
		accu = (r2 + 1)
		r2 = (r2 + 1)
		s105_2 = (r4 + accu)
	}
	return s105_2
}

function func_unknown_0x100000018(a0)
{
	return a0["chanId"] === s105_2
}

function func_normalizeQuality_0x100000017(a0)
{
	let accu;
	accu = s1_38["includes"](a0)
	if (s1_38["includes"](a0))
	{
		accu = a0
	}
	else
	{
		accu = "copy"
	}
	return accu
}

function func_validateChannel_0x100000016(a0, a1, a2)
{
	let r0, r1, r2, r3, accu;
	r0 = ctx1
	s106_3 = a0
	s106_2 = a2
	s106_4 = func_0x4405_0x100000001
	accu = s106_3["name"]
	if (!s106_3["name"])
	{
		accu = ""
	}
	r3 = accu
	r2 = String(r3)
	s106_5 = r2["trim"]()
	accu = s106_3["chanId"]
	if (!s106_3["chanId"])
	{
		accu = ""
	}
	r3 = accu
	r2 = String(r3)
	r1 = r2["trim"]
	s106_6 = r1()
	if (!s106_5)
	{
		return "اسم القناة مطلوب"
	}
	if (!s106_6)
	{
		return "معرّف القناة مطلوب"
	}
	r2 = /^[a-zA-Z0-9_-]+$/
	if (!r2["test"](s106_6))
	{
		return "معرّف القناة: أحرف إنجليزية وأرقام فقط"
	}
	r2 = a1["channels"]
	r1 = r2["some"]
	if (r1(func_unknown_0x100000013))
	{
		return "يوجد قناة أخرى بنفس الاسم"
	}
	r2 = a1["channels"]
	r1 = r2["some"]
	if (r1(func_unknown_0x100000014))
	{
		return "يوجد قناة أخرى بنفس المعرّف"
	}
	r2 = a1["sources"]
	r1 = r2["some"]
	if (!r1(func_unknown_0x100000015))
	{
		return "يجب ربط القناة بمصدر موجود"
	}
	return null
}

function func_unknown_0x100000015(a0)
{
	return a0["id"] === s106_3["sourceId"]
}

function func_unknown_0x100000014(a0)
{
	let r0, accu;
	r0 = a0["chanId"]
	accu = r0 === s106_6
	if (r0 === s106_6)
	{
		accu = !(a0["id"] === s106_2)
	}
	return accu
}

function func_unknown_0x100000013(a0)
{
	let r0, accu;
	r0 = a0["name"]
	accu = r0 === s106_5
	if (r0 === s106_5)
	{
		accu = !(a0["id"] === s106_2)
	}
	return accu
}

function func_probeUrl_0x100000012(a0, a1)
{
	let r0, accu;
	r0 = ctx1
	s107_3 = a0
	s107_2 = a1
	accu = Promise
	return Promise(func_unknown_0x100000011)
}

function func_unknown_0x100000011(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, accu;
	r1 = ctx107
	s108_3 = a0
	s108_2 = a1
	s108_4 = func_0x4405_0x100000001
	accu = undefined
	r0 = undefined
	r2 = ctx108
	try
	{
		r3 = s107_3["startsWith"]
		accu = r3("https")
		if (r3("https"))
		{
			r4 = "https"
			accu = s1_2(r4)
		}
		else
		{
			r4 = "http"
			accu = s1_2(r4)
		}
		r0 = accu
	}
	catch
	{
		r3 = accu
		accu = null
		accu = ctx109
		r3 = ctx108
		return s108_2(s109_2)
	}
	r2 = r0["get"]
	r5 = {"headers": null, "timeout": 10000}
	r6 = {"User-Agent": null, "Accept": null}
	r6["User-Agent"] = s107_2
	r6["Accept"] = "*/*"
	r5["headers"] = r6
	r3 = r0
	s108_5 = r2(s107_3, r5, func_unknown_0x10000000e)
	accu = s108_5["on"]("timeout", func_unknown_0x10000000f)
	accu = s108_5["on"]("error", func_unknown_0x100000010)
	return undefined
}

function func_unknown_0x100000010(a0)
{
	return s108_2(a0)
}

function func_unknown_0x10000000f()
{
	let r2, r3, accu;
	accu = s108_5["destroy"]()
	r3 = "انتهت مهلة الاتصال (10 ثوانٍ)"
	accu = Error
	r2 = Error(r3)
	accu = s108_2(r2)
	return undefined
}

function func_unknown_0x10000000e(a0)
{
	let r0, r1, r2, r3, accu;
	r0 = ctx108
	s110_2 = a0
	s110_3 = func_0x4405_0x100000001
	r2 = s110_2["headers"]
	accu = r2["content-type"]
	if (!r2["content-type"])
	{
		accu = ""
	}
	r2 = accu
	s110_4 = String(r2)
	r1 = Buffer["alloc"]
	s110_5 = r1(0)
	accu = s110_2["on"]("data", func_unknown_0x10000000b)
	s110_6 = func_0x47df7a_0x10000000c
	accu = s110_2["on"]("end", func_0x47df7a_0x10000000c)
	accu = s110_2["on"]("close", func_0x47df7a_0x10000000c)
	r3 = "error"
	accu = s110_2["on"](r3, func_unknown_0x10000000d)
	return undefined
}

function func_unknown_0x10000000d()
{
	return func_0x47df7a_0x10000000c()
}

function func_0x47df7a_0x10000000c()
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r4 = s110_5["toString"]
	r6 = "utf8"
	r8 = Math["min"]
	r8 = r8(s110_5["length"], 2048)
	r1 = r4(r6, 0, r8)
	r2 = "other"
	r5 = /#EXTM3U/
	r4 = r5["test"]
	if (r4(r1))
	r5 = /\\.m3u8/
	r4 = r5["test"]
		|| (r4(s107_3))
	r5 = /mpegurl/
		|| (r5["test"](s110_4))
	{
		r2 = "m3u8"
	}
	else
	{
		r5 = /mp2t|video\\/mp2t/
		if (r5["test"](s110_4))
		r5 = /\\.ts(\\?|$)/
		r4 = r5["test"]
			|| (r4(s107_3))
		{
			r2 = "ts"
		}
		else
		{
			r5 = /^\\x47/
			r8 = "binary"
			r6 = s110_5["toString"](r8, 0, 1)
			if (r5["test"](r6))
			{
				r2 = "ts"
			}
		}
	}
	accu = s110_2["statusCode"] >= 200
	if (s110_2["statusCode"] >= 200)
	{
		r4 = s110_2["statusCode"]
		accu = r4 < 400
	}
	r3 = accu
	r5 = {"ok": null, "status": null, "statusText": null, "contentType": null, "kind": null, "preview": null, "message": null}
	r5["ok"] = r3
	r5["status"] = s110_2["statusCode"]
	accu = s110_2["statusMessage"]
	if (!s110_2["statusMessage"])
	{
		accu = ""
	}
	r5["statusText"] = accu
	r5["contentType"] = s110_4
	r5["kind"] = r2
	r9 = /[^\\x09\\x0A\\x0D\\x20-\\x7E؀-ۿ]/
	r7 = r1["replace"](r9, ".")
	r5["preview"] = r7["slice"](0, 1200)
	accu = r3
	if (r3)
	{
		accu = ""
	}
	else
	{
		r6 = "الخادم ردّ بحالة "
		accu = (r6 + s110_2["statusCode"])
	}
	r5["message"] = accu
	accu = s108_3(r5)
	return undefined
}

function func_unknown_0x10000000b(a0)
{
	let r1, r4, accu;
	r1 = s110_5["length"]
	if (r1 < 2048)
	{
		r1 = Buffer["concat"]
		r4 = [0, 0]
		r4[0] = s110_5
		r4[1] = a0
		r1 = r1(r4)
		accu = s110_5
		s110_5 = r1
	}
	r1 = s110_5["length"]
	if (r1 >= 2048)
	{
		r1 = s110_2["destroy"]
		accu = r1()
	}
	return undefined
}

function func_validateSource_0x10000000a(a0, a1, a2)
{
	let r0, r1, r2, r3, r4, accu;
	r1 = ctx1
	s111_2 = a2
	s111_3 = func_0x4405_0x100000001
	accu = a0["name"]
	if (!a0["name"])
	{
		accu = ""
	}
	r4 = accu
	r3 = String(r4)
	r2 = r3["trim"]
	s111_4 = r2()
	if (!s111_4)
	{
		return "اسم المصدر مطلوب"
	}
	r3 = a1["sources"]
	r2 = r3["some"]
	if (r2(func_unknown_0x100000008))
	{
		return "يوجد مصدر آخر بنفس الاسم"
	}
	r2 = s1_34["includes"]
	r4 = a0["type"]
	if (!r2(r4))
	{
		return "نوع المصدر غير صحيح"
	}
	r2 = a0["type"]
	if (r2 === "usb")
	{
		if (!a0["videoDevice"])
		{
			return "يجب اختيار جهاز الفيديو"
		}
	}
	r3 = ["http", "hls"]
	r4 = a0["type"]
	if (r3["includes"](r4))
	{
		if (!a0["url"])
		{
			return "الرابط مطلوب"
		}
	}
	if (a0["type"] === "iptv")
	{
		if (!a0["url"])
		{
			return "يجب اختيار قناة من مكتبة IPTV"
		}
	}
	r2 = a0["type"]
	if (r2 === "file")
	{
		if (!a0["path"])
		{
			return "مسار الملف مطلوب"
		}
	}
	if (a0["type"] === "multi-m3u8")
	{
		accu = a0["variants"]
		if (!a0["variants"])
		{
			accu = []
		}
		r0 = accu
		if (!r0["length"])
			|| (r0["some"](func_unknown_0x100000009))
		{
			return "أضف رابطاً واحداً على الأقل مع تحديد الجودة"
		}
	}
	return null
}

function func_unknown_0x100000009(a0)
{
	let accu;
	accu = !Boolean(a0["quality"])
	if (!!Boolean(a0["quality"]))
	{
		accu = !Boolean(a0["url"])
	}
	return accu
}

function func_unknown_0x100000008(a0)
{
	let r0, accu;
	r0 = a0["name"]
	accu = r0 === s111_4
	if (r0 === s111_4)
	{
		accu = !(a0["id"] === s111_2)
	}
	return accu
}

function func_isLoopback_0x100000007(a0)
{
	let r1, accu;
	accu = a0["socket"]
	if (a0["socket"])
	{
		accu = a0["socket"]["remoteAddress"]
	}
	if (!accu)
	{
		accu = ""
	}
	r1 = accu
	accu = r1 === "127.0.0.1"
	if (!r1 === "127.0.0.1")
	{
		accu = r1 === "::1"
		if (!r1 === "::1")
		{
			accu = r1 === "::ffff:127.0.0.1"
		}
	}
	return accu
}

function func_effectiveLiveSync_0x100000006(a0)
{
	let r1, r2, r3, r4, r6, accu;
	r4 = a0["hlsTime"]
	accu = Number(r4)
	if (!Number(r4))
	{
		accu = 2
	}
	r1 = accu
	r4 = a0["playerLiveSyncDuration"]
	accu = Number(r4)
	if (!Number(r4))
	{
		accu = 4
	}
	r2 = accu
	r3 = Math["max"]
	r6 = ((r1 * 2) + 1)
	return r3(r2, r6)
}

function func_watchedChannelsCount_0x100000005()
{
	let r1, r5, r6, r7, r8, r9, r10, r11, r12, accu;
	r1 = 0
	r8 = 316
	r5 = s1_24["keys"]
	r7 = r5()
	r6 = GetIterator(r7)
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
			r12 = func_viewerCount_0x100000003(r11["value"])
			r11 = r11["value"]
			if (!r12 > 0) continue
			accu = (r1 + 1)
			r1 = (r1 + 1)
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
			catch {}
		}
	}
	accu = null
	if (r8 === 0)
	{
		accu = r9
	}
	return r1
}

function func_totalCurrentViewers_0x100000004()
{
	let r1, r5, r6, r7, r8, r9, r10, r11, r12, accu;
	r1 = 0
	r8 = 316
	r5 = s1_24["keys"]
	r7 = r5()
	r6 = GetIterator(r7)
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
			accu = (r1 + func_viewerCount_0x100000003(r11["value"]))
			r12 = r1
			r1 = (r1 + func_viewerCount_0x100000003(r11["value"]))
			r11 = r11["value"]
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
			catch {}
		}
	}
	accu = null
	if (r8 === 0)
	{
		accu = r9
	}
	return r1
}

function func_viewerCount_0x100000003(a0)
{
	let r0, r1, r2, r4, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r18, r19, r20, r21, r22, r23, r24, accu;
	r10 = s1_24
	r9 = s1_24["get"]
	r1 = r9(a0)
	r2 = 0
	if (r1)
	{
		r12 = 482
		r9 = Date["now"]
		r4 = (r9() - 45000)
		r10 = GetIterator(r1)
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
				r16 = r15["value"]
				r18 = GetIterator(r15["value"])
				accu = false
				r19 = false
				r22 = ctx1
				try
				{
					if (!false)
					r19 = true
					r23 = r18["next"]()
					accu = r23["done"]
						&& (!r23["done"])
					{
						r19 = false
						accu = r23["value"]
					}
					else
					{
						accu = undefined
					}
					r7 = accu
					if (!r19)
					r19 = true
					r23 = r18["next"]()
					accu = r23["done"]
						&& (!r23["done"])
					{
						r19 = false
						accu = r23["value"]
					}
					else
					{
						accu = undefined
					}
					r8 = accu
					accu = -1
					r21 = -1
					r20 = -1
				}
				catch
				{
					r21 = accu
					r20 = 0
				}
				if (!r19)
				{
					r24 = ctx1
					try
					{
						if (!r18["return"] == undefined)
						{
							accu = r18["return"]()
						}
						catch {}
					}
				}
				accu = null
				if (r20 === 0)
				{
					r12 = 0
					r13 = r21
					break
				}
				if (r8 >= r4)
				{
					r2 = (r2 + 1)
					continue
				}
				r16 = r1[r0(236)]
				accu = r16(r7)
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
				catch {}
			}
		}
		accu = null
		if (r12 === 0)
		{
			accu = r13
		}
	}
	r9 = Math["max"]
	r12 = s1_11["hlsViewerCount"]
	r12 = r12(a0)
	return r9(r2, r12)
}

function func_buildNginxConf_0x100000002(a0)
{
	let r1, r2, r3, r4, r6, accu;
	r4 = s1_8["ROOT"]["replace"]
	r6 = /\\\\/
	r1 = r4(r6, "/")
	accu = a0["nginxPort"]
	if (!a0["nginxPort"])
	{
		accu = 80
	}
	r2 = accu
	accu = a0["port"]
	if (!a0["port"])
	{
		accu = 3001
	}
	r3 = accu
	r4 = "# أمان لايف — مُولّد تلقائياً من لوحة التحكم (مُهيّأ لـ200+ مشاهد)\n# سجلّ أخطاء بمسار مطلق ثابت: نقرأه من كود Node لتشخيص فشل الربط بالمنفذ\n# (مثل حظر ويندوز/Hyper-V لنطاق منافذ) بدل ترك المستخدم أمام فشل صامت.\nerror_log \""
	r4 = (r4 + r1)
	r4 = (r4 + "/nginx/logs/error.log\" warn;\nworker_processes  auto;\nworker_rlimit_nofile 16384;\n# حاسم لويندوز: عند quit/reload يبقى العامل القديم \"قيد الانسحاب\" ما دامت لديه\n# اتصالات keep-alive حية (65ث تتجدد!) — فتتراكم عمليات nginx.exe عالقة مع كل\n# إعادة تشغيل. هذه المهلة تفرض إنهاء العامل المنسحب خلال 10 ثوانٍ مهما كان.\nworker_shutdown_timeout 10s;\nevents {\n    worker_connections 8192;\n    multi_accept on;\n}\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n    sendfile      on;\n    sendfile_max_chunk 512k;\n    tcp_nopush    on;\n    tcp_nodelay   on;\n    gzip          off;\n    keepalive_timeout 65;\n    keepalive_requests 10000;\n    reset_timedout_connection on;\n    # ذاكرة وصف الملفات: تُسرّع خدمة آلاف مقاطع .ts المتغيّرة باستمرار\n    open_file_cache max=8000 inactive=30s;\n    open_file_cache_valid 10s;\n    open_file_cache_min_uses 1;\n    open_file_cache_errors off;\n    types {\n        application/vnd.apple.mpegurl m3u8;\n        video/mp2t ts;\n    }\n    server {\n        listen ")
	r4 = (r4 + r2)
	r4 = (r4 + " reuseport;\\n        server_name _;\\n\\n        # \\x642\\x648\\x627\\x626\\x645 m3u8 \\x62a\\x645\\x631\\x651 \\x639\\x628\\x631 Node (\\x62e\\x641\\x64a\\x641\\x629 \\x62c\\x62f\\x627\\x64b) \\x644\\x627 \\x62a\\x64f\\x62e\\x62f\\x64e\\x645 \\x645\\x646 \\x627\\x644\\x642\\x631\\x635 \\x645\\x628\\x627\\x634\\x631\\x629\\x64b: \\x647\\x630\\x627 \\x647\\x648\\n        # \\x645\\x633\\x627\\x631 heartbeat/noteHlsAccess \\x627\\x644\\x630\\x64a \\x64a\\x645\\x646\\x639 \\x625\\x64a\\x642\\x627\\x641 \\x627\\x644\\x62e\\x645\\x648\\x644 \\x644\\x642\\x646\\x627\\x629 \\x64a\\x634\\x627\\x647\\x62f\\x647\\x627 \\x623\\x62d\\x62f \\x639\\x628\\x631\\n        # \\x631\\x627\\x628\\x637 HLS \\x645\\x628\\x627\\x634\\x631 (VLC/\\x62a\\x644\\x641\\x627\\x632) \\x628\\x644\\x627 heartbeat \\x645\\x646 \\x635\\x641\\x62d\\x629 \\x627\\x644\\x645\\x634\\x627\\x647\\x62f. \\x644\\x648 \\x62e\\x62f\\x645\\x646\\x627\\x647\\x627 \\x645\\x646\\n        # nginx \\x645\\x628\\x627\\x634\\x631\\x629\\x64b (\\x643\\x645\\x627 \\x643\\x627\\x646) \\x644\\x646 \\x64a\\x635\\x644 Node \\x623\\x64a \\x637\\x644\\x628 \\x644\\x62a\\x644\\x643 \\x627\\x644\\x642\\x646\\x627\\x629 \\x641\\x62a\\x64f\\x648\\x642\\x64e\\x641 \\x643\\x623\\x646\\x647\\x627 \\x628\\x644\\x627\\n        # \\x645\\x634\\x627\\x647\\x62f\\x64a\\x646 \\x631\\x63a\\x645 \\x645\\x634\\x627\\x647\\x62f\\x62a\\x647\\x627 \\x641\\x639\\x644\\x64a\\x627\\x64b. \\x627\\x644\\x642\\x648\\x627\\x626\\x645 \\x635\\x63a\\x64a\\x631\\x629 \\x627\\x644\\x62d\\x62c\\x645 \\x641\\x62a\\x645\\x631\\x64a\\x631\\x647\\x627 \\x644\\x627 \\x64a\\x643\\x644\\x651\\x641 \\x627\\x644\\x623\\x62f\\x627\\x621.\\n        location ~ ^/hls/.+\\\\.m3u8$ {\\n            proxy_pass http://127.0.0.1:")
	r4 = (r4 + r3)
	r4 = (r4 + ";\n            proxy_http_version 1.1;\n            proxy_set_header Connection \"\";\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n        }\n        # يخدم مقاطع .ts فقط (قوائم m3u8 مُحوّلة إلى Node عبر الموقع أعلاه).\n        # حاسم: لا نضع location متداخلاً تحت alias — nginx لا يورّث الـalias للمواقع\n        # المتداخلة، فيُخدَم .ts من الجذر الافتراضي (html/) بدل مجلد HLS → 404 لكل\n        # المقاطع. هذا بالضبط سبب \"يعمل على منفذ Node مباشرةً 3001 لكنه يفشل عبر\n        # nginx\". المقطع ثابت باسم فريد بعد كتابته، فالكاش الطويل immutable يوضَع\n        # مباشرةً على هذا الموقع دون تداخل.\n        location /hls/ {\n            alias \"")
	r4 = (r4 + r1)
	r4 = (r4 + "/srv/hls/\";\n            access_log off;                       # 200+ مشاهد × مقاطع كثيرة = سجل ضخم بلا فائدة\n            add_header Access-Control-Allow-Origin *;\n            add_header Cache-Control \"public, max-age=31536000, immutable\";\n        }\n        location /uploads/ {\n            alias \"")
	r4 = (r4 + r1)
	r4 = (r4 + "/srv/uploads/\";\n            access_log off;\n            add_header Cache-Control \"max-age=3600\";\n        }\n        location / {\n            proxy_pass http://127.0.0.1:")
	r4 = (r4 + r3)
	return (r4 + ";\n            proxy_http_version 1.1;\n            proxy_set_header Connection \"\";       # keep-alive نحو Node لتقليل كلفة الاتصالات\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_read_timeout 300;\n            client_max_body_size 2048m;\n        }\n    }\n}\n")
}

function func_0x4405_0x100000001(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 208)
	r0 = s1_57()
	r1 = r0[a0]
	if (s1_4["Ylzrvf"] == undefined)
	{
		s1_4["qVVZdR"] = func_0x2a40d0_0x100000000
		s1_4["PKoeGW"] = {}
		s1_4["Ylzrvf"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_4["PKoeGW"][r4])
	{
		r1 = s1_4["qVVZdR"](r1)
		s1_4["PKoeGW"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_4["PKoeGW"][r4]
	}
	return r1
}

function func_0x2a40d0_0x100000000(a0)
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

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, accu;
	r6 = ctx0
	s1_2 = require
	s1_4 = func_0x4405_0x100000001
	s1_23 = func_buildNginxConf_0x100000002
	s1_27 = func_viewerCount_0x100000003
	s1_28 = func_totalCurrentViewers_0x100000004
	s1_29 = func_watchedChannelsCount_0x100000005
	s1_32 = func_effectiveLiveSync_0x100000006
	s1_33 = func_isLoopback_0x100000007
	s1_35 = func_validateSource_0x10000000a
	s1_36 = func_probeUrl_0x100000012
	s1_37 = func_validateChannel_0x100000016
	s1_39 = func_normalizeQuality_0x100000017
	s1_40 = func_autoChanId_0x100000019
	s1_41 = func_channelPayload_0x10000001a
	s1_43 = func_setManualStopped_0x10000001c
	s1_44 = func_validateSchedule_0x10000001e
	s1_48 = func_refreshNginxStatus_0x100000022
	s1_49 = func_nginxStatus_0x100000023
	s1_52 = func_nginxDirPath_0x100000024
	s1_53 = func_readNginxBindError_0x100000025
	s1_54 = func_refreshNginxBinding_0x10000002b
	s1_55 = func_nginxBinding_0x10000002c
	s1_56 = func_addOneXtream_0x100000031
	s1_57 = func_0x3cec_0x100000033
	s1_3 = func_0x4405_0x100000001
	accu = func_unknown_0x100000034(s1_57, 477527)
	r8 = "path"
	s1_5 = s1_2(r8)
	s1_6 = s1_2("fs")
	r7 = s1_2("child_process")
	r0 = r7["execSync"]
	s1_7 = r7["execFile"]
	r1 = s1_2("express")
	r2 = s1_2("multer")
	s1_8 = s1_2("./store")
	s1_9 = s1_2("./auth")
	s1_10 = s1_2("./devices")
	s1_11 = s1_2("./ffmpeg")
	s1_12 = s1_2("./iptv")
	s1_13 = s1_2("./xtream")
	s1_14 = s1_2("./scheduler")
	s1_15 = s1_2("./idle")
	s1_16 = s1_2("./license")
	s1_17 = s1_2("./update")
	s1_18 = s1_2("./backup")
	s1_19 = s1_2("./onlinechannels")
	s1_20 = s1_2("./worldcup")
	s1_21 = s1_2("./mh")
	s1_22 = s1_2("./platform")
	r7 = r1["Router"]
	r3 = r7()
	r7 = s1_5["join"]
	r10 = "srv"
	r11 = "uploads"
	r4 = r7(s1_8["ROOT"], r10, r11)
	r7 = s1_6["mkdirSync"]
	r10 = {"recursive": null}
	r10["recursive"] = !(!Boolean([]))
	accu = r7(r4, r10)
	r8 = {"storage": null, "limits": {"fileSize": 2147483648.0}}
	r9 = r2["diskStorage"]
	r11 = {"destination": null, "filename": null}
	r11["destination"] = r4
	r11["filename"] = func_filename_0x100000035
	r8["storage"] = r9(r11)
	r5 = r2(r8)
	s1_24 = Map(r0)
	s1_25 = Set(r0)
	r7 = Date["now"]
	s1_26 = r7()
	s1_30 = func_ok_0x100000036
	s1_31 = func_fail_0x100000037
	r7 = r3["post"]
	r9 = "/login"
	r10 = r1["json"]
	r10 = r10()
	r8 = r3
	accu = r7(r9, r10, func_unknown_0x100000038)
	r7 = r3["get"]
	accu = r7("/setup/status", func_unknown_0x100000039)
	r7 = r3["post"]
	r10 = r1["json"]
	r10 = r10()
	r8 = r3
	accu = r7("/setup", r10, func_unknown_0x10000003b)
	r9 = "/logout"
	accu = r3["post"](r9, func_unknown_0x10000003c)
	r7 = r3["get"]
	accu = r7("/me", func_unknown_0x10000003d)
	r7 = r3["get"]
	r9 = "/public/settings"
	accu = r7(r9, func_unknown_0x10000003e)
	r7 = r3["get"]
	accu = r7("/public/promos", func_unknown_0x100000042)
	r7 = r3["get"]
	accu = r7("/public/ads", func_unknown_0x100000046)
	r7 = r3["get"]
	accu = r7("/public/channels", func_unknown_0x10000004b)
	r7 = r3["post"]
	r9 = "/public/heartbeat"
	r10 = r1["json"]
	r10 = r10()
	r8 = r3
	accu = r7(r9, r10, func_unknown_0x10000004c)
	r9 = "/public/channel-health"
	accu = r3["get"](r9, func_unknown_0x10000004d)
	accu = r3["get"]("/public/worldcup/matches", func_unknown_0x10000004e)
	r9 = "/public/worldcup/news"
	accu = r3["get"](r9, func_unknown_0x10000004f)
	r7 = r3["get"]
	accu = r7("/public/sports-news", func_unknown_0x100000050)
	r7 = r3["post"]
	r9 = "/system/shutdown"
	r10 = r1["json"]()
	r8 = r3
	accu = r7(r9, r10, func_unknown_0x100000052)
	accu = r3["use"](s1_9["requireAuth"])
	r7 = r3["use"]
	r9 = r1["json"]
	r11 = {"limit": null}
	r11["limit"] = "10mb"
	r9 = r9(r11)
	accu = r7(r9)
	r7 = r3["get"]
	accu = r7("/settings", func_unknown_0x100000053)
	r7 = r3["put"]
	r9 = "/settings"
	accu = r7(r9, func_unknown_0x100000054)
	r7 = r3["post"]
	r9 = "/settings/regenerate-nginx"
	accu = r7(r9, func_unknown_0x100000055)
	r7 = r3["post"]
	r9 = "/settings/password"
	accu = r7(r9, func_unknown_0x100000056)
	r7 = r3["post"]
	r9 = "/upload"
	r10 = r5["single"]
	r10 = r10("file")
	r8 = r3
	accu = r7(r9, r10, func_unknown_0x100000057)
	accu = r3["get"]("/devices", func_unknown_0x100000058)
	r9 = "/devices/diagnose"
	accu = r3["get"](r9, func_unknown_0x100000059)
	r7 = r3["get"]
	r9 = "/devices/options"
	accu = r7(r9, func_unknown_0x10000005a)
	r7 = r3["get"]
	r9 = "/devices/recommend"
	accu = r7(r9, func_unknown_0x10000005b)
	r8 = [0, "http", "hls", 0, 0, 0, "screen"]
	r8[0] = "usb"
	r8[3] = "multi-m3u8"
	r8[4] = "iptv"
	r8[5] = "file"
	s1_34 = r8
	r7 = r3["get"]
	accu = r7("/sources", func_unknown_0x10000005c)
	r7 = r3["post"]
	r9 = "/sources"
	accu = r7(r9, func_unknown_0x10000005d)
	r7 = r3["post"]
	accu = r7("/sources/test", func_unknown_0x10000005e)
	r9 = "/sources/:id"
	accu = r3["put"](r9, func_unknown_0x100000060)
	r7 = r3["delete"]
	accu = r7("/sources/:id", func_unknown_0x100000063)
	r7 = r3["get"]
	r9 = "/iptv"
	accu = r7(r9, func_unknown_0x100000064)
	r7 = r3["post"]
	r9 = "/iptv/import-file"
	r10 = r5["single"]
	r10 = r10("file")
	r8 = r3
	accu = r7(r9, r10, func_unknown_0x100000065)
	r7 = r3["post"]
	accu = r7("/iptv/import-url", func_unknown_0x100000066)
	r9 = "/iptv"
	accu = r3["post"](r9, func_unknown_0x100000068)
	r7 = r3["delete"]
	r9 = "/iptv/:id"
	accu = r7(r9, func_unknown_0x10000006a)
	r7 = r3["post"]
	r9 = "/iptv/delete-batch"
	accu = r7(r9, func_unknown_0x10000006c)
	r8 = [0, 0, 0, 0, 0]
	r8[0] = "copy"
	r8[1] = "240p"
	r8[2] = "360p"
	r8[3] = "480p"
	r8[4] = "720p"
	s1_38 = r8
	r7 = r3["get"]
	r9 = "/channels"
	accu = r7(r9, func_unknown_0x10000006d)
	s1_42 = func_clampStr_0x10000006e
	r7 = r3["get"]
	r9 = "/ads"
	accu = r7(r9, func_unknown_0x10000006f)
	r7 = r3["post"]
	r9 = "/ads"
	accu = r7(r9, func_unknown_0x100000070)
	accu = r3["put"]("/ads/:id", func_unknown_0x100000072)
	r9 = "/ads/:id"
	accu = r3["delete"](r9, func_unknown_0x100000074)
	r7 = r3["post"]
	r9 = "/channels"
	accu = r7(r9, func_unknown_0x100000075)
	r7 = r3["put"]
	r9 = "/channels/:id"
	accu = r7(r9, func_unknown_0x100000077)
	r7 = r3["patch"]
	r9 = "/channels/:id"
	accu = r7(r9, func_unknown_0x100000079)
	r9 = "/channels/:id"
	accu = r3["delete"](r9, func_unknown_0x10000007c)
	r7 = r3["post"]
	accu = r7("/channels/:id/start", func_unknown_0x10000007d)
	r7 = r3["post"]
	accu = r7("/channels/:id/stop", func_unknown_0x10000007e)
	r7 = r3["post"]
	r9 = "/channels/:id/restart"
	accu = r7(r9, func_unknown_0x10000007f)
	r7 = r3["get"]
	r9 = "/schedules"
	accu = r7(r9, func_unknown_0x100000080)
	r7 = r3["post"]
	r9 = "/schedules"
	accu = r7(r9, func_unknown_0x100000081)
	r7 = r3["put"]
	accu = r7("/schedules/:id", func_unknown_0x100000083)
	r7 = r3["delete"]
	r9 = "/schedules/:id"
	accu = r7(r9, func_unknown_0x100000085)
	s1_45 = s1_22["isAndroid"]
	r7 = {"val": null, "at": 0}
	r7["val"] = !Boolean([])
	s1_46 = r7
	s1_47 = !Boolean([])
	r7 = {"at": 0, "checked": null, "listening": <null, "reason": <null, "port": <null}
	r7["checked"] = !Boolean([])
	s1_50 = r7
	s1_51 = !Boolean([])
	r7 = r3["get"]
	r9 = "/metrics"
	accu = r7(r9, func_unknown_0x100000086)
	accu = r3["get"]("/status", func_unknown_0x100000089)
	r7 = r3["get"]
	r9 = "/logs/:id"
	accu = r7(r9, func_unknown_0x10000008a)
	r7 = r3["post"]
	r9 = "/logs/:id/clear"
	accu = r7(r9, func_unknown_0x10000008b)
	r7 = r3["get"]
	r9 = "/logs/:id/download"
	accu = r7(r9, func_unknown_0x10000008d)
	r7 = r3["get"]
	r9 = "/matches"
	accu = r7(r9, func_unknown_0x10000008e)
	r7 = r3["post"]
	r9 = "/matches"
	accu = r7(r9, func_unknown_0x10000008f)
	r7 = r3["delete"]
	accu = r7("/matches/:id", func_unknown_0x100000091)
	r7 = r3["post"]
	r9 = "/worldcup/refresh-news"
	accu = r7(r9, func_unknown_0x100000092)
	r7 = r3["post"]
	r9 = "/xtream/fetch"
	accu = r7(r9, func_unknown_0x100000093)
	r9 = "/xtream/fetch-proxy"
	accu = r3["post"](r9, func_unknown_0x100000094)
	r9 = "/xtream/fetch-m3u"
	accu = r3["post"](r9, func_unknown_0x100000095)
	accu = r3["post"]("/xtream/add", func_unknown_0x100000096)
	r9 = "/xtream/add-batch"
	accu = r3["post"](r9, func_unknown_0x100000098)
	r7 = r3["post"]
	r9 = "/mh/fetch"
	accu = r7(r9, func_unknown_0x100000099)
	r7 = r3["post"]
	r9 = "/mh/resolve"
	accu = r7(r9, func_unknown_0x10000009a)
	r9 = "/mh/resolve-one"
	accu = r3["post"](r9, func_unknown_0x10000009b)
	r7 = r3["post"]
	accu = r7("/mh/add-batch", func_unknown_0x10000009e)
	r7 = r3["get"]
	r9 = "/online-channels"
	accu = r7(r9, func_unknown_0x10000009f)
	r7 = r3["post"]
	accu = r7("/online-channels/import", func_unknown_0x1000000a2)
	r9 = "/license"
	accu = r3["get"](r9, func_unknown_0x1000000a3)
	r7 = r3["post"]
	r9 = "/license/activate"
	accu = r7(r9, func_unknown_0x1000000a4)
	r7 = r3["get"]
	r9 = "/update/status"
	accu = r7(r9, func_unknown_0x1000000a5)
	r7 = r3["post"]
	r9 = "/update/apply"
	accu = r7(r9, func_unknown_0x1000000a7)
	r7 = r3["get"]
	r9 = "/backup/download"
	accu = r7(r9, func_unknown_0x1000000aa)
	r9 = "/backup/restore"
	r10 = r5["single"]
	r12 = "file"
	r10 = r10(r12)
	r8 = r3
	accu = r3["post"](r9, r10, func_unknown_0x1000000ac)
	r8 = "exports"
	module[r8] = r3
	r7 = module["exports"]
	r8 = "viewerCount"
	r7[r8] = func_viewerCount_0x100000003
	r7 = module["exports"]
	r7["buildNginxConf"] = func_buildNginxConf_0x100000002
	r7 = module["exports"]
	r7["effectiveLiveSync"] = func_effectiveLiveSync_0x100000006
	r7 = module["exports"]
	r7["readNginxBindError"] = func_readNginxBindError_0x100000025
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
