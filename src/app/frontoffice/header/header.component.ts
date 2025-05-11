import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService) { }
  carts: any[] = []
isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // adjust threshold as needed
  }
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
