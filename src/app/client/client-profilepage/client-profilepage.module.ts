import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { IonicModule } from '@ionic/angular';

import { ClientProfilepagePageRoutingModule } from './client-profilepage-routing.module';

import { ClientProfilepagePage } from './client-profilepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClientProfilepagePageRoutingModule
  ],
  declarations: [ClientProfilepagePage]
})
export class ClientProfilepagePageModule {}
