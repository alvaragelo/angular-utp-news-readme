import { inject, Service } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from '../domain/model/cuenta.entity';

@Service()
export class AccesoStore {
    private readonly router = inject(Router);
    private cuentas(): Cuenta[] {
        return JSON.parse(localStorage.getItem('cuentas') ?? '[]');
    }

    registrar(nombre: string, correo: string, clave: string): boolean {
        const cuentas = this.cuentas();
        if (cuentas.some(c => c.correo === correo)) {
            return false;
        }
        cuentas.push(new Cuenta(nombre, correo, clave));
        localStorage.setItem('cuentas', JSON.stringify(cuentas));
        return true;
    }

    login(correo: string, clave: string): boolean {
        const cuenta = this.cuentas().find(c => c.correo === correo && c.clave === clave);
        if (!cuenta) {
            return false;
        }
        sessionStorage.setItem('sesion', cuenta.nombre);
        return true;
    }

    nombre(): string {
        return sessionStorage.getItem('sesion') ?? '';
    }

    logueado(): boolean {
        return this.nombre() !== '';
    }

    logout(): void {
        sessionStorage.removeItem('sesion');
        this.router.navigate(['/login']);
    }
}
