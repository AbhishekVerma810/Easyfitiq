import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationServiceService } from '../../trainer/services/translation-services/translation-service.service'; 

@Component({
  selector: 'app-client-language-selector',
  templateUrl: './client-language-selector.page.html',
  styleUrls: ['./client-language-selector.page.scss'],
})
export class ClientLanguageSelectorPage implements OnInit {
  selectedLanguage = 'en'; 
  languages = [];

  constructor(private router: Router, private translationService: TranslationServiceService) {
    console.log('selectedLanguage=====>',this.selectedLanguage)
  } // Corrected variable names
  ionViewViewEnter() {
    console.log('selectedLanguage=====>',this.selectedLanguage)
    this.translationService.setInitialAppLanguage();
  }
  
  selectLanguage() {
    console.log('selected language ===> ', this.selectedLanguage);
    this.translationService.setLanguage(this.selectedLanguage);
  }

  ngOnInit() {
    this.languages = this.translationService.getLanguages();
    this.selectedLanguage = this.translationService.selected;
  }
}
