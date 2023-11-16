import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';
import { MessageService } from '../services/message.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trainerregiterclient',
  templateUrl: './trainerregiterclient.page.html',
  styleUrls: ['./trainerregiterclient.page.scss'],
})
export class TrainerregiterclientPage implements OnInit {
  loginForm: FormGroup;
  showcard: boolean;
  showform: boolean = true;
  correctOTP: string;
  otp1: any;
  otp2: any;
  otp3: any;
  otp4: any;
  otpData: any;
  fullOTP: any;
  otp: any;
  formattedDate: string;


  constructor(private route: Router,
    private router: Router,
    private fb: FormBuilder,
    private translate: TranslateService,
    private apiService: ApiService,
    private loader: LoaderService,
    private message: MessageService
  ) {
    this.dateformate()
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      selectedCountryCode: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  navigateToAddClients() {
    this.route.navigate(['/'])
  }
  submitForm() {
    if (this.loginForm.invalid) {
      const translatedMessage = this.translate.instant('All_the_fields_are_required');
      this.message.presentToast(translatedMessage, 'danger');
      return;
    }
    const data = {
      ...this.loginForm.value,
      JoiningDate: this.formattedDate,
    };
    this.loader.show();
    console.log(this.loginForm.value);
    console.log('data=====>', data)
    this.apiService.clientRegister(data).then(
      (res) => {
        this.loader.dismiss();
        const translatedMessage = this.translate.instant('Client_Regiter_Successfully');
        this.message.presentToast(translatedMessage, 'success');
        // this.message.presentToast('Client Regiter Successfully', 'success');
        console.log('Login success', res);
        this.apiService.registerUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(
          (response) => {
            console.log(response); // Handle the response here
          },
          (error) => {
            console.error(error); // Handle errors here
            const translatedMessage = this.translate.instant('Client_Regiter_Successfully');
            this.message.presentToast(translatedMessage, 'success');
          }
        );
        this.loginForm.reset();
        this.otp1 = '';
        this.otp2 = '';
        this.otp3 = '';
        this.otp4 = '';
        this.router.navigate(['/trainerTabs/tabs/tainerhome']);

      },
      (error) => {
        this.loader.dismiss();
        if (error) {
          this.message.presentToast('Regitration failed', 'danger');
          this.loginForm.reset();
          this.otp1 = '';
          this.otp2 = '';
          this.otp3 = '';
          this.otp4 = '';
        } else {
          this.message.presentToast('Regitration failed', 'danger');
          this.loginForm.reset();
          this.otp1 = '';
          this.otp2 = '';
          this.otp3 = '';
          this.otp4 = '';
        }
        console.error('Login error', error);
      }
    );
  }

  sendOtp() {



    this.loader.show();

    // Send OTP to the user's email
    this.apiService.verifyclient(this.loginForm.value.email).subscribe(
      (res) => {
        this.showcard = true;
        this.showform = false;
        console.log('res=====>', res)
        this.otpData = res;

        this.loader.dismiss();
        this.message.presentToast('Sent OTP to your Email', 'success');

        // this.otpSent = true;
      },
      (error) => {
        this.loader.dismiss();
        if (error.status === 401) {
          this.message.presentToast('Email or Password Incorrect', 'danger');
        } else {
          this.message.presentToast('Login failed', 'danger');
          this.loader.dismiss();
        }
        console.error('Login error', error);
        this.loader.dismiss();
      }
    );
  }

  verifyclient() {
    this.fullOTP = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}`;
    // if (fullOTP===this.correctOTP) {
    console.log('fullOTP====>', this.otpData.otp)
    this.otp = this.otpData.otp;
    if (this.fullOTP == this.otp) {
      this.submitForm();
      this.showcard = false;
      this.showform = true;
    } else {
      console.error('Incorrect OTP. Please try again.');
      this.message.presentToast('Incorrect OTP. Please try again.', 'danger');
    }
  }
  uid(uid: any) {
    throw new Error('Method not implemented.');
  }
  dateformate() {
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








