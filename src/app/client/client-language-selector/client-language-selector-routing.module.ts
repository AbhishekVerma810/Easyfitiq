import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLanguageSelectorPage } from './client-language-selector.page';

const routes: Routes = [
  {
    path: '',
    component: ClientLanguageSelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientLanguageSelectorPageRoutingModule {}
