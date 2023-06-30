import { Component, OnInit } from '@angular/core';


import { MapRoutService } from '../servicios/map-rout.service';
import { ruta } from 'src/app/models/pints';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
    `
    #map {
      height: 70%;
      width: 100%;
    }
    * {
      margin: 0;
      padding: 0;
    }
    `
  ]
})
export class MapComponent implements OnInit {
  selectedPoint: any;
  constructor(private map:MapRoutService){
    this.miRuta = this.map.miRuta;

  }

   miRuta: ruta = {
    nombre: '',
    imagen: '',
    puntos: []
  };

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -0.300848, lng: -78.564713 },
      zoom: 10
    });



    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(map);
    directionsRenderer.setOptions({
      polylineOptions: {
        strokeColor: 'green'
      }
    });

    const request = {
      origin: new google.maps.LatLng(this.miRuta.puntos[0].lat, this.miRuta.puntos[0].lng),
      destination: new google.maps.LatLng(this.miRuta.puntos[1].lat, this.miRuta.puntos[1].lng),
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(response);
      }
    });

    this.miRuta.puntos.forEach((point) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(point.lat, point.lng),
        map: map
      });

      marker.addListener('click', () => {
        this.selectedPoint = point;
      });
    });
  }
}
