import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ProductDisplay } from '../Models/ProductDisplay.Model';

// import { ProductService } from '../Services/product.service';
// import { Product } from '../Models/Product.Model';
// import { IAlert } from '../Models/IAlert';
// import { SharedService } from '../Services/shared.service';
import { min } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  count = 1;
  constructor() { }

  ngOnInit() {
  }
  
  add() {
    this.count = this.count + 1;
  }

  sub() {
    if (this.count > 0 ) {
      this.count = this.count - 1;
    } else {
    this.count = 0;
    }
  }
}
