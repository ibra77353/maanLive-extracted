@echo off
chcp 65001 >nul
title My Live - Start Server
rem ============================================================================
rem  Start My Live on Windows:
rem   1) Check Node.js and ffmpeg.exe
rem   2) Write nginx.conf and read the real ports from the program itself (no guessing)
rem   3) Clean the temporary streaming folder (srv\hls) for a fresh start
rem   4) Start the server (it starts Nginx and verifies its response)
rem   5) On exit: stop only the Nginx of our own folder
rem  No other Nginx or process on the machine is touched.
rem ============================================================================
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ==============================================
echo   My Live - Start
echo ==============================================

rem ---- 1) Node.js ----
set "NODE="
if exist "node\node.exe" set "NODE=%~dp0node\node.exe"
if not defined NODE (
  where node >nul 2>&1
  if not errorlevel 1 set "NODE=node"
)
if not defined NODE (
  echo [ERROR] Node.js was not found.
  echo         Install Node.js 18 or newer (an offline portable copy works),
  echo         or place the whole node folder next to this file (node\node.exe).
  echo.
  pause
  exit /b 1
)
for /f "tokens=*" %%v in ('"%NODE%" -v 2^>nul') do set "NODEVER=%%v"
echo [1/5] Node.js: %NODEVER%

rem ---- 2) ffmpeg ----
if exist "ffmpeg.exe" (
  echo [2/5] ffmpeg.exe: found
) else (
  echo [2/5] [WARNING] ffmpeg.exe is missing in this folder - streaming will not work.
)
if not exist "config" mkdir "config"
if not exist "srv\hls" mkdir "srv\hls"
if not exist "srv\uploads" mkdir "srv\uploads"
if not exist "logs" mkdir "logs"
if not exist "run" mkdir "run"

rem ---- 3) Write nginx.conf and read the ports ----
set "NG_PORT="
set "ND_PORT="
set "NGINX_ON=0"
if exist "nginx\nginx.exe" (
  echo [3/5] Preparing nginx.conf and reading the ports from the settings...
  for /f "usebackq delims=" %%L in (`"%NODE%" server.js --write-nginx-conf`) do (
    echo    %%L
    for /f "tokens=1,2 delims==" %%A in ("%%L") do (
      if "%%A"=="NGINX_PORT" set "NG_PORT=%%B"
      if "%%A"=="NODE_PORT" set "ND_PORT=%%B"
    )
  )
  set "NGINX_ON=1"
) else (
  echo [3/5] [INFO] No nginx folder - streams are served by Node directly.
  for /f "usebackq delims=" %%L in (`"%NODE%" server.js --write-nginx-conf`) do (
    for /f "tokens=1,2 delims==" %%A in ("%%L") do (
      if "%%A"=="NGINX_PORT" set "NG_PORT=%%B"
      if "%%A"=="NODE_PORT" set "ND_PORT=%%B"
    )
  )
)
if not defined NG_PORT set "NG_PORT=801"
if not defined ND_PORT set "ND_PORT=3001"

rem Stop any old nginx from our own folder (left over from a previous session) first
if "%NGINX_ON%"=="1" (
  pushd "%~dp0nginx"
  nginx.exe -p . -c conf\nginx.conf -s stop >nul 2>&1
  popd
  powershell -NoProfile -Command "$p='%~dp0nginx'; Get-CimInstance Win32_Process -Filter \"Name='nginx.exe'\" -ErrorAction SilentlyContinue | Where-Object { $_.ExecutablePath -and $_.ExecutablePath.StartsWith($p,[System.StringComparison]::OrdinalIgnoreCase) } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }" >nul 2>&1
  timeout /t 1 >nul
)

rem ---- 4) Clean the temporary streaming folder (srv\hls) for a fresh start ----
rem Runs after our own nginx is stopped, so no open .ts/playlist file blocks the delete.
if exist "srv\hls" rd /s /q "srv\hls" >nul 2>&1
if exist "srv\hls" (
  echo [4/5] [WARNING] srv\hls could not be fully cleaned - another server may still be running.
) else (
  mkdir "srv\hls"
  echo [4/5] srv\hls: cleaned
)

echo.
echo ==============================================
echo   Addresses:
echo     Control panel : http://localhost:%NG_PORT%/admin
echo     Viewer page   : http://localhost:%NG_PORT%/
if "%NGINX_ON%"=="0" (
  echo     ^(without Nginx^): http://localhost:%ND_PORT%/admin
)
echo     First login   : admin / admin123  ^(change it in Settings^)
echo   To stop: run "stop.bat" or press Ctrl+C
echo ==============================================
echo.

rem ---- 5) Start the server (it starts and verifies Nginx itself) ----
"%NODE%" server.js
set "EXITCODE=%errorlevel%"

echo.
if not "%EXITCODE%"=="0" (
  echo [ERROR] The server exited with code %EXITCODE% - check the messages above.
) else (
  echo [INFO] The server was stopped.
)

rem Stop only our own Nginx
if "%NGINX_ON%"=="1" (
  pushd "%~dp0nginx"
  nginx.exe -p . -c conf\nginx.conf -s stop >nul 2>&1
  popd
  powershell -NoProfile -Command "$p='%~dp0nginx'; Get-CimInstance Win32_Process -Filter \"Name='nginx.exe'\" -ErrorAction SilentlyContinue | Where-Object { $_.ExecutablePath -and $_.ExecutablePath.StartsWith($p,[System.StringComparison]::OrdinalIgnoreCase) } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }" >nul 2>&1
  echo [INFO] The project Nginx was stopped.
)

echo.
pause
