import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';

@Component({
  selector: 'app-client-excercise-history',
  templateUrl: './client-excercise-history.page.html',
  styleUrls: ['./client-excercise-history.page.scss'],
})
export class ClientExcerciseHistoryPage implements OnInit {
//   exerciseAssignments: any[] = [];
//   assignmentsByDate: { [key: string]: any[] } = {};
//   uid: any;
//   userDataObservable: any;
 
//   exercisename: any;
//   item: any;
//   items: any;
//   monthAbbreviation: string;
//   dates: number;
//   date: any;

//   constructor(private translationService:TranslationServiceService,private router: Router, private route: ActivatedRoute, private ApiService: AuthserviceService, private afFirestore: AngularFirestore) {}

//   ionViewWillEnter() {
//     this.translationService.setInitialAppLanguage();
//     this.getexercise();
//   }
//   ngOnInit() {
//     this.route.params.subscribe((params) => {
//       this.exercisename = params['uid'];
//       console.log('this.ecerciess name=====>', this.uid);
//     });
//    this.uid = localStorage.getItem('userDataa');
//    }
//    getObjectKeys(obj: object): string[] {
//     return Object.keys(obj);
//   }

//   getexercise() {
//     try {
//       this.userDataObservable = this.afFirestore.collection("exercises", ref => ref.where('uid', '==', this.uid).where('exerciseName','==' ,this.exercisename)).valueChanges();
//       this.userDataObservable.subscribe(
//         (exercise: any[]) => {
//           console.log('exercise', exercise);
//           this.exerciseAssignments = exercise;
//           console.log('this.exerciseAssignments', this.exerciseAssignments);
//           this.assignmentsByDate = {}; 
//           this.organizeByDay();
//           this.exerciseAssignments.forEach((assignment) => {
//           const date = assignment.startDate;
//             if (!this.assignmentsByDate[date]) {
//               this.organizeByDay();
//               this.assignmentsByDate[date] = [];
//             }
//             this.assignmentsByDate[date].push(assignment);
//             const outputArray = [...this.assignmentsByDate[date], ...this.items];
//             console.log('outputArray====>',outputArray)
//            });
//           },
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
//     this.exerciseAssignments =this.exerciseAssignments.map((item:any) => {
//     const dayIndex = new Date(item.startDate).getDay();
//     item.dayName = this.getDayName(dayIndex);
//     item.formattedDate = this.formatDate(item.startDate);
//     console.log('item======>',item)
//     this.items=item;
//     return item;
//   });
// }

// getDayName(dayIndex) {
//   const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
//   return daysOfWeek[dayIndex];
// }
// formatDate(dateString: string): string {
//   if (dateString) {
//     const date = new Date(dateString);
//     const months = [
//       'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//     ];
//     this.monthAbbreviation = months[date.getMonth()];
//     this.dates = date.getDate();
//     console.log(this.monthAbbreviation,this.dates)
//     return `${this.monthAbbreviation} ${this.dates}`;
//   } else {
//     return '';
//   }
//  }
// }

exerciseAssignments: any[] = [];
outputArray: any[] = [];
uid: any;
exercisename: any;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private afFirestore: AngularFirestore,
  private translationService: TranslationServiceService
) {}

async ionViewWillEnter() {
  this.uid = localStorage.getItem('userDataa')
  this.translationService.setInitialAppLanguage();
  this.route.params.subscribe((params) => {
    this.exercisename = params['uid'];
    console.log(' this.exercisename', this.exercisename)
  });
  
  console.log(' this.exercisename', this.uid)
  this.getExercise();
}

ngOnInit() {
   
}

private async getExercise() {
  try {
    const snapshot = await this.afFirestore
      .collection('exercises', (ref) => ref.where('uid', '==', this.uid).where('exerciseName','==', this.exercisename))
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

