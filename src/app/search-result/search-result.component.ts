import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from 'src/app/server-services.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  product: any[];
  enableItem: boolean;
  constructor(private db: AngularFireDatabase,
              private serverServices: ServerServicesService){
  //   if (this.product[0].Name === this.value) {
  //     this.product = this.product[0];
  //     this.enableItem = true;
  //   }
  //   console.log('this.value: ', this.value);
  //   console.log('this.product[0]: ',this.product);
  //   console.log('this.enableItem: ', this.enableItem);
  }
  
  private value: string;
  ngOnInit() {
    this.value = this.serverServices.getSearchValue();
    console.log('this.value: ',this.value);
    this.db.list('Vu-test').valueChanges()
      .subscribe(product => 
        {this.product = product;
          console.log('this.product[0]: ', this.product[0]);
        });
    console.log('this.value: ', this.value);
  }
}
