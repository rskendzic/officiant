import { AngularFirestore } from 'angularfire2/firestore';
import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map, switchMap } from '../../../../node_modules/rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { }

	doGoogleLogin() {
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		from(this.afAuth.auth.signInWithPopup(provider))
	}

	signUp(userData) {
		return from(this.afAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password));
	}

	createUser(userData) {
		return this.signUp(userData)
		.pipe(
				map((userCredential: firebase.auth.UserCredential) =>
					from(this.afs.doc(`users/${userCredential.user.uid}`).set(userData))
				),
				map(() => this.afAuth.auth.currentUser)
	)
	}

	getIdToken() {
		return from(
			this.afAuth.auth.currentUser.getIdToken()
		);
	}
}
