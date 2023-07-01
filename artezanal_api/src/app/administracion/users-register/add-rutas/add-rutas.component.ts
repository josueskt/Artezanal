import { Component } from '@angular/core';

@Component({
  selector: 'app-add-rutas',
  templateUrl: './add-rutas.component.html',
  styleUrls: ['./add-rutas.component.css']
})
export class AddRutasComponent {
  routeName = '';
  routeDistance = '';
  routeDifficulty = '';
  routeDescription = '';
  displayImage = '';
  routes = [];

  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.displayImage = reader.result as string;
      };
    }
  }

  onSubmit() {
    if (this.routeName && this.routeDistance && this.routeDifficulty && this.routeDescription) {
      this.routes.push({
        routeName: this.routeName,
        routeDistance: this.routeDistance,
        routeDifficulty: this.routeDifficulty,
        routeDescription: this.routeDescription
      });
      this.routeName = '';
      this.routeDistance = '';
      this.routeDifficulty = '';
      this.routeDescription = '';
    }
  }

  deleteRoute(route) {
    const index = this.routes.indexOf(route);
    if (index > -1) {
      this.routes.splice(index, 1);
    }
  }
}
