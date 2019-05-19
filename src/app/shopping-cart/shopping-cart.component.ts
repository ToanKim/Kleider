import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { min } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import { print } from 'util';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  count = 1;
  cart;
  a;
  Product: any[];

  constructor(db: AngularFireDatabase){

    //product
    db.list('/Vu-test').valueChanges().subscribe(Product => {
      this.Product = Product;
      })

     this.cart = db.list('/user-cart');
    }
    ngOnInit() {
    }
    
    add(){
      this.count = this.count + 1;
      this.a = ( this.Product[0].Price * this.count);
      print(this.a);
      
    }
  
    sub(){
      if (this.count > 0 ) 
      {
        this.count = this.count - 1;
        this.a = ( this.Product[0].Price * this.count);
        print(this.a);
      }
      else
      {
        this.count = 0;
        this.a = 0;
        print (this.a) ;
      }
    }
}
  
