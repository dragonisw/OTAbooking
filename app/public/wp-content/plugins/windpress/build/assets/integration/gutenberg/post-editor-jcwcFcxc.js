import { t as e } from "../../logger-BvowV9fY.js";
e(`Loading...`), (async () => {
  let t, n, r;
  e(`waiting for the editor-visual-editor...`);
  let i = 0;
  for (; !t && i < 300; ) {
    if (t = document.querySelector(`div.editor-visual-editor`), i++, i >= 300) {
      e(`time out! failed to find editor-visual-editor`);
      break;
    }
    await new Promise((e2) => setTimeout(e2, 100));
  }
  if (!t) {
    e(`editor-visual-editor not found, skipping the injection process...`);
    return;
  }
  if (!t.classList.contains(`is-iframed`)) {
    e(`editor-visual-editor is not iframed, starting the observer immediately...`), window.twPlayObserverStart && window.twPlayObserverStart();
    return;
  }
  for (e(`waiting for the iframeEl...`); !n; ) n = document.querySelector(`iframe[name="editor-canvas"]`), await new Promise((e2) => setTimeout(e2, 100));
  e(`finding WindPress script...`);
  let a = false, o = setTimeout(() => {
    a = true;
  }, 45e3);
  for (; !a; ) {
    if (r = document.querySelectorAll(`script`), r = Array.from(r).filter((e2) => {
      let t2 = e2.getAttribute(`id`);
      return t2 && (t2.startsWith(`windpress:`) || t2.startsWith(`vite-client`)) && !t2.startsWith(`windpress:integration-`);
    }), r.length > 0) {
      clearTimeout(o);
      break;
    }
    await new Promise((e2) => setTimeout(e2, 100));
  }
  if (a) {
    e(`time out! failed to find WindPress script`);
    return;
  }
  e(`found WindPress script`);
  let s = n.contentWindow || n, c = n.contentDocument || s.document;
  for (; !c.head; ) await new Promise((e2) => setTimeout(e2, 300));
  e(`injecting WindPress script into the root container`);
  let l = c.querySelectorAll(`script`);
  Array.from(l).some((e2) => {
    let t2 = e2.getAttribute(`id`);
    return t2 && t2.startsWith(`windpress:`);
  }) ? e(`WindPress script is already injected, skipping the injection process...`) : (e(`starting the root injection process...`), r.forEach((e2) => {
    c.head.appendChild(document.createRange().createContextualFragment(e2.outerHTML));
  }));
  let u = null;
  new MutationObserver(async (t2) => {
    let n2 = false, i2 = [], a2 = 2e3;
    for (let e2 of t2) {
      if (n2) break;
      e2.type === `childList` && (e2.removedNodes.forEach((e3) => {
        e3.nodeType === Node.ELEMENT_NODE && e3.matches(`div.components-modal__screen-overlay`) && (u = null);
      }), e2.addedNodes.forEach((e3) => {
        e3.nodeType === Node.ELEMENT_NODE && e3.matches(`body > div.components-modal__screen-overlay`) && (u = e3, n2 = true);
      }));
    }
    if (n2) {
      if (!u.querySelector(`div.block-editor-block-preview__container`)) return;
      for (e(`waiting for the patternIframes...`); i2.length === 0 && a2 > 0; ) i2 = u.querySelectorAll(`div.block-editor-block-preview__container > div > div > div.block-editor-iframe__scale-container > iframe`), a2 -= 100, await new Promise((e2) => setTimeout(e2, 100));
      if (a2 <= 0 && i2.length === 0) {
        e(`time out! failed to find the patternIframes`);
        return;
      }
      i2.forEach((t3) => {
        let n3 = (t3.contentDocument || t3.contentWindow.document).head;
        Array.from(n3.querySelectorAll(`script`)).some((e2) => {
          let t4 = e2.getAttribute(`id`);
          return t4 && t4.startsWith(`windpress:`);
        }) ? e(`WindPress script is already injected into the pattern iframe, skipping the injection process...`) : (e(`injecting WindPress script into the pattern iframe`), r.forEach((e2) => {
          n3.appendChild(document.createRange().createContextualFragment(e2.outerHTML));
        }));
      }), i2 = [];
    }
  }).observe(document.body, { childList: true, subtree: false });
  let d = null;
  new MutationObserver(async (t2) => {
    let n2 = false, i2 = [], a2 = 2e4;
    for (let e2 of t2) {
      if (n2) break;
      e2.type === `childList` && (e2.removedNodes.forEach((e3) => {
        e3.nodeType === Node.ELEMENT_NODE && e3.matches(`div.block-editor-inserter__category-panel`) && (d = null);
      }), e2.addedNodes.forEach((e3) => {
        e3.nodeType === Node.ELEMENT_NODE && e3.matches(`div.block-editor-inserter__category-panel`) && (d = e3, n2 = true);
      }));
    }
    if (n2) {
      if (!d.querySelector(`div.block-editor-block-preview__container`)) return;
      for (e(`waiting for the patternIframes...`); i2.length === 0 && a2 > 0; ) i2 = d.querySelectorAll(`div.block-editor-block-preview__container > div > div > div.block-editor-iframe__scale-container > iframe`), a2 -= 100, await new Promise((e2) => setTimeout(e2, 100));
      if (a2 <= 0 && i2.length === 0) {
        e(`time out! failed to find the patternIframes`);
        return;
      }
      i2.forEach((t3) => {
        let n3 = (t3.contentDocument || t3.contentWindow.document).head;
        Array.from(n3.querySelectorAll(`script`)).some((e2) => {
          let t4 = e2.getAttribute(`id`);
          return t4 && t4.startsWith(`windpress:`);
        }) ? e(`WindPress script is already injected into the pattern iframe, skipping the injection process...`) : (e(`injecting WindPress script into the pattern iframe`), r.forEach((e2) => {
          n3.appendChild(document.createRange().createContextualFragment(e2.outerHTML));
        }));
      }), i2 = [];
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
