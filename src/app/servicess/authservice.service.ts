import { Injectable } from '@angular/core';
import { LoaderService } from '../servicess/loader.service';
import { MessageService } from '../servicess/message.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: any;
  uid: any;
  data: any;
  docRef: any;
  querySnapshot: any;


  constructor(private auth: AngularFireAuth, private afFirestore: AngularFirestore, private message: MessageService) {
    this.uid = localStorage.getItem('userDataa');
    console.log('this uiddddd=>', this.uid)
    this.getExercises();
    // this.getuserExercises();
    const storedData = localStorage.getItem('userDataa');
  }
  async clientRegister(data) {
    console.log('dataaaaaaaaaaaaaaa', data);

    try {
      await this.auth.createUserWithEmailAndPassword(data.email, data.password
      ).then(async res => {
        this.user = res.user;
        console.log('currect userID=====>', this.user.uid)
        const clientsData = { ...data, uid: this.user.uid };
        console.log('dataaaaaaaaaaaaaa', clientsData)
        const userCollection = await this.afFirestore
          .collection('users')
          .doc(this.user.uid)
          .set(clientsData);
        localStorage.setItem('userDataa', this.user.uid);
        console.log('Registration successful', userCollection);
        return userCollection;
      })
    } catch (error) {
      console.error('Registration error', error);
      throw error;
    }
  }
  async clientLogin(data) {
    try {
      const querySnapshot = await this.afFirestore.collection('users').ref.where('email', '==', data.email).get();
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

  storebodytrack(data) {
    this.afFirestore.collection('bodytrack').add(data).then(() => {
      console.log('Exercise data saved successfully.');
    })
      .catch((error) => {
        console.error('Error saving exercise data:', error);
      });
  }
  getClassifiedTrainerTrainerData(uid): Observable<any[]> {
    return this.afFirestore.collection('ClassifiedTrainer', ref => ref.where('uid', '==', uid))
      .valueChanges();
  }
  getexercise(uid) {
    return this.afFirestore.collection('exercises', ref => ref.where('uid', '==', uid))
      .valueChanges();
  }
  getmyexercise(uid, date) {
    return this.afFirestore.collection('exercises', ref => ref.where('uid', '==', uid).where('startDate', '==', date))
      .valueChanges();
  }
  updateExercise(uid: string, dayOfWeek: string, iscompleted: boolean) {
    const exercisesCollection = this.afFirestore.collection('exercises', ref => ref.where('uid', '==', uid));
    exercisesCollection.get().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        const exerciseData: any = doc.data();
        if ('daysOfWeek' in exerciseData) {
          const dayIndex = exerciseData.daysOfWeek.findIndex((day: any) => day.day === dayOfWeek);

          if (dayIndex !== -1) {
            exerciseData.daysOfWeek[dayIndex].iscompleted = iscompleted;
            const exerciseDoc = exercisesCollection.doc(doc.id);
            exerciseDoc.update(exerciseData)
              .then(() => {
                console.log('Data updated successfully');
              })
              .catch(error => {
                console.error('Error updating data:', error);
              });
          }
        }
      });
    });
  }

  async getuserdata() {
    console.log("res===============>", this.uid);
    if (this.uid) {
      const userdata = this.afFirestore.collection('users').doc(this.uid).valueChanges().subscribe((Res: any) => {
        console.log("UserDetail:::-->", Res);
        if (Res) {
          return Res;
        }
      }, Err => {
        console.log("errrrr===>", Err);
      });
    }
  }
  getExercises() {
    this.afFirestore.collection('exercises').snapshotChanges().subscribe((res: any) => {
      res.forEach(doc => {
        console.log(doc.payload.doc.id);
      });
    });
  }



  getuserExercises(date) {

    return this.afFirestore.collection('exercises', (ref) =>
      ref.where('startDate', '==', date)
    ).valueChanges();
  }
  async addResult(uid: any, userData: any, startDate: any, exerciseName: any): Promise<void> {
    console.log('helllo user', userData, uid, startDate)
    const ResultExcess = {
      exercises: userData,
    };

    try {
      const collectionRef = this.afFirestore.collection('exercises').ref;
      const querySnapshot = await collectionRef
        .where('uid', '==', uid)
        .where('startDate', '==', startDate)
        .where('exerciseName', '==', exerciseName)
        .get();
      querySnapshot.forEach(async (doc) => {
        this.docRef = doc.ref;
        console.log('docRef====>', this.docRef);
        await this.docRef.update(ResultExcess);
      });
      console.log('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
  async taskdone(uid: any, excerciseDone: boolean, startDate: any): Promise<void> {
    console.log('helllo user', excerciseDone, uid, startDate)
    const iscompleted = {
      exercisesdone: excerciseDone,
    };
    try {
      const collectionRef = this.afFirestore.collection('exercises').ref;
      const querySnapshot = await collectionRef
        .where('uid', '==', uid)
        .where('startDate', '==', startDate)
        .get();

      querySnapshot.forEach(async (doc) => {
        this.docRef = doc.ref;
        console.log('docRef====>', this.docRef);
        await this.docRef.update(iscompleted);
      });
      console.log('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
}