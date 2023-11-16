import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
const LNG_KEY = 'SELECTED_LANGUAGE'; // Corrected variable name

@Injectable({
  providedIn: 'root',
})
export class TranslationServiceService {
  selected = '';

  constructor(
    private translate: TranslateService,
    private plt: Platform,
    private storage: Storage
  ) {
    this.setInitialAppLanguage();
  }
  instant(msg:any){
   
  }
   setInitialAppLanguage() {
    let language = this.translate.getBrowserLang(); 
    this.translate.setDefaultLang(language); 

    this.storage.get('LNG_KEY').then((value) => {
      if (value) {
        this.translate.use(value);
        this.setLanguage(value);
        this.selected = value;
      }
    });
  }

  getLanguages() {
    return [
      { text: 'English', value: 'english' },
      { text: 'Arabic', value: 'Arabic' }, 
    ];
  }
  setLanguage(language) {
    this.translate.use(language);
    this.selected = language;
    this.storage.set('LNG_KEY', language)
   }
}
