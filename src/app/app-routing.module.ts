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

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
  { path: 'shipping', component: ShippingComponent, canActivate: [AuthGuard]},
  { path: 'pro-inf', component: ProductInfoComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'homepage', component: MainPageComponent},
  { path: 'support', component: SupportComponent},
  { path: 'choose-size', component: ChooseSizeComponent},
  { path: 'material', component: MaterialComponent},
  { path: 'fee', component: FeeComponent},
  { path: 'receive', component: ReceiveComponent},
  { path: 'washing', component: WashingComponent},
  { path: 'past', component: PastComponent},
  { path: 'search-result', component: SearchResultComponent  },
  { path: 'pay', component: PayComponent  },
  { path: 'shopping-guide', component: ShoppingGuideComponent  },
  { path: 'bank', component: BankComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
