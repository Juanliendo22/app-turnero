import React, { useState } from "react";
import "./Login.css";

const Login = ({ onSwitchToRegister, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email === "usuario@example.com" && password === "123456") {
      console.log("Inicio de sesión exitoso");
      setErrorMessage("");
      onLoginSuccess();
    } else {
      setErrorMessage(
        "Credenciales incorrectas. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
      <p className="noTenesCuenta">
        ¿No tienes una cuenta?{" "}
        <button className="btn" onClick={onSwitchToRegister}>
          Registrarse
        </button>
      </p>
    </div>
  );
};

export default Login;
