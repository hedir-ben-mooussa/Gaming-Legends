import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CART_KEY = 'app_cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  private loadCart(): CartItem[] {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveCart(cart: CartItem[]): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    this.cartSubject.next(cart); // Notify subscribers
  }

  getCart(): CartItem[] {
    return this.cartSubject.getValue();
  }

  addToCart(item: CartItem): void {
    const cart = this.getCart();
    const index = cart.findIndex(i => i.id === item.id);
    if (index > -1) {
      cart[index].quantity += item.quantity;
    } else {
      cart.push(item);
    }
    this.saveCart(cart);
  }

  updateCartItem(id: number, quantity: number): void {
    const cart = this.getCart();
    const item = cart.find(i => i.id === id);
    if (item) {
      item.quantity = quantity;
      this.saveCart(cart);
    }
  }

  removeFromCart(id: number): void {
    const updatedCart = this.getCart().filter(item => item.id !== id);
    this.saveCart(updatedCart);
  }

  clearCart(): void {
    this.saveCart([]);
  }


}
