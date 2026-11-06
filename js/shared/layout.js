import { CONFIG } from "../config.js";
import { $ } from "../utils/dom.js";
import { initDrawer } from "../cart/cart-ui.js";

const LOGO = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M6 24 24 7l18 17v18H6z" fill="#e3efd9" stroke="#1f5a2a" stroke-width="4" stroke-linejoin="round"/><path d="M24 20l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#1f5a2a"/></svg>`;
const NAV = [["index.html", "الرئيسية"], ["products.html", "المنتجات"], ["index.html#why", "لماذا نحن"], ["index.html#reviews", "آراء العملاء"], ["index.html#contact", "تواصل معنا"]];

export function renderLayout(active = "") {
  $("#site-header").innerHTML = `
  <div class="topbar"><div class="container"><span>🚚 شحن سريع لجميع أنحاء مصر</span><span>📞 ${CONFIG.phone} | يومياً 9 ص – 9 م</span></div></div>
  <header class="header"><div class="container">
    <a class="logo" href="index.html">${LOGO}<span>${CONFIG.brand}<small>${CONFIG.tagline}</small></span></a>
    <nav class="nav">${NAV.map(([h, t]) => `<a href="${h}" class="${h === active ? "active" : ""}">${t}</a>`).join("")}</nav>
    <form class="search" action="products.html"><input name="q" placeholder="ابحث عن منتجك المفضل..." aria-label="بحث"><button aria-label="بحث">🔍</button></form>
    <button class="cart-btn" aria-label="السلة">🛒<span class="cart-count">0</span></button>
  </div></header>
  <div class="drawer-overlay"></div>
  <aside class="drawer" aria-label="سلة التسوق">
    <div class="drawer-head"><span>سلة التسوق</span><button id="drawer-close" aria-label="إغلاق">✕</button></div>
    <div class="drawer-body" id="drawer-body"></div>
    <div class="drawer-foot"><div class="row-between"><span>الإجمالي</span><strong id="drawer-total"></strong></div><a class="btn btn-block" href="cart.html">إتمام الطلب</a></div>
  </aside>`;
  $("#site-footer").innerHTML = `
  <footer class="footer" id="contact"><div class="container">
    <div><a class="logo" href="index.html">${LOGO}<span>${CONFIG.brand}</span></a><p>${CONFIG.tagline}<br>واتساب: ${CONFIG.phone}</p></div>
    <div><h4>روابط سريعة</h4><a href="index.html">الرئيسية</a><a href="products.html">المنتجات</a><a href="cart.html">السلة</a></div>
    <div><h4>خدماتنا</h4><a href="#">الشحن والتوصيل</a><a href="#">سياسة الاسترجاع</a><a href="#">الأسئلة الشائعة</a></div>
  </div><p class="copy">© 2026 ${CONFIG.brand}. جميع الحقوق محفوظة.</p></footer>`;
  initDrawer();
}
