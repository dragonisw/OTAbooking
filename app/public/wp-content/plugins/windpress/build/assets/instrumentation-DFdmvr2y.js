var e = class {
  start(e2) {
    performance.mark(`${e2} (start)`);
  }
  end(e2, t) {
    performance.mark(`${e2} (end)`), performance.measure(e2, { start: `${e2} (start)`, end: `${e2} (end)`, detail: t });
  }
  hit(e2, t) {
    performance.mark(e2, { detail: t });
  }
  error(e2) {
    throw performance.mark(`(error)`, { detail: { error: `${e2}` } }), e2;
  }
};
export {
  e as t
};
