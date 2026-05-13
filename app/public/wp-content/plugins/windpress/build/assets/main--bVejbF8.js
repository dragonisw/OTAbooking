import { Ht as e } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t } from "./index.browser-DTH_RVqO.js";
import { i as n, r, t as i } from "./isObject-DdF6vEWQ.js";
import { c as a, i as o, s } from "./_MapCache-YhmtHl4K.js";
import { a as c, c as ee, i as te, n as ne, o as l, s as u, t as d } from "./_initCloneObject-BPEi8Fop.js";
import { i as f, r as p } from "./set-Bnp0_Ia6.js";
import { t as m } from "./_isIndex-Bbyz4ars.js";
import { a as re, c as h, d as g, l as _, n as v } from "./_Uint8Array-BaxPSAhP.js";
import { t as y } from "./logger-BvowV9fY.js";
import { a as b, n as x } from "./constant-BJspwAtg.js";
function S(e2) {
  return e2;
}
function ie(e2, t2, n2) {
  switch (n2.length) {
    case 0:
      return e2.call(t2);
    case 1:
      return e2.call(t2, n2[0]);
    case 2:
      return e2.call(t2, n2[0], n2[1]);
    case 3:
      return e2.call(t2, n2[0], n2[1], n2[2]);
  }
  return e2.apply(t2, n2);
}
var ae = 800, C = 16, oe = Date.now;
function w(e2) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = oe(), i2 = C - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= ae) return arguments[0];
    } else t2 = 0;
    return e2.apply(void 0, arguments);
  };
}
function T(e2) {
  return function() {
    return e2;
  };
}
var E = w(f ? function(e2, t2) {
  return f(e2, `toString`, { configurable: true, enumerable: false, value: T(t2), writable: true });
} : S), D = Math.max;
function se(e2, t2, n2) {
  return t2 = D(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = D(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), ie(e2, this, s2);
  };
}
function ce(e2, t2) {
  return E(se(e2, t2, S), e2 + ``);
}
function le(e2, t2, n2) {
  if (!i(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? g(n2) && m(t2, n2.length) : r2 == `string` && t2 in n2) ? o(n2[t2], e2) : false;
}
function ue(e2) {
  return ce(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e2.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && le(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e2(t2, s2, r2, a2);
    }
    return t2;
  });
}
var de = `[object Object]`, fe = Function.prototype, pe = Object.prototype, O = fe.toString, k = pe.hasOwnProperty, A = O.call(Object);
function j(e2) {
  if (!r(e2) || n(e2) != de) return false;
  var t2 = c(e2);
  if (t2 === null) return true;
  var i2 = k.call(t2, `constructor`) && t2.constructor;
  return typeof i2 == `function` && i2 instanceof i2 && O.call(i2) == A;
}
function M(e2) {
  return function(t2, n2, r2) {
    for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var c2 = o2[e2 ? s2 : ++i2];
      if (n2(a2[c2], c2, a2) === false) break;
    }
    return t2;
  };
}
var N = M();
function P(e2, t2, n2) {
  (n2 !== void 0 && !o(e2[t2], n2) || n2 === void 0 && !(t2 in e2)) && p(e2, t2, n2);
}
function F(e2) {
  return r(e2) && g(e2);
}
function I(e2, t2) {
  if (!(t2 === `constructor` && typeof e2[t2] == `function`) && t2 != `__proto__`) return e2[t2];
}
function L(e2) {
  return u(e2, l(e2));
}
function R(e2, t2, n2, r2, o2, c2, l2) {
  var u2 = I(e2, n2), f2 = I(t2, n2), p2 = l2.get(f2);
  if (p2) {
    P(e2, n2, p2);
    return;
  }
  var m2 = c2 ? c2(u2, f2, n2 + ``, e2, t2, l2) : void 0, g2 = m2 === void 0;
  if (g2) {
    var v2 = a(f2), y2 = !v2 && h(f2), b2 = !v2 && !y2 && re(f2);
    m2 = f2, v2 || y2 || b2 ? a(u2) ? m2 = u2 : F(u2) ? m2 = ee(u2) : y2 ? (g2 = false, m2 = te(f2, true)) : b2 ? (g2 = false, m2 = ne(f2, true)) : m2 = [] : j(f2) || _(f2) ? (m2 = u2, _(u2) ? m2 = L(u2) : (!i(u2) || s(u2)) && (m2 = d(f2))) : g2 = false;
  }
  g2 && (l2.set(f2, m2), o2(m2, f2, r2, c2, l2), l2.delete(f2)), P(e2, n2, m2);
}
function z(e2, t2, n2, r2, a2) {
  e2 !== t2 && N(t2, function(o2, s2) {
    if (a2 || (a2 = new v()), i(o2)) R(e2, t2, s2, n2, z, r2, a2);
    else {
      var c2 = r2 ? r2(I(e2, s2), o2, s2 + ``, e2, t2, a2) : void 0;
      c2 === void 0 && (c2 = o2), P(e2, s2, c2);
    }
  }, l);
}
var B = ue(function(e2, t2, n2) {
  z(e2, t2, n2);
}), V = () => t(`1234567890abcdefghijklmnopqrstuvwxyz`, 6)();
function H() {
  let e2 = V();
  for (; e2.match(/^\d/); ) e2 = V();
  return `windpress${e2}`;
}
function me(e2) {
  let t2 = [];
  return e2.childNodes.forEach((e3) => {
    let n2 = U(e3);
    n2.transformedNode && t2.push(n2.transformedNode);
  }), W(t2, 0);
}
function he(e2) {
  let t2 = e2.tagName.toLowerCase(), n2 = { id: H(), name: `div`, settings: { tag: t2 }, children: [] }, r2 = [], i2 = [`id`, `class`, `href`, `src`];
  if (Object.keys(e2.attributes).forEach((t3) => {
    let a2 = e2.attributes[t3].name;
    i2.includes(a2) ? (a2 === `class` && e2.attributes[t3].value.trim() !== `` && B(n2.settings, { _cssClasses: e2.attributes[t3].value }), a2 === `id` && e2.id.trim() !== `` && B(n2.settings, { _cssId: e2.id }), a2 === `href` && e2.tagName.toLowerCase() === `a` && B(n2.settings, { link: { url: e2.getAttribute(`href`) } })) : r2.push({ id: H(), name: a2, value: e2.attributes[t3].value });
  }), B(n2.settings, { _attributes: r2 }), t2 === `svg`) return n2.name = `svg`, B(n2.settings, { source: `code`, code: e2.outerHTML }), n2.settings._attributes = [], n2;
  if (t2 === `img`) {
    let t3 = e2.getAttribute(`src`);
    return n2.name = `image`, B(n2.settings, { image: { external: true, url: t3 || ``, full: t3 || ``, filename: t3.split(`/`).pop() || `` }, altText: e2.getAttribute(`alt`) || `` }), delete n2.settings.tag, n2;
  }
  if (t2.match(/h[1-6]/) && (n2.name = `heading`, B(n2.settings, { text: e2.innerText, tag: t2 })), t2 === `video` || t2 === `iframe` && (e2.getAttribute(`src`).includes(`youtube.com`) || e2.getAttribute(`src`).includes(`vimeo.com`))) return n2.name = `video`, B(n2.settings, { source: `url`, url: t2 === `video` ? e2.getAttribute(`src`) : e2.getAttribute(`src`).split(`?`)[0] }), delete n2.settings.tag, n2;
  if (t2 === `a`) {
    if (B(n2.settings, { link: { type: `external`, url: e2.getAttribute(`href`) || ``, newTab: e2.getAttribute(`target`) === `_blank`, ariaLabel: e2.getAttribute(`aria-label`) || ``, title: e2.getAttribute(`title`) || ``, rel: e2.getAttribute(`rel`) || `` } }), e2.children.length === 0) return n2.name = `text-basic`, B(n2.settings, { text: e2.innerText }), n2;
    B(n2.settings, { text: e2.innerText });
  }
  return e2.childNodes.forEach((t3) => {
    let { transformedNode: r3, brxNode: i3 = null } = U(t3, e2, n2);
    r3 && n2.children.push(r3), i3 && (n2 = i3);
  }), n2;
}
function U(e2, t2 = null, n2 = null) {
  return e2.nodeType === Node.ELEMENT_NODE ? { transformedNode: he(e2) } : e2.nodeType === Node.TEXT_NODE && e2.nodeValue.trim() !== `` ? t2 && n2 && t2.childNodes.length === 1 && (t2.tagName.toLowerCase() === `p` || t2.tagName.toLowerCase() === `span` || t2.tagName.toLowerCase() === `div`) ? (n2.name = `text-basic`, B(n2.settings, { text: e2.nodeValue }), { transformedNode: null, brxNode: n2 }) : { transformedNode: { id: H(), name: `text-basic`, settings: { tag: `span`, text: e2.nodeValue }, children: [] } } : { transformedNode: null };
}
function W(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    e3.parent = t2, e3._children = e3.children.map((e4) => e4.id), n2.push(e3), n2.push(...W(e3.children, e3.id)), e3.children = e3._children, delete e3._children;
  }), n2;
}
async function G(e2) {
  if (!navigator.permissions || typeof navigator.permissions.query != `function`) return null;
  try {
    return await navigator.permissions.query({ name: e2 });
  } catch {
    return null;
  }
}
async function ge() {
  if (!navigator.clipboard || typeof navigator.clipboard.readText != `function` || typeof navigator.clipboard.writeText != `function`) return y(`Clipboard API not supported`, { module: `html2bricks`, type: `error` }), false;
  let e2 = await G(`clipboard-read`);
  if (e2 && e2.state === `denied`) return y(`Clipboard-read permission denied`, { module: `html2bricks`, type: `error` }), false;
  let t2 = ``;
  try {
    t2 = await navigator.clipboard.readText();
  } catch (e3) {
    return y(`Clipboard-read permission denied`, e3, { module: `html2bricks`, type: `error` }), false;
  }
  let n2 = await G(`clipboard-write`);
  if (n2 && n2.state === `denied`) return y(`Clipboard-write permission denied`, { module: `html2bricks`, type: `error` }), false;
  try {
    await navigator.clipboard.writeText(t2);
  } catch (e3) {
    return y(`Clipboard-write permission denied`, e3, { module: `html2bricks`, type: `error` }), false;
  }
  return true;
}
function _e(e2) {
  return e2.clipboardData ? (e2.clipboardData.getData(`text/html`) || e2.clipboardData.getData(`text/plain`) || ``).trim() : ``;
}
async function K(e2 = ``) {
  let t2 = typeof e2 == `string` ? e2.trim() : ``;
  if (!t2) {
    if (!await ge()) {
      x.$_showMessage(`[WindPress] Clipboard access not available`);
      return;
    }
    try {
      t2 = (await navigator.clipboard.readText()).trim();
    } catch (e3) {
      y(`Clipboard-read permission denied`, e3, { module: `html2bricks`, type: `error` }), x.$_showMessage(`[WindPress] Clipboard access not available`);
      return;
    }
  }
  if (!t2 || t2.charAt(0) !== `<`) {
    y(`Pasted content is not HTML`, { module: `html2bricks`, type: `error` }), x.$_showMessage(`[WindPress] Pasted content is not HTML`);
    return;
  }
  let n2 = new DOMParser().parseFromString(t2, `text/html`).body, r2 = { content: me(n2), source: `bricksCopiedElements`, sourceUrl: window.bricksData.siteUrl, version: window.bricksData.version, globalClasses: [], globalElements: [] };
  try {
    await navigator.clipboard.writeText(JSON.stringify(r2, null));
  } catch (e3) {
    y(`Clipboard-write permission denied`, e3, { module: `html2bricks`, type: `error` }), x.$_showMessage(`[WindPress] Clipboard access not available`);
    return;
  }
  x.$_pasteElements(), x.$_showMessage(`[WindPress] HTML pasted`);
}
var q = false, J = null;
function Y() {
  q = false, J && (J = (window.clearTimeout(J), null));
}
document.addEventListener(`paste`, (e2) => {
  !q || !b(`module.html2bricks.copy-paste`, true).value || (Y(), e2.preventDefault(), e2.stopPropagation(), K(_e(e2)));
}, true), document.addEventListener(`keydown`, (e2) => {
  b(`module.html2bricks.copy-paste`, true).value && (e2.target.id === `bricks-toolbar` || e2.target.id === `bricks-panel` || !(e2.ctrlKey || e2.metaKey) || !e2.shiftKey || e2.key.toLowerCase() !== `v` || (e2.stopPropagation(), q = true, J && window.clearTimeout(J), J = window.setTimeout(() => {
    q && (Y(), K());
  }, 0)));
}, true);
var X = document.createElement(`li`);
X.id = `windpressbricks-html2bricks-context-menu`, X.classList.add(`sep`), X.innerHTML = `<span class="label">Paste HTML</span><span class="shortcut">CTRL + SHIFT + V</span>`, X.addEventListener(`click`, K);
var Z = document.createElement(`li`);
Z.dataset.balloon = `Paste HTML`, Z.dataset.balloonPos = `bottom-right`, Z.innerHTML = `
    <span class="bricks-svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5" fill="none" stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>
    </span>
`, Z.addEventListener(`click`, K);
function Q() {
  return document.querySelector(`#bricks-builder-context-menu li:nth-child(2)`);
}
function ve() {
  let e2 = document.querySelector(`#bricks-panel-header > ul.actions`), t2 = `${x.i18n?.paste ?? `Paste`} (${x.i18n?.all ?? `All`})`;
  return [...e2?.children ?? []].find((e3) => e3.dataset.balloon === t2);
}
var $ = () => {
  let e2 = Q();
  e2 && !X.isConnected && (e2.classList.remove(`sep`), e2.insertAdjacentElement(`afterend`, X));
  let t2 = ve();
  t2 && !Z.isConnected && t2.insertAdjacentElement(`afterend`, Z);
}, ye = () => {
  Q()?.classList.add(`sep`), X.remove(), Z.remove();
};
b(`module.html2bricks.copy-paste`, true).value && $(), e(() => b(`module.html2bricks.copy-paste`, true).value, (e2) => {
  e2 ? $() : ye();
}), y(`Module loaded!`, { module: `html2bricks` });
