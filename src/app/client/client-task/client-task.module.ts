import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { IonicModule } from '@ionic/angular';

import { ClientTaskPageRoutingModule } from './client-task-routing.module';

import { ClientTaskPage } from './client-task.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    ClientTaskPageRoutingModule,
    // NgxYoutubePlayerModule,
  ],
  declarations: [ClientTaskPage]
})
export class ClientTaskPageModule {}
