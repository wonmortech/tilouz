// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
// Runs in <head> before paint: apply the saved theme so the page never flashes the wrong one.
(function () {
  try {
    var t = localStorage.getItem('tilo-theme');
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  } catch (e) { /* storage blocked: follow the system theme */ }
})();
