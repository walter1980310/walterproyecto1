import { useState } from "react";
import productsData from "../../data/products";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import "./ProductosPage.css";

export default function ProductosPage() {
  const [categoria, setCategoria] = useState("todos");

  const productosFiltrados =
    categoria === "todos"
      ? productsData
      : productsData.filter(
          (p) => p.categoria === categoria
        );

  return (
    <section style={{ padding: "30px" }}>
      <h1>Productos</h1>

      {/* FILTROS */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCategoria("todos")}>
          Todos
        </button>
        <button onClick={() => setCategoria("electronica")}>
          Electrónica
        </button>
        <button onClick={() => setCategoria("ropa")}>
          Ropa
        </button>
        <button onClick={() => setCategoria("accesorios")}>
          Accesorios
        </button>
      </div>

      {/* LISTADO */}
      <div className="products-grid">
        {productosFiltrados.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
