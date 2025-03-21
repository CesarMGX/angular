import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanMatch, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // Metodo que verifica si el usuario esta auntenticado
  private checkPublicAccess(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication().pipe(
      map((isAuthenticated) => !isAuthenticated), // Si está autentica va a retornar un false
      tap((isPublic) => {
        if (!isPublic) {
          this.router.navigate(['/']); // si esta autenticado lo redirije a la pagina principal
        }
      })
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    return this.checkPublicAccess();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.checkPublicAccess();
  }
}
