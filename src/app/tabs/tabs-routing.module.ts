import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    
      // {
      //   path: 'support-team',
      //   loadChildren: () => import('../pages/support-team/support-team.module').then( m => m.SupportTeamPageModule)
      // },
      {
        path: 'tainerhome',
        loadChildren: () => import('../trainer/trainerhome/trainerhome.module').then( m => m.TrainerhomePageModule)
      },
       {
        path: 'trainerhome',
        loadChildren: () => import('../trainer/trainerhome/trainerhome.module').then( m => m.TrainerhomePageModule)
      },
      {
        path: 'trainerprogress',
        loadChildren: () => import('../trainer/trainerprogress/trainerprogress.module').then( m => m.TrainerprogressPageModule)
      },
      {
        path: 'trainertasks',
        loadChildren: () => import('../trainer/trainertasks/trainertasks.module').then( m => m.TrainertasksPageModule)
      },
      {
        path: 'trainermoreinformation',
        loadChildren: () => import('../trainer/trainermoreinformation/trainermoreinformation.module').then( m => m.TrainermoreinformationPageModule)
      },
      {
        path: 'trainerclients',
        loadChildren: () => import('../trainer/trainerclients/trainerclients.module').then( m => m.TrainerclientsPageModule)
      },
      {
        path: 'client-homepage',
        loadChildren: () => import('../client/client-homepage/client-homepage.module').then( m => m.ClientHomepagePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/trainerTabs/tabs/tainerhome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
