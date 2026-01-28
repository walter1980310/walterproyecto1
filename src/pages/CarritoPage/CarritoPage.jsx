import { useCart } from "../../context/CartContext";
import "./CarritoPage.css";

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.precio,
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
          <div key={item._id} className="cart-card">
            <img src={item.imagen} alt={item.nombre} />

            <div className="cart-info">
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${total}</h2>
        <button className="clear-btn" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </section>
  );
}
