import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: false,
})
export class ModalPage implements OnInit {
  @ViewChild('modal', { static: false }) modal!: IonModal;
  presentingElement: any;

  // Datos para el modal con lista
  people = [
    { name: 'Connor Smith', role: 'Sales Rep', image: 'https://i.pravatar.cc/300?u=b' },
    { name: 'Daniel Smith', role: 'Product Designer', image: 'https://i.pravatar.cc/300?u=a' },
    { name: 'Greg Smith', role: 'Director of Operations', image: 'https://i.pravatar.cc/300?u=d' },
    { name: 'Zoey Smith', role: 'CEO', image: 'https://i.pravatar.cc/300?u=e' },
  ];

  constructor() {}

  ngOnInit() {
    // Referencia al elemento padre para el modal
    this.presentingElement = document.querySelector('ion-page');
  }

  closeModal() {
    // Cierra el modal actual
    this.modal?.dismiss();
  }
}
