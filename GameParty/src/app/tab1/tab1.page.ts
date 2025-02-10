import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit, OnDestroy {
  
  images = [
    'https://image.api.playstation.com/vulcan/ap/rnd/202407/1020/91fe046f742042e3b31e57f7731dbe2226e1fd1e02a36223.jpg',
    'https://nosdicengamers.com/wp-content/uploads/2024/08/warzone-temporada-3.jpg',
    'https://cdn2.unrealengine.com/fortnite-na-central-server-region-3-1920x1080-8e53d35d7d26.jpg',
    'https://i.ytimg.com/vi/GcGJ4fe0iNk/maxresdefault.jpg',
  ];
  jugadores = [
    {
      name: 'IIPapilechosoII',
      message: "Saca el fornite papu",
      time: '02:21 PM',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VqSju_TeygZgO17EXzJ69N0l0cyCBiXzIQ&s'
    },
    {
      name: 'thedavis_333',
      message: "Esee, ya no hablas pa jugar un rato",
      time: '08:30 PM',
      avatar: 'https://i.pinimg.com/474x/eb/da/17/ebda17e08e45aa83fc8eed8586060790.jpg'
    },
    {
      name: 'ULTRA_23_11',
      message: "Estuvo chida la partida de ayer, casi me caigo a la lava xdd",
      time: 'Ayer',
      avatar: 'https://i.pinimg.com/236x/9b/50/50/9b505050a9d436d51947b95d7e1af99f.jpg'
    },    {
      name: 'MonkyBB_312',
      message: "Le damos a un cod o que?",
      time: 'Antier',
      avatar: 'https://preview.redd.it/xbox-360-default-gamerpics-my-beloved-multi-image-post-v0-5bgu9m1iodmb1.png?width=640&crop=smart&auto=webp&s=8601c025a54ff14bdcdfc471cab5c2c9d158b8fb'
    },    {
      name: 'haloReach333',
      message: "Ya descargaste el halo?",
      time: '12:43 PM',
      avatar: 'https://preview.redd.it/y9pz1e3fbkwa1.png?auto=webp&s=940707fcf3924216eb6993f22366d53aabc1801c'
    },    {
      name: '*rosita crazy*',
      message: "Vamo a darle al fifa :)",
      time: '10:30 AM',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3onwPmZNdQ1sIlK_g80S9J_aM-41kDYCHjA&s'
    },
 ];

  currentIndex = 0;
  private intervalId: any;

  constructor() {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 3 segundos
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; 
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
