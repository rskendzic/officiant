import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { Observable, of, from, empty } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthenticationService) {
  }

  @Effect()
  signUp: Observable<fromAuthAction.AuthActionsUnion> = this.actions$
    .ofType(fromAuthAction.AuthActionTypes.SIGN_UP)
    .pipe(
      map((action: fromAuthAction.SignUp) => action.payload),
      exhaustMap((authData: {email: string, password: string}) =>
        this.authService.signUp(authData).pipe(
          map((token)=>new fromAuthAction.SignUpSuccess(token)),
          catchError((errorData) => of(new fromAuthAction.SignUpFail(errorData)))
        )
      ),
    )
}
