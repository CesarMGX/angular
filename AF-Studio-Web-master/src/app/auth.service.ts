import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Método para cerrar sesión
  logout() {
    // Elimina cualquier dato de sesión (como el token de autenticación)
    localStorage.removeItem('user');  // Asumiendo que almacenas los datos en localStorage

    // Redirige al usuario a la página de login
    this.router.navigate(['/login']);
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');  // Verifica si el usuario está autenticado
  }
}

