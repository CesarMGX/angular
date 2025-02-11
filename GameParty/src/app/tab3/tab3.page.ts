import { Component } from '@angular/core';
import { PartidaService } from '../services/partida.service';
import { Partida } from '../models/partida.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class Tab3Page {
  partidas: Partida[] = []; // Array para almacenar la lista de partidas

  constructor(private partidaService: PartidaService, private router: Router) {}

  // Hook del ciclo de vida que se ejecuta cuando la vista está a punto de entrar y volverse activa
  ionViewWillEnter() {
    this.partidas = this.partidaService.getPartidas(); // Obtener la lista de partidas del servicio

    // Asignar estados aleatorios a cada jugador si no tienen uno
    this.partidas.forEach(partida => {
      partida.jugadores.forEach(jugador => {
        if (!jugador.status) {
          jugador.status = this.getRandomStatus();
        }
      });
    });
  }

  // Función para obtener un estado aleatorio
  getRandomStatus(): string {
    const estados = ['aceptado', 'esperando', 'rechazado'];
    return estados[Math.floor(Math.random() * estados.length)];
  }

  // Navegar a la página de edición para una partida específica
  editPartida(partida: Partida) {
    this.router.navigate(['/edit-partida', partida.id]);
  }

  // Eliminar una partida por su ID y actualizar la lista
  deletePartida(id: number) {
    this.partidaService.deletePartida(id);
    this.partidas = this.partidaService.getPartidas();
  }

  // Obtener el color asociado a un estado
  getStatusColor(status: string): string {
    switch (status) {
      case 'aceptado':
        return 'success'; // Verde
      case 'esperando':
        return 'primary'; // Azul
      case 'rechazado':
        return 'danger'; // Rojo
      default:
        return 'medium'; // Gris (caso por defecto)
    }
  }
  
  // Obtener el texto asociado a un estado
  getStatusText(status: string): string {
    switch (status) {
      case 'aceptado':
        return 'Aceptado';
      case 'esperando':
        return 'Pendiente';
      case 'rechazado':
        return 'Rechazado';
      default:
        return 'Desconocido';
    }
  }  
}
