import { i as e, n as t, r as n, t as r } from "../../lib-BuijiK-3.js";
import { n as i } from "../../index.browser-DTH_RVqO.js";
import { t as a } from "../../debounce-B--MR6Mm.js";
function o(t2) {
  let i2 = n(t2);
  return e(i2, { enter: (t3) => {
    if (t3.type === `Atrule` && t3.name === `keyframes`) return e.skip;
    t3.type === `SelectorList` && t3.children.forEach((e2) => {
      r(e2).includes(`windpress-common-block`) || e2.children.some((e3) => e3.type === `PseudoClassSelector` && ![`visible`, `hover`, `focus`, `focus-visible`, `focus-within`, `target`, `read-write`, `active`, `visited`, `link`, `disabled`, `checked`, `first-child`, `last-child`, `nth-child`, `where`, `is`, `not`, `has`].includes(e3.name)) || (e2.children.push({ type: `PseudoClassSelector`, name: `not`, children: [{ type: `ClassSelector`, name: `windpress-common-block` }] }), e2.children.push({ type: `PseudoClassSelector`, name: `not`, children: [{ type: `ClassSelector`, name: `windpress-common-block` }, { type: `Combinator`, name: ` ` }, { type: `TypeSelector`, name: `*` }] }));
    });
  } }), r(i2);
}
function s(e2) {
  let t2 = e2.id || ``, n2 = e2.href || ``;
  if (e2.hasAttribute(`data-wp-is-isolated`) || t2.includes(`windpress`) || t2.includes(`common-block`) || n2.includes(`windpress`) || n2.includes(`common-block`)) return true;
  if (e2 instanceof HTMLStyleElement && e2.textContent) {
    let t3 = e2.textContent;
    if (t3.includes(`windpress-common-block`) || t3.includes(`cb-text-node`) || t3.includes(`https://tailwindcss.com`) || t3.includes(`block-list-appender`)) return true;
  }
  return false;
}
function c(e2) {
  let t2 = e2.id || e2.href;
  return !t2 && e2 instanceof HTMLStyleElement && (e2.dataset.windpressId || (e2.dataset.windpressId = `inline-${i(10)}`), t2 = e2.dataset.windpressId), t2;
}
function l(e2, t2, n2) {
  return fetch(e2.href).then((e3) => e3.text()).then((r2) => {
    if (!e2.parentNode) return null;
    try {
      let t3 = n2(r2), i2 = document.createElement(`style`);
      return i2.setAttribute(`data-wp-is-isolated`, `true`), i2.textContent = t3, { element: e2, newStyle: i2, success: true };
    } catch {
      return window.windpressIsolatedElements.delete(t2), null;
    }
  }).catch((e3) => (window.windpressIsolatedElements.delete(t2), null));
}
function u(e2, t2, n2) {
  if (e2.hasAttribute(`data-wp-is-isolated`)) return null;
  if (window.windpressStyleCache && window.windpressStyleCache.has(e2)) return window.windpressStyleCache.get(e2);
  try {
    let t3 = e2.textContent, r2 = n2(t3), i2 = document.createElement(`style`);
    i2.setAttribute(`data-wp-is-isolated`, `true`), i2.textContent = r2;
    let a2 = { element: e2, newStyle: i2, isInline: true, success: true };
    return window.windpressStyleCache && window.windpressStyleCache.set(e2, a2), a2;
  } catch {
    return window.windpressIsolatedElements.delete(t2), null;
  }
}
function d(e2) {
  e2.length !== 0 && (e2.forEach(({ element: e3, newStyle: t2 }) => {
    e3.parentNode && e3.parentNode.insertBefore(t2, e3);
  }), requestAnimationFrame(() => {
    e2.forEach(({ element: e3, newStyle: t2, isInline: n2 }) => {
      n2 ? (e3.textContent = t2.textContent, e3.setAttribute(`data-wp-is-isolated`, `true`), t2.remove()) : e3.remove();
    });
  }));
}
function f() {
  let { isolateFromCommonBlocks: e2 } = window.windpressCommonBlockIsolation;
  window.windpressIsolatedElements || (window.windpressIsolatedElements = /* @__PURE__ */ new Set()), window.windpressStyleCache || (window.windpressStyleCache = /* @__PURE__ */ new WeakMap());
  let t2 = document.querySelectorAll(`style, link[rel="stylesheet"]`), n2 = Array.from(t2).filter((e3) => !s(e3)).filter((e3) => {
    let t3 = c(e3);
    return !(!t3 || window.windpressIsolatedElements.has(t3) || t3.includes(`windpress`) || t3.includes(`common-block`));
  });
  if (n2.length === 0) return;
  let r2 = [], i2 = [];
  n2.forEach((t3) => {
    let n3 = c(t3);
    if (window.windpressIsolatedElements.add(n3), t3 instanceof HTMLLinkElement) {
      let r3 = l(t3, n3, e2);
      i2.push(r3);
    } else if (t3 instanceof HTMLStyleElement) {
      let i3 = u(t3, n3, e2);
      i3 && r2.push(i3);
    }
  }), i2.length > 0 ? Promise.all(i2).then((e3) => {
    e3.forEach((e4) => {
      e4 && e4.success && r2.push(e4);
    }), d(r2);
  }) : d(r2);
}
function p() {
  window.windpressCommonBlockIsolation = { csstree: t, isolateFromCommonBlocks: o }, setTimeout(() => {
    f();
  }, 500);
  let e2 = a(f, 500);
  new MutationObserver((t2) => {
    let n2 = false;
    t2.forEach((e3) => {
      e3.addedNodes.forEach((e4) => {
        (e4 instanceof HTMLLinkElement || e4 instanceof HTMLStyleElement) && (e4.hasAttribute(`data-wp-is-isolated`) || s(e4) || window.windpressStyleCache && window.windpressStyleCache.has(e4) || (n2 = true));
      });
    }), n2 && e2();
  }).observe(document.head, { childList: true, subtree: true });
}
(async () => {
  window.self !== window.top && window.name === `editor-canvas` && p();
})();
