import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { map, tap, } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions';
import * as fromMenuAction from '../../menu/store/actions/';
import * as fromNotificationAction from '../actions/notification.action';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

const FAIL_TYPES = [
	fromAuthAction.AuthActionTypes.SIGN_IN_FAIL,
	fromAuthAction.AuthActionTypes.SIGN_UP_FAIL,
	fromMenuAction.DrinkActionsTypes.GET_DRINKS_FAIL,
];

const SUCCESS_TYPES = [
	fromAuthAction.AuthActionTypes.SIGN_IN_SUCCESS,
	fromAuthAction.AuthActionTypes.SIGN_UP_SUCCESS,
]

const ENTITIES_SUCCESS_TYPES = [
	fromMenuAction.DrinkActionsTypes.UPDATE_DRINK_SUCCESS,
	fromMenuAction.DrinkActionsTypes.CREATE_DRINK_SUCCESS,
]

@Injectable()
export class NotificationEffects {


	constructor(private actions$: Actions, private matSnackBar: MatSnackBar, private router: Router) {
  }

  @Effect()
  signUpFail: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
		.ofType(...FAIL_TYPES)
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
		.ofType(...SUCCESS_TYPES)
	.pipe(
		map((action: fromAuthAction.SignUpSuccess) => action.payload),
		tap(() => this.router.navigate(['/'])),
		map((successData) => new fromNotificationAction.ShowSnackbar({
			message: `User with email: ${successData.email} is authenticated!`,
			config: fromNotificationAction.NotificationConfigTypes.SUCCESS_SNACKBAR
		}))
	)

	@Effect()
	upsertDrink: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
		.ofType(...ENTITIES_SUCCESS_TYPES)
		.pipe(
			map((action: fromMenuAction.UpdateDrinkSuccess) => action.payload),
			tap(() => this.router.navigate(['/'])),
			map((successData) => new fromNotificationAction.ShowSnackbar({
				message: `${successData.name} successfully stored!`,
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
