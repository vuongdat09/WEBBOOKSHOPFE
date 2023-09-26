import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost/8080/api';
  
  constructor(private http :HttpClient) { }
  SignIN(user:any): Observable<any> {
    return this.http.post<any>(`${this.URL}/signin`, user)
  }
  SignUp(user:any): Observable<any> {
    return this.http.post<any>(`${this.URL}/signup`, user)
  }

}
