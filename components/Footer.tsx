import Image from "next/image";
import Link from "next/link";
const col = (t: string, l: [string, string][]) => (
  <div><h3 className="mb-3 font-bold">{t}</h3><ul className="space-y-2 text-sm opacity-80">{l.map(([n, h]) => <li key={h}><Link href={h}>{n}</Link></li>)}</ul></div>
);
export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-k grid gap-8 py-10 md:grid-cols-4">
        <div><Image src="/images/logo.png" alt="Kitchenly" width={120} height={60} className="h-14 w-auto rounded-xl bg-brand-cream p-1" /><p className="mt-3 text-sm opacity-80">Smart Tools. Better Kitchen.</p></div>
        {col("روابط سريعة", [["الرئيسية", "/"], ["المنتجات", "/products"], ["من نحن", "/about"], ["تواصل معنا", "/contact"]])}
        {col("معلومات", [["سياسة الخصوصية", "/privacy"], ["سياسة الإرجاع", "/returns"], ["الأسئلة الشائعة", "/contact"]])}
        <div><h3 className="mb-3 font-bold">تابعنا</h3><p className="text-sm opacity-80">فيسبوك · إنستجرام · تيك توك · يوتيوب</p></div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} Kitchenly. جميع الحقوق محفوظة.</p>
    </footer>
  );
}
