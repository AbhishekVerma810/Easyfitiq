import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TrainerallexercisePageRoutingModule } from './trainerallexercise-routing.module';

import { TrainerallexercisePage } from './trainerallexercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    TrainerallexercisePageRoutingModule
  ],
  declarations: [TrainerallexercisePage]
})
export class TrainerallexercisePageModule {}
