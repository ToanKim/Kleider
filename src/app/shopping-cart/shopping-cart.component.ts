import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { min } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import { print } from 'util';
import { AuthService } from '../core/auth.service';

declare global{}


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})



export class ShoppingCartComponent implements OnInit {
  count = 1;
  cart;
  defaultQuantity = 1;
  Product = new Array();

  

  constructor(public db: AngularFireDatabase, public auth: AuthService){

    //product
    

     this.cart = db.list('/user-cart');
    }
    ngOnInit() {
      this.db.list('/Vu-test').valueChanges().subscribe(productList => {
        const uid = JSON.parse(localStorage.getItem('user')).uid;
        var cartStorage = JSON.parse(localStorage.getItem(`${uid}`)).productID;
        
      this.cart = this.db.list('/user-cart');

        cartStorage.forEach(item => {
          this.Product.push([productList[item], this.defaultQuantity]);
        });
      // this.cart.forEach(item => {
      //   this.cart.push(this.defaultQuantity, )
      // });
      // var quan = 
      })
    }


    add(index){
      this.Product[index][1]++;
    }
  
    sub(index){
      if (this.Product[index][1] > 1 ) 
      {
        this.Product[index][1]--;
      }
    }

    convertToLink(index) {
      return 'assets/images/' + (index+1).toString() + '.png';
    }
}
  
