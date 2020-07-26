import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class UserAdminService {
	constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {}

	getUsers() {
		return this.afs.collection('users').valueChanges();
	}

	deleteUser(userId: string) {
		return from(this.afs.collection('users').doc(userId).delete()).pipe(
			tap(() => {
				//TODO delete from fire auth
			}),
			catchError(() => of([]))
		);
	}
}
