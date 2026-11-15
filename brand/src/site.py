# SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
# SPDX-License-Identifier: Apache-2.0
"""Write the /brand pages (uz, en, ru), copy the assets they serve, and pack the brand kit zip.

    python brand/src/site.py

Touches only site/brand/**, site/en/brand/**, site/ru/brand/**.
CSP-safe: no inline scripts, no inline event handlers, no third-party URLs."""
import html
import json
import os
import shutil
import zipfile

import build as B
import palette as pal
from site_text import T

HERE = os.path.dirname(os.path.abspath(__file__))
BRAND = os.path.dirname(HERE)
ROOT = os.path.dirname(BRAND)
SITE = os.path.join(ROOT, "site")
ASSETS = os.path.join(SITE, "brand", "assets")
A = "/brand/assets"
LANGS = {"uz": "/brand/", "en": "/en/brand/", "ru": "/ru/brand/"}
HOME = {"uz": "/", "en": "/en/", "ru": "/ru/"}
REPO = "https://github.com/wonmortech/tilouz/tree/main/brand"
e = html.escape


# ---------------------------------------------------------------- inline, themeable logo SVG
def themed(svg_body):
    """Swap fixed colours for CSS-driven classes so the inline logo follows light / dark."""
    c = pal.LOGO["color-light"]
    out = svg_body
    for key, cls in (("a", "fa"), ("b", "fb"), ("c", "fc")):
        out = out.replace(f'fill="{c[key]}"', f'class="{cls}"')
    out = out.replace(f'stroke="{c["ink"]}"', 'class="wm"').replace(f'fill="{c["ink"]}"', 'class="fi"')
    # paths that already had a motion class now carry two class attributes: merge them
    import re
    out = re.sub(r'class="([^"]+)"([^>]*?) class="([^"]+)"', r'class="\1 \3"\2', out)
    return out


def hero_svg():
    vb, body = B.lockup_h(pal.LOGO["color-light"], cls=True, draw=True)
    body = body.replace('<g id="symbol">', '<g id="symbol" class="t-all">')
    pad = 30
    V = (vb[0] - pad, vb[1] - pad - 40, vb[2] + 2 * pad, vb[3] + 2 * pad + 40)
    return (f'<svg class="tilo-motion hero-logo" data-state="intro" data-then="idle" viewBox="{" ".join(B.f2(v) for v in V)}" '
            f'role="img" aria-label="Tilo">{themed(body)}</svg>')


def motion_symbol(state):
    return (f'<svg class="tilo-motion" data-state="{state}" viewBox="0 0 512 512" role="img" aria-hidden="true">'
            f'<g class="t-all">{themed(B.symbol_body(pal.LOGO["color-light"], cls=True))}</g></svg>')


def inline_symbol(pre):
    vb, body = B.symbol_only(pal.LOGO["color-light"], pre)
    return f'<svg viewBox="{" ".join(B.f2(v) for v in vb)}" aria-hidden="true">{themed(body)}</svg>'


def inline_wordmark(pre, gold=True):
    vb, body = B.wordmark_only(pal.LOGO["color-light"], pre)
    body = themed(body)
    if not gold:
        body = body.replace('class="fc"', 'class="fi"')
    return f'<svg viewBox="{" ".join(B.f2(v) for v in vb)}" aria-hidden="true">{body}</svg>'


def inline_lockup(pre):
    vb, body = B.lockup_h(pal.LOGO["color-light"], pre)
    return f'<svg viewBox="{" ".join(B.f2(v) for v in vb)}" aria-hidden="true">{themed(body)}</svg>'


# ---------------------------------------------------------------- assets
COPY_DIRS = ["logo", "app", "favicon", "social", "iconography", "3d", os.path.join("motion", "svg")]


def copy_assets():
    for d in COPY_DIRS + ["fonts", "colors", "css", "js"]:
        p = os.path.join(ASSETS, d)
        if os.path.isdir(p):
            shutil.rmtree(p)
    for d in COPY_DIRS:
        shutil.copytree(os.path.join(BRAND, d), os.path.join(ASSETS, d), ignore=shutil.ignore_patterns("*.md"))
    os.makedirs(os.path.join(ASSETS, "colors"))
    for f in ("tokens.json", "tokens.css"):
        shutil.copy(os.path.join(BRAND, "colors", f), os.path.join(ASSETS, "colors", f))
    shutil.copytree(os.path.join(BRAND, "typography", "fonts"), os.path.join(ASSETS, "fonts"))
    os.makedirs(os.path.join(ASSETS, "css"))
    os.makedirs(os.path.join(ASSETS, "js"))
    fonts_css = open(os.path.join(BRAND, "typography", "fonts.css"), encoding="utf-8").read().replace("url(./fonts/", "url(../fonts/")
    with open(os.path.join(ASSETS, "css", "fonts.css"), "w", encoding="utf-8", newline="\n") as fh:
        fh.write(fonts_css)
    shutil.copy(os.path.join(BRAND, "colors", "tokens.css"), os.path.join(ASSETS, "css", "tokens.css"))
    shutil.copy(os.path.join(BRAND, "motion", "reference", "tilo-motion.css"), os.path.join(ASSETS, "css", "tilo-motion.css"))
    shutil.copy(os.path.join(BRAND, "motion", "reference", "tilo-motion.js"), os.path.join(ASSETS, "js", "tilo-motion.js"))
    for f in ("brand.css",):
        shutil.copy(os.path.join(HERE, "web", f), os.path.join(ASSETS, "css", f))
    for f in ("theme.js", "brand.js"):
        shutil.copy(os.path.join(HERE, "web", f), os.path.join(ASSETS, "js", f))


def make_zip():
    z = os.path.join(ASSETS, "tilo-brand-kit.zip")
    with zipfile.ZipFile(z, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for dp, dn, fn in os.walk(BRAND):
            dn[:] = sorted(d for d in dn if d != "__pycache__")
            for f in sorted(fn):
                p = os.path.join(dp, f)
                zf.write(p, os.path.join("tilo-brand", os.path.relpath(p, BRAND)))
        for lic in ("CC-BY-4.0.txt", "Apache-2.0.txt", "OFL-1.1.txt"):
            zf.write(os.path.join(ROOT, "LICENSES", lic), os.path.join("tilo-brand", "LICENSES", lic))
    return os.path.getsize(z)


def human(n):
    return f"{n/1024/1024:.1f} MB" if n > 1024 * 1024 else (f"{n/1024:.0f} KB" if n > 1024 else f"{n} B")


def fsize(rel):
    p = os.path.join(BRAND, rel)
    return human(os.path.getsize(p)) if os.path.exists(p) else ""


# ---------------------------------------------------------------- page sections
def sec(id_, title, lead, inner, cls=""):
    lead_html = f'<p class="lead">{e(lead)}</p>' if lead else ""
    return (f'<section id="{id_}" class="sec {cls}" aria-labelledby="{id_}-h"><div class="wrap">'
            f'<header class="sec-h"><h2 id="{id_}-h">{e(title)}</h2>{lead_html}</header>{inner}</div></section>')


def s_hero(t, kit_size):
    return f'''<section class="hero" aria-labelledby="hero-h"><div class="wrap hero-grid">
<div class="hero-copy"><p class="eyebrow">{e(t["hero_eyebrow"])}</p><h1 id="hero-h">{e(t["hero_h1"])}</h1><p class="lead">{e(t["hero_lead"])}</p>
<div class="actions"><a class="btn primary" href="{A}/tilo-brand-kit.zip" download>{icon("download")}{e(t["btn_kit"])}</a>
<button type="button" class="btn" data-replay="hero">{icon("replay")}{e(t["btn_replay"])}</button></div>
<p class="fine">{e(t["kit_note"])} &middot; {kit_size}</p></div>
<div class="hero-stage" id="hero">{hero_svg()}</div></div></section>'''


def icon(name):
    paths = {"download": '<path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14"/>',
             "replay": '<path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/>',
             "copy": '<rect x="8.5" y="8.5" width="11" height="11" rx="2.5"/><path d="M15.5 5.5V5a1.5 1.5 0 0 0-1.5-1.5H6A2.5 2.5 0 0 0 3.5 6v8A1.5 1.5 0 0 0 5 15.5h.5"/>',
             "theme": '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" stroke="none"/>',
             "check": '<path d="M5 12.5l4.5 4.5L19 7.5"/>', "cross": '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
             "arrow": '<path d="M5 12h14m0 0l-5.5-5.5M19 12l-5.5 5.5"/>'}
    return (f'<svg class="i" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" '
            f'stroke-linecap="round" stroke-linejoin="round">{paths[name]}</svg>')


def s_system(t):
    geo_items = "".join(f'<li><b>{e(a)}</b><span>{e(b)}</span></li>' for a, b in t["geo"])
    return sec("system", t["sys_h"], t["sys_lead"], f'''
<div class="sys">
 <article class="card sys-card"><div class="sys-art">{inline_symbol("s1-")}</div>
  <p class="tag">{e(t["s01_tag"])}</p><h3>{e(t["s01_name"])}</h3><p>{e(t["s01_p"])}</p><p class="uses">{e(t["s01_uses"])}</p></article>
 <article class="card sys-card"><div class="sys-art">{inline_wordmark("s5-")}</div>
  <p class="tag">{e(t["s05_tag"])}</p><h3>{e(t["s05_name"])}</h3><p>{e(t["s05_p"])}</p><p class="uses">{e(t["s05_uses"])}</p></article>
</div>
<div class="card equation" aria-label="{e(t["main_logo"])}">
 <div class="eq-part">{inline_symbol("e1-")}</div><span class="eq-op" aria-hidden="true">{t["plus"]}</span>
 <div class="eq-part eq-wm">{inline_wordmark("e5-", gold=False)}</div><span class="eq-op" aria-hidden="true">{t["equals"]}</span>
 <div class="eq-part eq-lk">{inline_lockup("e0-")}<span class="cap">{e(t["main_logo"])}</span></div>
</div>
<div class="split">
 <div class="card fix"><h3>{e(t["fix_h"])}</h3><p>{e(t["fix_p"])}</p>
  <div class="fix-row"><figure><img src="{A}/logo/misuse/tilo-dont-monogram-alone.svg" alt="" width="300" height="190" loading="lazy"><figcaption>{icon("cross")}{e(t["retired"])}</figcaption></figure>
  <figure><img src="{A}/logo/wordmark/tilo-wordmark-color-light.svg" alt="tilo" width="300" height="130" loading="lazy" class="pad-img"><figcaption class="ok">{icon("check")}{e(t["now"])}</figcaption></figure></div></div>
 <div class="card"><h3>{e(t["geo_h"])}</h3><ul class="geo">{geo_items}</ul></div>
</div>''')


def s_lockups(t):
    tabs = "".join(f'<button type="button" role="tab" aria-selected="{str(i == 0).lower()}" data-cw="{cw}">{e(t["cw"][cw])}</button>'
                   for i, cw in enumerate(B.COLOURWAYS))
    cards = []
    for item in B.ITEMS:
        base = f"{A}/logo/{item}/tilo-{item}-color-light"
        cards.append(f'''<figure class="lk-card lk-{item}" data-item="{item}"><div class="lk-art cw-color-light"><img src="{base}.svg" alt="{e(t["items"][item])}" loading="lazy"></div>
<figcaption><span><b>{e(t["items"][item])}</b><small>{e(t["item_use"][item])}</small></span>
<span class="dl"><a href="{base}.svg" download data-ext="svg">SVG</a><a href="{base}.png" download data-ext="png">PNG</a></span></figcaption></figure>''')
    return sec("lockups", t["lk_h"], t["lk_lead"], f'<div class="tabs" role="tablist" aria-label="{e(t["lk_h"])}">{tabs}</div><div class="lk-grid" id="lk-grid">{"".join(cards)}</div>')


def s_space(t):
    rows = "".join(f'<tr><td>{e(t["items"][m[0]])}</td><td>{m[2]} px</td><td>{m[3]} mm</td></tr>' for m in B.MIN_SIZES)
    return sec("space", t["space_h"], t["space_p"], f'''<div class="split">
<figure class="card plain cs"><img src="{A}/logo/construction/tilo-clear-space.svg" alt="" loading="lazy" class="w100"></figure>
<div class="card"><table class="tbl"><thead><tr>{"".join(f"<th>{e(h)}</th>" for h in t["min_th"])}</tr></thead><tbody>{rows}</tbody></table>
<figure class="minsz"><img src="{A}/logo/construction/tilo-minimum-size.svg" alt="" loading="lazy"></figure></div></div>''')


def s_cons(t):
    return sec("construction", t["cons_h"], t["cons_p"], f'<figure class="card plain cons"><img src="{A}/logo/construction/tilo-construction.svg" alt="" loading="lazy" class="w100"></figure>')


def s_color(t):
    S = pal.SCALES
    big = []
    for scale, name, use, step in t["roles"]:
        hx = S[scale][step]
        dark_txt = pal.cr("#FFFFFF", hx) < pal.cr("#15171C", hx)
        r = pal.cr(hx, pal.LIGHT["bg"])
        if r < 1.2:  # the background itself: show what text on it scores
            r = pal.cr(pal.LIGHT["text"], hx)
        big.append(f'''<button type="button" class="sw-big{' on-light' if dark_txt else ''}" data-copy="{hx}" style="background:{hx}">
<span class="sw-name">{e(name)}</span><span class="sw-hex">{hx}</span><span class="sw-use">{e(use)}</span><span class="sw-cr">{r:.2f}:1 &middot; {pal.grade(r)}</span></button>''')
    rows = []
    for sc, vals in S.items():
        chips = "".join(f'<button type="button" class="chip" data-copy="{hx}" style="background:{hx}" aria-label="{sc} {st} {hx}"><span class="{"dk" if pal.cr("#15171C", hx) > pal.cr("#FFFFFF", hx) else "lt"}">{st}</span></button>'
                        for st, hx in vals.items())
        rows.append(f'<div class="scale"><span class="sc-name">{sc}</span><div class="chips">{chips}</div></div>')
    crs = []
    for n_, fg, bg, u in pal.PAIRS:
        r = pal.cr(fg, bg)
        g = pal.grade(r)
        gcls = "g-aaa" if r >= 7 else "g-aa" if r >= 4.5 else "g-ui" if r >= 3 else "g-no"
        crs.append(f'<tr><td>{e(n_)}</td><td><span class="cr-sample" style="background:{bg};color:{fg}">Aa</span> <code>{fg}</code> / <code>{bg}</code></td>'
                   f'<td class="num">{r:.2f}:1</td><td><span class="grade {gcls}">{g}</span></td><td>{e(u)}</td></tr>')
    th = "".join(f"<th>{e(h)}</th>" for h in t["contrast_th"])
    return sec("color", t["col_h"], t["col_lead"], f'''<div class="sw-row">{"".join(big)}</div>
<h3 class="sub">{e(t["scales_h"])}</h3><div class="scales">{"".join(rows)}</div>
<h3 class="sub">{e(t["contrast_h"])}</h3><div class="tbl-wrap"><table class="tbl contrast"><thead><tr>{th}</tr></thead><tbody>{"".join(crs)}</tbody></table></div>
<p class="fine"><a href="{A}/colors/tokens.json" download>tokens.json</a> &middot; <a href="{A}/colors/tokens.css" download>tokens.css</a></p>''')


def s_type(t):
    latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789"
    uz = "Oʻ oʻ Gʻ gʻ Sh sh Ch ch Ng ng ʼ ‘ ’"
    cyr = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ Ўў Ққ Ғғ Ҳҳ"
    scale = "".join(f'<li class="ts ts-{k}"><span class="ts-k">{k}</span><span class="ts-s" lang="{t["lang"]}">{e(t["spec_line"])}</span><span class="ts-v">{v["weight"]} &middot; {e(v["size"].split(",")[-1].strip(" )") if "clamp" in v["size"] else v["size"])}</span></li>'
                    for k, v in B.TYPE_SCALE)
    return sec("type", t["type_h"], t["type_lead"], f'''<div class="split type">
<article class="card spec spec-onest"><p class="tag">Onest &middot; {e(t["onest_role"])}</p><p class="aa" aria-hidden="true">Aa Жж</p>
<p class="glyphs">{latin}</p><p class="glyphs uzx" lang="uz">{uz}</p><p class="glyphs" lang="ru">{cyr}</p>
<p class="specline" lang="uz">{e(t["spec_uz"])}</p><p class="specline" lang="ru">{e(t["spec_ru"])}</p>
<p class="fine"><a href="{A}/fonts/Onest-OFL.txt">SIL OFL 1.1</a></p></article>
<article class="card spec spec-inter"><p class="tag">Inter &middot; {e(t["inter_role"])}</p><p class="aa" aria-hidden="true">Aa Жж</p>
<div class="caption-demo" aria-label="{e(t["caption_h"])}"><div class="cd-video"><span class="cd-pip">{icon_svg_inline("sign")}<small>{e(t["caption_label"])}</small></span>
<span class="cd-live"><i></i>LIVE</span></div>
<p class="cd-bar"><span lang="uz">{e(t["spec_uz"])}</span><span lang="ru">{e(t["spec_ru"])}</span><b class="cd-cursor" aria-hidden="true"></b></p></div>
<p class="fine">{e(t["caption_note"])} <a href="{A}/fonts/Inter-OFL.txt">SIL OFL 1.1</a></p></article></div>
<h3 class="sub">{e(t["scale_h"])}</h3><ul class="tscale">{scale}</ul>''')


def icon_svg_inline(name):
    label, d, dots = B.ICONS[name]
    dd = "".join(f'<circle cx="{x}" cy="{y}" r="{r}" class="idot"/>' for x, y, r in dots)
    return (f'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" '
            f'stroke-linecap="round" stroke-linejoin="round">{d}{dd}</svg>')


def s_motion(t):
    cards = []
    for st, label, dur, ease, _ in B.MOTION_STATES:
        name, desc = t["states"][st]
        cards.append(f'''<article class="card mo" data-mo="{st}"><div class="mo-stage">{motion_symbol(st)}</div>
<div class="mo-meta"><h3>{e(name)}</h3><p>{e(desc)}</p><p class="mo-spec"><code>{e(dur)}</code> <code>{e(ease)}</code></p></div>
<div class="mo-act"><button type="button" class="btn sm" data-play="{st}" aria-label="{e(t["play"])}: {e(name)}">{icon("replay")}{e(t["play"])}</button>
<a class="lnk" href="{A}/motion/svg/tilo-motion-{st}.svg" download>SVG</a></div></article>''')
    return sec("motion", t["mot_h"], t["mot_lead"], f'<div class="mo-grid">{"".join(cards)}</div><p class="fine note">{e(t["reduced"])} '
               f'<a href="{A}/js/tilo-motion.js" download>tilo-motion.js</a> &middot; <a href="{A}/css/tilo-motion.css" download>tilo-motion.css</a></p>')


def s_apps(t):
    apps = [f'<span class="app ghost"><i class="g{i % 6}"></i><b></b></span>' for i in range(15)]
    apps.insert(5, f'<span class="app me"><img src="{A}/app/tilo-app-icon-rounded-1024.png" alt="" width="58" height="58"><b>Tilo</b></span>')
    phone = (f'<div class="phone" aria-hidden="true"><div class="scr"><div class="sb"><b>9:41</b><i></i></div><div class="ph-home">'
             + "".join(apps) + '</div><div class="dock"><i></i><i></i><i></i><i></i></div></div></div>')
    masks = "".join(f'<figure class="mask m-{m}"><div class="ad"><img src="{A}/app/tilo-android-adaptive-background-432.png" alt=""><img src="{A}/app/tilo-android-adaptive-foreground-432.png" alt=""></div></figure>'
                    for m in ("circle", "squircle", "drop"))
    favs = "".join(f'<figure><img src="{A}/favicon/favicon-{s}.png" width="{s}" height="{s}" alt=""><figcaption>{s}</figcaption></figure>' for s in (16, 32, 48))
    return sec("apps", t["apps_h"], t["apps_lead"], f'''<div class="apps">
<div class="card phone-card">{phone}</div>
<div class="apps-side">
 <div class="card"><p class="tag">{e(t["ios"])}</p><div class="ios-row"><img src="{A}/app/tilo-app-icon-rounded-1024.png" alt="" class="ios-big" loading="lazy"><img src="{A}/app/tilo-app-icon-rounded-1024.png" alt="" class="ios-sm" loading="lazy"><img src="{A}/app/tilo-app-icon-rounded-1024.png" alt="" class="ios-xs" loading="lazy"></div></div>
 <div class="card"><p class="tag">{e(t["android"])} &middot; {e(t["pwa"])}</p><div class="masks">{masks}</div></div>
 <div class="card"><p class="tag">{e(t["fav_h"])}</p><div class="favs">{favs}<figure class="zoom"><img src="{A}/favicon/favicon-16.png" width="96" height="96" alt=""><figcaption>16 &times; 6</figcaption></figure></div>
  <div class="tabbar" aria-hidden="true"><span class="tab"><img src="{A}/favicon/favicon-32.png" width="16" height="16" alt="">{e(t["tab_title"])}<i>&times;</i></span><span class="tab dim"></span></div></div>
</div></div>''')


def s_social(t):
    lang = t["lang"]
    return sec("social", t["soc_h"], t["soc_lead"], f'''<div class="soc">
<div class="card msg"><div class="msg-bubble"><b>{e(t["msg_from"])}</b><p>{e(t["msg_text"])}</p>
<div class="msg-link"><img src="{A}/social/tilo-og-1200x630-{lang}.png" alt="" loading="lazy" width="1200" height="630"><b>tilo</b><span>{e(t["desc"])}</span></div></div></div>
<div class="soc-side">
 <figure class="card plain"><img src="{A}/social/tilo-github-social-1280x640.png" alt="" loading="lazy" width="1280" height="640" class="w100"><figcaption>GitHub 1280&times;640</figcaption></figure>
 <figure class="card plain"><img src="{A}/social/tilo-telegram-cover-1280x720.png" alt="" loading="lazy" width="1280" height="720" class="w100"><figcaption>Telegram 1280&times;720</figcaption></figure>
 <figure class="card plain avatars"><img src="{A}/social/tilo-avatar-512.png" alt="" class="av" loading="lazy"><img src="{A}/social/tilo-avatar-512.png" alt="" class="av sq" loading="lazy"><figcaption>Avatar 512</figcaption></figure>
</div></div>''')


def s_icons(t):
    cells = "".join(f'<figure class="icon-cell">{icon_svg_inline(k)}<figcaption>{e(t["icons"][k])}</figcaption><a href="{A}/iconography/icons/tilo-icon-{k}.svg" download aria-label="SVG {e(t["icons"][k])}">SVG</a></figure>'
                    for k in B.ICONS)
    return sec("iconography", t["ico_h"], t["ico_lead"], f'<div class="icon-grid">{cells}</div>')


D3L = {"en": ("extrusion depth", "gap at the joint"), "uz": ("ekstruziya chuqurligi", "tutashuvdagi tirqish"),
       "ru": ("глубина выдавливания", "зазор в стыке")}


def s_3d(t):
    return sec("three-d", t["d3_h"], t["d3_p"], f'''<div class="card d3"><img src="{A}/3d/tilo-symbol-render.png" alt="" loading="lazy" width="720" height="430">
<div><ul class="geo small"><li><b>0.35w</b><span>{D3L[t["lang"]][0]}</span></li><li><b>3</b><span><code>arc-left</code> <code>arc-right</code> <code>dot</code></span></li><li><b>0.5 u</b><span>{D3L[t["lang"]][1]}</span></li></ul>
<a class="btn" href="{A}/3d/tilo-symbol.glb" download>{icon("download")}{e(t["d3_dl"])}</a></div></div>''')


def s_rules(t):
    dos = "".join(f'<li>{icon("check")}<span><b>{e(a)}</b> {e(b)}</span></li>' for a, b in t["do"])
    donts = "".join(f'<figure class="dont"><img src="{A}/logo/misuse/tilo-dont-{k}.svg" alt="" loading="lazy"><figcaption>{icon("cross")}{e(t["dont"][k])}</figcaption></figure>'
                    for k in t["dont"])
    photo = "".join(f"<li>{e(p)}</li>" for p in t["photo"])
    return sec("rules", t["rules_h"], "", f'''<div class="dos card"><ul class="do-list">{dos}</ul>
<div class="do-art"><span class="do-l">{inline_lockup("d1-")}</span><span class="do-d">{inline_lockup("d2-")}</span></div></div>
<div class="dont-grid">{donts}</div>
<div class="card"><h3>{e(t["photo_h"])}</h3><ul class="dots">{photo}</ul></div>''')


def s_voice(t):
    ex = json.load(open(os.path.join(BRAND, "guidelines", "voice-examples.json"), encoding="utf-8"))["examples"]
    lang = t["lang"]
    other = "en" if lang != "en" else "uz"
    rows = "".join(f'<tr><th scope="row">{e(t["moments"][x["moment"]])}</th><td><p lang="{lang}">{e(x[lang])}</p><p class="mut" lang="{other}">{e(x[other])}</p></td></tr>' for x in ex)
    is_ = "".join(f"<li>{icon('check')}{e(x)}</li>" for x in t["voice_is"])
    not_ = "".join(f"<li>{icon('cross')}{e(x)}</li>" for x in t["voice_not"])
    return sec("voice", t["voice_h"], t["voice_lead"], f'''<div class="split"><div class="card"><ul class="vlist ok">{is_}</ul><ul class="vlist no">{not_}</ul></div>
<div class="card"><table class="tbl voice"><thead><tr>{"".join(f"<th>{e(h)}</th>" for h in t["voice_th"])}</tr></thead><tbody>{rows}</tbody></table></div></div>''')


def s_a11y(t):
    items = "".join(f'<li class="card"><h3>{e(a)}</h3><p>{e(b)}</p></li>' for a, b in t["a11y"])
    return sec("a11y", t["a11y_h"], t["a11y_lead"], f'<ul class="a11y">{items}</ul>')


def s_downloads(t, kit_size):
    man = json.load(open(os.path.join(BRAND, "src", "manifest.json"), encoding="utf-8"))
    man += [dict(path="3d/tilo-symbol.glb", kind="d3", desc="glTF binary"), dict(path="3d/tilo-symbol-render.png", kind="d3", desc="Render")]
    for sub in ("latin", "latin-ext", "cyrillic", "cyrillic-ext"):
        for fam in ("onest", "inter"):
            man.append(dict(path=f"typography/fonts/{fam}-{sub}-wght-normal.woff2", kind="fonts", desc=f"{fam.title()} {sub}"))
    man += [dict(path="typography/fonts/Onest-OFL.txt", kind="fonts", desc="Onest licence"), dict(path="typography/fonts/Inter-OFL.txt", kind="fonts", desc="Inter licence")]
    groups = {}
    for m in man:
        k = m["kind"]
        if k in ("motion",) and "/reference/" in m["path"] and not m["path"].endswith((".css", ".js")):
            continue
        groups.setdefault(k, []).append(m)
    order = ["logo", "app", "favicon", "social", "motion", "icon", "tokens", "guide", "misuse", "d3", "fonts"]
    out = []
    for k in order:
        if k not in groups:
            continue
        lis = []
        for m in sorted(groups[k], key=lambda m: m["path"]):
            p = m["path"]
            href = site_href(p)
            lis.append(f'<li><a href="{href}" download>{e(p.split("/")[-1])}</a><span>{fsize(p)}</span></li>')
        out.append(f'<details class="dl-group card"{" open" if k == "logo" else ""}><summary><b>{e(t["groups"][k])}</b><span>{len(lis)}</span></summary><ul>{"".join(lis)}</ul></details>')
    return sec("downloads", t["dl_h"], t["dl_lead"], f'''<a class="card kit" href="{A}/tilo-brand-kit.zip" download>{icon("download")}<span><b>tilo-brand-kit.zip</b><small>{e(t["kit_note"])} &middot; {kit_size}</small></span>{icon("arrow")}</a>
<div class="dl-groups">{"".join(out)}</div>
<div class="card lic"><h3>{e(t["lic_h"])}</h3><p>{e(t["lic_p"])}</p><p><a href="{REPO}">{e(t["source"])}</a></p></div>''')


def site_href(p):
    if p.startswith("typography/fonts/"):
        return f"{A}/fonts/{p.split('/')[-1]}"
    if p.startswith("motion/reference/"):
        f = p.split("/")[-1]
        return f"{A}/{'js' if f.endswith('.js') else 'css'}/{f}"
    return f"{A}/{p}"


# ---------------------------------------------------------------- page
def page(lang, kit_size):
    t = T[lang]
    nav = "".join(f'<a href="#{i}">{e(n)}</a>' for i, n in t["nav"])
    langs = "".join(f'<a href="{u}" hreflang="{l}" lang="{l}"{" aria-current=\"page\"" if l == lang else ""}>{l.upper()}</a>' for l, u in LANGS.items())
    alt = "".join(f'<link rel="alternate" hreflang="{l}" href="{u}">' for l, u in LANGS.items())
    body = "".join([s_hero(t, kit_size), s_system(t), s_lockups(t), s_space(t), s_cons(t), s_color(t), s_type(t), s_motion(t),
                    s_apps(t), s_social(t), s_icons(t), s_3d(t), s_rules(t), s_voice(t), s_a11y(t), s_downloads(t, kit_size)])
    return f'''<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(t["title"])}</title>
<meta name="description" content="{e(t["desc"])}">
<meta name="theme-color" content="#F7F5F0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#101214" media="(prefers-color-scheme: dark)">
<meta property="og:title" content="{e(t["title"])}">
<meta property="og:description" content="{e(t["desc"])}">
<meta property="og:image" content="{A}/social/tilo-og-1200x630-{lang}.png">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
{alt}
<link rel="icon" href="{A}/favicon/favicon.svg" type="image/svg+xml">
<link rel="icon" href="{A}/favicon/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="{A}/favicon/apple-touch-icon-180.png">
<link rel="preload" href="{A}/fonts/onest-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{A}/css/fonts.css">
<link rel="stylesheet" href="{A}/css/tokens.css">
<link rel="stylesheet" href="{A}/css/tilo-motion.css">
<link rel="stylesheet" href="{A}/css/brand.css">
<script src="{A}/js/theme.js"></script>
</head>
<body>
<a class="skip" href="#main">{e(t["skip"])}</a>
<header class="top"><div class="wrap top-in">
<a class="home" href="{HOME[lang]}" aria-label="{e(t["home"])}">{inline_lockup("h-")}</a>
<span class="crumb" aria-hidden="true">/ brand</span>
<nav class="nav" aria-label="{e(t["menu"])}">{nav}</nav>
<div class="tools"><nav class="langs" aria-label="Language">{langs}</nav>
<button type="button" class="btn icon-btn" id="theme-toggle" aria-label="{e(t["theme"])}" title="{e(t["theme"])}">{icon("theme")}</button></div>
</div></header>
<main id="main">
{body}
</main>
<footer class="foot"><div class="wrap foot-in"><span class="foot-logo">{inline_symbol("f-")}</span><p>{e(t["made"])} <a href="{HOME[lang]}">{e(t["home"])}</a> &middot; <a href="{REPO}">GitHub</a></p></div></footer>
<div class="toast" id="toast" role="status" aria-live="polite" data-copied="{e(t["copied"])}"></div>
<script src="{A}/js/tilo-motion.js"></script>
<script src="{A}/js/brand.js"></script>
</body>
</html>
'''


def main():
    os.makedirs(ASSETS, exist_ok=True)
    copy_assets()
    kit = human(make_zip())
    for lang, url in LANGS.items():
        out = os.path.join(SITE, url.strip("/").replace("/", os.sep), "index.html")
        os.makedirs(os.path.dirname(out), exist_ok=True)
        with open(out, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(page(lang, kit))
        print("wrote", out)
    print("kit", kit)


if __name__ == "__main__":
    main()
