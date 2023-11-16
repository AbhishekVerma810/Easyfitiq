import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';
@Component({
  selector: 'app-client-task',
  templateUrl: './client-task.page.html',
  styleUrls: ['./client-task.page.scss'],
})
export class ClientTaskPage implements OnInit {
  form: FormGroup; 
  // userInput: string;
  selectedVideoIndex: number = -1; 
  exercises: any[];
  iscompleted:any;
  isVideoVisible:boolean=false;
  items:any[];
  embedVideoUrl: SafeResourceUrl;newUrl: string;
  date:any;
  exerciseDone:boolean=true;
  videoLink: SafeUrl;
  isChecked: boolean = true;
  videoUrl:any="https://www.youtube.com/embed/";
  uid: any;
  userInput:any;
  exerciseAssignments: any[];
  item: any[];
  monthAbbreviation: string;
  dates: number;
  userId: string;
  userdata: any[];
  startdate: any;
  constructor(private translationService:TranslationServiceService,private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute,private authservice:AuthserviceService,private firestore :AngularFirestore,private sanitizer: DomSanitizer) { 
   console.log('videoLink======>',this.videoLink)
   this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
   this.form = this.formBuilder.group({
    userInput: ['', Validators.required], 
  });
  }
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
   }
  async Addresults(exerciseName) {
    if (this.form.valid) {
      const result = this.form.value.userInput;
      console.log('User input:', result);
      try {
        await this.authservice.addResult(this.userId,result,this.startdate,exerciseName);
         this.form.reset();
       } catch (err) {
           console.error('Error:', err);
        }
       } else {
         console.log('Please enter a valid result.');
    }
  }
  showVideo(video) {
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
  updateCheckboxvvb(){

  }
  navigatehistory(exerciseName){
     this.router.navigate([`/client-excercise-history/${exerciseName}`])
  }
  // showVideos(){
  //   console.log('trueeee',true)
  //   this.isVideoVisible = !this.isVideoVisible;
  // }
  showVideos(index: number) {
    this.selectedVideoIndex = index;
  }
  ngOnInit() {
    this.userId= localStorage.getItem('userDataa');
    this.route.params.subscribe((params) => {
      this.startdate = params['uid'];
  
    });
    this.authservice.getmyexercise(this.userId,this.startdate).subscribe((res)=>{
      this.userdata=res;
      this.userdata.map(item => {
       if (item.startDate ===   this.startdate ) {
         this.userdata=res;
         this.iscompleted= this.userdata[0].exercisesdone;
          this.exercises = res;
          this.items = res;
        }
      });
    
      this.organizeByDay();
      this.date= this.exercises[0].startdate
      const taskvideolink=this.exercises[0].youtubeLink;
   
      
      const parts = taskvideolink.split('v=');
      if (parts.length === 2) {
        const videoId = parts[1];
        this.newUrl = `https://www.youtube.com/embed/${videoId}`;
       
        this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.newUrl);
         } else {
        console.log("Invalid YouTube video link");
      }
     })
   }
  // updateCheckbox(exerciseId: string, dayOfWeek, isChecked: any) {
  //    try{
  //     console.log('exerciseId, dayOfWeek, isChecked=========>',exerciseId, dayOfWeek, isChecked)
  //     const data=this.authservice.updateExercise(exerciseId, dayOfWeek, isChecked)
  //     console.log('excess updated =====>',data)
  //     }catch(err){
  //      console.log('excess updated =====>',err)
  //   }
  // }
 
  organizeByDay() {
      this.exerciseAssignments = this.items.map((item) => {
      const dayIndex = new Date(item.startDate).getDay();
      item.dayName = this.getDayName(dayIndex);
      item.formattedDate = this.formatDate(item.startDate);
      console.log('item======>',item)
      this.item=this.items ;
      return item;
    });
  }

  getDayName(dayIndex) {
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[dayIndex];
  }
  formatDate(dateString: string): string {
    if (dateString) {
      const date = new Date(dateString);
      const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      this.monthAbbreviation = months[date.getMonth()];
      this.dates = date.getDate();
      console.log(this.monthAbbreviation,this.dates)
      return `${this.monthAbbreviation} ${this.date}`;
    } else {
      return '';
    }
  }
  // Addresult(){
  //     let data=this.authservice.addresult(this.userInput);
  // }
  // async Addresult() {
  //   if(this.userInput){
  //     try {
  //       await this.authservice.addResult(this.userId, this.userInput,this.startdate);
  //       this.userInput='';
  //     } catch (err) {
  //     console.error('Error:', err);
  //   }
  //   }
  //   else{
  //        console.log('addresult-=====>')
  //   }
  //  }
async updateCheckbox(){
  //  this.exerciseDone=!this.exerciseDone;
    try {
          await this.authservice.taskdone(this.userId,this.exerciseDone,this.startdate);
          this.exerciseDone=!this.exerciseDone;
        } catch (err) {
          console.error('Error:', err);
     }
   }
  }

