import { Component, OnInit } from '@angular/core';
import { ProdutosServiceService } from '../../../services/produtos-service.service';
import { Produtos } from '../../../model/tipos';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../shared/card/card.component';


@Component({
  selector: 'app-produtos-acessorios',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './produtos-acessorios.component.html',
  styleUrl: './produtos-acessorios.component.css'
})
export class ProdutosAcessoriosComponent implements OnInit{

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
