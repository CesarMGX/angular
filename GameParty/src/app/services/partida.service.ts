import { Injectable } from '@angular/core';
import { Partida } from '../models/partida.model';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {
  private partidas: Partida[] =  [];
  private idCounter = 1;  // Esto es un contador para asignar un id a cada partida

  constructor() { }

  // Agregar partida
  addPartida(partida: Partida) {
    partida.id = this.idCounter++;
    this.partidas.push(partida);
  }

  // Obtener partidad
  getPartidas(): Partida[] {
    return this.partidas;
  }

  // Obtener por id
  getPartidaById(id: number): Partida | undefined {
    return this.partidas.find(p => p.id === id);
  }

  // Editar partida
  updatePartida(updatePartida: Partida) {
    const index = this.partidas.findIndex(p => p.id === updatePartida.id);
    if (index !== -1) {
      this.partidas[index] = updatePartida;
    }
  }

  // Eliminar partida
  deletePartida(id: number) {
    this.partidas = this.partidas.filter(p => p.id !== id);
  }
}
