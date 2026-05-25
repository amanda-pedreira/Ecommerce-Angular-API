import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { Usuario } from '../../model/tipos';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {


  titulo:string = 'Cadastro';

  usuarioId?: string;

  usuario: Usuario = {} as Usuario;



  
  constructor(
      private service: UsuarioServiceService,
      private router: Router,
      private route: ActivatedRoute
    ) {

      this.usuarioId = this.route.snapshot.params['id'];
      
      if (this.usuarioId) {
        service.buscarPorId(this.usuarioId).subscribe(usuario => {
          if (usuario) {
            this.usuario.id = usuario.id;
            this.usuario.nome = usuario.nome;
            this.usuario.email = usuario.email;
            this.usuario.telefone = usuario.telefone;
            this.usuario.senha = usuario.senha;
            this.usuario.status = usuario.status;
          }
        })
      }
  }

  submeter(){
    if(this.usuarioId){
      this.service.editar(this.usuario).subscribe(() =>{
        this.router.navigate(['listar'])
      })
    }else{
      this.service.incluir(this.usuario).subscribe(()=>{
        this.router.navigate(['listar'])
        alert('Cadastro realizado com sucesso!');
         this.router.navigate(['/login-usuario']);
      })
    }
  }

  

}
