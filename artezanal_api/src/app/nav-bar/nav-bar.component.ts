import { Component } from '@angular/core';
import { UserNameService } from '../user-name-service.service';

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
  token = localStorage.getItem('token');
  user: any;
  isLoge=true;
  nombreUser='';
 constructor(private userNameService: UserNameService) {

 }
 isAdmin       = true;
 ngOnInit() {
  this.isAdmin = this.userNameService.isAdmin() ?? false;
  const token = localStorage.getItem('token');
    const userData = localStorage.getItem('usurio');

    if (token && userData) {
      this.user = JSON.parse(userData);
    }
   this.isLoge = this.userNameService.isLoge()?true:this.isLoge=false;
   this.nombreUser=this.userNameService.getNombreUsuario()??'';
 }
 logout(): void {
  this.userNameService.logout();
  alert("Saliste");
  window.location.reload();
}


}
