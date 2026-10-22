// Recovered module: src/license.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (16265 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14, s1_15, s1_16, s1_17, s1_18, s1_19, s1_20, s1_21, s1_22, s1_23, s1_24, s1_25;
let s4_2;
let s6_2;
let s13_2;
let s14_2;
let s15_2;
let s17_2;
let s18_2;
let s19_2;
let s20_2, s20_3;
let s21_2, s21_3, s21_4, s21_5;
let s22_2, s22_3, s22_4;
let s25_2;
let s26_2;
let ctx0, ctx1, ctx2, ctx3, ctx4, ctx5, ctx6, ctx7, ctx8, ctx9, ctx10, ctx11, ctx12, ctx13, ctx15, ctx16, ctx17, ctx18, ctx19, ctx20, ctx21, ctx22, ctx23, ctx24, ctx26, ctx27, ctx28, ctx29, ctx30, ctx31;
let __closure;  // View8's <closure>: only ever pushed, never read

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x10000001f(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x1886_0x100000015
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(241)
			r4 = (parseInt(r5) / 1)
			r6 = r0(307)
			r4 = (r4 * ((-parseInt(r6)) / 2))
			r6 = r0(234)
			r4 = (r4 + ((-parseInt(r6)) / 3))
			r6 = r0(263)
			r4 = (r4 + (parseInt(r6) / 4))
			r6 = r0(294)
			r4 = (r4 + ((-parseInt(r6)) / 5))
			r6 = r0(312)
			r4 = (r4 + (parseInt(r6) / 6))
			r6 = r0(250)
			r5 = (parseInt(r6) / 7)
			r7 = r0(230)
			r4 = (r4 + (r5 * (parseInt(r7) / 8)))
			r6 = r0(268)
			r5 = (parseInt(r6) / 9)
			r7 = r0(309)
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

function async func_reportSetup_0x10000001e(a0)
{
	let r0, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r4 = __closure
	r5 = this
	r0 = accu
	r4 = ctx1
	try
	{
		r6 = s1_8
		r5 = s1_8["get"]
		accu = r5()
		r2 = r5()
		r5 = ctx1
		try
		{
			r7 = "/api/client-info"
			r8 = {"deviceId": null, "key": null, "ownerName": null, "networkName": null, "phone": null, "city": null}
			r8["deviceId"] = func_deviceId_0x100000004()
			accu = r2["license"]
			if (r2["license"])
			{
				accu = r2["license"]["key"]
			}
			if (!accu)
			{
				accu = ""
			}
			r8["key"] = accu
			accu = a0["ownerName"]
			if (!a0["ownerName"])
			{
				accu = ""
			}
			r11 = accu
			r10 = String(r11)
			r8["ownerName"] = r10["slice"](0, 100)
			accu = a0["networkName"]
			if (!a0["networkName"])
			{
				accu = ""
			}
			r11 = accu
			r10 = String(r11)
			r9 = r10["slice"]
			r8["networkName"] = r9(0, 100)
			accu = a0["phone"]
			if (!a0["phone"])
			{
				accu = ""
			}
			r11 = accu
			r10 = String(r11)
			r9 = r10["slice"]
			r8["phone"] = r9(0, 40)
			accu = a0["city"]
			if (!a0["city"])
			{
				accu = ""
			}
			r11 = accu
			r10 = String(r11)
			r9 = r10["slice"]
			r8["city"] = r9(0, 80)
			r7 = func_postJSON_0x10000000c(r7, r8)
			r6 = r0
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r0)
			if (!r7 === 0)
			{
				accu = r6
			}
			r3 = r6
			accu = r3
			if (r3)
			{
				r6 = r3["status"]
				accu = r6 === 200
			}
			r7 = accu
			r6 = r0
			accu = r7
			return r7
		}
		catch {}
		r6 = accu
		accu = null
		accu = ctx3
		r6 = ctx1
		r8 = !Boolean([])
		r7 = r0
		return r8
	}
	catch {}
	r5 = accu
	accu = null
	accu = ctx4
	r5 = ctx1
	r6 = r0
	return s4_2
}

function func_startRevalidationLoop_0x10000001d()
{
	let r0, accu;
	accu = setTimeout(func_revalidate_0x100000013, 2000)
	accu = setInterval(func_revalidate_0x100000013, 21600000)
	if (s1_25)
	{
		accu = clearInterval(s1_25)
	}
	r0 = setInterval(func_unknown_0x10000001c, 60000)
	accu = s1_25
	s1_25 = r0
	return undefined
}

function async func_unknown_0x10000001c()
{
	let r1, r2, r3, r4, r5, r6, r7, accu;
	r4 = __closure
	r5 = this
	r2 = accu
	r4 = ctx1
	try
	{
		r6 = s1_8
		r5 = s1_8["get"]
		r1 = r5()
		if (r1["license"]["key"])
		r5 = r1["license"]
		accu = r5["token"]
			|| (r5["token"])
		{
			accu = clearInterval(s1_25)
			accu = s1_25
			r6 = undefined
			r5 = r2
			accu = r6
			return r6
		}
		r5 = ctx1
		try
		{
			r7 = func_tryTrial_0x10000000e()
			r6 = r2
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r2)
			if (!r7 === 0)
			{
				accu = r6
			}
			r3 = r6
			accu = r6["ok"]
			if (!r6["ok"])
			{
				accu = r3["trialEnded"]
			}
			if (accu)
			{
				accu = clearInterval(s1_25)
				accu = s1_25
			}
		}
		catch
		{
			r6 = accu
			accu = null
			accu = ctx5
			r6 = ctx1
		}
		r6 = undefined
		r5 = r2
		return r6
	}
	catch {}
	r5 = accu
	accu = null
	accu = ctx6
	r5 = ctx1
	r6 = r2
	return s6_2
}

function func_getContact_0x10000001b()
{
	return s1_12
}

function func_getMessages_0x10000001a()
{
	return s1_11
}

function func_getUpdateInfo_0x100000019()
{
	return s1_10
}

function func_status_0x100000018()
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r10, accu;
	r5 = s1_8["get"]
	r5 = r5()
	r1 = r5["license"]
	accu = r1["token"]
	if (r1["token"])
	{
		r6 = r1["token"]
		accu = func_verifyToken_0x100000005(r6)
	}
	else
	{
		accu = null
	}
	r2 = accu
	if (accu)
	{
		accu = r2["expiresAt"]
	}
	else
	{
		accu = null
	}
	r3 = accu
	if (accu)
	{
		r8 = Math["ceil"]
		r10 = ((r3 - Date["now"]()) / 86400000)
		r8 = r8(r10)
		accu = Math["max"](0, r8)
	}
	else
	{
		accu = null
	}
	r4 = accu
	r5 = {"activated": null, "valid": null, "isTrial": null, "daysLeft": null, "deviceId": null, "key": null, "expiresAt": null, "lastCheck": null}
	r5["activated"] = !(!Boolean(r2))
	r5["valid"] = func_isValid_0x100000016()
	r5["isTrial"] = !(!Boolean(r1["isTrial"]))
	r5["daysLeft"] = r4
	r5["deviceId"] = func_deviceId_0x100000004()
	accu = r1["key"]
	if (r1["key"])
	{
		r7 = r1["key"]
		r6 = r7["slice"]
		r6 = r6(0, 4)
		accu = (r6 + "****")
	}
	else
	{
		accu = null
	}
	r5["key"] = accu
	r5["expiresAt"] = r3
	r5["lastCheck"] = r1["lastCheck"]
	return r5
}

function func_streamAuth_0x100000017()
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, accu;
	r5 = s1_8["get"]
	r5 = r5()
	r1 = r5["license"]
	if (!r5["license"]["token"])
	{
		return null
	}
	r6 = String(r5["license"]["token"])
	r2 = r6["split"](".")
	r3 = func_verifyToken_0x100000005(r1["token"])
	if (!func_verifyToken_0x100000005(r1["token"]))
	{
		return null
	}
	r5 = r3["expiresAt"]
	accu = r1["graceDays"]
	if (!r1["graceDays"])
	{
		accu = 0
	}
	r4 = (r5 + (((accu * 24) * 3600) * 1000))
	r5 = Date["now"]
	r5 = r5()
	accu = r5 > r4
	if (r5 > r4)
	{
		accu = null
		return null
	}
	r5 = ctx1
	try
	{
		r10 = s1_5["createHash"]
		r10 = r10("sha256")
		r9 = r10["update"]
		accu = r2[1]
		if (!r2[1])
		{
			accu = ""
		}
		r11 = accu
		r9 = r9(r11)
		r8 = r9["update"]
		r10 = func_deviceId_0x100000004()
		r8 = r8(r10)
		r9 = "hex"
		r7 = r8["digest"](r9)
		r6 = r7["slice"]
		accu = r6(0, 12)
		return r6(0, 12)
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx7
	r6 = ctx1
	return null
}

function func_isValid_0x100000016()
{
	let r1, r2, r3, r4, r5, accu;
	r4 = s1_8["get"]
	r4 = r4()
	r1 = r4["license"]
	if (!r1["token"])
	{
		return !Boolean([])
	}
	r2 = func_verifyToken_0x100000005(r1["token"])
	if (!func_verifyToken_0x100000005(r1["token"]))
	{
		return !Boolean([])
	}
	r4 = Date["now"]
	r4 = r4()
	if (r4 <= r2["expiresAt"])
	{
		return !(!Boolean([]))
	}
	accu = r1["graceDays"]
	if (!r1["graceDays"])
	{
		accu = 0
	}
	r3 = (((accu * 24) * 3600) * 1000)
	r4 = Date["now"]
	r4 = r4()
	r5 = r2["expiresAt"]
	return r4 <= (r5 + r3)
}

function func_0x1886_0x100000015(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 229)
	r0 = s1_20()
	r1 = r0[a0]
	if (s1_22["ckESrh"] == undefined)
	{
		s1_22["BRAeKm"] = func_0x1ad9fe_0x100000014
		s1_22["WGMAXo"] = {}
		s1_22["ckESrh"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_22["WGMAXo"][r4])
	{
		r1 = s1_22["BRAeKm"](r1)
		s1_22["WGMAXo"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_22["WGMAXo"][r4]
	}
	return r1
}

function func_0x1ad9fe_0x100000014(a0)
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

function async func_revalidate_0x100000013()
{
	let r0, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, accu;
	r8 = __closure
	r9 = this
	r0 = accu
	r8 = ctx1
	try
	{
		r10 = s1_8
		r2 = s1_8["get"]()
		r11 = 297
		r9 = r2["license"]
		accu = r9["key"]
		if (!r9["key"])
		{
			r9 = ctx1
			try
			{
				r11 = func_tryTrial_0x10000000e()
				r10 = r0
				r10 = await r11
				r11 = _GeneratorGetResumeMode(r0)
				if (!r11 === 0)
				{
					accu = r10
				}
				accu = r10
			}
			catch
			{
				r10 = accu
				accu = null
				accu = ctx8
				r10 = ctx1
			}
			r10 = undefined
			r9 = r0
			accu = r10
			return r10
		}
		r9 = ctx1
		try
		{
			r11 = "/api/validate"
			r12 = {"key": null, "deviceId": null}
			r13 = r2["license"]
			r12["key"] = r13["key"]
			r12["deviceId"] = func_deviceId_0x100000004()
			r11 = func_postJSON_0x10000000c(r11, r12)
			r10 = r0
			r10 = await r11
			r11 = _GeneratorGetResumeMode(r0)
			if (!r11 === 0)
			{
				accu = r10
			}
			r3 = r10
			r10 = r10["status"]
			if (r10 === 200)
				&& (r3["json"]["token"])
			{
				r11 = r3["json"]
				r11 = r11["token"]
				r7 = func_verifyToken_0x100000005(r11["token"])
				if (func_verifyToken_0x100000005(r11["token"]))
				{
					r10 = r2["license"]
					r11 = "token"
					r10[r11] = r3["json"]["token"]
					r10 = r2["license"]
					r11 = "expiresAt"
					r12 = r7["expiresAt"]
					r10[r11] = r7["expiresAt"]
					accu = r12
				}
				if (r3["json"]["update"])
				{
					r10 = r3["json"]
					r10 = r10["update"]
					accu = s1_10
					s1_10 = r10
				}
				r10 = r3["json"]
				if (r10["messages"])
				{
					r10 = r3["json"]
					accu = s1_11
					s1_11 = r10["messages"]
				}
				r10 = r3["json"]
				if (r10["contact"])
				{
					r10 = r3["json"]
					r10 = r10["contact"]
					accu = s1_12
					s1_12 = r10
				}
			}
			else
			{
				if (r3["status"] === 403)
				{
					r4 = !Boolean([])
					r10 = r2["license"]
					accu = r10["token"]
					if (r10["token"])
					{
						r10 = ctx1
						try
						{
							r12 = "/api/activate"
							r13 = {"key": null, "deviceId": null, "oldToken": null}
							r14 = r2["license"]
							r13["key"] = r14["key"]
							r13["deviceId"] = func_deviceId_0x100000004()
							r14 = r2["license"]
							r13["oldToken"] = r14["token"]
							r12 = func_postJSON_0x10000000c(r12, r13)
							r11 = r0
							r11 = await r12
							r12 = _GeneratorGetResumeMode(r0)
							if (!r12 === 0)
							{
								accu = r11
							}
							r5 = r11
							r11 = r11["status"]
							accu = r11 === 200
							if (r11 === 200)
							{
								if (r5["json"]["token"])
								{
									r12 = r5["json"]["token"]
									r6 = func_verifyToken_0x100000005(r12)
									if (func_verifyToken_0x100000005(r12))
									{
										r11 = r2["license"]
										r11["token"] = r5["json"]["token"]
										r11 = r2["license"]
										r12 = "expiresAt"
										r11[r12] = r6["expiresAt"]
										r4 = !(!Boolean([]))
										r13 = "تم تحديث بصمة الجهاز بنجاح (انتقhل صيغة)."
										accu = console["log"](r13)
									}
								}
							}
						}
						catch
						{
							r11 = accu
							accu = null
							accu = ctx9
							r11 = ctx1
						}
					}
					if (!r4)
					{
						r10 = r2["license"]
						r10["token"] = null
						r11 = Date["now"]
						accu = (r11() - 1)
						r2["license"]["expiresAt"] = (r11() - 1)
						r10 = ctx1
						try
						{
							r12 = s1_2("./ffmpeg")
							accu = r12["stopAll"]()
						}
						catch
						{
							r11 = accu
							accu = null
							accu = ctx10
							r11 = ctx1
						}
						r10 = r2["license"]
						if (r10["isTrial"])
						{
							r10 = r2["license"]
							r11 = "key"
							r10[r11] = ""
							r11 = s1_8
							accu = s1_8["save"]()
							r10 = ctx1
							try
							{
								r12 = func_tryTrial_0x10000000e()
								r11 = r0
								r11 = await r12
								r12 = _GeneratorGetResumeMode(r0)
								if (!r12 === 0)
								{
									accu = r11
								}
								accu = r11
							}
							catch
							{
								r11 = accu
								accu = null
								accu = ctx11
								r11 = ctx1
							}
						}
					}
				}
			}
			r10 = r2["license"]
			r11 = "lastCheck"
			r12 = Date["now"]
			r10[r11] = r12()
			accu = s1_8["save"]()
		}
		catch
		{
			r10 = accu
			accu = null
			accu = ctx12
			r10 = ctx1
		}
		r10 = undefined
		r9 = r0
		return r10
	}
	catch {}
	r9 = accu
	accu = null
	accu = ctx13
	r9 = ctx1
	r10 = r0
	return s13_2
}

function func_0x311f_0x100000012()
{
	let r0;
	r0 = ctx1
	s14_2 = ["mJm1mZG0ngToqu5KCa", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0ktuzRD0v3wuHlB1PjEMOWq0frwuLlB1PjEMOWrefry0rrz0ffk3rltLveAuzZEwLwENOZvxzYrgHjmI9xtuTkCqPWtvDbk21YDenoweKYBgHmCNr4BJDLuwHAz28Rue5NqNHQAMfVn3HKtgnbCNrsu1j1wxfdmg1zAfjrpt0kls0Tls1ftKqGufvcteLdieTfws0Tls0T", "C2XPy2u", "zw5K", "CgXHDgzVCM0", "mZuWmZe3oerct0LWEG", "l2fWAs9JBgLLBNqTAw5MBW", "Dg9tDhjPBMC", "C2f2zq", "B3DUzxjoyw1L", "C3rHDhvZq29Kzq", "BM93", "2kRzInMc2yRyUsdyQTIS2lhzITIO2yOG2lRzITIXinI12kFzHnIT", "BMv0D29YA05HBwu", "zgLNzxn0", "BwvZC2fNzxm", "C3bSAxq", "qu1bqu5Frevwsunfx0Hx", "Ahr0Chm", "zMLSDgvY", "y29UDgfJDa", "BwvZC2fNzq", "2lhyRYdyUTMk2leG2lxyP9Me2k0G2yxzHIdyRTIN2k/zHsdyP9Me2kRzGDI52yRzHa", "yMfZzty0DxjS", "zw52", "2lRzITIXinMf2kRyP9IT", "y3jLyxrLsgfZAa", "y3j5ChrV", "DxrMoa", "ue9tva", "2kRzHsdyQTIT2k/zITIRinIO2lxzHDIPinIN2ytyRnMh2kFySIdyQnMg2kZyP9ITicJyP9Mg2kRzGMJzHcdyTDMk2lRyQsKU", "mtiYnty2mgjoBMTttW", "y2L0Eq", "l2fWAs90CMLHBa", "BgLJzw5Zzq", "zxjYB3i", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcdyQnIU2kFyR9MfinIN2ytyQTMb2lNzITMe", "Agv4", "ANnVBG", "Bg9N", "DgvZDa", "Ahr0Chm6", "2kRyUDIW2leG2kFzHnIN2kRyTDIN2yqG2kJyRTIN2k/zHsdyP9Me2kRzGDI52yRzHdOG", "Ahr0Ca", "mMXpwhjiwG", "AM9PBG", "ndbtzefjzNK", "A2v5", "CgfYC2u", "mJe2nZuWmen4Chr2Aq", "DhjPBq", "2kRzHsdyQTMb2lNzITMeinIN2ytzGDIQ2lhyQsdyP9Me2kRyRnIX2yRyQnMk2kKGkdCG2kpzITIN2yuPlG", "2kRyUDIW2zhySsdyP9Me2kFyQTI12kFzHcdyQnIU2kFyR9MfinIN2ytyQTIX2k7zITI1inMe2ytyQTIS2lhyQnIPicJzHDIT2kFzInMe2kKG", "CgHVBMu", "zxHWAxjLC0f0", "DxbKyxrL", "Bw9KzwW", "C2HHmJu2", "ogP3tePIwa", "z2v0", "BgfZDenOzwnR", "l2fWAs92ywXPzgf0zq", "mJy2odmXmufzD2vqva", "y2vPBa", "C3rHDhvZ", "Ag9ZDg5HBwu", "zNjVBq", "Bwf0y2G", "Dg90ywXTzw0", "otG2mJqXtwPMvKfQ", "yxjJAa", "DgLTzw91Da", "Dg9Rzw4", "l2fWAs9Hy3rPDMf0zq", "BwfW", "zgv2AwnLswq", "D21PyYbJC3bYB2r1y3qGz2v0ifvvsuq", "CMvWBgfJzq", "mtiXody1mw9PChLMwa", "DMvYAwz5", "yNL0zuXLBMD0Aa", "AxnuCMLHBa", "CMvHzezPBgvtEw5J", "zgvZDhjVEq", "l2v0yY9TywnOAw5LlwLK", "kIOQkG", "yxbWBgLJyxrPB24VANnVBG", "DhjPywXfBMrLza", "zgf0yq", "CMvNihf1zxj5icjis0XnxfnprLrxqvjfxe1Py3jVC29MDfXdCNLWDg9NCMfWAhKIic92ie1Hy2HPBMvhDwLK", "z3jHy2veyxLZ"]
	s1_20 = func_0x311f_0x100000011
	return s1_20()
}

function func_0x311f_0x100000011()
{
	return s14_2
}

function async func_ensureTrial_0x100000010()
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, accu;
	r8 = __closure
	r9 = this
	r0 = accu
	r8 = ctx1
	try
	{
		r1 = func_0x1886_0x100000015
		r9 = s1_8["get"]
		r2 = r9()
		r9 = r2["license"]
		if (r9["token"])
		r11 = 310
			|| (r2["license"]["key"])
		{
			r10 = undefined
			r9 = r0
			return r10
		}
		r6 = 1
		{
			accu = PushContext("Block")
			r9 = ctx1
			s15_2 = 1
			if (1 == 1)
			{
				r4 = 0
			}
			else
			{
				s15_2 = (1 + 1)
			}
			r5 = 1
			if (1 <= 5)
			{
				break
			}
			while (true)
			{
				accu = r5 == 1
				if (!r5 == 1) break
				r10 = ctx15
				try
				{
					r12 = func_tryTrial_0x10000000e()
					r11 = r0
					r11 = await r12
					r12 = _GeneratorGetResumeMode(r0)
					if (!r12 === 0)
					{
						accu = r11
					}
					r7 = r11
					if (r11["ok"])
					{
						r11 = console[r1(302)]
						r13 = r1(314)
						accu = r11(r13)
						r12 = undefined
						r11 = r0
						return r12
					}
					if (r7["trialEnded"])
					{
						accu = console["log"]("\\x627\\x644\\x62a\\x62c\\x631\\x628\\x629 \\x645\\x633\\x62a\\x647\\x644\\x64e\\x643\\x629 \\x644\\x647\\x630\\x627 \\x627\\x644\\x62c\\x647\\x627\\x632 \\x2014 \\x64a\\x644\\x632\\x645 \\x62a\\x631\\x62e\\x64a\\x635.")
						r12 = undefined
						r11 = r0
						return r12
					}
					accu = r7[r1(284)]
					if (!r7[r1(284)])
					{
						accu = r1(288)
					}
					accu = console["log"](((("\\x62a\\x639\\x630\\x651\\x631 \\x628\\x62f\\x621 \\x627\\x644\\x62a\\x62c\\x631\\x628\\x629 (\\x645\\x62d\\x627\\x648\\x644\\x629 " + 1) + "/5): ") + accu))
				}
				catch
				{
					r11 = accu
					accu = null
					accu = ctx16
					r11 = ctx15
					r12 = console[r1(302)]
					r14 = r1(315)
					r14 = (r14 + 1)
					r14 = (r14 + "/5) \\x2014 \\x625\\x639\\x627\\x62f\\x629.")
					accu = r12(r14)
				}
				accu = Promise
				r11 = Promise(func_unknown_0x10000000f)
				r10 = r0
				r10 = await r11
				r11 = _GeneratorGetResumeMode(r0)
				if (r11 === 0) continue
				accu = r10
				r5 = 0
				r3 = 1
			}
			if (!r5 == 1) continue
			break
		}
		r10 = undefined
		r9 = r0
		return r10
	}
	catch {}
	r9 = accu
	accu = null
	accu = ctx17
	r9 = ctx1
	r10 = r0
	return s17_2
}

function func_unknown_0x10000000f(a0)
{
	return setTimeout(a0, (1 * 3000))
}

function async func_tryTrial_0x10000000e()
{
	let r0, r2, r3, r4, r5, r6, r7, r8, accu;
	r5 = __closure
	r6 = this
	r0 = accu
	r5 = ctx1
	try
	{
		r6 = s1_8["get"]
		r2 = r6()
		r7 = "/api/trial"
		r8 = {"deviceId": null}
		r8["deviceId"] = func_deviceId_0x100000004()
		r7 = func_postJSON_0x10000000c(r7, r8)
		r6 = r0
		r6 = await r7
		r7 = _GeneratorGetResumeMode(r0)
		if (!r7 === 0)
		{
			accu = r6
		}
		r3 = r6
		if (!r6["status"] === 200)
		r6 = r3["json"]
			|| (!r6["token"])
		{
			r6 = {"ok": null, "trialEnded": null, "message": null}
			r6["ok"] = !Boolean([])
			accu = r3["json"]
			if (r3["json"])
			{
				r7 = r3["json"]
				accu = r7["trialEnded"]
			}
			r6["trialEnded"] = !(!Boolean(accu))
			accu = r3["json"]
			if (r3["json"])
			{
				r7 = r3["json"]
				accu = r7["message"]
			}
			r6["message"] = accu
			r7 = r6
			r6 = r0
			return r7
		}
		r7 = r3["json"]
		r7 = r7["token"]
		r4 = func_verifyToken_0x100000005(r7)
		if (!func_verifyToken_0x100000005(r7))
		{
			r6 = {"ok": null, "message": null}
			r6["ok"] = !Boolean([])
			r6["message"] = "توقيع تجريبي غير صالح"
			r7 = r6
			r6 = r0
			return r7
		}
		r6 = r2["license"]
		r7 = "key"
		r8 = r3["json"]
		r6[r7] = r8["key"]
		r7 = "token"
		r2["license"][r7] = r3["json"]["token"]
		r6 = r2["license"]
		r7 = "expiresAt"
		r6[r7] = r4["expiresAt"]
		r6 = r2["license"]
		r6["lastCheck"] = Date["now"]()
		r6 = r2["license"]
		r6["isTrial"] = !(!Boolean([]))
		accu = s1_8["save"]()
		r6 = r3["json"]
		if (r6["update"])
		{
			r6 = r3["json"]
			r6 = r6["update"]
			accu = s1_10
			s1_10 = r6
		}
		r6 = r3["json"]
		if (r6["messages"])
		{
			r6 = r3["json"]["messages"]
			accu = s1_11
			s1_11 = r6
		}
		r6 = r3["json"]
		if (r6["contact"])
		{
			accu = s1_12
			s1_12 = r3["json"]["contact"]
		}
		r6 = {"ok": null, "trial": null}
		r6["ok"] = !(!Boolean([]))
		r6["trial"] = !(!Boolean([]))
		r7 = r6
		r6 = r0
		return r7
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx18
	r6 = ctx1
	r7 = r0
	return s18_2
}

function async func_activate_0x10000000d(a0)
{
	let r0, r2, r3, r4, r5, r6, r7, r8, accu;
	r5 = __closure
	r6 = this
	r0 = accu
	r5 = ctx1
	try
	{
		r6 = s1_8["get"]
		r2 = r6()
		r7 = "/api/activate"
		r8 = {"key": null, "deviceId": null}
		r8["key"] = a0
		r8["deviceId"] = func_deviceId_0x100000004()
		r7 = func_postJSON_0x10000000c(r7, r8)
		r6 = r0
		r6 = await r7
		r7 = _GeneratorGetResumeMode(r0)
		if (!r7 === 0)
		{
			accu = r6
		}
		r3 = r6
		if (!r6["status"] === 200)
		r6 = r3["json"]
			|| (!r6["token"])
		{
			if (r3["json"])
			accu = r3["json"]["message"]
				&& (r3["json"]["message"])
			{
				r7 = r3["json"]
				accu = r7["message"]
			}
			else
			{
				accu = "\\x641\\x634\\x644 \\x627\\x644\\x62a\\x641\\x639\\x64a\\x644"
			}
			r7 = accu
			accu = Error
			accu = Error(r7)
		}
		r7 = r3["json"]
		r7 = r7["token"]
		r4 = func_verifyToken_0x100000005(r7)
		if (!func_verifyToken_0x100000005(r7))
		{
			accu = Error
			accu = Error("\\x62a\\x648\\x642\\x64a\\x639 \\x627\\x644\\x62a\\x631\\x62e\\x64a\\x635 \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d \\x644\\x647\\x630\\x627 \\x627\\x644\\x62c\\x647\\x627\\x632")
		}
		r6 = r2["license"]
		r7 = "key"
		r6[r7] = a0
		r6 = r2["license"]
		r7 = "token"
		r8 = r3["json"]
		r6[r7] = r8["token"]
		r6 = r2["license"]
		r7 = "expiresAt"
		r6[r7] = r4["expiresAt"]
		r6 = r2["license"]
		r7 = "lastCheck"
		r8 = Date["now"]
		r6[r7] = r8()
		r6 = r2["license"]
		r6["isTrial"] = !Boolean([])
		r6 = s1_8["save"]
		accu = r6()
		r6 = r3["json"]
		if (r6["update"])
		{
			r6 = r3["json"]
			r6 = r6["update"]
			accu = s1_10
			s1_10 = r6
		}
		r6 = r3["json"]
		if (r6["messages"])
		{
			r6 = r3["json"]
			r6 = r6["messages"]
			accu = s1_11
			s1_11 = r6
		}
		if (r3["json"]["contact"])
		{
			r6 = r3["json"]
			accu = s1_12
			s1_12 = r6["contact"]
		}
		r7 = func_status_0x100000018()
		r6 = r0
		return r7
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx19
	r6 = ctx1
	r7 = r0
	return s19_2
}

function func_postJSON_0x10000000c(a0, a1)
{
	let r0, accu;
	r0 = ctx1
	s20_3 = a0
	s20_2 = a1
	accu = Promise
	return Promise(func_unknown_0x10000000b)
}

function func_unknown_0x10000000b(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, accu;
	r3 = ctx20
	s21_3 = a0
	s21_2 = a1
	s21_4 = func_0x1886_0x100000015
	r5 = s1_9["replace"]
	r7 = /\\/+$/
	r5 = r5(r7, "")
	r5 = (r5 + s20_3)
	accu = URL
	r0 = URL(r5)
	accu = r0["protocol"] === "https:"
	if (r0["protocol"] === "https:")
	{
		accu = s1_7
	}
	else
	{
		accu = s1_6
	}
	r1 = accu
	r2 = JSON["stringify"](s20_2)
	r7 = {"method": null, "headers": null, "timeout": 12000}
	r7["method"] = "POST"
	r8 = {"Content-Type": null, "Content-Length": null}
	r8["Content-Type"] = "application/json"
	r9 = Buffer["byteLength"]
	r8["Content-Length"] = r9(r2)
	r7["headers"] = r8
	r5 = r1
	r6 = r0
	s21_5 = r1["request"](r6, r7, func_unknown_0x100000008)
	r6 = "timeout"
	accu = s21_5["on"](r6, func_unknown_0x100000009)
	r6 = "error"
	accu = s21_5["on"](r6, func_unknown_0x10000000a)
	r4 = s21_5["end"]
	accu = r4(r2)
	return undefined
}

function func_unknown_0x10000000a(a0)
{
	let r1, r2, accu;
	r2 = "تعذر الاتصال بخادم التفعيل: "
	r2 = (r2 + a0["message"])
	accu = Error
	r1 = Error(r2)
	return s21_2(r1)
}

function func_unknown_0x100000009()
{
	let r1, r2, r3, accu;
	r1 = s21_5["destroy"]
	accu = r1()
	r3 = "انتهت مهلة الاتصال بخادم التفعيل"
	accu = Error
	r2 = Error(r3)
	accu = s21_2(r2)
	return undefined
}

function func_unknown_0x100000008(a0)
{
	let r0, r3, accu;
	r0 = ctx21
	s22_2 = a0
	s22_3 = func_0x1886_0x100000015
	s22_4 = ""
	r3 = "data"
	accu = s22_2["on"](r3, func_unknown_0x100000006)
	r3 = "end"
	accu = s22_2["on"](r3, func_unknown_0x100000007)
	return undefined
}

function func_unknown_0x100000007()
{
	let r1, r2, r3, r4, r5, r6, accu;
	accu = func_0x1886_0x100000015
	r1 = ctx22
	try
	{
		r3 = {"status": null, "json": null}
		r3["status"] = s22_2["statusCode"]
		r4 = JSON["parse"]
		accu = s22_4
		if (!s22_4)
		{
			accu = "{}"
		}
		r6 = accu
		r3["json"] = r4(r6)
		accu = s21_3(r3)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx23
		r2 = ctx22
		r5 = "رد غير صالح من خادم التفعيل"
		accu = Error
		r4 = Error(r5)
		accu = s21_2(r4)
	}
	return undefined
}

function func_unknown_0x100000006(a0)
{
	let accu;
	accu = s22_4
	s22_4 = (s22_4 + a0)
	return (s22_4 + a0)
}

function func_verifyToken_0x100000005(a0)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r11, r12, r13, r14, accu;
	accu = func_0x1886_0x100000015
	r5 = ctx1
	try
	{
		accu = a0
		if (!a0)
		{
			accu = ""
		}
		r8 = accu
		r7 = String(r8)
		r1 = r7["split"](".")
		r2 = r1[0]
		r6 = JSON["parse"]
		r12 = "base64url"
		r9 = Buffer["from"](r2, r12)
		r8 = r9["toString"]("utf8")
		r3 = r6(r8)
		r6 = r3["deviceId"]
		if (!r6 === func_deviceId_0x100000004())
		{
			return null
		}
		r6 = r1[2]
		if (!r6 === "v2")
		{
			return null
		}
		r6 = s1_5["verify"]
		r8 = "sha256"
		r9 = Buffer["from"]
		r9 = r9(r2)
		r13 = r1[1]
		r14 = "base64url"
		r11 = Buffer["from"](r13, r14)
		accu = r6(r8, r9, s1_16, r11)
		r4 = r6(r8, r9, s1_16, r11)
		if (r6(r8, r9, s1_16, r11))
		{
			accu = r3
		}
		else
		{
			accu = null
		}
		return accu
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx24
	r6 = ctx1
	return null
}

function func_deviceId_0x100000004()
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r9;
	r3 = ctx1
	s25_2 = func_0x1886_0x100000015
	r0 = func_hardwareId_0x100000002()
	if (func_hardwareId_0x100000002())
	{
		r7 = s1_5["createHash"]
		r9 = "sha256"
		r7 = r7(r9)
		r6 = r7["update"](("amaan-hw::" + r0))
		r7 = "hex"
		r5 = r6["digest"](r7)
		return r5["slice"](0, 32)
	}
	r6 = s1_4["cpus"]()
	r5 = r6["map"]
	r5 = r5(func_unknown_0x100000003)
	r4 = r5["join"]
	r1 = r4("|")
	r6 = [0, 0, 0, 0, 0]
	r7 = s1_4["hostname"]
	r6[0] = r7()
	r7 = s1_4["platform"]
	r6[1] = r7()
	r7 = s1_4["arch"]
	r6[2] = r7()
	r6[3] = r1
	r7 = s1_4["totalmem"]
	r6[4] = r7()
	r5 = r6
	r4 = r5["join"]
	r2 = r4("::")
	r7 = s1_5["createHash"]
	r9 = "sha256"
	r7 = r7(r9)
	r6 = r7["update"]
	r6 = r6(r2)
	r5 = r6["digest"]
	r5 = r5("hex")
	r4 = r5["slice"]
	return r4(0, 32)
}

function func_unknown_0x100000003(a0)
{
	return a0["model"]
}

function func_hardwareId_0x100000002()
{
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, accu;
	r6 = ctx1
	s26_2 = func_0x1886_0x100000015
	if (!s1_13 == null)
	{
		return s1_13
	}
	if (process["env"]["AMAAN_DEVICE_HW"])
	{
		r8 = process["env"]
		r8 = r8["AMAAN_DEVICE_HW"]
		r7 = String(r8)
		accu = s1_13
		s1_13 = r7
		return s1_13
	}
	accu = ""
	r0 = ""
	r7 = ctx26
	try
	{
		r8 = s1_2("child_process")
		r1 = r8["execSync"]
		accu = process["platform"] === "win32"
		if (process["platform"] === "win32")
		{
			r8 = ctx26
			try
			{
				r11 = "reg query \"HKLM\\SOFTWARE\\Microsoft\\Cryptography\" /v MachineGuid"
				r12 = {"timeout": 5000, "windowsHide": null}
				r12["windowsHide"] = !(!Boolean([]))
				r10 = r1(r11, r12)
				r9 = r10["toString"]
				r4 = r9()
				r9 = r4["match"]
				r11 = /MachineGuid\\s+REG_SZ\\s+([\\w-]+)/
				accu = r9(r11)
				r5 = r9(r11)
				if (r9(r11))
				{
					r0 = r5[1]
				}
			}
			catch
			{
				r9 = accu
				accu = null
				accu = ctx27
				r9 = ctx26
			}
			accu = r0
			if (!r0)
			{
				r8 = ctx26
				try
				{
					r11 = "wmic csproduct get UUID"
					r12 = {"timeout": 5000, "windowsHide": null}
					r12["windowsHide"] = !(!Boolean([]))
					r10 = r1(r11, r12)
					r9 = r10["toString"]
					r2 = r9()
					r11 = r2["split"]
					r13 = /\\r?\\n/
					r11 = r11(r13)
					r10 = r11["map"](func_unknown_0x100000000)
					r9 = r10["filter"]
					r9 = r9(func_unknown_0x100000001)
					accu = r9[0]
					r3 = r9[0]
					if (r9[0])
					{
						r0 = r3
						accu = r0
					}
				}
				catch
				{
					r9 = accu
					accu = null
					accu = ctx28
					r9 = ctx26
				}
			}
		}
		else
		{
			r8 = ctx26
			try
			{
				r11 = s1_2("fs")
				r10 = r11["readFileSync"]
				r12 = "/etc/machine-id"
				r13 = "utf8"
				r10 = r10(r12, r13)
				accu = r10["trim"]()
				r0 = r10["trim"]()
			}
			catch
			{
				r9 = accu
				accu = null
				accu = ctx29
				r9 = ctx26
			}
			accu = r0
			if (!r0)
			{
				r8 = ctx26
				try
				{
					r11 = s1_2("fs")
					r13 = "utf8"
					r10 = r11["readFileSync"]("/var/lib/dbus/machine-id", r13)
					r9 = r10["trim"]
					accu = r9()
					r0 = r9()
				}
				catch
				{
					r9 = accu
					accu = null
					accu = ctx30
					r9 = ctx26
				}
			}
		}
	}
	catch
	{
		r8 = accu
		accu = null
		accu = ctx31
		r8 = ctx26
	}
	accu = r0
	if (!r0)
	{
		accu = ""
	}
	r7 = accu
	accu = s1_13
	s1_13 = r7
	return s1_13
}

function func_unknown_0x100000001(a0)
{
	let r0, r1, accu;
	accu = a0
	if (a0)
	{
		r1 = /UUID/
		r0 = r1["test"]
		accu = !Boolean(r0(a0))
	}
	return accu
}

function func_unknown_0x100000000(a0)
{
	let r0;
	r0 = a0["trim"]
	return r0()
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r8, r9, r10, accu;
	r8 = ctx0
	s1_2 = require
	s1_14 = func_hardwareId_0x100000002
	s1_15 = func_deviceId_0x100000004
	s1_17 = func_verifyToken_0x100000005
	s1_18 = func_postJSON_0x10000000c
	s1_19 = func_tryTrial_0x10000000e
	s1_20 = func_0x311f_0x100000012
	s1_21 = func_revalidate_0x100000013
	s1_22 = func_0x1886_0x100000015
	s1_23 = func_isValid_0x100000016
	s1_24 = func_status_0x100000018
	s1_3 = func_0x1886_0x100000015
	accu = func_unknown_0x10000001f(s1_20, 559962)
	s1_4 = s1_2("os")
	r10 = "crypto"
	s1_5 = s1_2(r10)
	r10 = "http"
	s1_6 = s1_2(r10)
	r10 = "https"
	s1_7 = s1_2(r10)
	s1_8 = s1_2("./store")
	s1_9 = "https://amtik.online:4011"
	s1_11 = []
	s1_12 = {}
	r9 = process["env"]
	accu = r9["LICENSE_PUBLIC_KEY"]
	if (!r9["LICENSE_PUBLIC_KEY"])
	{
		accu = "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE+tKNUDiFsyiVzz3UvrDhI2/WMKJq\npMWA+mrtCNXI2lhLrtxn7eQhZgo+PNgBxjjao7xdLcArtRSRuYqC0mYhRQ==\n-----END PUBLIC KEY-----"
	}
	s1_16 = accu
	r10 = {"activate": null, "revalidate": null, "isValid": null, "status": null, "deviceId": null, "streamAuth": null, "tryTrial": null, "ensureTrial": null, "reportSetup": null, "startRevalidationLoop": null, "getUpdateInfo": null, "getMessages": null, "getContact": null, "LICENSE_SERVER": null}
	r10["activate"] = func_activate_0x10000000d
	r10["revalidate"] = func_revalidate_0x100000013
	r10["isValid"] = func_isValid_0x100000016
	r10["status"] = func_status_0x100000018
	r10["deviceId"] = func_deviceId_0x100000004
	r10["streamAuth"] = func_streamAuth_0x100000017
	r10["tryTrial"] = func_tryTrial_0x10000000e
	r10["ensureTrial"] = func_ensureTrial_0x100000010
	r10["reportSetup"] = func_reportSetup_0x10000001e
	r10["startRevalidationLoop"] = func_startRevalidationLoop_0x10000001d
	r10["getUpdateInfo"] = func_getUpdateInfo_0x100000019
	r10["getMessages"] = func_getMessages_0x10000001a
	r10["getContact"] = func_getContact_0x10000001b
	r10["LICENSE_SERVER"] = s1_9
	module["exports"] = r10
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
