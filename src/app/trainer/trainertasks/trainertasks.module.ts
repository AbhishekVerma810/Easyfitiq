import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module'; 

import { IonicModule } from '@ionic/angular';

import { TrainertasksPageRoutingModule } from './trainertasks-routing.module';

import { TrainertasksPage } from './trainertasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    TrainertasksPageRoutingModule
  ],
  declarations: [TrainertasksPage]
})
export class TrainertasksPageModule {}
