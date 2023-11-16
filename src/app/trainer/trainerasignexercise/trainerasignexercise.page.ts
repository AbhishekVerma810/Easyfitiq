

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFire Firestore
// import { ToastController } from '@ionic/angular';
// import { MessageService } from '../services/message.service';
// import { LoaderService } from '../services/loader.service';

// @Component({
//   selector: 'app-trainerasignexercise',
//   templateUrl: './trainerasignexercise.page.html',
//   styleUrls: ['./trainerasignexercise.page.scss'],
// })
// export class TrainerasignexercisePage implements OnInit {
//   exerciseForm: FormGroup;
//   uid: any;
//   suggestedExercises: string[] = ['Exercise 1', 'Exercise 2', 'Exercise 3'];
//   selectedExercise: any;
//   showSuggestions = false;
//   days:any[];
//   toggleSuggestions() {
//     this.showSuggestions = true;
//   }

//   selectExercise(exercise: string) {
//     this.selectedExercise = exercise;
//     this.showSuggestions = false;
//   }

//   onInputBlur() {
//     if (!this.selectedExercise) {
//       this.showSuggestions = false;
//     }
//   }

//   constructor(
//     private fb: FormBuilder,
//     private toastController:ToastController,
//     private loader: LoaderService,
//     private message: MessageService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private firestore: AngularFirestore
//   ) {
//     this.exerciseForm = this.fb.group({
//       // clientName: ['', Validators.required],
//       exerciseName: ['', Validators.required],
//       startDate: ['',Validators.required],
//       // endDate: ['',Validators.required],
//       // restday:[''],
//       // daysOfWeek: [[]],
//       // daysOfWeek: [],
//       sets: ['', Validators.required],
//       repetitions: ['', Validators.required],
//       youtubeLink: ['', Validators.required],
//     });
//   }
//   ngOnInit() {
//     this.route.params.subscribe((params) => {
//       this.uid = params['uid'];
//       console.log('this.uid=====>', this.uid);

//     });
//   }
//   submitForm() {
//     const traineruid = localStorage.getItem('userDataa');
//     console.log('this.exerciseForm=====>',this.exerciseForm.value)
//     if (this.exerciseForm.valid) {
//       this.days=[];
//       const exerciseData = this.exerciseForm.value;
//       const daysOfWeek=exerciseData.daysOfWeek;
//       for( let day of daysOfWeek){
//         let a ={
//              day:day,
//              iscompleted:false
//         }
//         console.log('aaaaa',a)
//         this.days.push(a);
//          }
//       // this.exerciseForm.value.daysOfWeek=this.days;
//       exerciseData['daysOfWeek']=this.days;
//       console.log('this.vbnjmklalkjhvb===>',this.days)
//       console.log('resofday',daysOfWeek)
//       exerciseData.uid = this.uid; 
//       exerciseData.traineruid=traineruid;
//       console.log('uiddddd',this.uid)
//       console.log('Exercise data saved successfully.',exerciseData);
//       this.firestore
//         .collection('exercises') 
//         .add(exerciseData)
//         .then(() => {
//           this.message.presentToast('Create Successfully', 'success');
//           console.log('Exercise data saved successfully.');
//           this.exerciseForm.reset();
//         })
//         .catch((error) => {
//           this.message.presentToast('Error saving exercise data', 'Danger');
//           console.error('Error saving exercise data:', error);
//         });
//      }
//   }
//   }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFire Firestore
import { ToastController } from '@ionic/angular';
import { MessageService } from '../services/message.service';
import { LoaderService } from '../services/loader.service';
import { TranslationServiceService } from '../services/translation-services/translation-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-trainerasignexercise',
  templateUrl: './trainerasignexercise.page.html',
  styleUrls: ['./trainerasignexercise.page.scss'],
})
export class TrainerasignexercisePage implements OnInit {
  exerciseForm: FormGroup;
  uid: any;
  suggestedExercises: string[] = ['Exercise 1', 'Exercise 2', 'Exercise 3'];
  selectedExercise: any;
  showSuggestions = false;
  days:any[];
  toggleSuggestions() {
    this.showSuggestions = true;
  }

  selectExercise(exercise: string) {
    this.selectedExercise = exercise;
    this.showSuggestions = false;
  }

  onInputBlur() {
    if (!this.selectedExercise) {
      this.showSuggestions = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private toastController:ToastController,
    private loader: LoaderService,
    private message: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private translationService:TranslationServiceService,
    private translate:TranslateService,
  ) {
    this.exerciseForm = this.fb.group({

      exerciseName: ['', Validators.required],
      startDate: ['',Validators.required],
      sets: ['', Validators.required],
      repetitions: ['', Validators.required],
      youtubeLink: ['', Validators.required],
    });
  }
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.uid = params['uid'];
      console.log('this.uid=====>', this.uid);

    });
  }
  navigateBack(){
     this.router.navigate(['/trainerclients'])
  }
  getMinDate(): string {
    const today = new Date();
    const minDate = today.toISOString().substr(0, 10);
    return minDate;
  }
  
  submitForm() {
    const traineruid = localStorage.getItem('userDataa');
    console.log('this.exerciseForm=====>',this.exerciseForm.value)
    if (this.exerciseForm.valid) {
      const exerciseData = this.exerciseForm.value;
      exerciseData.uid = this.uid; 
      console.log('Exercise data saved successfully.',exerciseData);
      this.firestore
        .collection('exercises') 
        .add(exerciseData)
        .then(() => {
      
          const translatedMessage = this.translate.instant('Create_Successfully');
          this.message.presentToast(translatedMessage, 'success');
          console.log('Exercise data saved successfully.');
          this.exerciseForm.reset();
        })
        .catch((error) => {
          this.message.presentToast('Error saving exercise data', 'Danger');
          console.error('Error saving exercise data:', error);
        });
     }
  }
  }
