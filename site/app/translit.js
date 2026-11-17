// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// Uzbek Latin -> Uzbek Cyrillic, rule based. Text that is already Cyrillic passes through.
// Known gaps (loanwords such as "sirk" -> "цирк", "aktsiya") are left to human review.
(function () {
  'use strict';
  const MARK = "[‘’ʻʼ'`]";
  const pairs = [
    [new RegExp('o' + MARK, 'g'), 'ў'], [new RegExp('O' + MARK, 'g'), 'Ў'],
    [new RegExp('g' + MARK, 'g'), 'ғ'], [new RegExp('G' + MARK, 'g'), 'Ғ'],
    // loanwords: politsiya -> полиция, aktsiya -> акция, stantsiya -> станция
    [/ts(?=i[yo])/g, 'ц'], [/T[sS](?=[iI][yYoO])/g, 'Ц'],
    [/sh/g, 'ш'], [/S[hH]/g, 'Ш'], [/ch/g, 'ч'], [/C[hH]/g, 'Ч'],
    [/yo/g, 'ё'], [/Y[oO]/g, 'Ё'], [/yu/g, 'ю'], [/Y[uU]/g, 'Ю'],
    [/ya/g, 'я'], [/Y[aA]/g, 'Я'], [/ye/g, 'е'], [/Y[eE]/g, 'Е'],
  ];
  const single = {
    a: 'а', b: 'б', d: 'д', f: 'ф', g: 'г', h: 'ҳ', i: 'и', j: 'ж', k: 'к', l: 'л', m: 'м', n: 'н',
    o: 'о', p: 'п', q: 'қ', r: 'р', s: 'с', t: 'т', u: 'у', v: 'в', x: 'х', y: 'й', z: 'з', c: 'с', w: 'в',
  };
  const vowels = 'aeiouAEIOUаеиоуэўёюяАЕИОУЭЎЁЮЯ';

  function toCyrl(text) {
    if (!text) return text;
    let s = String(text);
    for (const [re, to] of pairs) s = s.replace(re, to);
    // e -> э at the start of a word or after a vowel, otherwise е
    s = s.replace(/(^|[^A-Za-zА-Яа-яЎўҒғҚқҲҳЁё])e/g, '$1э').replace(/(^|[^A-Za-zА-Яа-яЎўҒғҚқҲҳЁё])E/g, '$1Э');
    let out = '';
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      const prev = s[i - 1] || '';
      if (ch === 'e' || ch === 'E') { out += vowels.includes(prev) ? (ch === 'e' ? 'э' : 'Э') : (ch === 'e' ? 'е' : 'Е'); continue; }
      if (/[‘’ʻʼ]/.test(ch) && /[A-Za-zА-Яа-яЎўҒғҚқҲҳ]/.test(prev)) { out += 'ъ'; continue; }
      const low = ch.toLowerCase();
      if (single[low]) { out += ch === low ? single[low] : single[low].toUpperCase(); continue; }
      out += ch;
    }
    return out;
  }

  window.tiloTranslit = { toCyrl };
})();
