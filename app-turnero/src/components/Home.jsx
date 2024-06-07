import React, { useState } from "react";
import Cancha from "./Cancha";
import CalendarComponent from "./CalendarComponent";
import UserProfile from "./UserProfile";
import "./Home.css";

function Home() {
  const [reservations, setReservations] = useState([]);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const handleSaveReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="home-container">
      <div className="contenidoHome">
        <h2>Bienvenido a la página de inicio</h2>
        <p>Has iniciado sesión correctamente.</p>
        <UserProfile user={user} onUpdateUser={handleUpdateUser} />
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
        <CalendarComponent onSaveReservation={handleSaveReservation} />
        <div className="reservation-list">
          <h3>Reservas Confirmadas:</h3>
          <ul>
            {reservations.map((reservation, index) => (
              <li key={index}>
                {reservation.date.toDateString()} - {reservation.name} (
                {reservation.email})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
