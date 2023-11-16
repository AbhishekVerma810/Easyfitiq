import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationServiceService } from '../services/translation-services/translation-service.service'; // Corrected import statement

@Component({
  selector: 'app-trainerlanguage',
  templateUrl: './trainerlanguage.page.html',
  styleUrls: ['./trainerlanguage.page.scss'],
})
export class TrainerlanguagePage implements OnInit {
  selectedLanguage:any;
  languages = [];

  constructor(private router: Router, private translationService: TranslationServiceService) {} // Corrected variable names
  ionViewWillEnter() {
    console.log('selected language ===> ', this.selectedLanguage);
    this.translationService.setInitialAppLanguage();
    
  }
  selectLanguage() {
 
    this.translationService.setLanguage(this.selectedLanguage);
  }

  ngOnInit() {
   
    this.languages = this.translationService.getLanguages();
    this.selectedLanguage = this.translationService.selected;
  }
}
