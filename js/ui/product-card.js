import { money, stars, esc } from "../utils/format.js";
import * as cart from "../cart/cart-store.js";
import { toast } from "./toast.js";
import { delegate } from "../utils/dom.js";

export const cardHTML = (p) => `
<article class="card pcard reveal">
  ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
  <a class="pcard-img" href="product.html?id=${p.id}">${p.img ? `<img src="assets/img/${p.img}" alt="${esc(p.name)}">` : p.icon}</a>
  <div class="pcard-body">
    <a class="pcard-title" href="product.html?id=${p.id}">${esc(p.name)}</a>
    <span class="stars">${stars(p.rating)} <small>${p.rating}</small></span>
    <div class="pcard-foot"><span class="price">${money(p.price)}${p.old ? `<del>${money(p.old)}</del>` : ""}</span>
    <button class="add-btn" data-add="${p.id}" aria-label="أضف للسلة">+</button></div>
  </div>
</article>`;

export function bindAddButtons(root) {
  delegate(root, "click", "[data-add]", (e, btn) => { cart.add(+btn.dataset.add); toast("تمت الإضافة للسلة ✅"); });
}
