import { Component } from '@angular/core';

export interface Empleado {
  id: number;
  nombre: string;
  cargo: string;
  turno: string;
}

@Component({
  selector: 'app-empleados-page',
  standalone: true,
  templateUrl: './empleados-page.html'
})
export class EmpleadosPage {
  empleados: Empleado[] = [
    { id: 1, nombre: 'Carlos Mendoza', cargo: 'Supervisor de Almacén', turno: 'Turno Mañana' },
    { id: 2, nombre: 'Ana Gómez', cargo: 'Despachadora', turno: 'Turno Tarde' },
    { id: 3, nombre: 'Luis Paredes', cargo: 'Conductor de Reparto', turno: 'Turno Mañana' }
  ];
}

