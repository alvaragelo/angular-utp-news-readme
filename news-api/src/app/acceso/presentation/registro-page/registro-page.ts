import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccesoStore } from '../../application/acceso.store';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-registro-page',
  template: `
    <section class="caja">
      <h1>Registro</h1>
      <input type="text" placeholder="Nombre" [(ngModel)]="nombre">
      <input type="email" placeholder="Correo" [(ngModel)]="correo">
      <input type="password" placeholder="Contraseña" [(ngModel)]="clave">
      @if (error) {
        <p class="error">{{ error }}</p>
      }
      <button (click)="registrar()">Registrarse</button>
      <p>¿Ya tienes cuenta? <a routerLink="/login">Inicia sesión</a></p>
    </section>
  `,
})
export class RegistroPage {
  private readonly store = inject(AccesoStore);
  private readonly router = inject(Router);

  nombre = '';
  correo = '';
  clave = '';
  error = '';

  registrar(): void {
    if (!this.nombre.trim() || !this.correo.trim() || !this.clave) {
      this.error = 'Completa todos los campos';
    } else if (this.store.registrar(this.nombre.trim(), this.correo.trim(), this.clave)) {
      this.router.navigate(['/login']);
    } else {
      this.error = 'Ese correo ya está registrado';
    }
  }
}
