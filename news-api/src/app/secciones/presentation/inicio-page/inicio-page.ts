import { Component, inject } from '@angular/core';
import { AccesoStore } from '../../../acceso/application/acceso.store';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  templateUrl: './inicio-page.html'
})
export class InicioPage {
  readonly store = inject(AccesoStore);
}