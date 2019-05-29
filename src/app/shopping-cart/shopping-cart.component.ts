import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { min } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { print } from 'util';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

declare global { }


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})



export class ShoppingCartComponent implements OnInit {
  count = 1;
  cart;
  defaultQuantity = 1;
  Product = [];
  sum = 0;

  constructor(public db: AngularFireDatabase, public auth: AuthService, public router: Router,) {
    this.cart = db.list('/user-cart');
  }
  ngOnInit() {
  this.Product = JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('user')).uid));
  this.Product.forEach(obj => {
    this.sum += obj.Price;
  });
  }

  // add(index) {
  //   this.Product[index][1]++;
  // }

  sub(item) {
    const index = this.Product.indexOf(item);
    this.Product.splice(index, 1);
    this.sum = 0 ;
    this.Product.forEach(obj => {
      this.sum += obj.Price;
    });
    localStorage.setItem(JSON.parse(localStorage.getItem('user')).uid, JSON.stringify(this.Product));
  }
  note(note) {
    this.Product.forEach(obj => {
      obj.Note = note;
    });
    localStorage.setItem(JSON.parse(localStorage.getItem('user')).uid, JSON.stringify(this.Product));
    this.router.navigate(['/shipping']);
  }

}

