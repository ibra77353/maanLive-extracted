// Decompiled from binary src/ffmpeg.js (V8 10.2.154.4-node.8 code cache, 48691 source chars, 82584 bytecode bytes).
// Recovered with View8 (V8 10.2 disassembler) + string-array resolution.
// Faithful decompilation: registers (rN/ACCU) and scope slots (Scope[n][m]) are preserved.
// See DECOMPILATION.md for the method, the evidence and the limitations.

function func_unknown_0x10000005b()
{
	r0 = func_unknown_0x10000005a
	return r0
}
function func_unknown_0x10000005a(a0, a1, a2, a3, a4)
{
	r15 = Scope[0]
	Scope[1][2] = a1
	Scope[1][16] = func_resolveFfmpegPath_0x100000000
	Scope[1][22] = func_lastErrorInfo_0x100000001
	Scope[1][24] = func_ensureDirs_0x100000004
	Scope[1][25] = func_hlsRoot_0x100000005
	Scope[1][26] = func_logFile_0x100000006
	Scope[1][28] = func_appendLog_0x10000000b
	Scope[1][29] = func_classifySeverity_0x10000000c
	Scope[1][30] = func_rotateLogIfBig_0x10000000d
	Scope[1][31] = func_savePids_0x10000000e
	Scope[1][32] = func_killPid_0x10000000f
	Scope[1][33] = func_cleanHlsRoot_0x100000011
	Scope[1][35] = func_hlsExtensionFlags_0x100000012
	Scope[1][38] = func_buildInputArgs_0x100000013
	Scope[1][39] = func_hlsOutputArgs_0x100000014
	Scope[1][40] = func_writeMasterPlaylist_0x100000015
	Scope[1][41] = func_channelQuality_0x100000016
	Scope[1][43] = func_logoPath_0x100000017
	Scope[1][44] = func_logoOverlayFilter_0x100000018
	Scope[1][45] = func_x264TuneArgs_0x100000019
	Scope[1][46] = func_x264BufsizeFor_0x10000001a
	Scope[1][47] = func_buildTranscodeArgs_0x10000001b
	Scope[1][48] = func_buildCopyJobs_0x10000001d
	Scope[1][49] = func_getChannel_0x10000001f
	Scope[1][50] = func_getSource_0x100000021
	Scope[1][52] = func_autoFixSource_0x100000028
	Scope[1][53] = func_deviceBackoffMs_0x100000029
	Scope[1][54] = func_spawnFFmpeg_0x100000035
	Scope[1][55] = func_startProcesses_0x100000036
	Scope[1][56] = func_start_0x100000037
	Scope[1][57] = func_stop_0x100000039
	Scope[1][60] = func_measureChannelBytes_0x100000044
	Scope[1][63] = func_shouldClearRestartPenalty_0x100000045
	Scope[1][68] = func_0x1d1a_0x100000047
	Scope[1][69] = func_resetBytes_0x100000048
	Scope[1][70] = func_0x3dba_0x10000004c
	Scope[1][73] = func_isRunning_0x10000004f
	Scope[1][3] = func_0x1d1a_0x100000047
	ACCU = func_unknown_0x100000054(Scope[1][70], 416753)
	Scope[1][4] = Scope[1][2]("fs")
	r17 = "path"
	Scope[1][5] = Scope[1][2](r17)
	r17 = "child_process"
	r16 = Scope[1][2](r17)
	Scope[1][6] = r16["spawn"]
	r0 = r16["execSync"]
	Scope[1][7] = r16["spawnSync"]
	Scope[1][8] = Scope[1][2]("./store")
	Scope[1][9] = Scope[1][2]("./license")
	Scope[1][10] = Scope[1][2]("./platform")
	Scope[1][11] = Scope[1][8]["ROOT"]
	r16 = Scope[1][5]["join"]
	r19 = "logs"
	Scope[1][12] = r16(Scope[1][11], r19)
	r16 = Scope[1][5]["join"]
	r19 = "run"
	Scope[1][13] = r16(Scope[1][11], r19)
	r16 = Scope[1][5]["join"]
	r19 = "pids.json"
	Scope[1][14] = r16(Scope[1][13], r19)
	Scope[1][15] = Scope[1][10]["isWindows"]
	r16 = new {"240p": null, "360p": null, "480p": {"w": 854, "h": 480, "vb": "1200k", "ab": "128k"}, "720p": null}
	r17 = new {"w": 426, "h": 240, "vb": "400k", "ab": null}
	r17["ab"] = "64k"
	r16["240p"] = r17
	r17 = new {"w": 640, "h": 360, "vb": null, "ab": "96k"}
	r17["vb"] = "800k"
	r16["360p"] = r17
	r17 = new {"w": 1280, "h": 720, "vb": "2500k", "ab": null}
	r17["ab"] = "128k"
	r16["720p"] = r17
	Scope[1][17] = r16
	Scope[1][18] = Map(r0)
	Scope[1][19] = Map(r0)
	Scope[1][20] = Map(r0)
	Scope[1][21] = 600000
	Scope[1][23] = Map(r0)
	Scope[1][27] = Map(r0)
	Scope[1][36] = func_looksLikeHls_0x100000055
	r17 = new [0, 0, 0, 0]
	r17[0] = "VLC/3.0.20 LibVLC/3.0.20"
	r17[1] = "Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Mobile Safari/537.36"
	r17[2] = "Lavf/60.16.100"
	r17[3] = "IPTVSmartersPro/1.0 (Linux; Android 11)"
	Scope[1][37] = r17
	Scope[1][42] = !Boolean([])
	Scope[1][51] = Set(r0)
	Scope[1][58] = Map(r0)
	Scope[1][59] = Map(r0)
	Scope[1][61] = Map(r0)
	Scope[1][62] = 60000
	Scope[1][64] = 0
	r16 = Date["now"]
	Scope[1][65] = r16()
	Scope[1][66] = 0
	Scope[1][67] = !Boolean([])
	r17 = setInterval(func_unknown_0x100000056, 5000)
	ACCU = r17["unref"]()
	Scope[1][71] = 90000
	Scope[1][72] = 120000
	r17 = setInterval(func_unknown_0x100000057, 10000)
	r16 = r17["unref"]
	ACCU = r16()
	r17 = setInterval(func_unknown_0x100000059, 30000)
	ACCU = r17["unref"]()
	r17 = "exports"
	r18 = new {"QUALITY": null, "killStaleProcesses": null, "start": null, "stop": null, "restart": null, "stopAll": null, "purgeChannel": null, "startupQueue": null, "statusOf": null, "isRunning": null, "readLog": null, "clearLog": null, "hlsRoot": null, "noteHlsAccess": null, "hlsViewerCount": null, "lastErrorInfo": null, "totalBytesOut": null, "runningCount": null, "ingestBandwidthBps": null, "bytesOutMap": null, "shouldClearRestartPenalty": null, "HEALTHY_RESET_MS": null, "x264TuneArgs": null, "x264BufsizeFor": null, "deviceBackoffMs": null, "hlsOutputArgs": null}
	r18["QUALITY"] = Scope[1][17]
	r18["killStaleProcesses"] = func_killStaleProcesses_0x100000010
	r18["start"] = func_start_0x100000037
	r18["stop"] = func_stop_0x100000039
	r18["restart"] = func_restart_0x10000003b
	r18["stopAll"] = func_stopAll_0x10000003c
	r18["purgeChannel"] = func_purgeChannel_0x100000053
	r18["startupQueue"] = func_startupQueue_0x100000040
	r18["statusOf"] = func_statusOf_0x100000041
	r18["isRunning"] = func_isRunning_0x10000004f
	r18["readLog"] = func_readLog_0x100000050
	r18["clearLog"] = func_clearLog_0x100000051
	r18["hlsRoot"] = func_hlsRoot_0x100000005
	r18["noteHlsAccess"] = func_noteHlsAccess_0x100000002
	r18["hlsViewerCount"] = func_hlsViewerCount_0x100000003
	r18["lastErrorInfo"] = func_lastErrorInfo_0x100000001
	r18["totalBytesOut"] = func_totalBytesOut_0x100000049
	r18["runningCount"] = func_runningCount_0x10000004a
	r18["ingestBandwidthBps"] = func_ingestBandwidthBps_0x10000004d
	r18["bytesOutMap"] = func_bytesOutMap_0x10000004e
	r18["shouldClearRestartPenalty"] = func_shouldClearRestartPenalty_0x100000045
	r18["HEALTHY_RESET_MS"] = 60000
	r18["x264TuneArgs"] = func_x264TuneArgs_0x100000019
	r18["x264BufsizeFor"] = func_x264BufsizeFor_0x10000001a
	r18["deviceBackoffMs"] = func_deviceBackoffMs_0x100000029
	r18["hlsOutputArgs"] = func_hlsOutputArgs_0x100000014
	a2[r17] = r18
	return undefined
}
function func_unknown_0x100000059()
{
	r9 = Scope[1]
	Scope[2][2] = func_0x1d1a_0x100000047
	ACCU = undefined
	r0 = undefined
	r10 = Scope[2]
	try
	{
		ACCU = Scope[1][8]["get"]()
		r0 = Scope[1][8]["get"]()
	}
	catch
	{
		r11 = ACCU
		ACCU = null
		ACCU = Scope[3]
		r11 = Scope[2]
		return undefined
	}
	if (!r0)
		|| (!r0["channels"])
	{
		return undefined
	}
	r10 = r0["settings"]
	r10 = r10["idleStopEnabled"]
	r1 = !(r10 === !Boolean([]))
	r2 = Date["now"]()
	r10 = Math["max"]
	r14 = r0["settings"]
	r14 = r14["sourceFailStopMinutes"]
	ACCU = Number(r14)
	if (!Number(r14))
	{
		ACCU = 3
	}
	r13 = ACCU
	r3 = ((r10(1, r13) * 60) * 1000)
	r10 = Math["max"]
	r14 = r0["settings"]
	r14 = r14["blockedStopMinutes"]
	ACCU = Number(r14["blockedStopMinutes"])
	if (!Number(r14["blockedStopMinutes"]))
	{
		ACCU = 5
	}
	r13 = ACCU
	r4 = ((r10(1, r13) * 60) * 1000)
	r11 = GetIterator(r0["channels"])
	r10 = r11["next"]
	ACCU = false
	r12 = false
	r15 = Scope[2]
	try
	{
		while (true)
		{
			r12 = true
			r16 = r10()
			if (r16["done"]) break
			r12 = false
			r17 = Scope[2]
			Scope[4][2] = r16["value"]
			r18 = Scope[4][2]["enabled"]
			r16 = r16["value"]
			if (r18 === !Boolean([]))
				|| (Scope[4][2]["manualStopped"])
			{
				continue
			}
			if (!Scope[4][2]["autoStart"])
			{
				if (!Scope[4][2]["alwaysOn"])
				{
					continue
				}
			}
			r18 = r0["schedules"]["some"]
			if (r18(func_unknown_0x100000058))
			{
				continue
			}
			if (r1)
			{
				if (!Scope[4][2]["alwaysOn"])
				{
					continue
				}
			}
			r18 = Scope[1][18]["get"]
			r7 = r18(Scope[4][2]["id"])
			if (r18(Scope[4][2]["id"]))
			{
				if (r7["stopping"])
				{
					continue
				}
			}
			if (r7)
				&& (r7["status"] === "blocked")
			{
				ACCU = r7["blockedSince"]
				r18 = r2
				if (!r7["blockedSince"])
				{
					ACCU = 0
				}
				r18 = (r18 - ACCU)
				if (r18 < r4)
				{
					continue
				}
			}
			else
			{
				ACCU = !Boolean(r7)
				if (!!Boolean(r7))
				{
					ACCU = r7["status"] === "error"
					if (!r7["status"] === "error")
					{
						if (r7["status"] === "stopped")
						{
							r18 = r7["procs"]
							r18 = r18["length"]
							ACCU = r18 === 0
						}
					}
				}
				r8 = ACCU
				if (!ACCU)
				{
					continue
				}
				if (r7)
				{
					if (r7["deadSince"])
					{
						r18 = (r2 - r7["deadSince"])
						if (r18 < r3)
						{
							continue
						}
					}
				}
			}
			r22 = Date(r0)
			r21 = r22["toISOString"]
			r20 = ("\\n[" + r21())
			r20 = (r20 + "] WATCHDOG: \\x625\\x639\\x627\\x62f\\x629 \\x625\\x62d\\x64a\\x627\\x621 \\x642\\x646\\x627\\x629 \\x645\\x62a\\x648\\x642\\x641\\x629\\n")
			ACCU = func_appendLog_0x10000000b(Scope[4][2]["id"], r20)
			r18 = Scope[4]
			try
			{
				ACCU = func_resetBytes_0x100000048(Scope[4][2]["id"])
				r21 = !Boolean([])
				ACCU = func_startProcesses_0x100000036(Scope[4][2]["id"], r21)
				continue
			}
			catch {}
			r19 = ACCU
			ACCU = null
			ACCU = Scope[5]
			r19 = Scope[4]
			r22 = "watchdog start failed: "
			r22 = (r22 + Scope[5][2]["message"])
			r22 = (r22 + "\\n")
			ACCU = func_appendLog_0x10000000b(Scope[4][2]["id"], r22)
		}
		ACCU = -1
		r14 = -1
		r13 = -1
	}
	catch
	{
		r14 = ACCU
		r13 = 0
	}
	if (!r12)
	{
		r18 = Scope[2]
		try
		{
			if (!r11["return"] == undefined)
			{
				ACCU = r11["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r13 === 0)
	{
		ACCU = r14
	}
	return undefined
}
function func_unknown_0x100000058(a0)
{
	r0 = a0["channelId"]
	ACCU = r0 === Scope[4][2]["id"]
	if (r0 === Scope[4][2]["id"])
	{
		r0 = a0["enabled"]
		ACCU = !(r0 === !Boolean([]))
	}
	return ACCU
}
function func_unknown_0x100000057()
{
	r0 = func_0x1d1a_0x100000047
	r14 = 628
	r11 = Date["now"]
	r1 = r11()
	r12 = GetIterator(Scope[1][18])
	r11 = r12["next"]
	ACCU = false
	r13 = false
	r16 = Scope[1]
	try
	{
		while (true)
		{
			r13 = true
			r17 = r11()
			if (r17["done"]) break
			r13 = false
			r18 = r17["value"]
			r20 = GetIterator(r17["value"])
			ACCU = false
			r21 = false
			r24 = Scope[1]
			try
			{
				if (!false)
				r21 = true
				r25 = r20["next"]()
				ACCU = r25["done"]
					&& (!r25["done"])
				{
					r21 = false
					ACCU = r25["value"]
				}
				else
				{
					ACCU = undefined
				}
				r6 = ACCU
				if (!r21)
				r21 = true
				r25 = r20["next"]()
				ACCU = r25["done"]
					&& (!r25["done"])
				{
					r21 = false
					ACCU = r25["value"]
				}
				else
				{
					ACCU = undefined
				}
				r7 = ACCU
				ACCU = -1
				r23 = -1
				r22 = -1
			}
			catch
			{
				r23 = ACCU
				r22 = 0
			}
			if (!r21)
			{
				r26 = Scope[1]
				try
				{
					if (!r20["return"] == undefined)
					{
						ACCU = r20["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			if (r22 === 0)
			{
				r14 = 0
				r15 = r23
				break
			}
			if (r7)
				&& (!r7[r0(429)])
			r18 = r7[r0(478)]
				&& (r18 === "running")
				&& (!r7["procs"][r0(662)])
			{
				continue
			}
			ACCU = r7[r0(556)]
			r18 = r1
			if (!r7[r0(556)])
			{
				ACCU = r1
			}
			r18 = (r18 - ACCU)
			if (r18 < 90000)
			{
				continue
			}
			ACCU = Scope[1][61]["get"](r6)
			if (!Scope[1][61]["get"](r6))
			{
				ACCU = r7[r0(556)]
				if (!r7[r0(556)])
				{
					ACCU = r1
				}
			}
			r8 = ACCU
			r18 = (r1 - r8)
			if (r18 < 120000)
			{
				continue
			}
			r22 = Date(r0)
			r20 = ("\\n[" + r22["toISOString"]())
			r20 = (r20 + r0(401))
			r21 = Math[r0(644)]
			r23 = ((r1 - r8) \ 1000)
			r20 = (r20 + r21(r23))
			r22 = 451
			r20 = (r20 + r0(451))
			ACCU = func_appendLog_0x10000000b(r6, r20)
			r18 = Scope[1][61][r0(445)]
			ACCU = r18(r6, r1)
			r19 = r7[r0(441)]
			r21 = 549
			r18 = r19[r0(549)]
			r20 = r18()
			r19 = GetIterator(r20)
			r18 = r19["next"]
			ACCU = false
			r20 = false
			r23 = Scope[1]
			try
			{
				while (true)
				{
					r20 = true
					r24 = r18()
					if (r24["done"]) break
					r20 = false
					if (!r24["value"][r0(529)]) continue
					r26 = r24["value"][r0(529)]
					ACCU = func_killPid_0x10000000f(r26)
				}
				ACCU = -1
				r22 = -1
				r21 = -1
			}
			catch
			{
				r22 = ACCU
				r21 = 0
			}
			if (!r20)
			{
				r25 = Scope[1]
				try
				{
					if (!r19["return"] == undefined)
					{
						ACCU = r19["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			if (!r21 === 0) continue
			ACCU = 0
			r14 = 0
			r15 = r22
			break
		}
		ACCU = -1
		r15 = -1
		r14 = -1
	}
	catch
	{
		r15 = ACCU
		r14 = 0
	}
	if (!r13)
	{
		r18 = Scope[1]
		try
		{
			if (!r12["return"] == undefined)
			{
				ACCU = r12["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r14 === 0)
	{
		ACCU = r15
	}
	return undefined
}
function func_unknown_0x100000056()
{
	r14 = <closure>
	r15 = <this>
	r1 = ACCU
	r14 = Scope[1]
	try
	{
		if (Scope[1][67])
		{
			r16 = undefined
			r15 = r1
			return r16
		}
		r15 = !(!Boolean([]))
		ACCU = Scope[1][67]
		ACCU = r15
		Scope[1][67] = r15
		r17 = Scope[1]
		try
		{
			r20 = Scope[1][18]["keys"]()
			r19 = GetIterator(r20)
			r18 = r19["next"]
			ACCU = false
			r20 = false
			r23 = Scope[1]
			try
			{
				while (true)
				{
					r20 = true
					r24 = r18()
					if (r24["done"]) break
					r20 = false
					r11 = r24["value"]
					r25 = Scope[1][58][r0(611)]
					ACCU = r25(r24["value"])
					r24 = r24["value"]
					if (!ACCU)
					{
						ACCU = 0
					}
					r12 = ACCU
					r26 = func_measureChannelBytes_0x100000044(r11)
					r25 = r1
					r25 = await r26
					r26 = _GeneratorGetResumeMode(r1)
					if (!r26 === 0)
					{
						ACCU = r25
					}
					r25 = Scope[1][58][r0(611)]
					ACCU = r25(r11)
					if (!r25(r11))
					{
						ACCU = 0
					}
					r25 = ACCU
					if (!r25 > r12) continue
					r25 = Scope[1][61][r0(445)]
					r28 = Date[r0(628)]
					r28 = r28()
					ACCU = r25(r11, r28)
					r25 = Scope[1][18][r0(611)]
					r13 = r25(r11)
					if (!r25(r11)) continue
					r27 = Date[r0(628)]
					r27 = r27()
					if (!func_shouldClearRestartPenalty_0x100000045(r13, r27)) continue
					r13["restarts"] = 0
					r27 = r0(540)
					ACCU = func_appendLog_0x10000000b(r11, r27)
				}
				ACCU = -1
				r22 = -1
				r21 = -1
			}
			catch
			{
				r22 = ACCU
				r21 = 0
			}
			if (!r20)
			{
				r25 = Scope[1]
				try
				{
					if (!r19["return"] == undefined)
					{
						ACCU = r19["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			ACCU = r21 === 0
			if (r21 === 0)
			{
				r15 = 0
				r16 = r22
			}
			else
			{
				r18 = Date["now"]
				r4 = r18()
				r5 = 0
				r21 = 649
				r18 = Scope[1][58]["values"]
				r20 = r18()
				r19 = GetIterator(r20)
				r18 = r19["next"]
				ACCU = false
				r20 = false
				r23 = Scope[1]
				try
				{
					while (true)
					{
						r20 = true
						r24 = r18()
						if (r24["done"]) break
						r20 = false
						ACCU = (r5 + r24["value"])
						r25 = r5
						r5 = (r5 + r24["value"])
						r24 = r24["value"]
					}
					ACCU = -1
					r22 = -1
					r21 = -1
				}
				catch
				{
					r22 = ACCU
					r21 = 0
				}
				if (!r20)
				{
					r25 = Scope[1]
					try
					{
						if (!r19["return"] == undefined)
						{
							ACCU = r19["return"]()
						}
						catch {}
					}
				}
				ACCU = null
				if (r21 === 0)
				{
					r15 = 0
					r16 = r22
				}
				else
				{
					r6 = ((r4 - Scope[1][65]) \ 1000)
					if (r6 > 0)
					{
						r7 = (r5 - Scope[1][64])
						ACCU = r7 > 0
						if (r7 > 0)
						{
							ACCU = (r7 / r6)
						}
						else
						{
							ACCU = 0
						}
						r18 = ACCU
						ACCU = Scope[1][66]
						Scope[1][66] = r18
					}
					ACCU = Scope[1][64]
					Scope[1][64] = r5
					ACCU = Scope[1][65]
					Scope[1][65] = r4
					r16 = -1
					r15 = -1
				}
			}
		}
		catch
		{
			r16 = ACCU
			r15 = 0
		}
		r18 = !Boolean([])
		ACCU = Scope[1][67]
		Scope[1][67] = r18
		ACCU = null
		if (r15 === 0)
		{
			ACCU = r16
		}
		r16 = undefined
		r15 = r1
		return r16
	}
	catch {}
	r15 = ACCU
	ACCU = null
	ACCU = Scope[6]
	r15 = Scope[1]
	r16 = r1
	return Scope[6][2]
}
function func_looksLikeHls_0x100000055(a0)
{
	r1 = \m3u8?([?#]|$)\
	r0 = r1["test"]
	ACCU = a0
	if (!a0)
	{
		ACCU = ""
	}
	r3 = ACCU
	r2 = String(r3)
	return r0(r2)
}
function func_unknown_0x100000054(a0, a1)
{
	r0 = func_0x1d1a_0x100000047
	r1 = a0()
	while (true)
	{
		ACCU = []
		if (![]) break
		r3 = Scope[1]
		try
		{
			r5 = r0(402)
			r4 = (parseInt(r5) \ 1)
			r6 = r0(536)
			r4 = (r4 + (parseInt(r6) \ 2))
			r6 = r0(564)
			r5 = (parseInt(r6) \ 3)
			r7 = r0(597)
			r4 = (r4 + (r5 * ((-parseInt(r7)) \ 4)))
			r6 = r0(415)
			r4 = (r4 + ((-parseInt(r6)) \ 5))
			r6 = r0(462)
			r5 = ((-parseInt(r6)) \ 6)
			r7 = r0(480)
			r4 = (r4 + (r5 * (parseInt(r7) \ 7)))
			r6 = r0(612)
			r4 = (r4 + (parseInt(r6) \ 8))
			r6 = r0(440)
			r5 = (parseInt(r6) \ 9)
			r7 = r0(467)
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
		ACCU = Scope[7]
		r4 = Scope[1]
		r7 = r1["shift"]()
		ACCU = r1["push"](r7)
	}
	return undefined
}
function func_purgeChannel_0x100000053(a0)
{
	r0 = Scope[1]
	ACCU = a0
	Scope[8][2] = a0
	r1 = Scope[8]
	try
	{
		ACCU = func_stop_0x100000039(Scope[8][2])
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[9]
		r2 = Scope[8]
	}
	ACCU = setTimeout(func_unknown_0x100000052, 5500)
	return undefined
}
function func_unknown_0x100000052()
{
	ACCU = func_0x1d1a_0x100000047
	r1 = Scope[8]
	try
	{
		r2 = Scope[1][4]["rmSync"]
		r4 = Scope[1][5]["join"]
		r6 = func_hlsRoot_0x100000005()
		r4 = r4(r6, Scope[8][2])
		r5 = new {"recursive": null, "force": null}
		r5["recursive"] = !(!Boolean([]))
		r5["force"] = !(!Boolean([]))
		ACCU = r2(r4, r5)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[10]
		r2 = Scope[8]
	}
	ACCU = Scope[1][58]["delete"](Scope[8][2])
	ACCU = Scope[1][59]["delete"](Scope[8][2])
	r1 = Scope[1][61]["delete"]
	ACCU = r1(Scope[8][2])
	r1 = Scope[1][19]["delete"]
	ACCU = r1(Scope[8][2])
	r1 = Scope[1][20]["delete"]
	ACCU = r1(Scope[8][2])
	ACCU = Scope[1][27]["delete"](Scope[8][2])
	r1 = Scope[8]
	try
	{
		r2 = Scope[1][4]["rmSync"]
		r4 = func_logFile_0x100000006(Scope[8][2])
		r5 = new {"force": null}
		r5["force"] = !(!Boolean([]))
		ACCU = r2(r4, r5)
	}
	catch
	{
		r2 = ACCU
		ACCU = null
		ACCU = Scope[11]
		r2 = Scope[8]
	}
	return undefined
}
function func_clearLog_0x100000051(a0)
{
	ACCU = func_logFile_0x100000006(a0)
	r1 = func_logFile_0x100000006(a0)
	r2 = Scope[1]
	try
	{
		r3 = Scope[1][4]["writeFileSync"]
		ACCU = r3(r1, "")
		ACCU = !(!Boolean([]))
		return !(!Boolean([]))
	}
	catch {}
	r3 = ACCU
	ACCU = null
	ACCU = Scope[12]
	r3 = Scope[1]
	return !Boolean([])
}
function func_readLog_0x100000050(a0, a1)
{
	r1 = func_logFile_0x100000006(a0)
	if (!Scope[1][4]["existsSync"](r1))
	{
		return ""
	}
	r6 = Scope[1][4]["statSync"](r1)
	r2 = r6["size"]
	r6 = Math["min"]
	ACCU = a1
	r8 = r2
	if (!a1)
	{
		ACCU = 65536
	}
	r9 = ACCU
	r3 = r6(r8, r9)
	r6 = Scope[1][4]["openSync"]
	r4 = r6(r1, "r")
	r6 = Buffer["alloc"]
	r5 = r6(r3)
	r6 = Scope[1][4]["readSync"]
	r12 = (r2 - r3)
	r8 = r4
	r9 = r5
	r11 = r3
	ACCU = r6(r8, r9, 0, r11, r12)
	r6 = Scope[1][4]["closeSync"]
	ACCU = r6(r4)
	r6 = r5["toString"]
	return r6("utf8")
}
function func_isRunning_0x10000004f(a0)
{
	r2 = Scope[1][18]["get"]
	ACCU = r2(a0)
	r1 = r2(a0)
	if (r2(a0))
	{
		r2 = r1["status"]
		ACCU = r2 === "running"
		if (!r2 === "running")
		{
			r2 = r1["status"]
			if (!r2 === "starting")
			{
				r2 = r1["status"]
				ACCU = r2 === "restarting"
			}
		}
	}
	return !(!Boolean(ACCU))
}
function func_bytesOutMap_0x10000004e()
{
	ACCU = Map
	return Map(Scope[1][58])
}
function func_ingestBandwidthBps_0x10000004d()
{
	r1 = Math["max"]
	r4 = Math["round"]
	r4 = r4(Scope[1][66])
	return r1(0, r4)
}
function func_0x3dba_0x10000004c()
{
	r0 = Scope[1]
	Scope[13][2] = new ["Cgf0Aa", "iokaLcdyQTIX2k7zITI1inI62yRySsdyTDIN2ytyRqO", "DgLTzw91Da", "xsbtvefsvca", "C3rYAw5NAwz5", "AgXZrgvSzxrLvgHYzxnOB2XK", "lw11BhrPCgXLx3jLCxvLC3rZ", "DMfYAwfUDhm", "ChjVBwLZzxm", "DMLKzw9tAxPL", "BwvKAxvT", "Bwf4uMvZDgfYDhm", "k2DLBNb0CW", "Bg9NB09WywnPDhLqy3q", "ntaWmdaWma", "le5btuu9iG", "y2fWDhvYzvnHzMvnB2rL", "xsdyRnMf2yJyRZOG2ytyPYdzHDMc2kFyT9I5inMf2yBySca", "nJyXndqZv0nMD21Q", "BwfUDwfSu3rVChbLza", "WRSG2kRzHnMc2kFyPTMk2kFzIY4k", "wZa6DL1Zy2fSzt0TmJONBwLUkgLOxcW3mJaPjYXMB3jTyxq9Exv2ndiWCfTIyxnLxq", "C2vNxW", "C3rHCNrZv2L0Aa", "Dw5Yzwy", "CMvMzxjLCG", "C291CMnLswq", "i0vyve0ZvqOJrvHulvGTvKvsu0LptJOZcG", "BwvZC2fNzq", "tw96AwXSys81lJaGkeXPBNv4oYbbBMrYB2LKideXksbbChbSzvDLyKTPDc81mZCUmZyGkeTive1mlcbSAwTLieDLy2TVksbdAhjVBwuVmtiWie1VyMLSzsbtywzHCMKVntm3lJm2", "Aw5JBhvKzxm", "mtqZmJy3mfbAsgffrq", "DMvYEwzHC3q", "AxnwywXPza", "mtaYna", "lwm6yq", "zMLUza", "nxH4", "C3rKzxjY", "lxjLy29UBMvJDf9HDf9LB2y", "kI8Q", "CxvHBgL0Eq", "DgvZDa", "AxnjBNrLz2vY", "B3bLBLn5BMm", "C3rVChbPBMC", "CMfUzg9T", "DMLKzw9ezxzPy2u", "yxvKAw89", "CMvZDgfYDejHy2TVzMznCW", "lxbYzxnLDa", "Ed1xlxCT", "BwfRzv96zxjV", "CxvPy2TgywLSCW", "w291DhzD", "CMvMCMvZAeLTCg9YDgvKvxjSCW", "mtG0nunyzeznzW", "ChjVy3m", "Dg9tDhjPBMC", "BwLU", "ChvZAa", "C2v0", "oMG9B3CVBwrHCLTSz3nDw2jHC2uYxq", "lwzYyw1LCMf0zq", "y2HHBM5LBeLK", "CgfYC2u", "D2fYBMLUzW", "2kSG4OcuinIL2lNyP9IV2kKG2kRyTnI62yRzHcdzGTIZ2lhzITIPcG", "lw1HCa", "nda5nG", "lxn0CMvHBv9SB29W", "lwHSC19ZzwDTzw50x2zPBgvUyw1L", "oNK9sc1Olq", "lxnJx3rOCMvZAg9Sza", "ywX3yxLZt24", "lwf2B2LKx25Lz2f0AxzLx3rZ", "uMvMzxjLCJOG", "Bg9NCW", "nMfhu0npEq", "lxbPEgvSx2zVCM1HDa", "Ahr0Ca", "DxnLCKfNzw50", "BwTKAxjtEw5J", "mtu5nZb4tfbLy1C", "lwm6DG", "k2rPC2nHCMrJB3jYDxb0k2DLBNb0CW", "2ytyPYdyQTMi2kZyRYdySDMi2kFyQnI3inIS2yJyR9IN2kOG2yhzIIdzH9IW2kCG2kFzHnMf2lxyR9IX", "C2nYzwvU", "CNvUBMLUzW", "lwLUChv0x2zVCM1HDa", "y2HPBgrFChjVy2vZCW", "wZa6DL0", "BwfPBG", "lwXVz2XLDMvS", "C3rHDhvZ", "inIV2ylzITMc2kKUcG", "nZm4nZHTuuvLuMy", "cLVyQTMf2yFzKDMexsdyP9Mg2kRyUnIN2leGnsdyR9Mc2kFyPTMcinMc2kJzHcdyPDI52kFyR9IPinIN2ytzHDIT2kFzInMe2kKGknIQ2yhyP9IV2yOG2k3yUnIXieLqkqO", "zw5K", "AgLNAa", "nJrR", "zxHPC3rZu3LUyW", "lxjLy29UBMvJDf9VBL9ODhrWx2vYCM9Y", "CMvWBgfJzq", "svbuvLnTyxj0zxjZuhjVlZeUmcaOtgLUDxG7iefUzhjVAwqGmteP", "CgL4zwXgB3jTyxq", "CMvHzfn5BMm", "lwfY", "zw5KC1DPDgG", "AgXZvgLTzq", "C3bHD24GzxjYB3i6ia", "Bwf0y2G", "BgLIEdi2na", "w2XNC11MB3jTyxq9CMDIysXJB2XVCMnOyw5UzwXTAxHLCJ1Hyt0", "z29Wu2vJB25KCW", "xsbcte9ds0veia", "lw1HEhjHDgu", "CMvZDgfYDhm", "cLVzHDIT2lJzInIXxsdyP9Me2yxyTDIV2leG2yRySDMb2lyG2kFzHnIN2kRyTDIN2yqGkdqWmYKG", "lxjLy29UBMvJDf9KzwXHEv9TyxG", "CMvZB2X2zuzMBxbLzW", "lxrOCMvHzhm", "lxvZzxjFywDLBNq", "C291CMnLrMfPBfn0B3bnAw51DgvZ", "AwrSzvn0B3bfBMfIBgvK", "zhnOB3C", "lxjLy29UBMvJDf9ZDhjLyw1Lza", "C3rHDa", "CMvZDgfYDfrPBwvY", "ywXZyq", "zgvZDhjVEq", "DxjS", "yMLUyxj5", "C3rYzwfTqxv0Aa", "zw5HyMXLza", "y2HHBM5LBhm", "y2f0y2G", "Dg9ju09tDhjPBMC", "AwDUB3jLx2vYCG", "DhjPBq", "C2L6zq", "l2rLDI8", "DMLKzw8W", "DgfZA2TPBgW", "AgXZ", "CgLK", "yxvKAw9ezxzPy2u", "Ahr0Chm", "lxjLy29UBMvJDa", "mti4AW", "CMvZB2X2zq", "mJu2tq", "nJu0nZGWC0HIzvD2", "lwHSC19MBgfNCW", "Dg9WlxjPz2H0", "2kFzHnIQ2lhyRTMk2luG2lRzITIXinI12kFzHnIT", "cLVyQTI52kFzGDMnxsdyP9Me2ylzHTIN2kKG2kRyQnIR2zeG2kJyP9IZ2kRzGTIX2kFySsdIGjqG2kRyTDMb2yRySsdyUDIV2zhyP9IVinIL2lNyP9IV2kKG2kFzHnIQ2ltyUTMk2yqk", "DxnI", "DMLKzw89", "cLVzHDIT2lJzInIXxsdyRTIN2k/zHsdyP9Me2kRySDIU2yRyTsdzHDINinIY2kFzHcdzITIX2yhyTIaOndaZksdyQnI52k8G2kRyRnIV2yRyRYdyP9Me2lhyP9IO2lCG4OcuinIQ2k3zGTMcinMf2yyG2k3yP9Me2kKG2kFzHnIN2ltyQTIX2kFzGYdzInMg2yxyTYdyP9Me2kJyQYdzGDMkinMe2yJyRDIPinIN2ytyQTIX2kFyRTMk2luUinIL2lNyP9IV2kKG2kFzHnMf2k3yP9Mi2ytyQsdyQnI52k8G", "C29Tzq", "lNrZ", "AxnxAw5KB3DZ", "BwfZDgvYlM0ZDtG", "Bg9NB1nPEMvqy3q", "C2XPy2u", "xsbfweLuia", "zgvHzfnPBMnL", "Bg9NB0LTywDL", "odaWAW", "uK9pva", "y2XVC2u", "C3rHCNrLzef0", "A2v5CW", "lwj1zNnPEMu", "Dw5SAw5Ru3LUyW", "C2nHBgu9lti6", "y2HHBM5LBc0", "lxj0yNvMC2L6zq", "lwHPzgvFyMfUBMvY", "mZbWt1rOyvi", "Axb0DG", "CM1tEw5J", "lwHLywrLCNm", "2yxyTDIV2leG2kFzHnMc2yByP9IPinI62yRySsdzHDMi2kZzInIV", "yMXVy2TLzfnPBMnL", "zMLSDgvY", "u0Lhs0Lmta", "Edi2nfrOCMvHzhm", "CNvU", "lwi6DG", "inIV2ylzITMc2kKG2ytyQTMb2kFyR9MkinIT2lJySsbjunIminIR2yuG2kxyUDIN2k/yQsdyP9Me2yxyRDIN2yJzHnIPinIQ2ytzGTIN2kBzITIN2ySUinIQ2k3zGTMcinMf2yyG2kFyTnIQ2lhyP9MdinIN2ytzHDIY2yJzKDIVinIJ2yGG2k3yUnIXinIL2lNyP9IV2kKG2kFzHnIO2kSUcG", "ndqXmda", "Aw5KzxGUBtn1oa", "Bg9NB092zxjSyxK", "C2nOzwr1BgvZ", "y2XVC2vtEw5J", "zxjYB3i", "lwfUywX5EMvKDxjHDgLVBG", "lwi6yq", "lxrOCMvHzf9XDwv1zv9ZAxPL", "CMvHzgrPCG", "C3bSAxq", "CMvUyw1Lu3LUyW", "lxzPzgvVx3nPEMu", "AxnbyNnVBhv0zq", "zgf0yq", "oNK9", "y29Uy2f0", "C3rYzwfTvxnLCKfNzw50", "yxv0B1n0yxj0", "zxHWB3j0CW", "BwPWzwC", "mJyXmtCYzMLnv292", "DhLWzq", "DxrMoa", "zMzTCgvNugf0Aa", "CgLKCY5QC29U", "CMvZDgfYDcbMywLSzwq6ia", "DJrSmG", "B25SAw5Lswq", "vKXdlZmUmc4YmcbmAwjwtemVmY4WlJiW", "lwzPBhrLCL9JB21WBgv4", "ignVzgu9", "lxjLy29UBMvJDf9VBL9Uzxr3B3jRx2vYCM9Y", "CMvZDgfYDgLUzW", "lwzMBgfNCW", "z2v0", "nda0ndi0y2jeENjm", "yMXVy2TLzfn0B3bnAw51DgvZ", "lxj3x3rPBwvVDxq", "lxbYB2jLC2L6zq", "ywfJ", "zgvZA3rVCa", "DhjHBNnJB2rL", "Bg9NB0vUywjSzwq", "cLVyRnMh2kFySL0G2yhyTnMeinIZ2lhzITI5inMf2kRzG9IX2leGkdyG2yxySDIN2kOG2yxyQTIQ2kFzHnMk2kKPiokaLcdzITIO2k/zIcdyP9Me2kZzH9IN2liG2yxzGDI12yJzHnIN2ySG2kpzIcdzHDIZ2kRyRTIV2y7zHDIN2ySG2yxzHIdyQTI32kJzITMcinII2k7ySs4G2kxyQnI32kFyOsdyPDI52kFyR9IPinIN2ytzHDIT2kFzInMe2kKG2kxzHnMjinMd2yqGmtaG2kVzInIN2yBzJsaO2kRzJ9IZ2kRyO9Mg2yeG2yhzInIX2kFzIYdyUDMg2k8G2lNzInIV2kRzHYKUcG", "D3jPDgvgAwXLu3LUyW", "zgvSzxrL", "lwnYzG", "lw1HEf9TDxHPBMDFCxvLDwvFC2L6zq", "DMnVzgvJ", "C2v0DgLUz3m", "cLVyRnMh2kFySL0G2kFzHnMb2ltzHcdzHDIZ2kRzHDIXiokaLcdyPDIO2lFyP9IHinIL2lNyP9IV2kKG2kFzHnMf2k3yP9Mi2ytyQsdyPDMe2yKG2ypzHcaZmcdyQ9IN2yBzITIPlIdyP9Mb2k3yTsdyQTMi2lxzITMeinIN2ytyRnMh2kFySIdzInIQ2lNySDMk2yhzHY4k", "BM93", "yxbWzw5KrMLSzq", "yML0CMf0zq", "yMXVy2TLza", "2yBzInI5inMf2lxyR9IXinI62yRySsdzHDI52lhzInMboIa", "yxv0B1jLC3rHCNrdCMfZAgvK", "C3rHCNrPBMC", "ywXSB2m", "y29WEq", "lxzJB2rLyW", "zgvSzxrLx3nLz21LBNrZk2LUzgvWzw5Kzw50x3nLz21LBNrZk3bYB2DYyw1Fzgf0zv90Aw1L", "EMvYB2XHDgvUy3K", "2kFzHTIQ2yFzIsdyP9Me2kFyTnIQ2lhyP9MdiokaLcdzHnINinMk2yxzG9MginIQ2ltyUTMk2yqG2kFzHnMc2yBzInIN2kOUinMk2lhyRnMjinIQ2kZyR9Mk2k8G2kFzHnIQ2lhyRTMk2luU", "AgXZuM9VDa", "lwHSC19KzwXLDgvFDgHYzxnOB2XK", "DgHYzwfKCW", "CM91BMq", "D2f0y2HKB2CGC3rHCNqGzMfPBgvKoIa", "yMXVy2TLzeHPDhm", "Bwf4", "lwTLEwLUDf9TAw4", "DMfSDwvZ", "AxneAxjLy3rVCNK", "Btn1oa", "BwfW", "nZiWCa", "2ylzHTIN2kKG2lRzITIXinMf2yJyRnMi2k/yQq", "AwDUB3jL", "l2LUzgv4lM0ZDtGk", "ywrK", "Bg9NB1bVC2L0Aw9U", "zNbZ", "C3rHCNr1CcbXDwv1ztOG", "BgfIzwW", "BgvUz3rO", "BMfTzq", "i0vyvc1ylvnuuKvbts1jtKy6qKforfDjrfripq", "mJaWmdaWmda", "Edi2nfbYzxnLDa", "AM9PBG", "A2LSBa", "inMf2lhyP9IQiokaLcdyPDMk2ylyP9MbinIN2ytzGTMg2kFyQsa", "C3rVChbLza", "BxvSDgKTBtn1oa", "scOWlJaY", "cLVyQTIT2k/zITIRinIN2ytySDIN2kJyT10G2lhzGDI2icG0mdmPinMf2yyG2k7yP9IV2yuG2kFzHnIQ2lhyRTMk2luG4OcuinIQ2kZyR9Mk2k8G2lhyP9IO2lCG2kFzHnMc2yByP9IPinMf2yyG2kFzHnIU2kFyR9MfinMi2kxyUDIN2k/yQsdyP9Me2yxyRDIN2yJzHnIPinIU2ytyP9MeinIR2yJyP9Mg2y0UlI4k", "AgfZ", "lgzVCM1HDd15Dxy0mJbWw291DhzD", "CMvHzgrPCLn5BMm", "Edi2nff1ywXPDhLnB2rL", "CMvHzezPBgvtEw5J", "tgf2zI82mc4XnI4Xmda", "lwfSBg93zwrFzxH0zw5ZAw9UCW", "DgHLBG", "Bg93", "CxvHBgL0AwvZ"]
	Scope[1][70] = func_0x3dba_0x10000004b
	return Scope[1][70]()
}
function func_0x3dba_0x10000004b()
{
	return Scope[13][2]
}
function func_runningCount_0x10000004a()
{
	r1 = 0
	r8 = 557
	r5 = Scope[1][18]["keys"]
	r7 = r5()
	r6 = GetIterator(r7)
	r5 = r6["next"]
	ACCU = false
	r7 = false
	r10 = Scope[1]
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			ACCU = func_isRunning_0x10000004f(r11["value"])
			r11 = r11["value"]
			if (!ACCU) continue
			ACCU = (r1 + 1)
			r1 = (r1 + 1)
		}
		ACCU = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = ACCU
		r8 = 0
	}
	if (!r7)
	{
		r12 = Scope[1]
		try
		{
			if (!r6["return"] == undefined)
			{
				ACCU = r6["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r8 === 0)
	{
		ACCU = r9
	}
	return r1
}
function func_totalBytesOut_0x100000049()
{
	r0 = 0
	r6 = Scope[1][58]["values"]()
	r5 = GetIterator(r6)
	r4 = r5["next"]
	ACCU = false
	r6 = false
	r9 = Scope[1]
	try
	{
		while (true)
		{
			r6 = true
			r10 = r4()
			if (r10["done"]) break
			r6 = false
			ACCU = (r0 + r10["value"])
			r11 = r0
			r0 = (r0 + r10["value"])
			r10 = r10["value"]
		}
		ACCU = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = ACCU
		r7 = 0
	}
	if (!r6)
	{
		r11 = Scope[1]
		try
		{
			if (!r5["return"] == undefined)
			{
				ACCU = r5["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r7 === 0)
	{
		ACCU = r8
	}
	return r0
}
function func_resetBytes_0x100000048(a0)
{
	r1 = Scope[1][58]["set"]
	ACCU = r1(a0, 0)
	r1 = Scope[1][59]["set"]
	r4 = Map(func_0x1d1a_0x100000047)
	ACCU = r1(a0, r4)
	r1 = Scope[1][61]["set"]
	r4 = Date["now"]
	r4 = r4()
	ACCU = r1(a0, r4)
	return undefined
}
function func_0x1d1a_0x100000047(a0, a1)
{
	a0 = (a0 - 397)
	r0 = Scope[1][70]()
	r1 = r0[a0]
	if (Scope[1][68]["fBZzgd"] == undefined)
	{
		Scope[1][68]["UzrqBU"] = func_0x3da77d_0x100000046
		Scope[1][68]["zilzpW"] = {}
		Scope[1][68]["fBZzgd"] = !(!Boolean([]))
	}
	r3 = r0[0]
	r4 = (a0 + r3)
	if (!Scope[1][68]["zilzpW"][r4])
	{
		r1 = Scope[1][68]["UzrqBU"](r1)
		Scope[1][68]["zilzpW"][r4] = r1
		ACCU = r1
	}
	else
	{
		ACCU = Scope[1][68]["zilzpW"][r4]
	}
	return r1
}
function func_0x3da77d_0x100000046(a0)
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
function func_shouldClearRestartPenalty_0x100000045(a0, a1)
{
	if (!a0)
		|| (a0["stopping"])
	r1 = a0["status"]
		|| (!r1 === "running")
	{
		return !Boolean([])
	}
	if (!a0["procs"])
	r1 = a0["procs"]
		|| (!r1["length"])
	{
		return !Boolean([])
	}
	r1 = a0["restarts"]
	if (!r1 > 0)
	{
		return !Boolean([])
	}
	ACCU = a0["startedAt"]
	r1 = a1
	if (!a0["startedAt"])
	{
		ACCU = 0
	}
	r1 = (r1 - ACCU)
	return r1 >= 60000
}
function func_measureChannelBytes_0x100000044(a0)
{
	r22 = Scope[1]
	r23 = <closure>
	r24 = <this>
	ACCU = null
	r23 = Scope[14]
	try
	{
		ACCU = func_0x1d1a_0x100000047
		Scope[14][2] = func_0x1d1a_0x100000047
		r24 = Scope[14]
		try
		{
			r25 = Scope[1][5]["join"]
			r27 = func_hlsRoot_0x100000005()
			r5 = r25(r27, a0)
			if (!Scope[1][59]["has"](a0))
			{
				r28 = Map(Scope[14])
				ACCU = Scope[1][59]["set"](a0, r28)
			}
			r25 = Scope[1][59]["get"]
			r6 = r25(a0)
			r26 = Scope[1][58]
			r28 = 611
			r25 = Scope[1][58]["get"]
			ACCU = r25(a0)
			if (!r25(a0))
			{
				ACCU = 0
			}
			r7 = ACCU
			ACCU = undefined
			r8 = undefined
			r25 = Scope[14]
			try
			{
				r28 = func_0x1d1a_0x100000047
				r26 = Scope[1][4]["promises"]["readdir"]
				r29 = new {"withFileTypes": null}
				r29["withFileTypes"] = !(!Boolean([]))
				r27 = r26(r5, r29)
				r26 = Scope[14]
				r26 = await r27
				r27 = _GeneratorGetResumeMode(Scope[14])
				if (!r27 === 0)
				{
					ACCU = r26
				}
				r8 = r26
				ACCU = r8
			}
			catch
			{
				r26 = ACCU
				ACCU = null
				ACCU = Scope[15]
				r26 = Scope[14]
				r28 = undefined
				r27 = Scope[14]
				return r28
			}
			r9 = new ["."]
			r26 = GetIterator(r8)
			r25 = r26["next"]
			ACCU = false
			r27 = false
			r30 = Scope[14]
			try
			{
				while (true)
				{
					r27 = true
					r31 = r25()
					if (r31["done"]) break
					r27 = false
					r32 = r31["value"]["isDirectory"]
					if (!r32()) continue
					r32 = r9["push"]
					r34 = r31["value"]["name"]
					ACCU = r32(r34)
				}
				ACCU = -1
				r29 = -1
				r28 = -1
			}
			catch
			{
				r29 = ACCU
				r28 = 0
			}
			if (!r27)
			{
				r32 = Scope[14]
				try
				{
					if (!r26["return"] == undefined)
					{
						ACCU = r26["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			if (r28 === 0)
			{
				ACCU = r29
			}
			r26 = GetIterator(r9)
			r25 = r26["next"]
			ACCU = false
			r27 = false
			r30 = Scope[14]
			try
			{
				while (true)
				{
					r27 = true
					r31 = r25()
					if (r31["done"]) break
					r27 = false
					r32 = Scope[14]
					Scope[16][2] = r31["value"]
					ACCU = Scope[16][2] === "."
					r31 = r31["value"]
					if (Scope[16][2] === ".")
					{
						ACCU = r5
					}
					else
					{
						r33 = Scope[1][5]["join"]
						ACCU = r33(r5, Scope[16][2])
					}
					r11 = ACCU
					ACCU = undefined
					r12 = undefined
					r33 = Scope[16]
					try
					{
						r35 = Scope[1][4]["promises"]
						r35 = r35["readdir"](r11)
						r34 = Scope[14]
						r34 = await r35
						r35 = _GeneratorGetResumeMode(Scope[14])
						if (!r35 === 0)
						{
							ACCU = r34
						}
						r12 = r34
						ACCU = r12
					}
					catch
					{
						r34 = ACCU
						ACCU = null
						ACCU = Scope[17]
						r34 = Scope[16]
						continue
					}
					r34 = GetIterator(r12)
					r33 = r34["next"]
					ACCU = false
					r35 = false
					r38 = Scope[16]
					try
					{
						while (true)
						{
							r35 = true
							r39 = r33()
							if (r39["done"]) break
							r35 = false
							r40 = r39["value"]["endsWith"]
							r42 = ".ts"
							if (!r40(r42))
							{
								continue
							}
							r40 = r6["has"]
							if (r40(((Scope[16][2] + "/") + r39["value"])))
							{
								continue
							}
							ACCU = undefined
							r19 = undefined
							r40 = Scope[16]
							try
							{
								r42 = Scope[1][4]["promises"]
								r41 = r42["stat"]
								r43 = Scope[1][5]["join"]
								r43 = r43(r11, r39["value"])
								r42 = r41(r43)
								r41 = Scope[14]
								r41 = await r42
								r42 = _GeneratorGetResumeMode(Scope[14])
								if (!r42 === 0)
								{
									ACCU = r41
								}
								ACCU = r41["size"]
								r19 = r41["size"]
							}
							catch
							{
								r41 = ACCU
								ACCU = null
								ACCU = Scope[18]
								r41 = Scope[16]
								continue
							}
							r40 = r6["set"]
							ACCU = r40(((Scope[16][2] + "/") + r39["value"]), r19)
							ACCU = (r7 + r19)
							r40 = r7
							r7 = (r7 + r19)
						}
						ACCU = -1
						r37 = -1
						r36 = -1
					}
					catch
					{
						r37 = ACCU
						r36 = 0
					}
					if (!r35)
					{
						r40 = Scope[16]
						try
						{
							if (!r34["return"] == undefined)
							{
								ACCU = r34["return"]()
							}
							catch {}
						}
					}
					ACCU = null
					if (r36 === 0)
					{
						r28 = 0
						r29 = r37
						break
					}
					if (!r6["size"] > 2000) continue
					r35 = r12["filter"]
					r35 = r35(func_unknown_0x100000042)
					r37 = 652
					r34 = r35["map"]
					r34 = r34(func_unknown_0x100000043)
					ACCU = Set
					r13 = Set(r34)
					r36 = 557
					r33 = r6["keys"]
					r35 = r33()
					r34 = GetIterator(r35)
					r33 = r34["next"]
					ACCU = false
					r35 = false
					r38 = Scope[16]
					try
					{
						while (true)
						{
							r35 = true
							r39 = r33()
							if (r39["done"]) break
							r35 = false
							if (!r39["value"]["startsWith"]((Scope[16][2] + "/"))) continue
							r40 = r13["has"]
							if (r40(r39["value"])) continue
							ACCU = r6["delete"](r39["value"])
						}
						ACCU = -1
						r37 = -1
						r36 = -1
					}
					catch
					{
						r37 = ACCU
						r36 = 0
					}
					if (!r35)
					{
						r40 = Scope[16]
						try
						{
							if (!r34["return"] == undefined)
							{
								ACCU = r34["return"]()
							}
							catch {}
						}
					}
					ACCU = null
					if (!r36 === 0) continue
					ACCU = 0
					r28 = 0
					r29 = r37
					break
				}
				ACCU = -1
				r29 = -1
				r28 = -1
			}
			catch
			{
				r29 = ACCU
				r28 = 0
			}
			if (!r27)
			{
				r33 = Scope[14]
				try
				{
					if (!r26["return"] == undefined)
					{
						ACCU = r26["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			if (r28 === 0)
			{
				ACCU = r29
			}
			r25 = Scope[1][58]["set"]
			ACCU = r25(a0, r7)
		}
		catch
		{
			r25 = ACCU
			ACCU = null
			ACCU = Scope[19]
			r25 = Scope[14]
		}
		r25 = undefined
		r24 = Scope[14]
		ACCU = r25
		return r25
	}
	catch {}
	r24 = ACCU
	ACCU = null
	ACCU = Scope[20]
	r24 = Scope[14]
	r25 = Scope[14]
	return Scope[20][2]
}
function func_unknown_0x100000043(a0)
{
	return ((Scope[16][2] + "/") + a0)
}
function func_unknown_0x100000042(a0)
{
	r0 = a0["endsWith"]
	r2 = ".ts"
	return r0(r2)
}
function func_statusOf_0x100000041(a0)
{
	r2 = Scope[1][18]["get"]
	r1 = r2(a0)
	r2 = new {"status": null, "pid": null, "procs": null, "startedAt": null, "restarts": null, "bytesOut": null, "lastErrors": null, "lastError": null}
	ACCU = r1
	if (r1)
	{
		ACCU = r1["status"]
	}
	else
	{
		ACCU = "stopped"
	}
	r2["status"] = ACCU
	if (r1)
	r3 = r1["procs"]
	ACCU = r3[0]
		&& (r3[0])
	{
		ACCU = r1["procs"][0]["pid"]
	}
	else
	{
		ACCU = null
	}
	r2["pid"] = ACCU
	ACCU = r1
	if (r1)
	{
		r3 = r1["procs"]
		ACCU = r3["length"]
	}
	else
	{
		ACCU = 0
	}
	r2["procs"] = ACCU
	ACCU = r1
	if (r1)
	{
		ACCU = r1["startedAt"]
	}
	else
	{
		ACCU = null
	}
	r2["startedAt"] = ACCU
	ACCU = r1
	if (r1)
	{
		ACCU = r1["restarts"]
	}
	else
	{
		ACCU = 0
	}
	r2["restarts"] = ACCU
	r3 = Scope[1][58]["get"]
	ACCU = r3(a0)
	if (!r3(a0))
	{
		ACCU = 0
	}
	r2["bytesOut"] = ACCU
	r3 = Scope[1][19]["get"]
	ACCU = r3(a0)
	if (!r3(a0))
	{
		ACCU = []
	}
	r2["lastErrors"] = ACCU
	r2["lastError"] = func_lastErrorInfo_0x100000001(a0)
	return r2
}
function func_startupQueue_0x100000040()
{
	r0 = Scope[1]
	Scope[21][2] = func_0x1d1a_0x100000047
	r1 = Scope[1][8]["get"]
	Scope[21][3] = r1()
	r1 = Scope[21][3]["settings"]
	r1 = r1["idleStopEnabled"]
	Scope[21][4] = !(r1 === !Boolean([]))
	r2 = Scope[21][3]["channels"]
	r1 = r2["filter"]
	Scope[21][5] = r1(func_unknown_0x10000003d)
	ACCU = Scope[21][3]["settings"]["startupQueueDelayMs"]
	if (!Scope[21][3]["settings"]["startupQueueDelayMs"])
	{
		ACCU = 8000
	}
	Scope[21][6] = ACCU
	Scope[21][7] = 0
	Scope[21][8] = func_0x8b9fa6_0x10000003f
	ACCU = setTimeout(func_0x8b9fa6_0x10000003f, 3000)
	return undefined
}
function func_0x8b9fa6_0x10000003f()
{
	r1 = Scope[21]
	Scope[22][2] = func_0x1d1a_0x100000047
	if (Scope[21][7] >= Scope[21][5]["length"])
	{
		return undefined
	}
	r3 = Number(Scope[21][7])
	r4 = (Number(Scope[21][7]) + 1)
	ACCU = Scope[21][7]
	Scope[21][7] = r4
	ACCU = Scope[21][5][r3]
	Scope[22][3] = Scope[21][5][r3]
	r2 = Scope[22]
	try
	{
		r4 = Scope[21][3]["schedules"]
		r3 = r4["some"]
		ACCU = r3(func_unknown_0x10000003e)
		r0 = r3(func_unknown_0x10000003e)
		if (!r3(func_unknown_0x10000003e))
		{
			if (Scope[22][3]["alwaysOn"])
				|| (!Scope[21][4])
			{
				ACCU = func_start_0x100000037(Scope[22][3]["id"])
			}
		}
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[23]
		r3 = Scope[22]
		r6 = "startup queue: "
		r6 = (r6 + Scope[23][2]["message"])
		r6 = (r6 + "\\n")
		ACCU = func_appendLog_0x10000000b(Scope[22][3]["id"], r6)
	}
	ACCU = setTimeout(func_0x8b9fa6_0x10000003f, Scope[21][6])
	return undefined
}
function func_unknown_0x10000003e(a0)
{
	r0 = a0["channelId"]
	ACCU = r0 === Scope[22][3]["id"]
	if (r0 === Scope[22][3]["id"])
	{
		r0 = a0["enabled"]
		ACCU = !(r0 === !Boolean([]))
	}
	return ACCU
}
function func_unknown_0x10000003d(a0)
{
	ACCU = !(a0["enabled"] === !Boolean([]))
	if (!(a0["enabled"] === !Boolean([])))
	{
		ACCU = !Boolean(a0["manualStopped"])
		if (!Boolean(a0["manualStopped"]))
		{
			if (!a0["autoStart"])
			{
				ACCU = a0["alwaysOn"]
			}
		}
	}
	return ACCU
}
function func_stopAll_0x10000003c()
{
	r7 = Scope[1][18]
	r6 = Scope[1][18]["keys"]
	r6 = Array.from(r6())
	r5 = GetIterator(r6)
	r4 = r5["next"]
	ACCU = false
	r6 = false
	r9 = Scope[1]
	try
	{
		while (true)
		{
			r6 = true
			r10 = r4()
			if (r10["done"]) break
			r6 = false
			ACCU = func_stop_0x100000039(r10["value"])
			r10 = r10["value"]
		}
		ACCU = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = ACCU
		r7 = 0
	}
	if (!r6)
	{
		r11 = Scope[1]
		try
		{
			if (!r5["return"] == undefined)
			{
				ACCU = r5["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r7 === 0)
	{
		ACCU = r8
	}
	return undefined
}
function func_restart_0x10000003b(a0)
{
	r0 = Scope[1]
	Scope[24][2] = a0
	ACCU = func_stop_0x100000039(Scope[24][2])
	ACCU = setTimeout(func_unknown_0x10000003a, 1500)
	return undefined
}
function func_unknown_0x10000003a()
{
	r0 = Scope[24]
	try
	{
		ACCU = func_start_0x100000037(Scope[24][2])
	}
	catch
	{
		r1 = ACCU
		ACCU = null
		ACCU = Scope[25]
		r1 = Scope[24]
	}
	return undefined
}
function func_stop_0x100000039(a0)
{
	r4 = Scope[1]
	Scope[26][2] = a0
	Scope[26][3] = func_0x1d1a_0x100000047
	r5 = Scope[1][18]["get"]
	r0 = r5(Scope[26][2])
	if (!r5(Scope[26][2]))
	{
		return undefined
	}
	r6 = "stopping"
	r0[r6] = !(!Boolean([]))
	r6 = "status"
	r0[r6] = "stopping"
	if (r0["restartTimer"])
	{
		r6 = r0["restartTimer"]
		ACCU = clearTimeout(r6)
		r6 = "restartTimer"
		r0[r6] = null
		ACCU = null
	}
	r6 = r0["procs"]
	r8 = 549
	r5 = r6["slice"]
	r7 = r5()
	r6 = GetIterator(r7)
	r5 = r6["next"]
	ACCU = false
	r7 = false
	r10 = Scope[26]
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			if (!r11["value"]["pid"]) continue
			r13 = r11["value"]["pid"]
			ACCU = func_killPid_0x10000000f(r13)
		}
		ACCU = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = ACCU
		r8 = 0
	}
	if (!r7)
	{
		r12 = Scope[26]
		try
		{
			if (!r6["return"] == undefined)
			{
				ACCU = r6["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r8 === 0)
	{
		ACCU = r9
	}
	ACCU = setTimeout(func_unknown_0x100000038, 5000)
	return undefined
}
function func_unknown_0x100000038()
{
	r2 = Scope[1][18]["get"]
	r1 = r2(Scope[26][2])
	if (r2(Scope[26][2]))
	{
		if (r1["stopping"])
		{
			ACCU = Scope[1][18]["delete"](Scope[26][2])
		}
	}
	ACCU = func_savePids_0x10000000e()
	return undefined
}
function func_start_0x100000037(a0)
{
	r2 = Scope[1][51]["delete"]
	ACCU = r2(a0)
	ACCU = func_resetBytes_0x100000048(a0)
	ACCU = func_isRunning_0x10000004f(a0)
	if (!func_isRunning_0x10000004f(a0))
	{
		r2 = Scope[1]
		try
		{
			r3 = Scope[1][5]["join"]
			r5 = func_hlsRoot_0x100000005()
			r1 = r3(r5, a0)
			r3 = Scope[1][4]["rmSync"]
			r6 = new {"recursive": null, "force": null}
			r6["recursive"] = !(!Boolean([]))
			r6["force"] = !(!Boolean([]))
			ACCU = r3(r1, r6)
			r3 = Scope[1][4]["mkdirSync"]
			r6 = new {"recursive": null}
			r6["recursive"] = !(!Boolean([]))
			ACCU = r3(r1, r6)
		}
		catch
		{
			r3 = ACCU
			ACCU = null
			ACCU = Scope[27]
			r3 = Scope[1]
		}
	}
	r4 = !Boolean([])
	ACCU = func_startProcesses_0x100000036(a0, r4)
	return undefined
}
function func_startProcesses_0x100000036(a0, a1)
{
	r1 = func_getChannel_0x10000001f(a0)
	if (!func_getChannel_0x10000001f(a0))
	{
		r12 = "قناة غير موجودة"
		ACCU = Error
		ACCU = Error(r12)
	}
	r12 = r1["sourceId"]
	r2 = func_getSource_0x100000021(r12)
	if (!func_getSource_0x100000021(r12))
	{
		r12 = "مصدر القناة غير موجود"
		ACCU = Error
		ACCU = Error(r12)
	}
	r3 = Scope[1][9]["streamAuth"]()
	if (!Scope[1][9]["streamAuth"]())
	r11 = Scope[1][9]["isValid"]
		|| (!r11())
	{
		r12 = "انتهى الاشتراك — لا يمكن تشغيل القنوات. يرجى تجديد الترخيص."
		ACCU = Error
		ACCU = Error(r12)
	}
	r11 = Scope[1][18]["get"]
	r4 = r11(a0)
	if (!a1)
	{
		if (r4)
		{
			r11 = r4["procs"]
			if (r11["length"])
			{
				if (!r4["stopping"])
				{
					ACCU = Error
					ACCU = Error("\\x627\\x644\\x642\\x646\\x627\\x629 \\x62a\\x639\\x645\\x644 \\x628\\x627\\x644\\x641\\x639\\x644")
				}
			}
		}
	}
	if (r4)
	{
		if (r4["restartTimer"])
		{
			ACCU = clearTimeout(r4["restartTimer"])
			r12 = "restartTimer"
			r4[r12] = null
			ACCU = null
		}
	}
	if (!Boolean(r4))
	{
		r11 = new {"procs": [], "status": null, "startedAt": null, "restarts": 0, "stopping": null, "restartTimer": <null}
		r11["status"] = "starting"
		r12 = Date["now"]
		r11["startedAt"] = r12()
		r11["stopping"] = !Boolean([])
		r4 = r11
		r11 = Scope[1][18]["set"]
		ACCU = r11(a0, r4)
	}
	if (!a1)
	{
		r12 = "restarts"
		r4[r12] = 0
	}
	if (!a1)
	{
		r12 = "blockedHits"
		r4[r12] = 0
	}
	r12 = "stopping"
	r4[r12] = !Boolean([])
	ACCU = func_rotateLogIfBig_0x10000000d(a0)
	r12 = Scope[1][4]
	r13 = Scope[1][5]["join"]
	r15 = func_hlsRoot_0x100000005()
	r13 = r13(r15, a0)
	r14 = new {"recursive": null}
	r14["recursive"] = !(!Boolean([]))
	ACCU = Scope[1][4]["mkdirSync"](r13, r14)
	r11 = r2["type"]
	if (r11 === "multi-m3u8")
	{
		r11 = func_buildCopyJobs_0x10000001d(r1, r2)
		r7 = r11["jobs"]
		r8 = r11["qualities"]
		if (!r11["jobs"]["length"])
		{
			r12 = "لا توجد روابط جودات في هذا المصدر"
			ACCU = Error
			ACCU = Error(r12)
		}
		ACCU = func_writeMasterPlaylist_0x100000015(r1, r8)
		r12 = GetIterator(r7)
		r11 = r12["next"]
		ACCU = false
		r13 = false
		r16 = Scope[1]
		try
		{
			while (true)
			{
				r13 = true
				r17 = r11()
				if (r17["done"]) break
				r13 = false
				r19 = r4[r0(441)]
				r18 = r19[r0(444)]
				r23 = r17["value"][r0(661)]
				r21 = a0
				r20 = func_spawnFFmpeg_0x100000035(r21, r17["value"]["args"], r23)
				ACCU = r18(r20)
				r17 = r17["value"]
			}
			ACCU = -1
			r15 = -1
			r14 = -1
		}
		catch
		{
			r15 = ACCU
			r14 = 0
		}
		if (!r13)
		{
			r18 = Scope[1]
			try
			{
				if (!r12["return"] == undefined)
				{
					ACCU = r12["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		if (r14 === 0)
		{
			ACCU = r15
		}
	}
	else
	{
		r11 = func_buildTranscodeArgs_0x10000001b(r1, r2)
		r6 = r11["args"]
		r12 = r4["procs"]
		r16 = "transcode"
		r14 = a0
		r15 = r6
		r13 = func_spawnFFmpeg_0x100000035(r14, r15, r16)
		ACCU = r12["push"](r13)
	}
	r12 = "status"
	r4[r12] = "running"
	r12 = Date["now"]
	r4["startedAt"] = r12()
	ACCU = func_savePids_0x10000000e()
	return undefined
}
function func_spawnFFmpeg_0x100000035(a0, a1, a2)
{
	r2 = Scope[1]
	Scope[28][3] = a0
	Scope[28][2] = a2
	Scope[28][4] = func_0x1d1a_0x100000047
	r3 = Scope[1][9]["streamAuth"]
	if (!r3())
	{
		r7 = Date(r0)
		r6 = r7["toISOString"]
		r5 = ("\\n[" + r6())
		r5 = (r5 + "] BLOCKED ")
		ACCU = Scope[28][2]
		if (!Scope[28][2])
		{
			ACCU = ""
		}
		r5 = (r5 + ACCU)
		r5 = (r5 + " — ترخيص غير صالح\n")
		ACCU = func_appendLog_0x10000000b(Scope[28][3], r5)
		r4 = "الترخيص غير صالح"
		ACCU = Error
		ACCU = Error(r4)
	}
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r0 = r3["settings"]
	r4 = func_resolveFfmpegPath_0x100000000()
	r6 = new {"windowsHide": null}
	r6["windowsHide"] = !(!Boolean([]))
	r5 = a1
	r1 = Scope[1][6](r4, r5, r6)
	r3 = new {"proc": null, "pid": null, "label": null, "startedAt": null}
	r3["proc"] = r1
	r3["pid"] = r1["pid"]
	ACCU = Scope[28][2]
	if (!Scope[28][2])
	{
		ACCU = "main"
	}
	r3["label"] = ACCU
	r4 = Date["now"]
	r3["startedAt"] = r4()
	Scope[28][5] = r3
	r7 = Date(r0)
	r5 = ("\\n[" + r7["toISOString"]())
	r5 = (r5 + "] START ")
	ACCU = Scope[28][2]
	if (!Scope[28][2])
	{
		ACCU = ""
	}
	r5 = (r5 + ACCU)
	r5 = (r5 + "\\nffmpeg ")
	r6 = a1["join"]
	r5 = (r5 + r6(" "))
	r5 = (r5 + "\\n")
	ACCU = func_appendLog_0x10000000b(Scope[28][3], r5)
	r4 = r1["stderr"]
	r5 = "data"
	ACCU = r4["on"](r5, func_unknown_0x10000002a)
	ACCU = r1["on"]("close", func_unknown_0x100000033)
	ACCU = r1["on"]("error", func_unknown_0x100000034)
	return Scope[28][5]
}
function func_unknown_0x100000034(a0)
{
	r2 = "spawn error: "
	r2 = (r2 + a0["message"])
	r2 = (r2 + "\\n")
	return func_appendLog_0x10000000b(Scope[28][3], r2)
}
function func_unknown_0x100000033(a0)
{
	r13 = Scope[28]
	Scope[29][2] = func_0x1d1a_0x100000047
	r14 = Scope[1][18]["get"]
	r0 = r14(Scope[28][3])
	r18 = Date(r0)
	r17 = r18["toISOString"]
	r16 = ("\\n[" + r17())
	r16 = (r16 + "] EXIT ")
	ACCU = Scope[28][2]
	if (!Scope[28][2])
	{
		ACCU = ""
	}
	r16 = (r16 + ACCU)
	r16 = (r16 + " code=")
	r16 = (r16 + a0)
	r16 = (r16 + "\\n")
	ACCU = func_appendLog_0x10000000b(Scope[28][3], r16)
	if (!r0)
	{
		return undefined
	}
	r16 = r0["procs"]
	r15 = r16["filter"]
	r0["procs"] = r15(func_unknown_0x10000002b)
	ACCU = func_savePids_0x10000000e()
	if (r0["stopping"])
	{
		if (r0["procs"]["length"] === 0)
		{
			r15 = "status"
			r0[r15] = "stopped"
			r14 = Scope[1][18]["delete"]
			ACCU = r14(Scope[28][3])
		}
		return undefined
	}
	r14 = Scope[1][8]["get"]
	r14 = r14()
	r1 = r14["settings"]
	r15 = Scope[1][19]["get"]
	ACCU = r15(Scope[28][3])
	if (!r15(Scope[28][3]))
	{
		ACCU = []
	}
	r15 = ACCU
	r14 = r15["join"]
	r2 = r14(" ")
	r15 = \\\\\b40[13]\\\\b|Forbidden|access denied|HTTP error 40[13]\
	r14 = r15["test"]
	r3 = r14(r2)
	r14 = Date["now"]()
	ACCU = Scope[28][5]["startedAt"]
	if (!Scope[28][5]["startedAt"])
	{
		ACCU = 0
	}
	r4 = (r14 - ACCU)
	if (r4 > 60000)
	{
		r15 = "blockedHits"
		r0[r15] = 0
	}
	if (r0["stopping"])
	{
		return undefined
	}
	if (!r0["status"] === "stopped")
	{
		if (r3)
		{
			r9 = func_unknown_0x10000002c()
			if (func_unknown_0x10000002c())
			{
				if (r9["onlineId"])
				{
					r15 = "blockedHits"
					ACCU = r0["blockedHits"]
					r14 = r0
					if (!r0["blockedHits"])
					{
						ACCU = 0
					}
					r14[r15] = (ACCU + 1)
					r14 = r0["blockedHits"]
					if (r14 <= 3)
					{
						if (r0["restartTimer"])
						{
							return undefined
						}
						r0["status"] = "restarting"
						r15 = "restarts"
						r0[r15] = (r0["restarts"] + 1)
						r16 = "\n[تحديث الرابط] رفض (403) من خادم الترخيص — تجديد رابط القناة من الخادم وإعادة المحاولة خلال ثوانٍ...\n"
						ACCU = func_appendLog_0x10000000b(Scope[28][3], r16)
						r15 = "restartTimer"
						r0[r15] = setTimeout(func_unknown_0x10000002f, 4000)
						return undefined
					}
					r14 = Scope[1][8]["get"]
					r14 = r14()
					r14 = r14["settings"]
					ACCU = r14["blockedStopMinutes"]
					if (!r14["blockedStopMinutes"])
					{
						ACCU = 5
					}
					r12 = ACCU
					r16 = "\n[محظور] خادم الترخيص ما زال يرفض (403) بعد تجديد الرابط — تحقق من حالة الاشتراك ونمط البث في لوحة التراخيص. إعادة المحاولة بعد "
					r16 = (r16 + r12)
					r16 = (r16 + " دقيقة.\n")
					ACCU = func_appendLog_0x10000000b(Scope[28][3], r16)
					r0["status"] = "blocked"
					r15 = "blockedSince"
					r0[r15] = Date["now"]()
					return undefined
				}
			}
			ACCU = r0["blockedHits"]
			r14 = r0
			if (!r0["blockedHits"])
			{
				ACCU = 0
			}
			r14["blockedHits"] = (ACCU + 1)
			if (r0["blockedHits"] >= 3)
			{
				r14 = Scope[1][8]["get"]
				r14 = r14()
				r14 = r14["settings"]
				ACCU = r14["blockedStopMinutes"]
				if (!r14["blockedStopMinutes"])
				{
					ACCU = 5
				}
				r11 = ACCU
				r16 = "\n[محظور] المصدر يرفض الاتصال (403) "
				r16 = (r16 + r0["blockedHits"])
				r16 = (r16 + " مرات — إيقاف القناة ")
				r16 = (r16 + r11)
				r16 = (r16 + " دقيقة لتفادي حظر IP، ثم إعادة المحاولة تلقائياً. تحقق من اشتراك المزوّد أو حظر إعادة البث.\n")
				ACCU = func_appendLog_0x10000000b(Scope[28][3], r16)
				r15 = "status"
				r0[r15] = "blocked"
				r15 = Date["now"]
				r0["blockedSince"] = r15()
				ACCU = func_autoFixSource_0x100000028(Scope[28][3])
				return undefined
			}
			if (r0["restartTimer"])
			{
				return undefined
			}
			r0["status"] = "restarting"
			r0["restarts"] = (r0["restarts"] + 1)
			r16 = "\n[تمهّل] انتظار 5 دقائق قبل إعادة المحاولة (تفادي حظر IP)\n"
			ACCU = func_appendLog_0x10000000b(Scope[28][3], r16)
			r0["restartTimer"] = setTimeout(func_unknown_0x100000030, 300000)
			return undefined
		}
	}
	r5 = func_unknown_0x100000031()
	ACCU = r5 === "usb"
	if (!r5 === "usb")
	{
		ACCU = r5 === "screen"
	}
	r6 = ACCU
	if (ACCU)
	{
		ACCU = Infinity
	}
	else
	{
		ACCU = r1["maxRestarts"]
		if (!r1["maxRestarts"])
		{
			ACCU = 20
		}
	}
	r7 = ACCU
	if (r1["autoRestartCrashed"])
	r14 = r0["restarts"]
		&& (r14 < r7)
	{
		if (r0["restartTimer"])
		{
			return undefined
		}
		r0["status"] = "restarting"
		r15 = "restarts"
		r0[r15] = (r0["restarts"] + 1)
		if (r6)
		{
			r15 = "quickFails"
			ACCU = r4 < 15000
			r14 = r0
			if (r4 < 15000)
			{
				ACCU = r0["quickFails"]
				if (!r0["quickFails"])
				{
					ACCU = 0
				}
				ACCU = (ACCU + 1)
			}
			else
			{
				ACCU = 0
			}
			r14[r15] = ACCU
			r14 = r0["quickFails"]
			if (r14 === 6)
			{
				r16 = "\n[جهاز] فشل سريع متكرر (6 مرات متتالية) — يبدو الجهاز مفصولاً أو مستخدَماً من تطبيق آخر. إبطاء إعادة المحاولة إلى كل 10 ثوانٍ (تُستأنف فوراً عند عودته).\n"
				ACCU = func_appendLog_0x10000000b(Scope[28][3], r16)
			}
			r14 = r0["quickFails"]
			if (r14 === 16)
			{
				r16 = "\n[جهاز] الفشل مستمر — إبطاء إعادة المحاولة إلى كل 30 ثانية. افحص توصيل الجهاز وتعريفه.\n"
				ACCU = func_appendLog_0x10000000b(Scope[28][3], r16)
			}
		}
		ACCU = r6
		if (r6)
		{
			ACCU = r0["quickFails"]
			if (!r0["quickFails"])
			{
				ACCU = 0
			}
			r15 = ACCU
			ACCU = func_deviceBackoffMs_0x100000029(r15, r1)
		}
		else
		{
			ACCU = r1["restartBackoffMs"]
			if (!r1["restartBackoffMs"])
			{
				ACCU = 5000
			}
			r14 = ACCU
			r15 = Math["min"]
			ACCU = (r14 * r15(r0["restarts"], 6))
		}
		r8 = ACCU
		r0["restartTimer"] = setTimeout(func_unknown_0x100000032, r8)
	}
	else
	{
		r14 = r0["procs"]["length"]
		if (r14 === 0)
		{
			r15 = "status"
			r0[r15] = "error"
			r15 = Date["now"]
			r0["deadSince"] = r15()
			ACCU = func_autoFixSource_0x100000028(Scope[28][3])
		}
	}
	return undefined
}
function func_unknown_0x100000032()
{
	r5 = Scope[1][18]["get"]
	r1 = r5(Scope[28][3])
	if (!r5(Scope[28][3]))
	{
		return undefined
	}
	r6 = "restartTimer"
	r1[r6] = null
	if (r1["stopping"])
	{
		return undefined
	}
	r6 = r1["procs"]
	r8 = 549
	r5 = r6["slice"]
	r7 = r5()
	r6 = GetIterator(r7)
	r5 = r6["next"]
	ACCU = false
	r7 = false
	r10 = Scope[29]
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			if (!r11["value"]["pid"]) continue
			r13 = r11["value"][r0(529)]
			ACCU = func_killPid_0x10000000f(r13)
		}
		ACCU = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = ACCU
		r8 = 0
	}
	if (!r7)
	{
		r12 = Scope[29]
		try
		{
			if (!r6["return"] == undefined)
			{
				ACCU = r6["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r8 === 0)
	{
		ACCU = r9
	}
	ACCU = []
	r1["procs"] = []
	r5 = Scope[29]
	try
	{
		r8 = !(!Boolean([]))
		ACCU = func_startProcesses_0x100000036(Scope[28][3], r8)
	}
	catch
	{
		r6 = ACCU
		ACCU = null
		ACCU = Scope[30]
		r6 = Scope[29]
		r9 = "restart failed: "
		r9 = (r9 + Scope[30][2]["message"])
		r9 = (r9 + "\\n")
		ACCU = func_appendLog_0x10000000b(Scope[28][3], r9)
		r8 = "status"
		r1[r8] = "error"
	}
	return undefined
}
function func_unknown_0x100000031()
{
	ACCU = func_getChannel_0x10000001f(Scope[28][3])
	r1 = func_getChannel_0x10000001f(Scope[28][3])
	if (func_getChannel_0x10000001f(Scope[28][3]))
	{
		ACCU = func_getSource_0x100000021(r1["sourceId"])
	}
	r2 = ACCU
	if (ACCU)
	{
		ACCU = r2["type"]
	}
	return ACCU
}
function func_unknown_0x100000030()
{
	r5 = Scope[1][18]["get"]
	r1 = r5(Scope[28][3])
	if (!r5(Scope[28][3]))
		|| (r1["stopping"])
	{
		return undefined
	}
	r1["restartTimer"] = null
	r6 = r1["procs"]
	r8 = 549
	r5 = r6["slice"]
	r7 = r5()
	r6 = GetIterator(r7)
	r5 = r6["next"]
	ACCU = false
	r7 = false
	r10 = Scope[29]
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			if (!r11["value"][r0(529)]) continue
			r13 = r11["value"][r0(529)]
			ACCU = func_killPid_0x10000000f(r13)
		}
		ACCU = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = ACCU
		r8 = 0
	}
	if (!r7)
	{
		r12 = Scope[29]
		try
		{
			if (!r6["return"] == undefined)
			{
				ACCU = r6["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r8 === 0)
	{
		ACCU = r9
	}
	r6 = "procs"
	ACCU = []
	r1[r6] = []
	r5 = Scope[29]
	try
	{
		r8 = !(!Boolean([]))
		ACCU = func_startProcesses_0x100000036(Scope[28][3], r8)
	}
	catch
	{
		r6 = ACCU
		ACCU = null
		ACCU = Scope[31]
		r6 = Scope[29]
		r9 = "restart failed: "
		r9 = (r9 + Scope[31][2]["message"])
		r9 = (r9 + "\\n")
		ACCU = func_appendLog_0x10000000b(Scope[28][3], r9)
		r8 = "status"
		r1[r8] = "error"
	}
	return undefined
}
function func_unknown_0x10000002f()
{
	r1 = Scope[29]
	Scope[32][2] = func_0x1d1a_0x100000047
	r0 = Scope[1][18]["get"](Scope[28][3])
	if (!Scope[1][18]["get"](Scope[28][3]))
		|| (r0["stopping"])
	{
		return undefined
	}
	r3 = "restartTimer"
	r0[r3] = null
	r5 = Scope[1][2]("./onlinechannels")
	r4 = r5["refreshImportedUrls"]
	r4 = r4()
	r3 = r4["catch"]
	r3 = r3(func_unknown_0x10000002d)
	r2 = r3["then"]
	ACCU = r2(func_unknown_0x10000002e)
	return undefined
}
function func_unknown_0x10000002e()
{
	r5 = Scope[1][18]["get"]
	r1 = r5(Scope[28][3])
	if (!r5(Scope[28][3]))
		|| (r1["stopping"])
	{
		return undefined
	}
	r8 = 441
	r6 = r1["procs"]
	r7 = r6["slice"]()
	r6 = GetIterator(r7)
	r5 = r6["next"]
	ACCU = false
	r7 = false
	r10 = Scope[32]
	try
	{
		while (true)
		{
			r7 = true
			r11 = r5()
			if (r11["done"]) break
			r7 = false
			if (!r11["value"][r0(529)]) continue
			r13 = r11["value"][r0(529)]
			ACCU = func_killPid_0x10000000f(r13)
		}
		ACCU = -1
		r9 = -1
		r8 = -1
	}
	catch
	{
		r9 = ACCU
		r8 = 0
	}
	if (!r7)
	{
		r12 = Scope[32]
		try
		{
			if (!r6["return"] == undefined)
			{
				ACCU = r6["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r8 === 0)
	{
		ACCU = r9
	}
	r6 = "procs"
	ACCU = []
	r1[r6] = []
	r5 = Scope[32]
	try
	{
		r8 = !(!Boolean([]))
		ACCU = func_startProcesses_0x100000036(Scope[28][3], r8)
	}
	catch
	{
		r6 = ACCU
		ACCU = null
		ACCU = Scope[33]
		r6 = Scope[32]
		r9 = "restart failed: "
		r9 = (r9 + Scope[33][2]["message"])
		r9 = (r9 + "\\n")
		ACCU = func_appendLog_0x10000000b(Scope[28][3], r9)
		r8 = "status"
		r1[r8] = "error"
	}
	return undefined
}
function func_unknown_0x10000002d()
{
	return null
}
function func_unknown_0x10000002c()
{
	ACCU = func_getChannel_0x10000001f(Scope[28][3])
	r0 = func_getChannel_0x10000001f(Scope[28][3])
	if (func_getChannel_0x10000001f(Scope[28][3]))
	{
		ACCU = func_getSource_0x100000021(r0["sourceId"])
	}
	return ACCU
}
function func_unknown_0x10000002b(a0)
{
	return !(a0 === Scope[28][5])
}
function func_unknown_0x10000002a(a0)
{
	r2 = a0["toString"]
	r2 = r2()
	return func_appendLog_0x10000000b(Scope[28][3], r2)
}
function func_deviceBackoffMs_0x100000029(a0, a1)
{
	if (a0 > 15)
	{
		return 30000
	}
	if (a0 > 5)
	{
		return 10000
	}
	r1 = Math["min"]
	ACCU = a1
	if (a1)
	{
		ACCU = a1["restartBackoffMs"]
	}
	if (!ACCU)
	{
		ACCU = 5000
	}
	r3 = ACCU
	return r1(r3, 2000)
}
function func_autoFixSource_0x100000028(a0)
{
	r3 = Scope[1]
	Scope[34][2] = a0
	Scope[34][3] = func_0x1d1a_0x100000047
	if (Scope[1][51]["has"](Scope[34][2]))
	{
		return undefined
	}
	r4 = Scope[1][51]["add"]
	ACCU = r4(Scope[34][2])
	ACCU = func_getChannel_0x10000001f(Scope[34][2])
	r0 = func_getChannel_0x10000001f(Scope[34][2])
	if (func_getChannel_0x10000001f(Scope[34][2]))
	{
		ACCU = func_getSource_0x100000021(r0["sourceId"])
	}
	Scope[34][4] = ACCU
	if (!Scope[34][4])
		|| (!Scope[34][4]["url"])
	r5 = \^https?:\\\\/\\\\/\
	r4 = r5["test"]
	r6 = Scope[34][4]["url"]
		|| (!r4(r6))
	{
		return undefined
	}
	r6 = new [0, 0, 0]
	r6[0] = "http"
	r6[1] = "hls"
	r6[2] = "iptv"
	r5 = r6
	r4 = r5["includes"]
	r6 = Scope[34][4]["type"]
	if (!r4(r6))
	{
		return undefined
	}
	ACCU = undefined
	r1 = undefined
	r4 = Scope[34]
	try
	{
		r6 = Scope[34][4]["url"]
		r5 = r6["startsWith"]
		r7 = "https"
		ACCU = r5(r7)
		if (r5(r7))
		{
			r6 = "https"
			ACCU = Scope[1][2](r6)
		}
		else
		{
			r6 = "http"
			ACCU = Scope[1][2](r6)
		}
		r1 = ACCU
	}
	catch
	{
		r5 = ACCU
		ACCU = null
		ACCU = Scope[35]
		r5 = Scope[34]
		return undefined
	}
	ACCU = Scope[34][4]["userAgent"]
	if (!Scope[34][4]["userAgent"])
	{
		r4 = Scope[1][8]["get"]()
		r4 = r4["settings"]
		ACCU = r4["streamUserAgent"]
		if (!r4["streamUserAgent"])
		{
			ACCU = Scope[1][37][0]
		}
	}
	r2 = ACCU
	r4 = Scope[34]
	ACCU = Scope[36]
	{
		ACCU = PushContext("Block")
		r5 = Scope[34]
		r8 = Scope[34][4]["url"]
		r9 = new {"headers": null, "timeout": 10000}
		r10 = new {"User-Agent": null, "Accept": null}
		r10["User-Agent"] = r2
		r10["Accept"] = "*/*"
		r9["headers"] = r10
		r7 = r1
		Scope[36][2] = r1["get"](r8, r9, func_unknown_0x100000025)
		r8 = "timeout"
		ACCU = Scope[36][2]["on"](r8, func_unknown_0x100000026)
		ACCU = Scope[36][2]["on"]("error", func_unknown_0x100000027)
	}
	catch
	{
		r6 = ACCU
		ACCU = null
		ACCU = Scope[37]
		r6 = Scope[34]
	}
	return undefined
}
function func_unknown_0x100000027()
{
	return undefined
}
function func_unknown_0x100000026()
{
	r0 = Scope[36][2]["destroy"]
	return r0()
}
function func_unknown_0x100000025(a0)
{
	r1 = Scope[36]
	Scope[38][2] = a0
	Scope[38][3] = func_0x1d1a_0x100000047
	ACCU = Scope[38][2]["headers"]["content-type"]
	if (!Scope[38][2]["headers"]["content-type"])
	{
		ACCU = ""
	}
	r3 = ACCU
	Scope[38][4] = String(r3)
	r2 = Buffer["alloc"]
	Scope[38][5] = r2(0)
	r4 = "data"
	ACCU = Scope[38][2]["on"](r4, func_unknown_0x100000022)
	r4 = "end"
	ACCU = Scope[38][2]["on"](r4, func_0x398616_0x100000024)
	r4 = "close"
	ACCU = Scope[38][2]["on"](r4, func_0x398616_0x100000024)
	r4 = "error"
	ACCU = Scope[38][2]["on"](r4, func_0x398616_0x100000024)
	return undefined
}
function func_0x398616_0x100000024()
{
	r10 = Math["min"]
	r12 = Scope[38][5]["length"]
	r10 = r10(r12, 2048)
	r1 = Scope[38][5]["toString"]("utf8", 0, r10)
	r2 = ""
	r7 = \#EXTM3U\
	if (r7["test"](r1))
	r7 = \mpegurl\
	r6 = r7["test"]
		|| (r6(Scope[38][4]))
	{
		r2 = "m3u8"
	}
	else
	{
		r7 = \mp2t\
		r6 = r7["test"]
		if (r6(Scope[38][4]))
		r7 = \^\\\\x47\
		r6 = r7["test"]
		r10 = "binary"
		r8 = Scope[38][5]["toString"](r10, 0, 1)
			|| (r6(r8))
		{
			r2 = "ts"
		}
	}
	r3 = null
	if (r2 === "m3u8")
	r6 = Scope[34][4]["type"]
		&& (!r6 === "hls")
	{
		r3 = "hls"
	}
	else
	{
		if (r2 === "ts")
		{
			r6 = Scope[34][4]["type"]
			if (r6 === "hls")
			{
				r3 = "http"
			}
		}
	}
	if (r3)
	{
		r6 = Scope[1][8]["get"]
		r4 = r6()
		r6 = r4["sources"]["find"]
		r5 = r6(func_unknown_0x100000023)
		if (r6(func_unknown_0x100000023))
		{
			r7 = "type"
			r5[r7] = r3
			ACCU = Scope[1][8]["save"]()
			r8 = (((("\\n[\\x625\\x635\\x644\\x627\\x62d \\x62a\\x644\\x642\\x627\\x626\\x64a] \\x627\\x643\\x62a\\x64f\\x634\\x641 \\x623\\x646 \\x627\\x644\\x645\\x635\\x62f\\x631 \\x645\\x646 \\x646\\x648\\x639 " + r2) + " \\x2014 \\x62a\\x645 \\x636\\x628\\x637 \\x646\\x648\\x639 \\x627\\x644\\x645\\x635\\x62f\\x631 \\x625\\x644\\x649 \\xab") + r3) + "» تلقائياً.\n")
			ACCU = func_appendLog_0x10000000b(Scope[34][2], r8)
		}
	}
	return undefined
}
function func_unknown_0x100000023(a0)
{
	return a0["id"] === Scope[34][4]["id"]
}
function func_unknown_0x100000022(a0)
{
	if (Scope[38][5]["length"] < 2048)
	{
		r1 = Buffer["concat"]
		r4 = new [0, 0]
		r4[0] = Scope[38][5]
		r4[1] = a0
		r1 = r1(r4)
		ACCU = Scope[38][5]
		Scope[38][5] = r1
	}
	else
	{
		r1 = Scope[38][2]["destroy"]
		ACCU = r1()
	}
	return undefined
}
function func_getSource_0x100000021(a0)
{
	r1 = Scope[1]
	Scope[39][2] = a0
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r2 = r3["sources"]["find"]
	return r2(func_unknown_0x100000020)
}
function func_unknown_0x100000020(a0)
{
	return a0["id"] === Scope[39][2]
}
function func_getChannel_0x10000001f(a0)
{
	r1 = Scope[1]
	Scope[40][2] = a0
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r3 = r3["channels"]
	r2 = r3["find"]
	return r2(func_unknown_0x10000001e)
}
function func_unknown_0x10000001e(a0)
{
	return a0["id"] === Scope[40][2]
}
function func_buildCopyJobs_0x10000001d(a0, a1)
{
	r7 = Scope[1]
	Scope[41][2] = func_0x1d1a_0x100000047
	r0 = []
	ACCU = a1["variants"]
	if (!a1["variants"])
	{
		ACCU = []
	}
	r1 = ACCU
	r9 = GetIterator(r1)
	r8 = r9["next"]
	ACCU = false
	r10 = false
	r13 = Scope[41]
	try
	{
		while (true)
		{
			r10 = true
			r14 = r8()
			if (r14["done"]) break
			r10 = false
			r4 = r14["value"]
			r17 = func_hlsRoot_0x100000005()
			r19 = r14["value"]["quality"]
			r5 = Scope[1][5]["join"](r17, a0["id"], r19)
			r15 = Scope[1][4]["mkdirSync"]
			r18 = new {"recursive": null}
			r18["recursive"] = !(!Boolean([]))
			ACCU = r15(r5, r18)
			r16 = new [0, 0, "warning", "-y"]
			r16[0] = "-hide_banner"
			r16[1] = "-loglevel"
			r15 = 4
			r19 = func_hlsExtensionFlags_0x100000012()
			r14 = r14["value"]
			r18 = GetIterator(r19)
			r17 = r18["next"]
			while (true)
			{
				r19 = r17()
				if (r19["done"]) break
				r16[r15] = r19["value"]
				r15 = (r15 + 1)
			}
			r16[r15] = "-reconnect"
			r15 = (r15 + 1)
			r16[r15] = "1"
			r15 = (r15 + 1)
			r16[r15] = "-reconnect_streamed"
			r15 = (r15 + 1)
			r16[r15] = "1"
			r15 = (r15 + 1)
			r16[r15] = "-reconnect_delay_max"
			r15 = (r15 + 1)
			r16[r15] = "5"
			r15 = (r15 + 1)
			r16[r15] = "-i"
			r15 = (r15 + 1)
			r16[r15] = r4["url"]
			r15 = (r15 + 1)
			r16[r15] = "-c"
			r15 = (r15 + 1)
			r16[r15] = "copy"
			r15 = (r15 + 1)
			r19 = func_hlsOutputArgs_0x100000014(r5)
			r18 = GetIterator(r19)
			r17 = r18["next"]
			while (true)
			{
				r19 = r17()
				if (r19["done"]) break
				r16[r15] = r19["value"]
				r15 = (r15 + 1)
			}
			r6 = r16
			r17 = new {"args": null, "label": null}
			r17["args"] = r6
			r17["label"] = r4["quality"]
			ACCU = r0["push"](r17)
		}
		ACCU = -1
		r12 = -1
		r11 = -1
	}
	catch
	{
		r12 = ACCU
		r11 = 0
	}
	if (!r10)
	{
		r15 = Scope[41]
		try
		{
			if (!r9["return"] == undefined)
			{
				ACCU = r9["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r11 === 0)
	{
		ACCU = r12
	}
	r8 = new {"jobs": null, "qualities": null}
	r8["jobs"] = r0
	r9 = r1["map"]
	r8["qualities"] = r9(func_unknown_0x10000001c)
	return r8
}
function func_unknown_0x10000001c(a0)
{
	return a0["quality"]
}
function func_buildTranscodeArgs_0x10000001b(a0, a1)
{
	r17 = Scope[1][8]["get"]()
	r1 = r17["settings"]
	r2 = func_channelQuality_0x100000016(a0, a1)
	r3 = func_logoPath_0x100000017(a0)
	ACCU = a0["fps"]
	if (!a0["fps"])
	{
		ACCU = a1["fps"]
		if (!a1["fps"])
		{
			ACCU = 25
		}
	}
	r18 = ACCU
	r4 = Number(r18)
	r17 = Math["max"]
	r20 = Math["round"]
	ACCU = r1["gopSeconds"]
	if (!r1["gopSeconds"])
	{
		ACCU = 2
	}
	r22 = ACCU
	r22 = (r22 * r4)
	r20 = r20(r22)
	r5 = r17(1, r20)
	if (r2 === "copy")
	{
		r19 = func_hlsRoot_0x100000005()
		r15 = Scope[1][5]["join"](r19, a0["id"])
		r20 = new {"recursive": null}
		r20["recursive"] = !(!Boolean([]))
		ACCU = Scope[1][4]["mkdirSync"](r15, r20)
		r18 = new [0, 0, 0, "-y"]
		r18[0] = "-hide_banner"
		r18[1] = "-loglevel"
		r18[2] = "warning"
		r16 = r18
		r20 = 444
		r17 = r18["push"]
		r19 = func_buildInputArgs_0x100000013(a1, a0)
		ACCU = r17(...r18, r19)
		if (r3)
		{
			r17 = r16["push"]
			r18 = r16
			r22 = r3
			ACCU = r17("-loop", "1", "-i", r22)
			r17 = r16["push"]
			r19 = "-filter_complex"
			r21 = "[0:v]scale=-2:'min(ih\\,720)',format=yuv420p[base]"
			r20 = func_logoOverlayFilter_0x100000018(r21)
			ACCU = r17(r19, r20)
			r17 = r16["push"]
			r19 = "-map"
			r20 = "[outv]"
			r21 = "-map"
			r18 = r16
			ACCU = r17(r19, r20, r21, "0:a?")
			r17 = r16["push"]
			r20 = new [0, 0, 0, 0]
			r20[0] = "-c:v"
			r20[1] = "libx264"
			r20[2] = "-preset"
			ACCU = r1["x264Preset"]
			r18 = r16
			if (!r1["x264Preset"])
			{
				ACCU = "veryfast"
			}
			r20[3] = ACCU
			r19 = 4
			r23 = func_x264TuneArgs_0x100000019(r1)
			r22 = GetIterator(r23)
			r21 = r22["next"]
			while (true)
			{
				r23 = r21()
				if (r23["done"]) break
				r20[r19] = r23["value"]
				r19 = (r19 + 1)
			}
			r20[r19] = "-threads"
			r19 = (r19 + 1)
			ACCU = a0["threads"]
			if (!a0["threads"])
			{
				ACCU = r1["x264Threads"]
				if (!r1["x264Threads"])
				{
					ACCU = 2
				}
			}
			r22 = ACCU
			r20[r19] = String(r22)
			r19 = (r19 + 1)
			r20[r19] = "-crf"
			r19 = (r19 + 1)
			r20[r19] = "23"
			r19 = (r19 + 1)
			r20[r19] = "-g"
			r19 = (r19 + 1)
			r20[r19] = String(r5)
			r19 = (r19 + 1)
			r20[r19] = "-keyint_min"
			r19 = (r19 + 1)
			r20[r19] = String(r5)
			r19 = (r19 + 1)
			r20[r19] = "-sc_threshold"
			r19 = (r19 + 1)
			r20[r19] = "0"
			r19 = (r19 + 1)
			r20[r19] = "-c:a"
			r19 = (r19 + 1)
			r20[r19] = "copy"
			r19 = r20
			ACCU = reflect_apply(r17, r18, r19)
			r17 = r16["push"]
			r19 = func_hlsOutputArgs_0x100000014(r15)
			r18 = r16
			ACCU = r17(...r18, r19)
			r17 = new {"args": null, "flat": null}
			r17["args"] = r16
			r17["flat"] = !(!Boolean([]))
			return r17
		}
		r17 = r16["push"]
		r19 = "-avoid_negative_ts"
		r20 = "make_zero"
		r21 = "-max_muxing_queue_size"
		r22 = "1024"
		r18 = r16
		ACCU = r17(r19, r20, r21, r22)
		r17 = r16["push"]
		r20 = "copy"
		r21 = func_hlsOutputArgs_0x100000014(r15)
		r18 = r16
		ACCU = r17(...r18, "-c", r20, r21)
		r17 = new {"args": null, "flat": null, "passthrough": null}
		r17["args"] = r16
		r17["flat"] = !(!Boolean([]))
		r17["passthrough"] = !(!Boolean([]))
		return r17
	}
	r18 = new [0, "-loglevel", 0, "-y"]
	r18[0] = "-hide_banner"
	r18[2] = "warning"
	r7 = r18
	r17 = r18["push"]
	r19 = func_buildInputArgs_0x100000013(a1, a0)
	ACCU = r17(...r18, r19)
	if (r3)
	{
		r18 = r7
		r22 = r3
		ACCU = r7["push"]("-loop", "1", "-i", r22)
	}
	r17 = "scale=-2:"
	r17 = (r17 + Scope[1][17][r2]["h"])
	r8 = (r17 + ",format=yuv420p")
	r9 = []
	if (r3)
	{
		r17 = r9["push"]
		r20 = "[0:v]"
		r20 = (r20 + r8)
		r20 = (r20 + "[base]")
		r19 = func_logoOverlayFilter_0x100000018(r20)
		ACCU = r17(r19)
	}
	else
	{
		r17 = r9["push"]
		r19 = "[0:v]"
		r19 = (r19 + r8)
		r19 = (r19 + "[outv]")
		ACCU = r17(r19)
	}
	r17 = r7["push"]
	r19 = "-filter_complex"
	r20 = r9["join"](";")
	ACCU = r17(r19, r20)
	r19 = func_hlsRoot_0x100000005()
	r10 = Scope[1][5]["join"](r19, a0["id"])
	r20 = new {"recursive": null}
	r20["recursive"] = !(!Boolean([]))
	ACCU = Scope[1][4]["mkdirSync"](r10, r20)
	ACCU = a0["fps"]
	if (!a0["fps"])
	{
		ACCU = a1["fps"]
		if (!a1["fps"])
		{
			ACCU = 25
		}
	}
	r18 = ACCU
	r11 = Number(r18)
	r17 = Math["max"]
	ACCU = r1["gopSeconds"]
	if (!r1["gopSeconds"])
	{
		ACCU = 2
	}
	r22 = ACCU
	r22 = (r22 * r11)
	r20 = Math["round"](r22)
	r12 = r17(1, r20)
	r13 = Scope[1][17][r2]["vb"]
	if (a0["bitrate"])
	{
		r19 = a0["bitrate"]
		r18 = String(r19)
		r17 = r18["trim"]
		r14 = r17()
		r18 = \^\\\\d+$\
		r17 = r18["test"]
		ACCU = r17(r14)
		if (r17(r14))
		{
			ACCU = (r14 + "k")
		}
		else
		{
			ACCU = r14
		}
		r13 = ACCU
	}
	r17 = r7["push"]
	r20 = "[outv]"
	r21 = "-map"
	r18 = r7
	ACCU = r17("-map", r20, r21, "0:a?")
	r20 = new [0, "libx264", 0, 0]
	r20[0] = "-c:v"
	r20[2] = "-preset"
	ACCU = r1["x264Preset"]
	r18 = r7
	if (!r1["x264Preset"])
	{
		ACCU = "veryfast"
	}
	r20[3] = ACCU
	r19 = 4
	r23 = func_x264TuneArgs_0x100000019(r1)
	r22 = GetIterator(r23)
	r21 = r22["next"]
	while (true)
	{
		r23 = r21()
		if (r23["done"]) break
		r20[r19] = r23["value"]
		r19 = (r19 + 1)
	}
	r20[r19] = "-threads"
	r19 = (r19 + 1)
	ACCU = a0["threads"]
	if (!a0["threads"])
	{
		ACCU = r1["x264Threads"]
		if (!r1["x264Threads"])
		{
			ACCU = 2
		}
	}
	r22 = ACCU
	r20[r19] = String(r22)
	r19 = (r19 + 1)
	r20[r19] = "-r"
	r19 = (r19 + 1)
	r20[r19] = String(r11)
	r19 = (r19 + 1)
	r20[r19] = "-g"
	r19 = (r19 + 1)
	r20[r19] = String(r12)
	r19 = (r19 + 1)
	r20[r19] = "-keyint_min"
	r19 = (r19 + 1)
	r20[r19] = String(r12)
	r19 = (r19 + 1)
	r20[r19] = "-sc_threshold"
	r19 = (r19 + 1)
	r20[r19] = "0"
	r19 = (r19 + 1)
	r20[r19] = "-b:v"
	r19 = (r19 + 1)
	r20[r19] = r13
	r19 = (r19 + 1)
	r20[r19] = "-maxrate"
	r19 = (r19 + 1)
	r20[r19] = r13
	r19 = (r19 + 1)
	r20[r19] = "-bufsize"
	r19 = (r19 + 1)
	r20[r19] = func_x264BufsizeFor_0x10000001a(r1, r13)
	r19 = (r19 + 1)
	r20[r19] = "-filter:a"
	r19 = (r19 + 1)
	r20[r19] = "aresample=async=1"
	r19 = (r19 + 1)
	r20[r19] = "-c:a"
	r19 = (r19 + 1)
	r20[r19] = "aac"
	r19 = (r19 + 1)
	r20[r19] = "-b:a"
	r19 = (r19 + 1)
	r20[r19] = Scope[1][17][r2]["ab"]
	r19 = (r19 + 1)
	r20[r19] = "-ac"
	r19 = (r19 + 1)
	r20[r19] = "2"
	r19 = (r19 + 1)
	r20[r19] = "-ar"
	r19 = (r19 + 1)
	r20[r19] = "44100"
	r19 = r20
	ACCU = reflect_apply(r7["push"], r18, r19)
	r17 = r7["push"]
	r19 = func_hlsOutputArgs_0x100000014(r10)
	r18 = r7
	ACCU = r17(...r18, r19)
	r17 = new {"args": null, "flat": null}
	r17["args"] = r7
	r17["flat"] = !(!Boolean([]))
	return r17
}
function func_x264BufsizeFor_0x10000001a(a0, a1)
{
	if (!a0["x264QualityMode"])
	{
		return a1
	}
	r3 = String(a1)
	r2 = r3["match"]
	r4 = \^(\\\\d+)k$\
	ACCU = r2(r4)
	r1 = r2(r4)
	if (r2(r4))
	{
		r3 = r1[1]
		r2 = (Number(r3) * 2)
		ACCU = (r2 + "k")
	}
	else
	{
		ACCU = a1
	}
	return ACCU
}
function func_x264TuneArgs_0x100000019(a0)
{
	ACCU = a0["x264QualityMode"]
	if (a0["x264QualityMode"])
	{
		ACCU = []
	}
	else
	{
		r2 = new ["-tune", 0]
		r2[1] = "zerolatency"
		ACCU = r2
	}
	return ACCU
}
function func_logoOverlayFilter_0x100000018(a0)
{
	r8 = Scope[1][8]["get"]
	r8 = r8()
	r1 = r8["settings"]
	r8 = Math["min"]
	r11 = Math["max"]
	r15 = r1["logoSizePct"]
	ACCU = Number(r15)
	if (!Number(r15))
	{
		ACCU = 10
	}
	r14 = (ACCU \ 100)
	r11 = r11(0.01, r14)
	r2 = r8(0.9, r11)
	r11 = Math["max"]
	r15 = r1["logoOpacityPct"]
	ACCU = undetectable === Number(r15)
	if (!undetectable === Number(r15))
	{
		r15 = r1["logoOpacityPct"]
		ACCU = Number(r15)
	}
	else
	{
		ACCU = 50
	}
	r14 = (ACCU \ 100)
	r11 = r11(0, r14)
	r3 = Math["min"](1, r11)
	r5 = "H*0.02"
	r8 = new {"top-left": null, "top-right": null, "bottom-left": null, "bottom-right": null}
	r9 = (("x=" + "W*0.02") + ":y=")
	r8["top-left"] = (r9 + r5)
	r9 = "x=W-w-"
	r9 = (r9 + "W*0.02")
	r9 = (r9 + ":y=")
	r8["top-right"] = (r9 + r5)
	r9 = (("x=" + "W*0.02") + ":y=H-h-")
	r8["bottom-left"] = (r9 + r5)
	r8["bottom-right"] = ((("x=W-w-" + "W*0.02") + ":y=H-h-") + r5)
	r6 = r8
	ACCU = r8[r1["logoPosition"]]
	if (!r8[r1["logoPosition"]])
	{
		ACCU = r6["top-right"]
	}
	r7 = ACCU
	r10 = new [0, 0, 0, 0]
	r10[0] = a0
	r10[1] = (("[1:v][base]scale2ref=w=iw*" + r2) + ":h=ow/mdar[lgs][base2]")
	r11 = "[lgs]format=rgba,colorchannelmixer=aa="
	r11 = (r11 + r3)
	r10[2] = (r11 + "[lgc]")
	r10[3] = (("[base2][lgc]overlay=" + r7) + ",format=yuv420p[outv]")
	r9 = r10
	r8 = r9["join"]
	return r8(";")
}
function func_logoPath_0x100000017(a0)
{
	if (!Scope[1][42])
	{
		return null
	}
	r4 = Scope[1][8]["get"]
	r4 = r4()
	r1 = r4["settings"]
	ACCU = undetectable === a0["logoEnabled"]
	if (!undetectable === a0["logoEnabled"])
	{
		ACCU = a0["logoEnabled"]
	}
	else
	{
		ACCU = !(!Boolean(a0["logoOverlay"]))
	}
	r2 = ACCU
	if (!ACCU)
		|| (!r4["settings"]["logoImage"])
	{
		return null
	}
	r4 = Scope[1][5]["isAbsolute"]
	ACCU = r4(r1["logoImage"])
	if (r4(r1["logoImage"]))
	{
		ACCU = r1["logoImage"]
	}
	else
	{
		r7 = r1["logoImage"]
		ACCU = Scope[1][5]["join"](Scope[1][11], r7)
	}
	r3 = ACCU
	r4 = Scope[1]
	try
	{
		r5 = Scope[1][4]["existsSync"]
		ACCU = r5(r3)
		if (!r5(r3))
		{
			return null
		}
	}
	catch
	{
		r5 = ACCU
		ACCU = null
		ACCU = Scope[42]
		r5 = Scope[1]
		return null
	}
	return r3
}
function func_channelQuality_0x100000016(a0, a1)
{
	r1 = a0["quality"]
	if (!a0["quality"])
	{
		if (a1)
		ACCU = a1["passthrough"]
			&& (a1["passthrough"])
		{
			ACCU = "copy"
		}
		else
		{
			ACCU = a0["qualities"]
			if (a0["qualities"])
			{
				r2 = a0["qualities"]
				ACCU = r2[0]
			}
			if (!ACCU)
			{
				ACCU = "copy"
			}
		}
		r1 = ACCU
	}
	if (!r1 === "copy")
	{
		if (!Scope[1][17][r1])
		{
			r1 = "copy"
		}
	}
	if (a1)
	{
		r2 = a1["type"]
		if (r2 === "screen")
		r2 = a1["type"]
			|| (r2 === "usb")
		{
			if (r1 === "copy")
			{
				r1 = "720p"
			}
		}
	}
	return r1
}
function func_writeMasterPlaylist_0x100000015(a0, a1)
{
	r10 = Scope[1][5]["join"]
	r12 = func_hlsRoot_0x100000005()
	r13 = a0["id"]
	r1 = r10(r12, a0["id"])
	r2 = "#EXTM3U\n#EXT-X-VERSION:3\n"
	r10 = a1["length"]
	r3 = r10 > 1
	r11 = GetIterator(a1)
	r10 = r11["next"]
	ACCU = false
	r12 = false
	r15 = Scope[1]
	try
	{
		while (true)
		{
			r12 = true
			r16 = r10()
			if (r16["done"]) break
			r12 = false
			r6 = r16["value"]
			ACCU = Scope[1][17][r16["value"]]
			r7 = Scope[1][17][r16["value"]]
			r16 = r16["value"]
			if (ACCU)
			{
				ACCU = ((parseInt(r7["vb"]) * 1000) + 128000)
			}
			else
			{
				ACCU = 1500000
			}
			r8 = ACCU
			if (r3)
			ACCU = r7
				&& (r7)
			{
				ACCU = (((",RESOLUTION=" + r7["w"]) + "x") + r7["h"])
			}
			else
			{
				ACCU = ""
			}
			r9 = ACCU
			r18 = r0(664)
			r18 = (r18 + r8)
			r18 = (r18 + r9)
			r18 = (r18 + r0(399))
			r18 = (r18 + r6)
			r18 = (r18 + "\"\\n")
			r18 = (r18 + r6)
			ACCU = (r2 + (r18 + r0(656)))
			r17 = r2
			r2 = (r2 + (r18 + r0(656)))
		}
		ACCU = -1
		r14 = -1
		r13 = -1
	}
	catch
	{
		r14 = ACCU
		r13 = 0
	}
	if (!r12)
	{
		r17 = Scope[1]
		try
		{
			if (!r11["return"] == undefined)
			{
				ACCU = r11["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r13 === 0)
	{
		ACCU = r14
	}
	r12 = Scope[1][5]["join"]
	r15 = "master.m3u8"
	r12 = r12(r1, r15)
	ACCU = Scope[1][4]["writeFileSync"](r12, r2)
	return undefined
}
function func_hlsOutputArgs_0x100000014(a0)
{
	r6 = Scope[1][8]["get"]()
	r1 = r6["settings"]
	r7 = Date["now"]
	r7 = r7()
	r6 = r7["toString"](36)
	r11 = Math
	r10 = Math["random"]
	r10 = (r10() * 46656)
	r8 = Math["floor"](r10)
	r7 = r8["toString"]
	ACCU = (r6 + r7(36))
	r2 = (r6 + r7(36))
	r6 = Scope[1]
	try
	{
		r10 = 676
		r7 = Scope[1][4]["readdirSync"]
		r9 = r7(a0)
		r8 = GetIterator(r9)
		r7 = r8["next"]
		ACCU = false
		r9 = false
		r12 = Scope[1]
		try
		{
			while (true)
			{
				r9 = true
				r13 = r7()
				if (r13["done"]) break
				r9 = false
				r5 = r13["value"]
				r15 = \^seg_.*\\\\.ts$\
				ACCU = r15["test"](r13["value"])
				r13 = r13["value"]
				if (!ACCU) continue
				r14 = r5[r0(407)]
				r16 = r0(406)
				r16 = (r16 + r2)
				r16 = (r16 + "_")
				ACCU = r14(r16)
				if (r14(r16)) continue
				r14 = Scope[1]
				try
				{
					r15 = Scope[1][4][r0(559)]
					r17 = Scope[1][5]["join"](a0, r5)
					ACCU = r15(r17)
					continue
				}
				catch {}
				r15 = ACCU
				ACCU = null
				ACCU = Scope[43]
				r15 = Scope[1]
			}
			ACCU = -1
			r11 = -1
			r10 = -1
		}
		catch
		{
			r11 = ACCU
			r10 = 0
		}
		if (!r9)
		{
			r14 = Scope[1]
			try
			{
				if (!r8["return"] == undefined)
				{
					ACCU = r8["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		ACCU = r10 === 0
		if (r10 === 0)
		{
			ACCU = r11
		}
	}
	catch
	{
		r7 = ACCU
		ACCU = null
		ACCU = Scope[44]
		r7 = Scope[1]
	}
	r7 = new ["-f", "hls", "-hls_time", 0, "-hls_list_size", 0, 0, 0, 0, 0, 0, 0, 0]
	ACCU = r1["hlsTime"]
	if (!r1["hlsTime"])
	{
		ACCU = 2
	}
	r9 = ACCU
	r7[3] = String(r9)
	ACCU = r1["hlsListSize"]
	if (!r1["hlsListSize"])
	{
		ACCU = 6
	}
	r9 = ACCU
	r7[5] = String(r9)
	r7[6] = "-hls_delete_threshold"
	ACCU = r1["hlsDeleteThreshold"]
	if (!r1["hlsDeleteThreshold"])
	{
		ACCU = 4
	}
	r9 = ACCU
	r7[7] = String(r9)
	r7[8] = "-hls_flags"
	r7[9] = "delete_segments+independent_segments+program_date_time"
	r7[10] = "-hls_segment_filename"
	r8 = Scope[1][5]["join"]
	r7[11] = r8(a0, (("seg_" + r2) + "_%05d.ts"))
	r8 = Scope[1][5]["join"]
	r11 = "index.m3u8"
	r7[12] = r8(a0, r11)
	return r7
}
function func_buildInputArgs_0x100000013(a0, a1)
{
	r10 = Scope[1][8]["get"]()
	r1 = r10["settings"]
	r2 = []
	r10 = a0["type"]
	switch ()
	case r10 === "usb":
	{
		if (Scope[1][15])
		{
			r11 = r2["push"]
			r14 = "dshow"
			r15 = "-rtbufsize"
			r16 = "256M"
			r17 = "-thread_queue_size"
			r18 = "1024"
			r12 = r2
			ACCU = r11("-f", r14, r15, r16, r17, r18)
			if (a0["pixelFormat"])
			{
				r11 = r2["push"]
				r13 = "-pixel_format"
				r14 = a0["pixelFormat"]
				ACCU = r11(r13, r14)
			}
			else
			{
				if (a0["vcodec"])
				{
					r11 = r2["push"]
					r13 = "-vcodec"
					r14 = a0["vcodec"]
					ACCU = r11(r13, r14)
				}
			}
			if (!a0["captureSafeMode"])
			{
				if (a0["videoSize"])
				{
					r11 = r2["push"]
					r13 = "-video_size"
					r14 = a0["videoSize"]
					ACCU = r11(r13, r14)
				}
				if (a0["fps"])
				{
					r11 = r2["push"]
					r13 = "-framerate"
					r15 = a0["fps"]
					r14 = String(r15)
					ACCU = r11(r13, r14)
				}
			}
			r11 = "video="
			r9 = (r11 + a0["videoDevice"])
			if (a0["audioDevice"])
			{
				r11 = r9
				r9 = (r9 + (":audio=" + a0["audioDevice"]))
			}
			r11 = r2["push"]
			ACCU = r11("-i", r9)
		}
		else
		{
			r14 = "v4l2"
			r16 = "1024"
			r12 = r2
			ACCU = r2["push"]("-f", r14, "-thread_queue_size", r16)
			if (a0["pixelFormat"])
			{
				r11 = r2["push"]
				ACCU = r11("-input_format", a0["pixelFormat"])
			}
			else
			{
				if (a0["vcodec"] === "mjpeg")
				{
					r11 = r2["push"]
					r13 = "-input_format"
					r14 = "mjpeg"
					ACCU = r11(r13, r14)
				}
			}
			if (!a0["captureSafeMode"])
			{
				if (a0["videoSize"])
				{
					r11 = r2["push"]
					r14 = a0["videoSize"]
					ACCU = r11("-video_size", r14)
				}
				if (a0["fps"])
				{
					r11 = r2["push"]
					r13 = "-framerate"
					r15 = a0["fps"]
					r14 = String(r15)
					ACCU = r11(r13, r14)
				}
			}
			r12 = \^\\\\/dev\\\\/\
			ACCU = a0["videoDevice"]
			if (!a0["videoDevice"])
			{
				ACCU = ""
			}
			r13 = ACCU
			ACCU = r12["test"](r13)
			if (r12["test"](r13))
			{
				ACCU = a0["videoDevice"]
			}
			else
			{
				r11 = "/dev/"
				ACCU = a0["videoDevice"]
				if (!a0["videoDevice"])
				{
					ACCU = "video0"
				}
				ACCU = (r11 + ACCU)
			}
			r8 = ACCU
			r11 = r2["push"]
			ACCU = r11("-i", r8)
			if (a0["audioDevice"])
			{
				r14 = "alsa"
				r16 = a0["audioDevice"]
				r12 = r2
				ACCU = r2["push"]("-f", r14, "-i", r16)
			}
		}
		break
	}
	case r10 === "screen":
	{
		r11 = r2["push"]
		ACCU = a0["fps"]
		r12 = r2
		if (!a0["fps"])
		{
			ACCU = 15
		}
		r17 = ACCU
		r16 = String(r17)
		ACCU = r11("-f", "gdigrab", "-framerate", r16)
		if (a0["videoSize"])
		{
			r13 = "-video_size"
			ACCU = r2["push"](r13, a0["videoSize"])
		}
		r11 = r2["push"]
		r14 = "desktop"
		ACCU = r11("-i", r14)
		if (a0["audioDevice"])
		{
			r11 = r2["push"]
			r16 = "audio="
			r16 = (r16 + a0["audioDevice"])
			r12 = r2
			ACCU = r11("-f", "dshow", "-i", r16)
		}
		break
	}
	case r10 === "http":
	case r10 === "hls":
	case r10 === "iptv":
	{
		r13 = func_hlsExtensionFlags_0x100000012()
		r12 = r2
		ACCU = r2["push"](...r12, r13)
		ACCU = a0["userAgent"]
		if (!a0["userAgent"])
		{
			ACCU = r1["streamUserAgent"]
			if (!r1["streamUserAgent"])
			{
				ACCU = ""
			}
		}
		r5 = ACCU
		if (!ACCU)
		{
			r11 = Scope[1][18]["get"]
			r7 = r11(a1["id"])
			ACCU = r7
			if (r7)
			{
				ACCU = r7["restarts"]
			}
			if (!ACCU)
			{
				ACCU = 0
			}
			r12 = ACCU
			r5 = Scope[1][37][(r12 % Scope[1][37]["length"])]
		}
		r11 = r2["push"]
		r13 = "-user_agent"
		ACCU = r11(r13, r5)
		r6 = "Accept: */*\\r\\n"
		if (a0["referer"])
		{
			r12 = "Referer: "
			r12 = (r12 + a0["referer"])
			r11 = "Accept: */*\\r\\n"
			r6 = ("Accept: */*\\r\\n" + (r12 + "\\r\\n"))
		}
		r11 = r2["push"]
		r13 = "-headers"
		ACCU = r11(r13, r6)
		r13 = "-fflags"
		r14 = "+discardcorrupt+genpts"
		r16 = "ignore_err"
		r12 = r2
		ACCU = r2["push"](r13, r14, "-err_detect", r16)
		if (func_looksLikeHls_0x100000055(a0["url"]))
		{
			r13 = "-reconnect"
			r15 = "-reconnect_on_network_error"
			r19 = "-reconnect_delay_max"
			r21 = "-rw_timeout"
			r23 = "-analyzeduration"
			r24 = "5000000"
			r25 = "-probesize"
			r12 = r2
			ACCU = r2["push"](r13, "1", r15, "1", "-reconnect_on_http_error", "5xx", r19, "5", r21, "30000000", r23, r24, r25, "5000000", "-i", a0["url"])
		}
		else
		{
			r13 = "-multiple_requests"
			r15 = "-reconnect_on_network_error"
			r17 = "-reconnect_on_http_error"
			r18 = "5xx"
			r19 = "-reconnect_at_eof"
			r21 = "-thread_queue_size"
			r22 = "4096"
			r23 = "-analyzeduration"
			r24 = "5000000"
			r25 = "-probesize"
			r26 = "5000000"
			r29 = "-reconnect_streamed"
			r31 = "-reconnect_delay_max"
			r33 = "-rw_timeout"
			r34 = "20000000"
			r12 = r2
			ACCU = r2["push"](r13, "1", r15, "1", r17, r18, r19, "1", r21, r22, r23, r24, r25, r26, "-reconnect", "1", r29, "1", r31, "30", r33, r34, "-i", a0["url"])
		}
		break
	}
	case r10 === "file":
	{
		r11 = Scope[1][5]["isAbsolute"]
		r13 = a0["path"]
		ACCU = r11(r13)
		if (r11(r13))
		{
			ACCU = a0["path"]
		}
		else
		{
			r11 = Scope[1][5]["join"]
			r14 = a0["path"]
			ACCU = r11(Scope[1][11], r14)
		}
		r3 = ACCU
		r13 = "-fflags"
		r14 = "+genpts"
		r16 = "-stream_loop"
		r12 = r2
		r19 = r3
		ACCU = r2["push"](r13, r14, "-re", r16, "-1", "-i", r19)
		break
	}
	default:
	{
		r12 = "نوع مصدر غير معروف: "
		r12 = (r12 + a0["type"])
		ACCU = Error
		ACCU = Error(r12)
	}
	return r2
}
function func_hlsExtensionFlags_0x100000012()
{
	if (Scope[1][34])
	{
		return Scope[1][34]
	}
	r2 = new [0, "ALL"]
	r2[0] = "-allowed_extensions"
	ACCU = Scope[1][34]
	Scope[1][34] = r2
	return Scope[1][34]
}
function func_cleanHlsRoot_0x100000011()
{
	ACCU = func_0x1d1a_0x100000047
	r0 = func_0x1d1a_0x100000047
	r6 = Scope[1]
	try
	{
		r2 = func_hlsRoot_0x100000005()
		r7 = Scope[1][4]["existsSync"]
		if (!r7(r2))
		{
			return undefined
		}
		r10 = 676
		r7 = Scope[1][4]["readdirSync"]
		r9 = r7(r2)
		r8 = GetIterator(r9)
		r7 = r8["next"]
		ACCU = false
		r9 = false
		r12 = Scope[1]
		try
		{
			while (true)
			{
				r9 = true
				r13 = r7()
				if (r13["done"]) break
				r9 = false
				r14 = Scope[1][5][r0(667)]
				ACCU = r14(r2, r13["value"])
				r5 = r14(r2, r13["value"])
				r13 = r13["value"]
				r14 = Scope[1]
				try
				{
					r15 = Scope[1][4][r0(566)]
					r18 = new {"recursive": null, "force": null}
					r18["recursive"] = !(!Boolean([]))
					r18["force"] = !(!Boolean([]))
					ACCU = r15(r5, r18)
					continue
				}
				catch {}
				r15 = ACCU
				ACCU = null
				ACCU = Scope[45]
				r15 = Scope[1]
			}
			ACCU = -1
			r11 = -1
			r10 = -1
		}
		catch
		{
			r11 = ACCU
			r10 = 0
		}
		if (!r9)
		{
			r14 = Scope[1]
			try
			{
				if (!r8["return"] == undefined)
				{
					ACCU = r8["return"]()
				}
				catch {}
			}
		}
		ACCU = null
		ACCU = r10 === 0
		if (r10 === 0)
		{
			ACCU = r11
		}
	}
	catch
	{
		r7 = ACCU
		ACCU = null
		ACCU = Scope[46]
		r7 = Scope[1]
	}
	return undefined
}
function func_killStaleProcesses_0x100000010()
{
	ACCU = func_ensureDirs_0x100000004()
	r5 = Scope[1][4]["existsSync"]
	r7 = Scope[1][14]
	ACCU = r5(Scope[1][14])
	if (r5(Scope[1][14]))
	{
		r5 = Scope[1]
		try
		{
			r6 = JSON["parse"]
			r9 = Scope[1][4]
			r8 = Scope[1][4]["readFileSync"]
			r10 = Scope[1][14]
			r11 = "utf8"
			r8 = r8(Scope[1][14], r11)
			r2 = r6(r8)
			r7 = GetIterator(r2)
			r6 = r7["next"]
			ACCU = false
			r8 = false
			r11 = Scope[1]
			try
			{
				while (true)
				{
					r8 = true
					r12 = r6()
					if (r12["done"]) break
					r8 = false
					ACCU = func_killPid_0x10000000f(r12["value"])
					r12 = r12["value"]
				}
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
			ACCU = r9 === 0
			if (r9 === 0)
			{
				ACCU = r10
			}
		}
		catch
		{
			r6 = ACCU
			ACCU = null
			ACCU = Scope[47]
			r6 = Scope[1]
		}
		r5 = Scope[1]
		try
		{
			r6 = Scope[1][4]["unlinkSync"]
			ACCU = r6(Scope[1][14])
		}
		catch
		{
			r6 = ACCU
			ACCU = null
			ACCU = Scope[48]
			r6 = Scope[1]
		}
	}
	ACCU = func_cleanHlsRoot_0x100000011()
	return undefined
}
function func_killPid_0x10000000f(a0)
{
	r1 = parseInt(a0, 10)
	r2 = Number["isInteger"]
	if (!r2(r1))
	ACCU = r1 <= 0
		|| (r1 <= 0)
	{
		ACCU = undefined
		return undefined
	}
	r2 = Scope[1]
	try
	{
		ACCU = Scope[1][15]
		if (Scope[1][15])
		{
			r4 = "taskkill"
			r6 = new ["/PID", 0, "/T", "/F"]
			r6[1] = String(r1)
			r5 = r6
			r6 = new {"stdio": null}
			r6["stdio"] = "ignore"
			ACCU = Scope[1][7](r4, r5, r6)
		}
		else
		{
			r3 = process["kill"]
			r6 = "SIGKILL"
			ACCU = r3(r1, r6)
		}
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[49]
		r3 = Scope[1]
	}
	return undefined
}
function func_savePids_0x10000000e()
{
	ACCU = func_ensureDirs_0x100000004()
	r1 = []
	r9 = GetIterator(Scope[1][18])
	r8 = r9["next"]
	ACCU = false
	r10 = false
	r13 = Scope[1]
	try
	{
		while (true)
		{
			r10 = true
			r14 = r8()
			if (r14["done"]) break
			r10 = false
			r15 = r14["value"]
			r17 = GetIterator(r14["value"])
			ACCU = false
			r18 = false
			r21 = Scope[1]
			try
			{
				if (!false)
				{
					r18 = true
					r22 = r17["next"]()
					if (!r22["done"])
					{
						r18 = false
					}
				}
				if (!r18)
				r18 = true
				r22 = r17["next"]()
				ACCU = r22["done"]
					&& (!r22["done"])
				{
					r18 = false
					ACCU = r22["value"]
				}
				else
				{
					ACCU = undefined
				}
				r5 = ACCU
				ACCU = -1
				r20 = -1
				r19 = -1
			}
			catch
			{
				r20 = ACCU
				r19 = 0
			}
			if (!r18)
			{
				r23 = Scope[1]
				try
				{
					if (!r17["return"] == undefined)
					{
						ACCU = r17["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			if (r19 === 0)
			{
				r11 = 0
				r12 = r20
				break
			}
			r17 = r5[r0(441)]
			r16 = GetIterator(r17)
			r15 = r16["next"]
			ACCU = false
			r17 = false
			r20 = Scope[1]
			try
			{
				while (true)
				{
					r17 = true
					r21 = r15()
					if (r21["done"]) break
					r17 = false
					if (!r21["value"][r0(529)]) continue
					r22 = r1[r0(444)]
					r24 = r21["value"][r0(529)]
					ACCU = r22(r24)
				}
				ACCU = -1
				r19 = -1
				r18 = -1
			}
			catch
			{
				r19 = ACCU
				r18 = 0
			}
			if (!r17)
			{
				r22 = Scope[1]
				try
				{
					if (!r16["return"] == undefined)
					{
						ACCU = r16["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			if (!r18 === 0) continue
			ACCU = 0
			r11 = 0
			r12 = r19
			break
		}
		ACCU = -1
		r12 = -1
		r11 = -1
	}
	catch
	{
		r12 = ACCU
		r11 = 0
	}
	if (!r10)
	{
		r15 = Scope[1]
		try
		{
			if (!r9["return"] == undefined)
			{
				ACCU = r9["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	ACCU = r11 === 0
	if (r11 === 0)
	{
		ACCU = r12
	}
	r8 = Scope[1]
	try
	{
		r12 = JSON["stringify"]
		r12 = r12(r1)
		ACCU = Scope[1][4]["writeFileSync"](Scope[1][14], r12)
	}
	catch
	{
		r9 = ACCU
		ACCU = null
		ACCU = Scope[50]
		r9 = Scope[1]
	}
	return undefined
}
function func_rotateLogIfBig_0x10000000d(a0)
{
	ACCU = func_0x1d1a_0x100000047
	r2 = Scope[1]
	try
	{
		r1 = func_logFile_0x100000006(a0)
		r3 = Scope[1][4]["existsSync"]
		ACCU = r3(r1)
		if (r3(r1))
		{
			r3 = Scope[1][4]["statSync"](r1)
			if (r3["size"] > 5242880)
			{
				r3 = Scope[1][4]["renameSync"]
				r6 = (r1 + ".1")
				ACCU = r3(r1, r6)
			}
		}
	}
	catch
	{
		r3 = ACCU
		ACCU = null
		ACCU = Scope[51]
		r3 = Scope[1]
	}
	return undefined
}
function func_classifySeverity_0x10000000c(a0)
{
	ACCU = a0
	if (!a0)
	{
		ACCU = ""
	}
	r3 = ACCU
	r1 = String(r3)
	r3 = \\\\\b40[13]\\\\b|Forbidden|access denied|HTTP error 40[13]|Name does not resolve|Failed to resolve|Connection refused|No route to host|Protocol not found|Invalid data|No such file|could not open|Server returned 404\
	r2 = r3["test"]
	if (r2(r1))
	{
		return "high"
	}
	r3 = \\\\\b5\\\\d{2}\\\\b|I\\\\/O error|Input\\\\/output error|Connection reset|\\\\b406\\\\b|Operation timed out|Server returned 4\
	r2 = r3["test"]
	if (r2(r1))
	{
		return "medium"
	}
	return "low"
}
function func_appendLog_0x10000000b(a0, a1)
{
	r5 = Scope[1]
	Scope[52][3] = a0
	Scope[52][2] = a1
	Scope[52][4] = func_0x1d1a_0x100000047
	ACCU = func_ensureDirs_0x100000004()
	r6 = Scope[1][27]["get"]
	ACCU = r6(Scope[52][3])
	if (!r6(Scope[52][3]))
	{
		r6 = Promise["resolve"]
		ACCU = r6()
	}
	r0 = ACCU
	r6 = r0["then"]
	r1 = r6(func_unknown_0x100000009)
	r6 = Scope[1][27]["set"]
	ACCU = r6(Scope[52][3], r1)
	r7 = Scope[52][2]["split"]
	r9 = \\\\\r?\\\\n\
	r7 = r7(r9)
	r2 = r7["filter"](func_unknown_0x10000000a)
	if (r2["length"])
	{
		r6 = Scope[1][19]["get"]
		ACCU = r6(Scope[52][3])
		if (!r6(Scope[52][3]))
		{
			ACCU = []
		}
		r3 = ACCU
		r6 = r3["push"]
		r7 = r3
		r8 = r2
		ACCU = r6(...r7, r8)
		r9 = r3["slice"]
		r9 = r9(-20)
		ACCU = Scope[1][19]["set"](Scope[52][3], r9)
		r4 = r2[(r2["length"] - 1)]
		r6 = Scope[1][20]["set"]
		r9 = new {"text": null, "severity": null, "ts": null}
		r9["text"] = r4
		r9["severity"] = func_classifySeverity_0x10000000c(r4)
		r10 = Date["now"]
		r9["ts"] = r10()
		ACCU = r6(Scope[52][3], r9)
	}
	return undefined
}
function func_unknown_0x10000000a(a0)
{
	r1 = \error|invalid|failed|denied|not found|no such|could not|unable\
	r0 = r1["test"]
	return r0(a0)
}
function func_unknown_0x100000009()
{
	ACCU = Promise
	return Promise(func_unknown_0x100000008)
}
function func_unknown_0x100000008(a0)
{
	r0 = Scope[52]
	Scope[53][2] = a0
	r1 = Scope[1][4]["appendFile"]
	r3 = func_logFile_0x100000006(Scope[52][3])
	return r1(r3, Scope[52][2], func_unknown_0x100000007)
}
function func_unknown_0x100000007()
{
	return Scope[53][2]()
}
function func_logFile_0x100000006(a0)
{
	r1 = Scope[1][5]["join"]
	r4 = "channel-"
	r4 = (r4 + a0)
	r4 = (r4 + ".log")
	return r1(Scope[1][12], r4)
}
function func_hlsRoot_0x100000005()
{
	r3 = Scope[1][8]["get"]
	r3 = r3()
	r1 = r3["settings"]
	r3 = Scope[1][5]["isAbsolute"]
	r5 = r1["hlsRoot"]
	ACCU = r3(r5)
	if (r3(r5))
	{
		ACCU = r1["hlsRoot"]
	}
	else
	{
		r3 = Scope[1][5]["join"]
		ACCU = r3(Scope[1][11], r1["hlsRoot"])
	}
	r2 = ACCU
	if (!Scope[1][4]["existsSync"](r2))
	{
		r3 = Scope[1][4]["mkdirSync"]
		r6 = new {"recursive": null}
		r6["recursive"] = !(!Boolean([]))
		ACCU = r3(r2, r6)
	}
	return r2
}
function func_ensureDirs_0x100000004()
{
	r0 = func_0x1d1a_0x100000047
	r5 = new [0, 0]
	r5[0] = Scope[1][12]
	r5[1] = Scope[1][13]
	r5 = GetIterator(r5)
	r4 = r5["next"]
	ACCU = false
	r6 = false
	r9 = Scope[1]
	try
	{
		while (true)
		{
			r6 = true
			r10 = r4()
			if (r10["done"]) break
			r6 = false
			r3 = r10["value"]
			r11 = Scope[1][4][r0(485)]
			ACCU = r11(r10["value"])
			r10 = r10["value"]
			if (ACCU) continue
			r14 = new {"recursive": null}
			r14["recursive"] = !(!Boolean([]))
			ACCU = Scope[1][4]["mkdirSync"](r3, r14)
		}
		ACCU = -1
		r8 = -1
		r7 = -1
	}
	catch
	{
		r8 = ACCU
		r7 = 0
	}
	if (!r6)
	{
		r11 = Scope[1]
		try
		{
			if (!r5["return"] == undefined)
			{
				ACCU = r5["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r7 === 0)
	{
		ACCU = r8
	}
	return undefined
}
function func_hlsViewerCount_0x100000003(a0)
{
	r0 = func_0x1d1a_0x100000047
	r1 = Scope[1][23]["get"](a0)
	if (!Scope[1][23]["get"](a0))
	{
		return 0
	}
	r12 = 628
	r9 = Date["now"]
	r2 = (r9() - 45000)
	r3 = 0
	r10 = GetIterator(r1)
	r9 = r10["next"]
	ACCU = false
	r11 = false
	r14 = Scope[1]
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
			ACCU = false
			r19 = false
			r22 = Scope[1]
			try
			{
				if (!false)
				r19 = true
				r23 = r18["next"]()
				ACCU = r23["done"]
					&& (!r23["done"])
				{
					r19 = false
					ACCU = r23["value"]
				}
				else
				{
					ACCU = undefined
				}
				r7 = ACCU
				if (!r19)
				r19 = true
				r23 = r18["next"]()
				ACCU = r23["done"]
					&& (!r23["done"])
				{
					r19 = false
					ACCU = r23["value"]
				}
				else
				{
					ACCU = undefined
				}
				r8 = ACCU
				ACCU = -1
				r21 = -1
				r20 = -1
			}
			catch
			{
				r21 = ACCU
				r20 = 0
			}
			if (!r19)
			{
				r24 = Scope[1]
				try
				{
					if (!r18["return"] == undefined)
					{
						ACCU = r18["return"]()
					}
					catch {}
				}
			}
			ACCU = null
			if (r20 === 0)
			{
				r12 = 0
				r13 = r21
				break
			}
			if (r8 >= r2)
			{
				r3 = (r3 + 1)
				continue
			}
			r16 = r1[r0(622)]
			ACCU = r16(r7)
		}
		ACCU = -1
		r13 = -1
		r12 = -1
	}
	catch
	{
		r13 = ACCU
		r12 = 0
	}
	if (!r11)
	{
		r16 = Scope[1]
		try
		{
			if (!r10["return"] == undefined)
			{
				ACCU = r10["return"]()
			}
			catch {}
		}
	}
	ACCU = null
	if (r12 === 0)
	{
		ACCU = r13
	}
	return r3
}
function func_noteHlsAccess_0x100000002(a0, a1)
{
	if (!a0)
	{
		return undefined
	}
	r1 = Scope[1][23]["has"]
	if (!r1(a0))
	{
		r1 = Scope[1][23]["set"]
		r4 = Map(func_0x1d1a_0x100000047)
		ACCU = r1(a0, r4)
	}
	r2 = Scope[1][23]["get"]
	r2 = r2(a0)
	ACCU = a1
	if (!a1)
	{
		ACCU = "?"
	}
	r5 = ACCU
	r4 = String(r5)
	r3 = r4["slice"]
	r3 = r3(0, 64)
	r4 = Date["now"]
	r4 = r4()
	ACCU = r2["set"](r3, r4)
	return undefined
}
function func_lastErrorInfo_0x100000001(a0)
{
	r2 = Scope[1][20]["get"]
	r1 = r2(a0)
	if (!r2(a0))
	r2 = Date["now"]()
	r2 = (r2 - r1["ts"])
		|| (r2 > 600000)
	{
		return null
	}
	return r1
}
function func_resolveFfmpegPath_0x100000000()
{
	r1 = Scope[1][10]["resolveFfmpeg"]
	r3 = Scope[1][8]["get"]()
	r3 = r3["settings"]
	r3 = r3["ffmpegPath"]
	return r1(r3)
}
