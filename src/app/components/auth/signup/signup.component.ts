import { Component } from '@angular/core';
import { FormBuilder,Validators ,FormGroup} from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataUser } from 'src/app/models/user';
import { AbstractControlOptions } from 'src/app/models/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  constructor(private form : FormBuilder, private authService : AuthService,private router : Router){}
  
  signupForm = this.form.group({
    userName:['', [Validators.required]],
    email:['',Validators.email],
    password:['', [Validators.required, Validators.minLength(6)]],
    confirmPassword : ['',[Validators.required]]
  },{
    validators : this.checkPass
  } as AbstractControlOptions)

  checkPass(form:FormGroup){
    const password = form.get('password')?.value
    const confirmPassword = form.get('confirmPassword')?.value
    
    if(password === confirmPassword)return null
    return {notMatch:true}
  }
  async handleSubmit(){
    if(this.signupForm.invalid)return
    try {
      await firstValueFrom(this.authService.signUp(this.signupForm.value as DataUser))
      alert('Sign up successfully')
      this.router.navigate(['/signin'])

    } catch (error:any) {
      console.log(error)
      alert(error?.error)
    }
    
  }
}
