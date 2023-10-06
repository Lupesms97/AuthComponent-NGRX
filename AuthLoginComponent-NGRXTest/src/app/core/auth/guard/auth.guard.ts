import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const serviceAuth = inject(AuthService);
  const router = inject(Router);
  return serviceAuth.isLogged$.pipe(
    tap((isLogged: boolean) => {
      if (!isLogged) {
        router.navigate(['/login']);
      }
    })
  )
};