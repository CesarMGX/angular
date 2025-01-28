import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';  // Importa PopoverController

@Component({
  selector: 'app-popover-menu',
  standalone: false,
  template: `
    <ion-list lines="none">
      <ion-item button (click)="selectOption('Option 1')">
        <ion-label>Nuevo grupo</ion-label>
      </ion-item>
      <ion-item button (click)="selectOption('Option 2')">
        <ion-label>Nueva difusión </ion-label>
      </ion-item>
      <ion-item button (click)="selectOption('Option 3')">
        <ion-label>Dispositivos vinculados</ion-label>
      </ion-item>
      <ion-item button (click)="selectOption('Option 4')">
        <ion-label>Mensajes destacados</ion-label>
      </ion-item>
      <!-- Aquí agregamos el botón para ajustes con el [routerLink] -->
      <ion-item button [routerLink]="['/settings']" (click)="closePopover()">
        <ion-label>Ajustes</ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class PopoverMenuComponent {
  constructor(private popoverController: PopoverController) {}  // Inyecta PopoverController

  // Función para manejar la selección de las opciones
  selectOption(option: string) {
    console.log('Opción seleccionada: ' + option);
    // Aquí puedes agregar el código que quieres que se ejecute al seleccionar una opción
  }

  // Método para cerrar el popover
  closePopover() {
    this.popoverController.dismiss();  // Cierra el popover
  }
}