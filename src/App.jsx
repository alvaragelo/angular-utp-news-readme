import React, { useState } from 'react';
import Login from './Login';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [tickets, setTickets] = useState([
    { id: 'INC-1001', titulo: 'Impresora sin conexión', categoria: 'Hardware', descripcion: 'La impresora de contabilidad no recibe órdenes.', estado: 'Pendiente', tecnico: 'Sin Asignar', usuario: 'juan@empresa.com' },
    { id: 'INC-1002', titulo: 'Fallo de acceso a correo', categoria: 'Software', descripcion: 'No me permite ingresar la clave corporativa.', estado: 'En Proceso', tecnico: 'Maria Luján (Redes)', usuario: 'pedro@empresa.com' }
  ]);

  const handleLogin = (user) => setCurrentUser(user);
  const handleLogout = () => setCurrentUser(null);
  
  const handleAddTicket = (newTicket) => setTickets([...tickets, newTicket]);

  const handleUpdateStatus = (id, newStatus) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, estado: newStatus } : t));
  };

  const handleAssignTech = (id, newTech) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, tecnico: newTech } : t));
  };

  if (!currentUser) return <Login onLogin={handleLogin} />;

  return (
    <div>
      <nav className="navbar">
        <h1 style={{ fontSize: '20px' }}>NexoTI — Sistema de Gestión de Incidencias</h1>
        <button onClick={handleLogout} className="btn-logout">
          Cerrar Sesión
        </button>
      </nav>

      {currentUser.role === 'admin' || currentUser.role === 'tecnico' ? (
        <AdminDashboard tickets={tickets} onUpdateStatus={handleUpdateStatus} onAssignTech={handleAssignTech} />
      ) : (
        <UserDashboard user={currentUser} tickets={tickets} onAddTicket={handleAddTicket} />
      )}
    </div>
  );
}