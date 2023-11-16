import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClientExercisePageRoutingModule } from './client-exercise-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientExercisePage } from './client-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClientExercisePageRoutingModule
  ],
  providers:[DatePipe],
  declarations: [ClientExercisePage]
})
export class ClientExercisePageModule {}
