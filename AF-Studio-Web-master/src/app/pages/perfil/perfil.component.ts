import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component'; // Importar NavbarComponent

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, NavbarComponent], // Agregar NavbarComponent aquí
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  userData = {
    nombre: 'Saúl Suárez',
    correo: 'saul.perez@ejemplo.com',
    rol: 'Administrador',
    telefono: '+1234567890'
  };

  constructor(private router: Router) {}

  editarPerfil() {
    console.log('Editar perfil');
    // Aquí puedes agregar la lógica para redirigir a la pantalla de edición
  }

  cerrarSesion() {
    localStorage.removeItem('user'); // Elimina la sesión (opcional)
    this.router.navigate(['/login']); // Redirige al login
  }
  
}






