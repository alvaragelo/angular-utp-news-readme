import { Component, inject, OnInit } from '@angular/core';
import { UsuariosStore } from '../../application/usuarios.store';

@Component({
  selector: 'app-usuarios-page',
  templateUrl: './usuarios-page.html',
})
export class UsuariosPage implements OnInit {
  protected readonly store = inject(UsuariosStore);

  ngOnInit(): void {
    this.store.cargarUsuarios();
  }
}