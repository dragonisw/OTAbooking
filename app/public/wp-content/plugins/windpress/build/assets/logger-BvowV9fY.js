function e() {
  let e2 = Array.from(arguments), t = { type: `log`, module: null };
  if (e2.length > 1 && typeof e2[e2.length - 1] == `object`) {
    let n = e2.pop();
    n.hasOwnProperty(`type`) || n.hasOwnProperty(`module`) ? t = { ...t, ...n } : e2.push(n);
  }
  e2.unshift(`%cWindPress \u26A1 ${t.module ? `[` + t.module + `]` : ``}`, `background: #5a5a5a; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`), console[t.type](...e2);
}
export {
  e as t
};
