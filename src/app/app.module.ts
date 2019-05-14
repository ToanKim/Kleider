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
import { SearchResultComponent } from './search-result/search-result.component';
import { CustomerComponent } from './customer/customer.component';

import { ServerServicesService } from './server-services.service';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './core/auth.service';

import { FormsModule } from '@angular/forms';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

    FormsModule,
  ],
  providers: [
    ServerServicesService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
