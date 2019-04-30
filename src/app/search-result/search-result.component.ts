import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from '../server-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-result',
  providers: [ ServerServicesService ],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private serverServices: ServerServicesService, private http: HttpClient) { }

  ngOnInit() {
  }
  value_ = this.serverServices.value;
  // onKey() { this.value_ = this.serverServices.value; }
  phpfile() {
    return this.http.post("http://localhost:4200/Kleider/api/search-result.php", this.value_);
  }
}
