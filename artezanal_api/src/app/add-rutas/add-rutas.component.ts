import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rutas',
  templateUrl: './add-rutas.component.html',
  styleUrls: ['./add-rutas.component.css']
})
export class AddRutasComponent implements OnInit {

  routeForm: FormGroup;
  routes: any[] = [];
  imagePath: any = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.routeForm = this.fb.group({
      routeName: ['', Validators.required],
      routeDistance: ['', Validators.required],
      routeDifficulty: ['', Validators.required],
      routeDescription: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.routeForm.valid) {
      this.routes.push(this.routeForm.value);
      this.routeForm.reset();
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

  deleteRoute(index) {
    this.routes.splice(index, 1);
  }
}
