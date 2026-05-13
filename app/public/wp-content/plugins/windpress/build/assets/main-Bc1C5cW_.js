import { Ct as e, D as t, E as n, Ht as r, J as i, On as a, St as o, Yt as s, Zn as c, _ as l, b as u, bt as d, ct as f, er as p, l as m, mt as h, o as g, qt as _, tr as v, tt as y, v as b, vn as x, xt as S, y as C } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { n as w, r as ee, s as te } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { y as ne } from "./dist-BY3QSpe-.js";
import { t as re } from "./set-Bnp0_Ia6.js";
import { t as ie } from "./vfs-DziqLF6T.js";
import { c as ae, i as oe } from "./intellisense-iY_xPBd-.js";
import "./tailwindcss-O_juf7r1.js";
import { t as T } from "./logger-BvowV9fY.js";
import { t as E } from "./_plugin-vue_export-helper-4qEyeFbT.js";
import { a as se, i as ce, n as le, r as ue, t as de } from "./chevron-right-ClF9HlQ2.js";
import { n as D, r as fe, t as O } from "./constant-BJspwAtg.js";
var pe = { id: `windpressbricks-variable-app-header`, class: `header-container` }, me = { class: `header-content` }, he = { class: `header-logo` }, ge = { class: `header-title` }, _e = E({ __name: `PanelHeader`, setup(c2) {
  let d2 = i(`variableApp`), p2 = i(`isOpen`);
  function m2() {
    let e2 = d2.querySelector(`#windpressbricks-variable-app-header`), t2 = x(false), n2 = 0, i2 = 0;
    r(t2, (t3) => {
      t3 ? (document.body.style.userSelect = `none`, O.style.pointerEvents = `none`, e2.style.cursor = `grabbing`) : (document.body.style.removeProperty(`user-select`), O.style.removeProperty(`pointer-events`), e2.style.cursor = `grab`);
    });
    let a2 = (r2) => {
      t2.value = true;
      let a3 = e2.getBoundingClientRect();
      n2 = r2.clientX - a3.left, i2 = r2.clientY - a3.top;
    };
    e2.removeEventListener(`mousedown`, a2), e2.addEventListener(`mousedown`, a2);
    let o2 = (r2) => {
      if (!t2.value) return;
      let a3 = e2.getBoundingClientRect(), o3 = r2.clientX, s3 = r2.clientY, c3 = o3 - n2, l2 = s3 - i2, u2 = c3 < 0 ? 0 : c3 > window.innerWidth - a3.width ? window.innerWidth - a3.width : c3, f2 = l2 < 0 ? 0 : l2 > window.innerHeight - a3.height ? window.innerHeight - a3.height : l2;
      d2.style.left = `${u2}px`, d2.style.top = `${f2}px`;
    };
    document.removeEventListener(`mousemove`, o2), document.addEventListener(`mousemove`, o2);
    let s2 = (e3) => {
      t2.value = false;
    };
    document.removeEventListener(`mouseup`, s2), document.addEventListener(`mouseup`, s2);
  }
  return f(() => {
    m2();
  }), (r2, i2) => {
    let c3 = o(`inline-svg`), d3 = ue, f2 = e(`tooltip`);
    return h(), u(`div`, pe, [l(`div`, me, [l(`div`, he, [t(c3, { src: a(le), class: `inline-svg` }, null, 8, [`src`])]), s((h(), u(`div`, ge, [...i2[1] || (i2[1] = [n(` WindPress `, -1)])])), [[f2, { placement: `top`, content: `v${r2.windpressbricks._version}` }]]), s((h(), u(`button`, { class: `header-exit`, onClick: i2[0] || (i2[0] = (e2) => p2.value = !a(p2)) }, [t(d3, { class: `iconify` })])), [[f2, { placement: `top`, content: `Close` }]])])]);
  };
} }, [[`__scopeId`, `data-v-8d964b4c`]]), k = { class: `header-slot` }, A = { key: 0, class: `expansion-panel__body` }, j = E({ __name: `ExpansionPanel`, props: { namespace: { type: String, required: true }, name: { type: String, required: true } }, setup(e2, { expose: n2 }) {
  let r2 = e2, i2 = x(null), o2 = ne(`windpressbricks-variable-app.ui.expansion-panels.${r2.namespace}`, { [`${r2.name}`]: false }, void 0, { mergeDefaults: true });
  function s2(e3) {
    o2.value[r2.name] = e3 === null ? !o2.value[r2.name] : e3;
  }
  function d2() {
    i2.value.scrollIntoView();
  }
  return n2({ togglePanel: s2, scrollIntoView: d2 }), (n3, r3) => {
    let s3 = de;
    return h(), u(`div`, { ref_key: `sectionRef`, ref: i2, class: `expansion-panel` }, [l(`div`, { class: c([{}, `expansion-panel__header`]), onClick: r3[0] || (r3[0] = (t2) => a(o2)[e2.name] = !a(o2)[e2.name]) }, [l(`div`, k, [S(n3.$slots, `header`, {}, void 0, true)]), l(`div`, null, [t(s3, { style: p({ transform: a(o2)[e2.name] ? `rotate(-90deg)` : `rotate(0deg)` }), class: `iconify` }, null, 8, [`style`])])]), t(w, null, { default: _(() => [a(o2)[e2.name] ? (h(), u(`div`, A, [S(n3.$slots, `default`, {}, void 0, true)])) : C(``, true)]), _: 3 })], 512);
  };
} }, [[`__scopeId`, `data-v-e8a9feac`]]), M = { class: `{m:10;pb:15}>div` }, N = { class: `variable-section-title font:14 my:10` }, P = { class: `variable-section-items flex flex:row gap:8 flex-wrap:wrap` }, F = [`onClick`, `onMouseenter`], I = { class: `font:14` }, ve = 1e3, L = E({ __name: `CommonVariableItems`, props: { variableItems: { type: Object, required: true } }, setup(t2) {
  let n2 = i(`focusedInput`), r2 = i(`recentVariableSelectionTimestamp`), a2 = i(`tempInputValue`);
  function o2(e2, t3) {
    performance.now() - r2.value < ve || n2.value && (n2.value.value = `var(${t3})`, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus());
  }
  function c2(e2) {
    !n2.value || a2.value === null || (n2.value.value = a2.value, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus());
  }
  function f2(e2, t3) {
    n2.value && (n2.value.value = `var(${t3})`, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus(), a2.value = `var(${t3})`, r2.value = performance.now());
  }
  return (n3, r3) => {
    let i2 = e(`tooltip`);
    return h(), u(`div`, M, [(h(true), u(g, null, d(t2.variableItems, (e2, t3) => (h(), u(`div`, { key: t3, class: `var-item` }, [l(`div`, N, v(t3.replace(`_`, `-`)), 1), l(`div`, P, [e2.length > 0 ? (h(true), u(g, { key: 0 }, d(e2, (e3, t4) => s((h(), u(`button`, { key: t4, class: `px:12 py:8 r:$(builder-border-radius) fg:$(builder-color) bg:$(builder-bg-2) bg:$(builder-bg-3):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% text:center {opacity:.5;font:semibold}>span opacity:100:hover>span`, onClick: (t5) => f2(t5, e3.key), onMouseenter: (t5) => o2(t5, e3.key), onMouseleave: c2 }, [l(`span`, I, v(e3.label), 1)], 40, F)), [[i2, { placement: `top`, content: `var(${e3.key}, ${e3.value})` }]])), 128)) : C(``, true)])]))), 128))]);
  };
} }, [[`__scopeId`, `data-v-4fed79a0`]]);
function R() {
  if (D.$_state.activePanel !== `element`) return null;
  let e2 = D.$_state?.activeElement.id;
  return D.$_getIframeDoc()?.getElementById(`brxe-${e2}`);
}
function z({ selector: e2, callback: t2, options: n2 }) {
  let r2 = new MutationObserver(t2), i2 = document.querySelector(e2);
  if (!i2) {
    T(`Target not found for selector: ${e2}`, { module: `variable-picker`, type: `error` });
    return;
  }
  r2.observe(i2, Object.assign(Object.assign({}, { childList: true, subtree: true }), n2));
}
var ye = { class: `{m:10;pb:15}>div` }, be = { class: `variable-section-title` }, xe = { key: 0, class: `variable-section-items default-color` }, Se = [`onClick`, `onMouseenter`], Ce = [`onClick`, `onMouseenter`], we = 1e3, Te = E({ __name: `ColorVariableItems`, props: { variableItems: { type: Object, required: true } }, setup(t2) {
  let n2 = i(`focusedInput`), r2 = i(`recentColorPickerTarget`), a2 = i(`recentVariableSelectionTimestamp`), o2 = i(`tempInputValue`);
  function c2(e2, t3) {
    if (!(performance.now() - a2.value < we)) {
      if (!n2.value) {
        let e3 = R();
        if (!e3) return;
        for (let { property: n3, control: i2 } of [{ property: `color`, control: `typography` }, { property: `backgroundColor`, control: `background` }, { property: `borderColor`, control: `border` }]) r2.value?.closest(`[data-control="${i2}"]`) && (e3.style[n3] = `var(${t3})`);
        return;
      }
      n2.value.value = `var(${t3})`, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus();
    }
  }
  function f2(e2) {
    if (!n2.value || o2.value === null) {
      let e3 = R();
      if (!e3) return;
      for (let { property: t3, control: n3 } of [{ property: `color`, control: `typography` }, { property: `backgroundColor`, control: `background` }, { property: `borderColor`, control: `border` }]) r2.value?.closest(`[data-control="${n3}"]`) && (e3.style[t3] = ``);
      return;
    }
    n2.value.value = o2.value, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus();
  }
  function m2(e2, t3) {
    if (e2.stopPropagation(), e2.preventDefault(), !n2.value) {
      let e3 = r2.value;
      b2(t3), a2.value = performance.now(), setTimeout(() => {
        let t4 = R();
        if (t4) for (let { property: n3, control: r3 } of [{ property: `color`, control: `typography` }, { property: `backgroundColor`, control: `background` }, { property: `borderColor`, control: `border` }]) e3?.closest(`[data-control="${r3}"]`) && (t4.style[n3] = ``);
      }, 5);
      return;
    }
    n2.value.value = `var(${t3})`, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus(), o2.value = `var(${t3})`, a2.value = performance.now();
  }
  function _2() {
    document.querySelectorAll(`.windpressbricks-variable-app-colorpopup`).forEach((e2) => {
      e2.remove();
    });
  }
  function y2() {
    if (document.querySelector(`.windpressbricks-variable-app-colorpopup`)) return;
    let e2 = document.createElement(`style`);
    e2.id = `windpressbricks-variable-app-bricks-popup`, e2.appendChild(document.createTextNode(`.bricks-control-popup { display: none !important; }`)), e2.classList.add(`windpressbricks-variable-app-colorpopup`), document.head.appendChild(e2);
  }
  async function b2(e2) {
    y2(), document.querySelector(`.bricks-control-popup .color-palette.grid`) || (r2.value?.closest(`.bricks-control-preview`)?.click(), await new Promise((e3) => setTimeout(e3, 25)));
    let t3 = document.querySelector(`.bricks-control-popup .color-palette.grid`);
    t3 ? t3.querySelector(`[data-balloon="var(${e2})"]`)?.parentElement?.click() : T(`Failed to select color. Color grid not found.`, { module: `variable-picker`, type: `error` }), document.querySelector(`body`)?.click(), await new Promise((e3) => setTimeout(e3, 2)), document.querySelector(`.bricks-control-popup`) ? (setTimeout(() => {
      document.querySelector(`body`)?.click(), setTimeout(() => {
        _2();
      }, 5);
    }, 5), T(`Failed to close color picker. Delaying close.`, { module: `variable-picker`, type: `error` })) : _2();
  }
  return (n3, r3) => {
    let i2 = e(`tooltip`);
    return h(), u(`div`, ye, [(h(true), u(g, null, d(t2.variableItems, (e2, t3) => (h(), u(`div`, { key: t3, class: `` }, [l(`div`, be, v(t3), 1), e2.DEFAULT ? (h(), u(`div`, xe, [s(l(`button`, { style: p(`--wp-b-v-item-bg: var(--${e2.DEFAULT.key.slice(2)});`), class: ``, onClick: (t4) => m2(t4, e2.DEFAULT.key), onMouseenter: (t4) => c2(t4, e2.DEFAULT.key), onMouseleave: f2 }, null, 44, Se), [[i2, { placement: `top`, content: `var(${e2.DEFAULT.key}, ${e2.DEFAULT.value})` }]])])) : C(``, true), e2.shades && Object.keys(e2.shades).length > 0 ? (h(), u(`div`, { key: 1, style: p(`--wp-b-v-items-grid: ${Object.keys(e2.shades).length}`), class: `variable-section-items shades-colors` }, [(h(true), u(g, null, d(e2.shades, (e3, t4) => (h(), u(`div`, { key: t4, class: `` }, [s(l(`button`, { style: p(`--wp-b-v-item-bg: var(--${e3.key.slice(2)})`), onClick: (t5) => m2(t5, e3.key), onMouseenter: (t5) => c2(t5, e3.key), onMouseleave: f2 }, null, 44, Ce), [[i2, { placement: `top`, content: `var(${e3.key}, ${e3.value})` }]])]))), 128))], 4)) : C(``, true)]))), 128))]);
  };
} }, [[`__scopeId`, `data-v-2285012c`]]), Ee = { id: `windpressbricks-variable-app-body`, class: `var-body` }, De = E({ __name: `PanelBody`, setup(e2) {
  let n2 = x({ colors: {}, typography: {}, sizing: {} }), a2 = i(`focusedInput`), o2 = i(`recentColorPickerTarget`);
  async function s2() {
    let e3 = await oe(await ae({ volume: ie(fe.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`).textContent) })), t2 = {};
    e3.filter((e4) => e4.key.startsWith(`--color`)).forEach((e4) => {
      let n3 = e4.key.slice(8), r3 = n3.split(`-`), i3 = ``;
      i3 = r3.length > 1 ? `${r3[0]}.shades.'${r3.slice(1).join(`-`)}'` : `${n3}.DEFAULT`, re(t2, i3, e4);
    }), n2.value.colors = Object.keys(t2).sort().reduce((e4, n3) => (e4[n3] = t2[n3], e4), {});
    let r2 = { font_size: [], line_height: [], letter_spacing: [] };
    e3.filter((e4) => e4.key.startsWith(`--text-`) && !e4.key.endsWith(`--line-height`)).forEach((e4) => {
      let t3 = e4.key.slice(7);
      r2.font_size.push({ key: e4.key, label: t3, value: e4.value });
    }), e3.filter((e4) => e4.key.startsWith(`--leading-`) || e4.key.endsWith(`--leading`)).forEach((e4) => {
      let t3 = e4.key.startsWith(`--leading-`) ? e4.key.slice(10) : e4.key.slice(2, -9);
      r2.line_height.push({ key: e4.key, label: t3, value: e4.value });
    }), r2.line_height.sort((e4, t3) => e4.label.startsWith(`font-size-`) && !t3.label.startsWith(`font-size-`) ? 1 : !e4.label.startsWith(`font-size-`) && t3.label.startsWith(`font-size-`) ? -1 : 0), e3.filter((e4) => e4.key.startsWith(`--tracking-`)).forEach((e4) => {
      let t3 = e4.key.slice(11);
      r2.letter_spacing.push({ key: e4.key, label: t3, value: e4.value });
    }), n2.value.typography = r2;
    let i2 = { container: [], breakpoint: [] };
    e3.filter((e4) => e4.key.startsWith(`--container-`)).forEach((e4) => {
      let t3 = e4.key.slice(12);
      i2.container.push({ key: e4.key, label: t3, value: e4.value });
    }), e3.filter((e4) => e4.key.startsWith(`--breakpoint-`)).forEach((e4) => {
      let t3 = e4.key.slice(13);
      i2.breakpoint.push({ key: e4.key, label: t3, value: e4.value });
    }), n2.value.sizing = i2;
  }
  let c2 = x(null), d2 = x(null), p2 = x(null);
  return r(a2, (e3) => {
    if (e3) {
      let t2 = e3.closest(`[data-controlkey]`)?.dataset.controlkey?.toLowerCase() ?? ``, n3 = [`typography`, `font`].some((e4) => t2.includes(e4)), r2 = [`padding`, `margin`, `gap`, `width`, `height`].some((e4) => t2.includes(e4)), i2 = e3.parentElement?.parentElement?.classList.contains(`color-input`);
      d2.value.togglePanel(false), p2.value.togglePanel(false), c2.value.togglePanel(false), i2 ? (c2.value.togglePanel(true), c2.value.scrollIntoView()) : n3 ? (d2.value.togglePanel(true), d2.value.scrollIntoView()) : r2 && (p2.value.togglePanel(true), p2.value.scrollIntoView());
    }
  }), r(o2, (e3) => {
    e3 && (c2.value.togglePanel(true), c2.value.scrollIntoView());
  }), f(() => {
    s2();
  }), new BroadcastChannel(`windpress`).addEventListener(`message`, async (e3) => {
    let t2 = e3.data;
    t2.source === `windpress/intellisense` && t2.task === `windpress.code-editor.saved.done` && setTimeout(() => {
      s2();
    }, 1e3);
  }), (e3, r2) => (h(), u(`div`, Ee, [t(j, { ref_key: `sectionColor`, ref: c2, namespace: `variable`, name: `color` }, { header: _(() => [...r2[0] || (r2[0] = [l(`span`, { class: `var-body-title` }, `Color`, -1)])]), default: _(() => [t(Te, { "variable-items": n2.value.colors }, null, 8, [`variable-items`])]), _: 1 }, 512), t(j, { ref_key: `sectionTypography`, ref: d2, namespace: `variable`, name: `typography` }, { header: _(() => [...r2[1] || (r2[1] = [l(`span`, { class: `var-body-title` }, `Typography`, -1)])]), default: _(() => [t(L, { "variable-items": n2.value.typography }, null, 8, [`variable-items`])]), _: 1 }, 512), t(j, { ref_key: `sectionSpacing`, ref: p2, namespace: `variable`, name: `spacing`, class: `` }, { header: _(() => [...r2[2] || (r2[2] = [l(`span`, { class: `var-body-title` }, `Sizing`, -1)])]), default: _(() => [t(L, { "variable-items": n2.value.sizing }, null, 8, [`variable-items`])]), _: 1 }, 512)]));
} }, [[`__scopeId`, `data-v-a73102ed`]]), Oe = { id: `windpressbricks-variable-app-container`, class: `wp-b-var-container` }, ke = E({ __name: `App`, setup(e2) {
  let n2 = i(`isOpen`);
  return (e3, r2) => s((h(), u(`div`, Oe, [t(_e), (h(), b(m, null, { default: _(() => [t(De)]), _: 1 }))], 512)), [[te, a(n2)]]);
} }, [[`__scopeId`, `data-v-517e011b`]]), B = document.createElement(`windpressbricks-variable-app`);
B.id = `windpressbricks-variable-app`, document.body.appendChild(B);
var V = x(false), H = x(null), U = x(null), W = x(null), Ae = x(0), G = ee(ke);
G.config.globalProperties.windpressbricks = window.windpressbricks, G.provide(`variableApp`, B), G.provide(`isOpen`, V), G.provide(`focusedInput`, H), G.provide(`tempInputValue`, U), G.provide(`recentColorPickerTarget`, W), G.provide(`recentVariableSelectionTimestamp`, Ae), G.use(ce, { container: `#windpressbricks-variable-app` }), G.component(`InlineSvg`, se), G.mount(`#windpressbricks-variable-app`);
function K(e2) {
  return e2 instanceof Element ? e2 : e2?.parentElement ?? null;
}
function je(e2, t2) {
  !e2.shiftKey || !t2 || (document?.getSelection()?.removeAllRanges(), e2.preventDefault(), e2.stopPropagation(), H.value = t2, U.value = t2.value, V.value = true);
}
function q(e2, t2) {
  !e2.shiftKey || !t2 || (e2.preventDefault(), e2.stopPropagation(), document?.getSelection()?.removeAllRanges(), H.value = null, V.value = true, W.value = null, y(() => {
    W.value = t2;
  }));
}
function J(e2) {
  H.value = e2.target;
}
var Y = [`div[data-control="number"]`, { selector: `div[data-control="text"]`, hasChild: [`#_flexBasis`, `#_overflow`, `#_gridTemplateColumns`, `#_gridTemplateRows`, `#_gridAutoColumns`, `#_gridAutoRows`, `#_objectPosition`, `[id^="raw-"]`] }];
function X(e2) {
  return !!e2?.closest(`#bricks-panel-inner, .bricks-control-popup`);
}
function Me(e2) {
  if (!X(e2)) return false;
  let t2 = e2.closest(`[data-control="number"], [data-control="text"]`), n2 = t2?.getAttribute(`data-control`);
  return n2 === `number` ? true : n2 === `text` ? Y.find((e3) => typeof e3 != `string`).hasChild.some((n3) => t2.querySelector(n3) === e2) : false;
}
function Z(e2) {
  if (!X(e2)) return null;
  let t2 = e2?.closest(`.bricks-control-preview`);
  return t2?.closest(`[data-control="color"]`) ? t2 : null;
}
function Ne(e2) {
  if (!e2.shiftKey || !e2.target) return;
  let t2 = K(e2.target), n2 = t2?.closest(`input[type="text"]`);
  if (n2 && Me(n2)) {
    je(e2, n2);
    return;
  }
  let r2 = Z(t2);
  r2 && q(e2, r2);
}
function Pe(e2) {
  if (!e2.shiftKey || !e2.target) return;
  let t2 = Z(K(e2.target));
  t2 && q(e2, t2);
}
function Q() {
  setTimeout(() => {
    Y.forEach((e2) => {
      (typeof e2 == `string` ? [...document.querySelectorAll(e2)] : [...document.querySelectorAll(e2.selector)].filter((t2) => e2.hasChild.some((e3) => t2.querySelector(e3)))).forEach((e3) => {
        let t2 = e3.querySelector(`input[type='text']`);
        t2?.getAttribute(`windpressbricks-variable-app`) !== `listened` && (t2?.removeEventListener(`focus`, J), t2?.addEventListener(`focus`, J), t2?.setAttribute(`windpressbricks-variable-app`, `listened`), t2?.parentNode.setAttribute(`data-balloon`, `Shift + click to open the Variable Picker`), t2?.parentNode.setAttribute(`data-balloon-pos`, `bottom-right`));
      });
    }), document.querySelectorAll(`.bricks-control-preview`).forEach((e2) => {
      Z(e2) && (e2.setAttribute(`data-balloon`, `Shift + click to open the Variable Picker`), e2.setAttribute(`data-balloon-pos`, `bottom-right`));
    });
  }, 100);
}
var $ = false;
z({ selector: `#bricks-panel-inner`, options: { subtree: true, childList: true }, callback() {
  $ || ($ = true, Q(), setTimeout(() => {
    $ = false;
  }, 100));
} }), Q(), document.addEventListener(`click`, Ne, true), document.addEventListener(`contextmenu`, Pe, true), document.addEventListener(`keydown`, (e2) => {
  e2.key === `Escape` && V.value && (V.value = false);
}), r(V, (e2) => {
  B.style.zIndex = e2 ? `calc(Infinity)` : `-1`;
}), T(`Module loaded!`, { module: `variable-picker` });
