import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationServiceService } from '../trainer/services/translation-services/translation-service.service'; 

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {
  languages: { text: string; value: string; }[];
  selectedLanguage: string;

  constructor(private router:Router,private translationService: TranslationServiceService) { }
  ionViewViewEnter() {
    console.log('selectedLanguage=====>',this.selectedLanguage)
    this.translationService.setInitialAppLanguage();
  }
  ngOnInit() {
    this.languages = this.translationService.getLanguages();
    this.selectedLanguage = this.translationService.selected;
  }
  redirectToClientPage() {
    // Add navigation logic to the client page
    this.router.navigate(['/signup']);
  }

  redirectToTrainerPage() {
    // Add navigation logic to the trainer page
    this.router.navigate(['/login']);
  }
  handleChange(e) {
    console.log('ionChange fired with value: ' + e.detail.value); 
    this.selectedLanguage=e.detail.value;
    console.log('selected language ===> ', e.detail.value);
    this.translationService.setLanguage(e.detail.value);

  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }
}
