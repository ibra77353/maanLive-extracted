// Recovered module: src/xtream.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (14673 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14;
let s3_2;
let s4_2;
let s5_2;
let s6_2;
let s7_2;
let s9_2;
let s10_2, s10_3;
let s11_2;
let s12_2, s12_3, s12_4, s12_5;
let s14_2;
let s16_2;
let s17_2;
let s18_2;
let s19_2;
let s21_2, s21_3, s21_4;
let s22_2, s22_3, s22_4, s22_5, s22_6;
let s24_2, s24_3, s24_4;
let s25_2;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx5, ctx6, ctx7, ctx8, ctx9, ctx10, ctx11, ctx12, ctx13, ctx14, ctx15, ctx16, ctx17, ctx18, ctx19, ctx20, ctx21, ctx22, ctx23;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x100000015(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x1b15_0x10000000b
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(488)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(492)
			r5 = (parseInt(r6) / 2)
			r7 = r0(479)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 3)))
			r6 = r0(444)
			r5 = (parseInt(r6) / 4)
			r7 = r0(471)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 5)))
			r6 = r0(458)
			r4 = (r4 + ((-parseInt(r6)) / 6))
			r6 = r0(515)
			r4 = (r4 + ((-parseInt(r6)) / 7))
			r6 = r0(465)
			r4 = (r4 + (parseInt(r6) / 8))
			r6 = r0(501)
			r5 = (parseInt(r6) / 9)
			r7 = r0(464)
			r2 = (r4 + (r5 * (parseInt(r7) / 10)))
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

async function func_fetchViaProxy_0x100000014(a0)
{
	let r0, r1, r2, r3, r4, r5, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, accu;
	r12 = __closure
	r13 = this
	r5 = accu
	r12 = ctx1
	try
	{
		r0 = a0["server"]
		r1 = a0["username"]
		r2 = a0["password"]
		r3 = a0["proxyBase"]
		r4 = a0["userAgent"]
	}
	catch
	{
		r13 = accu
		accu = null
		accu = ctx3
		r13 = ctx1
		r14 = r5
		return s3_2
	}
	r12 = ctx1
	try
	{
		if ((((!r0) || ((!r1))) || ((!r2))))
		{
			r13 = Error
			r14 = "Server URL واسم المستخدم وكلمة المرور مطلوبة"
			accu = Error
			accu = Error(r14)
		}
		accu = r0
		if (!r0)
		{
			accu = ""
		}
		r16 = accu
		r15 = String(r16)
		r14 = r15["trim"]
		r14 = r14()
		r15 = new RegExp("\\/+$")
		r7 = r14["replace"](r15, "")
		r14 = new RegExp("^https?:\\/\\/", "i")
		if (!r14["test"](r7))
		{
			r13 = "http://"
			r7 = (r13 + r7)
		}
		if (((r3) && (r13 = r3["trim"], accu = r13(), (r13()))))
		{
			r14 = r3["trim"]
			r14 = r14()
			r13 = r14["replace"]
			r15 = new RegExp("\\/+$")
			accu = r14["replace"](r15, "")
		}
		else
		{
			accu = "https://xtream2m3u.ovosimpatico.com"
		}
		r8 = accu
		r13 = (r8 + "/m3u?url=")
		r13 = (r13 + encodeURIComponent(r7))
		r13 = (r13 + "&username=")
		r13 = (r13 + encodeURIComponent(r1))
		r13 = (r13 + "&password=")
		r13 = (r13 + encodeURIComponent(r2))
		r9 = (r13 + "&nostreamproxy=true")
		r14 = func_fetchText_0x10000000d(r9, r4)
		r13 = r5
		r13 = await r14
		r14 = _GeneratorGetResumeMode(r5)
		if (!r14 === 0)
		{
			accu = r13
		}
		r10 = r13
		r14 = new RegExp("#EXTM3U", "i")
		r13 = r14["test"]
		if (!r13(r10))
		{
			r14 = "رد الوسيط ليس قائمة M3U صالحة (تحقق من البيانات أو رابط الوسيط)"
			accu = Error
			accu = Error(r14)
		}
		r11 = func_parseM3U_0x10000000e(r10)
		if (!r11["length"])
		{
			r14 = "لم يتم العثور على قنوات عبر الوسيط"
			accu = Error
			accu = Error(r14)
		}
		r13 = r5
		r14 = r11
		return r14
	}
	catch {}
	r13 = accu
	accu = null
	accu = ctx4
	r13 = ctx1
	r14 = r5
	return s4_2
}

async function func_fetchFromM3UUrl_0x100000013(a0, a1)
{
	let r0, r2, r3, r4, r5, r6, accu;
	r4 = __closure
	r5 = this
	r0 = accu
	r4 = ctx1
	try
	{
		if (!a0)
		{
			r5 = Error
			r6 = "رابط M3U مطلوب"
			accu = Error
			accu = Error(r6)
		}
		r6 = func_fetchText_0x10000000d(a0, a1)
		r5 = r0
		r5 = await r6
		r6 = _GeneratorGetResumeMode(r0)
		if (!r6 === 0)
		{
			accu = r5
		}
		r2 = r5
		r6 = new RegExp("#EXTM3U", "i")
		r5 = r6["test"]
		if (!r5(r2))
		{
			r6 = "الرابط لا يحتوي قائمة M3U صالحة"
			accu = Error
			accu = Error(r6)
		}
		r3 = func_parseM3U_0x10000000e(r2)
		if (!r3["length"])
		{
			r6 = "لم يتم العثور على قنوات في الرابط"
			accu = Error
			accu = Error(r6)
		}
		r5 = r0
		r6 = r3
		return r6
	}
	catch {}
	r5 = accu
	accu = null
	accu = ctx5
	r5 = ctx1
	r6 = r0
	return s5_2
}

async function func_fetchChannels_0x100000012(a0)
{
	let r0, r1, r2, r3, r4, r5, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, accu;
	r9 = __closure
	r10 = this
	r5 = accu
	r9 = ctx1
	try
	{
		r0 = a0["server"]
		r1 = a0["username"]
		r2 = a0["password"]
		r3 = a0["output"]
		r4 = a0["userAgent"]
	}
	catch
	{
		r10 = accu
		accu = null
		accu = ctx6
		r10 = ctx1
		r11 = r5
		return s6_2
	}
	r9 = ctx1
	try
	{
		if ((((!r0) || ((!r1))) || (accu = r2, (!r2))))
		{
			r11 = "Server URL واسم المستخدم وكلمة المرور مطلوبة"
			accu = Error
			accu = Error(r11)
		}
		r10 = ctx1
		try
		{
			r12 = {"server": null, "username": null, "password": null, "output": null, "userAgent": null}
			r12["server"] = r0
			r12["username"] = r1
			r12["password"] = r2
			r12["output"] = r3
			r12["userAgent"] = r4
			r12 = func_fetchViaPlayerApi_0x100000011(r12)
			r11 = r5
			r11 = await r12
			r12 = _GeneratorGetResumeMode(r5)
			if (!r12 === 0)
			{
				accu = r11
			}
			r12 = r11
			r11 = r5
			accu = r12
			return r12
		}
		catch {}
		r11 = accu
		accu = null
		accu = ctx7
		r11 = ctx1
		r12 = ctx7
		try
		{
			r15 = r0
			r16 = r1
			r17 = r2
			r18 = r3
			r14 = func_buildGetUrl_0x100000000(r15, r16, r17, r18)
			r14 = func_fetchText_0x10000000d(r14, r4)
			r13 = r5
			r13 = await r14
			r14 = _GeneratorGetResumeMode(r5)
			if (!r14 === 0)
			{
				accu = r13
			}
			r7 = r13
			r14 = new RegExp("#EXTM3U", "i")
			r13 = r14["test"]
			if (!r13(r7))
			{
				accu = Error
				accu = Error("\\x631\\x62f get.php \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d")
			}
			r8 = func_parseM3U_0x10000000e(r7)
			if (r8["length"])
			{
				r13 = r5
				r14 = r8
				return r14
			}
			r14 = "لا قنوات"
			accu = Error
			accu = Error(r14)
		}
		catch {}
		r13 = accu
		accu = null
		accu = ctx8
		r13 = ctx7
		r15 = s7_2["message"]
		accu = Error
		accu = Error(r15)
	}
	catch {}
	r10 = accu
	accu = null
	accu = ctx9
	r10 = ctx1
	r11 = r5
	return s9_2
}

async function func_fetchViaPlayerApi_0x100000011(a0)
{
	let r0, r1, r2, r5, r6, r7, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, accu;
	r10 = ctx1
	r11 = __closure
	r12 = this
	accu = null
	r11 = ctx10
	try
	{
		r0 = a0["server"]
		s10_2 = a0["username"]
		s10_3 = a0["password"]
		r1 = a0["output"]
		accu = a0["userAgent"]
		r2 = a0["userAgent"]
	}
	catch
	{
		r12 = accu
		accu = null
		accu = ctx11
		r12 = ctx10
		r13 = ctx10
		return s11_2
	}
	r11 = ctx10
	accu = null
	r12 = ctx12
	try
	{
		s12_2 = func_0x1b15_0x10000000b
		if ((((!r0) || ((!s10_2))) || ((!s10_3))))
		{
			r14 = "Server URL واسم المستخدم وكلمة المرور مطلوبة"
			accu = Error
			accu = Error(r14)
		}
		r15 = String(r0)
		r14 = r15["trim"]
		r14 = r14()
		r13 = r14["replace"]
		r15 = new RegExp("\\/+$")
		s12_3 = r13(r15, "")
		r14 = new RegExp("^https?:\\/\\/", "i")
		r13 = r14["test"]
		if (!r13(s12_3))
		{
			r13 = "http://"
			s12_3 = (r13 + s12_3)
		}
		accu = r1 === "m3u8"
		if (r1 === "m3u8")
		{
			accu = "m3u8"
		}
		else
		{
			accu = "ts"
		}
		s12_4 = accu
		r18 = r2
		r14 = func_apiCall_0x10000000f(s12_3, s10_2, s10_3, "", r18)
		r13 = ctx10
		r13 = await r14
		r14 = _GeneratorGetResumeMode(ctx10)
		if (!r14 === 0)
		{
			accu = r13
		}
		r5 = r13
		if ((((!r5) || ((!r5["user_info"]))) || (r13 = r5["user_info"], r14 = func_0x1b15_0x10000000b, r13 = r13["auth"], (r13 === 0))))
		{
			r14 = "بيانات الدخول مرفوضة من player_api (تحقق من الاسم/الكلمة/الاشتراك)"
			accu = Error
			accu = Error(r14)
		}
		accu = {}
		s12_5 = {}
		r13 = ctx12
		try
		{
			r17 = s10_3
			r18 = "get_live_categories"
			r19 = r2
			r15 = func_apiCall_0x10000000f(s12_3, s10_2, s10_3, r18, r19)
			r14 = ctx10
			r14 = await r15
			r15 = _GeneratorGetResumeMode(ctx10)
			if (!r15 === 0)
			{
				accu = r14
			}
			r7 = r14
			r15 = Array
			accu = Array["isArray"](r7)
			if (Array["isArray"](r7))
			{
				r15 = GetIterator(r7)
				r14 = r15["next"]
				accu = false
				r16 = false
				r19 = ctx12
				try
				{
					while (true)
					{
						r16 = true
						r20 = r14()
						if (r20["done"]) break
						r16 = false
						r22 = String(r20["value"]["category_id"])
						accu = r20["value"]["category_name"]
						s12_5[r22] = r20["value"]["category_name"]
						r20 = r20["value"]
					}
					accu = -1
					r18 = -1
					r17 = -1
				}
				catch
				{
					r18 = accu
					r17 = 0
				}
				if (!r16)
				{
					r21 = ctx12
					try
					{
						if (!r15["return"] == undefined)
						{
							accu = r15["return"]()
						}
					}
					catch {}
				}
				accu = null
				if (r17 === 0)
				{
					accu = r18
				}
			}
		}
		catch
		{
			r14 = accu
			accu = null
			accu = ctx13
			r14 = ctx12
		}
		r18 = r2
		r14 = func_apiCall_0x10000000f(s12_3, s10_2, s10_3, "get_live_streams", r18)
		r13 = ctx10
		r13 = await r14
		r14 = _GeneratorGetResumeMode(ctx10)
		if (!r14 === 0)
		{
			accu = r13
		}
		r6 = r13
		r13 = Array["isArray"]
		if (((!r13(r6)) || ((!r6["length"]))))
		{
			r14 = "لم يتم العثور على قنوات في الحساب"
			accu = Error
			accu = Error(r14)
		}
		r13 = r6["map"]
		r14 = r13(func_unknown_0x100000010)
		r13 = ctx10
		accu = r14
		return r14
	}
	catch {}
	r13 = accu
	accu = null
	accu = ctx14
	r13 = ctx12
	r14 = ctx10
	return s14_2
}

function func_unknown_0x100000010(a0)
{
	let r0, r1, r3, accu;
	r0 = {"name": null, "url": null, "logo": null, "group": null}
	accu = a0["name"]
	if (!a0["name"])
	{
		accu = ("\\x642\\x646\\x627\\x629 " + a0["stream_id"])
	}
	r0["name"] = accu
	r1 = (s12_3 + "/live/")
	r1 = (r1 + encodeURIComponent(s10_2))
	r1 = (r1 + "/")
	r1 = (r1 + encodeURIComponent(s10_3))
	r1 = (r1 + "/")
	r1 = (r1 + a0["stream_id"])
	r1 = (r1 + ".")
	r0["url"] = (r1 + s12_4)
	accu = a0["stream_icon"]
	if (!a0["stream_icon"])
	{
		accu = ""
	}
	r0["logo"] = accu
	r3 = a0["category_id"]
	accu = s12_5[String(r3)]
	if (!s12_5[String(r3)])
	{
		accu = ""
	}
	r0["group"] = accu
	return r0
}

async function func_apiCall_0x10000000f(a0, a1, a2, a3, a4)
{
	let r0, r2, r3, r4, r5, r6, r7, r8, accu;
	r4 = __closure
	r5 = this
	r0 = accu
	r4 = ctx1
	try
	{
		r5 = (a0 + "/player_api.php?username=")
		r5 = (r5 + encodeURIComponent(a1))
		r5 = (r5 + "&password=")
		r5 = (r5 + encodeURIComponent(a2))
		accu = a3
		if (a3)
		{
			accu = ("&action=" + a3)
		}
		else
		{
			accu = ""
		}
		r2 = (r5 + accu)
		r6 = func_fetchText_0x10000000d(r2, a4)
		r5 = r0
		r5 = await r6
		r6 = _GeneratorGetResumeMode(r0)
		if (!r6 === 0)
		{
			accu = r5
		}
		r3 = r5
		accu = r3
		r5 = ctx1
		try
		{
			r6 = JSON["parse"]
			r7 = r6(r3)
			r6 = r0
			accu = r7
			return r7
		}
		catch {}
		r6 = accu
		accu = null
		accu = ctx15
		r6 = ctx1
		r8 = "رد player_api غير صالح (JSON)"
		accu = Error
		accu = Error(r8)
	}
	catch {}
	r5 = accu
	accu = null
	accu = ctx16
	r5 = ctx1
	r6 = r0
	return s16_2
}

function func_parseM3U_0x10000000e(a0)
{
	let r0, r1, r2, r3, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, accu;
	r0 = func_0x1b15_0x10000000b
	r12 = String(a0)
	r14 = 430
	r11 = r12["split"]
	r13 = new RegExp("\\r?\\n")
	r1 = r11(r13)
	r2 = []
	r3 = null
	r12 = GetIterator(r1)
	r11 = r12["next"]
	accu = false
	r13 = false
	r16 = ctx1
	try
	{
		while (true)
		{
			r13 = true
			r17 = r11()
			if (r17["done"]) break
			r13 = false
			r7 = r17["value"]["trim"]()
			if (!r17["value"]["trim"]())
			{
				continue
			}
			r18 = r7[r0(496)]
			r20 = r0(494)
			if (r18(r20))
			{
				r21 = r7[r0(430)]
				r21 = r21(",")
				r20 = r21[r0(508)]
				r20 = r20(1)
				accu = r20["join"](",")
				if (!r20["join"](","))
				{
					accu = ""
				}
				r19 = accu
				r8 = r19["trim"]()
				r18 = r7[r0(521)]
				r20 = new RegExp("tvg-logo=\"([^\"]*)\"")
				accu = r18(r20)
				if (!r18(r20))
				{
					accu = []
				}
				r18 = accu
				accu = r18[1]
				if (!r18[1])
				{
					accu = ""
				}
				r9 = accu
				r18 = r7[r0(521)]
				r20 = new RegExp("group-title=\"([^\"]*)\"")
				accu = r18(r20)
				if (!r18(r20))
				{
					accu = []
				}
				r18 = accu
				accu = r18[1]
				if (!r18[1])
				{
					accu = ""
				}
				r10 = accu
				r18 = {"name": null, "logo": null, "group": null}
				r18["name"] = r8
				r18["logo"] = r9
				r18["group"] = r10
				r3 = r18
				accu = r18
				continue
			}
			if (!!Boolean(r7["startsWith"]("#"))) continue
			r18 = r2[r0(437)]
			r20 = {"name": null, "url": null, "logo": null, "group": null}
			accu = r3
			r19 = r2
			if (r3)
			{
				accu = r3[r0(451)]
			}
			if (!accu)
			{
				accu = r7
			}
			r20["name"] = accu
			r20["url"] = r7
			accu = r3
			if (r3)
			{
				accu = r3[r0(475)]
			}
			if (!accu)
			{
				accu = ""
			}
			r20["logo"] = accu
			accu = r3
			if (r3)
			{
				accu = r3[r0(499)]
			}
			if (accu) continue
			r20["group"] = ""
			accu = r18(r20)
			accu = null
			r3 = null
		}
		accu = -1
		r15 = -1
		r14 = -1
	}
	catch
	{
		r15 = accu
		r14 = 0
	}
	if (!r13)
	{
		r18 = ctx1
		try
		{
			if (!r12["return"] == undefined)
			{
				accu = r12["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r14 === 0)
	{
		accu = r15
	}
	return r2
}

async function func_fetchText_0x10000000d(a0, a1)
{
	let r0, r1, r2, r4, r7, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, accu;
	r14 = __closure
	r15 = this
	r0 = accu
	r14 = ctx1
	try
	{
		r2 = []
		if (a1)
		{
			r15 = r2["push"]
			accu = r15(a1)
		}
		r16 = GetIterator(s1_6)
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
				if (r21["value"] === a1) continue
				accu = r2["push"](r21["value"])
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
			}
			catch {}
		}
		accu = null
		if (r18 === 0)
		{
			accu = r19
		}
		r4 = null
		r16 = GetIterator(r2)
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
				accu = r21["value"]
				r22 = ctx1
				try
				{
					r24 = func_fetchOnce_0x100000009(a0, r21["value"])
					r23 = r0
					r23 = await r24
					r24 = _GeneratorGetResumeMode(r0)
					if (!r24 === 0)
					{
						accu = r23
					}
					accu = 1
					r18 = 1
					r19 = r23
					break
				}
				catch {}
				r23 = accu
				accu = null
				accu = ctx17
				r23 = ctx1
				if (!s17_2[r1(512)]) continue
				accu = s17_2
				accu = s17_2
				r4 = s17_2
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
			}
			catch {}
		}
		accu = null
		switch (r18)
		{
		default:
		{
			break
		}
		case (0):
		{
			accu = r19
		}
		case (1):
		{
			r22 = r0
			r23 = r19
			return r23
		}
		}
		if (r4)
		{
			r16 = new RegExp("فارغ|رفض|مهلة|الوصول")
			r18 = 523
			r15 = r16["test"]
			r19 = 454
			r17 = r4["message"]
			if (r15(r17))
			{
				r16 = func_urlVariants_0x10000000c(a0)
				r17 = r16["slice"](1)
				r16 = GetIterator(r17)
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
						accu = r21["value"]
						r22 = ctx1
						try
						{
							r25 = r2[0]
							r24 = func_fetchOnce_0x100000009(r21["value"], r25)
							r23 = r0
							r23 = await r24
							r24 = _GeneratorGetResumeMode(r0)
							if (!r24 === 0)
							{
								accu = r23
							}
							accu = 1
							r18 = 1
							r19 = r23
							break
						}
						catch {}
						r23 = accu
						accu = null
						accu = ctx18
						r23 = ctx1
						if (!s18_2[r1(512)]) continue
						accu = s18_2
						accu = s18_2
						r4 = s18_2
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
					}
					catch {}
				}
				accu = null
				switch (r18)
				{
				default:
				{
					break
				}
				case (0):
				{
					accu = r19
				}
				case (1):
				{
					r22 = r0
					r23 = r19
					return r23
				}
				}
			}
		}
		if (((r4) && (r16 = new RegExp("فارغ"), r15 = r16["test"], r17 = r4["message"], accu = r15(r17), (r15(r17)))))
		{
			accu = "\\x627\\x644\\x62e\\x627\\x62f\\x645 \\x64a\\x631\\x641\\x636 \\x627\\x644\\x627\\x62a\\x635\\x627\\x644 \\x627\\x644\\x645\\x628\\x627\\x634\\x631 \\x645\\x646 \\x647\\x630\\x627 \\x627\\x644\\x62c\\x647\\x627\\x632 (\\x631\\x62f \\x641\\x627\\x631\\x63a) \\x631\\x63a\\x645 \\x646\\x62c\\x627\\x62d\\x647 \\x639\\x628\\x631 \\x645\\x648\\x627\\x642\\x639 \\x648\\x633\\x64a\\x637\\x629. \\x63a\\x627\\x644\\x628\\x627\\x64b \\x64a\\x62d\\x62c\\x628 \\x62d\\x633\\x628 IP \\x623\\x648 \\x64a\\x62a\\x637\\x644\\x628 \\x648\\x633\\x64a\\x637\\x627\\x64b. \\x627\\x644\\x62d\\x644: \\x627\\x633\\x62a\\x62e\\x62f\\x645 \\x631\\x627\\x628\\x637 M3U \\x627\\x644\\x62c\\x627\\x647\\x632 \\x627\\x644\\x630\\x64a \\x64a\\x648\\x644\\x651\\x62f\\x647 \\x627\\x644\\x645\\x648\\x642\\x639 \\x627\\x644\\x648\\x633\\x64a\\x637 (\\x627\\x646\\x638\\x631 \\x632\\x631 \\xab\\x627\\x633\\x62a\\x64a\\x631\\x627\\x62f \\x631\\x627\\x628\\x637 M3U\\xbb)."
		}
		else
		{
			accu = r4
			if (r4)
			{
				accu = r4["message"]
			}
			else
			{
				accu = "فشل غير معروف"
			}
		}
		r7 = accu
		r16 = "تعذّر جلب القنوات: "
		r16 = (r16 + r7)
		accu = Error
		accu = Error(r16)
	}
	catch {}
	r15 = accu
	accu = null
	accu = ctx19
	r15 = ctx1
	r16 = r0
	return s19_2
}

function func_urlVariants_0x10000000c(a0)
{
	let r0, r1, r3, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, accu;
	r0 = func_0x1b15_0x10000000b
	r9 = [0]
	r9[0] = a0
	r1 = r9
	accu = r9
	r8 = ctx1
	try
	{
		accu = URL
		r3 = URL(func_0x1b15_0x10000000b)
		r9 = r3["protocol"]
		if (r9 === "http:")
		{
			accu = URL
			r7 = URL(func_0x1b15_0x10000000b)
			r10 = "protocol"
			r7[r10] = "https:"
			r10 = "port"
			r7[r10] = ""
			r11 = r7["toString"]
			r11 = r11()
			accu = r1["push"](r11)
		}
		if (((!r3["port"]) || (r9 = r3["port"], accu = r9 === "80", (r9 === "80"))))
		{
			r10 = ["8080", "8000", 0, 0, 0]
			r10[2] = "2082"
			r10[3] = "2095"
			r12 = 438
			r10[4] = "25461"
			r10 = GetIterator(r10)
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
					accu = URL
					r6 = URL(r0)
					r17 = r0(485)
					r6[r17] = r15["value"]
					r16 = r1[r0(437)]
					r18 = r6[r0(434)]
					r18 = r18()
					accu = r16(r18)
					r15 = r15["value"]
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
				}
				catch {}
			}
			accu = null
			if (r12 === 0)
			{
				accu = r13
			}
		}
	}
	catch
	{
		r9 = accu
		accu = null
		accu = ctx20
		r9 = ctx1
	}
	return r1
}

function func_0x1b15_0x10000000b(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 427)
	r0 = s1_7()
	r1 = r0[a0]
	if (s1_9["CfqjyG"] == undefined)
	{
		s1_9["yzRCCV"] = func_0x8ae2cf_0x10000000a
		s1_9["ocMgPO"] = {}
		s1_9["CfqjyG"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_9["ocMgPO"][r4])
	{
		r1 = s1_9["yzRCCV"](r1)
		s1_9["ocMgPO"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_9["ocMgPO"][r4]
	}
	return r1
}

function func_0x8ae2cf_0x10000000a(a0)
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

function func_fetchOnce_0x100000009(a0, a1, a2)
{
	let r0, accu;
	r0 = ctx1
	s21_4 = a0
	s21_3 = a1
	s21_2 = a2
	accu = Promise
	return Promise(func_unknown_0x100000008)
}

function func_unknown_0x100000008(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, accu;
	r3 = ctx21
	s22_3 = a0
	s22_2 = a1
	s22_4 = func_0x1b15_0x10000000b
	accu = undefined
	r4 = ctx22
	try
	{
		accu = URL
		accu = URL(s21_4)
		s22_5 = URL(s21_4)
	}
	catch
	{
		r5 = accu
		accu = null
		accu = ctx23
		r5 = ctx22
		r8 = "رابط Xtream غير صحيح"
		accu = Error
		r7 = Error(r8)
		return s22_2(r7)
	}
	r4 = s22_5["protocol"]
	accu = r4 === "https:"
	if (r4 === "https:")
	{
		accu = s1_4
	}
	else
	{
		accu = s1_3
	}
	r0 = accu
	r4 = {"User-Agent": null, "Accept": "*/*", "Accept-Encoding": null, "Icy-MetaData": "1", "Connection": null}
	r4["User-Agent"] = s21_3
	r4["Accept-Encoding"] = "identity"
	r4["Connection"] = "keep-alive"
	r1 = r4
	r4 = {"timeout": 45000, "headers": null}
	r4["headers"] = r1
	r2 = r4
	r4 = s22_5["protocol"]
	if (r4 === "https:")
	{
		r2["rejectUnauthorized"] = !Boolean([])
	}
	r4 = r0["get"]
	r5 = r0
	r7 = r2
	s22_6 = r4(s22_5, r7, func_unknown_0x100000005)
	r6 = "timeout"
	accu = s22_6["on"](r6, func_unknown_0x100000006)
	r6 = "error"
	accu = s22_6["on"](r6, func_unknown_0x100000007)
	return undefined
}

function func_unknown_0x100000007(a0)
{
	let r1, r2, r3, accu;
	r1 = a0["message"]
	r2 = a0["code"]
	if (r2 === "ENOTFOUND")
	{
		r1 = "تعذّر إيجاد الخادم (اسم النطاق خاطئ أو لا إنترنت)"
	}
	else
	{
		r2 = a0["code"]
		if (r2 === "ECONNREFUSED")
		{
			r1 = "الخادم رفض الاتصال (رقم المنفذ غالباً خاطئ)"
		}
		else
		{
			r2 = a0["code"]
			if (((r2 === "ETIMEDOUT") || (r2 = a0["code"], (r2 === "EHOSTUNREACH"))))
			{
				r1 = "تعذّر الوصول للخادم (محجوب أو متوقف)"
			}
			else
			{
				r2 = a0["code"]
				if (r2 === "ECONNRESET")
				{
					r1 = "قطع الخادم الاتصال"
				}
			}
		}
	}
	accu = Error
	r3 = Error(r1)
	accu = s22_2(r3)
	return undefined
}

function func_unknown_0x100000006()
{
	let r1, r2, r3, accu;
	r1 = s22_6["destroy"]
	accu = r1()
	r3 = "انتهت مهلة الاتصال (45ث) — الخادم بطيء أو المنفذ مغلق"
	accu = Error
	r2 = Error(r3)
	accu = s22_2(r2)
	return undefined
}

function func_unknown_0x100000005(a0)
{
	let r0, r1, r2, r3, r4, r5, accu;
	r0 = ctx22
	s24_2 = func_0x1b15_0x10000000b
	r2 = [301, 302, 307, 308]
	r1 = r2["includes"]
	if (r1(a0["statusCode"]))
	{
		r1 = a0["headers"]
		if (r1["location"])
		{
			accu = s21_2
			if (!s21_2)
			{
				accu = 0
			}
			r1 = accu
			if (r1 < 4)
			{
				r1 = a0["resume"]
				accu = r1()
				r5 = a0["headers"]
				accu = URL
				r4 = URL(r5["location"], s22_5)
				r3 = r4["toString"]
				r3 = r3()
				accu = s21_2
				if (!s21_2)
				{
					accu = 0
				}
				r5 = (accu + 1)
				r2 = func_fetchOnce_0x100000009(r3, s21_3, r5)
				return s22_3(r2)
			}
		}
	}
	r1 = a0["statusCode"]
	if (((r1 === 401) || (r1 = a0["statusCode"], (r1 === 403))))
	{
		r1 = a0["resume"]
		accu = r1()
		r2 = Object["assign"]
		accu = Error
		r4 = Error("\\x628\\x64a\\x627\\x646\\x627\\x62a \\x627\\x644\\x62f\\x62e\\x648\\x644 \\x645\\x631\\x641\\x648\\x636\\x629 (\\x627\\x633\\x645 \\x627\\x644\\x645\\x633\\x62a\\x62e\\x62f\\x645/\\x643\\x644\\x645\\x629 \\x627\\x644\\x645\\x631\\x648\\x631 \\x623\\x648 \\x627\\x644\\x627\\x634\\x62a\\x631\\x627\\x643 \\x645\\x646\\x62a\\x647\\x64d)")
		r5 = {"fatal": null}
		r5["fatal"] = !(!Boolean([]))
		r2 = r2(r4, r5)
		return s22_2(r2)
	}
	if (!a0["statusCode"] === 200)
	{
		r1 = a0["resume"]
		accu = r1()
		r3 = "رد غير متوقع من خادم Xtream: HTTP "
		r3 = (r3 + a0["statusCode"])
		accu = Error
		r2 = Error(r3)
		return s22_2(r2)
	}
	s24_3 = ""
	s24_4 = 0
	r3 = "data"
	accu = a0["on"](r3, func_unknown_0x100000003)
	r3 = "end"
	accu = a0["on"](r3, func_unknown_0x100000004)
	return undefined
}

function func_unknown_0x100000004()
{
	let r1, r2, r3, accu;
	r1 = s24_3["trim"]
	if (!r1())
	{
		r3 = "رد فارغ من الخادم"
		accu = Error
		r2 = Error(r3)
		return s22_2(r2)
	}
	accu = s22_3(s24_3)
	return undefined
}

function func_unknown_0x100000003(a0)
{
	let r1, r2, accu;
	r2 = (s24_4 + a0["length"])
	accu = s24_4
	s24_4 = r2
	if (s24_4 > 41943040)
	{
		r1 = s22_6["destroy"]
		accu = r1()
		accu = Error
		r2 = Error("\\x642\\x627\\x626\\x645\\x629 \\x627\\x644\\x642\\x646\\x648\\x627\\x62a \\x643\\x628\\x64a\\x631\\x629 \\x62c\\x62f\\x627\\x64b")
		return s22_2(r2)
	}
	r2 = a0["toString"]
	r2 = (s24_3 + r2("utf8"))
	accu = s24_3
	s24_3 = r2
	return undefined
}

function func_0x5e02_0x100000002()
{
	let r0;
	r0 = ctx1
	s25_2 = ["DhjPBq", "DgvZDa", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcaOndxyQYKG4OcuinIN2ytyRTIN2k/zHsdyQnI32yRyOsdyO9MiinIN2ytzHDMg2yhyScdzHDI62ytzGG", "z2v0x2XPDMvFy2f0zwDVCMLLCW", "2ylyT9I5inIN2ytyRTIN2k/zHsdyP9Me2kFyQTI12kFzHa", "2lhyRYdyP9Me2yJyS9Mk2lCG2ytzITIZinMc2kFyPTMf2kKGttnvinI12kFzHnIT2kKGknIQ2k3zGTMcinMf2yyG2kFzHnIO2yRyP9Mg2kFyQIdyO9MiinIX2kFyQnI3inIN2ytzInIZ2yRyTYK", "C3bSAxq", "ruHpu1rvtLjfquni", "2kFzHnIU2kFyR9MfinIX2yhyTIdyP9Me2kFyQTI12kFzHcaO2lhzGTMfinIN2ytzHDMg2yhyScdyUTIN2ytyQnIN2ySG2k7yP9I32kyP", "Ahr0CdOVlW", "Dg9tDhjPBMC", "2lhyRYdyUTMk2leG2yxyQTMi2ylyUsdzHDMginIU2kFyR9MfifH0CMvHBtOGsfruuca", "tw96AwXSys81lJaGkfDPBMrVD3mGtLqGmtaUmdSGv2LUnJq7ihG2ncKGqxbWBgvxzwjlAxqVntm3lJm2", "ChvZAa", "mJu0nJe", "l2DLDc5WAha/DxnLCM5HBwu9", "2kRyUDIW2zhySsdyP9Me2yJyTDMi2yqG2ytzHnIU2kFyR9MficJzHDIT2kZzInIOinIJ2yGG2yxyQTMi2ylzGsK", "Btn1oa", "CgfYC2u", "mJa4mG", "ogXyBenUDG", "2kRyUDIW2zhySsdyRnMe2kGG2kFzHnMc2yBzInIN2kO6ia", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinMb2yOG2kFzHnIT2lpyP9IO", "AgvHzgvYCW", "zgf0yq", "Ahr0CdO", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinMb2yOG2kFzHnIX2kFyQnI3", "BMfTzq", "BgvUz3rO", "yxv0Aa", "BwvZC2fNzq", "Aw5JBhvKzxm", "2kJzITIN2yByP9IQinIN2ytyR9IU2yJzHcdzHDIX2yhzInI22kKG2yxzHIbWBgf5zxjFyxbPicJyQTIT2ylzGIdzHDMginIN2ytyP9IZ2yuV2kFzHnMd2ytzHDIPl9IN2ytyP9I02kRySDIN2ymP", "2yhyTnMeinI62yRySsdzHDI52lhzInMb", "mZa4nJiYnMDZq25csq", "2ytzHsdzITIQ2yuG2kFzHnI52kVzInIXinI52ytzIsdzGTMg2yJyP9IQinI52kJySsdyP9Me2yJyS9Mk2lC", "jM5VC3rYzwfTChjVEhK9Dhj1zq", "tgf2zI81oc43nI4Xmda", "BwfW", "l20ZDt91CMW9", "ntbrrfLUww4", "mtK3oti3mLDeA3DSuW", "zxjYB3i", "2kFzHnIX2kFyQnI3inMe2kCG2yRyRDIQ2yJzIIdzGTIN2kBzHDIPie0ZvsdyTDIN2ytyRDIP", "C3rYzwfTx2LJB24", "2ytyPYdzGTMg2yJyP9IQ", "mJa5nq", "mJi4odmZmefpv0jYtW", "A2vLCc1HBgL2zq", "B2TODhrWlZqUos4Z", "ChjVDg9JB2W", "Bg9NBW", "DxnLCL9PBMzV", "Ahr0Chm6", "Ahr0Ca", "mtCWnJfzCerlv00", "vgL2Au1HDguVnc43lJa", "svbuvLnTyxj0zxjZugXHEwvY", "C3rHDhvZq29Kzq", "zgvZDhjVEq", "AwrLBNrPDhK", "Cg9YDa", "y29Kzq", "C3rYzwfTx2LK", "nJiXmtaWrgrvAMDl", "rvrjtuvet1vu", "l3bSyxLLCL9HCgKUCgHWp3vZzxjUyw1Lpq", "l2XPDMuV", "mte0C0Lrt0Lr", "y2f0zwDVCNLFAwq", "i0vyveLorG", "CMvWBgfJzq", "C3rHCNrZv2L0Aa", "CMvZDw1L", "2kRyUDIW2zhySsdyPDMk2kZyP9IVinIN2ytyRTIN2k/zHsaO2kFyS9MfinIN2ytzHTI32kFzGIdyRTIN2lFyPIdyO9MiinMe2kCG2kxzHTIQ2lhzHTIQkq", "z3jVDxa", "y2f0zwDVCNLFBMfTzq", "ntu2nJuWmfDyAfLdtq", "z2v0", "vKXdlZmUmc4YmcbmAwjwtemVmY4WlJiW", "u2vYDMvYifvstcdzInIN2lpzHsdyP9Me2yxyS9IQ2k7yR9MfinMi2ypzHnMf2kKG2kFzHnMf2lhzInIXinMf2lFzHnMi2kJyQq", "jNbHC3n3B3jKpq", "2lhyP9IO2lCGttnvinMf2lFzHnMi2kG", "Bg9JyxrPB24", "C2XPy2u", "2lhyRYdzGDIN2lhyUIdzHDMginIN2ytyRTIN2k/zHq", "ru5pvezpvu5e", "zw5K", "zMf0ywW", "2lhyP9IO2lCGwhrYzwfTinI62yRySsdyTDIT2yRyRq", "yxnZAwDU", "mtu3mda1mw5AAKHpyG", "runptK5sruzvu0ve", "2lhyRYbWBgf5zxjFyxbPinI62yRySsdyTDIN2ytyRsaOsLnptIK", "AxnbCNjHEq", "zxHWB3j0CW", "DgLTzw91Da", "Bwf0y2G"]
	s1_7 = func_0x5e02_0x100000001
	return s1_7()
}

function func_0x5e02_0x100000001()
{
	return s25_2
}

function func_buildGetUrl_0x100000000(a0, a1, a2, a3)
{
	let r1, r2, r3, r4, r5, r6, accu;
	accu = a0
	if (!a0)
	{
		accu = ""
	}
	r6 = accu
	r5 = String(r6)
	r4 = r5["trim"]
	r4 = r4()
	r5 = new RegExp("\\/+$")
	r1 = r4["replace"](r5, "")
	r4 = new RegExp("^https?:\\/\\/", "i")
	r3 = r4["test"]
	if (!r3(r1))
	{
		r1 = ("http://" + r1)
	}
	accu = a3 === "m3u8"
	if (a3 === "m3u8")
	{
		accu = "m3u8"
	}
	else
	{
		accu = "ts"
	}
	r2 = accu
	r3 = (r1 + "/get.php?username=")
	r3 = (r3 + encodeURIComponent(a1))
	r3 = (r3 + "&password=")
	r3 = (r3 + encodeURIComponent(a2))
	r3 = (r3 + "&type=m3u_plus&output=")
	return (r3 + r2)
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r3, r5, r6, accu;
	r3 = ctx0
	s1_5 = func_buildGetUrl_0x100000000
	s1_7 = func_0x5e02_0x100000002
	s1_8 = func_fetchOnce_0x100000009
	s1_9 = func_0x1b15_0x10000000b
	s1_10 = func_urlVariants_0x10000000c
	s1_11 = func_fetchText_0x10000000d
	s1_12 = func_parseM3U_0x10000000e
	s1_13 = func_apiCall_0x10000000f
	s1_14 = func_fetchViaPlayerApi_0x100000011
	s1_2 = func_0x1b15_0x10000000b
	accu = func_unknown_0x100000015(s1_7, 740654)
	r5 = "http"
	s1_3 = require(r5)
	s1_4 = require("https")
	r5 = [0, 0, 0, 0, 0, 0]
	r5[0] = "VLC/3.0.20 LibVLC/3.0.20"
	r5[1] = "IPTVSmartersPlayer"
	r5[2] = "Lavf/58.76.100"
	r5[3] = "TiviMate/4.7.0"
	r5[4] = "okhttp/4.9.3"
	r5[5] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
	s1_6 = r5
	r5 = "exports"
	r6 = {"buildGetUrl": null, "fetchChannels": null, "fetchFromM3UUrl": null, "fetchViaProxy": null, "parseM3U": null}
	r6["buildGetUrl"] = func_buildGetUrl_0x100000000
	r6["fetchChannels"] = func_fetchChannels_0x100000012
	r6["fetchFromM3UUrl"] = func_fetchFromM3UUrl_0x100000013
	r6["fetchViaProxy"] = func_fetchViaProxy_0x100000014
	r6["parseM3U"] = func_parseM3U_0x10000000e
	module[r5] = r6
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
