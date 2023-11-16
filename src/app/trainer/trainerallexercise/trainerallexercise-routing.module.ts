import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerallexercisePage } from './trainerallexercise.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerallexercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerallexercisePageRoutingModule {}
