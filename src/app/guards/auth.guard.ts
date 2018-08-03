import { AuthenticationService } from './../authentication/services/authentication.service';
import * as fromStore from './../store/'
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		public router: Router,
		private store: Store<fromStore.AppState>,
		private authService: AuthenticationService
	) {}


	canActivate(): Observable<boolean> {
		return this.isAuthenticated();
	}

	isAuthenticated(){
		return this.store.select(fromStore.getAuthenticated)
		.pipe(
			mergeMap(authenticated => {
				if(authenticated) return of(authenticated)
				return this.checkApiAuthentication()
			}),
			map(storeOrApiAuth => {

				if(storeOrApiAuth) return true;

				this.router.navigate(['/login'])
				return false;
			})
		)
	}

	checkApiAuthentication() {
		return this.authService.checkAuthState()
		.pipe(
			map(user => !!user),
			catchError(() => of(false))
		);
	}

}
