import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from 'src/app/server-services.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private serverServices: ServerServicesService,
              private router: Router,
              private location: Location) { }
  value: string;
  ngOnInit() {
    
  }
  sendSearch(text: string) : void {
    if (text) {
      this.serverServices.setSearchValue(text.trim());

      this.router.navigateByUrl(
        '/homepage',
        {skipLocationChange: true}).then(()=>
          this.router.navigate(['/search-result'])
      );
    }
  }
  searchForm = new FormGroup({
    searchtext : new FormControl(''),
  });

  onSubmit() {
    // console.log("this.searchForm: ", this.searchForm);
    // console.log("this.searchForm.value: ", this.searchForm.value);
    // console.log("this.searchForm.value.searchtext: ", this.searchForm.value.searchtext);
  }

  // sendSearch(text: string) {
  //   text = text.trim();
  //   if (!text) { return; }
  //   this.serverServices.sendSearch(text)
  //     .subscribe(text => console.log(text));
  // }
}
