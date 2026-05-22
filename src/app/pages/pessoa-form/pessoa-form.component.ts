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

  pessoaId?: string;

  pessoa: Pessoa = {} as Pessoa;



  
  constructor(
      private service: PessoaServiceService,
      private router: Router,
      private route: ActivatedRoute
    ) {

      this.pessoaId = this.route.snapshot.params['id'];
      
      if (this.pessoaId) {
        service.buscarPorId(this.pessoaId).subscribe(pessoa => {
          if (pessoa) {
            this.pessoa.id = pessoa.id;
            this.pessoa.nome = pessoa.nome;
            this.pessoa.sobrenome = pessoa.sobrenome;
            this.pessoa.dtNascimento = pessoa.dtNascimento;
            this.pessoa.cpf = pessoa.cpf;
            this.pessoa.cargo = pessoa.cargo;
          }
        })
      }
  }

  submeter(){
    if(this.pessoaId){
      this.service.editar(this.pessoa).subscribe(() =>{
        this.router.navigate(['listar'])
      })
    }else{
      this.service.incluir(this.pessoa).subscribe(()=>{
        this.router.navigate(['listar'])
      })
    }
  }


}
