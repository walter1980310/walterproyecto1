import ProductCard from "./ProductCard/ProductCard";
import "./ProductList.css";

export default function ProductList({ products = [] }) {
  return (
    <section className="product-list">
      <h2>Listado de productos</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
