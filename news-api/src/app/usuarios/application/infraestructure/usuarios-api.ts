import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Usuario } from '../../domain/model/usuario.entity';

@Service()
export class UsuariosApi {

    private readonly http = inject(HttpClient);
    private readonly endPoint = `${environment.usuariosApiBaseURL}${environment.usuariosApiEndPoint}`;

    getUsuarios():Observable<Usuario[]> {
        return this.http.get<any[]>(this.endPoint).pipe(
            map(lista => lista.map(u =>
                new Usuario(u.id, u.name, u.email, u.phone, u.address.city, u.company.name)
            ))
        );
    }
}