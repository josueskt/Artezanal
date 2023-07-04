import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {


  getNombreUsuario(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const nombreUsuario = valuesJson?.nombre;
    return nombreUsuario || null;
  }
  getToken():  string {
    return localStorage.getItem('token');
  }
  isLoge(): boolean {
    if (this.getToken()){
      return true;
    }
    return false;
  }
  logout(): void {
    localStorage.clear();
  }
}
