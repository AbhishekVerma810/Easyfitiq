import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'client-homepage',
        loadChildren: () => import('../client-homepage/client-homepage.module').then( m => m.ClientHomepagePageModule)
      },
      {
        path: 'client-exercise',
        loadChildren: () => import('../client-exercise/client-exercise.module').then( m => m.ClientExercisePageModule)
      },
      {
        path: 'client-task',
        loadChildren: () => import('../client-task/client-task.module').then( m => m.ClientTaskPageModule)
      },
      {
        path: 'client-moreinformation',
        loadChildren: () => import('../client-moreinformation/client-moreinformation.module').then( m => m.ClientMoreinformationPageModule)
      },
      {
        path: 'classified-trainers',
        loadChildren: () => import('../classified-trainers/classified-trainers.module').then( m => m.ClassifiedTrainersPageModule)
      },
      {
        path: 'alltrainers',
        loadChildren: () => import('../alltrainers/alltrainers.module').then( m => m.AlltrainersPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/clientTabs/client-homepage',
    pathMatch: 'full'
   }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
