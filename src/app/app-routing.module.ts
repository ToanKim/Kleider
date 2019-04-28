import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'shipping', component: ShippingComponent},
  { path: 'homepage', component: MainPageComponent},
  { path: 'pro-inf', component: ProductInfoComponent},
  { path: 'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
