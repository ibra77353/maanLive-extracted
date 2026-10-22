// Decompiled from binary src/auth.js (V8 10.2.154.4-node.8 code cache, 5251 source chars, 8896 bytecode bytes).
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
	r4 = Scope[0]
	Scope[1][3] = func_0x20c3_0x100000001
	Scope[1][7] = func_sign_0x100000002
	Scope[1][8] = func_verify_0x100000003
	Scope[1][9] = func_parseCookies_0x100000005
	Scope[1][10] = func_0x34be_0x10000000a
	Scope[1][2] = func_0x34be_0x10000000a
	ACCU = func_unknown_0x10000000c(Scope[1][3], 161533)
	Scope[1][4] = a1("crypto")
	Scope[1][5] = a1("./store")
	r5 = Scope[1][4]["randomBytes"]
	Scope[1][6] = r5(32)
	r6 = "exports"
	r7 = new {"login": null, "logout": null, "requireAuth": null, "isAuthed": null}
	r7["login"] = func_login_0x100000006
	r7["logout"] = func_logout_0x100000007
	r7["requireAuth"] = func_requireAuth_0x100000008
	r7["isAuthed"] = func_isAuthed_0x10000000b
	a2[r6] = r7
	return undefined
}
function func_unknown_0x10000000c(a0, a1)
{
	r0 = func_0x34be_0x10000000a
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(450)
			r4 = ((-parseInt(r5)) \ 1)
			r6 = r0(460)
			r4 = (r4 + ((-parseInt(r6)) \ 2))
			r6 = r0(449)
			r5 = (parseInt(r6) \ 3)
			r7 = r0(451)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 4)))
			r6 = r0(424)
			r5 = (parseInt(r6) \ 5)
			r7 = r0(456)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 6)))
			r6 = r0(444)
			r4 = (r4 + (parseInt(r6) \ 7))
			r6 = r0(445)
			r5 = (parseInt(r6) \ 8)
			r7 = r0(457)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 9)))
			r6 = r0(430)
			r2 = (r4 + (parseInt(r6) \ 10))
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
function func_isAuthed_0x10000000b(a0)
{
	r2 = func_parseCookies_0x100000005(a0)
	r2 = r2["amaan_session"]
	return !(!Boolean(func_verify_0x100000003(r2)))
}
function func_0x34be_0x10000000a(a0, a1)
{
	a0 = (a0 - 423)
	r0 = Scope[1][3]()
	r1 = r0[a0]
	if (Scope[1][10]["RweqaG"] == undefined)
	{
		Scope[1][10]["dUJJvG"] = func_0x2f325f_0x100000009
		Scope[1][10]["mFahLh"] = {}
		Scope[1][10]["RweqaG"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][10]["mFahLh"][r4])
	{
		r1 = Scope[1][10]["dUJJvG"](r1)
		Scope[1][10]["mFahLh"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][10]["mFahLh"][r4]
	}
	return r1
}
function func_0x2f325f_0x100000009(a0)
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
function func_requireAuth_0x100000008(a0, a1, a2)
{
	r1 = func_parseCookies_0x100000005(a0)
	r4 = r1["amaan_session"]
	r2 = func_verify_0x100000003(r4)
	if (!func_verify_0x100000003(r4))
	{
		r4 = a1["status"]
		r4 = r4(401)
		r5 = new {"error": null, "message": "\\x64a\\x62c\\x628 \\x62a\\x633\\x62c\\x64a\\x644 \\x627\\x644\\x62f\\x62e\\x648\\x644"}
		r5["error"] = "unauthorized"
		return r4["json"](r5)
	}
	r4 = "adminUser"
	a0[r4] = r2["u"]
	ACCU = a2()
	return undefined
}
function func_logout_0x100000007(a0)
{
	r1 = a0["setHeader"]
	r3 = "Set-Cookie"
	r4 = "amaan_session=; HttpOnly; Path=/; Max-Age=0"
	ACCU = r1(r3, r4)
	return undefined
}
function func_login_0x100000006(a0, a1, a2, a3)
{
	r3 = Scope[1][5]["get"]
	r3 = r3()
	r1 = r3["admin"]
	if (a2 === r1["user"])
	{
		if (Scope[1][5]["checkPassword"](a3))
		{
			r4 = new {"u": null, "exp": null}
			r4["u"] = a2
			r5 = Date["now"]
			r4["exp"] = (r5() + 43200000)
			r2 = func_sign_0x100000002(r4)
			r3 = a1["setHeader"]
			r5 = "Set-Cookie"
			r6 = "amaan_session="
			r6 = (r6 + encodeURIComponent(r2))
			r6 = (r6 + "; HttpOnly; Path=/; SameSite=Lax")
			ACCU = r3(r5, r6)
			return !(!Boolean([]))
		}
	}
	return !Boolean([])
}
function func_parseCookies_0x100000005(a0)
{
	r0 = Scope[1]
	Scope[3][2] = func_0x34be_0x10000000a
	Scope[3][3] = {}
	r3 = a0["headers"]
	ACCU = r3["cookie"]
	if (!r3["cookie"])
	{
		ACCU = ""
	}
	r3 = ACCU
	r2 = r3["split"]
	r2 = r2(";")
	r1 = r2["forEach"]
	ACCU = r1(func_unknown_0x100000004)
	return Scope[3][3]
}
function func_unknown_0x100000004(a0)
{
	r1 = a0["indexOf"]("=")
	if (r1 > 0)
	{
		r4 = a0["slice"]
		r4 = r4(0, r1)
		r3 = r4["trim"]()
		r6 = a0["slice"]
		r8 = (r1 + 1)
		r6 = r6(r8)
		r5 = r6["trim"]
		r5 = r5()
		Scope[3][3][r3] = decodeURIComponent(r5)
	}
	return undefined
}
function func_verify_0x100000003(a0)
{
	if (!a0)
	r5 = a0["indexOf"]
	r5 = r5(".")
		|| (r5 < 0)
	{
		return null
	}
	r5 = a0["split"]
	r5 = r5(".")
	r7 = GetIterator(r5)
	ACCU = false
	r8 = false
	r11 = Scope[1]
	try
	{
		if (!false)
		r8 = true
		r12 = r7["next"]()
		ACCU = r12["done"]
			&& (!r12["done"])
		{
			r8 = false
			ACCU = r12["value"]
		}
		else
		{
			ACCU = undefined
		}
		r1 = ACCU
		if (!r8)
		r8 = true
		r12 = r7["next"]()
		ACCU = r12["done"]
			&& (!r12["done"])
		{
			r8 = false
			ACCU = r12["value"]
		}
		else
		{
			ACCU = undefined
		}
		r2 = ACCU
		ACCU = -1
		r10 = -1
		r9 = -1
	}
	catch
	{
		r10 = ACCU
		r9 = 0
	}
	if (!r8)
	{
		r13 = Scope[1]
		try
		{
			if (!r7["return"] == undefined)
			{
				ACCU = r7["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r9 === 0)
	{
		ACCU = r10
	}
	r7 = Scope[1][4]["createHmac"]
	r9 = "sha256"
	r7 = r7(r9, Scope[1][6])
	r6 = r7["update"]
	r6 = r6(r1)
	r5 = r6["digest"]
	r7 = "base64url"
	r3 = r5(r7)
	if (!r2["length"] === r3["length"])
	{
		return null
	}
	r5 = Scope[1][4]["timingSafeEqual"]
	r7 = Buffer["from"]
	r7 = r7(r2)
	r8 = Buffer["from"]
	r8 = r8(r3)
	ACCU = r5(r7, r8)
	if (!r5(r7, r8))
	{
		ACCU = null
		return null
	}
	r5 = Scope[1]
	try
	{
		r6 = JSON["parse"]
		r9 = Buffer["from"]
		r9 = r9(r1, "base64url")
		r8 = r9["toString"]
		r10 = "utf8"
		r8 = r8(r10)
		r4 = r6(r8)
		if (r4["exp"])
		{
			r6 = Date["now"]
			r6 = r6()
			if (r6 > r4["exp"])
			{
				return null
			}
		}
		ACCU = r4
		return r4
	}
	catch {}
	r6 = ACCU
	ACCU = null
	ACCU = Scope[4]
	r6 = Scope[1]
	return null
}
function func_sign_0x100000002(a0)
{
	r6 = JSON["stringify"](a0)
	r4 = Buffer["from"](r6)
	r3 = r4["toString"]
	r5 = "base64url"
	r1 = r3(r5)
	r5 = Scope[1][4]["createHmac"]
	r5 = r5("sha256", Scope[1][6])
	r4 = r5["update"]
	r4 = r4(r1)
	r3 = r4["digest"]
	r5 = "base64url"
	r2 = r3(r5)
	r3 = (r1 + ".")
	return (r3 + r2)
}
function func_0x20c3_0x100000001()
{
	r0 = Scope[1]
	Scope[5][2] = new ["C3bSAxq", "CMfUzg9TqNL0zxm", "DxnLCG", "yw1Hyw5FC2vZC2LVBJ0", "zxHWB3j0CW", "ywrTAw4", "DxrMoa", "Dg9tDhjPBMC", "otuZmtLkz3n2CKO", "mtzTte9Vs1G", "BgvUz3rO", "AgvHzgvYCW", "C3rHDhvZ", "mJq4nJmXz2HTBgrW", "mJq0ntq2A2v3r1PX", "ofz3AMztAG", "Dw5HDxrOB3jPEMvK", "oYbiDhrWt25SEtSGugf0Ad0VoYbtyw1Lu2L0zt1myxG", "DgLTAw5Nu2fMzuvXDwfS", "y3jLyxrLsg1HyW", "nKXftM5fsG", "mtK2nJqXzNDQD3rw", "u2v0lunVB2TPzq", "CgfYC2u", "mJe4mtKWAfzgwLHp", "zM9YrwfJAa", "DhjPBq", "yMfZzty0DxjS", "zNjVBq", "C2XPy2u", "yw1Hyw5FC2vZC2LVBG", "mtuWnJCXnxb0ANjUsG", "yw1Hyw5FC2vZC2LVBJ07ieH0DhbpBMX5oYbqyxrOps87ie1HEc1bz2u9ma", "z2v0", "zxHW", "ywrTAw5vC2vY", "C2HHmJu2", "mtaXmJm1mJbZAg1iEhu", "BM93", "Aw5KzxHpzG", "C2v0sgvHzgvY", "DxbKyxrL", "zgLNzxn0"]
	Scope[1][3] = func_0x20c3_0x100000000
	return Scope[1][3]()
}
function func_0x20c3_0x100000000()
{
	return Scope[5][2]
}
