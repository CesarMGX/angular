import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPartidaPageRoutingModule } from './edit-partida-routing.module';

import { EditPartidaPage } from './edit-partida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPartidaPageRoutingModule
  ],
  declarations: [EditPartidaPage]
})
export class EditPartidaPageModule {}
