import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  keyword = 'name';
  data = [
     {
       id: 1,
       name: 'How can I choose the Shirt Size?',
       url: 'choose-size'
     },
     {
       id: 2,
       name: 'What is shirt material?',
       url: 'material'
     },
     {
      id: 3,
      name: 'How is the ship fee calculated?',
      url: 'fee'
    },
    {
      id: 4,
      name: 'How long can I receive the goods?',
      url: 'receive'
    },
    {
      id: 5,
      name: 'How can I pay for the order??',
      url: 'pay'
    },
    {
      id: 6,
      name: 'Instructions for washing clothes',
      url: 'washing'
    },
    {
      id: 7,
      name: 'Shopping guide',
      url: 'shopping-guide'
    },
    {
      id: 8,
      name: 'Past delivery time, why haven"t I received the goods yet?',
      url: 'past'
    },
    {
      id: 9,
      name: 'What bank accounts can I transfer to pay for my order on the Kleider?',
      url: 'bank'
    },
  ];
  link: any;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  selectEvent(item) {
    this.router.navigate(['/' + item.url]);
  }
  onenter(){
    this.router.navigate(['/' + this.link]);
  }
  change(val){
    setTimeout(() => {
      this.link = val.filteredList[0].url;
    }, 200);
  }
}
