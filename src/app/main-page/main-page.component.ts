import { Component, AfterViewInit } from '@angular/core';

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
import { DataService, MySharedService } from '../core/data.service';
import { forEach } from '@angular/router/src/utils/collection';

// import { auth } from 'firebase';


// import {Cart} from "../Models/Cart.model";

// class CartList {
//   constructor(public PID, ) {
//    };
// }


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {

  Product: any = [];
 // public cart: AngularFireList<CartList[]>;
  cart = [];

  constructor(
    public db: AngularFireDatabase,
    public auth: AuthService,
    public router: Router,
    public share: MySharedService,
    // tslint:disable-next-line:variable-name
    public _dataService: DataService
  ) {
    this._dataService.get('Products.json').subscribe((response: any) => {
      // tslint:disable-next-line:forin
      for (const i in response) {
        this.Product.push(response[i]);
      }
      console.log(this.Product);
    }, error => {
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.auth.isLoggedIn) {
        if (JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('user')).uid)) != null) {
          this.cart = JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('user')).uid));
          this.share.updateMessage(this.cart);
        }
        console.log(this.cart);
      }
    }, 0);
  }
  AddtoCart(item: any) {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/customer']);
    } else {
      let flag = 0;
      if (this.cart != null) {
        for (const obj of this.cart) {
          if (obj.Name === item.Name) {
          alert('Products already in the cart, please choose another product. Best regards');
          this.share.updateMessage(this.cart);
          flag = 1;
          break;
        } else {
        }
     }

      }
      if (flag === 0) {
      this.cart.push(item);
      this.share.updateMessage(this.cart);
      localStorage.setItem(this.auth.userData.uid, JSON.stringify(this.cart));
      alert(item.Name + ' has been added to the cart');
     }
      }
    console.log(this.cart);
    }
}




