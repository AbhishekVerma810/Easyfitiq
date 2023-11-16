import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Capacitor } from '@capacitor/core';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';

@Component({
  selector: 'app-classified-trainers',
  templateUrl: './classified-trainers.page.html',
  styleUrls: ['./classified-trainers.page.scss'],
})
export class ClassifiedTrainersPage implements OnInit {
  userdata: any[] = [];
  filteredUsers: any[] = [];
  searchTerm = '';
  results: any[];

  constructor(
    private router: Router,
    private afFirestore: AngularFirestore,
    private translationService: TranslationServiceService,
  ) { }

  ngOnInit() {
    this.getuserdata();
  }
  ionViewWillEnter() {
    this.translationService.setInitialAppLanguage();
  }
  getuserdata() {
    const uid = localStorage.getItem('userDataa');
    try {
      const userDataObservable = this.afFirestore.collection('ClassifiedTrainer').valueChanges();
      userDataObservable.subscribe((data: any[]) => {
        this.userdata = data.filter(user => user.traineruid !== uid);
        // Sort the userdata array alphabetically by the 'name' property
        this.userdata.sort((a, b) => a.name.localeCompare(b.name));
        if (this.userdata.length > 0) {
          console.log('User data found:', this.userdata[0].name);
          this.results = [...this.userdata];
          this.filteredUsers = this.userdata;
        } else {
          console.log('User data not found.');
        }
      }, (error) => {
        console.log('Error:', error);
      });
    } catch (error) {
      console.log('Error fetching user data', error);
    }
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.filteredUsers.filter((d) => {
      if (typeof d.name === 'string') {
        return d.name.toLowerCase().includes(query);
      } else {
        this.getuserdata();
      }
    });
  }
  navigateToUserDetail(uid: string) {
    console.log('Navigate to user with UID:', uid);
    this.router.navigate([`client-view-classified/${uid}`]);
  }
}
