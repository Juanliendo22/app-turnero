import React, { useState } from "react";
import "./cancha.css";
import Agenda from "./Agenda"; // Importa el componente Agenda

const Cancha = ({ titulo, descripcion }) => {
  // Estado para controlar la visibilidad del componente Agenda
  const [mostrarAgenda, setMostrarAgenda] = useState(false);

  // Función para mostrar la Agenda
  const mostrarAgendaHandler = () => {
    setMostrarAgenda(true);
  };

  // Función para ocultar la Agenda
  const ocultarAgendaHandler = () => {
    setMostrarAgenda(false);
  };

  return (
    <div className="cancha-card">
      <img src="/cancha.png" alt="Cancha" className="cancha-img" />
      <div className="cancha-info">
        <h2 className="cancha-title">{titulo}</h2>
        <p className="cancha-description">{descripcion}</p>
        {/* Utiliza un operador ternario para renderizar el botón */}
        {mostrarAgenda ? (
          <Agenda cancelarAgenda={ocultarAgendaHandler} /> // Renderiza el componente Agenda si mostrarAgenda es true
        ) : (
          <button className="btn" onClick={mostrarAgendaHandler}>
            Alquilar un turno!
          </button>
        )}
      </div>
    </div>
  );
};

export default Cancha;
