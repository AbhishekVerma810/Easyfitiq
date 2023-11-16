import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';

@Component({
  selector: 'app-client-moreinformation',
  templateUrl: './client-moreinformation.page.html',
  styleUrls: ['./client-moreinformation.page.scss'],
})
export class ClientMoreinformationPage implements OnInit {
 
  constructor(private translationService:TranslationServiceService,private router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
   }
  profile(){
      this.router.navigate(['/client-profilepage']);
  }
  Language(){
      this.router.navigate(['/client-language-selector']);
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
  localStorage.removeItem('BetterHealthLogin');
  this.router.navigate(['/splashscreen']);
  }
}
