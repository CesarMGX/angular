import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);

    // Simula que el registro es exitoso y redirige al login
    this.router.navigate(['/login']);
  }
}
