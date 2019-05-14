import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import * as MapBoxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

import { AngularFireDatabase } from 'angularfire2/database';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2ltdG9hbjE5OTgiLCJhIjoiY2p2bmFuY2g0MWw5NjQzbXVsdnFhdm8xMiJ9.wFCCmFNXo5Nk6nTQexMyvQ';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: [
    './shipping.component.css'
  ],
  providers: [DatePipe]
})
export class ShippingComponent implements OnInit {
  distance = 0;
  cost = 0;
  total = 0;

  shippingDate: any;

  constructor(
    public router: Router,
    public db: AngularFireDatabase
  ) {
  }

  ngOnInit() {
    this.getProductCost();

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [106.65925258335005, 10.77309543631634],
      zoom: 16
    });

    const directions = new MapBoxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });

    map.addControl(directions, 'top-left');

    directions.setOrigin([106.65936, 10.77331]);
    directions.on('route', e => {
      const routes = e.route;
      this.distance = routes.map(r => r.distance);

      const tempDate = new Date();
      this.shippingDate = new Date((tempDate.setDate(tempDate.getDate() + Math.floor(Math.random() * 3))));
      
      this.cost = 10 * this.distance;
    });
  }

  backNav() {
    return this.router.navigate(['/cart']);
  }

  confirmNav() {
    if (this.distance === 0) {
      alert("You have to select a destination to Confirm");
    } else {
      alert('Thanks for buying');
      this.clearCart();
      return this.router.navigate(['/homepage']);
    }
  }

  clearCart() {
    let uid = JSON.parse(localStorage.getItem('user')).uid;
    this.db.object(`user-cart/${uid}`).remove();
  }

  getProductCost() {
    // console.log(this.auth.userData.uid);
    let uid = JSON.parse(localStorage.getItem('user')).uid;
    this.db.list(`user-cart/${uid}`).valueChanges()
      .subscribe( result => {
        for (let i = 0; i < result.length; i++) {
// tslint:disable-next-line: no-string-literal
          this.total += result[i]['Quantity'] * result[i]['Price'];
        }
      });
  }


}
