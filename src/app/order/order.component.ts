import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { DataService, MySharedService } from '../core/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  Product = [];
  sum = 0;

  constructor( public auth: AuthService,  public _dataService: DataService) { }

  ngOnInit() {
    this._dataService.get('order/' + JSON.parse(localStorage.getItem('user')).uid + '.json').subscribe((response: any) => {
      // tslint:disable-next-line:forin
        this.Product = response;
        if (this.Product == null) {
          alert('You have not placed any orders');
         window.location.href = '/homepage';
        }
        this.Product.forEach(obj => {
          this.sum += obj.Price;
        });
        this.sum += this.Product[0].Ship;
        console.log(this.Product);
    }, error => {
    });
  }
  cancel() {
    const today = new Date();
    const date = this.Product[0].CreatedDate.split('/');
    const trueday = parseInt(date[0]) + 5;
    const dateorder = new Date(date[2], date[1] - 1, trueday);
    if (today <= dateorder ) {
     this._dataService.delete('order/' + JSON.parse(localStorage.getItem('user')).uid + '.json', null, null).subscribe((response: any) => {
      // tslint:disable-next-line:forin
      alert('Cancel Order Success, You can continue shopping');
      window.location.href = '/homepage';
    }, error => {
    });
    } else {
      alert('Sorry, The order has been placed for more than 5 days, cannot be canceled');
    }
   
  }
}
