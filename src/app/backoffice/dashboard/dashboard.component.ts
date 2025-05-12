import { OrderService } from '../../core/services/order.service';
import { CategoryService } from './../../core/services/category.service';
import { UserService } from './../../core/services/user.service';
// 

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  categories: any[] = [];
  orders: any[] = [];
  completedTotal: number;

  constructor(private UserService: UserService,
    private CategoryService: CategoryService,
    private orderService: OrderService) { }


  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe(data => {
      this.users = data;
    });

    this.CategoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;

        const completedOrdersTotalPrice = this.orders
          .filter(order => order.status?.toLowerCase() === 'completed')
          .reduce((sum, order) => sum + (order.totalPrice || 0), 0);

        this.completedTotal = completedOrdersTotalPrice;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });

  }
  changeOrder(id: number) {
    this.orderService.changeToCompleted(id).subscribe((data) => {
      this.ngOnInit()
    })
  }
}


