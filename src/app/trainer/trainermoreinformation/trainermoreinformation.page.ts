import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { TranslationServiceService } from '../services/translation-services/translation-service.service'; // Corrected import statement

@Component({
  selector: 'app-trainermoreinformation',
  templateUrl: './trainermoreinformation.page.html',
  styleUrls: ['./trainermoreinformation.page.scss'],
})
export class TrainermoreinformationPage implements OnInit {
  
  constructor(private translationService:TranslationServiceService, private afAuth: AngularFireAuth,private router:Router,private alertController:AlertController) {
    // this.translationService.setInitialAppLanguage();
   }
   
  ngOnInit() {
    // this.translationService.setInitialAppLanguage();
  }
  ionViewViewEnter() {
    this.translationService.setInitialAppLanguage();
  }
  profile(){
      this.router.navigate(['/trainerprofile']);
  }
  Language(){
      this.router.navigate(['/trainerlanguage']);
  }
   Privacy(){
    this.router.navigate(['/privacypolicy']);
  }
async logOut() {
  const alert = await this.alertController.create({
    header: 'Logout',
    message: 'Do you want to log out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
         
        },
      },
      {
        text: 'OK',
        handler: () => {
          
          this.performLogout();
        },
      },
    ],
  });

  await alert.present();
} 

performLogout() {
  this.afAuth.signOut().then(() => {
    localStorage.removeItem('BetterHealthLogin');
    this.router.navigate(['/splashscreen']);
  }).catch((error) => {
    console.error('Error logging out:', error);
  });
}
}
