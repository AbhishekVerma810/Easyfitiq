// client-exercise.page.ts

// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Router } from '@angular/router';
// import { AuthserviceService } from 'src/app/servicess/authservice.service';

// @Component({
//   selector: 'app-client-exercise',
//   templateUrl: './client-exercise.page.html',
//   styleUrls: ['./client-exercise.page.scss'],
// })
// export class ClientExercisePage implements OnInit {
//   items: any[] = [];
//   exerciseAssignments: any[] = [];

//   constructor(private router:Router,private authservice: AuthserviceService, private afFirestore: AngularFirestore) {}

//   ngOnInit() {
//     this.getExercises();
//   }

//   getExercises() {
//     this.afFirestore.collection('exercises').valueChanges().subscribe((exercises: any) => {
//       this.items = exercises;
//       console.log('this.item======>',this.items)
//       this.organizeByDay();
//     });
//   }
//   navigatetsak(id){
//     console.log('item iddddddddddddddddddd',id)
//     this.router.navigate([`/client-task/${id}`])
//   }
//   organizeByDay() {
//     this.exerciseAssignments = this.items.map((item) => {
//       const dayIndex = new Date(item.startDate).getDay();
//       item.dayName = this.getDayName(dayIndex);
//       return item;
//     });
//   }

//   getDayName(dayIndex) {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return daysOfWeek[dayIndex];
//   }
// }

// Import DatePipe
// Import DatePipe
// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Router } from '@angular/router';
// import { AuthserviceService } from 'src/app/servicess/authservice.service';
// import { DatePipe } from '@angular/common';
// import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';

// @Component({
//   selector: 'app-client-exercise',
//   templateUrl: './client-exercise.page.html',
//   styleUrls: ['./client-exercise.page.scss'],
// })
// export class ClientExercisePage implements OnInit {
//   items: any[] = [];
//   exerciseAssignments: any[] = [];
//   userId: string;
//   assignmentsByDate: { [key: string]: any[] };
//   outputArray: any[];

//   constructor(
//     private router: Router,
//     private authservice: AuthserviceService,
//     private afFirestore: AngularFirestore,
//     private datePipe: DatePipe,
//     private translationService:TranslationServiceService,
//   ) { }
//    ionViewWillEnter(){
//     this.translationService.setInitialAppLanguage();
//    }
//   ngOnInit() {
//     this.userId = localStorage.getItem('userDataa');
//     this.getExercises();
//   }

//   getExercises() {
//     this.authservice.getexercise(this.userId).subscribe((res: any[]) => {
//       console.log('Received exercises', res);
//       this.items = res;
//       this.organizeByDay();
//     });
//   }

//   navigatetsak(id: string) {
//     console.log('Navigating to task with id', id);
//     this.router.navigate([`/client-task/${id}`]);
//   }

//   organizeByDay() {
//     this.exerciseAssignments = this.items.map((item) => {
//       const startDate = new Date(item.startDate);
//       item.dayName = this.getDayName(startDate.getDay());
//       item.formattedDate = this.formatDate(startDate);
//       return item;
//     });

//     this.assignmentsByDate = {};
//     this.exerciseAssignments.forEach((assignment) => {
//       const date = assignment.formattedDate; // Use the formatted date as the key
//       if (!this.assignmentsByDate[date]) {
//         this.assignmentsByDate[date] = [];
//       }
//       this.assignmentsByDate[date].push(assignment);
//     });

//     this.outputArray = [];
//     for (const key in this.assignmentsByDate) {
//       this.outputArray.push({
//         date: key,
//         dayName: this.assignmentsByDate[key][0].dayName, // Use the day name from the first assignment in the group
//         data: this.assignmentsByDate[key]
//       });
//     }
//     console.log("Updated outputArray", this.outputArray);
//   }

//   formatDate(date: Date): string {
//     if (date) {
//       const day = date.getDate();
//       const monthAbbreviation = this.getMonthAbbreviation(date.getMonth());
//       return `${day} ${monthAbbreviation}`;
//     } else {
//       return '';
//     }
//   }

//   getMonthAbbreviation(monthIndex: number): string {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     return months[monthIndex];
//   }

//   getDayName(dayIndex: number): string {
//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return daysOfWeek[dayIndex];
//   }
// }




import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { DatePipe } from '@angular/common';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';

@Component({
  selector: 'app-client-exercise',
  templateUrl: './client-exercise.page.html',
  styleUrls: ['./client-exercise.page.scss'],
})
export class ClientExercisePage implements OnInit {
  items: any[] = [];
  exerciseAssignments: any[] = [];
  userId: string;
  assignmentsByDate: { [key: string]: any[] };
  outputArray: any[];

  constructor(
    private router: Router,
    private authservice: AuthserviceService,
    private afFirestore: AngularFirestore,
    private datePipe: DatePipe,
    private translationService: TranslationServiceService,
  ) {}

  ionViewWillEnter() {
    this.translationService.setInitialAppLanguage();
  }

  ngOnInit() {
    this.userId = localStorage.getItem('userDataa');
    this.getExercises();
  }

  getExercises() {
    this.authservice.getexercise(this.userId).subscribe((res: any[]) => {
      console.log('Received exercises', res);
      this.items = res;
      this.organizeByDay();
    });
  }

  navigatetsak(id: string) {
    console.log('Navigating to task with id', id);
    this.router.navigate([`/client-task/${id}`]);
  }

  organizeByDay() {
    // Sort the items in descending order by startDate
    this.items.sort((a, b) => (new Date(b.startDate) as any) - (new Date(a.startDate) as any));

    this.assignmentsByDate = {};
    this.items.forEach((item) => {
      const startDate = new Date(item.startDate);
      const formattedDate = this.formatDate(startDate);
      const dayName = this.getDayName(startDate); // Calculate day name here
      if (!this.assignmentsByDate[formattedDate]) {
        this.assignmentsByDate[formattedDate] = [];
      }
      this.assignmentsByDate[formattedDate].push({ ...item, dayName ,});
    });

    this.outputArray = [];
    for (const key in this.assignmentsByDate) {
      this.outputArray.push({
        startDate:this.assignmentsByDate[key][0].startDate,
        date: key,
        dayName: this.assignmentsByDate[key][0].dayName, // Use the day name from the first assignment in the group
        data: this.assignmentsByDate[key],
      });
    }
    console.log('Updated outputArray', this.outputArray);
  }

  formatDate(date: Date): string {
    if (date) {
      const day = date.getDate();
      const monthAbbreviation = this.getMonthAbbreviation(date.getMonth());
      return `${day} ${monthAbbreviation}`;
    } else {
      return '';
    }
  }

  getMonthAbbreviation(monthIndex: number): string {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[monthIndex];
  }
   getDayName(date: Date): string {
    if (date) {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return daysOfWeek[date.getDay()];
    } else {
      return '';
    }
  }
}

