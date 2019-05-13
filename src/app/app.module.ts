import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AboutPageComponent } from './about-page/about-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


const config = {
  apiKey: 'AIzaSyD8E7lESXx4WbX7jukrfOBHeh8FqPZNyC4',
  authDomain: 'kleider-db.firebaseapp.com',
  databaseURL: 'https://kleider-db.firebaseio.com',
  projectId: 'kleider-db',
  storageBucket: 'kleider-db.appspot.com',
  messagingSenderId: '675678034815'
};

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
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
