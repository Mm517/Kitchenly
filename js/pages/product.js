import { renderLayout } from "../shared/layout.js";
import { PRODUCTS } from "../data/products.js";
import { money, stars, esc } from "../utils/format.js";
import * as cart from "../cart/cart-store.js";
import { toast } from "../ui/toast.js";
import { $, on } from "../utils/dom.js";

renderLayout("products.html");
const p = PRODUCTS.find((x) => x.id === +new URLSearchParams(location.search).get("id"));
const root = $("#detail");
if (!p) {
  root.innerHTML = `<p class="empty">المنتج غير موجود. <a class="btn" href="products.html">العودة للمنتجات</a></p>`;
} else {
  document.title = `${p.name} | KITCHENLY`;
  root.innerHTML = `
  <div class="detail-img float">${p.icon}</div>
  <div>
    <h1>${esc(p.name)}</h1>
    <span class="stars">${stars(p.rating)} ${p.rating}</span>
    <div class="price">${money(p.price)}${p.old ? `<del>${money(p.old)}</del>` : ""}</div>
    <p>${esc(p.desc)}</p>
    <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
    <div class="buy">
      <div class="qty"><button id="inc">+</button><span id="q">1</span><button id="dec">−</button></div>
      <button class="btn" id="add">🛒 أضف إلى السلة</button>
    </div>
  </div>`;
  let q = 1;
  const show = () => ($("#q").textContent = q);
  on($("#inc"), "click", () => { q++; show(); });
  on($("#dec"), "click", () => { q = Math.max(1, q - 1); show(); });
  on($("#add"), "click", () => { cart.add(p.id, q); toast("تمت الإضافة للسلة ✅"); });
}
