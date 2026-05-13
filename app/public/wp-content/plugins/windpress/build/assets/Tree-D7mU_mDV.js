import { D as e, E as t, Lt as n, On as r, Rt as i, Tn as a, Zn as o, _ as s, b as c, bt as l, ct as u, er as d, et as f, ft as p, g as m, h, k as g, mt as _, o as v, qt as y, tr as b, tt as x, v as S, vn as C, wn as w, wt as T, xt as E, y as D } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { c as O, l as k } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { E as A, I as j, J as M, S as N, W as P, b as F, x as ee, y as I } from "./Button-BArxwKIq.js";
import { A as te, S as L, b as R, g as z, j as B, r as V } from "./dist-BY3QSpe-.js";
import { D as H, E as U, F as W, H as G, O as K, P as q, T as J, U as Y, f as ne, g as re, p as ie, w as X, z as ae } from "./namespaced-DHs_Dn1j.js";
import { g as oe, v as se, w as Z } from "./Tooltip-DkuatXWt.js";
import { t as ce } from "./virtualizer-DwkRSQPe.js";
function le(e2, t2) {
  let n2 = C(), r2 = (r3, i3) => {
    if (t2.multiple && Array.isArray(e2.value)) if (t2.selectionBehavior === `replace`) e2.value = [r3], n2.value = r3;
    else {
      let t3 = e2.value.findIndex((e3) => i3(e3));
      t3 === -1 ? e2.value = [...e2.value, r3] : e2.value = e2.value.filter((e3, n3) => n3 !== t3);
    }
    else t2.selectionBehavior === `replace` ? e2.value = { ...r3 } : !Array.isArray(e2.value) && i3(e2.value) ? e2.value = void 0 : e2.value = { ...r3 };
    return e2.value;
  };
  function i2(r3, i3, a2, o2) {
    if (!n2?.value || !t2.multiple || !Array.isArray(e2.value)) return;
    let s2 = a2().filter((e3) => e3.ref.dataset.disabled !== ``).find((e3) => e3.ref === i3)?.value;
    if (!s2) return;
    let c2 = null;
    switch (r3) {
      case `prev`:
      case `next`:
        c2 = Y(o2, n2.value, s2);
        break;
      case `first`:
        c2 = Y(o2, n2.value, o2?.[0]);
        break;
      case `last`:
        c2 = Y(o2, n2.value, o2.at(-1));
        break;
    }
    e2.value = c2;
  }
  return { firstValue: n2, onSelectItem: r2, handleMultipleReplace: i2 };
}
var Q = g({ __name: `RovingFocusItem`, props: { tabStopId: { type: String, required: false }, focusable: { type: Boolean, required: false, default: true }, active: { type: Boolean, required: false }, allowShiftKey: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(t2) {
  let n2 = t2, i2 = ie(), a2 = oe(), o2 = m(() => n2.tabStopId || a2), s2 = m(() => i2.currentTabStopId.value === o2.value), { getItems: c2, CollectionItem: l2 } = K();
  u(() => {
    n2.focusable && i2.onFocusableItemAdd();
  }), p(() => {
    n2.focusable && i2.onFocusableItemRemove();
  });
  function d2(e2) {
    if (e2.key === `Tab` && e2.shiftKey) {
      i2.onItemShiftTab();
      return;
    }
    if (e2.target !== e2.currentTarget) return;
    let t3 = U(e2, i2.orientation.value, i2.dir.value);
    if (t3 !== void 0) {
      if (e2.metaKey || e2.ctrlKey || e2.altKey || !n2.allowShiftKey && e2.shiftKey) return;
      e2.preventDefault();
      let r2 = [...c2().map((e3) => e3.ref).filter((e3) => e3.dataset.disabled !== ``)];
      if (t3 === `last`) r2.reverse();
      else if (t3 === `prev` || t3 === `next`) {
        t3 === `prev` && r2.reverse();
        let n3 = r2.indexOf(e2.currentTarget);
        r2 = i2.loop.value ? H(r2, n3 + 1) : r2.slice(n3 + 1);
      }
      x(() => J(r2));
    }
  }
  return (t3, n3) => (_(), S(r(l2), null, { default: y(() => [e(r(N), { tabindex: s2.value ? 0 : -1, "data-orientation": r(i2).orientation.value, "data-active": t3.active ? `` : void 0, "data-disabled": t3.focusable ? void 0 : ``, as: t3.as, "as-child": t3.asChild, onMousedown: n3[0] || (n3[0] = (e2) => {
    t3.focusable ? r(i2).onItemFocus(o2.value) : e2.preventDefault();
  }), onFocus: n3[1] || (n3[1] = (e2) => r(i2).onItemFocus(o2.value)), onKeydown: d2 }, { default: y(() => [E(t3.$slots, `default`)]), _: 3 }, 8, [`tabindex`, `data-orientation`, `data-active`, `data-disabled`, `as`, `as-child`])]), _: 3 }));
} });
function $(e2) {
  return e2.reduce((e3, t2) => (e3.push(t2), t2.children && e3.push(...$(t2.children)), e3), []);
}
var [ue, de] = A(`TreeRoot`), fe = g({ __name: `TreeRoot`, props: { modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, items: { type: Array, required: false }, expanded: { type: Array, required: false }, defaultExpanded: { type: Array, required: false }, getKey: { type: Function, required: true }, getChildren: { type: Function, required: false, default: (e2) => e2.children }, selectionBehavior: { type: String, required: false, default: `toggle` }, multiple: { type: Boolean, required: false, skipCheck: true }, dir: { type: String, required: false }, disabled: { type: Boolean, required: false }, propagateSelect: { type: Boolean, required: false }, bubbleSelect: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `ul` } }, emits: [`update:modelValue`, `update:expanded`], setup(t2, { emit: n2 }) {
  let i2 = t2, o2 = n2, { items: s2, multiple: c2, disabled: l2, propagateSelect: u2, dir: d2, bubbleSelect: f2 } = a(i2), { handleTypeaheadSearch: p2 } = W(), h2 = ae(d2), g2 = C(), v2 = C(false), b2 = L(), w2 = R(i2, `modelValue`, o2, { defaultValue: i2.defaultValue ?? (c2.value ? [] : void 0), passive: true, deep: true }), T2 = R(i2, `expanded`, o2, { defaultValue: i2.defaultExpanded ?? [], passive: i2.expanded === void 0, deep: true }), { onSelectItem: D2, handleMultipleReplace: A2 } = le(w2, i2), j2 = m(() => c2.value && Array.isArray(w2.value) ? w2.value.map((e2) => i2.getKey(e2)) : [i2.getKey(w2.value ?? {})]);
  function M2(e2, t3 = 1, n3) {
    return e2.reduce((r2, a2, o3) => {
      let s3 = i2.getKey(a2), c3 = i2.getChildren(a2), l3 = T2.value.includes(s3), u3 = { _id: s3, value: a2, index: o3, level: t3, parentItem: n3, hasChildren: !!c3, bind: { value: a2, level: t3, "aria-setsize": e2.length, "aria-posinset": o3 + 1 } };
      return r2.push(u3), c3 && l3 && r2.push(...M2(c3, t3 + 1, a2)), r2;
    }, []);
  }
  let P2 = m(() => {
    let e2 = i2.items;
    return T2.value.map((e3) => e3), M2(e2 ?? []);
  });
  function F2(e2) {
    if (v2.value) b2.trigger(e2);
    else {
      let t3 = g2.value?.getItems() ?? [];
      p2(e2.key, t3);
    }
  }
  function ee2(e2) {
    if (v2.value) return;
    let t3 = X[e2.key];
    x(() => {
      A2(t3, G(), g2.value?.getItems, P2.value.map((e3) => e3.value));
    });
  }
  function I2(e2) {
    if (e2.parentItem != null && Array.isArray(w2.value) && i2.multiple) {
      let t3 = P2.value.find((t4) => e2.parentItem != null && i2.getKey(t4.value) === i2.getKey(e2.parentItem));
      t3 != null && (i2.getChildren(t3.value)?.every((e3) => w2.value.find((t4) => i2.getKey(t4) === i2.getKey(e3))) ? w2.value = [...w2.value, t3.value] : w2.value = w2.value.filter((e3) => i2.getKey(e3) !== i2.getKey(t3.value)), I2(t3));
    }
  }
  return de({ modelValue: w2, selectedKeys: j2, onSelect: (e2) => {
    let t3 = (t4) => i2.getKey(t4 ?? {}) === i2.getKey(e2), n3 = i2.multiple && Array.isArray(w2.value) ? w2.value?.findIndex(t3) !== -1 : void 0;
    if (D2(e2, t3), i2.bubbleSelect && i2.multiple && Array.isArray(w2.value)) {
      let t4 = P2.value.find((t5) => i2.getKey(t5.value) === i2.getKey(e2));
      t4 != null && I2(t4);
    }
    if (i2.propagateSelect && i2.multiple && Array.isArray(w2.value)) {
      let t4 = $(i2.getChildren(e2) ?? []);
      n3 ? w2.value = [...w2.value].filter((e3) => !t4.some((t5) => i2.getKey(e3 ?? {}) === i2.getKey(t5))) : w2.value = [...w2.value, ...t4];
    }
  }, expanded: T2, onToggle(e2) {
    if (!(e2 && i2.getChildren(e2))) return;
    let t3 = i2.getKey(e2) ?? e2;
    T2.value.includes(t3) ? T2.value = T2.value.filter((e3) => e3 !== t3) : T2.value = [...T2.value, t3];
  }, getKey: i2.getKey, getChildren: i2.getChildren, items: s2, expandedItems: P2, disabled: l2, multiple: c2, dir: h2, propagateSelect: u2, bubbleSelect: f2, isVirtual: v2, virtualKeydownHook: b2, handleMultipleReplace: A2 }), (t3, n3) => (_(), S(r(ne), { ref_key: `rovingFocusGroupRef`, ref: g2, "as-child": ``, orientation: `vertical`, dir: r(h2) }, { default: y(() => [e(r(N), { role: `tree`, as: t3.as, "as-child": t3.asChild, "aria-multiselectable": r(c2) ? true : void 0, onKeydown: [F2, O(k(ee2, [`shift`]), [`up`, `down`])] }, { default: y(() => [E(t3.$slots, `default`, { flattenItems: P2.value, modelValue: r(w2), expanded: r(T2) })]), _: 3 }, 8, [`as`, `as-child`, `aria-multiselectable`, `onKeydown`])]), _: 3 }, 8, [`dir`]));
} }), pe = `tree.select`, me = `tree.toggle`, he = g({ inheritAttrs: false, __name: `TreeItem`, props: { value: { type: null, required: true }, level: { type: Number, required: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `li` } }, emits: [`select`, `toggle`], setup(t2, { expose: n2, emit: i2 }) {
  let a2 = t2, o2 = i2, s2 = ue(), { getItems: c2 } = K(), l2 = m(() => !!s2.getChildren(a2.value)), u2 = m(() => {
    let e2 = s2.getKey(a2.value);
    return s2.expanded.value.includes(e2);
  }), d2 = m(() => {
    let e2 = s2.getKey(a2.value);
    return s2.selectedKeys.value.includes(e2);
  }), p2 = m(() => {
    if (s2.bubbleSelect.value && l2.value && Array.isArray(s2.modelValue.value)) {
      let e2 = $(s2.getChildren(a2.value) || []);
      return e2.some((e3) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e3))) && !e2.every((e3) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e3)));
    } else if (s2.propagateSelect.value && d2.value && l2.value && Array.isArray(s2.modelValue.value)) return !$(s2.getChildren(a2.value) || []).every((e2) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e2)));
    else return;
  });
  function h2(e2) {
    if (l2.value) if (u2.value) {
      let e3 = c2().map((e4) => e4.ref), t3 = G(), n3 = e3.indexOf(t3), r2 = [...e3].slice(n3).find((e4) => Number(e4.getAttribute(`data-indent`)) === a2.level + 1);
      r2 && r2.focus();
    } else C2(e2);
  }
  function g2(e2) {
    if (u2.value) C2(e2);
    else {
      let e3 = c2().map((e4) => e4.ref), t3 = G(), n3 = e3.indexOf(t3), r2 = [...e3].slice(0, n3).reverse().find((e4) => Number(e4.getAttribute(`data-indent`)) === a2.level - 1);
      r2 && r2.focus();
    }
  }
  async function v2(e2) {
    o2(`select`, e2), !e2?.defaultPrevented && s2.onSelect(a2.value);
  }
  async function b2(e2) {
    o2(`toggle`, e2), !e2?.defaultPrevented && s2.onToggle(a2.value);
  }
  async function x2(e2) {
    e2 && Z(pe, v2, { originalEvent: e2, value: a2.value, isExpanded: u2.value, isSelected: d2.value });
  }
  async function C2(e2) {
    e2 && Z(me, b2, { originalEvent: e2, value: a2.value, isExpanded: u2.value, isSelected: d2.value });
  }
  return n2({ isExpanded: u2, isSelected: d2, isIndeterminate: p2, handleToggle: () => s2.onToggle(a2.value), handleSelect: () => s2.onSelect(a2.value) }), (t3, n3) => (_(), S(r(Q), { "as-child": ``, value: t3.value, "allow-shift-key": `` }, { default: y(() => [e(r(N), f(t3.$attrs, { role: `treeitem`, as: t3.as, "as-child": t3.asChild, "aria-selected": d2.value, "aria-expanded": l2.value ? u2.value : void 0, "aria-level": t3.level, "data-indent": t3.level, "data-selected": d2.value ? `` : void 0, "data-expanded": u2.value ? `` : void 0, onKeydown: [O(k(x2, [`self`, `prevent`]), [`enter`, `space`]), n3[0] || (n3[0] = O(k((e2) => r(s2).dir.value === `ltr` ? h2(e2) : g2(e2), [`prevent`]), [`right`])), n3[1] || (n3[1] = O(k((e2) => r(s2).dir.value === `ltr` ? g2(e2) : h2(e2), [`prevent`]), [`left`]))], onClick: n3[2] || (n3[2] = k((e2) => {
    x2(e2), C2(e2);
  }, [`stop`])) }), { default: y(() => [E(t3.$slots, `default`, { isExpanded: u2.value, isSelected: d2.value, isIndeterminate: p2.value, handleSelect: () => r(s2).onSelect(t3.value), handleToggle: () => r(s2).onToggle(t3.value) })]), _: 3 }, 16, [`as`, `as-child`, `aria-selected`, `aria-expanded`, `aria-level`, `data-indent`, `data-selected`, `data-expanded`, `onKeydown`])]), _: 3 }, 8, [`value`]));
} }), ge = g({ __name: `TreeVirtualizer`, props: { overscan: { type: Number, required: false }, estimateSize: { type: [Number, Function], required: false }, textContent: { type: Function, required: false } }, setup(e2) {
  let t2 = e2, i2 = n(), a2 = ue(), o2 = z(), { getItems: s2 } = K(), u2 = B(``, 1e3), f2 = m(() => {
    let e3 = (e4) => t2.textContent ? t2.textContent(e4) : e4.toString().toLowerCase();
    return a2.expandedItems.value.map((t3, n2) => ({ index: n2, textContent: e3(t3.value) }));
  });
  a2.isVirtual.value = true;
  let p2 = m(() => {
    let e3 = o2.value;
    if (e3) {
      let t3 = window.getComputedStyle(e3);
      return { start: Number.parseFloat(t3.paddingBlockStart || t3.paddingTop), end: Number.parseFloat(t3.paddingBlockEnd || t3.paddingBottom) };
    } else return { start: 0, end: 0 };
  }), g2 = re({ get scrollPaddingStart() {
    return p2.value.start;
  }, get scrollPaddingEnd() {
    return p2.value.end;
  }, get count() {
    return a2.expandedItems.value.length ?? 0;
  }, get horizontal() {
    return false;
  }, getItemKey(e3) {
    return e3 + a2.getKey(a2.expandedItems.value[e3].value);
  }, estimateSize(e3) {
    return typeof t2.estimateSize == `function` ? t2.estimateSize(e3) : t2.estimateSize ?? 28;
  }, getScrollElement() {
    return o2.value;
  }, overscan: t2.overscan ?? 12 }), y2 = m(() => g2.value.getVirtualItems().map((e3) => ({ item: e3, is: h(i2.default({ item: a2.expandedItems.value[e3.index], virtualizer: g2.value, virtualItem: e3 })[0], { "data-index": e3.index, style: { position: `absolute`, top: 0, left: 0, transform: `translateY(${e3.start}px)`, overflowAnchor: `none` } }) })));
  function b2(e3) {
    g2.value.scrollToIndex(e3, { align: `start` }), requestAnimationFrame(() => {
      let t3 = o2.value.querySelector(`[data-index="${e3}"]`);
      t3 instanceof HTMLElement && t3.focus();
    });
  }
  return a2.virtualKeydownHook.on((e3) => {
    let t3 = e3.altKey || e3.ctrlKey || e3.metaKey;
    if (e3.key === `Tab` && !t3) return;
    let n2 = X[e3.key];
    if ([`first`, `last`].includes(n2)) {
      e3.preventDefault();
      let t4 = n2 === `first` ? 0 : a2.expandedItems.value.length - 1;
      g2.value.scrollToIndex(t4), requestAnimationFrame(() => {
        let e4 = s2();
        (n2 === `first` ? e4[0] : e4.at(-1)).ref.focus();
      });
    } else if (n2 === `prev` && e3.key !== `ArrowUp`) {
      let e4 = G(), t4 = Number(e4.getAttribute(`data-index`)), n3 = Number(e4.getAttribute(`data-indent`)), r2 = a2.expandedItems.value.slice(0, t4).map((e5, t5) => ({ ...e5, index: t5 })).reverse().find((e5) => e5.level === n3 - 1);
      r2 && b2(r2.index);
    } else if (!n2 && !t3) {
      u2.value += e3.key;
      let t4 = Number(G()?.getAttribute(`data-index`)), n3 = f2.value[t4].textContent, r2 = q(f2.value.map((e4) => e4.textContent), u2.value, n3), i3 = f2.value.find((e4) => e4.textContent === r2);
      i3 && b2(i3.index);
    }
    x(() => {
      e3.shiftKey && n2 && a2.handleMultipleReplace(n2, G(), s2, a2.expandedItems.value.map((e4) => e4.value));
    });
  }), (e3, t3) => (_(), c(`div`, { "data-reka-virtualizer": ``, style: d({ position: `relative`, width: `100%`, height: `${r(g2).getTotalSize()}px` }) }, [(_(true), c(v, null, l(y2.value, ({ is: e4, item: t4 }) => (_(), S(T(e4), { key: t4.key }))), 128))], 4));
} }), _e = { slots: { root: `relative isolate`, item: `w-full`, listWithChildren: `border-s border-default`, itemWithChildren: `ps-1.5 -ms-px`, link: `relative group w-full flex items-center text-sm select-none before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2`, linkLeadingIcon: `shrink-0 relative`, linkLabel: `truncate`, linkTrailing: `ms-auto inline-flex gap-1.5 items-center`, linkTrailingIcon: `shrink-0 transform transition-transform duration-200 group-data-expanded:rotate-180` }, variants: { virtualize: { true: { root: `overflow-y-auto` } }, color: { primary: { link: `focus-visible:before:ring-primary` }, secondary: { link: `focus-visible:before:ring-secondary` }, success: { link: `focus-visible:before:ring-success` }, info: { link: `focus-visible:before:ring-info` }, warning: { link: `focus-visible:before:ring-warning` }, error: { link: `focus-visible:before:ring-error` }, neutral: { link: `focus-visible:before:ring-inverted` } }, size: { xs: { listWithChildren: `ms-4`, link: `px-2 py-1 text-xs gap-1`, linkLeadingIcon: `size-4`, linkTrailingIcon: `size-4` }, sm: { listWithChildren: `ms-4.5`, link: `px-2.5 py-1.5 text-xs gap-1.5`, linkLeadingIcon: `size-4`, linkTrailingIcon: `size-4` }, md: { listWithChildren: `ms-5`, link: `px-2.5 py-1.5 text-sm gap-1.5`, linkLeadingIcon: `size-5`, linkTrailingIcon: `size-5` }, lg: { listWithChildren: `ms-5.5`, link: `px-3 py-2 text-sm gap-2`, linkLeadingIcon: `size-5`, linkTrailingIcon: `size-5` }, xl: { listWithChildren: `ms-6`, link: `px-3 py-2 text-base gap-2`, linkLeadingIcon: `size-6`, linkTrailingIcon: `size-6` } }, selected: { true: { link: `before:bg-elevated` } }, disabled: { true: { link: `cursor-not-allowed opacity-75` } } }, compoundVariants: [{ color: `primary`, selected: true, class: { link: `text-primary` } }, { color: `secondary`, selected: true, class: { link: `text-secondary` } }, { color: `success`, selected: true, class: { link: `text-success` } }, { color: `info`, selected: true, class: { link: `text-info` } }, { color: `warning`, selected: true, class: { link: `text-warning` } }, { color: `error`, selected: true, class: { link: `text-error` } }, { color: `neutral`, selected: true, class: { link: `text-highlighted` } }, { selected: false, disabled: false, class: { link: [`hover:text-highlighted hover:before:bg-elevated/50`, `transition-colors before:transition-colors`] } }], defaultVariants: { color: `primary`, size: `md` } }, ve = Object.assign({ inheritAttrs: false }, { __name: `Tree`, props: { as: { type: null, required: false }, color: { type: null, required: false }, size: { type: null, required: false }, getKey: { type: Function, required: false }, labelKey: { type: null, required: false, default: `label` }, trailingIcon: { type: null, required: false }, expandedIcon: { type: null, required: false }, collapsedIcon: { type: null, required: false }, items: { type: null, required: false }, modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, nested: { type: Boolean, required: false, default: true }, virtualize: { type: [Boolean, Object], required: false, default: false }, onSelect: { type: Function, required: false }, onToggle: { type: Function, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, expanded: { type: Array, required: false }, defaultExpanded: { type: Array, required: false }, selectionBehavior: { type: String, required: false }, propagateSelect: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, bubbleSelect: { type: Boolean, required: false } }, emits: [`update:modelValue`, `update:expanded`], setup(a2, { expose: u2, emit: p2 }) {
  let h2 = a2, g2 = p2, x2 = n(), C2 = M(), O2 = ee(`tree`, h2), k2 = se(te(h2, `items`, `multiple`, `expanded`, `disabled`, `propagateSelect`, `bubbleSelect`), g2), A2 = m(() => typeof h2.as == `string` || typeof h2.as?.render == `function` ? { root: h2.as, link: `button` } : P(h2.as, { root: `ul`, link: `button` })), N2 = m(() => h2.virtualize ? false : h2.nested), L2 = m(() => {
    let e2 = { xs: { base: 2, perLevel: 5.5 }, sm: { base: 2.5, perLevel: 6 }, md: { base: 2.5, perLevel: 6.5 }, lg: { base: 3, perLevel: 7 }, xl: { base: 3, perLevel: 7.5 } }[h2.size || `md`];
    return (t2) => `calc(var(--spacing) * ${(t2 - 1) * e2.perLevel + e2.base})`;
  }), R2 = w(() => h2.virtualize ? P(typeof h2.virtualize == `boolean` ? {} : h2.virtualize, { estimateSize: ce(h2.items || [], h2.size || `md`) }) : false), [z2, B2] = V(), [H2, U2] = V({ props: { item: { type: Object, required: true }, index: { type: Number, required: true }, level: { type: Number, required: true } } }), W2 = m(() => F({ extend: F(_e), ...C2.ui?.tree || {} })({ color: h2.color, size: h2.size, virtualize: !!h2.virtualize })), G2 = i(`rootRef`);
  function K2(e2) {
    return j(e2, h2.labelKey);
  }
  function q2(e2) {
    return h2.getKey && h2.getKey(e2) || K2(e2);
  }
  function J2(e2) {
    return [e2.defaultExpanded ? q2(e2) : null, ...e2.children?.flatMap((e3) => J2(e3)) ?? []].filter(Boolean);
  }
  let Y2 = m(() => h2.defaultExpanded ?? h2.items?.flatMap((e2) => J2(e2)));
  return u2({ get $el() {
    return G2.value?.$el;
  } }), (n2, i2) => (_(), c(v, null, [e(r(H2), null, { default: y(({ item: i3, index: l2, level: u3 }) => [s(`li`, { role: `presentation`, class: o(N2.value && u3 > 1 ? W2.value.itemWithChildren({ class: [r(O2)?.itemWithChildren, i3.ui?.itemWithChildren] }) : W2.value.item({ class: [r(O2)?.item, i3.ui?.item] })) }, [e(r(he), { level: u3, value: i3, "as-child": ``, onToggle: (e2) => (i3.onToggle ?? h2.onToggle)?.(e2, i3), onSelect: (e2) => (i3.onSelect ?? h2.onSelect)?.(e2, i3) }, { default: y(({ isExpanded: s2, isSelected: p3, isIndeterminate: m2, handleSelect: h3, handleToggle: g3 }) => [E(n2.$slots, i3.slot ? `${i3.slot}-wrapper` : `item-wrapper`, f({ index: l2, level: u3, expanded: s2, selected: p3, indeterminate: m2, handleSelect: h3, handleToggle: g3, ui: W2.value }, { item: i3 }), () => [(_(), S(T(A2.value.link), { type: A2.value.link === `button` ? `button` : void 0, disabled: i3.disabled || a2.disabled, "data-slot": `link`, class: o(W2.value.link({ class: [r(O2)?.link, i3.ui?.link, i3.class], selected: p3, disabled: i3.disabled || a2.disabled })), style: d(!N2.value && u3 > 1 ? { paddingLeft: L2.value(u3) } : void 0) }, { default: y(() => [E(n2.$slots, i3.slot || `item`, f({ index: l2, level: u3, expanded: s2, selected: p3, indeterminate: m2, handleSelect: h3, handleToggle: g3, ui: W2.value }, { item: i3 }), () => [E(n2.$slots, i3.slot ? `${i3.slot}-leading` : `item-leading`, f({ index: l2, level: u3, expanded: s2, selected: p3, indeterminate: m2, handleSelect: h3, handleToggle: g3, ui: W2.value }, { item: i3 }), () => [i3.icon ? (_(), S(I, { key: 0, name: i3.icon, "data-slot": `linkLeadingIcon`, class: o(W2.value.linkLeadingIcon({ class: [r(O2)?.linkLeadingIcon, i3.ui?.linkLeadingIcon] })) }, null, 8, [`name`, `class`])) : i3.children?.length ? (_(), S(I, { key: 1, name: s2 ? a2.expandedIcon ?? r(C2).ui.icons.folderOpen : a2.collapsedIcon ?? r(C2).ui.icons.folder, "data-slot": `linkLeadingIcon`, class: o(W2.value.linkLeadingIcon({ class: [r(O2)?.linkLeadingIcon, i3.ui?.linkLeadingIcon] })) }, null, 8, [`name`, `class`])) : D(``, true)]), K2(i3) || x2[i3.slot ? `${i3.slot}-label` : `item-label`] ? (_(), c(`span`, { key: 0, "data-slot": `linkLabel`, class: o(W2.value.linkLabel({ class: [r(O2)?.linkLabel, i3.ui?.linkLabel] })) }, [E(n2.$slots, i3.slot ? `${i3.slot}-label` : `item-label`, f({ index: l2, level: u3, expanded: s2, selected: p3, indeterminate: m2, handleSelect: h3, handleToggle: g3, ui: W2.value }, { item: i3 }), () => [t(b(K2(i3)), 1)])], 2)) : D(``, true), i3.trailingIcon || i3.children?.length || x2[i3.slot ? `${i3.slot}-trailing` : `item-trailing`] ? (_(), c(`span`, { key: 1, "data-slot": `linkTrailing`, class: o(W2.value.linkTrailing({ class: [r(O2)?.linkTrailing, i3.ui?.linkTrailing] })) }, [E(n2.$slots, i3.slot ? `${i3.slot}-trailing` : `item-trailing`, f({ index: l2, level: u3, expanded: s2, selected: p3, indeterminate: m2, handleSelect: h3, handleToggle: g3, ui: W2.value }, { item: i3 }), () => [i3.trailingIcon ? (_(), S(I, { key: 0, name: i3.trailingIcon, "data-slot": `linkTrailingIcon`, class: o(W2.value.linkTrailingIcon({ class: [r(O2)?.linkTrailingIcon, i3.ui?.linkTrailingIcon] })) }, null, 8, [`name`, `class`])) : i3.children?.length ? (_(), S(I, { key: 1, name: a2.trailingIcon ?? r(C2).ui.icons.chevronDown, "data-slot": `linkTrailingIcon`, class: o(W2.value.linkTrailingIcon({ class: [r(O2)?.linkTrailingIcon, i3.ui?.linkTrailingIcon] })) }, null, 8, [`name`, `class`])) : D(``, true)])], 2)) : D(``, true)])]), _: 2 }, 1032, [`type`, `disabled`, `class`, `style`]))]), N2.value && i3.children?.length && s2 ? (_(), c(`ul`, { key: 0, role: `group`, "data-slot": `listWithChildren`, class: o(W2.value.listWithChildren({ class: [r(O2)?.listWithChildren, i3.ui?.listWithChildren] })) }, [e(r(B2), { items: i3.children, level: u3 + 1 }, null, 8, [`items`, `level`])], 2)) : D(``, true)]), _: 2 }, 1032, [`level`, `value`, `onToggle`, `onSelect`])], 2)]), _: 3 }), e(r(z2), null, { default: y(({ items: e2, level: t2 }) => [(_(true), c(v, null, l(e2, (e3, n3) => (_(), S(r(U2), { key: `${t2}-${n3}`, item: e3, index: n3, level: t2 }, null, 8, [`item`, `index`, `level`]))), 128))]), _: 1 }), e(r(fe), f({ ref_key: `rootRef`, ref: G2 }, { ...r(k2), ...n2.$attrs }, { as: A2.value.root, "model-value": a2.modelValue, "default-value": a2.defaultValue, "data-slot": `root`, class: W2.value.root({ class: [r(O2)?.root, h2.class] }), "get-key": q2, "default-expanded": Y2.value, "selection-behavior": a2.selectionBehavior }), { default: y(({ flattenItems: t2 }) => [a2.virtualize ? (_(), S(r(ge), f({ key: 0, "text-content": (e2) => K2(e2.value) }, R2.value), { default: y(({ item: t3, virtualItem: n3 }) => [e(r(U2), { item: t3.value, index: n3.index, level: t3.level }, null, 8, [`item`, `index`, `level`])]), _: 1 }, 16, [`text-content`])) : N2.value ? (_(), S(r(B2), { key: 2, items: a2.items, level: 1 }, null, 8, [`items`])) : (_(true), c(v, { key: 1 }, l(t2, (e2, t3) => (_(), S(r(U2), { key: e2._id, item: e2.value, index: t3, level: e2.level }, null, 8, [`item`, `index`, `level`]))), 128))]), _: 1 }, 16, [`as`, `model-value`, `default-value`, `class`, `default-expanded`, `selection-behavior`])], 64));
} });
export {
  Q as n,
  ve as t
};
