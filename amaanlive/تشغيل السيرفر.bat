@echo off
chcp 65001 >nul
title بثي المحلي — تشغيل السيرفر
rem ============================================================================
rem  تشغيل بثي المحلي على Windows:
rem   1) التحقق من Node.js و ffmpeg.exe
rem   2) كتابة nginx.conf وقراءة المنافذ الفعلية من البرنامج نفسه (لا تخمين)
rem   3) تشغيل الخادم (وهو يشغّل Nginx ويتحقق من استجابته)
rem   4) عند الإغلاق: إيقاف Nginx الخاص بمجلدنا فقط
rem  لا يُلمس أي Nginx أو أي عملية أخرى على الجهاز.
rem ============================================================================
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ==============================================
echo   بثي المحلي — تشغيل
echo ==============================================

rem ---- 1) Node.js ----
set "NODE="
if exist "node\node.exe" set "NODE=%~dp0node\node.exe"
if not defined NODE (
  where node >nul 2>&1
  if not errorlevel 1 set "NODE=node"
)
if not defined NODE (
  echo [خطأ] لم يُعثر على Node.js.
  echo        ثبّت Node.js 18 أو أحدث من نسخة محمولة بلا إنترنت،
  echo        أو ضع مجلد node كاملاً بجانب هذا الملف (node\node.exe).
  echo.
  pause
  exit /b 1
)
for /f "tokens=*" %%v in ('"%NODE%" -v 2^>nul') do set "NODEVER=%%v"
echo [1/4] Node.js: %NODEVER%

rem ---- 2) ffmpeg ----
if exist "ffmpeg.exe" (
  echo [2/4] ffmpeg.exe: موجود
) else (
  echo [2/4] [تنبيه] ffmpeg.exe غير موجود في هذا المجلد — لن يعمل البث.
)
if not exist "config" mkdir "config"
if not exist "srv\hls" mkdir "srv\hls"
if not exist "srv\uploads" mkdir "srv\uploads"
if not exist "logs" mkdir "logs"
if not exist "run" mkdir "run"

rem ---- 3) كتابة nginx.conf وقراءة المنافذ ----
set "NG_PORT="
set "ND_PORT="
set "NGINX_ON=0"
if exist "nginx\nginx.exe" (
  echo [3/4] تجهيز nginx.conf وقراءة المنافذ من الإعدادات...
  for /f "usebackq delims=" %%L in (`"%NODE%" server.js --write-nginx-conf`) do (
    echo    %%L
    for /f "tokens=1,2 delims==" %%A in ("%%L") do (
      if "%%A"=="NGINX_PORT" set "NG_PORT=%%B"
      if "%%A"=="NODE_PORT" set "ND_PORT=%%B"
    )
  )
  set "NGINX_ON=1"
) else (
  echo [3/4] [معلومة] لا يوجد مجلد nginx — سيُخدَم البث من Node مباشرة.
  for /f "usebackq delims=" %%L in (`"%NODE%" server.js --write-nginx-conf`) do (
    for /f "tokens=1,2 delims==" %%A in ("%%L") do (
      if "%%A"=="NGINX_PORT" set "NG_PORT=%%B"
      if "%%A"=="NODE_PORT" set "ND_PORT=%%B"
    )
  )
)
if not defined NG_PORT set "NG_PORT=801"
if not defined ND_PORT set "ND_PORT=3001"

rem أوقف أي نسخة nginx قديمة من مجلدنا (تبقى من جلسة سابقة) قبل التشغيل
if "%NGINX_ON%"=="1" (
  pushd "%~dp0nginx"
  nginx.exe -p . -c conf\nginx.conf -s stop >nul 2>&1
  popd
  powershell -NoProfile -Command "$p='%~dp0nginx'; Get-CimInstance Win32_Process -Filter \"Name='nginx.exe'\" -ErrorAction SilentlyContinue | Where-Object { $_.ExecutablePath -and $_.ExecutablePath.StartsWith($p,[System.StringComparison]::OrdinalIgnoreCase) } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }" >nul 2>&1
  timeout /t 1 >nul
)

echo.
echo ==============================================
echo   العنوانات:
echo     لوحة التحكم  : http://localhost:%NG_PORT%/admin
echo     صفحة المشاهدين: http://localhost:%NG_PORT%/
if "%NGINX_ON%"=="0" (
  echo     ^(بدون Nginx^): http://localhost:%ND_PORT%/admin
)
echo     الدخول الأول : admin / admin123  ^(غيّرها من الإعدادات^)
echo   للإيقاف: نفّذ «ايقاف السيرفر.bat» أو اضغط Ctrl+C
echo ==============================================
echo.

rem ---- 4) تشغيل الخادم (يشغّل Nginx ويتحقق منه بنفسه) ----
"%NODE%" server.js
set "EXITCODE=%errorlevel%"

echo.
if not "%EXITCODE%"=="0" (
  echo [خطأ] خرج الخادم برمز %EXITCODE% — راجع الرسائل أعلاه.
) else (
  echo [معلومة] أُوقف الخادم.
)

rem إنهاء Nginx الخاص بنا فقط
if "%NGINX_ON%"=="1" (
  pushd "%~dp0nginx"
  nginx.exe -p . -c conf\nginx.conf -s stop >nul 2>&1
  popd
  powershell -NoProfile -Command "$p='%~dp0nginx'; Get-CimInstance Win32_Process -Filter \"Name='nginx.exe'\" -ErrorAction SilentlyContinue | Where-Object { $_.ExecutablePath -and $_.ExecutablePath.StartsWith($p,[System.StringComparison]::OrdinalIgnoreCase) } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }" >nul 2>&1
  echo [معلومة] أُوقف Nginx الخاص بالمشروع.
)

echo.
pause
