import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientHomepagePage } from './client-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: ClientHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientHomepagePageRoutingModule {}
