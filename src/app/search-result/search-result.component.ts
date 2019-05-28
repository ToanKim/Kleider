// import { Component, OnInit } from '@angular/core';
// import { ServerServicesService } from 'src/app/server-services.service';
// import { AngularFireDatabase } from 'angularfire2/database';

// @Component({
//   selector: 'app-search-result',
//   templateUrl: './search-result.component.html',
//   styleUrls: ['./search-result.component.css']
// })
// export class SearchResultComponent implements OnInit {

//   product: any[];
//   itemIsEnable = false;
//   value: string;
//   tmp: any[] = [];
//   imgLink: any[] = [];

//   constructor(private db: AngularFireDatabase,
//               private serverServices: ServerServicesService){

//   }
  
//   ngOnInit() {
//     this.value = this.serverServices.getSearchValue();
//     this.serverServices.setSearchValue(this.value);
//     if(this.value) {
//       this.db.list('Vu-test').valueChanges()
//       .subscribe(product => 
//         { this.product = product;
//           for (var i = 0; i < this.product.length; i++)
//           {
//             var tmpName = this.product[i].Name.toString().toLowerCase();
//             var tmpPID = this.product[i].PID.toString().toLowerCase();

//             if (tmpName.includes(this.value.toString().toLowerCase()) ||
//                 tmpPID.includes(this.value.toString().toLowerCase()))
//             {
//               this.tmp.push(this.product[i]);
//               this.itemIsEnable = true;
//               this.imgLink.push('/assets/images/' + (i+1).toString() + ".png");
//             }
//           }
//         });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from 'src/app/server-services.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { SWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core/src/metadata/ng_module';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  product: any[];
  itemIsEnable = false;
  value: any;

  constructor(private db: AngularFireDatabase,
              private serverServices: ServerServicesService,
              private router: Router){}
  
  ngOnInit() {
    this.serverServices.searchVal$.subscribe(text => {
      this.value = text;
      if (this.value) {
        this.productSearch();
      }
    });
  }

  productSearch() {
    this.db.list('Products').valueChanges()
    .subscribe(product =>
      { 
        this.product = product;
        this.searchLoop(this.product);
      });
  }

  searchLoop(product: any[]) {
    var len = product.length;
    this.product = [];
    for (var i = 0; i < len; i++)
    {
      var tmpName = product[i].Name.toString().toLowerCase();
      var tmpPID = product[i].PID.toString().toLowerCase();
      var tmpVal = this.value.toString().toLowerCase();
      if (tmpName.includes(tmpVal) || tmpPID.includes(tmpVal))
      {
        this.product.push(product[i]);
        this.itemIsEnable = true;
      }
    }
    if (!this.itemIsEnable) {
      this.router.navigate(['search-result/unavailable']);
    }
  }
}
