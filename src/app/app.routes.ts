import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatosComponent } from './pages/contatos/contatos.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'incluir',
        component: PessoaFormComponent,
        title: 'Pessoas - Incluir',
    },
    {
        path: 'listagem',
        component: PessoaListagemComponent,
        title: 'Pessoas - Listagem',
    },
    {
        path: 'login',
        component: PessoaLoginComponent,
        title: 'Pessoas - Login',
    },
    {
        path: 'sobre',
        component: SobreComponent,
        title: 'Sobre',
    },
    {
        path: 'contatos',
        component: ContatosComponent,
        title: 'Contatos',
    },
    
];