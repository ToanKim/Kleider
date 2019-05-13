import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {

  constructor(private http: HttpClient) {

  }

  private value: string;

  setSearchValue(text: string) : void {
    if (typeof text != 'undefined' && text) {
      this.value = text;
    }
    else {
      this.value = 'non-sense';
    }
  }

  getSearchValue() : string {
    return this.value;
  }
}
