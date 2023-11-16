import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientTrackBodyPage } from './client-track-body.page';

const routes: Routes = [
  {
    path: '',
    component: ClientTrackBodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientTrackBodyPageRoutingModule {}
