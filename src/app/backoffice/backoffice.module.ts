import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackofficeComponent } from './backoffice.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListUsersComponent } from './list-users/list-users.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BackofficeComponent,
    ListProductsComponent,
    ListCategoryComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackofficeModule { }
