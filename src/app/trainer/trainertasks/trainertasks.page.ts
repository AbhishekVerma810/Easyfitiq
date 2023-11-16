import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Browser } from '@capacitor/browser';
import { TranslationServiceService } from '../services/translation-services/translation-service.service'; // Corrected import statement

@Component({
  selector: 'app-trainertasks',
  templateUrl: './trainertasks.page.html',
  styleUrls: ['./trainertasks.page.scss'],
})
export class TrainertasksPage implements OnInit {

  public userList = [];
  mobilenumber: any;

  constructor(private afFirestore:AngularFirestore,private translationService:TranslationServiceService) {}
   ngOnInit() {
     
   }
   ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
    this.getuserdata();
   }
   
  async openWhatsApp(selectedCountryCode,mobilenumber) {

    this.mobilenumber = (selectedCountryCode +' '+ mobilenumber);
    console.log('this.mobilenumber===>,',this.mobilenumber)
    const phoneNumber = '+91 8103182388'; 
    const message = 'Hello, I want to chat with you!'; 
    const url = `https://api.whatsapp.com/send?phone=${this.mobilenumber}&text=${encodeURIComponent(message)}`;
     await Browser.open({ url});
    // Open the WhatsApp URL in the InAppBrowser
    // this.inAppBrowser.create(url, '_system');
  }
   async openTelegram(selectedCountryCode,mobilenumber) {
    // const phoneNumber = '+9 18103182388';
    // const message = 'Hello, I want to chat with you!';
    // const url = `https://api.telegram.org/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    this.mobilenumber = (selectedCountryCode +' '+ mobilenumber);
    const phoneNumber = '+918103182388'; // Replace with the recipient's phone number
    const message = 'Hello, I want to chat with you!'; // Replace with your message
    const url = `https://t.me/${mobilenumber}?text=${encodeURIComponent(message)}`;
    await Browser.open({ url });
  
    // Close the in-app browser when the user is finished.
   
  }
  
  getuserdata() {
    try {
        const uid = localStorage.getItem('userDataa');
        const userDataObservable = this.afFirestore.collection("users", ref => ref.where('traineruid', '==', uid)).valueChanges();
        userDataObservable.subscribe((userData: any[]) => {
        console.log('usersss', userData);
        this.userList=userData;
        
        console.log('Mobile number:', this.mobilenumber);
        console.log('this.userList=====>',this.userList[0].selectedCountryCode )
      },(error) => {
       console.log('Error:', error);
     });
   } catch (error) {
     console.log('Error fetching user data', error);
   }
 }
}
