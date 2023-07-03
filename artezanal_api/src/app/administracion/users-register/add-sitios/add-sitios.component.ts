import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-sitios',
  templateUrl: './add-sitios.component.html',
  styleUrls: ['./add-sitios.component.css']
})
export class AddSitiosComponent {


  onSubmit(form: NgForm) {
    console.log(form.value);
    // Aquí puedes enviar los datos del formulario a tu servicio o API
  }
}
