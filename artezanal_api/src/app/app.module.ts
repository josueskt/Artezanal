import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//INICIO SERVICIOS
import { CargaJsService } from './carga-js.service';
//FIN SERVICIOS
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { HistoryReservasComponent } from './history-reservas/history-reservas.component';

import { AddRutasComponent } from './administracion/users-register/add-rutas/add-rutas.component';

import { LoginComponent } from './login/login.component';

import {ListSitiosComponent} from './administracion/users-register/list-sitios/list-sitios.component';
import {UsersRegisterComponent} from './administracion/users-register/users-register.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { MapComponent } from './usuario/geolocalisacion/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { AllRutsComponent } from './rutas/all-ruts/all-ruts.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { RutaService } from './administracion/users-register/list-sitios/rutaService';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NosotrosComponent,
LoginComponent,
    MapComponent,


    ListSitiosComponent,
    HistoryReservasComponent,

    UsersRegisterComponent,
    AddRutasComponent,


    AllRutsComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [
    CargaJsService,RutaService
  ],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
