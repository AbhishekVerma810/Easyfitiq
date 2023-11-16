import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { IonicModule } from '@ionic/angular';

import { TrainerprofilePageRoutingModule } from './trainerprofile-routing.module';

import { TrainerprofilePage } from './trainerprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    TrainerprofilePageRoutingModule
  ],
  declarations: [TrainerprofilePage]
})
export class TrainerprofilePageModule {}
