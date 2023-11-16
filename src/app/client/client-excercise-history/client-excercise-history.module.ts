import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientExcerciseHistoryPageRoutingModule } from './client-excercise-history-routing.module';

import { ClientExcerciseHistoryPage } from './client-excercise-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClientExcerciseHistoryPageRoutingModule
  ],
  declarations: [ClientExcerciseHistoryPage]
})
export class ClientExcerciseHistoryPageModule {}
