import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ProductosPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Productos</h1>

      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "120px", height: "120px", objectFit: "contain" }}
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>

              <button
                onClick={() => addToCart(product)}
                style={{
                  padding: "8px 12px",
                  marginTop: "10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  border: "none",
                  background: "#222",
                  color: "white"
                }}
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
