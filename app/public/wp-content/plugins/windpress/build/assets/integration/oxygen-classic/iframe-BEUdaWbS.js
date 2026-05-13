new MutationObserver(function(e2) {
  e2.forEach(function(e3) {
    if (e3.type === `attributes`) {
      let t2 = e3.attributeName;
      if (t2 !== `class` && t2 !== `plainclass`) return;
      let n2 = e3.target, r = (e3.oldValue || ``).split(/\s+/).filter((e4) => e4 !== ``), i = n2.getAttribute(t2).split(/\s+/).filter((e4) => e4 !== ``);
      t2 === `plainclass` ? (r.forEach(function(e4) {
        i.includes(e4) || n2.classList.remove(e4);
      }), i.forEach(function(e4) {
        r.includes(e4) || n2.classList.add(e4);
      })) : t2 === `class` && n2.hasAttribute(`plainclass`) && n2.getAttribute(`plainclass`).split(/\s+/).filter((e4) => e4 !== ``).forEach(function(e4) {
        i.includes(e4) || n2.classList.add(e4);
      });
    }
  });
}).observe(document.body, { attributes: true, subtree: true, attributeFilter: [`class`, `plainclass`], attributeOldValue: true }), window.addEventListener(`message`, function(t2) {
  if (t2.data?.action === `windpressoxygen-preview-class`) {
    if (t2.data.do === `remove`) n();
    else if (t2.data.do === `add`) {
      let r = document.querySelector(`[ng-attr-component-id="${t2.data.elementId}"]`);
      r && (n(), e(r, t2.data.className));
    }
  }
});
function e(e2, t2) {
  e2.setAttribute(`previewclass`, t2), e2.classList.add(t2);
}
function t(e2) {
  if (!e2.hasAttribute(`previewclass`) || e2.getAttribute(`previewclass`) === ``) return;
  let t2 = e2.getAttribute(`previewclass`);
  e2.removeAttribute(`previewclass`), !(e2.hasAttribute(`plainclass`) && e2.getAttribute(`plainclass`).split(/\s+/).filter((e3) => e3 !== ``).includes(t2)) && e2.classList.remove(t2);
}
function n() {
  document.querySelectorAll(`[ng-attr-component-id]`).forEach(function(e2) {
    t(e2);
  });
}
