import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  exibirLogo:boolean = true;

  itemLogin = [
    { label: 'Login', link: '/login-usuario' },
  ]

  itemCarrinho = [
    { label: 'Carrinho', link: '/carrinho' },
  ]

  itensMenu = [
    { label: 'Início', link: '/' },
    { label: 'Produtos', link: '/produtos' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Contatos', link: '/contatos' },
  ]

  itensSubmenu = [
    { label: 'Todos os produtos', link: '/produtos' },
    { label: 'Proteína', link: '/produtos-proteina' },
    { label: 'Energia', link: '/produtos-energia' },
    { label: 'Acessórios', link: '/produtos-acessorios' },
    { label: 'Roupas', link: '/produtos-roupas' },
    { label: 'Alimentação', link: '/produtos-alimentacao' },
    { label: 'Equipamentos', link: '/produtos-equipamentos' },
  ]
}
