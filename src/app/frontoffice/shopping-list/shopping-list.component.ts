import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-shopping-list',
  standalone:false,
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  carts: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.carts = cart;
      console.log('Updated cart:', cart);
    });
  }

  onQuantityChange(id: number, quantity: string): void {
    const qty = parseInt(quantity, 10);
    if (qty > 0) {
      this.cartService.updateCartItem(id, qty);
    }
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
  }

  getSubtotal(): number {
    return this.carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
