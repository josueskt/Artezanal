import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QrService {
  private apiUrl = 'http://localhost:3005/boletos';

  constructor(private http: HttpClient) { }

  getQrImage() {
    return this.http.get<any>(this.apiUrl);
  }


}
