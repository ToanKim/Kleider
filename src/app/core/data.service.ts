import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private headers = new HttpHeaders();
  BASE_API = 'https://kleider-2f5b6.firebaseio.com/';
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient ) {
      this.headers = this.headers.set('Content-Type', 'application/json');
  }

  get(uri: string) {
    return this._http.get(this.BASE_API + uri, { headers: this.headers });
  }
  post(uri: string, data?: any) {
    return this._http.post(this.BASE_API + uri, data, { headers: this.headers });
  }
  put(uri: string, data?: any) {
    return this._http.put(this.BASE_API + uri, data, { headers: this.headers });
  }
  delete(uri: string, key: string, id: string) {
    return this._http.delete(this.BASE_API + uri + '/?' + key + '=' + id, { headers: this.headers });
  }
}
@Injectable()
export class MySharedService {
    private data = new BehaviorSubject('');
    currentData = this.data.asObservable();

    constructor() { }

    updateMessage(item: any) {
        this.data.next(item);
    }
  }
