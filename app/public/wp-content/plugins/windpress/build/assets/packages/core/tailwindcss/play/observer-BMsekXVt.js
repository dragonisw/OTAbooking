import { t as e } from "../../../../build-DTrDue3H.js";
import { t } from "../../../../vfs-DziqLF6T.js";
import { t as n } from "../../../../instrumentation-DFdmvr2y.js";
console.warn(`The compiler of Tailwind CSS should not be used in production. To use Tailwind CSS in production, use the cached CSS: https://wind.press/docs/guide/concepts/cache`);
var r = /* @__PURE__ */ new Set(), i = document.querySelector(`style#windpress-cached-inline-css`);
i || (i = document.createElement(`style`), i.id = `windpress-cached-inline-css`);
var a = Promise.resolve(), o = 1, s = new n(), c = ``, l;
async function u() {
  s.start(`Create compiler`), s.start(`Reading VFS`);
  let n2 = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`);
  if (!n2) throw Error(`Script element with id "windpress:vfs" and type "text/plain" not found.`);
  let i2 = n2?.textContent || ``;
  if (s.end(`Reading VFS`, { size: i2.length, changed: c !== i2 }), c !== i2) {
    c = i2, s.start(`Compile CSS`);
    try {
      l = await e({ entrypoint: `/main.css`, volume: t(c || `e30=`) });
    } finally {
      s.end(`Compile CSS`), s.end(`Create compiler`);
    }
    r.clear();
  }
}
async function d(e2) {
  if (!l) return;
  let t2 = /* @__PURE__ */ new Set();
  s.start(`Collect classes`);
  for (let e3 of document.querySelectorAll(`[class]`)) for (let n2 of e3.classList) r.has(n2) || (r.add(n2), t2.add(n2));
  s.end(`Collect classes`, { count: t2.size }), !(t2.size === 0 && e2 === `incremental`) && (s.start(`Build utilities`), i.textContent = l.build(Array.from(t2)), s.end(`Build utilities`));
}
function f(e2) {
  async function t2() {
    if (!l && e2 !== `full`) return;
    let t3 = o++;
    s.start(`Build #${t3} (${e2})`), e2 === `full` && await u(), s.start(`Build`), await d(e2), s.end(`Build`), s.end(`Build #${t3} (${e2})`);
  }
  a = a.then(t2).catch((e3) => s.error(e3));
}
var p = new MutationObserver(() => f(`full`));
function m(e2) {
  p.observe(e2, { attributes: true, attributeFilter: [`type`, `src`], characterData: true, subtree: true, childList: true });
}
var h = new MutationObserver((e2) => {
  let t2 = 0, n2 = 0;
  for (let r2 of e2) {
    for (let e3 of r2.addedNodes) e3.nodeType === 1 && e3 !== i && n2++;
    r2.type === `attributes` && n2++, r2.target instanceof HTMLScriptElement && r2.target.id === `windpress:vfs` && r2.target.type === `text/plain` && (m(r2.target), t2++);
  }
  if (t2 > 0) return f(`full`);
  if (n2 > 0) return f(`incremental`);
});
function g() {
  h.observe(document.documentElement, { attributes: true, attributeFilter: [`class`], childList: true, subtree: true }), f(`full`), document.head.append(i);
}
window.__windpress__disable_playObserver ? console.warn(`Play Observer is disabled.`) : g(), new BroadcastChannel(`windpress`).addEventListener(`message`, async (e2) => {
  let t2 = e2.data;
  if (t2.source === `windpress/dashboard` && t2.target === `windpress/observer` && t2.task === `windpress.code-editor.saved`) {
    let e3 = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`);
    e3 && (e3.textContent = t2.payload.volume);
  }
});
try {
  window.twPlayObserver = h, window.twPlayObserverStart = () => {
    g(), console.warn(`Play Observer started manually.`);
  };
} catch {
}
