"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Product } from "./data";

type Item = { product: Product; qty: number };
type Ctx = { items: Item[]; count: number; total: number; open: boolean; setOpen: (v: boolean) => void; add: (p: Product) => void; setQty: (id: string, q: number) => void };
const CartCtx = createContext<Ctx | null>(null);
const KEY = "kitchenly-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { setItems(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {} }, [items, ready]);
  const add = useCallback((product: Product) => {
    setItems((cur) => cur.some((i) => i.product.id === product.id)
      ? cur.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      : [...cur, { product, qty: 1 }]);
    setOpen(true);
  }, []);
  const setQty = useCallback((id: string, q: number) => setItems((cur) => q <= 0 ? cur.filter((i) => i.product.id !== id) : cur.map((i) => i.product.id === id ? { ...i, qty: q } : i)), []);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.product.price, 0);
  return <CartCtx.Provider value={{ items, count, total, open, setOpen, add, setQty }}>{children}</CartCtx.Provider>;
}
export const useCart = () => { const c = useContext(CartCtx); if (!c) throw new Error("CartProvider missing"); return c; };
