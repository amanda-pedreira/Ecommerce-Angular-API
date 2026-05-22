import { Injectable } from '@angular/core';
import { Produtos } from '../model/tipos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  private API:string = 'http://localhost:3000/produtos';

  constructor(private service:HttpClient) { }

  listar(): Observable<Produtos[]>{
    return this.service.get<Produtos[]>(this.API)
  }
  
  buscarPorId(id: string): Observable<Produtos | undefined> {
    return this.service.get<Produtos>(this.API + `/${id}`);
  }

  incluir(produtos: Produtos): Observable<Produtos>{
    return this.service.post<Produtos>(this.API, produtos)
  }

  editar(produtos: Produtos): Observable<Produtos>{
    const url = `${this.API}/${produtos.id}`
    return this.service.put<Produtos>(url, produtos)
  }

  excluir(id: string): Observable<Produtos>{
    return this.service.delete<Produtos>(this.API + `/${id}`);
  }


}
