// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">MiProyecto</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Acerca de</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
