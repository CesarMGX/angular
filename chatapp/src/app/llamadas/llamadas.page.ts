import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.page.html',
  styleUrls: ['./llamadas.page.scss'],
  standalone: false,
})
export class LlamadasPage implements OnInit {
  calls = [
    {
      name: 'La sorra con  S',
      time: '10:30 AM',
      avatar: 'https://i.pinimg.com/236x/c9/df/a1/c9dfa1aa6a9012b19ff46e7f1f8b9b9e.jpg',
      type: 'incoming',
      video: false
    },
    {
      name: 'Gringo',
      time: '9:45 AM',
      avatar: 'https://i.pinimg.com/222x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg',
      type: 'outgoing',
      video: false
    },
    {
      name: 'La pdos',
      time: '8:15 AM',
      avatar: 'https://i.pinimg.com/236x/fa/f8/43/faf8436413568a0f2ba80cf0223af1df.jpg',
      type: 'missed',
      video: false
    },
    {
      name: 'tilin uwu',
      time: 'Yesterday',
      avatar: 'https://www.universocraft.com/data/avatars/l/22/22997.jpg?1665950382',
      type: 'incoming',
      video: false
    },
    {
      name: 'Paola ;)',
      time: 'Yesterday',
      avatar: 'https://cerebriti.b-cdn.net/uploads/44c8494c91ee89f76d97cc67a8888b96.jpg',
      type: 'outgoing',
      video: true
    },
    {
      name: 'Negrito sandia',
      time: 'Monday',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYhIhFRTynGvh1gi-pUGavaD3Ocjsd8cqQ_Tlk4NNePSf3HvOUKuVr6lIYTqXz-yBVE8&usqp=CAU',
      type: 'missed',
      video: false
    },
    {
      name: 'prros',
      time: 'Sunday',
      avatar: 'https://i.pinimg.com/564x/46/c3/90/46c390f63f6c4d3c154e3db2415dc2ca.jpg',
      type: 'incoming',
      video: false
    },
    {
      name: 'Otaku',
      time: 'Saturday',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qeBSSVg0ZXE3ytWC3F_I_BtqDNcde6YpsQ&s',
      type: 'outgoing',
      video: true
    },
    {
      name: 'La vities',
      time: 'Last week',
      avatar: 'https://pm1.aminoapps.com/6642/e04e4a2b30050a2844999d5647161252289ee7ef_00.jpg',
      type: 'incoming',
      video: false
    },
    {
      name: 'El moikas',
      time: 'Last week',
      avatar: 'https://i.pinimg.com/236x/7d/fe/7d/7dfe7d6dcc74907622f5cf68b23b78ed.jpg',
      type: 'outgoing',
      video: false
    },
    {
      name: 'La cejudas',
      time: '2 weeks ago',
      avatar: 'https://pbs.twimg.com/media/E37yCrcVUAY_2Vq.jpg',
      type: 'missed',
      video: false
    }
  ];

  constructor() {}

  ngOnInit() {}
}
