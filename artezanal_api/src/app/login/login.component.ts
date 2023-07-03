import { Component, OnInit } from '@angular/core';

import { RegisterLoginService } from './register-login.service';
import { Usuario } from '../models/register';
import { AuthenticationService } from './auntentification.service';

@Component({
  selector: 'app-registro',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario(); // Objeto para almacenar los datos del usuario
  registroExitoso: boolean = false; // Variable para controlar el estado del registro exitoso
  registroError: boolean = false; // Variable para controlar el estado del registro con error
  email: string;
  password: string;

  constructor(private userService: RegisterLoginService , private authService: AuthenticationService) { }

  ngOnInit() {
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

  registerUser() {
    if (this.usuario.foto || this.usuario.nombre || this.usuario.apellido || this.usuario.correo || this.usuario.password) {
      // Mostrar mensaje de error si falta algún campo obligatorio
      this.registroError = true;



      this.userService.registerUser(this.usuario).subscribe(
        response => {
          // Registro exitoso
          this.registroExitoso = true;
          this.registroError = false;
        },
        error => {
          // Error en el registro
          this.registroExitoso = false;
          this.registroError = true;
        }
      );

    }else{
      this.registroError = true;
      return ;
    }
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          // La solicitud fue exitosa, se recibe el token y el usuario desde el servidor
          const token = response.token;
          const user = response.user;

          // Guardar el token y el usuario en el almacenamiento local o en un servicio de autenticación
          // ...

          // Redirigir a la página de inicio o a otra página de la aplicación
          // ...
        },
        error => {
          // Hubo un error en la solicitud
          console.error(error);
          // Manejar el error adecuadamente en tu aplicación
          // ...
        }
      );
  }
}

