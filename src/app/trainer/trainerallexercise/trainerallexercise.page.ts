// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ApiService } from '../services/api.service';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { TranslationServiceService } from '../services/translation-services/translation-service.service';

// @Component({
//   selector: 'app-trainerallexercise',
//   templateUrl: './trainerallexercise.page.html',
//   styleUrls: ['./trainerallexercise.page.scss'],
// })
// export class TrainerallexercisePage implements OnInit {
//   exerciseAssignments: any[] = [];
//   assignmentsByDate: { [key: string]: any[] } = {};
//   uid: any;
//   userDataObservable: any;
//   monthAbbreviation: string;
//   dates: number;
//   outputArray: any[] = [];

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private ApiService: ApiService,
//     private afFirestore: AngularFirestore,
//     private translationService: TranslationServiceService
//   ) {
//     this.outputArray = [];
//   }

//   ionViewWillEnter() {
//     this.translationService.setInitialAppLanguage();
//     this.getexercise() 
//   }
//   // ionViewDidLeave() {
//   //   this.outputArray = [];
//   // }
 
//   ngOnInit() {
//     this.route.params.subscribe((params) => {
//       this.uid = params['uid'];
//       console.log('this.uid=====>', this.uid);
//     });
    
//   }

//   getObjectKeys(obj: object): string[] {
//     return Object.keys(obj);
//   }

//   getexercise() {
//     try {
//       this.userDataObservable = this.afFirestore
//         .collection('exercises', (ref) => ref.where('uid', '==', this.uid))
//         .valueChanges();
//         this.userDataObservable.subscribe(
//           (exercise: any[]) => {
//           this.organizeByDay();
//           this.exerciseAssignments = exercise;
//           this.outputArray = [];
//           for (const key in this.assignmentsByDate) {
       
//            this.outputArray.push({
//               date: this.assignmentsByDate[key][0].formattedDate,
//               dayName: this.assignmentsByDate[key][0].dayName,
//               data: this.assignmentsByDate[key],
//             });
//           }
//            console.log('this.outputArray===>', this.outputArray)
//          },
       
//         (error) => {
//           console.log('Error:', error);
//         }
//       );
//     } catch (error) {
//       console.log('Error fetching user data', error);
//     }
//   }

//   createItem() {
//     this.router.navigate([`/trainerasignexercise/${this.uid}`]);
//   }

//   organizeByDay() {
//     this.exerciseAssignments = this.exerciseAssignments.map((item: any) => {
//       const dayIndex = new Date(item.startDate).getDay();
//       item.dayName = this.getDayName(dayIndex);
//       item.formattedDate = this.formatDate(item.startDate);
//       return item;
//     });
//     this.exerciseAssignments.forEach((assignment) => {
//       const date = assignment.startDate;
//       if (!this.assignmentsByDate[date]) {
//         this.assignmentsByDate[date] = [];
//       }
//       this.assignmentsByDate[date].push(assignment);
//     });
//   }

//   getDayName(dayIndex) {
//     const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return daysOfWeek[dayIndex];
//   }
//   formatDate(dateString: string): string {
//     if (dateString) {
//       const date = new Date(dateString);
//       const months = [
//         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//       ];
//       this.monthAbbreviation = months[date.getMonth()];
//       this.dates = date.getDate();
//       return `${this.monthAbbreviation} ${this.dates}`;
//     } else {
//       return '';
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TranslationServiceService } from '../services/translation-services/translation-service.service';

@Component({
  selector: 'app-trainerallexercise',
  templateUrl: './trainerallexercise.page.html',
  styleUrls: ['./trainerallexercise.page.scss'],
})
export class TrainerallexercisePage implements OnInit {
  exerciseAssignments: any[] = [];
  outputArray: any[] = [];
  uid: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private afFirestore: AngularFirestore,
    private translationService: TranslationServiceService
  ) {}

  async ionViewWillEnter() {
    this.translationService.setInitialAppLanguage();
    await this.getExercise();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.uid = params['uid'];
    });
  }

  private async getExercise() {
    try {
      const snapshot = await this.afFirestore
        .collection('exercises', (ref) => ref.where('uid', '==', this.uid))
        .get()
        .toPromise();

      this.exerciseAssignments = snapshot.docs.map((doc) => doc.data());
      this.organizeByDay();
    } catch (error) {
      console.log('Error fetching user data', error);
    }
  }

  private organizeByDay() {
    const assignmentsByDate = this.exerciseAssignments.reduce((acc, assignment) => {
      const startDate = new Date(assignment.startDate); 
      const key = startDate.toDateString();
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(assignment);
      return acc;
    }, {});
      this.outputArray = Object.keys(assignmentsByDate).map((key) => {
      const date = new Date(key);
      const dayName = this.getDayName(date.getDay());
      const formattedDate = this.formatDate(date);
      return {
        date: formattedDate,
        dayName,
        data: assignmentsByDate[key],
      };
    });

   
    this.outputArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  createItem() {
    this.router.navigate([`/trainerasignexercise/${this.uid}`]);
  }

  private getDayName(dayIndex) {
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[dayIndex];
  }

  private formatDate(date: Date): string {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const monthAbbreviation = months[date.getMonth()];
    const day = date.getDate();
    return `${monthAbbreviation} ${day}`;
  }
}

