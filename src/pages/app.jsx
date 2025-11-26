
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductosPage from "./pages/ProductosPage/ProductosPage";
import CarritoPage from "./pages/CarritoPage/CarritoPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage/LoginPage"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/carrito" element={<CarritoPage />} />

        <Route path="/login" element={<LoginPage />} /> 

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
