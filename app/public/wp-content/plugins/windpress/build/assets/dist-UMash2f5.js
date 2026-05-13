import { n as e } from "./chunk-DcEfI0Mx.js";
function t(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, `default`) ? e2.default : e2;
}
function n() {
  throw Error(`setTimeout has not been defined`);
}
function r() {
  throw Error(`clearTimeout has not been defined`);
}
function i(e2) {
  if (f === setTimeout) return setTimeout(e2, 0);
  if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(e2, 0);
  try {
    return f(e2, 0);
  } catch {
    try {
      return f.call(null, e2, 0);
    } catch {
      return f.call(this, e2, 0);
    }
  }
}
function a(e2) {
  if (p === clearTimeout) return clearTimeout(e2);
  if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e2);
  try {
    return p(e2);
  } catch {
    try {
      return p.call(null, e2);
    } catch {
      return p.call(this, e2);
    }
  }
}
function o() {
  !h || !g || (h = false, g.length ? m = g.concat(m) : _ = -1, m.length && s());
}
function s() {
  if (!h) {
    var e2 = i(o);
    h = true;
    for (var t2 = m.length; t2; ) {
      for (g = m, m = []; ++_ < t2; ) g && g[_].run();
      _ = -1, t2 = m.length;
    }
    g = null, h = false, a(e2);
  }
}
function c(e2, t2) {
  this.fun = e2, this.array = t2;
}
function l() {
}
var u, d, f, p, m, h, g, _, v, y, b = e((() => {
  u = { exports: {} }, d = u.exports = {}, (function() {
    try {
      f = typeof setTimeout == `function` ? setTimeout : n;
    } catch {
      f = n;
    }
    try {
      p = typeof clearTimeout == `function` ? clearTimeout : r;
    } catch {
      p = r;
    }
  })(), m = [], h = false, _ = -1, d.nextTick = function(e2) {
    var t2 = Array(arguments.length - 1);
    if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
    m.push(new c(e2, t2)), m.length === 1 && !h && i(s);
  }, c.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, d.title = `browser`, d.browser = true, d.env = {}, d.argv = [], d.version = ``, d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(e2) {
    return [];
  }, d.binding = function(e2) {
    throw Error(`process.binding is not supported`);
  }, d.cwd = function() {
    return `/`;
  }, d.chdir = function(e2) {
    throw Error(`process.chdir is not supported`);
  }, d.umask = function() {
    return 0;
  }, v = u.exports, y = t(v);
}));
export {
  y as n,
  b as t
};
