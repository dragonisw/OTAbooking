import { t as e } from "./logger-BvowV9fY.js";
import { t } from "./constant-DsPlz14O2.js";
async function n() {
  let n2 = t(), r = [];
  e(`finding WindPress script...`, { module: `play/observer` });
  let i = false, a = setTimeout(() => {
    i = true;
  }, 45e3);
  for (; !i; ) {
    if (r = document.querySelectorAll(`script`), r = Array.from(r).filter((e2) => {
      let t2 = e2.getAttribute(`id`);
      return t2 && (t2.startsWith(`windpress:`) || t2.startsWith(`vite-client`)) && !t2.startsWith(`windpress:integration-`);
    }), r.length > 0) {
      clearTimeout(a);
      break;
    }
    await new Promise((e2) => setTimeout(e2, 100));
  }
  if (i) {
    e(`time out! failed to find WindPress script`, { module: `play/observer` });
    return;
  }
  e(`found WindPress script`, { module: `play/observer` });
  let o = n2.contentWindow || n2, s = n2.contentDocument || o.document;
  for (; !s.head; ) await new Promise((e2) => setTimeout(e2, 300));
  e(`injecting WindPress script into the root container`, { module: `play/observer` });
  let c = s.querySelectorAll(`script`);
  Array.from(c).some((e2) => {
    let t2 = e2.getAttribute(`id`);
    return t2 && t2.startsWith(`windpress:`);
  }) ? e(`WindPress script is already injected, skipping the injection process...`, { module: `play/observer` }) : (e(`starting the root injection process...`, { module: `play/observer` }), r.forEach((e2) => {
    let t2 = e2.getAttribute(`id`);
    t2 && (t2.startsWith(`windpress:metadata`) || t2.startsWith(`vite-client`)) ? s.head.appendChild(document.createRange().createContextualFragment(e2.outerHTML)) : s.body.appendChild(document.createRange().createContextualFragment(e2.outerHTML));
  }), e(`WindPress script injected successfully`, { module: `play/observer` })), n2.dataset.windpressInjected = `true`;
}
new MutationObserver(() => {
  let e2 = t();
  e2 && !e2.dataset.windpressInjected && setTimeout(() => {
    e2.dataset.windpressInjected || n();
  }, 100);
}).observe(document, { subtree: true, childList: true }), e(`Play: observer.ts module loaded`);
