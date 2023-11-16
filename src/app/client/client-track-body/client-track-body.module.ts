import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientTrackBodyPageRoutingModule } from './client-track-body-routing.module';

import { ClientTrackBodyPage } from './client-track-body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClientTrackBodyPageRoutingModule
  ],
  declarations: [ClientTrackBodyPage]
})
export class ClientTrackBodyPageModule {}
