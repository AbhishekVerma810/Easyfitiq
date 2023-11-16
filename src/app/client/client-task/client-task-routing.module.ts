import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientTaskPage } from './client-task.page';

const routes: Routes = [
  {
    path: '',
    component: ClientTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientTaskPageRoutingModule {}
