function e(e2, t = {}) {
  let n = e2.detail.originalEvent, r = n.target;
  if (!r?.isConnected) {
    e2.preventDefault();
    return;
  }
  t.scrollable && (n.offsetX > r.clientWidth || n.offsetY > r.clientHeight) && e2.preventDefault();
}
export {
  e as t
};
