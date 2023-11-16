// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

// import { Capacitor } from '@capacitor/core';
// import { TranslationServiceService } from '../services/translation-services/translation-service.service'; // Corrected import statement
// import { AuthserviceService } from 'src/app/servicess/authservice.service';

// @Component({
//   selector: 'app-trainerhome',
//   templateUrl: './trainerhome.page.html',
//   styleUrls: ['./trainerhome.page.scss'],
// })
// export class TrainerhomePage implements OnInit {
//   userdata: any[] = [];
//   filteredUsers: any[] = [];
//   searchTerm = '';
//   uid:any;
//   results: any[];


//   constructor(
//     private router: Router,
//     private authservice:AuthserviceService,
//     private afFirestore: AngularFirestore,
//     private translationService:TranslationServiceService,
//   ) {}
//      ionViewWillEnter(){
//       this.translationService.setInitialAppLanguage();
//        this.uid = localStorage.getItem('userDataa')
//       this.getuserdata();
      
//     }
//     ngOnInit(): void {
    
//      }

//   getuserdata() {
   
//     try {
//       const userDataObservable = this.afFirestore.collection('users').valueChanges();
//       userDataObservable.subscribe((data: any[]) => {
//       this.userdata = data.filter(user => user.traineruid !== this.uid);
    
//         this.filteredUsers= this.userdata;
        
//       }, (error) => {
//         console.log('Error:', error);
//       });
//     } catch (error) {
//       console.log('Error fetching user data', error);
//     }
//   }
// handleInput(event) {
//    const query = event.target.value.toLowerCase();
//    console.log('hello userrrrrrrrrrrrrrrr=>',query)
//   //  this.filteredUsers = this.filteredUsers.filter(contact => {
//   // //  return contact.email.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   // this.results = this.filteredUsers.filter((d) => d.toLowerCase().indexOf(query) > -1);
//   // });
//   this.filteredUsers = this.filteredUsers.filter((d) => d.toLowerCase().indexOf(query) > -1);
//     console.log('hello abhishek here is your contact list')
//  }
//   navigateToUserDetail(uid: string) {
//     console.log('Navigate to user with UID:', uid);
//     this.router.navigate([`/verifyclient/${uid}`]);
//   }
//   sendEmail() {
   
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Capacitor } from '@capacitor/core';
import { TranslationServiceService } from '../services/translation-services/translation-service.service';
 import { AuthserviceService } from 'src/app/servicess/authservice.service';

@Component({
  selector: 'app-trainerhome',
  templateUrl: './trainerhome.page.html',
  styleUrls: ['./trainerhome.page.scss'],
})
export class TrainerhomePage implements OnInit {
  userdata: any[] = [];
  filteredUsers: any[] = [];
  searchTerm = '';
  uid: any;
  results: any[];

  constructor(
    private router: Router,
    private authService: AuthserviceService,
    private afFirestore: AngularFirestore,
    private translationService: TranslationServiceService
  ) {}

  ionViewWillEnter() {
    this.translationService.setInitialAppLanguage();
    this.uid = localStorage.getItem('userDataa');
    this.getuserdata();
  }

  ngOnInit(): void {}

  // getuserdata() {
  //   try {
  //     const userDataObservable = this.afFirestore
  //     .collection('users')
  //     .valueChanges();
  //     userDataObservable.subscribe(
  //       (data: any[]) => {
  //         this.userdata = data.filter(
  //           (user) => user.traineruid !== this.uid
  //         );
  //         this.results = [...this.userdata];
  //         this.filteredUsers = this.userdata;
  //       },
  //       (error) => {
  //         console.log('Error:', error);
  //       }
  //     );
  //   } catch (error) {
  //     console.log('Error fetching user data', error);
  //   }
  // }
  getuserdata() {
    try {
      const userDataObservable = this.afFirestore
        .collection('users')
        .valueChanges();
  
      userDataObservable.subscribe(
        (data: any[]) => {
          console.log('data==>',data)
          this.results = data.filter(
            (user) => !user.traineruid
          );
          console.log('data==>',  this.results)
          this.filteredUsers = this.userdata;
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    } catch (error) {
      console.log('Error fetching user data', error);
    }
  }
  
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results  = this.filteredUsers.filter((d) => {
      if (typeof d.email === 'string') {
        return d.email.toLowerCase().includes(query);
      } else {
        this.ionViewWillEnter();
       }
    });
  }
  navigateToUserDetail(uid: string) {
    console.log('Navigate to user with UID:', uid);
    this.router.navigate([`/verifyclient/${uid}`]);
  }

  sendEmail() {}
}
