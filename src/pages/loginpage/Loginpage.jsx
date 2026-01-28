import "./LoginPage.css";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login en desarrollo. Demo visual únicamente.");
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          disabled
        />

        <input
          type="password"
          placeholder="Contraseña"
          disabled
        />

        <button type="submit" disabled>
          Ingresar
        </button>
      </form>

      <p className="login-info">
        Funcionalidad en desarrollo (demo visual).
      </p>
    </div>
  );
}
