import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  form: FormGroup;
  carts: any[] = []
  constructor(private cartService: CartService, private formBuilder: FormBuilder, private orderService: OrderService) {
    this.form = this.formBuilder.group({
      email: [''],
      address: [''],
      paymentType: ['Cash'],
      status: ['pending'],
      totalPrice: [0,],
      country: ['']
    })
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.carts = cart;
    });
  }

  getSubtotal(): number {
    return this.carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  addOrder() {
    const total = this.getSubtotal() + 10;
    this.form.patchValue({ totalPrice: total });

    if (this.form.valid) {
      this.orderService.createOrder(this.form.value).subscribe((data) => {
        this.cartService.clearCart();
      });
    } else {
      console.warn('Form is invalid');
    }
  }

}
