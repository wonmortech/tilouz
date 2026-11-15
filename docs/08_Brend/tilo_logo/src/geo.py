"""Tilo mark geometry. All shapes are exact circle arcs + lines (SVG A/L commands).
Each builder returns parts: list of (id, d, fill_key) and sample points for bbox."""
import math

PI = math.pi


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
            for i in range(41):
                a = a0 + (a1 - a0) * i / 40
                self.pts.append((c[0] + r * math.cos(a), c[1] + r * math.sin(a)))
        return self

    def Z(self):
        self.d.append("Z"); return self

    def path(self):
        return "".join(self.d)


def pt(c, r, a):
    return (c[0] + r * math.cos(a), c[1] + r * math.sin(a))


def sector(c, R, w, a0, a1, cap0=True, cap1=True, tab=0.0):
    """Annular sector along centerline R, travelling clockwise (screen) from a0 to a1."""
    ro, ri, h = R + w / 2, R - w / 2, w / 2
    s = Shape()
    large = 1 if (a1 - a0) > PI else 0
    s.M(*pt(c, ro, a0))
    s.A(ro, large, 1, *pt(c, ro, a1), c=c, a0=a0, a1=a1)
    e = pt(c, R, a1)
    if cap1:
        s.A(h, 0, 1, *pt(c, ri, a1), c=e, a0=a1, a1=a1 + PI)
    else:
        if tab:  # hidden overlap tab under the next part: kills the anti-alias seam
            tx_, ty_ = -math.sin(a1) * tab, math.cos(a1) * tab
            po, pi_ = pt(c, ro, a1), pt(c, ri, a1)
            s.L(po[0] + tx_, po[1] + ty_).L(pi_[0] + tx_, pi_[1] + ty_)
        s.L(*pt(c, ri, a1))
    s.A(ri, large, 0, *pt(c, ri, a0), c=c, a0=a1, a1=a0)
    b = pt(c, R, a0)
    if cap0:
        s.A(h, 0, 1, *pt(c, ro, a0), c=b, a0=a0 + PI, a1=a0 + 2 * PI)
    s.Z()
    return s


def circle(cx, cy, r):
    s = Shape()
    s.M(cx - r, cy).A(r, 0, 1, cx + r, cy, c=(cx, cy), a0=PI, a1=2 * PI).A(r, 0, 1, cx - r, cy, c=(cx, cy), a0=0, a1=PI).Z()
    return s


def rot180(s, cx, cy):
    """Point-reflect a shape (orientation preserved => sweep flags unchanged)."""
    out = Shape()
    import re
    toks = re.findall(r"[MLAZ][^MLAZ]*", s.path())
    for t in toks:
        k, rest = t[0], t[1:].split()
        if k in "ML":
            x, y = float(rest[0]), float(rest[1])
            getattr(out, k)(2 * cx - x, 2 * cy - y)
        elif k == "A":
            r, _, _, lg, sw, x, y = rest
            out.d.append(f"A{r} {r} 0 {lg} {sw} {P(2*cx-float(x), 2*cy-float(y))}")
        else:
            out.Z()
    out.pts = [(2 * cx - x, 2 * cy - y) for x, y in s.pts]
    return out


def bbox(shapes):
    xs = [p[0] for s in shapes for p in s.pts]
    ys = [p[1] for s in shapes for p in s.pts]
    return min(xs), min(ys), max(xs), max(ys)


def shift(s, dx, dy):
    import re
    out = Shape()
    for t in re.findall(r"[MLAZ][^MLAZ]*", s.path()):
        k, rest = t[0], t[1:].split()
        if k in "ML":
            getattr(out, k)(float(rest[0]) + dx, float(rest[1]) + dy)
        elif k == "A":
            r, _, _, lg, sw, x, y = rest
            out.d.append(f"A{r} {r} 0 {lg} {sw} {P(float(x)+dx, float(y)+dy)}")
        else:
            out.Z()
    out.pts = [(x + dx, y + dy) for x, y in s.pts]
    return out


def center(parts, opt_dx=0, opt_dy=0, cx=256, cy=256):
    x0, y0, x1, y1 = bbox([s for _, s, _ in parts])
    dx = cx - (x0 + x1) / 2 + opt_dx
    dy = cy - (y0 + y1) / 2 + opt_dy
    return [(i, shift(s, dx, dy), f) for i, s, f in parts], (dx, dy)


# ---------------------------------------------------------------- variants

def v1():
    """Geometric: counter diameter = phi * stroke  (96 / 60 = 1.6)."""
    R, w, cy = 78, 60, 256
    lc, rc = (256 - R, cy), (256 + R, cy)
    left = sector(lc, R, w, PI, 2 * PI, cap0=True, cap1=False, tab=1.5)
    right = sector(rc, R, w, 0, PI, cap0=True, cap1=False)
    r = 32  # 1.07 x half-stroke: optical compensation for a free circle
    tx = 256 + 3 * R
    dot = circle(tx, cy - w / 2 - w / 2 - r, r)  # gap = half stroke
    parts = [("arc-left", left, "a"), ("arc-right", right, "b"), ("dot", dot, "c")]
    parts, off = center(parts, opt_dx=-6)
    meta = rig(off, R=R, w=w, r=r, lc=lc, rc=rc, J=(256, cy), band=(cy - R - w / 2, cy + R + w / 2),
               cons=[(lc, [R + w / 2, R, R - w / 2]), (rc, [R + w / 2, R, R - w / 2])],
               note="R 78 · w 60 · ichki diametr 96 = 1.6w (~phi) · nuqta r32 · oraliq w/2")
    return parts, meta


def crescent_left(c, Ro, Wj, Wt, cy):
    cxi = ((c + Ro - Wj) + (c - Ro + Wt)) / 2
    ri = ((c + Ro - Wj) - (c - Ro + Wt)) / 2
    s = Shape()
    s.M(c - Ro, cy)
    s.A(Ro, 0, 1, c + Ro, cy, c=(c, cy), a0=PI, a1=2 * PI)
    s.L(c + Ro, cy + 1.5).L(c + Ro - Wj, cy + 1.5).L(c + Ro - Wj, cy)
    s.A(ri, 0, 0, c - Ro + Wt, cy, c=(cxi, cy), a0=2 * PI, a1=PI)
    tcx = c - Ro + Wt / 2
    s.A(Wt / 2, 0, 1, c - Ro, cy, c=(tcx, cy), a0=0, a1=PI)
    s.Z()
    return s, cxi, ri


def v2():
    """Calligraphic: two crescents (offset circles). Width 18 -> 44 -> 70 (joint) -> 44 -> 18."""
    cy, c, Ro, Wj, Wt = 256, 160, 106, 70, 18
    left, cxi, ri = crescent_left(c, Ro, Wj, Wt, cy)
    jx = c + Ro - Wj / 2
    right = rot180(left, jx, cy)
    tcx = 2 * jx - (c - Ro + Wt / 2)
    r = 31
    dot = circle(tcx, cy - Wt / 2 - 40 - r, r)
    parts = [("arc-left", left, "a"), ("arc-right", right, "a"), ("dot", dot, "c")]
    parts, off = center(parts, opt_dx=-8)
    lt = c - Ro + Wt / 2
    mid = ((c + cxi) / 2, cy)
    rmid = (Ro + ri) / 2
    cl = f"M{P(lt, cy)}A{n(rmid)} {n(rmid)} 0 0 1 {P(jx, cy)}A{n(rmid)} {n(rmid)} 0 0 0 {P(tcx, cy)}"
    meta = rig(off, R=(Ro + ri) / 2, w=Wj, r=r, lc=(c, cy), rc=(2 * jx - c, cy), J=(jx, cy), band=(cy - Ro, cy + Ro),
               cons=[((c, cy), [Ro]), ((cxi, cy), [ri]), ((2 * jx - c, cy), [Ro]), ((2 * jx - cxi, cy), [ri])],
               note="ikki aylana: tashqi R106, ichki r62 siljigan · qalinlik 18 > 44 > 70 > 44 > 18")
    meta["centerline"] = (cl, off)
    return parts, meta


def v3():
    """Meeting: two equal half-rings slide towards each other by 0.85 x stroke, so the
    round joint-caps overlap. The lens where they overlap is the third colour (the 'touch')."""
    R, w, cy = 78, 52, 256
    d = 2 * R - 0.85 * w
    lc, rc = (256 - d / 2, cy), (256 + d / 2, cy)
    left = sector(lc, R, w, PI, 2 * PI, True, True)
    right = sector(rc, R, w, 0, PI, True, True)
    r = 28
    tx = rc[0] + R
    dot = circle(tx, cy - w / 2 - w / 2 - r, r)
    parts = [("arc-left", left, "a"), ("arc-right", right, "b"), ("dot", dot, "c")]
    parts, off = center(parts, opt_dx=-6)
    meta = rig(off, R=R, w=w, r=r, lc=lc, rc=rc, J=(256, cy), band=(cy - R - w / 2, cy + R + w / 2),
               cons=[(lc, [R + w / 2, R, R - w / 2]), (rc, [R + w / 2, R, R - w / 2])],
               note="R 78 · w 52 · markazlar orasi 2R - 0.85w = 111.8 · kesishma = uchinchi rang")
    return parts, meta


def line_circle(p0, th, c, r, prefer):
    ux, uy = math.cos(th), math.sin(th)
    fx, fy = p0[0] - c[0], p0[1] - c[1]
    b = fx * ux + fy * uy
    cc = fx * fx + fy * fy - r * r
    disc = b * b - cc
    ts = [-b + math.sqrt(disc), -b - math.sqrt(disc)]
    cands = [(p0[0] + t * ux, p0[1] + t * uy) for t in ts]
    return min(cands, key=lambda q: (q[0] - prefer[0]) ** 2 + (q[1] - prefer[1]) ** 2)


def v4(theta_deg=0, gap=10):
    """Ribbon: heavy band, every end is a straight cut at the same angle; halves split by a cut."""
    R, w, cy = 76, 84, 256
    ro, ri = R + w / 2, R - w / 2
    th = math.radians(theta_deg)
    lc = (256 - R, cy)
    nx, ny = -math.sin(th), math.cos(th)  # normal of cut line
    # left terminal cut through centreline point
    pL = (lc[0] - R, cy)
    # joint cut, shifted up by gap/2
    pJ = (256 - nx * gap / 2, cy - ny * gap / 2)
    A_ = line_circle(pL, th, lc, ro, (lc[0] - ro, cy))
    D_ = line_circle(pL, th, lc, ri, (lc[0] - ri, cy))
    B_ = line_circle(pJ, th, lc, ro, (lc[0] + ro, cy))
    C_ = line_circle(pJ, th, lc, ri, (lc[0] + ri, cy))
    ang = lambda q: math.atan2(q[1] - cy, q[0] - lc[0]) % (2 * PI)
    aA, aB = ang(A_), ang(B_) + 2 * PI
    aD, aC = ang(D_), ang(C_) + 2 * PI
    s = Shape()
    s.M(*A_)
    s.A(ro, 1 if aB - aA > PI else 0, 1, *B_, c=lc, a0=aA, a1=aB)
    s.L(*C_)
    s.A(ri, 1 if aC - aD > PI else 0, 0, *D_, c=lc, a0=aC, a1=aD)
    s.Z()
    left = s
    right = rot180(left, 256, cy)
    r = 46
    tx = 256 + 2 * R
    dot = circle(tx, cy - gap / 2 - 26 - r, r)
    parts = [("arc-left", left, "a"), ("arc-right", right, "b"), ("dot", dot, "c")]
    parts, off = center(parts, opt_dx=-6)
    return parts, rig(off, R=R, w=w, r=r, lc=lc, rc=(256 + R, cy), J=(256, cy), band=(cy - R - w / 2, cy + R + w / 2),
                      cons=[(lc, [R + w / 2, R - w / 2]), ((256 + R, cy), [R + w / 2, R - w / 2])],
                      note="R 76 · w 84 (= 1.1R) · hamma uch to'g'ri kesim · kesim oralig'i 10 · nuqta r46")


def v5():
    """Wave flows into an 'i': the right half rises into a stem, the dot is the i-dot."""
    R, w, cy = 70, 54, 256
    lc, rc = (256 - R, cy), (256 + R, cy)
    left = sector(lc, R, w, PI, 2 * PI, cap0=True, cap1=False, tab=1.5)
    ro, ri, h = R + w / 2, R - w / 2, w / 2
    rx = rc[0]
    top = cy - R  # cap top lands on hump-top line (cy - R - w/2)
    s = Shape()
    s.M(rx - ro, cy)
    s.A(ro, 0, 0, rx + ro, cy, c=rc, a0=PI, a1=0)
    s.L(rx + ro, top)
    s.A(h, 0, 0, rx + ri, top, c=(rx + R, top), a0=0, a1=-PI)
    s.L(rx + ri, cy)
    s.A(ri, 0, 1, rx - ri, cy, c=rc, a0=0, a1=PI)
    s.Z()
    r = 30
    dot = circle(rx + R, top - h - 0.62 * w - r, r)
    parts = [("arc-left", left, "a"), ("arc-right", s, "b"), ("dot", dot, "c")]
    parts, off = center(parts, opt_dx=-4)
    return parts, rig(off, R=R, w=w, r=r, lc=lc, rc=rc, J=(256, cy), band=(cy - R - w / 2, cy + R + w / 2),
                      cons=[(lc, [R + w / 2, R, R - w / 2]), (rc, [R + w / 2, R, R - w / 2])],
                      note="R 70 · w 54 · ustun tepasi = to'lqin tepasi chizig'i · nuqta r30, oraliq 0.62w")


def rig(off, **k):
    dx, dy = off
    sh = lambda p: (p[0] + dx, p[1] + dy)
    k["lc"], k["rc"], k["J"] = sh(k["lc"]), sh(k["rc"]), sh(k["J"])
    k["band"] = (k["band"][0] + dy, k["band"][1] + dy)
    k["cons"] = [(sh(c), rs) for c, rs in k["cons"]]
    k["off"] = off
    return k


VARIANTS = {1: v1, 2: v2, 3: v3, 4: v4, 5: v5}


# ---------------------------------------------------------------- wordmark
def wordmark(H=100, s=20, track=1.0):
    """Custom monoline lowercase 'tilo'. Origin: left edge x=0, baseline y=0.
    Returns list of (id, kind, data) with kind 'stroke' (path d) or 'fill'."""
    h = s / 2
    out = []
    # t
    tx = h
    rh = 24
    t_top = -H * 1.30 + h
    tstem = f"M{P(tx, t_top)}L{P(tx, -h - rh)}A{n(rh)} {n(rh)} 0 0 0 {P(tx + rh, -h)}L{P(tx + rh + 8, -h)}"
    tbar = f"M{P(tx - 20, -H + h)}L{P(tx + 34, -H + h)}"
    out.append(("t", "stroke", tstem + tbar))
    t_right = tx + 34 + h
    # i
    ix = t_right + 0.26 * H * track + h
    out.append(("i", "stroke", f"M{P(ix, -H + h)}L{P(ix, -h)}"))
    rd = s * 0.62
    out.append(("i-dot", "dot", (ix, -H - 0.62 * s - rd, rd)))
    # l
    lx = ix + h + 0.30 * H * track + h
    out.append(("l", "stroke", f"M{P(lx, -H * 1.40 + h)}L{P(lx, -h)}"))
    # o (two halves so it can split into the wave)
    ro_ = H / 2 + 2 - h
    ox = lx + h + 0.24 * H * track + ro_ + h
    oy = -H / 2
    out.append(("o-top", "stroke", f"M{P(ox - ro_, oy)}A{n(ro_)} {n(ro_)} 0 0 1 {P(ox + ro_, oy)}"))
    out.append(("o-bottom", "stroke", f"M{P(ox + ro_, oy)}A{n(ro_)} {n(ro_)} 0 0 1 {P(ox - ro_, oy)}"))
    width = ox + ro_ + h
    return out, width
