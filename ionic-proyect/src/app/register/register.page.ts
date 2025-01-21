import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone : false
})
export class RegisterPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController,
    /*private toastController: ToastController*/
  ) {}

  ngOnInit() {}
  //parte dos en clase
  register(form : NgForm) {
   /* if (this.name !== '' && this.email !== '' && this.password !== '') {
      await this.presentToast();
      this.navController.navigateRoot('/login');
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, complete todos los campos.',
        duration: 1500,
        position: 'bottom',
        color: 'warning',
      });
      await toast.present();
    }*/

      console.log(form.value);
      console.log(form.valid);
      console.log(form.invalid);

      if(form.invalid) {
        this.navController.navigateRoot('/login');
      }

  }

  /*async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro exitoso',
      duration: 1500,
      position: 'bottom',
      color: 'success',
    });
    await toast.present();
  }*/
}
