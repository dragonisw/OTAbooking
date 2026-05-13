import { t as e } from "./vfs-DziqLF6T.js";
import { c as t, i as n } from "./intellisense-iY_xPBd-.js";
import "./tailwindcss-O_juf7r1.js";
import { t as r } from "./logger-BvowV9fY.js";
import { t as i } from "./constant-DBJJvG33.js";
var a;
async function o() {
  a || (a = document.createElement(`style`), document.head.appendChild(a));
  let r2 = await n(await t({ volume: e(i.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`).textContent) })), o2 = `:root {
`;
  r2.forEach((e2) => {
    o2 += `  ${e2.key}: ${e2.value};
`;
  }), o2 += `}
`, a.textContent = o2;
}
new BroadcastChannel(`windpress`).addEventListener(`message`, async (e2) => {
  let t2 = e2.data;
  t2.source === `windpress/intellisense` && t2.task === `windpress.code-editor.saved.done` && setTimeout(() => {
    o();
  }, 1e3);
}), o(), r(`Module loaded!`, { module: `variables` });
