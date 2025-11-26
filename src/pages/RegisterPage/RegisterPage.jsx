import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Datos del registro:", form);
    alert("Registro enviado (simulado)");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Registro</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
