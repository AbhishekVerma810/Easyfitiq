import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerworkoutpagePage } from './trainerworkoutpage.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerworkoutpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerworkoutpagePageRoutingModule {}
