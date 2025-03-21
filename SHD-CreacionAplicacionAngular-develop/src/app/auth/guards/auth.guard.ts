import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { Observable, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {

    constructor(private authSerice: AuthService,
                private router: Router) {}


    //funcion para checar si el usuario esta autenticado
    private checkAuthStatus(): boolean | Observable<boolean> {
        return this.authSerice.checkAuthentication().pipe(
            tap(isAuthenticated => console.log('Authenticated: ', isAuthenticated)),
            tap(isAuthenticated => {
                if (!isAuthenticated) {
                    this.router.navigate(['./auth/login']);
                }
            })
        );
    }

    //Método por CanMatch que permite o bloquea la coincidencia de una ruta
    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        return this.checkAuthStatus();
        
    }

    //Método por CanActivatw que permite o bloquea el acceso a una ruta
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this,this.checkAuthStatus();
        
    }
}