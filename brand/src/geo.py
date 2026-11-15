# SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
# SPDX-License-Identifier: Apache-2.0
"""Tilo brand geometry: one construction for the symbol (01 Geometrik) and the
wordmark (05 Monogram, where the wave's right half rises into the i-stem).

Every curve is an exact circle arc (SVG `A`), every straight is a line. No Bezier
approximations, so the files are exact, small, and extrude cleanly to 3D.

Shared rules (the "family"):
  * monoline, round outer terminals, flat joints between the two halves
  * dot diameter = 1.07 x stroke  (a free circle looks smaller than a bar of equal width)
  * dot gap      = 0.5  x stroke  (from the terminal it belongs to)
  * the wave's centre radius R = 1.3 x stroke, so its counter is 1.6 x stroke (~phi)
  * all sizes snap to a 1/8-stroke grid in the symbol (w = 60 -> 7.5 u module)
"""
import math
import re

PI = math.pi

# ---------------------------------------------------------------- symbol constants (512 artboard)
W = 60            # stroke
R = 78            # centre radius = 1.3 W
DOT_R = 32        # 1.067 x W/2
DOT_GAP = W / 2   # 0.5 W
OPT_DX = -6       # optical centring: the dot adds weight top-right, so the mark moves left
ART = 512


def n(v):
    s = f"{v:.2f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


def P(x, y):
    return f"{n(x)} {n(y)}"


class Shape:
    def __init__(self):
        self.d = []
        self.pts = []

    def M(self, x, y):
        self.d.append(f"M{P(x, y)}"); self.pts.append((x, y)); return self

    def L(self, x, y):
        self.d.append(f"L{P(x, y)}"); self.pts.append((x, y)); return self

    def A(self, r, large, sweep, x, y, c=None, a0=None, a1=None):
        self.d.append(f"A{n(r)} {n(r)} 0 {large} {sweep} {P(x, y)}"); self.pts.append((x, y))
        if c is not None:
            for i in range(65):
                a = a0 + (a1 - a0) * i / 64
                self.pts.append((c[0] + r * math.cos(a), c[1] + r * math.sin(a)))
        return self

    def Z(self):
        self.d.append("Z"); return self

    def path(self):
        return "".join(self.d)


def pt(c, r, a):
    return (c[0] + r * math.cos(a), c[1] + r * math.sin(a))


def sector(c, R_, w, a0, a1, cap0=True, cap1=True, tab=0.0):
    """Annular sector along centre radius R_, clockwise on screen from a0 to a1."""
    ro, ri, h = R_ + w / 2, R_ - w / 2, w / 2
    s = Shape()
    large = 1 if (a1 - a0) > PI else 0
    s.M(*pt(c, ro, a0))
    s.A(ro, large, 1, *pt(c, ro, a1), c=c, a0=a0, a1=a1)
    e = pt(c, R_, a1)
    if cap1:
        s.A(h, 0, 1, *pt(c, ri, a1), c=e, a0=a1, a1=a1 + PI)
    else:
        if tab:  # hidden overlap under the next part: removes the anti-alias seam in one-colour use
            tx_, ty_ = -math.sin(a1) * tab, math.cos(a1) * tab
            po, pi_ = pt(c, ro, a1), pt(c, ri, a1)
            s.L(po[0] + tx_, po[1] + ty_).L(pi_[0] + tx_, pi_[1] + ty_)
        s.L(*pt(c, ri, a1))
    s.A(ri, large, 0, *pt(c, ri, a0), c=c, a0=a1, a1=a0)
    b = pt(c, R_, a0)
    if cap0:
        s.A(h, 0, 1, *pt(c, ro, a0), c=b, a0=a0 + PI, a1=a0 + 2 * PI)
    s.Z()
    return s


def circle(cx, cy, r):
    s = Shape()
    s.M(cx - r, cy).A(r, 0, 1, cx + r, cy, c=(cx, cy), a0=PI, a1=2 * PI).A(r, 0, 1, cx - r, cy, c=(cx, cy), a0=0, a1=PI).Z()
    return s


def bbox(shapes):
    xs = [p[0] for s in shapes for p in s.pts]
    ys = [p[1] for s in shapes for p in s.pts]
    return min(xs), min(ys), max(xs), max(ys)


def shift(s, dx, dy):
    out = Shape()
    for t in re.findall(r"[MLAZ][^MLAZ]*", s.path()):
        k, rest = t[0], t[1:].split()
        if k in "ML":
            getattr(out, k)(float(rest[0]) + dx, float(rest[1]) + dy)
        elif k == "A":
            r, _, _, lg, sw, x, y = rest
            out.d.append(f"A{r} {r} 0 {lg} {sw} {P(float(x) + dx, float(y) + dy)}")
        else:
            out.Z()
    out.pts = [(x + dx, y + dy) for x, y in s.pts]
    return out


# ---------------------------------------------------------------- 01 symbol
def symbol():
    """01 Geometrik. Returns (parts, rig). parts = [(id, Shape, colour-role)].
    Roles: 'a' = left half (teal), 'b' = right half (sea), 'c' = dot (gold)."""
    cy = 256
    lc, rc = (256 - R, cy), (256 + R, cy)
    left = sector(lc, R, W, PI, 2 * PI, cap0=True, cap1=False, tab=1.5)
    right = sector(rc, R, W, 0, PI, cap0=True, cap1=False)
    dot = circle(256 + 3 * R, cy - W / 2 - DOT_GAP - DOT_R, DOT_R)
    parts = [("arc-left", left, "a"), ("arc-right", right, "b"), ("dot", dot, "c")]
    x0, y0, x1, y1 = bbox([s for _, s, _ in parts])
    dx = 256 - (x0 + x1) / 2 + OPT_DX
    dy = 256 - (y0 + y1) / 2
    parts = [(i, shift(s, dx, dy), f) for i, s, f in parts]
    sh = lambda p: (p[0] + dx, p[1] + dy)
    dcx, dcy = sh((256 + 3 * R, cy - W / 2 - DOT_GAP - DOT_R))
    rig = dict(R=R, w=W, r=DOT_R, lc=sh(lc), rc=sh(rc), J=sh((256, cy)), dot=(dcx, dcy, DOT_R),
               band=(cy - R - W / 2 + dy, cy + R + W / 2 + dy), off=(dx, dy))
    return parts, rig


# ---------------------------------------------------------------- 05 wordmark
# Units: x-height H = 100, baseline y = 0, outer left edge x = 0.
WM = dict(H=100.0, s=22.0)


def wordmark(H=100.0, s=22.0):
    """Lowercase 'tilo', custom monoline. The t-stem drops into the cup (the symbol's
    right half; its radius is 1.55 x stroke here, wider than the symbol's 1.3, so the
    t-bar has room) and rises as the i-stem; the i-dot is the symbol's dot (same 1.07 / 0.5 ratios).

    Returns dict(parts=[(id, kind, data)], width, metrics). kind: 'stroke' -> path d,
    'dot' -> (cx, cy, r). Stroke parts are drawn with round caps and joins."""
    h = s / 2
    asc = 1.345 * H          # ascender line = l top = i-dot top
    t_top = 1.20 * H         # t is shorter than l (classic geometric proportion)
    Rc = 1.55 * s            # cup centre radius
    bar_l, bar_r = 1.05 * s, 0.95 * s   # t-bar arms measured from the stem centre
    lead = bar_l + h         # t-bar sticks out left of the stem: that's the outer left edge
    tx = lead
    yc = -Rc - h             # cup centre so the cup's outer bottom sits on the baseline
    ix = tx + 2 * Rc
    parts = []
    ti = (f"M{P(tx, -t_top + h)}L{P(tx, yc)}"
          f"A{n(Rc)} {n(Rc)} 0 0 0 {P(ix, yc)}"
          f"L{P(ix, -H + h)}")
    parts.append(("ti", "stroke", ti))
    parts.append(("t-bar", "stroke", f"M{P(tx - bar_l, -H + h)}L{P(tx + bar_r, -H + h)}"))
    rd = 1.07 * h
    dot_cy = -H - 0.5 * s - rd
    parts.append(("i-dot", "dot", (ix, dot_cy, rd)))
    # optical spacing (outer edge to outer edge): straight|straight 0.30H, straight|round 0.22H
    lx = ix + h + 0.30 * H + h
    parts.append(("l", "stroke", f"M{P(lx, -asc + h)}L{P(lx, -h)}"))
    ro = H / 2 + 1.5 - h     # 1.5% overshoot top and bottom
    ox = lx + h + 0.22 * H + ro + h
    oy = -H / 2
    parts.append(("o-top", "stroke", f"M{P(ox - ro, oy)}A{n(ro)} {n(ro)} 0 0 1 {P(ox + ro, oy)}"))
    parts.append(("o-bottom", "stroke", f"M{P(ox + ro, oy)}A{n(ro)} {n(ro)} 0 0 1 {P(ox - ro, oy)}"))
    width = ox + ro + h
    metrics = dict(H=H, s=s, asc=asc, t_top=t_top, Rc=Rc, tx=tx, ix=ix, lx=lx, ox=ox, oy=oy, ro=ro,
                   dot=(ix, dot_cy, rd), top=dot_cy - rd, width=width)
    return dict(parts=parts, width=width, metrics=metrics)
