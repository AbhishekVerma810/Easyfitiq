import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module'; 
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TrainerlanguagePageRoutingModule } from './trainerlanguage-routing.module';

import { TrainerlanguagePage } from './trainerlanguage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PipesModule,
    TrainerlanguagePageRoutingModule
  ],

  declarations: [TrainerlanguagePage]
})
export class TrainerlanguagePageModule {}
