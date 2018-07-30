import { User } from './../actions/auth.actions';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { Observable, of} from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthenticationService) {
  }

  @Effect()
  signUp: Observable<fromAuthAction.AuthActionsUnion> = this.actions$
    .ofType(fromAuthAction.AuthActionTypes.SIGN_UP)
    .pipe(
      map((action: fromAuthAction.SignUp) => action.payload),
			exhaustMap((authData: User) =>
				this.authService.createUser(authData)
				.pipe(
					map((createdUser) => {
						const {uid,email}= createdUser
						return new fromAuthAction.SignUpSuccess({ uid, email})
					}),
          catchError((errorData) => of(new fromAuthAction.SignUpFail(errorData)))
        )
      ),
    )
}
