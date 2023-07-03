import { Component } from '@angular/core';

@Component({
  selector: 'app-list-sitios',
  templateUrl: './list-sitios.component.html',
  styleUrls: ['./list-sitios.component.css']
})
export class ListSitiosComponent {
  selectedSite = '';
  sites = [
    {
      value: 'sitio1',
      img: 'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/12/mejores-bares-mexico-hankypankydf.jpg?ssl=1',
      name: 'Sitio 1',
      description: 'Descripción del sitio 1...',
      latitud: '',
      longitud:''
    },
    {
      value: 'sitio2',
      img: 'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/12/mejores-bares-mexico-hankypankydf.jpg?ssl=1',
      name: 'Sitio 2',
      description: 'Descripción del sitio 2...',
      latitud: '',
      longitud:''
    },
    {
      value: 'sitio3',
      img: 'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/12/mejores-bares-mexico-hankypankydf.jpg?ssl=1',
      name: 'Sitio 3',
      description: 'Descripción del sitio 2...',
      latitud: '',
      longitud:''
    },
    {
      value: 'sitio4',
      img: 'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2022/12/mejores-bares-mexico-hankypankydf.jpg?ssl=1',
      name: 'Sitio 4',
      description: 'Descripción del sitio 2...',
      latitud: '',
      longitud:''
    },

  ];

  selectSite(value: string) {
    this.selectedSite = value;
  }
}
