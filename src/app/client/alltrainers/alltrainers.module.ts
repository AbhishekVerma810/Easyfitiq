import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { AlltrainersPageRoutingModule } from './alltrainers-routing.module';

import { AlltrainersPage } from './alltrainers.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    AlltrainersPageRoutingModule
  ],
  declarations: [AlltrainersPage]
})
export class AlltrainersPageModule {}
