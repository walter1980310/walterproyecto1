
import HomeBanner from "./HomeBanner";
import ProductCard from "../../components/ProductCard";

export default function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <HomeBanner />
      <h1>Página de inicio</h1>
      <ProductCard />
    </div>
  );
}
