
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { BuyProductComponent } from './buy-product/buy-product.component';


const routes: Routes = [
  {path : '', component : FrontofficeComponent,children:[
    {path : 'shop', component: ShopComponent},
  {path : 'shoppingList' , component : ShoppingListComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'addProduct', component : BuyProductComponent}
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
