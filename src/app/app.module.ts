// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { RouteReuseStrategy } from '@angular/router';
// // import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// // import { AppComponent } from './app.component';
// // import { AppRoutingModule } from './app-routing.module';
// // import { AngularFireModule } from '@angular/fire/compat';
// // import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// // import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// // import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// // import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// // import { environment } from '../environments/environment';
// // import { ReactiveFormsModule } from '@angular/forms';

// // @NgModule({
// //   declarations: [AppComponent],
// //   imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
// //     AngularFireModule.initializeApp(environment.firebaseConfig),
// //     AngularFireAuthModule,
// //     AngularFirestoreModule,
// //     AngularFireStorageModule, 
// //     AngularFireDatabaseModule,
// //     ReactiveFormsModule],
// //   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
// //   bootstrap: [AppComponent],
// // })
// // export class AppModule { }

// import { NgModule, isDevMode } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';
// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from '../environments/environment';
// import { ReactiveFormsModule } from '@angular/forms';
// import { register } from 'swiper/element/bundle';
// import { HttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { HttpClientModule } from '@angular/common/http';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, '../assets/langouge/arbic.json', '.json');
// }
// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFireAuthModule,
//     AngularFirestoreModule,
//     AngularFireStorageModule,
//     AngularFireDatabaseModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: TranslateLoader,
//         deps: [HttpClient],
//       },
//     }),

//     ],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Storage } from '@ionic/storage';

import { PipesModule } from 'src/app/pipes/pipes.module'; 

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader, 
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Storage],
  bootstrap: [AppComponent],
})
export class AppModule {}

