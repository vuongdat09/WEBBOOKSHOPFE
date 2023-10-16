import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClassGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if(localStorage.getItem('user')){
    
        const token = JSON.parse(localStorage.getItem('user') ||'' )
        console.log(token)
        if(token){
          return true
        }
        else{
          this.router.navigate(['signin'])
          return false
        }
      }
      // router.navigate(['signin'])
      return false
  }
  
}
