import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../trainer/services/api.service';
import { LoaderService } from '../../trainer/services/loader.service';
import { MessageService } from '../../trainer/services/message.service';
import { Browser } from '@capacitor/browser';
import { TranslationServiceService } from '../services/translation-services/translation-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  AdminData: any;
  mobilenumber: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService,
    private loader: LoaderService,
    private message: MessageService,
    private translationService:TranslationServiceService,
    private translate:TranslateService,
  ) {}
  transform(message) {
    return this.translate.instant(message);
  }
  // async openWhatsApp() {
  //   const phoneNumber = '+91 8103182388'; 
  //   const message = 'Hello, I want to chat with you!'; 
  //   const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  //    await Browser.open({ url});
  //   // Open the WhatsApp URL in the InAppBrowser
  //   // this.inAppBrowser.create(url, '_system');
  // }
  async openWhatsApp() {

    this.mobilenumber = (this.AdminData[0].selectedCountryCode +' '+ this.AdminData[0].number);
    console.log('this.mobilenumber===>,',this.mobilenumber)
    const phoneNumber = '+91 8103182388'; 
    const message = 'Hello, I want to chat with you!'; 
    const url = `https://api.whatsapp.com/send?phone=${this.mobilenumber}&text=${encodeURIComponent(message)}`;
     await Browser.open({ url});

  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ionViewWillEnter(){
    this.translationService.setInitialAppLanguage();
    this.getAdminData();
  }
  signup() {
    this.router.navigate(['/signup']);
  }
  forgotPassword() {
    console.log('Hello user');
    this.router.navigate(['/forgetpassword']);
  }
 
  async submitForm() {
    if (this.loginForm.invalid) {
      const translatedMessage = this.translate.instant('All_the_fields_are_required');
      this.message.presentToast(translatedMessage, 'danger');
      return;
    }
    try {
      console.log('train', this.loginForm.value);
      const user = await this.apiService.getLogin(this.loginForm.value);
  
      if (user) {
        const translatedMessage = this.translate.instant('Login_Successfully');
        this.message.presentToast(translatedMessage, 'success');
        this.loginForm.reset();
       localStorage.setItem('BetterHealthLogin','trainer');
        this.router.navigate(['/trainerTabs/tabs/tainerhome']);
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
    this.router.navigate(['/forgotepassword'])
  }
  getAdminData() {
    try {
      this.apiService.getAdminData().then((userData) => {
        this.AdminData = userData;
        console.log('this.AdminData ====>', this.AdminData);
      }).catch((err) => {
        console.log('err ====>', err);
      });
    } catch (error) {
      console.log('Error fetching user data', error);
    }
  }
  
}
