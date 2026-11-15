// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
//
// Slide animations. Each handler sets the visual state for a step (idempotent), so jumping to any
// #slide.step lands in the right picture. `instant` = reduced motion, ?shot, or a jump.
(function () {
  'use strict';
  var D = window.TiloDeck;
  if (!D) return;
  var G = window.gsap;
  var loops = {};
  function stop(id) { if (loops[id]) { loops[id].forEach(function (l) { l.kill(); }); } loops[id] = []; }
  function keep(id, tw) { (loops[id] = loops[id] || []).push(tw); return tw; }

  // Types text into an element; instant sets the full string.
  function type(el, instant, secs) {
    if (!el) return;
    var full = el.getAttribute('data-full') || '';
    if (instant || !G) { el.textContent = full; return; }
    var o = { n: 0 };
    el.textContent = '';
    return G.to(o, { n: full.length, duration: secs || full.length * 0.035, ease: 'none', onUpdate: function () { el.textContent = full.slice(0, Math.round(o.n)); } });
  }

  // ---------- 1. hero: the wall, captions, the two halves meet ----------
  D.register('s-hook', function (st, s, instant) {
    var svg = s.querySelector('.scene');
    var story = D.view() === 'story';
    svg.setAttribute('viewBox', story ? '330 120 760 300' : '0 0 1400 470');
    var L = s.querySelector('.h-mark .arc-l'), R = s.querySelector('.h-mark .arc-r'), dot = s.querySelector('.h-mark .dot');
    var bricks = s.querySelectorAll('.brick'), waves = s.querySelectorAll('.wave');
    var cap = s.querySelector('.h-cap'), capT = s.querySelector('.cap-t'), bub = s.querySelector('.h-bub'), lbls = s.querySelectorAll('.h-lbl');
    if (!G) return;
    stop('hook');
    G.killTweensOf([L, R, dot, cap, bub, lbls, capT].concat(Array.prototype.slice.call(bricks), Array.prototype.slice.call(waves)));
    var d = function (v) { return instant ? 0 : v; };
    var apart = 330;

    // waves of sound leave the doctor and break on the wall (step 0) or pass through (step 1)
    function runWaves(pass) {
      if (instant) { G.set(waves, { opacity: 0 }); return; }
      Array.prototype.forEach.call(waves, function (w, i) {
        G.set(w, { x: 0, opacity: 0, scale: 0.7, transformOrigin: '50% 50%' });
        keep('hook', G.timeline({ repeat: -1, delay: i * 0.55 })
          .to(w, { opacity: 0.9, scale: 1, duration: 0.25, ease: 'power1.out' })
          .to(w, { x: pass ? -640 : -270, duration: pass ? 1.6 : 1.1, ease: 'none' }, '<')
          .to(w, { opacity: 0, duration: pass ? 0.4 : 0.18 }, pass ? '-=0.4' : '-=0.18'));
      });
    }

    if (st === 0) {
      G.to(L, { x: -apart, duration: d(0.8), ease: 'expo.out' });
      G.to(R, { x: apart, duration: d(0.8), ease: 'expo.out' });
      G.to(dot, { y: -80, opacity: 0, duration: d(0.4) });
      G.to(bricks, { y: 0, rotation: 0, opacity: 0.82, duration: d(0.6), ease: 'power3.out', stagger: d(0.03) });
      G.to(cap, { opacity: 0, duration: d(0.3) });
      G.to(bub, { opacity: 1, duration: d(0.5) });
      G.to(lbls, { opacity: 1, duration: d(0.5) });
      if (capT) capT.textContent = '';
      runWaves(false);
    } else if (st === 1) {
      G.set([L], { x: -apart }); G.set([R], { x: apart });
      G.set(dot, { y: -80, opacity: 0 });
      Array.prototype.forEach.call(bricks, function (b, i) {
        G.to(b, { y: 520 + i * 10, rotation: (i % 2 ? 1 : -1) * (20 + i * 9), opacity: 0, duration: d(1.1), ease: 'power2.in', delay: d(i * 0.05), transformOrigin: '50% 50%' });
      });
      G.to(cap, { opacity: 1, duration: d(0.5), delay: d(0.5) });
      G.to(bub, { opacity: 1, duration: d(0.3) });
      G.to(lbls, { opacity: 1, duration: d(0.3) });
      if (instant) type(capT, true); else G.delayedCall(0.8, function () { type(capT, false, 1.6); });
      runWaves(true);
    } else {
      G.set(bricks, { y: 600, opacity: 0 });
      G.set(waves, { opacity: 0 });
      type(capT, true);
      G.to([cap, bub], { opacity: story ? 0 : 0.0, duration: d(0.5) });
      G.to(lbls, { opacity: 0, duration: d(0.4) });
      G.fromTo(L, { x: instant ? 0 : -apart }, { x: 0, duration: d(1.0), ease: 'expo.out' });
      G.fromTo(R, { x: instant ? 0 : apart }, { x: 0, duration: d(1.0), ease: 'expo.out' });
      G.fromTo(dot, { y: instant ? 0 : -120, opacity: instant ? 1 : 0 }, { y: 0, opacity: 1, duration: d(0.7), delay: d(0.65), ease: 'back.out(2.2)' });
      if (!instant) {
        // idle: the halves breathe, the dot floats (brand motion spec: 4.8 s cycle, 5 px / 6 px)
        keep('hook', G.to(L, { x: -5, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.6 }));
        keep('hook', G.to(R, { x: 5, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.6 }));
        keep('hook', G.to(dot, { y: -6, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.9 }));
      }
    }
  });

  // ---------- 4. 800 dots, one interpreter ----------
  var dotsBuilt = false;
  function buildDots(svg) {
    if (svg.childNodes.length) return;
    var ns = 'http://www.w3.org/2000/svg', cols = 40, rows = 20, hot = 9 * cols + 27, frag = document.createDocumentFragment();
    for (var i = 0; i < cols * rows; i++) {
      var c = document.createElementNS(ns, 'circle'), x = i % cols, y = Math.floor(i / cols);
      c.setAttribute('cx', 8 + x * 16); c.setAttribute('cy', 9 + y * 16); c.setAttribute('r', 5);
      var dl = Math.round(Math.hypot(x - 20, (y - 10) * 1.6) * 18);
      c.setAttribute('style', '--dl:' + dl);
      if (i === hot) c.setAttribute('class', 'hot');
      frag.appendChild(c);
    }
    var halo = document.createElementNS(ns, 'circle');
    halo.setAttribute('cx', 8 + 27 * 16); halo.setAttribute('cy', 9 + 9 * 16); halo.setAttribute('r', 6); halo.setAttribute('class', 'halo');
    frag.appendChild(halo);
    svg.appendChild(frag);
    dotsBuilt = true;
  }
  D.register('s-ratio', function (st, s) {
    var svg = s.querySelector('.dots');
    buildDots(svg);
    // force a frame so the staggered fade-in runs on first entry
    requestAnimationFrame(function () {
      svg.classList.add('lit');
      svg.classList.toggle('focus', st >= 1);
    });
  });

  // ---------- 13. VRI: queue position counts down (mockup numbers) ----------
  D.register('s-vri', function (st, s, instant) {
    var pos = s.querySelector('.q-pos'), eta = s.querySelector('.q-eta');
    stop('vri');
    if (!pos || !eta) return;
    if (st !== 1 || instant || !G) { pos.textContent = '2'; eta.textContent = '4'; return; }
    pos.textContent = '3'; eta.textContent = '6';
    keep('vri', G.delayedCall(1.6, function () { pos.textContent = '2'; eta.textContent = '4'; }));
  });

  // ---------- 14. face-to-face: speech types itself as captions ----------
  D.register('s-face', function (st, s, instant) {
    var el = s.querySelector('.tp-type');
    stop('face');
    if (!el) return;
    if (st === 0 && !instant && G) keep('face', type(el, false, 3.2));
    else type(el, true);
  });

  // ---------- 26. call to action: the mark assembles, then "connects" (o-ring) on a slow loop ----------
  D.register('s-cta', function (st, s, instant) {
    var g = s.querySelector('.cta-mk'), L = g.querySelector('.arc-l'), R = g.querySelector('.arc-r'), dot = g.querySelector('.dot');
    stop('cta');
    if (!G) return;
    G.killTweensOf([g, L, R, dot]);
    if (instant) { G.set([L, R], { x: 0 }); G.set(dot, { y: 0, opacity: 1 }); G.set(g, { rotation: 0 }); return; }
    G.fromTo(L, { x: -260 }, { x: 0, duration: 1.0, ease: 'expo.out' });
    G.fromTo(R, { x: 260 }, { x: 0, duration: 1.0, ease: 'expo.out' });
    G.fromTo(dot, { y: -140, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.6, ease: 'back.out(2.2)' });
    keep('cta', G.timeline({ repeat: -1, repeatDelay: 3.2, delay: 2.4 })
      .to(R, { x: -156, duration: 0.6, ease: 'power3.inOut' })
      .to(g, { rotation: 360, svgOrigin: '132 264', duration: 0.9, ease: 'power2.inOut' })
      .set(g, { rotation: 0 })
      .to(R, { x: 0, duration: 0.7, ease: 'expo.out' }));
  });
})();
