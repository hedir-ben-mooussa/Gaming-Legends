import { Component, Input, input, OnInit } from '@angular/core';
import { Product } from '../../core/models/product';
import { CartService } from '../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() product : Product ;
constructor(private cartService:CartService,private router:Router){}

ngOnInit(): void {
  console.log('o',this.product)
}

addToCart(product:Product){
  this.cartService.addToCart({
    id:product.id,
    name:product.name,
    price:product.price,
    quantity:1
  });
  this.router.navigate(['/cart'])
}

}
