import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(function(result){
      console.log(result);
      console.log("super")      
    }).catch(function(err){
      console.log(err);
      console.log("nul")
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
 
}
