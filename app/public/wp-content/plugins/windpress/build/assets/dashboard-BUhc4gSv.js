const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./toggleHighContrast-Df6w4ag4.css","./Colors-CXoklgza.css","./FluidCalculatorSlideover-C5bjejut.css"])))=>i.map(i=>d[i]);
import { i as e, r as t, t as n } from "./lib-BuijiK-3.js";
import { $ as r, $n as i, D as a, E as o, En as s, Ft as c, H as l, Ht as u, J as d, L as f, Lt as p, On as m, Pt as h, Rt as g, St as _, Tn as v, Ut as y, Zn as b, _ as x, b as S, bt as C, ct as w, er as T, et as E, ft as D, g as O, gt as k, it as ee, jt as A, k as j, l as te, mt as M, nt as N, o as P, ot as F, qt as I, tr as L, tt as ne, u as re, un as ie, v as R, vn as z, w as ae, wn as B, wt as oe, xn as se, xt as V, y as H, z as U } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { c as ce, l as W, r as le } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { r as ue } from "./log-BcOb3xTO.js";
import { A as de, D as fe, E as pe, G as me, H as he, I as G, J as K, K as ge, N as _e, O as ve, P as ye, S as q, V as be, W as xe, Y as Se, _ as Ce, b as J, i as we, j as Te, m as Ee, n as De, r as Oe, t as ke, v as Ae, w as je, x as Me, y as Ne } from "./Button-BArxwKIq.js";
import { t as Pe } from "./chunk-X4GG3EDV-DB6k4nCN.js";
import { A as Fe, M as Ie, N as Le, R as Re, T as ze, _ as Be, a as Ve, b as He, k as Ue, l as We, o as Ge, r as Ke, u as qe } from "./dist-BY3QSpe-.js";
import { a as Je, n as Ye, o as Xe, r as Ze } from "./vue-router-BY1VLoSx.js";
import { t as Qe } from "./es-MnqOf9qc.js";
import { C as $e, H as et, M as tt, N as nt, O as rt, S as it, _ as at, b as ot, h as st, v as ct, x as lt, y as ut } from "./namespaced-DHs_Dn1j.js";
import { C as dt, a as ft, d as pt, f as mt, h as ht, i as gt, m as _t, n as vt, r as yt, t as bt, v as xt, x as St, y as Y } from "./Tooltip-DkuatXWt.js";
import { t as Ct } from "./NavigationMenu-AjThmsBG.js";
import { a as wt, i as Tt, l as Et, n as Dt, o as Ot, r as kt, s as At, t as jt } from "./useOverlay-C2LwRyT9.js";
import { n as Mt, t as Nt } from "./useToast-pUqC-jjk.js";
import { a as Pt, i as Ft, n as It, r as Lt, t as Rt } from "./DashboardSidebarToggle-C6Ui5J7p.js";
import { t as zt } from "./overlay-DdDSYYrH.js";
import { t as Bt } from "./Slideover-B5TMKu0c.js";
import { t as Vt } from "./Modal-DQCfHGMa.js";
import { t as Ht } from "./DropdownMenu-D7g-btv3.js";
import { t as Ut } from "./Input-CxsBLKN7.js";
import { t as Wt } from "./settings-CIp0eD-X.js";
import { t as Gt } from "./package-DltdqWRC.js";
import { t as Kt } from "./package-BsrS9kUU.js";
import { t as qt } from "./fuse-B1xTA2op.js";
import { t as Jt } from "./virtualizer-DwkRSQPe.js";
import { t as Yt } from "./useGenerateCache-DLebHQlz.js";
import { t as X } from "./preload-helper-Cb81DA_d.js";
import { t as Xt, __tla as __tla_0 } from "./worker-B7cy9wD8.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Zt = document.querySelectorAll(`link[rel="stylesheet"][href*="wp-admin/load-styles.php"], link[rel="stylesheet"][href*="wp-admin/css/colors/"]`);
  Array.from(Zt).reverse().forEach((e2) => {
    e2 instanceof HTMLLinkElement && fetch(e2.href).then((e3) => e3.text()).then((t2) => {
      let n2 = document.createElement(`style`);
      n2.textContent = Qt(t2), document.head.prepend(n2), e2.remove();
    });
  });
  function Qt(r2) {
    let i2 = t(r2);
    return e(i2, {
      enter: (t2, n2, r3) => {
        if (t2.type === `Atrule` && t2.name === `keyframes`) return e.skip;
        t2.type === `SelectorList` && t2.children.forEach((e2) => {
          e2.children.some((e3) => e3.type === `PseudoClassSelector` && ![
            `visible`,
            `hover`,
            `focus`,
            `focus-visible`,
            `focus-within`,
            `target`,
            `read-write`,
            `active`,
            `visited`,
            `link`
          ].includes(e3.name)) || e2.children.push({
            type: `PseudoClassSelector`,
            name: `not`,
            children: [
              {
                type: `ClassSelector`,
                name: `windpress-style`
              },
              {
                type: `Combinator`,
                name: ` `
              },
              {
                type: `TypeSelector`,
                name: `*`
              }
            ]
          });
        });
      }
    }), n(i2);
  }
  var $t = document.querySelector(`#wpbody`);
  $t && $t.classList.add(`windpress-style`), new MutationObserver((e2) => {
    for (let t2 of e2) t2.type === `childList` && t2.addedNodes.length && t2.addedNodes.forEach((e3) => {
      e3 instanceof HTMLElement && !e3.closest(`#wpbody`) && e3.dataset && Object.keys(e3.dataset).forEach((t3) => {
        (t3.startsWith(`reka`) || t3.startsWith(`dismissable`)) && e3.classList.add(`windpress-style`);
      });
    });
  }).observe(document.body, {
    childList: true,
    subtree: false
  });
  var en = /* @__PURE__ */ new Set([
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), tn = /* @__PURE__ */ new Set([
    `title`,
    `titleTemplate`,
    `script`,
    `style`,
    `noscript`
  ]), nn = /* @__PURE__ */ new Set([
    `base`,
    `meta`,
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), rn = /* @__PURE__ */ new Set([
    `title`,
    `base`,
    `htmlAttrs`,
    `bodyAttrs`,
    `meta`,
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), an = /* @__PURE__ */ new Set([
    `base`,
    `title`,
    `titleTemplate`,
    `bodyAttrs`,
    `htmlAttrs`,
    `templateParams`
  ]), on = /* @__PURE__ */ new Set([
    `key`,
    `tagPosition`,
    `tagPriority`,
    `tagDuplicateStrategy`,
    `innerHTML`,
    `textContent`,
    `processTemplateParams`
  ]), sn = /* @__PURE__ */ new Set([
    `templateParams`,
    `htmlAttrs`,
    `bodyAttrs`
  ]), cn = /* @__PURE__ */ new Set([
    `theme-color`,
    `google-site-verification`,
    `og`,
    `article`,
    `book`,
    `profile`,
    `twitter`,
    `author`
  ]), ln = [
    `name`,
    `property`,
    `http-equiv`
  ], un = /* @__PURE__ */ new Set([
    `viewport`,
    `description`,
    `keywords`,
    `robots`
  ]);
  function dn(e2) {
    let t2 = e2.split(`:`);
    return t2.length ? cn.has(t2[1]) : false;
  }
  function fn(e2) {
    let { props: t2, tag: n2 } = e2;
    if (an.has(n2)) return n2;
    if (n2 === `link` && t2.rel === `canonical`) return `canonical`;
    if (n2 === `link` && t2.rel === `alternate`) {
      let e3 = t2.hreflang || t2.type;
      if (e3) return `alternate:${e3}`;
    }
    if (t2.charset) return `charset`;
    if (e2.tag === `meta`) {
      for (let r2 of ln) if (t2[r2] !== void 0) {
        let i2 = t2[r2], a2 = i2 && typeof i2 == `string` && i2.includes(`:`), o2 = i2 && un.has(i2);
        return `${n2}:${i2}${!(a2 || o2) && e2.key ? `:key:${e2.key}` : ``}`;
      }
    }
    if (e2.key) return `${n2}:key:${e2.key}`;
    if (t2.id) return `${n2}:id:${t2.id}`;
    if (n2 === `link` && t2.rel === `alternate`) return `alternate:${t2.href || ``}`;
    if (tn.has(n2)) {
      let t3 = e2.textContent || e2.innerHTML;
      if (t3) return `${n2}:content:${t3}`;
    }
  }
  function pn(e2) {
    return e2._h || e2._d || e2.textContent || e2.innerHTML || `${e2.tag}:${Object.entries(e2.props).map(([e3, t2]) => `${e3}:${String(t2)}`).join(`,`)}`;
  }
  function mn(e2, t2, n2) {
    typeof e2 == `function` && (!n2 || n2 !== `titleTemplate` && !(n2[0] === `o` && n2[1] === `n`)) && (e2 = e2());
    let r2 = t2 ? t2(n2, e2) : e2;
    if (Array.isArray(r2)) return r2.map((e3) => mn(e3, t2));
    if (r2?.constructor === Object) {
      let e3 = {};
      for (let n3 of Object.keys(r2)) e3[n3] = mn(r2[n3], t2, n3);
      return e3;
    }
    return r2;
  }
  function hn(e2, t2) {
    let n2 = e2 === `style` ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
    function r2(t3) {
      if (t3 == null || t3 === void 0) return;
      let r3 = String(t3).trim();
      if (r3) if (e2 === `style`) {
        let [e3, ...t4] = r3.split(`:`).map((e4) => e4 ? e4.trim() : ``);
        e3 && t4.length && n2.set(e3, t4.join(`:`));
      } else r3.split(` `).filter(Boolean).forEach((e3) => n2.add(e3));
    }
    return typeof t2 == `string` ? e2 === `style` ? t2.split(`;`).forEach(r2) : r2(t2) : Array.isArray(t2) ? t2.forEach((e3) => r2(e3)) : t2 && typeof t2 == `object` && Object.entries(t2).forEach(([t3, i2]) => {
      i2 && i2 !== `false` && (e2 === `style` ? n2.set(String(t3).trim(), String(i2)) : r2(t3));
    }), n2;
  }
  function gn(e2, t2) {
    if (e2.props = e2.props || {}, !t2) return e2;
    if (e2.tag === `templateParams`) return e2.props = t2, e2;
    let n2 = nn.has(e2.tag) || e2.tag === `htmlAttrs` || e2.tag === `bodyAttrs`;
    return Object.entries(t2).forEach(([r2, i2]) => {
      if (r2 === `__proto__` || r2 === `constructor` || r2 === `prototype`) return;
      if (i2 === null) {
        e2.props[r2] = null;
        return;
      }
      if (r2 === `class` || r2 === `style`) {
        e2.props[r2] = hn(r2, i2);
        return;
      }
      if (on.has(r2)) {
        if ((r2 === `textContent` || r2 === `innerHTML`) && typeof i2 == `object`) {
          let n3 = t2.type;
          if (t2.type || (n3 = `application/json`), !n3?.endsWith(`json`) && n3 !== `speculationrules`) return;
          t2.type = n3, e2.props.type = n3, e2[r2] = JSON.stringify(i2);
        } else e2[r2] = i2;
        return;
      }
      let a2 = r2.startsWith(`data-`), o2 = n2 && !a2 ? r2.toLowerCase() : r2, s2 = String(i2), c2 = e2.tag === `meta` && o2 === `content`;
      s2 === `true` || s2 === `` ? e2.props[o2] = a2 || c2 ? s2 : true : !i2 && a2 && s2 === `false` ? e2.props[o2] = `false` : i2 !== void 0 && (e2.props[o2] = i2);
    }), e2;
  }
  function _n(e2, t2) {
    let n2 = gn({
      tag: e2,
      props: {}
    }, typeof t2 == `object` && typeof t2 != `function` ? t2 : {
      [e2 === `script` || e2 === `noscript` || e2 === `style` ? `innerHTML` : `textContent`]: t2
    });
    return n2.key && en.has(n2.tag) && (n2.props[`data-hid`] = n2._h = n2.key), n2.tag === `script` && typeof n2.innerHTML == `object` && (n2.innerHTML = JSON.stringify(n2.innerHTML), n2.props.type = n2.props.type || `application/json`), Array.isArray(n2.props.content) ? n2.props.content.map((e3) => ({
      ...n2,
      props: {
        ...n2.props,
        content: e3
      }
    })) : n2;
  }
  function vn(e2, t2) {
    if (!e2) return [];
    typeof e2 == `function` && (e2 = e2());
    let n2 = (e3, n3) => {
      for (let r3 = 0; r3 < t2.length; r3++) n3 = t2[r3](e3, n3);
      return n3;
    };
    e2 = n2(void 0, e2);
    let r2 = [];
    return e2 = mn(e2, n2), Object.entries(e2 || {}).forEach(([e3, t3]) => {
      if (t3 !== void 0) for (let n3 of Array.isArray(t3) ? t3 : [
        t3
      ]) r2.push(_n(e3, n3));
    }), r2.flat();
  }
  var yn = (e2, t2) => e2._w === t2._w ? e2._p - t2._p : e2._w - t2._w, bn = {
    base: -10,
    title: 10
  }, xn = {
    critical: -8,
    high: -1,
    low: 2
  }, Sn = {
    meta: {
      "content-security-policy": -30,
      charset: -20,
      viewport: -15
    },
    link: {
      preconnect: 20,
      stylesheet: 60,
      preload: 70,
      modulepreload: 70,
      prefetch: 90,
      "dns-prefetch": 90,
      prerender: 90
    },
    script: {
      async: 30,
      defer: 80,
      sync: 50
    },
    style: {
      imported: 40,
      sync: 60
    }
  }, Cn = /@import/, wn = (e2) => e2 === `` || e2 === true;
  function Tn(e2, t2) {
    if (typeof t2.tagPriority == `number`) return t2.tagPriority;
    let n2 = 100, r2 = xn[t2.tagPriority] || 0, i2 = e2.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : Sn;
    if (t2.tag in bn) n2 = bn[t2.tag];
    else if (t2.tag === `meta`) {
      let e3 = t2.props[`http-equiv`] === `content-security-policy` ? `content-security-policy` : t2.props.charset ? `charset` : t2.props.name === `viewport` ? `viewport` : null;
      e3 && (n2 = Sn.meta[e3]);
    } else if (t2.tag === `link` && t2.props.rel) n2 = i2.link[t2.props.rel];
    else if (t2.tag === `script`) {
      let e3 = String(t2.props.type);
      wn(t2.props.async) ? n2 = i2.script.async : t2.props.src && !wn(t2.props.defer) && !wn(t2.props.async) && e3 !== `module` && !e3.endsWith(`json`) || t2.innerHTML && !e3.endsWith(`json`) ? n2 = i2.script.sync : (wn(t2.props.defer) && t2.props.src && !wn(t2.props.async) || e3 === `module`) && (n2 = i2.script.defer);
    } else t2.tag === `style` && (n2 = t2.innerHTML && Cn.test(t2.innerHTML) ? i2.style.imported : i2.style.sync);
    return (n2 || 100) + r2;
  }
  function En(e2, t2) {
    let n2 = typeof t2 == `function` ? t2(e2) : t2, r2 = n2.key || String(e2.plugins.size + 1);
    e2.plugins.get(r2) || (e2.plugins.set(r2, n2), e2.hooks.addHooks(n2.hooks || {}));
  }
  function Dn(e2 = {}) {
    let t2 = Se();
    t2.addHooks(e2.hooks || {});
    let n2 = !e2.document, r2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Set(), o2 = {
      _entryCount: 1,
      plugins: i2,
      dirty: false,
      resolvedOptions: e2,
      hooks: t2,
      ssr: n2,
      entries: r2,
      headEntries() {
        return [
          ...r2.values()
        ];
      },
      use: (e3) => En(o2, e3),
      push(e3, i3) {
        let s2 = {
          ...i3 || {}
        };
        delete s2.head;
        let c2 = s2._index ?? o2._entryCount++, l2 = {
          _i: c2,
          input: e3,
          options: s2
        }, u2 = {
          _poll(e4 = false) {
            o2.dirty = true, !e4 && a2.add(c2), t2.callHook(`entries:updated`, o2);
          },
          dispose() {
            r2.delete(c2) && o2.invalidate();
          },
          patch(e4) {
            (!s2.mode || s2.mode === `server` && n2 || s2.mode === `client` && !n2) && (l2.input = e4, r2.set(c2, l2), u2._poll());
          }
        };
        return u2.patch(e3), u2;
      },
      async resolveTags() {
        let n3 = {
          tagMap: /* @__PURE__ */ new Map(),
          tags: [],
          entries: [
            ...o2.entries.values()
          ]
        };
        for (await t2.callHook(`entries:resolve`, n3); a2.size; ) {
          let n4 = a2.values().next().value;
          a2.delete(n4);
          let i4 = r2.get(n4);
          if (i4) {
            let n5 = {
              tags: vn(i4.input, e2.propResolvers || []).map((e3) => Object.assign(e3, i4.options)),
              entry: i4
            };
            await t2.callHook(`entries:normalize`, n5), i4._tags = n5.tags.map((e3, t3) => (e3._w = Tn(o2, e3), e3._p = (i4._i << 10) + t3, e3._d = fn(e3), e3._d || (e3._h = pn(e3)), e3));
          }
        }
        let i3 = false;
        n3.entries.flatMap((e3) => (e3._tags || []).map((e4) => ({
          ...e4,
          props: {
            ...e4.props
          }
        }))).sort(yn).reduce((e3, t3) => {
          let n4 = t3._d || t3._h;
          if (!e3.has(n4)) return e3.set(n4, t3);
          let r3 = e3.get(n4);
          if ((t3?.tagDuplicateStrategy || (sn.has(t3.tag) ? `merge` : null) || (t3.key && t3.key === r3.key ? `merge` : null)) === `merge`) {
            let i4 = {
              ...r3.props
            };
            Object.entries(t3.props).forEach(([e4, t4]) => i4[e4] = e4 === `style` ? new Map([
              ...r3.props.style || /* @__PURE__ */ new Map(),
              ...t4
            ]) : e4 === `class` ? /* @__PURE__ */ new Set([
              ...r3.props.class || /* @__PURE__ */ new Set(),
              ...t4
            ]) : t4), e3.set(n4, {
              ...t3,
              props: i4
            });
          } else t3._p >> 10 == r3._p >> 10 && t3.tag === `meta` && dn(n4) ? (e3.set(n4, Object.assign([
            ...Array.isArray(r3) ? r3 : [
              r3
            ],
            t3
          ], t3)), i3 = true) : (t3._w === r3._w ? t3._p > r3._p : t3?._w < r3?._w) && e3.set(n4, t3);
          return e3;
        }, n3.tagMap);
        let s2 = n3.tagMap.get(`title`), c2 = n3.tagMap.get(`titleTemplate`);
        if (o2._title = s2?.textContent, c2) {
          let e3 = c2?.textContent;
          if (o2._titleTemplate = e3, e3) {
            let t3 = typeof e3 == `function` ? e3(s2?.textContent) : e3;
            typeof t3 == `string` && !o2.plugins.has(`template-params`) && (t3 = t3.replace(`%s`, s2?.textContent || ``)), s2 ? t3 === null ? n3.tagMap.delete(`title`) : n3.tagMap.set(`title`, {
              ...s2,
              textContent: t3
            }) : (c2.tag = `title`, c2.textContent = t3);
          }
        }
        n3.tags = Array.from(n3.tagMap.values()), i3 && (n3.tags = n3.tags.flat().sort(yn)), await t2.callHook(`tags:beforeResolve`, n3), await t2.callHook(`tags:resolve`, n3), await t2.callHook(`tags:afterResolve`, n3);
        let l2 = [];
        for (let e3 of n3.tags) {
          let { innerHTML: t3, tag: n4, props: r3 } = e3;
          rn.has(n4) && (Object.keys(r3).length === 0 && !e3.innerHTML && !e3.textContent || n4 === `meta` && !r3.content && !r3[`http-equiv`] && !r3.charset || (n4 === `script` && t3 && (String(r3.type).endsWith(`json`) ? e3.innerHTML = (typeof t3 == `string` ? t3 : JSON.stringify(t3)).replace(/</g, `\\u003C`) : typeof t3 == `string` && (e3.innerHTML = t3.replace(RegExp(`</${n4}`, `g`), `<\\/${n4}`)), e3._d = fn(e3)), l2.push(e3)));
        }
        return l2;
      },
      invalidate() {
        for (let e3 of r2.values()) a2.add(e3._i);
        o2.dirty = true, t2.callHook(`entries:updated`, o2);
      }
    };
    return (e2?.plugins || []).forEach((e3) => En(o2, e3)), o2.hooks.callHook(`init`, o2), e2.init?.forEach((e3) => e3 && o2.push(e3)), o2;
  }
  async function On(e2, t2 = {}) {
    let n2 = t2.document || e2.resolvedOptions.document;
    if (!n2 || !e2.dirty) return;
    let r2 = {
      shouldRender: true,
      tags: []
    };
    if (await e2.hooks.callHook(`dom:beforeRender`, r2), r2.shouldRender) return e2._domUpdatePromise || (e2._domUpdatePromise = new Promise(async (t3) => {
      let r3 = /* @__PURE__ */ new Map(), i2 = new Promise((t4) => {
        e2.resolveTags().then((e3) => {
          t4(e3.map((e4) => {
            let t5 = r3.get(e4._d) || 0, n3 = {
              tag: e4,
              id: (t5 ? `${e4._d}:${t5}` : e4._d) || e4._h,
              shouldRender: true
            };
            return e4._d && dn(e4._d) && r3.set(e4._d, t5 + 1), n3;
          }));
        });
      }), a2 = e2._dom;
      if (!a2) {
        a2 = {
          title: n2.title,
          elMap: (/* @__PURE__ */ new Map()).set(`htmlAttrs`, n2.documentElement).set(`bodyAttrs`, n2.body)
        };
        for (let e3 of [
          `body`,
          `head`
        ]) {
          let t4 = n2[e3]?.children;
          for (let e4 of t4) {
            let t5 = e4.tagName.toLowerCase();
            if (!nn.has(t5)) continue;
            let n3 = gn({
              tag: t5,
              props: {}
            }, {
              innerHTML: e4.innerHTML,
              ...e4.getAttributeNames().reduce((t6, n4) => (t6[n4] = e4.getAttribute(n4), t6), {}) || {}
            });
            if (n3.key = e4.getAttribute(`data-hid`) || void 0, n3._d = fn(n3) || pn(n3), a2.elMap.has(n3._d)) {
              let t6 = 1, r4 = n3._d;
              for (; a2.elMap.has(r4); ) r4 = `${n3._d}:${t6++}`;
              a2.elMap.set(r4, e4);
            } else a2.elMap.set(n3._d, e4);
          }
        }
      }
      a2.pendingSideEffects = {
        ...a2.sideEffects
      }, a2.sideEffects = {};
      function o2(e3, t4, n3) {
        let r4 = `${e3}:${t4}`;
        a2.sideEffects[r4] = n3, delete a2.pendingSideEffects[r4];
      }
      function s2({ id: e3, $el: t4, tag: r4 }) {
        let i3 = r4.tag.endsWith(`Attrs`);
        a2.elMap.set(e3, t4), i3 || (r4.textContent && r4.textContent !== t4.textContent && (t4.textContent = r4.textContent), r4.innerHTML && r4.innerHTML !== t4.innerHTML && (t4.innerHTML = r4.innerHTML), o2(e3, `el`, () => {
          t4?.remove(), a2.elMap.delete(e3);
        }));
        for (let a3 in r4.props) {
          if (!Object.prototype.hasOwnProperty.call(r4.props, a3)) continue;
          let s3 = r4.props[a3];
          if (a3.startsWith(`on`) && typeof s3 == `function`) {
            let e4 = t4?.dataset;
            if (e4 && e4[`${a3}fired`]) {
              let e5 = a3.slice(0, -5);
              s3.call(t4, new Event(e5.substring(2)));
            }
            t4.getAttribute(`data-${a3}`) !== `` && ((r4.tag === `bodyAttrs` ? n2.defaultView : t4).addEventListener(a3.substring(2), s3.bind(t4)), t4.setAttribute(`data-${a3}`, ``));
            continue;
          }
          let c3 = `attr:${a3}`;
          if (a3 === `class`) {
            if (!s3) continue;
            for (let n3 of s3) i3 && o2(e3, `${c3}:${n3}`, () => t4.classList.remove(n3)), !t4.classList.contains(n3) && t4.classList.add(n3);
          } else if (a3 === `style`) {
            if (!s3) continue;
            for (let [n3, r5] of s3) o2(e3, `${c3}:${n3}`, () => {
              t4.style.removeProperty(n3);
            }), t4.style.setProperty(n3, r5);
          } else s3 !== false && s3 !== null && (t4.getAttribute(a3) !== s3 && t4.setAttribute(a3, s3 === true ? `` : String(s3)), i3 && o2(e3, c3, () => t4.removeAttribute(a3)));
        }
      }
      let c2 = [], l2 = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      }, u2 = await i2;
      for (let e3 of u2) {
        let { tag: t4, shouldRender: r4, id: i3 } = e3;
        if (r4) {
          if (t4.tag === `title`) {
            n2.title = t4.textContent, o2(`title`, ``, () => n2.title = a2.title);
            continue;
          }
          e3.$el = e3.$el || a2.elMap.get(i3), e3.$el ? s2(e3) : nn.has(t4.tag) && c2.push(e3);
        }
      }
      for (let e3 of c2) {
        let t4 = e3.tag.tagPosition || `head`;
        e3.$el = n2.createElement(e3.tag.tag), s2(e3), l2[t4] = l2[t4] || n2.createDocumentFragment(), l2[t4].appendChild(e3.$el);
      }
      for (let t4 of u2) await e2.hooks.callHook(`dom:renderTag`, t4, n2, o2);
      l2.head && n2.head.appendChild(l2.head), l2.bodyOpen && n2.body.insertBefore(l2.bodyOpen, n2.body.firstChild), l2.bodyClose && n2.body.appendChild(l2.bodyClose);
      for (let e3 in a2.pendingSideEffects) a2.pendingSideEffects[e3]();
      e2._dom = a2, await e2.hooks.callHook(`dom:rendered`, {
        renders: u2
      }), t3();
    }).finally(() => {
      e2._domUpdatePromise = void 0, e2.dirty = false;
    })), e2._domUpdatePromise;
  }
  function kn(e2 = {}) {
    let t2 = e2.domOptions?.render || On;
    e2.document = e2.document || (typeof window < `u` ? document : void 0);
    let n2 = e2.document?.head.querySelector(`script[id="unhead:payload"]`)?.innerHTML || false;
    return Dn({
      ...e2,
      plugins: [
        ...e2.plugins || [],
        {
          key: `client`,
          hooks: {
            "entries:updated": t2
          }
        }
      ],
      init: [
        n2 ? JSON.parse(n2) : false,
        ...e2.init || []
      ]
    });
  }
  function An(e2, t2) {
    let n2 = 0;
    return () => {
      let r2 = ++n2;
      t2(() => {
        n2 === r2 && e2();
      });
    };
  }
  var jn = (e2, t2) => ie(t2) ? s(t2) : t2, Mn = `usehead`;
  function Nn(e2) {
    return {
      install(t2) {
        t2.config.globalProperties.$unhead = e2, t2.config.globalProperties.$head = e2, t2.provide(Mn, e2);
      }
    }.install;
  }
  function Pn() {
    if (l()) {
      let e2 = d(Mn);
      if (e2) return e2;
    }
    throw Error(`useHead() was called without provide context, ensure you call it through the setup() function.`);
  }
  function Fn(e2, t2 = {}) {
    let n2 = t2.head || Pn();
    return n2.ssr ? n2.push(e2 || {}, t2) : In(n2, e2, t2);
  }
  function In(e2, t2, n2 = {}) {
    let r2 = z(false), i2;
    return y(() => {
      let a2 = r2.value ? {} : mn(t2, jn);
      i2 ? i2.patch(a2) : i2 = e2.push(a2, n2);
    }), f() && (ee(() => {
      i2.dispose();
    }), F(() => {
      r2.value = true;
    }), N(() => {
      r2.value = false;
    })), i2;
  }
  function Ln(e2 = {}) {
    let t2 = kn({
      domOptions: {
        render: An(() => On(t2), (e3) => setTimeout(e3, 0))
      },
      ...e2
    });
    return t2.install = Nn(t2), t2;
  }
  var Rn = {
    install(e2) {
      if (e2._context.provides.usehead) return;
      let t2 = Ln();
      e2.use(t2);
    }
  }, zn = {
    install(e2, t2) {
      t2?.router && typeof t2.router == `function` && e2.provide(`nuxtui:router`, t2.router);
    }
  }, Bn = [
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    950
  ];
  function Vn(e2, t2) {
    return e2 in Pe && typeof Pe[e2] == `object` && t2 in Pe[e2] ? Pe[e2][t2] : ``;
  }
  function Hn(e2, t2, n2) {
    let r2 = n2 ? `${n2}-` : ``;
    return `${Bn.map((n3) => `--ui-color-${e2}-${n3}: var(--${r2}color-${t2 === `neutral` ? `old-neutral` : t2}-${n3}, ${Vn(t2, n3)});`).join(`
  `)}`;
  }
  function Un(e2, t2) {
    return `--ui-${e2}: var(--ui-color-${e2}-${t2});`;
  }
  var Wn = fe(() => {
    let e2 = K(), t2 = de(), n2 = O(() => {
      let { neutral: t3, ...n3 } = e2.ui.colors, r3 = e2.ui.prefix;
      return `@layer theme {
  :root, :host {
  ${Object.entries(e2.ui.colors).map(([e3, t4]) => Hn(e3, t4, r3)).join(`
  `)}
  }
  :root, :host, .light {
  ${Object.keys(n3).map((e3) => Un(e3, 500)).join(`
  `)}
  }
  .dark {
  ${Object.keys(n3).map((e3) => Un(e3, 400)).join(`
  `)}
  }
}`;
    }), r2 = {
      style: [
        {
          innerHTML: () => n2.value,
          tagPriority: `critical`,
          id: `nuxt-ui-colors`
        }
      ]
    };
    if (t2.isHydrating && !t2.payload.serverRendered) {
      let e3 = document.createElement(`style`);
      e3.innerHTML = n2.value, e3.setAttribute(`data-nuxt-ui-colors`, ``), document.head.appendChild(e3), r2.script = [
        {
          innerHTML: `document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))`
        }
      ];
    }
    Fn(r2);
  }), Gn = {
    install() {
      qe();
    }
  }, Kn = {
    install(e2, t2 = {}) {
      e2.use(Rn, t2), e2.use(zn, t2), e2.use(Wn, t2), e2.use(Gn, t2);
    }
  }, qn = j({
    __name: `DismissableLayerBranch`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, { forwardRef: n2, currentElement: r2 } = Y();
      return w(() => {
        _t.branches.add(r2.value);
      }), D(() => {
        _t.branches.delete(r2.value);
      }), (e3, r3) => (M(), R(m(q), E({
        ref: m(n2)
      }, t2), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), Jn = j({
    __name: `ListboxGroupLabel`,
    props: {
      for: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `div`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = ot({
        id: ``
      });
      return (e3, r2) => (M(), R(m(q), E(t2, {
        id: m(n2).id
      }), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `id`
      ]));
    }
  }), Yn = 100, [Xn, Zn] = pe(`ProgressRoot`), Qn = (e2) => typeof e2 == `number`;
  function $n(e2, t2) {
    return dt(e2) || Qn(e2) && !Number.isNaN(e2) && e2 <= t2 && e2 >= 0 ? e2 : (console.error(`Invalid prop \`value\` of value \`${e2}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Yn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
  }
  function er(e2) {
    return Qn(e2) && !Number.isNaN(e2) && e2 > 0 ? e2 : (console.error(`Invalid prop \`max\` of value \`${e2}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Yn}\`.`), Yn);
  }
  var tr = j({
    __name: `ProgressRoot`,
    props: {
      modelValue: {
        type: [
          Number,
          null
        ],
        required: false
      },
      max: {
        type: Number,
        required: false,
        default: Yn
      },
      getValueLabel: {
        type: Function,
        required: false,
        default: (e2, t2) => Qn(e2) ? `${Math.round(e2 / t2 * Yn)}%` : void 0
      },
      getValueText: {
        type: Function,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    emits: [
      `update:modelValue`,
      `update:max`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2;
      Y();
      let i2 = He(n2, `modelValue`, r2, {
        passive: n2.modelValue === void 0
      }), a2 = He(n2, `max`, r2, {
        passive: n2.max === void 0
      });
      u(() => i2.value, async (e3) => {
        let t3 = $n(e3, n2.max);
        t3 !== e3 && (await ne(), i2.value = t3);
      }, {
        immediate: true
      }), u(() => n2.max, (e3) => {
        let t3 = er(n2.max);
        t3 !== e3 && (a2.value = t3);
      }, {
        immediate: true
      });
      let o2 = O(() => dt(i2.value) ? `indeterminate` : i2.value === a2.value ? `complete` : `loading`);
      return Zn({
        modelValue: i2,
        max: a2,
        progressState: o2
      }), (e3, t3) => (M(), R(m(q), {
        "as-child": e3.asChild,
        as: e3.as,
        "aria-valuemax": m(a2),
        "aria-valuemin": 0,
        "aria-valuenow": Qn(m(i2)) ? m(i2) : void 0,
        "aria-valuetext": e3.getValueText?.(m(i2), m(a2)),
        "aria-label": e3.getValueLabel(m(i2), m(a2)),
        role: `progressbar`,
        "data-state": o2.value,
        "data-value": m(i2) ?? void 0,
        "data-max": m(a2)
      }, {
        default: I(() => [
          V(e3.$slots, `default`, {
            modelValue: m(i2)
          })
        ]),
        _: 3
      }, 8, [
        `as-child`,
        `as`,
        `aria-valuemax`,
        `aria-valuenow`,
        `aria-valuetext`,
        `aria-label`,
        `data-state`,
        `data-value`,
        `data-max`
      ]));
    }
  }), nr = j({
    __name: `ProgressIndicator`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = Xn();
      return Y(), (e3, r2) => (M(), R(m(q), E(t2, {
        "data-state": m(n2).progressState.value,
        "data-value": m(n2).modelValue?.value ?? void 0,
        "data-max": m(n2).max.value
      }), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `data-state`,
        `data-value`,
        `data-max`
      ]));
    }
  }), rr = j({
    __name: `ToastAnnounceExclude`,
    props: {
      altText: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      return (e3, t2) => (M(), R(m(q), {
        as: e3.as,
        "as-child": e3.asChild,
        "data-reka-toast-announce-exclude": ``,
        "data-reka-toast-announce-alt": e3.altText || void 0
      }, {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 8, [
        `as`,
        `as-child`,
        `data-reka-toast-announce-alt`
      ]));
    }
  }), [ir, ar] = pe(`ToastProvider`), or = j({
    inheritAttrs: false,
    __name: `ToastProvider`,
    props: {
      label: {
        type: String,
        required: false,
        default: `Notification`
      },
      duration: {
        type: Number,
        required: false,
        default: 5e3
      },
      disableSwipe: {
        type: Boolean,
        required: false
      },
      swipeDirection: {
        type: String,
        required: false,
        default: `right`
      },
      swipeThreshold: {
        type: Number,
        required: false,
        default: 50
      }
    },
    setup(e2) {
      let t2 = e2, { label: n2, duration: r2, disableSwipe: i2, swipeDirection: a2, swipeThreshold: o2 } = v(t2);
      rt({
        isProvider: true
      });
      let s2 = z(), c2 = z(0), l2 = z(false), u2 = z(false);
      if (t2.label && typeof t2.label == `string` && !t2.label.trim()) throw Error("Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.");
      return ar({
        label: n2,
        duration: r2,
        disableSwipe: i2,
        swipeDirection: a2,
        swipeThreshold: o2,
        toastCount: c2,
        viewport: s2,
        onViewportChange(e3) {
          s2.value = e3;
        },
        onToastAdd() {
          c2.value++;
        },
        onToastRemove() {
          c2.value--;
        },
        isFocusedToastEscapeKeyDownRef: l2,
        isClosePausedRef: u2
      }), (e3, t3) => V(e3.$slots, `default`);
    }
  }), sr = j({
    __name: `ToastAnnounce`,
    setup(e2) {
      let t2 = ir(), n2 = Re(1e3), r2 = z(false);
      return Be(() => {
        r2.value = true;
      }), (e3, i2) => m(n2) || r2.value ? (M(), R(m(pt), {
        key: 0,
        feature: `fully-hidden`
      }, {
        default: I(() => [
          o(L(m(t2).label.value) + ` `, 1),
          V(e3.$slots, `default`)
        ]),
        _: 3
      })) : H(`v-if`, true);
    }
  }), cr = `toast.viewportPause`, lr = `toast.viewportResume`;
  function ur(e2, t2, n2) {
    let r2 = n2.originalEvent.currentTarget, i2 = new CustomEvent(e2, {
      bubbles: false,
      cancelable: true,
      detail: n2
    });
    t2 && r2.addEventListener(e2, t2, {
      once: true
    }), r2.dispatchEvent(i2);
  }
  function dr(e2, t2, n2 = 0) {
    let r2 = Math.abs(e2.x), i2 = Math.abs(e2.y), a2 = r2 > i2;
    return t2 === `left` || t2 === `right` ? a2 && r2 > n2 : !a2 && i2 > n2;
  }
  function fr(e2) {
    return e2.nodeType === e2.ELEMENT_NODE;
  }
  function pr(e2) {
    let t2 = [];
    return Array.from(e2.childNodes).forEach((e3) => {
      if (e3.nodeType === e3.TEXT_NODE && e3.textContent && t2.push(e3.textContent), fr(e3)) {
        let n2 = e3.ariaHidden || e3.hidden || e3.style.display === `none`, r2 = e3.dataset.rekaToastAnnounceExclude === ``;
        if (!n2) if (r2) {
          let n3 = e3.dataset.rekaToastAnnounceAlt;
          n3 && t2.push(n3);
        } else t2.push(...pr(e3));
      }
    }), t2;
  }
  var [mr, hr] = pe(`ToastRoot`), gr = j({
    inheritAttrs: false,
    __name: `ToastRootImpl`,
    props: {
      type: {
        type: String,
        required: false
      },
      open: {
        type: Boolean,
        required: false,
        default: false
      },
      duration: {
        type: Number,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `li`
      }
    },
    emits: [
      `close`,
      `escapeKeyDown`,
      `pause`,
      `resume`,
      `swipeStart`,
      `swipeMove`,
      `swipeCancel`,
      `swipeEnd`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { forwardRef: i2, currentElement: s2 } = Y(), { CollectionItem: c2 } = rt(), l2 = ir(), d2 = z(null), f2 = z(null), p2 = O(() => typeof n2.duration == `number` ? n2.duration : l2.duration.value), h2 = z(0), g2 = z(p2.value), _2 = z(0), v2 = z(p2.value), b2 = Be(() => {
        let e3 = Date.now() - h2.value;
        v2.value = Math.max(g2.value - e3, 0);
      }, {
        fpsLimit: 60
      });
      function x2(e3) {
        e3 <= 0 || e3 === 1 / 0 || ze && (window.clearTimeout(_2.value), h2.value = Date.now(), _2.value = window.setTimeout(C2, e3));
      }
      function C2(e3) {
        let t3 = e3?.pointerType === ``;
        s2.value?.contains(et()) && t3 && l2.viewport.value?.focus(), t3 && (l2.isClosePausedRef.value = false), r2(`close`);
      }
      let T2 = O(() => s2.value ? pr(s2.value) : null);
      if (n2.type && ![
        `foreground`,
        `background`
      ].includes(n2.type)) throw Error("Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.");
      return y((e3) => {
        let t3 = l2.viewport.value;
        if (t3) {
          let e4 = () => {
            x2(g2.value), b2.resume(), r2(`resume`);
          }, n3 = () => {
            let e5 = Date.now() - h2.value;
            g2.value -= e5, window.clearTimeout(_2.value), b2.pause(), r2(`pause`);
          };
          return t3.addEventListener(cr, n3), t3.addEventListener(lr, e4), () => {
            t3.removeEventListener(cr, n3), t3.removeEventListener(lr, e4);
          };
        }
      }), u(() => [
        n2.open,
        p2.value
      ], () => {
        g2.value = p2.value, n2.open && !l2.isClosePausedRef.value && x2(p2.value);
      }, {
        immediate: true
      }), Ve(`Escape`, (e3) => {
        r2(`escapeKeyDown`, e3), e3.defaultPrevented || (l2.isFocusedToastEscapeKeyDownRef.value = true, C2());
      }), w(() => {
        l2.onToastAdd();
      }), D(() => {
        l2.onToastRemove();
      }), hr({
        onClose: C2
      }), (e3, t3) => (M(), S(P, null, [
        T2.value ? (M(), R(sr, {
          key: 0,
          role: `alert`,
          "aria-live": e3.type === `foreground` ? `assertive` : `polite`
        }, {
          default: I(() => [
            o(L(T2.value), 1)
          ]),
          _: 1
        }, 8, [
          `aria-live`
        ])) : H(`v-if`, true),
        m(l2).viewport.value ? (M(), R(re, {
          key: 1,
          to: m(l2).viewport.value
        }, [
          a(m(c2), null, {
            default: I(() => [
              a(m(q), E({
                ref: m(i2),
                tabindex: `0`
              }, e3.$attrs, {
                as: e3.as,
                "as-child": e3.asChild,
                "data-state": e3.open ? `open` : `closed`,
                "data-swipe-direction": m(l2).swipeDirection.value,
                style: m(l2).disableSwipe.value ? void 0 : {
                  userSelect: `none`,
                  touchAction: `none`
                },
                onPointerdown: t3[0] || (t3[0] = W((e4) => {
                  m(l2).disableSwipe.value || (d2.value = {
                    x: e4.clientX,
                    y: e4.clientY
                  });
                }, [
                  `left`
                ])),
                onPointermove: t3[1] || (t3[1] = (e4) => {
                  if (m(l2).disableSwipe.value || !d2.value) return;
                  let t4 = e4.clientX - d2.value.x, n3 = e4.clientY - d2.value.y, i3 = !!f2.value, a2 = [
                    `left`,
                    `right`
                  ].includes(m(l2).swipeDirection.value), o2 = [
                    `left`,
                    `up`
                  ].includes(m(l2).swipeDirection.value) ? Math.min : Math.max, s3 = a2 ? o2(0, t4) : 0, c3 = a2 ? 0 : o2(0, n3), u2 = e4.pointerType === `touch` ? 10 : 2, p3 = {
                    x: s3,
                    y: c3
                  }, h3 = {
                    originalEvent: e4,
                    delta: p3
                  };
                  i3 ? (f2.value = p3, m(ur)(m(`toast.swipeMove`), (e5) => r2(`swipeMove`, e5), h3)) : m(dr)(p3, m(l2).swipeDirection.value, u2) ? (f2.value = p3, m(ur)(m(`toast.swipeStart`), (e5) => r2(`swipeStart`, e5), h3), e4.target.setPointerCapture(e4.pointerId)) : (Math.abs(t4) > u2 || Math.abs(n3) > u2) && (d2.value = null);
                }),
                onPointerup: t3[2] || (t3[2] = (e4) => {
                  if (m(l2).disableSwipe.value) return;
                  let t4 = f2.value, n3 = e4.target;
                  if (n3.hasPointerCapture(e4.pointerId) && n3.releasePointerCapture(e4.pointerId), f2.value = null, d2.value = null, t4) {
                    let n4 = e4.currentTarget, i3 = {
                      originalEvent: e4,
                      delta: t4
                    };
                    m(dr)(t4, m(l2).swipeDirection.value, m(l2).swipeThreshold.value) ? m(ur)(m(`toast.swipeEnd`), (e5) => r2(`swipeEnd`, e5), i3) : m(ur)(m(`toast.swipeCancel`), (e5) => r2(`swipeCancel`, e5), i3), n4?.addEventListener(`click`, (e5) => e5.preventDefault(), {
                      once: true
                    });
                  }
                })
              }), {
                default: I(() => [
                  V(e3.$slots, `default`, {
                    remaining: v2.value,
                    duration: p2.value
                  })
                ]),
                _: 3
              }, 16, [
                `as`,
                `as-child`,
                `data-state`,
                `data-swipe-direction`,
                `style`
              ])
            ]),
            _: 3
          })
        ], 8, [
          `to`
        ])) : H(`v-if`, true)
      ], 64));
    }
  }), _r = j({
    __name: `ToastClose`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `button`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = mr(), { forwardRef: r2 } = Y();
      return (e3, i2) => (M(), R(rr, {
        "as-child": ``
      }, {
        default: I(() => [
          a(m(q), E(t2, {
            ref: m(r2),
            type: e3.as === `button` ? `button` : void 0,
            onClick: m(n2).onClose
          }), {
            default: I(() => [
              V(e3.$slots, `default`)
            ]),
            _: 3
          }, 16, [
            `type`,
            `onClick`
          ])
        ]),
        _: 3
      }));
    }
  }), vr = j({
    __name: `ToastAction`,
    props: {
      altText: {
        type: String,
        required: true
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      if (!e2.altText) throw Error("Missing prop `altText` expected on `ToastAction`");
      let { forwardRef: t2 } = Y();
      return (e3, n2) => e3.altText ? (M(), R(rr, {
        key: 0,
        "alt-text": e3.altText,
        "as-child": ``
      }, {
        default: I(() => [
          a(_r, {
            ref: m(t2),
            as: e3.as,
            "as-child": e3.asChild
          }, {
            default: I(() => [
              V(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `as`,
            `as-child`
          ])
        ]),
        _: 3
      }, 8, [
        `alt-text`
      ])) : H(`v-if`, true);
    }
  }), yr = j({
    __name: `ToastDescription`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2;
      return Y(), (e3, n2) => (M(), R(m(q), i(U(t2)), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), br = j({
    __name: `ToastPortal`,
    props: {
      to: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      defer: {
        type: Boolean,
        required: false
      },
      forceMount: {
        type: Boolean,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2;
      return (e3, n2) => (M(), R(m(mt), i(U(t2)), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), xr = j({
    __name: `ToastRoot`,
    props: {
      defaultOpen: {
        type: Boolean,
        required: false,
        default: true
      },
      forceMount: {
        type: Boolean,
        required: false
      },
      type: {
        type: String,
        required: false,
        default: `foreground`
      },
      open: {
        type: Boolean,
        required: false,
        default: void 0
      },
      duration: {
        type: Number,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `li`
      }
    },
    emits: [
      `escapeKeyDown`,
      `pause`,
      `resume`,
      `swipeStart`,
      `swipeMove`,
      `swipeCancel`,
      `swipeEnd`,
      `update:open`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { forwardRef: i2 } = Y(), o2 = He(n2, `open`, r2, {
        defaultValue: n2.defaultOpen,
        passive: n2.open === void 0
      });
      return (e3, t3) => (M(), R(m(ht), {
        present: e3.forceMount || m(o2)
      }, {
        default: I(() => [
          a(gr, E({
            ref: m(i2),
            open: m(o2),
            type: e3.type,
            as: e3.as,
            "as-child": e3.asChild,
            duration: e3.duration
          }, e3.$attrs, {
            onClose: t3[0] || (t3[0] = (e4) => o2.value = false),
            onPause: t3[1] || (t3[1] = (e4) => r2(`pause`)),
            onResume: t3[2] || (t3[2] = (e4) => r2(`resume`)),
            onEscapeKeyDown: t3[3] || (t3[3] = (e4) => r2(`escapeKeyDown`, e4)),
            onSwipeStart: t3[4] || (t3[4] = (e4) => {
              r2(`swipeStart`, e4), e4.defaultPrevented || e4.currentTarget.setAttribute(`data-swipe`, `start`);
            }),
            onSwipeMove: t3[5] || (t3[5] = (e4) => {
              if (r2(`swipeMove`, e4), !e4.defaultPrevented) {
                let { x: t4, y: n3 } = e4.detail.delta, r3 = e4.currentTarget;
                r3.setAttribute(`data-swipe`, `move`), r3.style.setProperty(`--reka-toast-swipe-move-x`, `${t4}px`), r3.style.setProperty(`--reka-toast-swipe-move-y`, `${n3}px`);
              }
            }),
            onSwipeCancel: t3[6] || (t3[6] = (e4) => {
              if (r2(`swipeCancel`, e4), !e4.defaultPrevented) {
                let t4 = e4.currentTarget;
                t4.setAttribute(`data-swipe`, `cancel`), t4.style.removeProperty(`--reka-toast-swipe-move-x`), t4.style.removeProperty(`--reka-toast-swipe-move-y`), t4.style.removeProperty(`--reka-toast-swipe-end-x`), t4.style.removeProperty(`--reka-toast-swipe-end-y`);
              }
            }),
            onSwipeEnd: t3[7] || (t3[7] = (e4) => {
              if (r2(`swipeEnd`, e4), !e4.defaultPrevented) {
                let { x: t4, y: n3 } = e4.detail.delta, r3 = e4.currentTarget;
                r3.setAttribute(`data-swipe`, `end`), r3.style.removeProperty(`--reka-toast-swipe-move-x`), r3.style.removeProperty(`--reka-toast-swipe-move-y`), r3.style.setProperty(`--reka-toast-swipe-end-x`, `${t4}px`), r3.style.setProperty(`--reka-toast-swipe-end-y`, `${n3}px`), o2.value = false;
              }
            })
          }), {
            default: I(({ remaining: t4, duration: n3 }) => [
              V(e3.$slots, `default`, {
                remaining: t4,
                duration: n3,
                open: m(o2)
              })
            ]),
            _: 3
          }, 16, [
            `open`,
            `type`,
            `as`,
            `as-child`,
            `duration`
          ])
        ]),
        _: 3
      }, 8, [
        `present`
      ]));
    }
  }), Sr = j({
    __name: `ToastTitle`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2;
      return Y(), (e3, n2) => (M(), R(m(q), i(U(t2)), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), Cr = j({
    __name: `FocusProxy`,
    emits: [
      `focusFromOutsideViewport`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = t2, r2 = ir();
      return (e3, t3) => (M(), R(m(pt), {
        tabindex: `0`,
        style: {
          position: `fixed`
        },
        onFocus: t3[0] || (t3[0] = (e4) => {
          let t4 = e4.relatedTarget;
          m(r2).viewport.value?.contains(t4) || n2(`focusFromOutsideViewport`);
        })
      }, {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }));
    }
  }), wr = j({
    inheritAttrs: false,
    __name: `ToastViewport`,
    props: {
      hotkey: {
        type: Array,
        required: false,
        default: () => [
          `F8`
        ]
      },
      label: {
        type: [
          String,
          Function
        ],
        required: false,
        default: `Notifications ({hotkey})`
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `ol`
      }
    },
    setup(e2) {
      let { hotkey: t2, label: n2 } = v(e2), { forwardRef: r2, currentElement: i2 } = Y(), { CollectionSlot: o2, getItems: s2 } = rt(), c2 = ir(), l2 = O(() => c2.toastCount.value > 0), u2 = z(), d2 = z(), f2 = /Key/g, p2 = /Digit/g, h2 = O(() => t2.value.join(`+`).replace(f2, ``).replace(p2, ``));
      Ve(t2.value, () => {
        i2.value.focus();
      }), w(() => {
        c2.onViewportChange(i2.value);
      }), y((e3) => {
        let t3 = i2.value;
        if (l2.value && t3) {
          let n3 = () => {
            if (!c2.isClosePausedRef.value) {
              let e4 = new CustomEvent(cr);
              t3.dispatchEvent(e4), c2.isClosePausedRef.value = true;
            }
          }, r3 = () => {
            if (c2.isClosePausedRef.value) {
              let e4 = new CustomEvent(lr);
              t3.dispatchEvent(e4), c2.isClosePausedRef.value = false;
            }
          }, i3 = (e4) => {
            t3.contains(e4.relatedTarget) || r3();
          }, a2 = () => {
            t3.contains(et()) || r3();
          }, o3 = (e4) => {
            let n4 = e4.altKey || e4.ctrlKey || e4.metaKey;
            if (e4.key === `Tab` && !n4) {
              let n5 = et(), r4 = e4.shiftKey;
              if (e4.target === t3 && r4) {
                u2.value?.focus();
                return;
              }
              let i4 = g2({
                tabbingDirection: r4 ? `backwards` : `forwards`
              }), a3 = i4.findIndex((e5) => e5 === n5);
              tt(i4.slice(a3 + 1)) ? e4.preventDefault() : r4 ? u2.value?.focus() : d2.value?.focus();
            }
          };
          t3.addEventListener(`focusin`, n3), t3.addEventListener(`focusout`, i3), t3.addEventListener(`pointermove`, n3), t3.addEventListener(`pointerleave`, a2), t3.addEventListener(`keydown`, o3), window.addEventListener(`blur`, n3), window.addEventListener(`focus`, r3), e3(() => {
            t3.removeEventListener(`focusin`, n3), t3.removeEventListener(`focusout`, i3), t3.removeEventListener(`pointermove`, n3), t3.removeEventListener(`pointerleave`, a2), t3.removeEventListener(`keydown`, o3), window.removeEventListener(`blur`, n3), window.removeEventListener(`focus`, r3);
          });
        }
      });
      function g2({ tabbingDirection: e3 }) {
        let t3 = s2().map((e4) => e4.ref).map((t4) => {
          let n3 = [
            t4,
            ...nt(t4)
          ];
          return e3 === `forwards` ? n3 : n3.reverse();
        });
        return (e3 === `forwards` ? t3.reverse() : t3).flat();
      }
      return (e3, t3) => (M(), R(m(qn), {
        role: `region`,
        "aria-label": typeof m(n2) == `string` ? m(n2).replace(`{hotkey}`, h2.value) : m(n2)(h2.value),
        tabindex: `-1`,
        style: T({
          pointerEvents: l2.value ? void 0 : `none`
        })
      }, {
        default: I(() => [
          l2.value ? (M(), R(Cr, {
            key: 0,
            ref: (e4) => {
              e4 && (u2.value = m(Ge)(e4));
            },
            onFocusFromOutsideViewport: t3[0] || (t3[0] = () => {
              let e4 = g2({
                tabbingDirection: `forwards`
              });
              m(tt)(e4);
            })
          }, null, 512)) : H(`v-if`, true),
          a(m(o2), null, {
            default: I(() => [
              a(m(q), E({
                ref: m(r2),
                tabindex: `-1`,
                as: e3.as,
                "as-child": e3.asChild
              }, e3.$attrs), {
                default: I(() => [
                  V(e3.$slots, `default`)
                ]),
                _: 3
              }, 16, [
                `as`,
                `as-child`
              ])
            ]),
            _: 3
          }),
          l2.value ? (M(), R(Cr, {
            key: 1,
            ref: (e4) => {
              e4 && (d2.value = m(Ge)(e4));
            },
            onFocusFromOutsideViewport: t3[1] || (t3[1] = () => {
              let e4 = g2({
                tabbingDirection: `backwards`
              });
              m(tt)(e4);
            })
          }, null, 512)) : H(`v-if`, true)
        ]),
        _: 3
      }, 8, [
        `aria-label`,
        `style`
      ]));
    }
  }), Tr = {
    slots: {
      root: `gap-2`,
      base: `relative overflow-hidden rounded-full bg-accented`,
      indicator: `rounded-full size-full transition-transform duration-200 ease-out`,
      status: `flex text-dimmed transition-[width] duration-200`,
      steps: `grid items-end`,
      step: `truncate text-end row-start-1 col-start-1 transition-opacity`
    },
    variants: {
      animation: {
        carousel: ``,
        "carousel-inverse": ``,
        swing: ``,
        elastic: ``
      },
      color: {
        primary: {
          indicator: `bg-primary`,
          steps: `text-primary`
        },
        secondary: {
          indicator: `bg-secondary`,
          steps: `text-secondary`
        },
        success: {
          indicator: `bg-success`,
          steps: `text-success`
        },
        info: {
          indicator: `bg-info`,
          steps: `text-info`
        },
        warning: {
          indicator: `bg-warning`,
          steps: `text-warning`
        },
        error: {
          indicator: `bg-error`,
          steps: `text-error`
        },
        neutral: {
          indicator: `bg-inverted`,
          steps: `text-inverted`
        }
      },
      size: {
        "2xs": {
          status: `text-xs`,
          steps: `text-xs`
        },
        xs: {
          status: `text-xs`,
          steps: `text-xs`
        },
        sm: {
          status: `text-sm`,
          steps: `text-sm`
        },
        md: {
          status: `text-sm`,
          steps: `text-sm`
        },
        lg: {
          status: `text-sm`,
          steps: `text-sm`
        },
        xl: {
          status: `text-base`,
          steps: `text-base`
        },
        "2xl": {
          status: `text-base`,
          steps: `text-base`
        }
      },
      step: {
        active: {
          step: `opacity-100`
        },
        first: {
          step: `opacity-100 text-muted`
        },
        other: {
          step: `opacity-0`
        },
        last: {
          step: ``
        }
      },
      orientation: {
        horizontal: {
          root: `w-full flex flex-col`,
          base: `w-full`,
          status: `flex-row items-center justify-end min-w-fit`
        },
        vertical: {
          root: `h-full flex flex-row-reverse`,
          base: `h-full`,
          status: `flex-col justify-end min-h-fit`
        }
      },
      inverted: {
        true: {
          status: `self-end`
        }
      }
    },
    compoundVariants: [
      {
        inverted: true,
        orientation: `horizontal`,
        class: {
          step: `text-start`,
          status: `flex-row-reverse`
        }
      },
      {
        inverted: true,
        orientation: `vertical`,
        class: {
          steps: `items-start`,
          status: `flex-col-reverse`
        }
      },
      {
        orientation: `horizontal`,
        size: `2xs`,
        class: `h-px`
      },
      {
        orientation: `horizontal`,
        size: `xs`,
        class: `h-0.5`
      },
      {
        orientation: `horizontal`,
        size: `sm`,
        class: `h-1`
      },
      {
        orientation: `horizontal`,
        size: `md`,
        class: `h-2`
      },
      {
        orientation: `horizontal`,
        size: `lg`,
        class: `h-3`
      },
      {
        orientation: `horizontal`,
        size: `xl`,
        class: `h-4`
      },
      {
        orientation: `horizontal`,
        size: `2xl`,
        class: `h-5`
      },
      {
        orientation: `vertical`,
        size: `2xs`,
        class: `w-px`
      },
      {
        orientation: `vertical`,
        size: `xs`,
        class: `w-0.5`
      },
      {
        orientation: `vertical`,
        size: `sm`,
        class: `w-1`
      },
      {
        orientation: `vertical`,
        size: `md`,
        class: `w-2`
      },
      {
        orientation: `vertical`,
        size: `lg`,
        class: `w-3`
      },
      {
        orientation: `vertical`,
        size: `xl`,
        class: `w-4`
      },
      {
        orientation: `vertical`,
        size: `2xl`,
        class: `w-5`
      },
      {
        orientation: `horizontal`,
        animation: `carousel`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `carousel`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `carousel-inverse`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `carousel-inverse`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `swing`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `swing`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `elastic`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `elastic`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]`
        }
      }
    ],
    defaultVariants: {
      animation: `carousel`,
      color: `primary`,
      size: `md`
    }
  }, Er = {
    __name: `Progress`,
    props: {
      as: {
        type: null,
        required: false
      },
      max: {
        type: [
          Number,
          Array
        ],
        required: false
      },
      status: {
        type: Boolean,
        required: false
      },
      inverted: {
        type: Boolean,
        required: false,
        default: false
      },
      size: {
        type: null,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      orientation: {
        type: null,
        required: false,
        default: `horizontal`
      },
      animation: {
        type: null,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      getValueLabel: {
        type: Function,
        required: false
      },
      getValueText: {
        type: Function,
        required: false
      },
      modelValue: {
        type: [
          Number,
          null
        ],
        required: false,
        default: null
      }
    },
    emits: [
      `update:modelValue`,
      `update:max`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, i2 = p(), { dir: s2 } = ye(), c2 = K(), l2 = Me(`progress`, n2), u2 = xt(Fe(n2, `getValueLabel`, `getValueText`, `modelValue`), r2), d2 = O(() => u2.value.modelValue === null), f2 = O(() => Array.isArray(n2.max)), h2 = O(() => {
        if (!(d2.value || !n2.max)) return Array.isArray(n2.max) ? n2.max.length - 1 : Number(n2.max);
      }), g2 = O(() => {
        if (!d2.value) switch (true) {
          case u2.value.modelValue < 0:
            return 0;
          case u2.value.modelValue > (h2.value ?? 100):
            return 100;
          default:
            return Math.round(u2.value.modelValue / (h2.value ?? 100) * 100);
        }
      }), _2 = O(() => {
        if (g2.value !== void 0) return n2.orientation === `vertical` ? {
          transform: `translateY(${n2.inverted ? `` : `-`}${100 - g2.value}%)`
        } : s2.value === `rtl` ? {
          transform: `translateX(${n2.inverted ? `-` : ``}${100 - g2.value}%)`
        } : {
          transform: `translateX(${n2.inverted ? `` : `-`}${100 - g2.value}%)`
        };
      }), v2 = O(() => {
        let e3 = `${Math.max(g2.value ?? 0, 0)}%`;
        return n2.orientation === `vertical` ? {
          height: e3
        } : {
          width: e3
        };
      });
      function y2(e3) {
        return e3 === Number(n2.modelValue);
      }
      function x2(e3) {
        return e3 === 0;
      }
      function w2(e3) {
        return e3 === h2.value;
      }
      function D2(e3) {
        return e3 = Number(e3), y2(e3) && !x2(e3) ? `active` : x2(e3) && y2(e3) ? `first` : w2(e3) && y2(e3) ? `last` : `other`;
      }
      let k2 = O(() => J({
        extend: J(Tr),
        ...c2.ui?.progress || {}
      })({
        animation: n2.animation,
        size: n2.size,
        color: n2.color,
        orientation: n2.orientation,
        inverted: n2.inverted
      }));
      return (t3, r3) => (M(), R(m(q), {
        as: e2.as,
        "data-orientation": e2.orientation,
        "data-slot": `root`,
        class: b(k2.value.root({
          class: [
            m(l2)?.root,
            n2.class
          ]
        }))
      }, {
        default: I(() => [
          !d2.value && (e2.status || i2.status) ? (M(), S(`div`, {
            key: 0,
            "data-slot": `status`,
            class: b(k2.value.status({
              class: m(l2)?.status
            })),
            style: T(v2.value)
          }, [
            V(t3.$slots, `status`, {
              percent: g2.value
            }, () => [
              o(L(g2.value) + `% `, 1)
            ])
          ], 6)) : H(``, true),
          a(m(tr), E(m(u2), {
            max: h2.value,
            "data-slot": `base`,
            class: k2.value.base({
              class: m(l2)?.base
            }),
            style: {
              transform: `translateZ(0)`
            }
          }), {
            default: I(() => [
              a(m(nr), {
                "data-slot": `indicator`,
                class: b(k2.value.indicator({
                  class: m(l2)?.indicator
                })),
                style: T(_2.value)
              }, null, 8, [
                `class`,
                `style`
              ])
            ]),
            _: 1
          }, 16, [
            `max`,
            `class`
          ]),
          f2.value ? (M(), S(`div`, {
            key: 1,
            "data-slot": `steps`,
            class: b(k2.value.steps({
              class: m(l2)?.steps
            }))
          }, [
            (M(true), S(P, null, C(e2.max, (e3, n3) => (M(), S(`div`, {
              key: n3,
              "data-slot": `step`,
              class: b(k2.value.step({
                class: m(l2)?.step,
                step: D2(n3)
              }))
            }, [
              V(t3.$slots, `step-${n3}`, {
                step: e3
              }, () => [
                o(L(e3), 1)
              ])
            ], 2))), 128))
          ], 2)) : H(``, true)
        ]),
        _: 3
      }, 8, [
        `as`,
        `data-orientation`,
        `class`
      ]));
    }
  }, Dr = {
    slots: {
      root: `relative group overflow-hidden bg-default shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5 focus:outline-none`,
      wrapper: `w-0 flex-1 flex flex-col`,
      title: `text-sm font-medium text-highlighted`,
      description: `text-sm text-muted`,
      icon: `shrink-0 size-5`,
      avatar: `shrink-0`,
      avatarSize: `2xl`,
      actions: `flex gap-1.5 shrink-0`,
      progress: `absolute inset-x-0 bottom-0`,
      close: `p-0`
    },
    variants: {
      color: {
        primary: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary`,
          icon: `text-primary`
        },
        secondary: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary`,
          icon: `text-secondary`
        },
        success: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success`,
          icon: `text-success`
        },
        info: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info`,
          icon: `text-info`
        },
        warning: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning`,
          icon: `text-warning`
        },
        error: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error`,
          icon: `text-error`
        },
        neutral: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted`,
          icon: `text-highlighted`
        }
      },
      orientation: {
        horizontal: {
          root: `items-center`,
          actions: `items-center`
        },
        vertical: {
          root: `items-start`,
          actions: `items-start mt-2.5`
        }
      },
      title: {
        true: {
          description: `mt-1`
        }
      }
    },
    defaultVariants: {
      color: `primary`
    }
  }, Or = {
    __name: `Toast`,
    props: {
      as: {
        type: null,
        required: false
      },
      title: {
        type: [
          String,
          Object,
          Function
        ],
        required: false
      },
      description: {
        type: [
          String,
          Object,
          Function
        ],
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      orientation: {
        type: null,
        required: false,
        default: `vertical`
      },
      close: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      closeIcon: {
        type: null,
        required: false
      },
      actions: {
        type: Array,
        required: false
      },
      progress: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      open: {
        type: Boolean,
        required: false
      },
      type: {
        type: String,
        required: false
      },
      duration: {
        type: Number,
        required: false
      }
    },
    emits: [
      `escapeKeyDown`,
      `pause`,
      `resume`,
      `swipeStart`,
      `swipeMove`,
      `swipeCancel`,
      `swipeEnd`,
      `update:open`
    ],
    setup(e2, { expose: t2, emit: n2 }) {
      let r2 = e2, i2 = n2, s2 = p(), { t: c2 } = ye(), l2 = K(), u2 = Me(`toast`, r2), d2 = xt(Fe(r2, `as`, `defaultOpen`, `open`, `duration`, `type`), i2), f2 = O(() => J({
        extend: J(Dr),
        ...l2.ui?.toast || {}
      })({
        color: r2.color,
        orientation: r2.orientation,
        title: !!r2.title || !!s2.title
      })), h2 = g(`rootRef`), _2 = z(0);
      return w(() => {
        h2.value?.$el?.getBoundingClientRect && (_2.value = h2.value.$el.getBoundingClientRect().height);
      }), t2({
        height: _2
      }), (t3, n3) => (M(), R(m(xr), E({
        ref_key: `rootRef`,
        ref: h2
      }, m(d2), {
        "data-orientation": e2.orientation,
        "data-slot": `root`,
        class: f2.value.root({
          class: [
            m(u2)?.root,
            r2.class
          ]
        }),
        style: {
          "--height": _2.value
        }
      }), {
        default: I(({ remaining: r3, duration: i3, open: d3 }) => [
          V(t3.$slots, `leading`, {
            ui: f2.value
          }, () => [
            e2.avatar ? (M(), R(Ce, E({
              key: 0,
              size: m(u2)?.avatarSize || f2.value.avatarSize()
            }, e2.avatar, {
              "data-slot": `avatar`,
              class: f2.value.avatar({
                class: m(u2)?.avatar
              })
            }), null, 16, [
              `size`,
              `class`
            ])) : e2.icon ? (M(), R(Ne, {
              key: 1,
              name: e2.icon,
              "data-slot": `icon`,
              class: b(f2.value.icon({
                class: m(u2)?.icon
              }))
            }, null, 8, [
              `name`,
              `class`
            ])) : H(``, true)
          ]),
          x(`div`, {
            "data-slot": `wrapper`,
            class: b(f2.value.wrapper({
              class: m(u2)?.wrapper
            }))
          }, [
            e2.title || s2.title ? (M(), R(m(Sr), {
              key: 0,
              "data-slot": `title`,
              class: b(f2.value.title({
                class: m(u2)?.title
              }))
            }, {
              default: I(() => [
                V(t3.$slots, `title`, {}, () => [
                  typeof e2.title == `function` ? (M(), R(oe(e2.title()), {
                    key: 0
                  })) : typeof e2.title == `object` ? (M(), R(oe(e2.title), {
                    key: 1
                  })) : (M(), S(P, {
                    key: 2
                  }, [
                    o(L(e2.title), 1)
                  ], 64))
                ])
              ]),
              _: 3
            }, 8, [
              `class`
            ])) : H(``, true),
            e2.description || s2.description ? (M(), R(m(yr), {
              key: 1,
              "data-slot": `description`,
              class: b(f2.value.description({
                class: m(u2)?.description
              }))
            }, {
              default: I(() => [
                V(t3.$slots, `description`, {}, () => [
                  typeof e2.description == `function` ? (M(), R(oe(e2.description()), {
                    key: 0
                  })) : typeof e2.description == `object` ? (M(), R(oe(e2.description), {
                    key: 1
                  })) : (M(), S(P, {
                    key: 2
                  }, [
                    o(L(e2.description), 1)
                  ], 64))
                ])
              ]),
              _: 3
            }, 8, [
              `class`
            ])) : H(``, true),
            e2.orientation === `vertical` && (e2.actions?.length || s2.actions) ? (M(), S(`div`, {
              key: 2,
              "data-slot": `actions`,
              class: b(f2.value.actions({
                class: m(u2)?.actions
              }))
            }, [
              V(t3.$slots, `actions`, {}, () => [
                (M(true), S(P, null, C(e2.actions, (t4, r4) => (M(), R(m(vr), {
                  key: r4,
                  "alt-text": t4.label || `Action`,
                  "as-child": ``,
                  onClick: n3[0] || (n3[0] = W(() => {
                  }, [
                    `stop`
                  ]))
                }, {
                  default: I(() => [
                    a(ke, E({
                      size: `xs`,
                      color: e2.color
                    }, {
                      ref_for: true
                    }, t4), null, 16, [
                      `color`
                    ])
                  ]),
                  _: 2
                }, 1032, [
                  `alt-text`
                ]))), 128))
              ])
            ], 2)) : H(``, true)
          ], 2),
          e2.orientation === `horizontal` && (e2.actions?.length || s2.actions) || e2.close ? (M(), S(`div`, {
            key: 0,
            "data-slot": `actions`,
            class: b(f2.value.actions({
              class: m(u2)?.actions,
              orientation: `horizontal`
            }))
          }, [
            e2.orientation === `horizontal` && (e2.actions?.length || s2.actions) ? V(t3.$slots, `actions`, {
              key: 0
            }, () => [
              (M(true), S(P, null, C(e2.actions, (t4, r4) => (M(), R(m(vr), {
                key: r4,
                "alt-text": t4.label || `Action`,
                "as-child": ``,
                onClick: n3[1] || (n3[1] = W(() => {
                }, [
                  `stop`
                ]))
              }, {
                default: I(() => [
                  a(ke, E({
                    size: `xs`,
                    color: e2.color
                  }, {
                    ref_for: true
                  }, t4), null, 16, [
                    `color`
                  ])
                ]),
                _: 2
              }, 1032, [
                `alt-text`
              ]))), 128))
            ]) : H(``, true),
            e2.close || s2.close ? (M(), R(m(_r), {
              key: 1,
              "as-child": ``
            }, {
              default: I(() => [
                V(t3.$slots, `close`, {
                  ui: f2.value
                }, () => [
                  e2.close ? (M(), R(ke, E({
                    key: 0,
                    icon: e2.closeIcon || m(l2).ui.icons.close,
                    color: `neutral`,
                    variant: `link`,
                    "aria-label": m(c2)(`toast.close`)
                  }, typeof e2.close == `object` ? e2.close : {}, {
                    "data-slot": `close`,
                    class: f2.value.close({
                      class: m(u2)?.close
                    }),
                    onClick: n3[2] || (n3[2] = W(() => {
                    }, [
                      `stop`
                    ]))
                  }), null, 16, [
                    `icon`,
                    `aria-label`,
                    `class`
                  ])) : H(``, true)
                ])
              ]),
              _: 3
            })) : H(``, true)
          ], 2)) : H(``, true),
          e2.progress && d3 && r3 > 0 && i3 ? (M(), R(Er, E({
            key: 1,
            "model-value": r3 / i3 * 100,
            color: e2.color
          }, typeof e2.progress == `object` ? e2.progress : {}, {
            size: `sm`,
            "data-slot": `progress`,
            class: f2.value.progress({
              class: m(u2)?.progress
            })
          }), null, 16, [
            `model-value`,
            `color`,
            `class`
          ])) : H(``, true)
        ]),
        _: 3
      }, 16, [
        `data-orientation`,
        `class`,
        `style`
      ]));
    }
  }, kr = {
    slots: {
      viewport: `fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none`,
      base: `pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[state=open]:data-[pulsing=odd]:animate-[toast-pulse-a_300ms_ease-out] data-[state=open]:data-[pulsing=even]:animate-[toast-pulse-b_300ms_ease-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out`
    },
    variants: {
      position: {
        "top-left": {
          viewport: `left-4`
        },
        "top-center": {
          viewport: `left-1/2 transform -translate-x-1/2`
        },
        "top-right": {
          viewport: `right-4`
        },
        "bottom-left": {
          viewport: `left-4`
        },
        "bottom-center": {
          viewport: `left-1/2 transform -translate-x-1/2`
        },
        "bottom-right": {
          viewport: `right-4`
        }
      },
      swipeDirection: {
        up: `data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]`,
        right: `data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]`,
        down: `data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]`,
        left: `data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]`
      }
    },
    compoundVariants: [
      {
        position: [
          `top-left`,
          `top-center`,
          `top-right`
        ],
        class: {
          viewport: `top-4`,
          base: `top-0 data-[state=open]:animate-[toast-slide-in-from-top_200ms_ease-in-out]`
        }
      },
      {
        position: [
          `bottom-left`,
          `bottom-center`,
          `bottom-right`
        ],
        class: {
          viewport: `bottom-4`,
          base: `bottom-0 data-[state=open]:animate-[toast-slide-in-from-bottom_200ms_ease-in-out]`
        }
      },
      {
        swipeDirection: [
          `left`,
          `right`
        ],
        class: `data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0`
      },
      {
        swipeDirection: [
          `up`,
          `down`
        ],
        class: `data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0`
      }
    ],
    defaultVariants: {
      position: `bottom-right`
    }
  }, Ar = Object.assign({
    name: `Toaster`
  }, {
    props: {
      position: {
        type: null,
        required: false
      },
      expand: {
        type: Boolean,
        required: false,
        default: true
      },
      progress: {
        type: Boolean,
        required: false,
        default: true
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: true
      },
      max: {
        type: Number,
        required: false,
        default: 5
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      duration: {
        type: Number,
        required: false,
        default: 5e3
      },
      disableSwipe: {
        type: Boolean,
        required: false
      },
      swipeThreshold: {
        type: Number,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, { toasts: n2, remove: r2 } = Mt(), o2 = K(), s2 = Me(`toaster`, t2);
      k(Nt, B(() => t2.max));
      let c2 = je(Fe(t2, `duration`, `label`, `swipeThreshold`, `disableSwipe`)), l2 = gt(B(() => t2.portal)), u2 = O(() => {
        switch (t2.position) {
          case `top-center`:
            return `up`;
          case `top-right`:
          case `bottom-right`:
            return `right`;
          case `bottom-center`:
            return `down`;
          case `top-left`:
          case `bottom-left`:
            return `left`;
        }
        return `right`;
      }), d2 = O(() => J({
        extend: J(kr),
        ...o2.ui?.toaster || {}
      })({
        position: t2.position,
        swipeDirection: u2.value
      }));
      function f2(e3, t3) {
        e3 || r2(t3);
      }
      let p2 = z(false), h2 = O(() => t2.expand || p2.value), g2 = z([]), _2 = O(() => g2.value.reduce((e3, { height: t3 }) => e3 + t3 + 16, 0)), v2 = O(() => g2.value[g2.value.length - 1]?.height || 0);
      function y2(e3) {
        return g2.value.slice(e3 + 1).reduce((e4, { height: t3 }) => e4 + t3 + 16, 0);
      }
      return (r3, o3) => (M(), R(m(or), E({
        "swipe-direction": u2.value
      }, m(c2)), {
        default: I(() => [
          V(r3.$slots, `default`),
          (M(true), S(P, null, C(m(n2), (t3, r4) => (M(), R(Or, E({
            key: t3.id,
            ref_for: true,
            ref_key: `refs`,
            ref: g2,
            progress: e2.progress
          }, {
            ref_for: true
          }, m(be)(t3, [
            `id`,
            `close`,
            `_duplicate`,
            `_updated`
          ]), {
            close: t3.close,
            "data-expanded": h2.value,
            "data-front": !h2.value && r4 === m(n2).length - 1,
            "data-pulsing": t3._duplicate ? t3._duplicate % 2 == 0 ? `even` : `odd` : void 0,
            style: {
              "--index": r4 - m(n2).length + m(n2).length,
              "--before": m(n2).length - 1 - r4,
              "--offset": y2(r4),
              "--scale": h2.value ? `1` : `calc(1 - var(--before) * var(--scale-factor))`,
              "--translate": h2.value ? `calc(var(--offset) * var(--translate-factor))` : `calc(var(--before) * var(--gap))`,
              "--transform": `translateY(var(--translate)) scale(var(--scale))`
            },
            "data-slot": `base`,
            class: d2.value.base({
              class: [
                m(s2)?.base,
                t3.onClick ? `cursor-pointer` : void 0
              ]
            }),
            "onUpdate:open": (e3) => f2(e3, t3.id),
            onClick: (e3) => t3.onClick && t3.onClick(t3)
          }), null, 16, [
            `progress`,
            `close`,
            `data-expanded`,
            `data-front`,
            `data-pulsing`,
            `style`,
            `class`,
            `onUpdate:open`,
            `onClick`
          ]))), 128)),
          a(m(br), i(U(m(l2))), {
            default: I(() => [
              a(m(wr), {
                "data-expanded": h2.value,
                "data-slot": `viewport`,
                class: b(d2.value.viewport({
                  class: [
                    m(s2)?.viewport,
                    t2.class
                  ]
                })),
                style: T({
                  "--scale-factor": `0.05`,
                  "--translate-factor": e2.position?.startsWith(`top`) ? `1px` : `-1px`,
                  "--gap": e2.position?.startsWith(`top`) ? `16px` : `-16px`,
                  "--front-height": `${v2.value}px`,
                  "--height": `${_2.value}px`
                }),
                onMouseenter: o3[0] || (o3[0] = (e3) => p2.value = true),
                onMouseleave: o3[1] || (o3[1] = (e3) => p2.value = false)
              }, null, 8, [
                `data-expanded`,
                `class`,
                `style`
              ])
            ]),
            _: 1
          }, 16)
        ]),
        _: 3
      }, 16, [
        `swipe-direction`
      ]));
    }
  }), jr = {
    __name: `OverlayProvider`,
    setup(e2) {
      let { overlays: t2, unmount: n2, close: r2 } = jt(), i2 = O(() => t2.filter((e3) => e3.isMounted)), a2 = (e3) => {
        r2(e3), n2(e3);
      }, o2 = (e3, t3) => {
        r2(e3, t3);
      };
      return (e3, t3) => (M(true), S(P, null, C(i2.value, (e4) => (M(), R(oe(e4.component), E({
        key: e4.id
      }, {
        ref_for: true
      }, e4.props, {
        open: e4.isOpen,
        "onUpdate:open": (t4) => e4.isOpen = t4,
        onClose: (t4) => o2(e4.id, t4),
        "onAfter:leave": (t4) => a2(e4.id)
      }), null, 16, [
        `open`,
        `onUpdate:open`,
        `onClose`,
        `onAfter:leave`
      ]))), 128));
    }
  }, Mr = Object.assign({
    name: `App`
  }, {
    props: {
      tooltip: {
        type: Object,
        required: false
      },
      toaster: {
        type: [
          Object,
          null
        ],
        required: false
      },
      locale: {
        type: Object,
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: `body`
      },
      dir: {
        type: String,
        required: false
      },
      scrollBody: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      nonce: {
        type: String,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = je(Fe(t2, `scrollBody`)), r2 = B(() => t2.tooltip), o2 = B(() => t2.toaster), s2 = B(() => t2.locale);
      return k(_e, s2), k(yt, B(() => t2.portal)), (c2, l2) => (M(), R(m(St), E({
        "use-id": () => h(),
        dir: t2.dir || s2.value?.dir,
        locale: s2.value?.code
      }, m(n2)), {
        default: I(() => [
          a(m(ft), i(U(r2.value)), {
            default: I(() => [
              e2.toaster === null ? V(c2.$slots, `default`, {
                key: 1
              }) : (M(), R(Ar, i(E({
                key: 0
              }, o2.value)), {
                default: I(() => [
                  V(c2.$slots, `default`)
                ]),
                _: 3
              }, 16)),
              a(jr)
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 16, [
        `use-id`,
        `dir`,
        `locale`
      ]));
    }
  }), Nr = {
    base: `fixed inset-0 flex overflow-hidden`
  }, Pr = {
    __name: `DashboardGroup`,
    props: {
      as: {
        type: null,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      storage: {
        type: String,
        required: false,
        default: `cookie`
      },
      storageKey: {
        type: String,
        required: false,
        default: `dashboard`
      },
      persistent: {
        type: Boolean,
        required: false,
        default: true
      },
      unit: {
        type: String,
        required: false,
        default: `%`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = de(), r2 = K(), i2 = Me(`dashboardGroup`, t2), a2 = O(() => J({
        extend: J(Nr),
        ...r2.ui?.dashboardGroup || {}
      })), o2 = z(false), s2 = z(false);
      return Ft({
        storage: t2.storage,
        storageKey: t2.storageKey,
        persistent: t2.persistent,
        unit: t2.unit,
        sidebarOpen: o2,
        toggleSidebar: () => {
          n2.hooks.callHook(`dashboard:sidebar:toggle`);
        },
        sidebarCollapsed: s2,
        collapseSidebar: (e3) => {
          n2.hooks.callHook(`dashboard:sidebar:collapse`, e3);
        },
        toggleSearch: () => {
          n2.hooks.callHook(`dashboard:search:toggle`);
        }
      }), (n3, r3) => (M(), R(m(q), {
        as: e2.as,
        class: b(a2.value({
          class: [
            m(i2)?.base,
            t2.class
          ]
        }))
      }, {
        default: I(() => [
          V(n3.$slots, `default`)
        ]),
        _: 3
      }, 8, [
        `as`,
        `class`
      ]));
    }
  };
  (function() {
    try {
      if (typeof document < `u`) {
        var e2 = document.createElement(`style`);
        e2.nonce = document.head.querySelector(`meta[property=csp-nonce]`)?.content, e2.appendChild(document.createTextNode(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}`)), document.head.appendChild(e2);
      }
    } catch (e3) {
      console.error(`vite-plugin-css-injected-by-js`, e3);
    }
  })();
  var Fr = typeof window < `u` && typeof document < `u`;
  typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
  var Ir = (e2) => typeof e2 < `u`;
  function Lr(e2) {
    return JSON.parse(JSON.stringify(e2));
  }
  function Rr(e2, t2, n2, r2 = {}) {
    let { clone: i2 = false, passive: a2 = false, eventName: o2, deep: s2 = false, defaultValue: c2, shouldEmit: l2 } = r2, d2 = f(), p2 = n2 || d2?.emit || d2?.$emit?.bind(d2) || d2?.proxy?.$emit?.bind(d2?.proxy), m2 = o2;
    t2 || (t2 = `modelValue`), m2 || (m2 = `update:${t2.toString()}`);
    let h2 = (e3) => i2 ? typeof i2 == `function` ? i2(e3) : Lr(e3) : e3, g2 = () => Ir(e2[t2]) ? h2(e2[t2]) : c2, _2 = (e3) => {
      l2 ? l2(e3) && p2(m2, e3) : p2(m2, e3);
    };
    if (a2) {
      let n3 = z(g2()), r3 = false;
      return u(() => e2[t2], (e3) => {
        r3 || (r3 = true, n3.value = h2(e3), ne(() => r3 = false));
      }), u(n3, (n4) => {
        !r3 && (n4 !== e2[t2] || s2) && _2(n4);
      }, {
        deep: s2
      }), n3;
    } else return O({
      get() {
        return g2();
      },
      set(e3) {
        _2(e3);
      }
    });
  }
  var [zr, Br] = pe(`DrawerRoot`), Vr = /* @__PURE__ */ new WeakMap();
  function Z(e2, t2, n2 = false) {
    if (!e2 || !(e2 instanceof HTMLElement) || !t2) return;
    let r2 = {};
    Object.entries(t2).forEach(([t3, n3]) => {
      if (t3.startsWith(`--`)) {
        e2.style.setProperty(t3, n3);
        return;
      }
      r2[t3] = e2.style[t3], e2.style[t3] = n3;
    }), !n2 && Vr.set(e2, r2);
  }
  function Hr(e2, t2) {
    if (!e2 || !(e2 instanceof HTMLElement)) return;
    let n2 = Vr.get(e2);
    n2 && Object.entries(n2).forEach(([t3, n3]) => {
      e2.style[t3] = n3;
    });
  }
  function Ur(e2, t2) {
    let n2 = window.getComputedStyle(e2), r2 = n2.transform || n2.webkitTransform || n2.mozTransform, i2 = r2.match(/^matrix3d\((.+)\)$/);
    return i2 ? Number.parseFloat(i2[1].split(`, `)[Q(t2) ? 13 : 12]) : (i2 = r2.match(/^matrix\((.+)\)$/), i2 ? Number.parseFloat(i2[1].split(`, `)[Q(t2) ? 5 : 4]) : null);
  }
  function Wr(e2) {
    return 8 * (Math.log(e2 + 1) - 2);
  }
  function Q(e2) {
    switch (e2) {
      case `top`:
      case `bottom`:
        return true;
      case `left`:
      case `right`:
        return false;
      default:
        return e2;
    }
  }
  function Gr(e2, t2) {
    if (!e2) return () => {
    };
    let n2 = e2.style.cssText;
    return Object.assign(e2.style, t2), () => {
      e2.style.cssText = n2;
    };
  }
  var $ = {
    DURATION: 0.5,
    EASE: [
      0.32,
      0.72,
      0,
      1
    ]
  }, Kr = 0.4, qr = 0.25, Jr = 100, Yr = 8, Xr = 16, Zr = 26, Qr = `vaul-dragging`;
  function $r({ activeSnapPoint: e2, snapPoints: t2, drawerRef: n2, overlayRef: r2, fadeFromIndex: i2, onSnapPointChange: a2, direction: o2 }) {
    let s2 = z(typeof window < `u` ? {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    } : void 0);
    function c2() {
      s2.value = {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      };
    }
    w(() => {
      typeof window < `u` && window.addEventListener(`resize`, c2);
    }), ee(() => {
      typeof window < `u` && window.removeEventListener(`resize`, c2);
    });
    let l2 = O(() => (t2.value && e2.value === t2.value[t2.value.length - 1]) ?? null), d2 = O(() => t2.value && t2.value.length > 0 && (i2?.value || i2?.value === 0) && !Number.isNaN(i2?.value) && t2.value[i2?.value ?? -1] === e2.value || !t2.value), f2 = O(() => t2.value?.findIndex((t3) => t3 === e2.value) ?? null), p2 = O(() => t2.value?.map((e3) => {
      let t3 = typeof e3 == `string`, n3 = 0;
      if (t3 && (n3 = Number.parseInt(e3, 10)), Q(o2.value)) {
        let r4 = t3 ? n3 : s2.value ? e3 * s2.value.innerHeight : 0;
        return s2.value ? o2.value === `bottom` ? s2.value.innerHeight - r4 : -s2.value.innerHeight + r4 : r4;
      }
      let r3 = t3 ? n3 : s2.value ? e3 * s2.value.innerWidth : 0;
      return s2.value ? o2.value === `right` ? s2.value.innerWidth - r3 : -s2.value.innerWidth + r3 : r3;
    }) ?? []), m2 = O(() => f2.value === null ? null : p2.value?.[f2.value]), h2 = (s3) => {
      let c3 = p2.value?.findIndex((e3) => e3 === s3) ?? null;
      ne(() => {
        a2(c3, p2.value), Z(n2.value?.$el, {
          transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
          transform: Q(o2.value) ? `translate3d(0, ${s3}px, 0)` : `translate3d(${s3}px, 0, 0)`
        });
      }), p2.value && c3 !== p2.value.length - 1 && c3 !== i2?.value ? Z(r2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        opacity: `0`
      }) : Z(r2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        opacity: `1`
      }), e2.value = c3 === null ? null : t2.value?.[c3] ?? null;
    };
    u([
      e2,
      p2,
      t2
    ], () => {
      if (e2.value) {
        let n3 = t2.value?.findIndex((t3) => t3 === e2.value) ?? -1;
        p2.value && n3 !== -1 && typeof p2.value[n3] == `number` && h2(p2.value[n3]);
      }
    }, {
      immediate: true
    });
    function g2({ draggedDistance: e3, closeDrawer: n3, velocity: a3, dismissible: s3 }) {
      if (i2.value === void 0) return;
      let c3 = o2.value === `bottom` || o2.value === `right` ? (m2.value ?? 0) - e3 : (m2.value ?? 0) + e3, u2 = f2.value === i2.value - 1, d3 = f2.value === 0, g3 = e3 > 0;
      if (u2 && Z(r2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`
      }), a3 > 2 && !g3) {
        s3 ? n3() : h2(p2.value[0]);
        return;
      }
      if (a3 > 2 && g3 && p2 && t2.value) {
        h2(p2.value[t2.value.length - 1]);
        return;
      }
      let _3 = p2.value?.reduce((e4, t3) => typeof e4 != `number` || typeof t3 != `number` ? e4 : Math.abs(t3 - c3) < Math.abs(e4 - c3) ? t3 : e4), v3 = Q(o2.value) ? window.innerHeight : window.innerWidth;
      if (a3 > Kr && Math.abs(e3) < v3 * 0.4) {
        let e4 = g3 ? 1 : -1;
        if (e4 > 0 && l2) {
          h2(p2.value[(t2.value?.length ?? 0) - 1]);
          return;
        }
        if (d3 && e4 < 0 && s3 && n3(), f2.value === null) return;
        h2(p2.value[f2.value + e4]);
        return;
      }
      h2(_3);
    }
    function _2({ draggedDistance: e3 }) {
      if (m2.value === null) return;
      let t3 = o2.value === `bottom` || o2.value === `right` ? m2.value - e3 : m2.value + e3;
      (o2.value === `bottom` || o2.value === `right`) && t3 < p2.value[p2.value.length - 1] || (o2.value === `top` || o2.value === `left`) && t3 > p2.value[p2.value.length - 1] || Z(n2.value?.$el, {
        transform: Q(o2.value) ? `translate3d(0, ${t3}px, 0)` : `translate3d(${t3}px, 0, 0)`
      });
    }
    function v2(e3, n3) {
      if (!t2.value || typeof f2.value != `number` || !p2.value || i2.value === void 0) return null;
      let r3 = f2.value === i2.value - 1;
      if (f2.value >= i2.value && n3) return 0;
      if (r3 && !n3) return 1;
      if (!d2.value && !r3) return null;
      let a3 = r3 ? f2.value + 1 : f2.value - 1, o3 = r3 ? p2.value[a3] - p2.value[a3 - 1] : p2.value[a3 + 1] - p2.value[a3], s3 = e3 / Math.abs(o3);
      return r3 ? 1 - s3 : s3;
    }
    return {
      isLastSnapPoint: l2,
      shouldFade: d2,
      getPercentageDragged: v2,
      activeSnapPointIndex: f2,
      onRelease: g2,
      onDrag: _2,
      snapPointsOffset: p2
    };
  }
  function ei() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  var ti = null;
  function ni(e2) {
    let { isOpen: t2, modal: n2, nested: r2, hasBeenOpened: i2, preventScrollRestoration: a2, noBodyStyles: o2 } = e2, s2 = z(typeof window < `u` ? window.location.href : ``), c2 = z(0);
    function l2() {
      if (ei() && ti === null && t2.value && !o2.value) {
        ti = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
          height: document.body.style.height
        };
        let { scrollX: e3, innerHeight: t3 } = window;
        document.body.style.setProperty(`position`, `fixed`, `important`), Object.assign(document.body.style, {
          top: `${-c2.value}px`,
          left: `${-e3}px`,
          right: `0px`,
          height: `auto`
        }), setTimeout(() => {
          requestAnimationFrame(() => {
            let e4 = t3 - window.innerHeight;
            e4 && c2.value >= t3 && (document.body.style.top = `-${c2.value + e4}px`);
          });
        }, 300);
      }
    }
    function d2() {
      if (ei() && ti !== null && !o2.value) {
        let e3 = -Number.parseInt(document.body.style.top, 10), t3 = -Number.parseInt(document.body.style.left, 10);
        Object.assign(document.body.style, ti), window.requestAnimationFrame(() => {
          if (a2.value && s2.value !== window.location.href) {
            s2.value = window.location.href;
            return;
          }
          window.scrollTo(t3, e3);
        }), ti = null;
      }
    }
    return w(() => {
      function e3() {
        c2.value = window.scrollY;
      }
      e3(), window.addEventListener(`scroll`, e3), D(() => {
        window.removeEventListener(`scroll`, e3);
      });
    }), u([
      t2,
      i2,
      s2
    ], () => {
      r2.value || !i2.value || (t2.value ? (window.matchMedia(`(display-mode: standalone)`).matches || l2(), n2.value || setTimeout(() => {
        d2();
      }, 500)) : d2());
    }), {
      restorePositionSetting: d2
    };
  }
  function ri(e2, t2) {
    return e2 && e2.value ? e2 : t2;
  }
  function ii(e2) {
    let { emitDrag: t2, emitRelease: n2, emitClose: r2, emitOpenChange: i2, open: a2, dismissible: o2, nested: s2, modal: c2, shouldScaleBackground: l2, setBackgroundColorOnScale: d2, scrollLockTimeout: f2, closeThreshold: p2, activeSnapPoint: m2, fadeFromIndex: h2, direction: g2, noBodyStyles: _2, handleOnly: v2, preventScrollRestoration: b2 } = e2, x2 = z(a2.value ?? false), S2 = z(false), C2 = z(false), w2 = z(false), T2 = z(null), E2 = z(null), D2 = z(null), k2 = z(null), ee2 = z(null), A2 = z(false), j2 = z(null), te2 = z(0), M2 = z(false);
    z(0);
    let N2 = z(null);
    z(0);
    let P2 = O(() => N2.value?.$el.getBoundingClientRect().height || 0), F2 = ri(e2.snapPoints, z(void 0)), I2 = O(() => F2 && (F2.value?.length ?? 0) > 0), L2 = z(null), { activeSnapPointIndex: ne2, onRelease: re2, snapPointsOffset: ie2, onDrag: R2, shouldFade: ae2, getPercentageDragged: B2 } = $r({
      snapPoints: F2,
      activeSnapPoint: m2,
      drawerRef: N2,
      fadeFromIndex: h2,
      overlayRef: T2,
      onSnapPointChange: oe2,
      direction: g2
    });
    function oe2(e3, t3) {
      F2.value && e3 === t3.length - 1 && (E2.value = /* @__PURE__ */ new Date());
    }
    ni({
      isOpen: x2,
      modal: c2,
      nested: s2,
      hasBeenOpened: S2,
      noBodyStyles: _2,
      preventScrollRestoration: b2
    });
    function se2() {
      return (window.innerWidth - Zr) / window.innerWidth;
    }
    function V2(e3, t3) {
      if (!e3) return false;
      let n3 = e3, r3 = window.getSelection()?.toString(), i3 = N2.value ? Ur(N2.value.$el, g2.value) : null, a3 = /* @__PURE__ */ new Date();
      if (n3.hasAttribute(`data-vaul-no-drag`) || n3.closest(`[data-vaul-no-drag]`)) return false;
      if (g2.value === `right` || g2.value === `left`) return true;
      if (E2.value && a3.getTime() - E2.value.getTime() < 500) return false;
      if (i3 !== null && (g2.value === `bottom` ? i3 > 0 : i3 < 0)) return true;
      if (r3 && r3.length > 0) return false;
      if (ee2.value && a3.getTime() - ee2.value.getTime() < f2.value && i3 === 0 || t3) return ee2.value = a3, false;
      for (; n3; ) {
        if (n3.scrollHeight > n3.clientHeight) {
          if (n3.scrollTop !== 0) return ee2.value = /* @__PURE__ */ new Date(), false;
          if (n3.getAttribute(`role`) === `dialog`) return true;
        }
        n3 = n3.parentNode;
      }
      return true;
    }
    function H2(e3) {
      !o2.value && !F2.value || N2.value && !N2.value.$el.contains(e3.target) || (C2.value = true, D2.value = /* @__PURE__ */ new Date(), e3.target.setPointerCapture(e3.pointerId), te2.value = Q(g2.value) ? e3.clientY : e3.clientX);
    }
    function U2(e3) {
      var n3;
      if (N2.value && C2.value) {
        let r3 = g2.value === `bottom` || g2.value === `right` ? 1 : -1, i3 = (te2.value - (Q(g2.value) ? e3.clientY : e3.clientX)) * r3, a3 = i3 > 0, s3 = F2.value && !o2.value && !a3;
        if (s3 && ne2.value === 0) return;
        let c3 = Math.abs(i3), u2 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`), d3 = c3 / P2.value, f3 = B2(c3, a3);
        if (f3 !== null && (d3 = f3), s3 && d3 >= 1 || !A2.value && !V2(e3.target, a3)) return;
        if ((n3 = N2?.value) == null || n3.$el.classList.add(Qr), A2.value = true, Z(N2.value?.$el, {
          transition: `none`
        }), Z(T2.value?.$el, {
          transition: `none`
        }), F2.value && R2({
          draggedDistance: i3
        }), a3 && !F2.value) {
          let e4 = Wr(i3), t3 = Math.min(e4 * -1, 0) * r3;
          Z(N2.value?.$el, {
            transform: Q(g2.value) ? `translate3d(0, ${t3}px, 0)` : `translate3d(${t3}px, 0, 0)`
          });
          return;
        }
        let p3 = 1 - d3;
        if ((ae2.value || h2.value && ne2.value === h2.value - 1) && (t2(d3), Z(T2.value?.$el, {
          opacity: `${p3}`,
          transition: `none`
        }, true)), u2 && T2.value && l2.value) {
          let e4 = Math.min(se2() + d3 * (1 - se2()), 1), t3 = 8 - d3 * 8, n4 = Math.max(0, 14 - d3 * 14);
          Z(u2, {
            borderRadius: `${t3}px`,
            transform: Q(g2.value) ? `scale(${e4}) translate3d(0, ${n4}px, 0)` : `scale(${e4}) translate3d(${n4}px, 0, 0)`,
            transition: `none`
          }, true);
        }
        if (!F2.value) {
          let e4 = c3 * r3;
          Z(N2.value?.$el, {
            transform: Q(g2.value) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)`
          });
        }
      }
    }
    function ce2() {
      if (!N2.value) return;
      let e3 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`), t3 = Ur(N2.value.$el, g2.value);
      Z(N2.value.$el, {
        transform: `translate3d(0, 0, 0)`,
        transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`
      }), Z(T2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        opacity: `1`
      }), l2.value && t3 && t3 > 0 && x2.value && Z(e3, {
        borderRadius: `${Yr}px`,
        overflow: `hidden`,
        ...Q(g2.value) ? {
          transform: `scale(${se2()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: `top`
        } : {
          transform: `scale(${se2()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: `left`
        },
        transitionProperty: `transform, border-radius`,
        transitionDuration: `${$.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${$.EASE.join(`,`)})`
      }, true);
    }
    function W2(e3) {
      N2.value && (r2(), e3 || (x2.value = false), window.setTimeout(() => {
        F2.value && (m2.value = F2.value[0]);
      }, $.DURATION * 1e3));
    }
    y(() => {
      if (!x2.value && l2.value && Fr) {
        let e3 = setTimeout(() => {
          Hr(document.body);
        }, 200);
        return () => clearTimeout(e3);
      }
    }), u(a2, () => {
      x2.value = a2.value, a2.value || W2();
    });
    function le2(e3) {
      if (!C2.value || !N2.value) return;
      N2.value.$el.classList.remove(Qr), A2.value = false, C2.value = false, k2.value = /* @__PURE__ */ new Date();
      let t3 = Ur(N2.value.$el, g2.value);
      if (!V2(e3.target, false) || !t3 || Number.isNaN(t3) || D2.value === null) return;
      let r3 = k2.value.getTime() - D2.value.getTime(), i3 = te2.value - (Q(g2.value) ? e3.clientY : e3.clientX), a3 = Math.abs(i3) / r3;
      if (a3 > 0.05 && (w2.value = true, window.setTimeout(() => {
        w2.value = false;
      }, 200)), F2.value) {
        re2({
          draggedDistance: i3 * (g2.value === `bottom` || g2.value === `right` ? 1 : -1),
          closeDrawer: W2,
          velocity: a3,
          dismissible: o2.value
        }), n2(true);
        return;
      }
      if (g2.value === `bottom` || g2.value === `right` ? i3 > 0 : i3 < 0) {
        ce2(), n2(true);
        return;
      }
      if (a3 > Kr) {
        W2(), n2(false);
        return;
      }
      if (t3 >= Math.min(N2.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight) * p2.value) {
        W2(), n2(false);
        return;
      }
      n2(true), ce2();
    }
    u(x2, (e3) => {
      e3 && (E2.value = /* @__PURE__ */ new Date()), i2(e3);
    }, {
      immediate: true
    });
    function ue2(e3) {
      var t3;
      let n3 = e3 ? (window.innerWidth - Xr) / window.innerWidth : 1, r3 = e3 ? -16 : 0;
      j2.value && window.clearTimeout(j2.value), Z(N2.value?.$el, {
        transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        transform: `scale(${n3}) translate3d(0, ${r3}px, 0)`
      }), !e3 && (t3 = N2.value) != null && t3.$el && (j2.value = window.setTimeout(() => {
        let e4 = Ur(N2.value?.$el, g2.value);
        Z(N2.value?.$el, {
          transition: `none`,
          transform: Q(g2.value) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)`
        });
      }, 500));
    }
    function de2(e3) {
      if (e3 < 0) return;
      let t3 = Q(g2.value) ? window.innerHeight : window.innerWidth, n3 = (t3 - Xr) / t3, r3 = n3 + e3 * (1 - n3), i3 = -16 + e3 * Xr;
      Z(N2.value?.$el, {
        transform: Q(g2.value) ? `scale(${r3}) translate3d(0, ${i3}px, 0)` : `scale(${r3}) translate3d(${i3}px, 0, 0)`,
        transition: `none`
      });
    }
    function fe2(e3) {
      let t3 = Q(g2.value) ? window.innerHeight : window.innerWidth, n3 = e3 ? (t3 - Xr) / t3 : 1, r3 = e3 ? -16 : 0;
      e3 && Z(N2.value?.$el, {
        transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        transform: Q(g2.value) ? `scale(${n3}) translate3d(0, ${r3}px, 0)` : `scale(${n3}) translate3d(${r3}px, 0, 0)`
      });
    }
    return {
      open: a2,
      isOpen: x2,
      modal: c2,
      keyboardIsOpen: M2,
      hasBeenOpened: S2,
      drawerRef: N2,
      drawerHeightRef: P2,
      overlayRef: T2,
      handleRef: L2,
      isDragging: C2,
      dragStartTime: D2,
      isAllowedToDrag: A2,
      snapPoints: F2,
      activeSnapPoint: m2,
      hasSnapPoints: I2,
      pointerStart: te2,
      dismissible: o2,
      snapPointsOffset: ie2,
      direction: g2,
      shouldFade: ae2,
      fadeFromIndex: h2,
      shouldScaleBackground: l2,
      setBackgroundColorOnScale: d2,
      onPress: H2,
      onDrag: U2,
      onRelease: le2,
      closeDrawer: W2,
      onNestedDrag: de2,
      onNestedRelease: fe2,
      onNestedOpenChange: ue2,
      emitClose: r2,
      emitDrag: t2,
      emitRelease: n2,
      emitOpenChange: i2,
      nested: s2,
      handleOnly: v2,
      noBodyStyles: _2
    };
  }
  var ai = j({
    __name: `DrawerRoot`,
    props: {
      activeSnapPoint: {
        default: void 0
      },
      closeThreshold: {
        default: qr
      },
      shouldScaleBackground: {
        type: Boolean,
        default: void 0
      },
      setBackgroundColorOnScale: {
        type: Boolean,
        default: true
      },
      scrollLockTimeout: {
        default: Jr
      },
      fixed: {
        type: Boolean,
        default: void 0
      },
      dismissible: {
        type: Boolean,
        default: true
      },
      modal: {
        type: Boolean,
        default: true
      },
      open: {
        type: Boolean,
        default: void 0
      },
      defaultOpen: {
        type: Boolean,
        default: void 0
      },
      nested: {
        type: Boolean,
        default: false
      },
      direction: {
        default: `bottom`
      },
      noBodyStyles: {
        type: Boolean
      },
      handleOnly: {
        type: Boolean,
        default: false
      },
      preventScrollRestoration: {
        type: Boolean
      },
      snapPoints: {
        default: void 0
      },
      fadeFromIndex: {
        default: void 0
      }
    },
    emits: [
      `drag`,
      `release`,
      `close`,
      `update:open`,
      `update:activeSnapPoint`,
      `animationEnd`
    ],
    setup(e2, { expose: t2, emit: n2 }) {
      let r2 = e2, i2 = n2;
      p();
      let a2 = O(() => r2.fadeFromIndex ?? (r2.snapPoints && r2.snapPoints.length - 1)), o2 = Rr(r2, `open`, i2, {
        defaultValue: r2.defaultOpen,
        passive: r2.open === void 0
      }), s2 = Rr(r2, `activeSnapPoint`, i2, {
        passive: r2.activeSnapPoint === void 0
      }), c2 = {
        emitDrag: (e3) => i2(`drag`, e3),
        emitRelease: (e3) => i2(`release`, e3),
        emitClose: () => i2(`close`),
        emitOpenChange: (e3) => {
          i2(`update:open`, e3), setTimeout(() => {
            i2(`animationEnd`, e3);
          }, $.DURATION * 1e3);
        }
      }, { closeDrawer: l2, hasBeenOpened: u2, modal: d2, isOpen: f2 } = Br(ii({
        ...c2,
        ...v(r2),
        activeSnapPoint: s2,
        fadeFromIndex: a2,
        open: o2
      }));
      function h2(e3) {
        if (o2.value !== void 0) {
          c2.emitOpenChange(e3);
          return;
        }
        f2.value = e3, e3 ? u2.value = true : l2();
      }
      return t2({
        open: f2
      }), (e3, t3) => (M(), R(m(Et), {
        open: m(f2),
        modal: m(d2),
        "onUpdate:open": h2
      }, {
        default: I(() => [
          V(e3.$slots, `default`, {
            open: m(f2)
          })
        ]),
        _: 3
      }, 8, [
        `open`,
        `modal`
      ]));
    }
  }), oi = j({
    __name: `DrawerRootNested`,
    props: {
      activeSnapPoint: {},
      closeThreshold: {},
      shouldScaleBackground: {
        type: Boolean
      },
      setBackgroundColorOnScale: {
        type: Boolean
      },
      scrollLockTimeout: {},
      fixed: {
        type: Boolean
      },
      dismissible: {
        type: Boolean
      },
      modal: {
        type: Boolean
      },
      open: {
        type: Boolean
      },
      defaultOpen: {
        type: Boolean
      },
      nested: {
        type: Boolean
      },
      direction: {},
      noBodyStyles: {
        type: Boolean
      },
      handleOnly: {
        type: Boolean
      },
      preventScrollRestoration: {
        type: Boolean
      },
      snapPoints: {},
      fadeFromIndex: {}
    },
    emits: [
      `drag`,
      `release`,
      `close`,
      `update:open`,
      `update:activeSnapPoint`,
      `animationEnd`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { onNestedDrag: i2, onNestedOpenChange: a2, onNestedRelease: o2 } = zr();
      function s2() {
        a2(false);
      }
      function c2(e3) {
        i2(e3);
      }
      function l2(e3) {
        e3 && a2(e3), r2(`update:open`, e3);
      }
      let u2 = xt(n2, r2);
      return (e3, t3) => (M(), R(ai, E(m(u2), {
        nested: ``,
        onClose: s2,
        onDrag: c2,
        onRelease: m(o2),
        "onUpdate:open": l2
      }), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `onRelease`
      ]));
    }
  }), si = j({
    __name: `DrawerOverlay`,
    setup(e2) {
      let { overlayRef: t2, hasSnapPoints: n2, isOpen: r2, shouldFade: i2 } = zr();
      return (e3, a2) => (M(), R(m(wt), {
        ref_key: `overlayRef`,
        ref: t2,
        "data-vaul-overlay": ``,
        "data-vaul-snap-points": m(r2) && m(n2) ? `true` : `false`,
        "data-vaul-snap-points-overlay": m(r2) && m(i2) ? `true` : `false`
      }, null, 8, [
        `data-vaul-snap-points`,
        `data-vaul-snap-points-overlay`
      ]));
    }
  });
  function ci() {
    let { direction: e2, isOpen: t2, shouldScaleBackground: n2, setBackgroundColorOnScale: r2, noBodyStyles: i2 } = zr(), a2 = z(null), o2 = z(document.body.style.backgroundColor);
    function s2() {
      return (window.innerWidth - Zr) / window.innerWidth;
    }
    y((c2) => {
      if (t2.value && n2.value) {
        a2.value && clearTimeout(a2.value);
        let t3 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`);
        if (!t3) return;
        r2.value && !i2.value && Gr(document.body, {
          background: `black`
        }), Gr(t3, {
          transformOrigin: Q(e2.value) ? `top` : `left`,
          transitionProperty: `transform, border-radius`,
          transitionDuration: `${$.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${$.EASE.join(`,`)})`
        });
        let n3 = Gr(t3, {
          borderRadius: `${Yr}px`,
          overflow: `hidden`,
          ...Q(e2.value) ? {
            transform: `scale(${s2()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
          } : {
            transform: `scale(${s2()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
          }
        });
        c2(() => {
          n3(), a2.value = window.setTimeout(() => {
            o2.value ? document.body.style.background = o2.value : document.body.style.removeProperty(`background`);
          }, $.DURATION * 1e3);
        });
      }
    }, {
      flush: `pre`
    });
  }
  var li = j({
    __name: `DrawerContent`,
    setup(e2) {
      let { open: t2, isOpen: n2, snapPointsOffset: r2, hasSnapPoints: i2, drawerRef: a2, onPress: o2, onDrag: s2, onRelease: c2, modal: l2, emitOpenChange: u2, dismissible: d2, keyboardIsOpen: f2, closeDrawer: p2, direction: h2, handleOnly: g2 } = zr();
      ci();
      let _2 = z(false), v2 = O(() => r2.value && r2.value.length > 0 ? `${r2.value[0]}px` : `0`);
      function b2(e3) {
        if (!l2.value || e3.defaultPrevented) {
          e3.preventDefault();
          return;
        }
        f2.value && (f2.value = false), d2.value ? u2(false) : e3.preventDefault();
      }
      function x2(e3) {
        g2.value || o2(e3);
      }
      function S2(e3) {
        g2.value || s2(e3);
      }
      return y(() => {
        i2.value && window.requestAnimationFrame(() => {
          _2.value = true;
        });
      }), (e3, t3) => (M(), R(m(At), {
        ref_key: `drawerRef`,
        ref: a2,
        "data-vaul-drawer": ``,
        "data-vaul-drawer-direction": m(h2),
        "data-vaul-delayed-snap-points": _2.value ? `true` : `false`,
        "data-vaul-snap-points": m(n2) && m(i2) ? `true` : `false`,
        style: T({
          "--snap-point-height": v2.value
        }),
        onPointerdown: x2,
        onPointermove: S2,
        onPointerup: m(c2),
        onPointerDownOutside: b2,
        onOpenAutoFocus: t3[0] || (t3[0] = W(() => {
        }, [
          `prevent`
        ])),
        onEscapeKeyDown: t3[1] || (t3[1] = (e4) => {
          m(d2) || e4.preventDefault();
        })
      }, {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 8, [
        `data-vaul-drawer-direction`,
        `data-vaul-delayed-snap-points`,
        `data-vaul-snap-points`,
        `style`,
        `onPointerup`
      ]));
    }
  }), ui = [
    `data-vaul-drawer-visible`
  ], di = {
    "data-vaul-handle-hitarea": ``,
    "aria-hidden": `true`
  }, fi = 250, pi = 120, mi = j({
    __name: `DrawerHandle`,
    props: {
      preventCycle: {
        type: Boolean,
        default: false
      }
    },
    setup(e2) {
      let t2 = e2, { onPress: n2, onDrag: r2, handleRef: i2, handleOnly: a2, isOpen: o2, snapPoints: s2, activeSnapPoint: c2, isDragging: l2, dismissible: u2, closeDrawer: d2 } = zr(), f2 = z(null), p2 = z(false);
      function h2() {
        if (p2.value) {
          v2();
          return;
        }
        window.setTimeout(() => {
          g2();
        }, pi);
      }
      function g2() {
        if (l2.value || t2.preventCycle || p2.value) {
          v2();
          return;
        }
        if (v2(), !s2.value || s2.value.length === 0) {
          u2.value || d2();
          return;
        }
        let e3 = c2.value === s2.value[s2.value.length - 1];
        if (e3 && u2.value) {
          d2();
          return;
        }
        let n3 = s2.value.findIndex((e4) => e4 === c2.value);
        if (n3 === -1) return;
        let r3 = e3 ? 0 : n3 + 1;
        c2.value = s2.value[r3];
      }
      function _2() {
        f2.value = window.setTimeout(() => {
          p2.value = true;
        }, fi);
      }
      function v2() {
        f2.value && window.clearTimeout(f2.value), p2.value = false;
      }
      function y2(e3) {
        a2.value && n2(e3), _2();
      }
      function b2(e3) {
        a2.value && r2(e3);
      }
      return (e3, t3) => (M(), S(`div`, {
        ref_key: `handleRef`,
        ref: i2,
        "data-vaul-drawer-visible": m(o2) ? `true` : `false`,
        "data-vaul-handle": ``,
        "aria-hidden": `true`,
        onClick: h2,
        onPointercancel: v2,
        onPointerdown: y2,
        onPointermove: b2
      }, [
        x(`span`, di, [
          V(e3.$slots, `default`)
        ])
      ], 40, ui));
    }
  }), hi = {
    slots: {
      overlay: `fixed inset-0 bg-elevated/75`,
      content: `fixed bg-default ring ring-default flex focus:outline-none`,
      handle: [
        `shrink-0 !bg-accented`,
        `transition-opacity`
      ],
      container: `w-full flex flex-col gap-4 p-4 overflow-y-auto`,
      header: ``,
      title: `text-highlighted font-semibold`,
      description: `mt-1 text-muted text-sm`,
      body: `flex-1`,
      footer: `flex flex-col gap-1.5`
    },
    variants: {
      direction: {
        top: {
          content: `mb-24 flex-col-reverse`,
          handle: `mb-4`
        },
        right: {
          content: `flex-row rtl:flex-row-reverse`,
          handle: `!ml-4`
        },
        bottom: {
          content: `mt-24 flex-col`,
          handle: `mt-4`
        },
        left: {
          content: `flex-row-reverse rtl:flex-row`,
          handle: `!mr-4`
        }
      },
      inset: {
        true: {
          content: `rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]`
        }
      },
      snapPoints: {
        true: ``
      }
    },
    compoundVariants: [
      {
        direction: [
          `top`,
          `bottom`
        ],
        class: {
          content: `h-auto max-h-[96%]`,
          handle: `!w-12 !h-1.5 mx-auto`
        }
      },
      {
        direction: [
          `top`,
          `bottom`
        ],
        snapPoints: true,
        class: {
          content: `h-full`
        }
      },
      {
        direction: [
          `right`,
          `left`
        ],
        class: {
          content: `w-auto max-w-[calc(100%-2rem)]`,
          handle: `!h-12 !w-1.5 mt-auto mb-auto`
        }
      },
      {
        direction: [
          `right`,
          `left`
        ],
        snapPoints: true,
        class: {
          content: `w-full`
        }
      },
      {
        direction: `top`,
        inset: true,
        class: {
          content: `inset-x-4 top-4`
        }
      },
      {
        direction: `top`,
        inset: false,
        class: {
          content: `inset-x-0 top-0 rounded-b-lg`
        }
      },
      {
        direction: `bottom`,
        inset: true,
        class: {
          content: `inset-x-4 bottom-4`
        }
      },
      {
        direction: `bottom`,
        inset: false,
        class: {
          content: `inset-x-0 bottom-0 rounded-t-lg`
        }
      },
      {
        direction: `left`,
        inset: true,
        class: {
          content: `inset-y-4 left-4`
        }
      },
      {
        direction: `left`,
        inset: false,
        class: {
          content: `inset-y-0 left-0 rounded-r-lg`
        }
      },
      {
        direction: `right`,
        inset: true,
        class: {
          content: `inset-y-4 right-4`
        }
      },
      {
        direction: `right`,
        inset: false,
        class: {
          content: `inset-y-0 right-0 rounded-l-lg`
        }
      }
    ]
  }, gi = {
    __name: `Drawer`,
    props: {
      as: {
        type: null,
        required: false
      },
      title: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      inset: {
        type: Boolean,
        required: false
      },
      content: {
        type: Object,
        required: false
      },
      overlay: {
        type: Boolean,
        required: false,
        default: true
      },
      handle: {
        type: Boolean,
        required: false,
        default: true
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: true
      },
      nested: {
        type: Boolean,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      activeSnapPoint: {
        type: [
          Number,
          String,
          null
        ],
        required: false
      },
      closeThreshold: {
        type: Number,
        required: false
      },
      shouldScaleBackground: {
        type: Boolean,
        required: false
      },
      setBackgroundColorOnScale: {
        type: Boolean,
        required: false
      },
      scrollLockTimeout: {
        type: Number,
        required: false
      },
      fixed: {
        type: Boolean,
        required: false
      },
      dismissible: {
        type: Boolean,
        required: false,
        default: true
      },
      modal: {
        type: Boolean,
        required: false,
        default: true
      },
      open: {
        type: Boolean,
        required: false
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      direction: {
        type: String,
        required: false,
        default: `bottom`
      },
      noBodyStyles: {
        type: Boolean,
        required: false
      },
      handleOnly: {
        type: Boolean,
        required: false
      },
      preventScrollRestoration: {
        type: Boolean,
        required: false
      },
      snapPoints: {
        type: Array,
        required: false
      }
    },
    emits: [
      `close:prevent`,
      `drag`,
      `release`,
      `close`,
      `update:open`,
      `update:activeSnapPoint`,
      `animationEnd`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, s2 = p(), c2 = K(), l2 = Me(`drawer`, n2), u2 = xt(Fe(n2, `activeSnapPoint`, `closeThreshold`, `shouldScaleBackground`, `setBackgroundColorOnScale`, `scrollLockTimeout`, `fixed`, `dismissible`, `modal`, `open`, `defaultOpen`, `nested`, `direction`, `noBodyStyles`, `handleOnly`, `preventScrollRestoration`, `snapPoints`), r2), d2 = gt(B(() => n2.portal)), f2 = B(() => n2.content), h2 = O(() => n2.dismissible ? {
        pointerDownOutside: zt
      } : [
        `interactOutside`,
        `escapeKeyDown`
      ].reduce((e3, t3) => (e3[t3] = (e4) => {
        e4.preventDefault(), r2(`close:prevent`);
      }, e3), {})), g2 = O(() => J({
        extend: J(hi),
        ...c2.ui?.drawer || {}
      })({
        direction: n2.direction,
        inset: n2.inset,
        snapPoints: n2.snapPoints && n2.snapPoints.length > 0
      }));
      return (t3, r3) => (M(), R(oe(e2.nested ? m(oi) : m(ai)), i(U(m(u2))), {
        default: I(() => [
          s2.default ? (M(), R(m(Dt), {
            key: 0,
            "as-child": ``,
            class: b(n2.class)
          }, {
            default: I(() => [
              V(t3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `class`
          ])) : H(``, true),
          a(m(Tt), i(U(m(d2))), {
            default: I(() => [
              a(m(Ee), null, {
                default: I(() => [
                  e2.overlay ? (M(), R(m(si), {
                    key: 0,
                    "data-slot": `overlay`,
                    class: b(g2.value.overlay({
                      class: m(l2)?.overlay
                    }))
                  }, null, 8, [
                    `class`
                  ])) : H(``, true),
                  a(m(li), E({
                    "data-slot": `content`,
                    class: g2.value.content({
                      class: [
                        !s2.default && n2.class,
                        m(l2)?.content
                      ]
                    })
                  }, f2.value, A(h2.value)), {
                    default: I(() => [
                      e2.handle ? (M(), R(m(mi), {
                        key: 0,
                        "data-slot": `handle`,
                        class: b(g2.value.handle({
                          class: m(l2)?.handle
                        }))
                      }, null, 8, [
                        `class`
                      ])) : H(``, true),
                      !e2.title && !s2.title || !e2.description && !s2.description || s2.content ? (M(), R(m(pt), {
                        key: 1
                      }, {
                        default: I(() => [
                          !e2.title && !s2.title ? (M(), R(m(kt), {
                            key: 0
                          })) : s2.content ? (M(), R(m(kt), {
                            key: 1
                          }, {
                            default: I(() => [
                              V(t3.$slots, `title`, {}, () => [
                                o(L(e2.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : H(``, true),
                          !e2.description && !s2.description ? (M(), R(m(Ot), {
                            key: 2
                          })) : s2.content ? (M(), R(m(Ot), {
                            key: 3
                          }, {
                            default: I(() => [
                              V(t3.$slots, `description`, {}, () => [
                                o(L(e2.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : H(``, true)
                        ]),
                        _: 3
                      })) : H(``, true),
                      V(t3.$slots, `content`, {}, () => [
                        x(`div`, {
                          "data-slot": `container`,
                          class: b(g2.value.container({
                            class: m(l2)?.container
                          }))
                        }, [
                          s2.header || e2.title || s2.title || e2.description || s2.description ? (M(), S(`div`, {
                            key: 0,
                            "data-slot": `header`,
                            class: b(g2.value.header({
                              class: m(l2)?.header
                            }))
                          }, [
                            V(t3.$slots, `header`, {}, () => [
                              e2.title || s2.title ? (M(), R(m(kt), {
                                key: 0,
                                "data-slot": `title`,
                                class: b(g2.value.title({
                                  class: m(l2)?.title
                                }))
                              }, {
                                default: I(() => [
                                  V(t3.$slots, `title`, {}, () => [
                                    o(L(e2.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, [
                                `class`
                              ])) : H(``, true),
                              e2.description || s2.description ? (M(), R(m(Ot), {
                                key: 1,
                                "data-slot": `description`,
                                class: b(g2.value.description({
                                  class: m(l2)?.description
                                }))
                              }, {
                                default: I(() => [
                                  V(t3.$slots, `description`, {}, () => [
                                    o(L(e2.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, [
                                `class`
                              ])) : H(``, true)
                            ])
                          ], 2)) : H(``, true),
                          s2.body ? (M(), S(`div`, {
                            key: 1,
                            "data-slot": `body`,
                            class: b(g2.value.body({
                              class: m(l2)?.body
                            }))
                          }, [
                            V(t3.$slots, `body`)
                          ], 2)) : H(``, true),
                          s2.footer ? (M(), S(`div`, {
                            key: 2,
                            "data-slot": `footer`,
                            class: b(g2.value.footer({
                              class: m(l2)?.footer
                            }))
                          }, [
                            V(t3.$slots, `footer`)
                          ], 2)) : H(``, true)
                        ], 2)
                      ])
                    ]),
                    _: 3
                  }, 16, [
                    `class`
                  ])
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 16));
    }
  }, _i = {
    slots: {
      root: `relative hidden lg:flex flex-col min-h-svh min-w-16 w-(--width) shrink-0`,
      header: `h-(--ui-header-height) shrink-0 flex items-center gap-1.5 px-4`,
      body: `flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2`,
      footer: `shrink-0 flex items-center gap-1.5 px-4 py-2`,
      toggle: ``,
      handle: ``,
      content: `lg:hidden`,
      overlay: `lg:hidden`
    },
    variants: {
      menu: {
        true: {
          header: `sm:px-6`,
          body: `sm:px-6`,
          footer: `sm:px-6`
        }
      },
      side: {
        left: {
          root: `border-e border-default`
        },
        right: {
          root: ``
        }
      },
      toggleSide: {
        left: {
          toggle: ``
        },
        right: {
          toggle: `ms-auto`
        }
      }
    }
  }, vi = [
    `data-collapsed`,
    `data-dragging`
  ], yi = Object.assign({
    inheritAttrs: false
  }, {
    __name: `DashboardSidebar`,
    props: r({
      mode: {
        type: null,
        required: false,
        default: `slideover`
      },
      menu: {
        type: null,
        required: false
      },
      toggle: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      toggleSide: {
        type: String,
        required: false,
        default: `left`
      },
      autoClose: {
        type: Boolean,
        required: false,
        default: true
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      id: {
        type: String,
        required: false
      },
      side: {
        type: String,
        required: false,
        default: `left`
      },
      minSize: {
        type: Number,
        required: false,
        default: 10
      },
      maxSize: {
        type: Number,
        required: false,
        default: 20
      },
      defaultSize: {
        type: Number,
        required: false,
        default: 15
      },
      resizable: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsible: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsedSize: {
        type: Number,
        required: false,
        default: 0
      }
    }, {
      open: {
        type: Boolean,
        default: false
      },
      openModifiers: {},
      collapsed: {
        type: Boolean,
        default: false
      },
      collapsedModifiers: {}
    }),
    emits: [
      `update:open`,
      `update:collapsed`
    ],
    setup(e2) {
      let t2 = e2, n2 = p(), r2 = c(e2, `open`, {
        type: Boolean,
        default: false
      }), o2 = c(e2, `collapsed`, {
        type: Boolean,
        default: false
      }), s2 = Je(), { t: l2 } = ye(), d2 = K(), f2 = Me(`dashboardSidebar`, t2), g2 = Pt({
        storageKey: `dashboard`,
        unit: `%`,
        sidebarOpen: z(false),
        sidebarCollapsed: z(false)
      }), _2 = `${g2.storageKey}-sidebar-${t2.id || h()}`, { el: v2, size: y2, collapse: C2, isCollapsed: w2, isDragging: T2, onMouseDown: D2, onTouchStart: k2, onDoubleClick: ee2 } = Lt(_2, B(() => ({
        ...g2,
        ...t2
      })), {
        collapsed: o2
      }), [A2, j2] = Ke(), [te2, N2] = Ke();
      Te(`dashboard:sidebar:toggle`, () => {
        r2.value = !r2.value;
      }), Te(`dashboard:sidebar:collapse`, (e3) => {
        w2.value = e3;
      }), u(r2, () => g2.sidebarOpen.value = r2.value, {
        immediate: true
      }), u(w2, () => g2.sidebarCollapsed.value = w2.value, {
        immediate: true
      }), u(() => s2.fullPath, () => {
        t2.autoClose && (r2.value = false);
      });
      let F2 = O(() => J({
        extend: J(_i),
        ...d2.ui?.dashboardSidebar || {}
      })({
        side: t2.side
      })), L2 = O(() => ({
        slideover: Bt,
        modal: Vt,
        drawer: gi
      })[t2.mode]), ne2 = B(() => xe(t2.menu, {}, t2.mode === `modal` ? {
        fullscreen: true,
        transition: false
      } : t2.mode === `slideover` ? {
        side: `left`
      } : {}));
      function re2() {
        r2.value = !r2.value;
      }
      return (o3, s3) => (M(), S(P, null, [
        a(m(A2), null, {
          default: I(() => [
            V(o3.$slots, `toggle`, {
              open: r2.value,
              toggle: re2,
              ui: F2.value
            }, () => [
              e2.toggle ? (M(), R(Rt, E({
                key: 0
              }, typeof e2.toggle == `object` ? e2.toggle : {}, {
                side: e2.toggleSide,
                "data-slot": `toggle`,
                class: F2.value.toggle({
                  class: m(f2)?.toggle,
                  toggleSide: e2.toggleSide
                })
              }), null, 16, [
                `side`,
                `class`
              ])) : H(``, true)
            ])
          ]),
          _: 3
        }),
        a(m(te2), null, {
          default: I(() => [
            V(o3.$slots, `resize-handle`, {
              onMouseDown: m(D2),
              onTouchStart: m(k2),
              onDoubleClick: m(ee2),
              ui: F2.value
            }, () => [
              e2.resizable ? (M(), R(It, {
                key: 0,
                "aria-controls": _2,
                "data-slot": `handle`,
                class: b(F2.value.handle({
                  class: m(f2)?.handle
                })),
                onMousedown: m(D2),
                onTouchstart: m(k2),
                onDblclick: m(ee2)
              }, null, 8, [
                `class`,
                `onMousedown`,
                `onTouchstart`,
                `onDblclick`
              ])) : H(``, true)
            ])
          ]),
          _: 3
        }),
        e2.side === `right` ? (M(), R(m(N2), {
          key: 0
        })) : H(``, true),
        x(`div`, E({
          id: _2,
          ref_key: `el`,
          ref: v2
        }, o3.$attrs, {
          "data-collapsed": m(w2),
          "data-dragging": m(T2),
          "data-slot": `root`,
          class: F2.value.root({
            class: [
              m(f2)?.root,
              t2.class
            ]
          }),
          style: {
            "--width": `${m(y2) || 0}${m(g2).unit}`
          }
        }), [
          n2.header ? (M(), S(`div`, {
            key: 0,
            "data-slot": `header`,
            class: b(F2.value.header({
              class: m(f2)?.header
            }))
          }, [
            V(o3.$slots, `header`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2)) : H(``, true),
          x(`div`, {
            "data-slot": `body`,
            class: b(F2.value.body({
              class: m(f2)?.body
            }))
          }, [
            V(o3.$slots, `default`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2),
          n2.footer ? (M(), S(`div`, {
            key: 1,
            "data-slot": `footer`,
            class: b(F2.value.footer({
              class: m(f2)?.footer
            }))
          }, [
            V(o3.$slots, `footer`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2)) : H(``, true)
        ], 16, vi),
        e2.side === `left` ? (M(), R(m(N2), {
          key: 1
        })) : H(``, true),
        a(m(L2), E({
          open: r2.value,
          "onUpdate:open": s3[0] || (s3[0] = (e3) => r2.value = e3),
          title: m(l2)(`dashboardSidebar.title`),
          description: m(l2)(`dashboardSidebar.description`)
        }, ne2.value, {
          ui: {
            overlay: F2.value.overlay({
              class: m(f2)?.overlay
            }),
            content: F2.value.content({
              class: m(f2)?.content
            })
          }
        }), {
          content: I((t3) => [
            V(o3.$slots, `content`, i(U(t3)), () => [
              n2.header || e2.mode !== `drawer` ? (M(), S(`div`, {
                key: 0,
                "data-slot": `header`,
                class: b(F2.value.header({
                  class: m(f2)?.header,
                  menu: true
                }))
              }, [
                e2.mode !== `drawer` && e2.toggleSide === `left` ? (M(), R(m(j2), {
                  key: 0
                })) : H(``, true),
                V(o3.$slots, `header`, {
                  collapsed: false,
                  collapse: () => {
                  }
                }),
                e2.mode !== `drawer` && e2.toggleSide === `right` ? (M(), R(m(j2), {
                  key: 1
                })) : H(``, true)
              ], 2)) : H(``, true),
              x(`div`, {
                "data-slot": `body`,
                class: b(F2.value.body({
                  class: m(f2)?.body,
                  menu: true
                }))
              }, [
                V(o3.$slots, `default`, {
                  collapsed: false,
                  collapse: () => {
                  }
                })
              ], 2),
              n2.footer ? (M(), S(`div`, {
                key: 1,
                "data-slot": `footer`,
                class: b(F2.value.footer({
                  class: m(f2)?.footer,
                  menu: true
                }))
              }, [
                V(o3.$slots, `footer`, {
                  collapsed: false,
                  collapse: () => {
                  }
                })
              ], 2)) : H(``, true)
            ])
          ]),
          _: 3
        }, 16, [
          `open`,
          `title`,
          `description`,
          `ui`
        ])
      ], 64));
    }
  }), bi = j({
    __name: `UserMenu`,
    props: {
      collapsed: {
        type: Boolean
      }
    },
    setup(e2) {
      let t2 = We(), n2 = K(), r2 = z({
        name: windpress.current_user.name,
        avatar: {
          src: windpress.current_user.avatar,
          alt: windpress.current_user.name
        }
      }), i2 = O(() => {
        let e3 = [
          {
            label: wp.i18n.__(`Rate us`, `windpress`),
            icon: `lucide:star`,
            to: `https://wordpress.org/support/plugin/windpress/reviews/?filter=5/#new-post`,
            target: `_blank`
          },
          {
            label: wp.i18n.__(`Community`, `windpress`),
            icon: `fa6-brands:facebook`,
            to: `https://wind.press/go/facebook`,
            target: `_blank`
          },
          {
            label: wp.i18n.__(`Report an issue`, `windpress`),
            icon: `lucide:bug`,
            to: `https://github.com/wind-press/windpress/issues`,
            target: `_blank`
          },
          {
            label: wp.i18n.__(`Support`, `windpress`),
            icon: `lucide:headset`,
            to: `https://rosua.org/support-portal?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
            target: `_blank`
          }
        ];
        return window.windpress._via_wp_org && e3.push({
          label: wp.i18n.__(`Upgrade to Pro`, `windpress`),
          icon: `lucide:sparkles`,
          to: `https://wind.press/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}#pricing`,
          target: `_blank`
        }), e3;
      }), o2 = O(() => [
        [
          {
            type: `label`,
            label: r2.value.name,
            avatar: r2.value.avatar
          }
        ],
        [
          {
            label: wp.i18n.__(`Appearance`, `windpress`),
            icon: `i-lucide-sun-moon`,
            children: [
              {
                label: wp.i18n.__(`Light`, `windpress`),
                icon: n2.ui.icons.light,
                type: `checkbox`,
                checked: t2.value === `light`,
                onSelect(e3) {
                  e3.preventDefault(), t2.value = `light`;
                }
              },
              {
                label: wp.i18n.__(`Dark`, `windpress`),
                icon: n2.ui.icons.dark,
                type: `checkbox`,
                checked: t2.value === `dark`,
                onUpdateChecked(e3) {
                  e3 && (t2.value = `dark`);
                },
                onSelect(e3) {
                  e3.preventDefault();
                }
              },
              {
                label: wp.i18n.__(`System`, `windpress`),
                icon: n2.ui.icons.system,
                type: `checkbox`,
                checked: t2.value === `system`,
                onUpdateChecked(e3) {
                  e3 && (t2.value = `system`);
                },
                onSelect(e3) {
                  e3.preventDefault();
                }
              }
            ]
          }
        ],
        [
          ...i2.value
        ]
      ]);
      return (t3, n3) => {
        let i3 = ke, s2 = Ht;
        return M(), R(s2, {
          items: o2.value,
          content: {
            align: `center`,
            collisionPadding: 12
          },
          ui: {
            content: e2.collapsed ? `w-48` : `w-(--reka-dropdown-menu-trigger-width)`
          }
        }, {
          "chip-leading": I(({ item: e3 }) => [
            x(`span`, {
              style: T({
                "--chip": `var(--color-${e3.chip}-400)`
              }),
              class: `ms-0.5 size-2 rounded-full bg-(--chip)`
            }, null, 4)
          ]),
          default: I(() => [
            a(i3, E({
              ...r2.value,
              label: e2.collapsed ? void 0 : r2.value?.name,
              trailingIcon: e2.collapsed ? void 0 : `i-lucide-chevrons-up-down`
            }, {
              color: `neutral`,
              variant: `ghost`,
              block: ``,
              square: e2.collapsed,
              class: `data-[state=open]:bg-(--ui-bg-elevated)`,
              ui: {
                trailingIcon: `text-(--ui-text-dimmed)`
              }
            }), null, 16, [
              `square`
            ])
          ]),
          _: 1
        }, 8, [
          `items`,
          `ui`
        ]);
      };
    }
  }), xi = {
    slots: {
      base: ``,
      label: ``,
      trailing: `hidden lg:flex items-center gap-0.5 ms-auto`
    },
    variants: {
      collapsed: {
        true: {
          label: `hidden`,
          trailing: `lg:hidden`
        }
      }
    }
  }, Si = Object.assign({
    inheritAttrs: false
  }, {
    __name: `DashboardSearchButton`,
    props: {
      icon: {
        type: null,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      color: {
        type: null,
        required: false,
        default: `neutral`
      },
      variant: {
        type: null,
        required: false
      },
      collapsed: {
        type: Boolean,
        required: false,
        default: false
      },
      tooltip: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: false
      },
      kbds: {
        type: Array,
        required: false,
        default: () => [
          `meta`,
          `k`
        ]
      },
      ui: {
        type: Object,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      activeColor: {
        type: null,
        required: false
      },
      activeVariant: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      square: {
        type: Boolean,
        required: false
      },
      block: {
        type: Boolean,
        required: false
      },
      loadingAuto: {
        type: Boolean,
        required: false
      },
      onClick: {
        type: [
          Function,
          Array
        ],
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      leading: {
        type: Boolean,
        required: false
      },
      leadingIcon: {
        type: null,
        required: false
      },
      trailing: {
        type: Boolean,
        required: false
      },
      trailingIcon: {
        type: null,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      },
      as: {
        type: null,
        required: false
      },
      type: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      exactActiveClass: {
        type: String,
        required: false
      },
      viewTransition: {
        type: Boolean,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = p(), [r2, o2] = Ke(), s2 = () => be(n2, [
        `trailing`
      ]), c2 = je(Ue(t2, `icon`, `label`, `variant`, `collapsed`, `tooltip`, `kbds`, `class`, `ui`)), l2 = B(() => xe(typeof t2.tooltip == `boolean` ? {} : t2.tooltip, {
        delayDuration: 0,
        content: {
          side: `right`
        }
      })), { t: u2 } = ye(), d2 = K(), f2 = Me(`dashboardSearchButton`, t2), { toggleSearch: h2 } = Pt({
        toggleSearch: () => {
        }
      }), g2 = O(() => J({
        extend: J(xi),
        ...d2.ui?.dashboardSearchButton || {}
      })({
        collapsed: t2.collapsed
      }));
      return (n3, p2) => (M(), S(P, null, [
        a(m(r2), null, {
          default: I(() => [
            a(ke, E({
              icon: e2.icon || m(d2).ui.icons.search,
              label: e2.label || m(u2)(`dashboardSearchButton.label`),
              variant: e2.variant || (e2.collapsed ? `ghost` : `outline`)
            }, {
              ...m(c2),
              ...e2.collapsed ? {
                square: true,
                "aria-label": e2.label || m(u2)(`dashboardSearchButton.label`)
              } : {},
              ...n3.$attrs
            }, {
              class: g2.value.base({
                class: [
                  m(f2)?.base,
                  t2.class
                ]
              }),
              ui: m(he)(g2.value, m(f2)),
              onClick: m(h2)
            }), ae({
              trailing: I(({ ui: t3 }) => [
                x(`span`, {
                  "data-slot": `trailing`,
                  class: b(g2.value.trailing({
                    class: m(f2)?.trailing
                  }))
                }, [
                  V(n3.$slots, `trailing`, {
                    ui: t3
                  }, () => [
                    e2.kbds?.length ? (M(true), S(P, {
                      key: 0
                    }, C(e2.kbds, (e3, t4) => (M(), R(vt, E({
                      key: t4,
                      variant: `subtle`
                    }, {
                      ref_for: true
                    }, typeof e3 == `string` ? {
                      value: e3
                    } : e3), null, 16))), 128)) : H(``, true)
                  ])
                ], 2)
              ]),
              _: 2
            }, [
              C(s2(), (e3, t3) => ({
                name: t3,
                fn: I((e4) => [
                  V(n3.$slots, t3, i(U(e4)))
                ])
              }))
            ]), 1040, [
              `icon`,
              `label`,
              `variant`,
              `class`,
              `ui`,
              `onClick`
            ])
          ]),
          _: 3
        }),
        e2.collapsed && e2.tooltip ? (M(), R(bt, E({
          key: 0,
          text: e2.label || m(u2)(`dashboardSearchButton.label`)
        }, l2.value), {
          default: I(() => [
            a(m(o2))
          ]),
          _: 1
        }, 16, [
          `text`
        ])) : (M(), R(m(o2), {
          key: 1
        }))
      ], 64));
    }
  }), Ci = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='currentColor'%20d='M176,384H16c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h160c8.832,0,16,7.2,16,16s-7.168,16-16,16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c26.464,0,48-21.536,48-48S202.464,384,176,384z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M240,256c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c8.832,0,16,7.2,16,16s-7.168,16-16,16H16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h224c26.464,0,48-21.536,48-48S266.464,256,240,256z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M288,32C164.288,32,64,132.288,64,256c0,10.88,1.056,21.536,2.56,32h128.192c-1.792-4.992-2.752-10.4-2.752-16%20c0-26.464,21.536-48,48-48c44.096,0,80,35.904,80,80c0,44.128-35.904,80-80,80h-0.416C249.76,397.408,256,413.92,256,432%20c0,16.032-4.864,30.944-13.024,43.456c14.56,2.976,29.6,4.544,45.024,4.544c123.712,0,224-100.288,224-224S411.712,32,288,32z'%20/%3e%3c/g%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, wi = j({
    __name: `ProjectsMenu`,
    props: {
      collapsed: {
        type: Boolean
      }
    },
    setup(e2) {
      let t2 = Wt(), n2 = z(z([
        {
          label: `WindPress`,
          avatar: {
            src: Ci,
            alt: `WindPress`
          }
        }
      ]).value[0]), r2 = O(() => [
        [
          {
            label: `v${window.windpress._wp_version}`,
            icon: `fa6-brands:wordpress`
          },
          {
            label: Number(t2.virtualOptions(`general.tailwindcss.version`, 4).value) === 4 ? `v${Gt}` : `v${Kt}`,
            icon: `devicon:tailwindcss`
          },
          {
            label: `v${window.windpress._version}`,
            avatar: {
              src: Ci,
              alt: `WindPress`
            }
          }
        ]
      ]);
      return (t3, i2) => {
        let o2 = ke, s2 = Ht;
        return M(), R(s2, {
          items: r2.value,
          content: {
            align: `center`,
            collisionPadding: 12
          },
          ui: {
            content: e2.collapsed ? `w-40` : `w-(--reka-dropdown-menu-trigger-width)`
          }
        }, {
          default: I(() => [
            a(o2, E({
              ...n2.value,
              label: e2.collapsed ? void 0 : n2.value?.label,
              trailingIcon: e2.collapsed ? void 0 : `i-lucide-chevrons-up-down`
            }, {
              color: `neutral`,
              variant: `ghost`,
              block: ``,
              square: e2.collapsed,
              class: [
                `data-[state=open]:bg-(--ui-bg-elevated)`,
                [
                  !e2.collapsed && `py-2`
                ]
              ],
              ui: {
                trailingIcon: `text-(--ui-text-dimmed)`
              }
            }), null, 16, [
              `square`,
              `class`
            ])
          ]),
          _: 1
        }, 8, [
          `items`,
          `ui`
        ]);
      };
    }
  });
  function Ti(e2, t2, n2) {
    let r2 = () => new qt(s(t2) ?? [], s(n2)?.fuseOptions), i2 = se(r2());
    return u(() => s(n2)?.fuseOptions, () => {
      i2.value = r2();
    }, {
      deep: true
    }), u(() => s(t2), (e3) => {
      i2.value.setCollection(e3);
    }, {
      deep: true
    }), {
      fuse: i2,
      results: O(() => {
        let r3 = s(n2);
        if (r3?.matchAllWhenSearchEmpty && !s(e2)) return s(t2).map((e3, t3) => ({
          item: e3,
          refIndex: t3
        }));
        let a2 = r3?.resultLimit;
        return i2.value.search(s(e2), a2 ? {
          limit: a2
        } : void 0);
      })
    };
  }
  var Ei = {
    "&": `&amp;`,
    "<": `&lt;`,
    ">": `&gt;`,
    '"': `&quot;`,
    "'": `&#39;`
  };
  function Di(e2) {
    return e2.replace(/[&<>"']/g, (e3) => Ei[e3]);
  }
  function Oi(e2) {
    return /&(?:amp|lt|gt|quot|#39);/.test(e2);
  }
  function ki(e2) {
    return Oi(e2) ? e2 : Di(e2);
  }
  function Ai(e2, t2) {
    let n2 = ``, r2 = 0, i2 = false;
    for (let a2 = e2.length - 1; a2 >= 0; a2--) {
      if (e2[a2] === `>`) i2 = true;
      else if (e2[a2] === `<`) {
        i2 = false, n2 = e2[a2] + n2;
        continue;
      }
      if (i2 || r2++, r2 <= t2) n2 = e2[a2] + n2;
      else {
        n2 = `...` + n2;
        break;
      }
    }
    return n2;
  }
  function ji(e2, t2, n2, r2) {
    function i2(e3, n3 = []) {
      e3 || (e3 = ``);
      let r3 = ``, i3 = 0;
      n3.forEach((n4) => {
        if (n4.length === 2 && n4[0] === n4[1]) return;
        let a3 = n4[1] + 1, o2 = a3 - n4[0] >= t2.length;
        r3 += [
          ki(e3.substring(i3, n4[0])),
          o2 && `<mark>`,
          ki(e3.substring(n4[0], a3)),
          o2 && `</mark>`
        ].filter(Boolean).join(``), i3 = a3;
      }), r3 += ki(e3.substring(i3));
      let a2 = r3.indexOf(`<mark>`);
      return a2 !== -1 && (r3 = Ai(r3, r3.length - a2)), r3;
    }
    if (e2.matches?.length) {
      for (let t3 of e2.matches) if (!(n2 && t3.key !== n2) && !r2?.includes(t3.key)) return i2(t3.value, t3.indices);
    }
  }
  var Mi = {
    slots: {
      root: `flex flex-col min-h-0 min-w-0 divide-y divide-default`,
      input: ``,
      close: ``,
      back: `p-0`,
      content: `relative overflow-hidden flex flex-col`,
      footer: `p-1`,
      viewport: `relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none`,
      group: `p-1 isolate`,
      empty: `text-center text-muted`,
      label: `font-semibold text-highlighted`,
      item: `group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75`,
      itemLeadingIcon: `shrink-0`,
      itemLeadingAvatar: `shrink-0`,
      itemLeadingAvatarSize: ``,
      itemLeadingChip: `shrink-0`,
      itemLeadingChipSize: ``,
      itemTrailing: `ms-auto inline-flex items-center`,
      itemTrailingIcon: `shrink-0`,
      itemTrailingHighlightedIcon: `shrink-0 text-dimmed hidden group-data-highlighted:inline-flex`,
      itemTrailingKbds: `hidden lg:inline-flex items-center shrink-0`,
      itemTrailingKbdsSize: ``,
      itemWrapper: `flex-1 flex flex-col text-start min-w-0`,
      itemLabel: `truncate space-x-1 text-dimmed`,
      itemDescription: `truncate text-muted`,
      itemLabelBase: `text-highlighted [&>mark]:text-inverted [&>mark]:bg-primary`,
      itemLabelPrefix: `text-default`,
      itemLabelSuffix: `text-dimmed [&>mark]:text-inverted [&>mark]:bg-primary`
    },
    variants: {
      virtualize: {
        true: {
          viewport: `p-1 isolate`
        },
        false: {
          viewport: `divide-y divide-default`
        }
      },
      size: {
        xs: {
          input: `[&>input]:h-10`,
          empty: `py-3 text-xs`,
          label: `p-1 text-[10px]/3 gap-1`,
          item: `p-1 text-xs gap-1`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemLeadingChip: `size-4`,
          itemLeadingChipSize: `sm`,
          itemTrailing: `gap-1`,
          itemTrailingIcon: `size-4`,
          itemTrailingHighlightedIcon: `size-4`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `sm`
        },
        sm: {
          input: `[&>input]:h-11`,
          empty: `py-4 text-xs`,
          label: `p-1.5 text-[10px]/3 gap-1.5`,
          item: `p-1.5 text-xs gap-1.5`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemLeadingChip: `size-4`,
          itemLeadingChipSize: `sm`,
          itemTrailing: `gap-1.5`,
          itemTrailingIcon: `size-4`,
          itemTrailingHighlightedIcon: `size-4`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `sm`
        },
        md: {
          input: `[&>input]:h-12`,
          empty: `py-6 text-sm`,
          label: `p-1.5 text-xs gap-1.5`,
          item: `p-1.5 text-sm gap-1.5`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemLeadingChip: `size-5`,
          itemLeadingChipSize: `md`,
          itemTrailing: `gap-1.5`,
          itemTrailingIcon: `size-5`,
          itemTrailingHighlightedIcon: `size-5`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `md`
        },
        lg: {
          input: `[&>input]:h-13`,
          empty: `py-7 text-sm`,
          label: `p-2 text-xs gap-2`,
          item: `p-2 text-sm gap-2`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemLeadingChip: `size-5`,
          itemLeadingChipSize: `md`,
          itemTrailing: `gap-2`,
          itemTrailingIcon: `size-5`,
          itemTrailingHighlightedIcon: `size-5`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `md`
        },
        xl: {
          input: `[&>input]:h-14`,
          empty: `py-8 text-base`,
          label: `p-2 text-sm gap-2`,
          item: `p-2 text-base gap-2`,
          itemLeadingIcon: `size-6`,
          itemLeadingAvatarSize: `xs`,
          itemLeadingChip: `size-6`,
          itemLeadingChipSize: `lg`,
          itemTrailing: `gap-2`,
          itemTrailingIcon: `size-6`,
          itemTrailingHighlightedIcon: `size-6`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `lg`
        }
      },
      active: {
        true: {
          item: `text-highlighted before:bg-elevated`,
          itemLeadingIcon: `text-default`
        },
        false: {
          item: [
            `text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50`,
            `transition-colors before:transition-colors`
          ],
          itemLeadingIcon: [
            `text-dimmed group-data-highlighted:not-group-data-disabled:text-default`,
            `transition-colors`
          ]
        }
      },
      loading: {
        true: {
          itemLeadingIcon: `animate-spin`
        }
      }
    },
    defaultVariants: {
      size: `md`
    }
  }, Ni = [
    `innerHTML`
  ], Pi = [
    `innerHTML`
  ], Fi = Object.assign({
    inheritAttrs: false
  }, {
    __name: `CommandPalette`,
    props: r({
      as: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      trailingIcon: {
        type: null,
        required: false
      },
      selectedIcon: {
        type: null,
        required: false
      },
      childrenIcon: {
        type: null,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false,
        default: true
      },
      close: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      closeIcon: {
        type: null,
        required: false
      },
      back: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      backIcon: {
        type: null,
        required: false
      },
      input: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      groups: {
        type: Array,
        required: false
      },
      fuse: {
        type: Object,
        required: false
      },
      virtualize: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: false
      },
      valueKey: {
        type: null,
        required: false
      },
      labelKey: {
        type: null,
        required: false,
        default: `label`
      },
      descriptionKey: {
        type: null,
        required: false,
        default: `description`
      },
      preserveGroupOrder: {
        type: Boolean,
        required: false,
        default: false
      },
      searchDelay: {
        type: Number,
        required: false,
        default: 0
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      modelValue: {
        type: null,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      highlightOnHover: {
        type: Boolean,
        required: false,
        default: true
      },
      selectionBehavior: {
        type: String,
        required: false
      },
      by: {
        type: [
          String,
          Function
        ],
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      }
    }, {
      searchTerm: {
        type: String,
        default: ``
      },
      searchTermModifiers: {}
    }),
    emits: r([
      `update:modelValue`,
      `highlight`,
      `entryFocus`,
      `leave`,
      `update:open`
    ], [
      `update:searchTerm`
    ]),
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, i2 = p(), s2 = c(e2, `searchTerm`, {
        type: String,
        default: ``
      }), { t: l2 } = ye(), u2 = K(), d2 = Me(`commandPalette`, n2), f2 = xt(Fe(n2, `as`, `disabled`, `multiple`, `modelValue`, `defaultValue`, `highlightOnHover`, `by`), r2), h2 = B(() => n2.virtualize ? xe(typeof n2.virtualize == `boolean` ? {} : n2.virtualize, {
        estimateSize: Jt(ne2.value, `md`, n2.descriptionKey, !!i2[`item-description`])
      }) : false), [_2, v2] = Ke({
        props: {
          item: {
            type: Object,
            required: true
          },
          group: {
            type: Object,
            required: false
          },
          index: {
            type: Number,
            required: false
          }
        }
      }), y2 = O(() => J({
        extend: J(Mi),
        ...u2.ui?.commandPalette || {}
      })({
        size: n2.size,
        virtualize: !!n2.virtualize
      })), w2 = O(() => xe({}, n2.fuse, {
        fuseOptions: {
          ignoreLocation: true,
          threshold: 0.1,
          keys: [
            n2.labelKey,
            `suffix`
          ]
        },
        resultLimit: 12,
        matchAllWhenSearchEmpty: true
      })), T2 = z([]), D2 = O(() => T2.value[T2.value.length - 1]?.placeholder || n2.placeholder || l2(`commandPalette.placeholder`)), k2 = O(() => T2.value?.length ? [
        T2.value[T2.value.length - 1]
      ] : n2.groups), ee2 = O(() => k2.value?.filter((e3) => e3.id ? !e3.ignoreFilter : (console.warn("[@nuxt/ui] CommandPalette group is missing an `id` property"), false))?.flatMap((e3) => e3.items?.map((t3) => ({
        ...t3,
        group: e3.id
      })) || []) || []), A2 = Ie(s2, () => n2.searchDelay), { results: j2 } = Ti(A2, ee2, w2), te2 = Le(j2, 16, true);
      function N2(e3, t3) {
        let r3 = t3;
        return e3?.postFilter && typeof e3.postFilter == `function` && (r3 = e3.postFilter(A2.value, r3)), {
          ...e3,
          items: r3.slice(0, w2.value.resultLimit).map((e4) => ({
            ...e4,
            labelHtml: ji(e4, A2.value, n2.labelKey),
            suffixHtml: ji(e4, A2.value, void 0, [
              n2.labelKey
            ])
          }))
        };
      }
      let F2 = O(() => {
        let e3 = k2.value, t3 = te2.value.reduce((e4, t4) => {
          var _a;
          let { item: n3, matches: r4 } = t4;
          return n3.group ? (e4[_a = n3.group] || (e4[_a] = []), e4[n3.group]?.push({
            ...n3,
            matches: r4
          }), e4) : e4;
        }, {});
        if (n2.preserveGroupOrder) {
          let n3 = [];
          for (let r4 of e3 || []) {
            if (!r4.items?.length) continue;
            let e4 = r4.ignoreFilter ? r4.items : t3[r4.id];
            if (!e4?.length) continue;
            let i3 = N2(r4, e4);
            i3.items?.length && n3.push(i3);
          }
          return n3;
        }
        let r3 = Object.entries(t3).map(([t4, n3]) => {
          let r4 = e3?.find((e4) => e4.id === t4);
          if (!r4) return;
          let i3 = N2(r4, n3);
          return i3.items?.length ? i3 : void 0;
        }).filter((e4) => !!e4);
        return (e3?.map((e4, t4) => ({
          ...e4,
          index: t4
        }))?.filter((e4) => e4.ignoreFilter && e4.items?.length)?.map((e4) => ({
          ...N2(e4, e4.items || []),
          index: e4.index
        }))?.filter((e4) => e4.items?.length) || []).reduce((e4, t4) => (e4.splice(t4.index, 0, t4), e4), [
          ...r3
        ]);
      }), ne2 = O(() => F2.value.flatMap((e3) => e3.items || [])), re2 = g(`rootRef`);
      function ie2(e3) {
        e3.children?.length && (T2.value.push({
          id: `history-${T2.value.length}`,
          label: e3.label,
          slot: e3.slot,
          placeholder: e3.placeholder,
          items: e3.children
        }), s2.value = ``, re2.value?.highlightFirstItem());
      }
      function oe2() {
        T2.value.length && (T2.value.pop(), s2.value = ``, re2.value?.highlightFirstItem());
      }
      function se2() {
        s2.value || oe2();
      }
      function U2(e3, t3) {
        t3.children?.length ? (e3.preventDefault(), ie2(t3)) : t3.onSelect?.(e3);
      }
      return (t3, c2) => (M(), S(P, null, [
        a(m(_2), null, {
          default: I(({ item: r3, index: s3, group: c3 }) => [
            a(De, E(m(we)(r3), {
              custom: ``
            }), {
              default: I(({ active: l3, ...f3 }) => [
                a(m(ct), {
                  value: n2.valueKey ? m(G)(r3, n2.valueKey) : m(be)(r3, [
                    `matches`,
                    `group`,
                    `onSelect`,
                    `labelHtml`,
                    `suffixHtml`,
                    `children`
                  ]),
                  disabled: r3.disabled,
                  "as-child": ``,
                  onSelect: (e3) => U2(e3, r3)
                }, {
                  default: I(() => [
                    a(Oe, E(f3, {
                      "data-slot": `item`,
                      class: y2.value.item({
                        class: [
                          m(d2)?.item,
                          r3.ui?.item,
                          r3.class
                        ],
                        active: l3 || r3.active
                      })
                    }), {
                      default: I(() => [
                        V(t3.$slots, r3.slot || c3?.slot || `item`, {
                          item: r3,
                          index: s3,
                          ui: y2.value
                        }, () => [
                          V(t3.$slots, r3.slot ? `${r3.slot}-leading` : c3?.slot ? `${c3.slot}-leading` : `item-leading`, {
                            item: r3,
                            index: s3,
                            ui: y2.value
                          }, () => [
                            r3.loading ? (M(), R(Ne, {
                              key: 0,
                              name: e2.loadingIcon || m(u2).ui.icons.loading,
                              "data-slot": `itemLeadingIcon`,
                              class: b(y2.value.itemLeadingIcon({
                                class: [
                                  m(d2)?.itemLeadingIcon,
                                  r3.ui?.itemLeadingIcon
                                ],
                                loading: true
                              }))
                            }, null, 8, [
                              `name`,
                              `class`
                            ])) : r3.icon ? (M(), R(Ne, {
                              key: 1,
                              name: r3.icon,
                              "data-slot": `itemLeadingIcon`,
                              class: b(y2.value.itemLeadingIcon({
                                class: [
                                  m(d2)?.itemLeadingIcon,
                                  r3.ui?.itemLeadingIcon
                                ],
                                active: l3 || r3.active
                              }))
                            }, null, 8, [
                              `name`,
                              `class`
                            ])) : r3.avatar ? (M(), R(Ce, E({
                              key: 2,
                              size: r3.ui?.itemLeadingAvatarSize || m(d2)?.itemLeadingAvatarSize || y2.value.itemLeadingAvatarSize()
                            }, r3.avatar, {
                              "data-slot": `itemLeadingAvatar`,
                              class: y2.value.itemLeadingAvatar({
                                class: [
                                  m(d2)?.itemLeadingAvatar,
                                  r3.ui?.itemLeadingAvatar
                                ],
                                active: l3 || r3.active
                              })
                            }), null, 16, [
                              `size`,
                              `class`
                            ])) : r3.chip ? (M(), R(Ae, E({
                              key: 3,
                              size: r3.ui?.itemLeadingChipSize || m(d2)?.itemLeadingChipSize || y2.value.itemLeadingChipSize(),
                              inset: ``,
                              standalone: ``
                            }, r3.chip, {
                              "data-slot": `itemLeadingChip`,
                              class: y2.value.itemLeadingChip({
                                class: [
                                  m(d2)?.itemLeadingChip,
                                  r3.ui?.itemLeadingChip
                                ],
                                active: l3 || r3.active
                              })
                            }), null, 16, [
                              `size`,
                              `class`
                            ])) : H(``, true)
                          ]),
                          r3.prefix || r3.labelHtml || m(G)(r3, n2.labelKey) || r3.suffixHtml || r3.suffix || i2[r3.slot ? `${r3.slot}-label` : c3?.slot ? `${c3.slot}-label` : `item-label`] || m(G)(r3, n2.descriptionKey) || i2[r3.slot ? `${r3.slot}-description` : c3?.slot ? `${c3.slot}-description` : `item-description`] ? (M(), S(`span`, {
                            key: 0,
                            "data-slot": `itemWrapper`,
                            class: b(y2.value.itemWrapper({
                              class: [
                                m(d2)?.itemWrapper,
                                r3.ui?.itemWrapper
                              ]
                            }))
                          }, [
                            x(`span`, {
                              "data-slot": `itemLabel`,
                              class: b(y2.value.itemLabel({
                                class: [
                                  m(d2)?.itemLabel,
                                  r3.ui?.itemLabel
                                ],
                                active: l3 || r3.active
                              }))
                            }, [
                              V(t3.$slots, r3.slot ? `${r3.slot}-label` : c3?.slot ? `${c3.slot}-label` : `item-label`, {
                                item: r3,
                                index: s3,
                                ui: y2.value
                              }, () => [
                                r3.prefix ? (M(), S(`span`, {
                                  key: 0,
                                  "data-slot": `itemLabelPrefix`,
                                  class: b(y2.value.itemLabelPrefix({
                                    class: [
                                      m(d2)?.itemLabelPrefix,
                                      r3.ui?.itemLabelPrefix
                                    ]
                                  }))
                                }, L(r3.prefix), 3)) : H(``, true),
                                r3.labelHtml ? (M(), S(`span`, {
                                  key: 1,
                                  "data-slot": `itemLabelBase`,
                                  class: b(y2.value.itemLabelBase({
                                    class: [
                                      m(d2)?.itemLabelBase,
                                      r3.ui?.itemLabelBase
                                    ],
                                    active: l3 || r3.active
                                  })),
                                  innerHTML: r3.labelHtml
                                }, null, 10, Ni)) : (M(), S(`span`, {
                                  key: 2,
                                  "data-slot": `itemLabelBase`,
                                  class: b(y2.value.itemLabelBase({
                                    class: [
                                      m(d2)?.itemLabelBase,
                                      r3.ui?.itemLabelBase
                                    ],
                                    active: l3 || r3.active
                                  }))
                                }, L(m(G)(r3, n2.labelKey)), 3)),
                                r3.suffixHtml ? (M(), S(`span`, {
                                  key: 3,
                                  "data-slot": `itemLabelSuffix`,
                                  class: b(y2.value.itemLabelSuffix({
                                    class: [
                                      m(d2)?.itemLabelSuffix,
                                      r3.ui?.itemLabelSuffix
                                    ],
                                    active: l3 || r3.active
                                  })),
                                  innerHTML: r3.suffixHtml
                                }, null, 10, Pi)) : r3.suffix ? (M(), S(`span`, {
                                  key: 4,
                                  "data-slot": `itemLabelSuffix`,
                                  class: b(y2.value.itemLabelSuffix({
                                    class: [
                                      m(d2)?.itemLabelSuffix,
                                      r3.ui?.itemLabelSuffix
                                    ],
                                    active: l3 || r3.active
                                  }))
                                }, L(r3.suffix), 3)) : H(``, true)
                              ])
                            ], 2),
                            m(G)(r3, n2.descriptionKey) || i2[r3.slot ? `${r3.slot}-description` : c3?.slot ? `${c3.slot}-description` : `item-description`] ? (M(), S(`span`, {
                              key: 0,
                              "data-slot": `itemDescription`,
                              class: b(y2.value.itemDescription({
                                class: [
                                  m(d2)?.itemDescription,
                                  r3.ui?.itemDescription
                                ]
                              }))
                            }, [
                              V(t3.$slots, r3.slot ? `${r3.slot}-description` : c3?.slot ? `${c3.slot}-description` : `item-description`, {
                                item: r3,
                                index: s3,
                                ui: y2.value
                              }, () => [
                                o(L(m(G)(r3, n2.descriptionKey)), 1)
                              ])
                            ], 2)) : H(``, true)
                          ], 2)) : H(``, true),
                          x(`span`, {
                            "data-slot": `itemTrailing`,
                            class: b(y2.value.itemTrailing({
                              class: [
                                m(d2)?.itemTrailing,
                                r3.ui?.itemTrailing
                              ]
                            }))
                          }, [
                            V(t3.$slots, r3.slot ? `${r3.slot}-trailing` : c3?.slot ? `${c3.slot}-trailing` : `item-trailing`, {
                              item: r3,
                              index: s3,
                              ui: y2.value
                            }, () => [
                              r3.children && r3.children.length > 0 ? (M(), R(Ne, {
                                key: 0,
                                name: e2.childrenIcon || m(u2).ui.icons.chevronRight,
                                "data-slot": `itemTrailingIcon`,
                                class: b(y2.value.itemTrailingIcon({
                                  class: [
                                    m(d2)?.itemTrailingIcon,
                                    r3.ui?.itemTrailingIcon
                                  ]
                                }))
                              }, null, 8, [
                                `name`,
                                `class`
                              ])) : r3.kbds?.length ? (M(), S(`span`, {
                                key: 1,
                                "data-slot": `itemTrailingKbds`,
                                class: b(y2.value.itemTrailingKbds({
                                  class: [
                                    m(d2)?.itemTrailingKbds,
                                    r3.ui?.itemTrailingKbds
                                  ]
                                }))
                              }, [
                                (M(true), S(P, null, C(r3.kbds, (e3, t4) => (M(), R(vt, E({
                                  key: t4,
                                  size: r3.ui?.itemTrailingKbdsSize || m(d2)?.itemTrailingKbdsSize || y2.value.itemTrailingKbdsSize()
                                }, {
                                  ref_for: true
                                }, typeof e3 == `string` ? {
                                  value: e3
                                } : e3), null, 16, [
                                  `size`
                                ]))), 128))
                              ], 2)) : c3?.highlightedIcon ? (M(), R(Ne, {
                                key: 2,
                                name: c3.highlightedIcon,
                                "data-slot": `itemTrailingHighlightedIcon`,
                                class: b(y2.value.itemTrailingHighlightedIcon({
                                  class: [
                                    m(d2)?.itemTrailingHighlightedIcon,
                                    r3.ui?.itemTrailingHighlightedIcon
                                  ]
                                }))
                              }, null, 8, [
                                `name`,
                                `class`
                              ])) : H(``, true)
                            ]),
                            r3.children?.length ? H(``, true) : (M(), R(m(at), {
                              key: 0,
                              "as-child": ``
                            }, {
                              default: I(() => [
                                a(Ne, {
                                  name: e2.selectedIcon || m(u2).ui.icons.check,
                                  "data-slot": `itemTrailingIcon`,
                                  class: b(y2.value.itemTrailingIcon({
                                    class: [
                                      m(d2)?.itemTrailingIcon,
                                      r3.ui?.itemTrailingIcon
                                    ]
                                  }))
                                }, null, 8, [
                                  `name`,
                                  `class`
                                ])
                              ]),
                              _: 2
                            }, 1024))
                          ], 2)
                        ])
                      ]),
                      _: 2
                    }, 1040, [
                      `class`
                    ])
                  ]),
                  _: 2
                }, 1032, [
                  `value`,
                  `disabled`,
                  `onSelect`
                ])
              ]),
              _: 2
            }, 1040)
          ]),
          _: 3
        }),
        a(m($e), E({
          ...m(f2),
          ...t3.$attrs
        }, {
          ref_key: `rootRef`,
          ref: re2,
          "selection-behavior": e2.selectionBehavior,
          "data-slot": `root`,
          class: y2.value.root({
            class: [
              m(d2)?.root,
              n2.class
            ]
          })
        }), {
          default: I(() => [
            e2.input ? (M(), R(m(lt), {
              key: 0,
              modelValue: s2.value,
              "onUpdate:modelValue": c2[1] || (c2[1] = (e3) => s2.value = e3),
              "as-child": ``
            }, {
              default: I(() => [
                a(Ut, E({
                  variant: `none`,
                  size: e2.size
                }, typeof n2.input == `object` ? n2.input : {}, {
                  placeholder: D2.value,
                  autofocus: e2.autofocus,
                  loading: e2.loading,
                  "loading-icon": e2.loadingIcon,
                  "trailing-icon": e2.trailingIcon,
                  icon: e2.icon || m(u2).ui.icons.search,
                  "data-slot": `input`,
                  class: y2.value.input({
                    class: m(d2)?.input
                  }),
                  onKeydown: ce(se2, [
                    `backspace`
                  ])
                }), ae({
                  _: 2
                }, [
                  T2.value?.length && (e2.back || i2.back) ? {
                    name: `leading`,
                    fn: I(() => [
                      V(t3.$slots, `back`, {
                        ui: y2.value
                      }, () => [
                        a(ke, E({
                          size: e2.size,
                          icon: e2.backIcon || m(u2).ui.icons.arrowLeft,
                          color: `neutral`,
                          variant: `link`,
                          "aria-label": m(l2)(`commandPalette.back`)
                        }, typeof e2.back == `object` ? e2.back : {}, {
                          "data-slot": `back`,
                          class: y2.value.back({
                            class: m(d2)?.back
                          }),
                          onClick: oe2
                        }), null, 16, [
                          `size`,
                          `icon`,
                          `aria-label`,
                          `class`
                        ])
                      ])
                    ]),
                    key: `0`
                  } : void 0,
                  e2.close || i2.close ? {
                    name: `trailing`,
                    fn: I(() => [
                      V(t3.$slots, `close`, {
                        ui: y2.value
                      }, () => [
                        e2.close ? (M(), R(ke, E({
                          key: 0,
                          size: e2.size,
                          icon: e2.closeIcon || m(u2).ui.icons.close,
                          color: `neutral`,
                          variant: `ghost`,
                          "aria-label": m(l2)(`commandPalette.close`)
                        }, typeof e2.close == `object` ? e2.close : {}, {
                          "data-slot": `close`,
                          class: y2.value.close({
                            class: m(d2)?.close
                          }),
                          onClick: c2[0] || (c2[0] = (e3) => r2(`update:open`, false))
                        }), null, 16, [
                          `size`,
                          `icon`,
                          `aria-label`,
                          `class`
                        ])) : H(``, true)
                      ])
                    ]),
                    key: `1`
                  } : void 0
                ]), 1040, [
                  `size`,
                  `placeholder`,
                  `autofocus`,
                  `loading`,
                  `loading-icon`,
                  `trailing-icon`,
                  `icon`,
                  `class`
                ])
              ]),
              _: 3
            }, 8, [
              `modelValue`
            ])) : H(``, true),
            a(m(it), {
              "data-slot": `content`,
              class: b(y2.value.content({
                class: m(d2)?.content
              }))
            }, {
              default: I(() => [
                F2.value?.length ? (M(), S(`div`, {
                  key: 0,
                  role: `presentation`,
                  "data-slot": `viewport`,
                  class: b(y2.value.viewport({
                    class: m(d2)?.viewport
                  }))
                }, [
                  e2.virtualize ? (M(), R(m(st), E({
                    key: 0,
                    options: ne2.value,
                    "text-content": (e3) => m(G)(e3, n2.labelKey)
                  }, h2.value), {
                    default: I(({ option: e3, virtualItem: t4 }) => [
                      a(m(v2), {
                        item: e3,
                        index: t4.index
                      }, null, 8, [
                        `item`,
                        `index`
                      ])
                    ]),
                    _: 1
                  }, 16, [
                    `options`,
                    `text-content`
                  ])) : (M(true), S(P, {
                    key: 1
                  }, C(F2.value, (e3) => (M(), R(m(ut), {
                    key: `group-${e3.id}`,
                    "data-slot": `group`,
                    class: b(y2.value.group({
                      class: m(d2)?.group
                    }))
                  }, {
                    default: I(() => [
                      m(G)(e3, n2.labelKey) || i2[e3.slot ? `${e3.slot}-group-label` : `group-label`] ? (M(), R(m(Jn), {
                        key: 0,
                        "data-slot": `label`,
                        class: b(y2.value.label({
                          class: m(d2)?.label
                        }))
                      }, {
                        default: I(() => [
                          V(t3.$slots, e3.slot ? `${e3.slot}-group-label` : `group-label`, {
                            group: e3,
                            label: m(G)(e3, n2.labelKey),
                            ui: y2.value
                          }, () => [
                            o(L(m(G)(e3, n2.labelKey)), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, [
                        `class`
                      ])) : H(``, true),
                      (M(true), S(P, null, C(e3.items, (t4, n3) => (M(), R(m(v2), {
                        key: `group-${e3.id}-${n3}`,
                        item: t4,
                        index: n3,
                        group: e3
                      }, null, 8, [
                        `item`,
                        `index`,
                        `group`
                      ]))), 128))
                    ]),
                    _: 2
                  }, 1032, [
                    `class`
                  ]))), 128))
                ], 2)) : (M(), S(`div`, {
                  key: 1,
                  "data-slot": `empty`,
                  class: b(y2.value.empty({
                    class: m(d2)?.empty
                  }))
                }, [
                  V(t3.$slots, `empty`, {
                    searchTerm: s2.value
                  }, () => [
                    o(L(s2.value ? m(l2)(`commandPalette.noMatch`, {
                      searchTerm: s2.value
                    }) : m(l2)(`commandPalette.noData`)), 1)
                  ])
                ], 2))
              ]),
              _: 3
            }, 8, [
              `class`
            ]),
            i2.footer ? (M(), S(`div`, {
              key: 1,
              "data-slot": `footer`,
              class: b(y2.value.footer({
                class: m(d2)?.footer
              }))
            }, [
              V(t3.$slots, `footer`, {
                ui: y2.value
              })
            ], 2)) : H(``, true)
          ]),
          _: 3
        }, 16, [
          `selection-behavior`,
          `class`
        ])
      ], 64));
    }
  }), Ii = {
    slots: {
      modal: ``,
      input: ``
    },
    variants: {
      fullscreen: {
        false: {
          modal: `sm:max-w-3xl h-full sm:h-[28rem]`
        }
      },
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {}
      }
    },
    defaultVariants: {
      size: `md`
    }
  }, Li = {
    __name: `DashboardSearch`,
    props: r({
      size: {
        type: null,
        required: false
      },
      close: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      shortcut: {
        type: String,
        required: false,
        default: `meta_k`
      },
      searchDelay: {
        type: Number,
        required: false,
        default: 100
      },
      colorMode: {
        type: Boolean,
        required: false,
        default: true
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      title: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      overlay: {
        type: Boolean,
        required: false
      },
      transition: {
        type: Boolean,
        required: false
      },
      content: {
        type: Object,
        required: false
      },
      dismissible: {
        type: Boolean,
        required: false
      },
      fullscreen: {
        type: Boolean,
        required: false,
        default: false
      },
      modal: {
        type: Boolean,
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true
      },
      icon: {
        type: null,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      },
      closeIcon: {
        type: null,
        required: false
      },
      groups: {
        type: Array,
        required: false
      },
      fuse: {
        type: Object,
        required: false
      }
    }, {
      open: {
        type: Boolean,
        default: false
      },
      openModifiers: {},
      searchTerm: {
        type: String,
        default: ``
      },
      searchTermModifiers: {}
    }),
    emits: [
      `update:open`,
      `update:searchTerm`
    ],
    setup(e2, { expose: t2 }) {
      let n2 = e2, r2 = p(), o2 = c(e2, `open`, {
        type: Boolean,
        default: false
      }), s2 = c(e2, `searchTerm`, {
        type: String,
        default: ``
      });
      Te(`dashboard:search:toggle`, () => {
        o2.value = !o2.value;
      });
      let { t: l2 } = ye(), u2 = ve(), d2 = K(), f2 = Me(`dashboardSearch`, n2), h2 = je(Fe(n2, `size`, `icon`, `placeholder`, `autofocus`, `loading`, `loadingIcon`, `close`, `closeIcon`, `searchDelay`)), _2 = je(Fe(n2, `overlay`, `transition`, `content`, `dismissible`, `fullscreen`, `modal`, `portal`)), v2 = () => be(r2, [
        `content`
      ]), y2 = O(() => xe({}, n2.fuse, {
        fuseOptions: {}
      })), b2 = O(() => J({
        extend: J(Ii),
        ...d2.ui?.dashboardSearch || {}
      })({
        size: n2.size,
        fullscreen: n2.fullscreen
      })), x2 = O(() => {
        let e3 = [];
        return e3.push(...n2.groups || []), n2.colorMode && !u2?.forced && e3.push({
          id: `theme`,
          label: l2(`dashboardSearch.theme`),
          items: [
            {
              label: l2(`colorMode.system`),
              icon: d2.ui.icons.system,
              active: u2.preference === `system`,
              onSelect: () => {
                u2.preference = `system`;
              }
            },
            {
              label: l2(`colorMode.light`),
              icon: d2.ui.icons.light,
              active: u2.preference === `light`,
              onSelect: () => {
                u2.preference = `light`;
              }
            },
            {
              label: l2(`colorMode.dark`),
              icon: d2.ui.icons.dark,
              active: u2.preference === `dark`,
              onSelect: () => {
                u2.preference = `dark`;
              }
            }
          ]
        }), e3;
      }), S2 = g(`commandPaletteRef`);
      function w2(e3) {
        e3.disabled || (o2.value = false, s2.value = ``);
      }
      return me({
        [n2.shortcut]: {
          usingInput: true,
          handler: () => o2.value = !o2.value
        }
      }), t2({
        commandPaletteRef: S2
      }), (t3, r3) => (M(), R(Vt, E({
        open: o2.value,
        "onUpdate:open": r3[2] || (r3[2] = (e3) => o2.value = e3),
        title: e2.title || m(l2)(`dashboardSearch.title`),
        description: e2.description || m(l2)(`dashboardSearch.description`)
      }, m(_2), {
        "data-slot": `modal`,
        class: b2.value.modal({
          class: [
            m(f2)?.modal,
            n2.class
          ]
        })
      }), {
        content: I((e3) => [
          V(t3.$slots, `content`, i(U(e3)), () => [
            a(Fi, E({
              ref_key: `commandPaletteRef`,
              ref: S2,
              "search-term": s2.value,
              "onUpdate:searchTerm": r3[0] || (r3[0] = (e4) => s2.value = e4)
            }, m(h2), {
              groups: x2.value,
              fuse: y2.value,
              input: {
                fixed: true
              },
              ui: m(he)(m(be)(b2.value, [
                `modal`
              ]), m(f2)),
              "onUpdate:modelValue": w2,
              "onUpdate:open": r3[1] || (r3[1] = (e4) => o2.value = e4)
            }), ae({
              _: 2
            }, [
              C(v2(), (e4, n3) => ({
                name: n3,
                fn: I((e5) => [
                  V(t3.$slots, n3, i(U(e5)))
                ])
              }))
            ]), 1040, [
              `search-term`,
              `groups`,
              `fuse`,
              `ui`
            ])
          ])
        ]),
        _: 3
      }, 16, [
        `open`,
        `title`,
        `description`,
        `class`
      ]));
    }
  }, Ri = `data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20d='m255.487%20348.511-38.054%2021.97-15.574%20124.592c-.536%204.286.794%208.596%203.653%2011.834s6.97%205.093%2011.289%205.093h75.578c4.32%200%208.43-1.855%2011.289-5.093s4.189-7.548%203.653-11.834l-21.591-172.724c-8.206%2010.444-18.406%2019.327-30.243%2026.162z'%3e%3c/path%3e%3cpath%20d='m270.097%20158.141v-143.082c0-5.219-2.702-10.066-7.142-12.81-4.44-2.743-9.982-2.994-14.651-.659l-27.05%2013.525c-25.759%2012.879-41.761%2038.771-41.761%2067.57v83.59c0%2016.328%205.224%2031.449%2014.064%2043.817l29.912-17.27c11.989-15.749%2028.037-27.701%2046.628-34.681z'%3e%3c/path%3e%3cpath%20d='m236.976%20268.498c-13.719-5.811-23.992-18.2-26.868-33.186l-145.939%2084.259c-4.52%202.609-7.367%207.373-7.523%2012.59-.157%205.217%202.399%2010.143%206.755%2013.018l25.238%2016.664c12.671%208.366%2027.115%2012.574%2041.598%2012.574%2012.988%200%2026.008-3.386%2037.799-10.194l72.391-41.795c14.14-8.164%2024.624-20.249%2030.914-34.088z'%3e%3c/path%3e%3cpath%20d='m417.584%20233.375-72.391-41.795c-17.475-10.09-37.835-12.769-57.325-7.547-3.598.964-7.085%202.18-10.446%203.625%2013.427%207.871%2022.47%2022.446%2022.47%2039.103%200%2013.661-6.087%2025.919-15.68%2034.232l146.636%2084.66c2.327%201.344%204.927%202.018%207.529%202.018%202.452%200%204.906-.598%207.135-1.798%204.596-2.473%207.583-7.149%207.896-12.359l1.813-30.189c1.726-28.747-12.696-55.551-37.637-69.95z'%3e%3c/path%3e%3ccircle%20cx='254.59'%20cy='226.761'%20r='15.184'%3e%3c/circle%3e%3c/g%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, zi = `data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.28%2015.06C2.7%2015.06%202.16%2014.92%201.66%2014.64C1.16%2014.34%200.91%2013.85%200.91%2013.17C0.91%2012.23%201.24%2011.11%201.9%209.81C2.58%208.51%203.35%207.16%204.21%205.76C6.55%201.96%208.21%200.0599992%209.19%200.0599992C9.39%200.0599992%209.59%200.139999%209.79%200.3C10.01%200.44%2010.13%200.599999%2010.15%200.779999L8.05%203.6C7.23%204.7%206.49%205.72%205.83%206.66C5.17%207.58%204.6%208.41%204.12%209.15C3.88%209.53%203.61%209.96%203.31%2010.44C3.01%2010.92%202.74%2011.42%202.5%2011.94C2.28%2012.44%202.17%2012.95%202.17%2013.47C2.17%2013.71%202.24%2013.93%202.38%2014.13C2.52%2014.31%202.77%2014.4%203.13%2014.4C3.77%2014.4%204.61%2014.06%205.65%2013.38C6.69%2012.68%207.72%2011.72%208.74%2010.5C8.84%2010.38%208.95%2010.27%209.07%2010.17C9.19%2010.07%209.29%2010.02%209.37%2010.02C9.47%2010.02%209.52%2010.08%209.52%2010.2C9.52%2010.26%209.45%2010.38%209.31%2010.56C9.19%2010.72%209.09%2010.85%209.01%2010.95L8.29%2011.76C7.89%2012.2%207.41%2012.68%206.85%2013.2C6.31%2013.72%205.73%2014.16%205.11%2014.52C4.51%2014.88%203.9%2015.06%203.28%2015.06ZM10.5749%2015.39C9.93492%2015.39%209.35492%2015.19%208.83492%2014.79C8.31492%2014.37%208.05492%2013.82%208.05492%2013.14C8.05492%2011.72%208.92492%2010.1%2010.6649%208.28C12.4449%206.44%2014.0349%205.52%2015.4349%205.52C15.9149%205.52%2016.2949%205.65%2016.5749%205.91C16.8549%206.15%2016.9949%206.45%2016.9949%206.81C16.9949%207.31%2016.8749%207.77%2016.6349%208.19C16.3549%208.71%2015.9549%208.97%2015.4349%208.97C14.9149%208.97%2014.6549%208.81%2014.6549%208.49C14.6549%208.27%2014.7849%207.94%2015.0449%207.5C15.3249%207.04%2015.4649%206.8%2015.4649%206.78C15.4649%206.74%2015.4349%206.72%2015.3749%206.72C14.8149%206.78%2014.0349%207.19%2013.0349%207.95C12.5949%208.29%2012.2049%208.61%2011.8649%208.91C11.5449%209.21%2011.2849%209.5%2011.0849%209.78L9.91492%2011.49C9.79492%2011.67%209.66492%2011.98%209.52492%2012.42C9.40492%2012.86%209.34492%2013.19%209.34492%2013.41C9.34492%2013.81%209.47492%2014.14%209.73492%2014.4C10.0149%2014.66%2010.3649%2014.79%2010.7849%2014.79C11.7849%2014.79%2013.1049%2014.14%2014.7449%2012.84C16.0649%2011.8%2017.1249%2010.75%2017.9249%209.69C18.0249%209.57%2018.1449%209.51%2018.2849%209.51C18.4249%209.51%2018.4949%209.55%2018.4949%209.63C18.4949%209.69%2018.4449%209.79%2018.3449%209.93C17.2449%2011.39%2015.9549%2012.65%2014.4749%2013.71C12.8949%2014.83%2011.5949%2015.39%2010.5749%2015.39Z'%20fill='currentColor'/%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, Bi = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='400'%20viewBox='0%200%20400%20400'%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M%200%200%20H%20400%20V%20400%20H%200%20Z%20M%20195%2061%20L%20158%2099%20L%20400%20333%20L%20400%20259%20Z%20M%200%2075%20L%200%20149%20L%20195%20339%20L%20232%20301%20Z'%20/%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, Vi = j({
    __name: `App`,
    setup(e2) {
      let t2 = Xe(), n2 = Mt(), { generateCache: r2 } = Yt(), i2 = [
        [
          {
            label: wp.i18n.__(`Files`, `windpress`),
            icon: `lucide:folder`,
            to: t2.resolve({
              name: `files`
            })
          },
          {
            label: wp.i18n.__(`Wizard`, `windpress`),
            icon: `lucide:zap`,
            to: t2.resolve({
              name: `wizard`
            })
          },
          {
            label: wp.i18n.__(`Logs`, `windpress`),
            icon: `lucide:logs`,
            to: t2.resolve({
              name: `logs`
            })
          },
          {
            label: wp.i18n.__(`Settings`, `windpress`),
            icon: `lucide:settings`,
            to: t2.resolve({
              name: `settings`
            }),
            defaultOpen: true,
            children: [
              {
                label: wp.i18n.__(`General`, `windpress`),
                to: t2.resolve({
                  name: `settings.general`
                }),
                exact: true
              },
              {
                label: wp.i18n.__(`Performance`, `windpress`),
                to: t2.resolve({
                  name: `settings.performance`
                }),
                exact: true
              },
              {
                label: wp.i18n.__(`Integrations`, `windpress`),
                to: t2.resolve({
                  name: `settings.integrations`
                })
              }
            ]
          }
        ],
        [
          {
            label: wp.i18n.__(`Documentation`, `windpress`),
            icon: `i-lucide-book-open`,
            to: `https://wind.press/docs?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
            target: `_blank`
          },
          {
            label: wp.i18n.__(`Discussions`, `windpress`),
            icon: `lucide:messages-square`,
            to: `https://github.com/wind-press/windpress/discussions`,
            target: `_blank`
          }
        ]
      ], o2 = O(() => [
        {
          id: `links`,
          label: wp.i18n.__(`Go to`, `windpress`),
          items: i2[0].flat()
        },
        {
          id: `actions`,
          label: wp.i18n.__(`Actions`, `windpress`),
          items: [
            {
              label: wp.i18n.__(`Generate cache`, `windpress`),
              icon: `lucide:codesandbox`,
              kbds: [
                `meta`,
                `J`
              ],
              onSelect: () => {
                r2();
              }
            }
          ]
        },
        {
          id: `misc`,
          label: wp.i18n.__(`Misc`, `windpress`),
          items: [
            {
              id: `yabe-webfont`,
              label: `Yabe Webfont`,
              avatar: {
                src: Ri,
                alt: `Yabe Webfont`,
                class: `rounded-none bg-transparent`
              },
              to: `https://webfont.yabe.land/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
              target: `_blank`
            },
            {
              id: `livecanvas`,
              label: `LiveCanvas`,
              avatar: {
                src: zi,
                alt: `LiveCanvas`,
                class: `rounded-none bg-transparent [&>img]:object-contain`
              },
              to: `https://livecanvas.com/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
              target: `_blank`
            },
            {
              id: `omni-icon`,
              label: `Omni Icon`,
              avatar: {
                src: Bi,
                alt: `Omni Icon`,
                class: `rounded-none bg-transparent`
              },
              to: `https://wordpress.org/plugins/omni-icon/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
              target: `_blank`
            },
            ...i2[1].flat()
          ]
        }
      ]), s2 = localStorage.getItem(`windpress-ask-for-review-${window.windpress._version}`) ?? -1, c2 = z(s2 === -1 || s2 !== `done` && s2 !== `never` && /* @__PURE__ */ new Date() > new Date(s2)), l2 = (e3) => {
        if (localStorage.setItem(`windpress-ask-for-review-${window.windpress._version}`, e3), e3 === `done`) window.open(`https://wordpress.org/support/plugin/windpress/reviews/?filter=5/#new-post`, `_blank`);
        else if (e3 === `later`) {
          let e4 = /* @__PURE__ */ new Date();
          e4.setDate(e4.getDate() + 7), localStorage.setItem(`windpress-ask-for-review-${window.windpress._version}`, e4.toString());
        }
        c2.value = false;
      };
      return w(() => {
        c2.value && n2.add({
          title: wp.i18n.__(`WindPress will always try to make you smile.`, `windpress`),
          icon: `lucide:smile`,
          description: wp.i18n.__(`Would you mind taking a moment to leave a review on WordPress.org? It would mean a lot to us!`, `windpress`),
          duration: 0,
          close: false,
          actions: [
            {
              label: wp.i18n.__(`OK, Let's do it!`, `windpress`),
              color: `success`,
              variant: `outline`,
              block: true,
              onClick: () => {
                l2(`done`);
              }
            },
            {
              label: wp.i18n.__(`Later`, `windpress`),
              color: `neutral`,
              variant: `ghost`,
              onClick: () => {
                l2(`later`);
              }
            },
            {
              label: wp.i18n.__(`Never`, `windpress`),
              color: `error`,
              variant: `ghost`,
              onClick: () => {
                l2(`never`);
              }
            }
          ]
        });
      }), me(ge(o2.value)), (e3, t3) => {
        let n3 = Li, r3 = wi, s3 = Si, c3 = Ct, l3 = bi, u2 = yi, d2 = _(`RouterView`), f2 = Pr, p2 = Mr;
        return M(), R(te, null, {
          default: I(() => [
            a(p2, {
              toaster: {
                class: `windpress-style`
              }
            }, {
              default: I(() => [
                a(f2, {
                  storage: `local`,
                  class: `bg-(--ui-bg) text-(--ui-text) top-(--wp-admin--admin-bar--height) left-(--wp-admin--sidebar-width) right-0 bottom-0`
                }, {
                  default: I(() => [
                    a(n3, {
                      groups: o2.value,
                      placeholder: e3.i18n.__(`Type a command or search...`, `windpress`),
                      colorMode: false
                    }, null, 8, [
                      `groups`,
                      `placeholder`
                    ]),
                    a(u2, {
                      collapsible: ``,
                      resizable: ``,
                      class: `bg-(--ui-bg-elevated)/25 min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]`,
                      ui: {
                        root: `flex`,
                        footer: `lg:border-t lg:border-(--ui-border)`
                      }
                    }, {
                      header: I(({ collapsed: e4 }) => [
                        a(r3, {
                          collapsed: e4
                        }, null, 8, [
                          `collapsed`
                        ])
                      ]),
                      default: I(({ collapsed: t4 }) => [
                        a(s3, {
                          label: e3.i18n.__(`Search...`, `windpress`),
                          collapsed: t4,
                          class: `bg-transparent ring-(--ui-border)`
                        }, null, 8, [
                          `label`,
                          `collapsed`
                        ]),
                        a(c3, {
                          collapsed: t4,
                          items: i2[0],
                          orientation: `vertical`
                        }, null, 8, [
                          `collapsed`,
                          `items`
                        ]),
                        a(c3, {
                          collapsed: t4,
                          items: i2[1],
                          orientation: `vertical`,
                          class: `mt-auto`
                        }, null, 8, [
                          `collapsed`,
                          `items`
                        ])
                      ]),
                      footer: I(({ collapsed: e4 }) => [
                        a(l3, {
                          collapsed: e4
                        }, null, 8, [
                          `collapsed`
                        ])
                      ]),
                      _: 1
                    }),
                    a(d2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  }), Hi = Ye({
    history: Ze(`${window.windpress.site_meta.web_history}#/`),
    scrollBehavior(e2, t2, n2) {
      return n2 || {
        left: 0,
        top: 0
      };
    },
    routes: [
      {
        path: `/`,
        name: `home`,
        redirect: {
          name: `files`
        }
      },
      {
        path: `/files`,
        name: `files`,
        component: () => X(() => import("./File-D2rnlzi7.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([0]), import.meta.url)
      },
      {
        path: `/logs`,
        name: `logs`,
        component: () => X(() => import("./Log-BJOkFiZB.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      },
      {
        path: `/wizard`,
        name: `wizard`,
        redirect: {
          name: `wizard.theme`
        },
        component: () => X(() => import("./Wizard--ZVGNIJ3.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        children: [
          {
            path: `screens`,
            name: `wizard.screens`,
            component: () => X(() => import("./Screens-MdDFcS0F.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `colors`,
            name: `wizard.colors`,
            component: () => X(() => import("./Colors-Bt_Z8B77.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([1]), import.meta.url)
          },
          {
            path: `typography`,
            name: `wizard.typography`,
            component: () => X(() => import("./Typography-D8ou6XQk.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([2]), import.meta.url)
          },
          {
            path: `spacing`,
            name: `wizard.spacing`,
            component: () => X(() => import("./Spacing-Baz7Vm7x.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([2]), import.meta.url)
          },
          {
            path: `theme`,
            name: `wizard.theme`,
            component: () => X(() => import("./Theme-DU_NxlLT.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          }
        ]
      },
      {
        path: `/settings`,
        name: `settings`,
        redirect: {
          name: `settings.general`
        },
        component: () => X(() => import("./Settings-BL0xNMDe.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        children: [
          {
            path: `general`,
            name: `settings.general`,
            component: () => X(() => import("./General-CWRIakM_.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `performance`,
            name: `settings.performance`,
            component: () => X(() => import("./Performance-BBik9Hba.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `integrations`,
            component: () => X(() => import("./Integrations-DCwDbW5V.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url),
            children: [
              {
                path: ``,
                name: `settings.integrations`,
                component: {
                  template: `<div />`
                }
              },
              {
                path: `:integration`,
                name: `settings.integrations.detail`,
                component: () => X(() => import("./_integration_-zAHl1_XB.js").then(async (m2) => {
                  await m2.__tla;
                  return m2;
                }), [], import.meta.url)
              }
            ]
          }
        ]
      },
      {
        path: `/:pathMatch(.*)*`,
        name: `NotFound`,
        component: () => X(() => import("./NotFound-Dj1eU8uX.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      }
    ]
  }), Ui = {
    install: (e2, t2) => {
      e2.config.globalProperties.i18n = wp.i18n;
    }
  };
  async function Wi() {
    await X(() => import("./monaco-editor-7MprhI3g.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([0]), import.meta.url);
    let e2 = le(Vi), t2 = ue();
    e2.config.globalProperties.window = window, t2.use(({ store: e3 }) => {
      [
        `volume`,
        `settings`
      ].includes(e3.$id) && e3.initPull();
    }), e2.use(Hi).use(Kn).use(t2).use(Qe).use(Ui), e2.mount(`#windpress-app`), Xt();
  }
  Wi();
});
