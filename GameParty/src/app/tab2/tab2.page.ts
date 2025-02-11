import { Component, OnInit } from '@angular/core';
import { PartidaService } from '../services/partida.service';
import { Partida } from '../models/partida.model';
import { Router } from '@angular/router';
import { JugadorServiceService } from '../services/jugador.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page implements OnInit {
  partida: Partida = {
    id: 0,
    nombre: '',
    juego: '',
    fecha: '',
    jugadores: []  // Ahora es un arreglo
  };

  // La lista de jugadores la obtenemos del servicio
  jugadores: any[] = [];
  // Los jugadores que el usuario seleccione (checkbox)
  selectedPlayers: any[] = [];

  constructor(
    private partidaService: PartidaService,
    private router: Router,
    private jugadorServiceService: JugadorServiceService
  ) {}

  ngOnInit() {
    this.jugadores = this.jugadorServiceService.getJugadores();
  }

  submitForm() {
    // Al registrar la partida, asignamos la lista de jugadores seleccionados
    // Inicializamos cada jugador con el status "esperando"
    this.partida.jugadores = this.selectedPlayers.map(player => ({
      name: player.name,
      avatar: player.avatar,
      status: 'esperando'  // Estado inicial
    }));

    this.partidaService.addPartida(this.partida);
    // Reiniciamos el formulario
    this.partida = { id: 0, nombre: '', juego: '', fecha: '', jugadores: [] };
    this.selectedPlayers = [];
    // Redirigimos a Tab3 para ver las partidas registradas
    this.router.navigate(['/tabs/tab3']);
  }

  togglePlayerSelection(player: any) {
    const index = this.selectedPlayers.indexOf(player);
    if (index === -1) {
      this.selectedPlayers.push(player);
    } else {
      this.selectedPlayers.splice(index, 1);
    }
  }
}
