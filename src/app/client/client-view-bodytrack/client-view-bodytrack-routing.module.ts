import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientViewBodytrackPage } from './client-view-bodytrack.page';

const routes: Routes = [
  {
    path: '',
    component: ClientViewBodytrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientViewBodytrackPageRoutingModule {}
