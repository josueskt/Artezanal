import { Component, OnInit } from '@angular/core';
import { get_sites } from './getsitios.service';

import { crear_ruta } from './crear_ruta.service';

@Component({
  selector: 'app-add-rutas',
  templateUrl: './add-rutas.component.html',
  styleUrls: ['./add-rutas.component.css']
})
export class AddRutasComponent implements OnInit {
  constructor(private get_sitios: get_sites, private crear_rut: crear_ruta) {

  }
  //esto es back  id: number = null;
  sitios: number[] = [];
  games: any
  rutas: any[] = [];

  nombreRuta: string;
  precio: number;
  duracion: string;
  informacionAdicional: string;

  ngOnInit() {


    this.get_sitios.getRutas().subscribe(

      res => {
        this.games = res
        console.log(this.games)

      },
      err => console.log(err),

    );
  }

  agregar_sitio(id: number) {
    const sitio = this.games.find(s => s.id_siitos === id);
    if (sitio && !sitio.agregado) {
      sitio.agregado = true;
      this.sitios.push(id);
    }
    console.log(this.sitios);
  }
  eliminar_sitio(id: number) {
    const index = this.sitios.indexOf(id);
    if (index !== -1) {
      this.sitios.splice(index, 1);
      const sitio = this.games.find(s => s.id_siitos === id);
      if (sitio) {
        sitio.agregado = false;
      }
    }
    console.log(this.sitios);
  }



  crear_ruta() {
    if (this.nombreRuta && this.precio && this.duracion && this.informacionAdicional && this.sitios.length > 2) {
      const ruta = {
        nombreRuta: this.nombreRuta,
        precio: this.precio,
        duracion: this.duracion,
        informacionAdicional: this.informacionAdicional
      };
      const ar = this.sitios;


      this.crear_rut.enviarRuta( ruta, ar ).subscribe(
        (response) => {
          console.log('Ruta creada:', response);

        },
        (error) => {
          console.error('Error al crear la ruta:', error);
        }
      );
      window.location.reload();
      this.nombreRuta = '';
      this.precio = null;
      this.duracion = '';
      this.informacionAdicional = '';




    }


  }





}


