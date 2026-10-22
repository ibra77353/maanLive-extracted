// Recovered module: src/auth.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (5251 source
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
let s5_2;
let ctx0, ctx1, ctx2, ctx4;

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x10000000c(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x34be_0x10000000a
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(450)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(460)
			r4 = (r4 + ((-parseInt(r6)) / 2))
			r6 = r0(449)
			r5 = (parseInt(r6) / 3)
			r7 = r0(451)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 4)))
			r6 = r0(424)
			r5 = (parseInt(r6) / 5)
			r7 = r0(456)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 6)))
			r6 = r0(444)
			r4 = (r4 + (parseInt(r6) / 7))
			r6 = r0(445)
			r5 = (parseInt(r6) / 8)
			r7 = r0(457)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 9)))
			r6 = r0(430)
			r2 = (r4 + (parseInt(r6) / 10))
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

function func_isAuthed_0x10000000b(a0)
{
	let r2;
	r2 = func_parseCookies_0x100000005(a0)
	r2 = r2["amaan_session"]
	return !(!Boolean(func_verify_0x100000003(r2)))
}

function func_0x34be_0x10000000a(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 423)
	r0 = s1_3()
	r1 = r0[a0]
	if (s1_10["RweqaG"] == undefined)
	{
		s1_10["dUJJvG"] = func_0x2f325f_0x100000009
		s1_10["mFahLh"] = {}
		s1_10["RweqaG"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_10["mFahLh"][r4])
	{
		r1 = s1_10["dUJJvG"](r1)
		s1_10["mFahLh"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_10["mFahLh"][r4]
	}
	return r1
}

function func_0x2f325f_0x100000009(a0)
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

function func_requireAuth_0x100000008(a0, a1, a2)
{
	let r1, r2, r4, r5, accu;
	r1 = func_parseCookies_0x100000005(a0)
	r4 = r1["amaan_session"]
	r2 = func_verify_0x100000003(r4)
	if (!func_verify_0x100000003(r4))
	{
		r4 = a1["status"]
		r4 = r4(401)
		r5 = {"error": null, "message": "\\x64a\\x62c\\x628 \\x62a\\x633\\x62c\\x64a\\x644 \\x627\\x644\\x62f\\x62e\\x648\\x644"}
		r5["error"] = "unauthorized"
		return r4["json"](r5)
	}
	r4 = "adminUser"
	a0[r4] = r2["u"]
	accu = a2()
	return undefined
}

function func_logout_0x100000007(a0)
{
	let r1, r3, r4, accu;
	r1 = a0["setHeader"]
	r3 = "Set-Cookie"
	r4 = "amaan_session=; HttpOnly; Path=/; Max-Age=0"
	accu = r1(r3, r4)
	return undefined
}

function func_login_0x100000006(a0, a1, a2, a3)
{
	let r1, r2, r3, r4, r5, r6, accu;
	r3 = s1_5["get"]
	r3 = r3()
	r1 = r3["admin"]
	if (a2 === r1["user"])
	{
		if (s1_5["checkPassword"](a3))
		{
			r4 = {"u": null, "exp": null}
			r4["u"] = a2
			r5 = Date["now"]
			r4["exp"] = (r5() + 43200000)
			r2 = func_sign_0x100000002(r4)
			r3 = a1["setHeader"]
			r5 = "Set-Cookie"
			r6 = "amaan_session="
			r6 = (r6 + encodeURIComponent(r2))
			r6 = (r6 + "; HttpOnly; Path=/; SameSite=Lax")
			accu = r3(r5, r6)
			return !(!Boolean([]))
		}
	}
	return !Boolean([])
}

function func_parseCookies_0x100000005(a0)
{
	let r0, r1, r2, r3, accu;
	r0 = ctx1
	s3_2 = func_0x34be_0x10000000a
	s3_3 = {}
	r3 = a0["headers"]
	accu = r3["cookie"]
	if (!r3["cookie"])
	{
		accu = ""
	}
	r3 = accu
	r2 = r3["split"]
	r2 = r2(";")
	r1 = r2["forEach"]
	accu = r1(func_unknown_0x100000004)
	return s3_3
}

function func_unknown_0x100000004(a0)
{
	let r1, r3, r4, r5, r6, r8;
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
		s3_3[r3] = decodeURIComponent(r5)
	}
	return undefined
}

function func_verify_0x100000003(a0)
{
	let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, accu;
	if (((!a0) || (r5 = a0["indexOf"], r5 = r5("."), (r5 < 0))))
	{
		return null
	}
	r5 = a0["split"]
	r5 = r5(".")
	r7 = GetIterator(r5)
	accu = false
	r8 = false
	r11 = ctx1
	try
	{
		if (((!false) && (r8 = true, r12 = r7["next"](), accu = r12["done"], (!r12["done"]))))
		{
			r8 = false
			accu = r12["value"]
		}
		else
		{
			accu = undefined
		}
		r1 = accu
		if (((!r8) && (r8 = true, r12 = r7["next"](), accu = r12["done"], (!r12["done"]))))
		{
			r8 = false
			accu = r12["value"]
		}
		else
		{
			accu = undefined
		}
		r2 = accu
		accu = -1
		r10 = -1
		r9 = -1
	}
	catch
	{
		r10 = accu
		r9 = 0
	}
	if (!r8)
	{
		r13 = ctx1
		try
		{
			if (!r7["return"] == undefined)
			{
				accu = r7["return"]()
			}
		}
		catch {}
	}
	accu = null
	if (r9 === 0)
	{
		accu = r10
	}
	r7 = s1_4["createHmac"]
	r9 = "sha256"
	r7 = r7(r9, s1_6)
	r6 = r7["update"]
	r6 = r6(r1)
	r5 = r6["digest"]
	r7 = "base64url"
	r3 = r5(r7)
	if (!r2["length"] === r3["length"])
	{
		return null
	}
	r5 = s1_4["timingSafeEqual"]
	r7 = Buffer["from"]
	r7 = r7(r2)
	r8 = Buffer["from"]
	r8 = r8(r3)
	accu = r5(r7, r8)
	if (!r5(r7, r8))
	{
		accu = null
		return null
	}
	r5 = ctx1
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
		accu = r4
		return r4
	}
	catch {}
	r6 = accu
	accu = null
	accu = ctx4
	r6 = ctx1
	return null
}

function func_sign_0x100000002(a0)
{
	let r1, r2, r3, r4, r5, r6;
	r6 = JSON["stringify"](a0)
	r4 = Buffer["from"](r6)
	r3 = r4["toString"]
	r5 = "base64url"
	r1 = r3(r5)
	r5 = s1_4["createHmac"]
	r5 = r5("sha256", s1_6)
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
	let r0;
	r0 = ctx1
	s5_2 = ["C3bSAxq", "CMfUzg9TqNL0zxm", "DxnLCG", "yw1Hyw5FC2vZC2LVBJ0", "zxHWB3j0CW", "ywrTAw4", "DxrMoa", "Dg9tDhjPBMC", "otuZmtLkz3n2CKO", "mtzTte9Vs1G", "BgvUz3rO", "AgvHzgvYCW", "C3rHDhvZ", "mJq4nJmXz2HTBgrW", "mJq0ntq2A2v3r1PX", "ofz3AMztAG", "Dw5HDxrOB3jPEMvK", "oYbiDhrWt25SEtSGugf0Ad0VoYbtyw1Lu2L0zt1myxG", "DgLTAw5Nu2fMzuvXDwfS", "y3jLyxrLsg1HyW", "nKXftM5fsG", "mtK2nJqXzNDQD3rw", "u2v0lunVB2TPzq", "CgfYC2u", "mJe4mtKWAfzgwLHp", "zM9YrwfJAa", "DhjPBq", "yMfZzty0DxjS", "zNjVBq", "C2XPy2u", "yw1Hyw5FC2vZC2LVBG", "mtuWnJCXnxb0ANjUsG", "yw1Hyw5FC2vZC2LVBJ07ieH0DhbpBMX5oYbqyxrOps87ie1HEc1bz2u9ma", "z2v0", "zxHW", "ywrTAw5vC2vY", "C2HHmJu2", "mtaXmJm1mJbZAg1iEhu", "BM93", "Aw5KzxHpzG", "C2v0sgvHzgvY", "DxbKyxrL", "zgLNzxn0"]
	s1_3 = func_0x20c3_0x100000000
	return s1_3()
}

function func_0x20c3_0x100000000()
{
	return s5_2
}

// The CommonJS module wrapper the code cache was compiled for: Node calls it with
// (exports, require, module, __filename, __dirname).
function __module__(exports, require, module, __filename, __dirname)
{
	let r4, r5, r6, r7, accu;
	r4 = ctx0
	s1_3 = func_0x20c3_0x100000001
	s1_7 = func_sign_0x100000002
	s1_8 = func_verify_0x100000003
	s1_9 = func_parseCookies_0x100000005
	s1_10 = func_0x34be_0x10000000a
	s1_2 = func_0x34be_0x10000000a
	accu = func_unknown_0x10000000c(s1_3, 161533)
	s1_4 = require("crypto")
	s1_5 = require("./store")
	r5 = s1_4["randomBytes"]
	s1_6 = r5(32)
	r6 = "exports"
	r7 = {"login": null, "logout": null, "requireAuth": null, "isAuthed": null}
	r7["login"] = func_login_0x100000006
	r7["logout"] = func_logout_0x100000007
	r7["requireAuth"] = func_requireAuth_0x100000008
	r7["isAuthed"] = func_isAuthed_0x10000000b
	module[r6] = r7
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
