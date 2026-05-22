import { Component, OnInit } from '@angular/core';
import { ContatosServiceService } from '../../services/contatos-service.service';
import { Contatos } from '../../model/tipos';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contatos-listagem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contatos-listagem.component.html',
  styleUrl: './contatos-listagem.component.css'
})
export class ContatosListagemComponent implements OnInit{


  listaContatos: Contatos[] = [];

  constructor(
    private service: ContatosServiceService, 
    private router: Router
  ){} 

  ngOnInit(): void {
    this.service.listar().subscribe((contatos)=>{
      this.listaContatos = contatos;
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
