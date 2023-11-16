import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: 'splashscreen',
  //   pathMatch: 'full'
  // },
  {
    path: 'trainerTabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'clientTabs',
    loadChildren: () => import('./client/clientTabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./trainer/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then(m => m.SplashscreenPageModule)
  },
  {
    path: 'forgotepassword',
    loadChildren: () => import('./trainer/forgotepassword/forgotepassword.module').then(m => m.ForgotepasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./client/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'trainerhome',
    loadChildren: () => import('./trainer/trainerhome/trainerhome.module').then(m => m.TrainerhomePageModule)
  },
  {
    path: 'trainerworkoutpage',
    loadChildren: () => import('./trainer/trainerworkoutpage/trainerworkoutpage.module').then(m => m.TrainerworkoutpagePageModule)
  },
  {
    path: 'trainerprogress',
    loadChildren: () => import('./trainer/trainerprogress/trainerprogress.module').then(m => m.TrainerprogressPageModule)
  },
  {
    path: 'trainertasks',
    loadChildren: () => import('./trainer/trainertasks/trainertasks.module').then(m => m.TrainertasksPageModule)
  },
  {
    path: 'trainermoreinformation',
    loadChildren: () => import('./trainer/trainermoreinformation/trainermoreinformation.module').then(m => m.TrainermoreinformationPageModule)
  },
  {
    path: 'trainerasignexercise/:uid',
    loadChildren: () => import('./trainer/trainerasignexercise/trainerasignexercise.module').then(m => m.TrainerasignexercisePageModule)
  },
  {
    path: 'trainerasignexercise',
    loadChildren: () => import('./trainer/trainerasignexercise/trainerasignexercise.module').then(m => m.TrainerasignexercisePageModule)
  },
  {
    path: 'trainerallexercise/:uid',
    loadChildren: () => import('./trainer/trainerallexercise/trainerallexercise.module').then(m => m.TrainerallexercisePageModule)
  },
  {
    path: 'trainerallexercise',
    loadChildren: () => import('./trainer/trainerallexercise/trainerallexercise.module').then(m => m.TrainerallexercisePageModule)
  },
  {
    path: 'trainerprofile',
    loadChildren: () => import('./trainer/trainerprofile/trainerprofile.module').then(m => m.TrainerprofilePageModule)
  },
  {
    path: 'traineraccount',
    loadChildren: () => import('./trainer/traineraccount/traineraccount.module').then(m => m.TraineraccountPageModule)
  },
  {
    path: 'trainerregiterclient',
    loadChildren: () => import('./trainer/trainerregiterclient/trainerregiterclient.module').then(m => m.TrainerregiterclientPageModule)
  },
  {
    path: 'trainerclients',
    loadChildren: () => import('./trainer/trainerclients/trainerclients.module').then(m => m.TrainerclientsPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./trainer/privacypolicy/privacypolicy.module').then(m => m.PrivacypolicyPageModule)
  },
  {
    path: 'trainerlanguage',
    loadChildren: () => import('./trainer/trainerlanguage/trainerlanguage.module').then(m => m.TrainerlanguagePageModule)
  },
  {
    path: 'clientlogin',
    loadChildren: () => import('./client/clientlogin/clientlogin.module').then(m => m.ClientloginPageModule)
  },
  {
    path: 'client-homepage',
    loadChildren: () => import('./client/client-homepage/client-homepage.module').then(m => m.ClientHomepagePageModule)
  },
  {
    path: 'client-forgotpassword',
    loadChildren: () => import('./client/client-forgotpassword/client-forgotpassword.module').then(m => m.ClientForgotpasswordPageModule)
  },
  {
    path: 'client-task/:uid',
    loadChildren: () => import('./client/client-task/client-task.module').then(m => m.ClientTaskPageModule)
  },
  {
    path: 'client-moreinformation',
    loadChildren: () => import('./client/client-moreinformation/client-moreinformation.module').then(m => m.ClientMoreinformationPageModule)
  },
  {
    path: 'classified-trainers',
    loadChildren: () => import('./client/classified-trainers/classified-trainers.module').then( m => m.ClassifiedTrainersPageModule)
  },
  {
    path: 'client-track-body',
    loadChildren: () => import('./client/client-track-body/client-track-body.module').then( m => m.ClientTrackBodyPageModule)
  },
  {
    path: 'client-view-bodytrack',
    loadChildren: () => import('./client/client-view-bodytrack/client-view-bodytrack.module').then( m => m.ClientViewBodytrackPageModule)
  },
  {
    path: 'client-view-classified/:uid',
    loadChildren: () => import('./client/client-view-classified/client-view-classified.module').then( m => m.ClientViewClassifiedPageModule)
  },
  {
    path: 'client-profilepage',
    loadChildren: () => import('./client/client-profilepage/client-profilepage.module').then( m => m.ClientProfilepagePageModule)
  },
  {
    path: 'client-language-selector',
    loadChildren: () => import('./client/client-language-selector/client-language-selector.module').then( m => m.ClientLanguageSelectorPageModule)
  },
  {
    path: 'client-progress',
    loadChildren: () => import('./client/client-progress/client-progress.module').then( m => m.ClientProgressPageModule)
  },
  {
    path: 'client-exercise',
    loadChildren: () => import('./client/client-exercise/client-exercise.module').then( m => m.ClientExercisePageModule)
  },
  {
    path: 'client-excercise-history/:uid',
    loadChildren: () => import('./client/client-excercise-history/client-excercise-history.module').then( m => m.ClientExcerciseHistoryPageModule)
  },
  {
    path: 'trainer-clientprogress/:uid',
    loadChildren: () => import('./trainer/trainer-clientprogress/trainer-clientprogress.module').then( m => m.TrainerClientprogressPageModule)
  },
  {
    path: 'verifyclient/:uid',
    loadChildren: () => import('./trainer/verifyclient/verifyclient.module').then( m => m.VerifyclientPageModule)
  },
  {
    path: 'alltrainers',
    loadChildren: () => import('./client/alltrainers/alltrainers.module').then( m => m.AlltrainersPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/client-homepage',
  //   pathMatch: 'full'
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
