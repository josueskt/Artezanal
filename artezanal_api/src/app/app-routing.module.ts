import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './usuario/geolocalisacion/map/map.component';


import { ListSitiosComponent} from './administracion/users-register/list-sitios/list-sitios.component';
import { HistoryReservasComponent } from './history-reservas/history-reservas.component';

import { UsersRegisterComponent } from './administracion/users-register/users-register.component';
import { AddRutasComponent } from './administracion/users-register/add-rutas/add-rutas.component';


import { QrComponent } from './usuario/Codificacion_qr/qr/qr.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';




const routes : Routes = [

  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'ruta', component:QrComponent , pathMatch: 'full'},
  {path: 'rutas/:id', component: MapComponent},
  {path: 'nosotros', component: NosotrosComponent},


  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'crear-sitio', component: ListSitiosComponent },
  {path: 'history-reservas', component: HistoryReservasComponent },

  {path: 'users-register', component: UsersRegisterComponent },
  {path: 'add-rutas', component: AddRutasComponent},


  {path: 'perfil',component:PerfilComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
