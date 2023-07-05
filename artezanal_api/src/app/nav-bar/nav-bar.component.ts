import { Component } from '@angular/core';
import { UserNameService } from '../user-name-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  user_image = "https://images.immediate.co.uk/production/volatile/sites/4/2023/02/Midjourney-small-f3a9034.jpg?quality=90&resize=940,400";
  user_name: string;
  id_user = null;
  iniciado: true;

  user: any;
  isLoge=true;
  nombreUser='';
 constructor(private userNameService: UserNameService, private router: Router) {

 }
 isAdmin       = true;
 ngOnInit() {

const a =  this.userNameService.getNombreUsuario();
this.nombreUser = a




 console.log(a);
  console.log(this.nombreUser);
  this.isAdmin = this.userNameService.isAdmin() ?? false;



   this.isLoge = this.userNameService.isLoge()?true:this.isLoge=false;

 }
 logout(): void {
  this.userNameService.logout();
  alert("Saliste");
  window.location.reload();
}


}
