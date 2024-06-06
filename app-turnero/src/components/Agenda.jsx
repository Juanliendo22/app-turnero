import React, { useState } from "react";
import "./agenda.css";

const Agenda = ({ cancelarAgenda }) => {
  // Estados para controlar la fecha y hora seleccionadas
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  // Funciones para manejar cambios en la fecha y la hora
  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
  };

  // Función para manejar la solicitud de reserva
  const reservarTurno = () => {
    // Aquí puedes implementar la lógica para enviar la solicitud de reserva al servidor
    // Por ejemplo, puedes realizar una solicitud HTTP POST
    alert(`Se ha reservado un turno para el ${fecha} a las ${hora}`);
  };

  return (
    <div className="agenda-container">
      <h2>Agendar un turno</h2>
      <form className="agenda-form">
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={handleFechaChange}
        />
        <label htmlFor="hora">Hora:</label>
        <input type="time" id="hora" value={hora} onChange={handleHoraChange} />
        <button type="button" onClick={reservarTurno}>
          Reservar turno
        </button>
        <button type="button" onClick={cancelarAgenda}>
          Cancelar
        </button>{" "}
        {/* Botón para cancelar */}
      </form>
    </div>
  );
};

export default Agenda;
