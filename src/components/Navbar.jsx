import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">WalterShop 🛒</h2>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
}