import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-rutas',
  templateUrl: './list-rutas.component.html',
  styleUrls: ['./list-rutas.component.css']
})
export class ListRutasComponent  implements OnInit {
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 8
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }



}
