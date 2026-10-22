// Decompiled from binary src/license.js (V8 10.2.154.4-node.8 code cache, 16265 source chars, 27536 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x100000021()
{
	r0 = func_unknown_0x100000020
	return r0
}
function func_unknown_0x100000020(a0, a1, a2, a3, a4)
{
	r8 = Scope[0]
	Scope[1][2] = a1
	Scope[1][14] = func_hardwareId_0x100000002
	Scope[1][15] = func_deviceId_0x100000004
	Scope[1][17] = func_verifyToken_0x100000005
	Scope[1][18] = func_postJSON_0x10000000c
	Scope[1][19] = func_tryTrial_0x10000000e
	Scope[1][20] = func_0x311f_0x100000012
	Scope[1][21] = func_revalidate_0x100000013
	Scope[1][22] = func_0x1886_0x100000015
	Scope[1][23] = func_isValid_0x100000016
	Scope[1][24] = func_status_0x100000018
	Scope[1][3] = func_0x1886_0x100000015
	ACCU = func_unknown_0x10000001f(Scope[1][20], 559962)
	Scope[1][4] = Scope[1][2]("os")
	r10 = "crypto"
	Scope[1][5] = Scope[1][2](r10)
	r10 = "http"
	Scope[1][6] = Scope[1][2](r10)
	r10 = "https"
	Scope[1][7] = Scope[1][2](r10)
	Scope[1][8] = Scope[1][2]("./store")
	Scope[1][9] = "https://amtik.online:4011"
	Scope[1][11] = []
	Scope[1][12] = {}
	r9 = process["env"]
	ACCU = r9["LICENSE_PUBLIC_KEY"]
	if (!r9["LICENSE_PUBLIC_KEY"])
	{
		ACCU = "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE+tKNUDiFsyiVzz3UvrDhI2/WMKJq\npMWA+mrtCNXI2lhLrtxn7eQhZgo+PNgBxjjao7xdLcArtRSRuYqC0mYhRQ==\n-----END PUBLIC KEY-----"
	}
	Scope[1][16] = ACCU
	r10 = new {"activate": null, "revalidate": null, "isValid": null, "status": null, "deviceId": null, "streamAuth": null, "tryTrial": null, "ensureTrial": null, "reportSetup": null, "startRevalidationLoop": null, "getUpdateInfo": null, "getMessages": null, "getContact": null, "LICENSE_SERVER": null}
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
	r10["LICENSE_SERVER"] = Scope[1][9]
	a2["exports"] = r10
	return undefined
}
function func_unknown_0x10000001f(a0, a1)
{
	r0 = func_0x1886_0x100000015
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(241)
			r4 = (parseInt(r5) \ 1)
			r6 = r0(307)
			r4 = (r4 * ((-parseInt(r6)) \ 2))
			r6 = r0(234)
			r4 = (r4 + ((-parseInt(r6)) \ 3))
			r6 = r0(263)
			r4 = (r4 + (parseInt(r6) \ 4))
			r6 = r0(294)
			r4 = (r4 + ((-parseInt(r6)) \ 5))
			r6 = r0(312)
			r4 = (r4 + (parseInt(r6) \ 6))
			r6 = r0(250)
			r5 = (parseInt(r6) \ 7)
			r7 = r0(230)
			r4 = (r4 + (r5 * (parseInt(r7) \ 8)))
			r6 = r0(268)
			r5 = (parseInt(r6) \ 9)
			r7 = r0(309)
			r2 = (r4 + (r5 * (parseInt(r7) \ 10)))
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
function func_reportSetup_0x10000001e(a0)
{
	r4 = <closure>
	r5 = <this>
	r0 = ACCU
	r4 = Scope[1]
	try
	{
		r6 = Scope[1][8]
		r5 = Scope[1][8]["get"]
		ACCU = r5()
		r2 = r5()
		r5 = Scope[1]
		try
		{
			r7 = "/api/client-info"
			r8 = new {"deviceId": null, "key": null, "ownerName": null, "networkName": null, "phone": null, "city": null}
			r8["deviceId"] = func_deviceId_0x100000004()
			ACCU = r2["license"]
			if (r2["license"])
			{
				ACCU = r2["license"]["key"]
			}
			if (!ACCU)
			{
				ACCU = ""
			}
			r8["key"] = ACCU
			ACCU = a0["ownerName"]
			if (!a0["ownerName"])
			{
				ACCU = ""
			}
			r11 = ACCU
			r10 = String(r11)
			r8["ownerName"] = r10["slice"](0, 100)
			ACCU = a0["networkName"]
			if (!a0["networkName"])
			{
				ACCU = ""
			}
			r11 = ACCU
			r10 = String(r11)
			r9 = r10["slice"]
			r8["networkName"] = r9(0, 100)
			ACCU = a0["phone"]
			if (!a0["phone"])
			{
				ACCU = ""
			}
			r11 = ACCU
			r10 = String(r11)
			r9 = r10["slice"]
			r8["phone"] = r9(0, 40)
			ACCU = a0["city"]
			if (!a0["city"])
			{
				ACCU = ""
			}
			r11 = ACCU
			r10 = String(r11)
			r9 = r10["slice"]
			r8["city"] = r9(0, 80)
			r7 = func_postJSON_0x10000000c(r7, r8)
			r6 = r0
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r0)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			r3 = r6
			ACCU = r3
			if (r3)
			{
				r6 = r3["status"]
				ACCU = r6 === 200
			}
			r7 = ACCU
			r6 = r0
			ACCU = r7
			return r7
		}
		catch {}
		r6 = ACCU
		ACCU = null
		ACCU = Scope[3]
		r6 = Scope[1]
		r8 = !Boolean([])
		r7 = r0
		return r8
	}
	catch {}
	r5 = ACCU
	ACCU = null
	ACCU = Scope[4]
	r5 = Scope[1]
	r6 = r0
	return Scope[4][2]
}
function func_startRevalidationLoop_0x10000001d()
{
	ACCU = setTimeout(func_revalidate_0x100000013, 2000)
	ACCU = setInterval(func_revalidate_0x100000013, 21600000)
	if (Scope[1][25])
	{
		ACCU = clearInterval(Scope[1][25])
	}
	r0 = setInterval(func_unknown_0x10000001c, 60000)
	ACCU = Scope[1][25]
	Scope[1][25] = r0
	return undefined
}
function func_unknown_0x10000001c()
{
	r4 = <closure>
	r5 = <this>
	r2 = ACCU
	r4 = Scope[1]
	try
	{
		r6 = Scope[1][8]
		r5 = Scope[1][8]["get"]
		r1 = r5()
		if (r1["license"]["key"])
		r5 = r1["license"]
		ACCU = r5["token"]
			|| (r5["token"])
		{
			ACCU = clearInterval(Scope[1][25])
			ACCU = Scope[1][25]
			r6 = undefined
			r5 = r2
			ACCU = r6
			return r6
		}
		r5 = Scope[1]
		try
		{
			r7 = func_tryTrial_0x10000000e()
			r6 = r2
			r6 = await r7
			r7 = _GeneratorGetResumeMode(r2)
			if (!r7 === 0)
			{
				ACCU = r6
			}
			r3 = r6
			ACCU = r6["ok"]
			if (!r6["ok"])
			{
				ACCU = r3["trialEnded"]
			}
			if (ACCU)
			{
				ACCU = clearInterval(Scope[1][25])
				ACCU = Scope[1][25]
			}
		}
		catch
		{
			r6 = ACCU
			ACCU = null
			ACCU = Scope[5]
			r6 = Scope[1]
		}
		r6 = undefined
		r5 = r2
		return r6
	}
	catch {}
	r5 = ACCU
	ACCU = null
	ACCU = Scope[6]
	r5 = Scope[1]
	r6 = r2
	return Scope[6][2]
}
function func_getContact_0x10000001b()
{
	return Scope[1][12]
}
function func_getMessages_0x10000001a()
{
	return Scope[1][11]
}
function func_getUpdateInfo_0x100000019()
{
	return Scope[1][10]
}
function func_status_0x100000018()
{
	r5 = Scope[1][8]["get"]
	r5 = r5()
	r1 = r5["license"]
	ACCU = r1["token"]
	if (r1["token"])
	{
		r6 = r1["token"]
		ACCU = func_verifyToken_0x100000005(r6)
	}
	else
	{
		ACCU = null
	}
	r2 = ACCU
	if (ACCU)
	{
		ACCU = r2["expiresAt"]
	}
	else
	{
		ACCU = null
	}
	r3 = ACCU
	if (ACCU)
	{
		r8 = Math["ceil"]
		r10 = ((r3 - Date["now"]()) \ 86400000)
		r8 = r8(r10)
		ACCU = Math["max"](0, r8)
	}
	else
	{
		ACCU = null
	}
	r4 = ACCU
	r5 = new {"activated": null, "valid": null, "isTrial": null, "daysLeft": null, "deviceId": null, "key": null, "expiresAt": null, "lastCheck": null}
	r5["activated"] = !(!Boolean(r2))
	r5["valid"] = func_isValid_0x100000016()
	r5["isTrial"] = !(!Boolean(r1["isTrial"]))
	r5["daysLeft"] = r4
	r5["deviceId"] = func_deviceId_0x100000004()
	ACCU = r1["key"]
	if (r1["key"])
	{
		r7 = r1["key"]
		r6 = r7["slice"]
		r6 = r6(0, 4)
		ACCU = (r6 + "****")
	}
	else
	{
		ACCU = null
	}
	r5["key"] = ACCU
	r5["expiresAt"] = r3
	r5["lastCheck"] = r1["lastCheck"]
	return r5
}
function func_streamAuth_0x100000017()
{
	r5 = Scope[1][8]["get"]
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
	ACCU = r1["graceDays"]
	if (!r1["graceDays"])
	{
		ACCU = 0
	}
	r4 = (r5 + (((ACCU * 24) * 3600) * 1000))
	r5 = Date["now"]
	r5 = r5()
	ACCU = r5 > r4
	if (r5 > r4)
	{
		ACCU = null
		return null
	}
	r5 = Scope[1]
	try
	{
		r10 = Scope[1][5]["createHash"]
		r10 = r10("sha256")
		r9 = r10["update"]
		ACCU = r2[1]
		if (!r2[1])
		{
			ACCU = ""
		}
		r11 = ACCU
		r9 = r9(r11)
		r8 = r9["update"]
		r10 = func_deviceId_0x100000004()
		r8 = r8(r10)
		r9 = "hex"
		r7 = r8["digest"](r9)
		r6 = r7["slice"]
		ACCU = r6(0, 12)
		return r6(0, 12)
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[7]
	r6 = Scope[1]
	return null
}
function func_isValid_0x100000016()
{
	r4 = Scope[1][8]["get"]
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
	ACCU = r1["graceDays"]
	if (!r1["graceDays"])
	{
		ACCU = 0
	}
	r3 = (((ACCU * 24) * 3600) * 1000)
	r4 = Date["now"]
	r4 = r4()
	r5 = r2["expiresAt"]
	return r4 <= (r5 + r3)
}
function func_0x1886_0x100000015(a0, a1)
{
	a0 = (a0 - 229)
	r0 = Scope[1][20]()
	r1 = r0[a0]
	if (Scope[1][22]["ckESrh"] == undefined)
	{
		Scope[1][22]["BRAeKm"] = func_0x1ad9fe_0x100000014
		Scope[1][22]["WGMAXo"] = {}
		Scope[1][22]["ckESrh"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][22]["WGMAXo"][r4])
	{
		r1 = Scope[1][22]["BRAeKm"](r1)
		Scope[1][22]["WGMAXo"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][22]["WGMAXo"][r4]
	}
	return r1
}
function func_0x1ad9fe_0x100000014(a0)
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
function func_revalidate_0x100000013()
{
	r8 = <closure>
	r9 = <this>
	r0 = ACCU
	r8 = Scope[1]
	try
	{
		r10 = Scope[1][8]
		r2 = Scope[1][8]["get"]()
		r11 = 297
		r9 = r2["license"]
		ACCU = r9["key"]
		if (!r9["key"])
		{
			r9 = Scope[1]
			try
			{
				r11 = func_tryTrial_0x10000000e()
				r10 = r0
				r10 = await r11
				r11 = _GeneratorGetResumeMode(r0)
				if (!r11 === 0)
				{
					ACCU = r10
				}
				ACCU = r10
			}
			catch
			{
				r10 = ACCU
				ACCU = null
				ACCU = Scope[8]
				r10 = Scope[1]
			}
			r10 = undefined
			r9 = r0
			ACCU = r10
			return r10
		}
		r9 = Scope[1]
		try
		{
			r11 = "/api/validate"
			r12 = new {"key": null, "deviceId": null}
			r13 = r2["license"]
			r12["key"] = r13["key"]
			r12["deviceId"] = func_deviceId_0x100000004()
			r11 = func_postJSON_0x10000000c(r11, r12)
			r10 = r0
			r10 = await r11
			r11 = _GeneratorGetResumeMode(r0)
			if (!r11 === 0)
			{
				ACCU = r10
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
					ACCU = r12
				}
				if (r3["json"]["update"])
				{
					r10 = r3["json"]
					r10 = r10["update"]
					ACCU = Scope[1][10]
					Scope[1][10] = r10
				}
				r10 = r3["json"]
				if (r10["messages"])
				{
					r10 = r3["json"]
					ACCU = Scope[1][11]
					Scope[1][11] = r10["messages"]
				}
				r10 = r3["json"]
				if (r10["contact"])
				{
					r10 = r3["json"]
					r10 = r10["contact"]
					ACCU = Scope[1][12]
					Scope[1][12] = r10
				}
			}
			else
			{
				if (r3["status"] === 403)
				{
					r4 = !Boolean([])
					r10 = r2["license"]
					ACCU = r10["token"]
					if (r10["token"])
					{
						r10 = Scope[1]
						try
						{
							r12 = "/api/activate"
							r13 = new {"key": null, "deviceId": null, "oldToken": null}
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
								ACCU = r11
							}
							r5 = r11
							r11 = r11["status"]
							ACCU = r11 === 200
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
										ACCU = console["log"](r13)
									}
								}
							}
						}
						catch
						{
							r11 = ACCU
							ACCU = null
							ACCU = Scope[9]
							r11 = Scope[1]
						}
					}
					if (!r4)
					{
						r10 = r2["license"]
						r10["token"] = null
						r11 = Date["now"]
						ACCU = (r11() - 1)
						r2["license"]["expiresAt"] = (r11() - 1)
						r10 = Scope[1]
						try
						{
							r12 = Scope[1][2]("./ffmpeg")
							ACCU = r12["stopAll"]()
						}
						catch
						{
							r11 = ACCU
							ACCU = null
							ACCU = Scope[10]
							r11 = Scope[1]
						}
						r10 = r2["license"]
						if (r10["isTrial"])
						{
							r10 = r2["license"]
							r11 = "key"
							r10[r11] = ""
							r11 = Scope[1][8]
							ACCU = Scope[1][8]["save"]()
							r10 = Scope[1]
							try
							{
								r12 = func_tryTrial_0x10000000e()
								r11 = r0
								r11 = await r12
								r12 = _GeneratorGetResumeMode(r0)
								if (!r12 === 0)
								{
									ACCU = r11
								}
								ACCU = r11
							}
							catch
							{
								r11 = ACCU
								ACCU = null
								ACCU = Scope[11]
								r11 = Scope[1]
							}
						}
					}
				}
			}
			r10 = r2["license"]
			r11 = "lastCheck"
			r12 = Date["now"]
			r10[r11] = r12()
			ACCU = Scope[1][8]["save"]()
		}
		catch
		{
			r10 = ACCU
			ACCU = null
			ACCU = Scope[12]
			r10 = Scope[1]
		}
		r10 = undefined
		r9 = r0
		return r10
	}
	catch {}
	r9 = ACCU
	ACCU = null
	ACCU = Scope[13]
	r9 = Scope[1]
	r10 = r0
	return Scope[13][2]
}
function func_0x311f_0x100000012()
{
	r0 = Scope[1]
	Scope[14][2] = new ["mJm1mZG0ngToqu5KCa", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0ktuzRD0v3wuHlB1PjEMOWq0frwuLlB1PjEMOWrefry0rrz0ffk3rltLveAuzZEwLwENOZvxzYrgHjmI9xtuTkCqPWtvDbk21YDenoweKYBgHmCNr4BJDLuwHAz28Rue5NqNHQAMfVn3HKtgnbCNrsu1j1wxfdmg1zAfjrpt0kls0Tls1ftKqGufvcteLdieTfws0Tls0T", "C2XPy2u", "zw5K", "CgXHDgzVCM0", "mZuWmZe3oerct0LWEG", "l2fWAs9JBgLLBNqTAw5MBW", "Dg9tDhjPBMC", "C2f2zq", "B3DUzxjoyw1L", "C3rHDhvZq29Kzq", "BM93", "2kRzInMc2yRyUsdyQTIS2lhzITIO2yOG2lRzITIXinI12kFzHnIT", "BMv0D29YA05HBwu", "zgLNzxn0", "BwvZC2fNzxm", "C3bSAxq", "qu1bqu5Frevwsunfx0Hx", "Ahr0Chm", "zMLSDgvY", "y29UDgfJDa", "BwvZC2fNzq", "2lhyRYdyUTMk2leG2lxyP9Me2k0G2yxzHIdyRTIN2k/zHsdyP9Me2kRzGDI52yRzHa", "yMfZzty0DxjS", "zw52", "2lRzITIXinMf2kRyP9IT", "y3jLyxrLsgfZAa", "y3j5ChrV", "DxrMoa", "ue9tva", "2kRzHsdyQTIT2k/zITIRinIO2lxzHDIPinIN2ytyRnMh2kFySIdyQnMg2kZyP9ITicJyP9Mg2kRzGMJzHcdyTDMk2lRyQsKU", "mtiYnty2mgjoBMTttW", "y2L0Eq", "l2fWAs90CMLHBa", "BgLJzw5Zzq", "zxjYB3i", "2kFzHTIQ2yFyQIdzHDMh2ytyQsdyP9Me2kFyQTI12kFzHcdyQnIU2kFyR9MfinIN2ytyQTMb2lNzITMe", "Agv4", "ANnVBG", "Bg9N", "DgvZDa", "Ahr0Chm6", "2kRyUDIW2leG2kFzHnIN2kRyTDIN2yqG2kJyRTIN2k/zHsdyP9Me2kRzGDI52yRzHdOG", "Ahr0Ca", "mMXpwhjiwG", "AM9PBG", "ndbtzefjzNK", "A2v5", "CgfYC2u", "mJe2nZuWmen4Chr2Aq", "DhjPBq", "2kRzHsdyQTMb2lNzITMeinIN2ytzGDIQ2lhyQsdyP9Me2kRyRnIX2yRyQnMk2kKGkdCG2kpzITIN2yuPlG", "2kRyUDIW2zhySsdyP9Me2kFyQTI12kFzHcdyQnIU2kFyR9MfinIN2ytyQTIX2k7zITI1inMe2ytyQTIS2lhyQnIPicJzHDIT2kFzInMe2kKG", "CgHVBMu", "zxHWAxjLC0f0", "DxbKyxrL", "Bw9KzwW", "C2HHmJu2", "ogP3tePIwa", "z2v0", "BgfZDenOzwnR", "l2fWAs92ywXPzgf0zq", "mJy2odmXmufzD2vqva", "y2vPBa", "C3rHDhvZ", "Ag9ZDg5HBwu", "zNjVBq", "Bwf0y2G", "Dg90ywXTzw0", "otG2mJqXtwPMvKfQ", "yxjJAa", "DgLTzw91Da", "Dg9Rzw4", "l2fWAs9Hy3rPDMf0zq", "BwfW", "zgv2AwnLswq", "D21PyYbJC3bYB2r1y3qGz2v0ifvvsuq", "CMvWBgfJzq", "mtiXody1mw9PChLMwa", "DMvYAwz5", "yNL0zuXLBMD0Aa", "AxnuCMLHBa", "CMvHzezPBgvtEw5J", "zgvZDhjVEq", "l2v0yY9TywnOAw5LlwLK", "kIOQkG", "yxbWBgLJyxrPB24VANnVBG", "DhjPywXfBMrLza", "zgf0yq", "CMvNihf1zxj5icjis0XnxfnprLrxqvjfxe1Py3jVC29MDfXdCNLWDg9NCMfWAhKIic92ie1Hy2HPBMvhDwLK", "z3jHy2veyxLZ"]
	Scope[1][20] = func_0x311f_0x100000011
	return Scope[1][20]()
}
function func_0x311f_0x100000011()
{
	return Scope[14][2]
}
function func_ensureTrial_0x100000010()
{
	r8 = <closure>
	r9 = <this>
	r0 = ACCU
	r8 = Scope[1]
	try
	{
		r1 = func_0x1886_0x100000015
		r9 = Scope[1][8]["get"]
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
			ACCU = PushContext("Block")
			r9 = Scope[1]
			Scope[15][2] = 1
			if (1 == 1)
			{
				r4 = 0
			}
			else
			{
				Scope[15][2] = (1 + 1)
			}
			r5 = 1
			if (1 <= 5)
			{
				break
			}
			while (true)
			{
				ACCU = r5 == 1
				if (!r5 == 1) break
				r10 = Scope[15]
				try
				{
					r12 = func_tryTrial_0x10000000e()
					r11 = r0
					r11 = await r12
					r12 = _GeneratorGetResumeMode(r0)
					if (!r12 === 0)
					{
						ACCU = r11
					}
					r7 = r11
					if (r11["ok"])
					{
						r11 = console[r1(302)]
						r13 = r1(314)
						ACCU = r11(r13)
						r12 = undefined
						r11 = r0
						return r12
					}
					if (r7["trialEnded"])
					{
						ACCU = console["log"]("\\x627\\x644\\x62a\\x62c\\x631\\x628\\x629 \\x645\\x633\\x62a\\x647\\x644\\x64e\\x643\\x629 \\x644\\x647\\x630\\x627 \\x627\\x644\\x62c\\x647\\x627\\x632 \\x2014 \\x64a\\x644\\x632\\x645 \\x62a\\x631\\x62e\\x64a\\x635.")
						r12 = undefined
						r11 = r0
						return r12
					}
					ACCU = r7[r1(284)]
					if (!r7[r1(284)])
					{
						ACCU = r1(288)
					}
					ACCU = console["log"](((("\\x62a\\x639\\x630\\x651\\x631 \\x628\\x62f\\x621 \\x627\\x644\\x62a\\x62c\\x631\\x628\\x629 (\\x645\\x62d\\x627\\x648\\x644\\x629 " + 1) + "/5): ") + ACCU))
				}
				catch
				{
					r11 = ACCU
					ACCU = null
					ACCU = Scope[16]
					r11 = Scope[15]
					r12 = console[r1(302)]
					r14 = r1(315)
					r14 = (r14 + 1)
					r14 = (r14 + "/5) \\x2014 \\x625\\x639\\x627\\x62f\\x629.")
					ACCU = r12(r14)
				}
				ACCU = Promise
				r11 = Promise(func_unknown_0x10000000f)
				r10 = r0
				r10 = await r11
				r11 = _GeneratorGetResumeMode(r0)
				if (r11 === 0) continue
				ACCU = r10
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
	r9 = ACCU
	ACCU = null
	ACCU = Scope[17]
	r9 = Scope[1]
	r10 = r0
	return Scope[17][2]
}
function func_unknown_0x10000000f(a0)
{
	return setTimeout(a0, (1 * 3000))
}
function func_tryTrial_0x10000000e()
{
	r5 = <closure>
	r6 = <this>
	r0 = ACCU
	r5 = Scope[1]
	try
	{
		r6 = Scope[1][8]["get"]
		r2 = r6()
		r7 = "/api/trial"
		r8 = new {"deviceId": null}
		r8["deviceId"] = func_deviceId_0x100000004()
		r7 = func_postJSON_0x10000000c(r7, r8)
		r6 = r0
		r6 = await r7
		r7 = _GeneratorGetResumeMode(r0)
		if (!r7 === 0)
		{
			ACCU = r6
		}
		r3 = r6
		if (!r6["status"] === 200)
		r6 = r3["json"]
			|| (!r6["token"])
		{
			r6 = new {"ok": null, "trialEnded": null, "message": null}
			r6["ok"] = !Boolean([])
			ACCU = r3["json"]
			if (r3["json"])
			{
				r7 = r3["json"]
				ACCU = r7["trialEnded"]
			}
			r6["trialEnded"] = !(!Boolean(ACCU))
			ACCU = r3["json"]
			if (r3["json"])
			{
				r7 = r3["json"]
				ACCU = r7["message"]
			}
			r6["message"] = ACCU
			r7 = r6
			r6 = r0
			return r7
		}
		r7 = r3["json"]
		r7 = r7["token"]
		r4 = func_verifyToken_0x100000005(r7)
		if (!func_verifyToken_0x100000005(r7))
		{
			r6 = new {"ok": null, "message": null}
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
		ACCU = Scope[1][8]["save"]()
		r6 = r3["json"]
		if (r6["update"])
		{
			r6 = r3["json"]
			r6 = r6["update"]
			ACCU = Scope[1][10]
			Scope[1][10] = r6
		}
		r6 = r3["json"]
		if (r6["messages"])
		{
			r6 = r3["json"]["messages"]
			ACCU = Scope[1][11]
			Scope[1][11] = r6
		}
		r6 = r3["json"]
		if (r6["contact"])
		{
			ACCU = Scope[1][12]
			Scope[1][12] = r3["json"]["contact"]
		}
		r6 = new {"ok": null, "trial": null}
		r6["ok"] = !(!Boolean([]))
		r6["trial"] = !(!Boolean([]))
		r7 = r6
		r6 = r0
		return r7
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[18]
	r6 = Scope[1]
	r7 = r0
	return Scope[18][2]
}
function func_activate_0x10000000d(a0)
{
	r5 = <closure>
	r6 = <this>
	r0 = ACCU
	r5 = Scope[1]
	try
	{
		r6 = Scope[1][8]["get"]
		r2 = r6()
		r7 = "/api/activate"
		r8 = new {"key": null, "deviceId": null}
		r8["key"] = a0
		r8["deviceId"] = func_deviceId_0x100000004()
		r7 = func_postJSON_0x10000000c(r7, r8)
		r6 = r0
		r6 = await r7
		r7 = _GeneratorGetResumeMode(r0)
		if (!r7 === 0)
		{
			ACCU = r6
		}
		r3 = r6
		if (!r6["status"] === 200)
		r6 = r3["json"]
			|| (!r6["token"])
		{
			if (r3["json"])
			ACCU = r3["json"]["message"]
				&& (r3["json"]["message"])
			{
				r7 = r3["json"]
				ACCU = r7["message"]
			}
			else
			{
				ACCU = "\\x641\\x634\\x644 \\x627\\x644\\x62a\\x641\\x639\\x64a\\x644"
			}
			r7 = ACCU
			ACCU = Error
			ACCU = Error(r7)
		}
		r7 = r3["json"]
		r7 = r7["token"]
		r4 = func_verifyToken_0x100000005(r7)
		if (!func_verifyToken_0x100000005(r7))
		{
			ACCU = Error
			ACCU = Error("\\x62a\\x648\\x642\\x64a\\x639 \\x627\\x644\\x62a\\x631\\x62e\\x64a\\x635 \\x63a\\x64a\\x631 \\x635\\x627\\x644\\x62d \\x644\\x647\\x630\\x627 \\x627\\x644\\x62c\\x647\\x627\\x632")
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
		r6 = Scope[1][8]["save"]
		ACCU = r6()
		r6 = r3["json"]
		if (r6["update"])
		{
			r6 = r3["json"]
			r6 = r6["update"]
			ACCU = Scope[1][10]
			Scope[1][10] = r6
		}
		r6 = r3["json"]
		if (r6["messages"])
		{
			r6 = r3["json"]
			r6 = r6["messages"]
			ACCU = Scope[1][11]
			Scope[1][11] = r6
		}
		if (r3["json"]["contact"])
		{
			r6 = r3["json"]
			ACCU = Scope[1][12]
			Scope[1][12] = r6["contact"]
		}
		r7 = func_status_0x100000018()
		r6 = r0
		return r7
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[19]
	r6 = Scope[1]
	r7 = r0
	return Scope[19][2]
}
function func_postJSON_0x10000000c(a0, a1)
{
	r0 = Scope[1]
	Scope[20][3] = a0
	Scope[20][2] = a1
	ACCU = Promise
	return Promise(func_unknown_0x10000000b)
}
function func_unknown_0x10000000b(a0, a1)
{
	r3 = Scope[20]
	Scope[21][3] = a0
	Scope[21][2] = a1
	Scope[21][4] = func_0x1886_0x100000015
	r5 = Scope[1][9]["replace"]
	r7 = \\\\\/+$\
	r5 = r5(r7, "")
	r5 = (r5 + Scope[20][3])
	ACCU = URL
	r0 = URL(r5)
	ACCU = r0["protocol"] === "https:"
	if (r0["protocol"] === "https:")
	{
		ACCU = Scope[1][7]
	}
	else
	{
		ACCU = Scope[1][6]
	}
	r1 = ACCU
	r2 = JSON["stringify"](Scope[20][2])
	r7 = new {"method": null, "headers": null, "timeout": 12000}
	r7["method"] = "POST"
	r8 = new {"Content-Type": null, "Content-Length": null}
	r8["Content-Type"] = "application/json"
	r9 = Buffer["byteLength"]
	r8["Content-Length"] = r9(r2)
	r7["headers"] = r8
	r5 = r1
	r6 = r0
	Scope[21][5] = r1["request"](r6, r7, func_unknown_0x100000008)
	r6 = "timeout"
	ACCU = Scope[21][5]["on"](r6, func_unknown_0x100000009)
	r6 = "error"
	ACCU = Scope[21][5]["on"](r6, func_unknown_0x10000000a)
	r4 = Scope[21][5]["end"]
	ACCU = r4(r2)
	return undefined
}
function func_unknown_0x10000000a(a0)
{
	r2 = "تعذر الاتصال بخادم التفعيل: "
	r2 = (r2 + a0["message"])
	ACCU = Error
	r1 = Error(r2)
	return Scope[21][2](r1)
}
function func_unknown_0x100000009()
{
	r1 = Scope[21][5]["destroy"]
	ACCU = r1()
	r3 = "انتهت مهلة الاتصال بخادم التفعيل"
	ACCU = Error
	r2 = Error(r3)
	ACCU = Scope[21][2](r2)
	return undefined
}
function func_unknown_0x100000008(a0)
{
	r0 = Scope[21]
	Scope[22][2] = a0
	Scope[22][3] = func_0x1886_0x100000015
	Scope[22][4] = ""
	r3 = "data"
	ACCU = Scope[22][2]["on"](r3, func_unknown_0x100000006)
	r3 = "end"
	ACCU = Scope[22][2]["on"](r3, func_unknown_0x100000007)
	return undefined
}
function func_unknown_0x100000007()
{
	ACCU = func_0x1886_0x100000015
	r1 = Scope[22]
	try
	{
		r3 = new {"status": null, "json": null}
		r3["status"] = Scope[22][2]["statusCode"]
		r4 = JSON["parse"]
		ACCU = Scope[22][4]
		if (!Scope[22][4])
		{
			ACCU = "{}"
		}
		r6 = ACCU
		r3["json"] = r4(r6)
		ACCU = Scope[21][3](r3)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[23]
		r2 = Scope[22]
		r5 = "رد غير صالح من خادم التفعيل"
		ACCU = Error
		r4 = Error(r5)
		ACCU = Scope[21][2](r4)
	}
	return undefined
}
function func_unknown_0x100000006(a0)
{
	ACCU = Scope[22][4]
	Scope[22][4] = (Scope[22][4] + a0)
	return (Scope[22][4] + a0)
}
function func_verifyToken_0x100000005(a0)
{
	ACCU = func_0x1886_0x100000015
	r5 = Scope[1]
	try
	{
		ACCU = a0
		if (!a0)
		{
			ACCU = ""
		}
		r8 = ACCU
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
		r6 = Scope[1][5]["verify"]
		r8 = "sha256"
		r9 = Buffer["from"]
		r9 = r9(r2)
		r13 = r1[1]
		r14 = "base64url"
		r11 = Buffer["from"](r13, r14)
		ACCU = r6(r8, r9, Scope[1][16], r11)
		r4 = r6(r8, r9, Scope[1][16], r11)
		if (r6(r8, r9, Scope[1][16], r11))
		{
			ACCU = r3
		}
		else
		{
			ACCU = null
		}
		return ACCU
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[24]
	r6 = Scope[1]
	return null
}
function func_deviceId_0x100000004()
{
	r3 = Scope[1]
	Scope[25][2] = func_0x1886_0x100000015
	r0 = func_hardwareId_0x100000002()
	if (func_hardwareId_0x100000002())
	{
		r7 = Scope[1][5]["createHash"]
		r9 = "sha256"
		r7 = r7(r9)
		r6 = r7["update"](("amaan-hw::" + r0))
		r7 = "hex"
		r5 = r6["digest"](r7)
		return r5["slice"](0, 32)
	}
	r6 = Scope[1][4]["cpus"]()
	r5 = r6["map"]
	r5 = r5(func_unknown_0x100000003)
	r4 = r5["join"]
	r1 = r4("|")
	r6 = new [0, 0, 0, 0, 0]
	r7 = Scope[1][4]["hostname"]
	r6[0] = r7()
	r7 = Scope[1][4]["platform"]
	r6[1] = r7()
	r7 = Scope[1][4]["arch"]
	r6[2] = r7()
	r6[3] = r1
	r7 = Scope[1][4]["totalmem"]
	r6[4] = r7()
	r5 = r6
	r4 = r5["join"]
	r2 = r4("::")
	r7 = Scope[1][5]["createHash"]
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
	r6 = Scope[1]
	Scope[26][2] = func_0x1886_0x100000015
	if (!Scope[1][13] == null)
	{
		return Scope[1][13]
	}
	if (process["env"]["AMAAN_DEVICE_HW"])
	{
		r8 = process["env"]
		r8 = r8["AMAAN_DEVICE_HW"]
		r7 = String(r8)
		ACCU = Scope[1][13]
		Scope[1][13] = r7
		return Scope[1][13]
	}
	ACCU = ""
	r0 = ""
	r7 = Scope[26]
	try
	{
		r8 = Scope[1][2]("child_process")
		r1 = r8["execSync"]
		ACCU = process["platform"] === "win32"
		if (process["platform"] === "win32")
		{
			r8 = Scope[26]
			try
			{
				r11 = "reg query \"HKLM\\SOFTWARE\\Microsoft\\Cryptography\" /v MachineGuid"
				r12 = new {"timeout": 5000, "windowsHide": null}
				r12["windowsHide"] = !(!Boolean([]))
				r10 = r1(r11, r12)
				r9 = r10["toString"]
				r4 = r9()
				r9 = r4["match"]
				r11 = \MachineGuid\\\\s+REG_SZ\\\\s+([\\\\w-]+)\
				ACCU = r9(r11)
				r5 = r9(r11)
				if (r9(r11))
				{
					r0 = r5[1]
				}
			}
			catch
			{
				r9 = ACCU
				ACCU = null
				ACCU = Scope[27]
				r9 = Scope[26]
			}
			ACCU = r0
			if (!r0)
			{
				r8 = Scope[26]
				try
				{
					r11 = "wmic csproduct get UUID"
					r12 = new {"timeout": 5000, "windowsHide": null}
					r12["windowsHide"] = !(!Boolean([]))
					r10 = r1(r11, r12)
					r9 = r10["toString"]
					r2 = r9()
					r11 = r2["split"]
					r13 = \\\\\r?\\\\n\
					r11 = r11(r13)
					r10 = r11["map"](func_unknown_0x100000000)
					r9 = r10["filter"]
					r9 = r9(func_unknown_0x100000001)
					ACCU = r9[0]
					r3 = r9[0]
					if (r9[0])
					{
						r0 = r3
						ACCU = r0
					}
				}
				catch
				{
					r9 = ACCU
					ACCU = null
					ACCU = Scope[28]
					r9 = Scope[26]
				}
			}
		}
		else
		{
			r8 = Scope[26]
			try
			{
				r11 = Scope[1][2]("fs")
				r10 = r11["readFileSync"]
				r12 = "/etc/machine-id"
				r13 = "utf8"
				r10 = r10(r12, r13)
				ACCU = r10["trim"]()
				r0 = r10["trim"]()
			}
			catch
			{
				r9 = ACCU
				ACCU = null
				ACCU = Scope[29]
				r9 = Scope[26]
			}
			ACCU = r0
			if (!r0)
			{
				r8 = Scope[26]
				try
				{
					r11 = Scope[1][2]("fs")
					r13 = "utf8"
					r10 = r11["readFileSync"]("/var/lib/dbus/machine-id", r13)
					r9 = r10["trim"]
					ACCU = r9()
					r0 = r9()
				}
				catch
				{
					r9 = ACCU
					ACCU = null
					ACCU = Scope[30]
					r9 = Scope[26]
				}
			}
		}
	}
	catch
	{
		r8 = ACCU
		ACCU = null
		ACCU = Scope[31]
		r8 = Scope[26]
	}
	ACCU = r0
	if (!r0)
	{
		ACCU = ""
	}
	r7 = ACCU
	ACCU = Scope[1][13]
	Scope[1][13] = r7
	return Scope[1][13]
}
function func_unknown_0x100000001(a0)
{
	ACCU = a0
	if (a0)
	{
		r1 = \UUID\
		r0 = r1["test"]
		ACCU = !Boolean(r0(a0))
	}
	return ACCU
}
function func_unknown_0x100000000(a0)
{
	r0 = a0["trim"]
	return r0()
}
