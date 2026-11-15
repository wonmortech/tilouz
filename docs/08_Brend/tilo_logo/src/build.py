"""Build Tilo logo SVG files and tilo_logo_board.html.  python build.py"""
import os, json, math, re
from urllib.parse import quote
import geo

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SVG = os.path.join(ROOT, "svg")
os.makedirs(SVG, exist_ok=True)

# ------------------------------------------------------------------ palettes
V = {
    1: dict(slug="geometrik", name="Geometrik", sub="Asl g'oyaning toza qurilishi",
            light=dict(a="#0B7A67", b="#1497B8", c="#F2A81D", ink="#15171C", paper="#F7F5F0"),
            dark=dict(a="#34C9A8", b="#4FD3F0", c="#F6B93B", ink="#F3F1EC", paper="#101214"),
            icon=dict(bg="#0F1B1A", a="#34C9A8", b="#4FD3F0", c="#F6B93B"),
            pal=[("Primary", "#0B7A67", "Tilo teal"), ("Accent 1", "#1497B8", "Suv"), ("Accent 2", "#F2A81D", "Tillo"), ("Neutral", "#15171C", "Siyoh")],
            ws=0.20),
    2: dict(slug="qol_izi", name="Qo'l izi", sub="Kalligrafik, o'zgaruvchan qalinlik",
            light=dict(a="#1F2A6B", b="#1F2A6B", c="#E04A2F", ink="#1F2A6B", paper="#FAF6EE"),
            dark=dict(a="#D6DAFF", b="#D6DAFF", c="#FF7A5C", ink="#ECEBFF", paper="#12131C"),
            icon=dict(bg="#FAF6EE", a="#1F2A6B", b="#1F2A6B", c="#E04A2F"),
            pal=[("Primary", "#1F2A6B", "Siyoh-indigo"), ("Accent 1", "#E04A2F", "Tegish"), ("Accent 2", "#E9B949", "Qum"), ("Neutral", "#FAF6EE", "Qog'oz")],
            ws=0.17),
    3: dict(slug="uchrashuv", name="Uchrashuv", sub="Ikki odam, ikki rang, bitta tegish nuqtasi",
            light=dict(a="#6A4CF4", b="#FF7A3D", k="#6A243A", c="#6A243A", ink="#16132B", paper="#F6F4FF"),
            dark=dict(a="#8B74FF", b="#FF8D57", k="#8B3A64", c="#FFC9A8", ink="#F1EEFF", paper="#110E1F"),
            icon=dict(bg="#FFFFFF", a="#6A4CF4", b="#FF7A3D", k="#6A243A", c="#6A243A"),
            pal=[("Primary", "#6A4CF4", "Kar odam"), ("Accent 1", "#FF7A3D", "Eshituvchi"), ("Accent 2", "#6A243A", "Tegish (multiply)"), ("Neutral", "#16132B", "Tun")],
            ws=0.19),
    4: dict(slug="lenta", name="Lenta", sub="To'liq siluet, kesilgan lenta",
            light=dict(a="#007A5A", b="#00573F", c="#F4B000", ink="#0C1411", paper="#F3F6F4"),
            dark=dict(a="#1FC28F", b="#139A70", c="#F7C033", ink="#EEF5F1", paper="#0B1310"),
            icon=dict(bg="#007A5A", a="#FFFFFF", b="#CDEFE2", c="#F7C033"),
            pal=[("Primary", "#007A5A", "Zumrad"), ("Accent 1", "#00573F", "Burma soya"), ("Accent 2", "#F4B000", "Tillo"), ("Neutral", "#0C1411", "Qora-yashil")],
            ws=0.235),
    5: dict(slug="monogram", name="Monogram", sub="To'lqin 'i' ga aylanadi, nuqta = i-nuqta",
            light=dict(a="#2450F0", b="#0E9F73", c="#E83E6C", ink="#0F1222", paper="#F6F7FB"),
            dark=dict(a="#7290FF", b="#2BD9A0", c="#FF6F96", ink="#EEF0FA", paper="#0C0F1C"),
            icon=dict(bg="#2450F0", a="#FFFFFF", b="#7CF2C8", c="#FF8FAE"),
            pal=[("Primary", "#2450F0", "Ko'k"), ("Accent 1", "#0E9F73", "Yashil"), ("Accent 2", "#E83E6C", "Nuqta"), ("Neutral", "#0F1222", "Siyoh")],
            ws=0.215),
}

GEO = {k: f() for k, f in geo.VARIANTS.items()}


# ------------------------------------------------------------------ contrast
def lum(h):
    h = h.lstrip("#")
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    c = [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def cr(a, b):
    la, lb = sorted([lum(a), lum(b)], reverse=True)
    return (la + 0.05) / (lb + 0.05)


def grade(r):
    return "AA" if r >= 4.5 else ("AA katta / grafika" if r >= 3 else "faqat bezak")


# ------------------------------------------------------------------ svg pieces
def part_fill(k, key, cols):
    return cols.get(key, cols["a"])


def mark_body(k, cols, pre="", mono=False, live=False):
    """Inner SVG markup of a mark in 512 space. live=True -> board version (blend, data-part)."""
    parts, meta = GEO[k]
    out = []
    dp = lambda pid: f' data-part="{pid}"' if live else ""
    if k == 3 and not mono:
        L = parts[0][1].path(); Rr = parts[1][1].path()
        if live:
            out.append(f'<g style="isolation:isolate">'
                       f'<path id="{pre}arc-left"{dp("arc-left")} d="{L}" fill="{cols["a"]}"/>'
                       f'<path id="{pre}arc-right"{dp("arc-right")} d="{Rr}" fill="{cols["b"]}" style="mix-blend-mode:multiply"/></g>')
        else:
            out.append(f'<defs><clipPath id="{pre}clip-left"><path d="{L}"/></clipPath></defs>')
            out.append(f'<path id="{pre}arc-left" d="{L}" fill="{cols["a"]}"/>')
            out.append(f'<path id="{pre}arc-right" d="{Rr}" fill="{cols["b"]}"/>')
            out.append(f'<path id="{pre}knot" d="{Rr}" fill="{cols["k"]}" clip-path="url(#{pre}clip-left)"/>')
        out.append(f'<path id="{pre}dot"{dp("dot")} d="{parts[2][1].path()}" fill="{cols["c"]}"/>')
        return "".join(out)
    if k == 3 and mono:
        L = parts[0][1].path(); Rr = parts[1][1].path()
        out.append(f'<defs><mask id="{pre}m" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">'
                   f'<rect width="512" height="512" fill="#fff"/><path d="{Rr}" fill="none" stroke="#000" stroke-width="14"/></mask></defs>')
        out.append(f'<path id="{pre}arc-left" d="{L}" fill="currentColor" mask="url(#{pre}m)"/>')
        out.append(f'<path id="{pre}arc-right" d="{Rr}" fill="currentColor"/>')
        out.append(f'<path id="{pre}dot" d="{parts[2][1].path()}" fill="currentColor"/>')
        return "".join(out)
    for pid, s, key in parts:
        fill = "currentColor" if mono else cols[key]
        seam = f' stroke="{fill}" stroke-width="0.8" stroke-linejoin="round"' if k == 2 and pid != "dot" else ""
        out.append(f'<path id="{pre}{pid}"{dp(pid)} d="{s.path()}" fill="{fill}"{seam}/>')
    return "".join(out)


def mark_svg(k, cols, mono=False, title="Tilo"):
    color = ' color="#15171C"' if mono else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"{color} role="img" aria-labelledby="t">'
            f'<title id="t">{title}</title>\n<g id="tilo-mark">{mark_body(k, cols, mono=mono)}</g>\n</svg>\n')


def icon_body(k, pre="", size=1024, scale=None, fav=False):
    ic = V[k]["icon"]
    parts, meta = GEO[k]
    x0, y0, x1, y1 = geo.bbox([s for _, s, _ in parts])
    span = max(x1 - x0, (y1 - y0))
    target = size * (0.80 if fav else 0.60)
    f = scale or target / span
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    tx, ty = size / 2 - cx * f, size / 2 - cy * f
    rx = size * (0.2 if fav else 0.2237)
    body = mark_body(k, ic, pre=pre)
    hi = ""
    if not fav:
        hi = (f'<defs><linearGradient id="{pre}sheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".10"/>'
              f'<stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>'
              f'<rect width="{size}" height="{size}" rx="{rx:.1f}" fill="url(#{pre}sheen)"/>')
    border = ' stroke="#000" stroke-opacity=".08" stroke-width="2"' if ic["bg"].upper() in ("#FFFFFF", "#FAF6EE") else ""
    return (f'<rect id="{pre}bg" width="{size}" height="{size}" rx="{rx:.1f}" fill="{ic["bg"]}"{border}/>{hi}'
            f'<g id="{pre}tilo-mark" transform="translate({tx:.2f} {ty:.2f}) scale({f:.4f})">{body}</g>')


def icon_svg(k, fav=False):
    size = 1024 if not fav else 64
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}" role="img" aria-labelledby="t">'
            f'<title id="t">Tilo {"favicon" if fav else "ilova belgisi"}</title>\n{icon_body(k, size=size, fav=fav)}\n</svg>\n')


def wordmark_body(k, cols, H, s, x0, base, pre="", live=False, two_tone_o=False):
    wm, width = geo.wordmark(H=100, s=s / H * 100)
    f = H / 100
    out = [f'<g id="{pre}wordmark" transform="translate({x0:.2f} {base:.2f}) scale({f:.4f})" fill="none" stroke="{cols["ink"]}" '
           f'stroke-width="{s / H * 100:.2f}" stroke-linecap="round" stroke-linejoin="round">']
    for pid, kind, d in wm:
        dp = f' data-part="{pid}"' if live else ""
        if kind == "dot":
            col = cols["c"] if k == 5 else cols["ink"]
            out.append(f'<circle id="{pre}{pid}"{dp} cx="{d[0]:.2f}" cy="{d[1]:.2f}" r="{d[2]:.2f}" fill="{col}" stroke="none"/>')
        elif pid.startswith("o-") and not two_tone_o:
            if pid == "o-top":
                m = re.findall(r"[-\d.]+", d)
                ox = (float(m[0]) + float(m[-2])) / 2
                rr = (float(m[-2]) - float(m[0])) / 2
                out.append(f'<circle id="{pre}o"{dp} cx="{ox:.2f}" cy="-50" r="{rr:.2f}"/>')
        elif pid.startswith("o-"):
            col = cols["a"] if pid == "o-top" else cols["b"]
            out.append(f'<path id="{pre}{pid}"{dp} d="{d}" stroke="{col}" stroke-linecap="butt"/>')
        else:
            out.append(f'<path id="{pre}{pid}"{dp} d="{d}"/>')
    out.append("</g>")
    return "".join(out), width * f


def lockup(k, theme, pre="", live=False, bg=True):
    cols = V[k][theme]
    parts, meta = GEO[k]
    x0, y0, x1, y1 = geo.bbox([s for _, s, _ in parts])
    b0, b1 = meta["band"]
    waveH = b1 - b0
    H = 0.52 * waveH
    s = V[k]["ws"] * H
    cyw = (b0 + b1) / 2
    base = cyw + H / 2
    gap = 0.50 * waveH
    wx = x1 + gap
    wm, ww = wordmark_body(k, cols, H, s, wx, base, pre=pre, live=live, two_tone_o=(k == 5))
    top = min(y0, base - 1.42 * H)
    bot = max(y1, base + s * 0.1)
    pad = 0.26 * waveH
    vb = (x0 - pad, top - pad, (wx + ww) - x0 + 2 * pad, bot - top + 2 * pad)
    body = mark_body(k, cols, pre=pre, live=live)
    bgr = f'<rect x="{vb[0]:.1f}" y="{vb[1]:.1f}" width="{vb[2]:.1f}" height="{vb[3]:.1f}" fill="{cols["paper"]}"/>' if bg else ""
    return vb, f'{bgr}<g id="{pre}tilo-mark">{body}</g>{wm}'


def lockup_svg(k, theme):
    vb, body = lockup(k, theme)
    w, h = vb[2], vb[3]
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb[0]:.1f} {vb[1]:.1f} {w:.1f} {h:.1f}" width="{w*2:.0f}" height="{h*2:.0f}" '
            f'role="img" aria-labelledby="t"><title id="t">Tilo lockup ({theme})</title>\n{body}\n</svg>\n')


def construction(k, pre):
    parts, meta = GEO[k]
    out = []
    cols = V[k]["light"]
    for pid, s, key in parts:
        out.append(f'<path d="{s.path()}" fill="var(--cons-fill)"/>')
    for (cx, cy), rs in meta["cons"]:
        for r in rs:
            out.append(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r:.1f}" fill="none" stroke="var(--cons)" stroke-width="1.4" stroke-dasharray="4 5"/>')
        out.append(f'<path d="M{cx-7:.1f} {cy:.1f}h14M{cx:.1f} {cy-7:.1f}v14" stroke="var(--cons-strong)" stroke-width="1.6"/>')
    b0, b1 = meta["band"]
    jy = meta["J"][1]
    for y in (b0, jy, b1):
        out.append(f'<line x1="8" x2="504" y1="{y:.1f}" y2="{y:.1f}" stroke="var(--cons)" stroke-width="1"/>')
    dot = parts[2][1]
    dx0, dy0, dx1, dy1 = geo.bbox([dot])
    out.append(f'<line x1="8" x2="504" y1="{dy0:.1f}" y2="{dy0:.1f}" stroke="var(--cons)" stroke-width="1" stroke-dasharray="2 4"/>')
    out.append(f'<line x1="{(dx0+dx1)/2:.1f}" x2="{(dx0+dx1)/2:.1f}" y1="8" y2="504" stroke="var(--cons)" stroke-width="1" stroke-dasharray="2 4"/>')
    jx = meta["J"][0]
    out.append(f'<circle cx="{jx:.1f}" cy="{jy:.1f}" r="5" fill="var(--accent-cons)"/>')
    return "".join(out)


# ------------------------------------------------------------------ write SVG files
files = []
for k, v in V.items():
    base = f"{k:02d}_{v['slug']}"
    outs = {
        f"{base}_mark.svg": mark_svg(k, v["light"], title=f"Tilo belgisi - {v['name']}"),
        f"{base}_mono.svg": mark_svg(k, v["light"], mono=True, title=f"Tilo belgisi - {v['name']} (bir rang)"),
        f"{base}_icon.svg": icon_svg(k),
        f"{base}_favicon.svg": icon_svg(k, fav=True),
        f"{base}_lockup_light.svg": lockup_svg(k, "light"),
        f"{base}_lockup_dark.svg": lockup_svg(k, "dark"),
    }
    for fn, txt in outs.items():
        with open(os.path.join(SVG, fn), "w", encoding="utf-8", newline="\n") as fh:
            fh.write(txt)
        files.append(fn)

# ------------------------------------------------------------------ motion specs
EASE = dict(expo="cubic-bezier(.16,1,.3,1)", spring="cubic-bezier(.34,1.56,.64,1)",
            inout="cubic-bezier(.65,0,.35,1)", sine="cubic-bezier(.37,0,.63,1)")
MOTION = {
    1: [("Intro", "1100 ms", "yarim halqalar o'z markazi atrofida 180° aylanib, chap/o'ngdan 70 px kirib uchrashadi (760 ms, expo); nuqta 560 ms dan tushadi (520 ms, spring)"),
        ("Idle", "4.8 s sikl", "yarimlar 5 px ajralib-qo'shiladi, nuqta 6 px suzadi (sine, alternate)"),
        ("Tinglash", "900 ms sikl", "har yarim vertikal amplituda 0.78-1.08 (audio daraja kabi, 150 ms faza siljishi); nuqta 1.3x puls"),
        ("O'tish", "1800 ms", "o'ng yarim 2R chapga siljib 'o' halqa hosil qiladi, halqa 360° aylanadi (yuklanish), keyin qaytadi (in-out)")],
    2: [("Intro", "1500 ms", "mo'yqalam izi markaz chizig'i bo'ylab chiziladi (mask, 1100 ms, in-out), keyin nuqta 'tegadi' + to'lqin halqasi (700 ms)"),
        ("Idle", "3.2 s sikl", "nuqtadan sekin to'lqin halqa tarqaladi (tegish izi)"),
        ("Tinglash", "1.1 s sikl", "halqalar tez-tez tarqaladi, nuqta 1.18x puls"),
        ("O'tish", "1600 ms", "iz o'chadi (chapdan o'ngga), keyin qaytadan chiziladi")],
    3: [("Intro", "1200 ms", "ikki odam ±120 px dan yaqinlashadi (spring), tegishda multiply-rang paydo bo'ladi; nuqta oxirida"),
        ("Idle", "5.2 s sikl", "navbat bilan gapirish: chap, keyin o'ng yarim 4° egiladi"),
        ("Tinglash", "1.4 s sikl", "navbatma-navbat 1.06x ko'tarilish (kim gapiryapti indikatori)"),
        ("O'tish", "1300 ms", "ikkalasi 46 px ajraladi, tegish yo'qoladi, keyin qayta uchrashadi (spring)")],
    4: [("Intro", "1000 ms", "yarimlar yuqori/pastdan kirib kesim bo'ylab yopiladi (spring); nuqta 1.4x dan joyiga 'tushadi'"),
        ("Idle", "3 s sikl", "yarimlar kesim bo'ylab ±6 px siljiydi (lenta tebranishi)"),
        ("Tinglash", "600 ms sikl", "nuqta ekvalayzer kabi 18 px sakraydi, lenta 1.02x nafas"),
        ("O'tish", "1200 ms", "yarimlar 40 px ajraladi va spring bilan qayta 'click' qiladi")],
    5: [("Intro", "1400 ms", "harflar 60 ms oraliq bilan pastdan ko'tariladi, to'lqin yig'iladi, i-nuqta oxirida sakrab tushadi"),
        ("Idle", "2.4 s sikl", "nuqta kursor kabi 10 px sakraydi"),
        ("Tinglash", "1 s sikl", "nuqta subtitr kursori kabi miltillaydi (steps), to'lqin amplitudasi tebranadi"),
        ("O'tish", "1800 ms", "'o' harfining yarimlari ajralib to'lqinga aylanadi va qaytadi")],
}

THREED = {
    1: "Har qism alohida ekstrud: chuqurlik 0.35w (21 u), bevel 0.08w, 3 segment (yumaloq). Material: mat-silk plastik (roughness 0.45), nuqta - oltin metall (metalness 1, roughness 0.25). Yorug'lik: katta softbox yuqori-chapdan + rim orqadan. Joint'da ikki yarim bir-biriga tegadi - 3D da 0.5 u oraliq qoldiring, aks holda z-fighting.",
    2: "Ekstrud emas, 'sweep': markaz chizig'i bo'ylab o'zgaruvchan radiusli quvur (taper curve 18>70>18). Material: lak bosilgan siyoh (clearcoat 1, roughness 0.15) + nuqta yumshoq emissive. Kamera past burchakda, qalinlik o'zgarishi soyada ko'rinsin.",
    3: "Ikki yarimni turli Z da (0 va +6 u) ekstrud qiling, multiply kesishmani shaffof shisha (transmission 0.9, IOR 1.45) bilan almashtiring: tegish joyi rang aralashmasi bo'lib nur o'tkazadi. Bevel 4 u.",
    4: "Eng kuchli 3D shakl: chuqurlik 0.6w (50 u), katta bevel 10 u, kesim yuzalari tekis qoladi (bevel faqat tashqi qirrada). O'ng yarim 1 tus to'q - burma soyasi. Material: zumrad keramika yoki silikon; nuqta oltin. Ilova ikonkasi uchun 30° izometrik render.",
    5: "Belgi + so'z belgisi bitta tekislikda, 0.3w ekstrud; i-nuqta 1.2x chuqurroq va emissive (kursor). Animatsiyada nuqta Z bo'yicha sakraydi.",
}

# ------------------------------------------------------------------ board
def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;")


def theme_vars(k):
    L, D = V[k]["light"], V[k]["dark"]
    lv = ";".join(f"--v{k}-{n}:{c}" for n, c in L.items())
    dv = ";".join(f"--v{k}-{n}:{c}" for n, c in D.items())
    return lv, dv


def varcols(k):
    return {n: f"var(--v{k}-{n})" for n in V[k]["light"]}


PHONE_APPS = [("Kamera", "#3A3F4B", "cam"), ("Soat", "#1E1F24", "clock"), ("Xarita", "#4C9F70", "map"), ("Ob-havo", "#3D7BE0", "sun"),
              ("Galereya", "#E8E4DC", "img"), ("Eslatma", "#F2C94C", "note"), ("Musiqa", "#E2475B", "music"), ("Sozlama", "#8A8F98", "gear"),
              ("Telefon", "#3DBE5B", "phone"), ("Xabar", "#2F8CF0", "msg"), ("Pochta", "#4A7DFF", "mail"), ("Hisob", "#2B2E36", "calc")]


def glyph(kind):
    g = {"cam": '<rect x="7" y="10" width="18" height="13" rx="3" fill="#fff"/><circle cx="16" cy="16.5" r="3.6" fill="#3A3F4B"/>',
         "clock": '<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" stroke-width="2"/><path d="M16 10v6l4 2" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>',
         "map": '<path d="M8 10l5-2 6 2 5-2v14l-5 2-6-2-5 2z" fill="#fff" opacity=".9"/>',
         "sun": '<circle cx="14" cy="14" r="5" fill="#FFD25A"/><rect x="11" y="16" width="14" height="7" rx="3.5" fill="#fff"/>',
         "img": '<circle cx="12" cy="12" r="3" fill="#E2475B"/><path d="M7 23l6-7 4 4 3-3 5 6z" fill="#3D7BE0"/>',
         "note": '<path d="M9 11h14M9 16h14M9 21h9" stroke="#7A5A00" stroke-width="2" stroke-linecap="round"/>',
         "music": '<path d="M13 21V10l9-2v11" stroke="#fff" stroke-width="2.2" fill="none"/><circle cx="11" cy="21" r="2.6" fill="#fff"/><circle cx="20" cy="19" r="2.6" fill="#fff"/>',
         "gear": '<circle cx="16" cy="16" r="7" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="3 2.5"/><circle cx="16" cy="16" r="2.5" fill="#fff"/>',
         "phone": '<path d="M11 9c-2 1-2 4 0 7s5 6 8 7c2 0 3-1 3-2l-3-3-2 1c-2-1-3-3-4-4l1-2-3-4z" fill="#fff"/>',
         "msg": '<path d="M7 10h18v10H14l-5 4v-4H7z" fill="#fff"/>',
         "mail": '<rect x="7" y="10" width="18" height="12" rx="2" fill="#fff"/><path d="M7 11l9 6 9-6" stroke="#4A7DFF" stroke-width="1.6" fill="none"/>',
         "calc": '<rect x="9" y="8" width="14" height="16" rx="2" fill="#5B606B"/><rect x="11" y="10" width="10" height="4" fill="#C9F2D9"/>'}[kind]
    return f'<svg viewBox="0 0 32 32">{g}</svg>'


def phone(k):
    apps = PHONE_APPS[:]
    cells = []
    for i, (lab, bg, gk) in enumerate(apps):
        if i == 5:
            cells.append(f'<div class="app me"><div class="ic"><svg viewBox="0 0 1024 1024">{icon_body(k, pre=f"ph{k}-")}</svg></div><span>Tilo</span></div>')
        cells.append(f'<div class="app"><div class="ic" style="background:{bg}">{glyph(gk)}</div><span>{lab}</span></div>')
    dock = "".join(f'<div class="app"><div class="ic" style="background:{bg}">{glyph(gk)}</div></div>' for lab, bg, gk in PHONE_APPS[8:12])
    return (f'<div class="phone p{k}"><div class="scr"><div class="sb"><b>9:41</b><i></i></div>'
            f'<div class="grid4">{"".join(cells[:12])}</div><div class="dock">{dock}</div></div></div>')


def palette_html(k):
    L, D = V[k]["light"], V[k]["dark"]
    rows = []
    for role, hx, nm in V[k]["pal"]:
        r1 = cr(hx, L["paper"]); r2 = cr(hx, "#FFFFFF")
        rows.append(f'<div class="sw"><i style="background:{hx}"></i><div><b>{role}</b> · {nm}<br><code>{hx}</code>'
                    f'<small>qog\'oz {r1:.2f}:1 <em class="g{1 if r1>=4.5 else (2 if r1>=3 else 3)}">{grade(r1)}</em></small></div></div>')
    # text pairs
    pairs = [("Matn: siyoh / qog'oz", L["ink"], L["paper"]), ("Matn: primary / qog'oz", V[k]["pal"][0][1], L["paper"]),
             ("Qorong'i: matn / fon", D["ink"], D["paper"]), ("Qorong'i: primary / fon", D["a"], D["paper"])]
    tp = "".join(f'<tr><td>{esc(n)}</td><td><span class="chip" style="background:{bg};color:{fg}">Aa</span></td><td>{cr(fg,bg):.2f}:1</td><td><em class="g{1 if cr(fg,bg)>=4.5 else (2 if cr(fg,bg)>=3 else 3)}">{grade(cr(fg,bg))}</em></td></tr>' for n, fg, bg in pairs)
    return f'<div class="pal">{"".join(rows)}</div><table class="ct">{tp}</table>'


def favicon_html(k):
    data = "data:image/svg+xml," + quote(icon_svg(k, fav=True))
    return (f'<div class="fav" data-src="{data}">'
            f'<figure><img src="{data}" width="16" height="16" alt=""><figcaption>16</figcaption></figure>'
            f'<figure><img src="{data}" width="32" height="32" alt=""><figcaption>32</figcaption></figure>'
            f'<figure><canvas width="16" height="16" class="px"></canvas><figcaption>16 ×6</figcaption></figure>'
            f'<figure><canvas width="32" height="32" class="px px32"></canvas><figcaption>32 ×3</figcaption></figure>'
            f'<div class="tab"><img src="{data}" width="16" height="16" alt=""><span>Tilo - jonli tarjimon</span></div></div>')


def stage_svg(k):
    pre = f"s{k}-"
    if k == 5:
        vb, body = lockup5_live(pre)
        return f'<svg class="big wide" viewBox="{vb[0]:.1f} {vb[1]:.1f} {vb[2]:.1f} {vb[3]:.1f}" data-v="5">{body}</svg>'
    cols = varcols(k)
    body = mark_body(k, cols, pre=pre, live=True)
    extra = ""
    if k == 2:
        cl, off = GEO[2][1]["centerline"]
        extra = (f'<defs><mask id="{pre}draw" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">'
                 f'<path class="drawline" d="{cl}" transform="translate({off[0]} {off[1]})" fill="none" stroke="#fff" stroke-width="120" '
                 f'stroke-linecap="round" pathLength="100" stroke-dasharray="100 100" stroke-dashoffset="0"/></mask></defs>')
        parts = GEO[2][0]
        body = (f'<g mask="url(#{pre}draw)"><path data-part="arc-left" d="{parts[0][1].path()}" fill="{cols["a"]}" stroke="{cols["a"]}" stroke-width="0.8"/>'
                f'<path data-part="arc-right" d="{parts[1][1].path()}" fill="{cols["a"]}" stroke="{cols["a"]}" stroke-width="0.8"/></g>'
                f'<circle class="ripple" cx="0" cy="0" r="1" fill="none" stroke="{cols["c"]}" stroke-width="3" opacity="0"/>'
                f'<path data-part="dot" d="{parts[2][1].path()}" fill="{cols["c"]}"/>')
    return f'<svg class="big" viewBox="0 0 512 512" data-v="{k}">{extra}{body}</svg>'


def lockup5_live(pre):
    cols = varcols(5)
    parts, meta = GEO[5]
    vb, _ = lockup(5, "light")
    x0, y0, x1, y1 = geo.bbox([s for _, s, _ in parts])
    b0, b1 = meta["band"]; waveH = b1 - b0
    H = 0.52 * waveH; s = V[5]["ws"] * H
    base = (b0 + b1) / 2 + H / 2
    wx = x1 + 0.50 * waveH
    wm, ww = wordmark_body(5, cols, H, s, wx, base, pre=pre, live=True, two_tone_o=True)
    body = mark_body(5, cols, pre=pre, live=True)
    return vb, f'<g>{body}</g>{wm}'


def rig_json():
    out = {}
    for k in V:
        m = GEO[k][1]
        parts = GEO[k][0]
        dot = parts[2][1]
        dx0, dy0, dx1, dy1 = geo.bbox([dot])
        out[k] = dict(R=m["R"], lc=m["lc"], rc=m["rc"], J=m["J"], dot=((dx0 + dx1) / 2, (dy0 + dy1) / 2, (dx1 - dx0) / 2))
    return json.dumps(out)


def section(k):
    v = V[k]
    lockL = lockup(k, "light", pre=f"ll{k}-", bg=False)
    lockD = lockup(k, "dark", pre=f"ld{k}-", bg=False)
    mono = mark_body(k, v["light"], pre=f"mo{k}-", mono=True)
    mot = "".join(f'<tr><th>{a}</th><td>{b}</td><td>{esc(c)}</td></tr>' for a, b, c in MOTION[k])
    note = GEO[k][1]["note"]
    return f'''
<section class="v" id="v{k}" style="--acc:var(--v{k}-a)">
  <header class="vh"><span class="no">0{k}</span><div><h2>{v["name"]}</h2><p>{esc(v["sub"])}</p></div></header>
  <div class="row1">
    <div class="stagebox" style="background:var(--v{k}-paper)">
      {stage_svg(k)}
      <div class="ctrl" data-for="{k}">
        <button data-act="intro">Intro</button><button data-act="idle">Idle</button>
        <button data-act="listen">Tinglash</button><button data-act="trans">O'tish</button>
      </div>
    </div>
    <div class="col">
      <div class="lk light"><svg viewBox="{' '.join(f'{x:.1f}' for x in lockL[0])}">{lockL[1]}</svg><span>lockup · yorug'</span></div>
      <div class="lk dark"><svg viewBox="{' '.join(f'{x:.1f}' for x in lockD[0])}">{lockD[1]}</svg><span>lockup · qorong'i</span></div>
      <div class="minis">
        <div class="mini cons"><svg viewBox="0 0 512 512">{construction(k, f"c{k}-")}</svg><span>qurilish</span></div>
        <div class="mini" style="background:#fff;color:#15171C"><svg viewBox="0 0 512 512">{mono}</svg><span>mono</span></div>
        <div class="mini" style="background:#111214;color:#F3F1EC"><svg viewBox="0 0 512 512">{mark_body(k, v["light"], pre=f"mi{k}-", mono=True)}</svg><span>mono · inversiya</span></div>
      </div>
      <p class="geo">{esc(note)}</p>
    </div>
  </div>
  <div class="row2">
    {phone(k)}
    <div class="col2">
      <h3>Favicon tekshiruvi</h3>{favicon_html(k)}
      <h3>Palitra va kontrast (WCAG)</h3>{palette_html(k)}
    </div>
    <div class="col3">
      <h3>Harakat spetsifikatsiyasi</h3><table class="mt">{mot}</table>
      <h3>3D</h3><p class="d3">{esc(THREED[k])}</p>
      <p class="files">svg/0{k}_{v["slug"]}_mark · _mono · _icon · _favicon · _lockup_light · _lockup_dark</p>
    </div>
  </div>
</section>'''


lv_all = ";".join(theme_vars(k)[0] for k in V)
dv_all = ";".join(theme_vars(k)[1] for k in V)

CSS = f"""
:root{{--bg:#F4F2EC;--fg:#15171C;--mut:#5F6270;--card:#FFFFFF;--line:#E3E0D8;--cons:#B9B4A8;--cons-strong:#6F6A60;--cons-fill:rgba(21,23,28,.07);--accent-cons:#E04A2F;{lv_all}}}
@media (prefers-color-scheme:dark){{:root:not([data-theme="light"]){{--bg:#0C0D10;--fg:#F1EFEA;--mut:#A3A6B2;--card:#15161B;--line:#272932;--cons:#5E616E;--cons-strong:#A3A6B2;--cons-fill:rgba(255,255,255,.12);--accent-cons:#FF7A5C;{dv_all}}}}}
:root[data-theme="dark"]{{--bg:#0C0D10;--fg:#F1EFEA;--mut:#A3A6B2;--card:#15161B;--line:#272932;--cons:#5E616E;--cons-strong:#A3A6B2;--cons-fill:rgba(255,255,255,.12);--accent-cons:#FF7A5C;{dv_all}}}
*{{box-sizing:border-box}}
body{{margin:0;background:var(--bg);color:var(--fg);font:15px/1.55 "Lexend",system-ui,sans-serif;-webkit-font-smoothing:antialiased}}
.top{{max-width:1360px;margin:0 auto;padding:56px 32px 28px;display:flex;justify-content:space-between;align-items:end;gap:24px;flex-wrap:wrap}}
.top h1{{font:600 54px/1 "Lexend";letter-spacing:-.035em;margin:0}}
.top p{{margin:12px 0 0;max-width:760px;color:var(--mut)}}
.tbtn{{font:500 14px "Lexend";padding:10px 18px;border-radius:999px;border:1px solid var(--line);background:var(--card);color:var(--fg);cursor:pointer}}
.over{{max-width:1360px;margin:0 auto 28px;padding:0 32px;display:grid;grid-template-columns:repeat(5,1fr);gap:14px}}
.over a{{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:14px;color:inherit;text-decoration:none;display:flex;flex-direction:column;gap:6px}}
.over svg{{width:100%;aspect-ratio:1;border-radius:14px}}
.over b{{font-weight:600}} .over small{{color:var(--mut);font-size:12px}}
main{{max-width:1360px;margin:0 auto;padding:0 32px 80px;display:grid;gap:28px}}
.v{{background:var(--card);border:1px solid var(--line);border-radius:28px;padding:28px}}
.vh{{display:flex;gap:18px;align-items:baseline;margin-bottom:20px}}
.no{{font:500 13px "Lexend";color:var(--mut);border:1px solid var(--line);border-radius:999px;padding:3px 10px}}
.vh h2{{margin:0;font:600 34px/1.05 "Lexend";letter-spacing:-.025em}} .vh p{{margin:4px 0 0;color:var(--mut)}}
.row1{{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:20px}}
.stagebox{{position:relative;border-radius:22px;border:1px solid var(--line);min-height:470px;display:grid;place-items:center;overflow:hidden}}
.big{{width:78%;max-width:440px;overflow:visible}} .big.wide{{width:88%;max-width:none}}
.ctrl{{position:absolute;left:14px;right:14px;bottom:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap}}
.ctrl button{{font:500 13px "Lexend";padding:8px 14px;border-radius:999px;border:1px solid color-mix(in srgb,var(--v1-ink) 14%,transparent);background:color-mix(in srgb,var(--card) 80%,transparent);color:var(--fg);cursor:pointer;backdrop-filter:blur(6px)}}
.ctrl button.on{{background:var(--acc);color:#fff;border-color:transparent}}
.col{{display:grid;gap:12px;align-content:start}}
.lk{{border-radius:18px;border:1px solid var(--line);padding:18px 22px;position:relative}}
.lk.light{{background:#fff}} .lk.dark{{background:#0E0F12;border-color:#22242B}}
.lk svg{{width:100%;height:120px;display:block}}
.lk span,.mini span{{position:absolute;right:12px;bottom:8px;font-size:11px;color:#8B8E99}}
.minis{{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}}
.mini{{position:relative;border-radius:16px;border:1px solid var(--line);aspect-ratio:1;display:grid;place-items:center}}
.mini svg{{width:86%;height:86%}} .mini.cons{{background:var(--bg)}}
.geo{{margin:0;font-size:12.5px;color:var(--mut)}}
.row2{{display:grid;grid-template-columns:250px minmax(0,1fr) minmax(0,1fr);gap:24px;margin-top:22px;align-items:start}}
h3{{font:600 13px "Lexend";text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin:0 0 10px}}
.col2 h3+*,.col3 h3+*{{margin-bottom:20px}}
.phone{{width:250px;height:510px;border-radius:44px;background:#0B0B0D;padding:10px;box-shadow:0 18px 40px -18px rgba(0,0,0,.45)}}
.scr{{height:100%;border-radius:35px;overflow:hidden;position:relative;padding:14px 14px}}
.p1 .scr{{background:linear-gradient(160deg,#21414A,#0E1B22 60%,#2A2116)}} .p2 .scr{{background:linear-gradient(160deg,#B7B0A4,#6E6A80 70%)}}
.p3 .scr{{background:linear-gradient(160deg,#B9A9FF,#FFB892)}} .p4 .scr{{background:linear-gradient(160deg,#C9D6CF,#5E7C70)}}
.p5 .scr{{background:linear-gradient(160deg,#1A1F3A,#3B2A5C 60%,#0E1222)}}
.sb{{display:flex;justify-content:space-between;color:#fff;font:600 12px "Lexend";padding:2px 8px 14px}} .sb i{{width:70px;height:20px;background:#0B0B0D;border-radius:12px;position:absolute;left:50%;top:10px;transform:translateX(-50%)}}
.grid4{{display:grid;grid-template-columns:repeat(4,1fr);gap:16px 8px;padding-top:10px}}
.app{{display:flex;flex-direction:column;align-items:center;gap:5px}}
.app .ic{{width:46px;height:46px;border-radius:11px;display:grid;place-items:center;overflow:hidden}}
.app .ic svg{{width:100%;height:100%}} .app span{{font:400 9.5px "Lexend";color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.35)}}
.app.me .ic{{box-shadow:0 0 0 2px rgba(255,255,255,.85),0 6px 14px rgba(0,0,0,.3)}} .app.me span{{font-weight:600}}
.dock{{position:absolute;left:10px;right:10px;bottom:10px;height:72px;border-radius:26px;background:rgba(255,255,255,.22);backdrop-filter:blur(10px);display:flex;justify-content:space-around;align-items:center}}
.fav{{display:flex;gap:16px;align-items:end;flex-wrap:wrap}}
.fav figure{{margin:0;display:flex;flex-direction:column;align-items:center;gap:4px}} .fav figcaption{{font-size:11px;color:var(--mut)}}
canvas.px{{width:96px;height:96px;image-rendering:pixelated;border-radius:6px;border:1px solid var(--line)}}
.tab{{display:flex;gap:8px;align-items:center;background:var(--bg);border:1px solid var(--line);border-radius:10px 10px 0 0;padding:8px 12px;font-size:12px}}
.pal{{display:grid;grid-template-columns:1fr 1fr;gap:10px}}
.sw{{display:flex;gap:10px;align-items:center;font-size:12px}} .sw i{{width:44px;height:44px;border-radius:12px;flex:none;border:1px solid var(--line)}}
.sw code{{font:500 12px ui-monospace,Consolas,monospace}} .sw small{{display:block;color:var(--mut)}}
em{{font-style:normal;font-size:10.5px;border-radius:5px;padding:0 5px;margin-left:4px}} .g1{{background:#D7F3E3;color:#0B5A33}} .g2{{background:#FFF0C7;color:#6E4C00}} .g3{{background:#ECEAE4;color:#5D5A52}}
table{{border-collapse:collapse;width:100%;font-size:12.5px}} td,th{{text-align:left;padding:6px 6px;border-bottom:1px solid var(--line);vertical-align:top}}
.mt th{{width:78px;font-weight:600}} .mt td:nth-child(2){{white-space:nowrap;color:var(--mut);width:84px}}
.chip{{display:inline-block;padding:2px 9px;border-radius:6px;font-weight:600;border:1px solid var(--line)}}
.d3{{font-size:13px;margin:0 0 12px}} .files{{font:12px ui-monospace,Consolas,monospace;color:var(--mut);margin:0}}
.rec{{background:var(--card);border:1px solid var(--line);border-radius:28px;padding:28px}} .rec h2{{margin:0 0 8px;font:600 28px "Lexend"}}
.rec p{{margin:6px 0;max-width:900px}}
@media (max-width:1100px){{.row1,.row2{{grid-template-columns:1fr}} .over{{grid-template-columns:repeat(3,1fr)}} .phone{{margin:0 auto}}}}
@media (max-width:640px){{.top,main,.over{{padding-left:16px;padding-right:16px}} .over{{grid-template-columns:repeat(2,1fr)}} .top h1{{font-size:38px}} .pal{{grid-template-columns:1fr}} .stagebox{{min-height:340px}}}}
@media (prefers-reduced-motion:reduce){{*{{animation:none!important}}}}
"""

JS = r"""
const RIG = __RIG__;
const E={expo:'cubic-bezier(.16,1,.3,1)',spring:'cubic-bezier(.34,1.56,.64,1)',inout:'cubic-bezier(.65,0,.35,1)',sine:'cubic-bezier(.37,0,.63,1)'};
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const running = {};
function P(svg,id){return svg.querySelector('[data-part="'+id+'"]')}
function org(el,x,y){el.style.transformBox='view-box';el.style.transformOrigin=x+'px '+y+'px'}
function stop(k){(running[k]||[]).forEach(a=>a.cancel());running[k]=[];clearInterval(running['t'+k])}
function go(k,el,frames,opt){if(!el)return;const a=el.animate(frames,Object.assign({fill:'both'},opt));running[k].push(a);return a}
function prep(k,svg){const r=RIG[k];const L=P(svg,'arc-left'),R=P(svg,'arc-right'),D=P(svg,'dot');
  if(L)org(L,r.lc[0],r.lc[1]); if(R)org(R,r.rc[0],r.rc[1]); if(D)org(D,r.dot[0],r.dot[1]); return {L,R,D,r}}
function ripple(k,svg,dur){const c=svg.querySelector('.ripple');const r=RIG[k];if(!c)return;
  c.setAttribute('cx',r.dot[0]);c.setAttribute('cy',r.dot[1]);
  go(k,c,[{r:r.dot[2],opacity:.9,strokeWidth:5},{r:r.dot[2]*2.8,opacity:0,strokeWidth:1}],{duration:dur,easing:E.expo,fill:'none'})}
const ACT={
 1:{intro(s,p){go(1,p.L,[{transform:'translate(-70px,0) rotate(-180deg)',opacity:0},{transform:'none',opacity:1}],{duration:760,easing:E.expo});
     go(1,p.R,[{transform:'translate(70px,0) rotate(-180deg)',opacity:0},{transform:'none',opacity:1}],{duration:760,easing:E.expo});
     go(1,p.D,[{transform:'translate(0,-90px) scale(.2)',opacity:0},{transform:'none',opacity:1}],{duration:520,delay:560,easing:E.spring})},
    idle(s,p){go(1,p.L,[{transform:'translate(0,0)'},{transform:'translate(-5px,0)'}],{duration:2400,iterations:Infinity,direction:'alternate',easing:E.sine});
     go(1,p.R,[{transform:'translate(0,0)'},{transform:'translate(5px,0)'}],{duration:2400,iterations:Infinity,direction:'alternate',easing:E.sine});
     go(1,p.D,[{transform:'translate(0,0)'},{transform:'translate(0,-6px)'}],{duration:2400,iterations:Infinity,direction:'alternate',easing:E.sine})},
    listen(s,p){const f=[{transform:'scale(1,1)'},{transform:'scale(1,.78)'},{transform:'scale(1,1.08)'},{transform:'scale(1,.9)'},{transform:'scale(1,1)'}];
     go(1,p.L,f,{duration:900,iterations:Infinity,easing:E.sine});go(1,p.R,f,{duration:900,delay:150,iterations:Infinity,easing:E.sine});
     go(1,p.D,[{transform:'scale(1)'},{transform:'scale(1.3)'},{transform:'scale(1)'}],{duration:900,iterations:Infinity,easing:E.sine})},
    trans(s,p){const R=p.r.R*2;go(1,p.L,[{transform:'rotate(0)'},{transform:'rotate(0)',offset:.3},{transform:'rotate(360deg)',offset:.7},{transform:'rotate(360deg)'}],{duration:1800,easing:E.inout,fill:'none'});
     go(1,p.R,[{transform:'translate(0,0) rotate(0)'},{transform:'translate(-'+R+'px,0) rotate(0)',offset:.3},{transform:'translate(-'+R+'px,0) rotate(360deg)',offset:.7},{transform:'translate(0,0) rotate(360deg)'}],{duration:1800,easing:E.inout,fill:'none'});
     const dx=p.r.lc[0]-p.r.dot[0],dy=p.r.lc[1]-p.r.dot[1];
     go(1,p.D,[{transform:'none'},{transform:'translate('+dx+'px,'+dy+'px) scale(.55)',offset:.3},{transform:'translate('+dx+'px,'+dy+'px) scale(.55)',offset:.7},{transform:'none'}],{duration:1800,easing:E.inout,fill:'none'})}},
 2:{intro(s,p){const m=s.querySelector('.drawline');go(2,m,[{strokeDashoffset:100},{strokeDashoffset:0}],{duration:1100,easing:E.inout});
     go(2,p.D,[{transform:'scale(0)'},{transform:'scale(0)',offset:.72},{transform:'scale(1)'}],{duration:1500,easing:E.spring});
     setTimeout(()=>ripple(2,s,700),1200)},
    idle(s,p){ripple(2,s,1600);running.t2=setInterval(()=>ripple(2,s,1600),3200)},
    listen(s,p){ripple(2,s,1000);running.t2=setInterval(()=>ripple(2,s,1000),550);
     go(2,p.D,[{transform:'scale(1)'},{transform:'scale(1.18)'},{transform:'scale(1)'}],{duration:1100,iterations:Infinity,easing:E.sine})},
    trans(s,p){const m=s.querySelector('.drawline');go(2,m,[{strokeDashoffset:0},{strokeDashoffset:-100,offset:.45},{strokeDashoffset:100,offset:.46},{strokeDashoffset:0}],{duration:1600,easing:E.inout,fill:'none'});
     go(2,p.D,[{transform:'scale(1)'},{transform:'scale(0)',offset:.4},{transform:'scale(0)',offset:.8},{transform:'scale(1)'}],{duration:1600,easing:E.spring,fill:'none'})}},
 3:{intro(s,p){go(3,p.L,[{transform:'translate(-120px,0)',opacity:0},{transform:'none',opacity:1}],{duration:950,easing:E.spring});
     go(3,p.R,[{transform:'translate(120px,0)',opacity:0},{transform:'none',opacity:1}],{duration:950,easing:E.spring});
     go(3,p.D,[{transform:'scale(0)'},{transform:'scale(1)'}],{duration:500,delay:750,easing:E.spring})},
    idle(s,p){go(3,p.L,[{transform:'rotate(0)'},{transform:'rotate(-4deg)',offset:.25},{transform:'rotate(0)',offset:.5},{transform:'rotate(0)'}],{duration:5200,iterations:Infinity,easing:E.sine});
     go(3,p.R,[{transform:'rotate(0)'},{transform:'rotate(0)',offset:.5},{transform:'rotate(-4deg)',offset:.75},{transform:'rotate(0)'}],{duration:5200,iterations:Infinity,easing:E.sine})},
    listen(s,p){go(3,p.L,[{transform:'scale(1)'},{transform:'scale(1.06)',offset:.25},{transform:'scale(1)',offset:.5},{transform:'scale(1)'}],{duration:1400,iterations:Infinity,easing:E.sine});
     go(3,p.R,[{transform:'scale(1)'},{transform:'scale(1)',offset:.5},{transform:'scale(1.06)',offset:.75},{transform:'scale(1)'}],{duration:1400,iterations:Infinity,easing:E.sine});
     go(3,p.D,[{opacity:1},{opacity:.35},{opacity:1}],{duration:700,iterations:Infinity,easing:E.sine})},
    trans(s,p){go(3,p.L,[{transform:'none'},{transform:'translate(-46px,0)',offset:.45},{transform:'none'}],{duration:1300,easing:E.spring,fill:'none'});
     go(3,p.R,[{transform:'none'},{transform:'translate(46px,0)',offset:.45},{transform:'none'}],{duration:1300,easing:E.spring,fill:'none'})}},
 4:{intro(s,p){go(4,p.L,[{transform:'translate(0,-70px)',opacity:0},{transform:'none',opacity:1}],{duration:800,easing:E.spring});
     go(4,p.R,[{transform:'translate(0,70px)',opacity:0},{transform:'none',opacity:1}],{duration:800,delay:80,easing:E.spring});
     go(4,p.D,[{transform:'scale(1.4)',opacity:0},{transform:'none',opacity:1}],{duration:500,delay:500,easing:E.expo})},
    idle(s,p){go(4,p.L,[{transform:'translate(-6px,0)'},{transform:'translate(6px,0)'}],{duration:1500,iterations:Infinity,direction:'alternate',easing:E.sine});
     go(4,p.R,[{transform:'translate(6px,0)'},{transform:'translate(-6px,0)'}],{duration:1500,iterations:Infinity,direction:'alternate',easing:E.sine})},
    listen(s,p){go(4,p.D,[{transform:'translate(0,0)'},{transform:'translate(0,-18px)',offset:.35},{transform:'translate(0,0)',offset:.7},{transform:'translate(0,0)'}],{duration:600,iterations:Infinity,easing:E.sine});
     [p.L,p.R].forEach(e=>go(4,e,[{transform:'scale(1)'},{transform:'scale(1.02)'},{transform:'scale(1)'}],{duration:1200,iterations:Infinity,easing:E.sine}))},
    trans(s,p){go(4,p.L,[{transform:'none'},{transform:'translate(0,-40px)',offset:.4},{transform:'none'}],{duration:1200,easing:E.spring,fill:'none'});
     go(4,p.R,[{transform:'none'},{transform:'translate(0,40px)',offset:.4},{transform:'none'}],{duration:1200,easing:E.spring,fill:'none'})}},
 5:{intro(s,p){['t','i','l','o-top','o-bottom'].forEach((id,i)=>go(5,P(s,id),[{transform:'translate(0,40px)',opacity:0},{transform:'none',opacity:1}],{duration:700,delay:300+i*60,easing:E.expo}));
     go(5,p.L,[{transform:'translate(-60px,0)',opacity:0},{transform:'none',opacity:1}],{duration:700,easing:E.expo});
     go(5,p.R,[{transform:'translate(0,60px)',opacity:0},{transform:'none',opacity:1}],{duration:700,delay:80,easing:E.expo});
     [p.D,P(s,'i-dot')].forEach(d=>go(5,d,[{transform:'translate(0,-120px)',opacity:0},{transform:'none',opacity:1}],{duration:600,delay:800,easing:E.spring}))},
    idle(s,p){[p.D,P(s,'i-dot')].forEach((d,i)=>go(5,d,[{transform:'translate(0,0)'},{transform:'translate(0,-10px)',offset:.12},{transform:'translate(0,0)',offset:.24},{transform:'translate(0,0)'}],{duration:2400,delay:i*120,iterations:Infinity,easing:E.sine}))},
    listen(s,p){[p.D,P(s,'i-dot')].forEach(d=>go(5,d,[{opacity:1},{opacity:.15}],{duration:1000,iterations:Infinity,easing:'steps(2,jump-none)'}));
     go(5,p.L,[{transform:'scale(1,1)'},{transform:'scale(1,.8)'},{transform:'scale(1,1)'}],{duration:800,iterations:Infinity,easing:E.sine});
     go(5,p.R,[{transform:'scale(1,1)'},{transform:'scale(1,.86)'},{transform:'scale(1,1)'}],{duration:800,delay:200,iterations:Infinity,easing:E.sine})},
    trans(s,p){const t=P(s,'o-top'),b=P(s,'o-bottom');
     go(5,t,[{transform:'none'},{transform:'translate(-34px,0)',offset:.35},{transform:'translate(-34px,0)',offset:.65},{transform:'none'}],{duration:1800,easing:E.inout,fill:'none'});
     go(5,b,[{transform:'none'},{transform:'translate(34px,0)',offset:.35},{transform:'translate(34px,0)',offset:.65},{transform:'none'}],{duration:1800,easing:E.inout,fill:'none'});
     go(5,p.L,[{transform:'none'},{transform:'translate(-12px,0)',offset:.35},{transform:'translate(-12px,0)',offset:.65},{transform:'none'}],{duration:1800,easing:E.inout,fill:'none'})}}
};
function run(k,act){const svg=document.querySelector('.big[data-v="'+k+'"]');stop(k);const p=prep(k,svg);
  document.querySelectorAll('.ctrl[data-for="'+k+'"] button').forEach(b=>b.classList.toggle('on',b.dataset.act===act));
  if(reduce&&act!=='intro')return; ACT[k][act](svg,p);
  if(act==='intro'||act==='trans'){const t=act==='intro'?1700:1900;running['t'+k]=setTimeout(()=>run(k,'idle'),t)}}
document.querySelectorAll('.ctrl').forEach(c=>c.addEventListener('click',e=>{const b=e.target.closest('button');if(b)run(+c.dataset.for,b.dataset.act)}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!e.target.dataset.seen){e.target.dataset.seen=1;run(+e.target.dataset.v,'intro')}}),{threshold:.35});
document.querySelectorAll('.big').forEach(s=>io.observe(s));
document.querySelectorAll('.fav').forEach(f=>{const img=new Image();img.onload=()=>f.querySelectorAll('canvas').forEach(c=>{const x=c.getContext('2d');x.drawImage(img,0,0,c.width,c.height)});img.src=f.dataset.src});
const root=document.documentElement;
function setTheme(t){root.dataset.theme=t;try{localStorage.setItem('tilo-theme',t)}catch(e){}}
let saved=null;try{saved=localStorage.getItem('tilo-theme')}catch(e){}
if(location.hash==='#dark')setTheme('dark');else if(location.hash==='#light')setTheme('light');else if(saved)root.dataset.theme=saved;
document.getElementById('theme').addEventListener('click',()=>{const cur=root.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');setTheme(cur==='dark'?'light':'dark')});
"""


def overview():
    out = []
    for k, v in V.items():
        out.append(f'<a href="#v{k}"><svg viewBox="0 0 1024 1024">{icon_body(k, pre=f"ov{k}-")}</svg>'
                   f'<b>0{k} · {v["name"]}</b><small>{esc(v["sub"])}</small></a>')
    return "".join(out)


html = f"""<!doctype html>
<html lang="uz">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tilo Logo Taxtasi</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>{CSS}</style>
</head>
<body>
<div class="top">
  <div><h1>tilo · belgi</h1>
  <p>Ondu "To'lqin" belgisining 5 ta qayta ishlangan yo'nalishi: ikki yarim halqa S-to'lqin + nuqta. Har bir variant: animatsiyali belgi, yorug'/qorong'i lockup,
  qurilish, mono, ilova belgisi, favicon, palitra (WCAG) va harakat spetsifikatsiyasi. So'z belgisi "tilo" - maxsus chizilgan monoline (shrift emas), UI matni uchun Lexend.</p></div>
  <button class="tbtn" id="theme">Yorug' / qorong'i</button>
</div>
<nav class="over">{overview()}</nav>
<main>
{''.join(section(k) for k in V)}
<section class="rec"><h2>Tavsiya</h2>
<p><b>01 Geometrik</b> asosiy belgi sifatida, <b>04 Lenta</b> ilova belgisi va 3D uchun "og'ir" sherik sifatida. Batafsil asos: TILO_LOGO.md.</p></section>
</main>
<script>{JS.replace('__RIG__', rig_json())}</script>
</body></html>"""

with open(os.path.join(ROOT, "tilo_logo_board.html"), "w", encoding="utf-8", newline="\n") as fh:
    fh.write(html)
print("ok", len(files), "svg files;", len(html) // 1024, "KB board")
