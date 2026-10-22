@echo off
chcp 65001 >nul
title My Live - Stop Server
rem ============================================================================
rem  Stop My Live:
rem   1) Stop only the Nginx of the project folder (with -s stop, then path cleanup)
rem   2) Stop the Node server whose id is stored in run\server.lock
rem  No taskkill by name is used, so no other nginx or node on the machine is affected.
rem ============================================================================
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ==============================================
echo   My Live - Stop
echo ==============================================

rem ---- 1) Our own Nginx ----
if exist "nginx\nginx.exe" (
  pushd "%~dp0nginx"
  nginx.exe -p . -c conf\nginx.conf -s stop >nul 2>&1 && (echo  - Nginx stop signal sent) || (echo  - Nginx did not respond to the signal, forced cleanup below)
  popd
  powershell -NoProfile -Command "$p='%~dp0nginx'; Get-CimInstance Win32_Process -Filter \"Name='nginx.exe'\" -ErrorAction SilentlyContinue | Where-Object { $_.ExecutablePath -and $_.ExecutablePath.StartsWith($p,[System.StringComparison]::OrdinalIgnoreCase) } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }" >nul 2>&1
  echo  - The project's Nginx processes were terminated.
) else (
  echo  - No Nginx is bundled in this folder.
)

rem ---- 2) Node server (by the id recorded in run\server.lock) ----
if exist "run\server.lock" (
  powershell -NoProfile -Command ^
    "$lock = Get-Content 'run\server.lock' -Raw | ConvertFrom-Json; " ^
    "$pid = [int]$lock.pid; " ^
    "$p = Get-CimInstance Win32_Process -Filter (\"ProcessId=$pid\") -ErrorAction SilentlyContinue; " ^
    "if ($p -and ($p.Name -eq 'node.exe') -and ($p.CommandLine -like '*server.js*')) { Stop-Process -Id $pid -Force; Write-Output ('  - Node server stopped (pid ' + $pid + ')') } " ^
    "elseif ($p) { Write-Output ('  - Id ' + $pid + ' belongs to another process, left untouched') } " ^
    "else { Write-Output '  - The server was not running' }"
  if errorlevel 1 echo  - Could not read the lock file.
) else (
  echo  - No lock file - the server was not running.
)

echo.
echo Done. ^(no other process on the machine was touched.^)
timeout /t 4 >nul
