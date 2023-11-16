import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainerworkoutpagePageRoutingModule } from './trainerworkoutpage-routing.module';

import { TrainerworkoutpagePage } from './trainerworkoutpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainerworkoutpagePageRoutingModule
  ],
  declarations: [TrainerworkoutpagePage]
})
export class TrainerworkoutpagePageModule {}
