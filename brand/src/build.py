# SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
# SPDX-License-Identifier: Apache-2.0
"""Build every Tilo brand asset from one geometry source.

    python brand/src/build.py      # SVG, CSS, JSON, motion, icons, social sources
    python brand/src/render.py     # PNG rasters (headless Chrome + Pillow)
    python brand/src/glb.py        # 3D model
    python brand/src/site.py       # /brand pages + brand kit zip

Nothing here is hand-edited afterwards: change geo.py / palette.py and rebuild.
"""
import base64
import io
import json
import math
import os
import re

import geo
import palette as pal

HERE = os.path.dirname(os.path.abspath(__file__))
BRAND = os.path.dirname(HERE)
FONTS = os.path.join(BRAND, "typography", "fonts")
SYM_PARTS, RIG = geo.symbol()
WMD = geo.wordmark()
WMM = WMD["metrics"]
S = pal.SCALES


def w(path, text):
    p = os.path.join(BRAND, path)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(text)
    return p


def f2(v):
    return f"{v:.2f}".rstrip("0").rstrip(".")


def svg_doc(vb, body, title, w_=None, h_=None, extra=""):
    x, y, ww, hh = vb
    w_ = w_ or ww
    h_ = h_ or hh
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{f2(x)} {f2(y)} {f2(ww)} {f2(hh)}" '
            f'width="{f2(w_)}" height="{f2(h_)}" role="img" aria-labelledby="title"{extra}>'
            f'<title id="title">{title}</title>\n{body}\n</svg>\n')


# ================================================================ logo parts
def symbol_body(cols, pre="", cls=False):
    out = []
    names = {"arc-left": "t-l", "arc-right": "t-r", "dot": "t-d"}
    for pid, s, key in SYM_PARTS:
        c = f' class="{names[pid]}"' if cls else ""
        out.append(f'<path id="{pre}{pid}"{c} d="{s.path()}" fill="{cols[key]}"/>')
    return "".join(out)


def symbol_bbox():
    return geo.bbox([s for _, s, _ in SYM_PARTS])


def wordmark_body(cols, k, x0, base, dot_col, pre="", cls=False, draw=False):
    """Wordmark at scale k (H=100 units -> 100k), outer-left x0, baseline base."""
    s = WMM["s"]
    out = [f'<g id="{pre}wordmark" transform="translate({f2(x0)} {f2(base)}) scale({k:.5f})" fill="none" '
           f'stroke="{cols["ink"]}" stroke-width="{f2(s)}" stroke-linecap="round" stroke-linejoin="round">']
    for pid, kind, d in WMD["parts"]:
        c = f' class="w-{pid}"' if cls else ""
        pl = ' pathLength="1"' if draw and kind == "stroke" else ""
        if kind == "dot":
            out.append(f'<circle id="{pre}{pid}"{c} cx="{f2(d[0])}" cy="{f2(d[1])}" r="{f2(d[2])}" fill="{dot_col}" stroke="none"/>')
        else:
            out.append(f'<path id="{pre}{pid}"{c}{pl} d="{d}"/>')
    out.append("</g>")
    return "".join(out)


def wordmark_box(k=1.0, x0=0.0, base=0.0):
    top = WMM["top"]
    return (x0, base + top * k, WMM["width"] * k, (1.5 - top) * k)  # 1.5 = o overshoot below baseline


# Lockup geometry in symbol (512 artboard) units
X0, Y0, X1, Y1 = symbol_bbox()
B0, B1 = RIG["band"]
WAVE_H = B1 - B0                         # 216
LK_K = 0.52 * WAVE_H / 100               # wordmark x-height = 0.52 wave height
LK_GAP = 0.50 * WAVE_H                   # symbol -> wordmark
LK_BASE = (B0 + B1) / 2 + 50 * LK_K      # x-height centred on the wave axis
LK_WX = X1 + LK_GAP
ST_GAP = 0.40 * WAVE_H                   # stacked: symbol bottom -> ascender line
ST_K = 0.60 * WAVE_H / 100   # stacked wordmark a little larger: it carries the name alone under the symbol


def lockup_h(cols, pre="", cls=False, draw=False):
    body = (f'<g id="{pre}symbol">{symbol_body(cols, pre, cls)}</g>'
            + wordmark_body(cols, LK_K, LK_WX, LK_BASE, cols["ink"], pre, cls, draw))
    wb = wordmark_box(LK_K, LK_WX, LK_BASE)
    y0 = min(Y0, wb[1])
    y1 = max(Y1, wb[1] + wb[3])
    return (X0, y0, wb[0] + wb[2] - X0, y1 - y0), body


def lockup_v(cols, pre=""):
    ww = WMM["width"] * ST_K
    cx = (X0 + X1) / 2
    wx = cx - ww / 2
    base = Y1 + ST_GAP - WMM["top"] * ST_K
    body = (f'<g id="{pre}symbol">{symbol_body(cols, pre)}</g>'
            + wordmark_body(cols, ST_K, wx, base, cols["ink"], pre))
    x0 = min(X0, wx)
    x1 = max(X1, wx + ww)
    return (x0, Y0, x1 - x0, base + 1.5 * ST_K - Y0), body


def wordmark_only(cols, pre="", dot=None):
    k = 1.0
    vb = wordmark_box(k)
    return vb, wordmark_body(cols, k, 0, 0, dot or cols["c"], pre)


def symbol_only(cols, pre=""):
    return (X0, Y0, X1 - X0, Y1 - Y0), symbol_body(cols, pre)


ITEMS = {
    "symbol": ("Symbol (01 Geometrik)", symbol_only),
    "wordmark": ("Wordmark (05 Monogram)", wordmark_only),
    "lockup-horizontal": ("Horizontal lockup", lambda c, pre="": lockup_h(c, pre)),
    "lockup-stacked": ("Stacked lockup", lockup_v),
}
COLOURWAYS = {
    "color-light": "full colour, for light backgrounds",
    "color-dark": "full colour, for dark backgrounds",
    "mono-black": "one colour, black",
    "mono-white": "one colour, white",
    "brand": "one colour, Tilo teal",
}

MANIFEST = []


def add(path, kind, desc, **kw):
    MANIFEST.append(dict(path=path.replace("\\", "/"), kind=kind, desc=desc, **kw))


def build_logos():
    for item, (label, fn) in ITEMS.items():
        for cw, cdesc in COLOURWAYS.items():
            cols = pal.LOGO[cw]
            vb, body = fn(cols)
            p = f"logo/{item}/tilo-{item}-{cw}.svg"
            w(p, svg_doc(vb, body, f"Tilo {label.lower()}, {cdesc}"))
            add(p, "logo", f"{label}, {cdesc}", item=item, colourway=cw)


# ================================================================ fonts (embedded subsets for self-contained SVG)
def _ranges():
    css = open(os.path.join(BRAND, "typography", "fonts.css"), encoding="utf-8").read()
    out = {}
    for m in re.finditer(r"url\(\./fonts/([^)]+)\).*?unicode-range: ([^;]+);", css, re.S):
        out[m.group(1)] = m.group(2)
    return out


RANGES = _ranges()


def embed_fonts(text, family="Onest", weights=(400, 600)):
    """@font-face rules with base64 woff2 subsets that contain only `text`'s glyphs,
    instanced at fixed weights (variable axes removed -> tiny files)."""
    from fontTools.ttLib import TTFont
    from fontTools import subset
    from fontTools.varLib import instancer
    fam = family.lower()
    rules = []
    chars = set(text) | {" "}
    for fn, rng in RANGES.items():
        if not fn.startswith(fam + "-"):
            continue
        base = TTFont(os.path.join(FONTS, fn))
        cmap = base.getBestCmap()
        use = "".join(c for c in chars if ord(c) in cmap)
        if not use.strip():
            continue
        for wt in weights:
            f = TTFont(os.path.join(FONTS, fn))
            f = instancer.instantiateVariableFont(f, {"wght": wt})
            opts = subset.Options()
            opts.flavor = "woff2"
            opts.layout_features = ["kern", "liga", "calt", "locl", "tnum"]
            opts.name_IDs = []
            sub = subset.Subsetter(opts)
            sub.populate(text=use)
            sub.subset(f)
            bio = io.BytesIO()
            f.flavor = "woff2"
            f.save(bio)
            b64 = base64.b64encode(bio.getvalue()).decode()
            rules.append(f"@font-face{{font-family:'{family} Embed';font-weight:{wt};"
                         f"src:url(data:font/woff2;base64,{b64}) format('woff2');unicode-range:{rng}}}")
    return "".join(rules)


# ================================================================ construction, clear space, min size, misuse
def construction():
    """Two panels: symbol construction (512 artboard) and wordmark construction."""
    ink, mut, acc, red = "#15171C", "#8A8F96", "#0B7A67", "#C32A28"
    lab = "font-family:'Onest Embed',Onest,Inter,system-ui,sans-serif"
    out = []
    # --- panel 1: symbol, scaled 1.4 into 0..720
    g = []
    k = 1.36
    for i in range(0, 513, 15):  # module W/4 = 15
        g.append(f'<line x1="{i}" y1="0" x2="{i}" y2="512" class="grid{" major" if i % 60 == 0 else ""}"/>')
        g.append(f'<line x1="0" y1="{i}" x2="512" y2="{i}" class="grid{" major" if i % 60 == 0 else ""}"/>')
    for pid, s, key in SYM_PARTS:
        g.append(f'<path d="{s.path()}" class="fillp"/>')
    lc, rc, J = RIG["lc"], RIG["rc"], RIG["J"]
    R, W = RIG["R"], RIG["w"]
    for c in (lc, rc):
        for r in (R + W / 2, R, R - W / 2):
            g.append(f'<circle cx="{f2(c[0])}" cy="{f2(c[1])}" r="{f2(r)}" class="cons"/>')
        g.append(f'<path d="M{f2(c[0]-8)} {f2(c[1])}h16M{f2(c[0])} {f2(c[1]-8)}v16" class="ctr"/>')
    for y in (B0, J[1], B1):
        g.append(f'<line x1="0" x2="512" y1="{f2(y)}" y2="{f2(y)}" class="ref"/>')
    dx, dy, dr = RIG["dot"]
    g.append(f'<circle cx="{f2(dx)}" cy="{f2(dy)}" r="{f2(dr)}" class="cons"/>')
    g.append(f'<line x1="{f2(dx)}" x2="{f2(dx)}" y1="0" y2="512" class="ref dash"/>')
    term_top = J[1] - W / 2
    g.append(f'<path d="M{f2(dx+46)} {f2(term_top)}V{f2(dy+dr)}" class="dim"/>')
    g.append(f'<circle cx="{f2(J[0])}" cy="{f2(J[1])}" r="5" fill="{red}"/>')
    labels = [
        (lc[0], B0 - 10, "R = 1.3w = 78"),
        (lc[0], J[1] + 34, "counter 1.6w"),
        (rc[0], B1 + 22, "w = 60 (stroke)"),
        (dx + 52, (term_top + dy + dr) / 2 + 4, "gap 0.5w", "start"),
        (dx - 40, dy - dr - 10, "dot diameter 1.07w"),
        (J[0] + 10, J[1] + 22, "flat joint"),
    ]
    for lab_ in labels:
        x, y, t = lab_[:3]
        anc = lab_[3] if len(lab_) > 3 else "middle"
        g.append(f'<text x="{f2(x)}" y="{f2(y)}" class="lab" text-anchor="{anc}">{t}</text>')
    out.append(f'<g transform="translate(40 40) scale({k})">{"".join(g)}</g>')
    out.append(f'<text x="40" y="36" class="h">Symbol (01) on a 512 artboard, module w/4 = 15</text>')
    # --- panel 2: wordmark
    k2 = 2.15
    ox, base = 850, 500
    H = WMM["H"]
    g = []
    lines = [(0, "baseline"), (-H, "x-height"), (-WMM["t_top"], "t height 1.20"), (WMM["top"], "ascender 1.345 = i-dot top")]
    for y, t in lines:
        g.append(f'<line x1="-30" x2="{f2(WMM["width"]+30)}" y1="{f2(y)}" y2="{f2(y)}" class="ref" vector-effect="non-scaling-stroke"/>')
        g.append(f'<text x="{f2(WMM["width"]+34)}" y="{f2(y+3)}" class="lab2">{t}</text>')
    cols = dict(ink="#15171C", c="#F2A81D")
    g.append(wordmark_body(dict(ink="rgba(21,23,28,.16)", c="#F2A81D"), 1, 0, 0, "rgba(21,23,28,.16)"))
    for pid, kind, d in WMD["parts"]:
        if kind == "stroke":
            g.append(f'<path d="{d}" fill="none" stroke="{acc}" stroke-width="1.2" vector-effect="non-scaling-stroke"/>')
        else:
            g.append(f'<circle cx="{f2(d[0])}" cy="{f2(d[1])}" r="{f2(d[2])}" fill="none" stroke="{acc}" stroke-width="1.2" vector-effect="non-scaling-stroke"/>')
    Rc = WMM["Rc"]
    ccx, ccy = (WMM["tx"] + WMM["ix"]) / 2, -Rc - WMM["s"] / 2
    g.append(f'<circle cx="{f2(ccx)}" cy="{f2(ccy)}" r="{f2(Rc)}" class="cons" vector-effect="non-scaling-stroke"/>')
    g.append(f'<text x="{f2(ccx)}" y="{f2(ccy+6)}" class="lab3" text-anchor="middle">cup = symbol right half</text>')
    out.append(f'<g transform="translate({ox} {base}) scale({k2})">{"".join(g)}</g>')
    out.append(f'<text x="{ox}" y="36" class="h">Wordmark (05): t-stem, cup and i-stem are one stroke</text>')
    notes = ["stroke s = 0.22 x-height, round caps", "i-dot diameter 1.07s, gap 0.5s (same rule as the symbol)",
             "spacing: straight|straight 0.30H, straight|round 0.22H", "o overshoot 1.5%, built from two halves"]
    for i, t in enumerate(notes):
        out.append(f'<text x="{ox}" y="{610 + i*26}" class="note">{t}</text>')
    css = (f"<style>{embed_fonts('Symbol(01)onaartboard,modulew/4=15R1.378counter6wstroke0gap5dotdiameter7flatjointWordmark(05):t-stem,cupandi-stemareonestrokebaselinex-heightt20ascender345=i-dottopsymbolrighthalfs22caps.i-dot(sameruleasthesymbol)spacing:straight|30H,round|2ooversh%builtfromtwohalvesrules-capi', weights=(400, 600))}"
           f".grid{{stroke:#E4E2DC;stroke-width:.5}}.grid.major{{stroke:#D3D0C7}}.fillp{{fill:rgba(11,122,103,.13)}}"
           f".cons{{fill:none;stroke:{acc};stroke-width:1;stroke-dasharray:4 4}}.ctr{{stroke:{ink};stroke-width:1.2}}"
           f".ref{{stroke:{mut};stroke-width:.8}}.dash{{stroke-dasharray:2 4}}.dim{{stroke:{red};stroke-width:1.4}}"
           f"text{{{lab};fill:{ink}}}.lab{{font-size:11px}}.lab2{{font-size:6px;fill:{mut}}}.lab3{{font-size:5px;fill:{acc}}}"
           f".h{{font-size:20px;font-weight:600}}.note{{font-size:17px;fill:#53585C}}</style>")
    body = css + f'<rect width="1720" height="760" fill="#F7F5F0"/>' + "".join(out)
    p = "logo/construction/tilo-construction.svg"
    w(p, svg_doc((0, 0, 1720, 760), body, "Tilo logo construction"))
    add(p, "guide", "Construction grid: symbol and wordmark")


def clearspace():
    cols = pal.LOGO["color-light"]
    vb, body = lockup_h(cols)
    unit = 4 * RIG["r"]  # two dot diameters
    x, y, ww, hh = vb
    pad = unit * 1.6
    V = (x - unit - pad, y - unit - pad, ww + 2 * (unit + pad), hh + 2 * (unit + pad))
    dots = []
    # dot markers: two dot-diameter units on each side
    for (cx, cy, vertical) in [(x - unit / 2, y + hh / 2, False), (x + ww + unit / 2, y + hh / 2, False),
                               (x + ww / 2, y - unit / 2, True), (x + ww / 2, y + hh + unit / 2, True)]:
        for s_ in (-1, 1):
            ox = 0 if vertical else s_ * RIG["r"]
            oy = s_ * RIG["r"] if vertical else 0
            dots.append(f'<circle cx="{f2(cx+ox)}" cy="{f2(cy+oy)}" r="{f2(RIG["r"])}" fill="#F2A81D" opacity=".55"/>')
    art = (f'<rect x="{f2(V[0])}" y="{f2(V[1])}" width="{f2(V[2])}" height="{f2(V[3])}" fill="#F7F5F0"/>'
           f'<rect x="{f2(x-unit)}" y="{f2(y-unit)}" width="{f2(ww+2*unit)}" height="{f2(hh+2*unit)}" fill="rgba(11,122,103,.07)" '
           f'stroke="#0B7A67" stroke-width="2" stroke-dasharray="10 8"/>'
           f'<rect x="{f2(x)}" y="{f2(y)}" width="{f2(ww)}" height="{f2(hh)}" fill="none" stroke="#8A8F96" stroke-width="1.2"/>'
           + "".join(dots) + body)
    p = "logo/construction/tilo-clear-space.svg"
    w(p, svg_doc(V, art, "Tilo clear space: two dot diameters on every side", V[2] / 1.5, V[3] / 1.5))
    add(p, "guide", "Clear space: two dot diameters on every side")


MIN_SIZES = [
    ("symbol", "Symbol", 20, 6, "16 px only inside the favicon tile"),
    ("wordmark", "Wordmark", 48, 12, "x-height stays above 8 px"),
    ("lockup-horizontal", "Horizontal lockup", 96, 24, ""),
    ("lockup-stacked", "Stacked lockup", 64, 18, ""),
]


def minsize():
    cols = pal.LOGO["color-light"]
    out, x = [], 30
    for item, label, px, mm, note in MIN_SIZES:
        vb, body = ITEMS[item][1](cols)
        k = px / vb[2]
        hh = vb[3] * k
        out.append(f'<g transform="translate({x} {70 - hh/2:.2f}) scale({k:.5f}) translate({-vb[0]:.2f} {-vb[1]:.2f})">{body}</g>')
        out.append(f'<text x="{x}" y="118" class="a">{label}</text><text x="{x}" y="136" class="b">{px} px / {mm} mm</text>')
        x += max(px, 120) + 50
    txt = "".join(lab for _, lab, *_ in MIN_SIZES) + "0123456789 pxm/"
    css = (f"<style>{embed_fonts(txt, weights=(400, 600))}text{{font-family:'Onest Embed',sans-serif;fill:#15171C}}"
           f".a{{font-size:13px;font-weight:600}}.b{{font-size:12px;fill:#686F6E}}</style>")
    V = (0, 0, x - 20, 160)
    p = "logo/construction/tilo-minimum-size.svg"
    w(p, svg_doc(V, css + f'<rect width="{V[2]}" height="160" fill="#F7F5F0"/>' + "".join(out), "Tilo minimum sizes (shown at actual pixel size)"))
    add(p, "guide", "Minimum sizes at actual pixel size")


def misuse_tiles():
    """Each don't as its own tile (no text), plus a captioned sheet."""
    cols = pal.LOGO["color-light"]
    vb, body = lockup_h(cols)
    x, y, ww, hh = vb
    pad = 70
    V = (x - pad, y - pad * 1.4, ww + 2 * pad, hh + 2.8 * pad)
    bg = f'<rect x="{f2(V[0])}" y="{f2(V[1])}" width="{f2(V[2])}" height="{f2(V[3])}" fill="#FFFFFF"/>'
    cx, cy = x + ww / 2, y + hh / 2
    sym_vb, sym_body = symbol_only(cols)
    wrong_cols = dict(a="#E54D45", b="#8E44AD", c="#2C90D7", ink="#E54D45")
    old5 = (  # the retired 05 mark alone: wave + i stem reads "ni" / "ui"
        '<g transform="translate({} {}) scale(1.05)" fill="#15171C">{}</g>')
    tiles = {
        "stretch": ("Do not stretch or squash", f'<g transform="translate({f2(cx)} {f2(cy)}) scale(1.16 .74) translate({f2(-cx)} {f2(-cy)})">{body}</g>'),
        "recolour": ("Do not recolour with off-palette colours", lockup_h(wrong_cols)[1]),
        "rotate": ("Do not rotate or tilt", f'<g transform="rotate(-14 {f2(cx)} {f2(cy)})">{body}</g>'),
        "effects": ("Do not add shadows, glows or gradients",
                    f'<defs><filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="10" dy="16" stdDeviation="9" flood-opacity=".45"/></filter></defs><g filter="url(#sh)">{body}</g>'),
        "outline": ("Do not outline the logo", f'<g fill="none" stroke="#0B7A67" stroke-width="6">{re.sub(r" fill=\"[^\"]+\"", " fill=\"none\"", body)}</g>'),
        "rearrange": ("Do not move the dot or rearrange parts",
                      re.sub(r'(<path id="dot" d=")([^"]+)(")', lambda m: m.group(1) + geo.shift(SYM_PARTS[2][1], -4 * RIG["R"], 0).path() + m.group(3), body)),
        "font": ("Do not retype the wordmark in a font",
                 f'<g id="symbol">{symbol_body(cols)}</g><text x="{f2(LK_WX)}" y="{f2(LK_BASE)}" font-family="Georgia,serif" font-size="{f2(150*LK_K)}" font-style="italic" fill="#15171C">tilo</text>'),
        "busy": ("Do not place on busy or low-contrast backgrounds",
                 '<defs><linearGradient id="bz" x1="0" x2="1"><stop offset="0" stop-color="#34C9A8"/><stop offset=".5" stop-color="#F6B93B"/><stop offset="1" stop-color="#4FD3F0"/></linearGradient>'
                 '<pattern id="pt" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="12" fill="#ffffff" opacity=".35"/></pattern></defs>'
                 f'<rect x="{f2(V[0])}" y="{f2(V[1])}" width="{f2(V[2])}" height="{f2(V[3])}" fill="url(#bz)"/><rect x="{f2(V[0])}" y="{f2(V[1])}" width="{f2(V[2])}" height="{f2(V[3])}" fill="url(#pt)"/>' + body),
        "monogram-alone": ("Do not use the 05 wave-i on its own: it reads as “ni”", ""),
    }
    # the retired standalone 05 mark (rebuilt here so the tile is honest): left arch + cup rising into a stem + dot
    Rr, Ww = 70, 54
    lc_, rc_ = (256 - Rr, 256), (256 + Rr, 256)
    left = geo.sector(lc_, Rr, Ww, math.pi, 2 * math.pi, cap0=True, cap1=False, tab=1.5)
    ro, ri, h = Rr + Ww / 2, Rr - Ww / 2, Ww / 2
    rx, top = rc_[0], 256 - Rr
    st = (f"M{geo.P(rx-ro,256)}A{geo.n(ro)} {geo.n(ro)} 0 0 0 {geo.P(rx+ro,256)}L{geo.P(rx+ro,top)}"
          f"A{geo.n(h)} {geo.n(h)} 0 0 0 {geo.P(rx+ri,top)}L{geo.P(rx+ri,256)}A{geo.n(ri)} {geo.n(ri)} 0 0 1 {geo.P(rx-ri,256)}Z")
    dot = geo.circle(rx + Rr, top - h - 0.5 * Ww - 29, 29)
    mark05 = (f'<g transform="translate({f2(cx-256*0.9)} {f2(cy-256*0.9+10)}) scale(.9)">'
              f'<path d="{left.path()}" fill="#0B7A67"/><path d="{st}" fill="#1497B8"/><path d="{dot.path()}" fill="#F2A81D"/></g>')
    tiles["monogram-alone"] = (tiles["monogram-alone"][0], mark05)
    sheet, i = [], 0
    for key, (cap, art) in tiles.items():
        bgx = bg if key != "busy" else ""
        p = f"logo/misuse/tilo-dont-{key}.svg"
        cross = (f'<g transform="translate({f2(V[0]+V[2]-58)} {f2(V[1]+18)})"><circle cx="20" cy="20" r="20" fill="#C32A28"/>'
                 f'<path d="M13 13l14 14M27 13L13 27" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>')
        w(p, svg_doc(V, bgx + art + cross, f"Incorrect use: {cap}", V[2] / 2, V[3] / 2))
        add(p, "misuse", cap, key=key)
        col, row = i % 3, i // 3
        sheet.append(f'<g transform="translate({30 + col*420} {30 + row*290})"><svg width="400" height="{400*V[3]/V[2]:.1f}" viewBox="{" ".join(f2(v) for v in V)}">{bgx}{art}{cross}</svg>'
                     f'<text x="0" y="{400*V[3]/V[2]+24:.1f}">{cap.replace(chr(0x201c), "&#8220;").replace(chr(0x201d), "&#8221;")}</text></g>')
        i += 1
    rows = math.ceil(len(tiles) / 3)
    txt = "".join(c for c, _ in tiles.values())
    css = f"<style>{embed_fonts(txt, weights=(500,))}text{{font-family:'Onest Embed',sans-serif;font-size:15px;font-weight:500;fill:#15171C}}</style>"
    Hs = 30 + rows * 290
    p = "logo/misuse/tilo-incorrect-use.svg"
    w(p, svg_doc((0, 0, 1290, Hs), css + f'<rect width="1290" height="{Hs}" fill="#F7F5F0"/>' + "".join(sheet), "Tilo logo: incorrect use"))
    add(p, "guide", "Incorrect use sheet")
    return list(tiles.keys())


# ================================================================ app icons, favicons, avatar
def placed_symbol(size, width_frac, cols=None, pre="", cx=None, cy=None):
    cols = cols or pal.ICON
    k = size * width_frac / (X1 - X0)
    cx = size / 2 if cx is None else cx
    cy = size / 2 if cy is None else cy
    bx, by = (X0 + X1) / 2 + geo.OPT_DX * 0.0, (Y0 + Y1) / 2
    tx, ty = cx - bx * k, cy - by * k
    return f'<g id="{pre}tilo-symbol" transform="translate({tx:.2f} {ty:.2f}) scale({k:.5f})">{symbol_body(cols, pre)}</g>'


def tile_bg(size, rx, pre=""):
    hi = (f'<defs><radialGradient id="{pre}glow" cx=".3" cy=".18" r=".95"><stop offset="0" stop-color="{S["teal"]["800"]}"/>'
          f'<stop offset="1" stop-color="{pal.ICON_BG}"/></radialGradient></defs>')
    return hi + f'<rect width="{size}" height="{size}" rx="{rx:.1f}" fill="url(#{pre}glow)"/>'


def build_icons():
    out = {}
    # iOS: full-bleed square (Apple applies the mask), plus a rounded preview for mockups
    out["app/tilo-app-icon-ios-1024.svg"] = ("App icon iOS, 1024 full bleed (the system rounds it)",
                                             svg_doc((0, 0, 1024, 1024), tile_bg(1024, 0) + placed_symbol(1024, 0.60), "Tilo app icon (iOS)"))
    out["app/tilo-app-icon-rounded-1024.svg"] = ("App icon with rounded corners, for mockups and stores that need it",
                                                 svg_doc((0, 0, 1024, 1024), tile_bg(1024, 229.1) + placed_symbol(1024, 0.60), "Tilo app icon"))
    # Android adaptive (108 dp @4x = 432): background + foreground + monochrome
    out["app/tilo-android-adaptive-background-432.svg"] = ("Android adaptive icon background layer, 432 px",
                                                           svg_doc((0, 0, 432, 432), tile_bg(432, 0), "Tilo Android icon background"))
    out["app/tilo-android-adaptive-foreground-432.svg"] = ("Android adaptive icon foreground layer, 432 px, mark inside the 264 px safe circle",
                                                           svg_doc((0, 0, 432, 432), placed_symbol(432, 0.40), "Tilo Android icon foreground"))
    out["app/tilo-android-monochrome-432.svg"] = ("Android 13+ themed (monochrome) icon layer, 432 px",
                                                  svg_doc((0, 0, 432, 432), placed_symbol(432, 0.40, pal.LOGO["mono-white"]), "Tilo Android monochrome icon"))
    out["app/tilo-pwa-maskable-512.svg"] = ("PWA maskable icon 512, mark inside the 80% safe circle",
                                            svg_doc((0, 0, 512, 512), tile_bg(512, 0) + placed_symbol(512, 0.60), "Tilo PWA maskable icon"))
    # favicon: rounded tile, bigger mark; reads at 16 px
    out["favicon/favicon.svg"] = ("Favicon (SVG), rounded tile",
                                  svg_doc((0, 0, 64, 64), tile_bg(64, 14, "f") + placed_symbol(64, 0.80, pre="f"), "Tilo"))
    out["favicon/tilo-favicon-tile.svg"] = ("Favicon tile source for PNG sizes 16, 32, 48, 192, 512",
                                            svg_doc((0, 0, 512, 512), tile_bg(512, 112) + placed_symbol(512, 0.80), "Tilo favicon"))
    out["favicon/tilo-apple-touch-icon.svg"] = ("Apple touch icon source (180 px PNG), full bleed",
                                                svg_doc((0, 0, 512, 512), tile_bg(512, 0) + placed_symbol(512, 0.62), "Tilo apple touch icon"))
    # social avatar: full bleed, circle-safe
    out["social/tilo-avatar-512.svg"] = ("Social avatar 512 (Telegram, GitHub), safe for a circle crop",
                                         svg_doc((0, 0, 512, 512), tile_bg(512, 0) + placed_symbol(512, 0.56), "Tilo avatar"))
    for p, (d, txt) in out.items():
        w(p, txt)
        add(p, p.split("/")[0], d)


# ================================================================ social covers
COPY = {
    "uz": ("Bitta suhbat.", "Hamma tushunadi.", "Jonli imo-ishora tarjimoni, subtitrlar va lugʻat.", "Notijorat · ochiq kod"),
    "en": ("One conversation.", "Everyone understands.", "Live sign interpreters, captions and a sign dictionary.", "Non-profit · open source"),
    "ru": ("Один разговор.", "Понятно всем.",
           "Живой переводчик жестов, субтитры и словарь.",
           "Некоммерческий · открытый код"),
}


def cover(Wd, Hd, lang, title):
    t1, t2, sub, foot = COPY[lang]
    bg = pal.ICON_BG
    cols = pal.LOGO["color-dark"]
    m = Wd * 0.075
    # big decorative ring = the two halves joined into an "o" (the connecting state), cropped bottom-right
    Rg = Hd * 0.62
    ring_c = (Wd + Hd * 0.04, Hd * 0.80)
    ring = (f'<g opacity=".9"><path d="M{f2(ring_c[0]-Rg)} {f2(ring_c[1])}A{f2(Rg)} {f2(Rg)} 0 0 1 {f2(ring_c[0]+Rg)} {f2(ring_c[1])}" '
            f'fill="none" stroke="{S["teal"]["800"]}" stroke-width="{f2(Rg*0.36)}"/>'
            f'<path d="M{f2(ring_c[0]+Rg)} {f2(ring_c[1])}A{f2(Rg)} {f2(Rg)} 0 0 1 {f2(ring_c[0]-Rg)} {f2(ring_c[1])}" '
            f'fill="none" stroke="{S["sea"]["900"]}" stroke-width="{f2(Rg*0.36)}"/></g>')
    vb, lk = lockup_h(cols)
    lw = Wd * 0.30
    k = lw / vb[2]
    logo = f'<g transform="translate({f2(m)} {f2(m)}) scale({k:.5f}) translate({f2(-vb[0])} {f2(-vb[1])})">{lk}</g>'
    fs = Hd * 0.105
    ty = Hd * 0.52
    text = (f'<text x="{f2(m)}" y="{f2(ty)}" class="t">{t1}</text>'
            f'<text x="{f2(m)}" y="{f2(ty + fs*1.08)}" class="t"><tspan fill="{cols["a"]}">{t2}</tspan></text>'
            f'<text x="{f2(m)}" y="{f2(ty + fs*1.08 + fs*1.05)}" class="s">{sub}</text>'
            f'<text x="{f2(m)}" y="{f2(Hd - m*0.8)}" class="f">{foot}</text>')
    css = (f"<style>{embed_fonts(t1 + t2 + sub + foot, weights=(400, 600))}"
           f"text{{font-family:'Onest Embed',Onest,sans-serif;fill:#F3F1EC}}.t{{font-size:{f2(fs)}px;font-weight:600;letter-spacing:-.02em}}"
           f".s{{font-size:{f2(fs*0.42)}px;fill:{S['neutral']['300']}}}.f{{font-size:{f2(fs*0.31)}px;fill:{S['neutral']['400']};letter-spacing:.02em}}</style>")
    body = css + f'<rect width="{Wd}" height="{Hd}" fill="{bg}"/>' + ring + logo + text
    return svg_doc((0, 0, Wd, Hd), body, title)


def build_social():
    for lang in COPY:
        p = f"social/tilo-og-1200x630-{lang}.svg"
        w(p, cover(1200, 630, lang, f"Tilo social cover ({lang})"))
        add(p, "social", f"Open Graph / link preview 1200x630 ({lang})", lang=lang)
    p = "social/tilo-github-social-1280x640.svg"
    w(p, cover(1280, 640, "en", "Tilo GitHub social preview"))
    add(p, "social", "GitHub social preview 1280x640")
    p = "social/tilo-telegram-cover-1280x720.svg"
    w(p, cover(1280, 720, "uz", "Tilo Telegram channel cover"))
    add(p, "social", "Telegram channel cover / pinned post 1280x720")


# ================================================================ iconography (24 grid, 2 stroke, round caps)
ICONS = {
    "call": ("Video call", '<rect x="2.5" y="6" width="13" height="12" rx="3"/><path d="M15.5 10.2l5-2.7v9l-5-2.7"/>', [(9, 12, 1.6)]),
    "captions": ("Live captions", '<rect x="2.5" y="4.5" width="19" height="15" rx="3.5"/><path d="M6.5 11h5M14 11h3.5M6.5 15h7"/>', [(17, 15, 1.4)]),
    "card": ("Sign dictionary card", '<rect x="4.5" y="2.5" width="15" height="19" rx="3"/><path d="M8 10a2 2 0 0 1 4 0a2 2 0 0 0 4 0M8 15.5h8M8 18.5h4.5"/>', [(16.3, 6.8, 1.2)]),
    "sos": ("SOS / emergency", '<circle cx="12" cy="12" r="9.5"/><path d="M12 7v6"/>', [(12, 16.6, 1.5)]),
    "sign": ("Hand / sign language",
             '<path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V11M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V5.5a1.5 1.5 0 0 1 3 0V12'
             'M17 12V8.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1.2a6 6 0 0 1-4.6-2.2l-3.1-3.8a1.6 1.6 0 0 1 2.5-2L8 15"/>', []),
    "dataset": ("Dataset", '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>', [(16.5, 18.6, 1.1)]),
    "interpreter": ("Interpreter (two people)", '<circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="9.5" r="2.5"/><path d="M2.5 20a5.5 5.5 0 0 1 11 0M13.5 20a4 4 0 0 1 7.5-1.9"/>', []),
    "wave": ("Tilo wave (brand glyph)", '<path d="M3 13a4.5 4.5 0 0 1 9 0a4.5 4.5 0 0 0 9 0"/>', [(19.9, 7.3, 1.6)]),
}


def icon_svg(name, dot_fill="currentColor", size=24):
    label, d, dots = ICONS[name]
    dd = "".join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{dot_fill}" stroke="none" class="dot"/>' for x, y, r in dots)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" '
            f'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-labelledby="title"><title id="title">{label}</title>{d}{dd}</svg>\n')


def build_iconography():
    for n_ in ICONS:
        p = f"iconography/icons/tilo-icon-{n_}.svg"
        w(p, icon_svg(n_))
        add(p, "icon", ICONS[n_][0], key=n_)
    # sprite sheet with the accent dot
    cells = []
    for i, n_ in enumerate(ICONS):
        label, d, dots = ICONS[n_]
        dd = "".join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="#F2A81D" stroke="none"/>' for x, y, r in dots)
        cells.append(f'<g transform="translate({20 + i*76} 20) scale(2.5)">{d}{dd}</g>')
    body = (f'<rect width="{20 + len(ICONS)*76}" height="100" fill="#F7F5F0"/><g fill="none" stroke="#15171C" stroke-width="2" '
            f'stroke-linecap="round" stroke-linejoin="round">{"".join(cells)}</g>')
    p = "iconography/tilo-icons-sheet.svg"
    w(p, svg_doc((0, 0, 20 + len(ICONS) * 76, 100), body, "Tilo icon set"))
    add(p, "icon", "Icon sheet")


# ================================================================ motion
EASE = dict(expo="cubic-bezier(.16,1,.3,1)", spring="cubic-bezier(.34,1.56,.64,1)",
            inout="cubic-bezier(.65,0,.35,1)", sine="cubic-bezier(.37,0,.63,1)", linear="linear")


def motion_css(prefix=".tilo-motion"):
    lc, rc = RIG["lc"], RIG["rc"]
    dx, dy, dr = RIG["dot"]
    R2 = 2 * RIG["R"]
    ddx, ddy = lc[0] - dx, lc[1] - dy
    P = prefix
    o = lambda c: f"{f2(c[0])}px {f2(c[1])}px"
    css = f"""/* Tilo motion. One state at a time: data-state on the svg element = intro | idle | listening | captioning | connecting | loading | transition.
   Parts: .t-l (left half), .t-r (right half), .t-d (dot), .t-all (group). Coordinates: 512 artboard. */
{P} .t-l,{P} .t-r,{P} .t-d,{P} .t-all{{transform-box:view-box}}
{P} .t-l{{transform-origin:{o(lc)}}}
{P} .t-r{{transform-origin:{o(rc)}}}
{P} .t-d{{transform-origin:{o((dx, dy))}}}
{P} .t-all{{transform-origin:{o(lc)}}}
{P}[data-state="intro"] .t-l{{animation:tilo-in-l 760ms {EASE['expo']} both}}
{P}[data-state="intro"] .t-r{{animation:tilo-in-r 760ms {EASE['expo']} both}}
{P}[data-state="intro"] .t-d{{animation:tilo-in-d 520ms {EASE['spring']} 560ms both}}
@keyframes tilo-in-l{{from{{transform:translate(-70px,0) rotate(-180deg);opacity:0}}to{{transform:none;opacity:1}}}}
@keyframes tilo-in-r{{from{{transform:translate(70px,0) rotate(-180deg);opacity:0}}to{{transform:none;opacity:1}}}}
@keyframes tilo-in-d{{from{{transform:translate(0,-90px) scale(.2);opacity:0}}to{{transform:none;opacity:1}}}}
{P}[data-state="idle"] .t-l{{animation:tilo-idle-l 4800ms {EASE['sine']} infinite}}
{P}[data-state="idle"] .t-r{{animation:tilo-idle-r 4800ms {EASE['sine']} infinite}}
{P}[data-state="idle"] .t-d{{animation:tilo-idle-d 4800ms {EASE['sine']} infinite}}
@keyframes tilo-idle-l{{50%{{transform:translate(-5px,0)}}}}
@keyframes tilo-idle-r{{50%{{transform:translate(5px,0)}}}}
@keyframes tilo-idle-d{{50%{{transform:translate(0,-6px)}}}}
{P}[data-state="listening"] .t-l{{animation:tilo-level 900ms {EASE['sine']} infinite}}
{P}[data-state="listening"] .t-r{{animation:tilo-level 900ms {EASE['sine']} 150ms infinite}}
{P}[data-state="listening"] .t-d{{animation:tilo-pulse 900ms {EASE['sine']} infinite}}
@keyframes tilo-level{{25%{{transform:scale(1,.78)}}50%{{transform:scale(1,1.08)}}75%{{transform:scale(1,.9)}}}}
@keyframes tilo-pulse{{50%{{transform:scale(1.3)}}}}
{P}[data-state="captioning"] .t-d{{animation:tilo-cursor 1000ms steps(1,end) infinite}}
{P}[data-state="captioning"] .t-l{{animation:tilo-type-l 1000ms {EASE['sine']} infinite}}
{P}[data-state="captioning"] .t-r{{animation:tilo-type-r 1000ms {EASE['sine']} infinite}}
@keyframes tilo-cursor{{0%{{opacity:1}}50%{{opacity:.12}}}}
@keyframes tilo-type-l{{50%{{transform:translate(-3px,0)}}}}
@keyframes tilo-type-r{{50%{{transform:translate(3px,0)}}}}
{P}[data-state="connecting"] .t-l{{animation:tilo-conn-l 1800ms {EASE['inout']} infinite}}
{P}[data-state="connecting"] .t-r{{animation:tilo-conn-r 1800ms {EASE['inout']} infinite}}
{P}[data-state="connecting"] .t-d{{animation:tilo-conn-d 1800ms {EASE['inout']} infinite}}
@keyframes tilo-conn-l{{0%,30%{{transform:rotate(0)}}70%,100%{{transform:rotate(360deg)}}}}
@keyframes tilo-conn-r{{0%{{transform:translate(0,0) rotate(0)}}30%{{transform:translate(-{f2(R2)}px,0) rotate(0)}}70%{{transform:translate(-{f2(R2)}px,0) rotate(360deg)}}100%{{transform:translate(0,0) rotate(360deg)}}}}
@keyframes tilo-conn-d{{0%,100%{{transform:none}}30%,70%{{transform:translate({f2(ddx)}px,{f2(ddy)}px) scale(.55)}}}}
{P}[data-state="loading"] .t-r{{transform:translate(-{f2(R2)}px,0)}}
{P}[data-state="loading"] .t-d{{transform:translate({f2(ddx)}px,{f2(ddy)}px) scale(.55);animation:tilo-load-d 1200ms {EASE['sine']} infinite}}
{P}[data-state="loading"] .t-all{{animation:tilo-spin 1200ms linear infinite}}
@keyframes tilo-spin{{to{{transform:rotate(360deg)}}}}
@keyframes tilo-load-d{{50%{{transform:translate({f2(ddx)}px,{f2(ddy)}px) scale(.7)}}}}
{P}[data-state="transition"] .t-l{{animation:tilo-tr-l 700ms {EASE['inout']} both}}
{P}[data-state="transition"] .t-r{{animation:tilo-tr-r 700ms {EASE['inout']} both}}
{P}[data-state="transition"] .t-d{{animation:tilo-tr-d 700ms {EASE['inout']} both}}
@keyframes tilo-tr-l{{50%{{transform:translate(-24px,0);opacity:0}}}}
@keyframes tilo-tr-r{{50%{{transform:translate(24px,0);opacity:0}}}}
@keyframes tilo-tr-d{{50%{{transform:translate(0,-40px);opacity:0}}}}
/* Wordmark: written as one stroke, the o closes from two halves, the i-dot lands last. */
{P} .w-ti,{P} .w-t-bar,{P} .w-l,{P} .w-o-top,{P} .w-o-bottom{{stroke-dasharray:1 1}}
{P}[data-state="intro"] .w-ti{{animation:tilo-draw 640ms {EASE['inout']} 200ms both}}
{P}[data-state="intro"] .w-t-bar{{animation:tilo-draw 260ms {EASE['inout']} 640ms both}}
{P}[data-state="intro"] .w-l{{animation:tilo-draw 300ms {EASE['inout']} 760ms both}}
{P}[data-state="intro"] .w-o-top,{P}[data-state="intro"] .w-o-bottom{{animation:tilo-draw 520ms {EASE['inout']} 880ms both}}
{P}[data-state="intro"] .w-i-dot{{transform-box:fill-box;transform-origin:50% 50%;animation:tilo-in-d 520ms {EASE['spring']} 1250ms both}}
@keyframes tilo-draw{{from{{stroke-dashoffset:1}}to{{stroke-dashoffset:0}}}}
{P}[data-state="idle"] .w-i-dot,{P}[data-state="captioning"] .w-i-dot{{animation:tilo-cursor 1000ms steps(1,end) 3 both}}
@media (prefers-reduced-motion:reduce){{
{P} *{{animation:none!important}}
{P}[data-state="loading"] .t-d{{animation:tilo-cursor 1600ms steps(1,end) infinite!important}}
}}
"""
    return css


MOTION_STATES = [
    ("intro", "Intro (assemble)", "1100 ms", "expo + spring", "Halves turn 180 degrees and slide 70 u in from both sides (760 ms, expo); the dot drops in from 90 u above at 560 ms (520 ms, spring). Runs once, then hands over to idle."),
    ("idle", "Idle", "4.8 s loop", "sine", "Halves breathe 5 u apart, the dot floats 6 u. Barely there: the logo is alive, not busy."),
    ("listening", "Listening", "900 ms loop", "sine", "Each half scales vertically 0.78 to 1.08 like an audio level, right half 150 ms behind; the dot pulses 1.3x. Use while the app listens to speech."),
    ("captioning", "Captioning", "1 s loop", "steps + sine", "The dot blinks like a text cursor (steps), the halves type 3 u side to side. Use while live captions are being written."),
    ("connecting", "Connecting call", "1.8 s loop", "in-out", "The right half slides 2R left and joins the left half into an o-ring, the ring turns 360 degrees, then returns to the wave. The dot rests in the counter."),
    ("loading", "Loading", "1.2 s loop", "linear", "The joined ring spins continuously; the dot sits in the counter and breathes. For buttons and small spinners."),
    ("transition", "Transition", "700 ms once", "in-out", "Halves part 24 u and fade, the dot lifts 40 u, then everything returns. Use between screens or when a call ends."),
]


CDATA_OPEN = "<style><![CDATA[" + chr(10)
CDATA_CLOSE = "]]></style>"


def motion_svg(state):
    css = motion_css()
    body = (CDATA_OPEN + css + CDATA_CLOSE
            + f'<g class="t-all">{symbol_body(pal.LOGO["color-light"], cls=True)}</g>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" class="tilo-motion" '
            f'data-state="{state}" role="img" aria-labelledby="title"><title id="title">Tilo motion: {state}</title>\n{body}\n</svg>\n')


def motion_lockup_svg(theme="color-light"):
    vb, body = lockup_h(pal.LOGO[theme], cls=True, draw=True)
    pad = 40
    V = (vb[0] - pad, vb[1] - pad - 60, vb[2] + 2 * pad, vb[3] + 2 * pad + 60)
    body = body.replace('<g id="symbol">', '<g id="symbol" class="t-all">')
    return svg_doc(V, CDATA_OPEN + motion_css() + CDATA_CLOSE + body, "Tilo logo intro", extra=' class="tilo-motion" data-state="intro"')


def build_motion():
    w("motion/reference/tilo-motion.css", "/* SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors */\n/* SPDX-License-Identifier: Apache-2.0 */\n" + motion_css())
    add("motion/reference/tilo-motion.css", "motion", "Motion CSS (all states, reduced-motion aware)")
    js = r"""// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
// Tilo motion controller. No dependencies. Works with tilo-motion.css.
//   TiloMotion.set(svg, 'listening')       switch state
//   TiloMotion.replay(svg)                 restart the current state
//   <svg class="tilo-motion" data-state="intro" data-then="idle">  intro hands over to idle by itself
(function (root) {
  'use strict';
  var ONE_SHOT = { intro: 1400, transition: 700 };
  var timers = new WeakMap();
  var reduce = root.matchMedia ? root.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  function clear(svg) { var t = timers.get(svg); if (t) { root.clearTimeout(t); timers.delete(svg); } }
  function set(svg, state) {
    if (!svg) return;
    clear(svg);
    svg.removeAttribute('data-state');
    void svg.getBoundingClientRect();           // restart CSS animations
    svg.setAttribute('data-state', state);
    var next = svg.getAttribute('data-then');
    if (ONE_SHOT[state] && next && next !== state) {
      timers.set(svg, root.setTimeout(function () { set(svg, next); }, reduce.matches ? 0 : ONE_SHOT[state]));
    }
  }
  function replay(svg) { set(svg, svg.getAttribute('data-state') || 'intro'); }
  function init(scope) {
    var list = (scope || root.document).querySelectorAll('svg.tilo-motion[data-state]');
    for (var i = 0; i < list.length; i++) set(list[i], list[i].getAttribute('data-state'));
  }
  root.TiloMotion = { set: set, replay: replay, init: init, states: ['intro', 'idle', 'listening', 'captioning', 'connecting', 'loading', 'transition'] };
})(window);
"""
    w("motion/reference/tilo-motion.js", js)
    add("motion/reference/tilo-motion.js", "motion", "Motion controller JS (no dependencies)")
    demo = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tilo motion reference</title>
<link rel="stylesheet" href="tilo-motion.css">
<link rel="stylesheet" href="demo.css">
</head>
<body>
<main>
<h1>Tilo motion reference</h1>
<svg class="tilo-motion" data-state="intro" data-then="idle" viewBox="0 0 512 512" width="320" height="320" role="img" aria-label="Tilo">
<g class="t-all">{symbol_body(pal.LOGO["color-light"], cls=True)}</g>
</svg>
<p class="states">{"".join(f'<button type="button" data-state="{s}">{s}</button>' for s, *_ in MOTION_STATES)}</p>
</main>
<script src="tilo-motion.js"></script>
<script src="demo.js"></script>
</body>
</html>
"""
    w("motion/reference/index.html", demo)
    w("motion/reference/demo.css", "/* SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors */\n/* SPDX-License-Identifier: Apache-2.0 */\n"
      "body{margin:0;font:16px/1.5 system-ui,sans-serif;background:#F7F5F0;color:#15171C}main{max-width:640px;margin:40px auto;padding:0 16px;text-align:center}"
      "button{font:inherit;margin:4px;padding:8px 14px;border-radius:999px;border:1px solid #D9D8D3;background:#fff;cursor:pointer}"
      "button[aria-pressed=true]{background:#0B7A67;color:#fff;border-color:#0B7A67}\n")
    w("motion/reference/demo.js", "// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors\n// SPDX-License-Identifier: Apache-2.0\n"
      "TiloMotion.init();\nvar svg = document.querySelector('svg.tilo-motion');\n"
      "document.querySelector('.states').addEventListener('click', function (e) {\n"
      "  var b = e.target.closest('button'); if (!b) return;\n"
      "  document.querySelectorAll('.states button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });\n"
      "  svg.removeAttribute('data-then'); TiloMotion.set(svg, b.dataset.state);\n});\n")
    add("motion/reference/index.html", "motion", "Live demo page for the reference implementation")
    for st, label, *_ in MOTION_STATES:
        p = f"motion/svg/tilo-motion-{st}.svg"
        w(p, motion_svg(st))
        add(p, "motion", f"Animated SVG: {label}", state=st)
    for th in ("color-light", "color-dark"):
        p = f"motion/svg/tilo-lockup-intro-{th}.svg"
        w(p, motion_lockup_svg(th))
        add(p, "motion", f"Animated lockup intro ({th})")


# ================================================================ tokens
def build_tokens():
    tok = {
        "$description": "Tilo design tokens. Values in sRGB hex. Contrast per WCAG 2.x.",
        "color": {
            "scale": S,
            "light": pal.LIGHT,
            "dark": pal.DARK,
            "logo": pal.LOGO,
            "icon-background": pal.ICON_BG,
        },
        "font": {
            "brand": {"family": "Onest", "fallback": "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", "use": "logo-adjacent type, headings, UI"},
            "text": {"family": "Inter", "fallback": "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", "use": "captions, long text, data"},
            "mono": {"family": "ui-monospace, 'SF Mono', Menlo, Consolas, monospace", "use": "code, hex values"},
        },
        "type-scale": {k: v for k, v in TYPE_SCALE},
        "radius": {"xs": "6px", "sm": "10px", "md": "14px", "lg": "20px", "xl": "28px", "pill": "999px"},
        "space": {str(i): f"{v}px" for i, v in enumerate([0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128])},
        "motion": {
            "easing": EASE,
            "duration": {"instant": "120ms", "fast": "200ms", "base": "320ms", "slow": "560ms", "intro": "1100ms"},
            "states": {s: {"label": l, "duration": d, "easing": e, "description": t} for s, l, d, e, t in MOTION_STATES},
        },
        "contrast": [dict(pair=n_, fg=fg, bg=bg, ratio=round(pal.cr(fg, bg), 2), grade=pal.grade(pal.cr(fg, bg)), use=u)
                     for n_, fg, bg, u in pal.PAIRS],
    }
    w("colors/tokens.json", json.dumps(tok, indent=2, ensure_ascii=False) + "\n")
    add("colors/tokens.json", "tokens", "Design tokens (JSON)")
    lines = ["/* SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors */", "/* SPDX-License-Identifier: CC-BY-4.0 */",
             "/* Tilo design tokens. Generated by brand/src/build.py, do not edit by hand. */", ":root {"]
    for sc, vals in S.items():
        for st, hx in vals.items():
            lines.append(f"  --tilo-{sc}-{st}: {hx};")
    lines.append("  --tilo-font-brand: 'Onest', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;")
    lines.append("  --tilo-font-text: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;")
    lines.append("  --tilo-font-mono: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;")
    for k, v in TYPE_SCALE:
        lines.append(f"  --tilo-text-{k}: {v['size']};")
    for k, v in EASE.items():
        lines.append(f"  --tilo-ease-{k}: {v};")
    for k, v in tok["radius"].items():
        lines.append(f"  --tilo-radius-{k}: {v};")
    sem = lambda d: [f"  --tilo-{k}: {v};" for k, v in d.items()]
    lines += sem(pal.LIGHT) + ["  color-scheme: light;", "}"]
    lines += ["@media (prefers-color-scheme: dark) {", "  :root:not([data-theme=\"light\"]) {"] + ["  " + x for x in sem(pal.DARK)] + ["    color-scheme: dark;", "  }", "}"]
    lines += [":root[data-theme=\"dark\"] {"] + sem(pal.DARK) + ["  color-scheme: dark;", "}", ""]
    w("colors/tokens.css", "\n".join(lines))
    add("colors/tokens.css", "tokens", "Design tokens (CSS variables, light + dark)")


TYPE_SCALE = [
    ("display", {"size": "clamp(2.75rem, 1.6rem + 4.6vw, 5.5rem)", "line": "1.02", "weight": 600, "tracking": "-0.035em", "font": "brand"}),
    ("h1", {"size": "clamp(2.1rem, 1.5rem + 2.4vw, 3.4rem)", "line": "1.08", "weight": 600, "tracking": "-0.025em", "font": "brand"}),
    ("h2", {"size": "clamp(1.6rem, 1.3rem + 1.2vw, 2.25rem)", "line": "1.15", "weight": 600, "tracking": "-0.02em", "font": "brand"}),
    ("h3", {"size": "1.25rem", "line": "1.3", "weight": 600, "tracking": "-0.01em", "font": "brand"}),
    ("body-lg", {"size": "1.125rem", "line": "1.6", "weight": 400, "tracking": "0", "font": "text"}),
    ("body", {"size": "1rem", "line": "1.6", "weight": 400, "tracking": "0", "font": "text"}),
    ("caption-live", {"size": "clamp(1.25rem, 1rem + 1vw, 1.75rem)", "line": "1.35", "weight": 500, "tracking": "0", "font": "text"}),
    ("small", {"size": "0.875rem", "line": "1.5", "weight": 400, "tracking": "0.005em", "font": "text"}),
    ("label", {"size": "0.75rem", "line": "1.3", "weight": 600, "tracking": "0.08em", "font": "brand"}),
]


def contrast_md():
    rows = ["| Pair | Foreground | Background | Ratio | WCAG 2.x | Use |", "|---|---|---|---|---|---|"]
    for n_, fg, bg, u in pal.PAIRS:
        r = pal.cr(fg, bg)
        rows.append(f"| {n_} | `{fg}` | `{bg}` | {r:.2f}:1 | {pal.grade(r)} | {u} |")
    return "\n".join(rows)


def scales_md():
    rows = ["| Scale | " + " | ".join(pal.STEPS) + " |", "|---|" + "---|" * len(pal.STEPS)]
    for sc, v in S.items():
        rows.append(f"| {sc} | " + " | ".join(f"`{v[s]}`" for s in pal.STEPS) + " |")
    return "\n".join(rows)


def build_colors_readme():
    txt = f"""<!-- Generated by brand/src/build.py. Edit palette.py and rebuild. -->
# Tilo colour

Three colours carry the logo and they never change: **Tilo teal** `{pal.LIGHT['primary']}` (left half), **Sea** `{pal.LIGHT['accent']}` (right half) and **Gold** `{pal.LIGHT['dot']}` (the dot; *tillo* means gold, and *tilo* sits inside it). Everything else is support.

- Teal is the only colour for brand text and primary actions on light backgrounds (4.83:1).
- Sea `{pal.LIGHT['accent']}` is for graphics, icons and large text only on light backgrounds (3.13:1). For accent text use `{pal.LIGHT['accent-text']}`.
- Gold is decorative on light backgrounds (1.85:1): the dot, highlights, never text, never the only signal of state.
- In dark mode the logo uses the lighter steps (`{pal.DARK['primary']}`, `{pal.DARK['accent']}`, `{pal.DARK['dot']}`); all of them pass AAA on `{pal.DARK['bg']}`.
- Status colours (ok, warn, bad, info) always come with an icon or a word. Colour alone never carries meaning.

Files: `tokens.json` (all scales, semantic light/dark tokens, type, motion, contrast), `tokens.css` (CSS variables; dark mode by `prefers-color-scheme` or `data-theme="dark"`).

## Scales (OKLCH, anchors fixed)

{scales_md()}

## Contrast (WCAG 2.x relative luminance)

{contrast_md()}

AA = 4.5:1 for text. "AA large / UI" = 3:1, allowed for text of 24 px+ (or 18.66 px bold) and for icons, borders and graphics (WCAG 1.4.11).
"""
    w("colors/README.md", txt)


# ================================================================ main
def main():
    build_logos()
    construction()
    clearspace()
    minsize()
    keys = misuse_tiles()
    build_icons()
    build_social()
    build_iconography()
    build_motion()
    build_tokens()
    build_colors_readme()
    meta = dict(rig=RIG, wordmark=WMM, lockup=dict(k=LK_K, gap=LK_GAP, base=LK_BASE, wx=LK_WX), symbol_bbox=[X0, Y0, X1, Y1],
                motion=[dict(state=s, label=l, duration=d, easing=e, text=t) for s, l, d, e, t in MOTION_STATES],
                min_sizes=[dict(item=i, label=l, px=p, mm=m, note=n_) for i, l, p, m, n_ in MIN_SIZES],
                misuse=keys, icons={k: v[0] for k, v in ICONS.items()}, type_scale=dict(TYPE_SCALE))
    w("src/build-meta.json", json.dumps(meta, indent=1, default=list) + "\n")
    w("src/manifest.json", json.dumps(MANIFEST, indent=1) + "\n")
    print("built", len(MANIFEST), "assets")


if __name__ == "__main__":
    main()
