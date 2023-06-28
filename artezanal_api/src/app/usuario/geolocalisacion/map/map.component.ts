import { Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

    latitude = -1.831239; // Latitud de Londres
    longitude = -78.183406;
    public rutaPuntos = [
      { latitude: -0.2295, longitude: -78.5249 },  // Punto 1
      { latitude: -0.9653, longitude: -80.7129 },  // Punto 2
      { latitude: -1.8312, longitude: -78.1834 },  // Punto 3
      { latitude: -2.9043, longitude: -79.0027 },  // Punto 4
      { latitude: -3.4526, longitude: -79.9358 },  // Punto 5
    ];


}
