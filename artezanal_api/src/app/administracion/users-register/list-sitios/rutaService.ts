import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RutaService {
  private apiUrl = 'http://localhost:3005'; // URL del servidor backend

  constructor(private http: HttpClient) {}

  insertarRuta(ruta: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ruta`, ruta);
  }
}
