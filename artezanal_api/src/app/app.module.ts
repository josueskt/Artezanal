import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//INICIO SERVICIOS
import { CargaJsService } from './carga-js.service';
//FIN SERVICIOS
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
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


