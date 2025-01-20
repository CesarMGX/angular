import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingPageRoutingModule } from './floating-routing.module';

import { FloatingPage } from './floating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingPageRoutingModule
  ],
  declarations: [FloatingPage]
})
export class FloatingPageModule {}
