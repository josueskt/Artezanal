import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RutaService } from './rutaService';

declare const google: any;

@Component({
  selector: 'app-list-sitios',
  templateUrl: './list-sitios.component.html',
  styleUrls: ['./list-sitios.component.css']
})
export class ListSitiosComponent implements OnInit {
  rutaForm: FormGroup;
  map: google.maps.Map;
  marker: google.maps.Marker;

  constructor(private rutaService: RutaService, private formBuilder: FormBuilder) {
    this.rutaForm = this.formBuilder.group({
      longitud: [''],
      latitud: [''],
      nombre: [''],
      informacion: [''],
      logo: ['']
    });
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    const mapOptions: google.maps.MapOptions = {

      center: { lat: -0.2885903116946687, lng: -78.54273308713796 },
      zoom: 8
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Agregar evento de clic al mapa
    this.map.addListener('click', (event: google.maps.KmlMouseEvent) => {
      // Obtener las coordenadas del evento de clic
      const latitude = event.latLng.lat();
      const longitude = event.latLng.lng();

      // Asignar los valores al formulario
      this.rutaForm.patchValue({
        latitud: latitude,
        longitud: longitude
      });

      // Eliminar el marcador existente (si lo hay)
      if (this.marker) {
        this.marker.setMap(null);
      }

      // Crear un nuevo marcador en la posición del clic
      this.marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map
      });
    });
  }

  enviarFormulario() {
    const ruta = {
      longitud: this.rutaForm.value.longitud,
      latitud: this.rutaForm.value.latitud,
      nombre: this.rutaForm.value.nombre,
      informacion: this.rutaForm.value.informacion,
      logo: this.rutaForm.value.logo
    };

    // Llamar al servicio para insertar la ruta
    this.rutaService.insertarRuta(ruta).subscribe(
      () => {
        console.log('Datos insertados exitosamente');
        // Realizar acciones adicionales después de la inserción exitosa
      },
      (error) => {
        console.error('Error al insertar datos:', error);
        // Manejar el error de inserción
      }
    );
  }
}
