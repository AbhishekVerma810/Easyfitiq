import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlltrainersPage } from './alltrainers.page';

const routes: Routes = [
  {
    path: '',
    component: AlltrainersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlltrainersPageRoutingModule {}
