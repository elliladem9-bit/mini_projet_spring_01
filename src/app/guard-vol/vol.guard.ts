import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const volGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  if (authService.isAdmin()) {
    return true;
  } else {
    router.navigate(['/app-forbidden']);
    return false;
  }
};
