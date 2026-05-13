import { En as e, Ht as t, b as n, bt as r, et as i, g as a, k as o, mt as s, o as c, v as l, vn as u, y as d } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { o as f } from "./dist-BY3QSpe-.js";
import { d as p } from "./Tooltip-DkuatXWt.js";
function m(t2) {
  return a(() => e(t2) ? !!f(t2)?.closest(`form`) : true);
}
function h() {
  let e2 = u();
  return { primitiveElement: e2, currentElement: a(() => [`#text`, `#comment`].includes(e2.value?.$el.nodeName) ? e2.value?.$el.nextElementSibling : f(e2)) };
}
var g = o({ inheritAttrs: false, __name: `VisuallyHiddenInputBubble`, props: { name: { type: String, required: true }, value: { type: null, required: true }, checked: { type: Boolean, required: false, default: void 0 }, required: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, feature: { type: String, required: false, default: `fully-hidden` } }, setup(e2) {
  let n2 = e2, { primitiveElement: r2, currentElement: o2 } = h();
  return t(a(() => n2.checked ?? n2.value), (e3, t2) => {
    if (!o2.value) return;
    let n3 = o2.value, r3 = window.HTMLInputElement.prototype, i2 = Object.getOwnPropertyDescriptor(r3, `value`).set;
    if (i2 && e3 !== t2) {
      let t3 = new Event(`input`, { bubbles: true }), r4 = new Event(`change`, { bubbles: true });
      i2.call(n3, e3), n3.dispatchEvent(t3), n3.dispatchEvent(r4);
    }
  }), (e3, t2) => (s(), l(p, i({ ref_key: `primitiveElement`, ref: r2 }, { ...n2, ...e3.$attrs }, { as: `input` }), null, 16));
} }), _ = o({ inheritAttrs: false, __name: `VisuallyHiddenInput`, props: { name: { type: String, required: true }, value: { type: null, required: true }, checked: { type: Boolean, required: false, default: void 0 }, required: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, feature: { type: String, required: false, default: `fully-hidden` } }, setup(e2) {
  let t2 = e2, o2 = a(() => typeof t2.value == `object` && Array.isArray(t2.value) && t2.value.length === 0 && t2.required), u2 = a(() => typeof t2.value == `string` || typeof t2.value == `number` || typeof t2.value == `boolean` || t2.value === null || t2.value === void 0 ? [{ name: t2.name, value: t2.value }] : typeof t2.value == `object` && Array.isArray(t2.value) ? t2.value.flatMap((e3, n2) => typeof e3 == `object` ? Object.entries(e3).map(([e4, r2]) => ({ name: `${t2.name}[${n2}][${e4}]`, value: r2 })) : { name: `${t2.name}[${n2}]`, value: e3 }) : t2.value !== null && typeof t2.value == `object` && !Array.isArray(t2.value) ? Object.entries(t2.value).map(([e3, n2]) => ({ name: `${t2.name}[${e3}]`, value: n2 })) : []);
  return (e3, a2) => (s(), n(c, null, [d(` We render single input if it's required `), o2.value ? (s(), l(g, i({ key: e3.name }, { ...t2, ...e3.$attrs }, { name: e3.name, value: e3.value }), null, 16, [`name`, `value`])) : (s(true), n(c, { key: 1 }, r(u2.value, (n2) => (s(), l(g, i({ key: n2.name }, { ref_for: true }, { ...t2, ...e3.$attrs }, { name: n2.name, value: n2.value }), null, 16, [`name`, `value`]))), 128))], 2112));
} });
export {
  h as n,
  m as r,
  _ as t
};
