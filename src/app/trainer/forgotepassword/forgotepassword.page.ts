import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoaderService } from '../../trainer/services/loader.service';
import { MessageService } from '../../trainer/services/message.service';
import { TranslationServiceService } from '../services/translation-services/translation-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgotepassword',
  templateUrl: './forgotepassword.page.html',
  styleUrls: ['./forgotepassword.page.scss'],
})
export class ForgotepasswordPage implements OnInit {
    loginForm: FormGroup;
    constructor(private translate:TranslateService,private fb: FormBuilder,private router:Router,private authService:ApiService, private loader: LoaderService,  private translationService:TranslationServiceService,
    private message: MessageService) { }
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
        this.message.presentToast('Email _Incorrect', 'danger');
        const translatedMessage = this.translate.instant('Email _Incorrect');
        this.message.presentToast(translatedMessage, 'danger');
        console.error('Email sent failed', error);
      });
   } 
   ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
  } 
}

