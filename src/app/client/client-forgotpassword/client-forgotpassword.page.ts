import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../servicess/authservice.service';
import { LoaderService } from '../../trainer/services/loader.service';
import { MessageService } from '../../trainer/services/message.service';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-client-forgotpassword',
  templateUrl: './client-forgotpassword.page.html',
  styleUrls: ['./client-forgotpassword.page.scss'],
})
export class ClientForgotpasswordPage implements OnInit {
  loginForm: FormGroup;
    constructor(private translationService:TranslationServiceService,private fb: FormBuilder,private router:Router,private authService:AuthserviceService, private loader: LoaderService,
    private message: MessageService,private translate:TranslateService) { }
    ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      
    });
  }
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
   }
  submitForm(){
    if (this.loginForm.invalid) {
      const translatedMessage = this.translate.instant('All_the_fields_are_required');
      this.message.presentToast(translatedMessage, 'danger');
      return;
    }
    console.log(this.loginForm.value);
    this.authService.forgotPassword(this.loginForm.value).then((res) => {
       console.log('login success', res);
       const translatedMessage = this.translate.instant('sent_email');
       this.message.presentToast(translatedMessage, 'success');
       this.loginForm.reset();
       })
      .catch((error) => {
        const translatedMessage = this.translate.instant('Email _Incorrect');
        this.message.presentToast(translatedMessage, 'danger');
        console.error('Email sent failed', error);
      });
   }  
}

