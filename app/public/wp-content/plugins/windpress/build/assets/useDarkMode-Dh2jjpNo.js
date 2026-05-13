function e() {
  let [e2, t] = wp.element.useState(`system`), n = (e3) => {
    let n2 = document.querySelector(`iframe[name="editor-canvas"]`);
    if (!n2 || !n2.contentDocument) return;
    let r = n2.contentDocument.documentElement;
    r.classList.remove(`dark`, `light`), r.style.removeProperty(`color-scheme`), r.removeAttribute(`data-theme`), e3 === `light` ? (r.classList.add(`light`), r.style.colorScheme = `light`, r.setAttribute(`data-theme`, `light`)) : e3 === `dark` ? (r.classList.add(`dark`), r.style.colorScheme = `dark`, r.setAttribute(`data-theme`, `dark`)) : window.matchMedia(`(prefers-color-scheme: dark)`).matches && (r.classList.add(`dark`), r.setAttribute(`data-theme`, `dark`));
    try {
      localStorage.setItem(`windpress-theme`, e3);
    } catch {
    }
    t(e3), window.dispatchEvent(new CustomEvent(`windpress-theme-change`, { detail: { theme: e3 } }));
  };
  return wp.element.useEffect(() => {
    let e3 = `system`;
    try {
      e3 = localStorage.getItem(`windpress-theme`) || `system`;
    } catch {
    }
    t(e3);
    let r = (t2 = 0) => {
      let i2 = document.querySelector(`iframe[name="editor-canvas"]`);
      i2 && i2.contentDocument ? n(e3) : t2 < 20 && setTimeout(() => r(t2 + 1), 200);
    };
    r();
    let i = () => {
      n(e3);
    }, a = document.querySelector(`iframe[name="editor-canvas"]`);
    a && a.addEventListener(`load`, i);
    let o = window.matchMedia(`(prefers-color-scheme: dark)`), s = () => {
      (localStorage.getItem(`windpress-theme`) || `system`) === `system` && n(`system`);
    };
    o.addEventListener(`change`, s);
    let c = (e4) => {
      t(e4.detail.theme);
    };
    return window.addEventListener(`windpress-theme-change`, c), () => {
      o.removeEventListener(`change`, s), window.removeEventListener(`windpress-theme-change`, c), a && a.removeEventListener(`load`, i);
    };
  }, []), { theme: e2, applyTheme: n, cycleTheme: () => {
    n(e2 === `light` ? `dark` : e2 === `dark` ? `system` : `light`);
  } };
}
export {
  e as t
};
