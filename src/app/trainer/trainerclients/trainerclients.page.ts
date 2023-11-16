import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ApiService } from '../services/api.service';
import { TranslationServiceService } from '../services/translation-services/translation-service.service'; // Corrected import statement

@Component({
  selector: 'app-trainerclients',
  templateUrl: './trainerclients.page.html',
  styleUrls: ['./trainerclients.page.scss'],
})
export class TrainerclientsPage implements OnInit {
  userdatas: any[] = []; 
  userData:any;
  userDataObservable: any;
  constructor(private translationService:TranslationServiceService,private route:Router,private afFirestore:AngularFirestore,private ApiService:ApiService) { 
    this.getuserdata();
  }
  ionViewViewEnter() {
    this.translationService.setInitialAppLanguage();
  }
  ngOnInit() {
    this.getuserdata();
  }
  navigateToAddClients(){
    this.route.navigate(['/trainerregiterclient']);
 }
//  getuserdata() {
  // try {
  //     const userDataObservable = this.afFirestore.collection('users').valueChanges();
  //     userDataObservable.subscribe((data: any[]) => {
  //     this.userdata = data;
  //     console.log('usersss', this.userdata[0].name);
  //    },(error) => {
  //     console.log('Error:', error);
  //   });
  //  }catch (error) {
  //   console.log('Error fetching user data', error);
  // }
//  }
  getuserdata() {
   try {
      const uid = localStorage.getItem('userDataa');
      this.userDataObservable = this.afFirestore.collection("users", ref => ref.where('traineruid', '==', uid)).valueChanges();
      this.userDataObservable.subscribe((userData: any[]) => {
      console.log('usersss', userData);
      this.userdatas=userData;
     },(error) => {
      console.log('Error:', error);
    });
  } catch (error) {
    console.log('Error fetching user data', error);
  }
}
navigateToUserDetail(userid){
    this.route.navigate([ `/trainerallexercise/${userid}`]);  
  }
}
