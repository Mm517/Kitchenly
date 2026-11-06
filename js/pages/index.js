import { renderLayout } from "../shared/layout.js";
import { initReveal } from "../shared/reveal.js";
import { PRODUCTS, CATEGORIES } from "../data/products.js";
import { cardHTML, bindAddButtons } from "../ui/product-card.js";
import { $ } from "../utils/dom.js";
import { toast } from "../ui/toast.js";

renderLayout("index.html");
$("#cats").innerHTML = CATEGORIES.map((c) => `<a class="cat reveal" href="products.html?cat=${c.id}"><i>${c.icon}</i>${c.name}</a>`).join("");
$("#best").innerHTML = PRODUCTS.slice(0, 4).map(cardHTML).join("");
bindAddButtons($("#best"));
$("#news").addEventListener("submit", (e) => { e.preventDefault(); e.target.reset(); toast("تم الاشتراك بنجاح 💚"); });
initReveal();
