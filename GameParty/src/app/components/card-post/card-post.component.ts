import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Importa ToastController

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone: false
})
export class CardPostComponent implements OnInit {

  @Input() username: string = '';
  @Input() location: string = '';
  @Input() createAt: string = '';
  @Input() avatarUrl: string = '';
  @Input() contentUrl: string = '';
  @Input() liked: boolean = false;
  @Input() saved: boolean = false;

  // Propiedades para valores aleatorios
  randomDate: string = '';
  randomLikes: number = 0;

  constructor(private toastController: ToastController) { } // Inyecta ToastController

  ngOnInit() {
    // Generar valores aleatorios al inicializar el componente
    this.randomDate = this.generateRandomDate();
    this.randomLikes = this.generateRandomLikes();
  }

  // Método para generar una fecha aleatoria
  generateRandomDate(): string {
    const day = Math.floor(Math.random() * 30) + 1;
    return `2025-02-${day}`;
  }

  // Método para generar un número aleatorio de likes
  generateRandomLikes(): number {
    return Math.floor(Math.random() * 10000);
  }

  // Método para manejar el like
  toggleLike() {
    this.liked = !this.liked;
    this.randomLikes += this.liked ? 1 : -1;
  }

  // Método para manejar el guardado
  async toggleSaved() {
    this.saved = !this.saved;

    // Mostrar un mensaje con Toast
    const toast = await this.toastController.create({
      message: this.saved ? 'Publicación guardada' : 'Publicación eliminada de guardados',
      duration: 2000, // Duración de 2 segundos
      position: 'bottom', // Posición del mensaje
      color: this.saved ? 'success' : 'danger', // Color del mensaje
    });
    await toast.present();
  }
}