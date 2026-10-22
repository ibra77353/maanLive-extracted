#!/usr/bin/env python3
"""Refresh the Amaan Live license token by calling the vendor's own /api/validate.

`src/license.js` re-validates the stored license from inside the running app (`revalidate()` sends
`POST <LICENSE_SERVER>/api/validate {key, deviceId}` every 6 hours) and keeps the signed token the
license server returns in `config/config.json`. This script performs that same request from the
command line, for cases the embedded loop cannot cover: a machine that will go offline before the
app's next revalidation, a service that starts earlier than the app, or a plain connectivity check
against the license server.

It mirrors the app field for field:

* the device fingerprint is computed like `deviceId()` in `src/license.js` — `AMAAN_DEVICE_HW`, then
  `reg query …MachineGuid` / `wmic csproduct get UUID` on Windows, `/etc/machine-id` /
  `/var/lib/dbus/machine-id` elsewhere, then `sha256("amaan-hw::" + hwid)[:32]`;
* the request is `POST <server>/api/validate` with `{"key", "deviceId"}`, `Content-Type:
  application/json`, a `Content-Length` header and a 12 s timeout;
* the token is accepted only if it verifies the way `verifyToken()` verifies it: three `.`-separated
  segments, third segment `v2`, the payload's `deviceId` equal to this device, and an ECDSA P-256
  signature over `sha256(payload segment)` produced by the vendor's public key;
* only then are `license.token`, `license.expiresAt` (taken from the verified payload) and
  `license.lastCheck` written — the same three fields, in the same `JSON.stringify(state, null, 2)`
  + `.tmp` + rename shape the app's `store.save()` uses.

What this script deliberately does not do: it never invents, edits or extends a token, it never sets
`expiresAt` on its own authority, and it has no offline fallback. When the license server refuses
(HTTP 403, an ended trial, an unsigned or garbled answer, a token bound to another device),
`config.json` is left byte for byte untouched and the script exits non-zero. Whether the app keeps
running is decided by the vendor's server, never by this script.

The app ignores `license.serverUrl` in the config and always uses the constant below, so the default
here is that same constant; `--server` overrides it.

`--device-id` exists for hosts where the fingerprint legitimately differs from the app's own (a
container holding the config, a machine the config was copied to, `AMAAN_DEVICE_HW` in play). Whatever
is passed is used both in the request and as the binding the returned token must carry, so the stored
value is only ever a token that verifies for that fingerprint — and a token stored for a fingerprint
the app does not compute itself simply fails the app's own check and changes nothing.

Usage:
  python3 tools/license/update.py                    # refresh config/config.json in place
  python3 tools/license/update.py --dry-run          # ask the server, print, write nothing
  python3 tools/license/update.py --print-response   # also dump the raw server answer

Exit codes: 0 refreshed · 2 refused by the server · 3 token failed local verification ·
1 network, parse or usage error.
"""
from __future__ import annotations

import argparse
import base64
import datetime
import hashlib
import json
import math
import os
import platform
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request
from pathlib import Path

# `src/license.js` assigns this constant and never reads `license.serverUrl` from the config.
DEFAULT_SERVER = "https://amtik.online:4011"
VALIDATE_PATH = "/api/validate"
REQUEST_TIMEOUT = 12.0

# The PEM `src/license.js` falls back to when LICENSE_PUBLIC_KEY is unset, copied character for
# character from the recovered module (verified against the recovered default: `openssl dgst` accepts
# tokens the vendor issued).
DEFAULT_PUBLIC_KEY = """-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE+tKNUDiFsyiVzz3UvrDhI2/WMKJq
pMWA+mrtCNXI2lhLrtxn7eQhZgo+PNgBxjjao7xdLcArtRSRuYqC0mYhRQ==
-----END PUBLIC KEY-----"""

TOKEN_VERSION = "v2"
DAY_MS = 24 * 60 * 60 * 1000

EXIT_OK = 0
EXIT_ERROR = 1
EXIT_REFUSED = 2
EXIT_UNVERIFIED = 3


# --------------------------------------------------------------------------- device fingerprint

def _run(command: list[str], timeout: float = 5.0) -> str:
    """Run a helper like the app's `execSync(..., {timeout: 5000, windowsHide: true})`."""
    try:
        result = subprocess.run(command, capture_output=True, text=True, timeout=timeout)
    except (OSError, subprocess.SubprocessError):
        return ""
    return result.stdout or ""


def hardware_id() -> str:
    """Mirror of `hardwareId()` in src/license.js."""
    override = os.environ.get("AMAAN_DEVICE_HW")
    if override:
        return str(override)
    if sys.platform == "win32":
        output = _run(["reg", "query", r"HKLM\SOFTWARE\Microsoft\Cryptography", "/v", "MachineGuid"])
        match = re.search(r"MachineGuid\s+REG_SZ\s+([\w-]+)", output or "")
        if match:
            return match.group(1)
        output = _run(["wmic", "csproduct", "get", "UUID"])
        for line in (output or "").split("\r\n"):
            line = line.strip()
            if line and "UUID" not in line:
                return line
        return ""
    for path in ("/etc/machine-id", "/var/lib/dbus/machine-id"):
        try:
            value = Path(path).read_text(encoding="utf-8").strip()
        except OSError:
            continue
        if value:
            return value
    return ""


def _node_arch() -> str:
    """Node's `os.arch()` spelling of this machine's architecture."""
    machine = platform.machine().lower()
    return {"x86_64": "x64", "amd64": "x64", "aarch64": "arm64"}.get(machine, machine)


def _cpu_models() -> list[str]:
    if sys.platform == "linux":
        try:
            names = re.findall(r"^model name\s*:\s*(.+)$", Path("/proc/cpuinfo").read_text(errors="replace"),
                               re.MULTILINE)
        except OSError:
            names = []
        if names:
            return [name.strip() for name in names]
    processor = platform.processor()
    return [processor] if processor else []


def _total_memory() -> int:
    try:
        return os.sysconf("SC_PAGE_SIZE") * os.sysconf("SC_PHYS_PAGES")
    except (AttributeError, ValueError, OSError):
        pass
    if sys.platform == "win32":
        import ctypes

        class MemoryStatus(ctypes.Structure):
            _fields_ = [("dwLength", ctypes.c_uint32), ("dwMemoryLoad", ctypes.c_uint32),
                        ("ullTotalPhys", ctypes.c_uint64), ("ullAvailPhys", ctypes.c_uint64),
                        ("ullTotalPageFile", ctypes.c_uint64), ("ullAvailPageFile", ctypes.c_uint64),
                        ("ullTotalVirtual", ctypes.c_uint64), ("ullAvailVirtual", ctypes.c_uint64),
                        ("ullAvailExtendedVirtual", ctypes.c_uint64)]

        status = MemoryStatus()
        status.dwLength = ctypes.sizeof(MemoryStatus)
        if ctypes.windll.kernel32.GlobalMemoryStatusEx(ctypes.byref(status)):
            return status.ullTotalPhys
    return 0


def device_id() -> str:
    """Mirror of `deviceId()` in src/license.js."""
    hardware = hardware_id()
    if hardware:
        return hashlib.sha256(("amaan-hw::" + hardware).encode("utf-8")).hexdigest()[:32]
    fallback = "::".join([platform.node(), sys.platform, _node_arch(),
                          "|".join(_cpu_models()), str(_total_memory())])
    return hashlib.sha256(fallback.encode("utf-8")).hexdigest()[:32]


# ------------------------------------------------------------------------------ token verification

def b64url_decode(value: str) -> bytes:
    return base64.urlsafe_b64decode(value + "=" * (-len(value) % 4))


def verify_signature(data: bytes, signature: bytes, public_key: str) -> bool:
    """ECDSA P-256 over sha256(data), the check `crypto.verify("sha256", …, …, …)` performs."""
    try:
        from cryptography.exceptions import InvalidSignature
        from cryptography.hazmat.primitives import hashes, serialization
        from cryptography.hazmat.primitives.asymmetric import ec
    except ImportError:
        return _verify_signature_with_openssl(data, signature, public_key)
    key = serialization.load_pem_public_key(public_key.encode("utf-8"))
    if not isinstance(key, ec.EllipticCurvePublicKey):
        raise RuntimeError("LICENSE_PUBLIC_KEY ليست مفتاحًا إهليلجيًا (EC)")
    try:
        key.verify(signature, data, ec.ECDSA(hashes.SHA256()))
    except InvalidSignature:
        return False
    return True


def _verify_signature_with_openssl(data: bytes, signature: bytes, public_key: str) -> bool:
    executable = shutil.which("openssl")
    if not executable:
        raise RuntimeError("لا تتوفر مكتبة `cryptography` ولا أداة `openssl` للتحقق من التوقيع")
    with tempfile.TemporaryDirectory() as directory:
        key_path = Path(directory, "license.pem")
        signature_path = Path(directory, "token.sig")
        payload_path = Path(directory, "token.payload")
        key_path.write_text(public_key if public_key.endswith("\n") else public_key + "\n", encoding="utf-8")
        signature_path.write_bytes(signature)
        payload_path.write_bytes(data)
        result = subprocess.run([executable, "dgst", "-sha256", "-verify", str(key_path),
                                 "-signature", str(signature_path), str(payload_path)],
                                capture_output=True, text=True)
    return result.returncode == 0


def verify_token(token: str, expected_device_id: str, public_key: str) -> tuple[dict | None, str | None]:
    """Mirror of `verifyToken()` in src/license.js: returns (payload, failure reason)."""
    parts = str(token or "").split(".")
    if len(parts) != 3:
        return None, "بنية التوكن غير صحيحة (المتوقع ثلاثة أجزاء مفصولة بنقطة)"
    payload_segment, signature_segment, version = parts
    if version != TOKEN_VERSION:
        return None, f"إصدار التوكن غير مدعوم: {version!r} (المطلوب {TOKEN_VERSION!r})"
    try:
        payload = json.loads(b64url_decode(payload_segment).decode("utf-8"))
    except (ValueError, UnicodeDecodeError):
        return None, "تعذّر فك حمولة التوكن"
    if not isinstance(payload, dict):
        return None, "حمولة التوكن ليست كائنًا"
    if payload.get("deviceId") != expected_device_id:
        return None, "التوكن مرتبط بجهاز آخر (deviceId غير مطابق)"
    try:
        signature = b64url_decode(signature_segment)
    except (ValueError, UnicodeEncodeError):
        return None, "تعذّر فك توقيع التوكن"
    if not verify_signature(payload_segment.encode("ascii"), signature, public_key):
        return None, "توقيع التوكن غير صالح"
    return payload, None


# ----------------------------------------------------------------------------------- http + config

def post_validate(server: str, key: str, device: str, timeout: float) -> tuple[int, bytes]:
    url = re.sub(r"/+$", "", server) + VALIDATE_PATH
    body = json.dumps({"key": key, "deviceId": device}).encode("utf-8")
    request = urllib.request.Request(url, data=body, method="POST", headers={
        "Content-Type": "application/json",
        "Content-Length": str(len(body)),
    })
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            return response.status, response.read()
    except urllib.error.HTTPError as error:  # 4xx/5xx still carries the vendor's JSON message
        return error.code, error.read()
    except urllib.error.URLError as error:
        if isinstance(error.reason, TimeoutError):
            raise RuntimeError("انتهت مهلة الاتصال بخادم التفعيل") from error
        raise RuntimeError(f"تعذر الاتصال بخادم التفعيل: {error.reason}") from error
    except TimeoutError as error:
        raise RuntimeError("انتهت مهلة الاتصال بخادم التفعيل") from error


def parse_body(raw: bytes) -> dict:
    """The app treats an empty body as `{}` and an unparsable one as a failed exchange."""
    text = raw.decode("utf-8", "replace").strip()
    if not text:
        return {}
    try:
        parsed = json.loads(text)
    except ValueError as error:
        raise RuntimeError("رد غير صالح من خادم التفعيل") from error
    return parsed if isinstance(parsed, dict) else {}


def save_license(config_path: Path, token: str, expires_at: int, now_ms: int) -> None:
    """The three fields the app's `revalidate()` writes on a successful answer (store.save())."""
    state = json.loads(config_path.read_text(encoding="utf-8"))
    license_state = state.setdefault("license", {})
    license_state["token"] = token
    license_state["expiresAt"] = expires_at
    license_state["lastCheck"] = now_ms
    temporary = config_path.with_name(config_path.name + ".tmp")
    temporary.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")
    os.replace(temporary, config_path)


# ----------------------------------------------------------------------------------------- main

def _describe(expires_at: int, now_ms: int) -> str:
    moment = datetime.datetime.fromtimestamp(expires_at / 1000, datetime.timezone.utc)
    local = datetime.datetime.fromtimestamp(expires_at / 1000).astimezone()
    days_left = math.ceil((expires_at - now_ms) / DAY_MS)
    return f"{moment:%Y-%m-%d %H:%M:%S}Z ({local:%Y-%m-%d %H:%M:%S} محليًا) — متبقٍّ {days_left} يومًا"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="POST /api/validate to the Amaan Live license server and store the signed token it returns.")
    parser.add_argument("--config", default="config/config.json", help="path to config.json")
    parser.add_argument("--server", default=DEFAULT_SERVER,
                        help=f"license server base URL (default: the constant src/license.js uses, "
                             f"{DEFAULT_SERVER})")
    parser.add_argument("--key", default=None, help="license key (default: license.key from the config)")
    parser.add_argument("--device-id", default=None,
                        help="device fingerprint (default: computed like src/license.js deviceId())")
    parser.add_argument("--public-key", default=None,
                        help="PEM file to verify with (default: LICENSE_PUBLIC_KEY, else the key "
                             "embedded in src/license.js)")
    parser.add_argument("--timeout", type=float, default=REQUEST_TIMEOUT, help="request timeout in seconds")
    parser.add_argument("--dry-run", action="store_true", help="ask the server but write nothing")
    parser.add_argument("--print-response", action="store_true", help="print the raw server answer")
    args = parser.parse_args(argv)

    config_path = Path(args.config)
    try:
        state = json.loads(config_path.read_text(encoding="utf-8"))
    except OSError as error:
        raise RuntimeError(f"تعذّر قراءة {config_path}: {error}") from error
    except ValueError as error:
        raise RuntimeError(f"{config_path} ليس JSON صالحًا: {error}") from error

    license_state = state.get("license") or {}
    key = (args.key or license_state.get("key") or "").strip()
    if not key:
        print("لا يوجد مفتاح ترخيص في config.json ولا في --key — لا شيء لطلبه من الخادم.", file=sys.stderr)
        return EXIT_ERROR

    device = (args.device_id or device_id()).strip()
    if args.public_key:
        public_key = Path(args.public_key).read_text(encoding="utf-8")
    else:
        public_key = os.environ.get("LICENSE_PUBLIC_KEY") or DEFAULT_PUBLIC_KEY

    print(f"الخادم: {args.server}{VALIDATE_PATH}")
    print(f"المفتاح: {key[:4]}****   معرّف الجهاز: {device}")

    status, raw = post_validate(args.server, key, device, args.timeout)
    if args.print_response:
        print(f"--- استجابة الخادم (HTTP {status}) ---")
        print(raw.decode("utf-8", "replace").strip())
    body = parse_body(raw)
    now_ms = int(time.time() * 1000)

    if status == 403:
        message = body.get("message") or "رفض الخادم هذا المفتاح لهذا الجهاز."
        print(f"رفض الخادم الطلب (HTTP 403): {message}", file=sys.stderr)
        print("لم يُعدَّل config.json. يجرّب التطبيق نفسه في هذه الحالة /api/activate ببصمة الجهاز القديمة "
              "(ترحيل البصمة)؛ شغّله مرة واحدة إن كان الرفض بسبب تغيّر البصمة. وإن كان الاشتراك منتهيًا "
              "فالتجديد لدى مزوّد الخدمة هو الحل.", file=sys.stderr)
        return EXIT_REFUSED
    if status != 200:
        message = body.get("message") or ""
        print(f"رفض الخادم الطلب (HTTP {status}). {message}".rstrip(), file=sys.stderr)
        print("لم يُعدَّل config.json.", file=sys.stderr)
        return EXIT_REFUSED

    token = body.get("token")
    if not token:
        print("لم يُرسل الخادم توكنًا في رده — لا شيء يُحفظ.", file=sys.stderr)
        print("لم يُعدَّل config.json.", file=sys.stderr)
        return EXIT_REFUSED

    payload, reason = verify_token(token, device, public_key)
    if payload is None:
        print(f"لم يُقبل التوكن المستلم: {reason}", file=sys.stderr)
        print("لم يُعدَّل config.json — يُحفظ فقط ما يوقّعه مزوّد الخدمة لهذا الجهاز.", file=sys.stderr)
        return EXIT_UNVERIFIED

    expires_at = payload.get("expiresAt")
    if not isinstance(expires_at, int):
        print(f"حمولة التوكن لا تحمل expiresAt صالحًا: {expires_at!r}", file=sys.stderr)
        print("لم يُعدَّل config.json.", file=sys.stderr)
        return EXIT_UNVERIFIED

    print(f"توكن موقّع ومتحقَّق منه لهذا الجهاز — ينتهي في {_describe(expires_at, now_ms)}")
    for field in ("update", "messages", "contact"):
        if body.get(field):
            print(f"الخادم أرسل أيضًا `{field}` — يحمله التطبيق في الذاكرة عند تشغيله، ولا يُحفظ في config.json.")

    if args.dry_run:
        print("--dry-run: لم يُكتب أي تغيير.")
        return EXIT_OK

    save_license(config_path, token, expires_at, now_ms)
    print(f"تم تحديث {config_path}: license.token و license.expiresAt و license.lastCheck.")
    return EXIT_OK


if __name__ == "__main__":
    try:
        sys.exit(main())
    except RuntimeError as error:
        print(f"خطأ: {error}", file=sys.stderr)
        sys.exit(EXIT_ERROR)
    except KeyboardInterrupt:
        sys.exit(EXIT_ERROR)
