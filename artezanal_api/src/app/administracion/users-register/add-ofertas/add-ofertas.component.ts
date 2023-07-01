import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ofertas',
  templateUrl: './add-ofertas.component.html',
  styleUrls: ['./add-ofertas.component.css']
})
export class AddOfertasComponent implements OnInit {

  offerForm: FormGroup;
  imagePath: any = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.offerForm = this.fb.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      originalPrice: ['', Validators.required],
      offerPrice: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.offerForm.valid) {
      console.log(this.offerForm.value);
      // Aquí puedes enviar los datos del formulario a tu servidor
      this.offerForm.reset();
    }
  }

  onImageChange(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => this.imagePath = reader.result;
        reader.readAsDataURL(file);
    }
  }
}
