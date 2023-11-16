import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrainerClientprogressPageRoutingModule } from './trainer-clientprogress-routing.module';
import { TrainerClientprogressPage } from './trainer-clientprogress.page';
import { DatePipe } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    TrainerClientprogressPageRoutingModule
  ],
  providers:[DatePipe],
  declarations: [TrainerClientprogressPage]
})
export class TrainerClientprogressPageModule {}
