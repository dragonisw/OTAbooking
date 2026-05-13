import { J as e, tt as t, vn as n } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { M as r } from "./Button-BArxwKIq.js";
var i = /* @__PURE__ */ Symbol(`nuxt-ui.toast-max`);
function a() {
  let a2 = r(`toasts`, () => []), o = e(i, void 0), s = n(false), c = [], l = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  async function u() {
    if (!(s.value || c.length === 0)) {
      for (s.value = true; c.length > 0; ) {
        let e2 = c.shift();
        await t(), a2.value = [...a2.value, e2].slice(-(o?.value ?? 5));
      }
      s.value = false;
    }
  }
  function d(e2) {
    let t2 = { id: l(), open: true, ...e2 }, n2 = a2.value.findIndex((e3) => e3.id === t2.id);
    return n2 === -1 ? (c.push(t2), u(), t2) : (a2.value[n2] = { ...a2.value[n2], ...t2, _duplicate: (a2.value[n2]._duplicate || 0) + 1 }, t2);
  }
  function f(e2, n2) {
    let r2 = a2.value.findIndex((t2) => t2.id === e2);
    r2 !== -1 && (a2.value[r2] = { ...a2.value[r2], ...n2, duration: n2.duration, open: true, _updated: true }, t(() => {
      let t2 = a2.value.findIndex((t3) => t3.id === e2);
      t2 !== -1 && a2.value[t2]._updated && (a2.value[t2] = { ...a2.value[t2], _updated: void 0 });
    }));
  }
  function p(e2) {
    let t2 = a2.value.findIndex((t3) => t3.id === e2);
    t2 !== -1 && a2.value[t2]._updated || (t2 !== -1 && (a2.value[t2] = { ...a2.value[t2], open: false }), setTimeout(() => {
      a2.value = a2.value.filter((t3) => t3.id !== e2);
    }, 200));
  }
  function m() {
    a2.value = [];
  }
  return { toasts: a2, add: d, update: f, remove: p, clear: m };
}
export {
  a as n,
  i as t
};
