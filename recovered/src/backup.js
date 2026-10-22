// Recovered module: src/backup.js
//
// Lowered from the View8 register listing of the V8 code cache in the repository root (7035 source
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
let s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_14, s1_15, s1_16, s1_17;
let s3_2;
let s7_2;
let ctx0, ctx1, ctx2, ctx4, ctx5, ctx6;

// The code cache's outer script function only returned the module wrapper below.

function func_unknown_0x10000000c(a0, a1)
{
	let r0, r1, r2, r3, r4, r5, r6, r7, accu;
	r0 = func_0x5311_0x100000001
	r1 = a0()
	while (true)
	{
		accu = []
		if (![]) break
		r3 = ctx1
		try
		{
			r5 = r0(503)
			r4 = (parseInt(r5) / 1)
			r6 = r0(518)
			r4 = (r4 * ((-parseInt(r6)) / 2))
			r6 = r0(508)
			r5 = ((-parseInt(r6)) / 3)
			r7 = r0(480)
			r4 = (r4 + (r5 * (parseInt(r7) / 4)))
			r6 = r0(494)
			r5 = (parseInt(r6) / 5)
			r7 = r0(475)
			r4 = (r4 + (r5 * (parseInt(r7) / 6)))
			r6 = r0(520)
			r4 = (r4 + (parseInt(r6) / 7))
			r6 = r0(477)
			r4 = (r4 + (parseInt(r6) / 8))
			r6 = r0(513)
			r5 = (parseInt(r6) / 9)
			r7 = r0(499)
			r4 = (r4 + (r5 * (parseInt(r7) / 10)))
			r6 = r0(491)
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

function func_unzipTo_0x10000000b(a0, a1)
{
	let r1, r2, r3, r4, accu;
	r2 = process["platform"]
	if (r2 === "win32")
	{
		r2 = "powershell -NoProfile -Command \"Expand-Archive -LiteralPath '"
		r2 = (r2 + a0)
		r2 = (r2 + "' -DestinationPath '")
		r2 = (r2 + a1)
		r1 = (r2 + "' -Force\"")
		r4 = {"timeout": 120000}
		accu = s1_6(r1, r4)
	}
	else
	{
		r3 = "unzip -o -q \""
		r3 = (r3 + a0)
		r3 = (r3 + "\" -d \"")
		r3 = (r3 + a1)
		r3 = (r3 + "\"")
		r4 = {"timeout": 120000}
		accu = s1_6(r3, r4)
	}
	return undefined
}

function func_zipDir_0x10000000a(a0, a1)
{
	let r1, r2, r3, r4, accu;
	r2 = process["platform"]
	if (r2 === "win32")
	{
		r2 = "powershell -NoProfile -Command \"Compress-Archive -Path '"
		r2 = (r2 + a0)
		r2 = (r2 + "\\\\*' -DestinationPath '")
		r2 = (r2 + a1)
		r1 = (r2 + "' -Force\"")
		r4 = {"timeout": 120000}
		accu = s1_6(r1, r4)
	}
	else
	{
		r3 = "cd \""
		r3 = (r3 + a0)
		r3 = (r3 + "\" && zip -r -q \"")
		r3 = (r3 + a1)
		r3 = (r3 + "\" .")
		r4 = {"timeout": 120000}
		accu = s1_6(r3, r4)
	}
	return undefined
}

function func_copyDir_0x100000009(a0, a1)
{
	let r0, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r16, accu;
	r0 = func_0x5311_0x100000001
	r6 = s1_4["mkdirSync"]
	r9 = {"recursive": null}
	r9["recursive"] = !(!Boolean([]))
	accu = r6(a1, r9)
	r9 = {"withFileTypes": null}
	r9["withFileTypes"] = !(!Boolean([]))
	r8 = s1_4["readdirSync"](a0, r9)
	r7 = GetIterator(r8)
	r6 = r7["next"]
	accu = false
	r8 = false
	r11 = ctx1
	try
	{
		while (true)
		{
			r8 = true
			r12 = r6()
			if (r12["done"]) break
			r8 = false
			r13 = s1_5[r0(489)]
			r16 = r12["value"][r0(514)]
			r4 = r13(a0, r16)
			r16 = r12["value"][r0(514)]
			r5 = s1_5["join"](a1, r16)
			r13 = r12["value"][r0(497)]
			r12 = r12["value"]
			if (r13())
			{
				accu = func_copyDir_0x100000009(r4, r5)
				continue
			}
			r13 = s1_4[r0(521)]
			accu = r13(r4, r5)
		}
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
	return undefined
}

function func_0x2101_0x100000008()
{
	let r0;
	r0 = ctx1
	s3_2 = ["C3rYAw5NAwz5", "AxneAxjLy3rVCNK", "z2v0tw9UDgG", "mJe3mdGXmfzZwLnvvq", "z2v0rgf0zq", "CgXHDgzVCM0", "uK9pva", "nJeWENnqrgHl", "Dg9ju09tDhjPBMC", "D2LUmZi", "yw1Hyw4TyMfJA3vWlq", "Cg93zxjZAgvSBcaTtM9qCM9MAwXLic1dB21Tyw5KicjdB21WCMvZCY1bCMnOAxzLic1qyxrOicC", "mtiZmdnUt0n3yKe", "Dw56AxaGlw8GlxeGiG", "zxHPC3rZu3LUyW", "jYaTrgvZDgLUyxrPB25qyxrOicC", "CMvSB2fK", "mJDozu5zyLy", "BMfTzq", "CgfKu3rHCNq", "2yxzHnMbinIN2ytyPDI52k/yP9IV2kFyQIdyR9IN2k7zHcdyP9Me2yByS9IU2kKG2kRyP9Me2ye", "z2v0sg91CNm", "ndq2mLfIzMvvDq", "Cg93zxjZAgvSBcaTtM9qCM9MAwXLic1dB21Tyw5KicjfEhbHBMqTqxjJAgL2zsaTtgL0zxjHBfbHDgGGjW", "nti0nZi1nNPLthPvua", "y29WEuzPBgvtEw5J", "zgLYBMfTzq", "iIaTzcaI", "2kFzHnMf2ytzGsdzHnINinMk2k3yQTMi2yOG2lNzHnMjinIL2lNyR9IN2k/yP9IQinI12kFzHnIT2kKGkgnVBMzPzY5QC29UinMf2yhzGTMi2k8P", "nJi0yKveqK5U", "2yhyTnMeinIL2yByTnIN2keG2yxzHnMbinIN2ytzHTIZ2k7yQsdyP9Me2kFyRDIQ2yRyP9I32yRyQq", "mtm0mdy5nZzYswviC2y", "DxbSB2fKCW", "y2qGiG", "mtaWmfbLsxrfsq", "BwTKAxjtEw5J", "yw1Hyw4TBgL2zs1IywnRDxa", "C3j2", "DxrMoa", "y2HPBgrFChjVy2vZCW", "CM1tEw5J", "lNPPCa", "2yxzHnMbinIN2ytzHTIZ2k7yQsdyP9Me2kFyRDIQ2yRyP9I32yRyQsdyUTMk2leG2yxzInIS2yJyRW", "AM9PBG", "y29UzMLNlMPZB24", "mtyXnZuWmZHfuejxt08", "iIaMjIb6AxaGlxiGlxeGiG", "y2fJAgu", "ode0mtvQsgXzA1q", "yMfJA3vWlxrTCa"]
	s1_14 = func_0x2101_0x100000007
	return s1_14()
}

function func_0x2101_0x100000007()
{
	return s3_2
}

function func_restoreBackup_0x100000006(a0)
{
	let r1, r2, r3, r4, r5, r6, r9, accu;
	if (!s1_4["existsSync"](a0))
	{
		r4 = "ملف النسخة الاحتياطية غير موجود"
		accu = Error
		accu = Error(r4)
	}
	accu = func_rmrf_0x100000004(s1_11)
	r3 = s1_4["mkdirSync"]
	r6 = {"recursive": null}
	r6["recursive"] = !(!Boolean([]))
	accu = r3(s1_11, r6)
	accu = func_unzipTo_0x10000000b(a0, s1_11)
	r3 = s1_5["join"]
	r1 = r3(s1_11, "config.json")
	r3 = s1_4["existsSync"]
	accu = r3(r1)
	if (!r3(r1))
	{
		accu = func_rmrf_0x100000004(s1_11)
		r4 = "الملف لا يحتوي على إعدادات صالحة (config.json مفقود)"
		accu = Error
		accu = Error(r4)
	}
	r3 = ctx1
	try
	{
		r9 = "utf8"
		r6 = s1_4["readFileSync"](r1, r9)
		accu = JSON["parse"](r6)
	}
	catch
	{
		r4 = accu
		accu = null
		accu = ctx4
		r4 = ctx1
		accu = func_rmrf_0x100000004(s1_11)
		r6 = "ملف الإعدادات داخل النسخة تالف"
		accu = Error
		accu = Error(r6)
	}
	accu = s1_4["existsSync"](s1_9)
	if (s1_4["existsSync"](s1_9))
	{
		r3 = ctx1
		try
		{
			accu = s1_4["copyFileSync"](s1_9, (s1_9 + ".before-restore"))
		}
		catch
		{
			r4 = accu
			accu = null
			accu = ctx5
			r4 = ctx1
		}
	}
	r3 = s1_4["mkdirSync"]
	r5 = s1_5["dirname"]
	r5 = r5(s1_9)
	r6 = {"recursive": null}
	r6["recursive"] = !(!Boolean([]))
	accu = r3(r5, r6)
	r3 = s1_4["copyFileSync"]
	accu = r3(r1, s1_9)
	r3 = s1_5["join"]
	r2 = r3(s1_11, "uploads")
	r3 = s1_4["existsSync"]
	if (r3(r2))
	{
		accu = func_rmrf_0x100000004(s1_10)
		r3 = s1_4["mkdirSync"]
		r5 = s1_5["dirname"]
		r5 = r5(s1_10)
		r6 = {"recursive": null}
		r6["recursive"] = !(!Boolean([]))
		accu = r3(r5, r6)
		accu = func_copyDir_0x100000009(r2, s1_10)
	}
	accu = func_rmrf_0x100000004(s1_11)
	r3 = s1_7["reload"]
	accu = r3()
	return !(!Boolean([]))
}

function func_createBackup_0x100000005()
{
	let r1, r2, r3, r4, r5, r6, r7, r9, r10, r11, accu;
	accu = func_rmrf_0x100000004(s1_11)
	r7 = {"recursive": null}
	r7["recursive"] = !(!Boolean([]))
	accu = s1_4["mkdirSync"](s1_11, r7)
	r4 = s1_4["existsSync"]
	if (r4(s1_9))
	{
		r4 = s1_4["copyFileSync"]
		r7 = s1_5["join"](s1_11, "config.json")
		accu = r4(s1_9, r7)
	}
	r4 = s1_5["join"]
	r7 = "uploads"
	r1 = r4(s1_11, r7)
	if (s1_4["existsSync"](s1_10))
	{
		accu = func_copyDir_0x100000009(s1_10, r1)
	}
	r6 = s1_5["join"](s1_11, "backup-info.json")
	r7 = JSON["stringify"]
	r9 = {"type": null, "version": 1, "createdAt": null}
	r9["type"] = "amaan-live-backup"
	r11 = Date(func_0x5311_0x100000001)
	r10 = r11["toISOString"]
	r9["createdAt"] = r10()
	r7 = r7(r9, null, 2)
	accu = s1_4["writeFileSync"](r6, r7)
	r7 = "cache"
	r2 = s1_5["join"](s1_8, r7)
	r4 = s1_4["mkdirSync"]
	r7 = {"recursive": null}
	r7["recursive"] = !(!Boolean([]))
	accu = r4(r2, r7)
	r4 = s1_5["join"]
	r7 = "amaan-backup-"
	r7 = (r7 + func_ts_0x100000003())
	r7 = (r7 + ".zip")
	r3 = r4(r2, r7)
	accu = func_rmrf_0x100000004(r3)
	accu = func_zipDir_0x10000000a(s1_11, r3)
	accu = func_rmrf_0x100000004(s1_11)
	r4 = s1_4["existsSync"]
	if (!r4(r3))
	{
		r5 = "فشل إنشاء ملف النسخة الاحتياطية"
		accu = Error
		accu = Error(r5)
	}
	return r3
}

function func_rmrf_0x100000004(a0)
{
	let r1, r2, r5, accu;
	accu = func_0x5311_0x100000001
	r1 = ctx1
	try
	{
		r2 = s1_4["rmSync"]
		r5 = {"recursive": null, "force": null}
		r5["recursive"] = !(!Boolean([]))
		r5["force"] = !(!Boolean([]))
		accu = r2(a0, r5)
	}
	catch
	{
		r2 = accu
		accu = null
		accu = ctx6
		r2 = ctx1
	}
	return undefined
}

function func_ts_0x100000003()
{
	let r0, r2, r3, r5;
	r2 = ctx1
	s7_2 = func_0x5311_0x100000001
	r0 = Date(r0)
	r3 = ("" + r0["getFullYear"]())
	r5 = r0["getMonth"]
	r5 = (r5() + 1)
	r3 = (r3 + func_0x2eda3d_0x100000002(r5))
	r5 = r0["getDate"]
	r5 = r5()
	r3 = (r3 + func_0x2eda3d_0x100000002(r5))
	r3 = (r3 + "-")
	r5 = r0["getHours"]
	r5 = r5()
	r3 = (r3 + func_0x2eda3d_0x100000002(r5))
	r5 = r0["getMinutes"]()
	return (r3 + func_0x2eda3d_0x100000002(r5))
}

function func_0x2eda3d_0x100000002(a0)
{
	let r0, r1;
	r1 = String(a0)
	r0 = r1["padStart"]
	return r0(2, "0")
}

function func_0x5311_0x100000001(a0, a1)
{
	let r0, r1, r3, r4, accu;
	a0 = (a0 - 472)
	r0 = s1_14()
	r1 = r0[a0]
	if (s1_3["WGERie"] == undefined)
	{
		s1_3["RtSeqR"] = func_0x27bed7_0x100000000
		s1_3["ICwAIE"] = {}
		s1_3["WGERie"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!s1_3["ICwAIE"][r4])
	{
		r1 = s1_3["RtSeqR"](r1)
		s1_3["ICwAIE"][r4] = r1
		accu = r1
	}
	else
	{
		accu = s1_3["ICwAIE"][r4]
	}
	return r1
}

function func_0x27bed7_0x100000000(a0)
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
	let r2, r3, r4, r6, r7, accu;
	r2 = ctx0
	s1_3 = func_0x5311_0x100000001
	s1_12 = func_ts_0x100000003
	s1_13 = func_rmrf_0x100000004
	s1_14 = func_0x2101_0x100000008
	s1_15 = func_copyDir_0x100000009
	s1_16 = func_zipDir_0x10000000a
	s1_17 = func_unzipTo_0x10000000b
	s1_2 = func_0x5311_0x100000001
	accu = func_unknown_0x10000000c(s1_14, 913537)
	s1_4 = require("fs")
	s1_5 = require("path")
	r4 = "child_process"
	r3 = require(r4)
	s1_6 = r3["execSync"]
	s1_7 = require("./store")
	s1_8 = s1_7["ROOT"]
	r7 = "config.json"
	s1_9 = s1_5["join"](s1_8, "config", r7)
	r6 = "srv"
	r7 = "uploads"
	s1_10 = s1_5["join"](s1_8, r6, r7)
	r3 = s1_5["join"]
	r6 = "cache"
	r7 = "backup-tmp"
	s1_11 = r3(s1_8, r6, r7)
	r4 = {"createBackup": null, "restoreBackup": null}
	r4["createBackup"] = func_createBackup_0x100000005
	r4["restoreBackup"] = func_restoreBackup_0x100000006
	module["exports"] = r4
	return undefined
}

__module__(exports, require, module, __filename, __dirname);
