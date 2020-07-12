import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap, } from 'rxjs/operators';

import * as fromMenuAction from '../../menu/store/actions';
import * as fromAuthAction from '../actions/auth.actions';
import * as fromNotificationAction from '../actions/notification.action';

const FAIL_TYPES = [
	fromAuthAction.AuthActionTypes.SIGN_IN_FAIL,
	fromAuthAction.AuthActionTypes.SIGN_UP_FAIL,
	fromMenuAction.DrinkActionsTypes.GET_DRINKS_FAIL,
];

const SUCCESS_TYPES = [
	fromAuthAction.AuthActionTypes.SIGN_IN_SUCCESS,
	fromAuthAction.AuthActionTypes.SIGN_UP_SUCCESS,
];

const ENTITIES_SUCCESS_TYPES = [
	fromMenuAction.DrinkActionsTypes.UPDATE_DRINK_SUCCESS,
	fromMenuAction.DrinkActionsTypes.CREATE_DRINK_SUCCESS,
];

@Injectable()
export class NotificationEffects {


	constructor(private actions$: Actions, private matSnackBar: MatSnackBar, private router: Router) {
	}

	@Effect()
	signUpFail: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
		.pipe(
		ofType(...FAIL_TYPES),
			map((action: fromAuthAction.SignUpFail) => action.payload),
			map((errorData) => {
				return new fromNotificationAction.ShowSnackbar({
					message: errorData.message,
					config: fromNotificationAction.NotificationConfigTypes.ERROR_SNACKBAR
				});
			}),
	);

	@Effect()
	signUpSuccess: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
	.pipe(
		ofType(...SUCCESS_TYPES),
		map((action: fromAuthAction.SignUpSuccess) => action.payload),
		tap(() => this.router.navigate(['/'])),
		map((successData) => new fromNotificationAction.ShowSnackbar({
			message: `User with email: ${successData.email} is authenticated!`,
			config: fromNotificationAction.NotificationConfigTypes.SUCCESS_SNACKBAR
		}))
	);

	@Effect()
	upsertDrinkSuccess: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
		.pipe(
		ofType(...ENTITIES_SUCCESS_TYPES),
			map((action: fromMenuAction.UpdateDrinkSuccess) => action.payload),
			map((successData) => new fromNotificationAction.ShowSnackbar({
				message: `${successData.name} successfully stored!`,
				config: fromNotificationAction.NotificationConfigTypes.SUCCESS_SNACKBAR
			}))
		);

	@Effect()
	deleteDrinkSuccess: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
		.pipe(
		ofType(fromMenuAction.DrinkActionsTypes.DELETE_DRINK_SUCCESS),
			map((action: fromMenuAction.DeleteDrinkSuccess) => action.payload),
			map((successData) => new fromNotificationAction.ShowSnackbar({
				message: `${successData.name} successfully deleted!`,
				config: fromNotificationAction.NotificationConfigTypes.INFO_SNACKBAR
			}))
		);

	@Effect()
	showSnackbar: Observable<fromNotificationAction.HideSnackbar> = this.actions$
		.pipe(
		ofType(fromNotificationAction.NotificationActionTypes.SHOW_SNACKBAR),
			map((action: fromNotificationAction.ShowSnackbar) => action.payload),
			tap(payload => this.matSnackBar.open(payload.message, payload.action, payload.config)),
			map(() => new fromNotificationAction.HideSnackbar())
		);
}
