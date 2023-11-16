import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientProgressPageRoutingModule } from './client-progress-routing.module';

import { ClientProgressPage } from './client-progress.page';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClientProgressPageRoutingModule
  ],
  providers:[DatePipe],
  declarations: [ClientProgressPage]
})
export class ClientProgressPageModule {}
