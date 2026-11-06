import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email, role });
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">NexoTI — Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input 
            type="email" 
            className="form-input"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@empresa.com"
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input 
            type="password" 
            className="form-input"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rol de Usuario:</label>
          <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="cliente">Cliente / Colaborador</option>
            <option value="admin">Administrador de Soporte</option>
            <option value="tecnico">Técnico de Soporte</option>
          </select>
        </div>
        <button type="submit" className="btn-primary">
          Ingresar al Sistema
        </button>
      </form>
    </div>
  );
}