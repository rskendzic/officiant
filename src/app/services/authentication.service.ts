import { from } from 'rxjs';
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

  doRegister({email, password}) {
    from(firebase
    .auth()
    .createUserAndRetrieveDataWithEmailAndPassword(email, password))
  }
}
