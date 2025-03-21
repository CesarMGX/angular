import { Component } from '@angular/core';

@Component({
  selector: 'app-card-game-page',
  standalone: false,
  templateUrl: './card-game-page.component.html',
  styleUrl: './card-game-page.component.css'
})
export class CardGamePageComponent {
  games = [
    { name: 'Minecraft', genre: 'Adventure', description: 'Explore a blocky, procedurally-generated 3D world with infinite terrain, and discover and extract raw materials, craft tools and items, and build structures.', image: '/assets/images/minecraft.jpg' },
    { name: 'Grand Theft Auto V', genre: 'Action', description: 'An open-world crime epic set in the sprawling cityscape of Los Santos and its surrounding areas.', image: '/assets/images/gtav.jpg' },
    { name: 'Fortnite', genre: 'Action', description: 'A battle royale shooter that combines gunplay, crafting, and building to create a dynamic competitive experience.', image: '/assets/images/fornite.jpg' },
    { name: 'Roblox', genre: 'Action', description: 'A global platform where millions of people gather together every day to imagine, create, and share experiences with each other in immersive, user-generated 3D worlds.', image: '/assets/images/robux.jpg' }
  ];
}
