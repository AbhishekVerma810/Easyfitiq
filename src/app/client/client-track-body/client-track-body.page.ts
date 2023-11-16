import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { MessageService } from 'src/app/servicess/message.service';
import { TranslateService } from '@ngx-translate/core';

import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';
@Component({
  selector: 'app-client-track-body',
  templateUrl: './client-track-body.page.html',
  styleUrls: ['./client-track-body.page.scss'],
})
export class ClientTrackBodyPage implements OnInit {
  weight: number;
  waist: number;
  chest: number;
  biceps: number;
  triceps: number;
  date: string;
  uid: string;
  neck:number;
  thighs:number;
  calves:number;

  constructor(private translate:TranslateService,private router: Router,private authservice :AuthserviceService, private message: MessageService,private translationService:TranslationServiceService,) {}
  ngOnInit(): void {
    this.uid = localStorage.getItem('userDataa');
  }
 
  saveMeasurement() {
  if (!this.weight || !this.waist || !this.chest || !this.biceps || !this.triceps || !this.date) {

    const translatedMessage = this.translate.instant('All_the_fields_are_required');
    this.message.presentToast(translatedMessage, 'danger');
    return; 
  }
    const userdata = {
          weight: this.weight,
          waist: this.waist,
          chest: this.chest,
          biceps: this.biceps,
          triceps: this.triceps,
          neck:this.neck,
          thighs:this.thighs,
          calves:this.calves,
          date: this.date,
          uid:this.uid,
    };
   try{
    const res= this.authservice.storebodytrack(userdata)
    console.log('store user dataa',res)
    // this.message.presentToast('Measurement_saved_succesfully', 'success');
    const translatedMessage = this.translate.instant('Measurement_saved_succesfully');
    this.message.presentToast(translatedMessage, 'success');
    this.weight = null;
    this.waist = null;
    this.chest = null;
    this.biceps = null;
    this.neck=null;
    this.thighs=null;
    this.calves=null;
    this.triceps = null;
    this.date = null;
   }catch(err){
    console.log('store user dataa',err);
    this.message.presentToast('Sothing wrong ', 'danger');
    const translatedMessage = this.translate.instant('somethingwent_wrong');
    this.message.presentToast(translatedMessage, 'danger');
   }
    console.log('Measurement saved');
  }
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
  }
  viewHistoricData() {
    this.router.navigate(['/client-view-bodytrack']);
  }
}