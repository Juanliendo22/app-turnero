import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; // Importar el Navbar

function App() {
  const [userHasAccount, setUserHasAccount] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Nuevo estado para autenticación

  const handleToggleForm = () => {
    setUserHasAccount(!userHasAccount);
  };

  const handleSwitchToLogin = () => {
    setUserHasAccount(true); // Cambiar al componente de inicio de sesión
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Establecer autenticación a true después de un inicio de sesión exitoso
  };

  return (
    <div>
      <Navbar /> {/* Añadir el Navbar aquí */}
      {isAuthenticated ? (
        <Home /> // Renderizar Home si está autenticado
      ) : userHasAccount ? (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onSwitchToRegister={handleToggleForm}
        />
      ) : (
        <div>
          <Register onSwitchToLogin={handleSwitchToLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
