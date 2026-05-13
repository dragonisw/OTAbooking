import { Ct as e, D as t, E as n, Ht as r, J as i, On as a, St as o, Yt as s, Zn as c, _ as l, b as u, bt as d, ct as f, er as p, l as m, mt as h, o as g, qt as _, tr as v, v as y, vn as b, xt as x, y as S } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { n as ee, r as te, s as ne } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { y as C } from "./dist-BY3QSpe-.js";
import { t as w } from "./set-Bnp0_Ia6.js";
import { t as re } from "./vfs-DziqLF6T.js";
import { c as ie, i as ae } from "./intellisense-iY_xPBd-.js";
import "./tailwindcss-O_juf7r1.js";
import { t as T } from "./logger-BvowV9fY.js";
import { t as E } from "./_plugin-vue_export-helper-4qEyeFbT.js";
import { a as oe, i as se, n as ce, r as le, t as ue } from "./chevron-right-ClF9HlQ2.js";
import { n as de, t as D } from "./constant-BIDASZgN.js";
var O = { id: `windpressbuilderius-variable-app-header`, class: `header-container bg:$(primary-1) cursor:grab bb:1|solid|$(primary-3)` }, k = { class: `header-content flex gap:10 align-items:center fg:$(base-2)` }, A = { class: `header-logo flex px:12 py:2 align-items:center` }, j = { class: `header-title text-transform:none font:medium text:center flex-grow:1 gap:10 align-items:center cursor:default px:12 py:2` }, M = E({ __name: `PanelHeader`, setup(c2) {
  let d2 = i(`variableApp`), p2 = i(`isOpen`);
  function m2() {
    let e2 = d2.querySelector(`#windpressbuilderius-variable-app-header`), t2 = b(false), n2 = 0, i2 = 0;
    r(t2, (t3) => {
      t3 ? (document.body.style.userSelect = `none`, D.style.pointerEvents = `none`, e2.style.cursor = `grabbing`) : (document.body.style.removeProperty(`user-select`), D.style.removeProperty(`pointer-events`), e2.style.cursor = `grab`);
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
    let c3 = o(`inline-svg`), d3 = le, f2 = e(`tooltip`);
    return h(), u(`div`, O, [l(`div`, k, [l(`div`, A, [t(c3, { src: a(ce), class: `inline-svg fill:current font:24` }, null, 8, [`src`])]), s((h(), u(`div`, j, [...i2[1] || (i2[1] = [n(` WindPress `, -1)])])), [[f2, { placement: `top`, content: `v${r2.windpressbuilderius._version}` }]]), s((h(), u(`button`, { class: `uniPanelIconButton header-exit r:0 bg:$(primary-3):hover py:10 px:12`, onClick: i2[0] || (i2[0] = (e2) => p2.value = !a(p2)) }, [t(d3, { class: `iconify fg:$(base-2) font:16` })])), [[f2, { placement: `top`, content: `Close` }]])])]);
  };
} }, [[`__scopeId`, `data-v-92b2e572`]]), N = { class: `header-slot flex-grow:1` }, P = { key: 0, class: `expansion-panel__body` }, F = E({ __name: `ExpansionPanel`, props: { namespace: { type: String, required: true }, name: { type: String, required: true } }, setup(e2, { expose: n2 }) {
  let r2 = e2, i2 = b(null), o2 = C(`windpressbuilderius-variable-app.ui.expansion-panels.${r2.namespace}`, { [`${r2.name}`]: false }, void 0, { mergeDefaults: true });
  function s2(e3) {
    o2.value[r2.name] = e3 === null ? !o2.value[r2.name] : e3;
  }
  function c2() {
    i2.value.scrollIntoView();
  }
  return n2({ togglePanel: s2, scrollIntoView: c2 }), (n3, r3) => {
    let s3 = ue;
    return h(), u(`div`, { ref_key: `sectionRef`, ref: i2, class: `expansion-panel mx:10 py:8` }, [l(`div`, { class: `expansion-panel__header flex justify-content:space-between p:10 r:8 cursor:pointer`, onClick: r3[0] || (r3[0] = (t2) => a(o2)[e2.name] = !a(o2)[e2.name]) }, [l(`div`, N, [x(n3.$slots, `header`, {}, void 0, true)]), l(`div`, null, [t(s3, { style: p({ transform: a(o2)[e2.name] ? `rotate(-90deg)` : `rotate(0deg)` }), class: `iconify ~duration:300 font:18` }, null, 8, [`style`])])]), t(ee, null, { default: _(() => [a(o2)[e2.name] ? (h(), u(`div`, P, [x(n3.$slots, `default`, {}, void 0, true)])) : S(``, true)]), _: 3 })], 512);
  };
} }, [[`__scopeId`, `data-v-610e6981`]]), I = { class: `{m:10;pb:15}>div` }, L = { class: `variable-section-title font:14 my:10` }, R = { class: `variable-section-items flex flex:row gap:8 flex-wrap:wrap` }, z = [`onClick`, `onMouseenter`], B = { class: `font:14` }, V = E({ __name: `CommonVariableItems`, props: { variableItems: { type: Object, required: true } }, setup(t2) {
  return (n2, r2) => {
    let i2 = e(`tooltip`);
    return h(), u(`div`, I, [(h(true), u(g, null, d(t2.variableItems, (e2, t3) => (h(), u(`div`, { key: t3, class: `var-item` }, [l(`div`, L, v(t3.replace(`_`, `-`)), 1), l(`div`, R, [e2.length > 0 ? (h(true), u(g, { key: 0 }, d(e2, (e3, t4) => s((h(), u(`button`, { key: t4, class: `px:12 py:8 r:8 fg:$(base-1) fg:$(accent-normal):hover bg:$(primary-3) bg:$(primary-2):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% cursor:pointer {opacity:.5}>span opacity:100:hover>span`, onClick: (t5) => n2.$emit(`previewChose`, t5, e3.key), onMouseenter: (t5) => n2.$emit(`previewEnter`, t5, e3.key), onMouseleave: r2[0] || (r2[0] = (e4) => n2.$emit(`previewLeave`)) }, [l(`span`, B, v(e3.label), 1)], 40, z)), [[i2, { placement: `top`, content: `var(${e3.key}, ${e3.value})` }]])), 128)) : S(``, true)])]))), 128))]);
  };
} }, [[`__scopeId`, `data-v-a7b1a00d`]]), H = { class: `{m:10;pb:15}>div` }, fe = { class: `variable-section-title font:14 my:10` }, pe = { key: 0, class: `variable-section-items default-color` }, me = [`onClick`, `onMouseenter`], he = [`onClick`, `onMouseenter`], ge = E({ __name: `ColorVariableItems`, props: { variableItems: { type: Object, required: true } }, setup(t2) {
  return (n2, r2) => {
    let i2 = e(`tooltip`);
    return h(), u(`div`, H, [(h(true), u(g, null, d(t2.variableItems, (e2, t3) => (h(), u(`div`, { key: t3, class: `` }, [l(`div`, fe, v(t3), 1), e2.DEFAULT ? (h(), u(`div`, pe, [s(l(`button`, { class: c([`bg:$(${e2.DEFAULT.key.slice(2)})`, `w:full r:4 h:24 border:1|solid|transparent border:white:hover cursor:pointer`]), style: p(`--wp-b-v-item-bg: var(--${e2.DEFAULT.key.slice(2)});`), onClick: (t4) => n2.$emit(`previewChose`, t4, e2.DEFAULT.key), onMouseenter: (t4) => n2.$emit(`previewEnter`, t4, e2.DEFAULT.key), onMouseleave: r2[0] || (r2[0] = (e3) => n2.$emit(`previewLeave`)) }, null, 46, me), [[i2, { placement: `top`, content: `var(${e2.DEFAULT.key}, ${e2.DEFAULT.value})` }]])])) : S(``, true), e2.shades && Object.keys(e2.shades).length > 0 ? (h(), u(`div`, { key: 1, style: p(`--wp-b-v-items-grid: ${Object.keys(e2.shades).length}`), class: `variable-section-items shades-colors grid r:4 overflow:hidden` }, [(h(true), u(g, null, d(e2.shades, (e3, t4) => (h(), u(`div`, { key: t4, class: `flex gap:10` }, [s(l(`button`, { style: p(`--wp-b-v-item-bg: var(--${e3.key.slice(2)})`), class: `w:full h:24 border:1|solid|transparent border:white:hover cursor:pointer`, onClick: (t5) => n2.$emit(`previewChose`, t5, e3.key), onMouseenter: (t5) => n2.$emit(`previewEnter`, t5, e3.key), onMouseleave: r2[1] || (r2[1] = (e4) => n2.$emit(`previewLeave`)) }, null, 44, he), [[i2, { placement: `top`, content: `var(${e3.key}, ${e3.value})` }]])]))), 128))], 4)) : S(``, true)]))), 128))]);
  };
} }, [[`__scopeId`, `data-v-384d54a0`]]), _e = { id: `windpressbuilderius-variable-app-body`, class: `var-body rel w:full h:full overflow-y:scroll! bb:1|solid|$(primary-3)>div:not(:last-child)` }, ve = 1e3, ye = E({ __name: `PanelBody`, setup(e2) {
  let n2 = b({ colors: {}, typography: {}, sizing: {} }), a2 = i(`focusedInput`), o2 = i(`recentVariableSelectionTimestamp`), s2 = i(`tempInputValue`), c2 = i(`variableApp`);
  async function d2() {
    let e3 = await ae(await ie({ volume: re(de.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`).textContent) })), t2 = c2.querySelector(`style#windpressbuilderius-variable-app-body-style`);
    t2 || (t2 = document.createElement(`style`), t2.id = `windpressbuilderius-variable-app-body-style`, c2.appendChild(t2)), t2.innerHTML = `
        #windpressbuilderius-variable-app-body {
            ${e3.map((e4) => `${e4.key}:${e4.value};`).join(``)}
        }
    `;
    let r2 = {};
    e3.filter((e4) => e4.key.startsWith(`--color`)).forEach((e4) => {
      let t3 = e4.key.slice(8), n3 = t3.split(`-`), i3 = ``;
      i3 = n3.length > 1 ? `${n3[0]}.shades.'${n3.slice(1).join(`-`)}'` : `${t3}.DEFAULT`, w(r2, i3, e4);
    }), n2.value.colors = Object.keys(r2).sort().reduce((e4, t3) => (e4[t3] = r2[t3], e4), {});
    let i2 = { font_size: [], line_height: [], letter_spacing: [] };
    e3.filter((e4) => e4.key.startsWith(`--text-`) && !e4.key.endsWith(`--line-height`)).forEach((e4) => {
      let t3 = e4.key.slice(7);
      i2.font_size.push({ key: e4.key, label: t3, value: e4.value });
    }), e3.filter((e4) => e4.key.startsWith(`--leading-`) || e4.key.endsWith(`--leading`)).forEach((e4) => {
      let t3 = e4.key.startsWith(`--leading-`) ? e4.key.slice(10) : e4.key.slice(2, -9);
      i2.line_height.push({ key: e4.key, label: t3, value: e4.value });
    }), i2.line_height.sort((e4, t3) => e4.label.startsWith(`font-size-`) && !t3.label.startsWith(`font-size-`) ? 1 : !e4.label.startsWith(`font-size-`) && t3.label.startsWith(`font-size-`) ? -1 : 0), e3.filter((e4) => e4.key.startsWith(`--tracking-`)).forEach((e4) => {
      let t3 = e4.key.slice(11);
      i2.letter_spacing.push({ key: e4.key, label: t3, value: e4.value });
    }), n2.value.typography = i2;
    let a3 = { container: [], breakpoint: [] };
    e3.filter((e4) => e4.key.startsWith(`--container-`)).forEach((e4) => {
      let t3 = e4.key.slice(12);
      a3.container.push({ key: e4.key, label: t3, value: e4.value });
    }), e3.filter((e4) => e4.key.startsWith(`--breakpoint-`)).forEach((e4) => {
      let t3 = e4.key.slice(13);
      a3.breakpoint.push({ key: e4.key, label: t3, value: e4.value });
    }), n2.value.sizing = a3;
  }
  let p2 = b(null), m2 = b(null), g2 = b(null);
  r(a2, (e3) => {
    if (e3) {
      let t2 = e3.getAttribute(`name`), n3 = [`color`, `backgroundColor`].some((e4) => t2.includes(e4)), r2 = [`fontSize`].some((e4) => t2.includes(e4)), i2 = [`padding`, `margin`, `gap`, `width`, `height`].some((e4) => t2.includes(e4));
      m2.value.togglePanel(false), g2.value.togglePanel(false), p2.value.togglePanel(false), n3 ? (p2.value.togglePanel(true), p2.value.scrollIntoView()) : r2 ? (m2.value.togglePanel(true), m2.value.scrollIntoView()) : i2 && (g2.value.togglePanel(true), g2.value.scrollIntoView());
    }
  });
  function v2(e3, t2) {
    let n3 = Object.getOwnPropertyDescriptor(e3, `value`).set, r2 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e3), `value`).set;
    n3 && n3 !== r2 ? r2.call(e3, t2) : n3.call(e3, t2);
    let i2 = new Event(`input`, { bubbles: true });
    e3.dispatchEvent(i2);
  }
  function y2(e3, t2) {
    performance.now() - o2.value < ve || a2.value && v2(a2.value, `var(${t2})`);
  }
  function x2(e3) {
    !a2.value || s2.value === null || v2(a2.value, s2.value);
  }
  function S2(e3, t2) {
    a2.value && (v2(a2.value, `var(${t2})`), s2.value = `var(${t2})`, o2.value = performance.now());
  }
  return f(() => {
    d2();
  }), new BroadcastChannel(`windpress`).addEventListener(`message`, async (e3) => {
    let t2 = e3.data;
    t2.source === `windpress/intellisense` && t2.task === `windpress.code-editor.saved.done` && setTimeout(() => {
      d2();
    }, 1e3);
  }), (e3, r2) => (h(), u(`div`, _e, [t(F, { ref_key: `sectionColor`, ref: p2, namespace: `variable`, name: `color` }, { header: _(() => [...r2[0] || (r2[0] = [l(`span`, { class: `var-body-title` }, `Color`, -1)])]), default: _(() => [t(ge, { "variable-items": n2.value.colors, onPreviewEnter: y2, onPreviewLeave: x2, onPreviewChose: S2 }, null, 8, [`variable-items`])]), _: 1 }, 512), t(F, { ref_key: `sectionTypography`, ref: m2, namespace: `variable`, name: `typography` }, { header: _(() => [...r2[1] || (r2[1] = [l(`span`, { class: `var-body-title` }, `Typography`, -1)])]), default: _(() => [t(V, { "variable-items": n2.value.typography, onPreviewEnter: y2, onPreviewLeave: x2, onPreviewChose: S2 }, null, 8, [`variable-items`])]), _: 1 }, 512), t(F, { ref_key: `sectionSpacing`, ref: g2, namespace: `variable`, name: `spacing`, class: `` }, { header: _(() => [...r2[2] || (r2[2] = [l(`span`, { class: `var-body-title` }, `Sizing`, -1)])]), default: _(() => [t(V, { "variable-items": n2.value.sizing, onPreviewEnter: y2, onPreviewLeave: x2, onPreviewChose: S2 }, null, 8, [`variable-items`])]), _: 1 }, 512)]));
} }, [[`__scopeId`, `data-v-3661110b`]]), be = { id: `windpressbuilderius-variable-app-container`, class: `flex flex:column w:full h:full fg:$(base-2) bg:$(primary-1)` }, xe = E({ __name: `App`, setup(e2) {
  let n2 = i(`isOpen`);
  return (e3, r2) => s((h(), u(`div`, be, [t(M), (h(), y(m, null, { default: _(() => [t(ye)]), _: 1 }))], 512)), [[ne, a(n2)]]);
} }, [[`__scopeId`, `data-v-5e650939`]]);
function Se({ selector: e2, callback: t2, options: n2 }) {
  let r2 = new MutationObserver(t2), i2 = document.querySelector(e2);
  if (!i2) {
    T(`Target not found for selector: ${e2}`, { module: `variable-picker`, type: `error` });
    return;
  }
  r2.observe(i2, Object.assign(Object.assign({}, { childList: true, subtree: true }), n2));
}
var U = document.createElement(`windpressbuilderius-variable-app`);
U.id = `windpressbuilderius-variable-app`, document.body.appendChild(U);
for (let e2 of document.getElementById(`builderius-builder-css`).sheet.cssRules) if (e2.selectorText && e2.selectorText.includes(`#builderiusPanel`)) for (let t2 = 0; t2 < e2.style.length; t2++) {
  let n2 = e2.style[t2];
  n2.startsWith(`--`) && U.style.setProperty(n2, e2.style.getPropertyValue(n2).trim());
}
var W = b(false), G = b(null), K = b(null), q = b(0), J = b(null), Y = te(xe);
Y.config.globalProperties.windpressbuilderius = window.windpressbuilderius, Y.provide(`variableApp`, U), Y.provide(`isOpen`, W), Y.provide(`focusedInput`, G), Y.provide(`tempInputValue`, K), Y.provide(`recentVariableSelectionTimestamp`, q), Y.use(se, { container: `#windpressbuilderius-variable-app` }), Y.component(`InlineSvg`, oe), Y.mount(`#windpressbuilderius-variable-app`);
function X(e2) {
  !e2.shiftKey || !e2.target || (document?.getSelection()?.removeAllRanges(), e2.preventDefault(), e2.stopPropagation(), G.value = e2.target, K.value = e2.target.value, W.value = true);
}
function Z(e2) {
  G.value = e2.target;
}
var Ce = [`div.uniCssInput`, `div.uniCssColorpicker`];
function Q() {
  setTimeout(() => {
    let e2 = false;
    Ce.forEach((t3) => {
      (typeof t3 == `string` ? [...document.querySelectorAll(t3)] : [...document.querySelectorAll(t3.selector)].filter((e3) => t3.hasChild.some((t4) => e3.querySelector(t4)))).forEach((t4) => {
        let n2 = t4.querySelector(`input[type='text']`);
        n2?.getAttribute(`windpressbuilderius-variable-app`) !== `listened` && (n2?.removeEventListener(`click`, X), n2?.addEventListener(`click`, X), n2?.removeEventListener(`focus`, Z), n2?.addEventListener(`focus`, Z), n2?.setAttribute(`windpressbuilderius-variable-app`, `listened`), e2 = true);
      });
    });
    let t2 = document.querySelector(`div.uniSystemSelectClasses__valueWrapper span.uniSystemSelectClasses__placeholder`) ? `%root%` : document.querySelector(`div.uniSystemSelectClasses__valueWrapper div.uniModuleCssSelectorItemSelected span`)?.innerText;
    J.value !== t2 && (J.value = t2), e2 && (G.value = null, K.value = null);
  }, 100);
}
var $ = false;
Se({ selector: `.uniLeftPanelOuter`, options: { subtree: true, childList: true }, callback() {
  $ || ($ = true, Q(), setTimeout(() => {
    $ = false;
  }, 100));
} }), Q(), document.addEventListener(`keydown`, (e2) => {
  e2.key === `Escape` && W.value && (W.value = false);
}), r(W, (e2) => {
  U.style.zIndex = e2 ? `calc(Infinity)` : `-1`;
}), r(J, (e2, t2) => {
  e2 !== t2 && (G.value = null, K.value = null);
}), T(`Module loaded!`, { module: `variable-picker` });
