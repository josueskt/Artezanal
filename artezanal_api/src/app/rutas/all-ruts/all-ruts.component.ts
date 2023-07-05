import { Component, OnInit } from '@angular/core';
import { Home_serviciosService } from '../../home/home_servicios.service';

@Component({
  selector: 'app-all-ruts',
  templateUrl: './all-ruts.component.html',
  styleUrls: ['./all-ruts.component.css']

})
export class AllRutsComponent implements OnInit{
    nombreUsuario: string;
    constructor(private rutas: Home_serviciosService ) {

    }
    games:any

    ngOnInit() {

      this.rutas.getRutas().subscribe(

        res => {
          this.games =res
          console.log(this.games)
        },
        err => console.log(err),

      );

    }

  }

