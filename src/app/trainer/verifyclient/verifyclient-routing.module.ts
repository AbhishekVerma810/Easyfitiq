import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyclientPage } from './verifyclient.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyclientPageRoutingModule {}
