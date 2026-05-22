import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuAdminComponent } from "../../shared/menu-admin/menu-admin.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MenuAdminComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
