import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserAdminService {
	constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private http: HttpClient) {}

	getUsers() {
		return this.afs.collection('users').valueChanges();
	}

	// deleteUser(userId: string) {
	// 	return from(this.afs.collection('users').doc(userId).delete()).pipe(
	// 		tap(() => {
	// 			this.http.post(this.DELETE_FUNCTION_URL, { userId });
	// 		}),
	// 		catchError(() => of([]))
	// 	);
	// }
}
