import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent {
  offers = [
    {
      image: 'https://images-ext-1.discordapp.net/external/SXDPnJQldxq5QL3Pj5nubsJdzRaxN1eg3BkrRgDHxzw/%3Fw%3D2000/https/img.freepik.com/foto-gratis/vista-frontal-vasos-cerveza-trigo_23-2148755010.jpg?width=418&height=586',
      title: 'Oferta 1',
      description: 'Descripción de la oferta 1',
      price: '$XX.XX',
      expirationDate: 'DD/MM/AAAA'
    },
    {
      image: 'https://www.cervecerianacional.ec/sites/g/files/phfypu1506/f/styles/353x353/public/201805/Foto-bud-1.jpg?itok=67t80hoe',
      title: 'Oferta 2',
      description: 'Descripción de la oferta 2',
      price: '$XX.XX',
      expirationDate: 'DD/MM/AAAA'
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/5653a0dce4b01732d2862a3d/1476456545017-8G9KGMRNC7HC92V4253E/image-asset.jpeg',
      title: 'Oferta 3',
      description: 'Descripción de la oferta 3',
      price: '$XX.XX',
      expirationDate: 'DD/MM/AAAA'
    }
    // puedes agregar más ofertas aquí
  ];


  constructor() { }

  ngOnInit() {
  }

  editOffer(offer) {
    // lógica para editar oferta
  }

  deleteOffer(offer) {
    // lógica para eliminar oferta
  }

}
