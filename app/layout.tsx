import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Kitchenly | أدوات ومستلزمات المطبخ والتنظيف في مصر", template: "%s | Kitchenly" },
  description: "Smart Tools. Better Kitchen. أدوات تنظيف وتنظيم ذكية لمطبخ أنظف وحياة أسهل، شحن سريع لجميع أنحاء مصر.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
