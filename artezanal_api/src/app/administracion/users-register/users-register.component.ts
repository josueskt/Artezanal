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
    ,{
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    },{
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    },
    {
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    },
    {
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    },
    {
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    },
    {
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    },
    {
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    },
    {
      name: 'Usuario 2',
      email: 'usuario2@mail.com',
      phone: '0987654321'
    }
  ];

  deleteUser(user: any) {
  }

  blockUser(user: any) {
  }

  constructor() { }

  ngOnInit() {
  }
}
