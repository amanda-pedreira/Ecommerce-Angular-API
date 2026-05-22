import { Injectable } from '@angular/core';
import { Contatos } from '../model/tipos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosServiceService {

  private API:string = 'http://localhost:3000/contatos';

  constructor(private service:HttpClient) { }

  listar(): Observable<Contatos[]>{
    return this.service.get<Contatos[]>(this.API)
  }
  

  incluir(contatos: Contatos): Observable<Contatos>{
    return this.service.post<Contatos>(this.API, contatos)
  }


  excluir(id: string): Observable<Contatos>{
    return this.service.delete<Contatos>(this.API + `/${id}`);
  }


}
