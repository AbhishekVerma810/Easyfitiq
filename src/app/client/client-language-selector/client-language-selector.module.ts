import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ClientLanguageSelectorPageRoutingModule } from './client-language-selector-routing.module';

import { ClientLanguageSelectorPage } from './client-language-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClientLanguageSelectorPageRoutingModule
  ],
  declarations: [ClientLanguageSelectorPage]
})
export class ClientLanguageSelectorPageModule {}
