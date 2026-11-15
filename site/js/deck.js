// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
//
// Stepped deck engine. Two views of the same markup:
//   deck  - 1600x900 stage scaled to the window, one step at a time (keyboard, click, swipe)
//   story - a normal vertical page for phones and narrow windows; every step is shown,
//           slide animations run once when the slide scrolls into view.
// URL: #slide.step   ?track=all|dev|short   ?theme=light|dark   ?view=deck|page   ?shot
(function () {
  'use strict';
  var doc = document, html = doc.documentElement;
  var q = new URLSearchParams(location.search);
  var SHOT = q.has('shot');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var INSTANT = SHOT || reduce;
  var I18N = {};
  try { I18N = JSON.parse((doc.getElementById('i18n') || {}).textContent || '{}'); } catch (e) { I18N = {}; }
  var t = function (k) { return I18N[k] || k; };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };

  html.classList.add('js');
  if (SHOT) html.classList.add('shot');
  if (INSTANT) html.classList.add('instant');

  // ---------- theme ----------
  var theme = q.get('theme') || store.get('tilo-theme');
  if (theme === 'light' || theme === 'dark') html.setAttribute('data-theme', theme);
  function currentTheme() {
    var a = html.getAttribute('data-theme');
    if (a) return a;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function toggleTheme() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    store.set('tilo-theme', next);
    syncUi();
  }

  var stage = doc.getElementById('stage');
  var all = Array.prototype.slice.call(doc.querySelectorAll('.slide'));
  var TRACKS = ['all', 'dev', 'short'];
  var track = q.get('track');
  if (TRACKS.indexOf(track) < 0) track = store.get('tilo-track');
  if (TRACKS.indexOf(track) < 0) track = 'all';

  function inTrack(s) {
    var tr = s.getAttribute('data-track');
    if (track === 'short') return s.getAttribute('data-short') === '1';
    if (track === 'all') return tr !== 'dev';
    return true;
  }
  var visible = [];
  function computeVisible() {
    visible = all.filter(inTrack);
    all.forEach(function (s) { s.classList.toggle('off-track', !inTrack(s)); });
  }

  var view = 'deck';
  function wantStory() {
    var v = q.get('view') || store.get('tilo-view');
    if (v === 'page') return true;
    if (v === 'deck') return false;
    return window.matchMedia('(max-width: 899.98px), (max-height: 519.98px)').matches;
  }

  var cur = 0, step = 0; // cur = index into `all`
  var maxStep = function (s) { return +(s.getAttribute('data-steps') || 0); };

  // ---------- slide animations registry ----------
  var anims = {};
  window.TiloDeck = {
    register: function (id, fn) { anims[id] = fn; },
    instant: function () { return INSTANT; },
    view: function () { return view; }
  };
  function runAnim(s, st, instant) {
    var id = s.id, fn = anims[id];
    if (fn) { try { fn(st, s, instant || INSTANT); } catch (e) { if (window.console) console.warn('anim', id, e); } }
  }

  // ---------- counters ----------
  function fmt(n, dec, lang) {
    var str = n.toFixed(dec);
    var parts = str.split('.');
    var sep = lang === 'en' ? ',' : ' ';
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    return parts.join(lang === 'en' ? '.' : ',');
  }
  var LANG = html.getAttribute('lang') || 'uz';
  function count(el, on, instant) {
    var to = parseFloat(el.getAttribute('data-to'));
    var dec = +(el.getAttribute('data-dec') || 0);
    if (!on) { el.textContent = fmt(0, dec, LANG); el._v = 0; return; }
    if (instant || !window.gsap) { el.textContent = fmt(to, dec, LANG); el._v = to; return; }
    var o = { v: el._v || 0 };
    window.gsap.to(o, { v: to, duration: 1.3, ease: 'power3.out', onUpdate: function () { el.textContent = fmt(o.v, dec, LANG); }, onComplete: function () { el._v = to; } });
  }

  function applyStep(s, st, instant) {
    s.querySelectorAll('[data-s]').forEach(function (el) {
      var n = +el.getAttribute('data-s');
      var out = el.hasAttribute('data-s-out') ? +el.getAttribute('data-s-out') : Infinity;
      var on = st >= n && st < out;
      var was = el.classList.contains('on');
      el.classList.toggle('on', on);
      el.classList.toggle('gone', st >= out);
      if (on !== was) el.querySelectorAll('.cnt').forEach(function (c) { count(c, on, instant); });
    });
    s.querySelectorAll('.cnt').forEach(function (c) {
      if (!c.closest('[data-s]')) { if (c._v === undefined) count(c, true, instant); }
    });
    s.setAttribute('data-step', st);
    runAnim(s, st, instant);
    var notes = s.querySelectorAll('.notes [data-n]');
    var txt = '';
    notes.forEach(function (p) { if (+p.getAttribute('data-n') <= st) txt = p.innerHTML; });
    notesBody.innerHTML = txt || '<em>' + t('noNotes') + '</em>';
    notesHead.textContent = (visible.indexOf(s) + 1) + '.' + st + ' · ' + (s.getAttribute('data-title') || '');
  }

  // ---------- UI chrome ----------
  var bar = doc.getElementById('bar');
  var prog = doc.getElementById('prog');
  var counter = doc.getElementById('counter');
  var notesBox = doc.getElementById('notes');
  var notesHead = doc.getElementById('notes-head');
  var notesBody = doc.getElementById('notes-body');
  var ovBox = doc.getElementById('overview');
  var ovGrid = doc.getElementById('ov-grid');
  var helpBox = doc.getElementById('help');

  function syncUi() {
    doc.querySelectorAll('[data-act="track"]').forEach(function (b) {
      b.querySelector('.lbl').textContent = t('track_' + track);
      b.setAttribute('aria-label', t('trackBtn') + ': ' + t('track_' + track));
    });
    doc.querySelectorAll('[data-track-opt]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-track-opt') === track ? 'true' : 'false');
    });
    doc.querySelectorAll('[data-act="theme"]').forEach(function (b) {
      b.setAttribute('aria-label', t(currentTheme() === 'dark' ? 'toLight' : 'toDark'));
    });
    doc.querySelectorAll('[data-act="view"]').forEach(function (b) {
      b.querySelector('.lbl').textContent = t(view === 'deck' ? 'toPage' : 'toDeck');
    });
    var i = visible.indexOf(all[cur]);
    if (counter) counter.textContent = (i + 1) + ' / ' + visible.length;
    if (prog) {
      var totalSteps = 0, done = 0;
      visible.forEach(function (s, k) { var m = maxStep(s) + 1; totalSteps += m; if (k < i) done += m; });
      done += step + 1;
      prog.style.transform = 'scaleX(' + (totalSteps ? done / totalSteps : 0) + ')';
    }
  }

  function setHash() {
    if (view !== 'deck') return;
    var h = '#' + (cur + 1) + '.' + step;
    if (location.hash !== h) history.replaceState(null, '', h + '');
  }

  function corner() {
    var m = doc.getElementById('corner-mark');
    if (!m || INSTANT || !window.gsap) return;
    var r = m.querySelector('.arc-r');
    var g = m.querySelector('.mk');
    window.gsap.timeline()
      .to(r, { x: -156, duration: 0.45, ease: 'power3.inOut' })
      .to(g, { rotation: 360, svgOrigin: '132 264', duration: 0.6, ease: 'power2.inOut' }, '>-0.05')
      .set(g, { rotation: 0 })
      .to(r, { x: 0, duration: 0.5, ease: 'expo.out' });
  }

  function show(idx, st, dir) {
    var s = all[idx];
    if (!s) return;
    var changed = idx !== cur || !s.classList.contains('active');
    all.forEach(function (x, k) {
      x.classList.toggle('active', k === idx);
      x.classList.toggle('past', k < idx);
      x.setAttribute('aria-hidden', k === idx ? 'false' : 'true');
      if (k !== idx) x.inert = true; else x.inert = false;
    });
    cur = idx;
    step = Math.max(0, Math.min(st, maxStep(s)));
    if (changed) {
      // entering a slide: reset to step 0 instantly, then play up to the target step
      applyStep(s, 0, true);
      if (step > 0) applyStep(s, step, dir === undefined ? true : INSTANT);
      else applyStep(s, 0, INSTANT);
      if (dir !== undefined) corner();
    } else {
      applyStep(s, step, INSTANT);
    }
    setHash();
    syncUi();
  }

  function next() {
    var s = all[cur];
    if (step < maxStep(s)) { step++; applyStep(s, step, INSTANT); setHash(); syncUi(); return; }
    var i = visible.indexOf(s);
    if (i < visible.length - 1) show(all.indexOf(visible[i + 1]), 0, 1);
  }
  function prev() {
    var s = all[cur];
    if (step > 0) { step--; applyStep(s, step, INSTANT); setHash(); syncUi(); return; }
    var i = visible.indexOf(s);
    if (i > 0) { var p = visible[i - 1]; show(all.indexOf(p), maxStep(p), -1); }
  }
  function goVisible(i) { var s = visible[Math.max(0, Math.min(i, visible.length - 1))]; show(all.indexOf(s), 0, 1); }

  function parseHash() {
    var m = /^#(\d+)(?:\.(\d+))?/.exec(location.hash);
    if (!m) return null;
    return { i: Math.max(0, Math.min(+m[1] - 1, all.length - 1)), s: +(m[2] || 0) };
  }

  // ---------- scaling ----------
  function fit() {
    if (view !== 'deck') { stage.style.transform = ''; return; }
    var k = Math.min(window.innerWidth / 1600, (window.innerHeight - 0) / 900);
    stage.style.setProperty('--k', k);
    stage.style.transform = 'translate(-50%,-50%) scale(' + k + ')';
  }

  // ---------- story view ----------
  var io = null;
  function enterStory() {
    view = 'story';
    html.classList.remove('deck-view'); html.classList.add('story-view');
    all.forEach(function (s) {
      s.classList.remove('active', 'past'); s.inert = false; s.removeAttribute('aria-hidden');
      s.querySelectorAll('[data-s]').forEach(function (el) { el.classList.remove('on', 'gone'); });
      s._played = false;
    });
    if (io) io.disconnect();
    var play = function (s) {
      if (s._played) return; s._played = true;
      var m = maxStep(s);
      s.querySelectorAll('[data-s]').forEach(function (el) {
        var out = el.hasAttribute('data-s-out') ? +el.getAttribute('data-s-out') : Infinity;
        var on = m < out;
        el.classList.toggle('on', on); el.classList.toggle('gone', !on);
      });
      s.querySelectorAll('.cnt').forEach(function (c) { count(c, true, INSTANT); });
      s.setAttribute('data-step', m); s.classList.add('played');
      runAnim(s, m, INSTANT);
    };
    if ('IntersectionObserver' in window && !SHOT) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) play(e.target); });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
      all.forEach(function (s) { io.observe(s); });
    } else { all.forEach(play); }
    fit(); syncUi();
  }
  function enterDeck() {
    view = 'deck';
    if (io) { io.disconnect(); io = null; }
    html.classList.remove('story-view'); html.classList.add('deck-view');
    window.scrollTo(0, 0);
    fit();
    var h = parseHash();
    var idx = h ? h.i : all.indexOf(visible[0]);
    if (!inTrack(all[idx])) idx = all.indexOf(visible[0]);
    all[cur] && all[cur].classList.remove('active');
    cur = -1;
    show(idx, h ? h.s : 0);
  }
  function setView(v) {
    if (v === 'story' && view !== 'story') enterStory();
    else if (v === 'deck' && view !== 'deck') enterDeck();
  }

  function setTrack(tr) {
    track = tr; store.set('tilo-track', tr);
    computeVisible();
    if (view === 'deck') {
      var s = all[cur];
      if (!inTrack(s)) {
        // nearest visible slide after the current one
        var k = cur; while (k < all.length && !inTrack(all[k])) k++;
        if (k >= all.length) k = all.indexOf(visible[visible.length - 1]);
        show(k, 0, 1);
      } else syncUi();
    } else syncUi();
    buildOverview();
  }
  function cycleTrack() { setTrack(TRACKS[(TRACKS.indexOf(track) + 1) % TRACKS.length]); toast(t('trackBtn') + ': ' + t('track_' + track)); }

  // ---------- overlays ----------
  function buildOverview() {
    if (!ovGrid) return;
    ovGrid.innerHTML = '';
    visible.forEach(function (s, i) {
      var b = doc.createElement('button');
      b.type = 'button'; b.className = 'ov-card' + (s.getAttribute('data-track') === 'dev' ? ' dev' : '');
      var k = s.querySelector('.kicker'), h = s.getAttribute('data-title') || '';
      b.innerHTML = '<span class="ov-n">' + (i + 1) + '</span><span class="ov-k"></span><span class="ov-t"></span>';
      b.querySelector('.ov-k').textContent = k ? k.textContent.trim() : '';
      b.querySelector('.ov-t').textContent = h;
      b.addEventListener('click', function () {
        toggleOverview(false);
        if (view === 'deck') show(all.indexOf(s), 0, 1);
        else s.scrollIntoView({ behavior: INSTANT ? 'auto' : 'smooth' });
      });
      ovGrid.appendChild(b);
    });
  }
  function toggleOverview(force) {
    var on = force === undefined ? ovBox.hidden : force;
    ovBox.hidden = !on;
    if (on) {
      var i = visible.indexOf(all[cur]);
      var cards = ovGrid.querySelectorAll('.ov-card');
      cards.forEach(function (c, k) { c.classList.toggle('cur', k === i); });
      if (cards[i]) cards[i].focus();
    }
  }
  function toggleNotes(force) { var on = force === undefined ? notesBox.hidden : force; notesBox.hidden = !on; }
  function toggleHelp(force) { var on = force === undefined ? helpBox.hidden : force; helpBox.hidden = !on; }
  function fullscreen() {
    if (!doc.fullscreenElement) { if (html.requestFullscreen) html.requestFullscreen().catch(function () {}); }
    else if (doc.exitFullscreen) doc.exitFullscreen();
  }
  var toastEl = doc.getElementById('toast'), toastT = 0;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg; toastEl.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('on'); }, 1600);
  }

  // ---------- events ----------
  doc.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target && e.target.tagName) || '';
    if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
    var k = e.key;
    if (k === 'Escape') { toggleOverview(false); toggleHelp(false); toggleNotes(false); return; }
    var low = k.length === 1 ? k.toLowerCase() : k;
    if (low === 'o') { toggleOverview(); e.preventDefault(); return; }
    if (low === 't') { toggleTheme(); return; }
    if (low === 'b') { cycleTrack(); return; }
    if (low === 'n') { toggleNotes(); return; }
    if (low === 'f') { fullscreen(); return; }
    if (k === '?' || low === 'h') { toggleHelp(); return; }
    if (view !== 'deck' || !ovBox.hidden) return;
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter' || k === 'ArrowDown') {
      if (k === 'Enter' && /A|BUTTON/.test(tag)) return;
      e.preventDefault(); next();
    } else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace' || k === 'ArrowUp') { e.preventDefault(); prev(); }
    else if (k === 'Home') { e.preventDefault(); goVisible(0); }
    else if (k === 'End') { e.preventDefault(); goVisible(visible.length - 1); }
  });

  doc.addEventListener('click', function (e) {
    var a = e.target.closest('[data-act]');
    if (a) {
      var act = a.getAttribute('data-act');
      if (act === 'next') next();
      else if (act === 'prev') prev();
      else if (act === 'theme') toggleTheme();
      else if (act === 'track') cycleTrack();
      else if (act === 'notes') toggleNotes();
      else if (act === 'overview') toggleOverview();
      else if (act === 'full') fullscreen();
      else if (act === 'help') toggleHelp();
      else if (act === 'close') { toggleOverview(false); toggleHelp(false); toggleNotes(false); }
      else if (act === 'view') { var v = view === 'deck' ? 'story' : 'deck'; store.set('tilo-view', v === 'story' ? 'page' : 'deck'); setView(v); }
      return;
    }
    var opt = e.target.closest('[data-track-opt]');
    if (opt) { setTrack(opt.getAttribute('data-track-opt')); return; }
    var lang = e.target.closest('a[data-lang]');
    if (lang && view === 'deck') { lang.setAttribute('href', lang.getAttribute('href').split('#')[0] + location.hash); return; }
    if (view !== 'deck') return;
    if (e.target.closest('a, button, input, select, label, .notes-box, .ov, .help, .bar')) return;
    if (!e.target.closest('#stage')) return;
    var x = e.clientX / window.innerWidth;
    if (x < 0.25) prev(); else next();
  });

  var tx = 0, ty = 0, tt = 0;
  doc.addEventListener('touchstart', function (e) { if (view !== 'deck') return; var p = e.touches[0]; tx = p.clientX; ty = p.clientY; tt = Date.now(); }, { passive: true });
  doc.addEventListener('touchend', function (e) {
    if (view !== 'deck') return;
    var p = e.changedTouches[0], dx = p.clientX - tx, dy = p.clientY - ty;
    if (Date.now() - tt < 600 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) { if (dx < 0) next(); else prev(); }
  }, { passive: true });

  window.addEventListener('hashchange', function () {
    if (view !== 'deck') return;
    var h = parseHash(); if (!h) return;
    if (h.i !== cur || h.s !== step) show(h.i, h.s);
  });
  var rt = 0;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      if (!q.get('view') && !store.get('tilo-view')) setView(wantStory() ? 'story' : 'deck');
      fit();
    }, 120);
  });

  // ---------- boot ----------
  // Boot after every deferred script (anim.js registers slide handlers) has run.
  function boot() {
    computeVisible();
    buildOverview();
    if (wantStory()) enterStory(); else enterDeck();
    html.classList.add('ready');
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else setTimeout(boot, 0);
})();
