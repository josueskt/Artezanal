import { Component } from '@angular/core';

@Component({
  selector: 'app-list-rutas',
  templateUrl: './list-rutas.component.html',
  styleUrls: ['./list-rutas.component.css']

})
export class ListRutasComponent  {

  routes = [
    {
      name: 'Ruta 1',
      distance: '20$',
      description: 'Descripción de la Ruta 1. Esta ruta incluye los destinos A, B y C.',
      duration: '20min',
      image:''
    },

    // puedes agregar más rutas aquí
  ];





  editRoute() {
    // lógica para editar ruta
  }

  deleteRoute() {
    // lógica para eliminar ruta
  }
}
