import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerServicesService } from './server-services.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isAdmin: boolean = false;

  constructor(private router: Router,
              private serverServices: ServerServicesService,
              private route: Location) {}

  ngOnInit() {
    console.log(this.route.path());
    if (this.route.path().includes('admin'))
      this.isAdmin = true;
  }
}
