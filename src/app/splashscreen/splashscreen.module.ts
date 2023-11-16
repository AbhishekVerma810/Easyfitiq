import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SplashscreenPageRoutingModule } from './splashscreen-routing.module';
import { SplashscreenPage } from './splashscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    SplashscreenPageRoutingModule
  ],
  declarations: [SplashscreenPage]
})
export class SplashscreenPageModule {}
