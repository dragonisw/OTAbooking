import { n as e, t } from "./base64-DYxoxXqt.js";
function n(e2) {
  try {
    return JSON.parse(new TextDecoder().decode(t(e2)));
  } catch {
    return console.warn(`Failed to decode VFS container. Falling back to polyfill.`), JSON.parse(atob(e2));
  }
}
function r(t2) {
  try {
    return e(new TextEncoder().encode(JSON.stringify(t2)));
  } catch {
    return console.warn(`Failed to encode VFS container. Falling back to polyfill.`), btoa(JSON.stringify(t2));
  }
}
export {
  r as n,
  n as t
};
