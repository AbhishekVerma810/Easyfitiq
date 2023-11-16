import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { IonicModule } from '@ionic/angular';

import { ClientForgotpasswordPageRoutingModule } from './client-forgotpassword-routing.module';

import { ClientForgotpasswordPage } from './client-forgotpassword.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    IonicModule,
    ClientForgotpasswordPageRoutingModule
  ],
  declarations: [ClientForgotpasswordPage]
})
export class ClientForgotpasswordPageModule {}
