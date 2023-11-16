import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Swiper } from 'swiper';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';
@Component({
  selector: 'app-client-homepage',
  templateUrl: './client-homepage.page.html',
  styleUrls: ['./client-homepage.page.scss'],
})
export class ClientHomepagePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  uid: string;
  username:any;
  imageUrl: any;
  swiperSlideChanged(e: any) {
    // console.log('changed: ', e);
  }
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
 
  images = [
   '../../../assets/image/easy_fit_logo.png'
  ];
  constructor(private translationService:TranslationServiceService,private authservice:AuthserviceService,private afFirestore:AngularFirestore) { }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
    this.getuserdata();
  }
 
  async getuserdata() {
    this.uid = localStorage.getItem('userDataa');
    console.log("res===============>", this.uid);
    if(this.uid){
      const userdata=this.afFirestore.collection('users').doc(this.uid).valueChanges().subscribe((Res: any) => {
      console.log("UserDetail:::-->", Res);
      
      this.username=Res.name;
      this.imageUrl=Res.photoURL
      console.log(' this.imageUrl======>',this.imageUrl)
      ;
    }, Err => {
      console.log("errrrr===>", Err);
    });
  } 
}
  
}

