// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
TiloMotion.init();
var svg = document.querySelector('svg.tilo-motion');
document.querySelector('.states').addEventListener('click', function (e) {
  var b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('.states button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
  svg.removeAttribute('data-then'); TiloMotion.set(svg, b.dataset.state);
});
