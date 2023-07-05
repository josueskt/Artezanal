import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class crear_ruta {
  constructor(private http: HttpClient) {}
  api = 'http://localhost:3005'
  enviarRuta(ruta: any , ar:any) : Observable<any> {
    const url = `${this.api}/crear_sitio/create_rut`; // Reemplaza 'ruta' con la ruta correspondiente en tu backend
    const datos = { ruta, ar };
    return this.http.post(url, datos);
  }
}
