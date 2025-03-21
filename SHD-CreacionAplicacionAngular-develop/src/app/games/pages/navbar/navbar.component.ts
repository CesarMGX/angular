import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navItems = [
    { label: 'Inicio', url: 'home' },
    { label: 'Juegos', url: 'games' },
    { label: 'Acerca de Nosotros', url: 'about' },
  ];

  signUpUrl = '/sign-up';

}
