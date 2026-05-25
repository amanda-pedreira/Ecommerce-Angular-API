import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutosServiceService } from '../../services/produtos-service.service';
import { Produtos } from '../../model/tipos';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent {

  titulo:string = 'Detalhes do produto';

  produtoId?: string;

  produto: Produtos = {} as Produtos;



  
  constructor(
      private service: ProdutosServiceService,
      private router: Router,
      private route: ActivatedRoute
    ) {

      this.produtoId = this.route.snapshot.params['id'];
      
      if (this.produtoId) {
        service.buscarPorId(this.produtoId).subscribe(produto => {
          if (produto) {
            this.produto.id = produto.id;
            this.produto.nome = produto.nome;
            this.produto.preco = produto.preco;
            this.produto.categoria = produto.categoria;
            this.produto.imagem = produto.imagem;
            this.produto.estoque = produto.estoque;
            this.produto.detalhes = produto.detalhes;
            this.produto.destaque = produto.destaque;
            this.produto.status = produto.status;
          }
        })
      }
  }






  adicionarCarrinho(){
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    carrinho.push(this.produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho');
}



}
