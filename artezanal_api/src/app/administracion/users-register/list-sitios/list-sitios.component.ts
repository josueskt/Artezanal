import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RutaService } from './rutaService';

@Component({
  selector: 'app-list-sitios',
  templateUrl: './list-sitios.component.html',
  styleUrls: ['./list-sitios.component.css']
})
export class ListSitiosComponent {

  rutaForm: FormGroup;

  constructor(private rutaService: RutaService, private formBuilder: FormBuilder) {
    this.rutaForm = this.formBuilder.group({
      longitud: [''],
      latitud: [''],
      nombre: [''],
      informacion: [''],
      logo: ['']
    });
  }

  enviarFormulario() {
    // Obtener los valores del formulario y construir el objeto de ruta
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
