import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.css";

const CalendarComponent = ({ onSaveReservation }) => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const unavailableDates = [
    new Date(2024, 5, 10),
    new Date(2024, 5, 15),
    new Date(2024, 5, 20),
  ];

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    const reservation = {
      date,
      name,
      email,
    };
    onSaveReservation(reservation);
  };

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      return unavailableDates.some(
        (unavailableDate) =>
          date.getFullYear() === unavailableDate.getFullYear() &&
          date.getMonth() === unavailableDate.getMonth() &&
          date.getDate() === unavailableDate.getDate()
      );
    }
    return false;
  };

  return (
    <div className="calendar-container">
      <h2>Selecciona una fecha para reservar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileDisabled={tileDisabled}
      />
      <form className="reservation-form">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleConfirm}>
          Confirmar Reserva
        </button>
      </form>
      {isConfirmed && (
        <p>
          Reserva confirmada para {date.toDateString()} a nombre de {name}.
        </p>
      )}
    </div>
  );
};

export default CalendarComponent;
