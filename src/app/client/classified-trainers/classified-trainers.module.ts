import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClassifiedTrainersPageRoutingModule } from './classified-trainers-routing.module';

import { ClassifiedTrainersPage } from './classified-trainers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    ClassifiedTrainersPageRoutingModule
  ],
  declarations: [ClassifiedTrainersPage]
})
export class ClassifiedTrainersPageModule {}
