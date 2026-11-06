import { renderLayout } from "../shared/layout.js";
import { initReveal } from "../shared/reveal.js";
import { PRODUCTS, CATEGORIES } from "../data/products.js";
import { cardHTML, bindAddButtons } from "../ui/product-card.js";
import { $, on } from "../utils/dom.js";

renderLayout("products.html");
const params = new URLSearchParams(location.search);
const state = { cat: params.get("cat") || "all", max: 500, sort: "def", q: (params.get("q") || "").trim() };
const grid = $("#grid");

$("#cat-list").innerHTML = CATEGORIES.map((c) => `<label><input type="radio" name="cat" value="${c.id}" ${c.id === state.cat ? "checked" : ""}> ${c.name}</label>`).join("");

function render() {
  let list = PRODUCTS.filter((p) => (state.cat === "all" || p.cat === state.cat) && p.price <= state.max && (!state.q || p.name.includes(state.q)));
  if (state.sort === "low") list.sort((a, b) => a.price - b.price);
  if (state.sort === "high") list.sort((a, b) => b.price - a.price);
  $("#count").textContent = `${list.length} منتج`;
  grid.innerHTML = list.length ? list.map(cardHTML).join("") : `<p class="empty" data-wide>مفيش منتجات مطابقة للبحث.</p>`;
  initReveal();
}
on($("#cat-list"), "change", (e) => { state.cat = e.target.value; render(); });
on($("#price"), "input", (e) => { state.max = +e.target.value; $("#price-val").textContent = state.max; render(); });
on($("#sort"), "change", (e) => { state.sort = e.target.value; render(); });
bindAddButtons(grid);
render();
