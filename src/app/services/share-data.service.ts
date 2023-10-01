import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  currentIndex = 0;
  constructor(private http: HttpClient) { 
    
  }
  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }
  getProductById(id :number|string):Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/product/${id}`)
  }
  
}
