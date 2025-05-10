import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080/order'; 

  constructor(private http: HttpClient) {}

  // Get all orders
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  // Get order by ID
  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${id}`);
  }

  // Create a new order
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/id`, order);
  }

  // Delete order by ID
  deleteOrderById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
