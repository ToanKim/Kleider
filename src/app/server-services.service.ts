import { Injectable } from '@angular/core';
<<<<<<< HEAD
// import { HttpClient } from 'selenium-webdriver/http';
=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> master

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {

<<<<<<< HEAD
  private value = '123s';

  setSearchValue(text: string) : void {
    if (text) {
      this.value = text;
      console.log(this.value);
    }
    else {
      this.value = 'non-sense';
      console.log(this.value);
=======
  constructor(private http: HttpClient) {

  }

  private value: string;

  setSearchValue(text: string) : void {
    if (text) {
      this.value = text;
    }
    else {
      this.value = 'non-sense';
>>>>>>> master
    }
  }

  getSearchValue() : string {
<<<<<<< HEAD
    console.log(this.value);
=======
    // console.log(this.value);
>>>>>>> master
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
