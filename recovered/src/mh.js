// Recovered module: src/mh.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (11897 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10;
let s3_2;
let s4_2, s4_3, s4_4, s4_5, s4_6;
let s5_2;
let s6_2;
let s7_2;
let s8_2;
let s9_2, s9_3;
let s10_2;
let s11_2, s11_3, s11_4;
let s12_2;
let s14_2;
let s15_2;
let s16_2, s16_3;
let s17_2, s17_3, s17_4, s17_5, s17_6;
let s19_2, s19_3, s19_4;
let s20_2, s20_3, s20_4;
let s21_2, s21_3, s21_4, s21_5, s21_6;
let s23_2, s23_3, s23_4, s23_5, s23_6;
let ctx0, ctx1, ctx2, ctx4, ctx5, ctx6, ctx7, ctx8, ctx9, ctx10, ctx11, ctx12, ctx13, ctx14, ctx15, ctx16, ctx17, ctx18, ctx20, ctx21, ctx22;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x100000019(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x1255_0x100000001
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(473)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(531)
			r4 = (r4 + (parseInt(r6) / 2))
			r6 = r0(485)
			r5 = (parseInt(r6) / 3)
			r7 = r0(492)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 4)))
			r6 = r0(480)
			r4 = (r4 + (parseInt(r6) / 5))
			r6 = r0(460)
			r4 = (r4 + (parseInt(r6) / 6))
			r6 = r0(511)
			r4 = (r4 + (parseInt(r6) / 7))
			r6 = r0(514)
			r2 = (r4 + (parseInt(r6) / 8))
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

function func_0x2adb_0x100000018()
{
	let r0;
	r0 = ctx1
	s3_2 = ["B3rOzxi", "zgf0yq", "BwfW", "Ahr0Chm", "y29UDgvUDc10ExbL", "A2LUza", "odaXmtqWEK5NEMfA", "zMLUywXvCMW", "y2f0zwDVCNLFAwq", "AgvHzgvYCW", "y2f0zwDVCNLFBMfTzq", "m3vLC1r3uG", "2kFzHnIX2k8G2ypyQnMk2leG2kZyR9IN2yS", "BwLU", "Aw5JBhvKzxm", "2kRyUDIW2zhySsdyPDMk2kZyP9IVinIN2ytyRTIN2k/zHsaOre5tksdIGjqG2ylyRYdzITMd2yJzHIdzHDIT2kZzInIO2kFzIYdyUDMe2yKG2ltyQnMd2kRzGW", "zw5K", "kI8Q", "mtaZotKZmMTOwwfwAq", "ywXSB2m", "CgfYC2u", "C3rHDhvZ", "DxrMoa", "Ahr0Chm6", "BwvZC2fNzq", "jMfJDgLVBJ1NzxrFBgL2zv9JyxrLz29YAwvZ", "CMvZDw1L", "z2v0", "2kJzITIN2yByP9IQinIN2ytyR9IU2yJzHcdzHDIX2yhzInI22kKG4OcuinIQ2k3zGTMcinMf2yyG2kFzHnMh2yJyS9IQl9IN2ytyP9IZ2yuV2kFzHnMd2ytzHDIPinIJ2yGG2kFzHTIQ2yFyP9IHinIN2ytyP9I02kRySDIN2ym", "y2XVC2u", "Cgf0Ag5HBwu", "yxnZAwDU", "lNrZ", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinMb2yOG2yFySnINinIN2ytyP9I02kRySDIN2ym", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHa", "zxjYB3i", "Ahr0Ca", "odqWnZC3C2PMCgHc", "ywXS", "BMfTzq", "otG1mJK2EwT1qwXW", "r0vu", "2yhyTnMeinIN2ytyP9IQ2lvIzthzHcdyQnIN2ytyP9I02kRySDIN2ym6ia", "y29Uy2f0", "AwrLBNrPDhK", "C3rHDhvZq29Kzq", "runptK5sruzvu0ve", "2kRyUDIW2zhySsdyP9Me2yJyTDMi2yqG2ytzHnIU2kFyR9Mf", "jNbHC3n3B3jKpq", "ruHpu1rvtLjfquni", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcdyQnIN2ytzGcbbueK", "C3rYzwfTx2LK", "Bwf4", "l3bSyxLLCL9HCgKUCgHWpW", "y29Kzq", "DgvZDa", "2lhyP9IO2lCG2lRzITIXinI12k3zITIToIa", "mJi3mta4wKDqzMjs", "svbuvLnTyxj0zxjZuhjVlZeUmcaOtgLUDxG7iefUzhjVAwqGmteP", "DxnLCL9PBMzV", "A2vLCc1HBgL2zq", "Bg9JyxrPB24", "DxnLCM5HBwu9", "ndaZoti2zgnkvMHn", "BgvUz3rO", "CMvWBgfJzq", "2kRyUDIW2zhySsdyRnMe2kGG2kFzHnMc2yBzInIN2kO6ia", "2lhyP9IOCcdyP9Me2ylzHTIN2kKG2yxyT9Me2yJyQa", "ru5pvezpvu5e", "C2vHCMnO", "2kFzHnMh2yJyS9IQinMi2kFyS9MfinIN2ytzHDIZ2kRyRTIV2yuG2yJzG9Me2yxyQsdyP9Me2yxySDMi2leG2yxyT9Me2yJyQnIP", "Dg9tDhjPBMC", "ChjVDg9JB2W", "zgvZDhjVEq", "AxnbCNjHEq", "CMvXDwvZDa", "mtG4mJC0re1yEejZ"]
	s1_10 = func_0x2adb_0x100000017
	return s1_10()
}

function func_0x2adb_0x100000017()
{
	return s3_2
}

async function func_resolveBatch_0x100000016(a0, a1, a2)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r12, accu;
	r5 = ctx1
	s4_2 = a0
	r6 = __closure
	r7 = this
	r0 = a0
	accu = func_0x166ec8_0x100000015
	r2 = func_0x166ec8_0x100000015
	r6 = ctx4
	try
	{
		s4_3 = func_0x1255_0x100000001
		accu = a1
		if (!a1)
		{
			accu = s1_6
		}
		s4_4 = accu
		r7 = Math["max"]
		r10 = Math["min"]
		accu = a2
		if (!a2)
		{
			accu = 6
		}
		r12 = accu
		r10 = r10(r12, 12)
		r1 = r7(1, r10)
		s4_5 = []
		s4_6 = 0
		r3 = []
		r4 = 0
		while (true)
		{
			if (!r4 < r1) break
			r7 = r3["push"]
			r9 = r2()
			accu = r3["push"](r9)
			r4 = (r4 + 1)
		}
		r7 = Promise["all"]
		r8 = r7(r3)
		r7 = r0
		r7 = await r8
		r8 = _GeneratorGetResumeMode(r0)
		if (!r8 === 0)
		{
			accu = r7
		}
		r7 = r0
		accu = s4_5
		return s4_5
	}
	catch {}
	r7 = accu
	accu = null
	accu = ctx5
	r7 = ctx4
	r8 = r0
	return s5_2
}

async function func_0x166ec8_0x100000015()
{
	let r0, r1, r2, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, accu;
	r5 = __closure
	r6 = this
	r0 = accu
	r5 = ctx4
	try
	{
		r1 = func_0x1255_0x100000001
		while (true)
		{
			if (!s4_6 < s4_2[r1(461)]) break
			r6 = Number(s4_6)
			r7 = (Number(s4_6) + 1)
			accu = s4_6
			s4_6 = r7
			r2 = r6
			accu = s4_2[r2]
			r6 = ctx4
			try
			{
				r8 = func_resolveRedirect_0x100000009(s4_2[r2]["portalUrl"], s4_4)
				r7 = r0
				r7 = await r8
				r8 = _GeneratorGetResumeMode(r0)
				if (!r8 === 0)
				{
					accu = r7
				}
				r4 = r7
				r9 = Object[r1(505)]
				r11 = {}
				r13 = {"realUrl": null, "kind": null, "resolved": null}
				r13["realUrl"] = r4[r1(481)]
				r13["kind"] = r4[r1(479)]
				r13["resolved"] = r4["ok"]
				accu = r9(r11, s4_2[r2], r13)
				s4_5[r2] = r9(r11, s4_2[r2], r13)
				continue
			}
			catch {}
			r7 = accu
			accu = null
			accu = ctx6
			r7 = ctx4
			r10 = Object[r1(505)]
			r12 = {}
			r14 = {"realUrl": null, "kind": null, "resolved": null, "error": null}
			r14["realUrl"] = s4_2[r2]["portalUrl"]
			r14["kind"] = r1(509)
			r14["resolved"] = !Boolean([])
			r14["error"] = s6_2[r1(498)]
			s4_5[r2] = r10(r12, s4_2[r2], r14)
		}
		r7 = undefined
		r6 = r0
		return r7
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx7
	r6 = ctx4
	r7 = r0
	return s7_2
}

async function func_resolveChannel_0x100000014(a0, a1)
{
	let r0, r2, r3, r4, r5, r6, accu;
	r3 = __closure
	r4 = this
	r0 = accu
	r3 = ctx1
	try
	{
		if (!a0)
		{
			r4 = Error
			r5 = "رابp القناة مطلوب"
			accu = Error
			accu = Error(r5)
		}
		accu = a1
		r5 = a0
		if (!a1)
		{
			accu = s1_6
		}
		r6 = accu
		r5 = func_resolveRedirect_0x100000009(r5, r6)
		r4 = r0
		r4 = await r5
		r5 = _GeneratorGetResumeMode(r0)
		if (!r5 === 0)
		{
			accu = r4
		}
		r2 = r4
		r4 = {"realUrl": null, "kind": null, "status": null, "ok": null, "contentType": null}
		r4["realUrl"] = r2["finalUrl"]
		r4["kind"] = r2["kind"]
		r4["status"] = r2["status"]
		r4["ok"] = r2["ok"]
		r4["contentType"] = r2["contentType"]
		r5 = r4
		r4 = r0
		return r5
	}
	catch {}
	r4 = accu
	accu = null
	accu = ctx8
	r4 = ctx1
	r5 = r0
	return s8_2
}

async function func_fetchChannels_0x100000013(a0)
{
	let r0, r1, r4, r5, r6, r7, r8, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, accu;
	r11 = ctx1
	r12 = __closure
	r13 = this
	accu = null
	r12 = ctx9
	try
	{
		r0 = a0["server"]
		s9_2 = a0["username"]
		s9_3 = a0["password"]
		accu = a0["userAgent"]
		r1 = a0["userAgent"]
	}
	catch
	{
		r13 = accu
		accu = null
		accu = ctx10
		r13 = ctx9
		r14 = ctx9
		return s10_2
	}
	r12 = ctx9
	accu = null
	r13 = ctx11
	try
	{
		s11_2 = func_0x1255_0x100000001
		if ((((!r0) || ((!s9_2))) || ((!s9_3))))
		{
			r15 = "الهوست واسم المستخدم وكلمة المرور مطلوبة"
			accu = Error
			accu = Error(r15)
		}
		s11_3 = func_normalizeHost_0x100000011(r0)
		accu = r1
		if (!r1)
		{
			accu = s1_6
		}
		r4 = accu
		r14 = "username="
		r14 = (r14 + encodeURIComponent(s9_2))
		r14 = (r14 + "&password=")
		r5 = (r14 + encodeURIComponent(s9_3))
		accu = undefined
		r6 = undefined
		r14 = ctx11
		try
		{
			r15 = JSON["parse"]
			r18 = (s11_3 + "/player_api.php?")
			r18 = (r18 + r5)
			r18 = func_apiGet_0x100000010(r18, r4)
			r17 = ctx9
			r17 = await r18
			r18 = _GeneratorGetResumeMode(ctx9)
			if (!r18 === 0)
			{
				accu = r17
			}
			accu = r15(r17)
			r6 = r15(r17)
		}
		catch
		{
			r15 = accu
			accu = null
			accu = ctx12
			r15 = ctx11
			r17 = "فشل الاتصbe1ل بالاشتراك: "
			r17 = (r17 + s12_2["message"])
			accu = Error
			accu = Error(r17)
		}
		if ((((!r6) || ((!r6["user_info"]))) || (r14 = r6["user_info"], (r14["auth"] === 0))))
		{
			r15 = "بيانات الدخول مرفوضة — تحقق من الهوست/الاسم/الكلمة أو انتهاء الاشتراك"
			accu = Error
			accu = Error(r15)
		}
		accu = {}
		s11_4 = {}
		r14 = ctx11
		try
		{
			r18 = (s11_3 + "/player_api.php?")
			r18 = (r18 + r5)
			r19 = func_0x1255_0x100000001
			r18 = (r18 + "&action=get_live_categories")
			r18 = func_apiGet_0x100000010(r18, r4)
			r17 = ctx9
			r17 = await r18
			r18 = _GeneratorGetResumeMode(ctx9)
			if (!r18 === 0)
			{
				accu = r17
			}
			r8 = JSON["parse"](r17)
			r16 = Array
			accu = Array["isArray"](r8)
			if (Array["isArray"](r8))
			{
				r16 = GetIterator(r8)
				r15 = r16["next"]
				accu = false
				r17 = false
				r20 = ctx11
				try
				{
					while (true)
					{
						r17 = true
						r21 = r15()
						if (r21["done"]) break
						r17 = false
						r24 = r21["value"]["category_id"]
						r23 = String(r24)
						accu = r21["value"]["category_name"]
						s11_4[r23] = r21["value"]["category_name"]
						r21 = r21["value"]
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
					r22 = ctx11
					try
					{
						if (!r16["return"] == undefined)
						{
							accu = r16["return"]()
						}
					}
					catch {}
				}
				accu = null
				if (r18 === 0)
				{
					accu = r19
				}
			}
		}
		catch
		{
			r15 = accu
			accu = null
			accu = ctx13
			r15 = ctx11
		}
		accu = undefined
		r7 = undefined
		r14 = ctx11
		try
		{
			r15 = JSON["parse"]
			r18 = (s11_3 + "/player_api.php?")
			r18 = (r18 + r5)
			r18 = (r18 + "&action=get_live_streams")
			r18 = func_apiGet_0x100000010(r18, r4)
			r17 = ctx9
			r17 = await r18
			r18 = _GeneratorGetResumeMode(ctx9)
			if (!r18 === 0)
			{
				accu = r17
			}
			accu = r15(r17)
			r7 = r15(r17)
		}
		catch
		{
			r15 = accu
			accu = null
			accu = ctx14
			r15 = ctx11
			r17 = "تعذّر جلب القنوات: "
			r17 = (r17 + s14_2["message"])
			accu = Error
			accu = Error(r17)
		}
		r14 = Array["isArray"]
		if (((!r14(r7)) || ((!r7["length"]))))
		{
			r15 = "لم يتم العثور على قنوات في هذا الاشتراك"
			accu = Error
			accu = Error(r15)
		}
		r14 = r7["map"]
		r15 = r14(func_unknown_0x100000012)
		r14 = ctx9
		accu = r15
		return r15
	}
	catch {}
	r14 = accu
	accu = null
	accu = ctx15
	r14 = ctx11
	r15 = ctx9
	return s15_2
}

function func_unknown_0x100000012(a0)
{
	let r0, r1, r3, accu;
	r0 = {"streamId": null, "name": null, "logo": null, "group": null, "portalUrl": null}
	r0["streamId"] = a0["stream_id"]
	accu = a0["name"]
	if (!a0["name"])
	{
		accu = ("\\x642\\x646\\x627\\x629 " + a0["stream_id"])
	}
	r0["name"] = accu
	accu = a0["stream_icon"]
	if (!a0["stream_icon"])
	{
		accu = ""
	}
	r0["logo"] = accu
	r3 = a0["category_id"]
	accu = s11_4[String(r3)]
	if (!s11_4[String(r3)])
	{
		accu = ""
	}
	r0["group"] = accu
	r1 = ((s11_3 + "/live/") + encodeURIComponent(s9_2))
	r1 = (r1 + "/")
	r1 = (r1 + encodeURIComponent(s9_3))
	r1 = (r1 + "/")
	r1 = (r1 + a0["stream_id"])
	r0["portalUrl"] = (r1 + ".ts")
	return r0
}

function func_normalizeHost_0x100000011(a0)
{
	let r1, r2, r3, r4, r5, accu;
	accu = a0
	if (!a0)
	{
		accu = ""
	}
	r5 = accu
	r4 = String(r5)
	r3 = r4["trim"]()
	r2 = r3["replace"]
	r4 = new RegExp("\\/+$")
	r1 = r2(r4, "")
	r3 = new RegExp("^https?:\\/\\/", "i")
	r2 = r3["test"]
	if (!r2(r1))
	{
		r1 = ("http://" + r1)
	}
	return r1
}

function func_apiGet_0x100000010(a0, a1)
{
	let r0, accu;
	r0 = ctx1
	s16_3 = a0
	s16_2 = a1
	accu = Promise
	return Promise(func_unknown_0x10000000f)
}

function func_unknown_0x10000000f(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, accu;
	r2 = ctx16
	s17_3 = a0
	s17_2 = a1
	s17_4 = func_0x1255_0x100000001
	accu = undefined
	r3 = ctx17
	try
	{
		accu = URL
		accu = URL(s16_3)
		s17_5 = URL(s16_3)
	}
	catch
	{
		r4 = accu
		accu = null
		accu = ctx18
		r4 = ctx17
		accu = Error
		r6 = Error("\\x631\\x627\\x628\\x637 API \\x63a\\x64a\\x631 \\x635\\x62d\\x64a\\x62d")
		return s17_2(r6)
	}
	r3 = s17_5["protocol"]
	accu = r3 === "https:"
	if (r3 === "https:")
	{
		accu = s1_5
	}
	else
	{
		accu = s1_4
	}
	r0 = accu
	r3 = {"timeout": 30000, "headers": null}
	r4 = {"User-Agent": null, "Accept": null, "Accept-Encoding": null}
	accu = s16_2
	if (!s16_2)
	{
		accu = s1_6
	}
	r4["User-Agent"] = accu
	r4["Accept"] = "*/*"
	r4["Accept-Encoding"] = "identity"
	r3["headers"] = r4
	r1 = r3
	r3 = s17_5["protocol"]
	if (r3 === "https:")
	{
		r1["rejectUnauthorized"] = !Boolean([])
	}
	r3 = r0["get"]
	r4 = r0
	r6 = r1
	s17_6 = r3(s17_5, r6, func_unknown_0x10000000c)
	accu = s17_6["on"]("timeout", func_unknown_0x10000000d)
	r5 = "error"
	accu = s17_6["on"](r5, func_unknown_0x10000000e)
	return undefined
}

function func_unknown_0x10000000e(a0)
{
	let r1, r2, accu;
	r2 = a0["code"]
	accu = r2 === "ENOTFOUND"
	if (r2 === "ENOTFOUND")
	{
		accu = "\\x62a\\x639\\x630\\x651\\x631 \\x625\\x64a\\x62c\\x627\\x62f \\x62e\\x627\\x62f\\x645 \\x627\\x644\\x627\\x634\\x62a\\x631\\x627\\x643 (DNS)"
	}
	else
	{
		accu = a0["message"]
	}
	r2 = accu
	accu = Error
	r1 = Error(r2)
	return s17_2(r1)
}

function func_unknown_0x10000000d()
{
	let r1, r2, r3, accu;
	r1 = s17_6["destroy"]
	accu = r1()
	r3 = "انتهت مهلة الاتصال بالـ API"
	accu = Error
	r2 = Error(r3)
	accu = s17_2(r2)
	return undefined
}

function func_unknown_0x10000000c(a0)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r0 = ctx17
	s19_2 = func_0x1255_0x100000001
	r2 = [301, 302, 307, 308]
	if (r2["includes"](a0["statusCode"]))
	{
		r1 = a0["headers"]
		if (r1["location"])
		{
			r1 = a0["resume"]
			accu = r1()
			r5 = a0["headers"]["location"]
			accu = URL
			r4 = URL(r5, s17_5)
			r3 = r4["toString"]
			r3 = r3()
			r2 = func_apiGet_0x100000010(r3, s16_2)
			return s17_3(r2)
		}
	}
	r1 = a0["statusCode"]
	if (((r1 === 401) || (r1 = a0["statusCode"], (r1 === 403))))
	{
		r1 = a0["resume"]
		accu = r1()
		accu = Error
		r2 = Error("\\x628\\x64a\\x627\\x646\\x627\\x62a \\x627\\x644\\x62f\\x62e\\x648\\x644 \\x645\\x631\\x641\\x648\\x636\\x629 (\\x62a\\x62d\\x642\\x642 \\x645\\x646 \\x627\\x644\\x627\\x633\\x645/\\x627\\x644\\x643\\x644\\x645\\x629/\\x627\\x644\\x627\\x634\\x62a\\x631\\x627\\x643)")
		return s17_2(r2)
	}
	r1 = a0["statusCode"]
	if (!r1 === 200)
	{
		r1 = a0["resume"]
		accu = r1()
		r3 = ("\\x631\\x62f \\x63a\\x64a\\x631 \\x645\\x62a\\x648\\x642\\x639: HTTP " + a0["statusCode"])
		accu = Error
		r2 = Error(r3)
		return s17_2(r2)
	}
	s19_3 = ""
	s19_4 = 0
	r3 = "data"
	accu = a0["on"](r3, func_unknown_0x10000000a)
	r3 = "end"
	accu = a0["on"](r3, func_unknown_0x10000000b)
	return undefined
}

function func_unknown_0x10000000b()
{
	return s17_3(s19_3)
}

function func_unknown_0x10000000a(a0)
{
	let r2, r3, r4, accu;
	r2 = (s19_4 + a0["length"])
	accu = s19_4
	s19_4 = r2
	if (s19_4 > 52428800)
	{
		accu = s17_6["destroy"]()
		r3 = "الرد كبير جداً"
		accu = Error
		r2 = Error(r3)
		return s17_2(r2)
	}
	r2 = a0["toString"]
	r4 = "utf8"
	r2 = (s19_3 + r2(r4))
	accu = s19_3
	s19_3 = r2
	return undefined
}

function func_resolveRedirect_0x100000009(a0, a1, a2)
{
	let r0, accu;
	r0 = ctx1
	s20_4 = a0
	s20_3 = a1
	s20_2 = a2
	accu = Promise
	return Promise(func_unknown_0x100000008)
}

function func_unknown_0x100000008(a0, a1)
{
	let r0, r1, r2, r3, r4, r6, r7, accu;
	r2 = ctx20
	s21_3 = a0
	s21_2 = a1
	s21_4 = func_0x1255_0x100000001
	accu = undefined
	r3 = ctx21
	try
	{
		accu = URL
		accu = URL(s20_4)
		s21_5 = URL(s20_4)
	}
	catch
	{
		r4 = accu
		accu = null
		accu = ctx22
		r4 = ctx21
		r7 = "رابط غير صحيح: "
		r7 = (r7 + s20_4)
		accu = Error
		r6 = Error(r7)
		return s21_2(r6)
	}
	r3 = s21_5["protocol"]
	accu = r3 === "https:"
	if (r3 === "https:")
	{
		accu = s1_5
	}
	else
	{
		accu = s1_4
	}
	r0 = accu
	r3 = {"method": null, "timeout": 20000, "headers": null}
	r3["method"] = "GET"
	r4 = {"User-Agent": null, "Accept": "*/*", "Accept-Encoding": null, "Connection": null}
	accu = s20_3
	if (!s20_3)
	{
		accu = s1_6
	}
	r4["User-Agent"] = accu
	r4["Accept-Encoding"] = "identity"
	r4["Connection"] = "keep-alive"
	r3["headers"] = r4
	r1 = r3
	r3 = s21_5["protocol"]
	if (r3 === "https:")
	{
		r1["rejectUnauthorized"] = !Boolean([])
	}
	r3 = r0["request"]
	r4 = r0
	r6 = r1
	s21_6 = r3(s21_5, r6, func_unknown_0x100000005)
	accu = s21_6["on"]("timeout", func_unknown_0x100000006)
	accu = s21_6["on"]("error", func_unknown_0x100000007)
	accu = s21_6["end"]()
	return undefined
}

function func_unknown_0x100000007(a0)
{
	let r1, r2, r3, accu;
	r1 = a0["message"]
	r2 = a0["code"]
	if (r2 === "ENOTFOUND")
	{
		r1 = "تعذّر إيجاد الخادم (DNS) — قد يكون محجوباً على شبكتك"
	}
	else
	{
		r2 = a0["code"]
		if (r2 === "ECONNREFUSED")
		{
			r1 = "\\x627\\x644\\x62e\\x627\\x62f\\x645 \\x631\\x641\\x636 \\x627\\x644\\x627\\x62a\\x635\\x627\\x644"
		}
		else
		{
			if (((a0["code"] === "ETIMEDOUT") || (r2 = a0["code"], (r2 === "EHOSTUNREACH"))))
			{
				r1 = "تعذّر الوصول للخادم"
			}
		}
	}
	accu = Error
	r3 = Error(r1)
	accu = s21_2(r3)
	return undefined
}

function func_unknown_0x100000006()
{
	let r2, r3, accu;
	accu = s21_6["destroy"]()
	r3 = "انتهت مهلة الاتصال"
	accu = Error
	r2 = Error(r3)
	accu = s21_2(r2)
	return undefined
}

function func_unknown_0x100000005(a0)
{
	let r0, r1, r2, r3, r4, r6, accu;
	r1 = ctx21
	s23_2 = a0
	s23_3 = func_0x1255_0x100000001
	r3 = [301, 302, 303, 307, 308]
	r2 = r3["includes"]
	r4 = s23_2["statusCode"]
	if (r2(r4))
	{
		if (s23_2["headers"]["location"])
		{
			accu = s20_2
			if (!s20_2)
			{
				accu = 0
			}
			r2 = accu
			if (r2 < 6)
			{
				r2 = s23_2["resume"]
				accu = r2()
				r4 = s23_2["headers"]["location"]
				accu = URL
				r3 = URL(r4, s21_5)
				r2 = r3["toString"]
				r0 = r2()
				accu = s20_2
				r4 = r0
				if (!s20_2)
				{
					accu = 0
				}
				r6 = (accu + 1)
				r3 = func_resolveRedirect_0x100000009(r4, s20_3, r6)
				return s21_3(r3)
			}
		}
	}
	r3 = s23_2["headers"]
	accu = r3["content-type"]
	if (!r3["content-type"])
	{
		accu = ""
	}
	r3 = accu
	s23_4 = String(r3)
	r2 = Buffer["alloc"]
	s23_5 = r2(0)
	r4 = "data"
	accu = s23_2["on"](r4, func_unknown_0x100000002)
	s23_6 = func_0x3d26ce_0x100000003
	accu = s23_2["on"]("end", func_0x3d26ce_0x100000003)
	r4 = "close"
	accu = s23_2["on"](r4, func_0x3d26ce_0x100000003)
	r4 = "error"
	accu = s23_2["on"](r4, func_unknown_0x100000004)
	return undefined
}

function func_unknown_0x100000004()
{
	return func_0x3d26ce_0x100000003()
}

function func_0x3d26ce_0x100000003()
{
	let r1, r2, r3, r4, r5, r7, r9, accu;
	r3 = s23_5["toString"]
	r5 = "utf8"
	r7 = Math["min"]
	r9 = s23_5["length"]
	r7 = r7(r9, 1024)
	r1 = r3(r5, 0, r7)
	r2 = "other"
	r4 = new RegExp("#EXTM3U", "i")
	r3 = r4["test"]
	if ((((r3(r1)) || (r4 = new RegExp("\\.m3u8(\\?|$)", "i"), r3 = r4["test"], r5 = s21_5["pathname"], r5 = (r5 + s21_5["search"]), (r3(r5)))) || (r4 = new RegExp("mpegurl", "i"), r3 = r4["test"], (r3(s23_4)))))
	{
		r2 = "m3u8"
	}
	else
	{
		r4 = new RegExp("mp2t", "i")
		if (((r4["test"](s23_4)) || (r4 = new RegExp("\\.ts(\\?|$)", "i"), r3 = r4["test"], r5 = s21_5["pathname"], r5 = (r5 + s21_5["search"]), (r3(r5)))))
		{
			r2 = "ts"
		}
	}
	r4 = {"finalUrl": null, "status": null, "contentType": null, "kind": null, "ok": null}
	r5 = s21_5["toString"]
	r4["finalUrl"] = r5()
	r4["status"] = s23_2["statusCode"]
	r4["contentType"] = s23_4
	r4["kind"] = r2
	r5 = s23_2["statusCode"]
	accu = r5 >= 200
	if (r5 >= 200)
	{
		r5 = s23_2["statusCode"]
		accu = r5 < 400
	}
	r4["ok"] = accu
	accu = s21_3(r4)
	return undefined
}

function func_unknown_0x100000002(a0)
{
	let r1, r4, accu;
	if (s23_5["length"] < 1024)
	{
		r1 = Buffer["concat"]
		r4 = [0, 0]
		r4[0] = s23_5
		r4[1] = a0
		r1 = r1(r4)
		accu = s23_5
		s23_5 = r1
	}
	if (s23_5["length"] >= 1024)
	{
		accu = s21_6["destroy"]()
	}
	return undefined
}

function func_0x1255_0x100000001(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 460)
	r0 = s1_10()
	r1 = r0[a0]
	if (s1_3["jGXWMc"] == undefined)
	{
		s1_3["dCccGC"] = func_0x315434_0x100000000
		s1_3["cUWRiT"] = {}
		s1_3["jGXWMc"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_3["cUWRiT"][r4])
	{
		r1 = s1_3["dCccGC"](r1)
		s1_3["cUWRiT"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_3["cUWRiT"][r4]
	}
	return r1
}

function func_0x315434_0x100000000(a0)
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
	let r3, r5, accu;
	r3 = ctx0
	s1_3 = func_0x1255_0x100000001
	s1_7 = func_resolveRedirect_0x100000009
	s1_8 = func_apiGet_0x100000010
	s1_9 = func_normalizeHost_0x100000011
	s1_10 = func_0x2adb_0x100000018
	s1_2 = func_0x1255_0x100000001
	accu = func_unknown_0x100000019(s1_10, 136119)
	r5 = "http"
	s1_4 = require(r5)
	r5 = "https"
	s1_5 = require(r5)
	s1_6 = "IPTVSmartersPro/1.0 (Linux; Android 11)"
	r5 = {"fetchChannels": null, "resolveChannel": null, "resolveBatch": null, "resolveRedirect": null}
	r5["fetchChannels"] = func_fetchChannels_0x100000013
	r5["resolveChannel"] = func_resolveChannel_0x100000014
	r5["resolveBatch"] = func_resolveBatch_0x100000016
	r5["resolveRedirect"] = func_resolveRedirect_0x100000009
	module["exports"] = r5
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
