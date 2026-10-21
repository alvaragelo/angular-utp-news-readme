import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccesoStore } from './acceso.store';

export const accesoGuard: CanActivateFn = () => {
    const store = inject(AccesoStore);
    const router = inject(Router);
    return store.logueado() ? true : router.createUrlTree(['/login']);
};


