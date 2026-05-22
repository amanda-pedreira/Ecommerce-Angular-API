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
    { label: 'Mensagens', link: '/admin/contatos/listagem' },
  ]
}


