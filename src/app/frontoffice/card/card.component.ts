import { Component, Input, input } from '@angular/core';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() product : Product ;
}
