import * as fromStore from './../store/'
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		public router: Router,
		private store: Store<fromStore.AppState>
	) {}


	canActivate(): Observable<boolean> {
		return this.isAuthenticated();
	}

	isAuthenticated(){
		return this.store.select(fromStore.getAuthenticated).pipe(
			tap(authenticated => {
				if(!authenticated) {
					this.router.navigateByUrl('/login');
					return;
				}
				return authenticated;
			})
		)
	}

}
