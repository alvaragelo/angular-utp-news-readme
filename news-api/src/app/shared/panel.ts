import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AccesoStore } from '../../../../acceso/application/acceso.store';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './panel.html'
})
export class Panel {
  readonly store = inject(AccesoStore);
  private readonly router = inject(Router);

  logout(): void {
    this.store.cerrarSesion();
    this.router.navigate(['/login']);
  }
}