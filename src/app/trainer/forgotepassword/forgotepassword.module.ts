import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotepasswordPageRoutingModule } from './forgotepassword-routing.module';
import { ForgotepasswordPage } from './forgotepassword.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PipesModule,
    ForgotepasswordPageRoutingModule
  ],
  declarations: [ForgotepasswordPage]
})
export class ForgotepasswordPageModule {}
