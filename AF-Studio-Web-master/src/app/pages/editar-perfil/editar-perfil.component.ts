import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
  // Aquí puedes obtener los datos del usuario desde un servicio, por ejemplo.
  usuario = {
    nombre: 'Juan Pérez',
    correo: 'juan&#64;example.com',
    telefono: '123-456-7890',
    rol: 'Administrador'
  };

  // Método para guardar los cambios realizados
  guardarCambios() {
    console.log('Los cambios han sido guardados', this.usuario);
    // Aquí puedes hacer una llamada a tu servicio para actualizar los datos del usuario en la base de datos.
  }
}

