import { Component, OnInit } from '@angular/core';

import { RegisterLoginService } from './register-login.service';
import { Usuario } from '../models/register';

@Component({
  selector: 'app-registro',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario(); // Objeto para almacenar los datos del usuario
  registroExitoso: boolean = false; // Variable para controlar el estado del registro exitoso
  registroError: boolean = false; // Variable para controlar el estado del registro con error

  constructor(private userService: RegisterLoginService) { }

  ngOnInit() { }

  registerUser() {
    if (!this.usuario.foto || !this.usuario.nombre || !this.usuario.apellido || !this.usuario.correo || !this.usuario.password) {
      // Mostrar mensaje de error si falta algún campo obligatorio
      this.registroError = true;
      return;
    }

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
  }
}
