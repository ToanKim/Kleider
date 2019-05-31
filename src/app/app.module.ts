import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ShippingComponent } from './shipping/shipping.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CustomerComponent } from './customer/customer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './core/auth.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { ServerServicesService } from 'src/app/server-services.service';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UnavailableComponent } from './search-result/unavailable/unavailable.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { Product7Component } from './product7/product7.component';
import { AdminComponent } from './admin/admin.component';
import { DataService, MySharedService } from './core/data.service';
import { OrderComponent } from './order/order.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    NavBarComponent,
    FooterComponent,
    ShippingComponent,
    ShoppingCartComponent,
    MainPageComponent,
    AboutPageComponent,
    SearchResultComponent,
    ProductInfoComponent,
    AboutPageComponent,
    CustomerComponent,
    SupportComponent,
    ChooseSizeComponent,
    MaterialComponent,
    FeeComponent,
    ReceiveComponent,
    WashingComponent,
    PastComponent,
    UnavailableComponent,
    Product2Component,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component,
    ShoppingGuideComponent,
    BankComponent,
    PayComponent,
    Product7Component,
    AdminComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AutocompleteLibModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  providers: [
    ServerServicesService,
    AuthService, MySharedService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
