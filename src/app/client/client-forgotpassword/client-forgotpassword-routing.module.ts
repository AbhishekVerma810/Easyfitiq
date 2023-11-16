import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientForgotpasswordPage } from './client-forgotpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ClientForgotpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientForgotpasswordPageRoutingModule {}
