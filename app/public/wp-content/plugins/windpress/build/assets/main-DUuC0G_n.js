import { t as e } from "./vfs-DziqLF6T.js";
import { c as t, i as n } from "./intellisense-iY_xPBd-.js";
import "./tailwindcss-O_juf7r1.js";
import { t as r } from "./logger-BvowV9fY.js";
import { n as i } from "./constant-BIDASZgN.js";
function a(e2, t2 = null) {
  let n2 = typeof t2 == `number` ? t2.toString().length : 8;
  return (`0`.repeat(n2) + e2).slice(-n2);
}
(async function() {
  let r2 = e(i.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`).textContent);
  window.Builderius.API.monaco.languages.registerCompletionItemProvider(`builderius-css`, { async provideCompletionItems(e2, i2) {
    let o = e2.getWordUntilPosition(i2);
    return { suggestions: n(await t({ volume: r2 })).map((e3) => ({ kind: e3.key.includes(`--color`) ? window.Builderius.API.monaco.languages.CompletionItemKind.Color : window.Builderius.API.monaco.languages.CompletionItemKind.Variable, label: e3.key, insertText: e3.key, detail: e3.value, range: { startLineNumber: i2.lineNumber, startColumn: o.startColumn, endLineNumber: i2.lineNumber, endColumn: o.endColumn }, sortText: a(e3.index) })) };
  } });
})(), new BroadcastChannel(`windpress`).addEventListener(`message`, async (e2) => {
  let t2 = e2.data;
  t2.source === `windpress/intellisense` && t2.task === `windpress.code-editor.saved.done` && setTimeout(() => {
  }, 1e3);
}), r(`Module loaded!`, { module: `generate-cache` });
