import HomeBanner from "./HomeBanner";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <section className="home">
      <HomeBanner />

      <div className="home-content">
        <h1>Bienvenido a WalterShop</h1>
        <p>
          Explorá nuestra selección de productos y encontrá lo que estás buscando.
        </p>

        <Link to="/productos" className="home-cta">
          Ver productos
        </Link>
      </div>
    </section>
  );
}
