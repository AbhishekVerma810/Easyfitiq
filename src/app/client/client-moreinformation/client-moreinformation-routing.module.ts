import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientMoreinformationPage } from './client-moreinformation.page';

const routes: Routes = [
  {
    path: '',
    component: ClientMoreinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientMoreinformationPageRoutingModule {}
