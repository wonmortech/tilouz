# SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
# SPDX-License-Identifier: Apache-2.0
"""Tilo colour system: scales generated in OKLCH around fixed anchor colours,
WCAG 2.x contrast computed for every pair the guidelines name."""
import math

# Anchors (fixed, never regenerated). Light-mode values come from logo 01 "Geometrik".
ANCHORS = {
    "teal": {"600": "#0B7A67", "300": "#34C9A8"},
    "sea": {"500": "#1497B8", "300": "#4FD3F0"},
    "gold": {"400": "#F2A81D", "300": "#F6B93B"},
    "neutral": {"50": "#F7F5F0", "900": "#15171C", "950": "#101214"},
}
STEPS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]
L_TARGET = [0.975, 0.945, 0.89, 0.81, 0.72, 0.63, 0.535, 0.455, 0.38, 0.30, 0.225]
HUE = {"teal": None, "sea": None, "gold": None, "neutral": None, "ok": 150, "warn": 70, "bad": 27, "info": 245}
CMAX = {"neutral": 0.010, "ok": 0.15, "warn": 0.16, "bad": 0.19, "info": 0.14}


# ---------------------------------------------------------------- colour math
def _lin(c):
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def _gam(c):
    c = max(0.0, min(1.0, c))
    return 12.92 * c if c <= 0.0031308 else 1.055 * c ** (1 / 2.4) - 0.055


def hex2rgb(h):
    h = h.lstrip("#")
    return [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]


def rgb2hex(rgb):
    return "#" + "".join(f"{round(max(0, min(1, c)) * 255):02X}" for c in rgb)


def to_oklch(h):
    r, g, b = (_lin(c) for c in hex2rgb(h))
    l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
    m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
    s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b
    l, m, s = (math.copysign(abs(x) ** (1 / 3), x) for x in (l, m, s))
    L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s
    a = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s
    bb = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    return L, math.hypot(a, bb), math.degrees(math.atan2(bb, a)) % 360


def from_oklch(L, C, H):
    a, b = C * math.cos(math.radians(H)), C * math.sin(math.radians(H))
    l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
    m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
    s = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3
    r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s
    g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
    bl = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    return r, g, bl


def in_gamut(rgb):
    return all(-1e-4 <= c <= 1 + 1e-4 for c in rgb)


def oklch_hex(L, C, H):
    while C > 0 and not in_gamut(from_oklch(L, C, H)):
        C -= 0.002
    return rgb2hex([_gam(c) for c in from_oklch(L, max(C, 0), H)])


def lum(h):
    r, g, b = (_lin(c) for c in hex2rgb(h))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def cr(a, b):
    la, lb = sorted([lum(a), lum(b)], reverse=True)
    return (la + 0.05) / (lb + 0.05)


def grade(r):
    if r >= 7:
        return "AAA"
    if r >= 4.5:
        return "AA"
    if r >= 3:
        return "AA large / UI"
    return "decorative only"


# ---------------------------------------------------------------- scales
def scale(name):
    anchors = ANCHORS.get(name, {})
    if anchors:
        lch = [to_oklch(h) for h in anchors.values()]
        hue = sum(x[2] for x in lch) / len(lch) if name != "neutral" else lch[-1][2]
        cpeak = max(x[1] for x in lch)
    else:
        hue, cpeak = HUE[name], CMAX[name]
    if name == "neutral":
        cpeak = CMAX["neutral"]
    out = {}
    for st, L in zip(STEPS, L_TARGET):
        # chroma tapers toward white and black so the ends do not look neon or muddy
        t = 1 - abs(L - 0.58) / 0.42
        C = cpeak * max(0.10, min(1, 0.08 + 1.05 * t))
        h_ = hue
        if name == "neutral":  # warm paper at the light end, cool ink at the dark end
            k = (L - 0.225) / (0.975 - 0.225)
            h_ = 255 + (85 - 255) * k
            C = 0.004 + 0.006 * (1 - abs(2 * k - 1))
        out[st] = oklch_hex(L, C, h_)
    for st, hx in anchors.items():
        out[st] = hx.upper()
    return out


SCALES = {k: scale(k) for k in ["teal", "sea", "gold", "neutral", "ok", "warn", "bad", "info"]}

# ---------------------------------------------------------------- semantic tokens
LIGHT = {
    "bg": SCALES["neutral"]["50"], "surface": "#FFFFFF", "surface-2": SCALES["neutral"]["100"],
    "line": SCALES["neutral"]["200"], "text": SCALES["neutral"]["900"], "text-muted": SCALES["neutral"]["600"],
    "primary": SCALES["teal"]["600"], "primary-strong": SCALES["teal"]["700"], "on-primary": "#FFFFFF",
    "accent": SCALES["sea"]["500"], "accent-text": SCALES["sea"]["700"], "dot": SCALES["gold"]["400"],
    "ok": SCALES["ok"]["700"], "warn": SCALES["warn"]["700"], "bad": SCALES["bad"]["600"], "info": SCALES["info"]["600"],
    "ok-bg": SCALES["ok"]["50"], "warn-bg": SCALES["warn"]["50"], "bad-bg": SCALES["bad"]["50"], "info-bg": SCALES["info"]["50"],
    "focus": SCALES["sea"]["600"],
}
DARK = {
    "bg": SCALES["neutral"]["950"], "surface": SCALES["neutral"]["900"], "surface-2": SCALES["neutral"]["800"],
    "line": SCALES["neutral"]["800"], "text": "#F3F1EC", "text-muted": SCALES["neutral"]["300"],
    "primary": SCALES["teal"]["300"], "primary-strong": SCALES["teal"]["200"], "on-primary": SCALES["neutral"]["950"],
    "accent": SCALES["sea"]["300"], "accent-text": SCALES["sea"]["300"], "dot": SCALES["gold"]["300"],
    "ok": SCALES["ok"]["300"], "warn": SCALES["warn"]["300"], "bad": SCALES["bad"]["300"], "info": SCALES["info"]["300"],
    "ok-bg": SCALES["ok"]["950"], "warn-bg": SCALES["warn"]["950"], "bad-bg": SCALES["bad"]["950"], "info-bg": SCALES["info"]["950"],
    "focus": SCALES["sea"]["300"],
}
# Logo colour sets
LOGO = {
    "color-light": dict(a=LIGHT["primary"], b=LIGHT["accent"], c=LIGHT["dot"], ink=LIGHT["text"]),
    "color-dark": dict(a=DARK["primary"], b=DARK["accent"], c=DARK["dot"], ink=DARK["text"]),
    "mono-black": dict(a="#15171C", b="#15171C", c="#15171C", ink="#15171C"),
    "mono-white": dict(a="#FFFFFF", b="#FFFFFF", c="#FFFFFF", ink="#FFFFFF"),
    "brand": dict(a=LIGHT["primary"], b=LIGHT["primary"], c=LIGHT["primary"], ink=LIGHT["primary"]),
}
ICON_BG = SCALES["teal"]["950"]
ICON = dict(a=DARK["primary"], b=DARK["accent"], c=DARK["dot"], ink=DARK["text"])

# Pairs the guidelines rely on (name, fg, bg, usage)
PAIRS = [
    ("Text on bg (light)", LIGHT["text"], LIGHT["bg"], "body text"),
    ("Muted text on bg (light)", LIGHT["text-muted"], LIGHT["bg"], "secondary text"),
    ("Primary on bg (light)", LIGHT["primary"], LIGHT["bg"], "links, logo"),
    ("White on primary", "#FFFFFF", LIGHT["primary"], "primary button"),
    ("Accent on bg (light)", LIGHT["accent"], LIGHT["bg"], "graphics, icons only"),
    ("Accent text on bg (light)", LIGHT["accent-text"], LIGHT["bg"], "accent text"),
    ("Dot gold on bg (light)", LIGHT["dot"], LIGHT["bg"], "the dot only (decorative)"),
    ("Ok on bg (light)", LIGHT["ok"], LIGHT["bg"], "status text"),
    ("Warn on bg (light)", LIGHT["warn"], LIGHT["bg"], "status text"),
    ("Bad on bg (light)", LIGHT["bad"], LIGHT["bg"], "status text"),
    ("Info on bg (light)", LIGHT["info"], LIGHT["bg"], "status text"),
    ("Text on bg (dark)", DARK["text"], DARK["bg"], "body text"),
    ("Muted text on bg (dark)", DARK["text-muted"], DARK["bg"], "secondary text"),
    ("Primary on bg (dark)", DARK["primary"], DARK["bg"], "links, logo"),
    ("Bg on primary (dark)", DARK["on-primary"], DARK["primary"], "primary button"),
    ("Accent on bg (dark)", DARK["accent"], DARK["bg"], "accent text"),
    ("Dot gold on bg (dark)", DARK["dot"], DARK["bg"], "the dot"),
    ("Ok on bg (dark)", DARK["ok"], DARK["bg"], "status text"),
    ("Warn on bg (dark)", DARK["warn"], DARK["bg"], "status text"),
    ("Bad on bg (dark)", DARK["bad"], DARK["bg"], "status text"),
    ("Info on bg (dark)", DARK["info"], DARK["bg"], "status text"),
    ("Caption text on caption bar", "#FFFFFF", "#101214", "live captions"),
    ("Logo on app icon", ICON["a"], ICON_BG, "app icon"),
]

if __name__ == "__main__":
    for k, v in SCALES.items():
        print(k, " ".join(f"{s}:{h}" for s, h in v.items()))
    for n_, fg, bg, u in PAIRS:
        print(f"{cr(fg, bg):5.2f}  {grade(cr(fg, bg)):16} {n_}")
