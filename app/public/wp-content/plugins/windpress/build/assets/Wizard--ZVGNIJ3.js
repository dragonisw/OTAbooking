import { D as e, E as t, On as n, St as r, _ as i, b as a, g as o, gt as s, k as c, mt as l, o as u, qt as d, rt as f, tr as p, v as m, vn as h } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { n as g, t as _, y as v } from "./Button-BArxwKIq.js";
import { i as y, o as b } from "./vue-router-BY1VLoSx.js";
import { t as x } from "./Tooltip-DkuatXWt.js";
import { t as S } from "./NavigationMenu-AjThmsBG.js";
import { r as C, t as w } from "./useFileAction-D4gusgMy.js";
import { t as T } from "./settings-CIp0eD-X.js";
import { n as E, t as D } from "./adobe-css-tools-DPH8i0dL.js";
import { n as O, t as k } from "./DashboardNavbar-BDcOUCmr.js";
import { t as A } from "./DashboardSidebarCollapse-BWDknqSG.js";
var j = { color: { supportsNesting: true }, text: { supportsNesting: true }, font: { supportsNesting: true, excludePatterns: [`weight`] }, spacing: { supportsNesting: true }, breakpoint: { supportsNesting: true } }, M = { INITIAL_MARKER: `--*`, SPACING_MULTIPLIER: `--spacing` };
function N(e2, t2, n2) {
  let r2 = e2;
  for (let e3 = 0; e3 < t2.length - 1; e3++) {
    let n3 = t2[e3];
    if (!r2[n3]) r2[n3] = {};
    else if (typeof r2[n3] == `string`) {
      let e4 = r2[n3];
      r2[n3] = { $value: e4 };
    }
    r2 = r2[n3];
  }
  let i2 = t2[t2.length - 1];
  r2[i2] && typeof r2[i2] == `object` && r2[i2].$value === void 0 || r2[i2] && typeof r2[i2] == `object` && r2[i2].$value !== void 0 ? r2[i2].$value = n2 : r2[i2] = n2;
}
function P(e2, t2) {
  let n2 = [];
  for (let [r2, i2] of Object.entries(e2)) if (typeof i2 == `string`) i2 && i2.trim() !== `` && n2.push({ property: `--${t2}-${r2}`, value: i2 });
  else if (typeof i2 == `object` && i2) {
    let e3 = i2;
    if (`$value` in e3 && typeof e3.$value == `string`) {
      e3.$value && e3.$value.trim() !== `` && n2.push({ property: `--${t2}-${r2}`, value: e3.$value });
      let i3 = { ...e3 };
      if (delete i3.$value, Object.keys(i3).length > 0) {
        let e4 = P(i3, `${t2}-${r2}`);
        n2.push(...e4);
      }
    } else {
      let e4 = P(i2, `${t2}-${r2}`);
      n2.push(...e4);
    }
  }
  return n2;
}
function F(e2, t2, n2) {
  let r2 = e2.findIndex((e3) => e3.property === t2);
  if (!n2 || n2.trim() === ``) {
    r2 !== -1 && e2.splice(r2, 1);
    return;
  }
  r2 === -1 ? e2.push({ type: `declaration`, property: t2, value: n2 }) : e2[r2].value = n2;
}
function I(e2, t2) {
  let n2 = j[e2];
  return !n2 || !(`excludePatterns` in n2) ? false : n2.excludePatterns?.some((e3) => t2.startsWith(e3)) ?? false;
}
function L() {
  return { namespaces: { color: {}, text: {}, font: {}, spacing: {}, breakpoint: {} } };
}
function R(e2) {
  let t2 = L();
  t2.source = e2;
  try {
    let n2 = E(e2);
    if (t2.ast = n2, n2.stylesheet?.rules) {
      for (let e3 of n2.stylesheet.rules) if (e3.type === `rule` && e3.selectors) {
        let n3 = e3.selectors.find((e4) => e4.startsWith(`@theme`));
        if (n3) {
          if (n3 === `@theme static` && (t2.isStatic = true), e3.declarations) for (let n4 of e3.declarations) n4.type === `declaration` && n4.property.startsWith(`--`) && z(t2, n4.property, n4.value);
          break;
        }
      }
    }
  } catch (e3) {
    console.error(`Error parsing CSS:`, e3);
  }
  return t2;
}
function z(e2, t2, n2) {
  if (t2 === M.INITIAL_MARKER && n2 === `initial`) {
    e2.isInitial = true;
    return;
  }
  if (t2 === M.SPACING_MULTIPLIER) {
    e2.spacing = n2;
    return;
  }
  let r2 = t2.match(/^--([^-]+)-(.+)$/);
  if (!r2) return;
  let [, i2, a2] = r2;
  if (i2 in j && !I(i2, a2)) if (i2 === `breakpoint`) {
    let t3 = a2.split(`-`);
    N(e2.namespaces.breakpoint, t3, n2);
  } else {
    let t3 = a2.split(`-`);
    N(e2.namespaces[i2], t3, n2);
  }
}
function B(e2, t2) {
  let { namespaces: n2 } = e2;
  Object.entries(n2).forEach(([e3, n3]) => {
    !n3 || Object.keys(n3).length === 0 || P(n3, e3).forEach(({ property: e4, value: n4 }) => {
      F(t2, e4, n4);
    });
  });
}
function V(e2) {
  try {
    return e2.ast ? H(e2) : U(e2);
  } catch (e3) {
    return console.error(`Error stringifying theme:`, e3), ``;
  }
}
function H(e2) {
  let t2 = JSON.parse(JSON.stringify(e2.ast));
  if (t2.stylesheet?.rules) {
    for (let n2 of t2.stylesheet.rules) if (n2.type === `rule` && n2.selectors && n2.selectors.find((e3) => e3.startsWith(`@theme`))) {
      n2.selectors = [e2.isStatic ? `@theme static` : `@theme`];
      let t3 = [...n2.declarations || []];
      e2.isInitial ? F(t3, M.INITIAL_MARKER, `initial`) : F(t3, M.INITIAL_MARKER, ``), e2.spacing ? F(t3, M.SPACING_MULTIPLIER, e2.spacing) : F(t3, M.SPACING_MULTIPLIER, ``), B(e2, t3);
      let r2 = /* @__PURE__ */ new Set();
      e2.isInitial && r2.add(M.INITIAL_MARKER), e2.spacing && r2.add(M.SPACING_MULTIPLIER), Object.entries(e2.namespaces).forEach(([e3, t4]) => {
        t4 && Object.keys(t4).length > 0 && P(t4, e3).forEach(({ property: e4 }) => {
          r2.add(e4);
        });
      }), n2.declarations = t3.filter((e3) => {
        if (e3.type === `declaration` && (!e3.value || e3.value.trim() === ``)) return false;
        if (e3.type !== `declaration` || !e3.property.startsWith(`--`)) return true;
        let t4 = e3.property.match(/^--([^-]+)-/);
        return t4 && t4[1] in j ? r2.has(e3.property) : r2.has(e3.property) || !t4;
      });
      break;
    }
  }
  return D(t2);
}
function U(e2) {
  let t2 = [];
  e2.isInitial && t2.push({ type: `declaration`, property: M.INITIAL_MARKER, value: `initial` }), e2.spacing && t2.push({ type: `declaration`, property: M.SPACING_MULTIPLIER, value: e2.spacing }), B(e2, t2);
  let n2 = t2.filter((e3) => e3.value && e3.value.trim() !== ``);
  return D({ type: `stylesheet`, stylesheet: { rules: [{ type: `rule`, selectors: [e2.isStatic ? `@theme static` : `@theme`], declarations: n2 }] } });
}
function W() {
  return { getDefaultTheme: L, parseWizardFile: R, stringifyTheme: V };
}
var G = { class: `flex flex-col items-center justify-center h-full p-8 text-center` }, K = { class: `max-w-md mx-auto` }, q = { class: `text-2xl font-bold text-highlighted mb-4` }, J = { class: `text-dimmed mb-6 leading-relaxed` }, Y = { class: `space-y-4` }, X = { class: `text-sm text-dimmed` }, Z = c({ __name: `VersionRequirement`, setup(r2) {
  return (r3, a2) => {
    let o2 = v, s2 = _, c2 = g, u2 = O;
    return l(), m(u2, { class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]` }, { default: d(() => [i(`div`, G, [i(`div`, K, [e(o2, { name: `lucide:info`, class: `size-16 text-primary mx-auto mb-6` }), i(`h2`, q, p(n(wp.i18n.__)(`Tailwind CSS v4 Required`, `windpress`)), 1), i(`p`, J, p(n(wp.i18n.__)(`The Wizard feature is only available when using Tailwind CSS version 4. Please switch to Tailwind CSS v4 in your settings to access this feature.`, `windpress`)), 1), i(`div`, Y, [e(s2, { label: n(wp.i18n.__)(`Go to Settings`, `windpress`), color: `primary`, icon: `lucide:settings`, to: { name: `settings.general` } }, null, 8, [`label`]), i(`div`, X, [e(c2, { to: `https://wind.press/docs/guide/configuration/tailwind-version`, target: `_blank`, class: `underline hover:no-underline` }, { default: d(() => [t(p(n(wp.i18n.__)(`Learn more about Tailwind version configuration`, `windpress`)), 1)]), _: 1 })])])])])]), _: 1 });
  };
} }), Q = c({ __name: `Wizard`, setup(t2) {
  let n2 = C(), i2 = w(), c2 = W(), p2 = b(), g2 = T(), v2 = h(c2.getDefaultTheme());
  s(`theme`, v2);
  let E2 = o(() => g2.virtualOptions(`general.tailwindcss.version`, 4).value === 4);
  f(async () => {
    if (await Promise.all([n2.initPull(), g2.initPull()]), E2.value) {
      let e2 = n2.data.entries.find((e3) => e3.relative_path === `wizard.css`)?.content || ``;
      e2.includes(`@theme`) || (e2 += `
@theme {

}`), v2.value = c2.parseWizardFile(e2);
    }
  });
  function D2() {
    let e2 = c2.stringifyTheme(v2.value), t3 = n2.data.entries.find((e3) => e3.relative_path === `wizard.css`);
    t3 ? t3.content = e2 : n2.data.entries.push({ name: `wizard.css`, relative_path: `wizard.css`, content: e2, handler: `internal` }), i2.save();
  }
  let j2 = h([[{ label: wp.i18n.__(`Namespaces`, `windpress`), type: `label` }, { label: wp.i18n.__(`Screens`, `windpress`), icon: `lucide:monitor-smartphone`, to: p2.resolve({ name: `wizard.screens` }) }, { label: wp.i18n.__(`Spacing`, `windpress`), icon: `lucide:align-horizontal-space-around`, to: p2.resolve({ name: `wizard.spacing` }) }, { label: wp.i18n.__(`Typography`, `windpress`), icon: `lucide:a-large-small`, to: p2.resolve({ name: `wizard.typography` }) }, { label: wp.i18n.__(`Colors`, `windpress`), icon: `lucide:swatch-book`, to: p2.resolve({ name: `wizard.colors` }) }], [{ label: wp.i18n.__(`Theme Configuration`, `windpress`), type: `label` }, { label: wp.i18n.__(`Theme Settings`, `windpress`), icon: `lucide:settings`, to: p2.resolve({ name: `wizard.theme` }) }]]);
  return y((e2, t3, n3) => {
    E2.value && D2(), n3();
  }), (t3, n3) => {
    let i3 = A, o2 = _, s2 = x, c3 = k, f2 = S, p3 = O, h2 = r(`RouterView`);
    return E2.value ? (l(), a(u, { key: 1 }, [e(p3, { id: `wizard-1`, "default-size": 20, "min-size": 15, "max-size": 30, resizable: ``, class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]` }, { default: d(() => [e(c3, { title: t3.i18n.__(`Wizard`, `windpress`), class: `text-sm` }, { leading: d(() => [e(i3)]), right: d(() => [e(s2, { text: t3.i18n.__(`Save the changes to wizard.css file`, `windpress`) }, { default: d(() => [e(o2, { icon: `i-lucide-save`, color: `primary`, variant: `subtle`, onClick: D2 })]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`]), e(f2, { items: j2.value[1], orientation: `vertical`, class: `my-2` }, null, 8, [`items`]), e(f2, { items: j2.value[0], orientation: `vertical` }, null, 8, [`items`])]), _: 1 }), e(h2)], 64)) : (l(), m(Z, { key: 0 }));
  };
} });
export {
  Q as default
};
