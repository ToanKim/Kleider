import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {

  constructor(private http: HttpClient) { }
  value = '';

  sendSearchText_(text: string): Observable<string> {
    this.value = text;
    return this.http.post('search-result', text, {responseType: 'text'})
  };

  sendSearchText(text: string): Observable<string> {
    text = text.trim();
    this.value = text;
    // const options = text ? {params: new HttpParams().set('text', text)} : {};
    return this.http.get('search-result', {responseType:'text'})
      .pipe();
  }
  getSearchText(): Observable<string> {
    return this.http.get<string>('search-result')
      .pipe();
  }
}
