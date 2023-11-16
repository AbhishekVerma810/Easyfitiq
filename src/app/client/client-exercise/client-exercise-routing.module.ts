import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientExercisePage } from './client-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: ClientExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientExercisePageRoutingModule {}
