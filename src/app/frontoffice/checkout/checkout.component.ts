import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
   constructor(private cartService: CartService) { }
    carts: any[] = []
  
    ngOnInit(): void {
      this.cartService.cart$.subscribe(cart => {
        this.carts = cart;
        console.log('Updated cart:', cart);
      });
    }
  
      getSubtotal(): number {
      return this.carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

}
