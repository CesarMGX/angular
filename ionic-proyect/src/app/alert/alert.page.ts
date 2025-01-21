import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false
})
export class AlertPage implements OnInit {
  alertButtons: any[] = [];
  alertInputs: any[] = [];

  constructor() {}

  ngOnInit() {
    // Configuración de los botones para las alertas
    this.alertButtons = [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar presionado');
        }
      },
      {
        text: 'Aceptar',
        role: 'confirm',
        handler: () => {
          console.log('Aceptar presionado');
        }
      }
    ];

    // Configuración de los inputs para las alertas
    this.alertInputs = [
      {
        name: 'nombre',
        type: 'text',
        placeholder: 'Nombre'
      },
      {
        name: 'correo',
        type: 'email',
        placeholder: 'Correo electrónico'
      }
    ];
  }

  setResult(event: any) {
    console.log('Evento de cierre de alerta:', event);
  }
}
