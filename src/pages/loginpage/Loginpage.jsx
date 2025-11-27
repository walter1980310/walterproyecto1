
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();


    if (email === "" || password === "") {
      alert("Completa los campos");
      return;
    }

    
    localStorage.setItem("user", JSON.stringify({ email }));

    alert("Login exitoso");
    navigate("/");
  }

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>

      <p>
        ¿No tenés cuenta?{" "}
        <span className="register-link" onClick={() => navigate("/register")}>
          Registrate aquí
        </span>
      </p>
    </div>
  );
}
