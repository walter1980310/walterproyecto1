import { useEffect, useState } from "react";
import ProductList from "../../components/Products/ProductList";
import "./ProductosPage.css";

export default function ProductosPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      setProducts(data);

      // obtener categorías únicas
      const uniqueCategories = [
        "all",
        ...new Set(data.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);

      setLoading(false);
    }

    fetchData();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  if (loading) return <p>Cargando productos...</p>;

  return (
    <section className="productos-page">
      <h1>Productos</h1>

      {/* Filtro */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ProductList products={filteredProducts} limit={filteredProducts.length} />
    </section>
  );
}
