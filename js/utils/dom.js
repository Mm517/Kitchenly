export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
export const delegate = (root, ev, sel, fn) =>
  on(root, ev, (e) => { const t = e.target.closest(sel); if (t && root.contains(t)) fn(e, t); });
