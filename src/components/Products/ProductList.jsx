import ProductCard from "./ProductCard";
import "./ProductList.css";

export default function ProductList({ products = [], limit = 6 }) {
  const visibleProducts = products.slice(0, limit);

  return (
    <section className="product-list">
      <h2>Listado de productos</h2>

      <div className="product-grid">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
