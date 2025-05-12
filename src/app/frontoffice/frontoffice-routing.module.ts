
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path : '', component : FrontofficeComponent,children:[
    {path : 'shop', component: ShopComponent},
  {path : 'cart' , component : ShoppingListComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'addProduct', component : BuyProductComponent},
  {path : 'checkout', component : CheckoutComponent},
  {path : 'login', component : LoginComponent},
  {path : 'aboutUs', component : AboutComponent},
  {path : 'ContactUs', component : ContactComponent}




  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
