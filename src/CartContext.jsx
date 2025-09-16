import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// 2. On fait un "Provider" qui va contenir l'état global
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  // On donne à tout le monde accès à "cart", "addToCart" et "clearCart"
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
