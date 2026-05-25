import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';
import { ProdutosFormComponent } from './pages/produtos/produtos-form/produtos-form.component';
import { ProdutosListagemComponent } from './pages/produtos/produtos-listagem/produtos-listagem.component';
import { ProdutosComponent } from './pages/produtos-pagina/produtos/produtos.component';
import { ProdutosProteinaComponent } from './pages/produtos-pagina/produtos-proteina/produtos-proteina.component';
import { ProdutosEnergiaComponent } from './pages/produtos-pagina/produtos-energia/produtos-energia.component';
import { ProdutosAcessoriosComponent } from './pages/produtos-pagina/produtos-acessorios/produtos-acessorios.component';
import { ProdutosRoupasComponent } from './pages/produtos-pagina/produtos-roupas/produtos-roupas.component';
import { ProdutosAlimentacaoComponent } from './pages/produtos-pagina/produtos-alimentacao/produtos-alimentacao.component';
import { ProdutosEquipamentosComponent } from './pages/produtos-pagina/produtos-equipamentos/produtos-equipamentos.component';
import { DetalhesProdutoComponent } from './pages/detalhes-produto/detalhes-produto.component';
import { ContatosListagemComponent } from './pages/contatos-listagem/contatos-listagem.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';



export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
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
    {
        path: 'admin',
        component: AdminComponent,
        title: 'Página de administradores',
        children: [
            { path: 'incluir', component: PessoaFormComponent },
            { path: 'listagem', component: PessoaListagemComponent },
            { path: 'alterar/:id', component: PessoaFormComponent },
            { path: 'produtos/incluir', component: ProdutosFormComponent },
            { path: 'produtos/listagem', component: ProdutosListagemComponent },
            { path: 'produtos/alterar/:id', component: ProdutosFormComponent },
            { path: 'contatos/listagem', component: ContatosListagemComponent }
        ]
    },
    {
        path: 'produtos',
        component: ProdutosComponent,
        title: 'Produtos',
    },
    {
        path: 'produtos-proteina',
        component: ProdutosProteinaComponent,
        title: 'Proteína',
    },
    {
        path: 'produtos-energia',
        component: ProdutosEnergiaComponent,
        title: 'Energia',
    },
    {
        path: 'produtos-acessorios',
        component: ProdutosAcessoriosComponent,
        title: 'Acessórios',
    },
    {
    path: 'produtos-roupas',
    component: ProdutosRoupasComponent,
    title: 'Roupas',
    },
{
    path: 'produtos-alimentacao',
    component: ProdutosAlimentacaoComponent,
    title: 'Alimentação',
    },
{
    path: 'produtos-equipamentos',
    component: ProdutosEquipamentosComponent,
    title: 'Equipamentos',
    },
    {
        path: 'detalhes-produto/:id',
        component: DetalhesProdutoComponent,
        title: 'Detalhes do produto',
    },
    {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent,
        title: 'Cadastro',
    },  
    {
        path: 'login-usuario',
        component: LoginUsuarioComponent,
        title: 'Login',
    },
    

    
];