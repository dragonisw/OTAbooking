import { t as e } from "../../../../vfs-DziqLF6T.js";
import { t } from "../../../../instrumentation-DFdmvr2y.js";
import { t as n } from "../../../../build-B6Hp7_6P.js";
console.warn(`The compiler of Tailwind CSS should not be used in production. To use Tailwind CSS in production, use the cached CSS: https://wind.press/docs/guide/concepts/cache`);
var r = /* @__PURE__ */ new Set(), i = document.querySelector(`style#windpress-cached-inline-css`);
i || (i = document.createElement(`style`), i.id = `windpress-cached-inline-css`);
var a = Promise.resolve(), o = 1, s = new t(), c = ``;
async function l() {
  s.start(`Create compiler`), s.start(`Reading VFS`);
  let e2 = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`);
  if (!e2) throw Error(`Script element with id "windpress:vfs" and type "text/plain" not found.`);
  let t2 = e2?.textContent || ``;
  s.end(`Reading VFS`, { size: t2.length, changed: c !== t2 }), c !== t2 && (c = t2, s.end(`Create compiler`), r.clear());
}
async function u(t2) {
  let a2 = /* @__PURE__ */ new Set();
  s.start(`Collect classes`);
  for (let e2 of document.querySelectorAll(`[class]`)) for (let t3 of e2.classList) r.has(t3) || (r.add(t3), a2.add(t3));
  s.end(`Collect classes`, { count: a2.size }), s.start(`Build utilities`), i.textContent = await n({ entrypoint: { css: `/main.css`, config: `/tailwind.config.js` }, contents: Array.from(r), volume: e(c || `e30=`) }), s.end(`Build utilities`);
}
function d(e2) {
  async function t2() {
    if (e2 !== `full`) return;
    let t3 = o++;
    s.start(`Build #${t3} (${e2})`), e2 === `full` && await l(), s.start(`Build`), await u(e2), s.end(`Build`), s.end(`Build #${t3} (${e2})`);
  }
  a = a.then(t2).catch((e3) => s.error(e3));
}
new MutationObserver((e2) => {
  let t2 = 0;
  for (let n2 of e2) {
    for (let e3 of n2.addedNodes) e3.nodeType === 1 && e3 !== i && t2++;
    n2.type === `attributes` && t2++;
  }
  if (t2 > 0) return d(`full`);
}).observe(document.documentElement, { attributes: true, attributeFilter: [`class`], childList: true, subtree: true }), d(`full`), document.head.append(i);
