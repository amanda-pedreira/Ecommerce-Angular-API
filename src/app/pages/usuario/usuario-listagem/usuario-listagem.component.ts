import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../../services/usuario-service.service';
import { Usuario } from '../../../model/tipos';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-listagem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuario-listagem.component.html',
  styleUrl: './usuario-listagem.component.css'
})
export class UsuarioListagemComponent implements OnInit{


  listaUsuario: Usuario[] = [];

  constructor(
    private service: UsuarioServiceService, 
    private router: Router
  ){} 

  ngOnInit(): void {
    this.service.listar().subscribe((usuario)=>{
      this.listaUsuario = usuario;
    });
  }


}
