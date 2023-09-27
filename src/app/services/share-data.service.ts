import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  currentIndex = 0;
  constructor() { 
    
  }
  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }
  
}
