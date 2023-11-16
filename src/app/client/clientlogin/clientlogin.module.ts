import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientloginPageRoutingModule } from './clientlogin-routing.module';

import { ClientloginPage } from './clientlogin.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClientloginPageRoutingModule
  ],
  declarations: [ClientloginPage]
})
export class ClientloginPageModule {}
