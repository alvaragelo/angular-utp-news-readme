import { Component } from '@angular/core';

export interface Cliente {
  id: number;
  razonSocial: string;
  ruc: string;
  estado: string;
}

@Component({
  selector: 'app-clientes-page',
  standalone: true,
  templateUrl: './clientes-page.html'
})
export class ClientesPage {
  clientes: Cliente[] = [
    { id: 1, razonSocial: 'Comercial Los Andes S.A.C.', ruc: '20123456781', estado: 'Activo' },
    { id: 2, razonSocial: 'Bodegas Unidas EIRL', ruc: '20987654321', estado: 'Activo' },
    { id: 3, razonSocial: 'Distribuidora del Norte S.R.L.', ruc: '20554433221', estado: 'Inactivo' }
  ];
}
