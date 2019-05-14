import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {
  value: any;
  constructor(private http: HttpClient,
              private router: Router) {}

  sendSearchText_(text: string): Observable<string> {
    this.value = text;
    return this.http.post('search-result', text, {responseType: 'text'})
  };

  setSearchValue(text: string) : void {
    if (typeof text !== 'undefined' && text) {
      this.value = text;
      // this.router.navigate(['search-result'],{replaceUrl:true});
      // console.log(this.router.navigate(['search-result'],{replaceUrl:true}));
    } else {
      this.value = 'non-sense';
    }
  }

  getSearchValue() : string {
    return this.value;
  }

  // sendSearchText_(text: string): Observable<string> {
  //   this.value = text;
  //   return this.http.post('search-result', text, {responseType:'text'})
  // };

  // sendSearchText(text: string): Observable<string> {
  //   text = text.trim();
  //   this.value = text;
  //   // const options = text ? {params: new HttpParams().set('text', text)} : {};
  //   return this.http.get('search-result', {responseType:'text'})
  //     .pipe();
  // }
  // getSearchText(): Observable<string> {
  //   return this.http.get<string>('search-result')
  //     .pipe();
  // }
}
