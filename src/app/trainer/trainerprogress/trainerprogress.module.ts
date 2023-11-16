import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TrainerprogressPageRoutingModule } from './trainerprogress-routing.module';

import { TrainerprogressPage } from './trainerprogress.page';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    TrainerprogressPageRoutingModule,
    // ChartsModule,
  ],
  declarations: [TrainerprogressPage]
})
export class TrainerprogressPageModule {}
