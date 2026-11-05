import Image from "next/image";
import Link from "next/link";
import { Truck, ShieldCheck, RotateCcw, Headphones, Gem, Leaf, Star } from "lucide-react";
import { categories, bestSellers, testimonials } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";

const perks = [[Truck, "شحن سريع"], [ShieldCheck, "دفع آمن"], [RotateCcw, "إرجاع سهل"], [Headphones, "دعم مميز"]] as const;
const why = [[Gem, "جودة عالية", "منتجات مضمونة"], [Truck, "توصيل سريع", "لجميع أنحاء مصر"], [ShieldCheck, "دفع آمن", "عند الاستلام أو أونلاين"], [Leaf, "تصاميم عصرية", "تناسب مطبخك"]] as const;

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-light/10 to-brand-cream">
        <div className="container-k grid items-center gap-8 py-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">لمطبخ أنظف .. وحياة أسهل</h1>
            <p className="mt-4 text-lg opacity-80">أدوات تنظيف وتنظيم مبتكرة للمطبخ</p>
            <Link href="/products" className="btn mt-6 bg-brand px-8 text-white">تسوق الآن</Link>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {perks.map(([Icon, t]) => <li key={t} className="flex flex-col items-center gap-2 text-sm font-bold"><span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft"><Icon size={22} /></span>{t}</li>)}
            </ul>
          </div>
          <Image src="/images/placeholder.svg" alt="منتجات Kitchenly للمطبخ" width={640} height={480} unoptimized priority className="w-full rounded-[28px] shadow-soft" />
        </div>
      </section>

      <section className="container-k py-10">
        <h2 className="mb-6 text-center text-2xl font-bold">تسوق حسب الفئة</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((c) => (
            <Link key={c.slug} href={`/products?category=${c.slug}`} className="flex items-center gap-3 rounded-card bg-white p-3 shadow-soft transition hover:-translate-y-1">
              <Image src={c.image} alt={c.name} width={64} height={64} unoptimized className="h-16 w-16 rounded-xl object-cover" />
              <span className="font-bold">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-k py-10">
        <h2 className="mb-6 text-2xl font-bold">الأكثر مبيعاً</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col justify-center rounded-card bg-brand p-6 text-white sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold">عرض خاص لأول طلب</h3>
            <Link href="/products" className="btn mt-4 bg-brand-sale text-brand">اطلب الآن</Link>
          </div>
          {bestSellers.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="container-k grid gap-4 py-6 md:grid-cols-2">
        <div className="rounded-card bg-brand p-8 text-white"><h2 className="text-2xl font-bold">تخفيضات خاصة</h2><p className="mt-2 opacity-80">على منتجات مختارة لفترة محدودة</p><Link href="/products?sale=1" className="btn mt-4 bg-white text-brand">تسوق الآن</Link></div>
        <div className="rounded-card bg-[#EFE8D4] p-8"><h2 className="text-2xl font-bold">مجموعة تنظيم المطبخ</h2><p className="mt-2 opacity-80">كل ما تحتاجه لمطبخ أكثر نظافة وتنظيماً</p><Link href="/products?category=organizers" className="btn mt-4 bg-brand text-white">اكتشف المجموعة</Link></div>
      </section>

      <section className="container-k py-10">
        <h2 className="mb-6 text-center text-2xl font-bold">لماذا تختار Kitchenly؟</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {why.map(([Icon, t, s]) => <div key={t} className="rounded-card bg-white p-5 text-center shadow-soft"><Icon className="mx-auto mb-2 text-brand-light" /><h3 className="font-bold">{t}</h3><p className="text-sm opacity-70">{s}</p></div>)}
        </div>
      </section>

      <section id="reviews" className="container-k py-10">
        <h2 className="mb-6 text-center text-2xl font-bold">آراء عملائنا</h2>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="min-w-[80%] snap-center rounded-card bg-white p-5 text-center shadow-soft md:min-w-[32%]">
              <div className="mx-auto mb-2 h-14 w-14 rounded-full bg-brand-light/30" />
              <blockquote className="text-sm">{t.text}</blockquote>
              <figcaption className="mt-3 font-bold">{t.name}</figcaption>
              <div className="mt-1 flex justify-center">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />)}</div>
            </figure>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
