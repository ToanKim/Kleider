import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
  { path: 'shipping', component: ShippingComponent, canActivate: [AuthGuard]},
  { path: 'homepage', component: MainPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'search-result', component: SearchResultComponent},
  { path: 'pro-inf', component: ProductInfoComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'customer', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
