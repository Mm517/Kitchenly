"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Phone, Truck, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/cart";

const nav = [["الرئيسية", "/"], ["المنتجات", "/products"], ["من نحن", "/about"], ["آراء العملاء", "/#reviews"], ["تواصل معنا", "/contact"]];

function CartDrawer() {
  const { items, total, open, setOpen, setQty } = useCart();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-label="سلة التسوق">
      <button className="absolute inset-0 bg-black/40" aria-label="إغلاق" onClick={() => setOpen(false)} />
      <aside className="absolute inset-y-0 start-0 flex w-full max-w-sm flex-col bg-brand-cream shadow-soft">
        <div className="flex items-center justify-between border-b p-4"><h2 className="text-lg font-bold">سلة التسوق</h2><button onClick={() => setOpen(false)} aria-label="إغلاق"><X /></button></div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {items.length === 0 && <p>سلتك فارغة. أضف منتجاً لتبدأ الطلب.</p>}
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex items-center gap-3 rounded-2xl bg-white p-3">
              <Image src={product.image} alt={product.name} width={56} height={56} unoptimized className="rounded-xl" />
              <div className="flex-1 text-sm"><p className="font-bold">{product.name}</p><p>{product.price} جنيه</p></div>
              <div className="flex items-center gap-2">
                <button aria-label="زيادة" onClick={() => setQty(product.id, qty + 1)}><Plus size={16} /></button>
                <span>{qty}</span>
                <button aria-label="تقليل" onClick={() => setQty(product.id, qty - 1)}><Minus size={16} /></button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3 border-t p-4"><p className="flex justify-between font-bold"><span>الإجمالي</span><span>{total} جنيه</span></p>
          <Link href="/checkout" onClick={() => setOpen(false)} className="btn w-full bg-brand text-white">إتمام الشراء</Link></div>
      </aside>
    </div>
  );
}

export default function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="bg-brand text-xs text-white md:text-sm">
        <div className="container-k flex items-center justify-between py-2">
          <span className="flex items-center gap-2"><Truck size={16} />شحن سريع لجميع أنحاء مصر</span>
          <span className="hidden items-center gap-2 sm:flex"><Phone size={16} /><bdi dir="ltr">+20 10 1234 5678</bdi> · دعم يومياً 9 ص – 9 م</span>
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur">
        <div className="container-k flex items-center gap-4 py-3">
          <button className="md:hidden" aria-label="القائمة" onClick={() => setMenu(true)}><Menu /></button>
          <Link href="/" aria-label="Kitchenly"><Image src="/images/logo.png" alt="Kitchenly" width={120} height={60} className="h-12 w-auto object-contain" priority /></Link>
          <nav className="hidden gap-6 font-bold md:flex" aria-label="الرئيسية">
            {nav.map(([t, h]) => <Link key={h} href={h} className="hover:text-brand-light">{t}</Link>)}
          </nav>
          <form action="/products" className="ms-auto hidden flex-1 max-w-xs overflow-hidden rounded-full bg-white shadow-soft sm:flex">
            <input name="q" placeholder="ابحث عن منتج..." className="min-w-0 flex-1 bg-transparent px-4 py-2 outline-none" aria-label="بحث" />
            <button className="bg-brand-gold px-4 text-white" aria-label="بحث"><Search size={18} /></button>
          </form>
          <Link href="/account" aria-label="حسابي" className="ms-auto sm:ms-0"><User /></Link>
          <button onClick={() => setOpen(true)} className="relative" aria-label="السلة">
            <ShoppingCart />
            <span className="absolute -top-2 -end-2 grid h-5 w-5 place-items-center rounded-full bg-brand-light text-xs text-white">{count}</span>
          </button>
        </div>
      </header>
      {menu && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button className="absolute inset-0 bg-black/40" aria-label="إغلاق" onClick={() => setMenu(false)} />
          <nav className="absolute inset-y-0 start-0 w-64 space-y-4 bg-brand-cream p-6 text-lg font-bold">
            <button onClick={() => setMenu(false)} aria-label="إغلاق"><X /></button>
            {nav.map(([t, h]) => <Link key={h} href={h} onClick={() => setMenu(false)} className="block">{t}</Link>)}
          </nav>
        </div>
      )}
      <CartDrawer />
    </>
  );
}
