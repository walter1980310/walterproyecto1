import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard() {
  const [products, setProducts] = useState([]);

  // Traemos funciones del contexto
  const { addToCart } = useContext(CartContext);

  async function fetchBack() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchBack();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Productos</h2>

      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={{ marginBottom: "15px" }}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ProductCard;
