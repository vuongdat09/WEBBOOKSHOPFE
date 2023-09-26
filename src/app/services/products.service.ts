import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = ' http://localhost:8080/api/products';
  constructor(private http:HttpClient) { };

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}`);
  }
  getIdProducts(id:string|number): Observable<any> {
    return this.http.get<any>(`${this.URL}/:${id}`);
  }
  removeProducts(id:string|number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/:${id}`);
  }
  updateProducts(id:string|number , product:any): Observable<any> {
    return this.http.put<any>(`${this.URL}/:${id}`,product);
  }
  postProducts(product:any): Observable<any> {
    return this.http.post<any>(`${this.URL}`,product);
  }
}
