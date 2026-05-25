import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioServiceService } from '../../../services/usuario-service.service';

@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

  titulo = 'Faça seu Login!'
  login = ''
  senha = ''
  // botaoDesabilitado: boolean = true;

  constructor(
      private router:Router, 
      private usuarioService: UsuarioServiceService){ }

   onBotaoClicado(){

    this.usuarioService.listar().subscribe(lista => {

      const usuarioEncontrado = lista.find(usuario =>
        usuario.email == this.login && usuario.senha == this.senha
      )

      if(usuarioEncontrado){
        alert('Login realizado')
        this.router.navigate(['/perfil-usuario'])
      }else{
        alert('Email ou senha inválidos')
      }
    })
    
  }

  // onBotaoClicado() {
  //   if(this.login.trim() !== '' && this.senha.trim() !== ''){

  //     if(this.login == 'admin' && this.senha == '123'){
  //       alert(`Bem-vindo ${this.login} !`)
  //       this.router.navigate(['/admin'])
  //     }else{
  //       alert(`Dados Inválidos`)
  //     }

  //   }
  //   else{
  //     alert(`Preencha ambos os campos!`)
  //   }
  // }
}

