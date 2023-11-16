// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Browser } from '@capacitor/browser';
// import { TranslationServiceService } from '../../trainer/services/translation-services/translation-service.service'; // Corrected import statement

// @Component({
//   selector: 'app-alltrainers',
//   templateUrl: './alltrainers.page.html',
//   styleUrls: ['./alltrainers.page.scss'],
// })
// export class AlltrainersPage implements OnInit {

//   public userList = [];
//   mobilenumber: any;

//   constructor(private afFirestore:AngularFirestore,private translationService:TranslationServiceService) {}
//    ngOnInit() {
     
//    }
//    ionViewWillEnter(){
//     this.translationService.setInitialAppLanguage();
//     this.getuserdata();
//    }
   
//   async openWhatsApp(selectedCountryCode,mobilenumber) {

//     this.mobilenumber = (selectedCountryCode +' '+ mobilenumber);
//     console.log('this.mobilenumber===>,',this.mobilenumber)
//     const phoneNumber = '+91 8103182388'; 
//     const message = 'Hello, I want to chat with you!'; 
//     const url = `https://api.whatsapp.com/send?phone=${this.mobilenumber}&text=${encodeURIComponent(message)}`;
//      await Browser.open({ url});
//   }
//    async openTelegram(selectedCountryCode,mobilenumber) {
//     this.mobilenumber = (selectedCountryCode +' '+ mobilenumber);
//     const phoneNumber = '+918103182388'; 
//     const message = 'Hello, I want to chat with you!'; 
//     const url = `https://t.me/${mobilenumber}?text=${encodeURIComponent(message)}`;
//     await Browser.open({ url });
//   }
//   getuserdata() {
//     try {
//         const uid = localStorage.getItem('userDataa');
//         const userDataObservable = this.afFirestore.collection("trainer").valueChanges();
//         userDataObservable.subscribe((userData: any[]) => {
//         console.log('usersss', userData);
//         this.userList=userData;
        
//         console.log('Mobile number:', this.mobilenumber);
//         console.log('this.userList=====>',this.userList[0].selectedCountryCode )
//       },(error) => {
//        console.log('Error:', error);
//      });
//    } catch (error) {
//      console.log('Error fetching user data', error);
//    }
//  }
// }


import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Browser } from '@capacitor/browser';
import { TranslationServiceService } from '../../trainer/services/translation-services/translation-service.service';

@Component({
  selector: 'app-alltrainers',
  templateUrl: './alltrainers.page.html',
  styleUrls: ['./alltrainers.page.scss'],
})
export class AlltrainersPage implements OnInit {
  public userList = [];
  displayedUsers: any[] = [];
  mobilenumber: any;
  usersPerPage: number = 20;
  currentPage: number = 1;
  showAllUsers: boolean = false;

  constructor(private afFirestore: AngularFirestore, private translationService: TranslationServiceService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.translationService.setInitialAppLanguage();
    this.getuserdata();
  }

  async openWhatsApp(selectedCountryCode, mobilenumber) {
    this.mobilenumber = (selectedCountryCode + ' ' + mobilenumber);
    console.log('this.mobilenumber===>,', this.mobilenumber);
    const phoneNumber = '+91 8103182388';
    const message = 'Hello, I want to chat with you!';
    const url = `https://api.whatsapp.com/send?phone=${this.mobilenumber}&text=${encodeURIComponent(message)}`;
    await Browser.open({ url });
  }
 async openTelegram(selectedCountryCode, mobilenumber) {
    this.mobilenumber = (selectedCountryCode + ' ' + mobilenumber);
    const phoneNumber = '+918103182388';
    const message = 'Hello, I want to chat with you!';
    const url = `https://t.me/${mobilenumber}?text=${encodeURIComponent(message)}`;
    await Browser.open({ url });
  }
   getuserdata() {
    try {
      const uid = localStorage.getItem('userDataa');
      const userDataObservable = this.afFirestore.collection("trainer").valueChanges();
      userDataObservable.subscribe((userData: any[]) => {
        console.log('usersss', userData);
        this.userList = userData;
        this.loadMoreUsers();
        console.log('this.userList=====>', this.userList[0].selectedCountryCode);
      }, (error) => {
        console.log('Error:', error);
      });
    } catch (error) {
      console.log('Error fetching user data', error);
    }
  }

  loadMoreUsers() {
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    const endIndex = startIndex + this.usersPerPage;

    if (startIndex < this.userList.length) {
      this.displayedUsers = this.displayedUsers.concat(this.userList.slice(startIndex, endIndex));
      this.currentPage++;

      if (startIndex >= this.userList.length) {
        this.showAllUsers = true;
      }
    }
  }
}
