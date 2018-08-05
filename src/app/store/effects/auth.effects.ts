import { Router } from '@angular/router';
import { User } from '../actions/auth.actions';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { Observable, of} from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
		private actions$: Actions,
		private router: Router,
		private authService: AuthenticationService) {
  }

  @Effect()
  signUp: Observable<fromAuthAction.AuthActionsUnion> = this.actions$
    .ofType(fromAuthAction.AuthActionTypes.SIGN_UP)
    .pipe(
      map((action: fromAuthAction.SignUp) => action.payload),
			exhaustMap((authData: User) =>
				this.authService.createUser(authData)
				.pipe(
					map((userSnapshot) => {
					const { uid, email, role } = userSnapshot
					return new fromAuthAction.SignUpSuccess({ uid, email, role})
					}),
          catchError((errorData) => of(new fromAuthAction.SignUpFail(errorData)))
        )
      ),
		)

	@Effect()
	signIn: Observable<fromAuthAction.AuthActionsUnion> = this.actions$
		.ofType(fromAuthAction.AuthActionTypes.SIGN_IN)
		.pipe(
			map((action: fromAuthAction.SignIn) => action.payload),
			exhaustMap((authData: User) =>
				this.authService.signIn(authData)
					.pipe(
						map((userSnapshot) => {
						const user = userSnapshot;
						return new fromAuthAction.SignInSuccess({...user})
						}),
						catchError((errorData) => of(new fromAuthAction.SignInFail(errorData)))
					)
			),
	)

	@Effect()
	logOut: Observable<fromAuthAction.AuthActionsUnion> = this.actions$
		.ofType(fromAuthAction.AuthActionTypes.LOG_OUT)
		.pipe(
			exhaustMap(() => this.authService.logOut()),
			tap(()=> this.router.navigate(['/login'])),
			map(() => new fromAuthAction.LogOutSuccess()),
			catchError((errorData) => of(new fromAuthAction.LogOutFail(errorData)))
	)

}
