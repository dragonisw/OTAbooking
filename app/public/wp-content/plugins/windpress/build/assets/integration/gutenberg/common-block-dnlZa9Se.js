const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../../toggleHighContrast-Df6w4ag4.css"])))=>i.map(i=>d[i]);
import { n as e } from "../../index.browser-DTH_RVqO.js";
import { t } from "../../debounce-B--MR6Mm.js";
import { t as n } from "../../isEqual-i1JvoB7a.js";
import { t as r } from "../../preload-helper-Cb81DA_d.js";
import { t as i } from "../../windpress-anR1TjG4.js";
import { t as a } from "../../useDarkMode-Dh2jjpNo.js";
import { p as o } from "../../toggleHighContrast-BVW2jQZl.js";
import { n as s, t as c } from "../../editor.worker-adzrAvXA.js";
(async () => {
  function l({ attributes: e2 = {}, onChange: n2 }) {
    let [r2, i2] = wp.element.useState(``), [a2, o2] = wp.element.useState(``), s2 = Object.entries(e2).filter(([e3]) => e3 !== `class`), c2 = () => {
      if (!r2.trim()) {
        alert(wp.i18n.__(`Please enter an attribute name`, `windpress`));
        return;
      }
      let t2 = r2.trim().replace(/[^a-zA-Z0-9\-_:@]/g, ``);
      if (!t2) {
        alert(wp.i18n.__(`Invalid attribute name`, `windpress`));
        return;
      }
      n2({
        ...e2,
        [t2]: a2
      }), i2(``), o2(``);
    }, l2 = (t2) => {
      let r3 = {
        ...e2
      };
      delete r3[t2], n2(r3);
    }, u2 = wp.element.useRef(n2), d2 = wp.element.useRef(e2);
    wp.element.useEffect(() => {
      u2.current = n2, d2.current = e2;
    }, [
      n2,
      e2
    ]);
    let f2 = wp.element.useMemo(() => t((e3, t2) => {
      u2.current({
        ...d2.current,
        [e3]: t2
      });
    }, 300), []);
    wp.element.useEffect(() => () => {
      f2.cancel();
    }, [
      f2
    ]);
    let p2 = wp.element.useCallback((e3, t2) => {
      f2(e3, t2);
    }, [
      f2
    ]);
    return React.createElement(wp.components.PanelBody, {
      title: wp.i18n.__(`Attributes`, `windpress`),
      initialOpen: false
    }, s2.length > 0 && React.createElement(`div`, {
      style: {
        marginBottom: `16px`
      }
    }, s2.map(([e3, t2]) => React.createElement(wp.components.Flex, {
      key: e3,
      gap: 2,
      style: {
        marginBottom: `8px`
      },
      align: `flex-start`
    }, React.createElement(wp.components.FlexItem, {
      style: {
        flex: `0 0 80px`
      }
    }, React.createElement(wp.components.TextControl, {
      value: e3,
      disabled: true,
      style: {
        fontSize: `12px`,
        fontFamily: `monospace`
      },
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    })), React.createElement(wp.components.FlexItem, {
      style: {
        flex: `1`
      }
    }, React.createElement(wp.components.TextControl, {
      value: t2,
      onChange: (t3) => p2(e3, t3),
      placeholder: wp.i18n.__(`Value`, `windpress`),
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    })), React.createElement(wp.components.FlexItem, null, React.createElement(wp.components.Button, {
      icon: `trash`,
      label: wp.i18n.__(`Remove`, `windpress`),
      isDestructive: true,
      onClick: () => l2(e3)
    }))))), React.createElement(`div`, {
      style: {
        borderTop: `1px solid #ddd`,
        paddingTop: `12px`
      }
    }, React.createElement(wp.components.Flex, {
      gap: 2,
      style: {
        marginBottom: `8px`
      },
      align: `flex-start`
    }, React.createElement(wp.components.FlexItem, {
      style: {
        flex: `0 0 80px`
      }
    }, React.createElement(wp.components.TextControl, {
      label: wp.i18n.__(`Name`, `windpress`),
      value: r2,
      onChange: i2,
      placeholder: `id`,
      style: {
        fontSize: `12px`,
        fontFamily: `monospace`
      },
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    })), React.createElement(wp.components.FlexItem, {
      style: {
        flex: `1`
      }
    }, React.createElement(wp.components.TextControl, {
      label: wp.i18n.__(`Value`, `windpress`),
      value: a2,
      onChange: o2,
      placeholder: wp.i18n.__(`attribute value`, `windpress`),
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    }))), React.createElement(wp.components.Button, {
      variant: `secondary`,
      onClick: c2,
      style: {
        width: `100%`
      }
    }, wp.i18n.__(`Add Attribute`, `windpress`))), React.createElement(`p`, {
      style: {
        fontSize: `12px`,
        color: `#757575`,
        marginTop: `12px`
      }
    }, wp.i18n.__(`Common attributes: id, data-*, aria-*, role, title, etc.`, `windpress`)));
  }
  function u(e2, t2) {
    return e2.attributes === t2.attributes || JSON.stringify(e2.attributes) === JSON.stringify(t2.attributes);
  }
  var d = wp.element.memo(l, u);
  function f({ attributes: e2 = {}, onChange: n2 }) {
    let { src: r2 = ``, alt: i2 = ``, width: a2 = ``, height: o2 = `` } = e2, s2 = wp.element.useRef(n2), c2 = wp.element.useRef(e2);
    wp.element.useEffect(() => {
      s2.current = n2, c2.current = e2;
    }, [
      n2,
      e2
    ]);
    let l2 = wp.element.useCallback((e3) => {
      s2.current({
        ...c2.current,
        src: e3.url,
        alt: e3.alt || ``,
        width: e3.width ? String(e3.width) : ``,
        height: e3.height ? String(e3.height) : ``
      });
    }, []), u2 = wp.element.useMemo(() => t((e3, t2) => {
      s2.current({
        ...c2.current,
        [e3]: t2
      });
    }, 300), []);
    wp.element.useEffect(() => () => {
      u2.cancel();
    }, [
      u2
    ]);
    let d2 = wp.element.useCallback((e3, t2) => {
      u2(e3, t2);
    }, [
      u2
    ]);
    return React.createElement(wp.components.PanelBody, {
      title: wp.i18n.__(`Image Settings`, `windpress`),
      initialOpen: true
    }, React.createElement(wp.blockEditor.MediaUploadCheck, null, React.createElement(wp.blockEditor.MediaUpload, {
      onSelect: l2,
      allowedTypes: [
        `image`
      ],
      value: r2,
      render: ({ open: e3 }) => React.createElement(`div`, null, r2 && React.createElement(`div`, {
        style: {
          marginBottom: `12px`
        }
      }, React.createElement(`img`, {
        src: r2,
        alt: i2 || ``,
        style: {
          width: `100%`,
          height: `auto`,
          maxHeight: `200px`,
          objectFit: `contain`,
          border: `1px solid #ddd`,
          borderRadius: `4px`
        }
      })), React.createElement(wp.components.Button, {
        onClick: e3,
        variant: r2 ? `secondary` : `primary`,
        style: {
          width: `100%`,
          marginBottom: `8px`
        }
      }, r2 ? wp.i18n.__(`Replace Image`, `windpress`) : wp.i18n.__(`Select Image`, `windpress`)), r2 && React.createElement(wp.components.Button, {
        onClick: () => d2(`src`, ``),
        variant: `secondary`,
        isDestructive: true,
        style: {
          width: `100%`
        }
      }, wp.i18n.__(`Remove Image`, `windpress`)))
    })), React.createElement(wp.components.TextControl, {
      label: wp.i18n.__(`Alt Text`, `windpress`),
      value: i2,
      onChange: (e3) => d2(`alt`, e3),
      help: wp.i18n.__(`Describe the image for accessibility`, `windpress`),
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    }), React.createElement(wp.components.TextControl, {
      label: wp.i18n.__(`Width`, `windpress`),
      value: a2,
      onChange: (e3) => d2(`width`, e3),
      type: `number`,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    }), React.createElement(wp.components.TextControl, {
      label: wp.i18n.__(`Height`, `windpress`),
      value: o2,
      onChange: (e3) => d2(`height`, e3),
      type: `number`,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    }));
  }
  function p(e2, t2) {
    let n2 = e2.attributes || {}, r2 = t2.attributes || {};
    return n2.src === r2.src && n2.alt === r2.alt && n2.width === r2.width && n2.height === r2.height;
  }
  var m = wp.element.memo(f, p);
  function h({ attributes: e2 = {}, onChange: n2 }) {
    let { href: r2 = ``, target: i2 = ``, rel: a2 = `` } = e2, [o2, s2] = wp.element.useState(false), c2 = wp.element.useRef(n2), l2 = wp.element.useRef(e2);
    wp.element.useEffect(() => {
      c2.current = n2, l2.current = e2;
    }, [
      n2,
      e2
    ]);
    let u2 = wp.element.useMemo(() => t((e3, t2) => {
      c2.current({
        ...l2.current,
        [e3]: t2
      });
    }, 300), []);
    wp.element.useEffect(() => () => {
      u2.cancel();
    }, [
      u2
    ]);
    let d2 = wp.element.useCallback((e3, t2) => {
      u2(e3, t2);
    }, [
      u2
    ]), f2 = wp.element.useCallback((e3) => {
      let t2 = {
        ...l2.current
      };
      e3?.url && (t2.href = e3.url, e3.opensInNewTab ? (t2.target = `_blank`, t2.rel = `noopener noreferrer`) : (delete t2.target, delete t2.rel)), c2.current(t2), s2(false);
    }, []), p2 = wp.element.useCallback(() => {
      let e3 = {
        ...l2.current
      };
      delete e3.href, delete e3.target, delete e3.rel, c2.current(e3);
    }, []);
    return React.createElement(wp.components.PanelBody, {
      title: wp.i18n.__(`Link Settings`, `windpress`),
      initialOpen: true
    }, o2 ? React.createElement(`div`, null, React.createElement(wp.blockEditor.__experimentalLinkControl, {
      value: {
        url: r2,
        opensInNewTab: i2 === `_blank`
      },
      onChange: f2,
      onRemove: p2
    }), React.createElement(wp.components.Button, {
      variant: `secondary`,
      onClick: () => s2(false),
      style: {
        width: `100%`,
        marginTop: `8px`
      }
    }, wp.i18n.__(`Cancel`, `windpress`))) : React.createElement(React.Fragment, null, React.createElement(wp.components.TextControl, {
      label: wp.i18n.__(`URL`, `windpress`),
      value: r2,
      onChange: (e3) => d2(`href`, e3),
      placeholder: `https://example.com`,
      type: `url`,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    }), React.createElement(wp.components.Button, {
      variant: `secondary`,
      onClick: () => s2(true),
      style: {
        width: `100%`,
        marginBottom: `12px`
      }
    }, wp.i18n.__(`Choose from Posts/Pages`, `windpress`)), r2 && React.createElement(React.Fragment, null, React.createElement(wp.components.ToggleControl, {
      label: wp.i18n.__(`Open in new tab`, `windpress`),
      checked: i2 === `_blank`,
      onChange: (t2) => {
        if (t2) d2(`target`, `_blank`), d2(`rel`, `noopener noreferrer`);
        else {
          let t3 = {
            ...e2
          };
          delete t3.target, delete t3.rel, n2(t3);
        }
      },
      __nextHasNoMarginBottom: true
    }), React.createElement(wp.components.Button, {
      variant: `secondary`,
      isDestructive: true,
      onClick: p2,
      style: {
        width: `100%`
      }
    }, wp.i18n.__(`Remove Link`, `windpress`)))), r2 && React.createElement(`p`, {
      style: {
        fontSize: `12px`,
        color: `#757575`,
        marginTop: `12px`
      }
    }, wp.i18n.__(`Current URL:`, `windpress`), ` `, React.createElement(`code`, null, r2)));
  }
  function g(e2, t2) {
    let n2 = e2.attributes || {}, r2 = t2.attributes || {};
    return n2.href === r2.href && n2.target === r2.target && n2.rel === r2.rel;
  }
  var _ = wp.element.memo(h, g);
  s({
    id: `html`,
    extensions: [
      `.html`,
      `.htm`,
      `.shtml`,
      `.xhtml`,
      `.mdoc`,
      `.jsp`,
      `.asp`,
      `.aspx`,
      `.jshtm`
    ],
    aliases: [
      `HTML`,
      `htm`,
      `html`,
      `xhtml`
    ],
    mimetypes: [
      `text/html`,
      `text/x-jshtm`,
      `text/template`,
      `text/ng-template`
    ],
    loader: () => r(() => import("../../html-BZ3W776b.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([0]), import.meta.url)
  });
  var v = `` + new URL(`../../html.worker-CQP8QQsS.js`, import.meta.url).href;
  typeof window < `u` && !window.MonacoEnvironment && (window.MonacoEnvironment = {
    getWorker(e2, t2) {
      return t2 === `html` || t2 === `handlebars` || t2 === `razor` ? new Worker(v, {
        type: `module`
      }) : new Worker(c, {
        type: `module`
      });
    }
  });
  function y({ value: e2 = ``, onChange: n2, language: r2 = `html`, height: i2 = 400, options: a2 = {} }) {
    let s2 = wp.element.useRef(null), c2 = wp.element.useRef(null), l2 = wp.element.useRef(null), u2 = wp.element.useRef(e2), d2 = wp.element.useRef(false), [f2, p2] = wp.element.useState(() => typeof document < `u` ? document.documentElement.classList.contains(`is-dark-theme`) || document.body.classList.contains(`is-dark-theme`) : false), m2 = wp.element.useMemo(() => ({
      automaticLayout: true,
      minimap: {
        enabled: false
      },
      lineNumbers: `on`,
      scrollBeyondLastLine: false,
      wrappingIndent: `indent`,
      fontSize: 13,
      tabSize: 2,
      formatOnPaste: true,
      formatOnType: false,
      ...a2
    }), [
      a2
    ]), h2 = wp.element.useMemo(() => n2 ? t((e3) => {
      d2.current = true, n2(e3);
    }, 500) : null, [
      n2
    ]), g2 = wp.element.useCallback((e3) => {
      u2.current = e3, h2 && h2(e3);
    }, [
      h2
    ]);
    return wp.element.useEffect(() => () => {
      h2 && h2.cancel();
    }, [
      h2
    ]), wp.element.useEffect(() => {
      if (!c2.current || s2.current) return;
      let t2 = new MutationObserver(() => {
        let e3 = document.documentElement.classList.contains(`is-dark-theme`) || document.body.classList.contains(`is-dark-theme`);
        e3 !== f2 && p2(e3);
      });
      t2.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
          `class`
        ]
      }), t2.observe(document.body, {
        attributes: true,
        attributeFilter: [
          `class`
        ]
      });
      let n3 = o.create(c2.current, {
        value: e2,
        language: r2,
        theme: f2 ? `vs-dark` : `vs`,
        ...m2
      });
      return s2.current = n3, u2.current = e2, l2.current = n3.onDidChangeModelContent(() => {
        g2(n3.getValue());
      }), () => {
        t2.disconnect(), l2.current && (l2.current = (l2.current.dispose(), null)), s2.current && (s2.current = (s2.current.dispose(), null));
      };
    }, []), wp.element.useEffect(() => {
      s2.current && o.setTheme(f2 ? `vs-dark` : `vs`);
    }, [
      f2
    ]), wp.element.useEffect(() => {
      if (d2.current) {
        d2.current = false;
        return;
      }
      if (e2 !== u2.current && s2.current) {
        let t2 = s2.current;
        if (e2 !== t2.getValue()) {
          let n3 = t2.getPosition(), r3 = t2.getSelection();
          t2.setValue(e2), u2.current = e2, n3 && t2.setPosition(n3), r3 && t2.setSelection(r3), t2.focus();
        }
      }
    }, [
      e2
    ]), React.createElement(`div`, {
      ref: c2,
      style: {
        height: `${i2}px`,
        border: `1px solid #ddd`,
        borderRadius: `4px`,
        overflow: `hidden`
      }
    });
  }
  function b(e2, t2) {
    return e2.value === t2.value && e2.language === t2.language && e2.height === t2.height && JSON.stringify(e2.options) === JSON.stringify(t2.options);
  }
  var x = wp.element.memo(y, b), S = [
    {
      label: `Inner Blocks`,
      value: `blocks`
    },
    {
      label: `Text`,
      value: `text`
    },
    {
      label: `HTML`,
      value: `html`
    },
    {
      label: `\u2500\u2500\u2500 None \u2500\u2500\u2500`,
      value: `empty`
    }
  ], C = {
    renderAppender: wp.blockEditor.InnerBlocks.ButtonBlockAppender
  };
  function w({ attributes: e2, setAttributes: t2, clientId: n2 }) {
    let { tagName: r2 = `div`, contentType: i2 = `blocks`, content: a2 = ``, globalAttrs: o2 = {}, selfClosing: s2 = false } = e2, [c2, l2] = wp.element.useState(false), [u2, f2] = wp.element.useState(``), [p2, h2] = wp.element.useState(``), { replaceInnerBlocks: g2, updateBlockAttributes: v2 } = wp.data.useDispatch(`core/block-editor`), { innerBlocks: y2, isRoot: b2 } = wp.data.useSelect((e3) => {
      let t3 = e3(`core/block-editor`), r3 = t3.getBlockRootClientId(n2);
      return {
        innerBlocks: t3.getBlocks(n2),
        isRoot: !r3
      };
    }, [
      n2
    ]), w2 = wp.element.useCallback((e3, t3) => {
      if (e3 === `cb-text-node`) return `Text`;
      let n3 = e3.split(`-`).map((e4) => e4.charAt(0).toUpperCase() + e4.slice(1)).join(` `);
      return t3 && t3.globalAttrs && t3.globalAttrs.id && (n3 += ` #${t3.globalAttrs.id}`), n3;
    }, []), T2 = wp.element.useRef(r2), E2 = wp.element.useRef(o2?.id);
    wp.element.useEffect(() => {
      let t3 = o2?.id;
      (T2.current !== r2 || E2.current !== t3) && (T2.current = r2, E2.current = t3, v2(n2, {
        metadata: {
          ...e2.metadata,
          name: w2(r2, e2)
        }
      }));
    }, [
      r2,
      o2?.id,
      n2,
      v2,
      e2,
      w2
    ]);
    let D2 = wp.element.useMemo(() => {
      let e3 = {};
      for (let t3 in o2) t3 !== `class` && (e3[t3] = o2[t3]);
      return e3.id || (e3.id = `block-${n2}`), e3;
    }, [
      JSON.stringify(o2),
      n2
    ]), O2 = wp.element.useMemo(() => `windpress-common-block ${b2 ? `is-root-container` : ``} ${e2.className || ``}`.trim(), [
      b2,
      e2.className
    ]), k2 = wp.element.useCallback((e3) => {
      e3 && r2 === `a` && (e3.style.removeProperty(`white-space`), e3.style.removeProperty(`min-width`));
    }, [
      r2
    ]), A2 = wp.element.useMemo(() => ({
      className: O2,
      ...D2,
      "data-title": `Common Block`,
      "data-tag": r2,
      ref: k2
    }), [
      O2,
      D2,
      r2,
      k2
    ]), j2 = wp.blockEditor.useBlockProps(A2), M2 = wp.element.useMemo(() => ({
      ...C
    }), [
      r2
    ]), N2 = wp.blockEditor.useInnerBlocksProps(r2 === `a` ? {
      ...j2,
      onClick: (e3) => e3.preventDefault()
    } : j2, M2), P2 = wp.element.useMemo(() => {
      let e3 = {
        ...j2
      };
      return r2 === `a` && (i2 === `html` || i2 === `empty`) && (e3.onClick = (e4) => e4.preventDefault()), e3;
    }, [
      j2,
      r2,
      i2
    ]), F2 = wp.element.useMemo(() => {
      let e3 = {
        className: j2.className,
        "data-title": `Common Block`,
        "data-tag": r2
      };
      return r2 === `a` && (e3.ref = (e4) => {
        e4 && (e4.style.removeProperty(`white-space`), e4.style.removeProperty(`min-width`));
      }, e3.onClick = (e4) => e4.preventDefault()), e3;
    }, [
      j2.className,
      r2
    ]), I2 = wp.element.useCallback((e3) => {
      let n3 = {
        tagName: e3
      };
      [
        `img`,
        `input`,
        `br`,
        `hr`,
        `meta`,
        `link`
      ].includes(e3) ? (n3.selfClosing = true, n3.contentType = `empty`) : n3.selfClosing = false, t2(n3);
    }, [
      t2
    ]), L2 = wp.element.useCallback((e3) => {
      t2({
        contentType: e3
      });
    }, [
      t2
    ]), R2 = wp.element.useCallback((e3) => {
      t2({
        content: e3
      });
    }, [
      t2
    ]), z2 = wp.element.useCallback((e3) => {
      t2({
        globalAttrs: e3
      });
    }, [
      t2
    ]), B2 = wp.element.useCallback(() => {
      if (window.windpressCommonBlock === void 0 || typeof window.windpressCommonBlock.blocks2html != `function`) {
        alert(wp.i18n.__(`HTML serializer not available. Please refresh the page.`, `windpress`));
        return;
      }
      try {
        let t3 = {
          name: `windpress/common-block`,
          attributes: e2,
          innerBlocks: y2 || []
        };
        f2(window.windpressCommonBlock.blocks2html([
          t3
        ])), l2(true);
      } catch (e3) {
        console.error(`HTML export error:`, e3), alert(wp.i18n.__(`Error exporting HTML. Check console for details.`, `windpress`));
      }
    }, [
      e2,
      y2
    ]), V2 = wp.element.useCallback((e3) => {
      navigator.clipboard.writeText(e3).then(() => {
        alert(wp.i18n.__(`Copied to clipboard!`, `windpress`));
      }).catch(() => {
        alert(wp.i18n.__(`Failed to copy. Please select and copy manually.`, `windpress`));
      });
    }, []), H2 = wp.element.useCallback(() => {
      let e3 = p2.trim().toLowerCase().replace(/[^a-z0-9-]/g, ``);
      if (!e3) {
        alert(wp.i18n.__(`Please enter a valid tag name`, `windpress`));
        return;
      }
      if (!e3.includes(`-`)) {
        alert(wp.i18n.__(`Custom elements must contain a hyphen (e.g., my-element)`, `windpress`));
        return;
      }
      I2(e3), h2(``);
    }, [
      p2,
      I2
    ]), U2 = r2;
    wp.element.useMemo(() => i2 === `blocks` ? N2.children : null, [
      i2,
      N2.children
    ]);
    let W2 = wp.element.useCallback(() => {
      let { children: e3, ...t3 } = N2;
      return React.createElement(U2, t3, e3);
    }, [
      U2,
      N2
    ]), G2 = wp.element.useCallback(() => React.createElement(wp.blockEditor.RichText, {
      tagName: U2,
      value: a2,
      onChange: R2,
      placeholder: wp.i18n.__(`Enter text...`, `windpress`),
      ...F2
    }), [
      U2,
      a2,
      R2,
      F2
    ]), K2 = wp.element.useCallback(() => React.createElement(U2, {
      ...P2,
      dangerouslySetInnerHTML: {
        __html: a2 || wp.i18n.__(`(empty)`, `windpress`)
      }
    }), [
      U2,
      P2,
      a2
    ]), q2 = wp.element.useCallback(() => s2 || i2 === `empty` ? React.createElement(U2, P2) : React.createElement(U2, P2, wp.i18n.__(`(empty)`, `windpress`)), [
      U2,
      P2,
      s2,
      i2
    ]), J2 = wp.element.useMemo(() => i2 === `blocks` ? W2() : i2 === `text` ? G2() : i2 === `html` ? K2() : q2(), [
      i2,
      W2,
      G2,
      K2,
      q2
    ]);
    return React.createElement(React.Fragment, null, React.createElement(wp.blockEditor.BlockControls, null, React.createElement(wp.components.ToolbarGroup, null, React.createElement(wp.components.ToolbarButton, {
      icon: `upload`,
      label: wp.i18n.__(`Export HTML`, `windpress`),
      onClick: B2
    }))), React.createElement(wp.blockEditor.InspectorControls, null, React.createElement(wp.components.PanelBody, {
      title: wp.i18n.__(`Element Settings`, `windpress`),
      initialOpen: true
    }, React.createElement(wp.components.SelectControl, {
      label: wp.i18n.__(`HTML Tag`, `windpress`),
      value: r2,
      onChange: I2,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true,
      options: [
        {
          label: `\u2500\u2500\u2500 Layout \u2500\u2500\u2500`,
          value: ``,
          disabled: true
        },
        {
          label: `<div>`,
          value: `div`
        },
        {
          label: `<section>`,
          value: `section`
        },
        {
          label: `<article>`,
          value: `article`
        },
        {
          label: `<header>`,
          value: `header`
        },
        {
          label: `<footer>`,
          value: `footer`
        },
        {
          label: `<nav>`,
          value: `nav`
        },
        {
          label: `<main>`,
          value: `main`
        },
        {
          label: `<aside>`,
          value: `aside`
        },
        {
          label: `\u2500\u2500\u2500 Headings \u2500\u2500\u2500`,
          value: ``,
          disabled: true
        },
        {
          label: `<h1>`,
          value: `h1`
        },
        {
          label: `<h2>`,
          value: `h2`
        },
        {
          label: `<h3>`,
          value: `h3`
        },
        {
          label: `<h4>`,
          value: `h4`
        },
        {
          label: `<h5>`,
          value: `h5`
        },
        {
          label: `<h6>`,
          value: `h6`
        },
        {
          label: `\u2500\u2500\u2500 Text \u2500\u2500\u2500`,
          value: ``,
          disabled: true
        },
        {
          label: `<p>`,
          value: `p`
        },
        {
          label: `<span>`,
          value: `span`
        },
        {
          label: `<blockquote>`,
          value: `blockquote`
        },
        {
          label: `<pre>`,
          value: `pre`
        },
        {
          label: `<code>`,
          value: `code`
        },
        {
          label: `\u2500\u2500\u2500 Inline \u2500\u2500\u2500`,
          value: ``,
          disabled: true
        },
        {
          label: `<a>`,
          value: `a`
        },
        {
          label: `<strong>`,
          value: `strong`
        },
        {
          label: `<em>`,
          value: `em`
        },
        {
          label: `<mark>`,
          value: `mark`
        },
        {
          label: `<small>`,
          value: `small`
        },
        {
          label: `<del>`,
          value: `del`
        },
        {
          label: `<ins>`,
          value: `ins`
        },
        {
          label: `\u2500\u2500\u2500 Lists \u2500\u2500\u2500`,
          value: ``,
          disabled: true
        },
        {
          label: `<ul>`,
          value: `ul`
        },
        {
          label: `<ol>`,
          value: `ol`
        },
        {
          label: `<li>`,
          value: `li`
        },
        {
          label: `<dl>`,
          value: `dl`
        },
        {
          label: `<dt>`,
          value: `dt`
        },
        {
          label: `<dd>`,
          value: `dd`
        },
        {
          label: `\u2500\u2500\u2500 Media \u2500\u2500\u2500`,
          value: ``,
          disabled: true
        },
        {
          label: `<img>`,
          value: `img`
        },
        {
          label: `<picture>`,
          value: `picture`
        },
        {
          label: `<figure>`,
          value: `figure`
        },
        {
          label: `<figcaption>`,
          value: `figcaption`
        },
        {
          label: `<video>`,
          value: `video`
        },
        {
          label: `<audio>`,
          value: `audio`
        },
        {
          label: `<iframe>`,
          value: `iframe`
        },
        {
          label: `\u2500\u2500\u2500 Form \u2500\u2500\u2500`,
          value: ``,
          disabled: true
        },
        {
          label: `<form>`,
          value: `form`
        },
        {
          label: `<input>`,
          value: `input`
        },
        {
          label: `<textarea>`,
          value: `textarea`
        },
        {
          label: `<select>`,
          value: `select`
        },
        {
          label: `<button>`,
          value: `button`
        },
        {
          label: `<label>`,
          value: `label`
        },
        {
          label: `\u2500\u2500\u2500 Table \u2500\u2500\u2500`,
          value: ``,
          disabled: true
        },
        {
          label: `<table>`,
          value: `table`
        },
        {
          label: `<thead>`,
          value: `thead`
        },
        {
          label: `<tbody>`,
          value: `tbody`
        },
        {
          label: `<tfoot>`,
          value: `tfoot`
        },
        {
          label: `<tr>`,
          value: `tr`
        },
        {
          label: `<th>`,
          value: `th`
        },
        {
          label: `<td>`,
          value: `td`
        }
      ],
      help: wp.i18n.__(`Select an HTML tag or use Custom Element panel for custom tags`, `windpress`)
    }), !s2 && React.createElement(wp.components.SelectControl, {
      label: wp.i18n.__(`Content Type`, `windpress`),
      value: i2,
      options: S,
      onChange: L2,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    })), React.createElement(wp.components.PanelBody, {
      title: wp.i18n.__(`HTML Export`, `windpress`),
      initialOpen: false
    }, React.createElement(`p`, {
      style: {
        fontSize: `12px`,
        color: `#757575`,
        marginBottom: `12px`
      }
    }, wp.i18n.__(`Export this block as clean HTML code.`, `windpress`)), React.createElement(wp.components.Button, {
      variant: `secondary`,
      icon: `upload`,
      onClick: B2,
      style: {
        width: `100%`,
        justifyContent: `center`
      }
    }, wp.i18n.__(`Export to HTML`, `windpress`))), i2 === `html` && React.createElement(wp.components.PanelBody, {
      title: wp.i18n.__(`HTML Content`, `windpress`),
      initialOpen: false
    }, React.createElement(wp.components.TextareaControl, {
      label: wp.i18n.__(`HTML`, `windpress`),
      value: a2,
      onChange: R2,
      rows: 10,
      __nextHasNoMarginBottom: true
    })), React.createElement(d, {
      attributes: o2,
      onChange: z2
    }), r2 === `img` && React.createElement(m, {
      attributes: o2,
      onChange: z2
    }), r2 === `a` && React.createElement(_, {
      attributes: o2,
      onChange: z2
    }), React.createElement(wp.components.PanelBody, {
      title: wp.i18n.__(`Custom Element`, `windpress`),
      initialOpen: false
    }, React.createElement(`p`, {
      style: {
        fontSize: `12px`,
        color: `#757575`,
        marginBottom: `12px`
      }
    }, wp.i18n.__(`Enter a custom HTML tag name (must contain a hyphen for web components)`, `windpress`)), React.createElement(wp.components.TextControl, {
      label: wp.i18n.__(`Custom Tag Name`, `windpress`),
      value: p2,
      onChange: h2,
      placeholder: `my-custom-element`,
      help: wp.i18n.__(`Examples: my-widget, custom-card, x-button`, `windpress`),
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    }), React.createElement(wp.components.Button, {
      variant: `primary`,
      onClick: H2,
      style: {
        width: `100%`
      }
    }, wp.i18n.__(`Apply Custom Tag`, `windpress`)))), c2 && React.createElement(wp.components.Modal, {
      title: wp.i18n.__(`Export HTML`, `windpress`),
      onRequestClose: () => l2(false),
      style: {
        maxWidth: `800px`,
        width: `90vw`
      }
    }, React.createElement(`p`, null, wp.i18n.__(`Copy the HTML code below:`, `windpress`)), React.createElement(`div`, {
      style: {
        marginBottom: `16px`
      }
    }, React.createElement(x, {
      value: u2,
      onChange: () => {
      },
      language: `html`,
      height: 400,
      options: {
        readOnly: true
      }
    })), React.createElement(`div`, {
      style: {
        display: `flex`,
        gap: `8px`
      }
    }, React.createElement(wp.components.Button, {
      variant: `primary`,
      onClick: () => V2(u2)
    }, wp.i18n.__(`Copy to Clipboard`, `windpress`)), React.createElement(wp.components.Button, {
      variant: `secondary`,
      onClick: () => l2(false)
    }, wp.i18n.__(`Close`, `windpress`)))), J2);
  }
  function T(e2, t2) {
    return e2.clientId === t2.clientId ? n(e2.attributes, t2.attributes) : false;
  }
  var E = wp.element.memo(w, T);
  function D({ attributes: e2 }) {
    let { contentType: t2 = `blocks` } = e2;
    return t2 === `blocks` ? React.createElement(wp.blockEditor.InnerBlocks.Content, null) : null;
  }
  var O = {
    $schema: `https://schemas.wp.org/trunk/block.json`,
    apiVersion: 3,
    name: `windpress/common-block`,
    version: `1.0.0`,
    title: `Common Block`,
    category: `design`,
    description: `A generic and flexible block that lets you build any HTML element.`,
    keywords: [
      `common`,
      `element`,
      `flexible`,
      `generic`,
      `tailwind`,
      `html`,
      `windpress`
    ],
    textdomain: `windpress`,
    editorScript: `file:./index.js`,
    attributes: {
      tagName: {
        type: `string`,
        default: `div`
      },
      contentType: {
        type: `string`,
        default: `blocks`
      },
      globalAttrs: {
        type: `object`,
        default: {}
      },
      content: {
        type: `string`,
        default: ``
      },
      selfClosing: {
        type: `boolean`,
        default: false
      },
      metadata: {
        type: `object`,
        default: {
          name: ``
        }
      }
    },
    supports: {
      html: false,
      className: true,
      customClassName: true,
      anchor: true,
      renaming: true,
      metadata: {
        name: true
      },
      align: [
        `left`,
        `center`,
        `right`,
        `wide`,
        `full`
      ],
      alignWide: true,
      spacing: {
        padding: true,
        margin: true,
        blockGap: true
      },
      dimensions: {
        minHeight: true,
        aspectRatio: true
      },
      position: {
        sticky: true
      },
      typography: {
        fontSize: true,
        fontFamily: true,
        fontWeight: true,
        fontStyle: true,
        textTransform: true,
        textDecoration: true,
        letterSpacing: true,
        lineHeight: true
      },
      color: {
        text: true,
        background: true,
        link: true,
        gradients: true
      },
      border: {
        color: true,
        radius: true,
        style: true,
        width: true
      },
      shadow: true,
      interactivity: {
        clientNavigation: true
      }
    },
    example: {
      attributes: {
        tagName: `div`,
        contentType: `blocks`
      }
    }
  }, k = /* @__PURE__ */ new Set([
    `a`,
    `abbr`,
    `b`,
    `bdi`,
    `bdo`,
    `cite`,
    `code`,
    `data`,
    `dfn`,
    `em`,
    `i`,
    `kbd`,
    `mark`,
    `q`,
    `s`,
    `samp`,
    `small`,
    `span`,
    `strong`,
    `sub`,
    `sup`,
    `time`,
    `u`,
    `var`
  ]), A = /* @__PURE__ */ new Set([
    `svg`,
    `math`,
    `script`,
    `style`,
    `noscript`,
    `iframe`
  ]), j = /* @__PURE__ */ new Set([
    `area`,
    `base`,
    `br`,
    `col`,
    `embed`,
    `hr`,
    `img`,
    `input`,
    `link`,
    `meta`,
    `param`,
    `source`,
    `track`,
    `wbr`
  ]);
  function M(t2) {
    if (!t2 || typeof t2 != `string`) return [];
    if (/<!--\s*wp:/.test(t2) && typeof wp < `u` && wp.blocks && wp.blocks.parse) try {
      let n3 = wp.blocks.parse(t2), r3 = {}, i2 = t2;
      n3.forEach((t3) => {
        if (t3.name) {
          let n4 = e(), a3 = wp.blocks.serialize(t3);
          i2 = i2.replace(a3, `<wp-block-placeholder data-id="${n4}"></wp-block-placeholder>`), r3[n4] = t3;
        }
      });
      let a2 = new DOMParser().parseFromString(i2.trim(), `text/html`).body, o2 = [];
      return Array.from(a2.childNodes).forEach((e2) => {
        let t3 = N(e2, r3);
        t3 && o2.push(t3);
      }), o2;
    } catch (e2) {
      console.error(`Failed to parse WordPress blocks, falling back to HTML parser:`, e2);
    }
    let n2 = new DOMParser().parseFromString(t2.trim(), `text/html`), r2 = [];
    return Array.from(n2.head.childNodes).forEach((e2) => {
      let t3 = N(e2, {});
      t3 && r2.push(t3);
    }), Array.from(n2.body.childNodes).forEach((e2) => {
      let t3 = N(e2, {});
      t3 && r2.push(t3);
    }), r2;
  }
  function N(e2, t2 = {}) {
    if (e2.nodeType === Node.COMMENT_NODE) return null;
    if (e2.nodeType === Node.TEXT_NODE) {
      let t3 = e2.textContent;
      return t3.trim() ? I(`cb-text-node`, `text`, t3.trim(), {
        className: ``,
        globalAttrs: {}
      }) : null;
    }
    if (e2.nodeType === Node.ELEMENT_NODE) {
      let n2 = e2.tagName.toLowerCase();
      if (n2 === `wp-block-placeholder`) {
        let n3 = e2.getAttribute(`data-id`);
        return n3 && t2[n3] ? t2[n3] : null;
      }
      let r2 = F(e2), i2 = P(e2, n2);
      if (i2 === `empty`) return I(n2, `empty`, ``, r2);
      if (i2 === `text`) return I(n2, `text`, e2.innerHTML.trim(), r2);
      if (i2 === `html`) {
        let t3 = e2.innerHTML;
        return I(n2, `html`, t3, r2);
      }
      if (i2 === `blocks`) {
        let i3 = [];
        return Array.from(e2.childNodes).forEach((e3) => {
          let n3 = N(e3, t2);
          n3 && i3.push(n3);
        }), I(n2, `blocks`, ``, r2, i3);
      }
    }
    return null;
  }
  function P(e2, t2) {
    if (A.has(t2)) return `html`;
    if (j.has(t2) || !e2.hasChildNodes()) return `empty`;
    let n2 = false, r2 = false, i2 = [];
    return Array.from(e2.childNodes).forEach((e3) => {
      e3.nodeType === Node.ELEMENT_NODE ? (n2 = true, i2.push(e3)) : e3.nodeType === Node.TEXT_NODE && e3.textContent.trim() && (r2 = true);
    }), !n2 && r2 ? `text` : n2 && !r2 ? `blocks` : i2.every((e3) => k.has(e3.tagName.toLowerCase())) ? `text` : `blocks`;
  }
  function F(e2) {
    let t2 = {}, n2 = ``;
    return Array.from(e2.attributes).forEach((e3) => {
      let r2 = e3.value;
      e3.name === `class` ? n2 = r2 : e3.name === `style` ? t2[`data-style`] = r2 : t2[e3.name] = r2;
    }), {
      className: n2,
      globalAttrs: t2
    };
  }
  function I(e2, t2, n2 = ``, r2 = {}, i2 = []) {
    let { className: a2 = ``, globalAttrs: o2 = {} } = r2, s2 = {
      name: `windpress/common-block`,
      attributes: {
        tagName: e2,
        contentType: t2,
        globalAttrs: o2,
        selfClosing: j.has(e2),
        metadata: {
          name: ((e3, t3) => {
            if (e3 === `cb-text-node`) return `Text`;
            let n3 = e3.split(`-`).map((e4) => e4.charAt(0).toUpperCase() + e4.slice(1)).join(` `);
            return t3 && t3.globalAttrs && t3.globalAttrs.id && (n3 += ` #${t3.globalAttrs.id}`), n3;
          })(e2, r2)
        }
      },
      innerBlocks: i2 || []
    };
    return a2 && (s2.attributes.className = a2), (t2 === `text` || t2 === `html`) && n2 && (s2.attributes.content = n2), s2;
  }
  function L(e2) {
    if (!e2 || !Array.isArray(e2)) return ``;
    let t2 = (e3) => {
      let { name: n2, attributes: r2, innerBlocks: i2 } = e3, a2 = Object.keys(r2).length > 0 ? ` ` + JSON.stringify(r2) : ``;
      return i2 && i2.length > 0 ? `<!-- wp:${n2}${a2} -->
${i2.map(t2).join(`
`)}
<!-- /wp:${n2} -->` : `<!-- wp:${n2}${a2} /-->`;
    };
    return e2.map(t2).join(`

`);
  }
  function R(e2) {
    if (!e2 || !Array.isArray(e2) || e2.length === 0) {
      console.error(`No blocks to insert`);
      return;
    }
    if (typeof wp > `u` || !wp.data) {
      console.error(`WordPress editor not available`);
      return;
    }
    let { select: t2, dispatch: n2 } = wp.data, { createBlock: r2 } = wp.blocks, i2 = (e3) => {
      let t3 = e3.innerBlocks && e3.innerBlocks.length > 0 ? e3.innerBlocks.map(i2) : [];
      return r2(e3.name, e3.attributes, t3);
    }, a2 = e2.map(i2), o2 = t2(`core/block-editor`).getSelectedBlockClientId(), s2 = t2(`core/block-editor`).getBlockRootClientId(o2);
    if (o2) {
      let e3 = t2(`core/block-editor`).getBlockIndex(o2);
      n2(`core/block-editor`).insertBlocks(a2, e3 + 1, s2);
    } else n2(`core/block-editor`).insertBlocks(a2);
  }
  typeof window < `u` && (window.windpressCommonBlock = window.windpressCommonBlock || {}, window.windpressCommonBlock.html2blocks = M, window.windpressCommonBlock.generateBlockMarkup = L, window.windpressCommonBlock.insertBlocks = R);
  function z(e2) {
    if (!e2 || !e2.name) return ``;
    if (typeof wp < `u` && wp.blocks && wp.blocks.serialize) return wp.blocks.serialize(e2);
    let { name: t2, attributes: n2 = {}, innerBlocks: r2 = [] } = e2, i2 = Object.keys(n2).length > 0 ? ` ` + JSON.stringify(n2) : ``, a2 = r2.length > 0 ? B(r2) : ``;
    return a2 ? `<!-- wp:${t2}${i2} -->
${a2}
<!-- /wp:${t2} -->` : `<!-- wp:${t2}${i2} /-->`;
  }
  function B(e2) {
    return !e2 || !Array.isArray(e2) ? `` : e2.map((e3) => V(e3)).join(`
`);
  }
  function V(e2) {
    if (!e2) return ``;
    if (e2.name !== `windpress/common-block`) return z(e2);
    let { attributes: t2, innerBlocks: n2 } = e2, { tagName: r2 = `div`, contentType: i2 = `text`, content: a2 = ``, globalAttrs: o2 = {}, className: s2 = `` } = t2;
    if (r2 === `cb-text-node`) return a2 || ``;
    let c2 = ``;
    s2 && (c2 += ` class="${U(s2)}"`), Object.entries(o2).forEach(([e3, t3]) => {
      e3 === `data-style` ? c2 += ` style="${U(t3)}"` : e3 && t3 != null && (c2 += ` ${W(e3)}="${U(t3)}"`);
    });
    let l2 = ``;
    switch (i2) {
      case `text`:
      case `html`:
        l2 = a2 || ``;
        break;
      case `blocks`:
        n2 && n2.length > 0 && (l2 = B(n2));
        break;
      default:
        l2 = ``;
        break;
    }
    return H(r2) ? `<${r2}${c2} />` : `<${r2}${c2}>${l2}</${r2}>`;
  }
  function H(e2) {
    return [
      `img`,
      `br`,
      `hr`,
      `input`,
      `meta`,
      `link`,
      `area`,
      `base`,
      `col`,
      `embed`,
      `source`,
      `track`,
      `wbr`
    ].includes(e2.toLowerCase());
  }
  function U(e2) {
    return typeof e2 != `string` && (e2 = String(e2)), e2.replace(/"/g, `&quot;`);
  }
  function W(e2) {
    return e2.replace(/[^a-zA-Z0-9\-_:@.]/g, ``);
  }
  typeof window < `u` && (window.windpressCommonBlock = window.windpressCommonBlock || {}, window.windpressCommonBlock.blocks2html = B, window.windpressCommonBlock.blocksToHtml = B);
  function G({ isOpen: e2, onClose: t2, onImport: n2 }) {
    let [r2, i2] = wp.element.useState(``), a2 = () => {
      if (!r2.trim()) {
        alert(wp.i18n.__(`Please enter HTML code to import`, `windpress`));
        return;
      }
      n2(r2), i2(``);
    }, o2 = () => {
      i2(``), t2();
    };
    return e2 ? React.createElement(wp.components.Modal, {
      title: wp.i18n.__(`Import HTML`, `windpress`),
      onRequestClose: o2,
      className: `windpress-html-import-modal`,
      style: {
        maxWidth: `800px`,
        width: `90vw`
      }
    }, React.createElement(`div`, {
      style: {
        marginBottom: `16px`
      }
    }, React.createElement(`p`, {
      style: {
        marginTop: 0,
        color: `#757575`
      }
    }, wp.i18n.__(`Paste your HTML code below. It will be converted to Common Blocks automatically.`, `windpress`))), React.createElement(`div`, {
      style: {
        height: `400px`,
        marginBottom: `16px`,
        border: `1px solid #ddd`,
        borderRadius: `4px`
      }
    }, React.createElement(x, {
      value: r2,
      onChange: i2,
      language: `html`
    })), React.createElement(`div`, {
      style: {
        display: `flex`,
        gap: `8px`,
        justifyContent: `flex-end`
      }
    }, React.createElement(wp.components.Button, {
      variant: `secondary`,
      onClick: o2
    }, wp.i18n.__(`Cancel`, `windpress`)), React.createElement(wp.components.Button, {
      variant: `primary`,
      onClick: a2,
      disabled: !r2.trim()
    }, wp.i18n.__(`Import`, `windpress`)))) : null;
  }
  function K() {
    let [e2, t2] = wp.element.useState(false), { insertBlocks: n2 } = wp.data.useDispatch(`core/block-editor`), { getSelectedBlockClientId: r2, getBlockRootClientId: i2, canInsertBlockType: a2, getBlockIndex: o2 } = wp.data.useSelect((e3) => e3(`core/block-editor`), []);
    return React.createElement(React.Fragment, null, React.createElement(wp.components.ToolbarButton, {
      icon: `download`,
      label: wp.i18n.__(`Import HTML`, `windpress`),
      onClick: () => t2(true)
    }), e2 && React.createElement(G, {
      isOpen: e2,
      onClose: () => t2(false),
      onImport: (e3) => {
        if (window.windpressCommonBlock === void 0 || typeof window.windpressCommonBlock.html2blocks != `function`) {
          alert(wp.i18n.__(`HTML parser not available. Please refresh the page.`, `windpress`));
          return;
        }
        try {
          let s2 = window.windpressCommonBlock.html2blocks(e3);
          if (!s2 || s2.length === 0) {
            alert(wp.i18n.__(`Could not parse HTML. Please check the HTML syntax.`, `windpress`));
            return;
          }
          let c2 = (e4) => {
            let t3 = e4.innerBlocks && e4.innerBlocks.length > 0 ? e4.innerBlocks.map(c2) : [];
            return wp.blocks.createBlock(e4.name, e4.attributes, t3);
          }, l2 = s2.map(c2), u2 = r2(), d2 = u2 ? i2(u2) : null, f2, p2;
          if (u2) if (l2.length > 0 && a2(l2[0].name, u2)) p2 = u2, f2 = void 0;
          else {
            let e4 = o2(u2);
            p2 = d2, f2 = e4 + 1;
          }
          else {
            let e4 = /* @__PURE__ */ new Set([
              `script`,
              `style`,
              `link`,
              `meta`,
              `title`,
              `base`
            ]);
            l2.forEach((t3) => {
              t3.name === `windpress/common-block` && !e4.has(t3.attributes?.tagName) && (t3.attributes.align = `full`);
            });
          }
          u2 ? n2(l2, f2, p2) : n2(l2), t2(false);
        } catch (e4) {
          console.error(`HTML import error:`, e4), alert(wp.i18n.__(`Error importing HTML. Check console for details.`, `windpress`));
        }
      }
    }));
  }
  function q() {
    let { theme: e2, applyTheme: t2, cycleTheme: n2 } = a(), r2 = () => e2 === `light` ? React.createElement(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `24`,
      height: `24`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`
    }, React.createElement(`circle`, {
      cx: `12`,
      cy: `12`,
      r: `4`
    }), React.createElement(`path`, {
      d: `M12 2v2`
    }), React.createElement(`path`, {
      d: `M12 20v2`
    }), React.createElement(`path`, {
      d: `m4.93 4.93 1.41 1.41`
    }), React.createElement(`path`, {
      d: `m17.66 17.66 1.41 1.41`
    }), React.createElement(`path`, {
      d: `M2 12h2`
    }), React.createElement(`path`, {
      d: `M20 12h2`
    }), React.createElement(`path`, {
      d: `m6.34 17.66-1.41 1.41`
    }), React.createElement(`path`, {
      d: `m19.07 4.93-1.41 1.41`
    })) : e2 === `dark` ? React.createElement(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `24`,
      height: `24`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`
    }, React.createElement(`path`, {
      d: `M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`
    })) : React.createElement(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`
    }, React.createElement(`g`, {
      fill: `none`,
      stroke: `currentColor`,
      "stroke-linecap": `round`,
      "stroke-linejoin": `round`,
      "stroke-width": `2`
    }, React.createElement(`path`, {
      d: `M12 17v4m10-8.693V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693M8 21h8`
    }), React.createElement(`circle`, {
      cx: `19`,
      cy: `6`,
      r: `3`
    }))), i2 = () => e2 === `light` ? wp.i18n.__(`Theme: Light`, `windpress`) : e2 === `dark` ? wp.i18n.__(`Theme: Dark`, `windpress`) : wp.i18n.__(`Theme: System`, `windpress`);
    return React.createElement(wp.components.Dropdown, {
      popoverProps: {
        placement: `bottom-start`
      },
      renderToggle: ({ isOpen: e3, onToggle: t3 }) => React.createElement(wp.components.ToolbarButton, {
        icon: r2(),
        label: i2(),
        onClick: n2,
        onContextMenu: (e4) => {
          e4.preventDefault(), t3();
        },
        "aria-expanded": e3
      }),
      renderContent: () => React.createElement(wp.components.MenuGroup, {
        label: wp.i18n.__(`Theme`, `windpress`)
      }, React.createElement(wp.components.MenuItem, {
        icon: React.createElement(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: `20`,
          height: `20`,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`
        }, React.createElement(`circle`, {
          cx: `12`,
          cy: `12`,
          r: `4`
        }), React.createElement(`path`, {
          d: `M12 2v2`
        }), React.createElement(`path`, {
          d: `M12 20v2`
        }), React.createElement(`path`, {
          d: `m4.93 4.93 1.41 1.41`
        }), React.createElement(`path`, {
          d: `m17.66 17.66 1.41 1.41`
        }), React.createElement(`path`, {
          d: `M2 12h2`
        }), React.createElement(`path`, {
          d: `M20 12h2`
        }), React.createElement(`path`, {
          d: `m6.34 17.66-1.41 1.41`
        }), React.createElement(`path`, {
          d: `m19.07 4.93-1.41 1.41`
        })),
        isSelected: e2 === `light`,
        onClick: () => t2(`light`)
      }, wp.i18n.__(`Light`, `windpress`)), React.createElement(wp.components.MenuItem, {
        icon: React.createElement(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: `20`,
          height: `20`,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`
        }, React.createElement(`path`, {
          d: `M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`
        })),
        isSelected: e2 === `dark`,
        onClick: () => t2(`dark`)
      }, wp.i18n.__(`Dark`, `windpress`)), React.createElement(wp.components.MenuItem, {
        icon: React.createElement(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: `20`,
          height: `20`,
          viewBox: `0 0 24 24`
        }, React.createElement(`g`, {
          fill: `none`,
          stroke: `currentColor`,
          "stroke-linecap": `round`,
          "stroke-linejoin": `round`,
          "stroke-width": `2`
        }, React.createElement(`path`, {
          d: `M12 17v4m10-8.693V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693M8 21h8`
        }), React.createElement(`circle`, {
          cx: `19`,
          cy: `6`,
          r: `3`
        }))),
        isSelected: e2 === `system`,
        onClick: () => t2(`system`)
      }, wp.i18n.__(`System`, `windpress`)))
    });
  }
  function J() {
    return null;
  }
  wp.plugins.registerPlugin(`windpress-html-import`, {
    render: J
  }), typeof window < `u` && wp.domReady(() => {
    let { render: e2, createElement: t2 } = wp.element, n2 = null, r2 = false, i2 = () => {
      let i3 = document.querySelector(`.edit-post-header-toolbar, .editor-document-tools__left`);
      i3 && (n2 || (n2 = document.createElement(`div`), n2.id = `windpress-toolbar-buttons`, n2.style.cssText = `display: inline-flex; align-items: center;`, i3.appendChild(n2)), r2 || (r2 = (e2(t2(`div`, {
        style: {
          display: `flex`
        }
      }, t2(K), t2(q)), n2), true)));
    };
    i2(), wp.data.subscribe(() => {
      i2();
    });
  });
  var Y = () => React.createElement(i, {
    width: 24,
    height: 24,
    "aria-hidden": `true`,
    focusable: `false`
  }), { editorScript: X, ...Z } = O;
  wp.blocks.registerBlockType(Z.name, {
    ...Z,
    icon: Y,
    edit: E,
    save: D
  });
})();
