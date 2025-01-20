import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone : false,
})
export class RegisterPage implements OnInit {

  name : string = '';
  email: string = '';
  password : string = '';

  constructor() {
    private navController: NavController,
    private toastController: ToastController
   }

  ngOnInit() {
  }

}
