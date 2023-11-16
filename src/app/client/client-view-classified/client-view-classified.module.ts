import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientViewClassifiedPageRoutingModule } from './client-view-classified-routing.module';

import { ClientViewClassifiedPage } from './client-view-classified.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClientViewClassifiedPageRoutingModule
  ],
  declarations: [ClientViewClassifiedPage]
})
export class ClientViewClassifiedPageModule {}
