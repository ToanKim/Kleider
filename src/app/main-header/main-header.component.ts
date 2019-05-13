import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from 'src/app/server-services.service';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
=======
import { FormControl, FormGroup } from '@angular/forms';
>>>>>>> master

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
<<<<<<< HEAD
=======
  }
  searchForm = new FormGroup({
    searchtext : new FormControl(''),
  });

  onSubmit() {
    console.warn(this.searchForm.value);
>>>>>>> master
  }

  // sendSearch(text: string) {
  //   text = text.trim();
  //   if (!text) { return; }
  //   this.serverServices.sendSearch(text)
  //     .subscribe(text => console.log(text));
  // }
}
