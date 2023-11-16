import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerprogressPage } from './trainerprogress.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerprogressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerprogressPageRoutingModule {}
