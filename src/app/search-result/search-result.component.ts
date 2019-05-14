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
  constructor(private db: AngularFireDatabase,
              private serverServices: ServerServicesService){
    db.list('Vu-test').valueChanges()
      .subscribe(product => 
        {this.product = product;
          console.log(this.product);
        });
  }

  private value: string;
  ngOnInit() {
    this.value = this.serverServices.getSearchValue();
  }
}
