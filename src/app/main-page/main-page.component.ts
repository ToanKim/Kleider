import { Component, OnInit } from '@angular/core';

//database
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  Product: any[];
 

  constructor(db: AngularFireDatabase){

    //product
    db.list('/Vu-test/product1').valueChanges().subscribe(Product => {
      this.Product = Product;
      console.log(this.Product[0]);
    })

    db.list('/Vu-test').valueChanges().subscribe(Product => {
      this.Product = Product;
      console.log(this.Product[1]);
    })

    db.list('/Vu-test').valueChanges().subscribe(Product => {
      this.Product = Product;
      console.log(this.Product[2]);
    })

    db.list('/Vu-test').valueChanges().subscribe(Product => {
      this.Product = Product;
      console.log(this.Product[3]);
    })

    db.list('/Vu-test').valueChanges().subscribe(Product => {
      this.Product = Product;
      console.log(this.Product[4]);
    })

    db.list('/Vu-test').valueChanges().subscribe(Product => {
      this.Product = Product;
      console.log(this.Product[5]);
    })
  }
}
