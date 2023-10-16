import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  
  if(localStorage.getItem('user')){
    const user = JSON.parse(localStorage.getItem('user') || '');
    if(user?.userExist?.role === 'admin'){
      return true
    }
    else{
      router.navigate(['home'])
      return false
    }
    
    
  }
  
  return false

  
};
