import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TrainerasignexercisePageRoutingModule } from './trainerasignexercise-routing.module';
import { TrainerasignexercisePage } from './trainerasignexercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    IonicModule,
    
    TrainerasignexercisePageRoutingModule
  ],
  declarations: [TrainerasignexercisePage]
})
export class TrainerasignexercisePageModule {}
