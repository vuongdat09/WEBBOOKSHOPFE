import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  private errorMessageSubject = new BehaviorSubject<string|null>(null)

  setErrorMessage(message: string|null): void {
    this.errorMessageSubject.next(message);
  }

  getErrorMessage(): Observable<string | null> {
    return this.errorMessageSubject.asObservable();
  }
}
