import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';  // Importa el NavbarComponent

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent], // Agrega NavbarComponent en imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = [
    'assets/img/imagen1.jpg', 
    'assets/img/imagen2.jpg', 
    'assets/img/imagen3.jpg',
    'assets/img/imagen4.jpg',
    'assets/img/imagen5.jpg'
  ];

  currentIndex: number = 0;

  constructor() {
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 10000); // Cambia de imagen cada 10 segundos
  }
}

