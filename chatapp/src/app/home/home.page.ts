import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component'; // Importa el componente PopoverMenu

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  chats = [
    {
      name: 'La sorra con  S',
      message: "Holaa, vengo de ver a mi noviooo 😍",
      time: '10:30 AM',
      avatar: 'https://i.pinimg.com/236x/c9/df/a1/c9dfa1aa6a9012b19ff46e7f1f8b9b9e.jpg'
    },
    {
      name: 'Gringo',
      message: "que es un nopal?",
      time: '9:45 AM',
      avatar: 'https://i.pinimg.com/222x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg'
    },
    {
      name: 'La pdos',
      message: "Vamos por un coffe no?",
      time: '8:15 AM',
      avatar: 'https://i.pinimg.com/236x/fa/f8/43/faf8436413568a0f2ba80cf0223af1df.jpg'
    },
    {
      name: 'tilin uwu',
      message: "no me bañe ayer xd",
      time: 'Yesterday',
      avatar: 'https://www.universocraft.com/data/avatars/l/22/22997.jpg?1665950382'
    },
    {
      name: 'Paola ;)',
      message: "si quiero salir",
      time: 'Yesterday',
      avatar: 'https://cerebriti.b-cdn.net/uploads/44c8494c91ee89f76d97cc67a8888b96.jpg'
    },
    {
      name: 'Negrito sandia',
      message: "que lo que bro, vamos por unas de 500 o que?, yo pago",
      time: 'Monday',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYhIhFRTynGvh1gi-pUGavaD3Ocjsd8cqQ_Tlk4NNePSf3HvOUKuVr6lIYTqXz-yBVE8&usqp=CAU'
    },
    {
      name: 'prros',
      message: "un fifa?",
      time: 'Sunday',
      avatar: 'https://i.pinimg.com/564x/46/c3/90/46c390f63f6c4d3c154e3db2415dc2ca.jpg'
    },
    {
      name: 'Otaku',
      message: "Me acabo de enamorar de....",
      time: 'Saturday',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qeBSSVg0ZXE3ytWC3F_I_BtqDNcde6YpsQ&s'
    },
    {
      name: 'La vities',
      message: "elige: butter o run?",
      time: 'Last week',
      avatar: 'https://pm1.aminoapps.com/6642/e04e4a2b30050a2844999d5647161252289ee7ef_00.jpg'
    },
    {
      name: 'El moikas',
      message: "me acabo de ihnalar un porro, ando vien viajado JAJAJAJA",
      time: 'Last week',
      avatar: 'https://i.pinimg.com/236x/7d/fe/7d/7dfe7d6dcc74907622f5cf68b23b78ed.jpg'
    },
    {
      name: 'La cejudas',
      message: "por que me dices cejudas???",
      time: '2 weeks ago',
      avatar: 'https://pbs.twimg.com/media/E37yCrcVUAY_2Vq.jpg'
    }
  ];

  constructor(private popoverController: PopoverController) {}

  // Método para abrir el popover
  async openPopover(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,  // Asegúrate de crear un componente para el popover
      event: event,
      translucent: true
    });
    return await popover.present();
  }

  // Método que se ejecuta cuando se selecciona una opción del popover
  optionSelected(option: string) {
    console.log('Opción seleccionada: ' + option);
  }
}
