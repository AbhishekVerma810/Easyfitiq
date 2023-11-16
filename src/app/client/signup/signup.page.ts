import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,PatternValidator,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { exists } from 'fs';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { LoaderService } from 'src/app/servicess/loader.service';
import { MessageService } from 'src/app/servicess/message.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  loginForm:FormGroup
  name:any;
  email:any;
  password:any;
  phoneNumber: any;
  address: any;
  formattedDate: string;
  constructor(private router:Router,
    private authService:AuthserviceService,
    private loader: LoaderService,
    private message: MessageService,
    private formBuilder: FormBuilder,
    private translate:TranslateService,
    private translationService:TranslationServiceService,) {
      this.dateformate() 
    }
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        name: ['', Validators.required],
        selectedCountryCode: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        number: ['', Validators.required],
        address: ['', Validators.required],
      });
    }
 
  login(){

  }
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
  }
  redirectToLoginPage(){
    this.router.navigate(['/clientlogin'])
  }
  submitForm() {
    if (this.loginForm.invalid) {
      const translatedMessage = this.translate.instant('All_the_fields_are_required');
      this.message.presentToast(translatedMessage, 'danger');
      return;
    }
     console.log('trainer register ',this.loginForm.value);
     const data = {
        ...this.loginForm.value,
        JoiningDate: this.formattedDate,
      };
        this.authService.clientRegister(data).then(res=>{
        const translatedMessage = this.translate.instant('Register_Successfully');
        this.message.presentToast(translatedMessage, 'success');
        this.loginForm.reset();
      }).catch(err=>{
        if (err.code === 'auth/email-already-in-use') {
            const translatedMessage = this.translate.instant('Email_is_already_exists');
            this.message.presentToast(translatedMessage, 'danger');
           }
          console.log('Email already register',err);
      });
    }
    dateformate(){
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; 
      const year = currentDate.getFullYear();
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
      this.formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
       console.log('Formatted Date:', this.formattedDate);
  
    }
 }
