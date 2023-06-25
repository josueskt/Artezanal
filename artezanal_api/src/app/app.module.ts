import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//INICIO SERVICIOS
import { CargaJsService } from './carga-js.service';
//FIN SERVICIOS
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { ListRutasComponent } from './list-rutas/list-rutas.component';
import { HistoryReservasComponent } from './history-reservas/history-reservas.component';
import { AddOfertasComponent } from './add-ofertas/add-ofertas.component';
import { AddRutasComponent } from './add-rutas/add-rutas.component';
import { FacturaComponent } from './Factura/Factura.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './usuario/reserva/reserva.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NosotrosComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CargaJsService
  ],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }


