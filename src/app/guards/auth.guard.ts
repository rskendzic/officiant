import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { AuthenticationService } from '../authentication/services/authentication.service';
import * as fromStore from '../store';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		public router: Router,
		private store: Store<fromStore.AppState>,
		private authService: AuthenticationService
	) {}

	ALLOWED_ROLES = ['ADMIN'];

	canActivate(): Observable<boolean> {
		return this.isAuthenticated();
	}

	isAuthenticated() {
		return this.store.select(fromStore.getUserRole).pipe(
			mergeMap(userRole => {
				if (this.ALLOWED_ROLES.includes(userRole)) { return of(true); }
				return this.checkApiAuthentication();
			}),
			map(storeOrApiAuth => {
				if (storeOrApiAuth) { return true; }

				this.router.navigate(['/waiter']);
				return false;
			})
		);
	}

	checkApiAuthentication() {
		return this.store.select(fromStore.getToken).pipe(
			switchMap(token => this.authService.checkUserRole(token, 'ADMIN')),
			map(user => !!user),
			catchError(() => {
				this.router.navigate(['/waiter']);
				return of(false);
			})
		);
	}
}
