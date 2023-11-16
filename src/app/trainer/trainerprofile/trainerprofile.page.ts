import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoaderService } from '../services/loader.service';
import { MessageService } from '../services/message.service';
import { TranslationServiceService } from '../services/translation-services/translation-service.service'; // Corrected import statement
import { TranslateService } from '@ngx-translate/core';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.page.html',
  styleUrls: ['./trainerprofile.page.scss'],
})
export class TrainerprofilePage implements OnInit {
  name: string;
  email: string;
  password: string;
  contactNo: string;
  address: string;
  selectedImage: string;
  imageUrl: string;
  uid: string;
  userData: any;
  downloadURL: string;
  selectedCountryCode:any;
  storeBucket: any = getStorage();
  constructor(
    private afStore: AngularFirestore,
    private storage: AngularFireStorage,
    private loader: LoaderService,
    private message: MessageService,
    private translationService: TranslationServiceService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.uid = localStorage.getItem('userDataa');
    this.getuserdata();
  }
  ionViewViewEnter() {
    this.translationService.setInitialAppLanguage();
  }
  async getPicture() {

    console.log('take picture');
    const image = await Camera.getPhoto({
      quality: 64,
      width: 100,
      resultType: CameraResultType.DataUrl,
    });
    this.imageUrl = image.dataUrl;
    this.uploadImage(this.imageUrl);
  }
  async updateProfile() {
    const userDataToUpdate = {
      name: this.name,
      email: this.email,
      contactNo: this.contactNo,
      address: this.address,
      selectedCountryCode:this.selectedCountryCode,
    };
    try {
      await this.afStore.collection('trainer').doc(this.uid).update(userDataToUpdate).then(res => {
        console.log('Profile data updated successfully.');
        const translatedMessage = this.translate.instant('Updated_Successfully');
        this.message.presentToast(translatedMessage, 'success');
      }).catch(err => {
        const translatedMessage = this.translate.instant('somethingwent_wrong');
        this.message.presentToast(translatedMessage, 'success');
      })

    } catch (error) {
      console.error('Error updating profile data:', error);
    }
  }

  async getuserdata() {
    console.log("res====>", this.uid);
    this.afStore.collection('trainer').doc(this.uid).valueChanges().subscribe((Res: any) => {
      console.log("UserDetail:::-->", Res);
      this.userData = Res;
      this.name = this.userData.name;
      this.email = this.userData.email;
      this.password = this.userData.password;
      this.contactNo = this.userData.contactNo;
      this.address = this.userData.address;
      this.selectedCountryCode=this.userData.selectedCountryCode;
      this.imageUrl = this.userData.photoURL;
      console.log('imageUrl====>', this.imageUrl);
    }, Err => {
      console.log("errrrr===>", Err);
    });
  }

  uploadImage(photoURLbase64: string) {
    var photoURLbase64 = photoURLbase64.toString();
    var imgName = new Date().getTime() + '.png';
    const storageRef = ref(this.storeBucket, 'user-profiles/' + imgName);
    uploadString(storageRef, photoURLbase64, 'data_url')
      .then(() => {
        console.log('Image uploaded successfully');
        getDownloadURL(storageRef).then((downloadUrl: any) => {
          console.log('downloadUrl::', downloadUrl);
          this.afStore.collection('trainer').doc(this.uid).update({ photoURL: downloadUrl })
            .then(() => {
              console.log('Image URL updated successfully');
            }).catch((error) => {
              console.log('Error fetching user:', error);
            });
        });
      })
      .catch((error) => {
        console.log('Error uploading image:', error);
      });
   }
}
