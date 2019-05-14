import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SupportComponent } from './support/support.component';
import { ChooseSizeComponent } from './choose-size/choose-size.component';
import { MaterialComponent } from './material/material.component';
import { FeeComponent } from './fee/fee.component';
import { ReceiveComponent } from './receive/receive.component';
import { WashingComponent } from './washing/washing.component';
import { PastComponent } from './past/past.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'shipping', component: ShippingComponent},
  { path: 'homepage', component: MainPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'support', component: SupportComponent},
  { path: 'choose-size', component: ChooseSizeComponent},
  { path: 'material', component: MaterialComponent},
  { path: 'fee', component: FeeComponent},
  { path: 'receive', component: ReceiveComponent},
  { path: 'washing', component: WashingComponent},
  { path: 'past', component: PastComponent},
  { path: 'search-result', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
