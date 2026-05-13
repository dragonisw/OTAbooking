var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { o as e } from "./chunk-DcEfI0Mx.js";
import { t } from "./preload-helper-Cb81DA_d.js";
let n, B, K, H, G;
let __tla = (async () => {
  let r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M;
  n = `` + new URL(`lightningcss_node-YoK8fJ2x.wasm`, import.meta.url).href;
  r = 0;
  i = 1;
  a = 3;
  o = 6;
  s = 7;
  c = 9;
  l = 10;
  u = 11;
  d = 13;
  f = 17;
  p = 22;
  m = 1;
  h = 2;
  g = 4;
  _ = 1024;
  v = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array
  ];
  y = [];
  b = class {
    constructor(e2) {
      __publicField(this, "scopes", []);
      __publicField(this, "referenceId", 1);
      __publicField(this, "references", /* @__PURE__ */ new Map());
      __publicField(this, "deferred", [
        null
      ]);
      __publicField(this, "wrappedObjects", /* @__PURE__ */ new WeakMap());
      __publicField(this, "externalObjects", /* @__PURE__ */ new WeakMap());
      __publicField(this, "buffers", /* @__PURE__ */ new Map());
      __publicField(this, "instanceData", 0);
      __publicField(this, "pendingException", null);
      __publicField(this, "_u32", new Uint32Array());
      __publicField(this, "_i32", new Int32Array());
      __publicField(this, "_u16", new Uint16Array());
      __publicField(this, "_u64", new BigUint64Array());
      __publicField(this, "_i64", new BigInt64Array());
      __publicField(this, "_f64", new Float64Array());
      __publicField(this, "_buf", new Uint8Array());
      this.id = y.length, y.push(this), this.instance = e2, this.table = e2.exports.__indirect_function_table, this.exports = {}, this.pushScope();
      let t2 = this.scopes[this.scopes.length - 1], n2 = t2.length;
      t2.push(this.exports);
      try {
        this.instance.exports.napi_register_module_v1 && this.instance.exports.napi_register_module_v1(this.id, n2), this.instance.exports.napi_register_wasm_v1 && this.instance.exports.napi_register_wasm_v1(this.id, n2);
      } finally {
        if (this.popScope(), this.pendingException) {
          let e3 = this.pendingException;
          throw this.pendingException = null, e3;
        }
      }
    }
    destroy() {
      y[this.id] = void 0;
    }
    getString(e2, t2 = N(this.memory, e2)) {
      return x.decode(this.memory.subarray(e2, Math.max(0, e2 + t2)));
    }
    pushScope() {
      let e2 = this.scopes.length;
      return this.scopes.push(e2 ? [
        ...this.scopes[e2 - 1]
      ] : [
        void 0,
        null,
        globalThis,
        true,
        false
      ]), e2;
    }
    popScope() {
      this.scopes.pop();
      for (let [e2, t2] of this.buffers) e2.byteLength && t2.byteLength && e2.set(t2);
      this.buffers.clear();
    }
    get(e2) {
      return this.scopes[this.scopes.length - 1][e2];
    }
    set(e2, t2) {
      this.scopes[this.scopes.length - 1][e2] = t2;
    }
    pushValue(e2, t2 = this.scopes.length - 1) {
      let n2 = this.scopes[t2], r2 = n2.length;
      return n2.push(e2), r2;
    }
    createValue(e2, t2, n2) {
      if (typeof e2 == `boolean`) return this.setPointer(t2, e2 ? 3 : 4), r;
      if (e2 === void 0) return this.setPointer(t2, 0), r;
      if (e2 === null) return this.setPointer(t2, 1), r;
      if (e2 === globalThis) return this.setPointer(t2, 2), r;
      let i2 = this.pushValue(e2, n2);
      return this.setPointer(t2, i2), r;
    }
    setPointer(e2, t2) {
      return this.u32[e2 >> 2] = t2, r;
    }
    get u32() {
      return this._u32.byteLength === 0 && (this._u32 = new Uint32Array(this.instance.exports.memory.buffer)), this._u32;
    }
    get i32() {
      return this._i32.byteLength === 0 && (this._i32 = new Int32Array(this.instance.exports.memory.buffer)), this._i32;
    }
    get u16() {
      return this._u16.byteLength === 0 && (this._u16 = new Uint16Array(this.instance.exports.memory.buffer)), this._u16;
    }
    get u64() {
      return this._u64.byteLength === 0 && (this._u64 = new BigUint64Array(this.instance.exports.memory.buffer)), this._u64;
    }
    get i64() {
      return this._i64.byteLength === 0 && (this._i64 = new BigInt64Array(this.instance.exports.memory.buffer)), this._i64;
    }
    get f64() {
      return this._f64.byteLength === 0 && (this._f64 = new Float64Array(this.instance.exports.memory.buffer)), this._f64;
    }
    get memory() {
      return this._buf.byteLength === 0 && (this._buf = new Uint8Array(this.instance.exports.memory.buffer)), this._buf;
    }
    getBufferInfo(e2, t2) {
      if (this.buffers.has(e2)) {
        let n3 = this.buffers.get(e2);
        return this.setPointer(t2, n3.byteOffset), n3.byteLength;
      }
      if (e2 instanceof ArrayBuffer) {
        let n3 = this.copyBuffer(new Uint8Array(e2));
        return this.setPointer(t2, n3.byteOffset), n3.byteLength;
      }
      if (e2.buffer === this.instance.exports.memory.buffer) return this.setPointer(t2, e2.byteOffset), e2.byteLength;
      let n2 = this.copyBuffer(new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength));
      return this.setPointer(t2, n2.byteOffset), n2.byteLength;
    }
    copyBuffer(e2) {
      let t2 = this.instance.exports.napi_wasm_malloc(e2.byteLength), n2 = this.memory;
      n2.set(e2, t2);
      let r2 = n2.subarray(t2, t2 + e2.byteLength);
      return E.register(r2, new T(this.id, (e3, t3) => {
        this.instance.exports.napi_wasm_free && this.instance.exports.napi_wasm_free(t3);
      }, 0, t2)), this.buffers.set(e2, r2), r2;
    }
    createFunction(e2, t2) {
      let n2 = this, r2 = n2.table.get(e2);
      return function(...e3) {
        let i2 = n2.pushScope();
        try {
          let a2 = n2.scopes[i2], o2 = a2.length;
          a2.push({
            thisArg: this,
            args: e3,
            data: t2,
            newTarget: new.target
          });
          let s2 = r2(n2.id, o2);
          return n2.get(s2);
        } finally {
          if (n2.popScope(), n2.pendingException) {
            let e4 = n2.pendingException;
            throw n2.pendingException = null, e4;
          }
        }
      };
    }
    readPropertyDescriptor(e2) {
      let t2 = this.u32, n2 = t2[e2++], r2 = t2[e2++], i2 = t2[e2++], a2 = t2[e2++], o2 = t2[e2++], s2 = t2[e2++], c2 = t2[e2++], l2 = t2[e2++], u2 = n2 ? this.getString(n2) : this.get(r2), d2 = !!(c2 & m), f2 = !!(c2 & h), p2 = !!(c2 & g), v2 = !!(c2 & _), y2 = a2 ? this.createFunction(a2, l2) : void 0, b2 = o2 ? this.createFunction(o2, l2) : void 0, x2 = i2 ? this.createFunction(i2, l2) : s2 ? this.get(s2) : void 0, S2 = {
        name: u2,
        static: v2,
        configurable: p2,
        enumerable: f2
      };
      return y2 || b2 ? (S2.get = y2, S2.set = b2) : x2 && (S2.writable = d2, S2.value = x2), S2;
    }
  };
  x = new TextDecoder(`utf-8`, {
    ignoreBOM: true,
    fatal: true
  });
  S = new TextDecoder(`latin1`);
  C = new TextDecoder(`utf-16`);
  w = new TextEncoder();
  T = class {
    constructor(e2, t2, n2, r2) {
      this.env = e2, this.finalize = t2, this.hint = n2, this.data = r2;
    }
  };
  E = new FinalizationRegistry((e2) => {
    e2.finalize && e2.finalize(e2.env, e2.data, e2.hint);
  });
  D = class {
  };
  O = [];
  k = class {
    constructor(e2, t2, n2, r2) {
      this.env = e2, this.fn = t2, this.nativeFn = n2, this.context = r2, this.id = O.length, O.push(this);
    }
  };
  A = [
    null
  ];
  j = class {
    constructor(e2, t2, n2, r2) {
      this.env = e2, this.execute = t2, this.complete = n2, this.data = r2, this.id = A.length, A.push(this);
    }
  };
  M = {
    napi_open_handle_scope(e2, t2) {
      let n2 = y[e2], r2 = n2.pushScope();
      return n2.setPointer(t2, r2);
    },
    napi_close_handle_scope(e2, t2) {
      let n2 = y[e2];
      return t2 === n2.scopes.length - 1 ? (n2.popScope(), r) : d;
    },
    napi_open_escapable_handle_scope(e2, t2) {
      let n2 = y[e2], r2 = n2.pushScope();
      return n2.setPointer(t2, r2);
    },
    napi_close_escapable_handle_scope(e2, t2) {
      let n2 = y[e2];
      return t2 === n2.scopes.length - 1 ? (n2.popScope(), r) : d;
    },
    napi_escape_handle(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = i2.get(n2);
      return i2.createValue(a2, r2, t2 - 1);
    },
    napi_create_object(e2, t2) {
      return y[e2].createValue({}, t2);
    },
    napi_set_property(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = a2.get(n2);
      return o2[s2] = a2.get(i2), r;
    },
    napi_get_property(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = i2.get(t2), o2 = i2.get(n2);
      return i2.createValue(a2[o2], r2);
    },
    napi_delete_property(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = a2.get(n2), c2 = false;
      try {
        c2 = delete o2[s2];
      } catch {
      }
      return i2 && (a2.memory[i2] = +!!c2), r;
    },
    napi_has_property(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = a2.get(n2);
      return a2.memory[i2] = +(s2 in o2), r;
    },
    napi_has_own_property(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = a2.get(n2);
      return a2.memory[i2] = +!!o2.hasOwnProperty(s2), r;
    },
    napi_set_named_property(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = a2.get(i2), c2 = a2.getString(n2);
      return o2[c2] = s2, r;
    },
    napi_get_named_property(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = i2.get(t2), o2 = i2.getString(n2);
      return i2.createValue(a2[o2], r2);
    },
    napi_has_named_property(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = a2.getString(n2);
      return a2.memory[i2] = +(s2 in o2), r;
    },
    napi_get_property_names(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2), a2 = Object.keys(i2);
      return r2.createValue(a2, n2);
    },
    napi_get_all_property_names(e2, t2, n2, r2, i2, a2) {
      throw Error(`not implemented`);
    },
    napi_define_properties(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = i2 >> 2;
      for (let e3 = 0; e3 < n2; e3++) {
        let e4 = a2.readPropertyDescriptor(s2);
        Object.defineProperty(o2, e4.name, e4), s2 += 8;
      }
      return r;
    },
    napi_object_freeze(e2, t2) {
      let n2 = y[e2].get(t2);
      return Object.freeze(n2), r;
    },
    napi_object_seal(e2, t2) {
      let n2 = y[e2].get(t2);
      return Object.seal(n2), r;
    },
    napi_get_prototype(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2);
      return r2.createValue(Object.getPrototypeOf(i2), n2);
    },
    napi_define_class(e2, t2, n2, r2, i2, a2, o2, s2) {
      let c2 = y[e2], l2 = c2.createFunction(r2, i2);
      Object.defineProperty(l2, `name`, {
        value: c2.getString(t2, n2),
        configurable: true
      });
      let u2 = o2 >> 2;
      for (let e3 = 0; e3 < a2; e3++) {
        let e4 = c2.readPropertyDescriptor(u2);
        e4.static ? Object.defineProperty(l2, e4.name, e4) : Object.defineProperty(l2.prototype, e4.name, e4), u2 += 8;
      }
      return c2.createValue(l2, s2);
    },
    napi_create_reference(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = i2.referenceId++;
      return i2.references.set(a2, {
        value: i2.get(t2),
        refcount: n2
      }), i2.setPointer(r2, a2);
    },
    napi_delete_reference(e2, t2) {
      return y[e2].references.delete(t2), r;
    },
    napi_get_reference_value(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.references.get(t2);
      return r2.createValue(i2.value, n2);
    },
    napi_reference_ref(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.references.get(t2);
      return i2.refcount++, r2.setPointer(n2, i2.refcount);
    },
    napi_reference_unref(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.references.get(t2);
      return i2.refcount === 0 ? c : (i2.refcount--, r2.setPointer(n2, i2.refcount));
    },
    napi_add_env_cleanup_hook() {
      return r;
    },
    napi_remove_env_cleanup_hook() {
      return r;
    },
    napi_add_async_cleanup_hook() {
      return r;
    },
    napi_remove_async_cleanup_hook() {
      return r;
    },
    napi_set_instance_data(e2, t2, n2, i2) {
      let a2 = y[e2];
      return a2.instanceData = t2, r;
    },
    napi_get_instance_data(e2, t2) {
      let n2 = y[e2];
      return n2.setPointer(t2, n2.instanceData);
    },
    napi_get_boolean(e2, t2, n2) {
      return y[e2].setPointer(n2, t2 ? 3 : 4);
    },
    napi_get_value_bool(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return typeof a2 == `boolean` ? (i2.memory[n2] = +!!a2, r) : s;
    },
    napi_create_int32(e2, t2, n2) {
      return y[e2].createValue(t2, n2);
    },
    napi_get_value_int32(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return typeof a2 == `number` ? (i2.i32[n2 >> 2] = a2, r) : o;
    },
    napi_create_uint32(e2, t2, n2) {
      return y[e2].createValue(t2, n2);
    },
    napi_get_value_uint32(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2);
      return typeof i2 == `number` ? r2.setPointer(n2, i2) : o;
    },
    napi_create_int64(e2, t2, n2) {
      return y[e2].createValue(Number(t2), n2);
    },
    napi_get_value_int64(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return typeof a2 == `number` ? (i2.i64[n2 >> 3] = a2, r) : o;
    },
    napi_create_double(e2, t2, n2) {
      return y[e2].createValue(t2, n2);
    },
    napi_get_value_double(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return typeof a2 == `number` ? (i2.f64[n2 >> 3] = a2, r) : o;
    },
    napi_create_bigint_int64(e2, t2, n2) {
      return y[e2].createValue(BigInt.asIntN(64, t2), n2);
    },
    napi_get_value_bigint_int64(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2);
      return typeof o2 == `bigint` ? (a2.i64[n2 >> 3] = o2, i2 && (a2.memory[i2] = +(BigInt.asIntN(64, o2) === o2)), r) : f;
    },
    napi_create_bigint_uint64(e2, t2, n2) {
      return y[e2].createValue(BigInt.asUintN(64, t2), n2);
    },
    napi_get_value_bigint_uint64(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2);
      return typeof o2 == `bigint` ? (a2.u64[n2 >> 3] = o2, i2 && (a2.memory[i2] = +(BigInt.asUintN(64, o2) === o2)), r) : f;
    },
    napi_create_bigint_words(e2, t2, n2, r2, i2) {
      let a2 = y[e2], o2 = a2.u64, s2 = r2 >> 3, c2 = 0n, l2 = 0n;
      for (let e3 = 0; e3 < n2; e3++) {
        let e4 = o2[s2++];
        c2 += e4 << l2, l2 += 64n;
      }
      return c2 *= BigInt((-1) ** t2), a2.createValue(c2, i2);
    },
    napi_get_value_bigint_words(e2, t2, n2, r2, i2) {
      let a2 = y[e2], o2 = a2.get(t2);
      if (typeof o2 != `bigint`) return f;
      let s2 = a2.u32[r2 >> 2];
      n2 && (a2.i32[n2] = +(o2 < 0n));
      let c2 = 0;
      if (i2) {
        let e3 = (1n << 64n) - 1n, t3 = a2.u64, n3 = i2 >> 3;
        for (o2 < 0n && (o2 = -o2); c2 < s2 && o2 !== 0n; c2++) t3[n3++] = o2 & e3, o2 >>= 64n;
      }
      for (; o2 > 0n; ) c2++, o2 >>= 64n;
      return a2.setPointer(r2, c2);
    },
    napi_get_null(e2, t2) {
      return y[e2].setPointer(t2, 1);
    },
    napi_create_array(e2, t2) {
      return y[e2].createValue([], t2);
    },
    napi_create_array_with_length(e2, t2, n2) {
      return y[e2].createValue(Array(t2), n2);
    },
    napi_set_element(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2);
      return o2[n2] = a2.get(i2), r;
    },
    napi_get_element(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = i2.get(t2)[n2];
      return i2.createValue(a2, r2);
    },
    napi_has_element(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2);
      return a2.memory[i2] = +!!o2.hasOwnProperty(n2), r;
    },
    napi_delete_element(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = false;
      try {
        s2 = delete o2[n2];
      } catch {
      }
      return i2 && (a2.memory[i2] = +!!s2), r;
    },
    napi_get_array_length(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2);
      return r2.setPointer(n2, i2.length);
    },
    napi_get_undefined(e2, t2) {
      return y[e2].setPointer(t2, 0);
    },
    napi_create_function(e2, t2, n2, r2, i2, a2) {
      let o2 = y[e2], s2 = o2.createFunction(r2, i2);
      return Object.defineProperty(s2, `name`, {
        value: o2.getString(t2, n2),
        configurable: true
      }), o2.createValue(s2, a2);
    },
    napi_call_function(e2, t2, n2, r2, i2, a2) {
      let o2 = y[e2], s2 = o2.get(t2), c2 = o2.get(n2), u2 = Array(r2), d2 = o2.u32;
      for (let e3 = 0; e3 < r2; e3++) u2[e3] = o2.get(d2[i2 >> 2]), i2 += 4;
      try {
        let e3 = c2.apply(s2, u2);
        return o2.createValue(e3, a2);
      } catch (e3) {
        return o2.pendingException = e3, l;
      }
    },
    napi_new_instance(e2, t2, n2, r2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = Array(n2), c2 = a2.u32;
      for (let e3 = 0; e3 < n2; e3++) s2[e3] = a2.get(c2[r2 >> 2]), r2 += 4;
      try {
        let e3 = new o2(...s2);
        return a2.createValue(e3, i2);
      } catch (e3) {
        return a2.pendingException = e3, l;
      }
    },
    napi_get_cb_info(e2, t2, n2, i2, a2, o2) {
      let s2 = y[e2], c2 = s2.get(t2);
      s2.setPointer(n2, c2.args.length);
      for (let e3 = 0; e3 < c2.args.length; e3++) s2.createValue(c2.args[e3], i2), i2 += 4;
      return s2.createValue(c2.thisArg, a2), s2.setPointer(o2, c2.data), r;
    },
    napi_get_new_target(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2);
      return r2.createValue(i2.newTarget, n2);
    },
    napi_create_threadsafe_function(e2, t2, n2, i2, a2, o2, s2, c2, l2, u2, d2) {
      let f2 = y[e2], p2 = new k(f2, t2 ? f2.get(t2) : void 0, u2 ? f2.table.get(u2) : void 0, l2);
      if (c2) {
        let t3 = f2.table.get(c2);
        E.register(p2, new T(e2, t3, 0, p2.id));
      }
      return f2.setPointer(d2, p2.id), r;
    },
    napi_ref_threadsafe_function() {
      return r;
    },
    napi_unref_threadsafe_function() {
      return r;
    },
    napi_acquire_threadsafe_function() {
      return r;
    },
    napi_release_threadsafe_function(e2, t2) {
      return O[e2] = void 0, r;
    },
    napi_call_threadsafe_function(e2, t2, n2) {
      let r2 = O[e2];
      r2.env.pushScope();
      try {
        if (r2.nativeFn) {
          let e3 = r2.fn ? r2.env.pushValue(r2.fn) : 0;
          r2.nativeFn(r2.env.id, e3, r2.context, t2);
        } else r2.fn && r2.fn();
      } finally {
        r2.env.popScope();
      }
    },
    napi_get_threadsafe_function_context(e2, t2) {
      let n2 = O[e2];
      return n2.env.setPointer(t2, n2.context), r;
    },
    napi_create_async_work(e2, t2, n2, i2, a2, o2, s2) {
      let c2 = y[e2], l2 = new j(c2, i2 ? c2.table.get(i2) : void 0, a2 ? c2.table.get(a2) : void 0, o2);
      return c2.setPointer(s2, l2.id), r;
    },
    napi_delete_async_work(e2, t2) {
      return A[t2] = void 0, r;
    },
    napi_queue_async_work(e2, t2) {
      return queueMicrotask(() => {
        let n2 = A[t2];
        n2 && (n2.execute(e2, n2.data), n2.complete(e2, r, n2.data));
      }), r;
    },
    napi_cancel_async_work() {
      let e2 = A[work];
      return e2.complete(env, u, e2.data), A[work] = void 0, r;
    },
    napi_throw(e2, t2) {
      let n2 = y[e2];
      return n2.pendingException = n2.get(t2), r;
    },
    napi_throw_error(e2, t2, n2) {
      let i2 = y[e2], a2 = Error(i2.getString(n2));
      return a2.code = t2, i2.pendingException = a2, r;
    },
    napi_throw_type_error(e2, t2, n2) {
      let i2 = y[e2], a2 = TypeError(i2.getString(n2));
      return a2.code = t2, i2.pendingException = a2, r;
    },
    napi_throw_range_error(e2, t2, n2) {
      let i2 = y[e2], a2 = RangeError(i2.getString(n2));
      return a2.code = t2, i2.pendingException = a2, r;
    },
    napi_create_error(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = Error(i2.get(n2));
      return a2.code = i2.get(t2), i2.createValue(a2, r2);
    },
    napi_create_type_error(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = TypeError(i2.get(n2));
      return a2.code = i2.get(t2), i2.createValue(a2, r2);
    },
    napi_create_range_error(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = RangeError(i2.get(n2));
      return a2.code = i2.get(t2), i2.createValue(a2, r2);
    },
    napi_get_and_clear_last_exception(e2, t2) {
      let n2 = y[e2], r2 = n2.pendingException;
      return n2.pendingException = null, n2.createValue(r2, t2);
    },
    napi_is_exception_pending(e2, t2) {
      let n2 = y[e2];
      return n2.memory[t2] = +!!n2.pendingException, r;
    },
    napi_fatal_exception(e2, t2) {
      throw Error(`not implemented`);
    },
    napi_fatal_error(e2, t2, n2, r2) {
      throw Error(`not implemented`);
    },
    napi_get_global(e2, t2) {
      return y[e2].setPointer(t2, 2);
    },
    napi_create_buffer(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = i2.instance.exports.napi_wasm_malloc(t2);
      n2 && i2.setPointer(n2, a2);
      let o2 = globalThis.Buffer === void 0 ? i2.memory.subarray(a2, a2 + t2) : globalThis.Buffer.from(i2.memory.buffer, a2, t2);
      return E.register(o2, new T(e2, (e3, t3) => {
        i2.instance.exports.napi_wasm_free && i2.instance.exports.napi_wasm_free(t3);
      }, 0, a2)), i2.createValue(o2, r2);
    },
    napi_create_buffer_copy(e2, t2, n2, r2, i2) {
      let a2 = y[e2], o2 = a2.instance.exports.napi_wasm_malloc(t2);
      a2.memory.set(a2.memory.subarray(n2, n2 + t2), o2), r2 && a2.setPointer(r2, o2);
      let s2 = globalThis.Buffer === void 0 ? a2.memory.subarray(o2, o2 + t2) : globalThis.Buffer.from(a2.memory.buffer, o2, t2);
      return E.register(buf, new T(e2, (e3, t3) => {
        a2.instance.exports.napi_wasm_free && a2.instance.exports.napi_wasm_free(t3);
      }, 0, o2)), a2.createValue(s2, i2);
    },
    napi_create_external_buffer(e2, t2, n2, r2, i2, a2) {
      let o2 = y[e2], s2 = globalThis.Buffer === void 0 ? o2.memory.subarray(n2, n2 + t2) : globalThis.Buffer.from(o2.memory.buffer, n2, t2);
      if (r2) {
        let t3 = o2.table.get(r2);
        E.register(s2, new T(e2, t3, i2, n2));
      }
      return o2.createValue(s2, a2);
    },
    napi_get_buffer_info(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = i2.get(t2), o2 = i2.getBufferInfo(a2, n2);
      return i2.setPointer(r2, o2);
    },
    napi_create_arraybuffer(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = new ArrayBuffer(t2);
      return n2 && i2.getBufferInfo(a2, n2), i2.createValue(a2, r2);
    },
    napi_create_external_arraybuffer(e2, t2, n2, r2, i2, a2) {
      return p;
    },
    napi_get_arraybuffer_info(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = i2.getBufferInfo(i2.get(t2), n2);
      return i2.setPointer(r2, a2);
    },
    napi_detach_arraybuffer(e2, t2) {
      let n2 = y[e2].get(t2);
      return typeof structuredClone == `function` && structuredClone(n2, {
        transfer: [
          n2
        ]
      }), r;
    },
    napi_is_detached_arraybuffer(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return i2.memory[n2] = +(a2.byteLength === 0), r;
    },
    napi_create_typedarray(e2, t2, n2, r2, i2, a2) {
      let o2 = y[e2], s2 = v[t2], c2 = new s2(o2.get(r2), i2, n2);
      return o2.createValue(c2, a2);
    },
    napi_create_dataview(e2, t2, n2, r2, i2) {
      let a2 = y[e2], o2 = a2.get(n2), s2 = new DataView(o2, r2, t2);
      return a2.createValue(s2, i2);
    },
    napi_get_typedarray_info(e2, t2, n2, r2, i2, a2, o2) {
      let s2 = y[e2], c2 = s2.get(t2);
      return s2.setPointer(n2, v.findIndex((e3) => c2 instanceof e3)), s2.setPointer(r2, c2.length), s2.getBufferInfo(c2, i2), s2.createValue(c2.buffer, a2), s2.setPointer(o2, c2.byteOffset);
    },
    napi_get_dataview_info(e2, t2, n2, r2, i2, a2) {
      let o2 = y[e2], s2 = o2.get(t2);
      return o2.setPointer(n2, s2.byteLength), o2.getBufferInfo(s2, r2), o2.createValue(s2.buffer, i2), o2.setPointer(a2, s2.byteOffset);
    },
    napi_create_string_utf8(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = x.decode(i2.memory.subarray(t2, t2 + n2));
      return i2.createValue(a2, r2);
    },
    napi_get_value_string_utf8(e2, t2, n2, r2, i2) {
      let o2 = y[e2], s2 = o2.get(t2);
      if (typeof s2 != `string`) return a;
      if (n2 == 0) return o2.setPointer(i2, P(s2));
      let c2 = w.encodeInto(s2, o2.memory.subarray(n2, n2 + r2 - 1));
      return o2.memory[n2 + c2.written] = 0, o2.setPointer(i2, c2.written);
    },
    napi_create_string_latin1(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = S.decode(i2.memory.subarray(t2, t2 + n2));
      return i2.createValue(a2, r2);
    },
    napi_get_value_string_latin1(e2, t2, n2, r2, i2) {
      let o2 = y[e2], s2 = o2.get(t2);
      if (typeof s2 != `string`) return a;
      if (n2 == 0) return o2.setPointer(i2, s2.length);
      let c2 = o2.memory, l2 = Math.min(s2.length, r2 - 1);
      for (let e3 = 0; e3 < l2; e3++) {
        let t3 = s2.charCodeAt(e3);
        c2[n2++] = t3;
      }
      return c2[n2] = 0, o2.setPointer(i2, l2);
    },
    napi_create_string_utf16(e2, t2, n2, r2) {
      let i2 = y[e2], a2 = C.decode(i2.memory.subarray(t2, t2 + n2 * 2));
      return i2.createValue(a2, r2);
    },
    napi_get_value_string_utf16(e2, t2, n2, r2, i2) {
      let o2 = y[e2], s2 = o2.get(t2);
      if (typeof s2 != `string`) return a;
      if (n2 == 0) return o2.setPointer(i2, s2.length);
      let c2 = o2.u16, l2 = n2 >> 1, u2 = Math.min(s2.length, r2 - 1);
      for (let e3 = 0; e3 < u2; e3++) {
        let t3 = s2.charCodeAt(e3);
        c2[l2++] = t3;
      }
      return c2[l2] = 0, o2.setPointer(i2, u2);
    },
    napi_create_date(e2, t2, n2) {
      return y[e2].createValue(new Date(t2), n2);
    },
    napi_get_date_value(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2);
      r2.f64[n2 >> 3] = i2.valueOf();
    },
    napi_create_symbol(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2);
      return r2.createValue(Symbol(i2), n2);
    },
    napi_coerce_to_bool(e2, t2, n2) {
      let r2 = y[e2];
      return r2.createValue(!!r2.get(t2), n2);
    },
    napi_coerce_to_number(e2, t2, n2) {
      let r2 = y[e2];
      return r2.createValue(Number(r2.get(t2)), n2);
    },
    napi_coerce_to_object(e2, t2, n2) {
      let r2 = y[e2];
      return r2.createValue(Object(r2.get(t2)), n2);
    },
    napi_coerce_to_string(e2, t2, n2) {
      let r2 = y[e2];
      return r2.createValue(String(r2.get(t2)), n2);
    },
    napi_typeof(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2);
      return r2.setPointer(n2, (() => {
        switch (typeof i2) {
          case `undefined`:
            return 0;
          case `boolean`:
            return 2;
          case `number`:
            return 3;
          case `string`:
            return 4;
          case `symbol`:
            return 5;
          case `object`:
            return i2 === null ? 1 : i2 instanceof D ? 8 : 6;
          case `function`:
            return 7;
          case `bigint`:
            return 9;
        }
      })());
    },
    napi_instanceof(e2, t2, n2, i2) {
      let a2 = y[e2], o2 = a2.get(t2), s2 = a2.get(n2);
      return a2.memory[i2] = +(o2 instanceof s2), r;
    },
    napi_is_array(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return i2.memory[n2] = +!!Array.isArray(a2), r;
    },
    napi_is_buffer(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return i2.memory[n2] = (globalThis.Buffer === void 0 ? a2 instanceof Uint8Array : globalThis.Buffer.isBuffer(a2)) ? 1 : 0, r;
    },
    napi_is_date(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return i2.memory[n2] = +(a2 instanceof Date), r;
    },
    napi_is_error(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return i2.memory[n2] = +(a2 instanceof Error), r;
    },
    napi_is_typedarray(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return i2.memory[n2] = ArrayBuffer.isView(a2) && !(a2 instanceof DataView) ? 1 : 0, r;
    },
    napi_is_dataview(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return i2.memory[n2] = +(a2 instanceof DataView), r;
    },
    napi_strict_equals(e2, t2, n2, i2) {
      let a2 = y[e2];
      return a2.memory[i2] = +(a2.get(t2) === a2.get(n2)), r;
    },
    napi_wrap(e2, t2, n2, i2, a2, o2) {
      let s2 = y[e2], c2 = s2.get(t2);
      if (s2.wrappedObjects.set(c2, n2), i2) {
        let t3 = s2.table.get(i2);
        E.register(c2, new T(e2, t3, a2, n2));
      }
      return o2 ? M.napi_create_reference(e2, t2, 1, o2) : r;
    },
    napi_unwrap(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2), o2 = i2.wrappedObjects.get(a2);
      return i2.setPointer(n2, o2), r;
    },
    napi_remove_wrap(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2), a2 = r2.wrappedObjects.get(i2);
      return E.unregister(i2), r2.wrappedObjects.delete(i2), r2.setPointer(n2, a2);
    },
    napi_type_tag_object(e2, t2, n2) {
      throw Error(`not implemented`);
    },
    napi_check_object_type_tag(e2, t2, n2) {
      throw Error(`not implemented`);
    },
    napi_add_finalizer(e2, t2, n2, i2, a2, o2) {
      let s2 = y[e2], c2 = s2.get(t2), l2 = s2.table.get(i2);
      return E.register(c2, new T(e2, l2, a2, n2)), o2 ? M.napi_create_reference(e2, t2, 1, o2) : r;
    },
    napi_create_promise(e2, t2, n2) {
      let r2 = y[e2], i2 = new Promise((e3, n3) => {
        let i3 = r2.deferred.length;
        r2.deferred.push({
          resolve: e3,
          reject: n3
        }), r2.setPointer(t2, i3);
      });
      return r2.createValue(i2, n2);
    },
    napi_resolve_deferred(e2, t2, n2) {
      let i2 = y[e2], { resolve: a2 } = i2.deferred[t2];
      return a2(i2.get(n2)), i2.deferred[t2] = void 0, r;
    },
    napi_reject_deferred(e2, t2, n2) {
      let i2 = y[e2], { reject: a2 } = i2.deferred[t2];
      return a2(i2.get(n2)), i2.deferred[t2] = void 0, r;
    },
    napi_is_promise(e2, t2, n2) {
      let i2 = y[e2], a2 = i2.get(t2);
      return i2.memory[n2] = +(a2 instanceof Promise), r;
    },
    napi_run_script(e2, t2, n2) {
      let r2 = y[e2], i2 = r2.get(t2), a2 = (0, eval)(i2);
      return r2.createValue(a2, n2);
    },
    napi_create_external(e2, t2, n2, r2, i2) {
      let a2 = y[e2], o2 = new D();
      if (a2.externalObjects.set(o2, t2), n2) {
        let i3 = a2.table.get(n2);
        E.register(o2, new T(e2, i3, r2, t2));
      }
      return a2.createValue(o2, i2);
    },
    napi_get_value_external(e2, t2, n2) {
      let r2 = y[e2], a2 = r2.get(t2), o2 = r2.externalObjects.get(a2);
      return o2 ? r2.setPointer(n2, o2) : i;
    },
    napi_adjust_external_memory() {
      return r;
    }
  };
  function N(e2, t2) {
    let n2 = 0;
    for (; e2[t2] !== 0; ) n2++, t2++;
    return n2;
  }
  function P(e2) {
    let t2 = 0;
    for (let n2 = 0; n2 < e2.length; n2++) {
      let r2 = e2.charCodeAt(n2);
      if (r2 >= 55296 && r2 <= 56319 && n2 < e2.length - 1) {
        let t3 = e2.charCodeAt(++n2);
        (t3 & 64512) == 56320 ? r2 = ((r2 & 1023) << 10) + (t3 & 1023) + 65536 : n2--;
      }
      r2 & 4294967168 ? r2 & 4294965248 ? r2 & 4294901760 ? r2 & 4292870144 || (t2 += 4) : t2 += 3 : t2 += 2 : t2++;
    }
    return t2;
  }
  var F;
  function I(e2, t2, n2) {
    F(e2, t2, n2);
  }
  var L = {
    None: 0,
    Unwinding: 1,
    Rewinding: 2
  };
  function R(e2) {
    let { instance: t2, exports: n2 } = e2, { asyncify_get_state: r2, asyncify_start_unwind: i2, asyncify_stop_unwind: a2, asyncify_start_rewind: o2, asyncify_stop_rewind: s2 } = t2.exports, c2 = t2.exports.napi_wasm_malloc(4104), l2 = c2 + 8, u2 = c2 + 8 + 4096;
    new Int32Array(e2.memory.buffer, c2).set([
      l2,
      u2
    ]);
    function d2() {
      if (r2() !== L.None) throw Error(`Invalid async state ${r2()}, expected 0.`);
    }
    let f2, p2, m2;
    return F = (t3, n3, a3) => {
      if (r2() === L.Rewinding) {
        s2(), p2 != null && e2.createValue(p2, n3), m2 != null && e2.createValue(m2, a3), f2 = p2 = m2 = null;
        return;
      }
      d2(), f2 = e2.get(t3), i2(c2);
    }, async function(e3) {
      d2();
      let t3 = n2.bundle(e3);
      for (; r2() === L.Unwinding; ) {
        a2();
        try {
          p2 = await f2;
        } catch (e4) {
          m2 = e4;
        }
        d2(), o2(c2), t3 = n2.bundle(e3);
      }
      return d2(), t3;
    };
  }
  var z = {
    and_chr: `chrome`,
    and_ff: `firefox`,
    ie_mob: `ie`,
    op_mob: `opera`,
    and_qq: null,
    and_uc: null,
    baidu: null,
    bb: null,
    kaios: null,
    op_mini: null
  };
  B = function(e2) {
    let t2 = {};
    for (let n2 of e2) {
      let [e3, r2] = n2.split(` `);
      if (z[e3] === null) continue;
      let i2 = V(r2);
      i2 != null && (t2[e3] == null || i2 < t2[e3]) && (t2[e3] = i2);
    }
    return t2;
  };
  function V(e2) {
    let [t2, n2 = 0, r2 = 0] = e2.split(`-`)[0].split(`.`).map((e3) => parseInt(e3, 10));
    return isNaN(t2) || isNaN(n2) || isNaN(r2) ? null : t2 << 16 | n2 << 8 | r2;
  }
  let U, W;
  H = {
    Nesting: 1,
    NotSelectorList: 2,
    DirSelector: 4,
    LangSelectorList: 8,
    IsSelector: 16,
    TextDecorationThicknessPercent: 32,
    MediaIntervalSyntax: 64,
    MediaRangeSyntax: 128,
    CustomMediaQueries: 256,
    ClampFunction: 512,
    ColorFunction: 1024,
    OklabColors: 2048,
    LabColors: 4096,
    P3Colors: 8192,
    HexAlphaColors: 16384,
    SpaceSeparatedColorNotation: 32768,
    FontFamilySystemUi: 65536,
    DoublePositionGradients: 131072,
    VendorPrefixes: 262144,
    LogicalProperties: 524288,
    LightDark: 1048576,
    Selectors: 31,
    MediaQueries: 448,
    Colors: 1113088
  };
  G = async function(e2) {
    if (U) return;
    if (W) {
      await W;
      return;
    }
    e2 ?? (e2 = new URL(`` + new URL(`lightningcss_node-YoK8fJ2x.wasm`, import.meta.url).href, `` + import.meta.url)), (typeof e2 == `string` || typeof Request == `function` && e2 instanceof Request || typeof URL == `function` && e2 instanceof URL) && (e2 = Y(e2));
    let t2;
    W = e2.then((e3) => J(e3, {
      env: {
        ...M,
        await_promise_sync: I,
        __getrandom_v03_custom: (e4, n2) => {
          let r2 = t2.memory.subarray(e4, e4 + n2);
          crypto.getRandomValues(r2);
        }
      }
    })).then(({ instance: e3 }) => {
      e3.exports.register_module(), t2 = new b(e3), R(t2), U = t2.exports;
    }), await W;
  };
  K = function(e2) {
    return q(U.transform, e2);
  };
  function q(e2, t2) {
    if (typeof t2.visitor == `function`) {
      let n2 = [];
      t2.visitor = t2.visitor({
        addDependency(e3) {
          n2.push(e3);
        }
      });
      let r2 = e2(t2);
      return r2 instanceof Promise ? r2 = r2.then((e3) => (n2.length && (e3.dependencies ?? (e3.dependencies = []), e3.dependencies.push(...n2)), e3)) : n2.length && (r2.dependencies ?? (r2.dependencies = []), r2.dependencies.push(...n2)), r2;
    } else return e2(t2);
  }
  async function J(e2, t2) {
    if (typeof Response == `function` && e2 instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == `function`) try {
        return await WebAssembly.instantiateStreaming(e2, t2);
      } catch (t3) {
        if (e2.headers.get(`Content-Type`) != `application/wasm`) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t3);
        else throw t3;
      }
      let n2 = await e2.arrayBuffer();
      return await WebAssembly.instantiate(n2, t2);
    } else {
      let n2 = await WebAssembly.instantiate(e2, t2);
      return n2 instanceof WebAssembly.Instance ? {
        instance: n2,
        module: e2
      } : n2;
    }
  }
  async function Y(n2) {
    try {
      return (await t(() => import("./lib-CN4JKC8-.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((t2) => e(t2.default, 1)), [], import.meta.url)).readFileSync(n2);
    } catch {
      return fetch(n2);
    }
  }
})();
export {
  __tla,
  n as a,
  B as i,
  K as n,
  H as r,
  G as t
};
