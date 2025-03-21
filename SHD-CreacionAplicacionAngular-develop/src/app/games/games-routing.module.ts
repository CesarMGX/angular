import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CardGamePageComponent } from './pages/card-game-page/card-game-page.component';

const routes: Routes = [
  {
    path: '', //Ruta base del módulo games
    component: NavbarComponent, //Componente que contiene la estructura del modelo
    children: [
      { path: 'home', component: GamePageComponent },
      { path: 'games', component: CardGamePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
