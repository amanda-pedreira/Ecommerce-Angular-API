import { Component, OnInit } from '@angular/core';
import { ProdutosServiceService } from '../../../services/produtos-service.service';
import { Produtos } from '../../../model/tipos';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos-listagem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produtos-listagem.component.html',
  styleUrl: './produtos-listagem.component.css'
})
export class ProdutosListagemComponent implements OnInit{


  listaProdutos: Produtos[] = [];

  constructor(
    private service: ProdutosServiceService, 
    private router: Router
  ){} 

  ngOnInit(): void {
    this.service.listar().subscribe((produtos)=>{
      this.listaProdutos = produtos;
    });
  }

  excluir(id:string){
    if(id){
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }

}
