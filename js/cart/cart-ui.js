import { $, delegate, on } from "../utils/dom.js";
import { money, esc } from "../utils/format.js";
import * as cart from "./cart-store.js";

export function lineHTML(l) {
  const p = l.product;
  return `<div class="line" data-id="${p.id}">
    <div class="line-ico">${p.icon}</div>
    <div><strong>${esc(p.name)}</strong><div class="price">${money(p.price)}</div><button class="line-rm" data-act="rm">حذف</button></div>
    <div class="qty"><button data-act="inc" aria-label="زيادة">+</button><span>${l.qty}</span><button data-act="dec" aria-label="نقص">−</button></div>
  </div>`;
}

export function bindLineActions(root) {
  delegate(root, "click", "[data-act]", (e, btn) => {
    const id = +btn.closest(".line").dataset.id;
    const line = cart.getItems().find((l) => l.id === id);
    const act = btn.dataset.act;
    if (act === "inc") cart.setQty(id, line.qty + 1);
    if (act === "dec") cart.setQty(id, line.qty - 1);
    if (act === "rm") cart.remove(id);
  });
}

export function initDrawer() {
  const body = $("#drawer-body"), foot = $("#drawer-total"), badge = $(".cart-count");
  const render = () => {
    const items = cart.getItems();
    badge.textContent = cart.count();
    body.innerHTML = items.length ? items.map(lineHTML).join("") : `<p class="empty">السلة فاضية، ابدأ التسوق 🛒</p>`;
    foot.textContent = money(cart.totals().total);
  };
  const toggle = (open) => document.body.classList.toggle("drawer-open", open);
  bindLineActions(body);
  on($(".cart-btn"), "click", () => toggle(true));
  on($(".drawer-overlay"), "click", () => toggle(false));
  on($("#drawer-close"), "click", () => toggle(false));
  on(document, "keydown", (e) => e.key === "Escape" && toggle(false));
  on(document, "cart:change", render);
  render();
}
