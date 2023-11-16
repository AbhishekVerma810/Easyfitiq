import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraineraccountPageRoutingModule } from './traineraccount-routing.module';

import { TraineraccountPage } from './traineraccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraineraccountPageRoutingModule
  ],
  declarations: [TraineraccountPage]
})
export class TraineraccountPageModule {}
