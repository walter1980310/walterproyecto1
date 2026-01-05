import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <h2>Carrito de compras</h2>

      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>Cantidad: {item.qty}</p>
              <p>Precio: ${item.price}</p>
              <p>Subtotal: ${item.price * item.qty}</p>
            </div>

            <button onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <h3>Total: ${total}</h3>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  );
}
