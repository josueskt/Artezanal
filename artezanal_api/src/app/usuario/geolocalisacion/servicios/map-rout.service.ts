import { Injectable } from '@angular/core';
import { Pints, ruta } from 'src/app/models/pints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapRoutService {



  api = 'http://localhost:3005/home';


constructor( private http:HttpClient) {

}








  getRutas( id:string ) {
    return this.http.get(`${this.api}/rutas/${id}`);
}

}
