import { createContext, useContext, useReducer } from "react";
const CartContext = createContext(null);
function reducer(items, a) {
  switch (a.type) {
    case "add": return items.some(i => i.id === a.item.id)
      ? items.map(i => i.id === a.item.id ? { ...i, qty: i.qty + (a.qty || 1) } : i)
      : [...items, { ...a.item, qty: a.qty || 1 }];
    case "setQty": return items.map(i => i.id === a.id ? { ...i, qty: Math.max(1, a.qty) } : i);
    case "remove": return items.filter(i => i.id !== a.id);
    case "clear": return [];
    default: return items;
  }
}
export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
  return <CartContext.Provider value={{ items, count, subtotal, dispatch }}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
