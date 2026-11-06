import { renderLayout } from "../shared/layout.js";
import { lineHTML, bindLineActions } from "../cart/cart-ui.js";
import * as cart from "../cart/cart-store.js";
import { money } from "../utils/format.js";
import { toast } from "../ui/toast.js";
import { $, on } from "../utils/dom.js";

renderLayout("");
const CODES = { KITCHEN10: 0.1 };
let discount = 0;
const list = $("#lines");

function render() {
  const items = cart.getItems();
  list.innerHTML = items.length ? items.map(lineHTML).join("") : `<p class="empty">السلة فاضية. <a class="btn" href="products.html">تسوق الآن</a></p>`;
  const t = cart.totals(discount);
  $("#sub").textContent = money(t.sub);
  $("#off").textContent = "− " + money(t.off);
  $("#ship").textContent = t.ship ? money(t.ship) : "مجاني";
  $("#total").textContent = money(t.total);
}
bindLineActions(list);
on(document, "cart:change", render);
on($("#apply"), "click", () => {
  const c = CODES[$("#code").value.trim().toUpperCase()];
  discount = c || 0;
  toast(c ? "تم تطبيق الخصم 🎉" : "كود غير صحيح");
  render();
});
on($("#checkout"), "click", () => {
  if (!cart.count()) return toast("السلة فاضية");
  cart.clear(); toast("تم استلام طلبك، هنتواصل معاك قريباً 💚");
});
render();
