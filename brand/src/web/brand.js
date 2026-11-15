// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
// /brand page behaviour: theme toggle, motion demos, colourway tabs, copy-to-clipboard.
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;
  var A = '/brand/assets';

  // ---- theme
  var toggle = doc.getElementById('theme-toggle');
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function syncPressed() { if (toggle) toggle.setAttribute('aria-pressed', String(current() === 'dark')); }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('tilo-theme', next); } catch (e) { /* ignore */ }
      syncPressed();
    });
    syncPressed();
  }

  // ---- motion
  var M = window.TiloMotion;
  var hero = doc.querySelector('.hero-logo');
  if (M && hero) M.set(hero, 'intro');
  doc.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-replay], [data-play]');
    if (!b || !M) return;
    if (b.hasAttribute('data-replay')) {
      hero.setAttribute('data-then', 'idle');
      M.set(hero, 'intro');
      return;
    }
    var card = b.closest('.mo');
    var svg = card && card.querySelector('svg.tilo-motion');
    if (svg) M.set(svg, b.getAttribute('data-play'));
  });
  // loops only run while visible (battery), one-shot demos play when they scroll in
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var svg = en.target;
        svg.classList.toggle('is-paused', !en.isIntersecting);
        if (en.isIntersecting && !svg.hasAttribute('data-seen')) {
          svg.setAttribute('data-seen', '');
          if (M) M.replay(svg);
        }
      });
    }, { threshold: 0.2 });
    doc.querySelectorAll('.mo svg.tilo-motion').forEach(function (s) { io.observe(s); });
  }

  // ---- colourway tabs
  var tabs = doc.querySelectorAll('[data-cw]');
  function setCw(btn) {
    var cw = btn.getAttribute('data-cw');
    tabs.forEach(function (t) {
      var on = t === btn;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    doc.querySelectorAll('.lk-card').forEach(function (card) {
      var item = card.getAttribute('data-item');
      var base = A + '/logo/' + item + '/tilo-' + item + '-' + cw;
      var art = card.querySelector('.lk-art');
      art.className = 'lk-art cw-' + cw;
      card.querySelector('img').src = base + '.svg';
      card.querySelectorAll('a[data-ext]').forEach(function (a) { a.href = base + '.' + a.getAttribute('data-ext'); });
    });
  }
  tabs.forEach(function (t, i) {
    t.tabIndex = i === 0 ? 0 : -1;
    t.addEventListener('click', function () { setCw(t); });
    t.addEventListener('keydown', function (ev) {
      var d = ev.key === 'ArrowRight' ? 1 : ev.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      ev.preventDefault();
      var n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus();
      setCw(n);
    });
  });

  // ---- copy hex
  var toast = doc.getElementById('toast');
  var tt = null;
  function say(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('on');
    clearTimeout(tt);
    tt = setTimeout(function () { toast.classList.remove('on'); }, 1600);
  }
  function fallbackCopy(text) {
    var ta = doc.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    doc.body.appendChild(ta);
    ta.select();
    try { doc.execCommand('copy'); } catch (e) { /* ignore */ }
    doc.body.removeChild(ta);
  }
  doc.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-copy]');
    if (!b) return;
    var v = b.getAttribute('data-copy');
    var done = function () { say((toast && toast.getAttribute('data-copied') || 'Copied') + ': ' + v); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(v).then(done, function () { fallbackCopy(v); done(); });
    } else { fallbackCopy(v); done(); }
  });

  // ---- nav: mark the section in view
  var links = doc.querySelectorAll('.nav a');
  if ('IntersectionObserver' in window && links.length) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = map[en.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = doc.getElementById(id); if (s) navIo.observe(s); });
  }
})();
