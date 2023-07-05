import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class get_sites {

api = 'http://localhost:3005/crear_sitio/sitios'


constructor( private http:HttpClient) {

}
getRutas(){
    return this.http.get(`${this.api}`)
}

}
