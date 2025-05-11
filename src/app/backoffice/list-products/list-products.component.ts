import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];
  categories: any[] = [];

  showModal = false;
  form: FormGroup
  constructor(private productService: ProductService, private categoryService: CategoryService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      quantity: [null, [Validators.required, Validators.min(1)]],
      description: [null, [Validators.required, Validators.min(1)]],
      category: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      }
    })
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      }
    })
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }

  deleteProduct(i: number) {
    this.productService.deleteProduct(i).subscribe(() => {
      this.ngOnInit()
    })
  }

  addProduct() {
    this.productService.createProduct(this.form.value as any).subscribe({
      next: () => {
        this.closeModal();
        this.ngOnInit();
      }
    })

  }

  private resetForm() {
    this.form.reset();
  }
}
