# SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
# SPDX-License-Identifier: Apache-2.0
"""Rasterise brand SVGs to PNG with headless Chrome, then size down with Pillow.

    python brand/src/render.py

Needs Google Chrome (CHROME env var or the default Windows / macOS / Linux path) and Pillow.
"""
import json
import os
import shutil
import subprocess
import tempfile

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
BRAND = os.path.dirname(HERE)
CANDIDATES = [os.environ.get("CHROME", ""), r"C:\Program Files\Google\Chrome\Application\chrome.exe",
              "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "google-chrome", "chromium"]
CHROME = next((c for c in CANDIDATES if c and (os.path.exists(c) or shutil.which(c))), None)


def shot(svg_rel, out_rel, w, h, bg=None):
    """Render brand/<svg_rel> at w x h CSS px into brand/<out_rel> (transparent unless bg)."""
    src = os.path.join(BRAND, svg_rel).replace("\\", "/")
    out = os.path.join(BRAND, out_rel)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    tmp = tempfile.mkdtemp()
    page = os.path.join(tmp, "p.html")
    with open(page, "w", encoding="utf-8") as fh:
        fh.write(f'<!doctype html><html><head><style>html,body{{margin:0;background:{bg or "transparent"}}}'
                 f'img{{display:block;width:{w}px;height:{h}px}}</style></head><body><img src="file:///{src}"></body></html>')
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
                    "--force-device-scale-factor=1", "--default-background-color=00000000",
                    f"--window-size={w},{h}", f"--screenshot={out}", "file:///" + page.replace("\\", "/")],
                   check=True, capture_output=True, timeout=60)
    shutil.rmtree(tmp, ignore_errors=True)
    im = Image.open(out)
    if im.size != (w, h):
        im.crop((0, 0, w, h)).save(out)
    return out


def down(src_rel, out_rel, size, flatten=None):
    im = Image.open(os.path.join(BRAND, src_rel)).convert("RGBA")
    im = im.resize((size, size), Image.LANCZOS)
    if flatten:
        bg = Image.new("RGBA", im.size, flatten)
        bg.alpha_composite(im)
        im = bg.convert("RGB")
    out = os.path.join(BRAND, out_rel)
    im.save(out, optimize=True)
    return out


def svg_size(rel):
    import re
    t = open(os.path.join(BRAND, rel), encoding="utf-8").read(600)
    vb = [float(x) for x in re.search(r'viewBox="([^"]+)"', t).group(1).split()]
    return vb[2], vb[3]


def main():
    if not CHROME:
        raise SystemExit("Chrome not found: set CHROME=/path/to/chrome")
    made = []
    # logos: 1600 px wide (symbol/stacked 1200), transparent
    for item in ("symbol", "wordmark", "lockup-horizontal", "lockup-stacked"):
        for cw in ("color-light", "color-dark", "mono-black", "mono-white", "brand"):
            rel = f"logo/{item}/tilo-{item}-{cw}.svg"
            vw, vh = svg_size(rel)
            W = 1600 if item in ("wordmark", "lockup-horizontal") else 1200
            H = round(W * vh / vw)
            made.append(shot(rel, rel.replace(".svg", ".png"), W, H))
    # app icons
    made.append(shot("app/tilo-app-icon-ios-1024.svg", "app/tilo-app-icon-ios-1024.png", 1024, 1024))
    # iOS rejects alpha in the 1024 marketing icon: flatten to the background colour
    im = Image.open(os.path.join(BRAND, "app/tilo-app-icon-ios-1024.png")).convert("RGB")
    im.save(os.path.join(BRAND, "app/tilo-app-icon-ios-1024.png"), optimize=True)
    made.append(shot("app/tilo-app-icon-rounded-1024.svg", "app/tilo-app-icon-rounded-1024.png", 1024, 1024))
    for n in ("background", "foreground"):
        made.append(shot(f"app/tilo-android-adaptive-{n}-432.svg", f"app/tilo-android-adaptive-{n}-432.png", 432, 432))
    made.append(shot("app/tilo-android-monochrome-432.svg", "app/tilo-android-monochrome-432.png", 432, 432))
    made.append(shot("app/tilo-pwa-maskable-512.svg", "app/tilo-pwa-maskable-512.png", 512, 512))
    # favicons: render big, size down (Lanczos keeps the dot round at 16 px)
    shot("favicon/tilo-favicon-tile.svg", "favicon/_tile-1024.png", 1024, 1024)
    for s in (16, 32, 48, 192, 512):
        made.append(down("favicon/_tile-1024.png", f"favicon/favicon-{s}.png", s))
    shot("favicon/tilo-apple-touch-icon.svg", "favicon/_touch-720.png", 720, 720)
    made.append(down("favicon/_touch-720.png", "favicon/apple-touch-icon-180.png", 180, flatten=(9, 33, 27, 255)))
    ico = Image.open(os.path.join(BRAND, "favicon/_tile-1024.png")).convert("RGBA")
    ico.save(os.path.join(BRAND, "favicon/favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
    made.append("favicon/favicon.ico")
    for tmp in ("favicon/_tile-1024.png", "favicon/_touch-720.png"):
        os.remove(os.path.join(BRAND, tmp))
    # social
    made.append(shot("social/tilo-avatar-512.svg", "social/tilo-avatar-512.png", 512, 512))
    for lang in ("uz", "en", "ru"):
        made.append(shot(f"social/tilo-og-1200x630-{lang}.svg", f"social/tilo-og-1200x630-{lang}.png", 1200, 630))
    made.append(shot("social/tilo-github-social-1280x640.svg", "social/tilo-github-social-1280x640.png", 1280, 640))
    made.append(shot("social/tilo-telegram-cover-1280x720.svg", "social/tilo-telegram-cover-1280x720.png", 1280, 720))
    # guide sheets
    made.append(shot("logo/construction/tilo-construction.svg", "logo/construction/tilo-construction.png", 1720, 760))
    vw, vh = svg_size("logo/misuse/tilo-incorrect-use.svg")
    made.append(shot("logo/misuse/tilo-incorrect-use.svg", "logo/misuse/tilo-incorrect-use.png", round(vw), round(vh)))
    # compress
    for p in made:
        p = p if os.path.isabs(p) else os.path.join(BRAND, p)
        if p.endswith(".png"):
            im = Image.open(p)
            im.save(p, optimize=True)
    # record in manifest
    man_p = os.path.join(BRAND, "src", "manifest.json")
    man = json.load(open(man_p, encoding="utf-8"))
    have = {m["path"] for m in man}
    for p in made:
        rel = os.path.relpath(p if os.path.isabs(p) else os.path.join(BRAND, p), BRAND).replace("\\", "/")
        if rel not in have:
            src = next((m for m in man if m["path"] == rel.replace(".png", ".svg")), None)
            man.append(dict(path=rel, kind=(src or {}).get("kind", rel.split("/")[0]), desc=((src or {}).get("desc", rel) + " (PNG)"),
                            **{k: v for k, v in (src or {}).items() if k not in ("path", "kind", "desc")}))
    for rel, d in [("favicon/favicon-16.png", "Favicon 16 px"), ("favicon/favicon-32.png", "Favicon 32 px"), ("favicon/favicon-48.png", "Favicon 48 px"),
                   ("favicon/favicon-192.png", "PWA icon 192 px"), ("favicon/favicon-512.png", "PWA icon 512 px"),
                   ("favicon/apple-touch-icon-180.png", "Apple touch icon 180 px"), ("favicon/favicon.ico", "favicon.ico (16, 32, 48)")]:
        for m in man:
            if m["path"] == rel:
                m["desc"], m["kind"] = d, "favicon"
    with open(man_p, "w", encoding="utf-8", newline="\n") as fh:
        json.dump(man, fh, indent=1)
        fh.write("\n")
    print("rendered", len(made), "files")


if __name__ == "__main__":
    main()
