import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPartidaPage } from './edit-partida.page';

const routes: Routes = [
  {
    path: '',
    component: EditPartidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPartidaPageRoutingModule {}
