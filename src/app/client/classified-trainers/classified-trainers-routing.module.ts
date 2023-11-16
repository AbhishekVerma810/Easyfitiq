import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassifiedTrainersPage } from './classified-trainers.page';

const routes: Routes = [
  {
    path: '',
    component: ClassifiedTrainersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassifiedTrainersPageRoutingModule {}
