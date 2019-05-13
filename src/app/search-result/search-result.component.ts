import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from 'src/app/server-services.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private serverServices: ServerServicesService) {

  }

  private value: string;
  ngOnInit() {
    this.value = this.serverServices.getSearchValue();
  }
}
