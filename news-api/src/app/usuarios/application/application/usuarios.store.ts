import { inject, Service, signal } from '@angular/core';
import { UsuariosApi } from '../infrastructure/api/usuarios-api';
import { Usuario } from '../domain/model/usuario.entity';

@Service()
export class UsuariosStore {

    private readonly usuariosApi = inject(UsuariosApi);

    readonly usuarios = signal<Usuario[]>([]);
    readonly error = signal<string>("");

    cargarUsuarios(): void {
        this.usuariosApi.getUsuarios().subscribe({
            next: (usuarios) => this.usuarios.set(usuarios),
            error: () => this.error.set('No se pudo cargar la lista de usuarios'),
        });
    }
}