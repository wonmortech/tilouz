// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
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
