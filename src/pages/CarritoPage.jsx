import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CarritoPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Carrito</h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.qty}
              <button onClick={() => removeFromCart(item.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>
        Total:{" "}
        {cart.reduce((total, item) => total + item.price * item.qty, 0)}
      </h2>
    </div>
  );
}
