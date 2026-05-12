import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { PessoaLoginComponent } from "./pages/pessoa-login/pessoa-login.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { ContatosComponent } from "./pages/contatos/contatos.component";
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PessoaLoginComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'olamundo';
  nome = 'Amanda';
}
