import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = ({ user, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    onUpdateUser({ name, email });
    setEditMode(false);
  };

  return (
    <div className="user-profile">
      <h2>Perfil de Usuario</h2>
      {editMode ? (
        <div>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Nombre:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button onClick={() => setEditMode(true)}>Editar Perfil</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
