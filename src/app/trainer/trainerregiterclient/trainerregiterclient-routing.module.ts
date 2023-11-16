import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerregiterclientPage } from './trainerregiterclient.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerregiterclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerregiterclientPageRoutingModule {}
