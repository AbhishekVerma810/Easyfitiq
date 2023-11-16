import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyclientPageRoutingModule } from './verifyclient-routing.module';

import { VerifyclientPage } from './verifyclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyclientPageRoutingModule
  ],
  declarations: [VerifyclientPage]
})
export class VerifyclientPageModule {}
