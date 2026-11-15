# SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
# SPDX-License-Identifier: Apache-2.0
"""Extrude the Tilo symbol to a glTF 2.0 binary (GLB) for three.js / Blender.
Pure Python (no numpy, no trimesh): exact arcs are sampled, ear-clipped and extruded.

    python brand/src/glb.py      ->  brand/3d/tilo-symbol.glb

Model: three nodes (arc-left, arc-right, dot), Y up, 1 unit = 100 artboard units,
centred on the wave's joint. Depth 0.35 w. Joint gap 0.5 u (no z-fighting where the halves meet).
"""
import json
import math
import os
import re
import struct

import geo
import palette as pal

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(HERE), "3d", "tilo-symbol.glb")
UNIT = 100.0
DEPTH = 0.35 * geo.W
GAP = 0.5
SEG = 72  # samples per half turn


def arc_points(x0, y0, r, large, sweep, x1, y1):
    """SVG elliptical arc (circle) endpoint form -> sampled points (excluding start)."""
    dx, dy = (x0 - x1) / 2, (y0 - y1) / 2
    d2 = dx * dx + dy * dy
    r = max(r, math.sqrt(d2))
    f = math.sqrt(max(0.0, (r * r - d2) / d2)) if d2 else 0
    if large == sweep:
        f = -f
    cx, cy = (x0 + x1) / 2 + f * dy, (y0 + y1) / 2 - f * dx
    a0 = math.atan2(y0 - cy, x0 - cx)
    a1 = math.atan2(y1 - cy, x1 - cx)
    da = a1 - a0
    if sweep and da < 0:
        da += 2 * math.pi
    if not sweep and da > 0:
        da -= 2 * math.pi
    n = max(2, int(abs(da) / math.pi * SEG))
    return [(cx + r * math.cos(a0 + da * i / n), cy + r * math.sin(a0 + da * i / n)) for i in range(1, n + 1)]


def path_polygon(d):
    pts, cur = [], None
    for tok in re.findall(r"[MLAZ][^MLAZ]*", d):
        k, a = tok[0], [float(v) for v in tok[1:].split()]
        if k == "M" or k == "L":
            cur = (a[0], a[1])
            pts.append(cur)
        elif k == "A":
            r, _, _, lg, sw, x, y = a
            pts += arc_points(cur[0], cur[1], r, int(lg), int(sw), x, y)
            cur = (x, y)
    clean = []
    for p in pts:
        if not clean or math.dist(p, clean[-1]) > 1e-6:
            clean.append(p)
    if math.dist(clean[0], clean[-1]) < 1e-6:
        clean.pop()
    return clean


def area(poly):
    return sum(poly[i][0] * poly[(i + 1) % len(poly)][1] - poly[(i + 1) % len(poly)][0] * poly[i][1] for i in range(len(poly))) / 2


def earclip(poly):
    """Triangulate a simple CCW polygon. Returns index triples."""
    idx = list(range(len(poly)))
    tris = []

    def inside(p, a, b, c):
        def s(p1, p2, p3):
            return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1])
        d1, d2, d3 = s(p, a, b), s(p, b, c), s(p, c, a)
        return not ((d1 < 0 or d2 < 0 or d3 < 0) and (d1 > 0 or d2 > 0 or d3 > 0))

    guard = 0
    while len(idx) > 3 and guard < 100000:
        guard += 1
        n = len(idx)
        for i in range(n):
            ia, ib, ic = idx[(i - 1) % n], idx[i], idx[(i + 1) % n]
            a, b, c = poly[ia], poly[ib], poly[ic]
            cross = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
            if cross <= 1e-9:
                continue
            if any(inside(poly[j], a, b, c) for j in idx if j not in (ia, ib, ic)):
                continue
            tris.append((ia, ib, ic))
            idx.pop(i)
            break
        else:  # degenerate: drop a vertex
            idx.pop(0)
    if len(idx) == 3:
        tris.append(tuple(idx))
    return tris


def extrude(poly):
    """poly in model XY (Y up), CCW. Returns positions, normals, indices (flat caps, smoothed sides)."""
    if area(poly) < 0:
        poly = poly[::-1]
    P, N, I = [], [], []
    z0, z1 = -DEPTH / UNIT / 2, DEPTH / UNIT / 2
    tris = earclip(poly)
    for z, nz, flip in ((z1, 1, False), (z0, -1, True)):
        base = len(P)
        for x, y in poly:
            P.append((x, y, z)); N.append((0, 0, nz))
        for a, b, c in tris:
            I += [base + a, base + c, base + b] if flip else [base + a, base + b, base + c]
    n = len(poly)
    en = []
    for i in range(n):
        (x0, y0), (x1, y1) = poly[i], poly[(i + 1) % n]
        L = math.hypot(x1 - x0, y1 - y0) or 1
        en.append(((y1 - y0) / L, -(x1 - x0) / L))
    cos_lim = math.cos(math.radians(32))
    for i in range(n):
        j = (i + 1) % n
        def vn(v, e):  # vertex normal for edge e at vertex v: smooth if the neighbour edge is close in angle
            o = (e - 1) % n if v == e else (e + 1) % n
            a, b = en[e], en[o]
            if a[0] * b[0] + a[1] * b[1] > cos_lim:
                x, y = a[0] + b[0], a[1] + b[1]
                L = math.hypot(x, y) or 1
                return (x / L, y / L, 0)
            return (a[0], a[1], 0)
        base = len(P)
        for (x, y), nn in ((poly[i], vn(i, i)), (poly[j], vn(j, i))):
            P.append((x, y, z1)); N.append(nn)
            P.append((x, y, z0)); N.append(nn)
        I += [base, base + 1, base + 3, base, base + 3, base + 2]
    return P, N, I


def main():
    _, rig = geo.symbol()
    dx, dy = rig["off"]
    cy = 256
    lc, rc = (256 - geo.R, cy), (256 + geo.R, cy)
    left = geo.shift(geo.sector(lc, geo.R, geo.W, math.pi, 2 * math.pi, cap0=True, cap1=False, tab=0), dx - GAP / 2, dy)
    right = geo.shift(geo.sector(rc, geo.R, geo.W, 0, math.pi, cap0=True, cap1=False), dx + GAP / 2, dy)
    dot = geo.circle(*rig["dot"])
    jx, jy = rig["J"]
    parts = [("arc-left", left, pal.LIGHT["primary"], 0.0, 0.45), ("arc-right", right, pal.LIGHT["accent"], 0.0, 0.45),
             ("dot", dot, pal.LIGHT["dot"], 1.0, 0.25)]
    bin_ = bytearray()
    views, accs, meshes, nodes, mats = [], [], [], [], []

    def lin(h):
        return [((c / 12.92) if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4) for c in pal.hex2rgb(h)]

    for k, (name, shp, col, metal, rough) in enumerate(parts):
        poly = [((x - jx) / UNIT, -(y - jy) / UNIT) for x, y in path_polygon(shp.path())]
        P, N, I = extrude(poly)
        for data, fmt, target, comp in ((P, "3f", 34962, "VEC3"), (N, "3f", 34962, "VEC3"), (I, "I", 34963, "SCALAR")):
            while len(bin_) % 4:
                bin_.append(0)
            off = len(bin_)
            flat = [v for t in data for v in t] if comp == "VEC3" else data
            bin_ += struct.pack(f"<{len(flat)}{'f' if comp == 'VEC3' else 'I'}", *flat)
            views.append(dict(buffer=0, byteOffset=off, byteLength=len(bin_) - off, target=target))
            acc = dict(bufferView=len(views) - 1, componentType=5126 if comp == "VEC3" else 5125, count=len(data), type=comp)
            if comp == "VEC3" and data is P:
                acc["min"] = [min(p[i] for p in P) for i in range(3)]
                acc["max"] = [max(p[i] for p in P) for i in range(3)]
            accs.append(acc)
        a = len(accs) - 3
        mats.append(dict(name=f"tilo-{name}", pbrMetallicRoughness=dict(baseColorFactor=lin(col) + [1], metallicFactor=metal, roughnessFactor=rough)))
        meshes.append(dict(name=name, primitives=[dict(attributes=dict(POSITION=a, NORMAL=a + 1), indices=a + 2, material=k)]))
        nodes.append(dict(name=name, mesh=k))
    gltf = dict(asset=dict(version="2.0", generator="tilo brand/src/glb.py", copyright="2026 Wonmor and Tilo contributors, CC BY 4.0; Tilo name and logo: see brand/README.md"),
                scene=0, scenes=[dict(name="tilo-symbol", nodes=[len(nodes)])],
                nodes=nodes + [dict(name="tilo-symbol", children=list(range(len(nodes))))],
                meshes=meshes, materials=mats, accessors=accs, bufferViews=views, buffers=[dict(byteLength=len(bin_))])
    js = json.dumps(gltf, separators=(",", ":")).encode()
    js += b" " * ((4 - len(js) % 4) % 4)
    while len(bin_) % 4:
        bin_.append(0)
    total = 12 + 8 + len(js) + 8 + len(bin_)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "wb") as fh:
        fh.write(struct.pack("<III", 0x46546C67, 2, total))
        fh.write(struct.pack("<II", len(js), 0x4E4F534A) + js)
        fh.write(struct.pack("<II", len(bin_), 0x004E4942) + bytes(bin_))
    print("wrote", OUT, total, "bytes", sum(len(m["primitives"]) for m in meshes), "meshes")


if __name__ == "__main__":
    main()
