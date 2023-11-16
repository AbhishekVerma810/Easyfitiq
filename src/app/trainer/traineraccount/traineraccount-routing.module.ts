import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraineraccountPage } from './traineraccount.page';

const routes: Routes = [
  {
    path: '',
    component: TraineraccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraineraccountPageRoutingModule {}
