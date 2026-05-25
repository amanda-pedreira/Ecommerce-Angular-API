import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { PessoaLoginComponent } from "./pages/pessoa-admin/pessoa-login/pessoa-login.component";
import { ProdutosComponent } from "./pages/produtos-pagina/produtos/produtos.component";
import { ProdutosProteinaComponent } from "./pages/produtos-pagina/produtos-proteina/produtos-proteina.component";
import { ProdutosEnergiaComponent } from "./pages/produtos-pagina/produtos-energia/produtos-energia.component";
import { ProdutosAcessoriosComponent } from "./pages/produtos-pagina/produtos-acessorios/produtos-acessorios.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { ContatosComponent } from "./pages/contatos/contatos.component";
import { FooterComponent } from './shared/footer/footer.component';
import { CadastroUsuarioComponent } from './pages/usuario/cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './pages/usuario/login-usuario/login-usuario.component';
import { PerfilUsuarioComponent } from './pages/usuario/perfil-usuario/perfil-usuario.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'olamundo';
  nome = 'Amanda';

  constructor(public router: Router){ }
}
