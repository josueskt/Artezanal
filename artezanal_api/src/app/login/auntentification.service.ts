import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3005'; // Reemplaza con la URL correcta del servidor Node.js

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const data = {
      email,
      password
    };

    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }
}
