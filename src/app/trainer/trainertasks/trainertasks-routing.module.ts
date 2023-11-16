import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainertasksPage } from './trainertasks.page';

const routes: Routes = [
  {
    path: '',
    component: TrainertasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainertasksPageRoutingModule {}
