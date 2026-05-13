import { o as e } from "./chunk-DcEfI0Mx.js";
import { $n as t, D as n, E as r, En as i, Ht as a, Lt as o, On as s, Rt as c, Tn as l, Ut as u, Zn as d, _ as f, b as p, bt as m, ct as h, er as g, et as _, ft as v, g as y, gn as b, k as x, l as S, mt as C, o as w, qt as T, tr as E, tt as D, u as O, v as k, vn as A, w as j, wn as M, wt as ee, xt as N, y as P, z as te } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { l as F } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { i as ne } from "./log-BcOb3xTO.js";
import { B as re, E as I, I as L, J as ie, L as ae, S as R, U as oe, W as se, _ as ce, b as le, g as ue, h as de, m as fe, p as pe, t as z, v as me, w as he, x as ge, y as B, z as _e } from "./Button-BArxwKIq.js";
import { A as ve, b as ye, l as be, n as xe, o as Se, v as Ce, y as V } from "./dist-BY3QSpe-.js";
import { B as we, F as H, H as Te, I as Ee, L as De, O as U, j as Oe, k as W, m as ke, z as G } from "./namespaced-DHs_Dn1j.js";
import { t as Ae } from "./clamp-DWsB7m9b.js";
import { C as je, c as Me, d as K, f as Ne, g as Pe, h as Fe, i as Ie, l as Le, o as Re, p as ze, u as Be, v as Ve, w as He, y as q } from "./Tooltip-DkuatXWt.js";
import { r as Ue } from "./VisuallyHiddenInput-Dr3Nvdqq.js";
import { t as We } from "./useOverlay-C2LwRyT9.js";
import { n as Ge } from "./useToast-pUqC-jjk.js";
import { t as J } from "./Modal-DQCfHGMa.js";
import { t as Ke } from "./Input-CxsBLKN7.js";
import { t as qe } from "./api-3yDUayxW.js";
import { n as Je } from "./index.browser-DTH_RVqO.js";
import { n as Ye, r as Xe, t as Ze } from "./settings-CIp0eD-X.js";
import { t as Qe } from "./isEqual-i1JvoB7a.js";
import { t as Y } from "./preload-helper-Cb81DA_d.js";
import { t as $e } from "./dist-DRk9LJ9_.js";
import { t as et } from "./path-browserify-4cnqpSC3.js";
import { n as tt } from "./vfs-DziqLF6T.js";
import { n as nt, t as rt } from "./dist-BIBZ-xIq.js";
import { t as it } from "./dayjs.min-Cl8Nnywg.js";
import { t as at } from "./FormField-B4xYJKfX.js";
let zt, $, mn;
let __tla = (async () => {
  var ot = [
    ` `,
    `Enter`,
    `ArrowUp`,
    `ArrowDown`
  ], st = [
    ` `,
    `Enter`
  ];
  function X(e2, t2, n2) {
    return e2 === void 0 ? false : Array.isArray(e2) ? e2.some((e3) => ct(e3, t2, n2)) : ct(e2, t2, n2);
  }
  function ct(e2, t2, n2) {
    return e2 === void 0 || t2 === void 0 ? false : typeof e2 == `string` ? e2 === t2 : typeof n2 == `function` ? n2(e2, t2) : typeof n2 == `string` ? e2?.[n2] === t2?.[n2] : oe(e2, t2);
  }
  function lt(e2) {
    return e2 == null || e2 === `` || Array.isArray(e2) && e2.length === 0;
  }
  let ut, Z, dt, ft, pt, mt, ht, Q, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an;
  ut = {
    key: 0,
    value: ``
  };
  [Z, dt] = I(`SelectRoot`);
  ft = x({
    inheritAttrs: false,
    __name: `SelectRoot`,
    props: {
      open: {
        type: Boolean,
        required: false,
        default: void 0
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      modelValue: {
        type: null,
        required: false,
        default: void 0
      },
      by: {
        type: [
          String,
          Function
        ],
        required: false
      },
      dir: {
        type: String,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      autocomplete: {
        type: String,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      required: {
        type: Boolean,
        required: false
      }
    },
    emits: [
      `update:modelValue`,
      `update:open`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { required: i2, disabled: a2, multiple: o2, dir: c2 } = l(n2), u2 = ye(n2, `modelValue`, r2, {
        defaultValue: n2.defaultValue ?? (o2.value ? [] : void 0),
        passive: n2.modelValue === void 0,
        deep: true
      }), d2 = ye(n2, `open`, r2, {
        defaultValue: n2.defaultOpen,
        passive: n2.open === void 0
      }), f2 = A(), h2 = A(), g2 = A({
        x: 0,
        y: 0
      }), v2 = y(() => o2.value && Array.isArray(u2.value) ? u2.value?.length === 0 : je(u2.value));
      U({
        isProvider: true
      });
      let b2 = G(c2), x2 = Ue(f2), S2 = A(/* @__PURE__ */ new Set()), E2 = y(() => Array.from(S2.value).map((e3) => e3.value).join(`;`));
      function D2(e3) {
        if (o2.value) {
          let t3 = Array.isArray(u2.value) ? [
            ...u2.value
          ] : [], r3 = t3.findIndex((t4) => ct(t4, e3, n2.by));
          r3 === -1 ? t3.push(e3) : t3.splice(r3, 1), u2.value = [
            ...t3
          ];
        } else u2.value = e3;
      }
      function O2(e3) {
        return Array.from(S2.value).find((t3) => X(e3, t3.value, n2.by));
      }
      return dt({
        triggerElement: f2,
        onTriggerChange: (e3) => {
          f2.value = e3;
        },
        valueElement: h2,
        onValueElementChange: (e3) => {
          h2.value = e3;
        },
        contentId: ``,
        modelValue: u2,
        onValueChange: D2,
        by: n2.by,
        open: d2,
        multiple: o2,
        required: i2,
        onOpenChange: (e3) => {
          d2.value = e3;
        },
        dir: b2,
        triggerPointerDownPosRef: g2,
        disabled: a2,
        isEmptyModelValue: v2,
        optionsSet: S2,
        onOptionAdd: (e3) => {
          let t3 = O2(e3.value);
          t3 && S2.value.delete(t3), S2.value.add(e3);
        },
        onOptionRemove: (e3) => {
          let t3 = O2(e3.value);
          t3 && S2.value.delete(t3);
        }
      }), (e3, t3) => (C(), k(s(Be), null, {
        default: T(() => [
          N(e3.$slots, `default`, {
            modelValue: s(u2),
            open: s(d2)
          }),
          s(x2) && e3.name ? (C(), k(pt, {
            key: E2.value,
            "aria-hidden": `true`,
            tabindex: `-1`,
            multiple: s(o2),
            required: s(i2),
            name: e3.name,
            autocomplete: e3.autocomplete,
            disabled: s(a2),
            value: s(u2)
          }, {
            default: T(() => [
              s(je)(s(u2)) ? (C(), p(`option`, ut)) : P(`v-if`, true),
              (C(true), p(w, null, m(Array.from(S2.value), (e4) => (C(), p(`option`, _({
                key: e4.value ?? ``
              }, {
                ref_for: true
              }, e4), null, 16))), 128))
            ]),
            _: 1
          }, 8, [
            `multiple`,
            `required`,
            `name`,
            `autocomplete`,
            `disabled`,
            `value`
          ])) : P(`v-if`, true)
        ]),
        _: 3
      }));
    }
  });
  pt = x({
    __name: `BubbleSelect`,
    props: {
      autocomplete: {
        type: String,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      form: {
        type: String,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      required: {
        type: Boolean,
        required: false
      },
      size: {
        type: Number,
        required: false
      },
      value: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = A(), r2 = Z();
      a(() => t2.value, (e3, t3) => {
        let r3 = window.HTMLSelectElement.prototype, i3 = Object.getOwnPropertyDescriptor(r3, `value`).set;
        if (e3 !== t3 && i3 && n2.value) {
          let t4 = new Event(`change`, {
            bubbles: true
          });
          i3.call(n2.value, e3), n2.value.dispatchEvent(t4);
        }
      });
      function i2(e3) {
        r2.onValueChange(e3.target.value);
      }
      return (e3, r3) => (C(), k(s(K), {
        "as-child": ``
      }, {
        default: T(() => [
          f(`select`, _({
            ref_key: `selectElement`,
            ref: n2
          }, t2, {
            onInput: i2
          }), [
            N(e3.$slots, `default`)
          ], 16)
        ]),
        _: 3
      }));
    }
  });
  mt = x({
    __name: `SelectPopperPosition`,
    props: {
      side: {
        type: null,
        required: false
      },
      sideOffset: {
        type: Number,
        required: false
      },
      sideFlip: {
        type: Boolean,
        required: false
      },
      align: {
        type: null,
        required: false,
        default: `start`
      },
      alignOffset: {
        type: Number,
        required: false
      },
      alignFlip: {
        type: Boolean,
        required: false
      },
      avoidCollisions: {
        type: Boolean,
        required: false
      },
      collisionBoundary: {
        type: null,
        required: false
      },
      collisionPadding: {
        type: [
          Number,
          Object
        ],
        required: false,
        default: 10
      },
      arrowPadding: {
        type: Number,
        required: false
      },
      hideShiftedArrow: {
        type: Boolean,
        required: false
      },
      sticky: {
        type: String,
        required: false
      },
      hideWhenDetached: {
        type: Boolean,
        required: false
      },
      positionStrategy: {
        type: String,
        required: false
      },
      updatePositionStrategy: {
        type: String,
        required: false
      },
      disableUpdateOnLayoutShift: {
        type: Boolean,
        required: false
      },
      prioritizePosition: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = he(e2);
      return (e3, n2) => (C(), k(s(Me), _(s(t2), {
        style: {
          boxSizing: `border-box`,
          "--reka-select-content-transform-origin": `var(--reka-popper-transform-origin)`,
          "--reka-select-content-available-width": `var(--reka-popper-available-width)`,
          "--reka-select-content-available-height": `var(--reka-popper-available-height)`,
          "--reka-select-trigger-width": `var(--reka-popper-anchor-width)`,
          "--reka-select-trigger-height": `var(--reka-popper-anchor-height)`
        }
      }), {
        default: T(() => [
          N(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  });
  ht = {
    onViewportChange: () => {
    },
    itemTextRefCallback: () => {
    },
    itemRefCallback: () => {
    }
  };
  [Q, gt] = I(`SelectContent`);
  _t = x({
    __name: `SelectContentImpl`,
    props: {
      position: {
        type: String,
        required: false,
        default: `item-aligned`
      },
      bodyLock: {
        type: Boolean,
        required: false,
        default: true
      },
      side: {
        type: null,
        required: false
      },
      sideOffset: {
        type: Number,
        required: false
      },
      sideFlip: {
        type: Boolean,
        required: false
      },
      align: {
        type: null,
        required: false,
        default: `start`
      },
      alignOffset: {
        type: Number,
        required: false
      },
      alignFlip: {
        type: Boolean,
        required: false
      },
      avoidCollisions: {
        type: Boolean,
        required: false
      },
      collisionBoundary: {
        type: null,
        required: false
      },
      collisionPadding: {
        type: [
          Number,
          Object
        ],
        required: false
      },
      arrowPadding: {
        type: Number,
        required: false
      },
      hideShiftedArrow: {
        type: Boolean,
        required: false
      },
      sticky: {
        type: String,
        required: false
      },
      hideWhenDetached: {
        type: Boolean,
        required: false
      },
      positionStrategy: {
        type: String,
        required: false
      },
      updatePositionStrategy: {
        type: String,
        required: false
      },
      disableUpdateOnLayoutShift: {
        type: Boolean,
        required: false
      },
      prioritizePosition: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      },
      disableOutsidePointerEvents: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    emits: [
      `closeAutoFocus`,
      `escapeKeyDown`,
      `pointerDownOutside`
    ],
    setup(e2, { emit: t2 }) {
      let r2 = e2, i2 = t2, o2 = Z();
      De(), we(r2.bodyLock);
      let { CollectionSlot: c2, getItems: l2 } = U(), d2 = A();
      Ee(d2);
      let { search: f2, handleTypeaheadSearch: p2 } = H(), m2 = A(), h2 = A(), g2 = A(), v2 = A(false), b2 = A(false), x2 = A(false);
      function S2() {
        h2.value && d2.value && W([
          h2.value,
          d2.value
        ]);
      }
      a(v2, () => {
        S2();
      });
      let { onOpenChange: w2, triggerPointerDownPosRef: E2 } = o2;
      u((e3) => {
        if (!d2.value) return;
        let t3 = {
          x: 0,
          y: 0
        }, n2 = (e4) => {
          t3 = {
            x: Math.abs(Math.round(e4.pageX) - (E2.value?.x ?? 0)),
            y: Math.abs(Math.round(e4.pageY) - (E2.value?.y ?? 0))
          };
        }, r3 = (e4) => {
          e4.pointerType !== `touch` && (t3.x <= 10 && t3.y <= 10 ? e4.preventDefault() : d2.value?.contains(e4.target) || w2(false), document.removeEventListener(`pointermove`, n2), E2.value = null);
        };
        E2.value !== null && (document.addEventListener(`pointermove`, n2), document.addEventListener(`pointerup`, r3, {
          capture: true,
          once: true
        })), e3(() => {
          document.removeEventListener(`pointermove`, n2), document.removeEventListener(`pointerup`, r3, {
            capture: true
          });
        });
      });
      function D2(e3) {
        let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
        if (e3.key === `Tab` && e3.preventDefault(), !t3 && e3.key.length === 1 && p2(e3.key, l2()), [
          `ArrowUp`,
          `ArrowDown`,
          `Home`,
          `End`
        ].includes(e3.key)) {
          let t4 = [
            ...l2().map((e4) => e4.ref)
          ];
          if ([
            `ArrowUp`,
            `End`
          ].includes(e3.key) && (t4 = t4.slice().reverse()), [
            `ArrowUp`,
            `ArrowDown`
          ].includes(e3.key)) {
            let n2 = e3.target, r3 = t4.indexOf(n2);
            t4 = t4.slice(r3 + 1);
          }
          setTimeout(() => W(t4)), e3.preventDefault();
        }
      }
      let O2 = he(y(() => r2.position === `popper` ? r2 : {}).value);
      return gt({
        content: d2,
        viewport: m2,
        onViewportChange: (e3) => {
          m2.value = e3;
        },
        itemRefCallback: (e3, t3, n2) => {
          let r3 = !b2.value && !n2, i3 = X(o2.modelValue.value, t3, o2.by);
          if (o2.multiple.value) {
            if (x2.value) return;
            (i3 || r3) && (h2.value = e3, i3 && (x2.value = true));
          } else (i3 || r3) && (h2.value = e3);
          r3 && (b2.value = true);
        },
        selectedItem: h2,
        selectedItemText: g2,
        onItemLeave: () => {
          d2.value?.focus();
        },
        itemTextRefCallback: (e3, t3, n2) => {
          let r3 = !b2.value && !n2;
          (X(o2.modelValue.value, t3, o2.by) || r3) && (g2.value = e3);
        },
        focusSelectedItem: S2,
        position: r2.position,
        isPositioned: v2,
        searchRef: f2
      }), (e3, t3) => (C(), k(s(c2), null, {
        default: T(() => [
          n(s(Oe), {
            "as-child": ``,
            onMountAutoFocus: t3[6] || (t3[6] = F(() => {
            }, [
              `prevent`
            ])),
            onUnmountAutoFocus: t3[7] || (t3[7] = (e4) => {
              i2(`closeAutoFocus`, e4), !e4.defaultPrevented && (s(o2).triggerElement.value?.focus({
                preventScroll: true
              }), e4.preventDefault());
            })
          }, {
            default: T(() => [
              n(s(ze), {
                "as-child": ``,
                "disable-outside-pointer-events": e3.disableOutsidePointerEvents,
                onFocusOutside: t3[2] || (t3[2] = F(() => {
                }, [
                  `prevent`
                ])),
                onDismiss: t3[3] || (t3[3] = (e4) => s(o2).onOpenChange(false)),
                onEscapeKeyDown: t3[4] || (t3[4] = (e4) => i2(`escapeKeyDown`, e4)),
                onPointerDownOutside: t3[5] || (t3[5] = (e4) => i2(`pointerDownOutside`, e4))
              }, {
                default: T(() => [
                  (C(), k(ee(e3.position === `popper` ? mt : bt), _({
                    ...e3.$attrs,
                    ...s(O2)
                  }, {
                    id: s(o2).contentId,
                    ref: (e4) => {
                      if (!e4) return;
                      let t4 = s(Se)(e4);
                      t4?.hasAttribute(`data-reka-popper-content-wrapper`) ? d2.value = t4.firstElementChild : d2.value = t4;
                    },
                    role: `listbox`,
                    "data-state": s(o2).open.value ? `open` : `closed`,
                    dir: s(o2).dir.value,
                    style: {
                      display: `flex`,
                      flexDirection: `column`,
                      outline: `none`
                    },
                    onContextmenu: t3[0] || (t3[0] = F(() => {
                    }, [
                      `prevent`
                    ])),
                    onPlaced: t3[1] || (t3[1] = (e4) => v2.value = true),
                    onKeydown: D2
                  }), {
                    default: T(() => [
                      N(e3.$slots, `default`)
                    ]),
                    _: 3
                  }, 16, [
                    `id`,
                    `data-state`,
                    `dir`,
                    `onKeydown`
                  ]))
                ]),
                _: 3
              }, 8, [
                `disable-outside-pointer-events`
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }));
    }
  });
  [vt, yt] = I(`SelectItemAlignedPosition`);
  bt = x({
    inheritAttrs: false,
    __name: `SelectItemAlignedPosition`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    emits: [
      `placed`
    ],
    setup(e2, { emit: t2 }) {
      let r2 = e2, i2 = t2, { getItems: a2 } = U(), o2 = Z(), c2 = Q(), l2 = A(false), u2 = A(true), d2 = A(), { forwardRef: f2, currentElement: m2 } = q(), { viewport: v2, selectedItem: y2, selectedItemText: b2, focusSelectedItem: x2 } = c2;
      function S2() {
        if (o2.triggerElement.value && o2.valueElement.value && d2.value && m2.value && v2?.value && y2?.value && b2?.value) {
          let e3 = o2.triggerElement.value.getBoundingClientRect(), t3 = m2.value.getBoundingClientRect(), n2 = o2.valueElement.value.getBoundingClientRect(), r3 = b2.value.getBoundingClientRect();
          if (o2.dir.value !== `rtl`) {
            let i3 = r3.left - t3.left, a3 = n2.left - i3, o3 = e3.left - a3, s3 = e3.width + o3, c4 = Math.max(s3, t3.width), l3 = window.innerWidth - 10, u4 = Ae(a3, 10, Math.max(10, l3 - c4));
            d2.value.style.minWidth = `${s3}px`, d2.value.style.left = `${u4}px`;
          } else {
            let i3 = t3.right - r3.right, a3 = window.innerWidth - n2.right - i3, o3 = window.innerWidth - e3.right - a3, s3 = e3.width + o3, c4 = Math.max(s3, t3.width), l3 = window.innerWidth - 10, u4 = Ae(a3, 10, Math.max(10, l3 - c4));
            d2.value.style.minWidth = `${s3}px`, d2.value.style.right = `${u4}px`;
          }
          let s2 = a2().map((e4) => e4.ref), c3 = window.innerHeight - 20, u3 = v2.value.scrollHeight, f3 = window.getComputedStyle(m2.value), p2 = Number.parseInt(f3.borderTopWidth, 10), h2 = Number.parseInt(f3.paddingTop, 10), g2 = Number.parseInt(f3.borderBottomWidth, 10), _2 = Number.parseInt(f3.paddingBottom, 10), x3 = p2 + h2 + u3 + _2 + g2, S3 = Math.min(y2.value.offsetHeight * 5, x3), C2 = window.getComputedStyle(v2.value), w3 = Number.parseInt(C2.paddingTop, 10), T2 = Number.parseInt(C2.paddingBottom, 10), E3 = e3.top + e3.height / 2 - 10, D2 = c3 - E3, O2 = y2.value.offsetHeight / 2, k2 = y2.value.offsetTop + O2, A2 = p2 + h2 + k2, j2 = x3 - A2;
          if (A2 <= E3) {
            let e4 = y2.value === s2.at(-1);
            d2.value.style.bottom = `0px`;
            let t4 = m2.value.clientHeight - v2.value.offsetTop - v2.value.offsetHeight, n3 = A2 + Math.max(D2, O2 + (e4 ? T2 : 0) + t4 + g2);
            d2.value.style.height = `${n3}px`;
          } else {
            let e4 = y2.value === s2[0];
            d2.value.style.top = `0px`;
            let t4 = Math.max(E3, p2 + v2.value.offsetTop + (e4 ? w3 : 0) + O2) + j2;
            d2.value.style.height = `${t4}px`, v2.value.scrollTop = A2 - E3 + v2.value.offsetTop;
          }
          d2.value.style.margin = `10px 0`, d2.value.style.minHeight = `${S3}px`, d2.value.style.maxHeight = `${c3}px`, i2(`placed`), requestAnimationFrame(() => l2.value = true);
        }
      }
      let w2 = A(``);
      h(async () => {
        await D(), S2(), m2.value && (w2.value = window.getComputedStyle(m2.value).zIndex);
      });
      function E2(e3) {
        e3 && u2.value === true && (S2(), x2?.(), u2.value = false);
      }
      return Ce(o2.triggerElement, () => {
        S2();
      }), yt({
        contentWrapper: d2,
        shouldExpandOnScrollRef: l2,
        onScrollButtonChange: E2
      }), (e3, t3) => (C(), p(`div`, {
        ref_key: `contentWrapperElement`,
        ref: d2,
        style: g({
          display: `flex`,
          flexDirection: `column`,
          position: `fixed`,
          zIndex: w2.value
        })
      }, [
        n(s(R), _({
          ref: s(f2),
          style: {
            boxSizing: `border-box`,
            maxHeight: `100%`
          }
        }, {
          ...e3.$attrs,
          ...r2
        }), {
          default: T(() => [
            N(e3.$slots, `default`)
          ]),
          _: 3
        }, 16)
      ], 4));
    }
  });
  xt = x({
    __name: `SelectArrow`,
    props: {
      width: {
        type: Number,
        required: false,
        default: 10
      },
      height: {
        type: Number,
        required: false,
        default: 5
      },
      rounded: {
        type: Boolean,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `svg`
      }
    },
    setup(e2) {
      let n2 = e2, r2 = Q(ht);
      return (e3, i2) => s(r2).position === `popper` ? (C(), k(s(Re), t(_({
        key: 0
      }, n2)), {
        default: T(() => [
          N(e3.$slots, `default`)
        ]),
        _: 3
      }, 16)) : P(`v-if`, true);
    }
  });
  St = x({
    inheritAttrs: false,
    __name: `SelectProvider`,
    props: {
      context: {
        type: Object,
        required: true
      }
    },
    setup(e2) {
      return dt(e2.context), gt(ht), (e3, t2) => N(e3.$slots, `default`);
    }
  });
  Ct = {
    key: 1
  };
  wt = x({
    inheritAttrs: false,
    __name: `SelectContent`,
    props: {
      forceMount: {
        type: Boolean,
        required: false
      },
      position: {
        type: String,
        required: false
      },
      bodyLock: {
        type: Boolean,
        required: false
      },
      side: {
        type: null,
        required: false
      },
      sideOffset: {
        type: Number,
        required: false
      },
      sideFlip: {
        type: Boolean,
        required: false
      },
      align: {
        type: null,
        required: false
      },
      alignOffset: {
        type: Number,
        required: false
      },
      alignFlip: {
        type: Boolean,
        required: false
      },
      avoidCollisions: {
        type: Boolean,
        required: false
      },
      collisionBoundary: {
        type: null,
        required: false
      },
      collisionPadding: {
        type: [
          Number,
          Object
        ],
        required: false
      },
      arrowPadding: {
        type: Number,
        required: false
      },
      hideShiftedArrow: {
        type: Boolean,
        required: false
      },
      sticky: {
        type: String,
        required: false
      },
      hideWhenDetached: {
        type: Boolean,
        required: false
      },
      positionStrategy: {
        type: String,
        required: false
      },
      updatePositionStrategy: {
        type: String,
        required: false
      },
      disableUpdateOnLayoutShift: {
        type: Boolean,
        required: false
      },
      prioritizePosition: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      },
      disableOutsidePointerEvents: {
        type: Boolean,
        required: false
      }
    },
    emits: [
      `closeAutoFocus`,
      `escapeKeyDown`,
      `pointerDownOutside`
    ],
    setup(e2, { emit: r2 }) {
      let i2 = e2, o2 = Ve(i2, r2), c2 = Z(), l2 = A();
      h(() => {
        l2.value = new DocumentFragment();
      });
      let u2 = A(), d2 = y(() => i2.forceMount || c2.open.value), f2 = A(d2.value);
      return a(d2, () => {
        setTimeout(() => f2.value = d2.value);
      }), (e3, r3) => d2.value || f2.value || u2.value?.present ? (C(), k(s(Fe), {
        key: 0,
        ref_key: `presenceRef`,
        ref: u2,
        present: d2.value
      }, {
        default: T(() => [
          n(_t, t(te({
            ...s(o2),
            ...e3.$attrs
          })), {
            default: T(() => [
              N(e3.$slots, `default`)
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 8, [
        `present`
      ])) : l2.value ? (C(), p(`div`, Ct, [
        (C(), k(O, {
          to: l2.value
        }, [
          n(St, {
            context: s(c2)
          }, {
            default: T(() => [
              N(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `context`
          ])
        ], 8, [
          `to`
        ]))
      ])) : P(`v-if`, true);
    }
  });
  [Tt, Et] = I(`SelectGroup`);
  Dt = x({
    __name: `SelectGroup`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = Pe(void 0, `reka-select-group`);
      return Et({
        id: n2
      }), (e3, r2) => (C(), k(s(R), _({
        role: `group`
      }, t2, {
        "aria-labelledby": s(n2)
      }), {
        default: T(() => [
          N(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `aria-labelledby`
      ]));
    }
  });
  [Ot, kt] = I(`SelectItem`);
  At = x({
    __name: `SelectItem`,
    props: {
      value: {
        type: null,
        required: true
      },
      disabled: {
        type: Boolean,
        required: false
      },
      textValue: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    emits: [
      `select`
    ],
    setup(e2, { emit: t2 }) {
      let r2 = e2, i2 = t2, { disabled: a2 } = l(r2), o2 = Z(), c2 = Q(), { forwardRef: u2, currentElement: d2 } = q(), { CollectionItem: f2 } = U(), p2 = y(() => X(o2.modelValue?.value, r2.value, o2.by)), m2 = A(false), g2 = A(r2.textValue ?? ``), _2 = Pe(void 0, `reka-select-item-text`);
      async function v2(e3) {
        e3.defaultPrevented || He(`select.select`, b2, {
          originalEvent: e3,
          value: r2.value
        });
      }
      async function b2(e3) {
        await D(), i2(`select`, e3), !e3.defaultPrevented && (a2.value || (o2.onValueChange(r2.value), o2.multiple.value || o2.onOpenChange(false)));
      }
      async function x2(e3) {
        await D(), !e3.defaultPrevented && (a2.value ? c2.onItemLeave?.() : e3.currentTarget?.focus({
          preventScroll: true
        }));
      }
      async function S2(e3) {
        await D(), !e3.defaultPrevented && e3.currentTarget === Te() && c2.onItemLeave?.();
      }
      async function w2(e3) {
        await D(), !e3.defaultPrevented && (c2.searchRef?.value !== `` && e3.key === ` ` || (st.includes(e3.key) && v2(e3), e3.key === ` ` && e3.preventDefault()));
      }
      if (r2.value === ``) throw Error(`A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.`);
      return h(() => {
        d2.value && c2.itemRefCallback(d2.value, r2.value, r2.disabled);
      }), kt({
        value: r2.value,
        disabled: a2,
        textId: _2,
        isSelected: p2,
        onItemTextChange: (e3) => {
          g2.value = ((g2.value || e3?.textContent) ?? ``).trim();
        }
      }), (e3, t3) => (C(), k(s(f2), {
        value: {
          textValue: g2.value
        }
      }, {
        default: T(() => [
          n(s(R), {
            ref: s(u2),
            role: `option`,
            "aria-labelledby": s(_2),
            "data-highlighted": m2.value ? `` : void 0,
            "aria-selected": p2.value,
            "data-state": p2.value ? `checked` : `unchecked`,
            "aria-disabled": s(a2) || void 0,
            "data-disabled": s(a2) ? `` : void 0,
            tabindex: s(a2) ? void 0 : -1,
            as: e3.as,
            "as-child": e3.asChild,
            onFocus: t3[0] || (t3[0] = (e4) => m2.value = true),
            onBlur: t3[1] || (t3[1] = (e4) => m2.value = false),
            onPointerup: v2,
            onPointerdown: t3[2] || (t3[2] = (e4) => {
              e4.currentTarget.focus({
                preventScroll: true
              });
            }),
            onTouchend: t3[3] || (t3[3] = F(() => {
            }, [
              `prevent`,
              `stop`
            ])),
            onPointermove: x2,
            onPointerleave: S2,
            onKeydown: w2
          }, {
            default: T(() => [
              N(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `aria-labelledby`,
            `data-highlighted`,
            `aria-selected`,
            `data-state`,
            `aria-disabled`,
            `data-disabled`,
            `tabindex`,
            `as`,
            `as-child`
          ])
        ]),
        _: 3
      }, 8, [
        `value`
      ]));
    }
  });
  jt = x({
    __name: `SelectItemIndicator`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `span`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = Ot();
      return (e3, r2) => s(n2).isSelected.value ? (C(), k(s(R), _({
        key: 0,
        "aria-hidden": `true`
      }, t2), {
        default: T(() => [
          N(e3.$slots, `default`)
        ]),
        _: 3
      }, 16)) : P(`v-if`, true);
    }
  });
  Mt = x({
    inheritAttrs: false,
    __name: `SelectItemText`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `span`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = Z(), r2 = Q(), i2 = Ot(), { forwardRef: a2, currentElement: o2 } = q(), c2 = y(() => ({
        value: i2.value,
        disabled: i2.disabled.value,
        textContent: o2.value?.textContent ?? i2.value?.toString() ?? ``
      }));
      return h(() => {
        o2.value && (i2.onItemTextChange(o2.value), r2.itemTextRefCallback(o2.value, i2.value, i2.disabled.value), n2.onOptionAdd(c2.value));
      }), v(() => {
        n2.onOptionRemove(c2.value);
      }), (e3, n3) => (C(), k(s(R), _({
        id: s(i2).textId,
        ref: s(a2)
      }, {
        ...t2,
        ...e3.$attrs
      }), {
        default: T(() => [
          N(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `id`
      ]));
    }
  });
  Nt = x({
    __name: `SelectLabel`,
    props: {
      for: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `div`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = Tt({
        id: ``
      });
      return (e3, r2) => (C(), k(s(R), _(t2, {
        id: s(n2).id
      }), {
        default: T(() => [
          N(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `id`
      ]));
    }
  });
  Pt = x({
    __name: `SelectPortal`,
    props: {
      to: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      defer: {
        type: Boolean,
        required: false
      },
      forceMount: {
        type: Boolean,
        required: false
      }
    },
    setup(e2) {
      let n2 = e2;
      return (e3, r2) => (C(), k(s(Ne), t(te(n2)), {
        default: T(() => [
          N(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  });
  Ft = x({
    __name: `SelectSeparator`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2;
      return (e3, n2) => (C(), k(s(R), _({
        "aria-hidden": `true`
      }, t2), {
        default: T(() => [
          N(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  });
  It = x({
    __name: `SelectTrigger`,
    props: {
      disabled: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `button`
      }
    },
    setup(e2) {
      let t2 = e2, r2 = Z(), { forwardRef: i2, currentElement: a2 } = q(), o2 = y(() => r2.disabled?.value || t2.disabled);
      r2.contentId || (r2.contentId = Pe(void 0, `reka-select-content`)), h(() => {
        r2.onTriggerChange(a2.value);
      });
      let { getItems: c2 } = U(), { search: l2, handleTypeaheadSearch: u2, resetTypeahead: d2 } = H();
      function f2() {
        o2.value || (r2.onOpenChange(true), d2());
      }
      function p2(e3) {
        f2(), r2.triggerPointerDownPosRef.value = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        };
      }
      return (e3, t3) => (C(), k(s(Le), {
        "as-child": ``,
        reference: e3.reference
      }, {
        default: T(() => [
          n(s(R), {
            ref: s(i2),
            role: `combobox`,
            type: e3.as === `button` ? `button` : void 0,
            "aria-controls": s(r2).contentId,
            "aria-expanded": s(r2).open.value || false,
            "aria-required": s(r2).required?.value,
            "aria-autocomplete": `none`,
            disabled: o2.value,
            dir: s(r2)?.dir.value,
            "data-state": s(r2)?.open.value ? `open` : `closed`,
            "data-disabled": o2.value ? `` : void 0,
            "data-placeholder": s(lt)(s(r2).modelValue?.value) ? `` : void 0,
            "as-child": e3.asChild,
            as: e3.as,
            onClick: t3[0] || (t3[0] = (e4) => {
              e4?.currentTarget?.focus();
            }),
            onPointerdown: t3[1] || (t3[1] = (e4) => {
              if (e4.pointerType === `touch`) return e4.preventDefault();
              let t4 = e4.target;
              t4.hasPointerCapture(e4.pointerId) && t4.releasePointerCapture(e4.pointerId), e4.button === 0 && e4.ctrlKey === false && (p2(e4), e4.preventDefault());
            }),
            onPointerup: t3[2] || (t3[2] = F((e4) => {
              e4.pointerType === `touch` && p2(e4);
            }, [
              `prevent`
            ])),
            onKeydown: t3[3] || (t3[3] = (e4) => {
              let t4 = s(l2) !== ``;
              !(e4.ctrlKey || e4.altKey || e4.metaKey) && e4.key.length === 1 && t4 && e4.key === ` ` || (s(u2)(e4.key, s(c2)()), s(ot).includes(e4.key) && (f2(), e4.preventDefault()));
            })
          }, {
            default: T(() => [
              N(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `type`,
            `aria-controls`,
            `aria-expanded`,
            `aria-required`,
            `disabled`,
            `dir`,
            `data-state`,
            `data-disabled`,
            `data-placeholder`,
            `as-child`,
            `as`
          ])
        ]),
        _: 3
      }, 8, [
        `reference`
      ]));
    }
  });
  Lt = x({
    __name: `SelectValue`,
    props: {
      placeholder: {
        type: String,
        required: false,
        default: ``
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `span`
      }
    },
    setup(e2) {
      let t2 = e2, { forwardRef: n2, currentElement: i2 } = q(), a2 = Z();
      h(() => {
        a2.valueElement = i2;
      });
      let o2 = y(() => {
        let e3 = [], t3 = Array.from(a2.optionsSet.value), n3 = (e4) => t3.find((t4) => X(e4, t4.value, a2.by));
        return e3 = Array.isArray(a2.modelValue.value) ? a2.modelValue.value.map((e4) => n3(e4)?.textContent ?? ``) : [
          n3(a2.modelValue.value)?.textContent ?? ``
        ], e3.filter(Boolean);
      }), c2 = y(() => o2.value.length ? o2.value.join(`, `) : t2.placeholder);
      return (e3, i3) => (C(), k(s(R), {
        ref: s(n2),
        as: e3.as,
        "as-child": e3.asChild,
        style: {
          pointerEvents: `none`
        },
        "data-placeholder": o2.value.length ? void 0 : t2.placeholder
      }, {
        default: T(() => [
          N(e3.$slots, `default`, {
            selectedLabel: o2.value,
            modelValue: s(a2).modelValue.value
          }, () => [
            r(E(c2.value), 1)
          ])
        ]),
        _: 3
      }, 8, [
        `as`,
        `as-child`,
        `data-placeholder`
      ]));
    }
  });
  Rt = x({
    __name: `SelectViewport`,
    props: {
      nonce: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, { nonce: i2 } = l(t2), a2 = ke(i2), o2 = Q(), c2 = o2.position === `item-aligned` ? vt() : void 0, { forwardRef: u2, currentElement: d2 } = q();
      h(() => {
        o2?.onViewportChange(d2.value);
      });
      let f2 = A(0);
      function m2(e3) {
        let t3 = e3.currentTarget, { shouldExpandOnScrollRef: n2, contentWrapper: r2 } = c2 ?? {};
        if (n2?.value && r2?.value) {
          let e4 = Math.abs(f2.value - t3.scrollTop);
          if (e4 > 0) {
            let n3 = window.innerHeight - 20, i3 = Number.parseFloat(r2.value.style.minHeight), a3 = Number.parseFloat(r2.value.style.height), o3 = Math.max(i3, a3);
            if (o3 < n3) {
              let i4 = o3 + e4, a4 = Math.min(n3, i4), s2 = i4 - a4;
              r2.value.style.height = `${a4}px`, r2.value.style.bottom === `0px` && (t3.scrollTop = s2 > 0 ? s2 : 0, r2.value.style.justifyContent = `flex-end`);
            }
          }
        }
        f2.value = t3.scrollTop;
      }
      return (e3, i3) => (C(), p(w, null, [
        n(s(R), _({
          ref: s(u2),
          "data-reka-select-viewport": ``,
          role: `presentation`
        }, {
          ...e3.$attrs,
          ...t2
        }, {
          style: {
            position: `relative`,
            flex: 1,
            overflow: `hidden auto`
          },
          onScroll: m2
        }), {
          default: T(() => [
            N(e3.$slots, `default`)
          ]),
          _: 3
        }, 16),
        n(s(R), {
          as: `style`,
          nonce: s(a2)
        }, {
          default: T(() => i3[0] || (i3[0] = [
            r(` /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } `)
          ])),
          _: 1,
          __: [
            0
          ]
        }, 8, [
          `nonce`
        ])
      ], 64));
    }
  });
  $ = ne(`volume`, () => {
    let e2 = qe(), t2 = Xe(), n2 = b({
      entries: []
    }), r2 = b({
      entries: []
    }), i2 = A(null), o2 = V(`windpress.dashboard.store.volume.activeViewEntryRelativePath`, null);
    function s2(e3) {
      return e3 = e3.replace(/[^a-zA-Z0-9._/-]+/g, ``), e3 = e3.replace(/\.{2,}/g, `.`), e3 = e3.replace(/\/{2,}/g, `/`), e3 = e3.replace(/^[._/ -]+|[._/ -]+$/g, ``), e3;
    }
    function c2(e3, t3 = `internal`) {
      let r3 = e3.split(`/`);
      t3 === void 0 || t3 === `internal` ? (r3 = r3.map((e4) => s2(e4)).join(`/`), r3 = s2(r3)) : r3 = r3.join(`/`);
      let a2 = n2.entries.findIndex((e4) => e4.relative_path === r3);
      if (a2 !== -1) {
        if (n2.entries[a2].hidden === false) throw Error(wp.i18n.__(`A file named "${r3}" already exists`, `windpress`));
        n2.entries[a2].hidden = false, n2.entries[a2].content = `/* file: ${r3} */

`, n2.entries[a2].handler = t3;
      } else n2.entries.push({
        name: r3.split(`/`).pop() || ``,
        content: `/* file: ${r3} */

`,
        relative_path: `${r3}`,
        handler: t3 || `internal`
      });
      i2.value = `${r3}`;
    }
    function l2(e3) {
      let t3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path);
      n2.entries[t3].content = ``, n2.entries[t3].hidden = true, i2.value === e3.relative_path && (i2.value = null);
    }
    function u2(e3, t3) {
      let r3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path), i3 = t3.split(`/`).map(s2).join(`/`);
      i3 = s2(i3);
      let a2 = n2.entries.findIndex((e4) => e4.relative_path === i3);
      if (a2 !== -1) {
        if (n2.entries[a2].hidden === false) throw Error(wp.i18n.__(`A file named "${i3}" already exists`, `windpress`));
        n2.entries[a2].hidden = false, n2.entries[a2].content = n2.entries[r3].content, n2.entries[a2].signature && delete n2.entries[a2].signature;
      } else {
        let e4 = Ye(n2.entries[r3]);
        e4.relative_path = i3, e4.name = i3.split(`/`).pop() || ``, e4.content = n2.entries[r3].content, e4.hidden = false, e4.signature = void 0, n2.entries.push(e4);
      }
      l2(e3);
    }
    function d2(e3) {
      let t3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path);
      n2.entries[t3].content = ``;
    }
    function f2() {
      return n2.entries.reduce((e3, t3) => (e3[`/${t3.relative_path}`] = t3.content, e3), {});
    }
    async function p2() {
      return t2.add(`volume.doPull`), await e2.request(`/admin/volume/index`, {
        method: `GET`
      }).then((e3) => e3.data).then((e3) => {
        n2.entries = e3.entries, h2();
      }).catch((e3) => {
      }).finally(() => {
        t2.remove(`volume.doPull`);
      });
    }
    async function m2() {
      return t2.add(`volume.doPush`), e2.request(`/admin/volume/store`, {
        method: `POST`,
        data: {
          volume: {
            entries: n2.entries
          }
        }
      }).then((e3) => (h2(), {
        message: e3.data.message,
        success: true
      })).catch((e3) => {
        throw Error(e3.response ? e3.response.data.message : e3.message);
      }).finally(() => {
        t2.remove(`volume.doPush`);
      });
    }
    a(i2, (e3) => {
      o2.value = e3;
    });
    function h2() {
      n2.entries.length !== 0 && (i2.value = n2.entries.some((e3) => e3.relative_path === o2.value) ? o2.value : `main.css`, g2.value && (r2.entries = Ye(n2.entries)));
    }
    let g2 = y(() => !Qe(n2.entries, r2.entries));
    function _2(e3) {
      return !Qe(n2.entries.find((t3) => t3.relative_path === e3), r2.entries.find((t3) => t3.relative_path === e3));
    }
    async function v2() {
      return n2.entries.length === 0 ? p2() : Promise.resolve();
    }
    return {
      data: n2,
      initData: r2,
      activeViewEntryRelativePath: i2,
      hasChanged: g2,
      addNewEntry: c2,
      getKVEntries: f2,
      doPull: p2,
      doPush: m2,
      entryHasChanged: _2,
      softDeleteEntry: l2,
      resetEntry: d2,
      renameEntry: u2,
      cleanPath: s2,
      initPull: v2
    };
  });
  zt = ne(`themeJson`, () => {
    let e2 = qe(), t2 = Xe(), n2 = A({});
    async function r2() {
      return t2.add(`themeJson.doPush`), e2.request(`/admin/theme-json/store`, {
        method: `POST`,
        data: {
          data: btoa(JSON.stringify(n2.value, null, window.windpress.is_debug ? 2 : void 0))
        }
      }).then((e3) => ({
        message: e3.data.message,
        success: true
      })).catch((e3) => {
        throw Error(e3.response ? e3.response.data.message : e3.message);
      }).finally(() => {
        t2.remove(`themeJson.doPush`);
      });
    }
    return {
      themeJson: n2,
      doPush: r2
    };
  });
  Bt = e(it(), 1);
  Vt = e(et(), 1);
  Ht = {
    class: `flex`
  };
  Ut = [
    `innerHTML`
  ];
  Wt = {
    class: `flex gap-2`
  };
  Gt = x({
    __name: `ConfirmFileActionModal`,
    props: {
      filePath: {},
      fileContent: {},
      actionYes: {},
      actionNo: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let i2 = e2, a2 = be(), o2 = A(null);
      (async () => {
        o2.value = await nt({
          themes: [
            Y(() => import("./dark-plus-Ckwk5c-G.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url),
            Y(() => import("./light-plus-DwL9ko6V.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          ],
          langs: [
            Y(() => import("./css-BdG0pVBb.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url),
            Y(() => import("./javascript-Yr-P-0p0.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          ],
          engine: rt(Y(() => import("./wasm-XUuNH_hH.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), [], import.meta.url))
        });
      })();
      let c2 = xe(async () => {
        if (!i2.fileContent || !o2.value) return;
        let e3 = Vt.default.extname(i2.filePath).replace(`.`, ``);
        return o2.value.codeToHtml(i2.fileContent, {
          lang: e3 === `css` ? `css` : `javascript`,
          theme: a2.value === `dark` ? `dark-plus` : `light-plus`
        });
      }), l2 = t2;
      return (t3, i3) => {
        let a3 = z, o3 = J;
        return C(), k(o3, {
          close: {
            onClick: () => l2(`close`, false)
          }
        }, j({
          title: T(() => [
            r(E(t3.i18n.sprintf(t3.i18n.__(`Are you sure you want to %s the "%s" file?`, `windpress`), e2.actionYes, e2.filePath)), 1)
          ]),
          footer: T(() => [
            f(`div`, Wt, [
              n(a3, {
                color: `neutral`,
                variant: `soft`,
                label: t3.i18n.__(`cancel`, `windpress`),
                onClick: i3[0] || (i3[0] = (e3) => l2(`close`, false)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              n(a3, {
                color: `error`,
                variant: `soft`,
                label: e2.actionYes,
                onClick: i3[1] || (i3[1] = (e3) => l2(`close`, true)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 2
        }, [
          e2.fileContent ? {
            name: `body`,
            fn: T(() => [
              (C(), k(S, null, {
                default: T(() => [
                  f(`div`, Ht, [
                    f(`div`, {
                      innerHTML: s(c2),
                      class: `flex [&>pre]:p-4 [&>pre]:mr-6`
                    }, null, 8, Ut)
                  ])
                ]),
                _: 1
              }))
            ]),
            key: `0`
          } : void 0
        ]), 1032, [
          `close`
        ]);
      };
    }
  });
  Kt = {
    class: `flex flex-col gap-4 text-(--ui-text)`
  };
  qt = {
    class: `font-bold uppercase my-2`
  };
  Jt = {
    class: `w-full`
  };
  Yt = {
    class: `font-semibold w-1/3`
  };
  Xt = {
    class: ``
  };
  Zt = {
    class: `font-semibold w-1/5`
  };
  Qt = {
    class: ``
  };
  $t = {
    class: `font-semibold w-1/5`
  };
  en = {
    class: ``
  };
  tn = {
    class: `font-semibold w-1/5`
  };
  nn = {
    class: ``
  };
  rn = {
    class: `flex gap-2`
  };
  an = x({
    __name: `ConfirmVolumeImportModal`,
    props: {
      data: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let i2 = e2, a2 = t2;
      return (e3, t3) => {
        let o2 = z, c2 = J;
        return C(), k(c2, {
          close: {
            onClick: () => a2(`close`, false)
          }
        }, {
          title: T(() => [
            r(E(e3.i18n.__(`Import SFS volume`, `windpress`)), 1)
          ]),
          body: T(() => [
            f(`div`, Kt, [
              f(`div`, null, [
                f(`div`, qt, E(e3.i18n.__(`File info`, `windpress`)), 1),
                f(`table`, Jt, [
                  f(`tbody`, null, [
                    f(`tr`, null, [
                      f(`td`, Yt, E(e3.i18n.__(`WindPress version`, `windpress`)), 1),
                      t3[2] || (t3[2] = f(`td`, {
                        class: ``
                      }, `:`, -1)),
                      f(`td`, Xt, E(i2.data._version), 1)
                    ]),
                    f(`tr`, null, [
                      f(`td`, Zt, E(e3.i18n.__(`WP Version`, `windpress`)), 1),
                      t3[3] || (t3[3] = f(`td`, {
                        class: ``
                      }, `:`, -1)),
                      f(`td`, Qt, E(i2.data._wp_version), 1)
                    ]),
                    f(`tr`, null, [
                      f(`td`, $t, E(e3.i18n.__(`Exported on`, `windpress`)), 1),
                      t3[4] || (t3[4] = f(`td`, {
                        class: ``
                      }, `:`, -1)),
                      f(`td`, en, E(s(Bt.default)(i2.data._timestamp).format(`YYYY-MM-DD HH:mm:ss`)), 1)
                    ]),
                    f(`tr`, null, [
                      f(`td`, tn, E(e3.i18n.__(`Entries`, `windpress`)), 1),
                      t3[5] || (t3[5] = f(`td`, {
                        class: ``
                      }, `:`, -1)),
                      f(`td`, nn, E(i2.data.entries.length), 1)
                    ])
                  ])
                ])
              ]),
              r(` ` + E(e3.i18n.__(`This will overwrite all existing files. Are you sure you want to continue?`, `windpress`)), 1)
            ])
          ]),
          footer: T(() => [
            f(`div`, rn, [
              n(o2, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[0] || (t3[0] = (e4) => a2(`close`, false)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              n(o2, {
                color: `warning`,
                variant: `soft`,
                label: e3.i18n.__(`Yes, continue`, `windpress`),
                onClick: t3[1] || (t3[1] = (e4) => a2(`close`, true)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  });
  function on(e2, t2, n2, r2, a2) {
    let o2 = ie(), s2 = {};
    for (let c2 of r2) s2[c2] = y(() => (a2?.[c2] === void 0 ? L(t2, c2) : i(a2[c2])) ?? o2.ui?.[e2]?.defaultVariants?.[c2] ?? n2.defaultVariants?.[c2]);
    return s2;
  }
  var sn = {
    slots: {
      base: [
        `relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75`,
        `transition-colors`
      ],
      leading: `absolute inset-y-0 start-0 flex items-center`,
      leadingIcon: `shrink-0 text-dimmed`,
      leadingAvatar: `shrink-0`,
      leadingAvatarSize: ``,
      trailing: `absolute inset-y-0 end-0 flex items-center`,
      trailingIcon: `shrink-0 text-dimmed`,
      value: `truncate pointer-events-none`,
      placeholder: `truncate text-dimmed`,
      arrow: `fill-bg stroke-default`,
      content: `max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col`,
      viewport: `relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1`,
      group: `p-1 isolate`,
      empty: `text-center text-muted`,
      label: `font-semibold text-highlighted`,
      separator: `-mx-1 my-1 h-px bg-border`,
      item: [
        `group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50`,
        `transition-colors before:transition-colors`
      ],
      itemLeadingIcon: [
        `shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default`,
        `transition-colors`
      ],
      itemLeadingAvatar: `shrink-0`,
      itemLeadingAvatarSize: ``,
      itemLeadingChip: `shrink-0`,
      itemLeadingChipSize: ``,
      itemTrailing: `ms-auto inline-flex gap-1.5 items-center`,
      itemTrailingIcon: `shrink-0`,
      itemWrapper: `flex-1 flex flex-col min-w-0`,
      itemLabel: `truncate`,
      itemDescription: `truncate text-muted`
    },
    variants: {
      fieldGroup: {
        horizontal: `not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]`,
        vertical: `not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]`
      },
      size: {
        xs: {
          base: `px-2 py-1 text-xs gap-1`,
          leading: `ps-2`,
          trailing: `pe-2`,
          leadingIcon: `size-4`,
          leadingAvatarSize: `3xs`,
          trailingIcon: `size-4`,
          label: `p-1 text-[10px]/3 gap-1`,
          item: `p-1 text-xs gap-1`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemLeadingChip: `size-4`,
          itemLeadingChipSize: `sm`,
          itemTrailingIcon: `size-4`,
          empty: `p-2 text-xs`
        },
        sm: {
          base: `px-2.5 py-1.5 text-xs gap-1.5`,
          leading: `ps-2.5`,
          trailing: `pe-2.5`,
          leadingIcon: `size-4`,
          leadingAvatarSize: `3xs`,
          trailingIcon: `size-4`,
          label: `p-1.5 text-[10px]/3 gap-1.5`,
          item: `p-1.5 text-xs gap-1.5`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemLeadingChip: `size-4`,
          itemLeadingChipSize: `sm`,
          itemTrailingIcon: `size-4`,
          empty: `p-2.5 text-xs`
        },
        md: {
          base: `px-2.5 py-1.5 text-sm gap-1.5`,
          leading: `ps-2.5`,
          trailing: `pe-2.5`,
          leadingIcon: `size-5`,
          leadingAvatarSize: `2xs`,
          trailingIcon: `size-5`,
          label: `p-1.5 text-xs gap-1.5`,
          item: `p-1.5 text-sm gap-1.5`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemLeadingChip: `size-5`,
          itemLeadingChipSize: `md`,
          itemTrailingIcon: `size-5`,
          empty: `p-2.5 text-sm`
        },
        lg: {
          base: `px-3 py-2 text-sm gap-2`,
          leading: `ps-3`,
          trailing: `pe-3`,
          leadingIcon: `size-5`,
          leadingAvatarSize: `2xs`,
          trailingIcon: `size-5`,
          label: `p-2 text-xs gap-2`,
          item: `p-2 text-sm gap-2`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemLeadingChip: `size-5`,
          itemLeadingChipSize: `md`,
          itemTrailingIcon: `size-5`,
          empty: `p-3 text-sm`
        },
        xl: {
          base: `px-3 py-2 text-base gap-2`,
          leading: `ps-3`,
          trailing: `pe-3`,
          leadingIcon: `size-6`,
          leadingAvatarSize: `xs`,
          trailingIcon: `size-6`,
          label: `p-2 text-sm gap-2`,
          item: `p-2 text-base gap-2`,
          itemLeadingIcon: `size-6`,
          itemLeadingAvatarSize: `xs`,
          itemLeadingChip: `size-6`,
          itemLeadingChipSize: `lg`,
          itemTrailingIcon: `size-6`,
          empty: `p-3 text-base`
        }
      },
      variant: {
        outline: `text-highlighted bg-default ring ring-inset ring-accented hover:bg-elevated disabled:bg-default`,
        soft: `text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50`,
        subtle: `text-highlighted bg-elevated ring ring-inset ring-accented hover:bg-accented/75 disabled:bg-elevated`,
        ghost: `text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent`,
        none: `text-highlighted bg-transparent`
      },
      color: {
        primary: ``,
        secondary: ``,
        success: ``,
        info: ``,
        warning: ``,
        error: ``,
        neutral: ``
      },
      leading: {
        true: ``
      },
      trailing: {
        true: ``
      },
      loading: {
        true: ``
      },
      highlight: {
        true: ``
      },
      fixed: {
        false: ``
      },
      type: {
        file: `file:me-1.5 file:font-medium file:text-muted file:outline-none`
      },
      position: {
        popper: {
          content: `data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in]`
        },
        "item-aligned": {
          content: ``
        }
      }
    },
    compoundVariants: [
      {
        color: `primary`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-primary`
      },
      {
        color: `secondary`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-secondary`
      },
      {
        color: `success`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-success`
      },
      {
        color: `info`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-info`
      },
      {
        color: `warning`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-warning`
      },
      {
        color: `error`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-error`
      },
      {
        color: `primary`,
        highlight: true,
        class: `ring ring-inset ring-primary`
      },
      {
        color: `secondary`,
        highlight: true,
        class: `ring ring-inset ring-secondary`
      },
      {
        color: `success`,
        highlight: true,
        class: `ring ring-inset ring-success`
      },
      {
        color: `info`,
        highlight: true,
        class: `ring ring-inset ring-info`
      },
      {
        color: `warning`,
        highlight: true,
        class: `ring ring-inset ring-warning`
      },
      {
        color: `error`,
        highlight: true,
        class: `ring ring-inset ring-error`
      },
      {
        color: `neutral`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-inverted`
      },
      {
        color: `neutral`,
        highlight: true,
        class: `ring ring-inset ring-inverted`
      },
      {
        leading: true,
        size: `xs`,
        class: `ps-7`
      },
      {
        leading: true,
        size: `sm`,
        class: `ps-8`
      },
      {
        leading: true,
        size: `md`,
        class: `ps-9`
      },
      {
        leading: true,
        size: `lg`,
        class: `ps-10`
      },
      {
        leading: true,
        size: `xl`,
        class: `ps-11`
      },
      {
        trailing: true,
        size: `xs`,
        class: `pe-7`
      },
      {
        trailing: true,
        size: `sm`,
        class: `pe-8`
      },
      {
        trailing: true,
        size: `md`,
        class: `pe-9`
      },
      {
        trailing: true,
        size: `lg`,
        class: `pe-10`
      },
      {
        trailing: true,
        size: `xl`,
        class: `pe-11`
      },
      {
        loading: true,
        leading: true,
        class: {
          leadingIcon: `animate-spin`
        }
      },
      {
        loading: true,
        leading: false,
        trailing: true,
        class: {
          trailingIcon: `animate-spin`
        }
      },
      {
        fixed: false,
        size: `xs`,
        class: `md:text-xs`
      },
      {
        fixed: false,
        size: `sm`,
        class: `md:text-xs`
      },
      {
        fixed: false,
        size: `md`,
        class: `md:text-sm`
      },
      {
        fixed: false,
        size: `lg`,
        class: `md:text-sm`
      }
    ],
    defaultVariants: {
      size: `md`,
      color: `primary`,
      variant: `outline`,
      position: `popper`
    }
  }, cn = Object.assign({
    inheritAttrs: false
  }, {
    __name: `Select`,
    props: {
      id: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      variant: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      trailingIcon: {
        type: null,
        required: false
      },
      selectedIcon: {
        type: null,
        required: false
      },
      content: {
        type: Object,
        required: false
      },
      arrow: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: true
      },
      valueKey: {
        type: null,
        required: false,
        default: `value`
      },
      labelKey: {
        type: null,
        required: false,
        default: `label`
      },
      descriptionKey: {
        type: null,
        required: false,
        default: `description`
      },
      items: {
        type: null,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      modelValue: {
        type: null,
        required: false
      },
      modelModifiers: {
        type: null,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      highlight: {
        type: Boolean,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false
      },
      autofocusDelay: {
        type: Number,
        required: false,
        default: 0
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      open: {
        type: Boolean,
        required: false
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      autocomplete: {
        type: String,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      required: {
        type: Boolean,
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      leading: {
        type: Boolean,
        required: false
      },
      leadingIcon: {
        type: null,
        required: false
      },
      trailing: {
        type: Boolean,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      }
    },
    emits: [
      `change`,
      `blur`,
      `focus`,
      `update:modelValue`,
      `update:open`
    ],
    setup(e2, { expose: i2, emit: a2 }) {
      let l2 = e2, u2 = a2, g2 = o(), v2 = ie(), b2 = ge(`select`, l2), x2 = Ve(ve(l2, `open`, `defaultOpen`, `disabled`, `autocomplete`, `required`, `multiple`), u2), S2 = Ie(M(() => l2.portal)), { position: D2 } = on(`select`, l2, sn, [
        `position`
      ], {
        position: () => l2.content?.position
      }), O2 = M(() => se(l2.content, {
        side: `bottom`,
        sideOffset: 8,
        collisionPadding: 8,
        position: D2.value
      })), A2 = M(() => se(l2.arrow, {
        rounded: true
      })), { emitFormChange: j2, emitFormInput: F2, emitFormBlur: ne2, emitFormFocus: I2, size: R2, color: oe2, id: z2, name: he2, highlight: ye2, disabled: be2, ariaAttrs: xe2 } = pe(l2), { orientation: Se2, size: Ce2 } = de(l2), { isLeading: V2, isTrailing: we2, leadingIconName: H2, trailingIconName: Te2 } = ue(M(() => se(l2, {
        trailingIcon: v2.ui.icons.chevronDown
      }))), Ee2 = y(() => Ce2.value || R2.value), De2 = y(() => D2.value === `item-aligned`), U2 = y(() => le({
        extend: le(sn),
        ...v2.ui?.select || {}
      })({
        color: oe2.value,
        variant: l2.variant,
        size: Ee2?.value,
        loading: l2.loading,
        highlight: ye2.value,
        leading: V2.value || !!l2.avatar || !!g2.leading,
        trailing: we2.value || !!g2.trailing,
        fieldGroup: Se2.value,
        position: D2.value
      })), Oe2 = y(() => l2.items?.length ? _e(l2.items) ? l2.items : [
        l2.items
      ] : []), W2 = y(() => Oe2.value.flatMap((e3) => e3));
      function ke2(e3) {
        if (l2.multiple && Array.isArray(e3)) {
          let t2 = e3.map((e4) => ae(W2.value, e4, {
            labelKey: l2.labelKey,
            valueKey: l2.valueKey
          })).filter((e4) => e4 != null && e4 !== ``);
          return t2.length > 0 ? t2.join(`, `) : void 0;
        }
        return ae(W2.value, e3, {
          labelKey: l2.labelKey,
          valueKey: l2.valueKey
        });
      }
      let G2 = c(`triggerRef`);
      function Ae2() {
        l2.autofocus && G2.value?.$el?.focus({
          focusVisible: true
        });
      }
      h(() => {
        setTimeout(() => {
          Ae2();
        }, l2.autofocusDelay);
      });
      function je2(e3) {
        l2.modelModifiers?.trim && (typeof e3 == `string` || e3 == null) && (e3 = e3?.trim() ?? null), l2.modelModifiers?.number && (e3 = re(e3)), l2.modelModifiers?.nullable && (e3 ?? (e3 = null)), l2.modelModifiers?.optional && !l2.modelModifiers?.nullable && e3 !== null && (e3 ?? (e3 = void 0)), u2(`change`, new Event(`change`, {
          target: {
            value: e3
          }
        })), j2(), F2();
      }
      function Me2(e3) {
        e3 ? (u2(`focus`, new FocusEvent(`focus`)), I2()) : (u2(`blur`, new FocusEvent(`blur`)), ne2());
      }
      function K2(e3) {
        return typeof e3 == `object` && !!e3;
      }
      let Ne2 = c(`viewportRef`);
      return i2({
        triggerRef: M(() => G2.value?.$el),
        viewportRef: M(() => {
          let e3 = Ne2.value;
          return e3 && typeof e3 == `object` && `$el` in e3 ? e3.$el : e3;
        })
      }), (i3, a3) => (C(), k(s(ft), _({
        name: s(he2)
      }, s(x2), {
        autocomplete: e2.autocomplete,
        disabled: s(be2),
        "default-value": e2.defaultValue,
        "model-value": e2.modelValue,
        "onUpdate:modelValue": je2,
        "onUpdate:open": Me2
      }), {
        default: T(({ modelValue: a4, open: o2 }) => [
          n(s(It), _({
            id: s(z2),
            ref_key: `triggerRef`,
            ref: G2,
            "data-slot": `base`,
            class: U2.value.base({
              class: [
                s(b2)?.base,
                l2.class
              ]
            })
          }, {
            ...i3.$attrs,
            ...s(xe2)
          }), {
            default: T(() => [
              s(V2) || e2.avatar || g2.leading ? (C(), p(`span`, {
                key: 0,
                "data-slot": `leading`,
                class: d(U2.value.leading({
                  class: s(b2)?.leading
                }))
              }, [
                N(i3.$slots, `leading`, {
                  modelValue: a4,
                  open: o2,
                  ui: U2.value
                }, () => [
                  s(V2) && s(H2) ? (C(), k(B, {
                    key: 0,
                    name: s(H2),
                    "data-slot": `leadingIcon`,
                    class: d(U2.value.leadingIcon({
                      class: s(b2)?.leadingIcon
                    }))
                  }, null, 8, [
                    `name`,
                    `class`
                  ])) : e2.avatar ? (C(), k(ce, _({
                    key: 1,
                    size: s(b2)?.itemLeadingAvatarSize || U2.value.itemLeadingAvatarSize()
                  }, e2.avatar, {
                    "data-slot": `itemLeadingAvatar`,
                    class: U2.value.itemLeadingAvatar({
                      class: s(b2)?.itemLeadingAvatar
                    })
                  }), null, 16, [
                    `size`,
                    `class`
                  ])) : P(``, true)
                ])
              ], 2)) : P(``, true),
              (C(true), p(w, null, m([
                ke2(a4)
              ], (t2) => (C(), k(s(Lt), {
                key: t2,
                "data-slot": t2 == null ? `placeholder` : `value`,
                class: d(t2 == null ? U2.value.placeholder({
                  class: s(b2)?.placeholder
                }) : U2.value.value({
                  class: s(b2)?.value
                }))
              }, {
                default: T(() => [
                  N(i3.$slots, `default`, {
                    modelValue: a4,
                    open: o2,
                    ui: U2.value
                  }, () => [
                    r(E(t2 ?? e2.placeholder ?? `\xA0`), 1)
                  ])
                ]),
                _: 2
              }, 1032, [
                `data-slot`,
                `class`
              ]))), 128)),
              s(we2) || g2.trailing ? (C(), p(`span`, {
                key: 1,
                "data-slot": `trailing`,
                class: d(U2.value.trailing({
                  class: s(b2)?.trailing
                }))
              }, [
                N(i3.$slots, `trailing`, {
                  modelValue: a4,
                  open: o2,
                  ui: U2.value
                }, () => [
                  s(Te2) ? (C(), k(B, {
                    key: 0,
                    name: s(Te2),
                    "data-slot": `trailingIcon`,
                    class: d(U2.value.trailingIcon({
                      class: s(b2)?.trailingIcon
                    }))
                  }, null, 8, [
                    `name`,
                    `class`
                  ])) : P(``, true)
                ])
              ], 2)) : P(``, true)
            ]),
            _: 2
          }, 1040, [
            `id`,
            `class`
          ]),
          n(s(Pt), t(te(s(S2))), {
            default: T(() => [
              n(s(fe), null, {
                default: T(() => [
                  n(s(wt), _({
                    "data-slot": `content`,
                    class: U2.value.content({
                      class: s(b2)?.content
                    })
                  }, O2.value), {
                    default: T(() => [
                      N(i3.$slots, `content-top`),
                      (C(), k(ee(De2.value ? s(Rt) : `div`), {
                        ref_key: `viewportRef`,
                        ref: Ne2,
                        role: `presentation`,
                        "data-slot": `viewport`,
                        class: d(U2.value.viewport({
                          class: s(b2)?.viewport
                        }))
                      }, {
                        default: T(() => [
                          (C(true), p(w, null, m(Oe2.value, (t2, a5) => (C(), k(s(Dt), {
                            key: `group-${a5}`,
                            "data-slot": `group`,
                            class: d(U2.value.group({
                              class: s(b2)?.group
                            }))
                          }, {
                            default: T(() => [
                              (C(true), p(w, null, m(t2, (t3, o3) => (C(), p(w, {
                                key: `group-${a5}-${o3}`
                              }, [
                                K2(t3) && t3.type === `label` ? (C(), k(s(Nt), {
                                  key: 0,
                                  "data-slot": `label`,
                                  class: d(U2.value.label({
                                    class: [
                                      s(b2)?.label,
                                      t3.ui?.label,
                                      t3.class
                                    ]
                                  }))
                                }, {
                                  default: T(() => [
                                    r(E(s(L)(t3, l2.labelKey)), 1)
                                  ]),
                                  _: 2
                                }, 1032, [
                                  `class`
                                ])) : K2(t3) && t3.type === `separator` ? (C(), k(s(Ft), {
                                  key: 1,
                                  "data-slot": `separator`,
                                  class: d(U2.value.separator({
                                    class: [
                                      s(b2)?.separator,
                                      t3.ui?.separator,
                                      t3.class
                                    ]
                                  }))
                                }, null, 8, [
                                  `class`
                                ])) : (C(), k(s(At), {
                                  key: 2,
                                  "data-slot": `item`,
                                  class: d(U2.value.item({
                                    class: [
                                      s(b2)?.item,
                                      K2(t3) && t3.ui?.item,
                                      K2(t3) && t3.class
                                    ]
                                  })),
                                  disabled: K2(t3) && t3.disabled,
                                  value: K2(t3) ? s(L)(t3, l2.valueKey) : t3,
                                  onSelect: (e3) => K2(t3) && t3.onSelect?.(e3)
                                }, {
                                  default: T(() => [
                                    N(i3.$slots, `item`, {
                                      item: t3,
                                      index: o3,
                                      ui: U2.value
                                    }, () => [
                                      N(i3.$slots, `item-leading`, {
                                        item: t3,
                                        index: o3,
                                        ui: U2.value
                                      }, () => [
                                        K2(t3) && t3.icon ? (C(), k(B, {
                                          key: 0,
                                          name: t3.icon,
                                          "data-slot": `itemLeadingIcon`,
                                          class: d(U2.value.itemLeadingIcon({
                                            class: [
                                              s(b2)?.itemLeadingIcon,
                                              t3.ui?.itemLeadingIcon
                                            ]
                                          }))
                                        }, null, 8, [
                                          `name`,
                                          `class`
                                        ])) : K2(t3) && t3.avatar ? (C(), k(ce, _({
                                          key: 1,
                                          size: t3.ui?.itemLeadingAvatarSize || s(b2)?.itemLeadingAvatarSize || U2.value.itemLeadingAvatarSize()
                                        }, {
                                          ref_for: true
                                        }, t3.avatar, {
                                          "data-slot": `itemLeadingAvatar`,
                                          class: U2.value.itemLeadingAvatar({
                                            class: [
                                              s(b2)?.itemLeadingAvatar,
                                              t3.ui?.itemLeadingAvatar
                                            ]
                                          })
                                        }), null, 16, [
                                          `size`,
                                          `class`
                                        ])) : K2(t3) && t3.chip ? (C(), k(me, _({
                                          key: 2,
                                          size: t3.ui?.itemLeadingChipSize || s(b2)?.itemLeadingChipSize || U2.value.itemLeadingChipSize(),
                                          inset: ``,
                                          standalone: ``
                                        }, {
                                          ref_for: true
                                        }, t3.chip, {
                                          "data-slot": `itemLeadingChip`,
                                          class: U2.value.itemLeadingChip({
                                            class: [
                                              s(b2)?.itemLeadingChip,
                                              t3.ui?.itemLeadingChip
                                            ]
                                          })
                                        }), null, 16, [
                                          `size`,
                                          `class`
                                        ])) : P(``, true)
                                      ]),
                                      f(`span`, {
                                        "data-slot": `itemWrapper`,
                                        class: d(U2.value.itemWrapper({
                                          class: [
                                            s(b2)?.itemWrapper,
                                            K2(t3) && t3.ui?.itemWrapper
                                          ]
                                        }))
                                      }, [
                                        n(s(Mt), {
                                          "data-slot": `itemLabel`,
                                          class: d(U2.value.itemLabel({
                                            class: [
                                              s(b2)?.itemLabel,
                                              K2(t3) && t3.ui?.itemLabel
                                            ]
                                          }))
                                        }, {
                                          default: T(() => [
                                            N(i3.$slots, `item-label`, {
                                              item: t3,
                                              index: o3
                                            }, () => [
                                              r(E(K2(t3) ? s(L)(t3, l2.labelKey) : t3), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, [
                                          `class`
                                        ]),
                                        K2(t3) && (s(L)(t3, l2.descriptionKey) || g2[`item-description`]) ? (C(), p(`span`, {
                                          key: 0,
                                          "data-slot": `itemDescription`,
                                          class: d(U2.value.itemDescription({
                                            class: [
                                              s(b2)?.itemDescription,
                                              K2(t3) && t3.ui?.itemDescription
                                            ]
                                          }))
                                        }, [
                                          N(i3.$slots, `item-description`, {
                                            item: t3,
                                            index: o3
                                          }, () => [
                                            r(E(s(L)(t3, l2.descriptionKey)), 1)
                                          ])
                                        ], 2)) : P(``, true)
                                      ], 2),
                                      f(`span`, {
                                        "data-slot": `itemTrailing`,
                                        class: d(U2.value.itemTrailing({
                                          class: [
                                            s(b2)?.itemTrailing,
                                            K2(t3) && t3.ui?.itemTrailing
                                          ]
                                        }))
                                      }, [
                                        N(i3.$slots, `item-trailing`, {
                                          item: t3,
                                          index: o3,
                                          ui: U2.value
                                        }),
                                        n(s(jt), {
                                          "as-child": ``
                                        }, {
                                          default: T(() => [
                                            n(B, {
                                              name: e2.selectedIcon || s(v2).ui.icons.check,
                                              "data-slot": `itemTrailingIcon`,
                                              class: d(U2.value.itemTrailingIcon({
                                                class: [
                                                  s(b2)?.itemTrailingIcon,
                                                  K2(t3) && t3.ui?.itemTrailingIcon
                                                ]
                                              }))
                                            }, null, 8, [
                                              `name`,
                                              `class`
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 2)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, [
                                  `class`,
                                  `disabled`,
                                  `value`,
                                  `onSelect`
                                ]))
                              ], 64))), 128))
                            ]),
                            _: 2
                          }, 1032, [
                            `class`
                          ]))), 128))
                        ]),
                        _: 3
                      }, 8, [
                        `class`
                      ])),
                      N(i3.$slots, `content-bottom`),
                      e2.arrow ? (C(), k(s(xt), _({
                        key: 0
                      }, A2.value, {
                        "data-slot": `arrow`,
                        class: U2.value.arrow({
                          class: s(b2)?.arrow
                        })
                      }), null, 16, [
                        `class`
                      ])) : P(``, true)
                    ]),
                    _: 3
                  }, 16, [
                    `class`
                  ])
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 16, [
        `name`,
        `autocomplete`,
        `disabled`,
        `default-value`,
        `model-value`
      ]));
    }
  }), ln = {
    class: `flex flex-col gap-4`
  }, un = {
    class: `flex gap-2`
  }, dn = x({
    __name: `NewFileFormModal`,
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let i2 = $(), o2 = qe(), s2 = t2, c2 = A(``), l2 = A(), u2 = A([]), d2 = A(false), p2 = A(false);
      a(() => c2.value, () => {
        p2.value = false;
      }), h(async () => {
        try {
          d2.value = true, u2.value = (await o2.request(`/admin/volume/handlers`, {
            method: `GET`
          })).data.handlers;
        } catch (e3) {
          console.error(e3);
        } finally {
          d2.value = false;
        }
      });
      function m2() {
        if (p2.value = false, !c2.value) {
          p2.value = wp.i18n.__(`Filename is required`, `windpress`);
          return;
        }
        if (!c2.value.endsWith(`.css`) && !c2.value.endsWith(`.js`)) {
          p2.value = wp.i18n.__(`File extension must be .css or .js`, `windpress`);
          return;
        }
        if (!/^[a-zA-Z0-9_.\-/]+$/.test(c2.value) && (l2.value === `internal` || !l2.value)) {
          p2.value = wp.i18n.__(`Only alphanumeric, dash, underscore, forward slash, and dot are allowed`, `windpress`);
          return;
        }
        if (i2.data.entries.find((e3) => e3.relative_path === `${c2.value}` && e3.hidden !== true)) {
          p2.value = wp.i18n.sprintf(wp.i18n.__(`A file named "%s" already exists`, `windpress`), c2.value);
          return;
        }
        s2(`close`, {
          filePath: c2.value,
          handler: l2.value
        });
      }
      return (e3, t3) => {
        let i3 = Ke, a2 = at, o3 = z, h2 = cn, g2 = J;
        return C(), k(g2, {
          close: {
            onClick: () => s2(`close`)
          }
        }, {
          title: T(() => [
            r(E(e3.i18n.__(`Create New File`, `windpress`)), 1)
          ]),
          body: T(() => [
            f(`div`, ln, [
              n(a2, {
                label: `Filename`,
                required: ``,
                description: e3.i18n.__(`Filename may include a path. (css or js)`, `windpress`),
                error: p2.value
              }, {
                default: T(() => [
                  n(i3, {
                    modelValue: c2.value,
                    "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => c2.value = e4),
                    placeholder: `theme/color.css`,
                    class: `w-full`
                  }, null, 8, [
                    `modelValue`
                  ])
                ]),
                _: 1
              }, 8, [
                `description`,
                `error`
              ]),
              u2.value.length > 0 ? (C(), k(a2, {
                key: 0,
                label: e3.i18n.__(`Handler`, `windpress`),
                description: e3.i18n.__(`The handler determines how the file is processed and served.`, `windpress`),
                help: e3.i18n.__(`If no handler is selected, the internal handler will be used.`, `windpress`)
              }, {
                default: T(() => [
                  n(h2, {
                    items: u2.value,
                    loading: d2.value,
                    "value-key": `value`,
                    class: `w-full`,
                    placeholder: `Choose Handler...`,
                    modelValue: l2.value,
                    "onUpdate:modelValue": t3[4] || (t3[4] = (e4) => l2.value = e4)
                  }, j({
                    _: 2
                  }, [
                    l2.value ? {
                      name: `trailing`,
                      fn: T(() => [
                        n(o3, {
                          color: `neutral`,
                          variant: `link`,
                          size: `sm`,
                          icon: `i-lucide-circle-x`,
                          "aria-label": `Clear input`,
                          onClick: t3[1] || (t3[1] = F((e4) => l2.value = void 0, [
                            `prevent`,
                            `stop`
                          ])),
                          onMousedown: t3[2] || (t3[2] = F(() => {
                          }, [
                            `prevent`,
                            `stop`
                          ])),
                          onTouchstart: t3[3] || (t3[3] = F(() => {
                          }, [
                            `prevent`,
                            `stop`
                          ])),
                          class: `pointer-events-auto`
                        })
                      ]),
                      key: `0`
                    } : void 0
                  ]), 1032, [
                    `items`,
                    `loading`,
                    `modelValue`
                  ])
                ]),
                _: 1
              }, 8, [
                `label`,
                `description`,
                `help`
              ])) : P(``, true)
            ])
          ]),
          footer: T(() => [
            f(`div`, un, [
              n(o3, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[5] || (t3[5] = (e4) => s2(`close`)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              n(o3, {
                color: `primary`,
                variant: `soft`,
                label: e3.i18n.__(`Submit`, `windpress`),
                onClick: m2,
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  }), fn = {
    class: `flex gap-2`
  }, pn = x({
    __name: `RenameFileFormModal`,
    props: {
      filePath: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let i2 = $(), o2 = t2, s2 = e2, c2 = A(s2.filePath), l2 = A(false);
      a(() => c2.value, () => {
        l2.value = false;
      });
      function u2() {
        if (l2.value = false, !c2.value) {
          l2.value = wp.i18n.__(`Filename is required`, `windpress`);
          return;
        }
        if (!c2.value.endsWith(`.css`) && !c2.value.endsWith(`.js`)) {
          l2.value = wp.i18n.__(`File extension must be .css or .js`, `windpress`);
          return;
        }
        if (!/^[a-zA-Z0-9_.\-/]+$/.test(c2.value)) {
          l2.value = wp.i18n.__(`Only alphanumeric, dash, underscore, forward slash, and dot are allowed`, `windpress`);
          return;
        }
        if (i2.data.entries.find((e3) => e3.relative_path === `${c2.value}` && e3.hidden !== true)) {
          l2.value = wp.i18n.sprintf(wp.i18n.__(`A file named "%s" already exists`, `windpress`), c2.value);
          return;
        }
        o2(`close`, c2.value);
      }
      return (e3, t3) => {
        let i3 = Ke, a2 = at, d2 = z, p2 = J;
        return C(), k(p2, {
          close: {
            onClick: () => o2(`close`)
          }
        }, {
          title: T(() => [
            r(E(e3.i18n.__(`Rename File`, `windpress`)), 1)
          ]),
          body: T(() => [
            n(a2, {
              label: `Old Filename`,
              description: e3.i18n.__(`The previous filename`, `windpress`),
              class: `mb-2`
            }, {
              default: T(() => [
                n(i3, {
                  value: s2.filePath,
                  disabled: true,
                  class: `w-full`
                }, null, 8, [
                  `value`
                ])
              ]),
              _: 1
            }, 8, [
              `description`
            ]),
            n(a2, {
              label: `New Filename`,
              required: ``,
              description: e3.i18n.__(`Filename may include a path. (css or js)`, `windpress`),
              error: l2.value
            }, {
              default: T(() => [
                n(i3, {
                  modelValue: c2.value,
                  "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => c2.value = e4),
                  placeholder: `theme/color.css`,
                  class: `w-full`
                }, null, 8, [
                  `modelValue`
                ])
              ]),
              _: 1
            }, 8, [
              `description`,
              `error`
            ])
          ]),
          footer: T(() => [
            f(`div`, fn, [
              n(d2, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[1] || (t3[1] = (e4) => o2(`close`)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              n(d2, {
                color: `primary`,
                variant: `soft`,
                label: e3.i18n.__(`Submit`, `windpress`),
                onClick: u2,
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  });
  mn = function() {
    let e2 = $(), t2 = Ze(), n2 = zt(), r2 = Ge(), i2 = We();
    async function a2(t3) {
      if (t3.readonly) {
        r2.add({
          title: wp.i18n.__(`Error`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is read-only and not deletable`, `windpress`), t3.relative_path),
          color: `error`,
          icon: `i-lucide-trash`
        });
        return;
      }
      if (t3.relative_path === `main.css`) {
        r2.add({
          title: wp.i18n.__(`Error`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is required for the WindPress to work and not deletable`, `windpress`), t3.relative_path),
          color: `error`,
          icon: `i-lucide-trash`
        });
        return;
      }
      if (!await i2.create(Gt, {
        destroyOnClose: true,
        props: {
          filePath: t3.relative_path,
          fileContent: t3.content,
          actionYes: wp.i18n.__(`delete`, `windpress`)
        }
      }).open().result) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is not deleted`, `windpress`), t3.relative_path),
          color: `info`,
          icon: `i-lucide-trash`
        });
        return;
      }
      e2.softDeleteEntry(t3), r2.add({
        title: wp.i18n.__(`Success`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" deleted`, `windpress`), t3.relative_path),
        color: `success`,
        icon: `i-lucide-trash`
      });
    }
    async function o2(t3) {
      if (!await i2.create(Gt, {
        destroyOnClose: true,
        props: {
          filePath: t3.relative_path,
          fileContent: t3.content,
          actionYes: wp.i18n.__(`reset`, `windpress`)
        }
      }).open().result) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is not reset`, `windpress`), t3.relative_path),
          color: `info`,
          icon: `lucide:file-minus-2`
        });
        return;
      }
      e2.resetEntry(t3), r2.add({
        title: wp.i18n.__(`Success`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" reset`, `windpress`), t3.relative_path),
        color: `success`,
        icon: `lucide:file-minus-2`
      }), s2().then(() => {
        e2.doPull();
      });
    }
    async function s2() {
      let i3 = {
        title: wp.i18n.__(`Saving...`, `windpress`),
        description: wp.i18n.__(`Please wait while we save your changes.`, `windpress`),
        duration: 0,
        icon: `lucide:loader-circle`,
        close: false,
        color: `neutral`,
        ui: {
          icon: `animate-spin`
        }
      };
      return r2.toasts.value.find((e3) => e3.id === `file-editor.doSave`) ? r2.update(`file-editor.doSave`, {
        ...i3
      }) : r2.add({
        id: `file-editor.doSave`,
        ...i3
      }), e2.doPush().then(() => {
        r2.update(`file-editor.doSave`, {
          title: wp.i18n.__(`Saved`, `windpress`),
          description: wp.i18n.__(`Your changes have been saved.`, `windpress`),
          icon: `i-lucide-save`,
          color: `success`,
          duration: void 0,
          close: true,
          ui: {
            icon: void 0
          }
        }), Number(t2.virtualOptions(`general.tailwindcss.version`, 4).value) === 4 && n2.doPush();
      }).catch((e3) => {
        r2.update(`file-editor.doSave`, {
          title: wp.i18n.__(`Error`, `windpress`),
          description: wp.i18n.__(`An error occurred while saving your changes.`, `windpress`),
          icon: `i-lucide-save`,
          color: `error`,
          duration: void 0,
          close: true,
          ui: {
            icon: void 0
          }
        });
      }).finally(() => {
        let t3 = new BroadcastChannel(`windpress`);
        [
          `windpress/observer`,
          `windpress/intellisense`
        ].forEach((n3) => {
          t3.postMessage({
            source: `windpress/dashboard`,
            target: n3,
            task: `windpress.code-editor.saved`,
            payload: {
              volume: tt(e2.getKVEntries())
            }
          });
        }), t3.close();
      });
    }
    function c2() {
      let t3 = {
        entries: e2.data.entries,
        _windpress: true,
        _version: window.windpress._version,
        _wp_version: window.windpress._wp_version,
        _timestamp: (/* @__PURE__ */ new Date()).getTime(),
        _uid: Je(),
        _type: `sfs`
      }, n3 = $e.compressToUint8Array(JSON.stringify(t3)), i3 = new Blob([
        n3
      ], {
        type: `application/octet-stream`
      }), a3 = URL.createObjectURL(i3), o3 = document.createElement(`a`);
      o3.href = a3, o3.download = `sfs-${(0, Bt.default)().format(`YYYYMMDDHHmmss`)}.windpress`, o3.click(), URL.revokeObjectURL(a3), r2.add({
        title: wp.i18n.__(`Exported`, `windpress`),
        description: wp.i18n.__(`SFS volume data exported`, `windpress`),
        color: `success`,
        icon: `i-lucide-download`
      });
    }
    async function l2(t3) {
      let n3 = t3.target;
      if (!n3 || !n3.files || n3.files.length === 0) return;
      let a3 = n3.files[0];
      if (!a3) return;
      if (!a3.name.endsWith(`.windpress`)) {
        r2.add({
          title: wp.i18n.__(`SFS Import`, `windpress`),
          description: wp.i18n.__(`Invalid file format`, `windpress`),
          color: `error`,
          icon: `i-lucide-upload`
        });
        return;
      }
      let o3;
      try {
        if (o3 = JSON.parse($e.decompressFromUint8Array(new Uint8Array(await a3.arrayBuffer())) || `{}`), !o3._windpress || o3._type !== `sfs`) throw Error(wp.i18n.__(`File is not a valid WindPress file`, `windpress`));
      } catch (e3) {
        r2.add({
          title: wp.i18n.__(`SFS Import`, `windpress`),
          description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
          color: `error`,
          icon: `i-lucide-upload`
        });
        return;
      }
      if (!await i2.create(an, {
        destroyOnClose: true,
        props: {
          data: o3
        }
      }).open().result) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.__(`SFS import canceled`, `windpress`),
          color: `info`,
          icon: `i-lucide-upload`
        }), n3.value = ``;
        return;
      }
      r2.add({
        id: `file-import.doImport`,
        title: wp.i18n.__(`Importing...`, `windpress`),
        description: wp.i18n.__(`Please wait while we import the data.`, `windpress`),
        icon: `lucide:loader-circle`,
        close: false,
        duration: 0,
        color: `neutral`,
        ui: {
          icon: `animate-spin`
        }
      }), await new Promise((e3) => setTimeout(e3, 500));
      try {
        let t4 = o3.entries.map((e3) => {
          if (e3.signature && e3.handler === `internal`) {
            let { signature: t5, ...n4 } = e3;
            return n4;
          }
          return e3;
        });
        e2.data.entries = t4, r2.update(`file-import.doImport`, {
          title: wp.i18n.__(`Success`, `windpress`),
          description: wp.i18n.__(`SFS data imported. Remember to save the changes.`, `windpress`),
          color: `success`,
          icon: `i-lucide-upload`,
          duration: void 0,
          close: true,
          ui: {
            icon: void 0
          }
        }), n3.value = ``;
      } catch (e3) {
        r2.update(`file-import.doImport`, {
          title: wp.i18n.__(`Error`, `windpress`),
          description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
          color: `error`,
          icon: `i-lucide-upload`,
          close: true,
          duration: void 0,
          ui: {
            icon: void 0
          }
        }), n3.value = ``;
      }
    }
    async function u2() {
      let t3 = await i2.create(dn, {
        destroyOnClose: true
      }).open().result;
      if (!t3) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.__(`New file creation canceled`, `windpress`),
          color: `info`,
          icon: `i-lucide-plus`
        });
        return;
      }
      try {
        e2.addNewEntry(t3.filePath, t3.handler), r2.add({
          title: wp.i18n.__(`Success`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" created`, `windpress`), t3.filePath),
          color: `success`,
          icon: `i-lucide-plus`
        });
      } catch (e3) {
        r2.add({
          title: wp.i18n.__(`Error`, `windpress`),
          description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
          color: `error`,
          icon: `i-lucide-plus`
        });
      }
    }
    async function d2(t3) {
      let n3 = await i2.create(pn, {
        destroyOnClose: true,
        props: {
          filePath: t3.relative_path
        }
      }).open().result;
      if (!n3) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.__(`File rename canceled`, `windpress`),
          color: `info`,
          icon: `i-lucide-edit`
        });
        return;
      }
      try {
        e2.renameEntry(t3, n3), r2.add({
          title: wp.i18n.__(`Success`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" renamed to "%s"`, `windpress`), t3.relative_path, n3),
          color: `success`,
          icon: `i-lucide-edit`
        });
      } catch (e3) {
        r2.add({
          title: wp.i18n.__(`Error`, `windpress`),
          description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
          color: `error`,
          icon: `i-lucide-edit`
        });
      }
    }
    return {
      deleteFile: a2,
      resetFile: o2,
      save: s2,
      exportVolume: c2,
      importVolume: l2,
      addNewFile: u2,
      renameFile: d2
    };
  };
})();
export {
  __tla,
  zt as n,
  $ as r,
  mn as t
};
