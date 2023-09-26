import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {
  currentIndex = 0;
  constructor() { }
}
