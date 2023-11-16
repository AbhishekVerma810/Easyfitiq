import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerClientprogressPage } from './trainer-clientprogress.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerClientprogressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerClientprogressPageRoutingModule {}
