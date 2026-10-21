import { Component } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  stock: number;
  precio: number;
}

@Component({
  selector: 'app-productos-page',
  standalone: true,
  templateUrl: './productos-page.html'
})
export class ProductosPage {
  productos: Producto[] = [
    { id: 1, nombre: 'Caja de Aceite Vegetal 1L x 12', stock: 450, precio: 85.00 },
    { id: 2, nombre: 'Saco de Arroz Extra 50kg', stock: 120, precio: 165.00 },
    { id: 3, nombre: 'Saco de Azúcar Rubio 50kg', stock: 200, precio: 140.00 }
  ];
}