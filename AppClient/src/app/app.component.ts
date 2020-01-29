import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //,styleUrls: ['./app.component.=scss']
})
export class AppComponent {
  

  constructor(public afAuth: AngularFireAuth) {
    var firebaseConfig = {
      apiKey: "AIzaSyAv_7Km39XNL6N_vcwt71hPFdhQeKEoVe0",
      authDomain: "taskim-2c55c.firebaseapp.com",
      databaseURL: "https://taskim-2c55c.firebaseio.com",
      projectId: "taskim-2c55c",
      storageBucket: "taskim-2c55c.appspot.com",
      messagingSenderId: "653241814179",
      appId: "1:653241814179:web:37a19c5dfe094b7b1c0316"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp({});
   }
    
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
 
}
