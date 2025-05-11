import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-list-category',
  standalone: false,
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.scss'
})
export class ListCategoryComponent implements OnInit {
  categories: any[] = [];
  showModal = false;
  form: FormGroup
  constructor(private categoryervice: CategoryService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
   
    });
  }

  ngOnInit(): void {
    this.categoryervice.getAllCategories().subscribe({
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

  delete(i: number) {
    this.categoryervice.deleteCategory(i).subscribe(() => {
      this.ngOnInit()
    })
  }

  add() {
    this.categoryervice.createCategory(this.form.value as any).subscribe({
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