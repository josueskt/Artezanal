import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './usuario/geolocalisacion/map/map.component';




const routes : Routes = [

  {path: 'home', component: HomeComponent , pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'rutas', component: MapComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
