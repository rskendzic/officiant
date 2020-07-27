import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {}

	logOut() {
		return of(this.afAuth.signOut);
	}

	signIn({ email, password }) {
		return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
			switchMap(({ user }) => {
				const { uid } = user;
				return from(this.afs.doc(`users/${uid}`).ref.get());
			}),
			map((snapshot: firebase.firestore.DocumentSnapshot) => snapshot.data())
		);
	}

	signUp(userData) {
		return from(this.afAuth.createUserWithEmailAndPassword(userData.email, userData.password));
	}

	createUser(userData) {
		return this.signUp(userData).pipe(
			switchMap(({ user }: firebase.auth.UserCredential) => {
				const { uid } = user;
				return from(this.afs.doc(`users/${uid}`).ref.get());
			}),
			map((snapshot) => snapshot.data())
		);
	}

	checkAuthState() {
		return this.afAuth.authState;
	}

	checkUserRole(uid, role) {
		return from(this.afs.doc(`users/${uid}`).ref.get()).pipe(
			map((userSnapshot) => userSnapshot.data()),
			map((documentSnapshot) => documentSnapshot.role === role)
		);
	}

	getIdToken() {
		return from(this.afAuth.currentUser);
	}
}
