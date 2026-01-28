import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (acc, p) => acc + p.qty,
    0
  );

  return (
    <nav className="navbar">
      <h2>Walter Shop</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/productos">Productos</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li className="cart-link">
          <Link to="/carrito">
            🛒
            {totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
