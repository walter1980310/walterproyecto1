import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CarritoPage.css";

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <h1>Carrito</h1>
        <p>El carrito está vacío.</p>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Carrito</h1>

      <div className="cart-grid">
        {cart.map((item) => (
          <div key={item.id} className="cart-card">
            <img src={item.image} alt={item.title} />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.qty}</p>
              <p>
                Subtotal: ${(item.price * item.qty).toFixed(2)}
              </p>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button className="clear-btn" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </section>
  );
}
