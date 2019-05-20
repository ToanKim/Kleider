import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from 'src/app/server-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private serverServices: ServerServicesService,
              private router: Router) { }
  value: string;
  ngOnInit() {
    // this.searchForm = new FormGroup({
    //   'searchtext' : new FormControl(this.value, [
    //     Validators.required,
    //     Validators.maxLength(2)
    //   ])
    // });
  }

  // get searchtext() {
  //   return this.searchForm.get('searchtext');
  // }

  sendSearch(text: string) : void {
    if (text) {
      this.serverServices.setSearchValue(text.trim());
      this.value = text.trim();
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
}
