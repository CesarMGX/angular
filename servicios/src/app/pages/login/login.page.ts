import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private alertController: AlertController // Inyecta AlertController
  ) { }

  ngOnInit() {
  }

  async googleLogin() {
    try {
      const userCredential = await this.authService.signInWithGoogle();
      const userName = userCredential.user?.displayName || 'Usuario'; // Obtiene el nombre del usuario
      console.log('Usuario autenticado: ', userCredential.user);

      // Muestra la alerta de bienvenida
      this.showWelcomeAlert(userName);
    } catch (error) {
      console.error('Error en Google Login: ', error);
    }
  }

  async showWelcomeAlert(name: string) {
    const alert = await this.alertController.create({
      header: '¡Bienvenido/a!',
      message: `Bienvenido/a: ${name}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async loginWithTwitter() {
    try {
      const userCredential = await this.authService.loginWithTwitter();
  
      if (!userCredential) {
        throw new Error('Error: No se pudo obtener la información del usuario.');
      }
  
      // Verificamos si userCredential tiene un 'user' y si tiene 'displayName'
      const userName = (userCredential as any)?.user?.displayName || 'Usuario';
  
      console.log('Usuario logueado:', userCredential);
  
      // Muestra la alerta de bienvenida
      this.showWelcomeAlert(userName);
    } catch (error) {
      console.error('Error en el login:', error);
    }
  }
  
}
