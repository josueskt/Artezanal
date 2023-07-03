import { Component , OnInit} from '@angular/core';
import  {CargaJsService} from './../carga-js.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    const loginsec = document.querySelector('.login-section');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');

    registerlink.addEventListener('click', () => {
      loginsec.classList.add('active');
    });

    loginlink.addEventListener('click', () => {
      loginsec.classList.remove('active');
    });
  }
  // constructor(private _cargaJsService: CargaJsService){
  //   _cargaJsService.Cargar(["login"]);
  // }
}
