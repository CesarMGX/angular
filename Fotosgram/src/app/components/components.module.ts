import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChatComponent } from './item-chat/item-chat.component';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';



@NgModule({
  declarations: [
    ItemChatComponent,
    LayoutComponent,
    CardPostComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    ItemChatComponent,
    LayoutComponent,
    CardPostComponent
  ]
})
export class ComponentsModule { }
