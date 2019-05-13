import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {

  constructor(private http: HttpClient) {

  }

  private value: string;

  setSearchValue(text: string) : void {
    if (text) {
      this.value = text;
    }
    else {
      this.value = 'non-sense';
    }
  }

  getSearchValue() : string {
    // console.log(this.value);
    return this.value;
  }
}
