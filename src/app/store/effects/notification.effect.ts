import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { map, tap, } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions';
import * as fromNotificationAction from '../actions/notification.action';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';


@Injectable()
export class NotificationEffects {
	constructor(private actions$: Actions, private matSnackBar: MatSnackBar, private router: Router) {
  }

  @Effect()
  signUpFail: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
		.ofType(fromAuthAction.AuthActionTypes.SIGN_IN_FAIL, fromAuthAction.AuthActionTypes.SIGN_UP_FAIL)
    .pipe(
      map((action: fromAuthAction.SignUpFail) => action.payload),
      map((errorData) => {
        return new fromNotificationAction.ShowSnackbar({
          message: errorData.message,
          config: fromNotificationAction.NotificationConfigTypes.ERROR_SNACKBAR
        })
      }),
	)

	@Effect()
	signUpSuccess: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
	.ofType(fromAuthAction.AuthActionTypes.SIGN_UP_SUCCESS)
	.pipe(
		map((action: fromAuthAction.SignUpSuccess) => action.payload),
		tap(() => this.router.navigate(['/'])),
		map((successData) => new fromNotificationAction.ShowSnackbar({
			message: `Created user with email: ${successData.email}`,
			config: fromNotificationAction.NotificationConfigTypes.SUCCESS_SNACKBAR
		}))
	)

	@Effect()
	signInSuccess: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
		.ofType(fromAuthAction.AuthActionTypes.SIGN_IN_SUCCESS)
		.pipe(
			tap(() => this.router.navigate(['/menu'])),
			map((action: fromAuthAction.SignUpSuccess) => action.payload),
			map((successData) => new fromNotificationAction.ShowSnackbar({
				message: `Logged user with email: ${successData.email}`,
				config: fromNotificationAction.NotificationConfigTypes.SUCCESS_SNACKBAR
			}))
		)

  @Effect()
  showSnackbar: Observable<fromNotificationAction.HideSnackbar> = this.actions$
    .ofType(fromNotificationAction.NotificationActionTypes.SHOW_SNACKBAR)
    .pipe(
      map((action: fromNotificationAction.ShowSnackbar) => action.payload),
      tap(payload => this.matSnackBar.open(payload.message, payload.action, payload.config)),
      map(() => new fromNotificationAction.HideSnackbar())
    );
}
