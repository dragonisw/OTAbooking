import { a as e, n as t, o as n, r, t as i } from "./chunk-DcEfI0Mx.js";
import { n as a, t as o } from "./dist-CFDaZ429.js";
import { n as s, t as c } from "./dist-CansbW7y.js";
import { n as l, t as u } from "./dist-UMash2f5.js";
import { t as d } from "./path-browserify-4cnqpSC3.js";
var f = r({ __addDisposableResource: () => B, __assign: () => W, __asyncDelegator: () => M, __asyncGenerator: () => j, __asyncValues: () => N, __await: () => A, __awaiter: () => S, __classPrivateFieldGet: () => L, __classPrivateFieldIn: () => z, __classPrivateFieldSet: () => R, __createBinding: () => G, __decorate: () => h, __disposeResources: () => V, __esDecorate: () => _, __exportStar: () => w, __extends: () => p, __generator: () => C, __importDefault: () => I, __importStar: () => F, __makeTemplateObject: () => P, __metadata: () => x, __param: () => g, __propKey: () => y, __read: () => E, __rest: () => m, __rewriteRelativeImportExtension: () => H, __runInitializers: () => v, __setFunctionName: () => b, __spread: () => D, __spreadArray: () => k, __spreadArrays: () => O, __values: () => T, default: () => q });
function p(e2, t2) {
  if (typeof t2 != `function` && t2 !== null) throw TypeError(`Class extends value ` + String(t2) + ` is not a constructor or null`);
  U(e2, t2);
  function n2() {
    this.constructor = e2;
  }
  e2.prototype = t2 === null ? Object.create(t2) : (n2.prototype = t2.prototype, new n2());
}
function m(e2, t2) {
  var n2 = {};
  for (var r2 in e2) Object.prototype.hasOwnProperty.call(e2, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e2[r2]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == `function`) for (var i2 = 0, r2 = Object.getOwnPropertySymbols(e2); i2 < r2.length; i2++) t2.indexOf(r2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r2[i2]) && (n2[r2[i2]] = e2[r2[i2]]);
  return n2;
}
function h(e2, t2, n2, r2) {
  var i2 = arguments.length, a2 = i2 < 3 ? t2 : r2 === null ? r2 = Object.getOwnPropertyDescriptor(t2, n2) : r2, o2;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`) a2 = Reflect.decorate(e2, t2, n2, r2);
  else for (var s2 = e2.length - 1; s2 >= 0; s2--) (o2 = e2[s2]) && (a2 = (i2 < 3 ? o2(a2) : i2 > 3 ? o2(t2, n2, a2) : o2(t2, n2)) || a2);
  return i2 > 3 && a2 && Object.defineProperty(t2, n2, a2), a2;
}
function g(e2, t2) {
  return function(n2, r2) {
    t2(n2, r2, e2);
  };
}
function _(e2, t2, n2, r2, i2, a2) {
  function o2(e3) {
    if (e3 !== void 0 && typeof e3 != `function`) throw TypeError(`Function expected`);
    return e3;
  }
  for (var s2 = r2.kind, c2 = s2 === `getter` ? `get` : s2 === `setter` ? `set` : `value`, l2 = !t2 && e2 ? r2.static ? e2 : e2.prototype : null, u2 = t2 || (l2 ? Object.getOwnPropertyDescriptor(l2, r2.name) : {}), d2, f2 = false, p2 = n2.length - 1; p2 >= 0; p2--) {
    var m2 = {};
    for (var h2 in r2) m2[h2] = h2 === `access` ? {} : r2[h2];
    for (var h2 in r2.access) m2.access[h2] = r2.access[h2];
    m2.addInitializer = function(e3) {
      if (f2) throw TypeError(`Cannot add initializers after decoration has completed`);
      a2.push(o2(e3 || null));
    };
    var g2 = (0, n2[p2])(s2 === `accessor` ? { get: u2.get, set: u2.set } : u2[c2], m2);
    if (s2 === `accessor`) {
      if (g2 === void 0) continue;
      if (typeof g2 != `object` || !g2) throw TypeError(`Object expected`);
      (d2 = o2(g2.get)) && (u2.get = d2), (d2 = o2(g2.set)) && (u2.set = d2), (d2 = o2(g2.init)) && i2.unshift(d2);
    } else (d2 = o2(g2)) && (s2 === `field` ? i2.unshift(d2) : u2[c2] = d2);
  }
  l2 && Object.defineProperty(l2, r2.name, u2), f2 = true;
}
function v(e2, t2, n2) {
  for (var r2 = arguments.length > 2, i2 = 0; i2 < t2.length; i2++) n2 = r2 ? t2[i2].call(e2, n2) : t2[i2].call(e2);
  return r2 ? n2 : void 0;
}
function y(e2) {
  return typeof e2 == `symbol` ? e2 : `${e2}`;
}
function b(e2, t2, n2) {
  return typeof t2 == `symbol` && (t2 = t2.description ? `[${t2.description}]` : ``), Object.defineProperty(e2, `name`, { configurable: true, value: n2 ? `${n2} ${t2}` : t2 });
}
function x(e2, t2) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`) return Reflect.metadata(e2, t2);
}
function S(e2, t2, n2, r2) {
  function i2(e3) {
    return e3 instanceof n2 ? e3 : new n2(function(t3) {
      t3(e3);
    });
  }
  return new (n2 || (n2 = Promise))(function(n3, a2) {
    function o2(e3) {
      try {
        c2(r2.next(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function s2(e3) {
      try {
        c2(r2.throw(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function c2(e3) {
      e3.done ? n3(e3.value) : i2(e3.value).then(o2, s2);
    }
    c2((r2 = r2.apply(e2, t2 || [])).next());
  });
}
function C(e2, t2) {
  var n2 = { label: 0, sent: function() {
    if (a2[0] & 1) throw a2[1];
    return a2[1];
  }, trys: [], ops: [] }, r2, i2, a2, o2 = Object.create((typeof Iterator == `function` ? Iterator : Object).prototype);
  return o2.next = s2(0), o2.throw = s2(1), o2.return = s2(2), typeof Symbol == `function` && (o2[Symbol.iterator] = function() {
    return this;
  }), o2;
  function s2(e3) {
    return function(t3) {
      return c2([e3, t3]);
    };
  }
  function c2(s3) {
    if (r2) throw TypeError(`Generator is already executing.`);
    for (; o2 && (o2 = 0, s3[0] && (n2 = 0)), n2; ) try {
      if (r2 = 1, i2 && (a2 = s3[0] & 2 ? i2.return : s3[0] ? i2.throw || ((a2 = i2.return) && a2.call(i2), 0) : i2.next) && !(a2 = a2.call(i2, s3[1])).done) return a2;
      switch (i2 = 0, a2 && (s3 = [s3[0] & 2, a2.value]), s3[0]) {
        case 0:
        case 1:
          a2 = s3;
          break;
        case 4:
          return n2.label++, { value: s3[1], done: false };
        case 5:
          n2.label++, i2 = s3[1], s3 = [0];
          continue;
        case 7:
          s3 = n2.ops.pop(), n2.trys.pop();
          continue;
        default:
          if ((a2 = n2.trys, !(a2 = a2.length > 0 && a2[a2.length - 1])) && (s3[0] === 6 || s3[0] === 2)) {
            n2 = 0;
            continue;
          }
          if (s3[0] === 3 && (!a2 || s3[1] > a2[0] && s3[1] < a2[3])) {
            n2.label = s3[1];
            break;
          }
          if (s3[0] === 6 && n2.label < a2[1]) {
            n2.label = a2[1], a2 = s3;
            break;
          }
          if (a2 && n2.label < a2[2]) {
            n2.label = a2[2], n2.ops.push(s3);
            break;
          }
          a2[2] && n2.ops.pop(), n2.trys.pop();
          continue;
      }
      s3 = t2.call(e2, n2);
    } catch (e3) {
      s3 = [6, e3], i2 = 0;
    } finally {
      r2 = a2 = 0;
    }
    if (s3[0] & 5) throw s3[1];
    return { value: s3[0] ? s3[1] : void 0, done: true };
  }
}
function w(e2, t2) {
  for (var n2 in e2) n2 !== `default` && !Object.prototype.hasOwnProperty.call(t2, n2) && G(t2, e2, n2);
}
function T(e2) {
  var t2 = typeof Symbol == `function` && Symbol.iterator, n2 = t2 && e2[t2], r2 = 0;
  if (n2) return n2.call(e2);
  if (e2 && typeof e2.length == `number`) return { next: function() {
    return e2 && r2 >= e2.length && (e2 = void 0), { value: e2 && e2[r2++], done: !e2 };
  } };
  throw TypeError(t2 ? `Object is not iterable.` : `Symbol.iterator is not defined.`);
}
function E(e2, t2) {
  var n2 = typeof Symbol == `function` && e2[Symbol.iterator];
  if (!n2) return e2;
  var r2 = n2.call(e2), i2, a2 = [], o2;
  try {
    for (; (t2 === void 0 || t2-- > 0) && !(i2 = r2.next()).done; ) a2.push(i2.value);
  } catch (e3) {
    o2 = { error: e3 };
  } finally {
    try {
      i2 && !i2.done && (n2 = r2.return) && n2.call(r2);
    } finally {
      if (o2) throw o2.error;
    }
  }
  return a2;
}
function D() {
  for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2 = e2.concat(E(arguments[t2]));
  return e2;
}
function O() {
  for (var e2 = 0, t2 = 0, n2 = arguments.length; t2 < n2; t2++) e2 += arguments[t2].length;
  for (var r2 = Array(e2), i2 = 0, t2 = 0; t2 < n2; t2++) for (var a2 = arguments[t2], o2 = 0, s2 = a2.length; o2 < s2; o2++, i2++) r2[i2] = a2[o2];
  return r2;
}
function k(e2, t2, n2) {
  if (n2 || arguments.length === 2) for (var r2 = 0, i2 = t2.length, a2; r2 < i2; r2++) (a2 || !(r2 in t2)) && (a2 || (a2 = Array.prototype.slice.call(t2, 0, r2)), a2[r2] = t2[r2]);
  return e2.concat(a2 || Array.prototype.slice.call(t2));
}
function A(e2) {
  return this instanceof A ? (this.v = e2, this) : new A(e2);
}
function j(e2, t2, n2) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var r2 = n2.apply(e2, t2 || []), i2, a2 = [];
  return i2 = Object.create((typeof AsyncIterator == `function` ? AsyncIterator : Object).prototype), s2(`next`), s2(`throw`), s2(`return`, o2), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function o2(e3) {
    return function(t3) {
      return Promise.resolve(t3).then(e3, d2);
    };
  }
  function s2(e3, t3) {
    r2[e3] && (i2[e3] = function(t4) {
      return new Promise(function(n3, r3) {
        a2.push([e3, t4, n3, r3]) > 1 || c2(e3, t4);
      });
    }, t3 && (i2[e3] = t3(i2[e3])));
  }
  function c2(e3, t3) {
    try {
      l2(r2[e3](t3));
    } catch (e4) {
      f2(a2[0][3], e4);
    }
  }
  function l2(e3) {
    e3.value instanceof A ? Promise.resolve(e3.value.v).then(u2, d2) : f2(a2[0][2], e3);
  }
  function u2(e3) {
    c2(`next`, e3);
  }
  function d2(e3) {
    c2(`throw`, e3);
  }
  function f2(e3, t3) {
    e3(t3), a2.shift(), a2.length && c2(a2[0][0], a2[0][1]);
  }
}
function M(e2) {
  var t2, n2;
  return t2 = {}, r2(`next`), r2(`throw`, function(e3) {
    throw e3;
  }), r2(`return`), t2[Symbol.iterator] = function() {
    return this;
  }, t2;
  function r2(r3, i2) {
    t2[r3] = e2[r3] ? function(t3) {
      return (n2 = !n2) ? { value: A(e2[r3](t3)), done: false } : i2 ? i2(t3) : t3;
    } : i2;
  }
}
function N(e2) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t2 = e2[Symbol.asyncIterator], n2;
  return t2 ? t2.call(e2) : (e2 = typeof T == `function` ? T(e2) : e2[Symbol.iterator](), n2 = {}, r2(`next`), r2(`throw`), r2(`return`), n2[Symbol.asyncIterator] = function() {
    return this;
  }, n2);
  function r2(t3) {
    n2[t3] = e2[t3] && function(n3) {
      return new Promise(function(r3, a2) {
        n3 = e2[t3](n3), i2(r3, a2, n3.done, n3.value);
      });
    };
  }
  function i2(e3, t3, n3, r3) {
    Promise.resolve(r3).then(function(t4) {
      e3({ value: t4, done: n3 });
    }, t3);
  }
}
function P(e2, t2) {
  return Object.defineProperty ? Object.defineProperty(e2, `raw`, { value: t2 }) : e2.raw = t2, e2;
}
function F(e2) {
  if (e2 && e2.__esModule) return e2;
  var t2 = {};
  if (e2 != null) for (var n2 = K(e2), r2 = 0; r2 < n2.length; r2++) n2[r2] !== `default` && G(t2, e2, n2[r2]);
  return ee(t2, e2), t2;
}
function I(e2) {
  return e2 && e2.__esModule ? e2 : { default: e2 };
}
function L(e2, t2, n2, r2) {
  if (n2 === `a` && !r2) throw TypeError(`Private accessor was defined without a getter`);
  if (typeof t2 == `function` ? e2 !== t2 || !r2 : !t2.has(e2)) throw TypeError(`Cannot read private member from an object whose class did not declare it`);
  return n2 === `m` ? r2 : n2 === `a` ? r2.call(e2) : r2 ? r2.value : t2.get(e2);
}
function R(e2, t2, n2, r2, i2) {
  if (r2 === `m`) throw TypeError(`Private method is not writable`);
  if (r2 === `a` && !i2) throw TypeError(`Private accessor was defined without a setter`);
  if (typeof t2 == `function` ? e2 !== t2 || !i2 : !t2.has(e2)) throw TypeError(`Cannot write private member to an object whose class did not declare it`);
  return r2 === `a` ? i2.call(e2, n2) : i2 ? i2.value = n2 : t2.set(e2, n2), n2;
}
function z(e2, t2) {
  if (t2 === null || typeof t2 != `object` && typeof t2 != `function`) throw TypeError(`Cannot use 'in' operator on non-object`);
  return typeof e2 == `function` ? t2 === e2 : e2.has(t2);
}
function B(e2, t2, n2) {
  if (t2 != null) {
    if (typeof t2 != `object` && typeof t2 != `function`) throw TypeError(`Object expected.`);
    var r2, i2;
    if (n2) {
      if (!Symbol.asyncDispose) throw TypeError(`Symbol.asyncDispose is not defined.`);
      r2 = t2[Symbol.asyncDispose];
    }
    if (r2 === void 0) {
      if (!Symbol.dispose) throw TypeError(`Symbol.dispose is not defined.`);
      r2 = t2[Symbol.dispose], n2 && (i2 = r2);
    }
    if (typeof r2 != `function`) throw TypeError(`Object not disposable.`);
    i2 && (r2 = function() {
      try {
        i2.call(this);
      } catch (e3) {
        return Promise.reject(e3);
      }
    }), e2.stack.push({ value: t2, dispose: r2, async: n2 });
  } else n2 && e2.stack.push({ async: true });
  return t2;
}
function V(e2) {
  function t2(t3) {
    e2.error = e2.hasError ? new te(t3, e2.error, `An error was suppressed during disposal.`) : t3, e2.hasError = true;
  }
  var n2, r2 = 0;
  function i2() {
    for (; n2 = e2.stack.pop(); ) try {
      if (!n2.async && r2 === 1) return r2 = 0, e2.stack.push(n2), Promise.resolve().then(i2);
      if (n2.dispose) {
        var a2 = n2.dispose.call(n2.value);
        if (n2.async) return r2 |= 2, Promise.resolve(a2).then(i2, function(e3) {
          return t2(e3), i2();
        });
      } else r2 |= 1;
    } catch (e3) {
      t2(e3);
    }
    if (r2 === 1) return e2.hasError ? Promise.reject(e2.error) : Promise.resolve();
    if (e2.hasError) throw e2.error;
  }
  return i2();
}
function H(e2, t2) {
  return typeof e2 == `string` && /^\.\.?\//.test(e2) ? e2.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e3, n2, r2, i2, a2) {
    return n2 ? t2 ? `.jsx` : `.js` : r2 && (!i2 || !a2) ? e3 : r2 + i2 + `.` + a2.toLowerCase() + `js`;
  }) : e2;
}
var U, W, G, ee, K, te, q, J = t((() => {
  U = function(e2, t2) {
    return U = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
      e3.__proto__ = t3;
    } || function(e3, t3) {
      for (var n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
    }, U(e2, t2);
  }, W = function() {
    return W = Object.assign || function(e2) {
      for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var i2 in t2 = arguments[n2], t2) Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
      return e2;
    }, W.apply(this, arguments);
  }, G = Object.create ? (function(e2, t2, n2, r2) {
    r2 === void 0 && (r2 = n2);
    var i2 = Object.getOwnPropertyDescriptor(t2, n2);
    (!i2 || (`get` in i2 ? !t2.__esModule : i2.writable || i2.configurable)) && (i2 = { enumerable: true, get: function() {
      return t2[n2];
    } }), Object.defineProperty(e2, r2, i2);
  }) : (function(e2, t2, n2, r2) {
    r2 === void 0 && (r2 = n2), e2[r2] = t2[n2];
  }), ee = Object.create ? (function(e2, t2) {
    Object.defineProperty(e2, `default`, { enumerable: true, value: t2 });
  }) : function(e2, t2) {
    e2.default = t2;
  }, K = function(e2) {
    return K = Object.getOwnPropertyNames || function(e3) {
      var t2 = [];
      for (var n2 in e3) Object.prototype.hasOwnProperty.call(e3, n2) && (t2[t2.length] = n2);
      return t2;
    }, K(e2);
  }, te = typeof SuppressedError == `function` ? SuppressedError : function(e2, t2, n2) {
    var r2 = Error(n2);
    return r2.name = `SuppressedError`, r2.error = e2, r2.suppressed = t2, r2;
  }, q = { __extends: p, __assign: W, __rest: m, __decorate: h, __param: g, __esDecorate: _, __runInitializers: v, __propKey: y, __setFunctionName: b, __metadata: x, __awaiter: S, __generator: C, __createBinding: G, __exportStar: w, __values: T, __read: E, __spread: D, __spreadArrays: O, __spreadArray: k, __await: A, __asyncGenerator: j, __asyncDelegator: M, __asyncValues: N, __makeTemplateObject: P, __importStar: F, __importDefault: I, __classPrivateFieldGet: L, __classPrivateFieldSet: R, __classPrivateFieldIn: z, __addDisposableResource: B, __disposeResources: V, __rewriteRelativeImportExtension: H };
})), Y = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.basename = e2.isAbsolute = e2.normalize = e2.dirname = e2.relative = e2.join = e2.posix = e2.sep = e2.resolve = void 0;
  var t2 = d();
  Object.defineProperty(e2, `resolve`, { enumerable: true, get: function() {
    return t2.resolve;
  } }), Object.defineProperty(e2, `sep`, { enumerable: true, get: function() {
    return t2.sep;
  } }), Object.defineProperty(e2, `posix`, { enumerable: true, get: function() {
    return t2.posix;
  } }), Object.defineProperty(e2, `join`, { enumerable: true, get: function() {
    return t2.join;
  } }), Object.defineProperty(e2, `relative`, { enumerable: true, get: function() {
    return t2.relative;
  } }), Object.defineProperty(e2, `dirname`, { enumerable: true, get: function() {
    return t2.dirname;
  } }), Object.defineProperty(e2, `normalize`, { enumerable: true, get: function() {
    return t2.normalize;
  } }), Object.defineProperty(e2, `isAbsolute`, { enumerable: true, get: function() {
    return t2.isAbsolute;
  } }), Object.defineProperty(e2, `basename`, { enumerable: true, get: function() {
    return t2.basename;
  } });
})), ne = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true });
})), re = i(((e2) => {
  Object.defineProperties(e2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: `Module` } });
  var t2 = {}, n2 = {};
  n2.byteLength = u2, n2.toByteArray = f2, n2.fromByteArray = h2;
  for (var r2 = [], i2 = [], a2 = typeof Uint8Array < `u` ? Uint8Array : Array, o2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, s2 = 0, c2 = o2.length; s2 < c2; ++s2) r2[s2] = o2[s2], i2[o2.charCodeAt(s2)] = s2;
  i2[45] = 62, i2[95] = 63;
  function l2(e3) {
    var t3 = e3.length;
    if (t3 % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
    var n3 = e3.indexOf(`=`);
    n3 === -1 && (n3 = t3);
    var r3 = n3 === t3 ? 0 : 4 - n3 % 4;
    return [n3, r3];
  }
  function u2(e3) {
    var t3 = l2(e3), n3 = t3[0], r3 = t3[1];
    return (n3 + r3) * 3 / 4 - r3;
  }
  function d2(e3, t3, n3) {
    return (t3 + n3) * 3 / 4 - n3;
  }
  function f2(e3) {
    var t3, n3 = l2(e3), r3 = n3[0], o3 = n3[1], s3 = new a2(d2(e3, r3, o3)), c3 = 0, u3 = o3 > 0 ? r3 - 4 : r3, f3;
    for (f3 = 0; f3 < u3; f3 += 4) t3 = i2[e3.charCodeAt(f3)] << 18 | i2[e3.charCodeAt(f3 + 1)] << 12 | i2[e3.charCodeAt(f3 + 2)] << 6 | i2[e3.charCodeAt(f3 + 3)], s3[c3++] = t3 >> 16 & 255, s3[c3++] = t3 >> 8 & 255, s3[c3++] = t3 & 255;
    return o3 === 2 && (t3 = i2[e3.charCodeAt(f3)] << 2 | i2[e3.charCodeAt(f3 + 1)] >> 4, s3[c3++] = t3 & 255), o3 === 1 && (t3 = i2[e3.charCodeAt(f3)] << 10 | i2[e3.charCodeAt(f3 + 1)] << 4 | i2[e3.charCodeAt(f3 + 2)] >> 2, s3[c3++] = t3 >> 8 & 255, s3[c3++] = t3 & 255), s3;
  }
  function p2(e3) {
    return r2[e3 >> 18 & 63] + r2[e3 >> 12 & 63] + r2[e3 >> 6 & 63] + r2[e3 & 63];
  }
  function m2(e3, t3, n3) {
    for (var r3, i3 = [], a3 = t3; a3 < n3; a3 += 3) r3 = (e3[a3] << 16 & 16711680) + (e3[a3 + 1] << 8 & 65280) + (e3[a3 + 2] & 255), i3.push(p2(r3));
    return i3.join(``);
  }
  function h2(e3) {
    for (var t3, n3 = e3.length, i3 = n3 % 3, a3 = [], o3 = 16383, s3 = 0, c3 = n3 - i3; s3 < c3; s3 += o3) a3.push(m2(e3, s3, s3 + o3 > c3 ? c3 : s3 + o3));
    return i3 === 1 ? (t3 = e3[n3 - 1], a3.push(r2[t3 >> 2] + r2[t3 << 4 & 63] + `==`)) : i3 === 2 && (t3 = (e3[n3 - 2] << 8) + e3[n3 - 1], a3.push(r2[t3 >> 10] + r2[t3 >> 4 & 63] + r2[t3 << 2 & 63] + `=`)), a3.join(``);
  }
  var g2 = {};
  g2.read = function(e3, t3, n3, r3, i3) {
    var a3, o3, s3 = i3 * 8 - r3 - 1, c3 = (1 << s3) - 1, l3 = c3 >> 1, u3 = -7, d3 = n3 ? i3 - 1 : 0, f3 = n3 ? -1 : 1, p3 = e3[t3 + d3];
    for (d3 += f3, a3 = p3 & (1 << -u3) - 1, p3 >>= -u3, u3 += s3; u3 > 0; a3 = a3 * 256 + e3[t3 + d3], d3 += f3, u3 -= 8) ;
    for (o3 = a3 & (1 << -u3) - 1, a3 >>= -u3, u3 += r3; u3 > 0; o3 = o3 * 256 + e3[t3 + d3], d3 += f3, u3 -= 8) ;
    if (a3 === 0) a3 = 1 - l3;
    else if (a3 === c3) return o3 ? NaN : (p3 ? -1 : 1) * (1 / 0);
    else o3 += 2 ** r3, a3 -= l3;
    return (p3 ? -1 : 1) * o3 * 2 ** (a3 - r3);
  }, g2.write = function(e3, t3, n3, r3, i3, a3) {
    var o3, s3, c3, l3 = a3 * 8 - i3 - 1, u3 = (1 << l3) - 1, d3 = u3 >> 1, f3 = i3 === 23 ? 2 ** -24 - 2 ** -77 : 0, p3 = r3 ? 0 : a3 - 1, m3 = r3 ? 1 : -1, h3 = +(t3 < 0 || t3 === 0 && 1 / t3 < 0);
    for (t3 = Math.abs(t3), isNaN(t3) || t3 === 1 / 0 ? (s3 = +!!isNaN(t3), o3 = u3) : (o3 = Math.floor(Math.log(t3) / Math.LN2), t3 * (c3 = 2 ** -o3) < 1 && (o3--, c3 *= 2), o3 + d3 >= 1 ? t3 += f3 / c3 : t3 += f3 * 2 ** (1 - d3), t3 * c3 >= 2 && (o3++, c3 /= 2), o3 + d3 >= u3 ? (s3 = 0, o3 = u3) : o3 + d3 >= 1 ? (s3 = (t3 * c3 - 1) * 2 ** i3, o3 += d3) : (s3 = t3 * 2 ** (d3 - 1) * 2 ** i3, o3 = 0)); i3 >= 8; e3[n3 + p3] = s3 & 255, p3 += m3, s3 /= 256, i3 -= 8) ;
    for (o3 = o3 << i3 | s3, l3 += i3; l3 > 0; e3[n3 + p3] = o3 & 255, p3 += m3, o3 /= 256, l3 -= 8) ;
    e3[n3 + p3 - m3] |= h3 * 128;
  }, (function(e3) {
    let t3 = n2, r3 = g2, i3 = typeof Symbol == `function` && typeof Symbol.for == `function` ? /* @__PURE__ */ Symbol.for(`nodejs.util.inspect.custom`) : null;
    e3.Buffer = d3, e3.SlowBuffer = C2, e3.INSPECT_MAX_BYTES = 50;
    let a3 = 2147483647;
    e3.kMaxLength = a3;
    let { Uint8Array: o3, ArrayBuffer: s3, SharedArrayBuffer: c3 } = globalThis;
    d3.TYPED_ARRAY_SUPPORT = l3(), !d3.TYPED_ARRAY_SUPPORT && typeof console < `u` && typeof console.error == `function` && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function l3() {
      try {
        let e4 = new o3(1), t4 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t4, o3.prototype), Object.setPrototypeOf(e4, t4), e4.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(d3.prototype, `parent`, { enumerable: true, get: function() {
      if (d3.isBuffer(this)) return this.buffer;
    } }), Object.defineProperty(d3.prototype, `offset`, { enumerable: true, get: function() {
      if (d3.isBuffer(this)) return this.byteOffset;
    } });
    function u3(e4) {
      if (e4 > a3) throw RangeError(`The value "` + e4 + `" is invalid for option "size"`);
      let t4 = new o3(e4);
      return Object.setPrototypeOf(t4, d3.prototype), t4;
    }
    function d3(e4, t4, n3) {
      if (typeof e4 == `number`) {
        if (typeof t4 == `string`) throw TypeError(`The "string" argument must be of type string. Received type number`);
        return h3(e4);
      }
      return f3(e4, t4, n3);
    }
    d3.poolSize = 8192;
    function f3(e4, t4, n3) {
      if (typeof e4 == `string`) return _3(e4, t4);
      if (s3.isView(e4)) return y2(e4);
      if (e4 == null) throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e4);
      if (de2(e4, s3) || e4 && de2(e4.buffer, s3) || c3 !== void 0 && (de2(e4, c3) || e4 && de2(e4.buffer, c3))) return b2(e4, t4, n3);
      if (typeof e4 == `number`) throw TypeError(`The "value" argument must not be of type number. Received type number`);
      let r4 = e4.valueOf && e4.valueOf();
      if (r4 != null && r4 !== e4) return d3.from(r4, t4, n3);
      let i4 = x2(e4);
      if (i4) return i4;
      if (typeof Symbol < `u` && Symbol.toPrimitive != null && typeof e4[Symbol.toPrimitive] == `function`) return d3.from(e4[Symbol.toPrimitive](`string`), t4, n3);
      throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e4);
    }
    d3.from = function(e4, t4, n3) {
      return f3(e4, t4, n3);
    }, Object.setPrototypeOf(d3.prototype, o3.prototype), Object.setPrototypeOf(d3, o3);
    function p3(e4) {
      if (typeof e4 != `number`) throw TypeError(`"size" argument must be of type number`);
      if (e4 < 0) throw RangeError(`The value "` + e4 + `" is invalid for option "size"`);
    }
    function m3(e4, t4, n3) {
      return p3(e4), e4 <= 0 || t4 === void 0 ? u3(e4) : typeof n3 == `string` ? u3(e4).fill(t4, n3) : u3(e4).fill(t4);
    }
    d3.alloc = function(e4, t4, n3) {
      return m3(e4, t4, n3);
    };
    function h3(e4) {
      return p3(e4), u3(e4 < 0 ? 0 : S2(e4) | 0);
    }
    d3.allocUnsafe = function(e4) {
      return h3(e4);
    }, d3.allocUnsafeSlow = function(e4) {
      return h3(e4);
    };
    function _3(e4, t4) {
      if ((typeof t4 != `string` || t4 === ``) && (t4 = `utf8`), !d3.isEncoding(t4)) throw TypeError(`Unknown encoding: ` + t4);
      let n3 = w2(e4, t4) | 0, r4 = u3(n3), i4 = r4.write(e4, t4);
      return i4 !== n3 && (r4 = r4.slice(0, i4)), r4;
    }
    function v2(e4) {
      let t4 = e4.length < 0 ? 0 : S2(e4.length) | 0, n3 = u3(t4);
      for (let r4 = 0; r4 < t4; r4 += 1) n3[r4] = e4[r4] & 255;
      return n3;
    }
    function y2(e4) {
      if (de2(e4, o3)) {
        let t4 = new o3(e4);
        return b2(t4.buffer, t4.byteOffset, t4.byteLength);
      }
      return v2(e4);
    }
    function b2(e4, t4, n3) {
      if (t4 < 0 || e4.byteLength < t4) throw RangeError(`"offset" is outside of buffer bounds`);
      if (e4.byteLength < t4 + (n3 || 0)) throw RangeError(`"length" is outside of buffer bounds`);
      let r4;
      return r4 = t4 === void 0 && n3 === void 0 ? new o3(e4) : n3 === void 0 ? new o3(e4, t4) : new o3(e4, t4, n3), Object.setPrototypeOf(r4, d3.prototype), r4;
    }
    function x2(e4) {
      if (d3.isBuffer(e4)) {
        let t4 = S2(e4.length) | 0, n3 = u3(t4);
        return n3.length === 0 || e4.copy(n3, 0, 0, t4), n3;
      }
      if (e4.length !== void 0) return typeof e4.length != `number` || fe2(e4.length) ? u3(0) : v2(e4);
      if (e4.type === `Buffer` && Array.isArray(e4.data)) return v2(e4.data);
    }
    function S2(e4) {
      if (e4 >= a3) throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x` + a3.toString(16) + ` bytes`);
      return e4 | 0;
    }
    function C2(e4) {
      return +e4 != e4 && (e4 = 0), d3.alloc(+e4);
    }
    d3.isBuffer = function(e4) {
      return e4 != null && e4._isBuffer === true && e4 !== d3.prototype;
    }, d3.compare = function(e4, t4) {
      if (de2(e4, o3) && (e4 = d3.from(e4, e4.offset, e4.byteLength)), de2(t4, o3) && (t4 = d3.from(t4, t4.offset, t4.byteLength)), !d3.isBuffer(e4) || !d3.isBuffer(t4)) throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);
      if (e4 === t4) return 0;
      let n3 = e4.length, r4 = t4.length;
      for (let i4 = 0, a4 = Math.min(n3, r4); i4 < a4; ++i4) if (e4[i4] !== t4[i4]) {
        n3 = e4[i4], r4 = t4[i4];
        break;
      }
      return n3 < r4 ? -1 : +(r4 < n3);
    }, d3.isEncoding = function(e4) {
      switch (String(e4).toLowerCase()) {
        case `hex`:
        case `utf8`:
        case `utf-8`:
        case `ascii`:
        case `latin1`:
        case `binary`:
        case `base64`:
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return true;
        default:
          return false;
      }
    }, d3.concat = function(e4, t4) {
      if (!Array.isArray(e4)) throw TypeError(`"list" argument must be an Array of Buffers`);
      if (e4.length === 0) return d3.alloc(0);
      let n3;
      if (t4 === void 0) for (t4 = 0, n3 = 0; n3 < e4.length; ++n3) t4 += e4[n3].length;
      let r4 = d3.allocUnsafe(t4), i4 = 0;
      for (n3 = 0; n3 < e4.length; ++n3) {
        let t5 = e4[n3];
        if (de2(t5, o3)) i4 + t5.length > r4.length ? (d3.isBuffer(t5) || (t5 = d3.from(t5)), t5.copy(r4, i4)) : o3.prototype.set.call(r4, t5, i4);
        else if (d3.isBuffer(t5)) t5.copy(r4, i4);
        else throw TypeError(`"list" argument must be an Array of Buffers`);
        i4 += t5.length;
      }
      return r4;
    };
    function w2(e4, t4) {
      if (d3.isBuffer(e4)) return e4.length;
      if (s3.isView(e4) || de2(e4, s3)) return e4.byteLength;
      if (typeof e4 != `string`) throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ` + typeof e4);
      let n3 = e4.length, r4 = arguments.length > 2 && arguments[2] === true;
      if (!r4 && n3 === 0) return 0;
      let i4 = false;
      for (; ; ) switch (t4) {
        case `ascii`:
        case `latin1`:
        case `binary`:
          return n3;
        case `utf8`:
        case `utf-8`:
          return oe2(e4).length;
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return n3 * 2;
        case `hex`:
          return n3 >>> 1;
        case `base64`:
          return le2(e4).length;
        default:
          if (i4) return r4 ? -1 : oe2(e4).length;
          t4 = (`` + t4).toLowerCase(), i4 = true;
      }
    }
    d3.byteLength = w2;
    function T2(e4, t4, n3) {
      let r4 = false;
      if ((t4 === void 0 || t4 < 0) && (t4 = 0), t4 > this.length || ((n3 === void 0 || n3 > this.length) && (n3 = this.length), n3 <= 0) || (n3 >>>= 0, t4 >>>= 0, n3 <= t4)) return ``;
      for (e4 || (e4 = `utf8`); ; ) switch (e4) {
        case `hex`:
          return B2(this, t4, n3);
        case `utf8`:
        case `utf-8`:
          return F2(this, t4, n3);
        case `ascii`:
          return R2(this, t4, n3);
        case `latin1`:
        case `binary`:
          return z2(this, t4, n3);
        case `base64`:
          return P2(this, t4, n3);
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return V2(this, t4, n3);
        default:
          if (r4) throw TypeError(`Unknown encoding: ` + e4);
          e4 = (e4 + ``).toLowerCase(), r4 = true;
      }
    }
    d3.prototype._isBuffer = true;
    function E2(e4, t4, n3) {
      let r4 = e4[t4];
      e4[t4] = e4[n3], e4[n3] = r4;
    }
    d3.prototype.swap16 = function() {
      let e4 = this.length;
      if (e4 % 2 != 0) throw RangeError(`Buffer size must be a multiple of 16-bits`);
      for (let t4 = 0; t4 < e4; t4 += 2) E2(this, t4, t4 + 1);
      return this;
    }, d3.prototype.swap32 = function() {
      let e4 = this.length;
      if (e4 % 4 != 0) throw RangeError(`Buffer size must be a multiple of 32-bits`);
      for (let t4 = 0; t4 < e4; t4 += 4) E2(this, t4, t4 + 3), E2(this, t4 + 1, t4 + 2);
      return this;
    }, d3.prototype.swap64 = function() {
      let e4 = this.length;
      if (e4 % 8 != 0) throw RangeError(`Buffer size must be a multiple of 64-bits`);
      for (let t4 = 0; t4 < e4; t4 += 8) E2(this, t4, t4 + 7), E2(this, t4 + 1, t4 + 6), E2(this, t4 + 2, t4 + 5), E2(this, t4 + 3, t4 + 4);
      return this;
    }, d3.prototype.toString = function() {
      let e4 = this.length;
      return e4 === 0 ? `` : arguments.length === 0 ? F2(this, 0, e4) : T2.apply(this, arguments);
    }, d3.prototype.toLocaleString = d3.prototype.toString, d3.prototype.equals = function(e4) {
      if (!d3.isBuffer(e4)) throw TypeError(`Argument must be a Buffer`);
      return this === e4 ? true : d3.compare(this, e4) === 0;
    }, d3.prototype.inspect = function() {
      let t4 = ``, n3 = e3.INSPECT_MAX_BYTES;
      return t4 = this.toString(`hex`, 0, n3).replace(/(.{2})/g, `$1 `).trim(), this.length > n3 && (t4 += ` ... `), `<Buffer ` + t4 + `>`;
    }, i3 && (d3.prototype[i3] = d3.prototype.inspect), d3.prototype.compare = function(e4, t4, n3, r4, i4) {
      if (de2(e4, o3) && (e4 = d3.from(e4, e4.offset, e4.byteLength)), !d3.isBuffer(e4)) throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type ` + typeof e4);
      if (t4 === void 0 && (t4 = 0), n3 === void 0 && (n3 = e4 ? e4.length : 0), r4 === void 0 && (r4 = 0), i4 === void 0 && (i4 = this.length), t4 < 0 || n3 > e4.length || r4 < 0 || i4 > this.length) throw RangeError(`out of range index`);
      if (r4 >= i4 && t4 >= n3) return 0;
      if (r4 >= i4) return -1;
      if (t4 >= n3) return 1;
      if (t4 >>>= 0, n3 >>>= 0, r4 >>>= 0, i4 >>>= 0, this === e4) return 0;
      let a4 = i4 - r4, s4 = n3 - t4, c4 = Math.min(a4, s4), l4 = this.slice(r4, i4), u4 = e4.slice(t4, n3);
      for (let e5 = 0; e5 < c4; ++e5) if (l4[e5] !== u4[e5]) {
        a4 = l4[e5], s4 = u4[e5];
        break;
      }
      return a4 < s4 ? -1 : +(s4 < a4);
    };
    function D2(e4, t4, n3, r4, i4) {
      if (e4.length === 0) return -1;
      if (typeof n3 == `string` ? (r4 = n3, n3 = 0) : n3 > 2147483647 ? n3 = 2147483647 : n3 < -2147483648 && (n3 = -2147483648), n3 = +n3, fe2(n3) && (n3 = i4 ? 0 : e4.length - 1), n3 < 0 && (n3 = e4.length + n3), n3 >= e4.length) {
        if (i4) return -1;
        n3 = e4.length - 1;
      } else if (n3 < 0) if (i4) n3 = 0;
      else return -1;
      if (typeof t4 == `string` && (t4 = d3.from(t4, r4)), d3.isBuffer(t4)) return t4.length === 0 ? -1 : O2(e4, t4, n3, r4, i4);
      if (typeof t4 == `number`) return t4 &= 255, typeof o3.prototype.indexOf == `function` ? i4 ? o3.prototype.indexOf.call(e4, t4, n3) : o3.prototype.lastIndexOf.call(e4, t4, n3) : O2(e4, [t4], n3, r4, i4);
      throw TypeError(`val must be string, number or Buffer`);
    }
    function O2(e4, t4, n3, r4, i4) {
      let a4 = 1, o4 = e4.length, s4 = t4.length;
      if (r4 !== void 0 && (r4 = String(r4).toLowerCase(), r4 === `ucs2` || r4 === `ucs-2` || r4 === `utf16le` || r4 === `utf-16le`)) {
        if (e4.length < 2 || t4.length < 2) return -1;
        a4 = 2, o4 /= 2, s4 /= 2, n3 /= 2;
      }
      function c4(e5, t5) {
        return a4 === 1 ? e5[t5] : e5.readUInt16BE(t5 * a4);
      }
      let l4;
      if (i4) {
        let r5 = -1;
        for (l4 = n3; l4 < o4; l4++) if (c4(e4, l4) === c4(t4, r5 === -1 ? 0 : l4 - r5)) {
          if (r5 === -1 && (r5 = l4), l4 - r5 + 1 === s4) return r5 * a4;
        } else r5 !== -1 && (l4 -= l4 - r5), r5 = -1;
      } else for (n3 + s4 > o4 && (n3 = o4 - s4), l4 = n3; l4 >= 0; l4--) {
        let n4 = true;
        for (let r5 = 0; r5 < s4; r5++) if (c4(e4, l4 + r5) !== c4(t4, r5)) {
          n4 = false;
          break;
        }
        if (n4) return l4;
      }
      return -1;
    }
    d3.prototype.includes = function(e4, t4, n3) {
      return this.indexOf(e4, t4, n3) !== -1;
    }, d3.prototype.indexOf = function(e4, t4, n3) {
      return D2(this, e4, t4, n3, true);
    }, d3.prototype.lastIndexOf = function(e4, t4, n3) {
      return D2(this, e4, t4, n3, false);
    };
    function k2(e4, t4, n3, r4) {
      n3 = Number(n3) || 0;
      let i4 = e4.length - n3;
      r4 ? (r4 = Number(r4), r4 > i4 && (r4 = i4)) : r4 = i4;
      let a4 = t4.length;
      r4 > a4 / 2 && (r4 = a4 / 2);
      let o4;
      for (o4 = 0; o4 < r4; ++o4) {
        let r5 = parseInt(t4.substr(o4 * 2, 2), 16);
        if (fe2(r5)) return o4;
        e4[n3 + o4] = r5;
      }
      return o4;
    }
    function A2(e4, t4, n3, r4) {
      return ue2(oe2(t4, e4.length - n3), e4, n3, r4);
    }
    function j2(e4, t4, n3, r4) {
      return ue2(se2(t4), e4, n3, r4);
    }
    function M2(e4, t4, n3, r4) {
      return ue2(le2(t4), e4, n3, r4);
    }
    function N2(e4, t4, n3, r4) {
      return ue2(ce2(t4, e4.length - n3), e4, n3, r4);
    }
    d3.prototype.write = function(e4, t4, n3, r4) {
      if (t4 === void 0) r4 = `utf8`, n3 = this.length, t4 = 0;
      else if (n3 === void 0 && typeof t4 == `string`) r4 = t4, n3 = this.length, t4 = 0;
      else if (isFinite(t4)) t4 >>>= 0, isFinite(n3) ? (n3 >>>= 0, r4 === void 0 && (r4 = `utf8`)) : (r4 = n3, n3 = void 0);
      else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);
      let i4 = this.length - t4;
      if ((n3 === void 0 || n3 > i4) && (n3 = i4), e4.length > 0 && (n3 < 0 || t4 < 0) || t4 > this.length) throw RangeError(`Attempt to write outside buffer bounds`);
      r4 || (r4 = `utf8`);
      let a4 = false;
      for (; ; ) switch (r4) {
        case `hex`:
          return k2(this, e4, t4, n3);
        case `utf8`:
        case `utf-8`:
          return A2(this, e4, t4, n3);
        case `ascii`:
        case `latin1`:
        case `binary`:
          return j2(this, e4, t4, n3);
        case `base64`:
          return M2(this, e4, t4, n3);
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return N2(this, e4, t4, n3);
        default:
          if (a4) throw TypeError(`Unknown encoding: ` + r4);
          r4 = (`` + r4).toLowerCase(), a4 = true;
      }
    }, d3.prototype.toJSON = function() {
      return { type: `Buffer`, data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function P2(e4, n3, r4) {
      return n3 === 0 && r4 === e4.length ? t3.fromByteArray(e4) : t3.fromByteArray(e4.slice(n3, r4));
    }
    function F2(e4, t4, n3) {
      n3 = Math.min(e4.length, n3);
      let r4 = [], i4 = t4;
      for (; i4 < n3; ) {
        let t5 = e4[i4], a4 = null, o4 = t5 > 239 ? 4 : t5 > 223 ? 3 : t5 > 191 ? 2 : 1;
        if (i4 + o4 <= n3) {
          let n4, r5, s4, c4;
          switch (o4) {
            case 1:
              t5 < 128 && (a4 = t5);
              break;
            case 2:
              n4 = e4[i4 + 1], (n4 & 192) == 128 && (c4 = (t5 & 31) << 6 | n4 & 63, c4 > 127 && (a4 = c4));
              break;
            case 3:
              n4 = e4[i4 + 1], r5 = e4[i4 + 2], (n4 & 192) == 128 && (r5 & 192) == 128 && (c4 = (t5 & 15) << 12 | (n4 & 63) << 6 | r5 & 63, c4 > 2047 && (c4 < 55296 || c4 > 57343) && (a4 = c4));
              break;
            case 4:
              n4 = e4[i4 + 1], r5 = e4[i4 + 2], s4 = e4[i4 + 3], (n4 & 192) == 128 && (r5 & 192) == 128 && (s4 & 192) == 128 && (c4 = (t5 & 15) << 18 | (n4 & 63) << 12 | (r5 & 63) << 6 | s4 & 63, c4 > 65535 && c4 < 1114112 && (a4 = c4));
          }
        }
        a4 === null ? (a4 = 65533, o4 = 1) : a4 > 65535 && (a4 -= 65536, r4.push(a4 >>> 10 & 1023 | 55296), a4 = 56320 | a4 & 1023), r4.push(a4), i4 += o4;
      }
      return L2(r4);
    }
    let I2 = 4096;
    function L2(e4) {
      let t4 = e4.length;
      if (t4 <= I2) return String.fromCharCode.apply(String, e4);
      let n3 = ``, r4 = 0;
      for (; r4 < t4; ) n3 += String.fromCharCode.apply(String, e4.slice(r4, r4 += I2));
      return n3;
    }
    function R2(e4, t4, n3) {
      let r4 = ``;
      n3 = Math.min(e4.length, n3);
      for (let i4 = t4; i4 < n3; ++i4) r4 += String.fromCharCode(e4[i4] & 127);
      return r4;
    }
    function z2(e4, t4, n3) {
      let r4 = ``;
      n3 = Math.min(e4.length, n3);
      for (let i4 = t4; i4 < n3; ++i4) r4 += String.fromCharCode(e4[i4]);
      return r4;
    }
    function B2(e4, t4, n3) {
      let r4 = e4.length;
      (!t4 || t4 < 0) && (t4 = 0), (!n3 || n3 < 0 || n3 > r4) && (n3 = r4);
      let i4 = ``;
      for (let r5 = t4; r5 < n3; ++r5) i4 += pe2[e4[r5]];
      return i4;
    }
    function V2(e4, t4, n3) {
      let r4 = e4.slice(t4, n3), i4 = ``;
      for (let e5 = 0; e5 < r4.length - 1; e5 += 2) i4 += String.fromCharCode(r4[e5] + r4[e5 + 1] * 256);
      return i4;
    }
    d3.prototype.slice = function(e4, t4) {
      let n3 = this.length;
      e4 = ~~e4, t4 = t4 === void 0 ? n3 : ~~t4, e4 < 0 ? (e4 += n3, e4 < 0 && (e4 = 0)) : e4 > n3 && (e4 = n3), t4 < 0 ? (t4 += n3, t4 < 0 && (t4 = 0)) : t4 > n3 && (t4 = n3), t4 < e4 && (t4 = e4);
      let r4 = this.subarray(e4, t4);
      return Object.setPrototypeOf(r4, d3.prototype), r4;
    };
    function H2(e4, t4, n3) {
      if (e4 % 1 != 0 || e4 < 0) throw RangeError(`offset is not uint`);
      if (e4 + t4 > n3) throw RangeError(`Trying to access beyond buffer length`);
    }
    d3.prototype.readUintLE = d3.prototype.readUIntLE = function(e4, t4, n3) {
      e4 >>>= 0, t4 >>>= 0, n3 || H2(e4, t4, this.length);
      let r4 = this[e4], i4 = 1, a4 = 0;
      for (; ++a4 < t4 && (i4 *= 256); ) r4 += this[e4 + a4] * i4;
      return r4;
    }, d3.prototype.readUintBE = d3.prototype.readUIntBE = function(e4, t4, n3) {
      e4 >>>= 0, t4 >>>= 0, n3 || H2(e4, t4, this.length);
      let r4 = this[e4 + --t4], i4 = 1;
      for (; t4 > 0 && (i4 *= 256); ) r4 += this[e4 + --t4] * i4;
      return r4;
    }, d3.prototype.readUint8 = d3.prototype.readUInt8 = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 1, this.length), this[e4];
    }, d3.prototype.readUint16LE = d3.prototype.readUInt16LE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 2, this.length), this[e4] | this[e4 + 1] << 8;
    }, d3.prototype.readUint16BE = d3.prototype.readUInt16BE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 2, this.length), this[e4] << 8 | this[e4 + 1];
    }, d3.prototype.readUint32LE = d3.prototype.readUInt32LE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 4, this.length), (this[e4] | this[e4 + 1] << 8 | this[e4 + 2] << 16) + this[e4 + 3] * 16777216;
    }, d3.prototype.readUint32BE = d3.prototype.readUInt32BE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 4, this.length), this[e4] * 16777216 + (this[e4 + 1] << 16 | this[e4 + 2] << 8 | this[e4 + 3]);
    }, d3.prototype.readBigUInt64LE = Q2(function(e4) {
      e4 >>>= 0, X2(e4, `offset`);
      let t4 = this[e4], n3 = this[e4 + 7];
      (t4 === void 0 || n3 === void 0) && Z2(e4, this.length - 8);
      let r4 = t4 + this[++e4] * 2 ** 8 + this[++e4] * 2 ** 16 + this[++e4] * 2 ** 24, i4 = this[++e4] + this[++e4] * 2 ** 8 + this[++e4] * 2 ** 16 + n3 * 2 ** 24;
      return BigInt(r4) + (BigInt(i4) << BigInt(32));
    }), d3.prototype.readBigUInt64BE = Q2(function(e4) {
      e4 >>>= 0, X2(e4, `offset`);
      let t4 = this[e4], n3 = this[e4 + 7];
      (t4 === void 0 || n3 === void 0) && Z2(e4, this.length - 8);
      let r4 = t4 * 2 ** 24 + this[++e4] * 2 ** 16 + this[++e4] * 2 ** 8 + this[++e4], i4 = this[++e4] * 2 ** 24 + this[++e4] * 2 ** 16 + this[++e4] * 2 ** 8 + n3;
      return (BigInt(r4) << BigInt(32)) + BigInt(i4);
    }), d3.prototype.readIntLE = function(e4, t4, n3) {
      e4 >>>= 0, t4 >>>= 0, n3 || H2(e4, t4, this.length);
      let r4 = this[e4], i4 = 1, a4 = 0;
      for (; ++a4 < t4 && (i4 *= 256); ) r4 += this[e4 + a4] * i4;
      return i4 *= 128, r4 >= i4 && (r4 -= 2 ** (8 * t4)), r4;
    }, d3.prototype.readIntBE = function(e4, t4, n3) {
      e4 >>>= 0, t4 >>>= 0, n3 || H2(e4, t4, this.length);
      let r4 = t4, i4 = 1, a4 = this[e4 + --r4];
      for (; r4 > 0 && (i4 *= 256); ) a4 += this[e4 + --r4] * i4;
      return i4 *= 128, a4 >= i4 && (a4 -= 2 ** (8 * t4)), a4;
    }, d3.prototype.readInt8 = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 1, this.length), this[e4] & 128 ? (255 - this[e4] + 1) * -1 : this[e4];
    }, d3.prototype.readInt16LE = function(e4, t4) {
      e4 >>>= 0, t4 || H2(e4, 2, this.length);
      let n3 = this[e4] | this[e4 + 1] << 8;
      return n3 & 32768 ? n3 | 4294901760 : n3;
    }, d3.prototype.readInt16BE = function(e4, t4) {
      e4 >>>= 0, t4 || H2(e4, 2, this.length);
      let n3 = this[e4 + 1] | this[e4] << 8;
      return n3 & 32768 ? n3 | 4294901760 : n3;
    }, d3.prototype.readInt32LE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 4, this.length), this[e4] | this[e4 + 1] << 8 | this[e4 + 2] << 16 | this[e4 + 3] << 24;
    }, d3.prototype.readInt32BE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 4, this.length), this[e4] << 24 | this[e4 + 1] << 16 | this[e4 + 2] << 8 | this[e4 + 3];
    }, d3.prototype.readBigInt64LE = Q2(function(e4) {
      e4 >>>= 0, X2(e4, `offset`);
      let t4 = this[e4], n3 = this[e4 + 7];
      (t4 === void 0 || n3 === void 0) && Z2(e4, this.length - 8);
      let r4 = this[e4 + 4] + this[e4 + 5] * 2 ** 8 + this[e4 + 6] * 2 ** 16 + (n3 << 24);
      return (BigInt(r4) << BigInt(32)) + BigInt(t4 + this[++e4] * 2 ** 8 + this[++e4] * 2 ** 16 + this[++e4] * 2 ** 24);
    }), d3.prototype.readBigInt64BE = Q2(function(e4) {
      e4 >>>= 0, X2(e4, `offset`);
      let t4 = this[e4], n3 = this[e4 + 7];
      (t4 === void 0 || n3 === void 0) && Z2(e4, this.length - 8);
      let r4 = (t4 << 24) + this[++e4] * 2 ** 16 + this[++e4] * 2 ** 8 + this[++e4];
      return (BigInt(r4) << BigInt(32)) + BigInt(this[++e4] * 2 ** 24 + this[++e4] * 2 ** 16 + this[++e4] * 2 ** 8 + n3);
    }), d3.prototype.readFloatLE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 4, this.length), r3.read(this, e4, true, 23, 4);
    }, d3.prototype.readFloatBE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 4, this.length), r3.read(this, e4, false, 23, 4);
    }, d3.prototype.readDoubleLE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 8, this.length), r3.read(this, e4, true, 52, 8);
    }, d3.prototype.readDoubleBE = function(e4, t4) {
      return e4 >>>= 0, t4 || H2(e4, 8, this.length), r3.read(this, e4, false, 52, 8);
    };
    function U2(e4, t4, n3, r4, i4, a4) {
      if (!d3.isBuffer(e4)) throw TypeError(`"buffer" argument must be a Buffer instance`);
      if (t4 > i4 || t4 < a4) throw RangeError(`"value" argument is out of bounds`);
      if (n3 + r4 > e4.length) throw RangeError(`Index out of range`);
    }
    d3.prototype.writeUintLE = d3.prototype.writeUIntLE = function(e4, t4, n3, r4) {
      if (e4 = +e4, t4 >>>= 0, n3 >>>= 0, !r4) {
        let r5 = 2 ** (8 * n3) - 1;
        U2(this, e4, t4, n3, r5, 0);
      }
      let i4 = 1, a4 = 0;
      for (this[t4] = e4 & 255; ++a4 < n3 && (i4 *= 256); ) this[t4 + a4] = e4 / i4 & 255;
      return t4 + n3;
    }, d3.prototype.writeUintBE = d3.prototype.writeUIntBE = function(e4, t4, n3, r4) {
      if (e4 = +e4, t4 >>>= 0, n3 >>>= 0, !r4) {
        let r5 = 2 ** (8 * n3) - 1;
        U2(this, e4, t4, n3, r5, 0);
      }
      let i4 = n3 - 1, a4 = 1;
      for (this[t4 + i4] = e4 & 255; --i4 >= 0 && (a4 *= 256); ) this[t4 + i4] = e4 / a4 & 255;
      return t4 + n3;
    }, d3.prototype.writeUint8 = d3.prototype.writeUInt8 = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 1, 255, 0), this[t4] = e4 & 255, t4 + 1;
    }, d3.prototype.writeUint16LE = d3.prototype.writeUInt16LE = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 2, 65535, 0), this[t4] = e4 & 255, this[t4 + 1] = e4 >>> 8, t4 + 2;
    }, d3.prototype.writeUint16BE = d3.prototype.writeUInt16BE = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 2, 65535, 0), this[t4] = e4 >>> 8, this[t4 + 1] = e4 & 255, t4 + 2;
    }, d3.prototype.writeUint32LE = d3.prototype.writeUInt32LE = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 4, 4294967295, 0), this[t4 + 3] = e4 >>> 24, this[t4 + 2] = e4 >>> 16, this[t4 + 1] = e4 >>> 8, this[t4] = e4 & 255, t4 + 4;
    }, d3.prototype.writeUint32BE = d3.prototype.writeUInt32BE = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 4, 4294967295, 0), this[t4] = e4 >>> 24, this[t4 + 1] = e4 >>> 16, this[t4 + 2] = e4 >>> 8, this[t4 + 3] = e4 & 255, t4 + 4;
    };
    function W2(e4, t4, n3, r4, i4) {
      re2(t4, r4, i4, e4, n3, 7);
      let a4 = Number(t4 & BigInt(4294967295));
      e4[n3++] = a4, a4 >>= 8, e4[n3++] = a4, a4 >>= 8, e4[n3++] = a4, a4 >>= 8, e4[n3++] = a4;
      let o4 = Number(t4 >> BigInt(32) & BigInt(4294967295));
      return e4[n3++] = o4, o4 >>= 8, e4[n3++] = o4, o4 >>= 8, e4[n3++] = o4, o4 >>= 8, e4[n3++] = o4, n3;
    }
    function G2(e4, t4, n3, r4, i4) {
      re2(t4, r4, i4, e4, n3, 7);
      let a4 = Number(t4 & BigInt(4294967295));
      e4[n3 + 7] = a4, a4 >>= 8, e4[n3 + 6] = a4, a4 >>= 8, e4[n3 + 5] = a4, a4 >>= 8, e4[n3 + 4] = a4;
      let o4 = Number(t4 >> BigInt(32) & BigInt(4294967295));
      return e4[n3 + 3] = o4, o4 >>= 8, e4[n3 + 2] = o4, o4 >>= 8, e4[n3 + 1] = o4, o4 >>= 8, e4[n3] = o4, n3 + 8;
    }
    d3.prototype.writeBigUInt64LE = Q2(function(e4, t4 = 0) {
      return W2(this, e4, t4, BigInt(0), BigInt(`0xffffffffffffffff`));
    }), d3.prototype.writeBigUInt64BE = Q2(function(e4, t4 = 0) {
      return G2(this, e4, t4, BigInt(0), BigInt(`0xffffffffffffffff`));
    }), d3.prototype.writeIntLE = function(e4, t4, n3, r4) {
      if (e4 = +e4, t4 >>>= 0, !r4) {
        let r5 = 2 ** (8 * n3 - 1);
        U2(this, e4, t4, n3, r5 - 1, -r5);
      }
      let i4 = 0, a4 = 1, o4 = 0;
      for (this[t4] = e4 & 255; ++i4 < n3 && (a4 *= 256); ) e4 < 0 && o4 === 0 && this[t4 + i4 - 1] !== 0 && (o4 = 1), this[t4 + i4] = (e4 / a4 >> 0) - o4 & 255;
      return t4 + n3;
    }, d3.prototype.writeIntBE = function(e4, t4, n3, r4) {
      if (e4 = +e4, t4 >>>= 0, !r4) {
        let r5 = 2 ** (8 * n3 - 1);
        U2(this, e4, t4, n3, r5 - 1, -r5);
      }
      let i4 = n3 - 1, a4 = 1, o4 = 0;
      for (this[t4 + i4] = e4 & 255; --i4 >= 0 && (a4 *= 256); ) e4 < 0 && o4 === 0 && this[t4 + i4 + 1] !== 0 && (o4 = 1), this[t4 + i4] = (e4 / a4 >> 0) - o4 & 255;
      return t4 + n3;
    }, d3.prototype.writeInt8 = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 1, 127, -128), e4 < 0 && (e4 = 255 + e4 + 1), this[t4] = e4 & 255, t4 + 1;
    }, d3.prototype.writeInt16LE = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 2, 32767, -32768), this[t4] = e4 & 255, this[t4 + 1] = e4 >>> 8, t4 + 2;
    }, d3.prototype.writeInt16BE = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 2, 32767, -32768), this[t4] = e4 >>> 8, this[t4 + 1] = e4 & 255, t4 + 2;
    }, d3.prototype.writeInt32LE = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 4, 2147483647, -2147483648), this[t4] = e4 & 255, this[t4 + 1] = e4 >>> 8, this[t4 + 2] = e4 >>> 16, this[t4 + 3] = e4 >>> 24, t4 + 4;
    }, d3.prototype.writeInt32BE = function(e4, t4, n3) {
      return e4 = +e4, t4 >>>= 0, n3 || U2(this, e4, t4, 4, 2147483647, -2147483648), e4 < 0 && (e4 = 4294967295 + e4 + 1), this[t4] = e4 >>> 24, this[t4 + 1] = e4 >>> 16, this[t4 + 2] = e4 >>> 8, this[t4 + 3] = e4 & 255, t4 + 4;
    }, d3.prototype.writeBigInt64LE = Q2(function(e4, t4 = 0) {
      return W2(this, e4, t4, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`));
    }), d3.prototype.writeBigInt64BE = Q2(function(e4, t4 = 0) {
      return G2(this, e4, t4, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`));
    });
    function ee2(e4, t4, n3, r4, i4, a4) {
      if (n3 + r4 > e4.length || n3 < 0) throw RangeError(`Index out of range`);
    }
    function K2(e4, t4, n3, i4, a4) {
      return t4 = +t4, n3 >>>= 0, a4 || ee2(e4, t4, n3, 4), r3.write(e4, t4, n3, i4, 23, 4), n3 + 4;
    }
    d3.prototype.writeFloatLE = function(e4, t4, n3) {
      return K2(this, e4, t4, true, n3);
    }, d3.prototype.writeFloatBE = function(e4, t4, n3) {
      return K2(this, e4, t4, false, n3);
    };
    function te2(e4, t4, n3, i4, a4) {
      return t4 = +t4, n3 >>>= 0, a4 || ee2(e4, t4, n3, 8), r3.write(e4, t4, n3, i4, 52, 8), n3 + 8;
    }
    d3.prototype.writeDoubleLE = function(e4, t4, n3) {
      return te2(this, e4, t4, true, n3);
    }, d3.prototype.writeDoubleBE = function(e4, t4, n3) {
      return te2(this, e4, t4, false, n3);
    }, d3.prototype.copy = function(e4, t4, n3, r4) {
      if (!d3.isBuffer(e4)) throw TypeError(`argument should be a Buffer`);
      if (n3 || (n3 = 0), !r4 && r4 !== 0 && (r4 = this.length), t4 >= e4.length && (t4 = e4.length), t4 || (t4 = 0), r4 > 0 && r4 < n3 && (r4 = n3), r4 === n3 || e4.length === 0 || this.length === 0) return 0;
      if (t4 < 0) throw RangeError(`targetStart out of bounds`);
      if (n3 < 0 || n3 >= this.length) throw RangeError(`Index out of range`);
      if (r4 < 0) throw RangeError(`sourceEnd out of bounds`);
      r4 > this.length && (r4 = this.length), e4.length - t4 < r4 - n3 && (r4 = e4.length - t4 + n3);
      let i4 = r4 - n3;
      return this === e4 && typeof o3.prototype.copyWithin == `function` ? this.copyWithin(t4, n3, r4) : o3.prototype.set.call(e4, this.subarray(n3, r4), t4), i4;
    }, d3.prototype.fill = function(e4, t4, n3, r4) {
      if (typeof e4 == `string`) {
        if (typeof t4 == `string` ? (r4 = t4, t4 = 0, n3 = this.length) : typeof n3 == `string` && (r4 = n3, n3 = this.length), r4 !== void 0 && typeof r4 != `string`) throw TypeError(`encoding must be a string`);
        if (typeof r4 == `string` && !d3.isEncoding(r4)) throw TypeError(`Unknown encoding: ` + r4);
        if (e4.length === 1) {
          let t5 = e4.charCodeAt(0);
          (r4 === `utf8` && t5 < 128 || r4 === `latin1`) && (e4 = t5);
        }
      } else typeof e4 == `number` ? e4 &= 255 : typeof e4 == `boolean` && (e4 = Number(e4));
      if (t4 < 0 || this.length < t4 || this.length < n3) throw RangeError(`Out of range index`);
      if (n3 <= t4) return this;
      t4 >>>= 0, n3 = n3 === void 0 ? this.length : n3 >>> 0, e4 || (e4 = 0);
      let i4;
      if (typeof e4 == `number`) for (i4 = t4; i4 < n3; ++i4) this[i4] = e4;
      else {
        let a4 = d3.isBuffer(e4) ? e4 : d3.from(e4, r4), o4 = a4.length;
        if (o4 === 0) throw TypeError(`The value "` + e4 + `" is invalid for argument "value"`);
        for (i4 = 0; i4 < n3 - t4; ++i4) this[i4 + t4] = a4[i4 % o4];
      }
      return this;
    };
    let q2 = {};
    function J2(e4, t4, n3) {
      q2[e4] = class extends n3 {
        constructor() {
          super(), Object.defineProperty(this, `message`, { value: t4.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e4}]`, this.stack, delete this.name;
        }
        get code() {
          return e4;
        }
        set code(e5) {
          Object.defineProperty(this, `code`, { configurable: true, enumerable: true, value: e5, writable: true });
        }
        toString() {
          return `${this.name} [${e4}]: ${this.message}`;
        }
      };
    }
    J2(`ERR_BUFFER_OUT_OF_BOUNDS`, function(e4) {
      return e4 ? `${e4} is outside of buffer bounds` : `Attempt to access memory outside buffer bounds`;
    }, RangeError), J2(`ERR_INVALID_ARG_TYPE`, function(e4, t4) {
      return `The "${e4}" argument must be of type number. Received type ${typeof t4}`;
    }, TypeError), J2(`ERR_OUT_OF_RANGE`, function(e4, t4, n3) {
      let r4 = `The value of "${e4}" is out of range.`, i4 = n3;
      return Number.isInteger(n3) && Math.abs(n3) > 2 ** 32 ? i4 = Y2(String(n3)) : typeof n3 == `bigint` && (i4 = String(n3), (n3 > BigInt(2) ** BigInt(32) || n3 < -(BigInt(2) ** BigInt(32))) && (i4 = Y2(i4)), i4 += `n`), r4 += ` It must be ${t4}. Received ${i4}`, r4;
    }, RangeError);
    function Y2(e4) {
      let t4 = ``, n3 = e4.length, r4 = +(e4[0] === `-`);
      for (; n3 >= r4 + 4; n3 -= 3) t4 = `_${e4.slice(n3 - 3, n3)}${t4}`;
      return `${e4.slice(0, n3)}${t4}`;
    }
    function ne2(e4, t4, n3) {
      X2(t4, `offset`), (e4[t4] === void 0 || e4[t4 + n3] === void 0) && Z2(t4, e4.length - (n3 + 1));
    }
    function re2(e4, t4, n3, r4, i4, a4) {
      if (e4 > n3 || e4 < t4) {
        let r5 = typeof t4 == `bigint` ? `n` : ``, i5;
        throw i5 = a4 > 3 ? t4 === 0 || t4 === BigInt(0) ? `>= 0${r5} and < 2${r5} ** ${(a4 + 1) * 8}${r5}` : `>= -(2${r5} ** ${(a4 + 1) * 8 - 1}${r5}) and < 2 ** ${(a4 + 1) * 8 - 1}${r5}` : `>= ${t4}${r5} and <= ${n3}${r5}`, new q2.ERR_OUT_OF_RANGE(`value`, i5, e4);
      }
      ne2(r4, i4, a4);
    }
    function X2(e4, t4) {
      if (typeof e4 != `number`) throw new q2.ERR_INVALID_ARG_TYPE(t4, `number`, e4);
    }
    function Z2(e4, t4, n3) {
      throw Math.floor(e4) === e4 ? t4 < 0 ? new q2.ERR_BUFFER_OUT_OF_BOUNDS() : new q2.ERR_OUT_OF_RANGE(n3 || `offset`, `>= ${+!!n3} and <= ${t4}`, e4) : (X2(e4, n3), new q2.ERR_OUT_OF_RANGE(n3 || `offset`, `an integer`, e4));
    }
    let ie2 = /[^+/0-9A-Za-z-_]/g;
    function ae2(e4) {
      if (e4 = e4.split(`=`)[0], e4 = e4.trim().replace(ie2, ``), e4.length < 2) return ``;
      for (; e4.length % 4 != 0; ) e4 += `=`;
      return e4;
    }
    function oe2(e4, t4) {
      t4 || (t4 = 1 / 0);
      let n3, r4 = e4.length, i4 = null, a4 = [];
      for (let o4 = 0; o4 < r4; ++o4) {
        if (n3 = e4.charCodeAt(o4), n3 > 55295 && n3 < 57344) {
          if (!i4) {
            if (n3 > 56319) {
              (t4 -= 3) > -1 && a4.push(239, 191, 189);
              continue;
            } else if (o4 + 1 === r4) {
              (t4 -= 3) > -1 && a4.push(239, 191, 189);
              continue;
            }
            i4 = n3;
            continue;
          }
          if (n3 < 56320) {
            (t4 -= 3) > -1 && a4.push(239, 191, 189), i4 = n3;
            continue;
          }
          n3 = (i4 - 55296 << 10 | n3 - 56320) + 65536;
        } else i4 && (t4 -= 3) > -1 && a4.push(239, 191, 189);
        if (i4 = null, n3 < 128) {
          if (--t4 < 0) break;
          a4.push(n3);
        } else if (n3 < 2048) {
          if ((t4 -= 2) < 0) break;
          a4.push(n3 >> 6 | 192, n3 & 63 | 128);
        } else if (n3 < 65536) {
          if ((t4 -= 3) < 0) break;
          a4.push(n3 >> 12 | 224, n3 >> 6 & 63 | 128, n3 & 63 | 128);
        } else if (n3 < 1114112) {
          if ((t4 -= 4) < 0) break;
          a4.push(n3 >> 18 | 240, n3 >> 12 & 63 | 128, n3 >> 6 & 63 | 128, n3 & 63 | 128);
        } else throw Error(`Invalid code point`);
      }
      return a4;
    }
    function se2(e4) {
      let t4 = [];
      for (let n3 = 0; n3 < e4.length; ++n3) t4.push(e4.charCodeAt(n3) & 255);
      return t4;
    }
    function ce2(e4, t4) {
      let n3, r4, i4, a4 = [];
      for (let o4 = 0; o4 < e4.length && !((t4 -= 2) < 0); ++o4) n3 = e4.charCodeAt(o4), r4 = n3 >> 8, i4 = n3 % 256, a4.push(i4), a4.push(r4);
      return a4;
    }
    function le2(e4) {
      return t3.toByteArray(ae2(e4));
    }
    function ue2(e4, t4, n3, r4) {
      let i4;
      for (i4 = 0; i4 < r4 && !(i4 + n3 >= t4.length || i4 >= e4.length); ++i4) t4[i4 + n3] = e4[i4];
      return i4;
    }
    function de2(e4, t4) {
      return e4 instanceof t4 || e4 != null && e4.constructor != null && e4.constructor.name != null && e4.constructor.name === t4.name;
    }
    function fe2(e4) {
      return e4 !== e4;
    }
    let pe2 = (function() {
      let e4 = `0123456789abcdef`, t4 = Array(256);
      for (let n3 = 0; n3 < 16; ++n3) {
        let r4 = n3 * 16;
        for (let i4 = 0; i4 < 16; ++i4) t4[r4 + i4] = e4[n3] + e4[i4];
      }
      return t4;
    })();
    function Q2(e4) {
      return typeof BigInt > `u` ? me2 : e4;
    }
    function me2() {
      throw Error(`BigInt not supported`);
    }
  })(t2);
  var _2 = t2.Buffer;
  e2.Blob = t2.Blob, e2.BlobOptions = t2.BlobOptions, e2.Buffer = t2.Buffer, e2.File = t2.File, e2.FileOptions = t2.FileOptions, e2.INSPECT_MAX_BYTES = t2.INSPECT_MAX_BYTES, e2.SlowBuffer = t2.SlowBuffer, e2.TranscodeEncoding = t2.TranscodeEncoding, e2.atob = t2.atob, e2.btoa = t2.btoa, e2.constants = t2.constants, e2.default = _2, e2.isAscii = t2.isAscii, e2.isUtf8 = t2.isUtf8, e2.kMaxLength = t2.kMaxLength, e2.kStringMaxLength = t2.kStringMaxLength, e2.resolveObjectURL = t2.resolveObjectURL, e2.transcode = t2.transcode;
})), X = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Buffer = void 0;
  var t2 = re();
  Object.defineProperty(e2, `Buffer`, { enumerable: true, get: function() {
    return t2.Buffer;
  } });
})), Z = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.bufferFrom = e2.bufferAllocUnsafe = e2.Buffer = void 0;
  var t2 = X();
  Object.defineProperty(e2, `Buffer`, { enumerable: true, get: function() {
    return t2.Buffer;
  } });
  function n2(e3, ...n3) {
    return new t2.Buffer(e3, ...n3);
  }
  e2.bufferAllocUnsafe = t2.Buffer.allocUnsafe || n2, e2.bufferFrom = t2.Buffer.from || n2;
})), ie = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.flattenJSON = void 0;
  var t2 = Z(), n2 = Y(), r2 = n2.posix ? n2.posix.join : n2.join;
  e2.flattenJSON = (e3) => {
    let n3 = {};
    function i2(e4, a2) {
      for (let o2 in a2) {
        let s2 = a2[o2], c2 = r2(e4, o2);
        typeof s2 == `string` || s2 instanceof t2.Buffer ? n3[c2] = s2 : typeof s2 == `object` && s2 && !(s2 instanceof t2.Buffer) && Object.keys(s2).length > 0 ? i2(c2, s2) : n3[c2] = null;
      }
    }
    return i2(``, e3), n3;
  };
})), ae = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true });
})), oe = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Ok = t2, e2.Err = n2;
  function t2(e3) {
    return { ok: true, value: e3 };
  }
  function n2(e3) {
    return { ok: false, err: e3 };
  }
})), se = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.FanOut = void 0, e2.FanOut = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Set();
    }
    emit(e3) {
      this.listeners.forEach((t2) => t2(e3));
    }
    listen(e3) {
      let t2 = this.listeners;
      return t2.add(e3), () => t2.delete(e3);
    }
  };
})), ce = i(((e2) => {
  Object.defineProperties(e2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: `Module` } });
  function t2(e3) {
    return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, `default`) ? e3.default : e3;
  }
  var n2 = { exports: {} }, r2 = n2.exports = {}, i2, a2;
  function o2() {
    throw Error(`setTimeout has not been defined`);
  }
  function s2() {
    throw Error(`clearTimeout has not been defined`);
  }
  (function() {
    try {
      i2 = typeof setTimeout == `function` ? setTimeout : o2;
    } catch {
      i2 = o2;
    }
    try {
      a2 = typeof clearTimeout == `function` ? clearTimeout : s2;
    } catch {
      a2 = s2;
    }
  })();
  function c2(e3) {
    if (i2 === setTimeout) return setTimeout(e3, 0);
    if ((i2 === o2 || !i2) && setTimeout) return i2 = setTimeout, setTimeout(e3, 0);
    try {
      return i2(e3, 0);
    } catch {
      try {
        return i2.call(null, e3, 0);
      } catch {
        return i2.call(this, e3, 0);
      }
    }
  }
  function l2(e3) {
    if (a2 === clearTimeout) return clearTimeout(e3);
    if ((a2 === s2 || !a2) && clearTimeout) return a2 = clearTimeout, clearTimeout(e3);
    try {
      return a2(e3);
    } catch {
      try {
        return a2.call(null, e3);
      } catch {
        return a2.call(this, e3);
      }
    }
  }
  var u2 = [], d2 = false, f2, p2 = -1;
  function m2() {
    !d2 || !f2 || (d2 = false, f2.length ? u2 = f2.concat(u2) : p2 = -1, u2.length && h2());
  }
  function h2() {
    if (!d2) {
      var e3 = c2(m2);
      d2 = true;
      for (var t3 = u2.length; t3; ) {
        for (f2 = u2, u2 = []; ++p2 < t3; ) f2 && f2[p2].run();
        p2 = -1, t3 = u2.length;
      }
      f2 = null, d2 = false, l2(e3);
    }
  }
  r2.nextTick = function(e3) {
    var t3 = Array(arguments.length - 1);
    if (arguments.length > 1) for (var n3 = 1; n3 < arguments.length; n3++) t3[n3 - 1] = arguments[n3];
    u2.push(new g2(e3, t3)), u2.length === 1 && !d2 && c2(h2);
  };
  function g2(e3, t3) {
    this.fun = e3, this.array = t3;
  }
  g2.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, r2.title = `browser`, r2.browser = true, r2.env = {}, r2.argv = [], r2.version = ``, r2.versions = {};
  function _2() {
  }
  r2.on = _2, r2.addListener = _2, r2.once = _2, r2.off = _2, r2.removeListener = _2, r2.removeAllListeners = _2, r2.emit = _2, r2.prependListener = _2, r2.prependOnceListener = _2, r2.listeners = function(e3) {
    return [];
  }, r2.binding = function(e3) {
    throw Error(`process.binding is not supported`);
  }, r2.cwd = function() {
    return `/`;
  }, r2.chdir = function(e3) {
    throw Error(`process.chdir is not supported`);
  }, r2.umask = function() {
    return 0;
  };
  var v2 = n2.exports, y2 = t2(v2);
  e2.default = y2, e2.process = y2;
})), le = i(((e2) => {
  u(), Object.defineProperty(e2, `__esModule`, { value: true }), e2.createProcess = n2;
  var t2 = () => {
    if (l !== void 0) return l;
    try {
      return ce();
    } catch {
      return;
    }
  };
  function n2() {
    let e3 = t2() || {};
    return e3.cwd || (e3.cwd = () => `/`), e3.emitWarning || (e3.emitWarning = (e4, t3) => {
      console.warn(`${t3}${t3 ? `: ` : ``}${e4}`);
    }), e3.env || (e3.env = {}), e3;
  }
  e2.default = n2();
})), ue = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true });
})), de = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.FLAGS = e2.ERRSTR = e2.constants = e2.SEP = void 0, e2.SEP = `/`, e2.constants = { O_RDONLY: 0, O_WRONLY: 1, O_RDWR: 2, S_IFMT: 61440, S_IFREG: 32768, S_IFDIR: 16384, S_IFCHR: 8192, S_IFBLK: 24576, S_IFIFO: 4096, S_IFLNK: 40960, S_IFSOCK: 49152, O_CREAT: 64, O_EXCL: 128, O_NOCTTY: 256, O_TRUNC: 512, O_APPEND: 1024, O_DIRECTORY: 65536, O_NOATIME: 262144, O_NOFOLLOW: 131072, O_SYNC: 1052672, O_SYMLINK: 2097152, O_DIRECT: 16384, O_NONBLOCK: 2048, S_IRWXU: 448, S_IRUSR: 256, S_IWUSR: 128, S_IXUSR: 64, S_IRWXG: 56, S_IRGRP: 32, S_IWGRP: 16, S_IXGRP: 8, S_IRWXO: 7, S_IROTH: 4, S_IWOTH: 2, S_IXOTH: 1, F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, UV_FS_SYMLINK_DIR: 1, UV_FS_SYMLINK_JUNCTION: 2, UV_FS_COPYFILE_EXCL: 1, UV_FS_COPYFILE_FICLONE: 2, UV_FS_COPYFILE_FICLONE_FORCE: 4, COPYFILE_EXCL: 1, COPYFILE_FICLONE: 2, COPYFILE_FICLONE_FORCE: 4 }, e2.ERRSTR = { PATH_STR: `path must be a string, Buffer, or Uint8Array`, FD: `fd must be a file descriptor`, MODE_INT: `mode must be an int`, CB: `callback must be a function`, UID: `uid must be an unsigned int`, GID: `gid must be an unsigned int`, LEN: `len must be an integer`, ATIME: `atime must be an integer`, MTIME: `mtime must be an integer`, PREFIX: `filename prefix is required`, BUFFER: `buffer must be an instance of Buffer or StaticBuffer`, OFFSET: `offset must be an integer`, LENGTH: `length must be an integer`, POSITION: `position must be an integer` };
  var { O_RDONLY: t2, O_WRONLY: n2, O_RDWR: r2, O_CREAT: i2, O_EXCL: a2, O_TRUNC: o2, O_APPEND: s2, O_SYNC: c2 } = e2.constants, l2;
  (function(e3) {
    e3[e3.r = t2] = `r`, e3[e3[`r+`] = r2] = `r+`, e3[e3.rs = t2 | c2] = `rs`, e3[e3.sr = e3.rs] = `sr`, e3[e3[`rs+`] = r2 | c2] = `rs+`, e3[e3[`sr+`] = e3[`rs+`]] = `sr+`, e3[e3.w = n2 | i2 | o2] = `w`, e3[e3.wx = n2 | i2 | o2 | a2] = `wx`, e3[e3.xw = e3.wx] = `xw`, e3[e3[`w+`] = r2 | i2 | o2] = `w+`, e3[e3[`wx+`] = r2 | i2 | o2 | a2] = `wx+`, e3[e3[`xw+`] = e3[`wx+`]] = `xw+`, e3[e3.a = n2 | s2 | i2] = `a`, e3[e3.ax = n2 | s2 | i2 | a2] = `ax`, e3[e3.xa = e3.ax] = `xa`, e3[e3[`a+`] = r2 | s2 | i2] = `a+`, e3[e3[`ax+`] = r2 | s2 | i2 | a2] = `ax+`, e3[e3[`xa+`] = e3[`ax+`]] = `xa+`;
  })(l2 || (e2.FLAGS = l2 = {}));
})), fe = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true });
})), pe = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.FLAG = void 0;
  var t2;
  (function(e3) {
    e3[e3.O_RDONLY = 0] = `O_RDONLY`, e3[e3.O_WRONLY = 1] = `O_WRONLY`, e3[e3.O_RDWR = 2] = `O_RDWR`, e3[e3.O_ACCMODE = 3] = `O_ACCMODE`, e3[e3.O_CREAT = 64] = `O_CREAT`, e3[e3.O_EXCL = 128] = `O_EXCL`, e3[e3.O_NOCTTY = 256] = `O_NOCTTY`, e3[e3.O_TRUNC = 512] = `O_TRUNC`, e3[e3.O_APPEND = 1024] = `O_APPEND`, e3[e3.O_NONBLOCK = 2048] = `O_NONBLOCK`, e3[e3.O_DSYNC = 4096] = `O_DSYNC`, e3[e3.FASYNC = 8192] = `FASYNC`, e3[e3.O_DIRECT = 16384] = `O_DIRECT`, e3[e3.O_LARGEFILE = 0] = `O_LARGEFILE`, e3[e3.O_DIRECTORY = 65536] = `O_DIRECTORY`, e3[e3.O_NOFOLLOW = 131072] = `O_NOFOLLOW`, e3[e3.O_NOATIME = 262144] = `O_NOATIME`, e3[e3.O_CLOEXEC = 524288] = `O_CLOEXEC`, e3[e3.O_SYNC = 1052672] = `O_SYNC`, e3[e3.O_NDELAY = 2048] = `O_NDELAY`;
  })(t2 || (e2.FLAG = t2 = {}));
})), Q = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.basename = void 0, e2.basename = (e3, t2) => {
    e3[e3.length - 1] === t2 && (e3 = e3.slice(0, -1));
    let n2 = e3.lastIndexOf(t2);
    return n2 === -1 ? e3 : e3.slice(n2 + 1);
  };
})), me = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.inherits = t2, e2.promisify = n2, e2.inspect = r2, e2.format = i2;
  function t2(e3, t3) {
    if (e3 == null) throw TypeError(`The constructor to inherit from is not defined`);
    if (t3 == null) throw TypeError(`The super constructor to inherit from is not defined`);
    e3.super_ = t3, e3.prototype = Object.create(t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } });
  }
  function n2(e3) {
    if (typeof e3 != `function`) throw TypeError(`The "original" argument must be of type function`);
    return function(...t3) {
      return new Promise((n3, r3) => {
        e3.call(this, ...t3, (e4, t4) => {
          e4 ? r3(e4) : n3(t4);
        });
      });
    };
  }
  function r2(e3) {
    return e3 === null ? `null` : e3 === void 0 ? `undefined` : typeof e3 == `string` ? `'${e3}'` : typeof e3 == `number` || typeof e3 == `boolean` ? String(e3) : Array.isArray(e3) ? `[ ${e3.map((e4) => r2(e4)).join(`, `)} ]` : typeof e3 == `object` ? `{ ${Object.entries(e3).map(([e4, t3]) => `${e4}: ${r2(t3)}`).join(`, `)} }` : String(e3);
  }
  function i2(e3, ...t3) {
    if (t3.length === 0) return e3;
    let n3 = e3, r3 = 0;
    for (n3 = n3.replace(/%[sdj%]/g, (e4) => {
      if (r3 >= t3.length) return e4;
      let n4 = t3[r3++];
      switch (e4) {
        case `%s`:
          return String(n4);
        case `%d`:
          return Number(n4).toString();
        case `%j`:
          try {
            return JSON.stringify(n4);
          } catch {
            return `[Circular]`;
          }
        case `%%`:
          return `%`;
        default:
          return e4;
      }
    }); r3 < t3.length; ) n3 += ` ` + String(t3[r3++]);
    return n3;
  }
})), he = i(((e2) => {
  a(), Object.defineProperty(e2, `__esModule`, { value: true }), e2.AssertionError = e2.RangeError = e2.TypeError = e2.Error = void 0, e2.message = c2, e2.E = l2;
  var t2 = me(), n2 = typeof Symbol > `u` ? `_kCode` : /* @__PURE__ */ Symbol(`code`), r2 = {};
  function i2(e3) {
    return class extends e3 {
      constructor(e4, ...t3) {
        super(c2(e4, t3)), this.code = e4, this[n2] = e4, this.name = `${super.name} [${this[n2]}]`;
      }
    };
  }
  var s2 = typeof globalThis < `u` ? globalThis : o;
  e2.AssertionError = class extends s2.Error {
    constructor(n3) {
      if (typeof n3 != `object` || !n3) throw new e2.TypeError(`ERR_INVALID_ARG_TYPE`, `options`, `object`);
      n3.message ? super(n3.message) : super(`${(0, t2.inspect)(n3.actual).slice(0, 128)} ${n3.operator} ${(0, t2.inspect)(n3.expected).slice(0, 128)}`), this.generatedMessage = !n3.message, this.name = `AssertionError [ERR_ASSERTION]`, this.code = `ERR_ASSERTION`, this.actual = n3.actual, this.expected = n3.expected, this.operator = n3.operator, e2.Error.captureStackTrace(this, n3.stackStartFunction);
    }
  };
  function c2(n3, i3) {
    if (typeof n3 != `string`) throw new e2.Error(`Error message key must be a string`);
    let a2 = r2[n3];
    if (!a2) throw new e2.Error(`An invalid error message key was used: ${n3}.`);
    let o2;
    if (typeof a2 == `function`) o2 = a2;
    else {
      if (o2 = t2.format, i3 === void 0 || i3.length === 0) return a2;
      i3.unshift(a2);
    }
    return String(o2.apply(null, i3));
  }
  function l2(e3, t3) {
    r2[e3] = typeof t3 == `function` ? t3 : String(t3);
  }
  e2.Error = i2(s2.Error), e2.TypeError = i2(s2.TypeError), e2.RangeError = i2(s2.RangeError), l2(`ERR_DIR_CLOSED`, `Directory handle was closed`), l2(`ERR_DIR_CONCURRENT_OPERATION`, `Cannot do synchronous work on directory handle with concurrent asynchronous operations`), l2(`ERR_INVALID_FILE_URL_HOST`, `File URL host must be "localhost" or empty on %s`), l2(`ERR_INVALID_FILE_URL_PATH`, `File URL path %s`), l2(`ERR_INVALID_OPT_VALUE`, (e3, t3) => `The value "${String(t3)}" is invalid for option "${e3}"`), l2(`ERR_INVALID_OPT_VALUE_ENCODING`, (e3) => `The value "${String(e3)}" is invalid for option "encoding"`), l2(`ERR_INVALID_ARG_VALUE`, `Unable to open file as blob`);
})), ge = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.ENCODING_UTF8 = void 0, e2.assertEncoding = r2, e2.strToEncoding = i2;
  var t2 = Z(), n2 = he();
  e2.ENCODING_UTF8 = `utf8`;
  function r2(e3) {
    if (e3 && !t2.Buffer.isEncoding(e3)) throw new n2.TypeError(`ERR_INVALID_OPT_VALUE_ENCODING`, e3);
  }
  function i2(n3, r3) {
    return !r3 || r3 === e2.ENCODING_UTF8 ? n3 : r3 === `buffer` ? new t2.Buffer(n3) : new t2.Buffer(n3).toString(r3);
  }
})), $ = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true });
  var n2 = (J(), e(f));
  n2.__exportStar(ue(), t2), n2.__exportStar(de(), t2), n2.__exportStar(fe(), t2), n2.__exportStar(pe(), t2), n2.__exportStar(Q(), t2), n2.__exportStar(ge(), t2);
})), _e = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Node = void 0;
  var t2 = se(), n2 = le(), r2 = Z(), { S_IFMT: i2, S_IFDIR: a2, S_IFREG: o2, S_IFLNK: s2, S_IFCHR: c2 } = $().constants, l2 = () => n2.default.getuid?.() ?? 0, u2 = () => n2.default.getgid?.() ?? 0, d2 = (0, r2.bufferAllocUnsafe)(0);
  e2.Node = class {
    constructor(e3, n3 = 438, r3 = l2(), i3 = u2()) {
      this.changes = new t2.FanOut(), this._uid = l2(), this._gid = u2(), this._atime = /* @__PURE__ */ new Date(), this._mtime = /* @__PURE__ */ new Date(), this._ctime = /* @__PURE__ */ new Date(), this.buf = d2, this.capacity = 0, this.size = 0, this.rdev = 0, this._nlink = 1, this.mode = n3, this.ino = e3, this._uid = r3, this._gid = i3;
    }
    set ctime(e3) {
      this._ctime = e3;
    }
    get ctime() {
      return this._ctime;
    }
    set uid(e3) {
      this._uid = e3, this.ctime = /* @__PURE__ */ new Date();
    }
    get uid() {
      return this._uid;
    }
    set gid(e3) {
      this._gid = e3, this.ctime = /* @__PURE__ */ new Date();
    }
    get gid() {
      return this._gid;
    }
    set atime(e3) {
      this._atime = e3;
    }
    get atime() {
      return this._atime;
    }
    set mtime(e3) {
      this._mtime = e3, this.ctime = /* @__PURE__ */ new Date();
    }
    get mtime() {
      return this._mtime;
    }
    get perm() {
      return this.mode & ~i2;
    }
    set perm(e3) {
      this.mode = this.mode & i2 | e3 & ~i2, this.ctime = /* @__PURE__ */ new Date();
    }
    set nlink(e3) {
      this._nlink = e3, this.ctime = /* @__PURE__ */ new Date();
    }
    get nlink() {
      return this._nlink;
    }
    getString(e3 = `utf8`) {
      return this.atime = /* @__PURE__ */ new Date(), this.getBuffer().toString(e3);
    }
    setString(e3) {
      this._setBuf((0, r2.bufferFrom)(e3, `utf8`));
    }
    getBuffer() {
      return this.atime = /* @__PURE__ */ new Date(), this.buf || (this.buf = (0, r2.bufferAllocUnsafe)(0)), (0, r2.bufferFrom)(this.buf.subarray(0, this.size));
    }
    setBuffer(e3) {
      let t3 = (0, r2.bufferFrom)(e3);
      this._setBuf(t3);
    }
    _setBuf(e3) {
      let t3 = e3.length;
      this.buf = e3, this.capacity = t3, this.size = t3, this.touch();
    }
    getSize() {
      return this.size;
    }
    setModeProperty(e3) {
      this.mode = e3;
    }
    isFile() {
      return (this.mode & i2) === o2;
    }
    isDirectory() {
      return (this.mode & i2) === a2;
    }
    isSymlink() {
      return (this.mode & i2) === s2;
    }
    isCharacterDevice() {
      return (this.mode & i2) === c2;
    }
    makeSymlink(e3) {
      this.mode = s2 | 438, this.symlink = e3;
    }
    write(e3, t3 = 0, n3 = e3.length, i3 = 0) {
      let a3 = e3.length;
      if (t3 + n3 > a3 && (n3 = a3 - t3), n3 <= 0) return 0;
      let o3 = i3 + n3;
      if (o3 > this.capacity) {
        let e4 = Math.max(this.capacity * 2, 64);
        for (; e4 < o3; ) e4 *= 2;
        let t4 = (0, r2.bufferAllocUnsafe)(e4);
        this.size > 0 && this.buf.copy(t4, 0, 0, this.size), this.buf = t4, this.capacity = e4;
      }
      return i3 > this.size && this.buf.fill(0, this.size, i3), e3.copy(this.buf, i3, t3, t3 + n3), o3 > this.size && (this.size = o3), this.touch(), n3;
    }
    read(e3, t3 = 0, n3 = e3.byteLength, i3 = 0) {
      if (this.atime = /* @__PURE__ */ new Date(), i3 >= this.size) return 0;
      let a3 = n3;
      if (a3 > e3.byteLength && (a3 = e3.byteLength), a3 + i3 > this.size && (a3 = this.size - i3), a3 <= 0) return 0;
      let o3 = e3 instanceof r2.Buffer ? e3 : r2.Buffer.from(e3.buffer, e3.byteOffset, e3.byteLength);
      return this.buf.copy(o3, t3, i3, i3 + a3), a3;
    }
    truncate(e3 = 0) {
      if (!e3) {
        this.buf = d2, this.capacity = 0, this.size = 0, this.touch();
        return;
      }
      if (e3 <= this.size) this.size = e3;
      else {
        if (e3 > this.capacity) {
          let t3 = Math.max(this.capacity * 2, 64);
          for (; t3 < e3; ) t3 *= 2;
          let n3 = (0, r2.bufferAllocUnsafe)(t3);
          this.size > 0 && this.buf.copy(n3, 0, 0, this.size), n3.fill(0, this.size, e3), this.buf = n3, this.capacity = t3;
        } else this.buf.fill(0, this.size, e3);
        this.size = e3;
      }
      this.touch();
    }
    chmod(e3) {
      this.mode = this.mode & i2 | e3 & ~i2, this.touch();
    }
    chown(e3, t3) {
      this.uid = e3, this.gid = t3, this.touch();
    }
    touch() {
      this.mtime = /* @__PURE__ */ new Date(), this.changes.emit([`modify`]);
    }
    canRead(e3 = l2(), t3 = u2()) {
      return !!(this.perm & 4 || t3 === this.gid && this.perm & 32 || e3 === this.uid && this.perm & 256);
    }
    canWrite(e3 = l2(), t3 = u2()) {
      return !!(this.perm & 2 || t3 === this.gid && this.perm & 16 || e3 === this.uid && this.perm & 128);
    }
    canExecute(e3 = l2(), t3 = u2()) {
      return !!(this.perm & 1 || t3 === this.gid && this.perm & 8 || e3 === this.uid && this.perm & 64);
    }
    del() {
      this.changes.emit([`delete`]);
    }
    toJSON() {
      return { ino: this.ino, uid: this.uid, gid: this.gid, atime: this.atime.getTime(), mtime: this.mtime.getTime(), ctime: this.ctime.getTime(), perm: this.perm, mode: this.mode, nlink: this.nlink, symlink: this.symlink, data: this.getString() };
    }
  };
})), ve = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Link = void 0;
  var t2 = $(), n2 = se(), { S_IFREG: r2 } = t2.constants;
  e2.Link = class e3 {
    get steps() {
      return this._steps;
    }
    set steps(e4) {
      this._steps = e4;
      for (let [e5, t3] of this.children.entries()) e5 === `.` || e5 === `..` || t3?.syncSteps();
    }
    constructor(e4, t3, r3) {
      this.changes = new n2.FanOut(), this.children = /* @__PURE__ */ new Map(), this._steps = [], this.ino = 0, this.length = 0, this.vol = e4, this.parent = t3, this.name = r3, this.syncSteps();
    }
    setNode(e4) {
      this.node = e4, this.ino = e4.ino;
    }
    getNode() {
      return this.node;
    }
    createChild(t3, n3 = this.vol.createNode(r2 | 438)) {
      let i2 = new e3(this.vol, this, t3);
      return i2.setNode(n3), n3.isDirectory() && (i2.children.set(`.`, i2), i2.getNode().nlink++), this.setChild(t3, i2), i2;
    }
    setChild(t3, n3 = new e3(this.vol, this, t3)) {
      return this.children.set(t3, n3), n3.parent = this, this.length++, n3.getNode().isDirectory() && (n3.children.set(`..`, this), this.getNode().nlink++), this.getNode().mtime = /* @__PURE__ */ new Date(), this.changes.emit([`child:add`, n3, this]), n3;
    }
    deleteChild(e4) {
      e4.getNode().isDirectory() && (e4.children.delete(`..`), this.getNode().nlink--), this.children.delete(e4.getName()), this.length--, this.getNode().mtime = /* @__PURE__ */ new Date(), this.changes.emit([`child:del`, e4, this]);
    }
    getChild(e4) {
      return this.getNode().atime = /* @__PURE__ */ new Date(), this.children.get(e4);
    }
    getPath() {
      return this.steps.join(`/`);
    }
    getParentPath() {
      return this.steps.slice(0, -1).join(`/`) || `/`;
    }
    getName() {
      return this.steps[this.steps.length - 1];
    }
    toJSON() {
      return { steps: this.steps, ino: this.ino, children: Array.from(this.children.keys()) };
    }
    syncSteps() {
      this.steps = this.parent ? this.parent.steps.concat([this.name]) : [this.name];
    }
  };
})), ye = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.File = void 0;
  var { O_APPEND: t2 } = $().constants;
  e2.File = class {
    constructor(e3, n2, r2, i2) {
      this.link = e3, this.node = n2, this.flags = r2, this.fd = i2, this.position = 0, this.flags & t2 && (this.position = this.getSize());
    }
    getString(e3 = `utf8`) {
      return this.node.getString();
    }
    setString(e3) {
      this.node.setString(e3);
    }
    getBuffer() {
      return this.node.getBuffer();
    }
    setBuffer(e3) {
      this.node.setBuffer(e3);
    }
    getSize() {
      return this.node.getSize();
    }
    truncate(e3) {
      this.node.truncate(e3);
    }
    seekTo(e3) {
      this.position = e3;
    }
    write(e3, t3 = 0, n2 = e3.length, r2) {
      typeof r2 != `number` && (r2 = this.position);
      let i2 = this.node.write(e3, t3, n2, r2);
      return this.position = r2 + i2, i2;
    }
    read(e3, t3 = 0, n2 = e3.byteLength, r2) {
      typeof r2 != `number` && (r2 = this.position);
      let i2 = this.node.read(e3, t3, n2, r2);
      return this.position = r2 + i2, i2;
    }
    chmod(e3) {
      this.node.chmod(e3);
    }
    chown(e3, t3) {
      this.node.chown(e3, t3);
    }
  };
})), be = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.ENCODING_UTF8 = void 0, e2.assertEncoding = r2, e2.strToEncoding = i2;
  var t2 = Z(), n2 = he();
  e2.ENCODING_UTF8 = `utf8`;
  function r2(e3) {
    if (e3 && !t2.Buffer.isEncoding(e3)) throw new n2.TypeError(`ERR_INVALID_OPT_VALUE_ENCODING`, e3);
  }
  function i2(n3, r3) {
    return !r3 || r3 === e2.ENCODING_UTF8 ? n3 : r3 === `buffer` ? new t2.Buffer(n3) : new t2.Buffer(n3).toString(r3);
  }
})), xe = i(((e2, t2) => {
  a(), (function(n2) {
    var r2 = typeof e2 == `object` && e2 && !e2.nodeType && e2, i2 = typeof t2 == `object` && t2 && !t2.nodeType && t2, a2 = typeof o == `object` && o;
    (a2.global === a2 || a2.window === a2 || a2.self === a2) && (n2 = a2);
    var s2, c2 = 2147483647, l2 = 36, u2 = 1, d2 = 26, f2 = 38, p2 = 700, m2 = 72, h2 = 128, g2 = `-`, _2 = /^xn--/, v2 = /[^\x20-\x7E]/, y2 = /[\x2E\u3002\uFF0E\uFF61]/g, b2 = { overflow: `Overflow: input needs wider integers to process`, "not-basic": `Illegal input >= 0x80 (not a basic code point)`, "invalid-input": `Invalid input` }, x2 = l2 - u2, S2 = Math.floor, C2 = String.fromCharCode, w2;
    function T2(e3) {
      throw RangeError(b2[e3]);
    }
    function E2(e3, t3) {
      for (var n3 = e3.length, r3 = []; n3--; ) r3[n3] = t3(e3[n3]);
      return r3;
    }
    function D2(e3, t3) {
      var n3 = e3.split(`@`), r3 = ``;
      n3.length > 1 && (r3 = n3[0] + `@`, e3 = n3[1]), e3 = e3.replace(y2, `.`);
      var i3 = E2(e3.split(`.`), t3).join(`.`);
      return r3 + i3;
    }
    function O2(e3) {
      for (var t3 = [], n3 = 0, r3 = e3.length, i3, a3; n3 < r3; ) i3 = e3.charCodeAt(n3++), i3 >= 55296 && i3 <= 56319 && n3 < r3 ? (a3 = e3.charCodeAt(n3++), (a3 & 64512) == 56320 ? t3.push(((i3 & 1023) << 10) + (a3 & 1023) + 65536) : (t3.push(i3), n3--)) : t3.push(i3);
      return t3;
    }
    function k2(e3) {
      return E2(e3, function(e4) {
        var t3 = ``;
        return e4 > 65535 && (e4 -= 65536, t3 += C2(e4 >>> 10 & 1023 | 55296), e4 = 56320 | e4 & 1023), t3 += C2(e4), t3;
      }).join(``);
    }
    function A2(e3) {
      return e3 - 48 < 10 ? e3 - 22 : e3 - 65 < 26 ? e3 - 65 : e3 - 97 < 26 ? e3 - 97 : l2;
    }
    function j2(e3, t3) {
      return e3 + 22 + 75 * (e3 < 26) - ((t3 != 0) << 5);
    }
    function M2(e3, t3, n3) {
      var r3 = 0;
      for (e3 = n3 ? S2(e3 / p2) : e3 >> 1, e3 += S2(e3 / t3); e3 > x2 * d2 >> 1; r3 += l2) e3 = S2(e3 / x2);
      return S2(r3 + (x2 + 1) * e3 / (e3 + f2));
    }
    function N2(e3) {
      var t3 = [], n3 = e3.length, r3, i3 = 0, a3 = h2, o2 = m2, s3 = e3.lastIndexOf(g2), f3, p3, _3, v3, y3, b3, x3, C3;
      for (s3 < 0 && (s3 = 0), f3 = 0; f3 < s3; ++f3) e3.charCodeAt(f3) >= 128 && T2(`not-basic`), t3.push(e3.charCodeAt(f3));
      for (p3 = s3 > 0 ? s3 + 1 : 0; p3 < n3; ) {
        for (_3 = i3, v3 = 1, y3 = l2; p3 >= n3 && T2(`invalid-input`), b3 = A2(e3.charCodeAt(p3++)), (b3 >= l2 || b3 > S2((c2 - i3) / v3)) && T2(`overflow`), i3 += b3 * v3, x3 = y3 <= o2 ? u2 : y3 >= o2 + d2 ? d2 : y3 - o2, !(b3 < x3); y3 += l2) C3 = l2 - x3, v3 > S2(c2 / C3) && T2(`overflow`), v3 *= C3;
        r3 = t3.length + 1, o2 = M2(i3 - _3, r3, _3 == 0), S2(i3 / r3) > c2 - a3 && T2(`overflow`), a3 += S2(i3 / r3), i3 %= r3, t3.splice(i3++, 0, a3);
      }
      return k2(t3);
    }
    function P2(e3) {
      var t3, n3, r3, i3, a3, o2, s3, f3, p3, _3, v3, y3 = [], b3, x3, w3, E3;
      for (e3 = O2(e3), b3 = e3.length, t3 = h2, n3 = 0, a3 = m2, o2 = 0; o2 < b3; ++o2) v3 = e3[o2], v3 < 128 && y3.push(C2(v3));
      for (r3 = i3 = y3.length, i3 && y3.push(g2); r3 < b3; ) {
        for (s3 = c2, o2 = 0; o2 < b3; ++o2) v3 = e3[o2], v3 >= t3 && v3 < s3 && (s3 = v3);
        for (x3 = r3 + 1, s3 - t3 > S2((c2 - n3) / x3) && T2(`overflow`), n3 += (s3 - t3) * x3, t3 = s3, o2 = 0; o2 < b3; ++o2) if (v3 = e3[o2], v3 < t3 && ++n3 > c2 && T2(`overflow`), v3 == t3) {
          for (f3 = n3, p3 = l2; _3 = p3 <= a3 ? u2 : p3 >= a3 + d2 ? d2 : p3 - a3, !(f3 < _3); p3 += l2) E3 = f3 - _3, w3 = l2 - _3, y3.push(C2(j2(_3 + E3 % w3, 0))), f3 = S2(E3 / w3);
          y3.push(C2(j2(f3, 0))), a3 = M2(n3, x3, r3 == i3), n3 = 0, ++r3;
        }
        ++n3, ++t3;
      }
      return y3.join(``);
    }
    function F2(e3) {
      return D2(e3, function(e4) {
        return _2.test(e4) ? N2(e4.slice(4).toLowerCase()) : e4;
      });
    }
    function I2(e3) {
      return D2(e3, function(e4) {
        return v2.test(e4) ? `xn--` + P2(e4) : e4;
      });
    }
    if (s2 = { version: `1.4.1`, ucs2: { decode: O2, encode: k2 }, decode: N2, encode: P2, toASCII: I2, toUnicode: F2 }, typeof define == `function` && typeof define.amd == `object` && define.amd) define(`punycode`, function() {
      return s2;
    });
    else if (r2 && i2) if (t2.exports == r2) i2.exports = s2;
    else for (w2 in s2) s2.hasOwnProperty(w2) && (r2[w2] = s2[w2]);
    else n2.punycode = s2;
  })(e2);
})), Se = i(((e2, t2) => {
  t2.exports = TypeError;
})), Ce = i(((e2, t2) => {
  t2.exports = {};
})), we = i(((e2, t2) => {
  a();
  var n2 = typeof Map == `function` && Map.prototype, r2 = Object.getOwnPropertyDescriptor && n2 ? Object.getOwnPropertyDescriptor(Map.prototype, `size`) : null, i2 = n2 && r2 && typeof r2.get == `function` ? r2.get : null, s2 = n2 && Map.prototype.forEach, c2 = typeof Set == `function` && Set.prototype, l2 = Object.getOwnPropertyDescriptor && c2 ? Object.getOwnPropertyDescriptor(Set.prototype, `size`) : null, u2 = c2 && l2 && typeof l2.get == `function` ? l2.get : null, d2 = c2 && Set.prototype.forEach, f2 = typeof WeakMap == `function` && WeakMap.prototype ? WeakMap.prototype.has : null, p2 = typeof WeakSet == `function` && WeakSet.prototype ? WeakSet.prototype.has : null, m2 = typeof WeakRef == `function` && WeakRef.prototype ? WeakRef.prototype.deref : null, h2 = Boolean.prototype.valueOf, g2 = Object.prototype.toString, _2 = Function.prototype.toString, v2 = String.prototype.match, y2 = String.prototype.slice, b2 = String.prototype.replace, x2 = String.prototype.toUpperCase, S2 = String.prototype.toLowerCase, C2 = RegExp.prototype.test, w2 = Array.prototype.concat, T2 = Array.prototype.join, E2 = Array.prototype.slice, D2 = Math.floor, O2 = typeof BigInt == `function` ? BigInt.prototype.valueOf : null, k2 = Object.getOwnPropertySymbols, A2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? Symbol.prototype.toString : null, j2 = typeof Symbol == `function` && typeof Symbol.iterator == `object`, M2 = typeof Symbol == `function` && Symbol.toStringTag ? Symbol.toStringTag : null, N2 = Object.prototype.propertyIsEnumerable, P2 = (typeof Reflect == `function` ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e3) {
    return e3.__proto__;
  } : null);
  function F2(e3, t3) {
    if (e3 === 1 / 0 || e3 === -1 / 0 || e3 !== e3 || e3 && e3 > -1e3 && e3 < 1e3 || C2.call(/e/, t3)) return t3;
    var n3 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e3 == `number`) {
      var r3 = e3 < 0 ? -D2(-e3) : D2(e3);
      if (r3 !== e3) {
        var i3 = String(r3), a2 = y2.call(t3, i3.length + 1);
        return b2.call(i3, n3, `$&_`) + `.` + b2.call(b2.call(a2, /([0-9]{3})/g, `$&_`), /_$/, ``);
      }
    }
    return b2.call(t3, n3, `$&_`);
  }
  var I2 = Ce(), L2 = I2.custom, R2 = Y2(L2) ? L2 : null, z2 = { __proto__: null, double: `"`, single: `'` }, B2 = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
  t2.exports = function e3(t3, n3, r3, a2) {
    var c3 = n3 || {};
    if (X2(c3, `quoteStyle`) && !X2(z2, c3.quoteStyle)) throw TypeError(`option "quoteStyle" must be "single" or "double"`);
    if (X2(c3, `maxStringLength`) && (typeof c3.maxStringLength == `number` ? c3.maxStringLength < 0 && c3.maxStringLength !== 1 / 0 : c3.maxStringLength !== null)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var l3 = X2(c3, `customInspect`) ? c3.customInspect : true;
    if (typeof l3 != `boolean` && l3 !== `symbol`) throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (X2(c3, `indent`) && c3.indent !== null && c3.indent !== `	` && !(parseInt(c3.indent, 10) === c3.indent && c3.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (X2(c3, `numericSeparator`) && typeof c3.numericSeparator != `boolean`) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var f3 = c3.numericSeparator;
    if (t3 === void 0) return `undefined`;
    if (t3 === null) return `null`;
    if (typeof t3 == `boolean`) return t3 ? `true` : `false`;
    if (typeof t3 == `string`) return fe2(t3, c3);
    if (typeof t3 == `number`) {
      if (t3 === 0) return 1 / 0 / t3 > 0 ? `0` : `-0`;
      var p3 = String(t3);
      return f3 ? F2(t3, p3) : p3;
    }
    if (typeof t3 == `bigint`) {
      var m3 = String(t3) + `n`;
      return f3 ? F2(t3, m3) : m3;
    }
    var g3 = c3.depth === void 0 ? 5 : c3.depth;
    if (r3 === void 0 && (r3 = 0), r3 >= g3 && g3 > 0 && typeof t3 == `object`) return W2(t3) ? `[Array]` : `[Object]`;
    var _3 = $2(c3, r3);
    if (a2 === void 0) a2 = [];
    else if (ae2(a2, t3) >= 0) return `[Circular]`;
    function v3(t4, n4, i3) {
      if (n4 && (a2 = E2.call(a2), a2.push(n4)), i3) {
        var o2 = { depth: c3.depth };
        return X2(c3, `quoteStyle`) && (o2.quoteStyle = c3.quoteStyle), e3(t4, o2, r3 + 1, a2);
      }
      return e3(t4, c3, r3 + 1, a2);
    }
    if (typeof t3 == `function` && !ee2(t3)) {
      var x3 = ie2(t3), C3 = ve2(t3, v3);
      return `[Function` + (x3 ? `: ` + x3 : ` (anonymous)`) + `]` + (C3.length > 0 ? ` { ` + T2.call(C3, `, `) + ` }` : ``);
    }
    if (Y2(t3)) {
      var D3 = j2 ? b2.call(String(t3), /^(Symbol\(.*\))_[^)]*$/, `$1`) : A2.call(t3);
      return typeof t3 == `object` && !j2 ? Q2(D3) : D3;
    }
    if (de2(t3)) {
      for (var k3 = `<` + S2.call(String(t3.nodeName)), L3 = t3.attributes || [], B3 = 0; B3 < L3.length; B3++) k3 += ` ` + L3[B3].name + `=` + V2(H2(L3[B3].value), `double`, c3);
      return k3 += `>`, t3.childNodes && t3.childNodes.length && (k3 += `...`), k3 += `</` + S2.call(String(t3.nodeName)) + `>`, k3;
    }
    if (W2(t3)) {
      if (t3.length === 0) return `[]`;
      var U3 = ve2(t3, v3);
      return _3 && !ge2(U3) ? `[` + _e2(U3, _3) + `]` : `[ ` + T2.call(U3, `, `) + ` ]`;
    }
    if (K2(t3)) {
      var re3 = ve2(t3, v3);
      return !(`cause` in Error.prototype) && `cause` in t3 && !N2.call(t3, `cause`) ? `{ [` + String(t3) + `] ` + T2.call(w2.call(`[cause]: ` + v3(t3.cause), re3), `, `) + ` }` : re3.length === 0 ? `[` + String(t3) + `]` : `{ [` + String(t3) + `] ` + T2.call(re3, `, `) + ` }`;
    }
    if (typeof t3 == `object` && l3) {
      if (R2 && typeof t3[R2] == `function` && I2) return I2(t3, { depth: g3 - r3 });
      if (l3 !== `symbol` && typeof t3.inspect == `function`) return t3.inspect();
    }
    if (oe2(t3)) {
      var pe3 = [];
      return s2 && s2.call(t3, function(e4, n4) {
        pe3.push(v3(n4, t3, true) + ` => ` + v3(e4, t3));
      }), he2(`Map`, i2.call(t3), pe3, _3);
    }
    if (le2(t3)) {
      var ye2 = [];
      return d2 && d2.call(t3, function(e4) {
        ye2.push(v3(e4, t3));
      }), he2(`Set`, u2.call(t3), ye2, _3);
    }
    if (se2(t3)) return me2(`WeakMap`);
    if (ue2(t3)) return me2(`WeakSet`);
    if (ce2(t3)) return me2(`WeakRef`);
    if (q2(t3)) return Q2(v3(Number(t3)));
    if (ne2(t3)) return Q2(v3(O2.call(t3)));
    if (J2(t3)) return Q2(h2.call(t3));
    if (te2(t3)) return Q2(v3(String(t3)));
    if (typeof window < `u` && t3 === window) return `{ [object Window] }`;
    if (typeof globalThis < `u` && t3 === globalThis || o !== void 0 && t3 === o) return `{ [object globalThis] }`;
    if (!G2(t3) && !ee2(t3)) {
      var be2 = ve2(t3, v3), xe2 = P2 ? P2(t3) === Object.prototype : t3 instanceof Object || t3.constructor === Object, Se2 = t3 instanceof Object ? `` : `null prototype`, Ce2 = !xe2 && M2 && Object(t3) === t3 && M2 in t3 ? y2.call(Z2(t3), 8, -1) : Se2 ? `Object` : ``, we2 = (xe2 || typeof t3.constructor != `function` ? `` : t3.constructor.name ? t3.constructor.name + ` ` : ``) + (Ce2 || Se2 ? `[` + T2.call(w2.call([], Ce2 || [], Se2 || []), `: `) + `] ` : ``);
      return be2.length === 0 ? we2 + `{}` : _3 ? we2 + `{` + _e2(be2, _3) + `}` : we2 + `{ ` + T2.call(be2, `, `) + ` }`;
    }
    return String(t3);
  };
  function V2(e3, t3, n3) {
    var r3 = z2[n3.quoteStyle || t3];
    return r3 + e3 + r3;
  }
  function H2(e3) {
    return b2.call(String(e3), /"/g, `&quot;`);
  }
  function U2(e3) {
    return !M2 || !(typeof e3 == `object` && (M2 in e3 || e3[M2] !== void 0));
  }
  function W2(e3) {
    return Z2(e3) === `[object Array]` && U2(e3);
  }
  function G2(e3) {
    return Z2(e3) === `[object Date]` && U2(e3);
  }
  function ee2(e3) {
    return Z2(e3) === `[object RegExp]` && U2(e3);
  }
  function K2(e3) {
    return Z2(e3) === `[object Error]` && U2(e3);
  }
  function te2(e3) {
    return Z2(e3) === `[object String]` && U2(e3);
  }
  function q2(e3) {
    return Z2(e3) === `[object Number]` && U2(e3);
  }
  function J2(e3) {
    return Z2(e3) === `[object Boolean]` && U2(e3);
  }
  function Y2(e3) {
    if (j2) return e3 && typeof e3 == `object` && e3 instanceof Symbol;
    if (typeof e3 == `symbol`) return true;
    if (!e3 || typeof e3 != `object` || !A2) return false;
    try {
      return A2.call(e3), true;
    } catch {
    }
    return false;
  }
  function ne2(e3) {
    if (!e3 || typeof e3 != `object` || !O2) return false;
    try {
      return O2.call(e3), true;
    } catch {
    }
    return false;
  }
  var re2 = Object.prototype.hasOwnProperty || function(e3) {
    return e3 in this;
  };
  function X2(e3, t3) {
    return re2.call(e3, t3);
  }
  function Z2(e3) {
    return g2.call(e3);
  }
  function ie2(e3) {
    if (e3.name) return e3.name;
    var t3 = v2.call(_2.call(e3), /^function\s*([\w$]+)/);
    return t3 ? t3[1] : null;
  }
  function ae2(e3, t3) {
    if (e3.indexOf) return e3.indexOf(t3);
    for (var n3 = 0, r3 = e3.length; n3 < r3; n3++) if (e3[n3] === t3) return n3;
    return -1;
  }
  function oe2(e3) {
    if (!i2 || !e3 || typeof e3 != `object`) return false;
    try {
      i2.call(e3);
      try {
        u2.call(e3);
      } catch {
        return true;
      }
      return e3 instanceof Map;
    } catch {
    }
    return false;
  }
  function se2(e3) {
    if (!f2 || !e3 || typeof e3 != `object`) return false;
    try {
      f2.call(e3, f2);
      try {
        p2.call(e3, p2);
      } catch {
        return true;
      }
      return e3 instanceof WeakMap;
    } catch {
    }
    return false;
  }
  function ce2(e3) {
    if (!m2 || !e3 || typeof e3 != `object`) return false;
    try {
      return m2.call(e3), true;
    } catch {
    }
    return false;
  }
  function le2(e3) {
    if (!u2 || !e3 || typeof e3 != `object`) return false;
    try {
      u2.call(e3);
      try {
        i2.call(e3);
      } catch {
        return true;
      }
      return e3 instanceof Set;
    } catch {
    }
    return false;
  }
  function ue2(e3) {
    if (!p2 || !e3 || typeof e3 != `object`) return false;
    try {
      p2.call(e3, p2);
      try {
        f2.call(e3, f2);
      } catch {
        return true;
      }
      return e3 instanceof WeakSet;
    } catch {
    }
    return false;
  }
  function de2(e3) {
    return !e3 || typeof e3 != `object` ? false : typeof HTMLElement < `u` && e3 instanceof HTMLElement ? true : typeof e3.nodeName == `string` && typeof e3.getAttribute == `function`;
  }
  function fe2(e3, t3) {
    if (e3.length > t3.maxStringLength) {
      var n3 = e3.length - t3.maxStringLength, r3 = `... ` + n3 + ` more character` + (n3 > 1 ? `s` : ``);
      return fe2(y2.call(e3, 0, t3.maxStringLength), t3) + r3;
    }
    var i3 = B2[t3.quoteStyle || `single`];
    return i3.lastIndex = 0, V2(b2.call(b2.call(e3, i3, `\\$1`), /[\x00-\x1f]/g, pe2), `single`, t3);
  }
  function pe2(e3) {
    var t3 = e3.charCodeAt(0), n3 = { 8: `b`, 9: `t`, 10: `n`, 12: `f`, 13: `r` }[t3];
    return n3 ? `\\` + n3 : `\\x` + (t3 < 16 ? `0` : ``) + x2.call(t3.toString(16));
  }
  function Q2(e3) {
    return `Object(` + e3 + `)`;
  }
  function me2(e3) {
    return e3 + ` { ? }`;
  }
  function he2(e3, t3, n3, r3) {
    var i3 = r3 ? _e2(n3, r3) : T2.call(n3, `, `);
    return e3 + ` (` + t3 + `) {` + i3 + `}`;
  }
  function ge2(e3) {
    for (var t3 = 0; t3 < e3.length; t3++) if (ae2(e3[t3], `
`) >= 0) return false;
    return true;
  }
  function $2(e3, t3) {
    var n3;
    if (e3.indent === `	`) n3 = `	`;
    else if (typeof e3.indent == `number` && e3.indent > 0) n3 = T2.call(Array(e3.indent + 1), ` `);
    else return null;
    return { base: n3, prev: T2.call(Array(t3 + 1), n3) };
  }
  function _e2(e3, t3) {
    if (e3.length === 0) return ``;
    var n3 = `
` + t3.prev + t3.base;
    return n3 + T2.call(e3, `,` + n3) + `
` + t3.prev;
  }
  function ve2(e3, t3) {
    var n3 = W2(e3), r3 = [];
    if (n3) {
      r3.length = e3.length;
      for (var i3 = 0; i3 < e3.length; i3++) r3[i3] = X2(e3, i3) ? t3(e3[i3], e3) : ``;
    }
    var a2 = typeof k2 == `function` ? k2(e3) : [], o2;
    if (j2) {
      o2 = {};
      for (var s3 = 0; s3 < a2.length; s3++) o2[`$` + a2[s3]] = a2[s3];
    }
    for (var c3 in e3) X2(e3, c3) && (n3 && String(Number(c3)) === c3 && c3 < e3.length || j2 && o2[`$` + c3] instanceof Symbol || (C2.call(/[^\w$]/, c3) ? r3.push(t3(c3, e3) + `: ` + t3(e3[c3], e3)) : r3.push(c3 + `: ` + t3(e3[c3], e3))));
    if (typeof k2 == `function`) for (var l3 = 0; l3 < a2.length; l3++) N2.call(e3, a2[l3]) && r3.push(`[` + t3(a2[l3]) + `]: ` + t3(e3[a2[l3]], e3));
    return r3;
  }
})), Te = i(((e2, t2) => {
  var n2 = we(), r2 = Se(), i2 = function(e3, t3, n3) {
    for (var r3 = e3, i3; (i3 = r3.next) != null; r3 = i3) if (i3.key === t3) return r3.next = i3.next, n3 || (i3.next = e3.next, e3.next = i3), i3;
  }, a2 = function(e3, t3) {
    if (e3) {
      var n3 = i2(e3, t3);
      return n3 && n3.value;
    }
  }, o2 = function(e3, t3, n3) {
    var r3 = i2(e3, t3);
    r3 ? r3.value = n3 : e3.next = { key: t3, next: e3.next, value: n3 };
  }, s2 = function(e3, t3) {
    return e3 ? !!i2(e3, t3) : false;
  }, c2 = function(e3, t3) {
    if (e3) return i2(e3, t3, true);
  };
  t2.exports = function() {
    var e3, t3 = { assert: function(e4) {
      if (!t3.has(e4)) throw new r2(`Side channel does not contain ` + n2(e4));
    }, delete: function(t4) {
      var n3 = c2(e3, t4);
      return n3 && e3 && !e3.next && (e3 = void 0), !!n3;
    }, get: function(t4) {
      return a2(e3, t4);
    }, has: function(t4) {
      return s2(e3, t4);
    }, set: function(t4, n3) {
      e3 || (e3 = { next: void 0 }), o2(e3, t4, n3);
    } };
    return t3;
  };
})), Ee = i(((e2, t2) => {
  t2.exports = Object;
})), De = i(((e2, t2) => {
  t2.exports = Error;
})), Oe = i(((e2, t2) => {
  t2.exports = EvalError;
})), ke = i(((e2, t2) => {
  t2.exports = RangeError;
})), Ae = i(((e2, t2) => {
  t2.exports = ReferenceError;
})), je = i(((e2, t2) => {
  t2.exports = SyntaxError;
})), Me = i(((e2, t2) => {
  t2.exports = URIError;
})), Ne = i(((e2, t2) => {
  t2.exports = Math.abs;
})), Pe = i(((e2, t2) => {
  t2.exports = Math.floor;
})), Fe = i(((e2, t2) => {
  t2.exports = Math.max;
})), Ie = i(((e2, t2) => {
  t2.exports = Math.min;
})), Le = i(((e2, t2) => {
  t2.exports = Math.pow;
})), Re = i(((e2, t2) => {
  t2.exports = Math.round;
})), ze = i(((e2, t2) => {
  t2.exports = Number.isNaN || function(e3) {
    return e3 !== e3;
  };
})), Be = i(((e2, t2) => {
  var n2 = ze();
  t2.exports = function(e3) {
    return n2(e3) || e3 === 0 ? e3 : e3 < 0 ? -1 : 1;
  };
})), Ve = i(((e2, t2) => {
  t2.exports = Object.getOwnPropertyDescriptor;
})), He = i(((e2, t2) => {
  var n2 = Ve();
  if (n2) try {
    n2([], `length`);
  } catch {
    n2 = null;
  }
  t2.exports = n2;
})), Ue = i(((e2, t2) => {
  var n2 = Object.defineProperty || false;
  if (n2) try {
    n2({}, `a`, { value: 1 });
  } catch {
    n2 = false;
  }
  t2.exports = n2;
})), We = i(((e2, t2) => {
  t2.exports = function() {
    if (typeof Symbol != `function` || typeof Object.getOwnPropertySymbols != `function`) return false;
    if (typeof Symbol.iterator == `symbol`) return true;
    var e3 = {}, t3 = /* @__PURE__ */ Symbol(`test`), n2 = Object(t3);
    if (typeof t3 == `string` || Object.prototype.toString.call(t3) !== `[object Symbol]` || Object.prototype.toString.call(n2) !== `[object Symbol]`) return false;
    var r2 = 42;
    for (var i2 in e3[t3] = r2, e3) return false;
    if (typeof Object.keys == `function` && Object.keys(e3).length !== 0 || typeof Object.getOwnPropertyNames == `function` && Object.getOwnPropertyNames(e3).length !== 0) return false;
    var a2 = Object.getOwnPropertySymbols(e3);
    if (a2.length !== 1 || a2[0] !== t3 || !Object.prototype.propertyIsEnumerable.call(e3, t3)) return false;
    if (typeof Object.getOwnPropertyDescriptor == `function`) {
      var o2 = Object.getOwnPropertyDescriptor(e3, t3);
      if (o2.value !== r2 || o2.enumerable !== true) return false;
    }
    return true;
  };
})), Ge = i(((e2, t2) => {
  var n2 = typeof Symbol < `u` && Symbol, r2 = We();
  t2.exports = function() {
    return typeof n2 != `function` || typeof Symbol != `function` || typeof n2(`foo`) != `symbol` || typeof /* @__PURE__ */ Symbol(`bar`) != `symbol` ? false : r2();
  };
})), Ke = i(((e2, t2) => {
  t2.exports = typeof Reflect < `u` && Reflect.getPrototypeOf || null;
})), qe = i(((e2, t2) => {
  t2.exports = Ee().getPrototypeOf || null;
})), Je = i(((e2, t2) => {
  var n2 = `Function.prototype.bind called on incompatible `, r2 = Object.prototype.toString, i2 = Math.max, a2 = `[object Function]`, o2 = function(e3, t3) {
    for (var n3 = [], r3 = 0; r3 < e3.length; r3 += 1) n3[r3] = e3[r3];
    for (var i3 = 0; i3 < t3.length; i3 += 1) n3[i3 + e3.length] = t3[i3];
    return n3;
  }, s2 = function(e3, t3) {
    for (var n3 = [], r3 = t3 || 0, i3 = 0; r3 < e3.length; r3 += 1, i3 += 1) n3[i3] = e3[r3];
    return n3;
  }, c2 = function(e3, t3) {
    for (var n3 = ``, r3 = 0; r3 < e3.length; r3 += 1) n3 += e3[r3], r3 + 1 < e3.length && (n3 += t3);
    return n3;
  };
  t2.exports = function(e3) {
    var t3 = this;
    if (typeof t3 != `function` || r2.apply(t3) !== a2) throw TypeError(n2 + t3);
    for (var l2 = s2(arguments, 1), u2, d2 = function() {
      if (this instanceof u2) {
        var n3 = t3.apply(this, o2(l2, arguments));
        return Object(n3) === n3 ? n3 : this;
      }
      return t3.apply(e3, o2(l2, arguments));
    }, f2 = i2(0, t3.length - l2.length), p2 = [], m2 = 0; m2 < f2; m2++) p2[m2] = `$` + m2;
    if (u2 = Function(`binder`, `return function (` + c2(p2, `,`) + `){ return binder.apply(this,arguments); }`)(d2), t3.prototype) {
      var h2 = function() {
      };
      h2.prototype = t3.prototype, u2.prototype = new h2(), h2.prototype = null;
    }
    return u2;
  };
})), Ye = i(((e2, t2) => {
  var n2 = Je();
  t2.exports = Function.prototype.bind || n2;
})), Xe = i(((e2, t2) => {
  t2.exports = Function.prototype.call;
})), Ze = i(((e2, t2) => {
  t2.exports = Function.prototype.apply;
})), Qe = i(((e2, t2) => {
  t2.exports = typeof Reflect < `u` && Reflect && Reflect.apply;
})), $e = i(((e2, t2) => {
  var n2 = Ye(), r2 = Ze(), i2 = Xe();
  t2.exports = Qe() || n2.call(i2, r2);
})), et = i(((e2, t2) => {
  var n2 = Ye(), r2 = Se(), i2 = Xe(), a2 = $e();
  t2.exports = function(e3) {
    if (e3.length < 1 || typeof e3[0] != `function`) throw new r2(`a function is required`);
    return a2(n2, i2, e3);
  };
})), tt = i(((e2, t2) => {
  var n2 = et(), r2 = He(), i2;
  try {
    i2 = [].__proto__ === Array.prototype;
  } catch (e3) {
    if (!e3 || typeof e3 != `object` || !(`code` in e3) || e3.code !== `ERR_PROTO_ACCESS`) throw e3;
  }
  var a2 = !!i2 && r2 && r2(Object.prototype, `__proto__`), o2 = Object, s2 = o2.getPrototypeOf;
  t2.exports = a2 && typeof a2.get == `function` ? n2([a2.get]) : typeof s2 == `function` ? function(e3) {
    return s2(e3 == null ? e3 : o2(e3));
  } : false;
})), nt = i(((e2, t2) => {
  var n2 = Ke(), r2 = qe(), i2 = tt();
  t2.exports = n2 ? function(e3) {
    return n2(e3);
  } : r2 ? function(e3) {
    if (!e3 || typeof e3 != `object` && typeof e3 != `function`) throw TypeError(`getProto: not an object`);
    return r2(e3);
  } : i2 ? function(e3) {
    return i2(e3);
  } : null;
})), rt = i(((e2, t2) => {
  var n2 = Function.prototype.call, r2 = Object.prototype.hasOwnProperty;
  t2.exports = Ye().call(n2, r2);
})), it = i(((e2, t2) => {
  var n2, r2 = Ee(), i2 = De(), a2 = Oe(), o2 = ke(), s2 = Ae(), c2 = je(), l2 = Se(), u2 = Me(), d2 = Ne(), f2 = Pe(), p2 = Fe(), m2 = Ie(), h2 = Le(), g2 = Re(), _2 = Be(), v2 = Function, y2 = function(e3) {
    try {
      return v2(`"use strict"; return (` + e3 + `).constructor;`)();
    } catch {
    }
  }, b2 = He(), x2 = Ue(), S2 = function() {
    throw new l2();
  }, C2 = b2 ? (function() {
    try {
      return arguments.callee, S2;
    } catch {
      try {
        return b2(arguments, `callee`).get;
      } catch {
        return S2;
      }
    }
  })() : S2, w2 = Ge()(), T2 = nt(), E2 = qe(), D2 = Ke(), O2 = Ze(), k2 = Xe(), A2 = {}, j2 = typeof Uint8Array > `u` || !T2 ? n2 : T2(Uint8Array), M2 = { __proto__: null, "%AggregateError%": typeof AggregateError > `u` ? n2 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > `u` ? n2 : ArrayBuffer, "%ArrayIteratorPrototype%": w2 && T2 ? T2([][Symbol.iterator]()) : n2, "%AsyncFromSyncIteratorPrototype%": n2, "%AsyncFunction%": A2, "%AsyncGenerator%": A2, "%AsyncGeneratorFunction%": A2, "%AsyncIteratorPrototype%": A2, "%Atomics%": typeof Atomics > `u` ? n2 : Atomics, "%BigInt%": typeof BigInt > `u` ? n2 : BigInt, "%BigInt64Array%": typeof BigInt64Array > `u` ? n2 : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > `u` ? n2 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > `u` ? n2 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": i2, "%eval%": eval, "%EvalError%": a2, "%Float16Array%": typeof Float16Array > `u` ? n2 : Float16Array, "%Float32Array%": typeof Float32Array > `u` ? n2 : Float32Array, "%Float64Array%": typeof Float64Array > `u` ? n2 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > `u` ? n2 : FinalizationRegistry, "%Function%": v2, "%GeneratorFunction%": A2, "%Int8Array%": typeof Int8Array > `u` ? n2 : Int8Array, "%Int16Array%": typeof Int16Array > `u` ? n2 : Int16Array, "%Int32Array%": typeof Int32Array > `u` ? n2 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": w2 && T2 ? T2(T2([][Symbol.iterator]())) : n2, "%JSON%": typeof JSON == `object` ? JSON : n2, "%Map%": typeof Map > `u` ? n2 : Map, "%MapIteratorPrototype%": typeof Map > `u` || !w2 || !T2 ? n2 : T2((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": r2, "%Object.getOwnPropertyDescriptor%": b2, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > `u` ? n2 : Promise, "%Proxy%": typeof Proxy > `u` ? n2 : Proxy, "%RangeError%": o2, "%ReferenceError%": s2, "%Reflect%": typeof Reflect > `u` ? n2 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > `u` ? n2 : Set, "%SetIteratorPrototype%": typeof Set > `u` || !w2 || !T2 ? n2 : T2((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > `u` ? n2 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": w2 && T2 ? T2(``[Symbol.iterator]()) : n2, "%Symbol%": w2 ? Symbol : n2, "%SyntaxError%": c2, "%ThrowTypeError%": C2, "%TypedArray%": j2, "%TypeError%": l2, "%Uint8Array%": typeof Uint8Array > `u` ? n2 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > `u` ? n2 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > `u` ? n2 : Uint16Array, "%Uint32Array%": typeof Uint32Array > `u` ? n2 : Uint32Array, "%URIError%": u2, "%WeakMap%": typeof WeakMap > `u` ? n2 : WeakMap, "%WeakRef%": typeof WeakRef > `u` ? n2 : WeakRef, "%WeakSet%": typeof WeakSet > `u` ? n2 : WeakSet, "%Function.prototype.call%": k2, "%Function.prototype.apply%": O2, "%Object.defineProperty%": x2, "%Object.getPrototypeOf%": E2, "%Math.abs%": d2, "%Math.floor%": f2, "%Math.max%": p2, "%Math.min%": m2, "%Math.pow%": h2, "%Math.round%": g2, "%Math.sign%": _2, "%Reflect.getPrototypeOf%": D2 };
  if (T2) try {
    null.error;
  } catch (e3) {
    M2[`%Error.prototype%`] = T2(T2(e3));
  }
  var N2 = function e3(t3) {
    var n3;
    if (t3 === `%AsyncFunction%`) n3 = y2(`async function () {}`);
    else if (t3 === `%GeneratorFunction%`) n3 = y2(`function* () {}`);
    else if (t3 === `%AsyncGeneratorFunction%`) n3 = y2(`async function* () {}`);
    else if (t3 === `%AsyncGenerator%`) {
      var r3 = e3(`%AsyncGeneratorFunction%`);
      r3 && (n3 = r3.prototype);
    } else if (t3 === `%AsyncIteratorPrototype%`) {
      var i3 = e3(`%AsyncGenerator%`);
      i3 && T2 && (n3 = T2(i3.prototype));
    }
    return M2[t3] = n3, n3;
  }, P2 = { __proto__: null, "%ArrayBufferPrototype%": [`ArrayBuffer`, `prototype`], "%ArrayPrototype%": [`Array`, `prototype`], "%ArrayProto_entries%": [`Array`, `prototype`, `entries`], "%ArrayProto_forEach%": [`Array`, `prototype`, `forEach`], "%ArrayProto_keys%": [`Array`, `prototype`, `keys`], "%ArrayProto_values%": [`Array`, `prototype`, `values`], "%AsyncFunctionPrototype%": [`AsyncFunction`, `prototype`], "%AsyncGenerator%": [`AsyncGeneratorFunction`, `prototype`], "%AsyncGeneratorPrototype%": [`AsyncGeneratorFunction`, `prototype`, `prototype`], "%BooleanPrototype%": [`Boolean`, `prototype`], "%DataViewPrototype%": [`DataView`, `prototype`], "%DatePrototype%": [`Date`, `prototype`], "%ErrorPrototype%": [`Error`, `prototype`], "%EvalErrorPrototype%": [`EvalError`, `prototype`], "%Float32ArrayPrototype%": [`Float32Array`, `prototype`], "%Float64ArrayPrototype%": [`Float64Array`, `prototype`], "%FunctionPrototype%": [`Function`, `prototype`], "%Generator%": [`GeneratorFunction`, `prototype`], "%GeneratorPrototype%": [`GeneratorFunction`, `prototype`, `prototype`], "%Int8ArrayPrototype%": [`Int8Array`, `prototype`], "%Int16ArrayPrototype%": [`Int16Array`, `prototype`], "%Int32ArrayPrototype%": [`Int32Array`, `prototype`], "%JSONParse%": [`JSON`, `parse`], "%JSONStringify%": [`JSON`, `stringify`], "%MapPrototype%": [`Map`, `prototype`], "%NumberPrototype%": [`Number`, `prototype`], "%ObjectPrototype%": [`Object`, `prototype`], "%ObjProto_toString%": [`Object`, `prototype`, `toString`], "%ObjProto_valueOf%": [`Object`, `prototype`, `valueOf`], "%PromisePrototype%": [`Promise`, `prototype`], "%PromiseProto_then%": [`Promise`, `prototype`, `then`], "%Promise_all%": [`Promise`, `all`], "%Promise_reject%": [`Promise`, `reject`], "%Promise_resolve%": [`Promise`, `resolve`], "%RangeErrorPrototype%": [`RangeError`, `prototype`], "%ReferenceErrorPrototype%": [`ReferenceError`, `prototype`], "%RegExpPrototype%": [`RegExp`, `prototype`], "%SetPrototype%": [`Set`, `prototype`], "%SharedArrayBufferPrototype%": [`SharedArrayBuffer`, `prototype`], "%StringPrototype%": [`String`, `prototype`], "%SymbolPrototype%": [`Symbol`, `prototype`], "%SyntaxErrorPrototype%": [`SyntaxError`, `prototype`], "%TypedArrayPrototype%": [`TypedArray`, `prototype`], "%TypeErrorPrototype%": [`TypeError`, `prototype`], "%Uint8ArrayPrototype%": [`Uint8Array`, `prototype`], "%Uint8ClampedArrayPrototype%": [`Uint8ClampedArray`, `prototype`], "%Uint16ArrayPrototype%": [`Uint16Array`, `prototype`], "%Uint32ArrayPrototype%": [`Uint32Array`, `prototype`], "%URIErrorPrototype%": [`URIError`, `prototype`], "%WeakMapPrototype%": [`WeakMap`, `prototype`], "%WeakSetPrototype%": [`WeakSet`, `prototype`] }, F2 = Ye(), I2 = rt(), L2 = F2.call(k2, Array.prototype.concat), R2 = F2.call(O2, Array.prototype.splice), z2 = F2.call(k2, String.prototype.replace), B2 = F2.call(k2, String.prototype.slice), V2 = F2.call(k2, RegExp.prototype.exec), H2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, U2 = /\\(\\)?/g, W2 = function(e3) {
    var t3 = B2(e3, 0, 1), n3 = B2(e3, -1);
    if (t3 === `%` && n3 !== `%`) throw new c2("invalid intrinsic syntax, expected closing `%`");
    if (n3 === `%` && t3 !== `%`) throw new c2("invalid intrinsic syntax, expected opening `%`");
    var r3 = [];
    return z2(e3, H2, function(e4, t4, n4, i3) {
      r3[r3.length] = n4 ? z2(i3, U2, `$1`) : t4 || e4;
    }), r3;
  }, G2 = function(e3, t3) {
    var n3 = e3, r3;
    if (I2(P2, n3) && (r3 = P2[n3], n3 = `%` + r3[0] + `%`), I2(M2, n3)) {
      var i3 = M2[n3];
      if (i3 === A2 && (i3 = N2(n3)), i3 === void 0 && !t3) throw new l2(`intrinsic ` + e3 + ` exists, but is not available. Please file an issue!`);
      return { alias: r3, name: n3, value: i3 };
    }
    throw new c2(`intrinsic ` + e3 + ` does not exist!`);
  };
  t2.exports = function(e3, t3) {
    if (typeof e3 != `string` || e3.length === 0) throw new l2(`intrinsic name must be a non-empty string`);
    if (arguments.length > 1 && typeof t3 != `boolean`) throw new l2(`"allowMissing" argument must be a boolean`);
    if (V2(/^%?[^%]*%?$/, e3) === null) throw new c2("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n3 = W2(e3), r3 = n3.length > 0 ? n3[0] : ``, i3 = G2(`%` + r3 + `%`, t3), a3 = i3.name, o3 = i3.value, s3 = false, u3 = i3.alias;
    u3 && (r3 = u3[0], R2(n3, L2([0, 1], u3)));
    for (var d3 = 1, f3 = true; d3 < n3.length; d3 += 1) {
      var p3 = n3[d3], m3 = B2(p3, 0, 1), h3 = B2(p3, -1);
      if ((m3 === `"` || m3 === `'` || m3 === "`" || h3 === `"` || h3 === `'` || h3 === "`") && m3 !== h3) throw new c2(`property names with quotes must have matching quotes`);
      if ((p3 === `constructor` || !f3) && (s3 = true), r3 += `.` + p3, a3 = `%` + r3 + `%`, I2(M2, a3)) o3 = M2[a3];
      else if (o3 != null) {
        if (!(p3 in o3)) {
          if (!t3) throw new l2(`base intrinsic for ` + e3 + ` exists, but the property is not available.`);
          return;
        }
        if (b2 && d3 + 1 >= n3.length) {
          var g3 = b2(o3, p3);
          f3 = !!g3, o3 = f3 && `get` in g3 && !(`originalValue` in g3.get) ? g3.get : o3[p3];
        } else f3 = I2(o3, p3), o3 = o3[p3];
        f3 && !s3 && (M2[a3] = o3);
      }
    }
    return o3;
  };
})), at = i(((e2, t2) => {
  var n2 = it(), r2 = et(), i2 = r2([n2(`%String.prototype.indexOf%`)]);
  t2.exports = function(e3, t3) {
    var a2 = n2(e3, !!t3);
    return typeof a2 == `function` && i2(e3, `.prototype.`) > -1 ? r2([a2]) : a2;
  };
})), ot = i(((e2, t2) => {
  var n2 = it(), r2 = at(), i2 = we(), a2 = Se(), o2 = n2(`%Map%`, true), s2 = r2(`Map.prototype.get`, true), c2 = r2(`Map.prototype.set`, true), l2 = r2(`Map.prototype.has`, true), u2 = r2(`Map.prototype.delete`, true), d2 = r2(`Map.prototype.size`, true);
  t2.exports = !!o2 && function() {
    var e3, t3 = { assert: function(e4) {
      if (!t3.has(e4)) throw new a2(`Side channel does not contain ` + i2(e4));
    }, delete: function(t4) {
      if (e3) {
        var n3 = u2(e3, t4);
        return d2(e3) === 0 && (e3 = void 0), n3;
      }
      return false;
    }, get: function(t4) {
      if (e3) return s2(e3, t4);
    }, has: function(t4) {
      return e3 ? l2(e3, t4) : false;
    }, set: function(t4, n3) {
      e3 || (e3 = new o2()), c2(e3, t4, n3);
    } };
    return t3;
  };
})), st = i(((e2, t2) => {
  var n2 = it(), r2 = at(), i2 = we(), a2 = ot(), o2 = Se(), s2 = n2(`%WeakMap%`, true), c2 = r2(`WeakMap.prototype.get`, true), l2 = r2(`WeakMap.prototype.set`, true), u2 = r2(`WeakMap.prototype.has`, true), d2 = r2(`WeakMap.prototype.delete`, true);
  t2.exports = s2 ? function() {
    var e3, t3, n3 = { assert: function(e4) {
      if (!n3.has(e4)) throw new o2(`Side channel does not contain ` + i2(e4));
    }, delete: function(n4) {
      if (s2 && n4 && (typeof n4 == `object` || typeof n4 == `function`)) {
        if (e3) return d2(e3, n4);
      } else if (a2 && t3) return t3.delete(n4);
      return false;
    }, get: function(n4) {
      return s2 && n4 && (typeof n4 == `object` || typeof n4 == `function`) && e3 ? c2(e3, n4) : t3 && t3.get(n4);
    }, has: function(n4) {
      return s2 && n4 && (typeof n4 == `object` || typeof n4 == `function`) && e3 ? u2(e3, n4) : !!t3 && t3.has(n4);
    }, set: function(n4, r3) {
      s2 && n4 && (typeof n4 == `object` || typeof n4 == `function`) ? (e3 || (e3 = new s2()), l2(e3, n4, r3)) : a2 && (t3 || (t3 = a2()), t3.set(n4, r3));
    } };
    return n3;
  } : a2;
})), ct = i(((e2, t2) => {
  var n2 = Se(), r2 = we(), i2 = Te(), a2 = ot(), o2 = st() || a2 || i2;
  t2.exports = function() {
    var e3, t3 = { assert: function(e4) {
      if (!t3.has(e4)) throw new n2(`Side channel does not contain ` + r2(e4));
    }, delete: function(t4) {
      return !!e3 && e3.delete(t4);
    }, get: function(t4) {
      return e3 && e3.get(t4);
    }, has: function(t4) {
      return !!e3 && e3.has(t4);
    }, set: function(t4, n3) {
      e3 || (e3 = o2()), e3.set(t4, n3);
    } };
    return t3;
  };
})), lt = i(((e2, t2) => {
  var n2 = String.prototype.replace, r2 = /%20/g, i2 = { RFC1738: `RFC1738`, RFC3986: `RFC3986` };
  t2.exports = { default: i2.RFC3986, formatters: { RFC1738: function(e3) {
    return n2.call(e3, r2, `+`);
  }, RFC3986: function(e3) {
    return String(e3);
  } }, RFC1738: i2.RFC1738, RFC3986: i2.RFC3986 };
})), ut = i(((e2, t2) => {
  var n2 = lt(), r2 = ct(), i2 = Object.prototype.hasOwnProperty, a2 = Array.isArray, o2 = r2(), s2 = function(e3, t3) {
    return o2.set(e3, t3), e3;
  }, c2 = function(e3) {
    return o2.has(e3);
  }, l2 = function(e3) {
    return o2.get(e3);
  }, u2 = function(e3, t3) {
    o2.set(e3, t3);
  }, d2 = (function() {
    for (var e3 = [], t3 = 0; t3 < 256; ++t3) e3[e3.length] = `%` + ((t3 < 16 ? `0` : ``) + t3.toString(16)).toUpperCase();
    return e3;
  })(), f2 = function(e3) {
    for (; e3.length > 1; ) {
      var t3 = e3.pop(), n3 = t3.obj[t3.prop];
      if (a2(n3)) {
        for (var r3 = [], i3 = 0; i3 < n3.length; ++i3) n3[i3] !== void 0 && (r3[r3.length] = n3[i3]);
        t3.obj[t3.prop] = r3;
      }
    }
  }, p2 = function(e3, t3) {
    for (var n3 = t3 && t3.plainObjects ? { __proto__: null } : {}, r3 = 0; r3 < e3.length; ++r3) e3[r3] !== void 0 && (n3[r3] = e3[r3]);
    return n3;
  }, m2 = function e3(t3, n3, r3) {
    if (!n3) return t3;
    if (typeof n3 != `object` && typeof n3 != `function`) {
      if (a2(t3)) {
        var o3 = t3.length;
        if (r3 && typeof r3.arrayLimit == `number` && o3 > r3.arrayLimit) return s2(p2(t3.concat(n3), r3), o3);
        t3[o3] = n3;
      } else if (t3 && typeof t3 == `object`) if (c2(t3)) {
        var d3 = l2(t3) + 1;
        t3[d3] = n3, u2(t3, d3);
      } else if (r3 && r3.strictMerge) return [t3, n3];
      else (r3 && (r3.plainObjects || r3.allowPrototypes) || !i2.call(Object.prototype, n3)) && (t3[n3] = true);
      else return [t3, n3];
      return t3;
    }
    if (!t3 || typeof t3 != `object`) {
      if (c2(n3)) {
        for (var f3 = Object.keys(n3), m3 = r3 && r3.plainObjects ? { __proto__: null, 0: t3 } : { 0: t3 }, h3 = 0; h3 < f3.length; h3++) {
          var g3 = parseInt(f3[h3], 10);
          m3[g3 + 1] = n3[f3[h3]];
        }
        return s2(m3, l2(n3) + 1);
      }
      var _3 = [t3].concat(n3);
      return r3 && typeof r3.arrayLimit == `number` && _3.length > r3.arrayLimit ? s2(p2(_3, r3), _3.length - 1) : _3;
    }
    var v2 = t3;
    return a2(t3) && !a2(n3) && (v2 = p2(t3, r3)), a2(t3) && a2(n3) ? (n3.forEach(function(n4, a3) {
      if (i2.call(t3, a3)) {
        var o4 = t3[a3];
        o4 && typeof o4 == `object` && n4 && typeof n4 == `object` ? t3[a3] = e3(o4, n4, r3) : t3[t3.length] = n4;
      } else t3[a3] = n4;
    }), t3) : Object.keys(n3).reduce(function(t4, a3) {
      var o4 = n3[a3];
      if (i2.call(t4, a3) ? t4[a3] = e3(t4[a3], o4, r3) : t4[a3] = o4, c2(n3) && !c2(t4) && s2(t4, l2(n3)), c2(t4)) {
        var d4 = parseInt(a3, 10);
        String(d4) === a3 && d4 >= 0 && d4 > l2(t4) && u2(t4, d4);
      }
      return t4;
    }, v2);
  }, h2 = function(e3, t3) {
    return Object.keys(t3).reduce(function(e4, n3) {
      return e4[n3] = t3[n3], e4;
    }, e3);
  }, g2 = function(e3, t3, n3) {
    var r3 = e3.replace(/\+/g, ` `);
    if (n3 === `iso-8859-1`) return r3.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(r3);
    } catch {
      return r3;
    }
  }, _2 = 1024;
  t2.exports = { arrayToObject: p2, assign: h2, combine: function(e3, t3, n3, r3) {
    if (c2(e3)) {
      var i3 = l2(e3) + 1;
      return e3[i3] = t3, u2(e3, i3), e3;
    }
    var a3 = [].concat(e3, t3);
    return a3.length > n3 ? s2(p2(a3, { plainObjects: r3 }), a3.length - 1) : a3;
  }, compact: function(e3) {
    for (var t3 = [{ obj: { o: e3 }, prop: `o` }], n3 = [], r3 = 0; r3 < t3.length; ++r3) for (var i3 = t3[r3], a3 = i3.obj[i3.prop], o3 = Object.keys(a3), s3 = 0; s3 < o3.length; ++s3) {
      var c3 = o3[s3], l3 = a3[c3];
      typeof l3 == `object` && l3 && n3.indexOf(l3) === -1 && (t3[t3.length] = { obj: a3, prop: c3 }, n3[n3.length] = l3);
    }
    return f2(t3), e3;
  }, decode: g2, encode: function(e3, t3, r3, i3, a3) {
    if (e3.length === 0) return e3;
    var o3 = e3;
    if (typeof e3 == `symbol` ? o3 = Symbol.prototype.toString.call(e3) : typeof e3 != `string` && (o3 = String(e3)), r3 === `iso-8859-1`) return escape(o3).replace(/%u[0-9a-f]{4}/gi, function(e4) {
      return `%26%23` + parseInt(e4.slice(2), 16) + `%3B`;
    });
    for (var s3 = ``, c3 = 0; c3 < o3.length; c3 += _2) {
      for (var l3 = o3.length >= _2 ? o3.slice(c3, c3 + _2) : o3, u3 = [], f3 = 0; f3 < l3.length; ++f3) {
        var p3 = l3.charCodeAt(f3);
        if (p3 === 45 || p3 === 46 || p3 === 95 || p3 === 126 || p3 >= 48 && p3 <= 57 || p3 >= 65 && p3 <= 90 || p3 >= 97 && p3 <= 122 || a3 === n2.RFC1738 && (p3 === 40 || p3 === 41)) {
          u3[u3.length] = l3.charAt(f3);
          continue;
        }
        if (p3 < 128) {
          u3[u3.length] = d2[p3];
          continue;
        }
        if (p3 < 2048) {
          u3[u3.length] = d2[192 | p3 >> 6] + d2[128 | p3 & 63];
          continue;
        }
        if (p3 < 55296 || p3 >= 57344) {
          u3[u3.length] = d2[224 | p3 >> 12] + d2[128 | p3 >> 6 & 63] + d2[128 | p3 & 63];
          continue;
        }
        f3 += 1, p3 = 65536 + ((p3 & 1023) << 10 | l3.charCodeAt(f3) & 1023), u3[u3.length] = d2[240 | p3 >> 18] + d2[128 | p3 >> 12 & 63] + d2[128 | p3 >> 6 & 63] + d2[128 | p3 & 63];
      }
      s3 += u3.join(``);
    }
    return s3;
  }, isBuffer: function(e3) {
    return !e3 || typeof e3 != `object` ? false : !!(e3.constructor && e3.constructor.isBuffer && e3.constructor.isBuffer(e3));
  }, isOverflow: c2, isRegExp: function(e3) {
    return Object.prototype.toString.call(e3) === `[object RegExp]`;
  }, markOverflow: s2, maybeMap: function(e3, t3) {
    if (a2(e3)) {
      for (var n3 = [], r3 = 0; r3 < e3.length; r3 += 1) n3[n3.length] = t3(e3[r3]);
      return n3;
    }
    return t3(e3);
  }, merge: m2 };
})), dt = i(((e2, t2) => {
  var n2 = ct(), r2 = ut(), i2 = lt(), a2 = Object.prototype.hasOwnProperty, o2 = { brackets: function(e3) {
    return e3 + `[]`;
  }, comma: `comma`, indices: function(e3, t3) {
    return e3 + `[` + t3 + `]`;
  }, repeat: function(e3) {
    return e3;
  } }, s2 = Array.isArray, c2 = Array.prototype.push, l2 = function(e3, t3) {
    c2.apply(e3, s2(t3) ? t3 : [t3]);
  }, u2 = Date.prototype.toISOString, d2 = i2.default, f2 = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: `indices`, charset: `utf-8`, charsetSentinel: false, commaRoundTrip: false, delimiter: `&`, encode: true, encodeDotInKeys: false, encoder: r2.encode, encodeValuesOnly: false, filter: void 0, format: d2, formatter: i2.formatters[d2], indices: false, serializeDate: function(e3) {
    return u2.call(e3);
  }, skipNulls: false, strictNullHandling: false }, p2 = function(e3) {
    return typeof e3 == `string` || typeof e3 == `number` || typeof e3 == `boolean` || typeof e3 == `symbol` || typeof e3 == `bigint`;
  }, m2 = {}, h2 = function e3(t3, i3, a3, o3, c3, u3, d3, h3, g3, _2, v2, y2, b2, x2, S2, C2, w2, T2) {
    for (var E2 = t3, D2 = T2, O2 = 0, k2 = false; (D2 = D2.get(m2)) !== void 0 && !k2; ) {
      var A2 = D2.get(t3);
      if (O2 += 1, A2 !== void 0) {
        if (A2 === O2) throw RangeError(`Cyclic object value`);
        k2 = true;
      }
      D2.get(m2) === void 0 && (O2 = 0);
    }
    if (typeof _2 == `function` ? E2 = _2(i3, E2) : E2 instanceof Date ? E2 = b2(E2) : a3 === `comma` && s2(E2) && (E2 = r2.maybeMap(E2, function(e4) {
      return e4 instanceof Date ? b2(e4) : e4;
    })), E2 === null) {
      if (u3) return g3 && !C2 ? g3(i3, f2.encoder, w2, `key`, x2) : i3;
      E2 = ``;
    }
    if (p2(E2) || r2.isBuffer(E2)) return g3 ? [S2(C2 ? i3 : g3(i3, f2.encoder, w2, `key`, x2)) + `=` + S2(g3(E2, f2.encoder, w2, `value`, x2))] : [S2(i3) + `=` + S2(String(E2))];
    var j2 = [];
    if (E2 === void 0) return j2;
    var M2;
    if (a3 === `comma` && s2(E2)) C2 && g3 && (E2 = r2.maybeMap(E2, g3)), M2 = [{ value: E2.length > 0 ? E2.join(`,`) || null : void 0 }];
    else if (s2(_2)) M2 = _2;
    else {
      var N2 = Object.keys(E2);
      M2 = v2 ? N2.sort(v2) : N2;
    }
    var P2 = h3 ? String(i3).replace(/\./g, `%2E`) : String(i3), F2 = o3 && s2(E2) && E2.length === 1 ? P2 + `[]` : P2;
    if (c3 && s2(E2) && E2.length === 0) return F2 + `[]`;
    for (var I2 = 0; I2 < M2.length; ++I2) {
      var L2 = M2[I2], R2 = typeof L2 == `object` && L2 && L2.value !== void 0 ? L2.value : E2[L2];
      if (!(d3 && R2 === null)) {
        var z2 = y2 && h3 ? String(L2).replace(/\./g, `%2E`) : String(L2), B2 = s2(E2) ? typeof a3 == `function` ? a3(F2, z2) : F2 : F2 + (y2 ? `.` + z2 : `[` + z2 + `]`);
        T2.set(t3, O2);
        var V2 = n2();
        V2.set(m2, T2), l2(j2, e3(R2, B2, a3, o3, c3, u3, d3, h3, a3 === `comma` && C2 && s2(E2) ? null : g3, _2, v2, y2, b2, x2, S2, C2, w2, V2));
      }
    }
    return j2;
  }, g2 = function(e3) {
    if (!e3) return f2;
    if (e3.allowEmptyArrays !== void 0 && typeof e3.allowEmptyArrays != `boolean`) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (e3.encodeDotInKeys !== void 0 && typeof e3.encodeDotInKeys != `boolean`) throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (e3.encoder !== null && e3.encoder !== void 0 && typeof e3.encoder != `function`) throw TypeError(`Encoder has to be a function.`);
    var t3 = e3.charset || f2.charset;
    if (e3.charset !== void 0 && e3.charset !== `utf-8` && e3.charset !== `iso-8859-1`) throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);
    var n3 = i2.default;
    if (e3.format !== void 0) {
      if (!a2.call(i2.formatters, e3.format)) throw TypeError(`Unknown format option provided.`);
      n3 = e3.format;
    }
    var r3 = i2.formatters[n3], c3 = f2.filter;
    (typeof e3.filter == `function` || s2(e3.filter)) && (c3 = e3.filter);
    var l3 = e3.arrayFormat in o2 ? e3.arrayFormat : `indices` in e3 ? e3.indices ? `indices` : `repeat` : f2.arrayFormat;
    if (`commaRoundTrip` in e3 && typeof e3.commaRoundTrip != `boolean`) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
    var u3 = e3.allowDots === void 0 ? e3.encodeDotInKeys === true ? true : f2.allowDots : !!e3.allowDots;
    return { addQueryPrefix: typeof e3.addQueryPrefix == `boolean` ? e3.addQueryPrefix : f2.addQueryPrefix, allowDots: u3, allowEmptyArrays: typeof e3.allowEmptyArrays == `boolean` ? !!e3.allowEmptyArrays : f2.allowEmptyArrays, arrayFormat: l3, charset: t3, charsetSentinel: typeof e3.charsetSentinel == `boolean` ? e3.charsetSentinel : f2.charsetSentinel, commaRoundTrip: !!e3.commaRoundTrip, delimiter: e3.delimiter === void 0 ? f2.delimiter : e3.delimiter, encode: typeof e3.encode == `boolean` ? e3.encode : f2.encode, encodeDotInKeys: typeof e3.encodeDotInKeys == `boolean` ? e3.encodeDotInKeys : f2.encodeDotInKeys, encoder: typeof e3.encoder == `function` ? e3.encoder : f2.encoder, encodeValuesOnly: typeof e3.encodeValuesOnly == `boolean` ? e3.encodeValuesOnly : f2.encodeValuesOnly, filter: c3, format: n3, formatter: r3, serializeDate: typeof e3.serializeDate == `function` ? e3.serializeDate : f2.serializeDate, skipNulls: typeof e3.skipNulls == `boolean` ? e3.skipNulls : f2.skipNulls, sort: typeof e3.sort == `function` ? e3.sort : null, strictNullHandling: typeof e3.strictNullHandling == `boolean` ? e3.strictNullHandling : f2.strictNullHandling };
  };
  t2.exports = function(e3, t3) {
    var r3 = e3, i3 = g2(t3), a3, c3;
    typeof i3.filter == `function` ? (c3 = i3.filter, r3 = c3(``, r3)) : s2(i3.filter) && (c3 = i3.filter, a3 = c3);
    var u3 = [];
    if (typeof r3 != `object` || !r3) return ``;
    var d3 = o2[i3.arrayFormat], f3 = d3 === `comma` && i3.commaRoundTrip;
    a3 || (a3 = Object.keys(r3)), i3.sort && a3.sort(i3.sort);
    for (var p3 = n2(), m3 = 0; m3 < a3.length; ++m3) {
      var _2 = a3[m3], v2 = r3[_2];
      i3.skipNulls && v2 === null || l2(u3, h2(v2, _2, d3, f3, i3.allowEmptyArrays, i3.strictNullHandling, i3.skipNulls, i3.encodeDotInKeys, i3.encode ? i3.encoder : null, i3.filter, i3.sort, i3.allowDots, i3.serializeDate, i3.format, i3.formatter, i3.encodeValuesOnly, i3.charset, p3));
    }
    var y2 = u3.join(i3.delimiter), b2 = i3.addQueryPrefix === true ? `?` : ``;
    return i3.charsetSentinel && (i3.charset === `iso-8859-1` ? b2 += `utf8=%26%2310003%3B&` : b2 += `utf8=%E2%9C%93&`), y2.length > 0 ? b2 + y2 : ``;
  };
})), ft = i(((e2, t2) => {
  var n2 = ut(), r2 = Object.prototype.hasOwnProperty, i2 = Array.isArray, a2 = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: `utf-8`, charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: n2.decode, delimiter: `&`, depth: 5, duplicates: `combine`, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictDepth: false, strictMerge: true, strictNullHandling: false, throwOnLimitExceeded: false }, o2 = function(e3) {
    return e3.replace(/&#(\d+);/g, function(e4, t3) {
      return String.fromCharCode(parseInt(t3, 10));
    });
  }, s2 = function(e3, t3, n3) {
    if (e3 && typeof e3 == `string` && t3.comma && e3.indexOf(`,`) > -1) return e3.split(`,`);
    if (t3.throwOnLimitExceeded && n3 >= t3.arrayLimit) throw RangeError(`Array limit exceeded. Only ` + t3.arrayLimit + ` element` + (t3.arrayLimit === 1 ? `` : `s`) + ` allowed in an array.`);
    return e3;
  }, c2 = `utf8=%26%2310003%3B`, l2 = `utf8=%E2%9C%93`, u2 = function(e3, t3) {
    var u3 = { __proto__: null }, d3 = t3.ignoreQueryPrefix ? e3.replace(/^\?/, ``) : e3;
    d3 = d3.replace(/%5B/gi, `[`).replace(/%5D/gi, `]`);
    var f3 = t3.parameterLimit === 1 / 0 ? void 0 : t3.parameterLimit, p3 = d3.split(t3.delimiter, t3.throwOnLimitExceeded && f3 !== void 0 ? f3 + 1 : f3);
    if (t3.throwOnLimitExceeded && f3 !== void 0 && p3.length > f3) throw RangeError(`Parameter limit exceeded. Only ` + f3 + ` parameter` + (f3 === 1 ? `` : `s`) + ` allowed.`);
    var m3 = -1, h2, g2 = t3.charset;
    if (t3.charsetSentinel) for (h2 = 0; h2 < p3.length; ++h2) p3[h2].indexOf(`utf8=`) === 0 && (p3[h2] === l2 ? g2 = `utf-8` : p3[h2] === c2 && (g2 = `iso-8859-1`), m3 = h2, h2 = p3.length);
    for (h2 = 0; h2 < p3.length; ++h2) if (h2 !== m3) {
      var _2 = p3[h2], v2 = _2.indexOf(`]=`), y2 = v2 === -1 ? _2.indexOf(`=`) : v2 + 1, b2, x2;
      if (y2 === -1 ? (b2 = t3.decoder(_2, a2.decoder, g2, `key`), x2 = t3.strictNullHandling ? null : ``) : (b2 = t3.decoder(_2.slice(0, y2), a2.decoder, g2, `key`), b2 !== null && (x2 = n2.maybeMap(s2(_2.slice(y2 + 1), t3, i2(u3[b2]) ? u3[b2].length : 0), function(e4) {
        return t3.decoder(e4, a2.decoder, g2, `value`);
      }))), x2 && t3.interpretNumericEntities && g2 === `iso-8859-1` && (x2 = o2(String(x2))), _2.indexOf(`[]=`) > -1 && (x2 = i2(x2) ? [x2] : x2), t3.comma && i2(x2) && x2.length > t3.arrayLimit) {
        if (t3.throwOnLimitExceeded) throw RangeError(`Array limit exceeded. Only ` + t3.arrayLimit + ` element` + (t3.arrayLimit === 1 ? `` : `s`) + ` allowed in an array.`);
        x2 = n2.combine([], x2, t3.arrayLimit, t3.plainObjects);
      }
      if (b2 !== null) {
        var S2 = r2.call(u3, b2);
        S2 && (t3.duplicates === `combine` || _2.indexOf(`[]=`) > -1) ? u3[b2] = n2.combine(u3[b2], x2, t3.arrayLimit, t3.plainObjects) : (!S2 || t3.duplicates === `last`) && (u3[b2] = x2);
      }
    }
    return u3;
  }, d2 = function(e3, t3, r3, i3) {
    var a3 = 0;
    if (e3.length > 0 && e3[e3.length - 1] === `[]`) {
      var o3 = e3.slice(0, -1).join(``);
      a3 = Array.isArray(t3) && t3[o3] ? t3[o3].length : 0;
    }
    for (var c3 = i3 ? t3 : s2(t3, r3, a3), l3 = e3.length - 1; l3 >= 0; --l3) {
      var u3, d3 = e3[l3];
      if (d3 === `[]` && r3.parseArrays) u3 = n2.isOverflow(c3) ? c3 : r3.allowEmptyArrays && (c3 === `` || r3.strictNullHandling && c3 === null) ? [] : n2.combine([], c3, r3.arrayLimit, r3.plainObjects);
      else {
        u3 = r3.plainObjects ? { __proto__: null } : {};
        var f3 = d3.charAt(0) === `[` && d3.charAt(d3.length - 1) === `]` ? d3.slice(1, -1) : d3, p3 = r3.decodeDotInKeys ? f3.replace(/%2E/g, `.`) : f3, m3 = parseInt(p3, 10), h2 = !isNaN(m3) && d3 !== p3 && String(m3) === p3 && m3 >= 0 && r3.parseArrays;
        if (!r3.parseArrays && p3 === ``) u3 = { 0: c3 };
        else if (h2 && m3 < r3.arrayLimit) u3 = [], u3[m3] = c3;
        else if (h2 && r3.throwOnLimitExceeded) throw RangeError(`Array limit exceeded. Only ` + r3.arrayLimit + ` element` + (r3.arrayLimit === 1 ? `` : `s`) + ` allowed in an array.`);
        else h2 ? (u3[m3] = c3, n2.markOverflow(u3, m3)) : p3 !== `__proto__` && (u3[p3] = c3);
      }
      c3 = u3;
    }
    return c3;
  }, f2 = function(e3, t3) {
    var n3 = t3.allowDots ? e3.replace(/\.([^.[]+)/g, `[$1]`) : e3;
    if (t3.depth <= 0) return !t3.plainObjects && r2.call(Object.prototype, n3) && !t3.allowPrototypes ? void 0 : [n3];
    var i3 = /(\[[^[\]]*])/, a3 = /(\[[^[\]]*])/g, o3 = i3.exec(n3), s3 = o3 ? n3.slice(0, o3.index) : n3, c3 = [];
    if (s3) {
      if (!t3.plainObjects && r2.call(Object.prototype, s3) && !t3.allowPrototypes) return;
      c3[c3.length] = s3;
    }
    for (var l3 = 0; (o3 = a3.exec(n3)) !== null && l3 < t3.depth; ) {
      l3 += 1;
      var u3 = o3[1].slice(1, -1);
      if (!t3.plainObjects && r2.call(Object.prototype, u3) && !t3.allowPrototypes) return;
      c3[c3.length] = o3[1];
    }
    if (o3) {
      if (t3.strictDepth === true) throw RangeError(`Input depth exceeded depth option of ` + t3.depth + ` and strictDepth is true`);
      c3[c3.length] = `[` + n3.slice(o3.index) + `]`;
    }
    return c3;
  }, p2 = function(e3, t3, n3, r3) {
    if (e3) {
      var i3 = f2(e3, n3);
      if (i3) return d2(i3, t3, n3, r3);
    }
  }, m2 = function(e3) {
    if (!e3) return a2;
    if (e3.allowEmptyArrays !== void 0 && typeof e3.allowEmptyArrays != `boolean`) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (e3.decodeDotInKeys !== void 0 && typeof e3.decodeDotInKeys != `boolean`) throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (e3.decoder !== null && e3.decoder !== void 0 && typeof e3.decoder != `function`) throw TypeError(`Decoder has to be a function.`);
    if (e3.charset !== void 0 && e3.charset !== `utf-8` && e3.charset !== `iso-8859-1`) throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);
    if (e3.throwOnLimitExceeded !== void 0 && typeof e3.throwOnLimitExceeded != `boolean`) throw TypeError("`throwOnLimitExceeded` option must be a boolean");
    var t3 = e3.charset === void 0 ? a2.charset : e3.charset, r3 = e3.duplicates === void 0 ? a2.duplicates : e3.duplicates;
    if (r3 !== `combine` && r3 !== `first` && r3 !== `last`) throw TypeError(`The duplicates option must be either combine, first, or last`);
    return { allowDots: e3.allowDots === void 0 ? e3.decodeDotInKeys === true ? true : a2.allowDots : !!e3.allowDots, allowEmptyArrays: typeof e3.allowEmptyArrays == `boolean` ? !!e3.allowEmptyArrays : a2.allowEmptyArrays, allowPrototypes: typeof e3.allowPrototypes == `boolean` ? e3.allowPrototypes : a2.allowPrototypes, allowSparse: typeof e3.allowSparse == `boolean` ? e3.allowSparse : a2.allowSparse, arrayLimit: typeof e3.arrayLimit == `number` ? e3.arrayLimit : a2.arrayLimit, charset: t3, charsetSentinel: typeof e3.charsetSentinel == `boolean` ? e3.charsetSentinel : a2.charsetSentinel, comma: typeof e3.comma == `boolean` ? e3.comma : a2.comma, decodeDotInKeys: typeof e3.decodeDotInKeys == `boolean` ? e3.decodeDotInKeys : a2.decodeDotInKeys, decoder: typeof e3.decoder == `function` ? e3.decoder : a2.decoder, delimiter: typeof e3.delimiter == `string` || n2.isRegExp(e3.delimiter) ? e3.delimiter : a2.delimiter, depth: typeof e3.depth == `number` || e3.depth === false ? +e3.depth : a2.depth, duplicates: r3, ignoreQueryPrefix: e3.ignoreQueryPrefix === true, interpretNumericEntities: typeof e3.interpretNumericEntities == `boolean` ? e3.interpretNumericEntities : a2.interpretNumericEntities, parameterLimit: typeof e3.parameterLimit == `number` ? e3.parameterLimit : a2.parameterLimit, parseArrays: e3.parseArrays !== false, plainObjects: typeof e3.plainObjects == `boolean` ? e3.plainObjects : a2.plainObjects, strictDepth: typeof e3.strictDepth == `boolean` ? !!e3.strictDepth : a2.strictDepth, strictMerge: typeof e3.strictMerge == `boolean` ? !!e3.strictMerge : a2.strictMerge, strictNullHandling: typeof e3.strictNullHandling == `boolean` ? e3.strictNullHandling : a2.strictNullHandling, throwOnLimitExceeded: typeof e3.throwOnLimitExceeded == `boolean` ? e3.throwOnLimitExceeded : false };
  };
  t2.exports = function(e3, t3) {
    var r3 = m2(t3);
    if (e3 === `` || e3 == null) return r3.plainObjects ? { __proto__: null } : {};
    for (var i3 = typeof e3 == `string` ? u2(e3, r3) : e3, a3 = r3.plainObjects ? { __proto__: null } : {}, o3 = Object.keys(i3), s3 = 0; s3 < o3.length; ++s3) {
      var c3 = o3[s3], l3 = p2(c3, i3[c3], r3, typeof e3 == `string`);
      a3 = n2.merge(a3, l3, r3);
    }
    return r3.allowSparse === true ? a3 : n2.compact(a3);
  };
})), pt = i(((e2, t2) => {
  var n2 = dt(), r2 = ft();
  t2.exports = { formats: lt(), parse: r2, stringify: n2 };
})), mt = r({ URL: () => $t, URLSearchParams: () => en, Url: () => Qt, default: () => pn, domainToASCII: () => cn, domainToUnicode: () => ln, fileURLToPath: () => dn, format: () => fn, parse: () => Xt, pathToFileURL: () => un, resolve: () => Zt, resolveObject: () => Gt });
function ht() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
function gt(e2, t2, n2) {
  if (e2 && typeof e2 == `object` && e2 instanceof ht) return e2;
  var r2 = new ht();
  return r2.parse(e2, t2, n2), r2;
}
function _t(e2) {
  return typeof e2 == `string` && (e2 = gt(e2)), e2 instanceof ht ? e2.format() : ht.prototype.format.call(e2);
}
function vt(e2, t2) {
  return gt(e2, false, true).resolve(t2);
}
function yt(e2, t2) {
  return e2 ? gt(e2, false, true).resolveObject(t2) : t2;
}
function bt(e2, t2) {
  for (var n2 = 0, r2 = e2.length - 1; r2 >= 0; r2--) {
    var i2 = e2[r2];
    i2 === `.` ? e2.splice(r2, 1) : i2 === `..` ? (e2.splice(r2, 1), n2++) : n2 && (e2.splice(r2, 1), n2--);
  }
  if (t2) for (; n2--; ) e2.unshift(`..`);
  return e2;
}
function xt() {
  for (var e2 = ``, t2 = false, n2 = arguments.length - 1; n2 >= -1 && !t2; n2--) {
    var r2 = n2 >= 0 ? arguments[n2] : `/`;
    if (typeof r2 != `string`) throw TypeError(`Arguments to path.resolve must be strings`);
    r2 && (e2 = r2 + `/` + e2, t2 = r2.charAt(0) === `/`);
  }
  return e2 = bt(St(e2.split(`/`), function(e3) {
    return !!e3;
  }), !t2).join(`/`), (t2 ? `/` : ``) + e2 || `.`;
}
function St(e2, t2) {
  if (e2.filter) return e2.filter(t2);
  for (var n2 = [], r2 = 0; r2 < e2.length; r2++) t2(e2[r2], r2, e2) && n2.push(e2[r2]);
  return n2;
}
function Ct(e2) {
  var t2 = e2 ?? null;
  return !!(t2 !== null && t2?.href && t2?.origin);
}
function wt(e2) {
  if (e2.hostname !== ``) throw TypeError(`File URL host must be "localhost" or empty on browser`);
  for (var t2 = e2.pathname, n2 = 0; n2 < t2.length; n2++) if (t2[n2] === `%`) {
    var r2 = t2.codePointAt(n2 + 2) | 32;
    if (t2[n2 + 1] === `2` && r2 === 102) throw TypeError(`File URL path must not include encoded / characters`);
  }
  return decodeURIComponent(t2);
}
function Tt(e2) {
  return e2.includes(`%`) && (e2 = e2.replace(tn, `%25`)), e2.includes(`\\`) && (e2 = e2.replace(nn, `%5C`)), e2.includes(`
`) && (e2 = e2.replace(rn, `%0A`)), e2.includes(`\r`) && (e2 = e2.replace(an, `%0D`)), e2.includes(`	`) && (e2 = e2.replace(on, `%09`)), e2;
}
var Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn = t((() => {
  Et = n(xe()), Dt = n(pt()), Ot = Et.default, kt = /^([a-z0-9.+-]+:)/i, At = /:[0-9]*$/, jt = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, Mt = [`{`, `}`, `|`, `\\`, `^`, "`", `<`, `>`, `"`, "`", ` `, `\r`, `
`, `	`], Nt = [`'`].concat(Mt), Pt = [`%`, `/`, `?`, `;`, `#`].concat(Nt), Ft = [`/`, `?`, `#`], It = 255, Lt = /^[+a-z0-9A-Z_-]{0,63}$/, Rt = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, zt = { javascript: true, "javascript:": true }, Bt = { javascript: true, "javascript:": true }, Vt = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true }, Ht = Dt.default, ht.prototype.parse = function(e2, t2, n2) {
    if (typeof e2 != `string`) throw TypeError(`Parameter 'url' must be a string, not ` + typeof e2);
    var r2 = e2.indexOf(`?`), i2 = r2 !== -1 && r2 < e2.indexOf(`#`) ? `?` : `#`, a2 = e2.split(i2);
    a2[0] = a2[0].replace(/\\/g, `/`), e2 = a2.join(i2);
    var o2 = e2;
    if (o2 = o2.trim(), !n2 && e2.split(`#`).length === 1) {
      var s2 = jt.exec(o2);
      if (s2) return this.path = o2, this.href = o2, this.pathname = s2[1], s2[2] ? (this.search = s2[2], t2 ? this.query = Ht.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t2 && (this.search = ``, this.query = {}), this;
    }
    var c2 = kt.exec(o2);
    if (c2) {
      c2 = c2[0];
      var l2 = c2.toLowerCase();
      this.protocol = l2, o2 = o2.substr(c2.length);
    }
    if (n2 || c2 || o2.match(/^\/\/[^@/]+@[^@/]+/)) {
      var u2 = o2.substr(0, 2) === `//`;
      u2 && !(c2 && Bt[c2]) && (o2 = o2.substr(2), this.slashes = true);
    }
    if (!Bt[c2] && (u2 || c2 && !Vt[c2])) {
      for (var d2 = -1, f2 = 0; f2 < Ft.length; f2++) {
        var p2 = o2.indexOf(Ft[f2]);
        p2 !== -1 && (d2 === -1 || p2 < d2) && (d2 = p2);
      }
      var m2, h2 = d2 === -1 ? o2.lastIndexOf(`@`) : o2.lastIndexOf(`@`, d2);
      h2 !== -1 && (m2 = o2.slice(0, h2), o2 = o2.slice(h2 + 1), this.auth = decodeURIComponent(m2)), d2 = -1;
      for (var f2 = 0; f2 < Pt.length; f2++) {
        var p2 = o2.indexOf(Pt[f2]);
        p2 !== -1 && (d2 === -1 || p2 < d2) && (d2 = p2);
      }
      d2 === -1 && (d2 = o2.length), this.host = o2.slice(0, d2), o2 = o2.slice(d2), this.parseHost(), this.hostname = this.hostname || ``;
      var g2 = this.hostname[0] === `[` && this.hostname[this.hostname.length - 1] === `]`;
      if (!g2) for (var _2 = this.hostname.split(/\./), f2 = 0, v2 = _2.length; f2 < v2; f2++) {
        var y2 = _2[f2];
        if (y2 && !y2.match(Lt)) {
          for (var b2 = ``, x2 = 0, S2 = y2.length; x2 < S2; x2++) y2.charCodeAt(x2) > 127 ? b2 += `x` : b2 += y2[x2];
          if (!b2.match(Lt)) {
            var C2 = _2.slice(0, f2), w2 = _2.slice(f2 + 1), T2 = y2.match(Rt);
            T2 && (C2.push(T2[1]), w2.unshift(T2[2])), w2.length && (o2 = `/` + w2.join(`.`) + o2), this.hostname = C2.join(`.`);
            break;
          }
        }
      }
      this.hostname.length > It ? this.hostname = `` : this.hostname = this.hostname.toLowerCase(), g2 || (this.hostname = Ot.toASCII(this.hostname));
      var E2 = this.port ? `:` + this.port : ``, D2 = this.hostname || ``;
      this.host = D2 + E2, this.href += this.host, g2 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), o2[0] !== `/` && (o2 = `/` + o2));
    }
    if (!zt[l2]) for (var f2 = 0, v2 = Nt.length; f2 < v2; f2++) {
      var O2 = Nt[f2];
      if (o2.indexOf(O2) !== -1) {
        var k2 = encodeURIComponent(O2);
        k2 === O2 && (k2 = escape(O2)), o2 = o2.split(O2).join(k2);
      }
    }
    var A2 = o2.indexOf(`#`);
    A2 !== -1 && (this.hash = o2.substr(A2), o2 = o2.slice(0, A2));
    var j2 = o2.indexOf(`?`);
    if (j2 === -1 ? t2 && (this.search = ``, this.query = {}) : (this.search = o2.substr(j2), this.query = o2.substr(j2 + 1), t2 && (this.query = Ht.parse(this.query)), o2 = o2.slice(0, j2)), o2 && (this.pathname = o2), Vt[l2] && this.hostname && !this.pathname && (this.pathname = `/`), this.pathname || this.search) {
      var E2 = this.pathname || ``, M2 = this.search || ``;
      this.path = E2 + M2;
    }
    return this.href = this.format(), this;
  }, ht.prototype.format = function() {
    var e2 = this.auth || ``;
    e2 && (e2 = encodeURIComponent(e2), e2 = e2.replace(/%3A/i, `:`), e2 += `@`);
    var t2 = this.protocol || ``, n2 = this.pathname || ``, r2 = this.hash || ``, i2 = false, a2 = ``;
    this.host ? i2 = e2 + this.host : this.hostname && (i2 = e2 + (this.hostname.indexOf(`:`) === -1 ? this.hostname : `[` + this.hostname + `]`), this.port && (i2 += `:` + this.port)), this.query && typeof this.query == `object` && Object.keys(this.query).length && (a2 = Ht.stringify(this.query, { arrayFormat: `repeat`, addQueryPrefix: false }));
    var o2 = this.search || a2 && `?` + a2 || ``;
    return t2 && t2.substr(-1) !== `:` && (t2 += `:`), this.slashes || (!t2 || Vt[t2]) && i2 !== false ? (i2 = `//` + (i2 || ``), n2 && n2.charAt(0) !== `/` && (n2 = `/` + n2)) : i2 || (i2 = ``), r2 && r2.charAt(0) !== `#` && (r2 = `#` + r2), o2 && o2.charAt(0) !== `?` && (o2 = `?` + o2), n2 = n2.replace(/[?#]/g, function(e3) {
      return encodeURIComponent(e3);
    }), o2 = o2.replace(`#`, `%23`), t2 + i2 + n2 + o2 + r2;
  }, ht.prototype.resolve = function(e2) {
    return this.resolveObject(gt(e2, false, true)).format();
  }, ht.prototype.resolveObject = function(e2) {
    if (typeof e2 == `string`) {
      var t2 = new ht();
      t2.parse(e2, false, true), e2 = t2;
    }
    for (var n2 = new ht(), r2 = Object.keys(this), i2 = 0; i2 < r2.length; i2++) {
      var a2 = r2[i2];
      n2[a2] = this[a2];
    }
    if (n2.hash = e2.hash, e2.href === ``) return n2.href = n2.format(), n2;
    if (e2.slashes && !e2.protocol) {
      for (var o2 = Object.keys(e2), s2 = 0; s2 < o2.length; s2++) {
        var c2 = o2[s2];
        c2 !== `protocol` && (n2[c2] = e2[c2]);
      }
      return Vt[n2.protocol] && n2.hostname && !n2.pathname && (n2.pathname = `/`, n2.path = n2.pathname), n2.href = n2.format(), n2;
    }
    if (e2.protocol && e2.protocol !== n2.protocol) {
      if (!Vt[e2.protocol]) {
        for (var l2 = Object.keys(e2), u2 = 0; u2 < l2.length; u2++) {
          var d2 = l2[u2];
          n2[d2] = e2[d2];
        }
        return n2.href = n2.format(), n2;
      }
      if (n2.protocol = e2.protocol, !e2.host && !Bt[e2.protocol]) {
        for (var f2 = (e2.pathname || ``).split(`/`); f2.length && !(e2.host = f2.shift()); ) ;
        e2.host || (e2.host = ``), e2.hostname || (e2.hostname = ``), f2[0] !== `` && f2.unshift(``), f2.length < 2 && f2.unshift(``), n2.pathname = f2.join(`/`);
      } else n2.pathname = e2.pathname;
      return n2.search = e2.search, n2.query = e2.query, n2.host = e2.host || ``, n2.auth = e2.auth, n2.hostname = e2.hostname || e2.host, n2.port = e2.port, (n2.pathname || n2.search) && (n2.path = (n2.pathname || ``) + (n2.search || ``)), n2.slashes = n2.slashes || e2.slashes, n2.href = n2.format(), n2;
    }
    var p2 = n2.pathname && n2.pathname.charAt(0) === `/`, m2 = e2.host || e2.pathname && e2.pathname.charAt(0) === `/`, h2 = m2 || p2 || n2.host && e2.pathname, g2 = h2, _2 = n2.pathname && n2.pathname.split(`/`) || [], f2 = e2.pathname && e2.pathname.split(`/`) || [], v2 = n2.protocol && !Vt[n2.protocol];
    if (v2 && (n2.hostname = ``, n2.port = null, n2.host && (_2[0] === `` ? _2[0] = n2.host : _2.unshift(n2.host)), n2.host = ``, e2.protocol && (e2.hostname = null, e2.port = null, e2.host && (f2[0] === `` ? f2[0] = e2.host : f2.unshift(e2.host)), e2.host = null), h2 && (h2 = f2[0] === `` || _2[0] === ``)), m2) n2.host = e2.host || e2.host === `` ? e2.host : n2.host, n2.hostname = e2.hostname || e2.hostname === `` ? e2.hostname : n2.hostname, n2.search = e2.search, n2.query = e2.query, _2 = f2;
    else if (f2.length) _2 || (_2 = []), _2.pop(), _2 = _2.concat(f2), n2.search = e2.search, n2.query = e2.query;
    else if (e2.search != null) {
      if (v2) {
        n2.host = _2.shift(), n2.hostname = n2.host;
        var y2 = n2.host && n2.host.indexOf(`@`) > 0 ? n2.host.split(`@`) : false;
        y2 && (n2.auth = y2.shift(), n2.hostname = y2.shift(), n2.host = n2.hostname);
      }
      return n2.search = e2.search, n2.query = e2.query, (n2.pathname !== null || n2.search !== null) && (n2.path = (n2.pathname ? n2.pathname : ``) + (n2.search ? n2.search : ``)), n2.href = n2.format(), n2;
    }
    if (!_2.length) return n2.pathname = null, n2.search ? n2.path = `/` + n2.search : n2.path = null, n2.href = n2.format(), n2;
    for (var b2 = _2.slice(-1)[0], x2 = (n2.host || e2.host || _2.length > 1) && (b2 === `.` || b2 === `..`) || b2 === ``, S2 = 0, C2 = _2.length; C2 >= 0; C2--) b2 = _2[C2], b2 === `.` ? _2.splice(C2, 1) : b2 === `..` ? (_2.splice(C2, 1), S2++) : S2 && (_2.splice(C2, 1), S2--);
    if (!h2 && !g2) for (; S2--; ) _2.unshift(`..`);
    h2 && _2[0] !== `` && (!_2[0] || _2[0].charAt(0) !== `/`) && _2.unshift(``), x2 && _2.join(`/`).substr(-1) !== `/` && _2.push(``);
    var w2 = _2[0] === `` || _2[0] && _2[0].charAt(0) === `/`;
    if (v2) {
      n2.hostname = w2 ? `` : _2.length ? _2.shift() : ``, n2.host = n2.hostname;
      var y2 = n2.host && n2.host.indexOf(`@`) > 0 ? n2.host.split(`@`) : false;
      y2 && (n2.auth = y2.shift(), n2.hostname = y2.shift(), n2.host = n2.hostname);
    }
    return h2 || (h2 = n2.host && _2.length), h2 && !w2 && _2.unshift(``), _2.length > 0 ? n2.pathname = _2.join(`/`) : (n2.pathname = null, n2.path = null), (n2.pathname !== null || n2.search !== null) && (n2.path = (n2.pathname ? n2.pathname : ``) + (n2.search ? n2.search : ``)), n2.auth = e2.auth || n2.auth, n2.slashes = n2.slashes || e2.slashes, n2.href = n2.format(), n2;
  }, ht.prototype.parseHost = function() {
    var e2 = this.host, t2 = At.exec(e2);
    t2 && (t2 = t2[0], t2 !== `:` && (this.port = t2.substr(1)), e2 = e2.substr(0, e2.length - t2.length)), e2 && (this.hostname = e2);
  }, Ut = gt, Wt = vt, Gt = yt, Kt = _t, qt = ht, Jt = (function(e2) {
    function t2() {
      var t3 = this || self;
      return delete e2.prototype.__magic__, t3;
    }
    return typeof globalThis == `object` ? globalThis : this ? t2() : (e2.defineProperty(e2.prototype, `__magic__`, { configurable: true, get: t2 }), __magic__);
  })(Object), Yt = Kt, Xt = Ut, Zt = Wt, Qt = qt, $t = Jt.URL, en = Jt.URLSearchParams, tn = /%/g, nn = /\\/g, rn = /\n/g, an = /\r/g, on = /\t/g, sn = 47, cn = function(e2) {
    if (e2 === void 0) throw TypeError(`The "domain" argument must be specified`);
    return new $t(`http://` + e2).hostname;
  }, ln = function(e2) {
    if (e2 === void 0) throw TypeError(`The "domain" argument must be specified`);
    return new $t(`http://` + e2).hostname;
  }, un = function(e2) {
    var t2 = new $t(`file://`), n2 = xt(e2);
    return e2.charCodeAt(e2.length - 1) === sn && n2[n2.length - 1] !== `/` && (n2 += `/`), t2.pathname = Tt(n2), t2;
  }, dn = function(e2) {
    if (!Ct(e2) && typeof e2 != `string`) throw TypeError(`The "path" argument must be of type string or an instance of URL. Received type ` + typeof e2 + ` (` + e2 + `)`);
    var t2 = new $t(e2);
    if (t2.protocol !== `file:`) throw TypeError(`The URL must be of scheme file`);
    return wt(t2);
  }, fn = function(e2, t2) {
    if (t2 === void 0 && (t2 = {}), !(e2 instanceof $t)) return Yt(e2);
    if (typeof t2 != `object` || !t2) throw TypeError(`The "options" argument must be of type object.`);
    var n2 = t2.auth ?? true, r2 = t2.fragment ?? true, i2 = t2.search ?? true;
    t2.unicode;
    var a2 = new $t(e2.toString());
    return n2 || (a2.username = ``, a2.password = ``), r2 || (a2.hash = ``), i2 || (a2.search = ``), a2.toString();
  }, pn = { format: fn, parse: Xt, resolve: Zt, resolveObject: Gt, Url: Qt, URL: $t, URLSearchParams: en, domainToASCII: cn, domainToUnicode: ln, pathToFileURL: un, fileURLToPath: dn };
})), hn = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.filenameToSteps = t2.resolve = t2.unixify = t2.isWin = void 0, t2.isFd = m2, t2.validateFd = h2, t2.dataToBuffer = g2, t2.nullCheck = _2, t2.pathToFilename = y2, t2.createError = F2, t2.createStatError = I2;
  var n2 = Y(), r2 = Z(), i2 = he(), a2 = le(), o2 = be(), s2 = $();
  t2.isWin = a2.default.platform === `win32`;
  var c2 = n2.resolve, l2 = n2.posix ? n2.posix.sep : n2.sep, u2 = (e2, n3) => {
    let r3 = e2[n3];
    return n3 > 0 && (r3 === `/` || t2.isWin && r3 === `\\`);
  }, d2 = (e2) => {
    let t3 = e2.length - 1;
    if (t3 < 2) return e2;
    for (; u2(e2, t3); ) t3--;
    return e2.substr(0, t3 + 1);
  }, f2 = (e2, t3) => {
    if (typeof e2 != `string`) throw TypeError(`expected a string`);
    return e2 = e2.replace(/[\\\/]+/g, `/`), t3 !== false && (e2 = d2(e2)), e2;
  };
  t2.unixify = (e2, n3 = true) => t2.isWin ? (e2 = f2(e2, n3), e2.replace(/^([a-zA-Z]+:|\.\/)/, ``)) : e2;
  var p2 = (e2, t3 = a2.default.cwd()) => c2(t3, e2);
  if (t2.resolve = p2, t2.isWin) {
    let e2 = p2;
    t2.resolve = p2 = (n3, r3) => (0, t2.unixify)(e2(n3, r3));
  }
  t2.filenameToSteps = (e2, t3) => {
    let n3 = p2(e2, t3).substring(1);
    return n3 ? n3.split(l2) : [];
  };
  function m2(e2) {
    return e2 >>> 0 === e2;
  }
  function h2(e2) {
    if (!m2(e2)) throw TypeError(s2.ERRSTR.FD);
  }
  function g2(e2, t3 = o2.ENCODING_UTF8) {
    return r2.Buffer.isBuffer(e2) ? e2 : e2 instanceof Uint8Array ? (0, r2.bufferFrom)(e2) : t3 === `buffer` ? (0, r2.bufferFrom)(String(e2), `utf8`) : (0, r2.bufferFrom)(String(e2), t3);
  }
  function _2(e2, t3) {
    if ((`` + e2).indexOf(`\0`) !== -1) {
      let e3 = Error(`Path must be a string without null bytes`);
      if (e3.code = `ENOENT`, typeof t3 != `function`) throw e3;
      return Promise.resolve().then(() => t3(e3)), false;
    }
    return true;
  }
  function v2(e2) {
    if (e2.hostname !== ``) throw new i2.TypeError(`ERR_INVALID_FILE_URL_HOST`, a2.default.platform);
    let t3 = e2.pathname;
    for (let e3 = 0; e3 < t3.length; e3++) if (t3[e3] === `%`) {
      let n3 = t3.codePointAt(e3 + 2) | 32;
      if (t3[e3 + 1] === `2` && n3 === 102) throw new i2.TypeError(`ERR_INVALID_FILE_URL_PATH`, `must not include encoded / characters`);
    }
    return decodeURIComponent(t3);
  }
  function y2(t3) {
    if (t3 instanceof Uint8Array && (t3 = (0, r2.bufferFrom)(t3)), typeof t3 != `string` && !r2.Buffer.isBuffer(t3)) {
      try {
        if (!(t3 instanceof (mn(), e(mt)).URL)) throw TypeError(s2.ERRSTR.PATH_STR);
      } catch {
        throw TypeError(s2.ERRSTR.PATH_STR);
      }
      t3 = v2(t3);
    }
    let n3 = String(t3);
    return _2(n3), n3;
  }
  var b2 = `ENOENT`, x2 = `EBADF`, S2 = `EINVAL`, C2 = `EPERM`, w2 = `EPROTO`, T2 = `EEXIST`, E2 = `ENOTDIR`, D2 = `EMFILE`, O2 = `EACCES`, k2 = `EISDIR`, A2 = `ENOTEMPTY`, j2 = `ENOSYS`, M2 = `ERR_FS_EISDIR`, N2 = `ERR_OUT_OF_RANGE`;
  function P2(e2, t3 = ``, n3 = ``, r3 = ``) {
    let i3 = ``;
    switch (n3 && (i3 = ` '${n3}'`), r3 && (i3 += ` -> '${r3}'`), e2) {
      case b2:
        return `ENOENT: no such file or directory, ${t3}${i3}`;
      case x2:
        return `EBADF: bad file descriptor, ${t3}${i3}`;
      case S2:
        return `EINVAL: invalid argument, ${t3}${i3}`;
      case C2:
        return `EPERM: operation not permitted, ${t3}${i3}`;
      case w2:
        return `EPROTO: protocol error, ${t3}${i3}`;
      case T2:
        return `EEXIST: file already exists, ${t3}${i3}`;
      case E2:
        return `ENOTDIR: not a directory, ${t3}${i3}`;
      case k2:
        return `EISDIR: illegal operation on a directory, ${t3}${i3}`;
      case O2:
        return `EACCES: permission denied, ${t3}${i3}`;
      case A2:
        return `ENOTEMPTY: directory not empty, ${t3}${i3}`;
      case D2:
        return `EMFILE: too many open files, ${t3}${i3}`;
      case j2:
        return `ENOSYS: function not implemented, ${t3}${i3}`;
      case M2:
        return `[ERR_FS_EISDIR]: Path is a directory: ${t3} returned EISDIR (is a directory) ${n3}`;
      case N2:
        return `[ERR_OUT_OF_RANGE]: value out of range, ${t3}${i3}`;
      default:
        return `${e2}: error occurred, ${t3}${i3}`;
    }
  }
  function F2(e2, t3 = ``, n3 = ``, r3 = ``, i3 = Error) {
    let a3 = new i3(P2(e2, t3, n3, r3));
    return a3.code = e2, n3 && (a3.path = n3), a3;
  }
  function I2(e2, t3 = ``, n3 = ``, r3 = ``) {
    return { code: e2, message: P2(e2, t3, n3, r3), path: n3, toError() {
      let e3 = Error(this.message);
      return e3.code = this.code, this.path && (e3.path = this.path), e3;
    } };
  }
})), gn = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Superblock = void 0;
  var t2 = Y(), n2 = _e(), r2 = ve(), i2 = ye(), a2 = Z(), o2 = le(), s2 = $(), c2 = $(), l2 = hn(), u2 = ie(), d2 = oe(), f2 = t2.posix ? t2.posix.sep : t2.sep, p2 = t2.posix ? t2.posix.relative : t2.relative, m2 = t2.posix ? t2.posix.join : t2.join, { O_RDONLY: h2, O_WRONLY: g2, O_RDWR: _2, O_CREAT: v2, O_EXCL: y2, O_TRUNC: b2, O_APPEND: x2, O_DIRECTORY: S2 } = s2.constants, C2 = class e3 {
    static fromJSON(t3, n3, r3) {
      let i3 = new e3(r3);
      return i3.fromJSON(t3, n3), i3;
    }
    static fromNestedJSON(t3, n3, r3) {
      let i3 = new e3(r3);
      return i3.fromNestedJSON(t3, n3), i3;
    }
    constructor(e4 = {}) {
      this.ino = 0, this.inodes = {}, this.releasedInos = [], this.fds = {}, this.releasedFds = [], this.maxFiles = 1e4, this.openFiles = 0, this.open = (e5, t3, n4, r3 = true) => {
        let i3 = this.openFile(e5, t3, n4, r3);
        if (!i3) throw (0, l2.createError)(`ENOENT`, `open`, e5);
        return i3.fd;
      }, this.writeFile = (e5, t3, n4, r3) => {
        let i3 = typeof e5 == `number`, a3;
        a3 = i3 ? e5 : this.open((0, l2.pathToFilename)(e5), n4, r3);
        let o3 = 0, s3 = t3.length, c3 = n4 & x2 ? void 0 : 0;
        try {
          for (; s3 > 0; ) {
            let e6 = this.write(a3, t3, o3, s3, c3);
            o3 += e6, s3 -= e6, c3 !== void 0 && (c3 += e6);
          }
        } finally {
          i3 || this.close(a3);
        }
      }, this.read = (e5, t3, n4, r3, i3) => {
        if (t3.byteLength < r3) throw (0, l2.createError)(`ERR_OUT_OF_RANGE`, `read`, void 0, void 0, RangeError);
        let a3 = this.getFileByFdOrThrow(e5);
        if (a3.node.isSymlink()) throw (0, l2.createError)(`EPERM`, `read`, a3.link.getPath());
        return a3.read(t3, Number(n4), Number(r3), i3 === -1 || typeof i3 != `number` ? void 0 : i3);
      }, this.readv = (e5, t3, n4) => {
        let r3 = this.getFileByFdOrThrow(e5), i3 = n4 ?? void 0;
        i3 === -1 && (i3 = void 0);
        let a3 = 0;
        for (let e6 of t3) {
          let t4 = r3.read(e6, 0, e6.byteLength, i3);
          if (i3 = void 0, a3 += t4, t4 < e6.byteLength) break;
        }
        return a3;
      }, this.link = (e5, n4) => {
        let r3;
        try {
          r3 = this.getLinkOrThrow(e5, `link`);
        } catch (t3) {
          throw t3.code && (t3 = (0, l2.createError)(t3.code, `link`, e5, n4)), t3;
        }
        let i3 = (0, t2.dirname)(n4), a3;
        try {
          a3 = this.getLinkOrThrow(i3, `link`);
        } catch (t3) {
          throw t3.code && (t3 = (0, l2.createError)(t3.code, `link`, e5, n4)), t3;
        }
        let o3 = (0, t2.basename)(n4);
        if (a3.getChild(o3)) throw (0, l2.createError)(`EEXIST`, `link`, e5, n4);
        let s3 = r3.getNode();
        s3.nlink++, a3.createChild(o3, s3);
      }, this.unlink = (e5) => {
        let t3 = this.getLinkOrThrow(e5, `unlink`);
        if (t3.length) throw Error(`Dir not empty...`);
        this.deleteLink(t3);
        let n4 = t3.getNode();
        n4.nlink--, n4.nlink <= 0 && this.deleteNode(n4);
      }, this.symlink = (e5, t3) => {
        let n4 = (0, l2.filenameToSteps)(t3), r3;
        try {
          r3 = this.getLinkParentAsDirOrThrow(n4);
        } catch (n5) {
          throw n5.code && (n5 = (0, l2.createError)(n5.code, `symlink`, e5, t3)), n5;
        }
        let i3 = n4[n4.length - 1];
        if (r3.getChild(i3)) throw (0, l2.createError)(`EEXIST`, `symlink`, e5, t3);
        let a3 = r3.getNode();
        if (!a3.canExecute() || !a3.canWrite()) throw (0, l2.createError)(`EACCES`, `symlink`, e5, t3);
        let o3 = r3.createChild(i3);
        return o3.getNode().makeSymlink(e5), o3;
      }, this.rename = (e5, n4) => {
        let r3;
        try {
          r3 = this.getResolvedLinkOrThrow(e5);
        } catch (t3) {
          throw t3.code && (t3 = (0, l2.createError)(t3.code, `rename`, e5, n4)), t3;
        }
        let i3;
        try {
          i3 = this.getLinkParentAsDirOrThrow(n4);
        } catch (t3) {
          throw t3.code && (t3 = (0, l2.createError)(t3.code, `rename`, e5, n4)), t3;
        }
        let a3 = r3.parent;
        if (!a3) throw (0, l2.createError)(`EINVAL`, `rename`, e5, n4);
        let o3 = a3.getNode(), s3 = i3.getNode();
        if (!o3.canExecute() || !o3.canWrite() || !s3.canExecute() || !s3.canWrite()) throw (0, l2.createError)(`EACCES`, `rename`, e5, n4);
        a3.deleteChild(r3);
        let c3 = (0, t2.basename)(n4);
        r3.name = c3, r3.steps = [...i3.steps, c3], i3.setChild(r3.getName(), r3);
      }, this.mkdir = (e5, t3) => {
        let n4 = (0, l2.filenameToSteps)(e5);
        if (!n4.length) throw (0, l2.createError)(`EEXIST`, `mkdir`, e5);
        let r3 = this.getLinkParentAsDirOrThrow(e5, `mkdir`), i3 = n4[n4.length - 1];
        if (r3.getChild(i3)) throw (0, l2.createError)(`EEXIST`, `mkdir`, e5);
        let a3 = r3.getNode();
        if (!a3.canWrite() || !a3.canExecute()) throw (0, l2.createError)(`EACCES`, `mkdir`, e5);
        r3.createChild(i3, this.createNode(s2.constants.S_IFDIR | t3));
      }, this.mkdirp = (e5, n4) => {
        let r3 = false, i3 = (0, l2.filenameToSteps)(e5), a3 = null, o3 = i3.length;
        for (o3 = i3.length; o3 >= 0 && (a3 = this.getResolvedLink(i3.slice(0, o3)), !a3); o3--) ;
        for (a3 || (a3 = this.root, o3 = 0), a3 = this.getResolvedLinkOrThrow(t2.sep + i3.slice(0, o3).join(t2.sep), `mkdir`); o3 < i3.length; o3++) {
          let t3 = a3.getNode();
          if (t3.isDirectory()) {
            if (!t3.canExecute() || !t3.canWrite()) throw (0, l2.createError)(`EACCES`, `mkdir`, e5);
          } else throw (0, l2.createError)(`ENOTDIR`, `mkdir`, e5);
          r3 = true, a3 = a3.createChild(i3[o3], this.createNode(s2.constants.S_IFDIR | n4));
        }
        return r3 ? e5 : void 0;
      }, this.rmdir = (e5, t3 = false) => {
        let n4 = this.getLinkAsDirOrThrow(e5, `rmdir`);
        if (n4.length && !t3) throw (0, l2.createError)(`ENOTEMPTY`, `rmdir`, e5);
        this.deleteLink(n4);
      }, this.rm = (e5, t3 = false, n4 = false) => {
        let r3;
        try {
          r3 = this.getResolvedLinkOrThrow(e5, `stat`);
        } catch (e6) {
          if (e6.code === `ENOENT` && t3) return;
          throw e6;
        }
        if (r3.getNode().isDirectory() && !n4) throw (0, l2.createError)(`ERR_FS_EISDIR`, `rm`, e5);
        if (!r3.parent?.getNode().canWrite()) throw (0, l2.createError)(`EACCES`, `rm`, e5);
        this.deleteLink(r3);
      }, this.close = (e5) => {
        (0, l2.validateFd)(e5);
        let t3 = this.getFileByFdOrThrow(e5, `close`);
        this.closeFile(t3);
      }, this.process = e4.process ?? o2.default;
      let n3 = this.createLink();
      n3.setNode(this.createNode(s2.constants.S_IFDIR | 511)), n3.setChild(`.`, n3), n3.getNode().nlink++, n3.setChild(`..`, n3), n3.getNode().nlink++, this.root = n3;
    }
    createLink(e4, t3, n3 = false, i3) {
      if (!e4) return new r2.Link(this, void 0, ``);
      if (!t3) throw Error(`createLink: name cannot be empty`);
      let a3 = i3 ?? (n3 ? 511 : 438), o3 = i3 && i3 & s2.constants.S_IFMT ? i3 & s2.constants.S_IFMT : n3 ? s2.constants.S_IFDIR : s2.constants.S_IFREG, c3 = a3 & ~s2.constants.S_IFMT | o3;
      return e4.createChild(t3, this.createNode(c3));
    }
    deleteLink(e4) {
      let t3 = e4.parent;
      return t3 ? (t3.deleteChild(e4), true) : false;
    }
    newInoNumber() {
      return this.releasedInos.pop() || (this.ino = (this.ino + 1) % 4294967295, this.ino);
    }
    newFdNumber() {
      let t3 = this.releasedFds.pop();
      return typeof t3 == `number` ? t3 : e3.fd--;
    }
    createNode(e4) {
      let t3 = this.process.getuid?.() ?? 0, r3 = this.process.getgid?.() ?? 0, i3 = new n2.Node(this.newInoNumber(), e4, t3, r3);
      return this.inodes[i3.ino] = i3, i3;
    }
    deleteNode(e4) {
      e4.del(), delete this.inodes[e4.ino], this.releasedInos.push(e4.ino);
    }
    walk(e4, n3 = false, i3 = false, a3 = false, o3) {
      let s3, c3;
      e4 instanceof r2.Link ? (s3 = e4.steps, c3 = f2 + s3.join(f2)) : typeof e4 == `string` ? (s3 = (0, l2.filenameToSteps)(e4), c3 = e4) : (s3 = e4, c3 = f2 + s3.join(f2));
      let u3 = this.root, p3 = 0, h3 = this.process.getuid?.() ?? 0, g3 = this.process.getgid?.() ?? 0;
      for (; p3 < s3.length; ) {
        let e5 = u3.getNode();
        if (e5.isDirectory()) {
          if (a3 && !e5.canExecute(h3, g3)) return (0, d2.Err)((0, l2.createStatError)(`EACCES`, o3, c3));
        } else if (p3 < s3.length - 1) return (0, d2.Err)((0, l2.createStatError)(`ENOTDIR`, o3, c3));
        if (u3 = u3.getChild(s3[p3]) ?? null, !u3) return i3 ? (0, d2.Err)((0, l2.createStatError)(`ENOENT`, o3, c3)) : (0, d2.Ok)(null);
        if (e5 = u3?.getNode(), e5.isSymlink() && (n3 || p3 < s3.length - 1)) {
          let n4 = (0, t2.isAbsolute)(e5.symlink) ? e5.symlink : m2((0, t2.dirname)(u3.getPath()), e5.symlink);
          s3 = (0, l2.filenameToSteps)(n4).concat(s3.slice(p3 + 1)), u3 = this.root, p3 = 0;
          continue;
        }
        if (i3 && !e5.isDirectory() && p3 < s3.length - 1) {
          let e6 = this.process.platform === `win32` ? `ENOENT` : `ENOTDIR`;
          return (0, d2.Err)((0, l2.createStatError)(e6, o3, c3));
        }
        p3++;
      }
      return (0, d2.Ok)(u3);
    }
    getLink(e4) {
      let t3 = this.walk(e4, false, false, false);
      if (t3.ok) return t3.value;
      throw t3.err.toError();
    }
    getLinkOrThrow(e4, t3) {
      let n3 = this.walk(e4, false, true, true, t3);
      if (n3.ok) return n3.value;
      throw n3.err.toError();
    }
    getResolvedLink(e4) {
      let t3 = this.walk(e4, true, false, false);
      if (t3.ok) return t3.value;
      throw t3.err.toError();
    }
    getResolvedLinkOrThrow(e4, t3) {
      let n3 = this.walk(e4, true, true, true, t3);
      if (n3.ok) return n3.value;
      throw n3.err.toError();
    }
    getResolvedLinkResult(e4, t3) {
      let n3 = this.walk(e4, true, true, true, t3);
      return n3.ok ? (0, d2.Ok)(n3.value) : n3;
    }
    resolveSymlinks(e4) {
      return this.getResolvedLink(e4.steps.slice(1));
    }
    getLinkAsDirOrThrow(e4, t3) {
      let n3 = this.getLinkOrThrow(e4, t3);
      if (!n3.getNode().isDirectory()) throw (0, l2.createError)(`ENOTDIR`, t3, e4);
      return n3;
    }
    getLinkParent(e4) {
      return this.getLink(e4.slice(0, -1));
    }
    getLinkParentAsDirOrThrow(e4, t3) {
      let n3 = f2 + (e4 instanceof Array ? e4 : (0, l2.filenameToSteps)(e4)).slice(0, -1).join(f2), r3 = this.getLinkOrThrow(n3, t3);
      if (!r3.getNode().isDirectory()) throw (0, l2.createError)(`ENOTDIR`, t3, n3);
      return r3;
    }
    getFileByFd(e4) {
      return this.fds[String(e4)];
    }
    getFileByFdOrThrow(e4, t3) {
      if (!(0, l2.isFd)(e4)) throw TypeError(c2.ERRSTR.FD);
      let n3 = this.getFileByFd(e4);
      if (!n3) throw (0, l2.createError)(`EBADF`, t3);
      return n3;
    }
    _toJSON(e4 = this.root, t3 = {}, n3, r3) {
      let i3 = true, a3 = e4.children;
      e4.getNode().isFile() && (a3 = /* @__PURE__ */ new Map([[e4.getName(), e4.parent.getChild(e4.getName())]]), e4 = e4.parent);
      for (let o4 of a3.keys()) {
        if (o4 === `.` || o4 === `..`) continue;
        i3 = false;
        let a4 = e4.getChild(o4);
        if (!a4) throw Error(`_toJSON: unexpected undefined`);
        let s3 = a4.getNode();
        if (s3.isFile()) {
          let e5 = a4.getPath();
          n3 && (e5 = p2(n3, e5)), t3[e5] = r3 ? s3.getBuffer() : s3.getString();
        } else s3.isDirectory() && this._toJSON(a4, t3, n3, r3);
      }
      let o3 = e4.getPath();
      return n3 && (o3 = p2(n3, o3)), o3 && i3 && (t3[o3] = null), t3;
    }
    toJSON(e4, t3 = {}, n3 = false, r3 = false) {
      let i3 = [];
      if (e4) {
        Array.isArray(e4) || (e4 = [e4]);
        for (let t4 of e4) {
          let e5 = (0, l2.pathToFilename)(t4), n4 = this.getResolvedLink(e5);
          n4 && i3.push(n4);
        }
      } else i3.push(this.root);
      if (!i3.length) return t3;
      for (let e5 of i3) this._toJSON(e5, t3, n3 ? e5.getPath() : ``, r3);
      return t3;
    }
    fromJSON(e4, n3 = this.process.cwd()) {
      for (let r3 in e4) {
        let i3 = e4[r3];
        if (r3 = (0, l2.resolve)(r3, n3), typeof i3 == `string` || i3 instanceof a2.Buffer) {
          let e5 = (0, t2.dirname)(r3);
          this.mkdirp(e5, 511);
          let n4 = (0, l2.dataToBuffer)(i3);
          this.writeFile(r3, n4, c2.FLAGS.w, 438);
        } else this.mkdirp(r3, 511);
      }
    }
    fromNestedJSON(e4, t3) {
      this.fromJSON((0, u2.flattenJSON)(e4), t3);
    }
    reset() {
      this.ino = 0, this.inodes = {}, this.releasedInos = [], this.fds = {}, this.releasedFds = [], this.openFiles = 0, this.root = this.createLink(), this.root.setNode(this.createNode(s2.constants.S_IFDIR | 511));
    }
    mountSync(e4, t3) {
      this.fromJSON(t3, e4);
    }
    openLink(e4, t3, n3 = true) {
      if (this.openFiles >= this.maxFiles) throw (0, l2.createError)(`EMFILE`, `open`, e4.getPath());
      let r3 = e4;
      n3 && (r3 = this.getResolvedLinkOrThrow(e4.getPath(), `open`));
      let a3 = r3.getNode();
      if (a3.isDirectory()) {
        if ((t3 & (h2 | _2 | g2)) !== h2) throw (0, l2.createError)(`EISDIR`, `open`, e4.getPath());
      } else if (t3 & S2) throw (0, l2.createError)(`ENOTDIR`, `open`, e4.getPath());
      if ((t3 & (h2 | _2 | g2)) !== g2 && !a3.canRead() || t3 & (g2 | _2) && !a3.canWrite()) throw (0, l2.createError)(`EACCES`, `open`, e4.getPath());
      let o3 = new i2.File(e4, a3, t3, this.newFdNumber());
      return this.fds[o3.fd] = o3, this.openFiles++, t3 & b2 && o3.truncate(), o3;
    }
    openFile(e4, n3, r3, i3 = true) {
      let a3 = (0, l2.filenameToSteps)(e4), o3;
      try {
        if (o3 = i3 ? this.getResolvedLinkOrThrow(e4, `open`) : this.getLinkOrThrow(e4, `open`), o3 && n3 & v2 && n3 & y2) throw (0, l2.createError)(`EEXIST`, `open`, e4);
      } catch (i4) {
        if (i4.code === `ENOENT` && n3 & v2) {
          let n4 = (0, t2.dirname)(e4), i5 = this.getResolvedLinkOrThrow(n4), s3 = i5.getNode();
          if (!s3.isDirectory()) throw (0, l2.createError)(`ENOTDIR`, `open`, e4);
          if (!s3.canExecute() || !s3.canWrite()) throw (0, l2.createError)(`EACCES`, `open`, e4);
          r3 ?? (r3 = 438), o3 = this.createLink(i5, a3[a3.length - 1], false, r3);
        } else throw i4;
      }
      if (o3) return this.openLink(o3, n3, i3);
      throw (0, l2.createError)(`ENOENT`, `open`, e4);
    }
    closeFile(e4) {
      this.fds[e4.fd] && (this.openFiles--, delete this.fds[e4.fd], this.releasedFds.push(e4.fd));
    }
    write(e4, t3, n3, r3, i3) {
      let a3 = this.getFileByFdOrThrow(e4, `write`);
      if (a3.node.isSymlink()) throw (0, l2.createError)(`EBADF`, `write`, a3.link.getPath());
      return a3.write(t3, n3, r3, i3 === -1 || typeof i3 != `number` ? void 0 : i3);
    }
  };
  e2.Superblock = C2, C2.fd = 2147483647;
})), _n = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.resolve = t2.pathToFilename = t2.createStatError = t2.createError = t2.validateFd = t2.isFd = t2.filenameToSteps = t2.dataToBuffer = t2.Superblock = t2.File = t2.Link = t2.Node = void 0;
  var n2 = (J(), e(f));
  n2.__exportStar(ne(), t2), n2.__exportStar(ie(), t2), n2.__exportStar(ae(), t2), n2.__exportStar(oe(), t2);
  var r2 = _e();
  Object.defineProperty(t2, `Node`, { enumerable: true, get: function() {
    return r2.Node;
  } });
  var i2 = ve();
  Object.defineProperty(t2, `Link`, { enumerable: true, get: function() {
    return i2.Link;
  } });
  var a2 = ye();
  Object.defineProperty(t2, `File`, { enumerable: true, get: function() {
    return a2.File;
  } });
  var o2 = gn();
  Object.defineProperty(t2, `Superblock`, { enumerable: true, get: function() {
    return o2.Superblock;
  } });
  var s2 = hn();
  Object.defineProperty(t2, `dataToBuffer`, { enumerable: true, get: function() {
    return s2.dataToBuffer;
  } }), Object.defineProperty(t2, `filenameToSteps`, { enumerable: true, get: function() {
    return s2.filenameToSteps;
  } }), Object.defineProperty(t2, `isFd`, { enumerable: true, get: function() {
    return s2.isFd;
  } }), Object.defineProperty(t2, `validateFd`, { enumerable: true, get: function() {
    return s2.validateFd;
  } }), Object.defineProperty(t2, `createError`, { enumerable: true, get: function() {
    return s2.createError;
  } }), Object.defineProperty(t2, `createStatError`, { enumerable: true, get: function() {
    return s2.createStatError;
  } }), Object.defineProperty(t2, `pathToFilename`, { enumerable: true, get: function() {
    return s2.pathToFilename;
  } }), Object.defineProperty(t2, `resolve`, { enumerable: true, get: function() {
    return s2.resolve;
  } });
})), vn = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Stats = void 0;
  var { S_IFMT: t2, S_IFDIR: n2, S_IFREG: r2, S_IFBLK: i2, S_IFCHR: a2, S_IFLNK: o2, S_IFIFO: s2, S_IFSOCK: c2 } = $().constants, l2 = class e3 {
    static build(t3, n3 = false) {
      let r3 = new e3(), { uid: i3, gid: a3, atime: o3, mtime: s3, ctime: c3 } = t3, l3 = n3 ? (e4) => BigInt(e4) : (e4) => e4;
      r3.uid = l3(i3), r3.gid = l3(a3), r3.rdev = l3(t3.rdev), r3.blksize = l3(4096), r3.ino = l3(t3.ino), r3.size = l3(t3.getSize()), r3.blocks = l3(1), r3.atime = o3, r3.mtime = s3, r3.ctime = c3, r3.birthtime = c3, r3.atimeMs = l3(o3.getTime()), r3.mtimeMs = l3(s3.getTime());
      let u2 = l3(c3.getTime());
      if (r3.ctimeMs = u2, r3.birthtimeMs = u2, n3) {
        r3.atimeNs = BigInt(o3.getTime()) * BigInt(1e6), r3.mtimeNs = BigInt(s3.getTime()) * BigInt(1e6);
        let e4 = BigInt(c3.getTime()) * BigInt(1e6);
        r3.ctimeNs = e4, r3.birthtimeNs = e4;
      }
      return r3.dev = l3(0), r3.mode = l3(t3.mode), r3.nlink = l3(t3.nlink), r3;
    }
    _checkModeProperty(e4) {
      return (Number(this.mode) & t2) === e4;
    }
    isDirectory() {
      return this._checkModeProperty(n2);
    }
    isFile() {
      return this._checkModeProperty(r2);
    }
    isBlockDevice() {
      return this._checkModeProperty(i2);
    }
    isCharacterDevice() {
      return this._checkModeProperty(a2);
    }
    isSymbolicLink() {
      return this._checkModeProperty(o2);
    }
    isFIFO() {
      return this._checkModeProperty(s2);
    }
    isSocket() {
      return this._checkModeProperty(c2);
    }
  };
  e2.Stats = l2, e2.default = l2;
})), yn = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Dirent = void 0;
  var t2 = $(), { S_IFMT: n2, S_IFDIR: r2, S_IFREG: i2, S_IFBLK: a2, S_IFCHR: o2, S_IFLNK: s2, S_IFIFO: c2, S_IFSOCK: l2 } = t2.constants, u2 = class e3 {
    constructor() {
      this.name = ``, this.parentPath = ``, this.mode = 0, this.path = ``;
    }
    static build(n3, r3) {
      let i3 = new e3(), { mode: a3 } = n3.getNode();
      return i3.name = (0, t2.strToEncoding)(n3.getName(), r3), i3.mode = a3, i3.parentPath = n3.getParentPath(), i3.path = i3.parentPath, i3;
    }
    _checkModeProperty(e4) {
      return (this.mode & n2) === e4;
    }
    isDirectory() {
      return this._checkModeProperty(r2);
    }
    isFile() {
      return this._checkModeProperty(i2);
    }
    isBlockDevice() {
      return this._checkModeProperty(a2);
    }
    isCharacterDevice() {
      return this._checkModeProperty(o2);
    }
    isSymbolicLink() {
      return this._checkModeProperty(s2);
    }
    isFIFO() {
      return this._checkModeProperty(c2);
    }
    isSocket() {
      return this._checkModeProperty(l2);
    }
  };
  e2.Dirent = u2, e2.default = u2;
})), bn = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.StatFs = void 0;
  var t2 = class e3 {
    static build(t3, n2 = false) {
      let r2 = new e3(), i2 = n2 ? (e4) => BigInt(e4) : (e4) => e4;
      r2.type = i2(2240043254), r2.bsize = i2(4096);
      let a2 = Object.keys(t3.inodes).length, o2 = 1e6, s2 = o2 - Math.min(a2 * 2, o2);
      r2.blocks = i2(o2), r2.bfree = i2(s2), r2.bavail = i2(s2);
      let c2 = 1e6;
      return r2.files = i2(c2), r2.ffree = i2(c2 - a2), r2;
    }
  };
  e2.StatFs = t2, e2.default = t2;
})), xn = i(((e2) => {
  a(), Object.defineProperty(e2, `__esModule`, { value: true });
  function t2(e3, t3, n2) {
    let r2 = setTimeout.apply(typeof globalThis < `u` ? globalThis : o, arguments);
    return r2 && typeof r2 == `object` && typeof r2.unref == `function` && r2.unref(), r2;
  }
  e2.default = t2;
})), Sn = i(((e2, t2) => {
  var n2 = typeof Reflect == `object` ? Reflect : null, r2 = n2 && typeof n2.apply == `function` ? n2.apply : function(e3, t3, n3) {
    return Function.prototype.apply.call(e3, t3, n3);
  }, i2 = n2 && typeof n2.ownKeys == `function` ? n2.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
    return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
  } : function(e3) {
    return Object.getOwnPropertyNames(e3);
  };
  function a2(e3) {
    console && console.warn && console.warn(e3);
  }
  var o2 = Number.isNaN || function(e3) {
    return e3 !== e3;
  };
  function s2() {
    s2.init.call(this);
  }
  t2.exports = s2, t2.exports.once = y2, s2.EventEmitter = s2, s2.prototype._events = void 0, s2.prototype._eventsCount = 0, s2.prototype._maxListeners = void 0;
  var c2 = 10;
  function l2(e3) {
    if (typeof e3 != `function`) throw TypeError(`The "listener" argument must be of type Function. Received type ` + typeof e3);
  }
  Object.defineProperty(s2, `defaultMaxListeners`, { enumerable: true, get: function() {
    return c2;
  }, set: function(e3) {
    if (typeof e3 != `number` || e3 < 0 || o2(e3)) throw RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ` + e3 + `.`);
    c2 = e3;
  } }), s2.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, s2.prototype.setMaxListeners = function(e3) {
    if (typeof e3 != `number` || e3 < 0 || o2(e3)) throw RangeError(`The value of "n" is out of range. It must be a non-negative number. Received ` + e3 + `.`);
    return this._maxListeners = e3, this;
  };
  function u2(e3) {
    return e3._maxListeners === void 0 ? s2.defaultMaxListeners : e3._maxListeners;
  }
  s2.prototype.getMaxListeners = function() {
    return u2(this);
  }, s2.prototype.emit = function(e3) {
    for (var t3 = [], n3 = 1; n3 < arguments.length; n3++) t3.push(arguments[n3]);
    var i3 = e3 === `error`, a3 = this._events;
    if (a3 !== void 0) i3 && (i3 = a3.error === void 0);
    else if (!i3) return false;
    if (i3) {
      var o3;
      if (t3.length > 0 && (o3 = t3[0]), o3 instanceof Error) throw o3;
      var s3 = Error(`Unhandled error.` + (o3 ? ` (` + o3.message + `)` : ``));
      throw s3.context = o3, s3;
    }
    var c3 = a3[e3];
    if (c3 === void 0) return false;
    if (typeof c3 == `function`) r2(c3, this, t3);
    else for (var l3 = c3.length, u3 = g2(c3, l3), n3 = 0; n3 < l3; ++n3) r2(u3[n3], this, t3);
    return true;
  };
  function d2(e3, t3, n3, r3) {
    var i3, o3, s3;
    if (l2(n3), o3 = e3._events, o3 === void 0 ? (o3 = e3._events = /* @__PURE__ */ Object.create(null), e3._eventsCount = 0) : (o3.newListener !== void 0 && (e3.emit(`newListener`, t3, n3.listener ? n3.listener : n3), o3 = e3._events), s3 = o3[t3]), s3 === void 0) s3 = o3[t3] = n3, ++e3._eventsCount;
    else if (typeof s3 == `function` ? s3 = o3[t3] = r3 ? [n3, s3] : [s3, n3] : r3 ? s3.unshift(n3) : s3.push(n3), i3 = u2(e3), i3 > 0 && s3.length > i3 && !s3.warned) {
      s3.warned = true;
      var c3 = Error(`Possible EventEmitter memory leak detected. ` + s3.length + ` ` + String(t3) + ` listeners added. Use emitter.setMaxListeners() to increase limit`);
      c3.name = `MaxListenersExceededWarning`, c3.emitter = e3, c3.type = t3, c3.count = s3.length, a2(c3);
    }
    return e3;
  }
  s2.prototype.addListener = function(e3, t3) {
    return d2(this, e3, t3, false);
  }, s2.prototype.on = s2.prototype.addListener, s2.prototype.prependListener = function(e3, t3) {
    return d2(this, e3, t3, true);
  };
  function f2() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function p2(e3, t3, n3) {
    var r3 = { fired: false, wrapFn: void 0, target: e3, type: t3, listener: n3 }, i3 = f2.bind(r3);
    return i3.listener = n3, r3.wrapFn = i3, i3;
  }
  s2.prototype.once = function(e3, t3) {
    return l2(t3), this.on(e3, p2(this, e3, t3)), this;
  }, s2.prototype.prependOnceListener = function(e3, t3) {
    return l2(t3), this.prependListener(e3, p2(this, e3, t3)), this;
  }, s2.prototype.removeListener = function(e3, t3) {
    var n3, r3, i3, a3, o3;
    if (l2(t3), r3 = this._events, r3 === void 0 || (n3 = r3[e3], n3 === void 0)) return this;
    if (n3 === t3 || n3.listener === t3) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r3[e3], r3.removeListener && this.emit(`removeListener`, e3, n3.listener || t3));
    else if (typeof n3 != `function`) {
      for (i3 = -1, a3 = n3.length - 1; a3 >= 0; a3--) if (n3[a3] === t3 || n3[a3].listener === t3) {
        o3 = n3[a3].listener, i3 = a3;
        break;
      }
      if (i3 < 0) return this;
      i3 === 0 ? n3.shift() : _2(n3, i3), n3.length === 1 && (r3[e3] = n3[0]), r3.removeListener !== void 0 && this.emit(`removeListener`, e3, o3 || t3);
    }
    return this;
  }, s2.prototype.off = s2.prototype.removeListener, s2.prototype.removeAllListeners = function(e3) {
    var t3, n3 = this._events, r3;
    if (n3 === void 0) return this;
    if (n3.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n3[e3] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[e3]), this;
    if (arguments.length === 0) {
      var i3 = Object.keys(n3), a3;
      for (r3 = 0; r3 < i3.length; ++r3) a3 = i3[r3], a3 !== `removeListener` && this.removeAllListeners(a3);
      return this.removeAllListeners(`removeListener`), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (t3 = n3[e3], typeof t3 == `function`) this.removeListener(e3, t3);
    else if (t3 !== void 0) for (r3 = t3.length - 1; r3 >= 0; r3--) this.removeListener(e3, t3[r3]);
    return this;
  };
  function m2(e3, t3, n3) {
    var r3 = e3._events;
    if (r3 === void 0) return [];
    var i3 = r3[t3];
    return i3 === void 0 ? [] : typeof i3 == `function` ? n3 ? [i3.listener || i3] : [i3] : n3 ? v2(i3) : g2(i3, i3.length);
  }
  s2.prototype.listeners = function(e3) {
    return m2(this, e3, true);
  }, s2.prototype.rawListeners = function(e3) {
    return m2(this, e3, false);
  }, s2.listenerCount = function(e3, t3) {
    return typeof e3.listenerCount == `function` ? e3.listenerCount(t3) : h2.call(e3, t3);
  }, s2.prototype.listenerCount = h2;
  function h2(e3) {
    var t3 = this._events;
    if (t3 !== void 0) {
      var n3 = t3[e3];
      if (typeof n3 == `function`) return 1;
      if (n3 !== void 0) return n3.length;
    }
    return 0;
  }
  s2.prototype.eventNames = function() {
    return this._eventsCount > 0 ? i2(this._events) : [];
  };
  function g2(e3, t3) {
    for (var n3 = Array(t3), r3 = 0; r3 < t3; ++r3) n3[r3] = e3[r3];
    return n3;
  }
  function _2(e3, t3) {
    for (; t3 + 1 < e3.length; t3++) e3[t3] = e3[t3 + 1];
    e3.pop();
  }
  function v2(e3) {
    for (var t3 = Array(e3.length), n3 = 0; n3 < t3.length; ++n3) t3[n3] = e3[n3].listener || e3[n3];
    return t3;
  }
  function y2(e3, t3) {
    return new Promise(function(n3, r3) {
      function i3(n4) {
        e3.removeListener(t3, a3), r3(n4);
      }
      function a3() {
        typeof e3.removeListener == `function` && e3.removeListener(`error`, i3), n3([].slice.call(arguments));
      }
      x2(e3, t3, a3, { once: true }), t3 !== `error` && b2(e3, i3, { once: true });
    });
  }
  function b2(e3, t3, n3) {
    typeof e3.on == `function` && x2(e3, `error`, t3, n3);
  }
  function x2(e3, t3, n3, r3) {
    if (typeof e3.on == `function`) r3.once ? e3.once(t3, n3) : e3.on(t3, n3);
    else if (typeof e3.addEventListener == `function`) e3.addEventListener(t3, function i3(a3) {
      r3.once && e3.removeEventListener(t3, i3), n3(a3);
    });
    else throw TypeError(`The "emitter" argument must be of type EventEmitter. Received type ` + typeof e3);
  }
})), Cn = i(((e2, t2) => {
  typeof Object.create == `function` ? t2.exports = function(e3, t3) {
    t3 && (e3.super_ = t3, e3.prototype = Object.create(t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }));
  } : t2.exports = function(e3, t3) {
    if (t3) {
      e3.super_ = t3;
      var n2 = function() {
      };
      n2.prototype = t3.prototype, e3.prototype = new n2(), e3.prototype.constructor = e3;
    }
  };
})), wn = i(((e2, t2) => {
  t2.exports = Sn().EventEmitter;
})), Tn = i(((e2, t2) => {
  var n2 = We();
  t2.exports = function() {
    return n2() && !!Symbol.toStringTag;
  };
})), En = i(((e2, t2) => {
  var n2 = Tn()(), r2 = at()(`Object.prototype.toString`), i2 = function(e3) {
    return n2 && e3 && typeof e3 == `object` && Symbol.toStringTag in e3 ? false : r2(e3) === `[object Arguments]`;
  }, a2 = function(e3) {
    return i2(e3) ? true : typeof e3 == `object` && !!e3 && `length` in e3 && typeof e3.length == `number` && e3.length >= 0 && r2(e3) !== `[object Array]` && `callee` in e3 && r2(e3.callee) === `[object Function]`;
  }, o2 = (function() {
    return i2(arguments);
  })();
  i2.isLegacyArguments = a2, t2.exports = o2 ? i2 : a2;
})), Dn = i(((e2, t2) => {
  var n2 = at(), r2 = Tn()(), i2 = rt(), a2 = He(), o2;
  if (r2) {
    var s2 = n2(`RegExp.prototype.exec`), c2 = {}, l2 = function() {
      throw c2;
    }, u2 = { toString: l2, valueOf: l2 };
    typeof Symbol.toPrimitive == `symbol` && (u2[Symbol.toPrimitive] = l2), o2 = function(e3) {
      if (!e3 || typeof e3 != `object`) return false;
      var t3 = a2(e3, `lastIndex`);
      if (!(t3 && i2(t3, `value`))) return false;
      try {
        s2(e3, u2);
      } catch (e4) {
        return e4 === c2;
      }
    };
  } else {
    var d2 = n2(`Object.prototype.toString`), f2 = `[object RegExp]`;
    o2 = function(e3) {
      return !e3 || typeof e3 != `object` && typeof e3 != `function` ? false : d2(e3) === f2;
    };
  }
  t2.exports = o2;
})), On = i(((e2, t2) => {
  var n2 = at(), r2 = Dn(), i2 = n2(`RegExp.prototype.exec`), a2 = Se();
  t2.exports = function(e3) {
    if (!r2(e3)) throw new a2("`regex` must be a RegExp");
    return function(t3) {
      return i2(e3, t3) !== null;
    };
  };
})), kn = i(((e2, t2) => {
  var n2 = function* () {
  }.constructor;
  t2.exports = () => n2;
})), An = i(((e2, t2) => {
  var n2 = at(), r2 = On()(/^\s*(?:function)?\*/), i2 = Tn()(), a2 = nt(), o2 = n2(`Object.prototype.toString`), s2 = n2(`Function.prototype.toString`), c2 = kn();
  t2.exports = function(e3) {
    if (typeof e3 != `function`) return false;
    if (r2(s2(e3))) return true;
    if (!i2) return o2(e3) === `[object GeneratorFunction]`;
    if (!a2) return false;
    var t3 = c2();
    return t3 && a2(e3) === t3.prototype;
  };
})), jn = i(((e2, t2) => {
  var n2 = Function.prototype.toString, r2 = typeof Reflect == `object` && Reflect !== null && Reflect.apply, i2, a2;
  if (typeof r2 == `function` && typeof Object.defineProperty == `function`) try {
    i2 = Object.defineProperty({}, `length`, { get: function() {
      throw a2;
    } }), a2 = {}, r2(function() {
      throw 42;
    }, null, i2);
  } catch (e3) {
    e3 !== a2 && (r2 = null);
  }
  else r2 = null;
  var o2 = /^\s*class\b/, s2 = function(e3) {
    try {
      var t3 = n2.call(e3);
      return o2.test(t3);
    } catch {
      return false;
    }
  }, c2 = function(e3) {
    try {
      return s2(e3) ? false : (n2.call(e3), true);
    } catch {
      return false;
    }
  }, l2 = Object.prototype.toString, u2 = `[object Object]`, d2 = `[object Function]`, f2 = `[object GeneratorFunction]`, p2 = `[object HTMLAllCollection]`, m2 = `[object HTML document.all class]`, h2 = `[object HTMLCollection]`, g2 = typeof Symbol == `function` && !!Symbol.toStringTag, _2 = !(0 in [,]), v2 = function() {
    return false;
  };
  if (typeof document == `object`) {
    var y2 = document.all;
    l2.call(y2) === l2.call(document.all) && (v2 = function(e3) {
      if ((_2 || !e3) && (e3 === void 0 || typeof e3 == `object`)) try {
        var t3 = l2.call(e3);
        return (t3 === p2 || t3 === m2 || t3 === h2 || t3 === u2) && e3(``) == null;
      } catch {
      }
      return false;
    });
  }
  t2.exports = r2 ? function(e3) {
    if (v2(e3)) return true;
    if (!e3 || typeof e3 != `function` && typeof e3 != `object`) return false;
    try {
      r2(e3, null, i2);
    } catch (e4) {
      if (e4 !== a2) return false;
    }
    return !s2(e3) && c2(e3);
  } : function(e3) {
    if (v2(e3)) return true;
    if (!e3 || typeof e3 != `function` && typeof e3 != `object`) return false;
    if (g2) return c2(e3);
    if (s2(e3)) return false;
    var t3 = l2.call(e3);
    return t3 !== d2 && t3 !== f2 && !/^\[object HTML/.test(t3) ? false : c2(e3);
  };
})), Mn = i(((e2, t2) => {
  var n2 = jn(), r2 = Object.prototype.toString, i2 = Object.prototype.hasOwnProperty, a2 = function(e3, t3, n3) {
    for (var r3 = 0, a3 = e3.length; r3 < a3; r3++) i2.call(e3, r3) && (n3 == null ? t3(e3[r3], r3, e3) : t3.call(n3, e3[r3], r3, e3));
  }, o2 = function(e3, t3, n3) {
    for (var r3 = 0, i3 = e3.length; r3 < i3; r3++) n3 == null ? t3(e3.charAt(r3), r3, e3) : t3.call(n3, e3.charAt(r3), r3, e3);
  }, s2 = function(e3, t3, n3) {
    for (var r3 in e3) i2.call(e3, r3) && (n3 == null ? t3(e3[r3], r3, e3) : t3.call(n3, e3[r3], r3, e3));
  };
  function c2(e3) {
    return r2.call(e3) === `[object Array]`;
  }
  t2.exports = function(e3, t3, r3) {
    if (!n2(t3)) throw TypeError(`iterator must be a function`);
    var i3;
    arguments.length >= 3 && (i3 = r3), c2(e3) ? a2(e3, t3, i3) : typeof e3 == `string` ? o2(e3, t3, i3) : s2(e3, t3, i3);
  };
})), Nn = i(((e2, t2) => {
  t2.exports = [`Float16Array`, `Float32Array`, `Float64Array`, `Int8Array`, `Int16Array`, `Int32Array`, `Uint8Array`, `Uint8ClampedArray`, `Uint16Array`, `Uint32Array`, `BigInt64Array`, `BigUint64Array`];
})), Pn = i(((e2, t2) => {
  a();
  var n2 = Nn(), r2 = typeof globalThis > `u` ? o : globalThis;
  t2.exports = function() {
    for (var e3 = [], t3 = 0; t3 < n2.length; t3++) typeof r2[n2[t3]] == `function` && (e3[e3.length] = n2[t3]);
    return e3;
  };
})), Fn = i(((e2, t2) => {
  var n2 = Ue(), r2 = je(), i2 = Se(), a2 = He();
  t2.exports = function(e3, t3, o2) {
    if (!e3 || typeof e3 != `object` && typeof e3 != `function`) throw new i2("`obj` must be an object or a function`");
    if (typeof t3 != `string` && typeof t3 != `symbol`) throw new i2("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != `boolean` && arguments[3] !== null) throw new i2("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != `boolean` && arguments[4] !== null) throw new i2("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != `boolean` && arguments[5] !== null) throw new i2("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != `boolean`) throw new i2("`loose`, if provided, must be a boolean");
    var s2 = arguments.length > 3 ? arguments[3] : null, c2 = arguments.length > 4 ? arguments[4] : null, l2 = arguments.length > 5 ? arguments[5] : null, u2 = arguments.length > 6 ? arguments[6] : false, d2 = !!a2 && a2(e3, t3);
    if (n2) n2(e3, t3, { configurable: l2 === null && d2 ? d2.configurable : !l2, enumerable: s2 === null && d2 ? d2.enumerable : !s2, value: o2, writable: c2 === null && d2 ? d2.writable : !c2 });
    else if (u2 || !s2 && !c2 && !l2) e3[t3] = o2;
    else throw new r2(`This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.`);
  };
})), In = i(((e2, t2) => {
  var n2 = Ue(), r2 = function() {
    return !!n2;
  };
  r2.hasArrayLengthDefineBug = function() {
    if (!n2) return null;
    try {
      return n2([], `length`, { value: 1 }).length !== 1;
    } catch {
      return true;
    }
  }, t2.exports = r2;
})), Ln = i(((e2, t2) => {
  var n2 = it(), r2 = Fn(), i2 = In()(), a2 = He(), o2 = Se(), s2 = n2(`%Math.floor%`);
  t2.exports = function(e3, t3) {
    if (typeof e3 != `function`) throw new o2("`fn` is not a function");
    if (typeof t3 != `number` || t3 < 0 || t3 > 4294967295 || s2(t3) !== t3) throw new o2("`length` must be a positive 32-bit integer");
    var n3 = arguments.length > 2 && !!arguments[2], c2 = true, l2 = true;
    if (`length` in e3 && a2) {
      var u2 = a2(e3, `length`);
      u2 && !u2.configurable && (c2 = false), u2 && !u2.writable && (l2 = false);
    }
    return (c2 || l2 || !n3) && (i2 ? r2(e3, `length`, t3, true, true) : r2(e3, `length`, t3)), e3;
  };
})), Rn = i(((e2, t2) => {
  var n2 = Ye(), r2 = Ze(), i2 = $e();
  t2.exports = function() {
    return i2(n2, r2, arguments);
  };
})), zn = i(((e2, t2) => {
  var n2 = Ln(), r2 = Ue(), i2 = et(), a2 = Rn();
  t2.exports = function(e3) {
    var t3 = i2(arguments), r3 = 1 + e3.length - (arguments.length - 1);
    return n2(t3, r3 > 0 ? r3 : 0, true);
  }, r2 ? r2(t2.exports, `apply`, { value: a2 }) : t2.exports.apply = a2;
})), Bn = i(((e2, t2) => {
  a();
  var n2 = Mn(), r2 = Pn(), i2 = zn(), s2 = at(), c2 = He(), l2 = nt(), u2 = s2(`Object.prototype.toString`), d2 = Tn()(), f2 = typeof globalThis > `u` ? o : globalThis, p2 = r2(), m2 = s2(`String.prototype.slice`), h2 = s2(`Array.prototype.indexOf`, true) || function(e3, t3) {
    for (var n3 = 0; n3 < e3.length; n3 += 1) if (e3[n3] === t3) return n3;
    return -1;
  }, g2 = { __proto__: null };
  d2 && c2 && l2 ? n2(p2, function(e3) {
    var t3 = new f2[e3]();
    if (Symbol.toStringTag in t3 && l2) {
      var n3 = l2(t3), r3 = c2(n3, Symbol.toStringTag);
      if (!r3 && n3 && (r3 = c2(l2(n3), Symbol.toStringTag)), r3 && r3.get) {
        var a2 = i2(r3.get);
        g2[`$` + e3] = a2;
      }
    }
  }) : n2(p2, function(e3) {
    var t3 = new f2[e3](), n3 = t3.slice || t3.set;
    if (n3) {
      var r3 = i2(n3);
      g2[`$` + e3] = r3;
    }
  });
  var _2 = function(e3) {
    var t3 = false;
    return n2(g2, function(n3, r3) {
      if (!t3) try {
        `$` + n3(e3) === r3 && (t3 = m2(r3, 1));
      } catch {
      }
    }), t3;
  }, v2 = function(e3) {
    var t3 = false;
    return n2(g2, function(n3, r3) {
      if (!t3) try {
        n3(e3), t3 = m2(r3, 1);
      } catch {
      }
    }), t3;
  };
  t2.exports = function(e3) {
    if (!e3 || typeof e3 != `object`) return false;
    if (!d2) {
      var t3 = m2(u2(e3), 8, -1);
      return h2(p2, t3) > -1 ? t3 : t3 === `Object` ? v2(e3) : false;
    }
    return c2 ? _2(e3) : null;
  };
})), Vn = i(((e2, t2) => {
  var n2 = Bn();
  t2.exports = function(e3) {
    return !!n2(e3);
  };
})), Hn = i(((e2) => {
  var t2 = En(), n2 = An(), r2 = Bn(), i2 = Vn();
  function a2(e3) {
    return e3.call.bind(e3);
  }
  var o2 = typeof BigInt < `u`, s2 = typeof Symbol < `u`, c2 = a2(Object.prototype.toString), l2 = a2(Number.prototype.valueOf), u2 = a2(String.prototype.valueOf), d2 = a2(Boolean.prototype.valueOf);
  if (o2) var f2 = a2(BigInt.prototype.valueOf);
  if (s2) var p2 = a2(Symbol.prototype.valueOf);
  function m2(e3, t3) {
    if (typeof e3 != `object`) return false;
    try {
      return t3(e3), true;
    } catch {
      return false;
    }
  }
  e2.isArgumentsObject = t2, e2.isGeneratorFunction = n2, e2.isTypedArray = i2;
  function h2(e3) {
    return typeof Promise < `u` && e3 instanceof Promise || typeof e3 == `object` && !!e3 && typeof e3.then == `function` && typeof e3.catch == `function`;
  }
  e2.isPromise = h2;
  function g2(e3) {
    return typeof ArrayBuffer < `u` && ArrayBuffer.isView ? ArrayBuffer.isView(e3) : i2(e3) || z2(e3);
  }
  e2.isArrayBufferView = g2;
  function _2(e3) {
    return r2(e3) === `Uint8Array`;
  }
  e2.isUint8Array = _2;
  function v2(e3) {
    return r2(e3) === `Uint8ClampedArray`;
  }
  e2.isUint8ClampedArray = v2;
  function y2(e3) {
    return r2(e3) === `Uint16Array`;
  }
  e2.isUint16Array = y2;
  function b2(e3) {
    return r2(e3) === `Uint32Array`;
  }
  e2.isUint32Array = b2;
  function x2(e3) {
    return r2(e3) === `Int8Array`;
  }
  e2.isInt8Array = x2;
  function S2(e3) {
    return r2(e3) === `Int16Array`;
  }
  e2.isInt16Array = S2;
  function C2(e3) {
    return r2(e3) === `Int32Array`;
  }
  e2.isInt32Array = C2;
  function w2(e3) {
    return r2(e3) === `Float32Array`;
  }
  e2.isFloat32Array = w2;
  function T2(e3) {
    return r2(e3) === `Float64Array`;
  }
  e2.isFloat64Array = T2;
  function E2(e3) {
    return r2(e3) === `BigInt64Array`;
  }
  e2.isBigInt64Array = E2;
  function D2(e3) {
    return r2(e3) === `BigUint64Array`;
  }
  e2.isBigUint64Array = D2;
  function O2(e3) {
    return c2(e3) === `[object Map]`;
  }
  O2.working = typeof Map < `u` && O2(/* @__PURE__ */ new Map());
  function k2(e3) {
    return typeof Map > `u` ? false : O2.working ? O2(e3) : e3 instanceof Map;
  }
  e2.isMap = k2;
  function A2(e3) {
    return c2(e3) === `[object Set]`;
  }
  A2.working = typeof Set < `u` && A2(/* @__PURE__ */ new Set());
  function j2(e3) {
    return typeof Set > `u` ? false : A2.working ? A2(e3) : e3 instanceof Set;
  }
  e2.isSet = j2;
  function M2(e3) {
    return c2(e3) === `[object WeakMap]`;
  }
  M2.working = typeof WeakMap < `u` && M2(/* @__PURE__ */ new WeakMap());
  function N2(e3) {
    return typeof WeakMap > `u` ? false : M2.working ? M2(e3) : e3 instanceof WeakMap;
  }
  e2.isWeakMap = N2;
  function P2(e3) {
    return c2(e3) === `[object WeakSet]`;
  }
  P2.working = typeof WeakSet < `u` && P2(/* @__PURE__ */ new WeakSet());
  function F2(e3) {
    return P2(e3);
  }
  e2.isWeakSet = F2;
  function I2(e3) {
    return c2(e3) === `[object ArrayBuffer]`;
  }
  I2.working = typeof ArrayBuffer < `u` && I2(new ArrayBuffer());
  function L2(e3) {
    return typeof ArrayBuffer > `u` ? false : I2.working ? I2(e3) : e3 instanceof ArrayBuffer;
  }
  e2.isArrayBuffer = L2;
  function R2(e3) {
    return c2(e3) === `[object DataView]`;
  }
  R2.working = typeof ArrayBuffer < `u` && typeof DataView < `u` && R2(new DataView(new ArrayBuffer(1), 0, 1));
  function z2(e3) {
    return typeof DataView > `u` ? false : R2.working ? R2(e3) : e3 instanceof DataView;
  }
  e2.isDataView = z2;
  var B2 = typeof SharedArrayBuffer < `u` ? SharedArrayBuffer : void 0;
  function V2(e3) {
    return c2(e3) === `[object SharedArrayBuffer]`;
  }
  function H2(e3) {
    return B2 === void 0 ? false : (V2.working === void 0 && (V2.working = V2(new B2())), V2.working ? V2(e3) : e3 instanceof B2);
  }
  e2.isSharedArrayBuffer = H2;
  function U2(e3) {
    return c2(e3) === `[object AsyncFunction]`;
  }
  e2.isAsyncFunction = U2;
  function W2(e3) {
    return c2(e3) === `[object Map Iterator]`;
  }
  e2.isMapIterator = W2;
  function G2(e3) {
    return c2(e3) === `[object Set Iterator]`;
  }
  e2.isSetIterator = G2;
  function ee2(e3) {
    return c2(e3) === `[object Generator]`;
  }
  e2.isGeneratorObject = ee2;
  function K2(e3) {
    return c2(e3) === `[object WebAssembly.Module]`;
  }
  e2.isWebAssemblyCompiledModule = K2;
  function te2(e3) {
    return m2(e3, l2);
  }
  e2.isNumberObject = te2;
  function q2(e3) {
    return m2(e3, u2);
  }
  e2.isStringObject = q2;
  function J2(e3) {
    return m2(e3, d2);
  }
  e2.isBooleanObject = J2;
  function Y2(e3) {
    return o2 && m2(e3, f2);
  }
  e2.isBigIntObject = Y2;
  function ne2(e3) {
    return s2 && m2(e3, p2);
  }
  e2.isSymbolObject = ne2;
  function re2(e3) {
    return te2(e3) || q2(e3) || J2(e3) || Y2(e3) || ne2(e3);
  }
  e2.isBoxedPrimitive = re2;
  function X2(e3) {
    return typeof Uint8Array < `u` && (L2(e3) || H2(e3));
  }
  e2.isAnyArrayBuffer = X2, [`isProxy`, `isExternal`, `isModuleNamespaceObject`].forEach(function(t3) {
    Object.defineProperty(e2, t3, { enumerable: false, value: function() {
      throw Error(t3 + ` is not supported in userland`);
    } });
  });
})), Un = i(((e2, t2) => {
  t2.exports = function(e3) {
    return e3 && typeof e3 == `object` && typeof e3.copy == `function` && typeof e3.fill == `function` && typeof e3.readUInt8 == `function`;
  };
})), Wn = i(((e2) => {
  u();
  var t2 = Object.getOwnPropertyDescriptors || function(e3) {
    for (var t3 = Object.keys(e3), n3 = {}, r3 = 0; r3 < t3.length; r3++) n3[t3[r3]] = Object.getOwnPropertyDescriptor(e3, t3[r3]);
    return n3;
  }, n2 = /%[sdj%]/g;
  e2.format = function(e3) {
    if (!C2(e3)) {
      for (var t3 = [], r3 = 0; r3 < arguments.length; r3++) t3.push(o2(arguments[r3]));
      return t3.join(` `);
    }
    for (var r3 = 1, i3 = arguments, a3 = i3.length, s3 = String(e3).replace(n2, function(e4) {
      if (e4 === `%%`) return `%`;
      if (r3 >= a3) return e4;
      switch (e4) {
        case `%s`:
          return String(i3[r3++]);
        case `%d`:
          return Number(i3[r3++]);
        case `%j`:
          try {
            return JSON.stringify(i3[r3++]);
          } catch {
            return `[Circular]`;
          }
        default:
          return e4;
      }
    }), c3 = i3[r3]; r3 < a3; c3 = i3[++r3]) b2(c3) || !D2(c3) ? s3 += ` ` + c3 : s3 += ` ` + o2(c3);
    return s3;
  }, e2.deprecate = function(t3, n3) {
    if (l !== void 0 && l.noDeprecation === true) return t3;
    if (l === void 0) return function() {
      return e2.deprecate(t3, n3).apply(this, arguments);
    };
    var r3 = false;
    function i3() {
      if (!r3) {
        if (l.throwDeprecation) throw Error(n3);
        l.traceDeprecation ? console.trace(n3) : console.error(n3), r3 = true;
      }
      return t3.apply(this, arguments);
    }
    return i3;
  };
  var r2 = {}, i2 = /^$/;
  if ({}.NODE_DEBUG) {
    var a2 = {}.NODE_DEBUG;
    a2 = a2.replace(/[|\\{}()[\]^$+?.]/g, `\\$&`).replace(/\*/g, `.*`).replace(/,/g, `$|^`).toUpperCase(), i2 = RegExp(`^` + a2 + `$`, `i`);
  }
  e2.debuglog = function(t3) {
    if (t3 = t3.toUpperCase(), !r2[t3]) if (i2.test(t3)) {
      var n3 = l.pid;
      r2[t3] = function() {
        var r3 = e2.format.apply(e2, arguments);
        console.error(`%s %d: %s`, t3, n3, r3);
      };
    } else r2[t3] = function() {
    };
    return r2[t3];
  };
  function o2(t3, n3) {
    var r3 = { seen: [], stylize: c2 };
    return arguments.length >= 3 && (r3.depth = arguments[2]), arguments.length >= 4 && (r3.colors = arguments[3]), y2(n3) ? r3.showHidden = n3 : n3 && e2._extend(r3, n3), T2(r3.showHidden) && (r3.showHidden = false), T2(r3.depth) && (r3.depth = 2), T2(r3.colors) && (r3.colors = false), T2(r3.customInspect) && (r3.customInspect = true), r3.colors && (r3.stylize = s2), f2(r3, t3, r3.depth);
  }
  e2.inspect = o2, o2.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, o2.styles = { special: `cyan`, number: `yellow`, boolean: `yellow`, undefined: `grey`, null: `bold`, string: `green`, date: `magenta`, regexp: `red` };
  function s2(e3, t3) {
    var n3 = o2.styles[t3];
    return n3 ? `\x1B[` + o2.colors[n3][0] + `m` + e3 + `\x1B[` + o2.colors[n3][1] + `m` : e3;
  }
  function c2(e3, t3) {
    return e3;
  }
  function d2(e3) {
    var t3 = {};
    return e3.forEach(function(e4, n3) {
      t3[e4] = true;
    }), t3;
  }
  function f2(t3, n3, r3) {
    if (t3.customInspect && n3 && A2(n3.inspect) && n3.inspect !== e2.inspect && !(n3.constructor && n3.constructor.prototype === n3)) {
      var i3 = n3.inspect(r3, t3);
      return C2(i3) || (i3 = f2(t3, i3, r3)), i3;
    }
    var a3 = p2(t3, n3);
    if (a3) return a3;
    var o3 = Object.keys(n3), s3 = d2(o3);
    if (t3.showHidden && (o3 = Object.getOwnPropertyNames(n3)), k2(n3) && (o3.indexOf(`message`) >= 0 || o3.indexOf(`description`) >= 0)) return m2(n3);
    if (o3.length === 0) {
      if (A2(n3)) {
        var c3 = n3.name ? `: ` + n3.name : ``;
        return t3.stylize(`[Function` + c3 + `]`, `special`);
      }
      if (E2(n3)) return t3.stylize(RegExp.prototype.toString.call(n3), `regexp`);
      if (O2(n3)) return t3.stylize(Date.prototype.toString.call(n3), `date`);
      if (k2(n3)) return m2(n3);
    }
    var l2 = ``, u2 = false, y3 = [`{`, `}`];
    if (v2(n3) && (u2 = true, y3 = [`[`, `]`]), A2(n3) && (l2 = ` [Function` + (n3.name ? `: ` + n3.name : ``) + `]`), E2(n3) && (l2 = ` ` + RegExp.prototype.toString.call(n3)), O2(n3) && (l2 = ` ` + Date.prototype.toUTCString.call(n3)), k2(n3) && (l2 = ` ` + m2(n3)), o3.length === 0 && (!u2 || n3.length == 0)) return y3[0] + l2 + y3[1];
    if (r3 < 0) return E2(n3) ? t3.stylize(RegExp.prototype.toString.call(n3), `regexp`) : t3.stylize(`[Object]`, `special`);
    t3.seen.push(n3);
    var b3 = u2 ? h2(t3, n3, r3, s3, o3) : o3.map(function(e3) {
      return g2(t3, n3, r3, s3, e3, u2);
    });
    return t3.seen.pop(), _2(b3, l2, y3);
  }
  function p2(e3, t3) {
    if (T2(t3)) return e3.stylize(`undefined`, `undefined`);
    if (C2(t3)) {
      var n3 = `'` + JSON.stringify(t3).replace(/^"|"$/g, ``).replace(/'/g, `\\'`).replace(/\\"/g, `"`) + `'`;
      return e3.stylize(n3, `string`);
    }
    if (S2(t3)) return e3.stylize(`` + t3, `number`);
    if (y2(t3)) return e3.stylize(`` + t3, `boolean`);
    if (b2(t3)) return e3.stylize(`null`, `null`);
  }
  function m2(e3) {
    return `[` + Error.prototype.toString.call(e3) + `]`;
  }
  function h2(e3, t3, n3, r3, i3) {
    for (var a3 = [], o3 = 0, s3 = t3.length; o3 < s3; ++o3) I2(t3, String(o3)) ? a3.push(g2(e3, t3, n3, r3, String(o3), true)) : a3.push(``);
    return i3.forEach(function(i4) {
      i4.match(/^\d+$/) || a3.push(g2(e3, t3, n3, r3, i4, true));
    }), a3;
  }
  function g2(e3, t3, n3, r3, i3, a3) {
    var o3, s3, c3 = Object.getOwnPropertyDescriptor(t3, i3) || { value: t3[i3] };
    if (c3.get ? s3 = c3.set ? e3.stylize(`[Getter/Setter]`, `special`) : e3.stylize(`[Getter]`, `special`) : c3.set && (s3 = e3.stylize(`[Setter]`, `special`)), I2(r3, i3) || (o3 = `[` + i3 + `]`), s3 || (e3.seen.indexOf(c3.value) < 0 ? (s3 = b2(n3) ? f2(e3, c3.value, null) : f2(e3, c3.value, n3 - 1), s3.indexOf(`
`) > -1 && (s3 = a3 ? s3.split(`
`).map(function(e4) {
      return `  ` + e4;
    }).join(`
`).slice(2) : `
` + s3.split(`
`).map(function(e4) {
      return `   ` + e4;
    }).join(`
`))) : s3 = e3.stylize(`[Circular]`, `special`)), T2(o3)) {
      if (a3 && i3.match(/^\d+$/)) return s3;
      o3 = JSON.stringify(`` + i3), o3.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o3 = o3.slice(1, -1), o3 = e3.stylize(o3, `name`)) : (o3 = o3.replace(/'/g, `\\'`).replace(/\\"/g, `"`).replace(/(^"|"$)/g, `'`), o3 = e3.stylize(o3, `string`));
    }
    return o3 + `: ` + s3;
  }
  function _2(e3, t3, n3) {
    var r3 = 0;
    return e3.reduce(function(e4, t4) {
      return r3++, t4.indexOf(`
`) >= 0 && r3++, e4 + t4.replace(/\u001b\[\d\d?m/g, ``).length + 1;
    }, 0) > 60 ? n3[0] + (t3 === `` ? `` : t3 + `
 `) + ` ` + e3.join(`,
  `) + ` ` + n3[1] : n3[0] + t3 + ` ` + e3.join(`, `) + ` ` + n3[1];
  }
  e2.types = Hn();
  function v2(e3) {
    return Array.isArray(e3);
  }
  e2.isArray = v2;
  function y2(e3) {
    return typeof e3 == `boolean`;
  }
  e2.isBoolean = y2;
  function b2(e3) {
    return e3 === null;
  }
  e2.isNull = b2;
  function x2(e3) {
    return e3 == null;
  }
  e2.isNullOrUndefined = x2;
  function S2(e3) {
    return typeof e3 == `number`;
  }
  e2.isNumber = S2;
  function C2(e3) {
    return typeof e3 == `string`;
  }
  e2.isString = C2;
  function w2(e3) {
    return typeof e3 == `symbol`;
  }
  e2.isSymbol = w2;
  function T2(e3) {
    return e3 === void 0;
  }
  e2.isUndefined = T2;
  function E2(e3) {
    return D2(e3) && M2(e3) === `[object RegExp]`;
  }
  e2.isRegExp = E2, e2.types.isRegExp = E2;
  function D2(e3) {
    return typeof e3 == `object` && !!e3;
  }
  e2.isObject = D2;
  function O2(e3) {
    return D2(e3) && M2(e3) === `[object Date]`;
  }
  e2.isDate = O2, e2.types.isDate = O2;
  function k2(e3) {
    return D2(e3) && (M2(e3) === `[object Error]` || e3 instanceof Error);
  }
  e2.isError = k2, e2.types.isNativeError = k2;
  function A2(e3) {
    return typeof e3 == `function`;
  }
  e2.isFunction = A2;
  function j2(e3) {
    return e3 === null || typeof e3 == `boolean` || typeof e3 == `number` || typeof e3 == `string` || typeof e3 == `symbol` || e3 === void 0;
  }
  e2.isPrimitive = j2, e2.isBuffer = Un();
  function M2(e3) {
    return Object.prototype.toString.call(e3);
  }
  function N2(e3) {
    return e3 < 10 ? `0` + e3.toString(10) : e3.toString(10);
  }
  var P2 = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
  function F2() {
    var e3 = /* @__PURE__ */ new Date(), t3 = [N2(e3.getHours()), N2(e3.getMinutes()), N2(e3.getSeconds())].join(`:`);
    return [e3.getDate(), P2[e3.getMonth()], t3].join(` `);
  }
  e2.log = function() {
    console.log(`%s - %s`, F2(), e2.format.apply(e2, arguments));
  }, e2.inherits = Cn(), e2._extend = function(e3, t3) {
    if (!t3 || !D2(t3)) return e3;
    for (var n3 = Object.keys(t3), r3 = n3.length; r3--; ) e3[n3[r3]] = t3[n3[r3]];
    return e3;
  };
  function I2(e3, t3) {
    return Object.prototype.hasOwnProperty.call(e3, t3);
  }
  var L2 = typeof Symbol < `u` ? /* @__PURE__ */ Symbol(`util.promisify.custom`) : void 0;
  e2.promisify = function(e3) {
    if (typeof e3 != `function`) throw TypeError(`The "original" argument must be of type Function`);
    if (L2 && e3[L2]) {
      var n3 = e3[L2];
      if (typeof n3 != `function`) throw TypeError(`The "util.promisify.custom" argument must be of type Function`);
      return Object.defineProperty(n3, L2, { value: n3, enumerable: false, writable: false, configurable: true }), n3;
    }
    function n3() {
      for (var t3, n4, r3 = new Promise(function(e4, r4) {
        t3 = e4, n4 = r4;
      }), i3 = [], a3 = 0; a3 < arguments.length; a3++) i3.push(arguments[a3]);
      i3.push(function(e4, r4) {
        e4 ? n4(e4) : t3(r4);
      });
      try {
        e3.apply(this, i3);
      } catch (e4) {
        n4(e4);
      }
      return r3;
    }
    return Object.setPrototypeOf(n3, Object.getPrototypeOf(e3)), L2 && Object.defineProperty(n3, L2, { value: n3, enumerable: false, writable: false, configurable: true }), Object.defineProperties(n3, t2(e3));
  }, e2.promisify.custom = L2;
  function R2(e3, t3) {
    if (!e3) {
      var n3 = Error(`Promise was rejected with a falsy value`);
      n3.reason = e3, e3 = n3;
    }
    return t3(e3);
  }
  function z2(e3) {
    if (typeof e3 != `function`) throw TypeError(`The "original" argument must be of type Function`);
    function n3() {
      for (var t3 = [], n4 = 0; n4 < arguments.length; n4++) t3.push(arguments[n4]);
      var r3 = t3.pop();
      if (typeof r3 != `function`) throw TypeError(`The last argument must be of type Function`);
      var i3 = this, a3 = function() {
        return r3.apply(i3, arguments);
      };
      e3.apply(this, t3).then(function(e4) {
        l.nextTick(a3.bind(null, null, e4));
      }, function(e4) {
        l.nextTick(R2.bind(null, e4, a3));
      });
    }
    return Object.setPrototypeOf(n3, Object.getPrototypeOf(e3)), Object.defineProperties(n3, t2(e3)), n3;
  }
  e2.callbackify = z2;
})), Gn = i(((e2, t2) => {
  function n2(e3, t3) {
    var n3 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var r3 = Object.getOwnPropertySymbols(e3);
      t3 && (r3 = r3.filter(function(t4) {
        return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
      })), n3.push.apply(n3, r3);
    }
    return n3;
  }
  function r2(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var r3 = arguments[t3] == null ? {} : arguments[t3];
      t3 % 2 ? n2(Object(r3), true).forEach(function(t4) {
        i2(e3, t4, r3[t4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : n2(Object(r3)).forEach(function(t4) {
        Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(r3, t4));
      });
    }
    return e3;
  }
  function i2(e3, t3, n3) {
    return t3 = c2(t3), t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
  }
  function a2(e3, t3) {
    if (!(e3 instanceof t3)) throw TypeError(`Cannot call a class as a function`);
  }
  function o2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, c2(r3.key), r3);
    }
  }
  function s2(e3, t3, n3) {
    return t3 && o2(e3.prototype, t3), n3 && o2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function c2(e3) {
    var t3 = l2(e3, `string`);
    return typeof t3 == `symbol` ? t3 : String(t3);
  }
  function l2(e3, t3) {
    if (typeof e3 != `object` || !e3) return e3;
    var n3 = e3[Symbol.toPrimitive];
    if (n3 !== void 0) {
      var r3 = n3.call(e3, t3 || `default`);
      if (typeof r3 != `object`) return r3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (t3 === `string` ? String : Number)(e3);
  }
  var u2 = re().Buffer, d2 = Wn().inspect, f2 = d2 && d2.custom || `inspect`;
  function p2(e3, t3, n3) {
    u2.prototype.copy.call(e3, t3, n3);
  }
  t2.exports = (function() {
    function e3() {
      a2(this, e3), this.head = null, this.tail = null, this.length = 0;
    }
    return s2(e3, [{ key: `push`, value: function(e4) {
      var t3 = { data: e4, next: null };
      this.length > 0 ? this.tail.next = t3 : this.head = t3, this.tail = t3, ++this.length;
    } }, { key: `unshift`, value: function(e4) {
      var t3 = { data: e4, next: this.head };
      this.length === 0 && (this.tail = t3), this.head = t3, ++this.length;
    } }, { key: `shift`, value: function() {
      if (this.length !== 0) {
        var e4 = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e4;
      }
    } }, { key: `clear`, value: function() {
      this.head = this.tail = null, this.length = 0;
    } }, { key: `join`, value: function(e4) {
      if (this.length === 0) return ``;
      for (var t3 = this.head, n3 = `` + t3.data; t3 = t3.next; ) n3 += e4 + t3.data;
      return n3;
    } }, { key: `concat`, value: function(e4) {
      if (this.length === 0) return u2.alloc(0);
      for (var t3 = u2.allocUnsafe(e4 >>> 0), n3 = this.head, r3 = 0; n3; ) p2(n3.data, t3, r3), r3 += n3.data.length, n3 = n3.next;
      return t3;
    } }, { key: `consume`, value: function(e4, t3) {
      var n3;
      return e4 < this.head.data.length ? (n3 = this.head.data.slice(0, e4), this.head.data = this.head.data.slice(e4)) : n3 = e4 === this.head.data.length ? this.shift() : t3 ? this._getString(e4) : this._getBuffer(e4), n3;
    } }, { key: `first`, value: function() {
      return this.head.data;
    } }, { key: `_getString`, value: function(e4) {
      var t3 = this.head, n3 = 1, r3 = t3.data;
      for (e4 -= r3.length; t3 = t3.next; ) {
        var i3 = t3.data, a3 = e4 > i3.length ? i3.length : e4;
        if (a3 === i3.length ? r3 += i3 : r3 += i3.slice(0, e4), e4 -= a3, e4 === 0) {
          a3 === i3.length ? (++n3, t3.next ? this.head = t3.next : this.head = this.tail = null) : (this.head = t3, t3.data = i3.slice(a3));
          break;
        }
        ++n3;
      }
      return this.length -= n3, r3;
    } }, { key: `_getBuffer`, value: function(e4) {
      var t3 = u2.allocUnsafe(e4), n3 = this.head, r3 = 1;
      for (n3.data.copy(t3), e4 -= n3.data.length; n3 = n3.next; ) {
        var i3 = n3.data, a3 = e4 > i3.length ? i3.length : e4;
        if (i3.copy(t3, t3.length - e4, 0, a3), e4 -= a3, e4 === 0) {
          a3 === i3.length ? (++r3, n3.next ? this.head = n3.next : this.head = this.tail = null) : (this.head = n3, n3.data = i3.slice(a3));
          break;
        }
        ++r3;
      }
      return this.length -= r3, t3;
    } }, { key: f2, value: function(e4, t3) {
      return d2(this, r2(r2({}, t3), {}, { depth: 0, customInspect: false }));
    } }]), e3;
  })();
})), Kn = i(((e2, t2) => {
  u();
  function n2(e3, t3) {
    var n3 = this, a3 = this._readableState && this._readableState.destroyed, s3 = this._writableState && this._writableState.destroyed;
    return a3 || s3 ? (t3 ? t3(e3) : e3 && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, l.nextTick(o2, this, e3)) : l.nextTick(o2, this, e3)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(e3 || null, function(e4) {
      !t3 && e4 ? n3._writableState ? n3._writableState.errorEmitted ? l.nextTick(i2, n3) : (n3._writableState.errorEmitted = true, l.nextTick(r2, n3, e4)) : l.nextTick(r2, n3, e4) : t3 ? (l.nextTick(i2, n3), t3(e4)) : l.nextTick(i2, n3);
    }), this);
  }
  function r2(e3, t3) {
    o2(e3, t3), i2(e3);
  }
  function i2(e3) {
    e3._writableState && !e3._writableState.emitClose || e3._readableState && !e3._readableState.emitClose || e3.emit(`close`);
  }
  function a2() {
    this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
  }
  function o2(e3, t3) {
    e3.emit(`error`, t3);
  }
  function s2(e3, t3) {
    var n3 = e3._readableState, r3 = e3._writableState;
    n3 && n3.autoDestroy || r3 && r3.autoDestroy ? e3.destroy(t3) : e3.emit(`error`, t3);
  }
  t2.exports = { destroy: n2, undestroy: a2, errorOrDestroy: s2 };
})), qn = i(((e2, t2) => {
  function n2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
  }
  var r2 = {};
  function i2(e3, t3, i3) {
    i3 || (i3 = Error);
    function a3(e4, n3, r3) {
      return typeof t3 == `string` ? t3 : t3(e4, n3, r3);
    }
    var o3 = (function(e4) {
      n2(t4, e4);
      function t4(t5, n3, r3) {
        return e4.call(this, a3(t5, n3, r3)) || this;
      }
      return t4;
    })(i3);
    o3.prototype.name = i3.name, o3.prototype.code = e3, r2[e3] = o3;
  }
  function a2(e3, t3) {
    if (Array.isArray(e3)) {
      var n3 = e3.length;
      return e3 = e3.map(function(e4) {
        return String(e4);
      }), n3 > 2 ? `one of ${t3} ${e3.slice(0, n3 - 1).join(`, `)}, or ` + e3[n3 - 1] : n3 === 2 ? `one of ${t3} ${e3[0]} or ${e3[1]}` : `of ${t3} ${e3[0]}`;
    } else return `of ${t3} ${String(e3)}`;
  }
  function o2(e3, t3, n3) {
    return e3.substr(!n3 || n3 < 0 ? 0 : +n3, t3.length) === t3;
  }
  function s2(e3, t3, n3) {
    return (n3 === void 0 || n3 > e3.length) && (n3 = e3.length), e3.substring(n3 - t3.length, n3) === t3;
  }
  function c2(e3, t3, n3) {
    return typeof n3 != `number` && (n3 = 0), n3 + t3.length > e3.length ? false : e3.indexOf(t3, n3) !== -1;
  }
  i2(`ERR_INVALID_OPT_VALUE`, function(e3, t3) {
    return `The value "` + t3 + `" is invalid for option "` + e3 + `"`;
  }, TypeError), i2(`ERR_INVALID_ARG_TYPE`, function(e3, t3, n3) {
    var r3;
    typeof t3 == `string` && o2(t3, `not `) ? (r3 = `must not be`, t3 = t3.replace(/^not /, ``)) : r3 = `must be`;
    var i3 = s2(e3, ` argument`) ? `The ${e3} ${r3} ${a2(t3, `type`)}` : `The "${e3}" ${c2(e3, `.`) ? `property` : `argument`} ${r3} ${a2(t3, `type`)}`;
    return i3 += `. Received type ${typeof n3}`, i3;
  }, TypeError), i2(`ERR_STREAM_PUSH_AFTER_EOF`, `stream.push() after EOF`), i2(`ERR_METHOD_NOT_IMPLEMENTED`, function(e3) {
    return `The ` + e3 + ` method is not implemented`;
  }), i2(`ERR_STREAM_PREMATURE_CLOSE`, `Premature close`), i2(`ERR_STREAM_DESTROYED`, function(e3) {
    return `Cannot call ` + e3 + ` after a stream was destroyed`;
  }), i2(`ERR_MULTIPLE_CALLBACK`, `Callback called multiple times`), i2(`ERR_STREAM_CANNOT_PIPE`, `Cannot pipe, not readable`), i2(`ERR_STREAM_WRITE_AFTER_END`, `write after end`), i2(`ERR_STREAM_NULL_VALUES`, `May not write null values to stream`, TypeError), i2(`ERR_UNKNOWN_ENCODING`, function(e3) {
    return `Unknown encoding: ` + e3;
  }, TypeError), i2(`ERR_STREAM_UNSHIFT_AFTER_END_EVENT`, `stream.unshift() after end event`), t2.exports.codes = r2;
})), Jn = i(((e2, t2) => {
  var n2 = qn().codes.ERR_INVALID_OPT_VALUE;
  function r2(e3, t3, n3) {
    return e3.highWaterMark == null ? t3 ? e3[n3] : null : e3.highWaterMark;
  }
  function i2(e3, t3, i3, a2) {
    var o2 = r2(t3, a2, i3);
    if (o2 != null) {
      if (!(isFinite(o2) && Math.floor(o2) === o2) || o2 < 0) throw new n2(a2 ? i3 : `highWaterMark`, o2);
      return Math.floor(o2);
    }
    return e3.objectMode ? 16 : 16 * 1024;
  }
  t2.exports = { getHighWaterMark: i2 };
})), Yn = i(((e2, t2) => {
  a(), t2.exports = n2;
  function n2(e3, t3) {
    if (r2(`noDeprecation`)) return e3;
    var n3 = false;
    function i2() {
      if (!n3) {
        if (r2(`throwDeprecation`)) throw Error(t3);
        r2(`traceDeprecation`) ? console.trace(t3) : console.warn(t3), n3 = true;
      }
      return e3.apply(this, arguments);
    }
    return i2;
  }
  function r2(e3) {
    try {
      if (!o.localStorage) return false;
    } catch {
      return false;
    }
    var t3 = o.localStorage[e3];
    return t3 == null ? false : String(t3).toLowerCase() === `true`;
  }
})), Xn = i(((e2, t2) => {
  a(), u(), t2.exports = k2;
  function n2(e3) {
    var t3 = this;
    this.next = null, this.entry = null, this.finish = function() {
      ee2(t3, e3);
    };
  }
  var r2;
  k2.WritableState = D2;
  var i2 = { deprecate: Yn() }, s2 = wn(), c2 = re().Buffer, d2 = (o === void 0 ? typeof window < `u` ? window : typeof self < `u` ? self : {} : o).Uint8Array || function() {
  };
  function f2(e3) {
    return c2.from(e3);
  }
  function p2(e3) {
    return c2.isBuffer(e3) || e3 instanceof d2;
  }
  var m2 = Kn(), h2 = Jn().getHighWaterMark, g2 = qn().codes, _2 = g2.ERR_INVALID_ARG_TYPE, v2 = g2.ERR_METHOD_NOT_IMPLEMENTED, y2 = g2.ERR_MULTIPLE_CALLBACK, b2 = g2.ERR_STREAM_CANNOT_PIPE, x2 = g2.ERR_STREAM_DESTROYED, S2 = g2.ERR_STREAM_NULL_VALUES, C2 = g2.ERR_STREAM_WRITE_AFTER_END, w2 = g2.ERR_UNKNOWN_ENCODING, T2 = m2.errorOrDestroy;
  Cn()(k2, s2);
  function E2() {
  }
  function D2(e3, t3, i3) {
    r2 || (r2 = Zn()), e3 || (e3 = {}), typeof i3 != `boolean` && (i3 = t3 instanceof r2), this.objectMode = !!e3.objectMode, i3 && (this.objectMode = this.objectMode || !!e3.writableObjectMode), this.highWaterMark = h2(this, e3, `writableHighWaterMark`, i3), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    var a2 = e3.decodeStrings === false;
    this.decodeStrings = !a2, this.defaultEncoding = e3.defaultEncoding || `utf8`, this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(e4) {
      L2(t3, e4);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = e3.emitClose !== false, this.autoDestroy = !!e3.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new n2(this);
  }
  D2.prototype.getBuffer = function() {
    for (var e3 = this.bufferedRequest, t3 = []; e3; ) t3.push(e3), e3 = e3.next;
    return t3;
  }, (function() {
    try {
      Object.defineProperty(D2.prototype, `buffer`, { get: i2.deprecate(function() {
        return this.getBuffer();
      }, `_writableState.buffer is deprecated. Use _writableState.getBuffer instead.`, `DEP0003`) });
    } catch {
    }
  })();
  var O2;
  typeof Symbol == `function` && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == `function` ? (O2 = Function.prototype[Symbol.hasInstance], Object.defineProperty(k2, Symbol.hasInstance, { value: function(e3) {
    return O2.call(this, e3) ? true : this === k2 ? e3 && e3._writableState instanceof D2 : false;
  } })) : O2 = function(e3) {
    return e3 instanceof this;
  };
  function k2(e3) {
    r2 || (r2 = Zn());
    var t3 = this instanceof r2;
    if (!t3 && !O2.call(k2, this)) return new k2(e3);
    this._writableState = new D2(e3, this, t3), this.writable = true, e3 && (typeof e3.write == `function` && (this._write = e3.write), typeof e3.writev == `function` && (this._writev = e3.writev), typeof e3.destroy == `function` && (this._destroy = e3.destroy), typeof e3.final == `function` && (this._final = e3.final)), s2.call(this);
  }
  k2.prototype.pipe = function() {
    T2(this, new b2());
  };
  function A2(e3, t3) {
    var n3 = new C2();
    T2(e3, n3), l.nextTick(t3, n3);
  }
  function j2(e3, t3, n3, r3) {
    var i3;
    return n3 === null ? i3 = new S2() : typeof n3 != `string` && !t3.objectMode && (i3 = new _2(`chunk`, [`string`, `Buffer`], n3)), i3 ? (T2(e3, i3), l.nextTick(r3, i3), false) : true;
  }
  k2.prototype.write = function(e3, t3, n3) {
    var r3 = this._writableState, i3 = false, a2 = !r3.objectMode && p2(e3);
    return a2 && !c2.isBuffer(e3) && (e3 = f2(e3)), typeof t3 == `function` && (n3 = t3, t3 = null), a2 ? t3 = `buffer` : t3 || (t3 = r3.defaultEncoding), typeof n3 != `function` && (n3 = E2), r3.ending ? A2(this, n3) : (a2 || j2(this, r3, e3, n3)) && (r3.pendingcb++, i3 = N2(this, r3, a2, e3, t3, n3)), i3;
  }, k2.prototype.cork = function() {
    this._writableState.corked++;
  }, k2.prototype.uncork = function() {
    var e3 = this._writableState;
    e3.corked && (e3.corked--, !e3.writing && !e3.corked && !e3.bufferProcessing && e3.bufferedRequest && B2(this, e3));
  }, k2.prototype.setDefaultEncoding = function(e3) {
    if (typeof e3 == `string` && (e3 = e3.toLowerCase()), !([`hex`, `utf8`, `utf-8`, `ascii`, `binary`, `base64`, `ucs2`, `ucs-2`, `utf16le`, `utf-16le`, `raw`].indexOf((e3 + ``).toLowerCase()) > -1)) throw new w2(e3);
    return this._writableState.defaultEncoding = e3, this;
  }, Object.defineProperty(k2.prototype, `writableBuffer`, { enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  } });
  function M2(e3, t3, n3) {
    return !e3.objectMode && e3.decodeStrings !== false && typeof t3 == `string` && (t3 = c2.from(t3, n3)), t3;
  }
  Object.defineProperty(k2.prototype, `writableHighWaterMark`, { enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  } });
  function N2(e3, t3, n3, r3, i3, a2) {
    if (!n3) {
      var o2 = M2(t3, r3, i3);
      r3 !== o2 && (n3 = true, i3 = `buffer`, r3 = o2);
    }
    var s3 = t3.objectMode ? 1 : r3.length;
    t3.length += s3;
    var c3 = t3.length < t3.highWaterMark;
    if (c3 || (t3.needDrain = true), t3.writing || t3.corked) {
      var l2 = t3.lastBufferedRequest;
      t3.lastBufferedRequest = { chunk: r3, encoding: i3, isBuf: n3, callback: a2, next: null }, l2 ? l2.next = t3.lastBufferedRequest : t3.bufferedRequest = t3.lastBufferedRequest, t3.bufferedRequestCount += 1;
    } else P2(e3, t3, false, s3, r3, i3, a2);
    return c3;
  }
  function P2(e3, t3, n3, r3, i3, a2, o2) {
    t3.writelen = r3, t3.writecb = o2, t3.writing = true, t3.sync = true, t3.destroyed ? t3.onwrite(new x2(`write`)) : n3 ? e3._writev(i3, t3.onwrite) : e3._write(i3, a2, t3.onwrite), t3.sync = false;
  }
  function F2(e3, t3, n3, r3, i3) {
    --t3.pendingcb, n3 ? (l.nextTick(i3, r3), l.nextTick(W2, e3, t3), e3._writableState.errorEmitted = true, T2(e3, r3)) : (i3(r3), e3._writableState.errorEmitted = true, T2(e3, r3), W2(e3, t3));
  }
  function I2(e3) {
    e3.writing = false, e3.writecb = null, e3.length -= e3.writelen, e3.writelen = 0;
  }
  function L2(e3, t3) {
    var n3 = e3._writableState, r3 = n3.sync, i3 = n3.writecb;
    if (typeof i3 != `function`) throw new y2();
    if (I2(n3), t3) F2(e3, n3, r3, t3, i3);
    else {
      var a2 = V2(n3) || e3.destroyed;
      !a2 && !n3.corked && !n3.bufferProcessing && n3.bufferedRequest && B2(e3, n3), r3 ? l.nextTick(R2, e3, n3, a2, i3) : R2(e3, n3, a2, i3);
    }
  }
  function R2(e3, t3, n3, r3) {
    n3 || z2(e3, t3), t3.pendingcb--, r3(), W2(e3, t3);
  }
  function z2(e3, t3) {
    t3.length === 0 && t3.needDrain && (t3.needDrain = false, e3.emit(`drain`));
  }
  function B2(e3, t3) {
    t3.bufferProcessing = true;
    var r3 = t3.bufferedRequest;
    if (e3._writev && r3 && r3.next) {
      var i3 = t3.bufferedRequestCount, a2 = Array(i3), o2 = t3.corkedRequestsFree;
      o2.entry = r3;
      for (var s3 = 0, c3 = true; r3; ) a2[s3] = r3, r3.isBuf || (c3 = false), r3 = r3.next, s3 += 1;
      a2.allBuffers = c3, P2(e3, t3, true, t3.length, a2, ``, o2.finish), t3.pendingcb++, t3.lastBufferedRequest = null, o2.next ? (t3.corkedRequestsFree = o2.next, o2.next = null) : t3.corkedRequestsFree = new n2(t3), t3.bufferedRequestCount = 0;
    } else {
      for (; r3; ) {
        var l2 = r3.chunk, u2 = r3.encoding, d3 = r3.callback;
        if (P2(e3, t3, false, t3.objectMode ? 1 : l2.length, l2, u2, d3), r3 = r3.next, t3.bufferedRequestCount--, t3.writing) break;
      }
      r3 === null && (t3.lastBufferedRequest = null);
    }
    t3.bufferedRequest = r3, t3.bufferProcessing = false;
  }
  k2.prototype._write = function(e3, t3, n3) {
    n3(new v2(`_write()`));
  }, k2.prototype._writev = null, k2.prototype.end = function(e3, t3, n3) {
    var r3 = this._writableState;
    return typeof e3 == `function` ? (n3 = e3, e3 = null, t3 = null) : typeof t3 == `function` && (n3 = t3, t3 = null), e3 != null && this.write(e3, t3), r3.corked && (r3.corked = 1, this.uncork()), r3.ending || G2(this, r3, n3), this;
  }, Object.defineProperty(k2.prototype, `writableLength`, { enumerable: false, get: function() {
    return this._writableState.length;
  } });
  function V2(e3) {
    return e3.ending && e3.length === 0 && e3.bufferedRequest === null && !e3.finished && !e3.writing;
  }
  function H2(e3, t3) {
    e3._final(function(n3) {
      t3.pendingcb--, n3 && T2(e3, n3), t3.prefinished = true, e3.emit(`prefinish`), W2(e3, t3);
    });
  }
  function U2(e3, t3) {
    !t3.prefinished && !t3.finalCalled && (typeof e3._final == `function` && !t3.destroyed ? (t3.pendingcb++, t3.finalCalled = true, l.nextTick(H2, e3, t3)) : (t3.prefinished = true, e3.emit(`prefinish`)));
  }
  function W2(e3, t3) {
    var n3 = V2(t3);
    if (n3 && (U2(e3, t3), t3.pendingcb === 0 && (t3.finished = true, e3.emit(`finish`), t3.autoDestroy))) {
      var r3 = e3._readableState;
      (!r3 || r3.autoDestroy && r3.endEmitted) && e3.destroy();
    }
    return n3;
  }
  function G2(e3, t3, n3) {
    t3.ending = true, W2(e3, t3), n3 && (t3.finished ? l.nextTick(n3) : e3.once(`finish`, n3)), t3.ended = true, e3.writable = false;
  }
  function ee2(e3, t3, n3) {
    var r3 = e3.entry;
    for (e3.entry = null; r3; ) {
      var i3 = r3.callback;
      t3.pendingcb--, i3(n3), r3 = r3.next;
    }
    t3.corkedRequestsFree.next = e3;
  }
  Object.defineProperty(k2.prototype, `destroyed`, { enumerable: false, get: function() {
    return this._writableState === void 0 ? false : this._writableState.destroyed;
  }, set: function(e3) {
    this._writableState && (this._writableState.destroyed = e3);
  } }), k2.prototype.destroy = m2.destroy, k2.prototype._undestroy = m2.undestroy, k2.prototype._destroy = function(e3, t3) {
    t3(e3);
  };
})), Zn = i(((e2, t2) => {
  u();
  var n2 = Object.keys || function(e3) {
    var t3 = [];
    for (var n3 in e3) t3.push(n3);
    return t3;
  };
  t2.exports = c2;
  var r2 = rr(), i2 = Xn();
  Cn()(c2, r2);
  for (var a2 = n2(i2.prototype), o2 = 0; o2 < a2.length; o2++) {
    var s2 = a2[o2];
    c2.prototype[s2] || (c2.prototype[s2] = i2.prototype[s2]);
  }
  function c2(e3) {
    if (!(this instanceof c2)) return new c2(e3);
    r2.call(this, e3), i2.call(this, e3), this.allowHalfOpen = true, e3 && (e3.readable === false && (this.readable = false), e3.writable === false && (this.writable = false), e3.allowHalfOpen === false && (this.allowHalfOpen = false, this.once(`end`, d2)));
  }
  Object.defineProperty(c2.prototype, `writableHighWaterMark`, { enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  } }), Object.defineProperty(c2.prototype, `writableBuffer`, { enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  } }), Object.defineProperty(c2.prototype, `writableLength`, { enumerable: false, get: function() {
    return this._writableState.length;
  } });
  function d2() {
    this._writableState.ended || l.nextTick(f2, this);
  }
  function f2(e3) {
    e3.end();
  }
  Object.defineProperty(c2.prototype, `destroyed`, { enumerable: false, get: function() {
    return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
  }, set: function(e3) {
    this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = e3, this._writableState.destroyed = e3);
  } });
})), Qn = i(((e2, t2) => {
  var n2 = re(), r2 = n2.Buffer;
  function i2(e3, t3) {
    for (var n3 in e3) t3[n3] = e3[n3];
  }
  r2.from && r2.alloc && r2.allocUnsafe && r2.allocUnsafeSlow ? t2.exports = n2 : (i2(n2, e2), e2.Buffer = a2);
  function a2(e3, t3, n3) {
    return r2(e3, t3, n3);
  }
  a2.prototype = Object.create(r2.prototype), i2(r2, a2), a2.from = function(e3, t3, n3) {
    if (typeof e3 == `number`) throw TypeError(`Argument must not be a number`);
    return r2(e3, t3, n3);
  }, a2.alloc = function(e3, t3, n3) {
    if (typeof e3 != `number`) throw TypeError(`Argument must be a number`);
    var i3 = r2(e3);
    return t3 === void 0 ? i3.fill(0) : typeof n3 == `string` ? i3.fill(t3, n3) : i3.fill(t3), i3;
  }, a2.allocUnsafe = function(e3) {
    if (typeof e3 != `number`) throw TypeError(`Argument must be a number`);
    return r2(e3);
  }, a2.allocUnsafeSlow = function(e3) {
    if (typeof e3 != `number`) throw TypeError(`Argument must be a number`);
    return n2.SlowBuffer(e3);
  };
})), $n = i(((e2) => {
  var t2 = Qn().Buffer, n2 = t2.isEncoding || function(e3) {
    switch (e3 = `` + e3, e3 && e3.toLowerCase()) {
      case `hex`:
      case `utf8`:
      case `utf-8`:
      case `ascii`:
      case `binary`:
      case `base64`:
      case `ucs2`:
      case `ucs-2`:
      case `utf16le`:
      case `utf-16le`:
      case `raw`:
        return true;
      default:
        return false;
    }
  };
  function r2(e3) {
    if (!e3) return `utf8`;
    for (var t3; ; ) switch (e3) {
      case `utf8`:
      case `utf-8`:
        return `utf8`;
      case `ucs2`:
      case `ucs-2`:
      case `utf16le`:
      case `utf-16le`:
        return `utf16le`;
      case `latin1`:
      case `binary`:
        return `latin1`;
      case `base64`:
      case `ascii`:
      case `hex`:
        return e3;
      default:
        if (t3) return;
        e3 = (`` + e3).toLowerCase(), t3 = true;
    }
  }
  function i2(e3) {
    var i3 = r2(e3);
    if (typeof i3 != `string` && (t2.isEncoding === n2 || !n2(e3))) throw Error(`Unknown encoding: ` + e3);
    return i3 || e3;
  }
  e2.StringDecoder = a2;
  function a2(e3) {
    this.encoding = i2(e3);
    var n3;
    switch (this.encoding) {
      case `utf16le`:
        this.text = f2, this.end = p2, n3 = 4;
        break;
      case `utf8`:
        this.fillLast = l2, n3 = 4;
        break;
      case `base64`:
        this.text = m2, this.end = h2, n3 = 3;
        break;
      default:
        this.write = g2, this.end = _2;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t2.allocUnsafe(n3);
  }
  a2.prototype.write = function(e3) {
    if (e3.length === 0) return ``;
    var t3, n3;
    if (this.lastNeed) {
      if (t3 = this.fillLast(e3), t3 === void 0) return ``;
      n3 = this.lastNeed, this.lastNeed = 0;
    } else n3 = 0;
    return n3 < e3.length ? t3 ? t3 + this.text(e3, n3) : this.text(e3, n3) : t3 || ``;
  }, a2.prototype.end = d2, a2.prototype.text = u2, a2.prototype.fillLast = function(e3) {
    if (this.lastNeed <= e3.length) return e3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    e3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e3.length), this.lastNeed -= e3.length;
  };
  function o2(e3) {
    return e3 <= 127 ? 0 : e3 >> 5 == 6 ? 2 : e3 >> 4 == 14 ? 3 : e3 >> 3 == 30 ? 4 : e3 >> 6 == 2 ? -1 : -2;
  }
  function s2(e3, t3, n3) {
    var r3 = t3.length - 1;
    if (r3 < n3) return 0;
    var i3 = o2(t3[r3]);
    return i3 >= 0 ? (i3 > 0 && (e3.lastNeed = i3 - 1), i3) : --r3 < n3 || i3 === -2 ? 0 : (i3 = o2(t3[r3]), i3 >= 0 ? (i3 > 0 && (e3.lastNeed = i3 - 2), i3) : --r3 < n3 || i3 === -2 ? 0 : (i3 = o2(t3[r3]), i3 >= 0 ? (i3 > 0 && (i3 === 2 ? i3 = 0 : e3.lastNeed = i3 - 3), i3) : 0));
  }
  function c2(e3, t3, n3) {
    if ((t3[0] & 192) != 128) return e3.lastNeed = 0, `\uFFFD`;
    if (e3.lastNeed > 1 && t3.length > 1) {
      if ((t3[1] & 192) != 128) return e3.lastNeed = 1, `\uFFFD`;
      if (e3.lastNeed > 2 && t3.length > 2 && (t3[2] & 192) != 128) return e3.lastNeed = 2, `\uFFFD`;
    }
  }
  function l2(e3) {
    var t3 = this.lastTotal - this.lastNeed, n3 = c2(this, e3, t3);
    if (n3 !== void 0) return n3;
    if (this.lastNeed <= e3.length) return e3.copy(this.lastChar, t3, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    e3.copy(this.lastChar, t3, 0, e3.length), this.lastNeed -= e3.length;
  }
  function u2(e3, t3) {
    var n3 = s2(this, e3, t3);
    if (!this.lastNeed) return e3.toString(`utf8`, t3);
    this.lastTotal = n3;
    var r3 = e3.length - (n3 - this.lastNeed);
    return e3.copy(this.lastChar, 0, r3), e3.toString(`utf8`, t3, r3);
  }
  function d2(e3) {
    var t3 = e3 && e3.length ? this.write(e3) : ``;
    return this.lastNeed ? t3 + `\uFFFD` : t3;
  }
  function f2(e3, t3) {
    if ((e3.length - t3) % 2 == 0) {
      var n3 = e3.toString(`utf16le`, t3);
      if (n3) {
        var r3 = n3.charCodeAt(n3.length - 1);
        if (r3 >= 55296 && r3 <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e3[e3.length - 2], this.lastChar[1] = e3[e3.length - 1], n3.slice(0, -1);
      }
      return n3;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e3[e3.length - 1], e3.toString(`utf16le`, t3, e3.length - 1);
  }
  function p2(e3) {
    var t3 = e3 && e3.length ? this.write(e3) : ``;
    if (this.lastNeed) {
      var n3 = this.lastTotal - this.lastNeed;
      return t3 + this.lastChar.toString(`utf16le`, 0, n3);
    }
    return t3;
  }
  function m2(e3, t3) {
    var n3 = (e3.length - t3) % 3;
    return n3 === 0 ? e3.toString(`base64`, t3) : (this.lastNeed = 3 - n3, this.lastTotal = 3, n3 === 1 ? this.lastChar[0] = e3[e3.length - 1] : (this.lastChar[0] = e3[e3.length - 2], this.lastChar[1] = e3[e3.length - 1]), e3.toString(`base64`, t3, e3.length - n3));
  }
  function h2(e3) {
    var t3 = e3 && e3.length ? this.write(e3) : ``;
    return this.lastNeed ? t3 + this.lastChar.toString(`base64`, 0, 3 - this.lastNeed) : t3;
  }
  function g2(e3) {
    return e3.toString(this.encoding);
  }
  function _2(e3) {
    return e3 && e3.length ? this.write(e3) : ``;
  }
})), er = i(((e2, t2) => {
  var n2 = qn().codes.ERR_STREAM_PREMATURE_CLOSE;
  function r2(e3) {
    var t3 = false;
    return function() {
      if (!t3) {
        t3 = true;
        var n3 = [...arguments];
        e3.apply(this, n3);
      }
    };
  }
  function i2() {
  }
  function a2(e3) {
    return e3.setHeader && typeof e3.abort == `function`;
  }
  function o2(e3, t3, s2) {
    if (typeof t3 == `function`) return o2(e3, null, t3);
    t3 || (t3 = {}), s2 = r2(s2 || i2);
    var c2 = t3.readable || t3.readable !== false && e3.readable, l2 = t3.writable || t3.writable !== false && e3.writable, u2 = function() {
      e3.writable || f2();
    }, d2 = e3._writableState && e3._writableState.finished, f2 = function() {
      l2 = false, d2 = true, c2 || s2.call(e3);
    }, p2 = e3._readableState && e3._readableState.endEmitted, m2 = function() {
      c2 = false, p2 = true, l2 || s2.call(e3);
    }, h2 = function(t4) {
      s2.call(e3, t4);
    }, g2 = function() {
      var t4;
      if (c2 && !p2) return (!e3._readableState || !e3._readableState.ended) && (t4 = new n2()), s2.call(e3, t4);
      if (l2 && !d2) return (!e3._writableState || !e3._writableState.ended) && (t4 = new n2()), s2.call(e3, t4);
    }, _2 = function() {
      e3.req.on(`finish`, f2);
    };
    return a2(e3) ? (e3.on(`complete`, f2), e3.on(`abort`, g2), e3.req ? _2() : e3.on(`request`, _2)) : l2 && !e3._writableState && (e3.on(`end`, u2), e3.on(`close`, u2)), e3.on(`end`, m2), e3.on(`finish`, f2), t3.error !== false && e3.on(`error`, h2), e3.on(`close`, g2), function() {
      e3.removeListener(`complete`, f2), e3.removeListener(`abort`, g2), e3.removeListener(`request`, _2), e3.req && e3.req.removeListener(`finish`, f2), e3.removeListener(`end`, u2), e3.removeListener(`close`, u2), e3.removeListener(`finish`, f2), e3.removeListener(`end`, m2), e3.removeListener(`error`, h2), e3.removeListener(`close`, g2);
    };
  }
  t2.exports = o2;
})), tr = i(((e2, t2) => {
  u();
  var n2;
  function r2(e3, t3, n3) {
    return t3 = i2(t3), t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
  }
  function i2(e3) {
    var t3 = a2(e3, `string`);
    return typeof t3 == `symbol` ? t3 : String(t3);
  }
  function a2(e3, t3) {
    if (typeof e3 != `object` || !e3) return e3;
    var n3 = e3[Symbol.toPrimitive];
    if (n3 !== void 0) {
      var r3 = n3.call(e3, t3 || `default`);
      if (typeof r3 != `object`) return r3;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return (t3 === `string` ? String : Number)(e3);
  }
  var o2 = er(), s2 = /* @__PURE__ */ Symbol(`lastResolve`), c2 = /* @__PURE__ */ Symbol(`lastReject`), d2 = /* @__PURE__ */ Symbol(`error`), f2 = /* @__PURE__ */ Symbol(`ended`), p2 = /* @__PURE__ */ Symbol(`lastPromise`), m2 = /* @__PURE__ */ Symbol(`handlePromise`), h2 = /* @__PURE__ */ Symbol(`stream`);
  function g2(e3, t3) {
    return { value: e3, done: t3 };
  }
  function _2(e3) {
    var t3 = e3[s2];
    if (t3 !== null) {
      var n3 = e3[h2].read();
      n3 !== null && (e3[p2] = null, e3[s2] = null, e3[c2] = null, t3(g2(n3, false)));
    }
  }
  function v2(e3) {
    l.nextTick(_2, e3);
  }
  function y2(e3, t3) {
    return function(n3, r3) {
      e3.then(function() {
        if (t3[f2]) {
          n3(g2(void 0, true));
          return;
        }
        t3[m2](n3, r3);
      }, r3);
    };
  }
  var b2 = Object.getPrototypeOf(function() {
  }), x2 = Object.setPrototypeOf((n2 = { get stream() {
    return this[h2];
  }, next: function() {
    var e3 = this, t3 = this[d2];
    if (t3 !== null) return Promise.reject(t3);
    if (this[f2]) return Promise.resolve(g2(void 0, true));
    if (this[h2].destroyed) return new Promise(function(t4, n4) {
      l.nextTick(function() {
        e3[d2] ? n4(e3[d2]) : t4(g2(void 0, true));
      });
    });
    var n3 = this[p2], r3;
    if (n3) r3 = new Promise(y2(n3, this));
    else {
      var i3 = this[h2].read();
      if (i3 !== null) return Promise.resolve(g2(i3, false));
      r3 = new Promise(this[m2]);
    }
    return this[p2] = r3, r3;
  } }, r2(n2, Symbol.asyncIterator, function() {
    return this;
  }), r2(n2, `return`, function() {
    var e3 = this;
    return new Promise(function(t3, n3) {
      e3[h2].destroy(null, function(e4) {
        if (e4) {
          n3(e4);
          return;
        }
        t3(g2(void 0, true));
      });
    });
  }), n2), b2);
  t2.exports = function(e3) {
    var t3, n3 = Object.create(x2, (t3 = {}, r2(t3, h2, { value: e3, writable: true }), r2(t3, s2, { value: null, writable: true }), r2(t3, c2, { value: null, writable: true }), r2(t3, d2, { value: null, writable: true }), r2(t3, f2, { value: e3._readableState.endEmitted, writable: true }), r2(t3, m2, { value: function(e4, t4) {
      var r3 = n3[h2].read();
      r3 ? (n3[p2] = null, n3[s2] = null, n3[c2] = null, e4(g2(r3, false))) : (n3[s2] = e4, n3[c2] = t4);
    }, writable: true }), t3));
    return n3[p2] = null, o2(e3, function(e4) {
      if (e4 && e4.code !== `ERR_STREAM_PREMATURE_CLOSE`) {
        var t4 = n3[c2];
        t4 !== null && (n3[p2] = null, n3[s2] = null, n3[c2] = null, t4(e4)), n3[d2] = e4;
        return;
      }
      var r3 = n3[s2];
      r3 !== null && (n3[p2] = null, n3[s2] = null, n3[c2] = null, r3(g2(void 0, true))), n3[f2] = true;
    }), e3.on(`readable`, v2.bind(null, n3)), n3;
  };
})), nr = i(((e2, t2) => {
  t2.exports = function() {
    throw Error(`Readable.from is not available in the browser`);
  };
})), rr = i(((e2, t2) => {
  a(), u(), t2.exports = A2;
  var n2;
  A2.ReadableState = k2, Sn().EventEmitter;
  var r2 = function(e3, t3) {
    return e3.listeners(t3).length;
  }, i2 = wn(), s2 = re().Buffer, c2 = (o === void 0 ? typeof window < `u` ? window : typeof self < `u` ? self : {} : o).Uint8Array || function() {
  };
  function d2(e3) {
    return s2.from(e3);
  }
  function f2(e3) {
    return s2.isBuffer(e3) || e3 instanceof c2;
  }
  var p2 = Wn(), m2 = p2 && p2.debuglog ? p2.debuglog(`stream`) : function() {
  }, h2 = Gn(), g2 = Kn(), _2 = Jn().getHighWaterMark, v2 = qn().codes, y2 = v2.ERR_INVALID_ARG_TYPE, b2 = v2.ERR_STREAM_PUSH_AFTER_EOF, x2 = v2.ERR_METHOD_NOT_IMPLEMENTED, S2 = v2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, C2, w2, T2;
  Cn()(A2, i2);
  var E2 = g2.errorOrDestroy, D2 = [`error`, `close`, `destroy`, `pause`, `resume`];
  function O2(e3, t3, n3) {
    if (typeof e3.prependListener == `function`) return e3.prependListener(t3, n3);
    !e3._events || !e3._events[t3] ? e3.on(t3, n3) : Array.isArray(e3._events[t3]) ? e3._events[t3].unshift(n3) : e3._events[t3] = [n3, e3._events[t3]];
  }
  function k2(e3, t3, r3) {
    n2 || (n2 = Zn()), e3 || (e3 = {}), typeof r3 != `boolean` && (r3 = t3 instanceof n2), this.objectMode = !!e3.objectMode, r3 && (this.objectMode = this.objectMode || !!e3.readableObjectMode), this.highWaterMark = _2(this, e3, `readableHighWaterMark`, r3), this.buffer = new h2(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = e3.emitClose !== false, this.autoDestroy = !!e3.autoDestroy, this.destroyed = false, this.defaultEncoding = e3.defaultEncoding || `utf8`, this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, e3.encoding && (C2 || (C2 = $n().StringDecoder), this.decoder = new C2(e3.encoding), this.encoding = e3.encoding);
  }
  function A2(e3) {
    if (n2 || (n2 = Zn()), !(this instanceof A2)) return new A2(e3);
    var t3 = this instanceof n2;
    this._readableState = new k2(e3, this, t3), this.readable = true, e3 && (typeof e3.read == `function` && (this._read = e3.read), typeof e3.destroy == `function` && (this._destroy = e3.destroy)), i2.call(this);
  }
  Object.defineProperty(A2.prototype, `destroyed`, { enumerable: false, get: function() {
    return this._readableState === void 0 ? false : this._readableState.destroyed;
  }, set: function(e3) {
    this._readableState && (this._readableState.destroyed = e3);
  } }), A2.prototype.destroy = g2.destroy, A2.prototype._undestroy = g2.undestroy, A2.prototype._destroy = function(e3, t3) {
    t3(e3);
  }, A2.prototype.push = function(e3, t3) {
    var n3 = this._readableState, r3;
    return n3.objectMode ? r3 = true : typeof e3 == `string` && (t3 || (t3 = n3.defaultEncoding), t3 !== n3.encoding && (e3 = s2.from(e3, t3), t3 = ``), r3 = true), j2(this, e3, t3, false, r3);
  }, A2.prototype.unshift = function(e3) {
    return j2(this, e3, null, true, false);
  };
  function j2(e3, t3, n3, r3, i3) {
    m2(`readableAddChunk`, t3);
    var a2 = e3._readableState;
    if (t3 === null) a2.reading = false, L2(e3, a2);
    else {
      var o2;
      if (i3 || (o2 = N2(a2, t3)), o2) E2(e3, o2);
      else if (a2.objectMode || t3 && t3.length > 0) if (typeof t3 != `string` && !a2.objectMode && Object.getPrototypeOf(t3) !== s2.prototype && (t3 = d2(t3)), r3) a2.endEmitted ? E2(e3, new S2()) : M2(e3, a2, t3, true);
      else if (a2.ended) E2(e3, new b2());
      else if (a2.destroyed) return false;
      else a2.reading = false, a2.decoder && !n3 ? (t3 = a2.decoder.write(t3), a2.objectMode || t3.length !== 0 ? M2(e3, a2, t3, false) : B2(e3, a2)) : M2(e3, a2, t3, false);
      else r3 || (a2.reading = false, B2(e3, a2));
    }
    return !a2.ended && (a2.length < a2.highWaterMark || a2.length === 0);
  }
  function M2(e3, t3, n3, r3) {
    t3.flowing && t3.length === 0 && !t3.sync ? (t3.awaitDrain = 0, e3.emit(`data`, n3)) : (t3.length += t3.objectMode ? 1 : n3.length, r3 ? t3.buffer.unshift(n3) : t3.buffer.push(n3), t3.needReadable && R2(e3)), B2(e3, t3);
  }
  function N2(e3, t3) {
    var n3;
    return !f2(t3) && typeof t3 != `string` && t3 !== void 0 && !e3.objectMode && (n3 = new y2(`chunk`, [`string`, `Buffer`, `Uint8Array`], t3)), n3;
  }
  A2.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  }, A2.prototype.setEncoding = function(e3) {
    C2 || (C2 = $n().StringDecoder);
    var t3 = new C2(e3);
    this._readableState.decoder = t3, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var n3 = this._readableState.buffer.head, r3 = ``; n3 !== null; ) r3 += t3.write(n3.data), n3 = n3.next;
    return this._readableState.buffer.clear(), r3 !== `` && this._readableState.buffer.push(r3), this._readableState.length = r3.length, this;
  };
  var P2 = 1073741824;
  function F2(e3) {
    return e3 >= P2 ? e3 = P2 : (e3--, e3 |= e3 >>> 1, e3 |= e3 >>> 2, e3 |= e3 >>> 4, e3 |= e3 >>> 8, e3 |= e3 >>> 16, e3++), e3;
  }
  function I2(e3, t3) {
    return e3 <= 0 || t3.length === 0 && t3.ended ? 0 : t3.objectMode ? 1 : e3 === e3 ? (e3 > t3.highWaterMark && (t3.highWaterMark = F2(e3)), e3 <= t3.length ? e3 : t3.ended ? t3.length : (t3.needReadable = true, 0)) : t3.flowing && t3.length ? t3.buffer.head.data.length : t3.length;
  }
  A2.prototype.read = function(e3) {
    m2(`read`, e3), e3 = parseInt(e3, 10);
    var t3 = this._readableState, n3 = e3;
    if (e3 !== 0 && (t3.emittedReadable = false), e3 === 0 && t3.needReadable && ((t3.highWaterMark === 0 ? t3.length > 0 : t3.length >= t3.highWaterMark) || t3.ended)) return m2(`read: emitReadable`, t3.length, t3.ended), t3.length === 0 && t3.ended ? q2(this) : R2(this), null;
    if (e3 = I2(e3, t3), e3 === 0 && t3.ended) return t3.length === 0 && q2(this), null;
    var r3 = t3.needReadable;
    m2(`need readable`, r3), (t3.length === 0 || t3.length - e3 < t3.highWaterMark) && (r3 = true, m2(`length less than watermark`, r3)), t3.ended || t3.reading ? (r3 = false, m2(`reading or ended`, r3)) : r3 && (m2(`do read`), t3.reading = true, t3.sync = true, t3.length === 0 && (t3.needReadable = true), this._read(t3.highWaterMark), t3.sync = false, t3.reading || (e3 = I2(n3, t3)));
    var i3 = e3 > 0 ? te2(e3, t3) : null;
    return i3 === null ? (t3.needReadable = t3.length <= t3.highWaterMark, e3 = 0) : (t3.length -= e3, t3.awaitDrain = 0), t3.length === 0 && (t3.ended || (t3.needReadable = true), n3 !== e3 && t3.ended && q2(this)), i3 !== null && this.emit(`data`, i3), i3;
  };
  function L2(e3, t3) {
    if (m2(`onEofChunk`), !t3.ended) {
      if (t3.decoder) {
        var n3 = t3.decoder.end();
        n3 && n3.length && (t3.buffer.push(n3), t3.length += t3.objectMode ? 1 : n3.length);
      }
      t3.ended = true, t3.sync ? R2(e3) : (t3.needReadable = false, t3.emittedReadable || (t3.emittedReadable = true, z2(e3)));
    }
  }
  function R2(e3) {
    var t3 = e3._readableState;
    m2(`emitReadable`, t3.needReadable, t3.emittedReadable), t3.needReadable = false, t3.emittedReadable || (m2(`emitReadable`, t3.flowing), t3.emittedReadable = true, l.nextTick(z2, e3));
  }
  function z2(e3) {
    var t3 = e3._readableState;
    m2(`emitReadable_`, t3.destroyed, t3.length, t3.ended), !t3.destroyed && (t3.length || t3.ended) && (e3.emit(`readable`), t3.emittedReadable = false), t3.needReadable = !t3.flowing && !t3.ended && t3.length <= t3.highWaterMark, K2(e3);
  }
  function B2(e3, t3) {
    t3.readingMore || (t3.readingMore = true, l.nextTick(V2, e3, t3));
  }
  function V2(e3, t3) {
    for (; !t3.reading && !t3.ended && (t3.length < t3.highWaterMark || t3.flowing && t3.length === 0); ) {
      var n3 = t3.length;
      if (m2(`maybeReadMore read 0`), e3.read(0), n3 === t3.length) break;
    }
    t3.readingMore = false;
  }
  A2.prototype._read = function(e3) {
    E2(this, new x2(`_read()`));
  }, A2.prototype.pipe = function(e3, t3) {
    var n3 = this, i3 = this._readableState;
    switch (i3.pipesCount) {
      case 0:
        i3.pipes = e3;
        break;
      case 1:
        i3.pipes = [i3.pipes, e3];
        break;
      default:
        i3.pipes.push(e3);
        break;
    }
    i3.pipesCount += 1, m2(`pipe count=%d opts=%j`, i3.pipesCount, t3);
    var a2 = (!t3 || t3.end !== false) && e3 !== l.stdout && e3 !== l.stderr ? s3 : _3;
    i3.endEmitted ? l.nextTick(a2) : n3.once(`end`, a2), e3.on(`unpipe`, o2);
    function o2(e4, t4) {
      m2(`onunpipe`), e4 === n3 && t4 && t4.hasUnpiped === false && (t4.hasUnpiped = true, d3());
    }
    function s3() {
      m2(`onend`), e3.end();
    }
    var c3 = H2(n3);
    e3.on(`drain`, c3);
    var u2 = false;
    function d3() {
      m2(`cleanup`), e3.removeListener(`close`, h3), e3.removeListener(`finish`, g3), e3.removeListener(`drain`, c3), e3.removeListener(`error`, p3), e3.removeListener(`unpipe`, o2), n3.removeListener(`end`, s3), n3.removeListener(`end`, _3), n3.removeListener(`data`, f3), u2 = true, i3.awaitDrain && (!e3._writableState || e3._writableState.needDrain) && c3();
    }
    n3.on(`data`, f3);
    function f3(t4) {
      m2(`ondata`);
      var r3 = e3.write(t4);
      m2(`dest.write`, r3), r3 === false && ((i3.pipesCount === 1 && i3.pipes === e3 || i3.pipesCount > 1 && Y2(i3.pipes, e3) !== -1) && !u2 && (m2(`false write response, pause`, i3.awaitDrain), i3.awaitDrain++), n3.pause());
    }
    function p3(t4) {
      m2(`onerror`, t4), _3(), e3.removeListener(`error`, p3), r2(e3, `error`) === 0 && E2(e3, t4);
    }
    O2(e3, `error`, p3);
    function h3() {
      e3.removeListener(`finish`, g3), _3();
    }
    e3.once(`close`, h3);
    function g3() {
      m2(`onfinish`), e3.removeListener(`close`, h3), _3();
    }
    e3.once(`finish`, g3);
    function _3() {
      m2(`unpipe`), n3.unpipe(e3);
    }
    return e3.emit(`pipe`, n3), i3.flowing || (m2(`pipe resume`), n3.resume()), e3;
  };
  function H2(e3) {
    return function() {
      var t3 = e3._readableState;
      m2(`pipeOnDrain`, t3.awaitDrain), t3.awaitDrain && t3.awaitDrain--, t3.awaitDrain === 0 && r2(e3, `data`) && (t3.flowing = true, K2(e3));
    };
  }
  A2.prototype.unpipe = function(e3) {
    var t3 = this._readableState, n3 = { hasUnpiped: false };
    if (t3.pipesCount === 0) return this;
    if (t3.pipesCount === 1) return e3 && e3 !== t3.pipes ? this : (e3 || (e3 = t3.pipes), t3.pipes = null, t3.pipesCount = 0, t3.flowing = false, e3 && e3.emit(`unpipe`, this, n3), this);
    if (!e3) {
      var r3 = t3.pipes, i3 = t3.pipesCount;
      t3.pipes = null, t3.pipesCount = 0, t3.flowing = false;
      for (var a2 = 0; a2 < i3; a2++) r3[a2].emit(`unpipe`, this, { hasUnpiped: false });
      return this;
    }
    var o2 = Y2(t3.pipes, e3);
    return o2 === -1 ? this : (t3.pipes.splice(o2, 1), --t3.pipesCount, t3.pipesCount === 1 && (t3.pipes = t3.pipes[0]), e3.emit(`unpipe`, this, n3), this);
  }, A2.prototype.on = function(e3, t3) {
    var n3 = i2.prototype.on.call(this, e3, t3), r3 = this._readableState;
    return e3 === `data` ? (r3.readableListening = this.listenerCount(`readable`) > 0, r3.flowing !== false && this.resume()) : e3 === `readable` && !r3.endEmitted && !r3.readableListening && (r3.readableListening = r3.needReadable = true, r3.flowing = false, r3.emittedReadable = false, m2(`on readable`, r3.length, r3.reading), r3.length ? R2(this) : r3.reading || l.nextTick(W2, this)), n3;
  }, A2.prototype.addListener = A2.prototype.on, A2.prototype.removeListener = function(e3, t3) {
    var n3 = i2.prototype.removeListener.call(this, e3, t3);
    return e3 === `readable` && l.nextTick(U2, this), n3;
  }, A2.prototype.removeAllListeners = function(e3) {
    var t3 = i2.prototype.removeAllListeners.apply(this, arguments);
    return (e3 === `readable` || e3 === void 0) && l.nextTick(U2, this), t3;
  };
  function U2(e3) {
    var t3 = e3._readableState;
    t3.readableListening = e3.listenerCount(`readable`) > 0, t3.resumeScheduled && !t3.paused ? t3.flowing = true : e3.listenerCount(`data`) > 0 && e3.resume();
  }
  function W2(e3) {
    m2(`readable nexttick read 0`), e3.read(0);
  }
  A2.prototype.resume = function() {
    var e3 = this._readableState;
    return e3.flowing || (m2(`resume`), e3.flowing = !e3.readableListening, G2(this, e3)), e3.paused = false, this;
  };
  function G2(e3, t3) {
    t3.resumeScheduled || (t3.resumeScheduled = true, l.nextTick(ee2, e3, t3));
  }
  function ee2(e3, t3) {
    m2(`resume`, t3.reading), t3.reading || e3.read(0), t3.resumeScheduled = false, e3.emit(`resume`), K2(e3), t3.flowing && !t3.reading && e3.read(0);
  }
  A2.prototype.pause = function() {
    return m2(`call pause flowing=%j`, this._readableState.flowing), this._readableState.flowing !== false && (m2(`pause`), this._readableState.flowing = false, this.emit(`pause`)), this._readableState.paused = true, this;
  };
  function K2(e3) {
    var t3 = e3._readableState;
    for (m2(`flow`, t3.flowing); t3.flowing && e3.read() !== null; ) ;
  }
  A2.prototype.wrap = function(e3) {
    var t3 = this, n3 = this._readableState, r3 = false;
    for (var i3 in e3.on(`end`, function() {
      if (m2(`wrapped end`), n3.decoder && !n3.ended) {
        var e4 = n3.decoder.end();
        e4 && e4.length && t3.push(e4);
      }
      t3.push(null);
    }), e3.on(`data`, function(i4) {
      m2(`wrapped data`), n3.decoder && (i4 = n3.decoder.write(i4)), !(n3.objectMode && i4 == null) && (!n3.objectMode && (!i4 || !i4.length) || t3.push(i4) || (r3 = true, e3.pause()));
    }), e3) this[i3] === void 0 && typeof e3[i3] == `function` && (this[i3] = /* @__PURE__ */ (function(t4) {
      return function() {
        return e3[t4].apply(e3, arguments);
      };
    })(i3));
    for (var a2 = 0; a2 < D2.length; a2++) e3.on(D2[a2], this.emit.bind(this, D2[a2]));
    return this._read = function(t4) {
      m2(`wrapped _read`, t4), r3 && (r3 = false, e3.resume());
    }, this;
  }, typeof Symbol == `function` && (A2.prototype[Symbol.asyncIterator] = function() {
    return w2 === void 0 && (w2 = tr()), w2(this);
  }), Object.defineProperty(A2.prototype, `readableHighWaterMark`, { enumerable: false, get: function() {
    return this._readableState.highWaterMark;
  } }), Object.defineProperty(A2.prototype, `readableBuffer`, { enumerable: false, get: function() {
    return this._readableState && this._readableState.buffer;
  } }), Object.defineProperty(A2.prototype, `readableFlowing`, { enumerable: false, get: function() {
    return this._readableState.flowing;
  }, set: function(e3) {
    this._readableState && (this._readableState.flowing = e3);
  } }), A2._fromList = te2, Object.defineProperty(A2.prototype, `readableLength`, { enumerable: false, get: function() {
    return this._readableState.length;
  } });
  function te2(e3, t3) {
    if (t3.length === 0) return null;
    var n3;
    return t3.objectMode ? n3 = t3.buffer.shift() : !e3 || e3 >= t3.length ? (n3 = t3.decoder ? t3.buffer.join(``) : t3.buffer.length === 1 ? t3.buffer.first() : t3.buffer.concat(t3.length), t3.buffer.clear()) : n3 = t3.buffer.consume(e3, t3.decoder), n3;
  }
  function q2(e3) {
    var t3 = e3._readableState;
    m2(`endReadable`, t3.endEmitted), t3.endEmitted || (t3.ended = true, l.nextTick(J2, t3, e3));
  }
  function J2(e3, t3) {
    if (m2(`endReadableNT`, e3.endEmitted, e3.length), !e3.endEmitted && e3.length === 0 && (e3.endEmitted = true, t3.readable = false, t3.emit(`end`), e3.autoDestroy)) {
      var n3 = t3._writableState;
      (!n3 || n3.autoDestroy && n3.finished) && t3.destroy();
    }
  }
  typeof Symbol == `function` && (A2.from = function(e3, t3) {
    return T2 === void 0 && (T2 = nr()), T2(A2, e3, t3);
  });
  function Y2(e3, t3) {
    for (var n3 = 0, r3 = e3.length; n3 < r3; n3++) if (e3[n3] === t3) return n3;
    return -1;
  }
})), ir = i(((e2, t2) => {
  t2.exports = l2;
  var n2 = qn().codes, r2 = n2.ERR_METHOD_NOT_IMPLEMENTED, i2 = n2.ERR_MULTIPLE_CALLBACK, a2 = n2.ERR_TRANSFORM_ALREADY_TRANSFORMING, o2 = n2.ERR_TRANSFORM_WITH_LENGTH_0, s2 = Zn();
  Cn()(l2, s2);
  function c2(e3, t3) {
    var n3 = this._transformState;
    n3.transforming = false;
    var r3 = n3.writecb;
    if (r3 === null) return this.emit(`error`, new i2());
    n3.writechunk = null, n3.writecb = null, t3 != null && this.push(t3), r3(e3);
    var a3 = this._readableState;
    a3.reading = false, (a3.needReadable || a3.length < a3.highWaterMark) && this._read(a3.highWaterMark);
  }
  function l2(e3) {
    if (!(this instanceof l2)) return new l2(e3);
    s2.call(this, e3), this._transformState = { afterTransform: c2.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, e3 && (typeof e3.transform == `function` && (this._transform = e3.transform), typeof e3.flush == `function` && (this._flush = e3.flush)), this.on(`prefinish`, u2);
  }
  function u2() {
    var e3 = this;
    typeof this._flush == `function` && !this._readableState.destroyed ? this._flush(function(t3, n3) {
      d2(e3, t3, n3);
    }) : d2(this, null, null);
  }
  l2.prototype.push = function(e3, t3) {
    return this._transformState.needTransform = false, s2.prototype.push.call(this, e3, t3);
  }, l2.prototype._transform = function(e3, t3, n3) {
    n3(new r2(`_transform()`));
  }, l2.prototype._write = function(e3, t3, n3) {
    var r3 = this._transformState;
    if (r3.writecb = n3, r3.writechunk = e3, r3.writeencoding = t3, !r3.transforming) {
      var i3 = this._readableState;
      (r3.needTransform || i3.needReadable || i3.length < i3.highWaterMark) && this._read(i3.highWaterMark);
    }
  }, l2.prototype._read = function(e3) {
    var t3 = this._transformState;
    t3.writechunk !== null && !t3.transforming ? (t3.transforming = true, this._transform(t3.writechunk, t3.writeencoding, t3.afterTransform)) : t3.needTransform = true;
  }, l2.prototype._destroy = function(e3, t3) {
    s2.prototype._destroy.call(this, e3, function(e4) {
      t3(e4);
    });
  };
  function d2(e3, t3, n3) {
    if (t3) return e3.emit(`error`, t3);
    if (n3 != null && e3.push(n3), e3._writableState.length) throw new o2();
    if (e3._transformState.transforming) throw new a2();
    return e3.push(null);
  }
})), ar = i(((e2, t2) => {
  t2.exports = r2;
  var n2 = ir();
  Cn()(r2, n2);
  function r2(e3) {
    if (!(this instanceof r2)) return new r2(e3);
    n2.call(this, e3);
  }
  r2.prototype._transform = function(e3, t3, n3) {
    n3(null, e3);
  };
})), or = i(((e2, t2) => {
  var n2;
  function r2(e3) {
    var t3 = false;
    return function() {
      t3 || (t3 = true, e3.apply(void 0, arguments));
    };
  }
  var i2 = qn().codes, a2 = i2.ERR_MISSING_ARGS, o2 = i2.ERR_STREAM_DESTROYED;
  function s2(e3) {
    if (e3) throw e3;
  }
  function c2(e3) {
    return e3.setHeader && typeof e3.abort == `function`;
  }
  function l2(e3, t3, i3, a3) {
    a3 = r2(a3);
    var s3 = false;
    e3.on(`close`, function() {
      s3 = true;
    }), n2 === void 0 && (n2 = er()), n2(e3, { readable: t3, writable: i3 }, function(e4) {
      if (e4) return a3(e4);
      s3 = true, a3();
    });
    var l3 = false;
    return function(t4) {
      if (!s3 && !l3) {
        if (l3 = true, c2(e3)) return e3.abort();
        if (typeof e3.destroy == `function`) return e3.destroy();
        a3(t4 || new o2(`pipe`));
      }
    };
  }
  function u2(e3) {
    e3();
  }
  function d2(e3, t3) {
    return e3.pipe(t3);
  }
  function f2(e3) {
    return !e3.length || typeof e3[e3.length - 1] != `function` ? s2 : e3.pop();
  }
  function p2() {
    var e3 = [...arguments], t3 = f2(e3);
    if (Array.isArray(e3[0]) && (e3 = e3[0]), e3.length < 2) throw new a2(`streams`);
    var n3, r3 = e3.map(function(i3, a3) {
      var o3 = a3 < e3.length - 1;
      return l2(i3, o3, a3 > 0, function(e4) {
        n3 || (n3 = e4), e4 && r3.forEach(u2), !o3 && (r3.forEach(u2), t3(n3));
      });
    });
    return e3.reduce(d2);
  }
  t2.exports = p2;
})), sr = i(((e2, t2) => {
  t2.exports = r2;
  var n2 = Sn().EventEmitter;
  Cn()(r2, n2), r2.Readable = rr(), r2.Writable = Xn(), r2.Duplex = Zn(), r2.Transform = ir(), r2.PassThrough = ar(), r2.finished = er(), r2.pipeline = or(), r2.Stream = r2;
  function r2() {
    n2.call(this);
  }
  r2.prototype.pipe = function(e3, t3) {
    var r3 = this;
    function i2(t4) {
      e3.writable && false === e3.write(t4) && r3.pause && r3.pause();
    }
    r3.on(`data`, i2);
    function a2() {
      r3.readable && r3.resume && r3.resume();
    }
    e3.on(`drain`, a2), !e3._isStdio && (!t3 || t3.end !== false) && (r3.on(`end`, s2), r3.on(`close`, c2));
    var o2 = false;
    function s2() {
      o2 || (o2 = true, e3.end());
    }
    function c2() {
      o2 || (o2 = true, typeof e3.destroy == `function` && e3.destroy());
    }
    function l2(e4) {
      if (u2(), n2.listenerCount(this, `error`) === 0) throw e4;
    }
    r3.on(`error`, l2), e3.on(`error`, l2);
    function u2() {
      r3.removeListener(`data`, i2), e3.removeListener(`drain`, a2), r3.removeListener(`end`, s2), r3.removeListener(`close`, c2), r3.removeListener(`error`, l2), e3.removeListener(`error`, l2), r3.removeListener(`end`, u2), r3.removeListener(`close`, u2), e3.removeListener(`close`, u2);
    }
    return r3.on(`end`, u2), r3.on(`close`, u2), e3.on(`close`, u2), e3.emit(`pipe`, r3), e3;
  };
})), cr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Writable = e2.Readable = void 0;
  var t2 = sr();
  Object.defineProperty(e2, `Readable`, { enumerable: true, get: function() {
    return t2.Readable;
  } }), Object.defineProperty(e2, `Writable`, { enumerable: true, get: function() {
    return t2.Writable;
  } });
})), lr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.EventEmitter = void 0;
  var t2 = Sn();
  Object.defineProperty(e2, `EventEmitter`, { enumerable: true, get: function() {
    return t2.EventEmitter;
  } });
})), ur = i(((t2) => {
  u(), Object.defineProperty(t2, `__esModule`, { value: true }), t2.getWriteSyncArgs = t2.getWriteArgs = t2.bufToUint8 = void 0, t2.promisify = o2, t2.validateCallback = s2, t2.modeToNumber = d2, t2.nullCheck = f2, t2.pathToFilename = m2, t2.createError = A2, t2.createStatError = j2, t2.genRndStr6 = M2, t2.flagsToNumber = N2, t2.streamToBuffer = P2, t2.bufferToEncoding = F2, t2.isReadableStream = I2;
  var n2 = $(), r2 = he(), i2 = Z(), a2 = _n();
  function o2(e2, t3, n3 = (e3) => e3) {
    return (...r3) => new Promise((i3, a3) => {
      e2[t3].bind(e2)(...r3, (e3, t4) => e3 ? a3(e3) : i3(n3(t4)));
    });
  }
  function s2(e2) {
    if (typeof e2 != `function`) throw TypeError(n2.ERRSTR.CB);
    return e2;
  }
  function c2(e2, t3) {
    if (typeof e2 == `number`) return e2;
    if (typeof e2 == `string`) return parseInt(e2, 8);
    if (t3) return d2(t3);
  }
  function d2(e2, t3) {
    let r3 = c2(e2, t3);
    if (typeof r3 != `number` || isNaN(r3)) throw TypeError(n2.ERRSTR.MODE_INT);
    return r3;
  }
  function f2(e2, t3) {
    if ((`` + e2).indexOf(`\0`) !== -1) {
      let e3 = Error(`Path must be a string without null bytes`);
      if (e3.code = `ENOENT`, typeof t3 != `function`) throw e3;
      return queueMicrotask(() => {
        t3(e3);
      }), false;
    }
    return true;
  }
  function p2(e2) {
    if (e2.hostname !== ``) throw new r2.TypeError(`ERR_INVALID_FILE_URL_HOST`, l.platform);
    let t3 = e2.pathname;
    for (let e3 = 0; e3 < t3.length; e3++) if (t3[e3] === `%`) {
      let n3 = t3.codePointAt(e3 + 2) | 32;
      if (t3[e3 + 1] === `2` && n3 === 102) throw new r2.TypeError(`ERR_INVALID_FILE_URL_PATH`, `must not include encoded / characters`);
    }
    return decodeURIComponent(t3);
  }
  function m2(t3) {
    if (t3 instanceof Uint8Array && (t3 = (0, i2.bufferFrom)(t3)), typeof t3 != `string` && !i2.Buffer.isBuffer(t3)) {
      try {
        if (!(t3 instanceof (mn(), e(mt)).URL)) throw TypeError(n2.ERRSTR.PATH_STR);
      } catch {
        throw TypeError(n2.ERRSTR.PATH_STR);
      }
      t3 = p2(t3);
    }
    let r3 = String(t3);
    return f2(r3), r3;
  }
  var h2 = `ENOENT`, g2 = `EBADF`, _2 = `EINVAL`, v2 = `EPERM`, y2 = `EPROTO`, b2 = `EEXIST`, x2 = `ENOTDIR`, S2 = `EMFILE`, C2 = `EACCES`, w2 = `EISDIR`, T2 = `ENOTEMPTY`, E2 = `ENOSYS`, D2 = `ERR_FS_EISDIR`, O2 = `ERR_OUT_OF_RANGE`;
  function k2(e2, t3 = ``, n3 = ``, r3 = ``) {
    let i3 = ``;
    switch (n3 && (i3 = ` '${n3}'`), r3 && (i3 += ` -> '${r3}'`), e2) {
      case h2:
        return `ENOENT: no such file or directory, ${t3}${i3}`;
      case g2:
        return `EBADF: bad file descriptor, ${t3}${i3}`;
      case _2:
        return `EINVAL: invalid argument, ${t3}${i3}`;
      case v2:
        return `EPERM: operation not permitted, ${t3}${i3}`;
      case y2:
        return `EPROTO: protocol error, ${t3}${i3}`;
      case b2:
        return `EEXIST: file already exists, ${t3}${i3}`;
      case x2:
        return `ENOTDIR: not a directory, ${t3}${i3}`;
      case w2:
        return `EISDIR: illegal operation on a directory, ${t3}${i3}`;
      case C2:
        return `EACCES: permission denied, ${t3}${i3}`;
      case T2:
        return `ENOTEMPTY: directory not empty, ${t3}${i3}`;
      case S2:
        return `EMFILE: too many open files, ${t3}${i3}`;
      case E2:
        return `ENOSYS: function not implemented, ${t3}${i3}`;
      case D2:
        return `[ERR_FS_EISDIR]: Path is a directory: ${t3} returned EISDIR (is a directory) ${n3}`;
      case O2:
        return `[ERR_OUT_OF_RANGE]: value out of range, ${t3}${i3}`;
      default:
        return `${e2}: error occurred, ${t3}${i3}`;
    }
  }
  function A2(e2, t3 = ``, n3 = ``, r3 = ``, i3 = Error) {
    let a3 = new i3(k2(e2, t3, n3, r3));
    return a3.code = e2, n3 && (a3.path = n3), a3;
  }
  function j2(e2, t3 = ``, n3 = ``, r3 = ``) {
    return { code: e2, message: k2(e2, t3, n3, r3), path: n3, toError() {
      let e3 = Error(this.message);
      return e3.code = this.code, this.path && (e3.path = this.path), e3;
    } };
  }
  function M2() {
    return Math.random().toString(36).slice(2, 8).padEnd(6, `0`);
  }
  function N2(e2) {
    if (typeof e2 == `number`) return e2;
    if (typeof e2 == `string`) {
      let t3 = n2.FLAGS[e2];
      if (t3 !== void 0) return t3;
    }
    throw new r2.TypeError(`ERR_INVALID_OPT_VALUE`, `flags`, e2);
  }
  function P2(e2) {
    let t3 = [];
    return new Promise((n3, r3) => {
      e2.on(`data`, (e3) => t3.push(e3)), e2.on(`end`, () => n3(i2.Buffer.concat(t3))), e2.on(`error`, r3);
    });
  }
  t2.bufToUint8 = (e2) => new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength), t2.getWriteArgs = (e2, t3, n3, r3, i3, o3) => {
    (0, a2.validateFd)(e2);
    let c3 = 0, l2, u2 = null, d3, f3, p3 = typeof t3, m3 = typeof n3, h3 = typeof r3, g3 = typeof i3;
    p3 === `string` ? m3 === `function` ? f3 = n3 : h3 === `function` ? (u2 = n3, f3 = r3) : g3 === `function` && (u2 = n3, d3 = r3, f3 = i3) : m3 === `function` ? f3 = n3 : h3 === `function` ? (c3 = n3 | 0, f3 = r3) : g3 === `function` ? (c3 = n3 | 0, l2 = r3, f3 = i3) : (c3 = n3 | 0, l2 = r3, u2 = i3, f3 = o3);
    let _3 = (0, a2.dataToBuffer)(t3, d3);
    p3 === `string` ? (c3 = 0, l2 = _3.length) : l2 === void 0 && (l2 = _3.length);
    let v3 = s2(f3);
    return [e2, p3 === `string`, _3, c3, l2, u2, v3];
  }, t2.getWriteSyncArgs = (e2, t3, n3, r3, i3) => {
    (0, a2.validateFd)(e2);
    let o3, s3, c3, l2, u2 = typeof t3 != `string`;
    u2 ? (s3 = (n3 || 0) | 0, c3 = r3, l2 = i3) : (l2 = n3, o3 = r3);
    let d3 = (0, a2.dataToBuffer)(t3, o3);
    return u2 ? c3 === void 0 && (c3 = d3.length) : (s3 = 0, c3 = d3.length), [e2, d3, s3 || 0, c3, l2];
  };
  function F2(e2, t3) {
    return !t3 || t3 === `buffer` ? e2 : e2.toString(t3);
  }
  function I2(e2) {
    return typeof e2 == `object` && !!e2 && typeof e2.pipe == `function` && typeof e2.on == `function` && e2.readable === true;
  }
})), dr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.FileHandle = void 0;
  var t2 = ur(), n2 = lr();
  e2.FileHandle = class extends n2.EventEmitter {
    constructor(e3, t3) {
      super(), this.refs = 1, this.closePromise = null, this.position = 0, this.readableWebStreamLocked = false, this.fs = e3, this.fd = t3;
    }
    getAsyncId() {
      return this.fd;
    }
    appendFile(e3, n3) {
      return (0, t2.promisify)(this.fs, `appendFile`)(this.fd, e3, n3);
    }
    chmod(e3) {
      return (0, t2.promisify)(this.fs, `fchmod`)(this.fd, e3);
    }
    chown(e3, n3) {
      return (0, t2.promisify)(this.fs, `fchown`)(this.fd, e3, n3);
    }
    close() {
      if (this.fd === -1) return Promise.resolve();
      if (this.closePromise) return this.closePromise;
      if (this.refs--, this.refs === 0) {
        let e3 = this.fd;
        this.fd = -1, this.closePromise = (0, t2.promisify)(this.fs, `close`)(e3).finally(() => {
          this.closePromise = null;
        });
      } else this.closePromise = new Promise((e3, t3) => {
        this.closeResolve = e3, this.closeReject = t3;
      }).finally(() => {
        this.closePromise = null, this.closeReject = void 0, this.closeResolve = void 0;
      });
      return this.emit(`close`), this.closePromise;
    }
    datasync() {
      return (0, t2.promisify)(this.fs, `fdatasync`)(this.fd);
    }
    createReadStream(e3) {
      return this.fs.createReadStream(``, { ...e3, fd: this });
    }
    createWriteStream(e3) {
      return this.fs.createWriteStream(``, { ...e3, fd: this });
    }
    readableWebStream(e3 = {}) {
      let { type: t3 = `bytes`, autoClose: n3 = false } = e3, r2 = 0;
      if (this.fd === -1) throw Error(`The FileHandle is closed`);
      if (this.closePromise) throw Error(`The FileHandle is closing`);
      if (this.readableWebStreamLocked) throw Error(`An error will be thrown if this method is called more than once or is called after the FileHandle is closed or closing.`);
      this.readableWebStreamLocked = true, this.ref();
      let i2 = () => {
        this.readableWebStreamLocked = false, this.unref(), n3 && this.close().catch(() => {
        });
      };
      return new ReadableStream({ type: t3 === `bytes` ? `bytes` : void 0, autoAllocateChunkSize: 16384, pull: async (e4) => {
        try {
          let t4 = e4.byobRequest?.view;
          if (!t4) {
            let t5 = new Uint8Array(16384), n5 = await this.read(t5, 0, t5.length, r2);
            if (n5.bytesRead === 0) {
              e4.close(), i2();
              return;
            }
            r2 += n5.bytesRead, e4.enqueue(t5.slice(0, n5.bytesRead));
            return;
          }
          let n4 = await this.read(t4, t4.byteOffset, t4.byteLength, r2);
          if (n4.bytesRead === 0) {
            e4.close(), i2();
            return;
          }
          r2 += n4.bytesRead, e4.byobRequest.respond(n4.bytesRead);
        } catch (t4) {
          e4.error(t4), i2();
        }
      }, cancel: async () => {
        i2();
      } });
    }
    async read(e3, n3, r2, i2) {
      let a2 = i2 ?? this.position, o2 = await (0, t2.promisify)(this.fs, `read`, (t3) => ({ bytesRead: t3, buffer: e3 }))(this.fd, e3, n3, r2, a2);
      return i2 ?? (this.position += o2.bytesRead), o2;
    }
    readv(e3, n3) {
      return (0, t2.promisify)(this.fs, `readv`, (t3) => ({ bytesRead: t3, buffers: e3 }))(this.fd, e3, n3);
    }
    readFile(e3) {
      return (0, t2.promisify)(this.fs, `readFile`)(this.fd, e3);
    }
    stat(e3) {
      return (0, t2.promisify)(this.fs, `fstat`)(this.fd, e3);
    }
    sync() {
      return (0, t2.promisify)(this.fs, `fsync`)(this.fd);
    }
    truncate(e3) {
      return (0, t2.promisify)(this.fs, `ftruncate`)(this.fd, e3);
    }
    utimes(e3, n3) {
      return (0, t2.promisify)(this.fs, `futimes`)(this.fd, e3, n3);
    }
    async write(e3, n3, r2, i2) {
      let a2 = typeof i2 != `number`, o2 = a2 ? this.position : i2, s2 = await (0, t2.promisify)(this.fs, `write`, (t3) => ({ bytesWritten: t3, buffer: e3 }))(this.fd, e3, n3, r2, o2);
      return a2 && (this.position += s2.bytesWritten), s2;
    }
    writev(e3, n3) {
      return (0, t2.promisify)(this.fs, `writev`, (t3) => ({ bytesWritten: t3, buffers: e3 }))(this.fd, e3, n3);
    }
    writeFile(e3, n3) {
      return (0, t2.promisify)(this.fs, `writeFile`)(this.fd, e3, n3);
    }
    async [Symbol.asyncDispose]() {
      await this.close();
    }
    ref() {
      this.refs++;
    }
    unref() {
      this.refs--, this.refs === 0 && (this.fd = -1, this.closeResolve && (0, t2.promisify)(this.fs, `close`)(this.fd).then(this.closeResolve, this.closeReject));
    }
  };
})), fr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.FsPromises = void 0;
  var t2 = ur(), n2 = $(), r2 = class {
    constructor(e3, t3, n3 = {}) {
      if (this.fs = e3, this.path = t3, this.options = n3, this.eventQueue = [], this.resolveQueue = [], this.finished = false, this.maxQueue = n3.maxQueue || 2048, this.overflow = n3.overflow || `ignore`, this.startWatching(), n3.signal) {
        if (n3.signal.aborted) {
          this.finish();
          return;
        }
        n3.signal.addEventListener(`abort`, () => {
          this.finish();
        });
      }
    }
    startWatching() {
      try {
        this.watcher = this.fs.watch(this.path, this.options, (e3, t3) => {
          this.enqueueEvent({ eventType: e3, filename: t3 });
        });
      } catch (e3) {
        throw this.finish(), e3;
      }
    }
    enqueueEvent(e3) {
      if (!this.finished) {
        if (this.eventQueue.length >= this.maxQueue) if (this.overflow === `throw`) {
          let e4 = Error(`Watch queue overflow: more than ${this.maxQueue} events queued`);
          this.finish(e4);
          return;
        } else this.eventQueue.shift();
        if (this.eventQueue.push(e3), this.resolveQueue.length > 0) {
          let { resolve: e4 } = this.resolveQueue.shift();
          e4({ value: this.eventQueue.shift(), done: false });
        }
      }
    }
    finish(e3) {
      if (!this.finished) for (this.finished = true, this.watcher && (this.watcher = (this.watcher.close(), null)); this.resolveQueue.length > 0; ) {
        let { resolve: t3, reject: n3 } = this.resolveQueue.shift();
        e3 ? n3(e3) : t3({ value: void 0, done: true });
      }
    }
    async next() {
      return this.finished ? { value: void 0, done: true } : this.eventQueue.length > 0 ? { value: this.eventQueue.shift(), done: false } : new Promise((e3, t3) => {
        this.resolveQueue.push({ resolve: e3, reject: t3 });
      });
    }
    async return() {
      return this.finish(), { value: void 0, done: true };
    }
    async throw(e3) {
      throw this.finish(e3), e3;
    }
    [Symbol.asyncIterator]() {
      return this;
    }
  };
  e2.FsPromises = class {
    constructor(e3, i2) {
      this.fs = e3, this.FileHandle = i2, this.constants = n2.constants, this.cp = (0, t2.promisify)(this.fs, `cp`), this.opendir = (0, t2.promisify)(this.fs, `opendir`), this.statfs = (0, t2.promisify)(this.fs, `statfs`), this.lutimes = (0, t2.promisify)(this.fs, `lutimes`), this.glob = (0, t2.promisify)(this.fs, `glob`), this.access = (0, t2.promisify)(this.fs, `access`), this.chmod = (0, t2.promisify)(this.fs, `chmod`), this.chown = (0, t2.promisify)(this.fs, `chown`), this.copyFile = (0, t2.promisify)(this.fs, `copyFile`), this.lchmod = (0, t2.promisify)(this.fs, `lchmod`), this.lchown = (0, t2.promisify)(this.fs, `lchown`), this.link = (0, t2.promisify)(this.fs, `link`), this.lstat = (0, t2.promisify)(this.fs, `lstat`), this.mkdir = (0, t2.promisify)(this.fs, `mkdir`), this.mkdtemp = (0, t2.promisify)(this.fs, `mkdtemp`), this.readdir = (0, t2.promisify)(this.fs, `readdir`), this.readlink = (0, t2.promisify)(this.fs, `readlink`), this.realpath = (0, t2.promisify)(this.fs, `realpath`), this.rename = (0, t2.promisify)(this.fs, `rename`), this.rmdir = (0, t2.promisify)(this.fs, `rmdir`), this.rm = (0, t2.promisify)(this.fs, `rm`), this.stat = (0, t2.promisify)(this.fs, `stat`), this.symlink = (0, t2.promisify)(this.fs, `symlink`), this.truncate = (0, t2.promisify)(this.fs, `truncate`), this.unlink = (0, t2.promisify)(this.fs, `unlink`), this.utimes = (0, t2.promisify)(this.fs, `utimes`), this.readFile = (e4, n3) => (0, t2.promisify)(this.fs, `readFile`)(e4 instanceof this.FileHandle ? e4.fd : e4, n3), this.appendFile = (e4, n3, r3) => (0, t2.promisify)(this.fs, `appendFile`)(e4 instanceof this.FileHandle ? e4.fd : e4, n3, r3), this.open = (e4, n3 = `r`, r3) => (0, t2.promisify)(this.fs, `open`, (e5) => new this.FileHandle(this.fs, e5))(e4, n3, r3), this.writeFile = (e4, n3, r3) => ((0, t2.isReadableStream)(n3) ? (0, t2.streamToBuffer)(n3) : Promise.resolve(n3)).then((n4) => (0, t2.promisify)(this.fs, `writeFile`)(e4 instanceof this.FileHandle ? e4.fd : e4, n4, r3)), this.watch = (e4, t3) => {
        let n3 = typeof t3 == `string` ? { encoding: t3 } : t3 || {};
        return new r2(this.fs, e4, n3);
      };
    }
  };
})), pr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.printTree = void 0, e2.printTree = (e3 = ``, t2) => {
    let n2 = ``, r2 = t2.length - 1;
    for (; r2 >= 0 && !t2[r2]; r2--) ;
    for (let i2 = 0; i2 <= r2; i2++) {
      let a2 = t2[i2];
      if (!a2) continue;
      let o2 = i2 === r2, s2 = a2(e3 + (o2 ? ` ` : `\u2502`) + `  `), c2 = s2 ? o2 ? `\u2514\u2500` : `\u251C\u2500` : `\u2502`;
      n2 += `
` + e3 + c2 + (s2 ? ` ` + s2 : ``);
    }
    return n2;
  };
})), mr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.printBinary = void 0, e2.printBinary = (e3 = ``, t2) => {
    let n2 = t2[0], r2 = t2[1], i2 = ``;
    return n2 && (i2 += `
` + e3 + `\u2190 ` + n2(e3 + `  `)), r2 && (i2 += `
` + e3 + `\u2192 ` + r2(e3 + `  `)), i2;
  };
})), hr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.printJson = void 0, e2.printJson = (e3 = ``, t2, n2 = 2) => (JSON.stringify(t2, null, n2) || `nil`).split(`
`).join(`
` + e3);
})), gr = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true });
  var n2 = (J(), e(f));
  n2.__exportStar(pr(), t2), n2.__exportStar(mr(), t2), n2.__exportStar(hr(), t2);
})), _r = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.toTreeSync = void 0;
  var t2 = gr(), n2 = $();
  e2.toTreeSync = (r2, i2 = {}) => {
    let a2 = i2.separator || `/`, o2 = i2.dir || a2;
    o2[o2.length - 1] !== a2 && (o2 += a2);
    let s2 = i2.tab || ``, c2 = i2.depth ?? 10, l2 = i2.sort ?? true, u2 = ` (...)`;
    if (c2 > 0) {
      let n3 = r2.readdirSync(o2, { withFileTypes: true });
      l2 && n3.sort((e3, t3) => e3.isDirectory() && t3.isDirectory() ? e3.name.toString().localeCompare(t3.name.toString()) : e3.isDirectory() ? -1 : t3.isDirectory() ? 1 : e3.name.toString().localeCompare(t3.name.toString())), u2 = (0, t2.printTree)(s2, n3.map((t3) => (n4) => t3.isDirectory() ? (0, e2.toTreeSync)(r2, { dir: o2 + t3.name, depth: c2 - 1, tab: n4 }) : t3.isSymbolicLink() ? `` + t3.name + ` \u2192 ` + r2.readlinkSync(o2 + t3.name) : `` + t3.name));
    }
    return (0, n2.basename)(o2, a2) + a2 + u2;
  };
})), vr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true });
})), yr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.fromSnapshotSync = e2.toSnapshotSync = void 0, e2.toSnapshotSync = ({ fs: t2, path: n2 = `/`, separator: r2 = `/` }) => {
    let i2 = t2.lstatSync(n2);
    if (i2.isDirectory()) {
      let i3 = t2.readdirSync(n2), a2 = {}, o2 = n2.endsWith(r2) ? n2 : n2 + r2;
      for (let n3 of i3) {
        let i4 = (0, e2.toSnapshotSync)({ fs: t2, path: `${o2}${n3}`, separator: r2 });
        i4 && (a2[`` + n3] = i4);
      }
      return [0, {}, a2];
    } else if (i2.isFile()) {
      let e3 = t2.readFileSync(n2);
      return [1, {}, new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength)];
    } else if (i2.isSymbolicLink()) return [2, { target: t2.readlinkSync(n2).toString() }];
    return null;
  }, e2.fromSnapshotSync = (t2, { fs: n2, path: r2 = `/`, separator: i2 = `/` }) => {
    if (t2) switch (t2[0]) {
      case 0: {
        r2.endsWith(i2) || (r2 += i2);
        let [, , a2] = t2;
        n2.mkdirSync(r2, { recursive: true });
        for (let [t3, o2] of Object.entries(a2)) (0, e2.fromSnapshotSync)(o2, { fs: n2, path: `${r2}${t3}`, separator: i2 });
        break;
      }
      case 1: {
        let [, , e3] = t2;
        n2.writeFileSync(r2, e3);
        break;
      }
      case 2: {
        let [, { target: e3 }] = t2;
        n2.symlinkSync(e3, r2);
        break;
      }
    }
  };
})), br = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.isFloat32 = void 0;
  var t2 = new DataView(new ArrayBuffer(4));
  e2.isFloat32 = (e3) => (t2.setFloat32(0, e3), e3 === t2.getFloat32(0));
})), xr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.JsonPackExtension = void 0, e2.JsonPackExtension = class {
    constructor(e3, t2) {
      this.tag = e3, this.val = t2;
    }
  };
})), Sr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Slice = void 0, e2.Slice = class {
    constructor(e3, t2, n2, r2) {
      this.uint8 = e3, this.view = t2, this.start = n2, this.end = r2;
    }
    subarray() {
      return this.uint8.subarray(this.start, this.end);
    }
  };
})), Cr = i(((e2) => {
  s(), Object.defineProperty(e2, `__esModule`, { value: true }), e2.Writer = void 0;
  var t2 = Sr(), n2 = new Uint8Array([]), r2 = new DataView(n2.buffer), i2 = typeof c == `function`, a2 = i2 ? c.prototype.utf8Write : null, o2 = i2 ? c.from : null, l2 = typeof TextEncoder < `u` ? new TextEncoder() : null;
  e2.Writer = class {
    constructor(e3 = 64 * 1024) {
      this.allocSize = e3, this.view = r2, this.x0 = 0, this.x = 0, this.uint8 = new Uint8Array(e3), this.size = e3, this.view = new DataView(this.uint8.buffer);
    }
    grow(e3) {
      let t3 = this.x0, n3 = this.x, r3 = this.uint8, i3 = new Uint8Array(e3), a3 = new DataView(i3.buffer), o3 = r3.subarray(t3, n3);
      i3.set(o3, 0), this.x = n3 - t3, this.x0 = 0, this.uint8 = i3, this.size = e3, this.view = a3;
    }
    ensureCapacity(e3) {
      let t3 = this.size, n3 = t3 - this.x;
      if (n3 < e3) {
        let r3 = t3 - this.x0 + (e3 - n3);
        this.grow(r3 <= this.allocSize ? this.allocSize : r3 * 2);
      }
    }
    move(e3) {
      this.ensureCapacity(e3), this.x += e3;
    }
    reset() {
      this.x0 = this.x;
    }
    newBuffer(e3) {
      let t3 = this.uint8 = new Uint8Array(e3);
      this.size = e3, this.view = new DataView(t3.buffer), this.x = this.x0 = 0;
    }
    flush() {
      let e3 = this.uint8.subarray(this.x0, this.x);
      return this.x0 = this.x, e3;
    }
    flushSlice() {
      let e3 = new t2.Slice(this.uint8, this.view, this.x0, this.x);
      return this.x0 = this.x, e3;
    }
    u8(e3) {
      this.ensureCapacity(1), this.uint8[this.x++] = e3;
    }
    u16(e3) {
      this.ensureCapacity(2), this.view.setUint16(this.x, e3), this.x += 2;
    }
    u32(e3) {
      this.ensureCapacity(4), this.view.setUint32(this.x, e3), this.x += 4;
    }
    i32(e3) {
      this.ensureCapacity(4), this.view.setInt32(this.x, e3), this.x += 4;
    }
    u64(e3) {
      this.ensureCapacity(8), this.view.setBigUint64(this.x, BigInt(e3)), this.x += 8;
    }
    f64(e3) {
      this.ensureCapacity(8), this.view.setFloat64(this.x, e3), this.x += 8;
    }
    u8u16(e3, t3) {
      this.ensureCapacity(3);
      let n3 = this.x;
      this.uint8[n3++] = e3, this.uint8[n3++] = t3 >>> 8, this.uint8[n3++] = t3 & 255, this.x = n3;
    }
    u8u32(e3, t3) {
      this.ensureCapacity(5);
      let n3 = this.x;
      this.uint8[n3++] = e3, this.view.setUint32(n3, t3), this.x = n3 + 4;
    }
    u8u64(e3, t3) {
      this.ensureCapacity(9);
      let n3 = this.x;
      this.uint8[n3++] = e3, this.view.setBigUint64(n3, BigInt(t3)), this.x = n3 + 8;
    }
    u8f32(e3, t3) {
      this.ensureCapacity(5);
      let n3 = this.x;
      this.uint8[n3++] = e3, this.view.setFloat32(n3, t3), this.x = n3 + 4;
    }
    u8f64(e3, t3) {
      this.ensureCapacity(9);
      let n3 = this.x;
      this.uint8[n3++] = e3, this.view.setFloat64(n3, t3), this.x = n3 + 8;
    }
    buf(e3, t3) {
      this.ensureCapacity(t3);
      let n3 = this.x;
      this.uint8.set(e3, n3), this.x = n3 + t3;
    }
    utf8(e3) {
      let t3 = e3.length * 4;
      if (t3 < 168) return this.utf8Native(e3);
      this.ensureCapacity(t3);
      let n3 = this.size - this.x;
      if (a2) {
        let t4 = a2.call(this.uint8, e3, this.x, n3);
        return this.x += t4, t4;
      } else if (o2) {
        let t4 = this.uint8, r3 = t4.byteOffset + this.x, i3 = o2(t4.buffer).subarray(r3, r3 + n3).write(e3, 0, n3, `utf8`);
        return this.x += i3, i3;
      } else if (t3 > 1024 && l2) {
        let t4 = l2.encodeInto(e3, this.uint8.subarray(this.x, this.x + n3)).written;
        return this.x += t4, t4;
      }
      return this.utf8Native(e3);
    }
    utf8Native(e3) {
      let t3 = e3.length, n3 = this.uint8, r3 = this.x, i3 = 0;
      for (; i3 < t3; ) {
        let a4 = e3.charCodeAt(i3++);
        if (!(a4 & 4294967168)) {
          n3[r3++] = a4;
          continue;
        } else if (!(a4 & 4294965248)) n3[r3++] = a4 >> 6 & 31 | 192;
        else {
          if (a4 >= 55296 && a4 <= 56319 && i3 < t3) {
            let t4 = e3.charCodeAt(i3);
            (t4 & 64512) == 56320 && (i3++, a4 = ((a4 & 1023) << 10) + (t4 & 1023) + 65536);
          }
          a4 & 4294901760 ? (n3[r3++] = a4 >> 18 & 7 | 240, n3[r3++] = a4 >> 12 & 63 | 128, n3[r3++] = a4 >> 6 & 63 | 128) : (n3[r3++] = a4 >> 12 & 15 | 224, n3[r3++] = a4 >> 6 & 63 | 128);
        }
        n3[r3++] = a4 & 63 | 128;
      }
      let a3 = r3 - this.x;
      return this.x = r3, a3;
    }
    ascii(e3) {
      let t3 = e3.length;
      this.ensureCapacity(t3);
      let n3 = this.uint8, r3 = this.x, i3 = 0;
      for (; i3 < t3; ) n3[r3++] = e3.charCodeAt(i3++);
      this.x = r3;
    }
  };
})), wr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.CborEncoderFast = void 0;
  var t2 = Cr(), n2 = Number.isSafeInteger;
  e2.CborEncoderFast = class {
    constructor(e3 = new t2.Writer()) {
      this.writer = e3;
    }
    encode(e3) {
      return this.writeAny(e3), this.writer.flush();
    }
    writeAny(e3) {
      switch (typeof e3) {
        case `number`:
          return this.writeNumber(e3);
        case `string`:
          return this.writeStr(e3);
        case `boolean`:
          return this.writer.u8(244 + +e3);
        case `object`:
          if (!e3) return this.writer.u8(246);
          switch (e3.constructor) {
            case Array:
              return this.writeArr(e3);
            default:
              return this.writeObj(e3);
          }
      }
    }
    writeCbor() {
      this.writer.u8u16(217, 55799);
    }
    writeEnd() {
      this.writer.u8(255);
    }
    writeNull() {
      this.writer.u8(246);
    }
    writeBoolean(e3) {
      e3 ? this.writer.u8(245) : this.writer.u8(244);
    }
    writeNumber(e3) {
      n2(e3) ? this.writeInteger(e3) : typeof e3 == `bigint` ? this.writeBigInt(e3) : this.writeFloat(e3);
    }
    writeBigInt(e3) {
      e3 >= 0 ? this.writeBigUint(e3) : this.writeBigSint(e3);
    }
    writeBigUint(e3) {
      if (e3 <= 2 ** 53 - 1) return this.writeUInteger(Number(e3));
      this.writer.u8u64(27, e3);
    }
    writeBigSint(e3) {
      if (e3 >= -(2 ** 53 - 1)) return this.encodeNint(Number(e3));
      let t3 = -BigInt(1) - e3;
      this.writer.u8u64(59, t3);
    }
    writeInteger(e3) {
      e3 >= 0 ? this.writeUInteger(e3) : this.encodeNint(e3);
    }
    writeUInteger(e3) {
      let t3 = this.writer;
      t3.ensureCapacity(9);
      let n3 = t3.uint8, r2 = t3.x;
      e3 <= 23 ? n3[r2++] = 0 + e3 : e3 <= 255 ? (n3[r2++] = 24, n3[r2++] = e3) : e3 <= 65535 ? (n3[r2++] = 25, t3.view.setUint16(r2, e3), r2 += 2) : e3 <= 4294967295 ? (n3[r2++] = 26, t3.view.setUint32(r2, e3), r2 += 4) : (n3[r2++] = 27, t3.view.setBigUint64(r2, BigInt(e3)), r2 += 8), t3.x = r2;
    }
    encodeNumber(e3) {
      this.writeNumber(e3);
    }
    encodeInteger(e3) {
      this.writeInteger(e3);
    }
    encodeUint(e3) {
      this.writeUInteger(e3);
    }
    encodeNint(e3) {
      let t3 = -1 - e3, n3 = this.writer;
      n3.ensureCapacity(9);
      let r2 = n3.uint8, i2 = n3.x;
      t3 < 24 ? r2[i2++] = 32 + t3 : t3 <= 255 ? (r2[i2++] = 56, r2[i2++] = t3) : t3 <= 65535 ? (r2[i2++] = 57, n3.view.setUint16(i2, t3), i2 += 2) : t3 <= 4294967295 ? (r2[i2++] = 58, n3.view.setUint32(i2, t3), i2 += 4) : (r2[i2++] = 59, n3.view.setBigUint64(i2, BigInt(t3)), i2 += 8), n3.x = i2;
    }
    writeFloat(e3) {
      this.writer.u8f64(251, e3);
    }
    writeBin(e3) {
      let t3 = e3.length;
      this.writeBinHdr(t3), this.writer.buf(e3, t3);
    }
    writeBinHdr(e3) {
      let t3 = this.writer;
      e3 <= 23 ? t3.u8(64 + e3) : e3 <= 255 ? t3.u16(22528 + e3) : e3 <= 65535 ? t3.u8u16(89, e3) : e3 <= 4294967295 ? t3.u8u32(90, e3) : t3.u8u64(91, e3);
    }
    writeStr(e3) {
      let t3 = this.writer, n3 = e3.length * 4;
      t3.ensureCapacity(5 + n3);
      let r2 = t3.uint8, i2 = t3.x;
      n3 <= 23 ? t3.x++ : n3 <= 255 ? (r2[t3.x++] = 120, i2 = t3.x, t3.x++) : n3 <= 65535 ? (r2[t3.x++] = 121, i2 = t3.x, t3.x += 2) : (r2[t3.x++] = 122, i2 = t3.x, t3.x += 4);
      let a2 = t3.utf8(e3);
      n3 <= 23 ? r2[i2] = 96 + a2 : n3 <= 255 ? r2[i2] = a2 : n3 <= 65535 ? t3.view.setUint16(i2, a2) : t3.view.setUint32(i2, a2);
    }
    writeStrHdr(e3) {
      let t3 = this.writer;
      e3 <= 23 ? t3.u8(96 + e3) : e3 <= 255 ? t3.u16(30720 + e3) : e3 <= 65535 ? t3.u8u16(121, e3) : t3.u8u32(122, e3);
    }
    writeAsciiStr(e3) {
      this.writeStrHdr(e3.length), this.writer.ascii(e3);
    }
    writeArr(e3) {
      let t3 = e3.length;
      this.writeArrHdr(t3);
      for (let n3 = 0; n3 < t3; n3++) this.writeAny(e3[n3]);
    }
    writeArrHdr(e3) {
      let t3 = this.writer;
      e3 <= 23 ? t3.u8(128 + e3) : e3 <= 255 ? t3.u16(38912 + e3) : e3 <= 65535 ? t3.u8u16(153, e3) : e3 <= 4294967295 ? t3.u8u32(154, e3) : t3.u8u64(155, e3);
    }
    writeObj(e3) {
      let t3 = Object.keys(e3), n3 = t3.length;
      this.writeObjHdr(n3);
      for (let r2 = 0; r2 < n3; r2++) {
        let n4 = t3[r2];
        this.writeStr(n4), this.writeAny(e3[n4]);
      }
    }
    writeObjHdr(e3) {
      let t3 = this.writer;
      e3 <= 23 ? t3.u8(160 + e3) : e3 <= 255 ? t3.u16(47104 + e3) : e3 <= 65535 ? t3.u8u16(185, e3) : e3 <= 4294967295 ? t3.u8u32(186, e3) : t3.u8u64(187, e3);
    }
    writeMapHdr(e3) {
      this.writeObjHdr(e3);
    }
    writeStartMap() {
      this.writer.u8(191);
    }
    writeTag(e3, t3) {
      this.writeTagHdr(e3), this.writeAny(t3);
    }
    writeTagHdr(e3) {
      let t3 = this.writer;
      e3 <= 23 ? t3.u8(192 + e3) : e3 <= 255 ? t3.u16(55296 + e3) : e3 <= 65535 ? t3.u8u16(217, e3) : e3 <= 4294967295 ? t3.u8u32(218, e3) : t3.u8u64(219, e3);
    }
    writeTkn(e3) {
      let t3 = this.writer;
      e3 <= 23 ? t3.u8(224 + e3) : e3 <= 255 && t3.u16(63488 + e3);
    }
    writeStartStr() {
      this.writer.u8(127);
    }
    writeStrChunk(e3) {
      throw Error(`Not implemented`);
    }
    writeEndStr() {
      throw Error(`Not implemented`);
    }
    writeStartBin() {
      this.writer.u8(95);
    }
    writeBinChunk(e3) {
      throw Error(`Not implemented`);
    }
    writeEndBin() {
      throw Error(`Not implemented`);
    }
    writeStartArr() {
      this.writer.u8(159);
    }
    writeArrChunk(e3) {
      throw Error(`Not implemented`);
    }
    writeEndArr() {
      this.writer.u8(255);
    }
    writeStartObj() {
      this.writer.u8(191);
    }
    writeObjChunk(e3, t3) {
      throw Error(`Not implemented`);
    }
    writeEndObj() {
      this.writer.u8(255);
    }
  };
})), Tr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.JsonPackValue = void 0, e2.JsonPackValue = class {
    constructor(e3) {
      this.val = e3;
    }
  };
})), Er = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.CborEncoder = void 0;
  var t2 = br(), n2 = xr(), r2 = wr(), i2 = Tr();
  e2.CborEncoder = class extends r2.CborEncoderFast {
    writeUnknown(e3) {
      this.writeNull();
    }
    writeAny(e3) {
      switch (typeof e3) {
        case `number`:
          return this.writeNumber(e3);
        case `string`:
          return this.writeStr(e3);
        case `boolean`:
          return this.writer.u8(244 + +e3);
        case `object`:
          if (!e3) return this.writer.u8(246);
          switch (e3.constructor) {
            case Object:
              return this.writeObj(e3);
            case Array:
              return this.writeArr(e3);
            case Uint8Array:
              return this.writeBin(e3);
            case Map:
              return this.writeMap(e3);
            case n2.JsonPackExtension:
              return this.writeTag(e3.tag, e3.val);
            case i2.JsonPackValue: {
              let t3 = e3.val;
              return this.writer.buf(t3, t3.length);
            }
            default:
              return e3 instanceof Uint8Array ? this.writeBin(e3) : Array.isArray(e3) ? this.writeArr(e3) : e3 instanceof Map ? this.writeMap(e3) : this.writeUnknown(e3);
          }
        case `undefined`:
          return this.writeUndef();
        case `bigint`:
          return this.writeBigInt(e3);
        default:
          return this.writeUnknown(e3);
      }
    }
    writeFloat(e3) {
      (0, t2.isFloat32)(e3) ? this.writer.u8f32(250, e3) : this.writer.u8f64(251, e3);
    }
    writeMap(e3) {
      this.writeMapHdr(e3.size), e3.forEach((e4, t3) => {
        this.writeAny(t3), this.writeAny(e4);
      });
    }
    writeUndef() {
      this.writer.u8(247);
    }
  };
})), Dr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.decodeF16 = void 0;
  var t2 = Math.pow;
  e2.decodeF16 = (e3) => {
    let n2 = (e3 & 31744) >> 10, r2 = e3 & 1023;
    return (e3 >> 15 ? -1 : 1) * (n2 ? n2 === 31 ? r2 ? NaN : 1 / 0 : t2(2, n2 - 15) * (1 + r2 / 1024) : r2 / 1024 * 6103515625e-14);
  };
})), Or = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.decodeAsciiMax15 = e2.decodeAscii = void 0;
  var t2 = String.fromCharCode;
  e2.decodeAscii = (e3, n2, r2) => {
    let i2 = [];
    for (let t3 = 0; t3 < r2; t3++) {
      let t4 = e3[n2++];
      if (t4 & 128) return;
      i2.push(t4);
    }
    return t2.apply(String, i2);
  }, e2.decodeAsciiMax15 = (e3, n2, r2) => {
    if (r2 < 4) if (r2 < 2) {
      if (r2 === 0) return ``;
      {
        let r3 = e3[n2++];
        if ((r3 & 128) > 1) {
          --n2;
          return;
        }
        return t2(r3);
      }
    } else {
      let i2 = e3[n2++], a2 = e3[n2++];
      if ((i2 & 128) > 0 || (a2 & 128) > 0) {
        n2 -= 2;
        return;
      }
      if (r2 < 3) return t2(i2, a2);
      let o2 = e3[n2++];
      if ((o2 & 128) > 0) {
        n2 -= 3;
        return;
      }
      return t2(i2, a2, o2);
    }
    else {
      let i2 = e3[n2++], a2 = e3[n2++], o2 = e3[n2++], s2 = e3[n2++];
      if ((i2 & 128) > 0 || (a2 & 128) > 0 || (o2 & 128) > 0 || (s2 & 128) > 0) {
        n2 -= 4;
        return;
      }
      if (r2 < 6) {
        if (r2 === 4) return t2(i2, a2, o2, s2);
        {
          let r3 = e3[n2++];
          if ((r3 & 128) > 0) {
            n2 -= 5;
            return;
          }
          return t2(i2, a2, o2, s2, r3);
        }
      } else if (r2 < 8) {
        let c2 = e3[n2++], l2 = e3[n2++];
        if ((c2 & 128) > 0 || (l2 & 128) > 0) {
          n2 -= 6;
          return;
        }
        if (r2 < 7) return t2(i2, a2, o2, s2, c2, l2);
        let u2 = e3[n2++];
        if ((u2 & 128) > 0) {
          n2 -= 7;
          return;
        }
        return t2(i2, a2, o2, s2, c2, l2, u2);
      } else {
        let c2 = e3[n2++], l2 = e3[n2++], u2 = e3[n2++], d2 = e3[n2++];
        if ((c2 & 128) > 0 || (l2 & 128) > 0 || (u2 & 128) > 0 || (d2 & 128) > 0) {
          n2 -= 8;
          return;
        }
        if (r2 < 10) {
          if (r2 === 8) return t2(i2, a2, o2, s2, c2, l2, u2, d2);
          {
            let r3 = e3[n2++];
            if ((r3 & 128) > 0) {
              n2 -= 9;
              return;
            }
            return t2(i2, a2, o2, s2, c2, l2, u2, d2, r3);
          }
        } else if (r2 < 12) {
          let f2 = e3[n2++], p2 = e3[n2++];
          if ((f2 & 128) > 0 || (p2 & 128) > 0) {
            n2 -= 10;
            return;
          }
          if (r2 < 11) return t2(i2, a2, o2, s2, c2, l2, u2, d2, f2, p2);
          let m2 = e3[n2++];
          if ((m2 & 128) > 0) {
            n2 -= 11;
            return;
          }
          return t2(i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2);
        } else {
          let f2 = e3[n2++], p2 = e3[n2++], m2 = e3[n2++], h2 = e3[n2++];
          if ((f2 & 128) > 0 || (p2 & 128) > 0 || (m2 & 128) > 0 || (h2 & 128) > 0) {
            n2 -= 12;
            return;
          }
          if (r2 < 14) {
            if (r2 === 12) return t2(i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2);
            {
              let r3 = e3[n2++];
              if ((r3 & 128) > 0) {
                n2 -= 13;
                return;
              }
              return t2(i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, r3);
            }
          } else {
            let g2 = e3[n2++], _2 = e3[n2++];
            if ((g2 & 128) > 0 || (_2 & 128) > 0) {
              n2 -= 14;
              return;
            }
            if (r2 < 15) return t2(i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2);
            let v2 = e3[n2++];
            if ((v2 & 128) > 0) {
              n2 -= 15;
              return;
            }
            return t2(i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2);
          }
        }
      }
    }
  };
})), kr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true });
  var t2 = String.fromCharCode;
  e2.default = (e3, n2, r2) => {
    let i2 = n2, a2 = i2 + r2, o2 = [];
    for (; i2 < a2; ) {
      let t3 = e3[i2++];
      if (t3 & 128) {
        let n3 = e3[i2++] & 63;
        if ((t3 & 224) == 192) t3 = (t3 & 31) << 6 | n3;
        else {
          let r3 = e3[i2++] & 63;
          if ((t3 & 240) == 224) t3 = (t3 & 31) << 12 | n3 << 6 | r3;
          else if ((t3 & 248) == 240) {
            let a3 = e3[i2++] & 63, s2 = (t3 & 7) << 18 | n3 << 12 | r3 << 6 | a3;
            if (s2 > 65535) {
              s2 -= 65536;
              let e4 = s2 >>> 10 & 1023 | 55296;
              t3 = 56320 | s2 & 1023, o2.push(e4);
            } else t3 = s2;
          }
        }
      }
      o2.push(t3);
    }
    return t2.apply(String, o2);
  };
})), Ar = i(((t2) => {
  s(), Object.defineProperty(t2, `__esModule`, { value: true });
  var n2 = (J(), e(f)), r2 = Or(), i2 = n2.__importDefault(kr()), a2 = c !== void 0, o2 = a2 ? c.prototype.utf8Slice : null, l2 = a2 ? c.from : null, u2 = (e2, t3, n3) => (0, r2.decodeAsciiMax15)(e2, t3, n3) ?? (0, i2.default)(e2, t3, n3), d2 = (e2, t3, n3) => (0, r2.decodeAscii)(e2, t3, n3) ?? (0, i2.default)(e2, t3, n3), p2 = o2 ? (e2, t3, n3) => o2.call(e2, t3, t3 + n3) : l2 ? (e2, t3, n3) => l2(e2).subarray(t3, t3 + n3).toString(`utf8`) : i2.default;
  t2.default = (e2, t3, n3) => n3 < 16 ? u2(e2, t3, n3) : n3 < 32 ? d2(e2, t3, n3) : p2(e2, t3, n3);
})), jr = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.decodeUtf8 = void 0, t2.decodeUtf8 = (J(), e(f)).__importDefault(Ar()).default;
})), Mr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.Reader = void 0;
  var t2 = jr();
  e2.Reader = class e3 {
    constructor(e4 = new Uint8Array([]), t3 = new DataView(e4.buffer, e4.byteOffset, e4.length), n2 = 0, r2 = e4.length) {
      this.uint8 = e4, this.view = t3, this.x = n2, this.end = r2;
    }
    reset(e4) {
      this.x = 0, this.uint8 = e4, this.view = new DataView(e4.buffer, e4.byteOffset, e4.length);
    }
    size() {
      return this.end - this.x;
    }
    peek() {
      return this.view.getUint8(this.x);
    }
    peak() {
      return this.peek();
    }
    skip(e4) {
      this.x += e4;
    }
    buf(e4 = this.size()) {
      let t3 = this.x, n2 = t3 + e4, r2 = this.uint8.subarray(t3, n2);
      return this.x = n2, r2;
    }
    subarray(e4 = 0, t3) {
      let n2 = this.x, r2 = n2 + e4, i2 = typeof t3 == `number` ? n2 + t3 : this.end;
      return this.uint8.subarray(r2, i2);
    }
    slice(t3 = 0, n2) {
      let r2 = this.x, i2 = r2 + t3, a2 = typeof n2 == `number` ? r2 + n2 : this.end;
      return new e3(this.uint8, this.view, i2, a2);
    }
    cut(e4 = this.size()) {
      let t3 = this.slice(0, e4);
      return this.skip(e4), t3;
    }
    u8() {
      return this.uint8[this.x++];
    }
    i8() {
      return this.view.getInt8(this.x++);
    }
    u16() {
      let e4 = this.x, t3 = (this.uint8[e4++] << 8) + this.uint8[e4++];
      return this.x = e4, t3;
    }
    i16() {
      let e4 = this.view.getInt16(this.x);
      return this.x += 2, e4;
    }
    u32() {
      let e4 = this.view.getUint32(this.x);
      return this.x += 4, e4;
    }
    i32() {
      let e4 = this.view.getInt32(this.x);
      return this.x += 4, e4;
    }
    u64() {
      let e4 = this.view.getBigUint64(this.x);
      return this.x += 8, e4;
    }
    i64() {
      let e4 = this.view.getBigInt64(this.x);
      return this.x += 8, e4;
    }
    f32() {
      let e4 = this.x;
      return this.x += 4, this.view.getFloat32(e4);
    }
    f64() {
      let e4 = this.x;
      return this.x += 8, this.view.getFloat64(e4);
    }
    utf8(e4) {
      let n2 = this.x;
      return this.x += e4, (0, t2.decodeUtf8)(this.uint8, n2, e4);
    }
    ascii(e4) {
      let t3 = this.uint8, n2 = ``, r2 = this.x + e4;
      for (let e5 = this.x; e5 < r2; e5++) n2 += String.fromCharCode(t3[e5]);
      return this.x = r2, n2;
    }
  };
})), Nr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true });
  var t2 = String.fromCharCode;
  e2.default = (e3, n2, r2) => {
    let i2 = n2, a2 = i2 + r2, o2 = ``;
    for (; i2 < a2; ) {
      let n3 = e3[i2++];
      if (!(n3 & 128)) {
        o2 += t2(n3);
        continue;
      }
      let r3 = e3[i2++] & 63;
      if ((n3 & 224) == 192) {
        o2 += t2((n3 & 31) << 6 | r3);
        continue;
      }
      let a3 = e3[i2++] & 63;
      if ((n3 & 240) == 224) {
        o2 += t2((n3 & 31) << 12 | r3 << 6 | a3);
        continue;
      }
      if ((n3 & 248) == 240) {
        let s2 = e3[i2++] & 63, c2 = (n3 & 7) << 18 | r3 << 12 | a3 << 6 | s2;
        if (c2 > 65535) {
          c2 -= 65536;
          let e4 = c2 >>> 10 & 1023 | 55296;
          c2 = 56320 | c2 & 1023, o2 += t2(e4, c2);
        } else o2 += t2(c2);
      } else o2 += t2(n3);
    }
    return o2;
  };
})), Pr = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.CachedUtf8Decoder = void 0;
  var n2 = (J(), e(f)).__importDefault(Nr()), r2 = 1 + Math.round(Math.random() * ((-1 >>> 0) - 1));
  function i2(e2, t3) {
    return r2 ^= r2 << 13, r2 ^= r2 >>> 17, r2 ^= r2 << 5, (r2 >>> 0) % (t3 - e2 + 1) + e2;
  }
  var a2 = class {
    constructor(e2, t3) {
      this.bytes = e2, this.value = t3;
    }
  };
  t2.CachedUtf8Decoder = class {
    constructor() {
      this.caches = [];
      for (let e2 = 0; e2 < 31; e2++) this.caches.push([]);
    }
    get(e2, t3, n3) {
      let r3 = this.caches[n3 - 1], i3 = r3.length;
      FIND_CHUNK: for (let a3 = 0; a3 < i3; a3++) {
        let i4 = r3[a3], o2 = i4.bytes;
        for (let r4 = 0; r4 < n3; r4++) if (o2[r4] !== e2[t3 + r4]) continue FIND_CHUNK;
        return i4.value;
      }
      return null;
    }
    store(e2, t3) {
      let n3 = this.caches[e2.length - 1], r3 = new a2(e2, t3);
      n3.length >= 16 ? n3[i2(0, 15)] = r3 : n3.push(r3);
    }
    decode(e2, t3, r3) {
      if (!r3) return ``;
      let i3 = this.get(e2, t3, r3);
      if (i3 !== null) return i3;
      let a3 = (0, n2.default)(e2, t3, r3), o2 = Uint8Array.prototype.slice.call(e2, t3, t3 + r3);
      return this.store(o2, a3), a3;
    }
  };
})), Fr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.default = new (Pr()).CachedUtf8Decoder();
})), Ir = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.CborDecoderBase = void 0;
  var n2 = (J(), e(f)), r2 = Dr(), i2 = xr(), a2 = Tr(), o2 = Mr(), s2 = n2.__importDefault(Fr());
  t2.CborDecoderBase = class {
    constructor(e2 = new o2.Reader(), t3 = s2.default) {
      this.reader = e2, this.keyDecoder = t3;
    }
    read(e2) {
      return this.reader.reset(e2), this.readAny();
    }
    decode(e2) {
      return this.reader.reset(e2), this.readAny();
    }
    val() {
      return this.readAny();
    }
    readAny() {
      let e2 = this.reader.u8(), t3 = e2 >> 5, n3 = e2 & 31;
      return t3 < 4 ? t3 < 2 ? t3 === 0 ? this.readUint(n3) : this.readNint(n3) : t3 === 2 ? this.readBin(n3) : this.readStr(n3) : t3 < 6 ? t3 === 4 ? this.readArr(n3) : this.readObj(n3) : t3 === 6 ? this.readTag(n3) : this.readTkn(n3);
    }
    readAnyRaw(e2) {
      let t3 = e2 >> 5, n3 = e2 & 31;
      return t3 < 4 ? t3 < 2 ? t3 === 0 ? this.readUint(n3) : this.readNint(n3) : t3 === 2 ? this.readBin(n3) : this.readStr(n3) : t3 < 6 ? t3 === 4 ? this.readArr(n3) : this.readObj(n3) : t3 === 6 ? this.readTag(n3) : this.readTkn(n3);
    }
    readMinorLen(e2) {
      if (e2 < 24) return e2;
      switch (e2) {
        case 24:
          return this.reader.u8();
        case 25:
          return this.reader.u16();
        case 26:
          return this.reader.u32();
        case 27:
          return Number(this.reader.u64());
        case 31:
          return -1;
        default:
          throw 1;
      }
    }
    readUint(e2) {
      if (e2 < 25) return e2 === 24 ? this.reader.u8() : e2;
      if (e2 < 27) return e2 === 25 ? this.reader.u16() : this.reader.u32();
      {
        let e3 = this.reader.u64();
        return e3 > 9007199254740991 ? e3 : Number(e3);
      }
    }
    readNint(e2) {
      if (e2 < 25) return e2 === 24 ? -this.reader.u8() - 1 : -e2 - 1;
      if (e2 < 27) return e2 === 25 ? -this.reader.u16() - 1 : -this.reader.u32() - 1;
      {
        let e3 = this.reader.u64();
        return e3 > 9007199254740990 ? -e3 - BigInt(1) : -Number(e3) - 1;
      }
    }
    readBin(e2) {
      let t3 = this.reader;
      if (e2 <= 23) return t3.buf(e2);
      switch (e2) {
        case 24:
          return t3.buf(t3.u8());
        case 25:
          return t3.buf(t3.u16());
        case 26:
          return t3.buf(t3.u32());
        case 27:
          return t3.buf(Number(t3.u64()));
        case 31: {
          let e3 = 0, t4 = [];
          for (; this.reader.peak() !== 255; ) {
            let n4 = this.readBinChunk();
            e3 += n4.length, t4.push(n4);
          }
          this.reader.x++;
          let n3 = new Uint8Array(e3), r3 = 0, i3 = t4.length;
          for (let e4 = 0; e4 < i3; e4++) {
            let i4 = t4[e4];
            n3.set(i4, r3), r3 += i4.length;
          }
          return n3;
        }
        default:
          throw 1;
      }
    }
    readBinChunk() {
      let e2 = this.reader.u8(), t3 = e2 >> 5, n3 = e2 & 31;
      if (t3 !== 2) throw 2;
      if (n3 > 27) throw 3;
      return this.readBin(n3);
    }
    readAsStr() {
      let e2 = this.reader.u8(), t3 = e2 >> 5, n3 = e2 & 31;
      if (t3 !== 3) throw 11;
      return this.readStr(n3);
    }
    readStr(e2) {
      let t3 = this.reader;
      if (e2 <= 23) return t3.utf8(e2);
      switch (e2) {
        case 24:
          return t3.utf8(t3.u8());
        case 25:
          return t3.utf8(t3.u16());
        case 26:
          return t3.utf8(t3.u32());
        case 27:
          return t3.utf8(Number(t3.u64()));
        case 31: {
          let e3 = ``;
          for (; t3.peak() !== 255; ) e3 += this.readStrChunk();
          return this.reader.x++, e3;
        }
        default:
          throw 1;
      }
    }
    readStrLen(e2) {
      if (e2 <= 23) return e2;
      switch (e2) {
        case 24:
          return this.reader.u8();
        case 25:
          return this.reader.u16();
        case 26:
          return this.reader.u32();
        case 27:
          return Number(this.reader.u64());
        default:
          throw 1;
      }
    }
    readStrChunk() {
      let e2 = this.reader.u8(), t3 = e2 >> 5, n3 = e2 & 31;
      if (t3 !== 3) throw 4;
      if (n3 > 27) throw 5;
      return this.readStr(n3);
    }
    readArr(e2) {
      let t3 = this.readMinorLen(e2);
      return t3 >= 0 ? this.readArrRaw(t3) : this.readArrIndef();
    }
    readArrRaw(e2) {
      let t3 = [];
      for (let n3 = 0; n3 < e2; n3++) t3.push(this.readAny());
      return t3;
    }
    readArrIndef() {
      let e2 = [];
      for (; this.reader.peak() !== 255; ) e2.push(this.readAny());
      return this.reader.x++, e2;
    }
    readObj(e2) {
      if (e2 < 28) {
        let t3 = e2;
        switch (e2) {
          case 24:
            t3 = this.reader.u8();
            break;
          case 25:
            t3 = this.reader.u16();
            break;
          case 26:
            t3 = this.reader.u32();
            break;
          case 27:
            t3 = Number(this.reader.u64());
            break;
        }
        let n3 = {};
        for (let e3 = 0; e3 < t3; e3++) {
          let e4 = this.key();
          if (e4 === `__proto__`) throw 6;
          n3[e4] = this.readAny();
        }
        return n3;
      } else if (e2 === 31) return this.readObjIndef();
      else throw 1;
    }
    readObjRaw(e2) {
      let t3 = {};
      for (let n3 = 0; n3 < e2; n3++) {
        let e3 = this.key();
        t3[e3] = this.readAny();
      }
      return t3;
    }
    readObjIndef() {
      let e2 = {};
      for (; this.reader.peak() !== 255; ) {
        let t3 = this.key();
        if (this.reader.peak() === 255) throw 7;
        e2[t3] = this.readAny();
      }
      return this.reader.x++, e2;
    }
    key() {
      let e2 = this.reader.u8(), t3 = e2 >> 5, n3 = e2 & 31;
      if (t3 !== 3) return String(this.readAnyRaw(e2));
      let r3 = this.readStrLen(n3);
      if (r3 > 31) return this.reader.utf8(r3);
      let i3 = this.keyDecoder.decode(this.reader.uint8, this.reader.x, r3);
      return this.reader.skip(r3), i3;
    }
    readTag(e2) {
      if (e2 <= 23) return this.readTagRaw(e2);
      switch (e2) {
        case 24:
          return this.readTagRaw(this.reader.u8());
        case 25:
          return this.readTagRaw(this.reader.u16());
        case 26:
          return this.readTagRaw(this.reader.u32());
        case 27:
          return this.readTagRaw(Number(this.reader.u64()));
        default:
          throw 1;
      }
    }
    readTagRaw(e2) {
      return new i2.JsonPackExtension(e2, this.readAny());
    }
    readTkn(e2) {
      switch (e2) {
        case 20:
          return false;
        case 21:
          return true;
        case 22:
          return null;
        case 23:
          return;
        case 24:
          return new a2.JsonPackValue(this.reader.u8());
        case 25:
          return this.f16();
        case 26:
          return this.reader.f32();
        case 27:
          return this.reader.f64();
      }
      if (e2 <= 23) return new a2.JsonPackValue(e2);
      throw 1;
    }
    f16() {
      return (0, r2.decodeF16)(this.reader.u16());
    }
  };
})), Lr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.CborDecoder = void 0;
  var t2 = Ir(), n2 = Tr();
  e2.CborDecoder = class extends t2.CborDecoderBase {
    readAsMap() {
      let e3 = this.reader.u8(), t3 = e3 >> 5, n3 = e3 & 31;
      switch (t3) {
        case 5:
          return this.readMap(n3);
        default:
          throw 0;
      }
    }
    readMap(e3) {
      let t3 = this.readMinorLen(e3);
      return t3 >= 0 ? this.readMapRaw(t3) : this.readMapIndef();
    }
    readMapRaw(e3) {
      let t3 = /* @__PURE__ */ new Map();
      for (let n3 = 0; n3 < e3; n3++) {
        let e4 = this.readAny(), n4 = this.readAny();
        t3.set(e4, n4);
      }
      return t3;
    }
    readMapIndef() {
      let e3 = /* @__PURE__ */ new Map();
      for (; this.reader.peak() !== 255; ) {
        let t3 = this.readAny();
        if (this.reader.peak() === 255) throw 7;
        let n3 = this.readAny();
        e3.set(t3, n3);
      }
      return this.reader.x++, e3;
    }
    skipN(e3) {
      for (let t3 = 0; t3 < e3; t3++) this.skipAny();
    }
    skipAny() {
      this.skipAnyRaw(this.reader.u8());
    }
    skipAnyRaw(e3) {
      let t3 = e3 >> 5, n3 = e3 & 31;
      switch (t3) {
        case 0:
        case 1:
          this.skipUNint(n3);
          break;
        case 2:
          this.skipBin(n3);
          break;
        case 3:
          this.skipStr(n3);
          break;
        case 4:
          this.skipArr(n3);
          break;
        case 5:
          this.skipObj(n3);
          break;
        case 7:
          this.skipTkn(n3);
          break;
        case 6:
          this.skipTag(n3);
          break;
      }
    }
    skipMinorLen(e3) {
      if (e3 <= 23) return e3;
      switch (e3) {
        case 24:
          return this.reader.u8();
        case 25:
          return this.reader.u16();
        case 26:
          return this.reader.u32();
        case 27:
          return Number(this.reader.u64());
        case 31:
          return -1;
        default:
          throw 1;
      }
    }
    skipUNint(e3) {
      if (!(e3 <= 23)) switch (e3) {
        case 24:
          return this.reader.skip(1);
        case 25:
          return this.reader.skip(2);
        case 26:
          return this.reader.skip(4);
        case 27:
          return this.reader.skip(8);
        default:
          throw 1;
      }
    }
    skipBin(e3) {
      let t3 = this.skipMinorLen(e3);
      if (t3 >= 0) this.reader.skip(t3);
      else {
        for (; this.reader.peak() !== 255; ) this.skipBinChunk();
        this.reader.x++;
      }
    }
    skipBinChunk() {
      let e3 = this.reader.u8(), t3 = e3 >> 5, n3 = e3 & 31;
      if (t3 !== 2) throw 2;
      if (n3 > 27) throw 3;
      this.skipBin(n3);
    }
    skipStr(e3) {
      let t3 = this.skipMinorLen(e3);
      if (t3 >= 0) this.reader.skip(t3);
      else {
        for (; this.reader.peak() !== 255; ) this.skipStrChunk();
        this.reader.x++;
      }
    }
    skipStrChunk() {
      let e3 = this.reader.u8(), t3 = e3 >> 5, n3 = e3 & 31;
      if (t3 !== 3) throw 4;
      if (n3 > 27) throw 5;
      this.skipStr(n3);
    }
    skipArr(e3) {
      let t3 = this.skipMinorLen(e3);
      if (t3 >= 0) this.skipN(t3);
      else {
        for (; this.reader.peak() !== 255; ) this.skipAny();
        this.reader.x++;
      }
    }
    skipObj(e3) {
      let t3 = this.readMinorLen(e3);
      if (t3 >= 0) return this.skipN(t3 * 2);
      for (; this.reader.peak() !== 255; ) {
        if (this.skipAny(), this.reader.peak() === 255) throw 7;
        this.skipAny();
      }
      this.reader.x++;
    }
    skipTag(e3) {
      if (this.skipMinorLen(e3) < 0) throw 1;
      this.skipAny();
    }
    skipTkn(e3) {
      switch (e3) {
        case 24:
          this.reader.skip(1);
          return;
        case 25:
          this.reader.skip(2);
          return;
        case 26:
          this.reader.skip(4);
          return;
        case 27:
          this.reader.skip(8);
          return;
      }
      if (!(e3 <= 23)) throw 1;
    }
    validate(e3, t3 = 0, n3 = e3.length) {
      this.reader.reset(e3), this.reader.x = t3;
      let r2 = t3;
      if (this.skipAny(), this.reader.x - r2 !== n3) throw 8;
    }
    decodeLevel(e3) {
      return this.reader.reset(e3), this.readLevel();
    }
    readLevel() {
      let e3 = this.reader.u8(), t3 = e3 >> 5, n3 = e3 & 31;
      switch (t3) {
        case 4:
          return this.readArrLevel(n3);
        case 5:
          return this.readObjLevel(n3);
        default:
          return super.readAnyRaw(e3);
      }
    }
    readPrimitiveOrVal() {
      switch (this.reader.peak() >> 5) {
        case 4:
        case 5:
          return this.readAsValue();
        default:
          return this.readAny();
      }
    }
    readAsValue() {
      let e3 = this.reader, t3 = e3.x;
      this.skipAny();
      let r2 = e3.x;
      return new n2.JsonPackValue(e3.uint8.subarray(t3, r2));
    }
    readObjLevel(e3) {
      let t3 = this.readMinorLen(e3);
      return t3 >= 0 ? this.readObjRawLevel(t3) : this.readObjIndefLevel();
    }
    readObjRawLevel(e3) {
      let t3 = {};
      for (let n3 = 0; n3 < e3; n3++) {
        let e4 = this.key();
        t3[e4] = this.readPrimitiveOrVal();
      }
      return t3;
    }
    readObjIndefLevel() {
      let e3 = {};
      for (; this.reader.peak() !== 255; ) {
        let t3 = this.key();
        if (this.reader.peak() === 255) throw 7;
        e3[t3] = this.readPrimitiveOrVal();
      }
      return this.reader.x++, e3;
    }
    readArrLevel(e3) {
      let t3 = this.readMinorLen(e3);
      return t3 >= 0 ? this.readArrRawLevel(t3) : this.readArrIndefLevel();
    }
    readArrRawLevel(e3) {
      let t3 = [];
      for (let n3 = 0; n3 < e3; n3++) t3.push(this.readPrimitiveOrVal());
      return t3;
    }
    readArrIndefLevel() {
      let e3 = [];
      for (; this.reader.peak() !== 255; ) e3.push(this.readPrimitiveOrVal());
      return this.reader.x++, e3;
    }
    readHdr(e3) {
      let t3 = this.reader.u8();
      if (t3 >> 5 !== e3) throw 0;
      let n3 = t3 & 31;
      if (n3 < 24) return n3;
      switch (n3) {
        case 24:
          return this.reader.u8();
        case 25:
          return this.reader.u16();
        case 26:
          return this.reader.u32();
        case 27:
          return Number(this.reader.u64());
        case 31:
          return -1;
      }
      throw 1;
    }
    readStrHdr() {
      return this.readHdr(3);
    }
    readObjHdr() {
      return this.readHdr(5);
    }
    readArrHdr() {
      return this.readHdr(4);
    }
    findKey(e3) {
      let t3 = this.readObjHdr();
      for (let n3 = 0; n3 < t3; n3++) {
        if (this.key() === e3) return this;
        this.skipAny();
      }
      throw 9;
    }
    findIndex(e3) {
      if (e3 >= this.readArrHdr()) throw 10;
      for (let t3 = 0; t3 < e3; t3++) this.skipAny();
      return this;
    }
    find(e3) {
      for (let t3 = 0; t3 < e3.length; t3++) {
        let n3 = e3[t3];
        typeof n3 == `string` ? this.findKey(n3) : this.findIndex(n3);
      }
      return this;
    }
  };
})), Rr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.fromSnapshot = e2.toSnapshot = void 0, e2.toSnapshot = async ({ fs: t2, path: n2 = `/`, separator: r2 = `/` }) => {
    let i2 = await t2.lstat(n2);
    if (i2.isDirectory()) {
      let i3 = await t2.readdir(n2), a2 = {}, o2 = n2.endsWith(r2) ? n2 : n2 + r2, s2 = await Promise.all(i3.map((n3) => (0, e2.toSnapshot)({ fs: t2, path: `${o2}${n3}`, separator: r2 })));
      for (let e3 = 0; e3 < i3.length; e3++) s2[e3] && (a2[`` + i3[e3]] = s2[e3]);
      return [0, {}, a2];
    } else if (i2.isFile()) {
      let e3 = await t2.readFile(n2);
      return [1, {}, new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength)];
    } else if (i2.isSymbolicLink()) return [2, { target: await t2.readlink(n2, { encoding: `utf8` }) }];
    return null;
  }, e2.fromSnapshot = async (t2, { fs: n2, path: r2 = `/`, separator: i2 = `/` }) => {
    if (t2) switch (t2[0]) {
      case 0: {
        r2.endsWith(i2) || (r2 += i2);
        let [, , a2] = t2;
        await n2.mkdir(r2, { recursive: true });
        for (let [t3, o2] of Object.entries(a2)) await (0, e2.fromSnapshot)(o2, { fs: n2, path: `${r2}${t3}`, separator: i2 });
        break;
      }
      case 1: {
        let [, , e3] = t2;
        await n2.writeFile(r2, e3);
        break;
      }
      case 2: {
        let [, { target: e3 }] = t2;
        await n2.symlink(e3, r2);
        break;
      }
    }
  };
})), zr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.writer = void 0, e2.writer = new (Cr()).Writer(1024 * 32);
})), Br = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.fromBinarySnapshot = e2.toBinarySnapshot = e2.fromBinarySnapshotSync = e2.toBinarySnapshotSync = void 0;
  var t2 = Er(), n2 = Lr(), r2 = yr(), i2 = Rr(), a2 = zr(), o2 = new t2.CborEncoder(a2.writer), s2 = new n2.CborDecoder();
  e2.toBinarySnapshotSync = (e3) => {
    let t3 = (0, r2.toSnapshotSync)(e3);
    return o2.encode(t3);
  }, e2.fromBinarySnapshotSync = (e3, t3) => {
    let n3 = s2.decode(e3);
    (0, r2.fromSnapshotSync)(n3, t3);
  }, e2.toBinarySnapshot = async (e3) => {
    let t3 = await (0, i2.toSnapshot)(e3);
    return o2.encode(t3);
  }, e2.fromBinarySnapshot = async (e3, t3) => {
    let n3 = s2.decode(e3);
    await (0, i2.fromSnapshot)(n3, t3);
  };
})), Vr = i(((e2) => {
  s(), Object.defineProperty(e2, `__esModule`, { value: true }), e2.hasBuffer = e2.alphabet = void 0, e2.alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, e2.hasBuffer = typeof c == `function` && typeof c.from == `function`;
})), Hr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.createToBase64Bin = void 0;
  var t2 = Vr();
  e2.createToBase64Bin = (e3 = t2.alphabet, n2 = `=`) => {
    if (e3.length !== 64) throw Error(`chars must be 64 characters long`);
    let r2 = e3.split(``).map((e4) => e4.charCodeAt(0)), i2 = [];
    for (let e4 of r2) for (let t3 of r2) {
      let n3 = (e4 << 8) + t3;
      i2.push(n3);
    }
    let a2 = n2.length === 1, o2 = a2 ? n2.charCodeAt(0) : 0, s2 = a2 ? o2 << 8 | o2 : 0;
    return (e4, t3, n3, c2, l2) => {
      let u2 = n3 % 3, d2 = n3 - u2;
      for (; t3 < d2; t3 += 3) {
        let n4 = e4[t3], r3 = e4[t3 + 1], a3 = e4[t3 + 2], o3 = n4 << 4 | r3 >> 4, s3 = (r3 & 15) << 8 | a3;
        c2.setInt32(l2, (i2[o3] << 16) + i2[s3]), l2 += 4;
      }
      if (u2 === 1) {
        let t4 = e4[d2];
        a2 ? (c2.setInt32(l2, (i2[t4 << 4] << 16) + s2), l2 += 4) : (c2.setInt16(l2, i2[t4 << 4]), l2 += 2);
      } else if (u2) {
        let t4 = e4[d2], n4 = e4[d2 + 1], s3 = t4 << 4 | n4 >> 4, u3 = (n4 & 15) << 2;
        a2 ? (c2.setInt32(l2, (i2[s3] << 16) + (r2[u3] << 8) + o2), l2 += 4) : (c2.setInt16(l2, i2[s3]), l2 += 2, c2.setInt8(l2, r2[u3]), l2 += 1);
      }
      return l2;
    };
  };
})), Ur = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.toBase64Bin = void 0, e2.toBase64Bin = (0, Hr().createToBase64Bin)();
})), Wr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.JsonEncoder = void 0;
  var t2 = Ur();
  e2.JsonEncoder = class {
    constructor(e3) {
      this.writer = e3;
    }
    encode(e3) {
      let t3 = this.writer;
      return t3.reset(), this.writeAny(e3), t3.flush();
    }
    writeUnknown(e3) {
      this.writeNull();
    }
    writeAny(e3) {
      switch (typeof e3) {
        case `boolean`:
          return this.writeBoolean(e3);
        case `number`:
          return this.writeNumber(e3);
        case `string`:
          return this.writeStr(e3);
        case `object`:
          if (e3 === null) return this.writeNull();
          switch (e3.constructor) {
            case Object:
              return this.writeObj(e3);
            case Array:
              return this.writeArr(e3);
            case Uint8Array:
              return this.writeBin(e3);
            default:
              return e3 instanceof Uint8Array ? this.writeBin(e3) : Array.isArray(e3) ? this.writeArr(e3) : this.writeUnknown(e3);
          }
        case `undefined`:
          return this.writeUndef();
        default:
          return this.writeUnknown(e3);
      }
    }
    writeNull() {
      this.writer.u32(1853189228);
    }
    writeUndef() {
      let e3 = this.writer;
      e3.ensureCapacity(35);
      let t3 = e3.view, n2 = e3.x;
      t3.setUint32(n2, 577003892), n2 += 4, t3.setUint32(n2, 1631215984), n2 += 4, t3.setUint32(n2, 1886153059), n2 += 4, t3.setUint32(n2, 1635019119), n2 += 4, t3.setUint32(n2, 1848599394), n2 += 4, t3.setUint32(n2, 1869753442), n2 += 4, t3.setUint32(n2, 1634952502), n2 += 4, t3.setUint32(n2, 876296567), n2 += 4, t3.setUint16(n2, 15677), n2 += 2, e3.uint8[n2++] = 34, e3.x = n2;
    }
    writeBoolean(e3) {
      e3 ? this.writer.u32(1953658213) : this.writer.u8u32(102, 1634497381);
    }
    writeNumber(e3) {
      let t3 = e3.toString();
      this.writer.ascii(t3);
    }
    writeInteger(e3) {
      this.writeNumber(e3 >> 0 === e3 ? e3 : Math.trunc(e3));
    }
    writeUInteger(e3) {
      this.writeInteger(e3 < 0 ? -e3 : e3);
    }
    writeFloat(e3) {
      this.writeNumber(e3);
    }
    writeBin(e3) {
      let n2 = this.writer, r2 = e3.length;
      n2.ensureCapacity(41 + (r2 << 1));
      let i2 = n2.view, a2 = n2.x;
      i2.setUint32(a2, 577003892), a2 += 4, i2.setUint32(a2, 1631215984), a2 += 4, i2.setUint32(a2, 1886153059), a2 += 4, i2.setUint32(a2, 1635019119), a2 += 4, i2.setUint32(a2, 1848602467), a2 += 4, i2.setUint32(a2, 1952805933), a2 += 4, i2.setUint32(a2, 1937011301), a2 += 4, i2.setUint32(a2, 1634548578), a2 += 4, i2.setUint32(a2, 1634952502), a2 += 4, i2.setUint16(a2, 13356), a2 += 2, a2 = (0, t2.toBase64Bin)(e3, 0, r2, i2, a2), n2.uint8[a2++] = 34, n2.x = a2;
    }
    writeStr(e3) {
      let t3 = this.writer, n2 = e3.length;
      if (t3.ensureCapacity(n2 * 4 + 2), n2 < 256) {
        let r3 = t3.x, i2 = r3, a2 = t3.uint8;
        a2[i2++] = 34;
        for (let o2 = 0; o2 < n2; o2++) {
          let n3 = e3.charCodeAt(o2);
          switch (n3) {
            case 34:
            case 92:
              a2[i2++] = 92;
              break;
          }
          if (n3 < 32 || n3 > 126) {
            t3.x = r3;
            let n4 = JSON.stringify(e3);
            t3.ensureCapacity(n4.length * 4 + 4), t3.utf8(n4);
            return;
          } else a2[i2++] = n3;
        }
        a2[i2++] = 34, t3.x = i2;
        return;
      }
      let r2 = JSON.stringify(e3);
      t3.ensureCapacity(r2.length * 4 + 4), t3.utf8(r2);
    }
    writeAsciiStr(e3) {
      let t3 = e3.length, n2 = this.writer;
      n2.ensureCapacity(t3 * 2 + 2);
      let r2 = n2.uint8, i2 = n2.x;
      r2[i2++] = 34;
      for (let n3 = 0; n3 < t3; n3++) {
        let t4 = e3.charCodeAt(n3);
        switch (t4) {
          case 34:
          case 92:
            r2[i2++] = 92;
            break;
        }
        r2[i2++] = t4;
      }
      r2[i2++] = 34, n2.x = i2;
    }
    writeArr(e3) {
      let t3 = this.writer;
      t3.u8(91);
      let n2 = e3.length - 1;
      for (let r2 = 0; r2 < n2; r2++) this.writeAny(e3[r2]), t3.u8(44);
      n2 >= 0 && this.writeAny(e3[n2]), t3.u8(93);
    }
    writeArrSeparator() {
      this.writer.u8(44);
    }
    writeObj(e3) {
      let t3 = this.writer, n2 = Object.keys(e3), r2 = n2.length;
      if (!r2) return t3.u16(31613);
      t3.u8(123);
      for (let i2 = 0; i2 < r2; i2++) {
        let r3 = n2[i2], a2 = e3[r3];
        this.writeStr(r3), t3.u8(58), this.writeAny(a2), t3.u8(44);
      }
      t3.uint8[t3.x - 1] = 125;
    }
    writeObjSeparator() {
      this.writer.u8(44);
    }
    writeObjKeySeparator() {
      this.writer.u8(58);
    }
    writeStartStr() {
      throw Error(`Method not implemented.`);
    }
    writeStrChunk(e3) {
      throw Error(`Method not implemented.`);
    }
    writeEndStr() {
      throw Error(`Method not implemented.`);
    }
    writeStartBin() {
      throw Error(`Method not implemented.`);
    }
    writeBinChunk(e3) {
      throw Error(`Method not implemented.`);
    }
    writeEndBin() {
      throw Error(`Method not implemented.`);
    }
    writeStartArr() {
      this.writer.u8(91);
    }
    writeArrChunk(e3) {
      throw Error(`Method not implemented.`);
    }
    writeEndArr() {
      this.writer.u8(93);
    }
    writeStartObj() {
      this.writer.u8(123);
    }
    writeObjChunk(e3, t3) {
      throw Error(`Method not implemented.`);
    }
    writeEndObj() {
      this.writer.u8(125);
    }
  };
})), Gr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.createFromBase64Bin = void 0;
  var t2 = Vr();
  e2.createFromBase64Bin = (e3 = t2.alphabet, n2 = `=`) => {
    if (e3.length !== 64) throw Error(`chars must be 64 characters long`);
    let r2 = 0;
    for (let t3 = 0; t3 < e3.length; t3++) r2 = Math.max(r2, e3.charCodeAt(t3));
    let i2 = [];
    for (let e4 = 0; e4 <= r2; e4 += 1) i2[e4] = -1;
    for (let t3 = 0; t3 < e3.length; t3++) i2[e3.charCodeAt(t3)] = t3;
    let a2 = n2.length === 1 ? n2.charCodeAt(0) : 0;
    return (e4, t3, n3) => {
      if (!n3) return new Uint8Array();
      let r3 = 0;
      if (n3 % 4 != 0) r3 = 4 - n3 % 4, n3 += r3;
      else {
        let i3 = t3 + n3 - 1;
        e4.getUint8(i3) === a2 && (r3 = 1, n3 > 1 && e4.getUint8(i3 - 1) === a2 && (r3 = 2));
      }
      if (n3 % 4 != 0) throw Error(`Base64 string length must be a multiple of 4`);
      let o2 = t3 + n3 - (r3 ? 4 : 0), s2 = (n3 >> 2) * 3 - r3, c2 = new Uint8Array(s2), l2 = 0, u2 = t3;
      for (; u2 < o2; u2 += 4) {
        let t4 = e4.getUint32(u2), n4 = t4 >>> 24, r4 = t4 >>> 16 & 255, a3 = t4 >>> 8 & 255, o3 = t4 & 255, s3 = i2[n4], d3 = i2[r4], f3 = i2[a3], p3 = i2[o3];
        if (s3 < 0 || d3 < 0 || f3 < 0 || p3 < 0) throw Error(`INVALID_BASE64_SEQ`);
        c2[l2] = s3 << 2 | d3 >> 4, c2[l2 + 1] = d3 << 4 | f3 >> 2, c2[l2 + 2] = f3 << 6 | p3, l2 += 3;
      }
      if (!r3) return c2;
      if (r3 === 1) {
        let t4 = e4.getUint16(o2), n4 = t4 >> 8, r4 = t4 & 255, a3 = e4.getUint8(o2 + 2), s3 = i2[n4], u3 = i2[r4], d3 = i2[a3];
        if (s3 < 0 || u3 < 0 || d3 < 0) throw Error(`INVALID_BASE64_SEQ`);
        return c2[l2] = s3 << 2 | u3 >> 4, c2[l2 + 1] = u3 << 4 | d3 >> 2, c2;
      }
      let d2 = e4.getUint16(o2), f2 = d2 >> 8, p2 = d2 & 255, m2 = i2[f2], h2 = i2[p2];
      if (m2 < 0 || h2 < 0) throw Error(`INVALID_BASE64_SEQ`);
      return c2[l2] = m2 << 2 | h2 >> 4, c2;
    };
  };
})), Kr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.fromBase64Bin = void 0, e2.fromBase64Bin = (0, Gr().createFromBase64Bin)();
})), qr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.findEndingQuote = void 0, e2.findEndingQuote = (e3, t2) => {
    let n2 = e3.length, r2 = e3[t2], i2 = 0;
    for (; t2 < n2 && !(r2 === 34 && i2 !== 92); ) i2 = r2 === 92 && i2 === 92 ? 0 : r2, r2 = e3[++t2];
    if (t2 === n2) throw Error(`Invalid JSON`);
    return t2;
  };
})), Jr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.JsonDecoder = e2.readKey = void 0;
  var t2 = jr(), n2 = Mr(), r2 = Kr(), i2 = qr(), a2 = /\\(b|f|n|r|t|"|\/|\\)/g, o2 = (e3) => {
    switch (e3) {
      case `\\b`:
        return `\b`;
      case `\\f`:
        return `\f`;
      case `\\n`:
        return `
`;
      case `\\r`:
        return `\r`;
      case `\\t`:
        return `	`;
      case `\\"`:
        return `"`;
      case `\\/`:
        return `/`;
      case `\\\\`:
        return `\\`;
    }
    return e3;
  }, s2 = (e3, t3) => e3[t3] === 100 && e3[t3 + 1] === 97 && e3[t3 + 2] === 116 && e3[t3 + 3] === 97 && e3[t3 + 4] === 58 && e3[t3 + 5] === 97 && e3[t3 + 6] === 112 && e3[t3 + 7] === 112 && e3[t3 + 8] === 108 && e3[t3 + 9] === 105 && e3[t3 + 10] === 99 && e3[t3 + 11] === 97 && e3[t3 + 12] === 116 && e3[t3 + 13] === 105 && e3[t3 + 14] === 111 && e3[t3 + 15] === 110 && e3[t3 + 16] === 47 && e3[t3 + 17] === 111 && e3[t3 + 18] === 99 && e3[t3 + 19] === 116 && e3[t3 + 20] === 101 && e3[t3 + 21] === 116 && e3[t3 + 22] === 45 && e3[t3 + 23] === 115 && e3[t3 + 24] === 116 && e3[t3 + 25] === 114 && e3[t3 + 26] === 101 && e3[t3 + 27] === 97 && e3[t3 + 28] === 109 && e3[t3 + 29] === 59 && e3[t3 + 30] === 98 && e3[t3 + 31] === 97 && e3[t3 + 32] === 115 && e3[t3 + 33] === 101 && e3[t3 + 34] === 54 && e3[t3 + 35] === 52 && e3[t3 + 36] === 44, c2 = (e3, t3) => e3[t3++] === 97 && e3[t3++] === 116 && e3[t3++] === 97 && e3[t3++] === 58 && e3[t3++] === 97 && e3[t3++] === 112 && e3[t3++] === 112 && e3[t3++] === 108 && e3[t3++] === 105 && e3[t3++] === 99 && e3[t3++] === 97 && e3[t3++] === 116 && e3[t3++] === 105 && e3[t3++] === 111 && e3[t3++] === 110 && e3[t3++] === 47 && e3[t3++] === 99 && e3[t3++] === 98 && e3[t3++] === 111 && e3[t3++] === 114 && e3[t3++] === 44 && e3[t3++] === 98 && e3[t3++] === 97 && e3[t3++] === 115 && e3[t3++] === 101 && e3[t3++] === 54 && e3[t3++] === 52 && e3[t3++] === 59 && e3[t3++] === 57 && e3[t3++] === 119 && e3[t3++] === 61 && e3[t3++] === 61 && e3[t3++] === 34, l2 = String.fromCharCode;
  e2.readKey = (e3) => {
    let t3 = e3.uint8, n3 = t3.length, r3 = [], i3 = e3.x, a3 = 0;
    for (; i3 < n3; ) {
      let e4 = t3[i3++];
      if (e4 & 128) {
        let n4 = t3[i3++] & 63;
        if ((e4 & 224) == 192) e4 = (e4 & 31) << 6 | n4;
        else {
          let a4 = t3[i3++] & 63;
          if ((e4 & 240) == 224) e4 = (e4 & 31) << 12 | n4 << 6 | a4;
          else if ((e4 & 248) == 240) {
            let o3 = t3[i3++] & 63, s3 = (e4 & 7) << 18 | n4 << 12 | a4 << 6 | o3;
            if (s3 > 65535) {
              s3 -= 65536;
              let t4 = s3 >>> 10 & 1023 | 55296;
              s3 = 56320 | s3 & 1023, r3.push(t4), e4 = s3;
            } else e4 = s3;
          }
        }
      } else if (a3 === 92) {
        switch (e4) {
          case 98:
            e4 = 8;
            break;
          case 102:
            e4 = 12;
            break;
          case 110:
            e4 = 10;
            break;
          case 114:
            e4 = 13;
            break;
          case 116:
            e4 = 9;
            break;
          case 34:
            e4 = 34;
            break;
          case 47:
            e4 = 47;
            break;
          case 92:
            e4 = 92;
            break;
          default:
            throw Error(`Invalid JSON`);
        }
        a3 = 0;
      } else {
        if (e4 === 34) break;
        if (a3 = e4, a3 === 92) continue;
      }
      r3.push(e4);
    }
    return e3.x = i3, l2.apply(String, r3);
  }, e2.JsonDecoder = class {
    constructor() {
      this.reader = new n2.Reader();
    }
    read(e3) {
      return this.reader.reset(e3), this.readAny();
    }
    decode(e3) {
      return this.reader.reset(e3), this.readAny();
    }
    readAny() {
      this.skipWhitespace();
      let e3 = this.reader, t3 = e3.x, n3 = e3.uint8, r3 = n3[t3];
      switch (r3) {
        case 34:
          if (n3[t3 + 1] === 100) {
            let r4 = this.tryReadBin();
            if (r4) return r4;
            if (c2(n3, t3 + 2)) {
              e3.x = t3 + 35;
              return;
            }
          }
          return this.readStr();
        case 91:
          return this.readArr();
        case 102:
          return this.readFalse();
        case 110:
          return this.readNull();
        case 116:
          return this.readTrue();
        case 123:
          return this.readObj();
        default:
          if (r3 >= 48 && r3 <= 57 || r3 === 45) return this.readNum();
          throw Error(`Invalid JSON`);
      }
    }
    skipWhitespace() {
      let e3 = this.reader, t3 = e3.uint8, n3 = e3.x, r3 = 0;
      for (; ; ) switch (r3 = t3[n3], r3) {
        case 32:
        case 9:
        case 10:
        case 13:
          n3++;
          continue;
        default:
          e3.x = n3;
          return;
      }
    }
    readNull() {
      if (this.reader.u32() !== 1853189228) throw Error(`Invalid JSON`);
      return null;
    }
    readTrue() {
      if (this.reader.u32() !== 1953658213) throw Error(`Invalid JSON`);
      return true;
    }
    readFalse() {
      let e3 = this.reader;
      if (e3.u8() !== 102 || e3.u32() !== 1634497381) throw Error(`Invalid JSON`);
      return false;
    }
    readBool() {
      let e3 = this.reader;
      switch (e3.uint8[e3.x]) {
        case 102:
          return this.readFalse();
        case 116:
          return this.readTrue();
        default:
          throw Error(`Invalid JSON`);
      }
    }
    readNum() {
      let e3 = this.reader, t3 = e3.uint8, n3 = e3.x, r3 = t3[n3++], i3 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let a3 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let o3 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let s3 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let c3 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let u2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let d2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let f2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let p2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let m2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let h2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let g2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let _2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let v2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let y2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let b2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let x2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let S2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let C2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let w2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let T2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let E2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let D2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      let O2 = r3;
      if (r3 = t3[n3++], !r3 || (r3 < 45 || r3 > 57) && r3 !== 43 && r3 !== 69 && r3 !== 101) {
        e3.x = n3 - 1;
        let t4 = +l2(i3, a3, o3, s3, c3, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2, O2);
        if (t4 !== t4) throw Error(`Invalid JSON`);
        return t4;
      }
      throw Error(`Invalid JSON`);
    }
    readStr() {
      let e3 = this.reader, n3 = e3.uint8;
      if (n3[e3.x++] !== 34) throw Error(`Invalid JSON`);
      let r3 = e3.x, s3 = (0, i2.findEndingQuote)(n3, r3), c3 = (0, t2.decodeUtf8)(n3, r3, s3 - r3);
      return c3 = c3.replace(a2, o2), e3.x = s3 + 1, c3;
    }
    tryReadBin() {
      let e3 = this.reader, t3 = e3.uint8, n3 = e3.x;
      if (t3[n3++] !== 34 || !s2(t3, n3)) return;
      n3 += 37;
      let a3 = n3;
      n3 = (0, i2.findEndingQuote)(t3, n3), e3.x = a3;
      let o3 = (0, r2.fromBase64Bin)(e3.view, a3, n3 - a3);
      return e3.x = n3 + 1, o3;
    }
    readBin() {
      let e3 = this.reader, t3 = e3.uint8, n3 = e3.x;
      if (t3[n3++] !== 34 || !s2(t3, n3)) throw Error(`Invalid JSON`);
      n3 += 37;
      let a3 = n3;
      n3 = (0, i2.findEndingQuote)(t3, n3), e3.x = a3;
      let o3 = (0, r2.fromBase64Bin)(e3.view, a3, n3 - a3);
      return e3.x = n3 + 1, o3;
    }
    readArr() {
      let e3 = this.reader;
      if (e3.u8() !== 91) throw Error(`Invalid JSON`);
      let t3 = [], n3 = e3.uint8, r3 = true;
      for (; ; ) {
        this.skipWhitespace();
        let i3 = n3[e3.x];
        if (i3 === 93) return e3.x++, t3;
        if (i3 === 44) e3.x++;
        else if (!r3) throw Error(`Invalid JSON`);
        this.skipWhitespace(), t3.push(this.readAny()), r3 = false;
      }
    }
    readObj() {
      let t3 = this.reader;
      if (t3.u8() !== 123) throw Error(`Invalid JSON`);
      let n3 = {}, r3 = t3.uint8, i3 = true;
      for (; ; ) {
        this.skipWhitespace();
        let a3 = r3[t3.x];
        if (a3 === 125) return t3.x++, n3;
        if (a3 === 44) t3.x++;
        else if (!i3) throw Error(`Invalid JSON`);
        if (this.skipWhitespace(), a3 = r3[t3.x++], a3 !== 34) throw Error(`Invalid JSON`);
        let o3 = (0, e2.readKey)(t3);
        if (o3 === `__proto__` || (this.skipWhitespace(), t3.u8() !== 58)) throw Error(`Invalid JSON`);
        this.skipWhitespace(), n3[o3] = this.readAny(), i3 = false;
      }
    }
  };
})), Yr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.fromJsonSnapshot = e2.toJsonSnapshot = e2.fromJsonSnapshotSync = e2.toJsonSnapshotSync = void 0;
  var t2 = Wr(), n2 = Jr(), r2 = yr(), i2 = Rr(), a2 = zr(), o2 = new t2.JsonEncoder(a2.writer), s2 = new n2.JsonDecoder();
  e2.toJsonSnapshotSync = (e3) => {
    let t3 = (0, r2.toSnapshotSync)(e3);
    return o2.encode(t3);
  }, e2.fromJsonSnapshotSync = (e3, t3) => {
    let n3 = s2.read(e3);
    (0, r2.fromSnapshotSync)(n3, t3);
  }, e2.toJsonSnapshot = async (e3) => {
    let t3 = await (0, i2.toSnapshot)(e3);
    return o2.encode(t3);
  }, e2.fromJsonSnapshot = async (e3, t3) => {
    let n3 = s2.read(e3);
    await (0, i2.fromSnapshot)(n3, t3);
  };
})), Xr = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true });
  var n2 = (J(), e(f));
  n2.__exportStar(vr(), t2), n2.__exportStar(yr(), t2), n2.__exportStar(Br(), t2), n2.__exportStar(Yr(), t2);
})), Zr = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.getWriteFileOptions = e2.writeFileDefaults = e2.getRealpathOptsAndCb = e2.getRealpathOptions = e2.getStatfsOptsAndCb = e2.getStatfsOptions = e2.getStatOptsAndCb = e2.getStatOptions = e2.getAppendFileOptsAndCb = e2.getAppendFileOpts = e2.getOpendirOptsAndCb = e2.getOpendirOptions = e2.getReaddirOptsAndCb = e2.getReaddirOptions = e2.getReadFileOptions = e2.getRmOptsAndCb = e2.getRmdirOptions = e2.getDefaultOptsAndCb = e2.getDefaultOpts = e2.optsDefaults = e2.getMkdirOptions = void 0, e2.getOptions = a2, e2.optsGenerator = o2, e2.optsAndCbGenerator = s2;
  var t2 = $(), n2 = ur(), r2 = { mode: 511, recursive: false };
  e2.getMkdirOptions = (e3) => typeof e3 == `number` ? Object.assign({}, r2, { mode: e3 }) : Object.assign({}, r2, e3);
  var i2 = (e3) => `Expected options to be either an object or a string, but got ${e3} instead`;
  function a2(e3, n3) {
    let r3;
    if (n3) {
      let t3 = typeof n3;
      switch (t3) {
        case `string`:
          r3 = Object.assign({}, e3, { encoding: n3 });
          break;
        case `object`:
          r3 = Object.assign({}, e3, n3);
          break;
        default:
          throw TypeError(i2(t3));
      }
    } else return e3;
    return r3.encoding !== `buffer` && (0, t2.assertEncoding)(r3.encoding), r3;
  }
  function o2(e3) {
    return (t3) => a2(e3, t3);
  }
  function s2(e3) {
    return (t3, r3) => typeof t3 == `function` ? [e3(), t3] : [e3(t3), (0, n2.validateCallback)(r3)];
  }
  e2.optsDefaults = { encoding: `utf8` }, e2.getDefaultOpts = o2(e2.optsDefaults), e2.getDefaultOptsAndCb = s2(e2.getDefaultOpts);
  var c2 = { recursive: false };
  e2.getRmdirOptions = (e3) => Object.assign({}, c2, e3), e2.getRmOptsAndCb = s2(o2(e2.optsDefaults)), e2.getReadFileOptions = o2({ flag: `r` }), e2.getReaddirOptions = o2({ encoding: `utf8`, recursive: false, withFileTypes: false }), e2.getReaddirOptsAndCb = s2(e2.getReaddirOptions), e2.getOpendirOptions = o2({ encoding: `utf8`, bufferSize: 32, recursive: false }), e2.getOpendirOptsAndCb = s2(e2.getOpendirOptions), e2.getAppendFileOpts = o2({ encoding: `utf8`, mode: 438, flag: t2.FLAGS[t2.FLAGS.a] }), e2.getAppendFileOptsAndCb = s2(e2.getAppendFileOpts);
  var l2 = { bigint: false };
  e2.getStatOptions = (e3 = {}) => Object.assign({}, l2, e3), e2.getStatOptsAndCb = (t3, r3) => typeof t3 == `function` ? [(0, e2.getStatOptions)(), t3] : [(0, e2.getStatOptions)(t3), (0, n2.validateCallback)(r3)];
  var u2 = { bigint: false };
  e2.getStatfsOptions = (e3 = {}) => Object.assign({}, u2, e3), e2.getStatfsOptsAndCb = (t3, r3) => typeof t3 == `function` ? [(0, e2.getStatfsOptions)(), t3] : [(0, e2.getStatfsOptions)(t3), (0, n2.validateCallback)(r3)];
  var d2 = e2.optsDefaults;
  e2.getRealpathOptions = o2(d2), e2.getRealpathOptsAndCb = s2(e2.getRealpathOptions), e2.writeFileDefaults = { encoding: `utf8`, mode: 438, flag: t2.FLAGS[t2.FLAGS.w] }, e2.getWriteFileOptions = o2(e2.writeFileDefaults);
})), Qr = i(((e2) => {
  u(), Object.defineProperty(e2, `__esModule`, { value: true }), e2.Dir = void 0;
  var t2 = ur(), n2 = yn(), r2 = he();
  e2.Dir = class {
    constructor(e3, t3) {
      this.link = e3, this.options = t3, this.iteratorInfo = [], this.closed = false, this.operationQueue = null, this.path = e3.getPath(), this.iteratorInfo.push(e3.children[Symbol.iterator]());
    }
    closeBase() {
    }
    readBase(e3) {
      let t3, r3, i2, a2;
      do {
        do
          if ({ done: t3, value: r3 } = e3[e3.length - 1].next(), !t3) [i2, a2] = r3;
          else break;
        while (i2 === `.` || i2 === `..`);
        if (t3) {
          if (e3.pop(), e3.length === 0) break;
          t3 = false;
        } else return this.options.recursive && a2.children.size && e3.push(a2.children[Symbol.iterator]()), n2.default.build(a2, this.options.encoding);
      } while (!t3);
      return null;
    }
    close(e3) {
      if (e3 === void 0) return this.closed ? Promise.reject(new r2.Error(`ERR_DIR_CLOSED`)) : new Promise((e4, t3) => {
        this.close((n3) => {
          n3 ? t3(n3) : e4();
        });
      });
      if ((0, t2.validateCallback)(e3), this.closed) {
        l.nextTick(e3, new r2.Error(`ERR_DIR_CLOSED`));
        return;
      }
      if (this.operationQueue !== null) {
        this.operationQueue.push(() => {
          this.close(e3);
        });
        return;
      }
      this.closed = true;
      try {
        this.closeBase(), l.nextTick(e3);
      } catch (t3) {
        l.nextTick(e3, t3);
      }
    }
    closeSync() {
      if (this.closed) throw new r2.Error(`ERR_DIR_CLOSED`);
      if (this.operationQueue !== null) throw new r2.Error(`ERR_DIR_CONCURRENT_OPERATION`);
      this.closed = true, this.closeBase();
    }
    read(e3) {
      if (e3 === void 0) return new Promise((e4, t3) => {
        this.read((n3, r3) => {
          n3 ? t3(n3) : e4(r3 ?? null);
        });
      });
      if ((0, t2.validateCallback)(e3), this.closed) {
        l.nextTick(e3, new r2.Error(`ERR_DIR_CLOSED`));
        return;
      }
      if (this.operationQueue !== null) {
        this.operationQueue.push(() => {
          this.read(e3);
        });
        return;
      }
      this.operationQueue = [];
      try {
        let t3 = this.readBase(this.iteratorInfo);
        l.nextTick(() => {
          let n3 = this.operationQueue;
          this.operationQueue = null;
          for (let e4 of n3) e4();
          e3(null, t3);
        });
      } catch (t3) {
        l.nextTick(() => {
          let n3 = this.operationQueue;
          this.operationQueue = null;
          for (let e4 of n3) e4();
          e3(t3);
        });
      }
    }
    readSync() {
      if (this.closed) throw new r2.Error(`ERR_DIR_CLOSED`);
      if (this.operationQueue !== null) throw new r2.Error(`ERR_DIR_CONCURRENT_OPERATION`);
      return this.readBase(this.iteratorInfo);
    }
    [Symbol.asyncIterator]() {
      return { next: async () => {
        try {
          let e3 = await this.read();
          return e3 === null ? { done: true, value: void 0 } : { done: false, value: e3 };
        } catch (e3) {
          throw e3;
        }
      }, [Symbol.asyncIterator]() {
        return this;
      } };
    }
    [Symbol.asyncDispose]() {
      return this.close();
    }
    [Symbol.dispose]() {
      this.closeSync();
    }
  };
})), $r = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.toMatcher = e2.toRegex = void 0;
  var t2 = (e3) => /[.^$+{}()|\\]/.test(e3) ? `\\${e3}` : e3, n2 = (t3, n3, r3, i2) => {
    let a2 = n3, o2 = [], s2 = ``, c2 = 1;
    for (; a2 < t3.length && c2 > 0; ) {
      let e3 = t3[a2];
      if (e3 === `(`) c2++, s2 += e3, a2++;
      else if (e3 === `)`) if (c2--, c2 === 0) {
        o2.push(s2), a2++;
        break;
      } else s2 += e3, a2++;
      else e3 === `|` && c2 === 1 ? (o2.push(s2), s2 = ``, a2++) : (s2 += e3, a2++);
    }
    if (c2 !== 0) return;
    let l2 = ``, u2 = o2.length;
    for (let t4 = 0; t4 < u2; t4++) l2 += (l2 ? `|` : ``) + (0, e2.toRegex)(o2[t4], i2).source.replace(/^\^/, ``).replace(/\$$/, ``);
    switch (r3) {
      case `?`:
        return [`(?:${l2})?`, a2];
      case `*`:
        return [`(?:${l2})*`, a2];
      case `+`:
        return [`(?:${l2})+`, a2];
      case `@`:
        return [`(?:${l2})`, a2];
      case `!`:
        return [`(?!${l2})[^/]*`, a2];
    }
  };
  e2.toRegex = (r3, i2) => {
    let a2 = ``, o2 = 0, s2 = () => {
      o2++;
      let n3 = [], a3 = ``, s3 = false;
      for (; o2 < r3.length; ) {
        let e3 = r3[o2];
        if (e3 === `}`) {
          n3.push(a3), o2++, s3 = true;
          break;
        }
        if (e3 === `,`) {
          n3.push(a3), a3 = ``, o2++;
          continue;
        }
        a3 += e3, o2++;
      }
      return s3 ? `(?:${n3.map((t3) => (0, e2.toRegex)(t3, i2).source.replace(/^\^/, ``).replace(/\$$/, ``)).join(`|`)})` : `\\{` + t2(a3);
    }, c2 = !!i2?.extglob;
    for (; o2 < r3.length; ) {
      let e3 = r3[o2];
      if (c2 && r3[o2 + 1] === `(` && (e3 === `?` || e3 === `*` || e3 === `+` || e3 === `@` || e3 === `!`)) {
        let t3 = n2(r3, o2 + 2, e3, i2);
        if (t3) {
          a2 += t3[0], o2 = t3[1];
          continue;
        }
      }
      switch (e3) {
        case `*`:
          if (r3[o2 + 1] === `*`) {
            let e4 = o2 + 2;
            for (; r3[e4] === `*`; ) e4++;
            r3[e4] === `/` ? (a2 += `(?:.*/)?`, o2 = e4 + 1) : (a2 += `.*`, o2 = e4);
          } else a2 += `[^/]*`, o2++;
          break;
        case `?`:
          a2 += `[^/]`, o2++;
          break;
        case `[`: {
          let e4 = `[`;
          for (o2++, o2 < r3.length && r3[o2] === `!` && (e4 += `^`, o2++), o2 < r3.length && r3[o2] === `]` && (e4 += `]`, o2++); o2 < r3.length && r3[o2] !== `]`; ) {
            let t3 = r3[o2];
            e4 += t3 === `\\` ? `\\\\` : t3, o2++;
          }
          if (o2 < r3.length && r3[o2] === `]`) e4 += `]`, o2++;
          else {
            a2 += `\\[`;
            continue;
          }
          a2 += e4;
          break;
        }
        case `{`:
          a2 += s2();
          break;
        case `/`:
          a2 += `/`, o2++;
          break;
        case `.`:
        case `^`:
        case `$`:
        case `+`:
        case `(`:
        case `)`:
        case `|`:
        case `\\`:
          a2 += `\\${e3}`, o2++;
          break;
        default:
          a2 += e3, o2++;
          break;
      }
    }
    let l2 = i2?.nocase ? `i` : ``;
    return RegExp(`^` + a2 + `$`, l2);
  };
  var r2 = /^\/(.{1,4096})\/([gimsuy]{0,6})$/;
  e2.toMatcher = (t3, n3) => {
    let i2 = [], a2 = Array.isArray(t3) ? t3 : [t3];
    for (let t4 of a2) if (typeof t4 == `string`) {
      let a3 = r2.exec(t4);
      if (a3) {
        let [, e3, t5] = a3;
        i2.push(new RegExp(e3, t5));
      } else i2.push((0, e2.toRegex)(t4, n3));
    } else i2.push(t4);
    return i2.length ? Function(`p`, `return ` + i2.map((e3) => e3 + `.test(p)`).join(`||`)) : () => false;
  };
})), ei = i(((e2) => {
  u(), Object.defineProperty(e2, `__esModule`, { value: true }), e2.globSync = f2;
  var t2 = Y(), n2 = $r(), r2 = ur(), i2 = t2.posix.join, a2 = t2.posix.relative, o2 = t2.posix.resolve;
  function s2(e3, t3) {
    return (0, n2.toRegex)(t3).test(e3);
  }
  function c2(e3, t3) {
    return t3 ? typeof t3 == `function` ? t3(e3) : (Array.isArray(t3) ? t3 : [t3]).some((t4) => s2(e3, t4)) : false;
  }
  function d2(e3, t3, n3, o3, u2 = 0) {
    let f3 = [], p2 = o3.maxdepth ?? 1 / 0, m2 = o3.cwd ? (0, r2.pathToFilename)(o3.cwd) : l.cwd();
    if (u2 > p2) return f3;
    try {
      let r3 = e3.readdirSync(t3, { withFileTypes: true });
      for (let l2 of r3) {
        let r4 = i2(t3, l2.name.toString()), h2 = a2(m2, r4);
        if (!c2(h2, o3.exclude) && (n3.some((e4) => s2(h2, e4)) && f3.push(h2), l2.isDirectory() && u2 < p2)) {
          let t4 = d2(e3, r4, n3, o3, u2 + 1);
          f3.push(...t4);
        }
      }
    } catch {
    }
    return f3;
  }
  function f2(e3, n3, i3 = {}) {
    let a3 = o2(i3.cwd ? (0, r2.pathToFilename)(i3.cwd) : l.cwd()), s3 = { cwd: a3, exclude: i3.exclude, maxdepth: i3.maxdepth, withFileTypes: i3.withFileTypes || false }, c3 = [];
    if (t2.posix.isAbsolute(n3)) {
      let r3 = t2.posix.dirname(n3), i4 = d2(e3, r3, [t2.posix.basename(n3)], { ...s3, cwd: r3 });
      c3.push(...i4.map((e4) => t2.posix.resolve(r3, e4)));
    } else {
      let t3 = d2(e3, a3, [n3.replace(/^\.\//, ``)], s3);
      c3.push(...t3);
    }
    return c3 = [...new Set(c3)].sort(), c3;
  }
})), ti = i(((e2) => {
  a(), Object.defineProperty(e2, `__esModule`, { value: true }), e2.FSWatcher = e2.StatWatcher = e2.Volume = void 0, e2.pathToSteps = L2, e2.dataToStr = R2, e2.toUnixTimestamp = z2;
  var t2 = Y(), n2 = _n(), r2 = hn(), i2 = vn(), s2 = yn(), c2 = bn(), l2 = Z(), u2 = xn(), d2 = cr(), f2 = $(), p2 = lr(), m2 = dr(), h2 = me(), g2 = fr(), _2 = _r(), v2 = Xr(), y2 = $(), b2 = he(), x2 = Zr(), S2 = ur(), C2 = Qr(), w2 = t2.resolve, { O_SYMLINK: T2, F_OK: E2, R_OK: D2, W_OK: O2, X_OK: k2, COPYFILE_EXCL: A2, COPYFILE_FICLONE_FORCE: j2 } = f2.constants;
  t2.posix ? t2.posix.sep : t2.sep;
  var M2 = t2.posix ? t2.posix.relative : t2.relative, N2 = t2.posix ? t2.posix.join : t2.join, P2 = t2.posix ? t2.posix.dirname : t2.dirname, F2 = t2.posix ? t2.posix.normalize : t2.normalize, I2 = 128;
  function L2(e3) {
    return (0, n2.filenameToSteps)((0, S2.pathToFilename)(e3));
  }
  function R2(e3, t3 = f2.ENCODING_UTF8) {
    return l2.Buffer.isBuffer(e3) ? e3.toString(t3) : e3 instanceof Uint8Array ? (0, l2.bufferFrom)(e3).toString(t3) : String(e3);
  }
  function z2(e3) {
    if (typeof e3 == `string` && +e3 == e3) return +e3;
    if (e3 instanceof Date) return e3.getTime() / 1e3;
    if (isFinite(e3)) return e3 < 0 ? Date.now() / 1e3 : e3;
    throw Error(`Cannot parse time: ` + e3);
  }
  function B2(e3) {
    if (typeof e3 != `number`) throw TypeError(y2.ERRSTR.UID);
  }
  function V2(e3) {
    if (typeof e3 != `number`) throw TypeError(y2.ERRSTR.GID);
  }
  var H2 = class {
    get promises() {
      if (this.promisesApi === null) throw Error(`Promise is not supported in this environment.`);
      return this.promisesApi;
    }
    constructor(e3 = new n2.Superblock()) {
      this._core = e3, this.promisesApi = new g2.FsPromises(this, m2.FileHandle), this.openSync = (e4, t3, n3 = 438) => {
        let r3 = (0, S2.modeToNumber)(n3), i3 = (0, S2.pathToFilename)(e4), a3 = (0, S2.flagsToNumber)(t3);
        return this._core.open(i3, a3, r3, !(a3 & T2));
      }, this.open = (e4, t3, n3, r3) => {
        let i3 = n3, a3 = r3;
        typeof n3 == `function` && (i3 = 438, a3 = n3), i3 || (i3 = 438);
        let o3 = (0, S2.modeToNumber)(i3), s3 = (0, S2.pathToFilename)(e4), c4 = (0, S2.flagsToNumber)(t3);
        this.wrapAsync(this._core.open, [s3, c4, o3, !(c4 & T2)], a3);
      }, this.closeSync = (e4) => {
        this._core.close(e4);
      }, this.close = (e4, t3) => {
        (0, n2.validateFd)(e4);
        let r3 = this._core.getFileByFdOrThrow(e4, `close`);
        this.wrapAsync(this._core.close, [r3.fd], t3);
      }, this.readSync = (e4, t3, r3, i3, a3) => ((0, n2.validateFd)(e4), this._core.read(e4, t3, r3, i3, a3)), this.read = (e4, t3, n3, r3, i3, a3) => {
        if ((0, S2.validateCallback)(a3), r3 === 0) return queueMicrotask(() => {
          a3 && a3(null, 0, t3);
        });
        Promise.resolve().then(() => {
          try {
            a3(null, this._core.read(e4, t3, n3, r3, i3), t3);
          } catch (e5) {
            a3(e5);
          }
        });
      }, this.readv = (e4, t3, n3, r3) => {
        let i3 = n3, a3 = r3;
        typeof n3 == `function` && ([i3, a3] = [null, n3]), (0, S2.validateCallback)(a3), Promise.resolve().then(() => {
          try {
            let n4 = this._core.readv(e4, t3, i3);
            a3(null, n4, t3);
          } catch (e5) {
            a3(e5);
          }
        });
      }, this.readvSync = (e4, t3, r3) => ((0, n2.validateFd)(e4), this._core.readv(e4, t3, r3 ?? null)), this._readfile = (e4, t3, r3) => {
        let i3, a3 = typeof e4 == `number` && (0, n2.isFd)(e4), o3;
        if (a3) o3 = e4;
        else {
          let n3 = (0, S2.pathToFilename)(e4), r4 = String(e4), i4 = r4.length > 1 && r4.endsWith(`/`), a4 = this._core.getResolvedLinkOrThrow(n3, `open`), s3 = a4.getNode();
          if (s3.isDirectory()) throw (0, S2.createError)(`EISDIR`, `open`, a4.getPath());
          if (i4 && s3.isFile()) throw (0, S2.createError)(`ENOTDIR`, `open`, r4);
          o3 = this.openSync(e4, t3);
        }
        try {
          i3 = (0, S2.bufferToEncoding)(this._core.getFileByFdOrThrow(o3).getBuffer(), r3);
        } finally {
          a3 || this.closeSync(o3);
        }
        return i3;
      }, this.readFileSync = (e4, t3) => {
        let n3 = (0, x2.getReadFileOptions)(t3), r3 = (0, S2.flagsToNumber)(n3.flag);
        return this._readfile(e4, r3, n3.encoding);
      }, this.readFile = (e4, t3, n3) => {
        let [r3, i3] = (0, x2.optsAndCbGenerator)(x2.getReadFileOptions)(t3, n3), a3 = (0, S2.flagsToNumber)(r3.flag);
        this.wrapAsync(this._readfile, [e4, a3, r3.encoding], i3);
      }, this.writeSync = (e4, t3, n3, r3, i3) => {
        let [, a3, o3, s3, c4] = (0, S2.getWriteSyncArgs)(e4, t3, n3, r3, i3);
        return this._write(e4, a3, o3, s3, c4);
      }, this.write = (e4, t3, n3, r3, i3, a3) => {
        let [, o3, s3, c4, l4, u4, d4] = (0, S2.getWriteArgs)(e4, t3, n3, r3, i3, a3);
        Promise.resolve().then(() => {
          try {
            let n4 = this._write(e4, s3, c4, l4, u4);
            o3 ? d4(null, n4, t3) : d4(null, n4, s3);
          } catch (e5) {
            d4(e5);
          }
        });
      }, this.writev = (e4, t3, n3, r3) => {
        let i3 = n3, a3 = r3;
        typeof n3 == `function` && ([i3, a3] = [null, n3]), (0, S2.validateCallback)(a3), Promise.resolve().then(() => {
          try {
            let n4 = this.writevBase(e4, t3, i3);
            a3(null, n4, t3);
          } catch (e5) {
            a3(e5);
          }
        });
      }, this.writevSync = (e4, t3, r3) => ((0, n2.validateFd)(e4), this.writevBase(e4, t3, r3 ?? null)), this.writeFileSync = (e4, t3, r3) => {
        let i3 = (0, x2.getWriteFileOptions)(r3), a3 = (0, S2.flagsToNumber)(i3.flag), o3 = (0, S2.modeToNumber)(i3.mode), s3 = (0, n2.dataToBuffer)(t3, i3.encoding);
        this._core.writeFile(e4, s3, a3, o3);
      }, this.writeFile = (e4, t3, r3, i3) => {
        let a3 = r3, o3 = i3;
        typeof r3 == `function` && ([a3, o3] = [x2.writeFileDefaults, r3]);
        let s3 = (0, S2.validateCallback)(o3), c4 = (0, x2.getWriteFileOptions)(a3), l4 = (0, S2.flagsToNumber)(c4.flag), u4 = (0, S2.modeToNumber)(c4.mode), d4 = (0, n2.dataToBuffer)(t3, c4.encoding);
        this.wrapAsync(this._core.writeFile, [e4, d4, l4, u4], s3);
      }, this.copyFileSync = (e4, t3, n3) => {
        let r3 = (0, S2.pathToFilename)(e4), i3 = (0, S2.pathToFilename)(t3);
        return this._copyFile(r3, i3, (n3 || 0) | 0);
      }, this.copyFile = (e4, t3, n3, r3) => {
        let i3 = (0, S2.pathToFilename)(e4), a3 = (0, S2.pathToFilename)(t3), o3, s3;
        typeof n3 == `function` ? [o3, s3] = [0, n3] : [o3, s3] = [n3, r3], (0, S2.validateCallback)(s3), this.wrapAsync(this._copyFile, [i3, a3, o3], s3);
      }, this._cp = (e4, t3, n3) => {
        if (n3.filter && !n3.filter(e4, t3)) return;
        let r3 = n3.dereference ? this.statSync(e4) : this.lstatSync(e4), i3 = null;
        try {
          i3 = this.lstatSync(t3);
        } catch (e5) {
          if (e5.code !== `ENOENT`) throw e5;
        }
        if (i3 && r3.ino === i3.ino && r3.dev === i3.dev) throw (0, S2.createError)(`EINVAL`, `cp`, e4, t3);
        if (i3) {
          if (r3.isDirectory() && !i3.isDirectory()) throw (0, S2.createError)(`EISDIR`, `cp`, e4, t3);
          if (!r3.isDirectory() && i3.isDirectory()) throw (0, S2.createError)(`ENOTDIR`, `cp`, e4, t3);
        }
        if (r3.isDirectory() && this.isSrcSubdir(e4, t3)) throw (0, S2.createError)(`EINVAL`, `cp`, e4, t3);
        ENDURE_PARENT_DIR_EXISTS: {
          let e5 = P2(t3);
          this.existsSync(e5) || this.mkdirSync(e5, { recursive: true });
        }
        if (r3.isDirectory()) {
          if (!n3.recursive) throw (0, S2.createError)(`EISDIR`, `cp`, e4);
          this.cpDirSync(r3, i3, e4, t3, n3);
        } else if (r3.isFile() || r3.isCharacterDevice() || r3.isBlockDevice()) this.cpFileSync(r3, i3, e4, t3, n3);
        else if (r3.isSymbolicLink() && !n3.dereference) this.cpSymlinkSync(i3, e4, t3, n3);
        else throw (0, S2.createError)(`EINVAL`, `cp`, e4);
      }, this.linkSync = (e4, t3) => {
        let n3 = (0, S2.pathToFilename)(e4), r3 = (0, S2.pathToFilename)(t3);
        this._core.link(n3, r3);
      }, this.link = (e4, t3, n3) => {
        let r3 = (0, S2.pathToFilename)(e4), i3 = (0, S2.pathToFilename)(t3);
        this.wrapAsync(this._core.link, [r3, i3], n3);
      }, this.unlinkSync = (e4) => {
        let t3 = (0, S2.pathToFilename)(e4);
        this._core.unlink(t3);
      }, this.unlink = (e4, t3) => {
        let n3 = (0, S2.pathToFilename)(e4);
        this.wrapAsync(this._core.unlink, [n3], t3);
      }, this.symlinkSync = (e4, t3, n3) => {
        let r3 = (0, S2.pathToFilename)(e4), i3 = (0, S2.pathToFilename)(t3);
        this._core.symlink(r3, i3);
      }, this.symlink = (e4, t3, n3, r3) => {
        let i3 = (0, S2.validateCallback)(typeof n3 == `function` ? n3 : r3), a3 = (0, S2.pathToFilename)(e4), o3 = (0, S2.pathToFilename)(t3);
        this.wrapAsync(this._core.symlink, [a3, o3], i3);
      }, this._lstat = (e4, t3 = false, n3 = false) => {
        let r3;
        try {
          r3 = this._core.getLinkOrThrow(e4, `lstat`);
        } catch (e5) {
          if (e5.code === `ENOENT` && !n3) return;
          throw e5;
        }
        return i2.default.build(r3.getNode(), t3);
      }, this.lstatSync = (e4, t3) => {
        let { throwIfNoEntry: n3 = true, bigint: r3 = false } = (0, x2.getStatOptions)(t3);
        return this._lstat((0, S2.pathToFilename)(e4), r3, n3);
      }, this.renameSync = (e4, t3) => {
        let n3 = (0, S2.pathToFilename)(e4), r3 = (0, S2.pathToFilename)(t3);
        this._core.rename(n3, r3);
      }, this.rename = (e4, t3, n3) => {
        let r3 = (0, S2.pathToFilename)(e4), i3 = (0, S2.pathToFilename)(t3);
        this.wrapAsync(this._core.rename, [r3, i3], n3);
      }, this.existsSync = (e4) => {
        try {
          return this._exists((0, S2.pathToFilename)(e4)).ok;
        } catch {
          return false;
        }
      }, this.exists = (e4, t3) => {
        let n3 = (0, S2.pathToFilename)(e4);
        if (typeof t3 != `function`) throw Error(y2.ERRSTR.CB);
        Promise.resolve().then(() => {
          try {
            t3(this._exists(n3).ok);
          } catch {
            t3(false);
          }
        });
      }, this.accessSync = (e4, t3 = E2) => {
        let n3 = (0, S2.pathToFilename)(e4);
        t3 |= 0, this._access(n3, t3);
      }, this.access = (e4, t3, n3) => {
        let r3 = E2, i3;
        typeof t3 == `function` ? i3 = t3 : [r3, i3] = [t3 | 0, (0, S2.validateCallback)(n3)];
        let a3 = (0, S2.pathToFilename)(e4);
        this.wrapAsync(this._access, [a3, r3], i3);
      }, this.appendFileSync = (e4, t3, r3) => {
        let i3 = (0, x2.getAppendFileOpts)(r3);
        (!i3.flag || (0, n2.isFd)(e4)) && (i3.flag = `a`), this.writeFileSync(e4, t3, i3);
      }, this.appendFile = (e4, t3, r3, i3) => {
        let [a3, o3] = (0, x2.getAppendFileOptsAndCb)(r3, i3);
        (!a3.flag || (0, n2.isFd)(e4)) && (a3.flag = `a`), this.writeFile(e4, t3, a3, o3);
      }, this._readdir = (e4, i3) => {
        (0, n2.filenameToSteps)(e4);
        let a3 = this._core.getResolvedLinkOrThrow(e4, `scandir`), o3 = a3.getNode();
        if (!o3.isDirectory()) throw (0, S2.createError)(`ENOTDIR`, `scandir`, e4);
        if (!o3.canRead()) throw (0, S2.createError)(`EACCES`, `scandir`, e4);
        let c4 = [];
        for (let e5 of a3.children.keys()) {
          let t3 = a3.getChild(e5);
          if (!(!t3 || e5 === `.` || e5 === `..`) && (c4.push(s2.default.build(t3, i3.encoding)), i3.recursive && t3.children.size)) {
            let e6 = { ...i3, recursive: true, withFileTypes: true }, n3 = this._readdir(t3.getPath(), e6);
            c4.push(...n3);
          }
        }
        if (!r2.isWin && i3.encoding !== `buffer` && c4.sort((e5, t3) => e5.name < t3.name ? -1 : +(e5.name > t3.name)), i3.withFileTypes) return c4;
        let l4 = e4;
        return r2.isWin && (l4 = l4.replace(/\\/g, `/`)), c4.map((e5) => {
          if (i3.recursive) {
            let n3 = N2(e5.parentPath, e5.name.toString());
            return r2.isWin && (n3 = n3.replace(/\\/g, `/`)), n3.replace(l4 + t2.posix.sep, ``);
          }
          return e5.name;
        });
      }, this.readdirSync = (e4, t3) => {
        let n3 = (0, x2.getReaddirOptions)(t3), r3 = (0, S2.pathToFilename)(e4);
        return this._readdir(r3, n3);
      }, this.readdir = (e4, t3, n3) => {
        let [r3, i3] = (0, x2.getReaddirOptsAndCb)(t3, n3), a3 = (0, S2.pathToFilename)(e4);
        this.wrapAsync(this._readdir, [a3, r3], i3);
      }, this._readlink = (e4, t3) => {
        let n3 = this._core.getLinkOrThrow(e4, `readlink`).getNode();
        if (!n3.isSymlink()) throw (0, S2.createError)(`EINVAL`, `readlink`, e4);
        return (0, f2.strToEncoding)(n3.symlink, t3);
      }, this.readlinkSync = (e4, t3) => {
        let n3 = (0, x2.getDefaultOpts)(t3), r3 = (0, S2.pathToFilename)(e4);
        return this._readlink(r3, n3.encoding);
      }, this.readlink = (e4, t3, n3) => {
        let [r3, i3] = (0, x2.getDefaultOptsAndCb)(t3, n3), a3 = (0, S2.pathToFilename)(e4);
        this.wrapAsync(this._readlink, [a3, r3.encoding], i3);
      }, this._fsync = (e4) => {
        this._core.getFileByFdOrThrow(e4, `fsync`);
      }, this.fsyncSync = (e4) => {
        this._fsync(e4);
      }, this.fsync = (e4, t3) => {
        this.wrapAsync(this._fsync, [e4], t3);
      }, this._fdatasync = (e4) => {
        this._core.getFileByFdOrThrow(e4, `fdatasync`);
      }, this.fdatasyncSync = (e4) => {
        this._fdatasync(e4);
      }, this.fdatasync = (e4, t3) => {
        this.wrapAsync(this._fdatasync, [e4], t3);
      }, this._ftruncate = (e4, t3) => {
        this._core.getFileByFdOrThrow(e4, `ftruncate`).truncate(t3);
      }, this.ftruncateSync = (e4, t3) => {
        this._ftruncate(e4, t3);
      }, this.ftruncate = (e4, t3, n3) => {
        let r3 = typeof t3 == `number` ? t3 : 0, i3 = (0, S2.validateCallback)(typeof t3 == `number` ? n3 : t3);
        this.wrapAsync(this._ftruncate, [e4, r3], i3);
      }, this._truncate = (e4, t3) => {
        let n3 = this.openSync(e4, `r+`);
        try {
          this.ftruncateSync(n3, t3);
        } finally {
          this.closeSync(n3);
        }
      }, this.truncateSync = (e4, t3) => {
        if ((0, n2.isFd)(e4)) return this.ftruncateSync(e4, t3);
        this._truncate(e4, t3);
      }, this.truncate = (e4, t3, r3) => {
        let i3 = typeof t3 == `number` ? t3 : 0, a3 = (0, S2.validateCallback)(typeof t3 == `number` ? r3 : t3);
        if ((0, n2.isFd)(e4)) return this.ftruncate(e4, i3, a3);
        this.wrapAsync(this._truncate, [e4, i3], a3);
      }, this._futimes = (e4, t3, n3) => {
        let r3 = this._core.getFileByFdOrThrow(e4, `futimes`).node;
        r3.atime = new Date(t3 * 1e3), r3.mtime = new Date(n3 * 1e3);
      }, this.futimesSync = (e4, t3, n3) => {
        this._futimes(e4, z2(t3), z2(n3));
      }, this.futimes = (e4, t3, n3, r3) => {
        this.wrapAsync(this._futimes, [e4, z2(t3), z2(n3)], r3);
      }, this._utimes = (e4, t3, n3, r3 = true) => {
        let i3 = this._core, a3 = (r3 ? i3.getResolvedLinkOrThrow(e4, `utimes`) : i3.getLinkOrThrow(e4, `lutimes`)).getNode();
        a3.atime = new Date(t3 * 1e3), a3.mtime = new Date(n3 * 1e3);
      }, this.utimesSync = (e4, t3, n3) => {
        this._utimes((0, S2.pathToFilename)(e4), z2(t3), z2(n3), true);
      }, this.utimes = (e4, t3, n3, r3) => {
        this.wrapAsync(this._utimes, [(0, S2.pathToFilename)(e4), z2(t3), z2(n3), true], r3);
      }, this.lutimesSync = (e4, t3, n3) => {
        this._utimes((0, S2.pathToFilename)(e4), z2(t3), z2(n3), false);
      }, this.lutimes = (e4, t3, n3, r3) => {
        this.wrapAsync(this._utimes, [(0, S2.pathToFilename)(e4), z2(t3), z2(n3), false], r3);
      }, this.mkdirSync = (e4, t3) => {
        let n3 = (0, x2.getMkdirOptions)(t3), r3 = (0, S2.modeToNumber)(n3.mode, 511), i3 = (0, S2.pathToFilename)(e4);
        if (n3.recursive) return this._core.mkdirp(i3, r3);
        this._core.mkdir(i3, r3);
      }, this.mkdir = (e4, t3, n3) => {
        let r3 = (0, x2.getMkdirOptions)(t3), i3 = (0, S2.validateCallback)(typeof t3 == `function` ? t3 : n3), a3 = (0, S2.modeToNumber)(r3.mode, 511), o3 = (0, S2.pathToFilename)(e4);
        r3.recursive ? this.wrapAsync(this._core.mkdirp, [o3, a3], i3) : this.wrapAsync(this._core.mkdir, [o3, a3], i3);
      }, this._mkdtemp = (e4, t3, n3 = 5) => {
        let r3 = e4 + (0, S2.genRndStr6)();
        try {
          return this._core.mkdir(r3, 511), (0, f2.strToEncoding)(r3, t3);
        } catch (r4) {
          if (r4.code === `EEXIST`) {
            if (n3 > 1) return this._mkdtemp(e4, t3, n3 - 1);
            throw Error(`Could not create temp dir.`);
          } else throw r4;
        }
      }, this.mkdtempSync = (e4, t3) => {
        let { encoding: n3 } = (0, x2.getDefaultOpts)(t3);
        if (!e4 || typeof e4 != `string`) throw TypeError(`filename prefix is required`);
        return (0, S2.nullCheck)(e4), this._mkdtemp(e4, n3);
      }, this.mkdtemp = (e4, t3, n3) => {
        let [{ encoding: r3 }, i3] = (0, x2.getDefaultOptsAndCb)(t3, n3);
        if (!e4 || typeof e4 != `string`) throw TypeError(`filename prefix is required`);
        (0, S2.nullCheck)(e4) && this.wrapAsync(this._mkdtemp, [e4, r3], i3);
      }, this.rmdirSync = (e4, t3) => {
        let n3 = (0, x2.getRmdirOptions)(t3);
        this._core.rmdir((0, S2.pathToFilename)(e4), n3.recursive);
      }, this.rmdir = (e4, t3, n3) => {
        let r3 = (0, x2.getRmdirOptions)(t3), i3 = (0, S2.validateCallback)(typeof t3 == `function` ? t3 : n3);
        this.wrapAsync(this._core.rmdir, [(0, S2.pathToFilename)(e4), r3.recursive], i3);
      }, this.rmSync = (e4, t3) => {
        this._core.rm((0, S2.pathToFilename)(e4), t3?.force, t3?.recursive);
      }, this.rm = (e4, t3, n3) => {
        let [r3, i3] = (0, x2.getRmOptsAndCb)(t3, n3);
        this.wrapAsync(this._core.rm, [(0, S2.pathToFilename)(e4), r3?.force, r3?.recursive], i3);
      }, this._fchmod = (e4, t3) => {
        this._core.getFileByFdOrThrow(e4, `fchmod`).chmod(t3);
      }, this.fchmodSync = (e4, t3) => {
        this._fchmod(e4, (0, S2.modeToNumber)(t3));
      }, this.fchmod = (e4, t3, n3) => {
        this.wrapAsync(this._fchmod, [e4, (0, S2.modeToNumber)(t3)], n3);
      }, this._chmod = (e4, t3, n3 = true) => {
        (n3 ? this._core.getResolvedLinkOrThrow(e4, `chmod`) : this._core.getLinkOrThrow(e4, `chmod`)).getNode().chmod(t3);
      }, this.chmodSync = (e4, t3) => {
        let n3 = (0, S2.modeToNumber)(t3), r3 = (0, S2.pathToFilename)(e4);
        this._chmod(r3, n3, true);
      }, this.chmod = (e4, t3, n3) => {
        let r3 = (0, S2.modeToNumber)(t3), i3 = (0, S2.pathToFilename)(e4);
        this.wrapAsync(this._chmod, [i3, r3], n3);
      }, this._lchmod = (e4, t3) => {
        this._chmod(e4, t3, false);
      }, this.lchmodSync = (e4, t3) => {
        let n3 = (0, S2.modeToNumber)(t3), r3 = (0, S2.pathToFilename)(e4);
        this._lchmod(r3, n3);
      }, this.lchmod = (e4, t3, n3) => {
        let r3 = (0, S2.modeToNumber)(t3), i3 = (0, S2.pathToFilename)(e4);
        this.wrapAsync(this._lchmod, [i3, r3], n3);
      }, this._fchown = (e4, t3, n3) => {
        this._core.getFileByFdOrThrow(e4, `fchown`).chown(t3, n3);
      }, this.fchownSync = (e4, t3, n3) => {
        B2(t3), V2(n3), this._fchown(e4, t3, n3);
      }, this.fchown = (e4, t3, n3, r3) => {
        B2(t3), V2(n3), this.wrapAsync(this._fchown, [e4, t3, n3], r3);
      }, this._chown = (e4, t3, n3) => {
        this._core.getResolvedLinkOrThrow(e4, `chown`).getNode().chown(t3, n3);
      }, this.chownSync = (e4, t3, n3) => {
        B2(t3), V2(n3), this._chown((0, S2.pathToFilename)(e4), t3, n3);
      }, this.chown = (e4, t3, n3, r3) => {
        B2(t3), V2(n3), this.wrapAsync(this._chown, [(0, S2.pathToFilename)(e4), t3, n3], r3);
      }, this._lchown = (e4, t3, n3) => {
        this._core.getLinkOrThrow(e4, `lchown`).getNode().chown(t3, n3);
      }, this.lchownSync = (e4, t3, n3) => {
        B2(t3), V2(n3), this._lchown((0, S2.pathToFilename)(e4), t3, n3);
      }, this.lchown = (e4, t3, n3, r3) => {
        B2(t3), V2(n3), this.wrapAsync(this._lchown, [(0, S2.pathToFilename)(e4), t3, n3], r3);
      }, this.statWatchers = {}, this.cpSync = (e4, t3, n3) => {
        let r3 = (0, S2.pathToFilename)(e4), i3 = (0, S2.pathToFilename)(t3), a3 = { dereference: n3?.dereference ?? false, errorOnExist: n3?.errorOnExist ?? false, filter: n3?.filter, force: n3?.force ?? true, mode: n3?.mode ?? 0, preserveTimestamps: n3?.preserveTimestamps ?? false, recursive: n3?.recursive ?? false, verbatimSymlinks: n3?.verbatimSymlinks ?? false };
        return this._cp(r3, i3, a3);
      }, this.cp = (e4, t3, n3, r3) => {
        let i3 = (0, S2.pathToFilename)(e4), a3 = (0, S2.pathToFilename)(t3), o3, s3;
        typeof n3 == `function` ? [o3, s3] = [{}, n3] : [o3, s3] = [n3 || {}, r3], (0, S2.validateCallback)(s3);
        let c4 = { dereference: o3?.dereference ?? false, errorOnExist: o3?.errorOnExist ?? false, filter: o3?.filter, force: o3?.force ?? true, mode: o3?.mode ?? 0, preserveTimestamps: o3?.preserveTimestamps ?? false, recursive: o3?.recursive ?? false, verbatimSymlinks: o3?.verbatimSymlinks ?? false };
        this.wrapAsync(this._cp, [i3, a3, c4], s3);
      }, this.openAsBlob = async (e4, t3) => {
        let n3 = (0, S2.pathToFilename)(e4), r3;
        try {
          r3 = this._core.getResolvedLinkOrThrow(n3, `open`);
        } catch (e5) {
          throw e5 && typeof e5 == `object` && e5.code === `ENOENT` ? new b2.TypeError(`ERR_INVALID_ARG_VALUE`) : e5;
        }
        let i3 = r3.getNode().getBuffer(), a3 = t3?.type || ``;
        return new Blob([i3], { type: a3 });
      }, this.glob = (e4, ...t3) => {
        let [n3, r3] = t3.length === 1 ? [{}, t3[0]] : [t3[0], t3[1]];
        this.wrapAsync(this._globSync, [e4, n3 || {}], r3);
      }, this.globSync = (e4, t3 = {}) => this._globSync(e4, t3), this._globSync = (e4, t3 = {}) => {
        let { globSync: n3 } = ei();
        return n3(this, e4, t3);
      }, this._opendir = (e4, t3) => {
        let n3 = this._core.getResolvedLinkOrThrow(e4, `scandir`);
        if (!n3.getNode().isDirectory()) throw (0, S2.createError)(`ENOTDIR`, `scandir`, e4);
        return new C2.Dir(n3, t3);
      }, this.opendirSync = (e4, t3) => {
        let n3 = (0, x2.getOpendirOptions)(t3), r3 = (0, S2.pathToFilename)(e4);
        return this._opendir(r3, n3);
      }, this.opendir = (e4, t3, n3) => {
        let [r3, i3] = (0, x2.getOpendirOptsAndCb)(t3, n3), a3 = (0, S2.pathToFilename)(e4);
        this.wrapAsync(this._opendir, [a3, r3], i3);
      };
      let a2 = this;
      this.StatWatcher = class extends W2 {
        constructor() {
          super(a2);
        }
      };
      let o2 = K2;
      this.ReadStream = class extends o2 {
        constructor(...e4) {
          super(a2, ...e4);
        }
      };
      let c3 = q2;
      this.WriteStream = class extends c3 {
        constructor(...e4) {
          super(a2, ...e4);
        }
      }, this.FSWatcher = class extends J2 {
        constructor() {
          super(a2);
        }
      };
      let l3 = (e4, t3) => {
        let n3 = this._core.getResolvedLinkOrThrow(e4, `realpath`);
        return (0, f2.strToEncoding)(n3.getPath() || `/`, t3);
      }, u3 = (e4, t3, n3) => {
        let [r3, i3] = (0, x2.getRealpathOptsAndCb)(t3, n3), o3 = (0, S2.pathToFilename)(e4);
        a2.wrapAsync(l3, [o3, r3.encoding], i3);
      }, d3 = (e4, t3) => l3((0, S2.pathToFilename)(e4), (0, x2.getRealpathOptions)(t3).encoding);
      this.realpath = u3, this.realpath.native = u3, this.realpathSync = d3, this.realpathSync.native = d3;
    }
    wrapAsync(e3, t3, n3) {
      (0, S2.validateCallback)(n3), Promise.resolve().then(() => {
        let r3;
        try {
          r3 = e3.apply(this, t3);
        } catch (e4) {
          n3(e4);
          return;
        }
        n3(null, r3);
      });
    }
    reset() {
      this._core.reset();
    }
    toJSON(e3, t3 = {}, n3 = false, r3 = false) {
      return this._core.toJSON(e3, t3, n3, r3);
    }
    fromJSON(e3, t3) {
      return this._core.fromJSON(e3, t3);
    }
    fromNestedJSON(e3, t3) {
      return this._core.fromNestedJSON(e3, t3);
    }
    mountSync(e3, t3) {
      this._core.fromJSON(t3, e3);
    }
    _write(e3, t3, n3, r3, i3) {
      let a2 = this._core.getFileByFdOrThrow(e3, `write`);
      if (a2.node.isSymlink()) throw (0, S2.createError)(`EBADF`, `write`, a2.link.getPath());
      return a2.write(t3, n3, r3, i3 === -1 || typeof i3 != `number` ? void 0 : i3);
    }
    writevBase(e3, t3, n3) {
      let r3 = this._core.getFileByFdOrThrow(e3), i3 = n3 ?? void 0;
      i3 === -1 && (i3 = void 0);
      let a2 = 0;
      for (let e4 of t3) {
        let t4 = l2.Buffer.from(e4.buffer, e4.byteOffset, e4.byteLength), n4 = r3.write(t4, 0, t4.byteLength, i3);
        if (i3 = void 0, a2 += n4, n4 < t4.byteLength) break;
      }
      return a2;
    }
    _copyFile(e3, t3, n3) {
      let r3 = this.readFileSync(e3);
      if (n3 & A2 && this.existsSync(t3)) throw (0, S2.createError)(`EEXIST`, `copyFile`, e3, t3);
      if (n3 & j2) throw (0, S2.createError)(`ENOSYS`, `copyFile`, e3, t3);
      this._core.writeFile(t3, r3, y2.FLAGS.w, 438);
    }
    isSrcSubdir(e3, n3) {
      try {
        let r3 = F2(e3.startsWith(`/`) ? e3 : `/` + e3), i3 = F2(n3.startsWith(`/`) ? n3 : `/` + n3);
        if (r3 === i3) return true;
        let a2 = M2(r3, i3);
        return a2 === `` || !a2.startsWith(`..`) && !(0, t2.isAbsolute)(a2);
      } catch {
        return false;
      }
    }
    cpFileSync(e3, t3, n3, r3, i3) {
      if (t3) {
        if (i3.errorOnExist) throw (0, S2.createError)(`EEXIST`, `cp`, r3);
        if (!i3.force) return;
        this.unlinkSync(r3);
      }
      this.copyFileSync(n3, r3, i3.mode), i3.preserveTimestamps && this.utimesSync(r3, e3.atime, e3.mtime), this.chmodSync(r3, Number(e3.mode));
    }
    cpDirSync(e3, t3, n3, r3, i3) {
      t3 || this.mkdirSync(r3);
      let a2 = this.readdirSync(n3);
      for (let e4 of a2) {
        let t4 = N2(n3, String(e4)), a3 = N2(r3, String(e4));
        i3.filter && !i3.filter(t4, a3) || this._cp(t4, a3, i3);
      }
      this.chmodSync(r3, Number(e3.mode));
    }
    cpSymlinkSync(e3, n3, r3, i3) {
      let a2 = String(this.readlinkSync(n3));
      !i3.verbatimSymlinks && !(0, t2.isAbsolute)(a2) && (a2 = w2(P2(n3), a2)), e3 && this.unlinkSync(r3), this.symlinkSync(a2, r3);
    }
    lstat(e3, t3, n3) {
      let [{ throwIfNoEntry: r3 = true, bigint: i3 = false }, a2] = (0, x2.getStatOptsAndCb)(t3, n3);
      this.wrapAsync(this._lstat, [(0, S2.pathToFilename)(e3), i3, r3], a2);
    }
    _stat(e3, t3 = false, r3 = true) {
      let a2 = this._core.getResolvedLinkResult(e3, `stat`);
      return a2.ok ? (0, n2.Ok)(i2.default.build(a2.value.getNode(), t3)) : a2.err.code === `ENOENT` && !r3 ? (0, n2.Ok)(void 0) : a2;
    }
    _statOrThrow(e3, t3 = false, n3 = true) {
      let r3 = this._stat(e3, t3, n3);
      if (r3.ok) return r3.value;
      throw r3.err.toError();
    }
    statSync(e3, t3) {
      let { bigint: n3 = true, throwIfNoEntry: r3 = true } = (0, x2.getStatOptions)(t3), i3 = this._stat((0, S2.pathToFilename)(e3), n3, r3);
      if (i3.ok) return i3.value;
      throw i3.err.toError();
    }
    stat(e3, t3, n3) {
      let [{ bigint: r3 = false, throwIfNoEntry: i3 = true }, a2] = (0, x2.getStatOptsAndCb)(t3, n3);
      this.wrapAsync(this._statOrThrow, [(0, S2.pathToFilename)(e3), r3, i3], a2);
    }
    fstatBase(e3, t3 = false) {
      let n3 = this._core.getFileByFd(e3);
      if (!n3) throw (0, S2.createError)(`EBADF`, `fstat`);
      return i2.default.build(n3.node, t3);
    }
    fstatSync(e3, t3) {
      return this.fstatBase(e3, (0, x2.getStatOptions)(t3).bigint);
    }
    fstat(e3, t3, n3) {
      let [r3, i3] = (0, x2.getStatOptsAndCb)(t3, n3);
      this.wrapAsync(this.fstatBase, [e3, r3.bigint], i3);
    }
    _exists(e3) {
      let t3 = this._stat(e3);
      return t3.ok ? (0, n2.Ok)(true) : t3;
    }
    _access(e3, t3) {
      let n3 = this._core.getResolvedLinkOrThrow(e3, `access`).getNode();
      if (t3 !== E2 && (t3 & D2 && !n3.canRead() || t3 & O2 && !n3.canWrite() || t3 & k2 && !n3.canExecute())) throw (0, S2.createError)(`EACCES`, `access`, e3);
    }
    watchFile(e3, t3, n3) {
      let r3 = (0, S2.pathToFilename)(e3), i3 = t3, a2 = n3;
      if (typeof i3 == `function` && (a2 = t3, i3 = null), typeof a2 != `function`) throw Error(`"watchFile()" requires a listener function`);
      let o2 = 5007, s3 = true;
      i3 && typeof i3 == `object` && (typeof i3.interval == `number` && (o2 = i3.interval), typeof i3.persistent == `boolean` && (s3 = i3.persistent));
      let c3 = this.statWatchers[r3];
      return c3 || (c3 = new this.StatWatcher(), c3.start(r3, s3, o2), this.statWatchers[r3] = c3), c3.addListener(`change`, a2), c3;
    }
    unwatchFile(e3, t3) {
      let n3 = (0, S2.pathToFilename)(e3), r3 = this.statWatchers[n3];
      r3 && (typeof t3 == `function` ? r3.removeListener(`change`, t3) : r3.removeAllListeners(`change`), r3.listenerCount(`change`) === 0 && (r3.stop(), delete this.statWatchers[n3]));
    }
    createReadStream(e3, t3) {
      return new this.ReadStream(e3, t3);
    }
    createWriteStream(e3, t3) {
      return new this.WriteStream(e3, t3);
    }
    watch(e3, t3, n3) {
      let r3 = (0, S2.pathToFilename)(e3), i3 = t3;
      typeof t3 == `function` && (n3 = t3, i3 = null);
      let { persistent: a2, recursive: o2, encoding: s3 } = (0, x2.getDefaultOpts)(i3);
      a2 === void 0 && (a2 = true), o2 === void 0 && (o2 = false);
      let c3 = new this.FSWatcher();
      return c3.start(r3, a2, o2, s3), n3 && c3.addListener(`change`, n3), c3;
    }
    _statfs(e3, t3 = false) {
      return this._core.getResolvedLinkOrThrow(e3, `statfs`), c2.default.build(this._core, t3);
    }
    statfsSync(e3, t3) {
      let { bigint: n3 = false } = (0, x2.getStatfsOptions)(t3);
      return this._statfs((0, S2.pathToFilename)(e3), n3);
    }
    statfs(e3, t3, n3) {
      let [{ bigint: r3 = false }, i3] = (0, x2.getStatfsOptsAndCb)(t3, n3);
      this.wrapAsync(this._statfs, [(0, S2.pathToFilename)(e3), r3], i3);
    }
    toTree(e3 = { separator: t2.sep }) {
      return (0, _2.toTreeSync)(this, e3);
    }
    toSnapshot(e3 = `/`) {
      return v2.toSnapshotSync({ fs: this, path: e3 });
    }
    fromSnapshot(e3, t3 = `/`) {
      return v2.fromSnapshotSync(e3, { fs: this, path: t3 });
    }
    toBinarySnapshot(e3 = `/`) {
      return v2.toBinarySnapshotSync({ fs: this, path: e3 });
    }
    fromBinarySnapshot(e3, t3 = `/`) {
      return v2.fromBinarySnapshotSync(e3, { fs: this, path: t3 });
    }
    toJsonSnapshot(e3 = `/`) {
      let t3 = v2.toJsonSnapshotSync({ fs: this, path: e3 });
      return l2.Buffer.from(t3).toString(`utf8`);
    }
    fromJsonSnapshot(e3, t3 = `/`) {
      let n3 = new Uint8Array(l2.Buffer.from(e3, `utf8`));
      return v2.fromJsonSnapshotSync(n3, { fs: this, path: t3 });
    }
  };
  e2.Volume = H2, H2.fromJSON = (e3, t3, r3) => new H2(n2.Superblock.fromJSON(e3, t3, r3)), H2.fromNestedJSON = (e3, t3, r3) => new H2(n2.Superblock.fromNestedJSON(e3, t3, r3));
  function U2(e3) {
    e3.emit(`stop`);
  }
  var W2 = class extends p2.EventEmitter {
    constructor(e3) {
      super(), this.onInterval = () => {
        try {
          let e4 = this.vol.statSync(this.filename);
          this.hasChanged(e4) && (this.emit(`change`, e4, this.prev), this.prev = e4);
        } finally {
          this.loop();
        }
      }, this.vol = e3;
    }
    loop() {
      this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
    }
    hasChanged(e3) {
      return e3.mtimeMs > this.prev.mtimeMs || e3.nlink !== this.prev.nlink;
    }
    start(e3, t3 = true, n3 = 5007) {
      this.filename = (0, S2.pathToFilename)(e3), this.setTimeout = t3 ? setTimeout.bind(typeof globalThis < `u` ? globalThis : o) : u2.default, this.interval = n3, this.prev = this.vol.statSync(this.filename), this.loop();
    }
    stop() {
      clearTimeout(this.timeoutRef), queueMicrotask(() => {
        U2.call(this, this);
      });
    }
  };
  e2.StatWatcher = W2;
  var G2;
  function ee2(e3) {
    G2 = (0, l2.bufferAllocUnsafe)(e3), G2.used = 0;
  }
  (0, h2.inherits)(K2, d2.Readable), e2.ReadStream = K2;
  function K2(e3, t3, n3) {
    if (!(this instanceof K2)) return new K2(e3, t3, n3);
    if (this._vol = e3, n3 = Object.assign({}, (0, x2.getOptions)(n3, {})), n3.highWaterMark === void 0 && (n3.highWaterMark = 64 * 1024), d2.Readable.call(this, n3), this.path = (0, S2.pathToFilename)(t3), this._fileHandle = n3.fd && typeof n3.fd != `number` ? n3.fd : null, this.fd = n3.fd === void 0 ? null : typeof n3.fd == `number` ? n3.fd : n3.fd.fd, this.flags = n3.flags === void 0 ? `r` : n3.flags, this.mode = n3.mode === void 0 ? 438 : n3.mode, this.start = n3.start, this.end = n3.end, this.autoClose = n3.autoClose === void 0 ? true : n3.autoClose, this.pos = void 0, this.bytesRead = 0, this.start !== void 0) {
      if (typeof this.start != `number`) throw TypeError(`"start" option must be a Number`);
      if (this.end === void 0) this.end = 1 / 0;
      else if (typeof this.end != `number`) throw TypeError(`"end" option must be a Number`);
      if (this.start > this.end) throw Error(`"start" option must be <= "end" option`);
      this.pos = this.start;
    }
    typeof this.fd != `number` && this.open(), this.on(`end`, function() {
      this.autoClose && this.destroy && this.destroy();
    });
  }
  K2.prototype.open = function() {
    var e3 = this;
    this._vol.open(this.path, this.flags, this.mode, (t3, n3) => {
      if (t3) {
        e3.autoClose && e3.destroy && e3.destroy(), e3.emit(`error`, t3);
        return;
      }
      e3.fd = n3, e3.emit(`open`, n3), e3.read();
    });
  }, K2.prototype._read = function(e3) {
    if (typeof this.fd != `number`) return this.once(`open`, function() {
      this._read(e3);
    });
    if (this.destroyed) return;
    (!G2 || G2.length - G2.used < I2) && ee2(this._readableState.highWaterMark);
    var t3 = G2, n3 = Math.min(G2.length - G2.used, e3), r3 = G2.used;
    if (this.pos !== void 0 && (n3 = Math.min(this.end - this.pos + 1, n3)), n3 <= 0) return this.push(null);
    var i3 = this;
    this._vol.read(this.fd, G2, G2.used, n3, this.pos, a2), this.pos !== void 0 && (this.pos += n3), G2.used += n3;
    function a2(e4, n4) {
      if (e4) i3.autoClose && i3.destroy && i3.destroy(), i3.emit(`error`, e4);
      else {
        var a3 = null;
        n4 > 0 && (i3.bytesRead += n4, a3 = t3.slice(r3, r3 + n4)), i3.push(a3);
      }
    }
  }, K2.prototype._destroy = function(e3, t3) {
    this.close((n3) => {
      t3(e3 || n3);
    });
  }, K2.prototype.close = function(e3) {
    if (e3 && this.once(`close`, e3), this.closed || typeof this.fd != `number`) {
      if (typeof this.fd != `number`) {
        this.once(`open`, te2);
        return;
      }
      return queueMicrotask(() => this.emit(`close`));
    }
    typeof this._readableState?.closed == `boolean` ? this._readableState.closed = true : this.closed = true, this._fileHandle ? this._fileHandle.close().then(() => this.emit(`close`), (e4) => this.emit(`error`, e4)) : this._vol.close(this.fd, (e4) => {
      e4 ? this.emit(`error`, e4) : this.emit(`close`);
    }), this.fd = null;
  };
  function te2(e3) {
    this.close();
  }
  (0, h2.inherits)(q2, d2.Writable), e2.WriteStream = q2;
  function q2(e3, t3, n3) {
    if (!(this instanceof q2)) return new q2(e3, t3, n3);
    if (this._vol = e3, n3 = Object.assign({}, (0, x2.getOptions)(n3, {})), d2.Writable.call(this, n3), this.path = (0, S2.pathToFilename)(t3), this._fileHandle = n3.fd && typeof n3.fd != `number` ? n3.fd : null, this.fd = n3.fd === void 0 ? null : typeof n3.fd == `number` ? n3.fd : n3.fd.fd, this.flags = n3.flags === void 0 ? `w` : n3.flags, this.mode = n3.mode === void 0 ? 438 : n3.mode, this.start = n3.start, this.autoClose = n3.autoClose === void 0 ? true : !!n3.autoClose, this.pos = void 0, this.bytesWritten = 0, this.pending = true, this.start !== void 0) {
      if (typeof this.start != `number`) throw TypeError(`"start" option must be a Number`);
      if (this.start < 0) throw Error(`"start" must be >= zero`);
      this.pos = this.start;
    }
    n3.encoding && this.setDefaultEncoding(n3.encoding), typeof this.fd != `number` && this.open(), this.once(`finish`, function() {
      this.autoClose && this.close();
    });
  }
  q2.prototype.open = function() {
    this._vol.open(this.path, this.flags, this.mode, function(e3, t3) {
      if (e3) {
        this.autoClose && this.destroy && this.destroy(), this.emit(`error`, e3);
        return;
      }
      this.fd = t3, this.pending = false, this.emit(`open`, t3);
    }.bind(this));
  }, q2.prototype._write = function(e3, t3, n3) {
    if (!(e3 instanceof l2.Buffer || e3 instanceof Uint8Array)) return this.emit(`error`, Error(`Invalid data`));
    if (typeof this.fd != `number`) return this.once(`open`, function() {
      this._write(e3, t3, n3);
    });
    var r3 = this;
    this._vol.write(this.fd, e3, 0, e3.length, this.pos, (e4, t4) => {
      if (e4) return r3.autoClose && r3.destroy && r3.destroy(), n3(e4);
      r3.bytesWritten += t4, n3();
    }), this.pos !== void 0 && (this.pos += e3.length);
  }, q2.prototype._writev = function(e3, t3) {
    if (typeof this.fd != `number`) return this.once(`open`, function() {
      this._writev(e3, t3);
    });
    let n3 = this, r3 = e3.length, i3 = Array(r3);
    for (var a2 = 0, o2 = 0; o2 < r3; o2++) {
      var s3 = e3[o2].chunk;
      i3[o2] = s3, a2 += s3.length;
    }
    let c3 = l2.Buffer.concat(i3);
    this._vol.write(this.fd, c3, 0, c3.length, this.pos, (e4, r4) => {
      if (e4) return n3.destroy && n3.destroy(), t3(e4);
      n3.bytesWritten += r4, t3();
    }), this.pos !== void 0 && (this.pos += a2);
  }, q2.prototype.close = function(e3) {
    if (e3 && this.once(`close`, e3), this.closed || typeof this.fd != `number`) {
      if (typeof this.fd != `number`) {
        this.once(`open`, te2);
        return;
      }
      return queueMicrotask(() => this.emit(`close`));
    }
    typeof this._writableState?.closed == `boolean` ? this._writableState.closed = true : this.closed = true, this._fileHandle ? this._fileHandle.close().then(() => this.emit(`close`), (e4) => this.emit(`error`, e4)) : this._vol.close(this.fd, (e4) => {
      e4 ? this.emit(`error`, e4) : this.emit(`close`);
    }), this.fd = null;
  }, q2.prototype._destroy = K2.prototype._destroy, q2.prototype.destroySoon = q2.prototype.end;
  var J2 = class extends p2.EventEmitter {
    constructor(e3) {
      super(), this._filename = ``, this._filenameEncoded = ``, this._recursive = false, this._encoding = f2.ENCODING_UTF8, this._listenerRemovers = /* @__PURE__ */ new Map(), this._onParentChild = (e4) => {
        e4.getName() === this._getName() && this._emit(`rename`);
      }, this._emit = (e4) => {
        this.emit(`change`, e4, this._filenameEncoded);
      }, this._persist = () => {
        this._timer = setTimeout(this._persist, 1e6);
      }, this._vol = e3;
    }
    _getName() {
      return this._steps[this._steps.length - 1];
    }
    start(e3, t3 = true, r3 = false, i3 = f2.ENCODING_UTF8) {
      this._filename = (0, S2.pathToFilename)(e3), this._steps = (0, n2.filenameToSteps)(this._filename), this._filenameEncoded = (0, f2.strToEncoding)(this._filename), this._recursive = r3, this._encoding = i3;
      try {
        this._link = this._vol._core.getLinkOrThrow(this._filename, `FSWatcher`);
      } catch (e4) {
        let t4 = Error(`watch ${this._filename} ${e4.code}`);
        throw t4.code = e4.code, t4.errno = e4.code, t4;
      }
      let a2 = (e4) => {
        let t4 = e4.getPath(), n3 = e4.getNode(), r4 = () => {
          let e5 = M2(this._filename, t4);
          return e5 || (e5 = this._getName()), this.emit(`change`, `change`, e5);
        }, i4 = n3.changes.listen(([e5]) => {
          e5 === `modify` && r4();
        }), a3 = this._listenerRemovers.get(n3.ino) ?? [];
        a3.push(() => i4()), this._listenerRemovers.set(n3.ino, a3);
      }, o2 = (e4) => {
        let t4 = e4.getNode(), n3 = (e5) => {
          this.emit(`change`, `rename`, M2(this._filename, e5.getPath())), a2(e5), o2(e5);
        }, i4 = (e5) => {
          let t5 = (e6) => {
            let n4 = e6.getNode().ino, r4 = this._listenerRemovers.get(n4);
            r4 && (r4.forEach((e7) => e7()), this._listenerRemovers.delete(n4));
            for (let [n5, r5] of e6.children.entries()) r5 && n5 !== `.` && n5 !== `..` && t5(r5);
          };
          t5(e5), this.emit(`change`, `rename`, M2(this._filename, e5.getPath()));
        };
        for (let [t5, n4] of e4.children.entries()) n4 && t5 !== `.` && t5 !== `..` && a2(n4);
        let s4 = e4.changes.listen(([e5, t5]) => {
          e5 === `child:add` ? n3(t5) : e5 === `child:del` && i4(t5);
        });
        if ((this._listenerRemovers.get(t4.ino) ?? []).push(() => {
          s4();
        }), r3) for (let [t5, n4] of e4.children.entries()) n4 && t5 !== `.` && t5 !== `..` && o2(n4);
      };
      a2(this._link), o2(this._link);
      let s3 = this._link.parent;
      s3 && s3.changes.listen(([e4, t4]) => {
        e4 === `child:del` && this._onParentChild(t4);
      }), t3 && this._persist();
    }
    close() {
      clearTimeout(this._timer), this._listenerRemovers.forEach((e3) => {
        e3.forEach((e4) => e4());
      }), this._listenerRemovers.clear(), this._parentChangesUnsub?.();
    }
  };
  e2.FSWatcher = J2;
})), ni = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.fsCallbackApiList = void 0, e2.fsCallbackApiList = `access.appendFile.chmod.chown.close.copyFile.cp.createReadStream.createWriteStream.exists.fchmod.fchown.fdatasync.fstat.fsync.ftruncate.futimes.glob.lchmod.lchown.link.lstat.mkdir.mkdtemp.open.openAsBlob.opendir.read.readv.readdir.readFile.readlink.realpath.rename.rm.rmdir.stat.statfs.symlink.truncate.unlink.unwatchFile.utimes.lutimes.watch.watchFile.write.writev.writeFile`.split(`.`);
})), ri = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.fsSynchronousApiList = void 0, e2.fsSynchronousApiList = `accessSync.appendFileSync.chmodSync.chownSync.closeSync.copyFileSync.existsSync.fchmodSync.fchownSync.fdatasyncSync.fstatSync.fsyncSync.ftruncateSync.futimesSync.globSync.lchmodSync.lchownSync.linkSync.lstatSync.mkdirSync.mkdtempSync.openSync.opendirSync.readdirSync.readFileSync.readlinkSync.readSync.readvSync.realpathSync.renameSync.rmdirSync.rmSync.statSync.symlinkSync.truncateSync.unlinkSync.utimesSync.lutimesSync.writeFileSync.writeSync.writevSync`.split(`.`);
})), ii = i(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.fsCommonObjectsList = void 0, e2.fsCommonObjectsList = [`F_OK`, `R_OK`, `W_OK`, `X_OK`, `constants`, `Stats`, `StatFs`, `Dir`, `Dirent`, `StatsWatcher`, `FSWatcher`, `ReadStream`, `WriteStream`];
})), ai = i(((t2) => {
  Object.defineProperty(t2, `__esModule`, { value: true }), t2.fsCommonObjectsList = t2.fsSynchronousApiList = t2.fsCallbackApiList = t2.FsPromises = t2.Dir = t2.FileHandle = t2.StatFs = t2.Dirent = t2.Stats = t2.toUnixTimestamp = t2.FSWatcher = t2.StatWatcher = t2.Volume = void 0;
  var n2 = (J(), e(f)), r2 = ti();
  Object.defineProperty(t2, `Volume`, { enumerable: true, get: function() {
    return r2.Volume;
  } }), Object.defineProperty(t2, `StatWatcher`, { enumerable: true, get: function() {
    return r2.StatWatcher;
  } }), Object.defineProperty(t2, `FSWatcher`, { enumerable: true, get: function() {
    return r2.FSWatcher;
  } }), Object.defineProperty(t2, `toUnixTimestamp`, { enumerable: true, get: function() {
    return r2.toUnixTimestamp;
  } });
  var i2 = vn();
  Object.defineProperty(t2, `Stats`, { enumerable: true, get: function() {
    return i2.default;
  } });
  var a2 = yn();
  Object.defineProperty(t2, `Dirent`, { enumerable: true, get: function() {
    return a2.default;
  } });
  var o2 = bn();
  Object.defineProperty(t2, `StatFs`, { enumerable: true, get: function() {
    return o2.default;
  } });
  var s2 = dr();
  Object.defineProperty(t2, `FileHandle`, { enumerable: true, get: function() {
    return s2.FileHandle;
  } });
  var c2 = Qr();
  Object.defineProperty(t2, `Dir`, { enumerable: true, get: function() {
    return c2.Dir;
  } });
  var l2 = fr();
  Object.defineProperty(t2, `FsPromises`, { enumerable: true, get: function() {
    return l2.FsPromises;
  } }), n2.__exportStar(Zr(), t2), n2.__exportStar(ur(), t2), n2.__exportStar(ei(), t2);
  var u2 = ni();
  Object.defineProperty(t2, `fsCallbackApiList`, { enumerable: true, get: function() {
    return u2.fsCallbackApiList;
  } });
  var d2 = ri();
  Object.defineProperty(t2, `fsSynchronousApiList`, { enumerable: true, get: function() {
    return d2.fsSynchronousApiList;
  } });
  var p2 = ii();
  Object.defineProperty(t2, `fsCommonObjectsList`, { enumerable: true, get: function() {
    return p2.fsCommonObjectsList;
  } });
})), oi = i(((e2, t2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.memfs = e2.fs = e2.vol = e2.Volume = void 0, e2.createFsFromVolume = c2;
  var n2 = ai();
  Object.defineProperty(e2, `Volume`, { enumerable: true, get: function() {
    return n2.Volume;
  } });
  var r2 = $(), { F_OK: i2, R_OK: a2, W_OK: o2, X_OK: s2 } = r2.constants;
  e2.vol = new n2.Volume();
  function c2(e3) {
    let t3 = { F_OK: i2, R_OK: a2, W_OK: o2, X_OK: s2, constants: r2.constants, Stats: n2.Stats, Dirent: n2.Dirent };
    for (let r3 of n2.fsSynchronousApiList) typeof e3[r3] == `function` && (t3[r3] = e3[r3].bind(e3));
    for (let r3 of n2.fsCallbackApiList) typeof e3[r3] == `function` && (t3[r3] = e3[r3].bind(e3));
    return t3.StatWatcher = e3.StatWatcher, t3.FSWatcher = e3.FSWatcher, t3.WriteStream = e3.WriteStream, t3.ReadStream = e3.ReadStream, t3.promises = e3.promises, typeof e3.realpath == `function` && (t3.realpath = e3.realpath.bind(e3), typeof e3.realpath.native == `function` && (t3.realpath.native = e3.realpath.native.bind(e3))), typeof e3.realpathSync == `function` && (t3.realpathSync = e3.realpathSync.bind(e3), typeof e3.realpathSync.native == `function` && (t3.realpathSync.native = e3.realpathSync.native.bind(e3))), t3._toUnixTimestamp = n2.toUnixTimestamp, t3.__vol = e3, t3;
  }
  e2.fs = c2(e2.vol), e2.memfs = (e3 = {}, t3 = `/`) => {
    let r3 = typeof t3 == `string` ? { cwd: t3 } : t3, i3 = r3.cwd ?? (r3.process ? void 0 : `/`), a3 = n2.Volume.fromNestedJSON(e3, i3, { process: r3.process });
    return { fs: c2(a3), vol: a3 };
  }, t2.exports = { ...t2.exports, ...e2.fs }, t2.exports.semantic = true;
}));
export {
  mt as a,
  Ce as c,
  mn as i,
  Se as l,
  Yn as n,
  rt as o,
  Wn as r,
  De as s,
  oi as t
};
