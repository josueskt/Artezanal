import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapRoutService } from './../servicios/map-rout.service';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
    `
    .rectangulo-con-punta {
  position: relative;
  width: 80%;
  height:50px; /* Ajusta la altura según tus necesidades */
  margin: 0 15px;
  background-color: #8B4513; /* Color café */
  color: #fff;
}

.rectangulo-con-punta::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-right: 25px solid antiquewhite; /* Color blanco */
  transform: rotate(360deg);
  transform-origin: top right;
}
.ruta{
  border-radius: 5px;
  border: 3px solid black ;
}

    #map {

      height: 500px;
      width: 100%;
      border-radius: 2%;
      border: 2px solid black
    }
    * {
      margin: 0;
      padding: 0;
    }
    .targeta{


    }
    .targetas{

      border-radius: 10px;
      margin: 10px 15%;
      padding: 5px;
    }
    `
  ]
})
export class MapComponent implements OnInit {
  selectedPoint: any;
  miRuta: any = {
    ruta: [],
    result: []
  };

  constructor(private mapas: MapRoutService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id_a = params.get('id');
      this.mapas.getRutas(id_a).subscribe(
        res => {
          this.miRuta = res;
          console.log(this.miRuta.ruta);
          this.initMap();
        },
        err => console.log(err)
      );
    });
  }

  initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -0.300848, lng: -78.564713 },
      zoom: 10
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    directionsRenderer.setOptions({
      polylineOptions: {
        strokeColor: 'green'
      }
    });

    const startLocation = new google.maps.LatLng(this.miRuta.result[0].latitude, this.miRuta.result[0].longitud);
    const endLocation = new google.maps.LatLng(
      this.miRuta.result[this.miRuta.result.length - 1].latitude,
      this.miRuta.result[this.miRuta.result.length - 1].longitud
    );

    const waypoints = [];
    for (let i = 1; i < this.miRuta.result.length - 1; i++) {
      const point = new google.maps.LatLng(this.miRuta.result[i].latitude, this.miRuta.result[i].longitud);
      waypoints.push({
        location: point,
        stopover: true
      });
    }

    const request = {
      origin: startLocation,
      destination: endLocation,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(response);
      }
    });

    this.miRuta.result.forEach((point) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(point.latitude, point.longitud),
        map: map,
        title: point.nombre
      });

      marker.addListener('click', () => {
        this.selectedPoint = point;
      });
    });
  }
}
