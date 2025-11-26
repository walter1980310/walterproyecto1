import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // login MUY básico (sin backend)
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No existe un usuario registrado. Debes crear una cuenta.");
      return;
    }

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Inicio de sesión exitoso");
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Iniciar Sesión</h1>

      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", width: "250px", gap: "10px" }}
      >
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Ingresar</button>
      </form>

      <p style={{ marginTop: "10px" }}>
        ¿No tenés cuenta? <a href="/register">Crear cuenta</a>
      </p>
    </div>
  );
}
