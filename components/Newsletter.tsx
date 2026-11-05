"use client";
import { useState } from "react";
export default function Newsletter() {
  const [email, setEmail] = useState(""); const [msg, setMsg] = useState("");
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setMsg("أدخل بريداً إلكترونياً صحيحاً، مثل name@example.com");
    setMsg("تم الاشتراك بنجاح"); setEmail(""); // TODO: حفظ في Supabase
  }
  return (
    <section className="bg-brand py-12 text-center text-white">
      <div className="container-k">
        <h2 className="text-2xl font-bold">اشترك في نشرتنا البريدية</h2>
        <p className="mt-2 opacity-80">احصل على أحدث العروض والمنتجات الجديدة أولاً.</p>
        <form onSubmit={submit} noValidate className="mx-auto mt-6 flex max-w-md overflow-hidden rounded-full bg-white p-1">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ادخل بريدك الإلكتروني" aria-label="البريد الإلكتروني" className="min-w-0 flex-1 bg-transparent px-4 text-brand outline-none" />
          <button className="btn bg-brand-light text-white">اشترك</button>
        </form>
        <p role="status" className="mt-3 text-sm">{msg}</p>
      </div>
    </section>
  );
}
