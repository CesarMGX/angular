import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component'; // Importamos la barra de navegación

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-user-catalog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent], // Agregamos NavbarComponent
  templateUrl: './user-catalog.component.html',
  styleUrls: ['./user-catalog.component.css']
})
export class UserCatalogComponent {
  users: User[] = [
    { id: 1, name: 'Saúl Suárez Rodriguez', email: 'saul@example.com', phone: '1234567890' },
    { id: 2, name: 'Uriel Lopez Castro', email: 'uriel@example.com', phone: '0987654321' },
    { id: 3, name: 'Carlos Gómez', email: 'carlos@example.com', phone: '1122334455' },
    { id: 4, name: 'Majo Bazan', email: 'cazan@example.com', phone: '1167590455' },
    { id: 5, name: 'Jerry Morales', email: 'jerry@example.com', phone: '2731306216' }
  ];

  showAddUserForm = false; // Controla la visibilidad del formulario
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  // Función para agregar usuario
  addUser() {
    if (this.userForm.valid) {
      const newUser: User = {
        id: this.users.length + 1,
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        phone: this.userForm.value.phone
      };
      this.users.push(newUser);
      this.userForm.reset();
      this.showAddUserForm = false;
    }
  }

  // Función para editar usuario
  editUser(user: User) {
    const newName = prompt('Editar nombre:', user.name);
    if (newName !== null && newName.trim() !== '') {
      user.name = newName;
    }

    const newEmail = prompt('Editar email:', user.email);
    if (newEmail !== null && newEmail.trim() !== '' && this.validateEmail(newEmail)) {
      user.email = newEmail;
    }

    const newPhone = prompt('Editar teléfono:', user.phone);
    if (newPhone !== null && newPhone.trim() !== '' && this.validatePhone(newPhone)) {
      user.phone = newPhone;
    }
  }

  // Validación de email
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validación de teléfono
  validatePhone(phone: string): boolean {
    return /^[0-9]{10}$/.test(phone);
  }

  // Función para eliminar usuario
  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}



