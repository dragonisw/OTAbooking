import { i as e, r as t } from "../../../../lib-BuijiK-3.js";
import { t as n } from "../../../../set-Bnp0_Ia6.js";
import { t as r } from "../../../../fuse-B1xTA2op.js";
import { t as i } from "../../../../vfs-DziqLF6T.js";
import { c as a, n as o, o as s, r as c } from "../../../../intellisense-iY_xPBd-.js";
async function l(e2, t2) {
  let n2 = await o(e2, t2.split(/\s+/).filter((e3) => e3 !== `` && e3 !== `|`));
  return Array.isArray(n2) ? n2.join(` `) : n2;
}
async function u(e2, t2) {
  return (await s(e2, t2.split(/\s+/).filter((e3) => e3 !== `` && e3 !== `|`))).join(` `);
}
var d = null;
function f(e2) {
  return btoa(JSON.stringify(Object.keys(e2).sort().map((t2) => `${t2}:${e2[t2].length}`)));
}
function p() {
  d = null;
}
function m(e2) {
  return e2?.find((e3) => e3.property.includes(`color`))?.value || null;
}
function h(n2) {
  let r2 = /* @__PURE__ */ new Set(), i2 = (e2) => e2.replace(/\\([0-9a-fA-F]{1,6}) ?/g, (e3, t2) => String.fromCodePoint(parseInt(t2, 16))).replace(/\\([^\s])/g, `$1`);
  for (let a2 of Object.keys(n2)) a2.endsWith(`.css`) && e(t(n2[a2]), { visit: `Selector`, enter(t2) {
    e(t2, { visit: `ClassSelector`, enter(e2) {
      r2.add(i2(e2.name));
    } });
  } });
  return Array.from(r2).map((e2) => ({ kind: `user`, selector: e2 }));
}
function g(e2, t2, n2, i2 = false) {
  let a2 = f(e2), o2 = Date.now();
  (i2 || !d || d.volumeHash !== a2) && (d = { classLists: [...c(t2), ...h(e2)], volumeHash: a2, timestamp: o2, queryCache: /* @__PURE__ */ new Map() });
  let { classLists: s2, queryCache: l2 } = d;
  if (l2.has(n2)) return l2.get(n2);
  if (n2 === ``) {
    let e3 = s2.map((e4) => ({ value: e4.selector, color: m(e4.declarations) }));
    return l2.set(n2, e3), e3;
  }
  let u2 = n2.split(`:`), p2 = u2.slice(0, -1).join(`:`), g2 = u2.pop() || ``, _2 = ``;
  g2.startsWith(`!`) && (g2 = g2.slice(1), _2 = `!`);
  let v2 = false;
  if (g2.includes(`/`)) {
    let [e3, t3] = g2.split(`/`);
    t3 === `` ? (g2 = e3, v2 = t3) : isNaN(Number(t3)) || Number(t3) < 0 || Number(t3) > 100 ? g2 = [e3, t3].join(`/`) : (g2 = e3, v2 = parseInt(t3.toString()));
  }
  let y2 = s2.filter((e3) => e3.selector.includes(g2));
  if (v2 !== false) {
    let e3 = [], t3 = v2 === `` ? 5 : 1, n3 = v2 === `` || Number(v2) > 9 ? 0 : Math.floor((Number(v2) * 10 + 1) / 10) * 10, r2 = v2 === `` || Number(v2) > 9 ? 100 : Math.ceil((Number(v2) * 10 + 1) / 10) * 10;
    y2.forEach((i3) => {
      for (let a3 = n3; a3 <= r2; a3 += t3) e3.push({ ...i3, selector: i3.selector + `/` + a3 });
    }), y2 = e3;
  }
  let b2 = new r(y2, { keys: [`selector`], threshold: 0.4 }).search(g2).map((e3) => {
    let t3 = e3.item;
    return { value: [p2, (_2 ? `!` : ``) + t3.selector].filter(Boolean).join(`:`), color: m(t3.declarations) };
  });
  return l2.set(n2, b2), b2;
}
var _ = new BroadcastChannel(`windpress`), v = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`), y = null, b = {}, x = 0, S = Promise.resolve();
async function C() {
  let e2 = ++x, t2 = i(v?.textContent || `e30=`), n2 = JSON.stringify(b) !== JSON.stringify(t2), r2 = await a({ volume: t2 });
  e2 === x && (n2 && p(), b = t2, y = r2, _.postMessage({ source: `windpress/intellisense`, target: `any`, task: `windpress.code-editor.saved.done` }));
}
function w() {
  return S = C().catch((e2) => {
    console.warn(`Failed to load Tailwind CSS design system:`, e2);
  }), S;
}
w(), _.addEventListener(`message`, async (e2) => {
  let t2 = e2.data;
  t2.source === `windpress/dashboard` && t2.target === `windpress/intellisense` && t2.task === `windpress.code-editor.saved` && w();
}), n(window, `windpress.module.autocomplete.query`, (e2) => y ? g(b, y, e2) : []), n(window, `windpress.module.classnameToCss.generate`, async (e2) => (await S, y ? l(y, e2) : ``)), n(window, `windpress.module.classSorter.sort`, async (e2) => (await S, y ? u(y, e2) : e2));
