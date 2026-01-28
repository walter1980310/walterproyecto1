import { useCart } from "../../../context/CartContext";
import productoDefault from "../../../assets/images/Captura de pantalla (101).png";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const imageSrc =
    product.imagen && product.imagen.trim() !== ""
      ? product.imagen
      : productoDefault;

  return (
    <div className="product-card">
      <img
        src={imageSrc}
        alt={product.nombre}
        onError={(e) => {
          e.target.src = productoDefault;
        }}
      />

      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p className="precio">${product.precio}</p>

      <button onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}
