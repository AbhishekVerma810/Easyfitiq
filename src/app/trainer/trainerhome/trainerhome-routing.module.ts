import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerhomePage } from './trainerhome.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerhomePageRoutingModule {}
