import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost/8080/api';
  
  constructor(private http :HttpClient) { }
  signin(user:any): Observable<any> {
    return this.http.post<any>(`${this.URL}/signin`,user);
  }
  signup(user:any): Observable<any> {
    return this.http.post<any>(`${this.URL}/signup`, user)
  }

  saveToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getAccessToken(): void{
    localStorage.getItem('accessToken')
  }

}
