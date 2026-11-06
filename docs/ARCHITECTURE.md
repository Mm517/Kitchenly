# Architecture
- `css/` : tokens → base → layout → components → animations → pages/* → responsive (ترتيب التحميل).
- `js/data/` : بيانات المنتجات. `js/cart/` : حالة السلة وواجهتها. `js/shared/` : هيدر/فوتر/reveal. `js/ui/` : كارت المنتج والتوست. `js/pages/` : موديول لكل صفحة. `js/utils/` : أدوات صغيرة.
- كل صفحة بتحمّل الـ CSS المشترك + CSS الصفحة + موديول الصفحة بس.
- للربط مع Supabase لاحقاً: استبدل `js/data/products.js` و`cart-store.js` بطبقة `js/api/`.
