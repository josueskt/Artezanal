import { Injectable } from '@angular/core';
import {ruta_model} from '../models/ruta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Home_serviciosService {

api = 'http://localhost:3005/home'


constructor( private http:HttpClient) {

}
getRutas(){
    return this.http.get(`${this.api}`)
}

}
