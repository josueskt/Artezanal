import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes : Routes = [

  {path: 'home', component: HomeComponent , pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'nosotros', component: NosotrosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
