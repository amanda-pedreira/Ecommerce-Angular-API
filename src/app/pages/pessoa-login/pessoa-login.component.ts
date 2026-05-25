import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaServiceService } from '../../services/pessoa-service.service';


@Component({
  selector: 'app-pessoa-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pessoa-login.component.html',
  styleUrl: './pessoa-login.component.css'
})


export class PessoaLoginComponent {
  titulo = 'Faça seu Login!'
  login = ''
  senha = ''
  // botaoDesabilitado: boolean = true;

  constructor(
    private router:Router, 
    private pessoaService: PessoaServiceService){ }


    onBotaoClicado(){

    this.pessoaService.listar().subscribe(lista => {

      const usuarioEncontrado = lista.find(pessoa =>

        pessoa.email == this.login &&
        pessoa.senha == this.senha

      )

      if(usuarioEncontrado){

        alert('Login realizado')

        this.router.navigate(['/admin'])

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

