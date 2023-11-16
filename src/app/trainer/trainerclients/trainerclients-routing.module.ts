import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerclientsPage } from './trainerclients.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerclientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerclientsPageRoutingModule {}
