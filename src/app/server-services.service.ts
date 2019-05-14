import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {

  constructor(private http: HttpClient,
              private router: Router) {

<<<<<<< HEAD
  sendSearchText_(text: string): Observable<string> {
    this.value = text;
    return this.http.post('search-result', text, {responseType: 'text'})
  };
=======
  }

  private value: string;
>>>>>>> master

  setSearchValue(text: string) : void {
    if (typeof text != 'undefined' && text) {
      this.value = text;
      // this.router.navigate(['search-result'],{replaceUrl:true});
      // console.log(this.router.navigate(['search-result'],{replaceUrl:true}));
    }
    else {
      this.value = 'non-sense';
    }
  }

  getSearchValue() : string {
    return this.value;
  }
}
