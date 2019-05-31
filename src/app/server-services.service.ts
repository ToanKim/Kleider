// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServerServicesService {

//   constructor(private http: HttpClient,
//               private router: Router) {

//   }

//   private value: string;

//   setSearchValue(text: string) : void {
//     if (typeof text != 'undefined' && text) {
//       this.value = text;
//       // this.router.navigate(['search-result'],{replaceUrl:true});
//       // console.log(this.router.navigate(['search-result'],{replaceUrl:true}));
//     }
//     else {
//       this.value = 'non-sense';
//     }
//   }

//   getSearchValue() : string {
//     return this.value;
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {

  constructor() {}

  private value: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchVal$: Observable<string> = this.value.asObservable();

  setSearchValue(text: string) : void {
    this.value.next(text);
    // console.log(this.value.getValue());
  }
}
