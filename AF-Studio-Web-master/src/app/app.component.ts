import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // Esto está correcto
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambio aquí, debe ser 'styleUrls' en lugar de 'styleUrl'
})
export class AppComponent {
  title = 'pagina_angular';
}

