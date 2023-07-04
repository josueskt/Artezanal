import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../user-name-service.service';
import { RegisterLoginService } from './register-login.service';
import { Usuario } from '../models/register';
import { AuthenticationService } from './auntentification.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


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
  userNameService: any;


  constructor(private userService: RegisterLoginService ,private router: Router , private authService: AuthenticationService ,private http: HttpClient) { }






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
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        if (response && response.token) {
          const token = response.token;
          console.log(token);

          // Guardar el token en el almacenamiento local (localStorage)
          localStorage.setItem('token', token);

          // Obtener el nombre de usuario desde la respuesta del servidor
          const userName = response.user_name;

          // Establecer el nombre de usuario en el servicio compartido


          // Registro exitoso
          this.registroExitoso = true;

          this.registroError = false;


          this.router.navigateByUrl('/home')
      .then(() => {
        // Recargar la página después de la redirección
        window.location.reload();
      });
        } else {
          console.log("Respuesta inválida del servidor");
          // Error en la respuesta del servidor
          this.registroExitoso = false;
          this.registroError = true;

        }
      },
      error => {
        console.log(error);
        // Error en el registro
        this.registroExitoso = false;
        this.registroError = true;
      }
    );
  }
}

