import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id?: string = '';
  @Input() imageUrl: string = '';
  @Input() nome: string = '';
  @Input() categoria: string = '';
  @Input() preco: string = '';
  @Input() estoque: number = 0;
  @Input() detalhes: string = '';
  @Input() destaque: string = '';
  @Input() status: string = '';
}
