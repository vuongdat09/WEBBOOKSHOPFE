import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { FormBuilder, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { SignInUser, User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  constructor(private form:FormBuilder,private authService : AuthService,private errorService:ErrorService ){
    
  }
  signinForm = this.form.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  async submitForm(){
    
    if(this.signinForm.invalid)return
    try {
      await firstValueFrom(this.authService.signIn(this.signinForm.value as SignInUser))
      
      alert("Sign in Successfully")
    } catch (error:any) {
      
      alert(error?.error?.message)
    }
  
    
   
  }

}
