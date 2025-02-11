import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorServiceService {
  private jugadores = [
    { name: 'IIPapilechosoII', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VqSju_TeygZgO17EXzJ69N0l0cyCBiXzIQ&s' },
    { name: 'thedavis_333', avatar: 'https://i.pinimg.com/474x/eb/da/17/ebda17e08e45aa83fc8eed8586060790.jpg' },
    { name: 'ULTRA_23_11', avatar: 'https://i.pinimg.com/236x/9b/50/50/9b505050a9d436d51947b95d7e1af99f.jpg' },
    { name: 'MonkyBB_312', avatar: 'https://preview.redd.it/xbox-360-default-gamerpics-my-beloved-multi-image-post-v0-5bgu9m1iodmb1.png' },
    { name: 'haloReach333', avatar: 'https://preview.redd.it/y9pz1e3fbkwa1.png' },
    { name: '*rosita crazy*', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3onwPmZNdQ1sIlK_g80S9J_aM-41kDYCHjA&s' },
  ];

  getJugadores() {
    return this.jugadores;
  }

  constructor() { }
}
