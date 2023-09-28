import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  auth: any = {
    email: '',
    password: '',
  }
  constructor(private authService: AuthService , private router : Router){}

  signin() {
    this.authService.signin(this.auth).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        // Xử lý lỗi đăng nhập
      }
    );
  }

}
