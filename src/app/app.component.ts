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
  url: string;

  constructor(private router: Router,
              private serverServices: ServerServicesService,
              private route: Location) {}

  ngOnInit() {
    this.url = this.route.path().slice(1)
    if (this.url == '~')
      this.isAdmin = true;
  }
}
