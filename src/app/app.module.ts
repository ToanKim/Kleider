import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ShippingComponent } from './shipping/shipping.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AboutPageComponent } from './about-page/about-page.component';

import { SearchResultComponent } from './search-result/search-result.component';
import { ServerServicesService } from 'src/app/server-services.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    NavBarComponent,
    FooterComponent,
    ShippingComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    MainPageComponent,
    AboutPageComponent,

    SearchResultComponent,
    ProductInfoComponent,
    AboutPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ServerServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
