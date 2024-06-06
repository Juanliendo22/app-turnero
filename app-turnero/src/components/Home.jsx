import React from "react";
import Cancha from "./Cancha";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="contenidoHome">
        <h2>Bienvenido a la página de inicio</h2>
        <p>Has iniciado sesión correctamente.</p>
        <div className="ContenedorCanchas">
          <Cancha
            imagenSrc="/cancha.png"
            titulo="Cancha del cruce"
            descripcion="tamaño de la cancha: Futbol 9"
          />
          <Cancha
            imagenSrc="/cancha.png"
            titulo="Cancha del cruce"
            descripcion="tamaño de la cancha: Futbol 7"
          />
          <Cancha
            imagenSrc="/cancha.png"
            titulo="Cancha del cruce"
            descripcion="tamaño de la cancha: Futbol 5"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
