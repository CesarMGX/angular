import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  constructor(private navController: NavController) { } // Inyecta NavController

  // Método para navegar al hacer clic en el botón
  login() {
    this.navController.navigateForward('/tabs/tab1'); // Redirige a la página 'tab1'
  }

}
