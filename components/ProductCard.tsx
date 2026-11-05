"use client";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/data";

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  const [fav, setFav] = useState(false);
  return (
    <article className="flex flex-col rounded-card bg-white p-3 shadow-soft transition hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-2xl">
        <Image src={p.image} alt={p.name} width={400} height={300} unoptimized loading="lazy" className="aspect-[4/3] w-full object-cover" />
        {p.badge && <span className="absolute start-2 top-2 rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-white">{p.badge}</span>}
        <button onClick={() => setFav(!fav)} aria-pressed={fav} aria-label="إضافة للمفضلة" className="absolute end-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-white">
          <Heart size={18} className={fav ? "fill-red-500 text-red-500" : ""} />
        </button>
      </div>
      <h3 className="mt-3 font-bold">{p.name}</h3>
      <p className="text-sm opacity-70">{p.desc}</p>
      <p className="mt-1 flex items-center gap-1 text-sm"><Star size={14} className="fill-brand-gold text-brand-gold" />{p.rating} <span className="opacity-60">({p.reviews})</span></p>
      <p className="mt-1 font-extrabold">{p.price} جنيه {p.oldPrice && <s className="text-sm font-normal opacity-50">{p.oldPrice}</s>}</p>
      <button onClick={() => add(p)} className="btn mt-3 bg-brand text-white">أضف للسلة</button>
    </article>
  );
}
