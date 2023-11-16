import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotepasswordPage } from './forgotepassword.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotepasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotepasswordPageRoutingModule {}
