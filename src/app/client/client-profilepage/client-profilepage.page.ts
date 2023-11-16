import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoaderService } from '../../servicess/loader.service';
import { MessageService } from '../../servicess/message.service';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { TranslationServiceService } from 'src/app/trainer/services/translation-services/translation-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-client-profilepage',
  templateUrl: './client-profilepage.page.html',
  styleUrls: ['./client-profilepage.page.scss'],
})
export class ClientProfilepagePage implements OnInit {
  selectedCountryCode: any;
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
  storeBucket: any = getStorage();  
  constructor(
    private afStore: AngularFirestore,
    private storage: AngularFireStorage,
    private loader: LoaderService,
    private message: MessageService,
    private translate: TranslateService,
    private translationService: TranslationServiceService,
  ) { }
  ngOnInit() {
    this.uid = localStorage.getItem('userDataa');
    this.getuserdata();
  }
  ionViewWillEnter() {
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
      number: this.contactNo,
      address: this.address,
      selectedCountryCode: this.selectedCountryCode,
    };
    try {
      await this.afStore.collection('users').doc(this.uid).update(userDataToUpdate).then(res => {
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
    this.afStore.collection('users').doc(this.uid).valueChanges().subscribe((Res: any) => {
      console.log("UserDetail:::-->", Res);
      this.userData = Res;
      this.name = this.userData.name;
      this.email = this.userData.email;
      // this.password = this.userData.password;
      this.contactNo = this.userData.number;
      this.address = this.userData.address;
      this.selectedCountryCode = this.userData.selectedCountryCode;
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

          this.afStore
            .collection('users')
            .doc(this.uid)
            .update({ photoURL: downloadUrl })
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
