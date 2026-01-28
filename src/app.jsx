import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProductosPage from "./pages/ProductosPage/ProductosPage";
import CarritoPage from "./pages/CarritoPage/CarritoPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
