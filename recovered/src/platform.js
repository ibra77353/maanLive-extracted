// Recovered module: src/platform.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (3923 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7;
let s5_2;
let ctx0, ctx1, ctx2, ctx3, ctx4;

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x100000005(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x4636_0x100000001
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(150)
			r4 = ((-parseInt(r5)) / 1)
			r6 = r0(157)
			r4 = (r4 * (parseInt(r6) / 2))
			r6 = r0(152)
			r4 = (r4 + (parseInt(r6) / 3))
			r6 = r0(165)
			r5 = ((-parseInt(r6)) / 4)
			r7 = r0(168)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 5)))
			r6 = r0(158)
			r4 = (r4 + ((-parseInt(r6)) / 6))
			r6 = r0(161)
			r5 = ((-parseInt(r6)) / 7)
			r7 = r0(151)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 8)))
			r6 = r0(160)
			r5 = ((-parseInt(r6)) / 9)
			r7 = r0(153)
			r4 = (r4 + (r5 * ((-parseInt(r7)) / 10)))
			r6 = r0(164)
			r2 = (r4 + ((-parseInt(r6)) / 11))
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

function func_resolveFfmpeg_0x100000004(a0)
{
	let r1, r2, r3, r4, r5, r6, r8, accu;
	r3 = process["env"]
	if (r3["FFMPEG_PATH"])
	{
		r5 = process["env"]
		r5 = r5["FFMPEG_PATH"]
		if (s1_5["existsSync"](r5))
		{
			r3 = process["env"]
			return r3["FFMPEG_PATH"]
		}
	}
	accu = a0
	if (a0)
	{
		accu = a0 === "ffmpeg"
		if (!a0 === "ffmpeg")
		{
			r3 = s1_5["existsSync"]
			if (r3(a0))
			{
				return a0
			}
		}
	}
	r3 = ctx1
	try
	{
		r4 = s1_6["join"]
		r6 = s1_6["dirname"]
		r8 = process["execPath"]
		r6 = r6(r8)
		r2 = r4(r6, s1_7)
		r4 = s1_5["existsSync"]
		accu = r4(r2)
		if (r4(r2))
		{
			return r2
		}
	}
	catch
	{
		r4 = accu
		accu = null
		accu = ctx3
		r4 = ctx1
	}
	r3 = ctx1
	try
	{
		r4 = s1_6["join"]
		r6 = process["cwd"]
		r6 = r6()
		r1 = r4(r6, s1_7)
		r4 = s1_5["existsSync"]
		accu = r4(r1)
		if (r4(r1))
		{
			return r1
		}
	}
	catch
	{
		r4 = accu
		accu = null
		accu = ctx4
		r4 = ctx1
	}
	accu = a0
	if (!a0)
	{
		accu = "ffmpeg"
	}
	return accu
}

function func_0x100e_0x100000003()
{
	let r0;
	r0 = ctx1
	s5_2 = ["rKznuevhx1bbveG", "mJiZmJHqBwPctMS", "nZeWmtm0mK5yyMHJwG", "yw5KCM9Pza", "ntu5ntK5m2PZEhDdrG", "mtrJwKv2DwS", "zxHWB3j0CW", "D2LUzg93CW", "mtm1nJG2odD1EKniwvy", "nhngAwfOvG", "y3DK", "zxHLy1bHDgG", "nZe5mdK1nvjNyxPRAW", "zMzTCgvN", "D2LUmZi", "zw52", "qu1bqu5Frefuqv9esvi", "Cgf0Aa", "BgLUDxG", "zgLYBMfTzq", "zxHPC3rZu3LUyW", "otv6A3DVsLC", "mJqWmJeZnMrTBurvzW", "mJC2mZGXnKfPzNL2ua", "mJbkyvHiDxq", "CgXHDgzVCM0", "AM9PBG"]
	s1_4 = func_0x100e_0x100000002
	return s1_4()
}

function func_0x100e_0x100000002()
{
	return s5_2
}

function func_0x4636_0x100000001(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 146)
	r0 = s1_4()
	r1 = r0[a0]
	if (s1_3["HQNbpt"] == undefined)
	{
		s1_3["iPHgyF"] = func_0x2767ac_0x100000000
		s1_3["urvxRp"] = {}
		s1_3["HQNbpt"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_3["urvxRp"][r4])
	{
		r1 = s1_3["iPHgyF"](r1)
		s1_3["urvxRp"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_3["urvxRp"][r4]
	}
	return r1
}

function func_0x2767ac_0x100000000(a0)
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
	let r0, r1, r2, r3, r4, r5, r6, r7, r8, r10, r11, r12, r13, accu;
	r10 = ctx0
	s1_3 = func_0x4636_0x100000001
	s1_4 = func_0x100e_0x100000003
	s1_2 = func_0x4636_0x100000001
	accu = func_unknown_0x100000005(s1_4, 725897)
	s1_5 = require("fs")
	r12 = "path"
	s1_6 = require(r12)
	r0 = require("os")
	r11 = process["env"]
	r1 = !(!Boolean(r11["AMAAN_DATA_DIR"]))
	r2 = !(!Boolean(process["pkg"]))
	r11 = process["platform"]
	r3 = r11 === "win32"
	r11 = process["platform"]
	accu = r11 === "linux"
	if (r11 === "linux")
	{
		accu = !Boolean(r1)
	}
	r4 = accu
	r11 = s1_6["join"]
	r5 = r11(__dirname, "..")
	r11 = process["env"]
	accu = r11["AMAAN_DATA_DIR"]
	if (r11["AMAAN_DATA_DIR"])
	{
		r11 = process["env"]
		accu = r11["AMAAN_DATA_DIR"]
	}
	else
	{
		accu = r2
		if (r2)
		{
			r11 = s1_6["dirname"]
			accu = r11(process["execPath"])
		}
		else
		{
			accu = r5
		}
	}
	r6 = accu
	accu = r3
	if (r3)
	{
		accu = !Boolean(r1)
	}
	r7 = accu
	accu = r1
	if (r1)
	{
		accu = "android"
	}
	else
	{
		accu = r3
		if (r3)
		{
			accu = "windows"
		}
		else
		{
			if (r4)
			{
				accu = "linux"
			}
			else
			{
				accu = process["platform"]
			}
		}
	}
	r8 = accu
	accu = r3
	if (r3)
	{
		accu = "ffmpeg.exe"
	}
	else
	{
		accu = "ffmpeg"
	}
	s1_7 = accu
	r12 = "exports"
	r13 = {"isAndroid": null, "isPkg": null, "isWindows": null, "isLinux": null, "snapshotDir": null, "dataDir": null, "servesHlsViaNginx": null, "label": null, "ffmpegBinName": null, "resolveFfmpeg": null, "os": null}
	r13["isAndroid"] = r1
	r13["isPkg"] = r2
	r13["isWindows"] = r3
	r13["isLinux"] = r4
	r13["snapshotDir"] = r5
	r13["dataDir"] = r6
	r13["servesHlsViaNginx"] = r7
	r13["label"] = r8
	r13["ffmpegBinName"] = s1_7
	r13["resolveFfmpeg"] = func_resolveFfmpeg_0x100000004
	r13["os"] = r0
	module[r12] = r13
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
