import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([10.762622, 106.660172], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var searchLayer = L.layerGroup().addTo(map);
    //... adding data in searchLayer ...
    map.addControl( new L.Control.Search({layer: searchLayer}) );
    //searchLayer is a L.LayerGroup contains searched markers
  }

}
