import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { AngularFireDatabase } from 'angularfire2/database';
>>>>>>> master

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
<<<<<<< HEAD

  constructor(){
=======
  product: any[];
  constructor(db: AngularFireDatabase){
    db.list('Product').valueChanges()
      .subscribe(product => 
        {this.product = product;
          console.log(this.product);
        });
>>>>>>> master
  }
}
