import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccesoStore } from '../../application/acceso.store';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login-page',
  template: `
    <section class="caja">
      <h1>Iniciar sesión</h1>
      <input type="email" placeholder="Correo" [(ngModel)]="correo">
      <input type="password" placeholder="Contraseña" [(ngModel)]="clave">
      @if (error) {
        <p class="error">{{ error }}</p>
      }
      <button (click)="ingresar()">Ingresar</button>
      <p>¿No tienes cuenta? <a routerLink="/registro">Regístrate</a></p>
    </section>
  `,
})
export class LoginPage {
  private readonly store = inject(AccesoStore);
  private readonly router = inject(Router);

  correo = '';
  clave = '';
  error = '';

  ingresar(): void {
    if (this.store.login(this.correo.trim(), this.clave)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Correo o contraseña incorrectos';
    }
  }
}

