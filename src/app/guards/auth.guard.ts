import { AuthenticationService } from '../authentication/services/authentication.service';
import * as fromStore from '../store'
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { tap, mergeMap, map, catchError, switchMap } from 'rxjs/operators';

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

	isAuthenticated(){
		return this.store.select(fromStore.getUserRole)
			.pipe(
				mergeMap(userRole => {
				if (this.ALLOWED_ROLES.includes(userRole)) return of(true)
				return this.checkApiAuthentication()
			}),
			map(storeOrApiAuth => {

				if(storeOrApiAuth) return true;

				this.router.navigate(['/waiter'])
				return false;
			})
		)
	}

	checkApiAuthentication() {
		return this.store.select(fromStore.getToken)
		.pipe(
			switchMap(token => this.authService.checkUserRole(token, 'ADMIN')),
			map(user => !!user),
			catchError(() => {
				this.router.navigate(['/waiter'])
				return of(false)
			})
		);
	}

}
