import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainerhomePageRoutingModule } from './trainerhome-routing.module';

import { TrainerhomePage } from './trainerhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainerhomePageRoutingModule
  ],
  declarations: [TrainerhomePage]
})
export class TrainerhomePageModule {}
