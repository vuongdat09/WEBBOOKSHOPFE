import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataUser, SignInUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_SIGNUP = "http://localhost:3000/api/auth/signup"
  API_SIGNIN = "http://localhost:3000/api/auth/signin"
  constructor(private http : HttpClient) {

  }
   signUp(user : DataUser):Observable<User>{
    return this.http.post<User>(`${this.API_SIGNUP}`,user)
  }
  signIn(user : SignInUser):Observable<User>{
    return this.http.post<User>(`${this.API_SIGNIN}`,user)
  }
}
