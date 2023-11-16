import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module'; 

import { IonicModule } from '@ionic/angular';

import { TrainermoreinformationPageRoutingModule } from './trainermoreinformation-routing.module';

import { TrainermoreinformationPage } from './trainermoreinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    TrainermoreinformationPageRoutingModule
  ],
  declarations: [TrainermoreinformationPage]
})
export class TrainermoreinformationPageModule {}
