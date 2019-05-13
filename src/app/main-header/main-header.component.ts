import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from 'src/app/server-services.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private serverServices: ServerServicesService) { }
  value: string;
  ngOnInit() {
    
  }
  sendSearch(text: string) : void {
    this.serverServices.setSearchValue(text);
  }
  searchForm = new FormGroup({
    searchtext : new FormControl(''),
  });

  onSubmit() {
    console.log(this.searchForm.value);
  }
}
