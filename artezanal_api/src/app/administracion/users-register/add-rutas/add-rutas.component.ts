import { Component } from '@angular/core';
import { RutasService } from '../../../../../../back/servidor/src/rutas.service';
import { Ruta } from '../../../../../../back/servidor/src/ruta.interface';  // Recuerda ajustar la ruta de importación según corresponda

@Component({
  selector: 'app-add-rutas',
  templateUrl: './add-rutas.component.html',
  styleUrls: ['./add-rutas.component.css']
})
export class AddRutasComponent {
  routeName = '';
  routeDistance = '';
  routeDescription = '';
  routeDuration = '';
  routeDifficulty = '';  // Asegúrate de que esto esté definido en tu componente
  displayImage = '';

  constructor(private rutasService: RutasService) {}

  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files?.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.displayImage = reader.result as string;
      };
    }
  }

  onSubmit() {
    if (this.routeName && this.routeDistance && this.routeDuration && this.routeDescription && this.routeDifficulty) {
      const newRoute: Ruta = {
        routeName: this.routeName,
        routeDistance: this.routeDistance,
        routeDuration: this.routeDuration,
        routeDescription: this.routeDescription,
        routeImage: this.displayImage,
        routeDifficulty: this.routeDifficulty  // Asegúrate de agregarlo si es requerido
      };
      this.rutasService.addRuta(newRoute);
      this.routeName = '';
      this.routeDistance = '';
      this.routeDuration = '';
      this.routeDescription = '';
      this.routeDifficulty = '';
      this.displayImage = '';
    }
  }
}
