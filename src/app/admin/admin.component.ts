import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from '../server-services.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isAdmin: boolean = false;
  url: string;

  constructor(private serverServices: ServerServicesService,
              private router: Router) { }

  ngOnInit() {
    // this.serverServices.value_.next(this.router.url);

    // this.serverServices.navUrl$.subscribe(url => {
    //   this.url = url;
    //   console.log('this.url: ', this.url);
    // });
  }

}
