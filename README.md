# KITCHENLY — متجر أدوات المطبخ

متجر HTML/CSS/JS عربي (RTL) بدون أي مكتبات. السلة بتتحفظ في المتصفح (localStorage).

## التشغيل
الموقع بيستخدم ES Modules، فلازم سيرفر محلي (مش دبل كليك):
```
npx serve .        # أو: python3 -m http.server 8000
```
وللنشر: ارفع المجلد على Vercel أو GitHub Pages.

## الصفحات
`index.html` الرئيسية · `products.html` المنتجات (فلترة وترتيب) · `product.html?id=1` تفاصيل المنتج · `cart.html` السلة والكوبون (`KITCHEN10`).

## تعديل المحتوى
- المنتجات والتصنيفات: `js/data/products.js` (ضيف صورة في `assets/img/` وحط اسمها في `img`).
- الألوان والخطوط: `css/tokens.css`.
- الهيدر والفوتر: `js/shared/layout.js`.
- الإعدادات (الشحن، الرقم، العملة): `js/config.js`.
