import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent {
  conductores = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      foto: 'https://lastfm.freetls.fastly.net/i/u/ar0/d01a2fa285488359147cac52d66f4a3e.jpg',
      correo: 'juan@correo.com',
      placa: 'XYZ123',
      asientos: 4,
      marca: 'Toyota'
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'González',
      foto: 'https://lastfm.freetls.fastly.net/i/u/ar0/d01a2fa285488359147cac52d66f4a3e.jpg',
      correo: 'maria@correo.com',
      placa: 'ABC789',
      asientos: 5,
      marca: 'Honda'
    },

    // Agrega más conductores aquí según sea necesario
  ];

  constructor(private router: Router) { }

  navegarVehiculos(idConductor: number) {
    this.router.navigate(['/vehiculos', idConductor]);
  }
}
