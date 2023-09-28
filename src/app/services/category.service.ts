import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL = 'http://localhost:8080/api/category'
  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}`)
  }
  getOneCategory(id:string|number): Observable<any>{
    return this.http.get<any>(`${this.URL}/${id}`)
  }
  postCategory(category:any): Observable<any>{
    return this.http.post<any>(`${this.URL}`,category)
  }
  updateCategory(id:any , category:any): Observable<any>{
    return this.http.put<any>(`${this.URL}/${id}`, category)
  }
  removeCategory(id:any): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`)
  }
}
