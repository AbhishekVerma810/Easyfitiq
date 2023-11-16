import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientViewClassifiedPage } from './client-view-classified.page';

const routes: Routes = [
  {
    path: '',
    component: ClientViewClassifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientViewClassifiedPageRoutingModule {}
