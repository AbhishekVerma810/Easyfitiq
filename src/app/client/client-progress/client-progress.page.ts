

// import { Component, OnInit } from '@angular/core';
// import { AuthserviceService } from 'src/app/servicess/authservice.service';
// declare var google: any;

// @Component({
//   selector: 'app-client-progress',
//   templateUrl: './client-progress.page.html',
//   styleUrls: ['./client-progress.page.scss'],
// })
// export class ClientProgressPage implements OnInit {
//   exercises: any;
//   dataLoaded: boolean = false;
//   uid: string;
//   dailyProgress: any = {};
//   selectedDate: Date; // Use a Date object for selectedDate

//   constructor(private authservice: AuthserviceService) {}

//   ngOnInit() {
//     google.charts.load('current', { packages: ['corechart', 'bar'] });
//     google.charts.setOnLoadCallback(() => {
//       this.loadData().then(() => this.drawMaterial());
//     });
//   }

//   ionViewWillEnter() {
//     this.uid = localStorage.getItem('userDataa');
//     this.loadData();
//   }

//   loadData() {
//     return new Promise((resolve) => {
//       this.authservice.getexercise(this.uid).subscribe((res: any[]) => {
//         this.exercises = res;
//         console.log('res=>', res);
//         this.dailyProgress = {};

//         for (let exercise of this.exercises) {
//           const date = exercise.startDate;
//           console.log('your date', this.selectedDate);

//           if (this.isDateSelected(date)) {
//             console.log('your date, my date', date);

//             if (!this.dailyProgress[date]) {
//               this.dailyProgress[date] = 0;
//             }

//             if (exercise.exercisesdone) {
//               this.dailyProgress[date] += 100;
//             }
//           }
//         }

//         this.dataLoaded = true;
//         resolve(true);
//       });
//     });
//   }

//   isDateSelected(date: string) {
//     const sevenDaysAgo = new Date();
//     sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6); // 6 days ago
  
//     const selected = new Date(this.selectedDate);
//     const exerciseDate = new Date(date);
  
//     return exerciseDate >= sevenDaysAgo && exerciseDate <= selected;
//   }
  

//   filterExercises() {
//     this.loadData().then(() => this.drawMaterial());
//   }

//   drawMaterial() {
//     if (!this.dataLoaded) {
//       return;
//     }

//     var chartData = [['Day', 'Total Progress']];
//     console.log('daily progress', this.dailyProgress);

//     for (const day in this.dailyProgress) {
//       chartData.push([day, this.dailyProgress[day]]);
//     }

//     var data = google.visualization.arrayToDataTable(chartData);

//     var materialOptions = {
//       chart: {
//         title: 'Your Progress',
//       },
//       hAxis: {
//         title: 'Total Progress',
//         minValue: 0,
//         maxValue: 100,
//       },
//       vAxis: {},
//       bars: 'horizontal',
//     };

//     var materialChart = new google.charts.Bar(
//       document.getElementById('chart_div')
//     );

//     materialChart.draw(data, materialOptions);
//   }
// }


import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';

@Component({
  selector: 'app-client-progress',
  templateUrl: './client-progress.page.html',
  styleUrls: ['./client-progress.page.scss'],
})
export class ClientProgressPage implements OnInit {
items: any[] = [];
exerciseAssignments: any[] = [];
userId: string;
assignmentsByDate: { [key: string]: any[] };
outputArray: any[];
selectedDate: Date = new Date(); // Set to a specific date

constructor(
  private route: ActivatedRoute,
  private authservice: AuthserviceService,
  private afFirestore: AngularFirestore,
  private translationService:TranslationServiceService,
  private datePipe: DatePipe
) {}

ngOnInit() {
  // this.route.params.subscribe((params) => {
  //   this.userId = params['uid'];
  //   console.log('this.uid=====>', this.userId);
  // });
  this.userId=localStorage.getItem('userDataa');
  this.getExercises();
}
ionViewWillEnter(){
  this.translationService.setInitialAppLanguage();
 }
getExercises() {
  this.authservice.getexercise(this.userId).subscribe((res: any[]) => {
    console.log('Received exercises', res);
    this.items = res;
    this.organizeByDay();
  });
}

organizeByDay() {
  const sevenDaysAgo = new Date(this.selectedDate);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6); // 6 days ago

  this.exerciseAssignments = this.items
    .filter((item) => this.isDateSelected(item.startDate))
    .map((item) => {
      const startDate = new Date(item.startDate);
      item.dayName = this.getDayName(startDate.getDay());
      item.formattedDate = this.formatDate(startDate);
      return item;
    });

  this.assignmentsByDate = {};
  this.exerciseAssignments.forEach((assignment) => {
    const date = assignment.formattedDate;
    if (!this.assignmentsByDate[date]) {
      this.assignmentsByDate[date] = [];
    }
    this.assignmentsByDate[date].push(assignment);
  });

  this.outputArray = [];
  for (const key in this.assignmentsByDate) {
    this.outputArray.push({
      iscomplete: this.assignmentsByDate[key][0].exercisesdone,
      date: key,
      dayName: this.assignmentsByDate[key][0].dayName,
      data: this.assignmentsByDate[key],
    });
  }
  console.log('Updated outputArray', this.outputArray);
}

formatDate(date: Date): string {
  if (date) {
    return this.datePipe.transform(date, 'dd MMM');
  } else {
    return '';
  }
}

getMonthAbbreviation(monthIndex: number): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthIndex];
}

getDayName(dayIndex: number): string {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[dayIndex];
}

isDateSelected(date: string) {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6); // 6 days ago

  const selected = new Date(this.selectedDate);
  const exerciseDate = new Date(date);

  return exerciseDate >= sevenDaysAgo && exerciseDate <= selected;
}

filterExercises() {
  this.getExercises();
}
}
