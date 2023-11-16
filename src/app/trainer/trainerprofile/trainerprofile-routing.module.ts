import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerprofilePage } from './trainerprofile.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerprofilePageRoutingModule {}
