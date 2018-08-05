import { AuthenticationService } from '../../authentication/services/authentication.service';
import * as fromAppStore from '../../store'
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class WaiterGuard implements CanActivate {
	constructor(
		public router: Router,
		private store: Store<fromAppStore.AppState>,
		private authService: AuthenticationService
	) { }

	ALLOWED_ROLES = ['WAITER', 'ADMIN'];


	canActivate(): Observable<boolean> {
		return this.isAuthenticated();
	}

	isAuthenticated() {
		return this.store.select(fromAppStore.getUserRole)
			.pipe(
				mergeMap(userRole => {
				if (this.ALLOWED_ROLES.includes(userRole)) return of(true)
					return this.checkApiAuthentication()
				}),
			map(storeOrApiAuth => {

				if (storeOrApiAuth) return true;

				this.router.navigate(['/login'])
				return false;
			})
			)
	}

	checkApiAuthentication() {
		return this.store.select(fromAppStore.getToken)
		.pipe(
			switchMap(token => this.authService.checkUserRole(token, 'WAITER')),
			catchError(() => {
				this.router.navigate(['/menu'])
				return of(false)
			})
		)
	}

}
