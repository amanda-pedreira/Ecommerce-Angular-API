import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
  itensMenu = [
    { label: 'Funcionários', link: '/admin/listagem' },
    { label: 'Produtos', link: '/admin/produtos/listagem' },
    { label: 'Usuários', link: '/admin/usuario/listagem' },
    { label: 'Mensagens', link: '/admin/contatos/listagem' },
  ]

  fecharMenu() {
    document.getElementById("menuAdmin")!.style.width = "30px";
    document.getElementById("abrir")!.style.display = "block";
    document.getElementById("fechar")!.style.display = "none";
    document.getElementById("controlarLogo")!.style.display = "none";
    document.getElementById("controlarLista")!.style.display = "none";
    document.getElementById("controlarFooter")!.style.display = "none";
  }

  abrirMenu() {
    document.getElementById("menuAdmin")!.style.width = "250px";
    document.getElementById("abrir")!.style.display = "none";
    document.getElementById("fechar")!.style.display = "block";
    document.getElementById("controlarLogo")!.style.display = "block";
    document.getElementById("controlarLista")!.style.display = "block";
    document.getElementById("controlarFooter")!.style.display = "block";
  }

  // function fecharMenu() {
  //   document.getElementById("menuAdmin").style.display = "none";
  //   document.getElementById("abrir").style.display = "block";
  //   document.getElementById("fechar").style.display = "none";
  // }

  // function abrirMenu() {
  //   document.getElementById("menuAdmin").style.display = "block";
  //   document.getElementById("abrir").style.display = "none";
  //   document.getElementById("fechar").style.display = "block";
  // }
}




