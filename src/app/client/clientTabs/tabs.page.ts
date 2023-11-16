import { Component } from '@angular/core';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    constructor(private translationService:TranslationServiceService,) {}
    ionViewWillEnter(){
      this.translationService.setInitialAppLanguage();
    }
}
