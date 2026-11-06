import React from 'react';

export default function AdminDashboard({ tickets, onUpdateStatus, onAssignTech }) {
  const tecnicos = ['Juan Pérez (Hardware)', 'Maria Luján (Redes)', 'Carlos Ramos (Software)'];

  return (
    <div className="dashboard-container">
      <h2 style={{ color: '#1b365d', marginBottom: '20px' }}>NexoTI — Panel de Administración de Soporte</h2>
      
      {/* KPI Cards */}
      <div className="kpi-container">
        <div className="kpi-card kpi-pending">
          <span style={{ fontSize: '13px', color: '#777' }}>Pendientes</span>
          <h3 style={{ color: '#d68910', marginTop: '4px' }}>{tickets.filter(t => t.estado === 'Pendiente').length}</h3>
        </div>
        <div className="kpi-card kpi-process">
          <span style={{ fontSize: '13px', color: '#777' }}>En Proceso</span>
          <h3 style={{ color: '#2980b9', marginTop: '4px' }}>{tickets.filter(t => t.estado === 'En Proceso').length}</h3>
        </div>
        <div className="kpi-card kpi-done">
          <span style={{ fontSize: '13px', color: '#777' }}>Solucionados</span>
          <h3 style={{ color: '#27ae60', marginTop: '4px' }}>{tickets.filter(t => t.estado === 'Solucionado').length}</h3>
        </div>
      </div>

      {/* Tabla Central */}
      <table className="table-custom">
        <thead>
          <tr>
            <th>Código</th>
            <th>Solicitante</th>
            <th>Título</th>
            <th>Estado</th>
            <th>Técnico Asignado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t) => (
            <tr key={t.id}>
              <td><strong>{t.id}</strong></td>
              <td>{t.usuario}</td>
              <td>{t.titulo}</td>
              <td>
                <select className="form-select" value={t.estado} onChange={(e) => onUpdateStatus(t.id, e.target.value)}>
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Solucionado">Solucionado</option>
                </select>
              </td>
              <td>
                <select className="form-select" value={t.tecnico} onChange={(e) => onAssignTech(t.id, e.target.value)}>
                  <option value="Sin Asignar">Sin Asignar</option>
                  {tecnicos.map(tec => <option key={tec} value={tec}>{tec}</option>)}
                </select>
              </td>
              <td>
                <button className="btn-primary" style={{ width: 'auto', padding: '6px 12px' }} onClick={() => alert(`Detalles de ${t.id}:\n${t.descripcion}`)}>
                  Ver Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}