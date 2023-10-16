import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { FormBuilder, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { DataUser, SignInUser, User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  constructor(private form:FormBuilder,private authService : AuthService,private errorService:ErrorService ,private router:Router){
    
  }
  signinForm = this.form.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  async submitForm(){
    
    if(this.signinForm.invalid)return
    try {
      const result = await firstValueFrom(this.authService.signIn(this.signinForm.value as SignInUser))
      const {message,...other} = result
      localStorage.setItem('user',JSON.stringify({...other}) )
      
      alert("Sign in Successfully")
      this.router.navigate(['/home'])
    } catch (error:any) {
      
      alert(error?.error?.message)
    }
  
    
   
  }

}
