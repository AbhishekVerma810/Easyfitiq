import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientExcerciseHistoryPage } from './client-excercise-history.page';

const routes: Routes = [
  {
    path: '',
    component: ClientExcerciseHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientExcerciseHistoryPageRoutingModule {}
