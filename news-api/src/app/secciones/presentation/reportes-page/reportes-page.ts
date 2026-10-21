import { Component } from '@angular/core';

export interface ReporteItem {
  id: number;
  categoria: string;
  totalUnidades: number;
  montoSoles: number;
}

@Component({
  selector: 'app-reportes-page',
  standalone: true,
  templateUrl: './reportes-page.html'
})
export class ReportesPage {
  resumenReportes: ReporteItem[] = [
    { id: 1, categoria: 'Aceites y Comestibles', totalUnidades: 6200, montoSoles: 52700.00 },
    { id: 2, categoria: 'Granos y Cereales', totalUnidades: 4800, montoSoles: 158400.00 },
    { id: 3, categoria: 'Abarrotes Generales', totalUnidades: 3250, montoSoles: 42250.00 }
  ];
}

