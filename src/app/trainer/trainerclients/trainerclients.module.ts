import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module'; 

import { IonicModule } from '@ionic/angular';

import { TrainerclientsPageRoutingModule } from './trainerclients-routing.module';

import { TrainerclientsPage } from './trainerclients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    TrainerclientsPageRoutingModule
  ],
  declarations: [TrainerclientsPage]
})
export class TrainerclientsPageModule {}
