import React, { useState } from 'react';

export default function UserDashboard({ user, tickets, onAddTicket }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Hardware');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !descripcion) return;
    onAddTicket({
      id: `INC-${Date.now().toString().slice(-4)}`,
      titulo,
      categoria,
      descripcion,
      estado: 'Pendiente',
      tecnico: 'Sin Asignar',
      usuario: user.email
    });
    setTitulo('');
    setDescripcion('');
  };

  const myTickets = tickets.filter(t => t.usuario === user.email);

  return (
    <div className="dashboard-container">
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #1b365d', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2 style={{ color: '#1b365d' }}>NexoTI — Panel del Colaborador</h2>
        <span>Usuario: <strong>{user.email}</strong></span>
      </header>

      <section className="card">
        <h3>Reportar Nueva Incidencia</h3>
        <form onSubmit={handleSubmit} style={{ marginTop: '14px' }}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-input"
              placeholder="Título del problema (ej. Impresora no responde)"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select className="form-select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="Hardware">Hardware (Computadora, Impresora)</option>
              <option value="Software">Software (Programas, Sistema Operativo)</option>
              <option value="Red">Red e Internet</option>
            </select>
          </div>
          <div className="form-group">
            <textarea 
              className="form-textarea"
              placeholder="Descripción detallada de la falla..."
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows="3"
            />
          </div>
          <button type="submit" className="btn-success">
            Registrar Ticket
          </button>
        </form>
      </section>

      <section>
        <h3>Mis Incidencias Registradas</h3>
        {myTickets.length === 0 ? (
          <p style={{ marginTop: '10px', color: '#666' }}>No tienes incidencias registradas actualmente.</p>
        ) : (
          <div style={{ display: 'grid', gap: '12px', marginTop: '14px' }}>
            {myTickets.map((t) => (
              <div key={t.id} className="card" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>{t.id}: {t.titulo}</strong>
                  <span className={`badge ${t.estado === 'Pendiente' ? 'badge-pending' : t.estado === 'En Proceso' ? 'badge-process' : 'badge-done'}`}>
                    {t.estado}
                  </span>
                </div>
                <p style={{ margin: '10px 0', fontSize: '14px', color: '#555' }}>{t.descripcion}</p>
                <small style={{ color: '#888' }}>Categoría: <strong>{t.categoria}</strong> | Técnico: <strong>{t.tecnico}</strong></small>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}