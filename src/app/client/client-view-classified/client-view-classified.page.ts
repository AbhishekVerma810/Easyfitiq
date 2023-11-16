import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';
@Component({
  selector: 'app-client-view-classified',
  templateUrl: './client-view-classified.page.html',
  styleUrls: ['./client-view-classified.page.scss'],
})
export class ClientViewClassifiedPage implements OnInit {
  user: any[];
  uid: any;

  constructor(private authService:AuthserviceService,private Router:Router,private route:ActivatedRoute
    ,private translationService:TranslationServiceService) { }
   ngOnInit() {
      this.route.params.subscribe((params) => {
      this.uid = params['uid'];
      console.log('this.uid=====>', this.uid);
    });
    this.getTrainerData();
  }  
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
  }
  getTrainerData() {
    this.authService
      .getClassifiedTrainerTrainerData(this.uid)
      .subscribe((res) => {
       this.user = res;
        console.log('reeeeeeeee',res)
      })
  }
}
