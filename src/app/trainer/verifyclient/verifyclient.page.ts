
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../trainer/services/api.service';
import { LoaderService } from '../services/loader.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-verifyclient',
  templateUrl: './verifyclient.page.html',
  styleUrls: ['./verifyclient.page.scss'],
})
export class VerifyclientPage implements OnInit {
  loginForm: FormGroup;
  email:any;
  otp4:any;
  otp1:any;
  otp2:any;
  otp3:any;
  useremail:any;
  showcard:boolean=false;
  newPassword:any;
  correctOTP: any; 
  uid: any;
  otp: any;
  fullOTP: any;
  constructor(     
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService,
    private loader: LoaderService,
    private message: MessageService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.uid = params['uid'];
      console.log('this.uid=====>', this.uid);
    });
    this.sendOtp();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.useremail=this.loginForm.value.email;
   }

  sendOtp() {
     this.apiService.getuser(this.uid).then(res=>{
     this.email=res[0].email;
     console.log(this.email)
     this.showcard = true;
     this.loader.show();
     // Send OTP to the user's email
     this.apiService.verifyclient(this.email).subscribe(
      (res) => {
        console.log('res=====>',res)
        this.correctOTP=res;
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
  }).then(err=>{
    console.log(err)
  })
  }
 verifyclient() {
    this.fullOTP = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}`;
    // if (fullOTP===this.correctOTP) {
      console.log('fullOTP====>',this.fullOTP)
      this.otp=this.correctOTP.otp
    if (this.fullOTP===this.otp.toString()) {
         console.log('user regitersuceesfully ');
          this.apiService.verifytrainerclient(this.uid ).then((res)=>{
             console.log('user verify succesffully ')
             this.otp4='';
             this.otp1='';
             this.otp2='';
             this.otp3='';
             this.message.presentToast('Client regiter Succesfully.', 'success');
             this.router.navigate(['/trainerTabs/tabs/tainerhome']);
          }).catch(err=>{
            console.log('errrrr',err)
          })
          
    } else {
      console.error('Incorrect OTP. Please try again.');
      this.message.presentToast('Incorrect OTP. Please try again.', 'danger');
    }
  }
}






