// Recovered module: src/onlinechannels.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (11998 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14, s1_15, s1_16, s1_17;
let s4_2;
let s5_2;
let s6_2;
let s7_2;
let s8_2;
let s9_2;
let s10_2, s10_3, s10_4;
let s11_2, s11_3;
let s12_2;
let s13_2;
let s14_2, s14_3;
let s15_2, s15_3, s15_4, s15_5;
let s16_2, s16_3, s16_4;
let s18_2;
let s19_2;
let s20_2, s20_3, s20_4, s20_5, s20_6;
let s22_2, s22_3, s22_4;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx5, ctx6, ctx7, ctx9, ctx10, ctx12, ctx13, ctx14, ctx15, ctx16, ctx17, ctx19, ctx20, ctx21, ctx22, ctx23;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x100000022(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x1663_0x100000001
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(158)
			r4 = (parseInt(r5) / 1)
			r6 = r0(164)
			r4 = (r4 * ((-parseInt(r6)) / 2))
			r6 = r0(155)
			r5 = (parseInt(r6) / 3)
			r7 = r0(131)
			r4 = (r4 + (r5 * (parseInt(r7) / 4)))
			r6 = r0(197)
			r5 = (parseInt(r6) / 5)
			r7 = r0(134)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 6)))
			r6 = r0(183)
			r4 = (r4 + ((-parseInt(r6)) / 7))
			r6 = r0(146)
			r5 = (parseInt(r6) / 8)
			r7 = r0(161)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 9)))
			r6 = r0(180)
			r4 = (r4 + ((-parseInt(r6)) / 10))
			r6 = r0(198)
			r2 = (r4 + (parseInt(r6) / 11))
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
		accu = ctx3
		r4 = ctx1
		r7 = r1["shift"]()
		accu = r1["push"](r7)
	}
	return undefined
}

function func_refreshImportedUrls_0x100000021(a0)
{
	let r1, r2, r3, r4, accu;
	r1 = ctx1
	r2 = __closure
	r3 = this
	accu = null
	r2 = ctx4
	try
	{
		s4_2 = func_0x1663_0x100000001
		if (s1_17)
		{
			r3 = ctx4
			return s1_17
		}
		if (!a0)
		{
			r3 = Date["now"]
			r3 = r3()
			r3 = (r3 - s1_16)
			if (r3 < 30000)
			{
				r3 = {"updated": 0, "skipped": null}
				r3["skipped"] = !(!Boolean([]))
				r4 = r3
				r3 = ctx4
				return r4
			}
		}
		r3 = func_unknown_0x100000020()
		accu = s1_17
		s1_17 = r3
		r3 = ctx4
		accu = s1_17
		return s1_17
	}
	catch {}
	r3 = accu
	accu = null
	accu = ctx5
	r3 = ctx4
	r4 = ctx4
	return s5_2
}

function async func_unknown_0x100000020()
{
	let r3, r4, r5, r6, r7, r8, r10, r11, r12, r13, r14, r15, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r36, accu;
	r18 = ctx4
	r19 = __closure
	r20 = this
	accu = null
	r19 = ctx6
	try
	{
		s6_2 = func_0x1663_0x100000001
		r22 = ctx6
		accu = ctx7
		{
			accu = PushContext("Block")
			r23 = ctx6
			r24 = s1_9["get"]
			r3 = r24()
			r25 = r3["sources"]
			r24 = r25["filter"]
			r4 = r25["filter"](func_unknown_0x10000001a)
			accu = r4["length"]
			if (!r4["length"])
			{
				r21 = {"updated": 0}
				r20 = 1
			}
			else
			{
				r25 = func_listAllowed_0x100000012()
				r24 = ctx6
				r24 = await r25
				r25 = _GeneratorGetResumeMode(ctx6)
				if (!r25 === 0)
				{
					accu = r24
				}
				r5 = r24
				r27 = func_unknown_0x10000001b
				r25 = r5["map"](func_unknown_0x10000001b)
				accu = Map
				r6 = Map(r25)
				s7_2 = Map(ctx6)
				r25 = GetIterator(r5)
				r24 = r25["next"]
				accu = false
				r26 = false
				r29 = ctx7
				try
				{
					while (true)
					{
						r26 = true
						r30 = r24()
						if (r30["done"]) break
						r26 = false
						r31 = s7_2["set"]
						r33 = r30["value"]["name"]
						r34 = s7_2["get"]
						r36 = r30["value"]["name"]
						r30 = r30["value"]
						if (r34(r36)) continue
						accu = r31(r33, (0 + 1))
					}
					accu = -1
					r28 = -1
					r27 = -1
				}
				catch
				{
					r28 = accu
					r27 = 0
				}
				if (!r26)
				{
					r31 = ctx7
					try
					{
						if (!r25["return"] == undefined)
						{
							accu = r25["return"]()
						}
						catch {}
					}
				}
				accu = null
				if (r27 === 0)
				{
					r20 = 0
					r21 = r28
				}
				else
				{
					r26 = r5["filter"]
					r26 = r26(func_unknown_0x10000001c)
					r28 = 137
					r25 = r26["map"]
					r27 = func_unknown_0x10000001d
					r25 = r25(func_unknown_0x10000001d)
					accu = Map
					r7 = Map(r25)
					r8 = 0
					r25 = GetIterator(r4)
					r24 = r25["next"]
					accu = false
					r26 = false
					r29 = ctx7
					try
					{
						while (true)
						{
							r26 = true
							r30 = r24()
							if (r30["done"]) break
							r26 = false
							r10 = r30["value"]
							r33 = r30["value"]["onlineId"]
							r11 = r6["get"](r33)
							r30 = r30["value"]
							if (!r6["get"](r33))
							{
								accu = r10["name"]
								if (!r10["name"])
								{
									accu = ""
								}
								r34 = accu
								r33 = String(r34)
								r32 = r33["replace"]
								r34 = /^أونلاين:\\s*/
								r32 = r32(r34, "")
								r31 = r32["trim"]
								r14 = r31()
								r31 = r7["get"]
								accu = r31(r14)
								if (!r31(r14))
								{
									accu = null
								}
								r11 = accu
								if (accu)
								{
									r31 = ctx7
									s8_2 = r10["onlineId"]
									r33 = "onlineId"
									r10[r33] = r11["id"]
									r33 = r3["channels"]
									r15 = r33["find"](func_unknown_0x10000001e)
									if (r33["find"](func_unknown_0x10000001e))
									{
										r33 = "onlineId"
										r15[r33] = r11["id"]
									}
								}
							}
							if (!r11)
							{
								continue
							}
							r33 = r11["variants"]
							accu = Array["isArray"](r33)
							if (Array["isArray"](r33))
							{
								accu = r11["variants"]["filter"](func_unknown_0x10000001f)
							}
							else
							{
								accu = []
							}
							r12 = accu
							accu = r11["url"]
							if (!r11["url"])
							{
								accu = r12[0]
								if (r12[0])
								{
									r31 = r12[0]
									accu = r31["url"]
								}
								if (!accu)
								{
									accu = ""
								}
							}
							r13 = accu
							if (!accu) continue
							if (!!(r13 === r10["url"])) continue
							r10["url"] = r13
							r32 = "streamType"
							accu = r11["streamType"]
							r31 = r10
							if (!r11["streamType"])
							{
								accu = "hls"
							}
							r31[r32] = accu
							r31 = Number(r8)
							r8 = (Number(r8) + 1)
							accu = r31
						}
						accu = -1
						r28 = -1
						r27 = -1
					}
					catch
					{
						r28 = accu
						r27 = 0
					}
					if (!r26)
					{
						r31 = ctx7
						try
						{
							if (!r25["return"] == undefined)
							{
								accu = r25["return"]()
							}
							catch {}
						}
					}
					accu = null
					if (r27 === 0)
					{
						r20 = 0
						r21 = r28
					}
					else
					{
						if (r8)
						{
							r24 = s1_9["save"]
							accu = r24()
						}
						r24 = {"updated": null}
						r24["updated"] = r8
						r21 = r24
						r20 = 1
					}
				}
			}
		}
		catch
		{
			r21 = accu
			r20 = 0
		}
		r24 = Date["now"]
		r24 = r24()
		accu = s1_16
		s1_16 = r24
		accu = s1_17
		accu = null
		switch (r20)
		default:
		{
			break
		}
		case (0):
		{
			accu = r21
		}
		case (1):
		{
			r24 = ctx6
			r25 = r21
			return r25
		}
		r21 = undefined
		r20 = ctx6
		accu = r21
		return r21
	}
	catch {}
	r20 = accu
	accu = null
	accu = ctx9
	r20 = ctx6
	r21 = ctx6
	return s9_2
}

function func_unknown_0x10000001f(a0)
{
	let accu;
	accu = a0
	if (a0)
	{
		accu = a0["url"]
	}
	return accu
}

function func_unknown_0x10000001e(a0)
{
	let r0;
	r0 = a0["onlineId"]
	return r0 === s8_2
}

function func_unknown_0x10000001d(a0)
{
	let r1;
	r1 = [0, 0]
	r1[0] = a0["name"]
	r1[1] = a0
	return r1
}

function func_unknown_0x10000001c(a0)
{
	let r0, r2;
	r2 = a0["name"]
	r0 = s7_2["get"](r2)
	return r0 === 1
}

function func_unknown_0x10000001b(a0)
{
	let r1;
	r1 = [0, 0]
	r1[0] = a0["id"]
	r1[1] = a0
	return r1
}

function func_unknown_0x10000001a(a0)
{
	return a0["onlineId"]
}

function async func_importChannel_0x100000019(a0)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, accu;
	r11 = ctx1
	s10_2 = a0
	r12 = __closure
	r13 = this
	r0 = a0
	accu = null
	r12 = ctx10
	try
	{
		s10_3 = func_0x1663_0x100000001
		r13 = s1_9["get"]
		r1 = r13()
		r13 = "أونلاين: "
		r2 = (r13 + s10_2["name"])
		r13 = Array["isArray"]
		accu = r13(s10_2["variants"])
		if (r13(s10_2["variants"]))
		{
			r14 = s10_2["variants"]
			r13 = r14["filter"]
			accu = r13(func_unknown_0x100000013)
		}
		else
		{
			accu = []
		}
		r3 = accu
		accu = s10_2["url"]
		if (!s10_2["url"])
		{
			accu = r3[0]
			if (r3[0])
			{
				r13 = r3[0]
				accu = r13["url"]
			}
			if (!accu)
			{
				accu = ""
			}
		}
		r4 = accu
		accu = s10_2["streamType"]
		if (!s10_2["streamType"])
		{
			accu = "hls"
		}
		r5 = accu
		accu = s10_2["userAgent"]
		if (!s10_2["userAgent"])
		{
			accu = ""
		}
		r6 = accu
		accu = s10_2["referer"]
		if (!s10_2["referer"])
		{
			accu = ""
		}
		r7 = accu
		r14 = r1["sources"]
		r13 = r14["find"]
		s10_4 = r13(func_unknown_0x100000014)
		if (s10_4)
		{
			r14 = "type"
			s10_4[r14] = "hls"
			r14 = "url"
			s10_4[r14] = r4
			s10_4["passthrough"] = !(!Boolean([]))
			r14 = "streamType"
			s10_4[r14] = r5
			if (r6)
			{
				r14 = "userAgent"
				s10_4[r14] = r6
			}
			else
			{
				delete "userAgent"[s10_4]
			}
			if (r7)
			{
				r14 = "referer"
				s10_4[r14] = r7
			}
			else
			{
				delete "referer"[s10_4]
			}
			delete "variants"[s10_4]
			delete "urlBackup"[s10_4]
			r14 = "name"
			s10_4[r14] = r2
		}
		else
		{
			r13 = {"id": null, "name": null, "type": null, "url": null, "onlineId": null, "passthrough": null, "streamType": null}
			r14 = s1_9["newId"]
			r16 = "src"
			r13["id"] = r14(r16)
			r13["name"] = r2
			r13["type"] = "hls"
			r13["url"] = r4
			r13["onlineId"] = s10_2["id"]
			r13["passthrough"] = !(!Boolean([]))
			r13["streamType"] = r5
			s10_4 = r13
			if (r6)
			{
				r14 = "userAgent"
				s10_4[r14] = r6
			}
			if (r7)
			{
				s10_4["referer"] = r7
			}
			while (true)
			{
				r13 = r1["sources"]["some"]
				if (!r13(func_unknown_0x100000015)) break
				r14 = "name"
				r15 = s10_4["name"]
				s10_4[r14] = (r15 + " ")
			}
			r14 = r1["sources"]
			r13 = r14["push"]
			accu = r13(s10_4)
		}
		accu = s10_2["cover"]
		if (!s10_2["cover"])
		{
			accu = ""
		}
		r8 = accu
		if (accu)
		{
			r14 = /^https?:\\/\\//
			r13 = r14["test"]
			if (r14["test"](r8))
			{
				r14 = func_downloadCover_0x100000008(r8)
				r13 = r0
				r13 = await r14
				r14 = _GeneratorGetResumeMode(r0)
				if (!r14 === 0)
				{
					accu = r13
				}
				r10 = r13
				if (r10)
				{
					r8 = r10
					accu = r8
				}
			}
		}
		r14 = r1["channels"]
		r13 = r14["find"]
		r9 = r13(func_unknown_0x100000016)
		if (!r13(func_unknown_0x100000016))
		{
			r13 = ctx10
			r14 = "oc_"
			r15 = s10_2["id"]["replace"]
			r17 = /[^a-zA-Z0-9_-]/
			s11_2 = (r14 + r15(r17, ""))
			s11_3 = s10_2["name"]
			while (true)
			{
				r15 = r1["channels"]
				r14 = r15["some"]
				if (!r14(func_unknown_0x100000017)) break
				s11_3 = (s11_3 + " ")
			}
			while (true)
			{
				if (!r1["channels"]["some"](func_unknown_0x100000018)) break
				s11_2 = (s11_2 + "_")
			}
			r14 = {"id": null, "onlineId": null, "chanId": null, "name": null, "sourceId": null, "category": null, "sort": null, "cover": null, "logoOverlay": "", "quality": null, "fps": <null, "autoStart": null, "enabled": null}
			r15 = s1_9["newId"]
			r14["id"] = r15("ch")
			r14["onlineId"] = s10_2["id"]
			r14["chanId"] = s11_2
			r14["name"] = s11_3
			r14["sourceId"] = s10_4["id"]
			accu = s10_2["category"]
			if (!s10_2["category"])
			{
				accu = ""
			}
			r14["category"] = accu
			r15 = r1["channels"]
			r14["sort"] = r15["length"]
			r14["cover"] = r8
			r14["quality"] = "copy"
			r14["autoStart"] = !Boolean([])
			r14["enabled"] = !(!Boolean([]))
			r9 = r14
			r15 = r1["channels"]
			r14 = r15["push"]
			accu = r14(r9)
		}
		else
		{
			r15 = "sourceId"
			r9[r15] = s10_4["id"]
			if (r8)
			{
				r15 = "cover"
				r9[r15] = r8
			}
			if (!r9["quality"])
			{
				r15 = "quality"
				r9[r15] = "copy"
			}
		}
		accu = s1_9["save"]()
		r13 = {"source": null, "channel": null}
		r13["source"] = s10_4
		r13["channel"] = r9
		r14 = r13
		r13 = r0
		accu = r14
		return r14
	}
	catch {}
	r13 = accu
	accu = null
	accu = ctx12
	r13 = ctx10
	r14 = r0
	return s12_2
}

function func_unknown_0x100000018(a0)
{
	let r0;
	r0 = a0["chanId"]
	return r0 === s11_2
}

function func_unknown_0x100000017(a0)
{
	let r0;
	r0 = a0["name"]
	return r0 === s11_3
}

function func_unknown_0x100000016(a0)
{
	return a0["onlineId"] === s10_2["id"]
}

function func_unknown_0x100000015(a0)
{
	let r0, accu;
	r0 = a0["name"]
	accu = r0 === s10_4["name"]
	if (r0 === s10_4["name"])
	{
		accu = !(a0["id"] === s10_4["id"])
	}
	return accu
}

function func_unknown_0x100000014(a0)
{
	return a0["onlineId"] === s10_2["id"]
}

function func_unknown_0x100000013(a0)
{
	let accu;
	accu = a0
	if (a0)
	{
		accu = a0["url"]
	}
	return accu
}

function async func_listAllowed_0x100000012()
{
	let r0, r2, r3, r4, r5, r6, r7, r8, accu;
	r4 = __closure
	r5 = this
	r0 = accu
	r4 = ctx1
	try
	{
		r5 = s1_9["get"]()
		r2 = r5["license"]
		if (!r5["license"]["key"])
		{
			r5 = Error
			r6 = "يجب تفعيل الاشتراك أولاً"
			accu = Error
			accu = Error(r6)
		}
		r6 = "/api/channels"
		r7 = {"key": null, "deviceId": null}
		r7["key"] = r2["key"]
		r8 = s1_10["deviceId"]
		r7["deviceId"] = r8()
		r6 = func_postJSON_0x100000011(r6, r7)
		r5 = r0
		r5 = await r6
		r6 = _GeneratorGetResumeMode(r0)
		if (!r6 === 0)
		{
			accu = r5
		}
		r3 = r5
		r5 = r5["status"]
		if (!r5 === 200)
		{
			if (r3["json"])
			r6 = r3["json"]
			accu = r6["message"]
				&& (r6["message"])
			{
				r6 = r3["json"]
				accu = r6["message"]
			}
			else
			{
				accu = "تعذر جلب القنوات"
			}
			r6 = accu
			accu = Error
			accu = Error(r6)
		}
		r5 = r3["json"]
		accu = r5["channels"]
		if (!r5["channels"])
		{
			accu = []
		}
		r6 = accu
		r5 = r0
		return r6
	}
	catch {}
	r5 = accu
	accu = null
	accu = ctx13
	r5 = ctx1
	r6 = r0
	return s13_2
}

function func_postJSON_0x100000011(a0, a1)
{
	let r0, accu;
	r0 = ctx1
	s14_3 = a0
	s14_2 = a1
	accu = Promise
	return Promise(func_unknown_0x100000010)
}

function func_unknown_0x100000010(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r3 = ctx14
	s15_3 = a0
	s15_2 = a1
	s15_4 = func_0x1663_0x100000001
	r5 = s1_10["LICENSE_SERVER"]["replace"]
	r7 = /\\/+$/
	r5 = r5(r7, "")
	r5 = (r5 + s14_3)
	accu = URL
	r0 = URL(r5)
	r4 = r0["protocol"]
	accu = r4 === "https:"
	if (r4 === "https:")
	{
		accu = s1_5
	}
	else
	{
		accu = s1_4
	}
	r1 = accu
	r4 = JSON["stringify"]
	r2 = r4(s14_2)
	r4 = r1["request"]
	r7 = {"method": "POST", "headers": null, "timeout": 12000}
	r8 = {"Content-Type": null, "Content-Length": null}
	r8["Content-Type"] = "application/json"
	r9 = Buffer["byteLength"]
	r8["Content-Length"] = r9(r2)
	r7["headers"] = r8
	r5 = r1
	r6 = r0
	s15_5 = r4(r6, r7, func_unknown_0x10000000d)
	r6 = "timeout"
	accu = s15_5["on"](r6, func_unknown_0x10000000e)
	r6 = "error"
	accu = s15_5["on"](r6, func_unknown_0x10000000f)
	accu = s15_5["end"](r2)
	return undefined
}

function func_unknown_0x10000000f(a0)
{
	let r1, r2, accu;
	r2 = "تعذر الاتصال بالخادم: "
	r2 = (r2 + a0["message"])
	accu = Error
	r1 = Error(r2)
	return s15_2(r1)
}

function func_unknown_0x10000000e()
{
	let r2, r3, accu;
	accu = s15_5["destroy"]()
	r3 = "انتهت مهلة الاتصال بالخادم"
	accu = Error
	r2 = Error(r3)
	accu = s15_2(r2)
	return undefined
}

function func_unknown_0x10000000d(a0)
{
	let r0, r3, accu;
	r0 = ctx15
	s16_2 = a0
	s16_3 = func_0x1663_0x100000001
	s16_4 = ""
	r3 = "data"
	accu = s16_2["on"](r3, func_unknown_0x10000000b)
	r3 = "end"
	accu = s16_2["on"](r3, func_unknown_0x10000000c)
	return undefined
}

function func_unknown_0x10000000c()
{
	let r1, r2, r3, r4, r6, accu;
	accu = func_0x1663_0x100000001
	r1 = ctx16
	try
	{
		r3 = {"status": null, "json": null}
		r3["status"] = s16_2["statusCode"]
		accu = s16_4
		if (!s16_4)
		{
			accu = "{}"
		}
		r6 = accu
		r3["json"] = JSON["parse"](r6)
		accu = s15_3(r3)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx17
		r2 = ctx16
		accu = Error
		r4 = Error("\\x631\\x62f \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d \\x645\\x646 \\x627\\x644\\x62e\\x627\\x62f\\x645")
		accu = s15_2(r4)
	}
	return undefined
}

function func_unknown_0x10000000b(a0)
{
	let accu;
	accu = s16_4
	s16_4 = (s16_4 + a0)
	return (s16_4 + a0)
}

function func_0x59f3_0x10000000a()
{
	let r0;
	r0 = ctx1
	s18_2 = ["ANnVBG", "ndbmsxDmsgS", "yNL0zuXLBMD0Aa", "uK9pva", "AgXZ", "2yRyRnIOinIQ2yhyUDMk2yqG2kFzHnIN2ltyQTIX2kFzGYdyO9Mi2ytyP9Ml", "C3rHDhvZq29Kzq", "C3rHDhvZ", "Ahr0Ca", "AM9PBG", "ouz5D2HSvG", "CMvZDw1L", "Agv4", "mw1hy1jhva", "y2f0zwDVCNK", "B2nF", "mtq0nJu3uMndDfnQ", "zMLUza", "CxvHBgL0Eq", "mZa4mdKYrhzvC2vi", "2kpzInMg2ytyP9Mk2yy6ia", "DxnLCKfNzw50", "z2v0", "C29Tzq", "DhjPBq", "BMv3swq", "B25SAw5Lswq", "C2v0", "y2HHBKLK", "y3jLyxrLsgfZAa", "Cgf0Ag5HBwu", "ChjVDg9JB2W", "zgf0yq", "D3jPDgvgAwXLu3LUyW", "C291CMnLswq", "otG1oduZmgLnDfnyDW", "DxjS", "DMfYAwfUDhm", "mZe1nduWmxjkC1P3AG", "tw96AwXSys81lJa", "Bwf0y2G", "BgvUz3rO", "y292zxjZ", "C3rYzwfTvhLWzq", "y3j5ChrV", "DgLTzw91Da", "CMvXDwvZDa", "C3j2l3vWBg9HzhmVy292zxjZlW", "C291CMnLCW", "zxH0BMfTzq", "AxnbCNjHEq", "2kRyUDIW2leG2kFzHnIN2kRyTDIN2yqG2kJyP9Me2k7yP9IV2yu6ia", "mZKWsePcrM9U", "mJe2nZyWntbzBe1HAwy", "Dg9mB3DLCKnHC2u", "Ahr0Chm", "DxbKyxrL", "BwvZC2fNzq", "C3jJ", "BMfTzq", "zw5K", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcdyQnIN2ytyRTIN2k/zHq", "ChvZAa", "DhLWzq", "Ahr0Chm6", "zxHPC3rZu3LUyW", "y292zxi", "C2f2zq", "yxbWBgLJyxrPB24VANnVBG", "CMvQzwn0vw5HDxrOB3jPEMvK", "l2fWAs9JAgfUBMvSCW", "lNbUzW", "C3j2", "CMvMzxjLCG", "zMLSDgvY", "zgvZDhjVEq", "nJq3mJy4DhrID3jz", "C3rYAw5NAwz5", "y29WEq", "mtK2odbQsfrvv1i", "BM93", "zxjYB3i", "BwfW", "zgLNzxn0", "CMvWBgfJzq", "A2v5", "BwTKAxjtEw5J", "y2HHBM5LBhm", "2kRyUDIW2leG2kZzHnIOinIN2ytzGTMg2yJyP9IQ", "zgv2AwnLswq"]
	s1_13 = func_0x59f3_0x100000009
	return s1_13()
}

function func_0x59f3_0x100000009()
{
	return s18_2
}

function func_downloadCover_0x100000008(a0)
{
	let r0, accu;
	r0 = ctx1
	s19_2 = a0
	accu = Promise
	return Promise(func_unknown_0x100000007)
}

function func_unknown_0x100000007(a0)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, accu;
	r5 = ctx19
	s20_2 = a0
	s20_3 = func_0x1663_0x100000001
	if (!s19_2)
	r7 = /^https?:\\/\\//
		|| (!r7["test"](s19_2))
	{
		return s20_2("")
	}
	accu = undefined
	r0 = undefined
	r6 = ctx20
	try
	{
		accu = URL
		accu = URL(s19_2)
		r0 = URL(s19_2)
	}
	catch
	{
		r7 = accu
		accu = null
		accu = ctx21
		r7 = ctx20
		return s20_2("")
	}
	r8 = s1_7["extname"]
	r10 = r0["pathname"]
	r8 = r8(r10)
	r7 = r8["match"]
	r9 = /\\.(png|jpg|jpeg|gif|webp)/
	accu = r7(r9)
	if (!r7(r9))
	{
		r8 = [0]
		r8[0] = ".png"
		accu = r8
	}
	r7 = accu
	r7 = r7[0]
	r6 = r7["toLowerCase"]
	r1 = r6()
	r9 = s1_8["createHash"]
	r9 = r9("md5")
	r8 = r9["update"]
	r8 = r8(s19_2)
	r7 = r8["digest"]
	r9 = "hex"
	r7 = r7(r9)
	r6 = r7["slice"](0, 16)
	r2 = (r6 + r1)
	s20_4 = s1_7["join"](s1_11, r2)
	r6 = "srv/uploads/covers/"
	s20_5 = (r6 + r2)
	r6 = s1_6["existsSync"]
	if (r6(s20_4))
	{
		return s20_2(s20_5)
	}
	r6 = r0["protocol"]
	accu = r6 === "https:"
	if (r6 === "https:")
	{
		accu = s1_5
	}
	else
	{
		accu = s1_4
	}
	r3 = accu
	r6 = {"timeout": 15000, "headers": null}
	r7 = {"User-Agent": null}
	r7["User-Agent"] = "Mozilla/5.0"
	r6["headers"] = r7
	r4 = r6
	if (r0["protocol"] === "https:")
	{
		r7 = "rejectUnauthorized"
		r4[r7] = !Boolean([])
	}
	r6 = r3["get"]
	r7 = r3
	r8 = r0
	r9 = r4
	s20_6 = r6(r8, r9, func_unknown_0x100000004)
	r8 = "timeout"
	accu = s20_6["on"](r8, func_unknown_0x100000005)
	r8 = "error"
	accu = s20_6["on"](r8, func_unknown_0x100000006)
	return undefined
}

function func_unknown_0x100000006()
{
	return s20_2("")
}

function func_unknown_0x100000005()
{
	let r1, accu;
	r1 = s20_6["destroy"]
	accu = r1()
	accu = s20_2("")
	return undefined
}

function func_unknown_0x100000004(a0)
{
	let r0, r1, r3, accu;
	r0 = ctx20
	s22_2 = func_0x1663_0x100000001
	r1 = a0["statusCode"]
	if (!r1 === 200)
	{
		r1 = a0["resume"]
		accu = r1()
		return s20_2("")
	}
	s22_3 = []
	s22_4 = 0
	r3 = "data"
	accu = a0["on"](r3, func_unknown_0x100000002)
	accu = a0["on"]("end", func_unknown_0x100000003)
	return undefined
}

function func_unknown_0x100000003()
{
	let r1, r2, r5, accu;
	accu = func_0x1663_0x100000001
	r1 = ctx22
	try
	{
		r2 = s1_6["writeFileSync"]
		r5 = Buffer["concat"](s22_3)
		accu = r2(s20_4, r5)
		accu = s20_2(s20_5)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx23
		r2 = ctx22
		accu = s20_2("")
	}
	return undefined
}

function func_unknown_0x100000002(a0)
{
	let r1, accu;
	accu = 0
	s22_4 = (0 + a0["length"])
	if (0 > 5242880)
	{
		r1 = s20_6["destroy"]
		accu = r1()
		accu = s20_2("")
	}
	else
	{
		r1 = s22_3["push"]
		accu = r1(a0)
	}
	return undefined
}

function func_0x1663_0x100000001(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 120)
	r0 = s1_13()
	r1 = r0[a0]
	if (s1_3["pHKGPf"] == undefined)
	{
		s1_3["jThvzn"] = func_0x288516_0x100000000
		s1_3["TwGxDh"] = {}
		s1_3["pHKGPf"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_3["TwGxDh"][r4])
	{
		r1 = s1_3["jThvzn"](r1)
		s1_3["TwGxDh"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_3["TwGxDh"][r4]
	}
	return r1
}

function func_0x288516_0x100000000(a0)
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
	let r2, r3, r4, r5, r6, r7, r8, accu;
	r2 = ctx0
	s1_3 = func_0x1663_0x100000001
	s1_12 = func_downloadCover_0x100000008
	s1_13 = func_0x59f3_0x10000000a
	s1_14 = func_postJSON_0x100000011
	s1_15 = func_listAllowed_0x100000012
	s1_2 = func_0x1663_0x100000001
	accu = func_unknown_0x100000022(s1_13, 529254)
	r4 = "http"
	s1_4 = require(r4)
	r4 = "https"
	s1_5 = require(r4)
	s1_6 = require("fs")
	s1_7 = require("path")
	r4 = "crypto"
	s1_8 = require(r4)
	s1_9 = require("./store")
	s1_10 = require("./license")
	r3 = s1_7["join"]
	r5 = s1_9["ROOT"]
	r6 = "srv"
	r8 = "covers"
	accu = r3(r5, r6, "uploads", r8)
	s1_11 = r3(r5, r6, "uploads", r8)
	r3 = ctx1
	try
	{
		r4 = s1_6["mkdirSync"]
		r7 = {"recursive": null}
		r7["recursive"] = !(!Boolean([]))
		accu = r4(s1_11, r7)
	}
	catch
	{
		r4 = accu
		accu = null
		accu = ctx2
		r4 = ctx1
	}
	s1_16 = 0
	r4 = {"listAllowed": null, "importChannel": null, "downloadCover": null, "refreshImportedUrls": null}
	r4["listAllowed"] = func_listAllowed_0x100000012
	r4["importChannel"] = func_importChannel_0x100000019
	r4["downloadCover"] = func_downloadCover_0x100000008
	r4["refreshImportedUrls"] = func_refreshImportedUrls_0x100000021
	module["exports"] = r4
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
