import { CONFIG } from "../config.js";
export const money = (n) => `${n.toLocaleString("ar-EG")} ${CONFIG.currency}`;
export const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
