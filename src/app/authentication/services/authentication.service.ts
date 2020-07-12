import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import {from, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
	}

	logOut() {
		return of(this.afAuth.auth.signOut());
	}

	signIn({ email, password }) {
		return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
			.pipe(
				map(
					({ user }) => {
						const { uid } = user;
						return from(this.afs.doc(`users/${uid}`).ref.get());
					}),
				switchMap(snapshot => snapshot), // unwrap the observable
				map((snapshot: firebase.firestore.DocumentSnapshot) => snapshot.data())

			);
	}

	signUp(userData) {
		return from(this.afAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password));
	}

	createUser(userData) {
		return this.signUp(userData)
			.pipe(
				map(({ user }: firebase.auth.UserCredential) => {
					const { uid } = user;
					return from(this.afs.doc(`users/${uid}`).set({ ...userData, uid }));
				}),
				map(() => {
					const { uid } = this.afAuth.auth.currentUser;
					return from(this.afs.doc(`users/${uid}`).ref.get());
				}),
				switchMap(snapshot => snapshot),
				map(snapshot => snapshot.data()),
			);
	}

	checkAuthState() {
		return this.afAuth.authState;
	}

	checkUserRole(uid, role) {
		return from(this.afs.doc(`users/${uid}`).ref.get())
			.pipe(
				map(userSnapshot => userSnapshot.data()),
				map(documentSnapshot => documentSnapshot.role === role)
			);
	}

	getIdToken() {
		return from(
			this.afAuth.auth.currentUser.getIdToken()
		);
	}
}
