import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


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
  botaoDesabilitado: boolean = true;

  constructor(private router:Router){ }

  onBotaoClicado() {
    if(this.login.trim() !== '' && this.senha.trim() !== ''){

      if(this.login == 'admin' && this.senha == '123'){
        alert(`Bem-vindo ${this.login} !`)
        this.router.navigate(['/admin'])
      }else{
        alert(`Dados Inválidos`)
      }

    }
    else{
      alert(`Preencha ambos os campos!`)
    }
  }
}

