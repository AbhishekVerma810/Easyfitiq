import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientProgressPage } from './client-progress.page';

const routes: Routes = [
  {
    path: '',
    component: ClientProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientProgressPageRoutingModule {}
