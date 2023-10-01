import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getAll():Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/api/product`)
  }
  getProductHome():Observable<IProduct>{
    return this.http.get<IProduct>(` http://localhost:3000/api/product?_page=1&_limit=5`)
  }
 
  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3000/product`,product)
  }
  deleteProduct(id:number):Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/product/${id}`)
  }
  editProduct(product:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/product/${product.id}`,product)
  }
  getProductById(id :number|string):Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/product/${id}`)
  }
}
