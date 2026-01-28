import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1️⃣ Cargar carrito desde localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // 2️⃣ Guardar carrito cada vez que cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existe = prev.find((p) => p._id === product._id);

      if (existe) {
        return prev.map((p) =>
          p._id === product._id
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p._id !== id));
  };

  // ✅ FUNCIÓN QUE FALTABA
  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (acc, p) => acc + p.precio * p.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart, // ✅ exportada
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
