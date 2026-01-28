import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import productoDefault from "../../assets/images/Captura de pantalla (101).png";

export default function ProductoDetallePage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, [id]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <section style={{ padding: "40px" }}>
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        <img
          src={product.imagen || productoDefault}
          alt={product.nombre}
          style={{
            width: "300px",
            borderRadius: "8px",
          }}
        />

        <div>
          <h1>{product.nombre}</h1>
          <p>{product.descripcion}</p>
          <h2>${product.precio}</h2>

          <button
            onClick={() => addToCart(product)}
            style={{
              padding: "10px 16px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}
