import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioServiceService } from '../../../services/usuario-service.service';
import { Usuario } from '../../../model/tipos';

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
        const inputNome = document.getElementById('input-nome') as HTMLInputElement;
        const erroNome = document.getElementById('erro-nome');
        if(
            !inputNome.value.trim()
        ){
            inputNome.style.border = '2px solid red';
            erroNome!.innerHTML = 'Digite um nome válido';
            return;
        }

        const inputEmail = document.getElementById('input-email') as HTMLInputElement;
        const erroEmail = document.getElementById('erro-email');
        if(
            !inputEmail.value.trim() ||
            !inputEmail.value.includes('@') ||
            !inputEmail.value.includes('.com')
        ){
            inputEmail.style.border = '2px solid red';
            erroEmail!.innerHTML = 'Digite um email válido';
            return;
        }

        const inputTelefone = document.getElementById('input-telefone') as HTMLInputElement;
        const erroTelefone = document.getElementById('erro-telefone');
        if(
            !inputTelefone.value.trim()
        ){
            inputTelefone.style.border = '2px solid red';
            erroTelefone!.innerHTML = 'Digite um telefone válido';
            return;
        }

        const inputSenha = document.getElementById('input-senha') as HTMLInputElement;
        const erroSenha = document.getElementById('erro-senha');
        if(
            !inputSenha.value.trim() 
        ){
            inputSenha.style.border = '2px solid red';
            erroSenha!.innerHTML = 'Digite uma senha';
            return;
        }

        
        if(this.usuarioId){
            this.service.editar(this.usuario).subscribe(() =>{
                alert('Usuário editado com sucesso!');
                this.router.navigate(['/login-usuario']);
            });

        }else{
            this.service.incluir(this.usuario).subscribe(()=>{
                alert('Cadastro realizado com sucesso!');
                this.router.navigate(['/login-usuario']);
            });
        }
    }
}
