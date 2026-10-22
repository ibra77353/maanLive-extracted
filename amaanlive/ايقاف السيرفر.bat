@echo off
chcp 65001 >nul
title بثي المحلي — إيقاف السيرفر
rem ============================================================================
rem  إيقاف بثي المحلي:
rem   1) إيقاف Nginx الخاص بمجلد المشروع فقط (بإشارة -s stop ثم تنظيف المسارات)
rem   2) إيقاف خادم Node الذي يحمل المعرّف المحفوظ في run\server.lock
rem  لا يُستخدم taskkill بالأسماء، فلا يتأثر أي nginx أو node آخر على الجهاز.
rem ============================================================================
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ==============================================
echo   بثي المحلي — إيقاف
echo ==============================================

rem ---- 1) Nginx الخاص بنا ----
if exist "nginx\nginx.exe" (
  pushd "%~dp0nginx"
  nginx.exe -p . -c conf\nginx.conf -s stop >nul 2>&1 && (echo  - أُرسلت إشارة إيقاف Nginx) || (echo  - لم يستجب Nginx للإشارة — تنظيف قسري أدناه)
  popd
  powershell -NoProfile -Command "$p='%~dp0nginx'; Get-CimInstance Win32_Process -Filter \"Name='nginx.exe'\" -ErrorAction SilentlyContinue | Where-Object { $_.ExecutablePath -and $_.ExecutablePath.StartsWith($p,[System.StringComparison]::OrdinalIgnoreCase) } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }" >nul 2>&1
  echo  - تم إنهاء عمليات Nginx التابعة للمشروع.
) else (
  echo  - لا يوجد Nginx مرفق في هذا المجلد.
)

rem ---- 2) خادم Node (بالمعرّف المسجّل في run\server.lock) ----
if exist "run\server.lock" (
  powershell -NoProfile -Command ^
    "$lock = Get-Content 'run\server.lock' -Raw | ConvertFrom-Json; " ^
    "$pid = [int]$lock.pid; " ^
    "$p = Get-CimInstance Win32_Process -Filter (\"ProcessId=$pid\") -ErrorAction SilentlyContinue; " ^
    "if ($p -and ($p.Name -eq 'node.exe') -and ($p.CommandLine -like '*server.js*')) { Stop-Process -Id $pid -Force; Write-Output ('  - أُوقف خادم Node (pid ' + $pid + ')') } " ^
    "elseif ($p) { Write-Output ('  - المعرّف ' + $pid + ' يعود لعملية أخرى — لم يُلمس') } " ^
    "else { Write-Output '  - لم يكن الخادم يعمل' }"
  if errorlevel 1 echo  - تعذّر قراءة ملف القفل.
) else (
  echo  - لا يوجد ملف قفل — الخادم لم يكن يعمل.
)

echo.
echo تم. ^(لم تُلمس أي عملية أخرى على الجهاز.^)
timeout /t 4 >nul
