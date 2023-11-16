import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { Platform } from '@ionic/angular'; // Add the import for Platform
import { App } from '@capacitor/app'; // Import 'App' from Capacitor
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private _location: Location,
    private storage:Storage,
    private TranslateService:TranslateService,
    private platform: Platform // Add Platform to the constructor
  ) {
     this.storage.create();
    // this.TranslateService.setDefaultLang('english');
    //  this.TranslateService.addLangs(['arbic', 'english']);
    const Login = localStorage.getItem('BetterHealthLogin');
    this.setupHardwareBackButton();
    
    if (Login === 'client') {
      this.router.navigate(['/clientTabs/tabs/client-homepage']);
    } else if (Login === 'trainer') {
      this.router.navigate(['/trainerTabs/tabs/tainerhome']);
    } else {
      this.router.navigate(['/splashscreen']);
    }
  }

  setupHardwareBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/clientTabs/tabs/client-homepage') || this._location.isCurrentPathEqualTo('/splashscreen') || this._location.isCurrentPathEqualTo('/trainerTabs/tabs/tainerhome')) {
        console.log('Show Exit Alert!');
        this.showExitConfirm();
      } else {
        console.log('Navigate to back page');
        this._location.back();
      }
    });
  }

  showExitConfirm() {
    this.alertController.create({
      header: 'Exit',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Stay',
          role: 'cancel',
          handler: () => {
            console.log('Application exit prevented!');
          }
        },
        {
          text: 'Exit',
          handler: () => {
            if (navigator['app'] && navigator['app'].exitApp) {
              navigator['app'].exitApp();
            } else {
              // Use Capacitor's App plugin to exit the app
              App.exitApp();
            }
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }
}
