import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontofficeComponent } from './frontoffice.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { BuyProductComponent } from './buy-product/buy-product.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FrontofficeComponent,
    ShopComponent,
    ShoppingListComponent,
    HomeComponent,
    LoginComponent,
    CardComponent,
    BuyProductComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule
  ]
})
export class FrontofficeModule { }
