import { Injectable } from '@angular/core';
import { Usuario } from '../model/tipos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServiceService {

  private API:string = 'http://localhost:3000/usuario';

  constructor(private service:HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.service.get<Usuario[]>(this.API)
  }
  
  buscarPorId(id: string): Observable<Usuario | undefined> {
    return this.service.get<Usuario>(this.API + `/${id}`);
  }

  incluir(usuario: Usuario): Observable<Usuario>{
    return this.service.post<Usuario>(this.API, usuario)
  }

  editar(usuario: Usuario): Observable<Usuario>{
    const url = `${this.API}/${usuario.id}`
    return this.service.put<Usuario>(url, usuario)
  }

  excluir(id: number): Observable<Usuario>{
    return this.service.delete<Usuario>(this.API + `/${id}`);
  }


}
