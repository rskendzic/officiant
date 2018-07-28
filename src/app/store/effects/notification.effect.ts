import { MatSnackBar } from '@angular/material';
import { map, exhaustMap, catchError, switchMap, tap, delay } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions';
import * as fromNotificationAction from '../actions/notification.action';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of, from, empty } from 'rxjs';

@Injectable()
export class NotificationEffects {
  constructor(private actions$: Actions, private matSnackBar: MatSnackBar) {
  }

  @Effect()
  signUpFail: Observable<fromNotificationAction.ShowSnackbar> = this.actions$
    .ofType(fromAuthAction.AuthActionTypes.SIGN_UP_FAIL)
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
  showSnackbar: Observable<fromNotificationAction.HideSnackbar> = this.actions$
    .ofType(fromNotificationAction.NotificationActionTypes.SHOW_SNACKBAR)
    .pipe(
      map((action: fromNotificationAction.ShowSnackbar) => action.payload),
      tap(payload => this.matSnackBar.open(payload.message, payload.action, payload.config)),
      map(() => new fromNotificationAction.HideSnackbar())
    );
}
