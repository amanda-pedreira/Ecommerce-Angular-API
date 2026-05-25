import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContatosServiceService } from '../../services/contatos-service.service';
import { Contatos } from '../../model/tipos';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {

    contatos: Contatos = {} as Contatos;

  constructor(
    private service: ContatosServiceService,
      private router: Router
  ){}


  submeter(){
  this.service.incluir(this.contatos).subscribe(()=>{
    alert('Mensagem enviada com sucesso!');
    this.router.navigate(['/contatos']);
  })
}




//  submeter(){
//       if(this.contatosId){
//         this.service.editar(this.contatos).subscribe(() =>{
//           this.router.navigate(['listar'])
//         })
//       }else{
//         this.service.incluir(this.contatos).subscribe(()=>{
//           this.router.navigate(['listar'])
//         })
//       }
//     }

  


}
