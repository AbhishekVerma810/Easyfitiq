// import { Injectable } from '@angular/core';
// import { LoaderService } from '../../trainer/services/loader.service';
// import { MessageService } from '../../trainer/services/message.service';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   userInfo: any;
//   user: any;
 

//   constructor(
//     private auth:AngularFireAuth,
//     private loader: LoaderService,
//     private message: MessageService,
//     private afFirestore:AngularFirestore,
//   ) { }
//    async getLogin(data) {
//     try {
//         const userCredential = await this.auth.signInWithEmailAndPassword(data.email, data.password);
//         const user = userCredential.user;
//         console.log('Login successful', user);
//         localStorage.setItem('userDataa', user.uid);
//         return user;
  
//       } catch (error) {
//         console.error('Login error', error);
//         throw error;
//       }
//     }
//     async forgotPassword(data) {
//       try {
//         console.log('data.email',data.email)
//         await this.auth.sendPasswordResetEmail(data.email);
//         console.log('Password reset email sent successfully');
//       } catch (error) {
//         console.error('Failed to send password reset email', error);
//         throw error;
//       }
//   }
//   async clientRegister(data) {
//     console.log('dataaaaaaaaaaaaaaa',data)
//     const storedData = localStorage.getItem('userDataa');
//     console.log('userdataaaaaaaaaaaaaaaa',storedData)
//     try {
//       let userData = null;
  
//       if (storedData) {
//         userData = JSON.parse(storedData.toString());
//         console.log('userdataaaaaaaaaaaaaaaa',userData)
//       }
//       const clientsData = { ...data, uid: userData};

//       console.log('clientsData',clientsData)
//         const userCredential = await this.auth.createUserWithEmailAndPassword(
//           data.email,
//           data.password
//         );
//         this.user = userCredential.user;

    
//         // const userCredential = await this.auth.createUserWithEmailAndPassword(
//         //   clientsData.email,
//         //   clientsData.password
//         // );
//         // this.user = userCredential.user;

  
//       const trainerCollection = await this.afFirestore
//         .collection('users')
//         .doc(this.user.uid)
//         .set(clientsData);
  
//       console.log('Registration successful', trainerCollection);
//       return trainerCollection;
//     } catch (error) {
//       console.error('Registration error', error);
//       throw error;
//     }
//   }
  
  
  
//   getuserdata(){
//     try{
//       const userData= this.afFirestore.collection('users').valueChanges();
//       console.log('userdataaaaaaaaaa',userData)
//     }catch(err){
//       console.log('getting error fetching user data');
//     }
//   }
// }



import { Injectable } from '@angular/core';
import { LoaderService } from '../../trainer/services/loader.service';
import { MessageService } from '../../trainer/services/message.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userInfo: any;
  user: any;
  userDataObservable: any;
  traineruid: string;
  baseUrl = 'https://easyfitiq.com/api.php';
  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
    private loader: LoaderService,
    private message: MessageService,
    private afFirestore: AngularFirestore,
  ) {
    this.traineruid = localStorage.getItem('userDataa');
   }

  // async getLogin(data) {
  //   try {
  //     const userCredential = await this.auth.signInWithEmailAndPassword(data.email, data.password);
  //     const user = userCredential.user;
  //     console.log('Login successful', user);
  //     localStorage.setItem('userDataa', user.uid);
  //     return user;
  //   } catch (error) {
  //     console.error('Login error', error);
  //     throw error;
  //   }
  // }
  async getLogin(data) {
    try {
      // Get the user document from Firestore
      const querySnapshot = await this.afFirestore
        .collection('trainer')
        .ref.where('email', '==', data.email)
        .get();
      if (querySnapshot.docs.length > 0) {
        const userCredential = await this.auth.signInWithEmailAndPassword(data.email, data.password);
        const userData = userCredential.user;
        localStorage.setItem('userDataa', userData.uid);
        return userData;
      } else {
        console.log('User not found');
        return null;
      }
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  }
  async forgotPassword(data) {
    try {
      console.log('data.email', data.email);
      await this.auth.sendPasswordResetEmail(data.email);
      console.log('Password reset email sent successfully');
    } catch (error) {
      console.error('Failed to send password reset email', error);
      throw error;
    }
  }
async clientRegister(data) {
    console.log('dataaaaaaaaaaaaaaa', data);
    const storedData = localStorage.getItem('userDataa');
    try {
        const Datas = { ...data, traineruid: storedData };
         console.log('clientsData', Datas);
        const userCredential = await this.auth.createUserWithEmailAndPassword(
          Datas.email,
          Datas.password
    );
      this.user = userCredential.user;
      const clientsData= { ...Datas, uid:this.user.uid};
      const userCollection = await this.afFirestore
        .collection('users')
        .doc(this.user.uid)
        .set(clientsData);

      console.log('Registration successful', userCollection);
      // localStorage.setItem('userDataa', this.user.uid);
      return userCollection;
    } catch (error) {
      console.error('Registration error', error);
      throw error;
    }
  }
  // async clientRegister(data) {
  //    console.log('dataaaaaaaaaaaaaaa', data);
  //    const storedData = localStorage.getItem('userDataa');
  //    console.log('userdataaaaaaaaaaaaaaaa', storedData);
  //   try {
  //      let traineruid= null;

  //      if (storedData) {
  //         traineruid = JSON.parse(storedData);
  //        console.log('userdataaaaaaaaaaaaaaaa', traineruid.toString());
  //      }
  //      // const clientsData = { ...data, uid: userData };
  //      const trainerData = { 
  //        data,'traineruid':traineruid };
  //        console.log('clientsData', data);
  //      if(trainerData){
  //      const userCredential = await this.auth.createUserWithEmailAndPassword(
  //       trainerData.data.email,
  //       trainerData.data.password
  //     ).then(async res=>{
  //       this.user = userCredential.res;
  //       const userCollection = await this.afFirestore
  //       .collection('users')
  //       .doc(this.user.uid)
  //       .set(trainerData);
  //       console.log('Registration successful', userCollection);
  //     return userCollection;
  //     })
    

     
  //      }
  //   } catch (error) {
  //     console.error('Registration error', error);
  //     throw error;
  //   }
  
  // }
  getuserdata() {
    try {
      const uid = localStorage.getItem('userDataa');
       this.userDataObservable = this.afFirestore.collection("users", ref => ref.where('uid', '==', uid)).valueChanges();
        this.userDataObservable.subscribe((userData: any[]) => {
        console.log('usersss', userData);
       return userData;
      }, (error) => {
        console.log('Error:', error);
      });
    } catch (error) {
      console.log('Error fetching user data', error);
    }
  }
  getAdminData(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      try {
        const userDataObservable = this.afFirestore.collection("Admin").valueChanges();
        userDataObservable.subscribe(
          (userData: any[]) => {
            console.log('usersss===>', userData);
            resolve(userData);
          },
          (error) => {
            console.log('Error:', error);
            reject(error);
          }
        );
      } catch (error) {
        console.log('Error fetching user data', error);
        reject(error);
      }
    });
  }
  getexercise(uid){
    try {
        const uid = localStorage.getItem('userDataa');
        this.userDataObservable = this.afFirestore.collection("users", ref => ref.where('uid', '==', uid)).valueChanges();
        this.userDataObservable.subscribe((userData: any[]) => {
        console.log('usersss', userData);
        return userData;
      },(error) => {
        console.log('Error:', error);
      });
    } catch (error) {
        console.log('Error fetching user data', error);
    }
  }
  verifyclient(email){
      // const url=`${environment.url}send-otp/${email}`;
      const url = `${this.baseUrl}?email=${email}&action=sendotp`;
      return this.http.get(url,{});
    }
    registerUser(email: string, password: string) {
      console.log('email=====>',email,password)
      const url = `${this.baseUrl}?email=${email}&action=registration&password=${password}`;
      
      
      return this.http.get(url, {});
    }
   async verifytrainerclient(uid){{
  
    const userDataToUpdate = {
        traineruid:this.traineruid,
    };
    // Update the user's Firestore document with the new data
    try {
        await this.afFirestore.collection('users').doc(uid).update(userDataToUpdate).then(res=>{
        console.log('Profile data updated successfully.');
        this.message.presentToast('Updated Successfully', 'success');
      }).catch(err=>{
        this.message.presentToast('internel issues', 'danger');
      })
      
    } catch (error) {
      console.error('Error updating profile data:', error);
    }
  }
}
async getuser(uid) {
  console.log("res===============>", uid);
  if(uid){
   const userdata=this.afFirestore.collection('users').doc(uid).valueChanges().subscribe((Res: any) => {
    console.log("UserDetail:::-->", Res);
    if(Res){
      return Res;
    }
    }, Err => {
    console.log("errrrr===>", Err);
  });
} 
}
}