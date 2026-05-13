import { B as e, Ht as t, ct as n, ft as r, g as i, k as a, tt as o, vn as s, xn as c } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
function l(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function u(e2) {
  if (Array.isArray(e2)) return e2;
}
function d(e2, t2, n2) {
  return (t2 = ie(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function f(e2, t2) {
  var n2 = e2 == null ? null : typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (n2 != null) {
    var r2, i2, a2, o2, s2 = [], c2 = true, l2 = false;
    try {
      if (a2 = (n2 = n2.call(e2)).next, t2 !== 0) for (; !(c2 = (r2 = a2.call(n2)).done) && (s2.push(r2.value), s2.length !== t2); c2 = true) ;
    } catch (e3) {
      l2 = true, i2 = e3;
    } finally {
      try {
        if (!c2 && n2.return != null && (o2 = n2.return(), Object(o2) !== o2)) return;
      } finally {
        if (l2) throw i2;
      }
    }
    return s2;
  }
}
function p() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function h(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? m(Object(n2), true).forEach(function(t3) {
      d(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : m(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function ee(e2, t2) {
  if (e2 == null) return {};
  var n2, r2, i2 = te(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var a2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < a2.length; r2++) n2 = a2[r2], t2.indexOf(n2) === -1 && {}.propertyIsEnumerable.call(e2, n2) && (i2[n2] = e2[n2]);
  }
  return i2;
}
function te(e2, t2) {
  if (e2 == null) return {};
  var n2 = {};
  for (var r2 in e2) if ({}.hasOwnProperty.call(e2, r2)) {
    if (t2.indexOf(r2) !== -1) continue;
    n2[r2] = e2[r2];
  }
  return n2;
}
function ne(e2, t2) {
  return u(e2) || f(e2, t2) || ae(e2, t2) || p();
}
function re(e2, t2) {
  if (typeof e2 != `object` || !e2) return e2;
  var n2 = e2[Symbol.toPrimitive];
  if (n2 !== void 0) {
    var r2 = n2.call(e2, t2);
    if (typeof r2 != `object`) return r2;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t2 === `string` ? String : Number)(e2);
}
function ie(e2) {
  var t2 = re(e2, `string`);
  return typeof t2 == `symbol` ? t2 : t2 + ``;
}
function ae(e2, t2) {
  if (e2) {
    if (typeof e2 == `string`) return l(e2, t2);
    var n2 = {}.toString.call(e2).slice(8, -1);
    return n2 === `Object` && e2.constructor && (n2 = e2.constructor.name), n2 === `Map` || n2 === `Set` ? Array.from(e2) : n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? l(e2, t2) : void 0;
  }
}
function oe(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function g(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function _(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? g(Object(n2), true).forEach(function(t3) {
      oe(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : g(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function v() {
  var e2 = [...arguments];
  return function(t2) {
    return e2.reduceRight(function(e3, t3) {
      return t3(e3);
    }, t2);
  };
}
function y(e2) {
  return function t2() {
    var n2 = this, r2 = [...arguments];
    return r2.length >= e2.length ? e2.apply(this, r2) : function() {
      var e3 = [...arguments];
      return t2.apply(n2, [].concat(r2, e3));
    };
  };
}
function b(e2) {
  return {}.toString.call(e2).includes(`Object`);
}
function se(e2) {
  return !Object.keys(e2).length;
}
function x(e2) {
  return typeof e2 == `function`;
}
function ce(e2, t2) {
  return Object.prototype.hasOwnProperty.call(e2, t2);
}
function le(e2, t2) {
  return b(t2) || S(`changeType`), Object.keys(t2).some(function(t3) {
    return !ce(e2, t3);
  }) && S(`changeField`), t2;
}
function ue(e2) {
  x(e2) || S(`selectorType`);
}
function de(e2) {
  x(e2) || b(e2) || S(`handlerType`), b(e2) && Object.values(e2).some(function(e3) {
    return !x(e3);
  }) && S(`handlersType`);
}
function fe(e2) {
  e2 || S(`initialIsRequired`), b(e2) || S(`initialType`), se(e2) && S(`initialContent`);
}
function pe(e2, t2) {
  throw Error(e2[t2] || e2.default);
}
var S = y(pe)({ initialIsRequired: `initial state is required`, initialType: `initial state should be an object`, initialContent: `initial state shouldn't be an empty object`, handlerType: `handler should be an object or a function`, handlersType: `all handlers should be a functions`, selectorType: `selector should be a function`, changeType: `provided value of changes should be an object`, changeField: `it seams you want to change a field in the state which is not specified in the "initial" state`, default: "an unknown error accured in `state-local` package" }), C = { changes: le, selector: ue, handler: de, initial: fe };
function me(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  C.initial(e2), C.handler(t2);
  var n2 = { current: e2 }, r2 = y(_e)(n2, t2), i2 = y(ge)(n2), a2 = y(C.changes)(e2), o2 = y(he)(n2);
  function s2() {
    var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(e4) {
      return e4;
    };
    return C.selector(e3), e3(n2.current);
  }
  function c2(e3) {
    v(r2, i2, a2, o2)(e3);
  }
  return [s2, c2];
}
function he(e2, t2) {
  return x(t2) ? t2(e2.current) : t2;
}
function ge(e2, t2) {
  return e2.current = _(_({}, e2.current), t2), t2;
}
function _e(e2, t2, n2) {
  return x(t2) ? t2(e2.current) : Object.keys(n2).forEach(function(n3) {
    return t2[n3]?.call(t2, e2.current[n3]);
  }), n2;
}
var ve = { create: me }, ye = { paths: { vs: `https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs` } };
function be(e2) {
  return function t2() {
    var n2 = this, r2 = [...arguments];
    return r2.length >= e2.length ? e2.apply(this, r2) : function() {
      var e3 = [...arguments];
      return t2.apply(n2, [].concat(r2, e3));
    };
  };
}
function xe(e2) {
  return {}.toString.call(e2).includes(`Object`);
}
function Se(e2) {
  return e2 || T(`configIsRequired`), xe(e2) || T(`configType`), e2.urls ? (Ce(), { paths: { vs: e2.urls.monacoBase } }) : e2;
}
function Ce() {
  console.warn(w.deprecation);
}
function we(e2, t2) {
  throw Error(e2[t2] || e2.default);
}
var w = { configIsRequired: `the configuration object is required`, configType: `the configuration object should be an object`, default: "an unknown error accured in `@monaco-editor/loader` package", deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  ` }, T = be(we)(w), E = { config: Se }, D = function() {
  var e2 = [...arguments];
  return function(t2) {
    return e2.reduceRight(function(e3, t3) {
      return t3(e3);
    }, t2);
  };
};
function O(e2, t2) {
  return Object.keys(t2).forEach(function(n2) {
    t2[n2] instanceof Object && e2[n2] && Object.assign(t2[n2], O(e2[n2], t2[n2]));
  }), h(h({}, e2), t2);
}
var k = { type: `cancelation`, msg: `operation is manually canceled` };
function A(e2) {
  var t2 = false, n2 = new Promise(function(n3, r2) {
    e2.then(function(e3) {
      return t2 ? r2(k) : n3(e3);
    }), e2.catch(r2);
  });
  return n2.cancel = function() {
    return t2 = true;
  }, n2;
}
var Te = [`monaco`], j = ne(ve.create({ config: ye, isInitialized: false, resolve: null, reject: null, monaco: null }), 2), M = j[0], N = j[1];
function Ee(e2) {
  var t2 = E.config(e2), n2 = t2.monaco, r2 = ee(t2, Te);
  N(function(e3) {
    return { config: O(e3.config, r2), monaco: n2 };
  });
}
function De() {
  var e2 = M(function(e3) {
    return { monaco: e3.monaco, isInitialized: e3.isInitialized, resolve: e3.resolve };
  });
  if (!e2.isInitialized) {
    if (N({ isInitialized: true }), e2.monaco) return e2.resolve(e2.monaco), A(F);
    if (window.monaco && window.monaco.editor) return P(window.monaco), e2.resolve(window.monaco), A(F);
    D(Oe, Ae)(je);
  }
  return A(F);
}
function Oe(e2) {
  return document.body.appendChild(e2);
}
function ke(e2) {
  var t2 = document.createElement(`script`);
  return e2 && (t2.src = e2), t2;
}
function Ae(e2) {
  var t2 = M(function(e3) {
    return { config: e3.config, reject: e3.reject };
  }), n2 = ke(`${t2.config.paths.vs}/loader.js`);
  return n2.onload = function() {
    return e2();
  }, n2.onerror = t2.reject, n2;
}
function je() {
  var e2 = M(function(e3) {
    return { config: e3.config, resolve: e3.resolve, reject: e3.reject };
  }), t2 = window.require;
  t2.config(e2.config), t2([`vs/editor/editor.main`], function(t3) {
    var n2 = t3.m || t3;
    P(n2), e2.resolve(n2);
  }, function(t3) {
    e2.reject(t3);
  });
}
function P(e2) {
  M().monaco || N({ monaco: e2 });
}
function Me() {
  return M(function(e2) {
    return e2.monaco;
  });
}
var F = new Promise(function(e2, t2) {
  return N({ resolve: e2, reject: t2 });
}), I = { config: Ee, init: De, __getMonacoInstance: Me }, Ne = Object.defineProperty, Pe = Object.defineProperties, Fe = Object.getOwnPropertyDescriptors, L = Object.getOwnPropertySymbols, Ie = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, R = (e2, t2, n2) => t2 in e2 ? Ne(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, z = (e2, t2) => {
  for (var n2 in t2 || (t2 = {})) Ie.call(t2, n2) && R(e2, n2, t2[n2]);
  if (L) for (var n2 of L(t2)) Le.call(t2, n2) && R(e2, n2, t2[n2]);
  return e2;
}, Re = (e2, t2) => Pe(e2, Fe(t2)), B = { wrapper: { display: `flex`, position: `relative`, textAlign: `initial` }, fullWidth: { width: `100%` }, hide: { display: `none` } };
function V(e2, t2) {
  return { wrapperStyle: i(() => {
    let { width: t3, height: n2 } = e2;
    return Re(z({}, B.wrapper), { width: t3, height: n2 });
  }), containerStyle: i(() => z(z({}, B.fullWidth), !t2.value && B.hide)) };
}
function H() {
  let e2 = c(I.__getMonacoInstance()), t2 = s(false), r2;
  return n(() => {
    e2.value || (r2 = I.init(), r2.then((t3) => e2.value = t3).catch((e3) => {
      e3?.type !== `cancelation` && (t2.value = true, console.error(`Monaco initialization error:`, e3));
    }));
  }), { monacoRef: e2, unload: () => r2?.cancel(), isLoadFailed: t2 };
}
function U(e2) {
  return typeof e2 == `function` ? e2() : e2;
}
function W(e2) {
  return e2 === void 0;
}
function G(e2, t2, n2, r2) {
  return ze(e2, r2) || Be(e2, t2, n2, r2);
}
function ze(e2, t2) {
  return e2.editor.getModel(K(e2, t2));
}
function Be(e2, t2, n2, r2) {
  return e2.editor.createModel(t2, n2, r2 ? K(e2, r2) : void 0);
}
function K(e2, t2) {
  return e2.Uri.parse(t2);
}
var Ve = Object.defineProperty, q = Object.getOwnPropertySymbols, He = Object.prototype.hasOwnProperty, Ue = Object.prototype.propertyIsEnumerable, J = (e2, t2, n2) => t2 in e2 ? Ve(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, We = (e2, t2) => {
  for (var n2 in t2 || (t2 = {})) He.call(t2, n2) && J(e2, n2, t2[n2]);
  if (q) for (var n2 of q(t2)) Ue.call(t2, n2) && J(e2, n2, t2[n2]);
  return e2;
}, Ge = { display: `flex`, height: `100%`, width: `100%`, justifyContent: `center`, alignItems: `center` }, Y = a({ name: `VueMonacoEditor`, model: { prop: `value`, event: `update:value` }, props: { defaultValue: String, defaultPath: String, defaultLanguage: String, value: String, language: String, path: String, theme: { type: String, default: `vs` }, line: Number, options: { type: Object, default: () => ({}) }, overrideServices: { type: Object, default: () => ({}) }, saveViewState: { type: Boolean, default: true }, width: { type: [Number, String], default: `100%` }, height: { type: [Number, String], default: `100%` }, className: String }, emits: [`update:value`, `beforeMount`, `mount`, `change`, `validate`], setup(e2, n2) {
  let a2 = /* @__PURE__ */ new Map(), o2 = c(null), { monacoRef: s2, unload: l2, isLoadFailed: u2 } = H(), { editorRef: d2 } = Ke(n2, e2, s2, o2), { disposeValidator: f2 } = qe(n2, e2, s2, d2), p2 = i(() => !!s2.value && !!d2.value), { wrapperStyle: m2, containerStyle: h2 } = V(e2, p2);
  return r(() => {
    var e3, t2;
    (e3 = f2.value) == null || e3.call(f2), d2.value ? ((t2 = d2.value.getModel()) == null || t2.dispose(), d2.value.dispose()) : l2();
  }), t([() => e2.path, () => e2.value, () => e2.language, () => e2.line], ([t2, n3, r2, i2], [o3, c2, l3, u3]) => {
    if (p2.value) {
      if (t2 !== o3) {
        let c3 = G(s2.value, n3 || e2.defaultValue || ``, r2 || e2.defaultLanguage || ``, t2 || e2.defaultPath || ``);
        e2.saveViewState && a2.set(o3, d2.value.saveViewState()), d2.value.setModel(c3), e2.saveViewState && d2.value.restoreViewState(a2.get(t2)), W(i2) || d2.value.revealLine(i2);
        return;
      }
      d2.value.getValue() !== n3 && d2.value.setValue(n3), r2 !== l3 && s2.value.editor.setModelLanguage(d2.value.getModel(), r2), !W(i2) && i2 !== u3 && d2.value.revealLine(i2);
    }
  }), t(() => e2.options, (e3) => d2.value && d2.value.updateOptions(e3), { deep: true }), t(() => e2.theme, (e3) => s2.value && s2.value.editor.setTheme(e3)), { containerRef: o2, isEditorReady: p2, isLoadFailed: u2, wrapperStyle: m2, containerStyle: h2 };
}, render() {
  let { $slots: t2, isEditorReady: n2, isLoadFailed: r2, wrapperStyle: i2, containerStyle: a2, className: o2 } = this;
  return e(`div`, { style: i2 }, [!n2 && e(`div`, { style: Ge }, r2 ? t2.failure ? U(t2.failure) : `load failed` : t2.default ? U(t2.default) : `loading...`), e(`div`, { ref: `containerRef`, key: `monaco_editor_container`, style: a2, class: o2 })]);
} });
function Ke({ emit: e2 }, r2, i2, a2) {
  let s2 = c(null);
  n(() => {
    let e3 = t(i2, () => {
      a2.value && i2.value && (o(() => e3()), l2());
    }, { immediate: true });
  });
  function l2() {
    var t2;
    if (!a2.value || !i2.value || s2.value) return;
    e2(`beforeMount`, i2.value);
    let n2 = r2.path || r2.defaultPath, o2 = G(i2.value, r2.value || r2.defaultValue || ``, r2.language || r2.defaultLanguage || ``, n2 || ``);
    s2.value = i2.value.editor.create(a2.value, We({ model: o2, theme: r2.theme, automaticLayout: true, autoIndent: `brackets`, formatOnPaste: true, formatOnType: true }, r2.options), r2.overrideServices), (t2 = s2.value) == null || t2.onDidChangeModelContent((t3) => {
      let n3 = s2.value.getValue();
      n3 !== r2.value && (e2(`update:value`, n3), e2(`change`, n3, t3));
    }), s2.value && !W(r2.line) && s2.value.revealLine(r2.line), e2(`mount`, s2.value, i2.value);
  }
  return { editorRef: s2 };
}
function qe({ emit: e2 }, n2, r2, i2) {
  let a2 = s(null), c2 = t([r2, i2], () => {
    if (r2.value && i2.value) {
      o(() => c2());
      let t2 = r2.value.editor.onDidChangeMarkers((t3) => {
        let n3 = i2.value?.getModel()?.uri;
        n3 && t3.find((e3) => e3.path === n3.path) && e2(`validate`, r2.value.editor.getModelMarkers({ resource: n3 }));
      });
      a2.value = () => t2?.dispose();
    }
  });
  return { disposeValidator: a2 };
}
var X = Object.defineProperty, Z = Object.getOwnPropertySymbols, Je = Object.prototype.hasOwnProperty, Ye = Object.prototype.propertyIsEnumerable, Q = (e2, t2, n2) => t2 in e2 ? X(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, Xe = (e2, t2) => {
  for (var n2 in t2 || (t2 = {})) Je.call(t2, n2) && Q(e2, n2, t2[n2]);
  if (Z) for (var n2 of Z(t2)) Ye.call(t2, n2) && Q(e2, n2, t2[n2]);
  return e2;
}, Ze = { display: `flex`, height: `100%`, width: `100%`, justifyContent: `center`, alignItems: `center` }, $ = a({ name: `VueMonacoDiffEditor`, props: { original: String, modified: String, language: String, originalLanguage: String, modifiedLanguage: String, originalModelPath: String, modifiedModelPath: String, theme: { type: String, default: `vs` }, options: { type: Object, default: () => ({}) }, width: { type: [Number, String], default: `100%` }, height: { type: [Number, String], default: `100%` }, className: String }, setup(e2, n2) {
  let a2 = c(null), { monacoRef: o2, unload: s2, isLoadFailed: l2 } = H(), { diffEditorRef: u2 } = Qe(n2, e2, o2, a2), d2 = i(() => !!o2.value && !!u2.value), { wrapperStyle: f2, containerStyle: p2 } = V(e2, d2);
  return r(() => {
    var e3, t2, n3, r2, i2, a3, c2;
    !o2.value && s2();
    let l3 = (e3 = u2.value)?.getModel?.call(e3);
    (n3 = (t2 = l3?.original)?.dispose) == null || n3.call(t2), (i2 = (r2 = l3?.modified)?.dispose) == null || i2.call(r2), (c2 = (a3 = u2.value)?.dispose) == null || c2.call(a3);
  }), t([() => e2.originalModelPath, () => e2.original, () => e2.originalLanguage, () => e2.language], ([e3, t2, n3, r2], [i2, a3, s3, c2]) => {
    if (!d2.value) return;
    let l3 = u2.value.getOriginalEditor();
    if (e3 !== i2) {
      let i3 = G(o2.value, t2 || ``, n3 || r2 || `text`, e3 || ``);
      l3.setModel(i3);
      return;
    }
    t2 !== l3.getValue() && l3.setValue(t2 || ``), (n3 !== s3 || r2 !== c2) && o2.value.editor.setModelLanguage(u2.value.getModel().original, n3 || r2 || `text`);
  }), t([() => e2.modifiedModelPath, () => e2.modified, () => e2.modifiedLanguage, () => e2.language], ([e3, t2, n3, r2], [i2, a3, s3, c2]) => {
    if (!d2.value) return;
    let l3 = u2.value.getModifiedEditor();
    if (i2 !== e3) {
      let i3 = G(o2.value, t2 || ``, n3 || r2 || `text`, e3 || ``);
      l3.setModel(i3);
      return;
    }
    if (t2 !== l3.getValue()) {
      let e4 = o2.value.editor.EditorOption.readOnly;
      l3.getOption(e4) ? l3.setValue(t2 || ``) : (l3.executeEdits(``, [{ range: l3.getModel().getFullModelRange(), text: t2 || ``, forceMoveMarkers: true }]), l3.pushUndoStop());
    }
    (n3 !== s3 || r2 !== c2) && o2.value.editor.setModelLanguage(u2.value.getModel().modified, n3 || r2 || `text`);
  }), t(() => e2.theme, () => o2.value?.editor.setTheme(e2.theme)), t(() => e2.options, () => u2.value?.updateOptions(e2.options), { deep: true }), { containerRef: a2, isDiffEditorReady: d2, isLoadFailed: l2, wrapperStyle: f2, containerStyle: p2 };
}, render() {
  let { $slots: t2, isDiffEditorReady: n2, isLoadFailed: r2, wrapperStyle: i2, containerStyle: a2, className: o2 } = this;
  return e(`div`, { style: i2 }, [!n2 && e(`div`, { style: Ze }, r2 ? t2.failure ? U(t2.failure) : `load failed` : t2.default ? U(t2.default) : `loading...`), e(`div`, { ref: `containerRef`, key: `monaco_diff_editor_container`, style: a2, class: o2 })]);
} });
function Qe({ emit: e2 }, r2, i2, a2) {
  let s2 = c(null);
  n(() => {
    let e3 = t(i2, () => {
      a2.value && i2.value && (o(() => e3()), l2());
    }, { immediate: true });
  });
  function l2() {
    var t2;
    if (!a2.value || !i2.value || s2.value) return;
    e2(`beforeMount`, i2.value), s2.value = i2.value.editor.createDiffEditor(a2.value, Xe({ automaticLayout: true, autoIndent: `brackets`, theme: r2.theme, formatOnPaste: true, formatOnType: true }, r2.options));
    let n2 = G(i2.value, r2.original || ``, r2.originalLanguage || r2.language || `text`, r2.originalModelPath || ``), o2 = G(i2.value, r2.modified || ``, r2.modifiedLanguage || r2.language || `text`, r2.modifiedModelPath || ``);
    (t2 = s2.value) == null || t2.setModel({ original: n2, modified: o2 }), e2(`mount`, s2.value, i2.value);
  }
  return { diffEditorRef: s2 };
}
function $e(e2, t2) {
  t2 && I.config(t2), e2.component(Y.name, Y), e2.component($.name, $);
}
export {
  I as n,
  $e as t
};
