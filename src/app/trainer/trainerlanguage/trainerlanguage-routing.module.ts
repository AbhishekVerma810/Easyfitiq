import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerlanguagePage } from './trainerlanguage.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerlanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerlanguagePageRoutingModule {}
