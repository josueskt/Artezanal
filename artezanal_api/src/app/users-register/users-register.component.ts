import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.css']
})
export class UsersRegisterComponent implements OnInit {
  users: any[] = [
    {
      name: 'Usuario 1',
      email: 'usuario1@mail.com',
      phone: '1234567890'
    },
    {
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    }
    // Agrega más usuarios aquí si es necesario
  ];

  deleteUser(user: any) {
    // Lógica para eliminar al usuario
  }

  blockUser(user: any) {
    // Lógica para bloquear al usuario
  }

  constructor() { }

  ngOnInit() {
  }
}
