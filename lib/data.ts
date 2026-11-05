export type Product = { id: string; slug: string; name: string; desc: string; price: number; oldPrice?: number; rating: number; reviews: number; image: string; badge?: string; category: string };
export const categories = [
  { slug: "smart-cleaning", name: "أدوات تنظيف ذكية", image: "/images/placeholder.svg" },
  { slug: "sponges", name: "إسفنج", image: "/images/placeholder.svg" },
  { slug: "organizers", name: "منظمات المطبخ", image: "/images/placeholder.svg" },
  { slug: "brushes", name: "فرش تنظيف", image: "/images/placeholder.svg" },
  { slug: "microfiber", name: "فوط مايكروفايبر", image: "/images/placeholder.svg" },
];
const p = (id: string, name: string, desc: string, price: number, oldPrice: number | undefined, rating: number, reviews: number, category: string, badge?: string): Product =>
  ({ id, slug: id, name, desc, price, oldPrice, rating, reviews, category, badge, image: "/images/placeholder.svg" });
// بيانات تجريبية مؤقتة (8 من 24) — ستُنقل إلى Supabase seed
export const bestSellers: Product[] = [
  p("p1", "فرشاة تنظيف كهربائية", "تنظيف أسرع بأقل مجهود", 449, 640, 4.8, 84, "smart-cleaning", "خصم 30%"),
  p("p2", "فوط مايكروفايبر عالية الجودة", "تنظيف ولمعان بدون خدوش", 149, 186, 4.9, 60, "microfiber", "خصم 20%"),
  p("p3", "منظم الحوض الذكي", "للسائل والإسفنجة", 199, 265, 4.7, 76, "organizers", "خصم 25%"),
  p("p4", "طقم فرش تنظيف", "تنظيف مبتكر للزوايا", 179, 211, 4.6, 52, "brushes", "خصم 15%"),
];
export const testimonials = [
  { name: "مريم أحمد", text: "منتجات جميلة وعملية جداً، والتوصيل كان سريع. أنصح بها!" },
  { name: "أحمد محمد", text: "الفرشاة الكهربائية غيرت طريقة تنظيف المطبخ، جودة ممتازة." },
  { name: "سارة علي", text: "التنظيم في المطبخ بقى أسهل، منتجات بجودة عالية وخدمة رائعة." },
];
