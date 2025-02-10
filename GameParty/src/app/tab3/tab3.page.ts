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
  partidas: Partida[] = [];

  constructor(private partidaService: PartidaService, private router: Router) {}

  ionViewWillEnter() {
    this.partidas = this.partidaService.getPartidas();
  }

  // Para editar una partida, podrías redirigir a otra página de edición.
  editPartida(partida: Partida) {
    // Por ejemplo, redirigir a /edit-partida/id
    this.router.navigate(['/edit-partida', partida.id]);
  }

  deletePartida(id: number) {
    this.partidaService.deletePartida(id);
    this.partidas = this.partidaService.getPartidas(); // Actualizamos la lista
  }
}
