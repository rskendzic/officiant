import { AngularFirestore } from 'angularfire2/firestore';
import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';

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

	signIn({ email, password }) {
		return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
			.pipe(
				map(
					({ user }) => {
						const { uid } = user;
						return from(this.afs.doc(`users/${uid}`).ref.get())
					}),
					switchMap(snapshot => snapshot), // unwrap the observable
					map((snapshot: firebase.firestore.DocumentSnapshot) => snapshot.data())

				)
	}

	signUp(userData) {
		return from(this.afAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password));
	}

	createUser(userData) {
		return this.signUp(userData)
			.pipe(
				map(({ user }: firebase.auth.UserCredential) => {
					const { uid } = user;
					return from(this.afs.doc(`users/${uid}`).set({ ...userData, uid }))
				}),
				map(() => {
					const { uid } = this.afAuth.auth.currentUser;
					return from(this.afs.doc(`users/${uid}`).ref.get())
				}),
				switchMap(snapshot => snapshot),
				map(snapshot => snapshot.data()),
			)
	}

	getIdToken() {
		return from(
			this.afAuth.auth.currentUser.getIdToken()
		);
	}
}
