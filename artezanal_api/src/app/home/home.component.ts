import { Component, OnInit } from '@angular/core';
import { Home_serviciosService } from './home_servicios.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';

import { ruta_model } from './../models/ruta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombreUsuario: string;
  token = localStorage.getItem('token');

  constructor(private rutas: Home_serviciosService ) {


  }

  games:any

  ngOnInit() {


    console.log(this.token);

    this.rutas.getRutas().subscribe(

      res => {
        this.games =res
        console.log(this.games)
      },
      err => console.log(err),

    );

  };

}


