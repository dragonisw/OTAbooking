import { t as e } from "./vfs-DziqLF6T.js";
import { c as t, i as n } from "./intellisense-iY_xPBd-.js";
import "./tailwindcss-O_juf7r1.js";
import { t as r } from "./logger-BvowV9fY.js";
import { n as i } from "./constant-BV9AjptB.js";
async function a() {
  let r2 = await n(await t({ volume: e(i.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`).textContent) })), a2 = ``;
  r2.forEach((e2) => {
    a2 += `--${e2.key.substring(2)}: ${e2.value};
`;
  }), a2 = `@layer base { :root { ${a2} } }`;
  let o;
  document.head.querySelector(`style#windpress-variables`) ? o = document.head.querySelector(`style#windpress-variables`) : (o = document.createElement(`style`), o.id = `windpress-variables`, document.head.appendChild(o)), o && (o.textContent = a2);
  let s;
  i.contentWindow.document.head.querySelector(`style#windpress-variables`) ? s = i.contentWindow.document.head.querySelector(`style#windpress-variables`) : (s = i.contentWindow.document.createElement(`style`), s.id = `windpress-variables`, i.contentWindow.document.head.appendChild(s)), s && (s.textContent = a2);
}
new BroadcastChannel(`windpress`).addEventListener(`message`, async (e2) => {
  let t2 = e2.data;
  t2.source === `windpress/intellisense` && t2.task === `windpress.code-editor.saved.done` && setTimeout(() => {
    a();
  }, 1e3);
}), a(), r(`Module loaded!`, { module: `variables` });
