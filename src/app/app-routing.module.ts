import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PayComponent } from './pay/pay.component';
import { ShoppingGuideComponent } from './shopping-guide/shopping-guide.component';
import { BankComponent } from './bank/bank.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './core/auth.guard';
import { ProductInfoComponent } from './product-info/product-info.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { Product7Component } from './product7/product7.component';
import { UnavailableComponent } from './search-result/unavailable/unavailable.component';
import { CartGuard } from './core/cart.guard';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard, CartGuard]},
  { path: 'shipping', component: ShippingComponent, canActivate: [AuthGuard, CartGuard]},
  { path: 'pro-inf', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'pro-inf/1', component: ProductInfoComponent},
  { path: 'pro-inf/2', component: Product2Component},
  { path: 'pro-inf/3', component: Product3Component},
  { path: 'pro-inf/4', component: Product4Component},
  { path: 'pro-inf/5', component: Product5Component},
  { path: 'pro-inf/6', component: Product6Component},
  { path: 'pro-inf/7', component: Product7Component},
  { path: 'about', component: AboutPageComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'homepage', component: MainPageComponent},
  { path: 'support', component: SupportComponent},
  { path: 'bank', component: BankComponent},
  { path: 'pay', component: PayComponent},
  { path: 'choose-size', component: ChooseSizeComponent},
  { path: 'shopping-guide', component: ShoppingGuideComponent},
  { path: 'material', component: MaterialComponent},
  { path: 'fee', component: FeeComponent},
  { path: 'receive', component: ReceiveComponent},
  { path: 'washing', component: WashingComponent},
  { path: 'past', component: PastComponent},
  { path: 'search-result', component: SearchResultComponent},
  { path: 'search-result/unavailable', component: UnavailableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
