import { Component } from '@angular/core';

//database
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  Product: any[];

  constructor(private db: AngularFireDatabase){
    db.list('Vu-test').valueChanges().subscribe(Product => {
      this.Product = Product;
    });
  }
}
