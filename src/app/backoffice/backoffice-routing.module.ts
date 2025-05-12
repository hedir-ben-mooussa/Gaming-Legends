
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path: '', component: BackofficeComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ListProductsComponent },
      { path: 'categories', component: ListCategoryComponent },
      { path: 'users', component: ListUsersComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
