import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  listaCarrinho: any[] = [];

  total: number = 0;
  desconto: number = 0;
  cupom: string = '';

  ngOnInit(){

    this.listaCarrinho = JSON.parse(
      localStorage.getItem('carrinho') || '[]'
    );

    this.calcularTotal();
  }

  removerProduto(produto: any){

    this.listaCarrinho = this.listaCarrinho.filter(
      item => item !== produto
    );

    this.calcularTotal();
  }

  calcularTotal(){

    this.total = 0;

    this.listaCarrinho.forEach(produto => {
      this.total += Number(produto.preco);
    });
  } 

  aplicarCupom(){

    if(this.cupom == 'POWER10'){
      this.desconto = this.total * 0.1;
      alert('Cupom aplicado');
    }else{
      this.desconto = 0;
      alert('Cupom inválido');
    }
  }

  valorFinal(){
    return this.total - this.desconto;
  }

}