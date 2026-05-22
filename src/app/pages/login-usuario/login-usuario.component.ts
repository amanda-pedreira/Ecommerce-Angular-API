import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaServiceService } from '../../services/pessoa-service.service';

@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

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

