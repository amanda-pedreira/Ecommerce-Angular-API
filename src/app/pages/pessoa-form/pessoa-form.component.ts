import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaServiceService } from '../../services/pessoa-service.service';
import { Pessoa } from '../../model/tipos';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {

  titulo:string = 'Cadastro de Admins';

  pessoaId?:number;

  pessoa: Pessoa = {} as Pessoa;



  
  constructor(private service: PessoaServiceService,
      private router: Router,
      private route: ActivatedRoute
    ) {

      this.pessoaId = Number(this.route.snapshot.params['id']);
      
      if (this.pessoaId) {
        service.buscarPorId(this.pessoaId).subscribe(pessoa => {
          if (pessoa) {
            this.pessoa.id = pessoa.id;
            this.pessoa.nome = pessoa.nome;
            this.pessoa.sobrenome = pessoa.sobrenome;
            this.pessoa.dtNascimento = pessoa.dtNascimento;
          }
        })
      }
  }
}
