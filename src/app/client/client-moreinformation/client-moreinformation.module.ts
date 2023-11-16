import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientMoreinformationPageRoutingModule } from './client-moreinformation-routing.module';
import { ClientMoreinformationPage } from './client-moreinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    ClientMoreinformationPageRoutingModule
  ],
  declarations: [ClientMoreinformationPage]
})
export class ClientMoreinformationPageModule {}
