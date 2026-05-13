import { t as e } from "../../debounce-B--MR6Mm.js";
import { t } from "../../logger-BvowV9fY.js";
t(`Loading...`), (async () => {
  let n, r;
  for (t(`waiting for the rootContainer...`); !n; ) n = document.querySelector(`div#site-editor`), await new Promise((e2) => setTimeout(e2, 100));
  t(`finding WindPress script...`);
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
    t(`time out! failed to find WindPress script`);
    return;
  }
  t(`found WindPress script`);
  async function o() {
    let e2 = [], n2 = false, i2 = setTimeout(() => {
      n2 = true;
    }, 45e3);
    for (; !n2; ) {
      let t2 = document.querySelector(`iframe.edit-site-visual-editor__editor-canvas`);
      if (e2 = [...document.querySelectorAll(`div.block-editor-block-preview__container > div > div > div.block-editor-iframe__scale-container > iframe`)], t2 && e2.push(t2), e2.length > 0) {
        clearTimeout(i2);
        break;
      }
      await new Promise((e3) => setTimeout(e3, 100));
    }
    if (n2) {
      t(`time out! failed to find editor canvas`);
      return;
    }
    for (t(`found editor canvas`), t(`waiting for the canvas loader to be removed...`); document.querySelector(`div.edit-site-canvas-loader`) !== null; ) await new Promise((e3) => setTimeout(e3, 200));
    t(`canvas loader removed`), e2.forEach(async (e3) => {
      let n3 = e3.contentWindow || e3, i3 = e3.contentDocument || n3.document;
      for (; !i3.head; ) await new Promise((e4) => setTimeout(e4, 300));
      t(`injecting WindPress script into the root container`);
      let a2 = i3.querySelectorAll(`script`);
      Array.from(a2).some((e4) => {
        let t2 = e4.getAttribute(`id`);
        return t2 && t2.startsWith(`windpress:`);
      }) ? t(`WindPress script is already injected, skipping the injection process...`) : (t(`starting the root injection process...`), r.forEach((e4) => {
        i3.head.appendChild(document.createRange().createContextualFragment(e4.outerHTML));
      }));
    });
  }
  let s = e(o, 1e3);
  new MutationObserver(() => {
    s();
  }).observe(n, { subtree: true, childList: true });
})();
