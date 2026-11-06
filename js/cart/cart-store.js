import { CONFIG } from "../config.js";
import { PRODUCTS } from "../data/products.js";

const read = () => { try { return JSON.parse(localStorage.getItem(CONFIG.cartKey)) || []; } catch { return []; } };
const write = (items) => { try { localStorage.setItem(CONFIG.cartKey, JSON.stringify(items)); } catch {} document.dispatchEvent(new CustomEvent("cart:change")); };

export const getItems = () => read().map((l) => ({ ...l, product: PRODUCTS.find((p) => p.id === l.id) })).filter((l) => l.product);
export const count = () => read().reduce((n, l) => n + l.qty, 0);

export function add(id, qty = 1) {
  const items = read(); const line = items.find((l) => l.id === id);
  line ? (line.qty += qty) : items.push({ id, qty }); write(items);
}
export function setQty(id, qty) { write(qty <= 0 ? read().filter((l) => l.id !== id) : read().map((l) => (l.id === id ? { ...l, qty } : l))); }
export const remove = (id) => setQty(id, 0);
export const clear = () => write([]);

export function totals(discount = 0) {
  const sub = getItems().reduce((s, l) => s + l.product.price * l.qty, 0);
  const off = Math.round(sub * discount);
  const ship = sub === 0 || sub >= CONFIG.freeShippingFrom ? 0 : CONFIG.shipping;
  return { sub, off, ship, total: sub - off + ship };
}
