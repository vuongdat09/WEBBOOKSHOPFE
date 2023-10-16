import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInUser } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user !: SignInUser 
  constructor(private route : Router){
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user')|| '')

    }

  }
  logOut(){
    localStorage.removeItem('user')
    this.route.navigate(['signin']);
  }
}
