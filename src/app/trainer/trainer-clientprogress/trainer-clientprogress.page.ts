import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { TranslationServiceService } from '../services/translation-services/translation-service.service'; // Corrected import statement

@Component({
  selector: 'app-trainer-clientprogress',
  templateUrl: './trainer-clientprogress.page.html',
  styleUrls: ['./trainer-clientprogress.page.scss'],
})
export class TrainerClientprogressPage implements OnInit {
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
    private datePipe: DatePipe,
    private translationService:TranslationServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['uid'];
      console.log('this.uid=====>', this.userId);
    });

    this.getExercises();
  }
  ionViewViewEnter() {
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
