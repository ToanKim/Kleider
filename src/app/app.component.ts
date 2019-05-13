import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  product: any[];
  constructor(db: AngularFireDatabase){
    db.list('Product').valueChanges()
      .subscribe(product => 
        {this.product = product;
          console.log(this.product);
        });
  }
}
