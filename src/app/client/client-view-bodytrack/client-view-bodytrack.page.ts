import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';

@Component({
  selector: 'app-client-view-bodytrack',
  templateUrl: './client-view-bodytrack.page.html',
  styleUrls: ['./client-view-bodytrack.page.scss'],
})
export class ClientViewBodytrackPage implements OnInit {
  exerciseAssignments: any[] = [];
  assignmentsByDate: { [key: string]: any[] } = {};
  uid: any;
  userDataObservable: any;

  constructor(private translationService:TranslationServiceService,private route: Router,private authservice: AuthserviceService, private afFirestore: AngularFirestore) {}

  ionViewWillEnter() {
    this.translationService.setInitialAppLanguage();
    this.getexercise();
  }

  ngOnInit() {
     this.uid = localStorage.getItem('userDataa');
      console.log('this.uid=====>', this.uid);
    
  }

  getObjectKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  getexercise() {
    try {
      this.userDataObservable = this.afFirestore.collection("bodytrack", ref => ref.where('uid', '==', this.uid)).valueChanges();
      this.userDataObservable.subscribe(
        (exercise: any[]) => {
          console.log('exercise', exercise);
          this.exerciseAssignments = exercise;
          console.log('this.exerciseAssignments', this.exerciseAssignments);
          this.assignmentsByDate = {}; 
          this.exerciseAssignments.forEach((assignment) => {
            const date = assignment.date;
            if (!this.assignmentsByDate[date]) {
              this.assignmentsByDate[date] = [];
            }
            this.assignmentsByDate[date].push(assignment);
          });
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    } catch (error) {
      console.log('Error fetching user data', error);
    }
  }
}
