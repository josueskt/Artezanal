import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './usuario/geolocalisacion/map/map.component';


import { ListSitiosComponent} from './administracion/users-register/list-sitios/list-sitios.component';
import { HistoryReservasComponent } from './history-reservas/history-reservas.component';
import { FacturaComponent } from './administracion/users-register/Factura/Factura.component';
import { UsersRegisterComponent } from './administracion/users-register/users-register.component';
import { AddRutasComponent } from './administracion/users-register/add-rutas/add-rutas.component';
import { ListRutasComponent } from './administracion/users-register/list-rutas/list-rutas.component';
import { AddOfertasComponent } from './administracion/users-register/add-ofertas/add-ofertas.component';
import { QrComponent } from './usuario/Codificacion_qr/qr/qr.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { InicioAdminComponent } from './administracion/users-register/inicio-admin/inicio-admin.component';
import { AddSitiosComponent } from './administracion/users-register/add-sitios/add-sitios.component';
import { ConductoresComponent } from './administracion/users-register/conductores/conductores.component';



const routes : Routes = [

  {path: 'home', component: HomeComponent , pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'ruta', component:QrComponent , pathMatch: 'full'},
  {path: 'rutas/:id', component: MapComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-sitios', component: ListSitiosComponent },
  {path: 'history-reservas', component: HistoryReservasComponent },
  {path: 'Factura', component: FacturaComponent },
  {path: 'users-register', component: UsersRegisterComponent },
  {path: 'add-rutas', component: AddRutasComponent},
  {path: 'list-rutas', component: ListRutasComponent},
  {path: 'add-ofertas', component: AddOfertasComponent},
  {path: 'perfil',component:PerfilComponent},
  {path: 'inicio-admin',component:InicioAdminComponent},
  {path: 'add-sitios',component:AddSitiosComponent},
  {path: 'conductores',component:ConductoresComponent},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
