import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from '../server-services.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  providers: [ ServerServicesService ],
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private serverServices: ServerServicesService) { }

  ngOnInit() {
  }

  // value_ = '';
  // onKey(value: string) { this.value_ = value; };

  sendSearch(text: string) {
    text = text.trim();
    if (!text) { return; }
    this.serverServices.sendSearchText(text)
      .subscribe(text => console.log(text));
  }
}
