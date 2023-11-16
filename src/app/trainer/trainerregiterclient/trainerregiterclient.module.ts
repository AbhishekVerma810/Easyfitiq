import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TrainerregiterclientPageRoutingModule } from './trainerregiterclient-routing.module';

import { TrainerregiterclientPage } from './trainerregiterclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    IonicModule,
    TrainerregiterclientPageRoutingModule
  ],
  declarations: [TrainerregiterclientPage]
})
export class TrainerregiterclientPageModule {}
