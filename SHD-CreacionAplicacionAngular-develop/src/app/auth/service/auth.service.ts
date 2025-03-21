import { Injectable } from '@angular/core';
import { Router } from 'express';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { enviroments } from '../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = enviroments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  getcurrentUser(): User | undefined {
    if(!this.user) return undefined;
    return structuredClone (this.user);
  }

  //Metodo para hacer el simulado de inicio de sesión
  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)  //aqui lo puse asi porque llama al usuario que se tiene que tener en el bd.js
    .pipe(tap (user => this.user = user),tap(user => localStorage
      .setItem('token', 'hgfhjhfgj.dfhgghh.xgfhghjgh')  //referencia
    ),);
  }

  checkAuthentication(): Observable<boolean> {
    if(!localStorage.getItem('token')) return of (false);
    const token = localStorage.getItem('token');
    return this.http.get<User>(`${this.baseUrl}/users/1`)  //lo mismo que en la linea 25
    .pipe(
      tap(user => this.user = user),
      map(user => !!user),
      catchError(err => of(false))
    );
  }

  //metodo para cerrar sesión
  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
