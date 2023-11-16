import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientProfilepagePage } from './client-profilepage.page';

const routes: Routes = [
  {
    path: '',
    component: ClientProfilepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientProfilepagePageRoutingModule {}
