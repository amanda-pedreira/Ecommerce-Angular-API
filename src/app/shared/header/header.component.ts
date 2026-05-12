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
  itensMenu = [
    { label: 'Home', link: '/' },
    { label: 'Cadastro', link: 'incluir' },
    { label: 'Listagem', link: 'listagem' },
    { label: 'Login', link: '/login' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Contatos', link: '/contatos' },
  ]
}
