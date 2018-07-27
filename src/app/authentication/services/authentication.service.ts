import { catchError } from 'rxjs/operators';
import { from, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) { }

  doGoogleLogin() {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      from(this.afAuth.auth.signInWithPopup(provider))
  }

  signUp({email, password}) {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  getIdToken(){
    return from(
      this.afAuth.auth.currentUser.getIdToken()
    );
  }
}
