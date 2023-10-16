import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if(localStorage.getItem('user')){

    const token = JSON.parse(localStorage.getItem('user') ||'' )
    route.data = {role : 'admin'}
    if(token){
      return true
    }
    else{
      router.navigate(['signin'])
      return false
    }
  }
  router.navigate(['signin'])
  return false
 
  
};
