  import { Component } from '@angular/core';
  import { Router, RouterLink, ActivatedRoute } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { ProdutosServiceService } from '../../../services/produtos-service.service';
  import { Produtos } from '../../../model/tipos';

  @Component({
    selector: 'app-produtos-form',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './produtos-form.component.html',
    styleUrl: './produtos-form.component.css'
  })
  export class ProdutosFormComponent {

    titulo:string = 'Cadastro de Produtos';

    produtosId?:string;

    produtos: Produtos = {} as Produtos;
    
    constructor(
        private service: ProdutosServiceService,
        private router: Router,
        private route: ActivatedRoute
      ) {

        this.produtosId = this.route.snapshot.params['id'];
        
        if (this.produtosId) {
          service.buscarPorId(this.produtosId).subscribe(produtos => {
            if (produtos) {
              this.produtos.id = produtos.id;
              this.produtos.nome = produtos.nome;
              this.produtos.preco = produtos.preco;
              this.produtos.categoria = produtos.categoria;
              this.produtos.imagem = produtos.imagem;
              this.produtos.estoque = produtos.estoque;
              this.produtos.detalhes = produtos.detalhes;
              this.produtos.destaque = produtos.destaque;
              this.produtos.status = produtos.status;
            }
          })
        }
    }

    submeter(){
      if(this.produtosId){
        this.service.editar(this.produtos).subscribe(() =>{
          this.router.navigate(['listar'])
        })
      }else{
        this.service.incluir(this.produtos).subscribe(()=>{
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['listar'])
        })
      }
    }



  }
