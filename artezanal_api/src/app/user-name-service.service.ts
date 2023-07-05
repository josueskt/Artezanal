import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  isAdmin(): boolean | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const roles = valuesJson?.roles;
    if (roles && roles.indexOf('usuario') >= 0) {
      return true;
    }
    return false;
  }
  getNombreUsuario(): string {
    const token = this.getToken();
console.log(token);
    return token;
  }



  getToken():  string {


    const token  = localStorage.getItem('token');

    const payload = token.split('.')[1];
const decodedPayload = atob(payload);
const payloadObject = JSON.parse(decodedPayload);
return payloadObject.nombre;

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
