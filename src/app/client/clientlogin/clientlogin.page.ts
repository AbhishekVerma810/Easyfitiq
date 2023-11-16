import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { exists } from 'fs';
import { AuthserviceService } from 'src/app/servicess/authservice.service';
import { LoaderService } from 'src/app/servicess/loader.service';
import { MessageService } from 'src/app/servicess/message.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';
@Component({
  selector: 'app-clientlogin',
  templateUrl: './clientlogin.page.html',
  styleUrls: ['./clientlogin.page.scss'],
})
export class ClientloginPage implements OnInit {
  loginForm:FormGroup;
  email:any;
  password:any;
  constructor(private router:Router,
    private authService:AuthserviceService,
    private loader: LoaderService,
    private message: MessageService,
    private translationService:TranslationServiceService,
    private translate:TranslateService,
    private formBuilder: FormBuilder,) { }
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
      
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
       
      });
     }
     ionViewWillEnter(){
      this.translationService.setInitialAppLanguage();
    }
    async submitForm() {
      if (this.loginForm.invalid) {
        const translatedMessage = this.translate.instant('All_the_fields_are_required');
        this.message.presentToast(translatedMessage, 'danger');
        return;
      }
      try {
        console.log('train', this.loginForm.value);
        const user = await this.authService.clientLogin(this.loginForm.value);
    
        if (user) {
          const translatedMessage = this.translate.instant('Login_Successfully');
          this.message.presentToast(translatedMessage, 'success');
          this.router.navigate(['/clientTabs/tabs/client-homepage']);
          this.loginForm.reset();
          localStorage.setItem('BetterHealthLogin', 'client');
        } else {
          const translatedMessage = this.translate.instant('Credential_Error');
          this.message.presentToast(translatedMessage, 'danger');
          this.loginForm.reset();
        }
      } catch (error) {
        const translatedMessage = this.translate.instant('Credential_Error');
        this.loginForm.reset();
        this.message.presentToast(translatedMessage, 'danger');
        console.error('Login error', error);
        // Handle any other errors or show an appropriate error message.
      }
    }
    
    redirectToforgotePage(){
       this.router.navigate(['/client-forgotpassword'])
    }
    redirectToLoginPage(){
    this.router.navigate(['/signup'])
  }
}