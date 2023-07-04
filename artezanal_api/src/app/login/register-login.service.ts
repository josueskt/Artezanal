import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {



private apiUrl = 'http://localhost:3005'; // URL del backend

constructor(private http: HttpClient) {}

registerUser(userData: any): Observable<any> {
  const url = `${this.apiUrl}/register`; // URL para el registro de usuario
  return this.http.post(url, userData);
}

}


