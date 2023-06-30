import { Injectable } from '@angular/core';
import { Pints, ruta } from 'src/app/models/pints';

@Injectable({
  providedIn: 'root'
})
export class MapRoutService {

   points: Pints[] = [
    { name: 'uno', image:'https://i.pinimg.com/originals/20/0a/13/200a13b31930e0e15bbd38796ea6e65e.jpg', lat: -0.300848, lng: -78.564713 },
    { name: 'dos', lat: -0.310210, lng: -78.563352 },
    { name: 'tes', lat: -1.310210, lng: -78.563352 }

  ];

   miRuta: ruta = {
    nombre: 'Mi ruta',
    imagen: 'ruta.jpg',
    puntos: this.points
  };

}
