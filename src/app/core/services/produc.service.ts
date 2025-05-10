import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/product'; // adjust if your backend runs on a different port

  constructor(private http: HttpClient) { }

  // Get all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // Get product by ID
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // Create new product
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  // Delete product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Get paginated and filtered products
  getFilteredProducts(
    name?: string,
    category?: number,
    price?: number,
    quantity?: number,
    page: number = 0,
    size: number = 10
  ): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    if (name) params = params.set('name', name);
    if (category !== undefined) params = params.set('category', category.toString());
    if (price !== undefined) params = params.set('price', price.toString());
    if (quantity !== undefined) params = params.set('quantity', quantity.toString());

    return this.http.get(`${this.baseUrl}`, { params });
  }
}
