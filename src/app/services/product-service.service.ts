import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/products';
import { Data } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  API_URL = 'http://localhost:3000/api/product'

  constructor(private http:HttpClient) { }

  getAll():Observable<Data>{
    return this.http.get<Data>(`${this.API_URL}`)
  }
  getProductHome():Observable<IProduct>{
    return this.http.get<IProduct>(` ${this.API_URL}?_page=1&_limit=5`)
  }
 
  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`${this.API_URL}`,product)
  }
  deleteProduct(id:number|undefined):Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
  editProduct(product:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`${this.API_URL}/${product._id}`,product)
  }
  getProductById(id :number|string):Observable<IProduct>{
    console.log(id)
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
}
