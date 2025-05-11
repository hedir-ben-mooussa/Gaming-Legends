import { Product } from './../../core/models/product';
import { ProductService } from '../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class  ShopComponent implements OnInit{
  products  : Product[] =  [];
  constructor(private productservice:ProductService) {
  
  }
  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe((data)=>{this.products=data});
  }

}
