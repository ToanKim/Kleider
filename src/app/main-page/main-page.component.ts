import { Component } from '@angular/core';

//database
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import {FirebaseListObservable } from '@angular/fire'
import { FirebaseApp } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { realpath } from 'fs';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { Cart } from '../interface/cart';

// import { auth } from 'firebase';


// import {Cart} from "../Models/Cart.model";

class CartList {
  constructor(public PID) { };
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  Product: any[];
  public cart: AngularFireList<CartList[]>;

  public router: Router;

  private cartCount = 0;
  // public auth: AuthService;
  // private filter = ''; filter 

  constructor(
    public db: AngularFireDatabase,
    public auth: AuthService
  ) {
    //product
    db.list('/Vu-test').valueChanges().subscribe(Product => {
      this.Product = Product;
    })

    //  db.list('/user-cart').snapshotChanges().subscribe( cart => {
    //    this.cart[0] = cart;
    //  })  
  };

  AddtoCart(PID: number) {
    console.log(this.auth);
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/customer'])
    } else {
      let productCart = new Array();
      const currentCart = JSON.parse(localStorage.getItem(`${this.auth.userData.uid}`));
      if (currentCart !== null) {
        productCart = currentCart.productID;
      }

      if (productCart.includes(PID)) {
        alert('You already have this product in cart')
      } else {
        //  console.log(productCart);
        productCart.push(PID);
        const product: Cart = {
          productID: productCart
        }
        localStorage.setItem(`${this.auth.userData.uid}`, JSON.stringify(product));
      }
    }
    // alert("Product " + productCart + " is added.");
  }
}



