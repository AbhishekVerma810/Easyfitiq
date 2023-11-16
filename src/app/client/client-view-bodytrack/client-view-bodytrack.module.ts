import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientViewBodytrackPageRoutingModule } from './client-view-bodytrack-routing.module';

import { ClientViewBodytrackPage } from './client-view-bodytrack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    ClientViewBodytrackPageRoutingModule
  ],
  declarations: [ClientViewBodytrackPage]
})
export class ClientViewBodytrackPageModule {}
