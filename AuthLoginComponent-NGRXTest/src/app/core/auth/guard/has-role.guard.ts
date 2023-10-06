import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  CanLoad,
  Route,
  Router,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { Role } from 'src/app/shared/models/user/Role';

export const hasRole: CanActivateFn = (route, state) =>  {
  const expectedRole = route.data['role'];
  const serviceAuth = inject(AuthService);
  const router = inject(Router);
  return serviceAuth.user$.pipe(
    map(user => user && expectedRole == Role.ADMIN ? user.role == Role.ADMIN : user!.role == Role.USER),
    tap(hasRole => {
      if (!hasRole || expectedRole == Role.UNDEFINED_ROLE) {
        alert(`Acceso negado para ${serviceAuth.getUserName()}`);
        serviceAuth.cleanRoles();
        serviceAuth.logout();
        router.navigate(['login']);
      }
    })
  );
}
