import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-rutas',
  templateUrl: './list-rutas.component.html',
  styleUrls: ['./list-rutas.component.css']
})
export class ListRutasComponent implements OnInit {

  routes = [
    {
      name: 'Ruta 1',
      start: 'Ciudad A',
      end: 'Ciudad B',
      description: 'Descripción de la Ruta 1. Esta ruta incluye los destinos A, B y C.',
      info: 'Información adicional sobre la Ruta 1'
    },
    {
      name: 'Ruta 2',
      start: 'Ciudad C',
      end: 'Ciudad D',
      description: 'Descripción de la Ruta 2. Esta ruta incluye los destinos D, E y F.',
      info: 'Información adicional sobre la Ruta 2'
    },
    {
      name: 'Ruta 3',
      start: 'Ciudad E',
      end: 'Ciudad F',
      description: 'Descripción de la Ruta 3. Esta ruta incluye los destinos G, H y I.',
      info: 'Información adicional sobre la Ruta 3'
    },
    // puedes agregar más rutas aquí
  ];

  constructor() { }

  ngOnInit() {
  }

  editRoute() {
    // lógica para editar ruta
  }

  deleteRoute() {
    // lógica para eliminar ruta
  }
}
