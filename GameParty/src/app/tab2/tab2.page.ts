import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  user = {
    name: '',
    email: '',
    password: '',
    gender: ''
  };

  constructor() {}

  submitForm() {
    console.log('Formulario enviado:', this.user);
    alert('Formulario enviado con éxito!');
  }

}
