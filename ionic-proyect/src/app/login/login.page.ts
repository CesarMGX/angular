import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  name : string = 'cesar';
  email: string = 'cesar.mg@gmail.com';
  password : string = 'cesar123';

  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'cesar.mg@gmail.com' && this.password === 'cesar123' && this.name === 'cesar') {
      this.navController.navigateRoot('/inicio');
    }

    else {
      this.presentToast();
    }
  }

  
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Las credenciales de acceso son incorrectas',
        duration: 1500,
        position: 'bottom',
        color: 'warning'
      });
  
      await toast.present();
    }

}
